import React from 'react';
import {inject, observer} from 'mobx-react';
import {Spin} from 'antd';
import JSONInput from "react-json-editor-ajrm";

@inject('yosksStore')
@observer
class Response extends React.Component {
    render() {
        const {yosk} = this.props.yosksStore;
        const response = yosk.response;

        return response ? <JSONInput
            theme="light_mitsuketa_tribute"
            placeholder={response}
            colors={{
                string: "#DAA520" // overrides theme colors with whatever color value you want
            }}
            height="300px"
        /> : <Spin />;
    }
}

export default Response;
