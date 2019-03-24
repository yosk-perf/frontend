import React from 'react';
import Response from "../yosk/response";
import Logs from "../yosk/logs";
import MemoryProfiler from "../yosk/memory-profiler";
import Queries from "../yosk/queries";

import './result.css';

class Results extends React.Component {
    render() {
        return (
            <div className="Result" >
                <div className="UpperLayout">
                    <Logs/>
                    <MemoryProfiler />
                </div>
                <div className="LowerLayout">
                    <Queries />
                    <Response/>
                </div>
            </div>
        )
    }
}

export default Results;
