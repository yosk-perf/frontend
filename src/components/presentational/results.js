import React from 'react';
import Details from "./details";
import Response from "./response";
import Logs from "./logs";
import MemoryProfiler from "./memory-profiler";
import Queries from "./queries";
import UpperLayout from './upper-layout';

import './result.css';
import LowerLayout from "./LowerLayout";

class Results extends React.Component {
    render() {
        return (
            <div className="Result" >
                <UpperLayout className="UpperLayout">
                    <Logs/>
                    <MemoryProfiler />
                </UpperLayout>
                <LowerLayout className="LowerLayout">
                    <Queries />
                    <Response/>
                </LowerLayout>
            </div>
        )
    }
}

export default Results;
