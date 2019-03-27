import YosksStore from './domain-stores/yosk-store';
import RoutesStore from "./domain-stores/routes-store";
import RoutersStore from "./ui-stores/router-store";

class RootStore {
    constructor() {
        this.yosksStore = new YosksStore();
        this.routesStore = new RoutesStore();
        this.router = new RoutersStore(this.yosksStore);
        console.log(this, 'mobx store inited!');
    }
}


export default new RootStore();
