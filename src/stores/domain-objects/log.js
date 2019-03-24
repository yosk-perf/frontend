import { observable, computed, action} from "mobx"

export default class Log {
    log;

    constructor(log) {
        this.log = log;
    }
}
