import { observable, action, computed} from "mobx"
import Yosk from "../domain-objects/yosk";

export default class YoskStore {
    @observable yosks = []

    @action
    addYosk(yoskRequest) {
        const newYosk = new Yosk(yoskRequest);
        this.yosks.push(newYosk);
    }

    @computed
    get getYosks() {
        return this.yosks;
    }
}
