import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class DropdownList extends React.Component {
    state = {
        value: '',
        name: 'hai',
        labelWidth: 0,
    };

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.props.selecetedItem(event.target.value);
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.root} autoComplete="off">

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel
                        ref={ref => {
                            this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-age-simple"
                    >
                        Category
                    </InputLabel>
                    <Select
                        value={this.state.value}
                        onChange={this.handleChange}
                        input={
                            <OutlinedInput
                                labelWidth={this.state.labelWidth}
                                name="value"
                                id="outlined-age-simple"
                            />
                        }
                    >
                        {/*<MenuItem value="">*/}
                        {/*    <em></em>*/}
                        {/*</MenuItem>*/}
                        <MenuItem value="photos">Photo</MenuItem>
                        <MenuItem value="collections">Collection</MenuItem>
                    </Select>
                </FormControl>

            </form>
        );
    }
}

DropdownList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DropdownList);
