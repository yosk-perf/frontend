import { observable, computed, action} from "mobx"

export default class MemoryProfiler {
    @observable text;

    constructor(text) {
        this.setText(text);
    }

    @action
    getText(text) {
        this.text = text;
    }

    @computed
    get setText() {
        return this.text;
    }
}