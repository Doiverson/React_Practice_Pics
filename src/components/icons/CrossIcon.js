import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './CrossIcon.css';
import Fab from '@material-ui/core/Fab';
import CrossIcon from '../assets/crossIcon.png'

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

class CrossButton extends React.Component{

    handleHiddenDisplay = () => {
        this.props.hiddenDisplay();
    }

    render() {

        const { classes } = this.props;
        return (
            <div className="icon-wrapper" >
                <div>
                    <Fab size="small" color="secondary" aria-label="Add" className={classes.margin} style={{background:"red"}} onClick={this.handleHiddenDisplay}>
                        <img src={CrossIcon} alt="Hidden display icon"/>
                    </Fab>
                </div>

            </div>
        );
    }


}

CrossButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CrossButton);
