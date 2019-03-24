import React from 'react';
import Details from "./details";
import Response from "./response";
import Logs from "./logs";
import MemoryProfiler from "./memory-profiler";
import Queries from "./queries";

import './result.css';

class Results extends React.Component {
    render() {
        return (
            <div>
                <Details/>
                <MemoryProfiler />
                <Response/>
                <Logs/>
                <Queries />
            </div>
        )
    }
}

export default Results;
