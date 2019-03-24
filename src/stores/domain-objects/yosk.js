import { observable, computed, action, runInAction} from "mobx"
import Log from "./log";
import Details from "./details";
import MemoryProfiler from "./memory_profiler";
import Queries from "./queries";
import YoskService from "../../services/yosk_service";
import Response from "./response";

export const YOSK_STATUS = {
    COMPLETED: 'completed',
    IN_PROGRESS:  'in-progress',
    FAILED:  'failed'
};

export default class Yosk {
    @observable details;
    @observable logs = [];
    @observable memoryProfiler;
    @observable queries;
    @observable status;
    @observable response;

    executionId = null;
    interval = null;
    request = {};

    constructor(request) {
      this.request = request;
      this.executeYosk(request);
    }

    async executeYosk(request) {
        const response = await YoskService.execute(request);

        this.setId(response.data.execution_id);
        this.interval = setInterval(() => {
            this.startPolling();
        }, 1000);
    }

    setId(id) {
        this.executionId = id;
    }

    startPolling() {
        YoskService.getExecutionStatus(this.executionId).then(this.updateStatus);
    }

    updateStatus = (resp) => {
        const status = resp.data.status;

        if (status === YOSK_STATUS.COMPLETED) {
            clearInterval(this.interval);
            this.getResults();
        }
        if (status === YOSK_STATUS.FAILED) {
            clearInterval(this.interval);
        }

        this.status = status;
    }

    setDetails = (resp) => {
        this.details = new Details(resp.data);
    }

    setResponse = (resp) => {
        this.response = new Response(resp.data);
    }

    setLogs = (resp) => {
        this.logs = resp.data.map(log => new Log(log));
    }

    async getResults() {
        YoskService.getDetails(this.executionId).then(this.setDetails);
        YoskService.getResponse(this.executionId).then(this.setResponse);
        YoskService.getlogs(this.executionId).then(this.setLogs);
    }
}
