import React from 'react';
import {inject, observer} from 'mobx-react';
import {AutoComplete, InputNumber, Input, Button} from 'antd';

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
        params: ''
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
          params: {}
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
                <div>
                    <Input.TextArea onChange={(e) => {this.setState({params: e.target.value})}} value={this.state.params}/>
                </div>
                <div>
                    <Button onClick={this.createYosk}>Send</Button>
                </div>
            </>

        );
    }
}

export default YoskForm;
