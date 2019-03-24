import { observable, computed, action, runInAction} from "mobx"
import Log from "./log";
import Details from "./details";
import MemoryProfiler from "./memory_profiler";
import Queries from "./queries";
import YoskService from "../../services/yosk_service";

export const YOSK_STATUS = {
    COMPLETED: 'completed',
    IN_PROGRESS:  'in-progress',
    FAILED:  'failed'
};

export default class Yosk {
    @observable details;
    @observable log;
    @observable memoryProfiler;
    @observable queries;
    @observable status;

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

    @action
    updateStatus = (resp) => {
        const status = resp.data.status;

        if (status === YOSK_STATUS.COMPLETED) {
            clearInterval(this.interval);
            this.initSomeFlowFetchingEverything();
        }
        if (status === YOSK_STATUS.FAILED) {
            clearInterval(this.interval);
        }

        this.status = status;
    }

    initSomeFlowFetchingEverything() {

    }
}
