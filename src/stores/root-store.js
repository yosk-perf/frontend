import YosksStore from './domain-stores/yosk-store';

class RootStore {
    constructor() {
        this.yosksStore = new YosksStore();
        console.log(this, 'mobx store inited!');
    }
}


export default new RootStore();
