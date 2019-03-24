import { observable, action, computed} from "mobx"
import Yosk from "../domain-objects/yosk";

export default class YoskStore {
    @observable yosk;

    @action
    addYosk(yoskRequest) {
        const newYosk = new Yosk(yoskRequest);
        this.yosk = newYosk;
    }

    @computed
    get getYosk() {
        return this.yosk;
    }
}
