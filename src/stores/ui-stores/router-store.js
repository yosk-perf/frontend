import {startRouter, Route, RouterStore} from 'mobx-router';
import React from 'react';
import YoskContainer from "../../components/containers/yosk-container";

export default class RoutersStore {
    router;
    yosksStore;

    constructor(yosksStore) {
        this.router = new RouterStore();
        this.yosksStore = yosksStore;
        startRouter({
            home: new Route({
                path: '/',
                component: <YoskContainer/>
            }),
            userProfile: new Route({
                path: '/:id',
                component: <YoskContainer/>,
                onEnter: (route, params) => {
                }
            })
        }, this);
    }
}
