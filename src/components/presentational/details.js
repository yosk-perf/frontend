import React from 'react';
import {inject, observer} from 'mobx-react';
import {Spin} from 'antd';

@inject('yosksStore')
@observer
class Details extends React.Component {
    render() {
        const {yosk} = this.props.yosksStore;
        const details = yosk.details;

        return details ?
            <div>
                <div>{details.totalDuration}</div>
                {details.instrumentation ?
                    <div>
                        Duration :{details.instrumentation.panko_array_serializer_duration}
                        redis: {details.instrumentation.redis_call_duration}
                    </div>
                    : null}
                <div>{details.allocationsCount}</div>
            </div>
        : <Spin />;
    }
}

export default Details;
