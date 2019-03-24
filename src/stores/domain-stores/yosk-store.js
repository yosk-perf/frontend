import { observable, action, computed} from "mobx"
import Yosk from "../domain-objects/yosk";

export default class YoskStore {
    @observable yosks = []

    @action
    addYosk(yosk) {
        const newYosk = new Yosk(yosk);
        this.yosks.push(newYosk);
    }

    @computed
    getYosks() {
        return this.yosks;
    }
}
