import React from 'react';
import {inject, observer} from 'mobx-react';
import {Skeleton} from 'antd';
import CustomCard from "./custom-card";
import LogTable from "./log-table";

@inject('yosksStore')
@observer
class Logs extends React.Component {
    render() {
        const {yosk} = this.props.yosksStore;
        const logs = yosk.logs;

        return (
            <CustomCard>
                {logs.length ?
                    <div>
                        <LogTable data={logs.map(log => log.log)}/>
                    </div>
                    : <Skeleton active={true} />}
            </CustomCard>
        )
    }
}

export default Logs;
