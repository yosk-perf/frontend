import React from 'react';
import {inject, observer} from 'mobx-react';
import {Skeleton} from 'antd';
import CustomCard from "./custom-card";
import Hightlight from 'react-highlight.js';

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
                        {queries.map((query, index) => {
                            return (
                                <Hightlight key={index} language="SQL">
                                    {query.query}
                                </Hightlight>
                            )
                        })}
                    </div>
                    : <Skeleton active={true} />}
            </CustomCard>
        )
    }
}

export default Queries;
