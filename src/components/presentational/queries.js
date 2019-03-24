import React from 'react';
import {inject, observer} from 'mobx-react';
import {Skeleton} from 'antd';
import CustomCard from "./custom-card";
import QueriesTable from "./queries-table";

@inject('yosksStore')
@observer
class Queries extends React.Component {
    render() {
        const {yosk} = this.props.yosksStore;
        const queries = yosk.queries;

        return (
            <CustomCard>
                {queries.length ?
                    <div>
                        {<QueriesTable data={queries}/>}
                    </div>
                    : <Skeleton active={true} />}
            </CustomCard>
        )
    }
}

export default Queries;
