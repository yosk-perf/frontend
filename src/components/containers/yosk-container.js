import React from 'react';
import {inject, observer} from 'mobx-react';
import CustomCard from "../presentational/CustomCard";
import YoskForm from "../presentational/yosk-form";
import Results from "../presentational/results";

@inject('yosksStore')
@observer
class YoskContainer extends React.Component {
    render() {
        const {yosk} = this.props.yosksStore;

        return !yosk ?
        <>
            <CustomCard>
                <YoskForm/>
            </CustomCard>
        </>
        :
        <Results/>;
    }
}

export default YoskContainer;
