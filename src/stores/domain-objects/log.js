import { observable, computed, action} from "mobx"

export default class Log {
    @observable log;

    constructor(log) {
        this.setLog(log);
    }

    @action
    setLog(log) {
        this.log = log;
    }

    @computed
    getLog() {
        return this.log;
    }
}
