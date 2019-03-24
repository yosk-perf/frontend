import YosksStore from './domain-stores/yosk-store';
import RoutesService from '../services/routes_service';
import RoutesStore from "./domain-stores/routes-store";

class RootStore {
    constructor() {
        this.yosksStore = new YosksStore();
        this.routesStore = new RoutesStore();
        console.log(this, 'mobx store inited!');
    }
}


export default new RootStore();
