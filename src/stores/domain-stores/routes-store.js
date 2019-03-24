import { observable, action, computed} from "mobx"
import Route from "../domain-objects/route";
import RoutesService from "../../services/routes_service";

export default class RoutesStore {
    @observable routes = []
    @observable isLoading = true;

    constructor() {
        this.init();
    }

    async init() {
        const response = await RoutesService.get();
        response.data.map((route) => {this.addRoute(route)});
        this.setLoaded();
    }

    @action
    setLoaded() {
        this.isLoading = true;
    }

    @action
    addRoute(route) {
        const newRoute = new Route(route);
        this.routes.push(newRoute);
    }

    @computed
    get getRoutes() {
        return this.routes;
    }
}