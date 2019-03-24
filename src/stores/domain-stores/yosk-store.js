import { observable, action} from "mobx"
import Yosk from "../domain-objects/yosk";

export default class YoskStore {
    @observable yosks = []

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @action
    addYosk(yosk) {
        const newYosk = new Yosk(yosk);
        this.yosks.push(newYosk);
    }
}
