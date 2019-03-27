import {observable} from "mobx"
import Log from "./log";
import Details from "./details";
import MemoryProfiler from "./memory_profiler";
import Query from "./query";
import YoskService from "../../services/yosk_service";
import Response from "./response";
import Request from "./request";
import {notification} from 'antd';

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
    @observable request;
    @observable executionId = null;

    interval = null;

    constructor(request = {}) {
        if (request.executionId) {
            this.setId(request.executionId);
            this.getRequestData();
            this.startPolling();
        }
    }

    setId(id) {
        this.executionId = id;
    }

    startPolling() {
        this.interval = setInterval(() => {
            YoskService.getExecutionStatus(this.executionId).then(this.updateStatus);
            YoskService.getlogs(this.executionId).then(this.setLogs);
            YoskService.getQueries(this.executionId).then(this.setQuries);
            this.startPolling();
        }, 2500);
    }

    updateStatus = (resp) => {
        const status = resp.data.status;

        if (status === YOSK_STATUS.COMPLETED) {
            clearInterval(this.interval);
            this.getResults();
        }
        if (status === YOSK_STATUS.FAILED) {
            clearInterval(this.interval);
            notification.error({
                message: 'Error',
                placement: 'bottomRight',
                description: resp.data.error_message,
                duration: 99999999
            });
            setTimeout(() => {
                window.location.reload();
            }, 5000);
        }

        this.status = status;
    }

    getRequestData = () => {
        YoskService.getRequest(this.executionId).then(this.setRequest);
    };

    setRequest = (resp) => {
        this.request = new Request(resp.data);
    };

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
        this.logs = resp.data.map(log => new Log(log)).sort((a, b) => {
            return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        });
    }

    setQuries = (resp) => {
        this.queries = resp.data.map(query => new Query(query));
    }

    async getResults() {
        YoskService.getDetails(this.executionId).then(this.setDetails);
        YoskService.getMemoryProfiler(this.executionId).then(this.setMemoryProfiler);
        YoskService.getResponse(this.executionId).then(this.setResponse);
    }
}
