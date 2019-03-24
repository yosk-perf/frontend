import React from 'react';
import Details from "./details";
import MemoryProfiler from "./memory-profiler";
import Response from "./response";

import './result.css';

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
            </div>
        )
    }
}

export default Results;
