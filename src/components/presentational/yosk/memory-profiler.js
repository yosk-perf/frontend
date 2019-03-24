import React, { Component } from 'react';
import { inject, observer} from 'mobx-react';
import CustomCard from "../custom-card/custom-card";
import {Skeleton} from 'antd';

@inject('yosksStore')
@observer
class MemoryProfiler extends Component {
    render() {
        const { yosk } = this.props.yosksStore;
        const { memoryProfiler } = yosk;
        return (
            <CustomCard cardClass="MemoryProfiler" title="Memory Profiler">
                {memoryProfiler ?
                    <pre className="MemoryProfiler-text">{memoryProfiler.text}</pre>
                    : <Skeleton active={true} />
                }
            </CustomCard>
            )
    }
}

export default MemoryProfiler;
