import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    nav: {
      backgroundColor: 'rgba(230, 230, 230, 0.5)'
    },
    navFixed: {
        bottom: 0,
        top: 'unset',
    }
};

const NavBar = ({classes}) => {
    return (
        <AppBar
            className={classes.nav}
            classes={{
                positionFixed: classes.navFixed
            }}
            position="fixed" color="default">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Yosk
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);