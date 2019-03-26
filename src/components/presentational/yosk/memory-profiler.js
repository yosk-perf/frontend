import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Skeleton} from 'antd';

@inject('yosksStore')
@observer
class MemoryProfiler extends Component {
    render() {
        const {yosk} = this.props.yosksStore;
        const {memoryProfiler} = yosk;
        return memoryProfiler ?
            <pre style={{overflow: 'scroll'}} className="MemoryProfiler-text">{memoryProfiler.text}</pre>
            : <Skeleton active={true}/>
    }
}

export default MemoryProfiler;
