import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from "mobx-react/index";
import yoskLogo from './yosk-logo.png';
import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

const styles = {
    nav: {
        backgroundColor: 'rgba(230, 230, 230, 0.5)'
    },
    navFixed: {
        bottom: 0,
        top: 'unset',
    }
};

@inject('yosksStore')
@observer
class NavBar extends React.Component {
    render() {
        const {classes} = this.props;
        const {yosk} = this.props.yosksStore;

        return (
            <Footer>
                <Row>
                    <Col span={2}>
                        <img src={yoskLogo} style={{width: '60px', height: '60px'}} />
                    </Col>
                    {
                        yosk ?
                            <>
                                <Col span={10}>
                                    <div>
                                        <h2 style={{marginTop: '15px'}}>{yosk.controller}#{yosk.action}</h2>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <h2 style={{float: 'right', marginTop: '15px'}}>User Id: {yosk.userId} {yosk.details ?
                                        `| Execution Time: ${yosk.details.totalDuration.toFixed(2)}ms` : null}</h2>
                                </Col>
                            </>
                        : null
                    }
                </Row>
            </Footer>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default NavBar;
