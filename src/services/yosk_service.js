import axios from 'axios';
import GlobalConfig from '../config/global-config';

export default class YoskService {
    static execute(yoskData) {
        return axios.post(`${GlobalConfig.API_URL}/execute`, yoskData);
    }

    static getExecutionStatus(executionId) {
        return axios.get(`${GlobalConfig.API_URL}/${executionId}/status`);
    }

    static getDetails(executionId) {
        return axios.get(`${GlobalConfig.API_URL}/${executionId}/details`);
    }

    static getResponse(executionId) {
        return axios.get(`${GlobalConfig.API_URL}/${executionId}/response`);
    }

    static getlogs(executionId) {
        return axios.get(`${GlobalConfig.API_URL}/${executionId}/logs`);
    }

    static getMemoryProfiler(executionId) {
        return axios.get(`${GlobalConfig.API_URL}/${executionId}/memory_profiler`);
    }

    static getQueries(executionId) {
        return axios.get(`${GlobalConfig.API_URL}/${executionId}/queries`);
    }
}
