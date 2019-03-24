import React from 'react';
import {inject, observer} from 'mobx-react';
import {Skeleton} from 'antd';
import JSONInput from "react-json-editor-ajrm";
import locale from 'react-json-editor-ajrm/locale/en';


@inject('yosksStore')
@observer
class Response extends React.Component {
    render() {
        const {yosk} = this.props.yosksStore;
        const response = yosk.response;

        return response ? <JSONInput
            theme="light_mitsuketa_tribute"
            placeholder={response}
            viewOnly={true}
            locale={locale}
            colors={{
                string: "#DAA520" // overrides theme colors with whatever color value you want
            }}
            height="300px"
        /> : <Skeleton active={true} />;
    }
}

export default Response;
