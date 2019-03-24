import React, { Component } from 'react';
import { inject, observer} from 'mobx-react';
import CustomCard from "./custom-card";

@inject('yosksStore')
@observer
class MemoryProfiler extends Component {
    render() {
        const { yosk } = this.props.yosksStore;
        const { memoryProfiler } = yosk;
        return memoryProfiler ?
            <CustomCard>
                <pre>{memoryProfiler.text}</pre>
            </CustomCard>
            : <React.Fragment />
    }
}

export default MemoryProfiler;