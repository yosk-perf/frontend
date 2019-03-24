import { observable, computed, action} from "mobx"

export default class Queries {
    @observable queries = [];

    constructor(queries) {
        this.setQueries(queries);
    }

    @action
    setQueries(queries) {
        this.text = queries;
    }

    @computed
    get getQueries() {
        return this.queries;
    }
}
