import {observable, computed, action, runInAction} from "mobx"
import Log from "./log";
import Details from "./details";
import MemoryProfiler from "./memory_profiler";
import Query from "./query";
import YoskService from "../../services/yosk_service";
import Response from "./response";

export const YOSK_STATUS = {
    COMPLETED: 'completed',
    IN_PROGRESS: 'in-progress',
    FAILED: 'failed'
};

export default class Yosk {
    @observable details;
    @observable logs = [];
    @observable memoryProfiler;
    @observable queries = [];
    @observable status;
    @observable response;
    @observable controller;
    @observable userId;
    @observable action;

    executionId = null;
    interval = null;

    constructor(request) {
        this.executeYosk(request);
        this.userId = request.user_id;
        this.controller = request.request_controller;
        this.action = request.request_action;
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

    setMemoryProfiler = (resp) => {
        this.memoryProfiler = new MemoryProfiler(resp.data);
    }

    setResponse = (resp) => {
        this.response = new Response(resp.data);
    }

    setLogs = (resp) => {
        this.logs = resp.data.map(log => new Log(log));
    }

    setQuries = (resp) => {
        this.queries = resp.data.map(query => new Query(query));
    }

    async getResults() {
        YoskService.getDetails(this.executionId).then(this.setDetails);
        YoskService.getMemoryProfiler(this.executionId).then(this.setMemoryProfiler);
        YoskService.getResponse(this.executionId).then(this.setResponse);
        YoskService.getlogs(this.executionId).then(this.setLogs);
        YoskService.getQueries(this.executionId).then(this.setQuries);
    }
}
