import React from 'react';
import {inject, observer} from 'mobx-react';
import {Skeleton} from 'antd';
import JSONInput from "react-json-editor-ajrm";
import CustomCard from "./custom-card";

@inject('yosksStore')
@observer
class Response extends React.Component {
    render() {
        const {yosk} = this.props.yosksStore;
        const response = yosk.response;

        return (
            <CustomCard cardClass="Response">
                {
                    response ?
                        <JSONInput
                            theme="light_mitsuketa_tribute"
                            placeholder={response}
                            viewOnly={true}
                            colors={{
                                string: "#DAA520" // overrides theme colors with whatever color value you want
                            }}
                            height="100%"
                            width="100%"
                        />
                        : <Skeleton active={true} />
                }
            </CustomCard>
        )
    }
}

export default Response;
