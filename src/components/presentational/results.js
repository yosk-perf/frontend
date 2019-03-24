import React from 'react';
import {inject, observer} from 'mobx-react';
import Details from "./details";
import MemoryProfiler from "./memory-profiler";
import {Spin} from 'antd';
import Response from "./response";
import { YOSK_STATUS} from "../../stores/domain-objects/yosk";

import './result.css';

@inject('yosksStore')
@observer
class Results extends React.Component {
    render() {
        const {yosk} = this.props.yosksStore;
        const doneLoading = yosk.status === YOSK_STATUS.COMPLETED;

        return doneLoading ?
            <div className="Result">
                <Details/>
                <MemoryProfiler/>
                <Details/>
                <Response/>
            </div> : <Spin/>
    }
}

export default Results;
