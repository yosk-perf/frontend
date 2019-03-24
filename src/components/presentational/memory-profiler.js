import React, { Component } from 'react';
import { inject, observer} from 'mobx-react';
import CustomCard from "./custom-card";
import {Skeleton} from 'antd';

@inject('yosksStore')
@observer
class MemoryProfiler extends Component {
    render() {
        const { yosk } = this.props.yosksStore;
        const { memoryProfiler } = yosk;
        return (
            <CustomCard cardClass="MemoryProfiler">
                {memoryProfiler ?
                    <pre>{memoryProfiler.text}</pre>
                    : <Skeleton active={true} />
                }
            </CustomCard>
            )
    }
}

export default MemoryProfiler;
