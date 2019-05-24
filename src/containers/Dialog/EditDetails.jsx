import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import makeRequest from '../../service/dataService';

let newState = {};

class EditDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleClose = () => {
        this.setState({ open: false });
        this.props.onClose();
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.open !== prevState.open) {
            return { someState: nextProps.open };
        }
        return null;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.open !== this.props.open) {
            this.setState({ open: this.props.open });
        }
    }

    handleChange = prop => event => {
        this.setState({
            [prop]: event.target.value
        });
        //Object.assign(newState, { [prop]: event.target.value });
    };

    submit = async () => {
        console.log(this.state.phoneNo)
        // try {
        //     const response = await makeRequest(`${this.props.title}`, { data: this.state.phoneNo });
        //     this.setState({
        //         open: false
        //     })
        // } catch (e) {
        //     console.log(e);
        // }
    };

    disableAdd = () => Object.values(newState).map(item => item.length === 0 ? true : false).length !== 0 ?
        Object.values(newState).map(item => item.length === 0 ? true : false).reduce((previousVal, currentVal) => previousVal || currentVal) :
        true;

    render() {
        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Edit details</DialogTitle>
                    <DialogContent>
                            <TextField
                                margin="dense"
                                id={this.props.editField}
                                label={this.props.editField}
                                fullWidth
                                value={this.state.phoneNo}
                                onChange={this.handleChange(`phoneNo`)}
                            />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}>
                            Cancel
                        </Button>
                        <Button onClick={this.submit} disabled={this.disableAdd()}>
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default EditDialog;