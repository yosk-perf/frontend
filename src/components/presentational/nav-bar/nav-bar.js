import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {inject, observer} from "mobx-react/index";

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
            <AppBar
                className={classes.nav}
                classes={{
                    positionFixed: classes.navFixed
                }}
                position="fixed" color="default">
                <Toolbar>
                    <Typography className="nav-bar-details" style={{width: '100%'}} variant="h6" color="inherit">
                        <span>Yosk</span>
                        {
                            yosk ? <>
                                <span>{yosk.controller}#{yosk.action}</span>
                                <span style={{float: 'right'}}>User Id: {yosk.userId} {yosk.details ? `| Execution Time: ${yosk.details.totalDuration.toFixed(2)}ms` : null}</span>
                                </> : null

                        }
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
