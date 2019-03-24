import React from 'react';
import {inject, observer} from 'mobx-react';
import {Spin} from 'antd';
import {YOSK_STATUS} from "../../stores/domain-objects/yosk";

@inject('yosksStore')
@observer
class Results extends React.Component {
    render() {
        const {yosk} = this.props.yosksStore;
        const yoskStatus = yosk.status;
        const doneLoading = yosk.status === YOSK_STATUS.COMPLETED;

        return doneLoading ?
            <div>
                WERE DONE
            </div>
            :
            <Spin/>;
    }
}

export default Results;
