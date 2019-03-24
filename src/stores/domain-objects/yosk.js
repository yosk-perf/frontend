import { observable, computed, action} from "mobx"
import Log from "./log";
import Details from "./details";
import MemoryProfiler from "./memory_profiler";
import Queries from "./queries";


export default class Yosk {
    @observable details;
    @observable log;
    @observable memoryProfiler;
    @observable queries;
    @observable status;

    executionId = null;

    constructor(details, log, memoryProfiler, queries) {
        this.setYosk({
            details,
            log,
            memoryProfiler,
            queries
        });
    }

    @action
    setYosk(yosk) {
        this.log = new Log(yosk.log);
        this.details = new Details(yosk.details);
        this.memoryProfiler = new MemoryProfiler(yosk.memoryProfiler);
        this.queries = new Queries(yosk.queries);
    }

    @computed
    get getYosk() {
        return {
            log: this.log,
            details: this.details,
            memoryProfiler: this.memoryProfiler,
            queryies: this.queries
        };
    }
}
