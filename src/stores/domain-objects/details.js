import { observable, computed, action} from "mobx"

export default class Details {
    @observable totalDuration;
    @observable instrumentation;

    constructor(details) {
        this.setDetails(details.totalDuration, details.instrumentation);
    }

    @action
    setDetails(totalDuration, instrumentation) {
        this.totalDuration = totalDuration;
        this.instrumentation = instrumentation;
    }

    @computed
    getDetails() {
        return {
            totalDuration: this.totalDuration,
            instrumentation: this.instrumentation
        }
    }
}
