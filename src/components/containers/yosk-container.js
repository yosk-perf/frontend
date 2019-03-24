import React from 'react';
import {inject, observer} from 'mobx-react';
import CustomCard from "../presentational/custom-card";
import YoskForm from "../presentational/yosk-form";
import Results from "../presentational/results";

import '../presentational/yosk-form.css';

@inject('yosksStore')
@observer
class YoskContainer extends React.Component {
    render() {
        const {yosk} = this.props.yosksStore;

        return (
            <div>
                {!yosk ?
                    <CustomCard cardClass="Yosk-form">
                        <YoskForm/>
                    </CustomCard>
                    :
                    <Results/>}
            </div>
        )
    }
}

export default YoskContainer;