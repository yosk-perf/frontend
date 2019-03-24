import React from 'react';
import {inject, observer} from 'mobx-react';
import {Skeleton} from 'antd';
import CustomCard from "../custom-card/custom-card";
import LogTable from "../tables/log-table";

@inject('yosksStore')
@observer
class Logs extends React.Component {
    render() {
        const {yosk} = this.props.yosksStore;
        const logs = yosk.logs;

        return (
            <CustomCard cardClass="Log">
                {logs.length ?
                   <LogTable data={logs.map(log => log.log)}/>
                   : <Skeleton active={true} />}
            </CustomCard>
        )
    }
}

export default Logs;