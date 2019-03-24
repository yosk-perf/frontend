import React from 'react';
import {inject, observer} from 'mobx-react';
import {AutoComplete, InputNumber, Input, Button} from 'antd';
import JSONInput from "react-json-editor-ajrm";

const Option = AutoComplete.Option;

@inject('routesStore')
@inject('yosksStore')
@observer
class YoskForm extends React.Component {
    state = {
        controllerResults: [],
        actionResults: [],
        selectedYosk: null,
        selectedAction: '',
        userId: null,
        params: {}
    };

    handleSearch = (value, type) => {
        const results = [];
        const array = type === 'routes' ? this.props.routesStore.routes : this.state.selectedYosk.actions;

        array.forEach(route => {
            let name = type === 'routes' ? route.controller : route;
            name = name.replace('_', ' ');

            if (name.toLowerCase().includes(value.toLowerCase()) && results.length < 20) {
                results.push(route);
            }
        });

        return results;
    };

    onSelect = (value) => {
        this.setState({selectedYosk: this.state.controllerResults[value]});
    };

    onSelectAction = (value) => {
        this.setState({selectedAction: this.state.actionResults[value]});
    };

    createYosk = () => {
      this.props.yosksStore.addYosk({
          request_controller: this.state.selectedYosk.controller,
          request_action: this.state.selectedAction,
          user_id: this.state.userId,
          params: this.state.params
      });
    };

    render() {
        const {isLoading} = this.props.routesStore;

        return isLoading ? null : (
            <>
               <div>
                   <AutoComplete
                       style={{width: 200}}
                       placeholder="input here"
                       onSearch={(value) => {
                           const results = this.handleSearch(value, 'routes');
                           this.setState({controllerResults: results});
                       }}
                       onSelect={this.onSelect}
                   >
                       { this.state.controllerResults.map((route, i) => <Option key={i}>{route.controller}</Option>)}
                   </AutoComplete>
               </div>
               <div>
                   <AutoComplete
                       style={{width: 200}}
                       placeholder="input here"
                       onSearch={(value) => {
                           const results = this.handleSearch(value, 'actions');
                           this.setState({actionResults: results});
                       }}
                       onSelect={this.onSelectAction}
                   >
                       { this.state.selectedYosk ? this.state.actionResults.map((action, i) => <Option key={i}>{action}</Option>) : null}
                   </AutoComplete>
               </div>
                <div>
                    <InputNumber onChange={(value) => {this.setState({userId: value})}} value={this.state.userId}/>
                </div>
                <div style={{ maxWidth: "1400px", maxHeight: "100%" }}>
                    <JSONInput
                        theme="light_mitsuketa_tribute"
                        placeholder={{"example": "Enter your JSON"}}
                        colors={{
                            string: "#DAA520" // overrides theme colors with whatever color value you want
                        }}
                        jsObject={this.state.params}
                        height="300px"
                        onChange={({jsObject}) => { if(jsObject) {this.setState({params: jsObject})}}} value={this.state.params}
                    />
                </div>
                <div>
                    <Button onClick={this.createYosk}>Send</Button>
                </div>
            </>

        );
    }
}

export default YoskForm;
