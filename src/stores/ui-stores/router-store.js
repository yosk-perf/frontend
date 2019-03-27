import {startRouter, Route, RouterStore} from 'mobx-router';
import React from 'react';
import YoskContainer from "../../components/containers/yosk-container";

export const routes = {
    home: new Route({
        path: '/',
        component: <YoskContainer/>,
        onEnter: (route, params, store) => {
            store.rootStore.yosksStore.init();
            store.rootStore.routesStore.init();
        }
    }),
    yosk: new Route({
        path: '/:id',
        component: <YoskContainer/>,
        onEnter: (route, params, store) => {
            const executionId = params.id;
            store.rootStore.yosksStore.initYosk(executionId);
        }
    })
};

export default class RoutersStore {
    router;
    rootStore;

    constructor(rootStore) {
        this.router = new RouterStore();
        this.rootStore = rootStore;

        startRouter(routes, this);
    }
}
