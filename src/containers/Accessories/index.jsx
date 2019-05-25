import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import makeRequest from '../../service/dataService';
import MediaCard from '../ProductCard'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import FormDialog from '../Dialog';
import { Snackbars, SNACKBAR_TYPE } from "../Snackbar";

import '../Accessories/accessories.sass'

const fields = ['name', 'price'];

class Accessories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accessories: []
        }
    }

    openSnackbar = (message, type) => {
        if (type === 'success') {
            this.setState({
                snackbarVariant: SNACKBAR_TYPE.success,
                snackbarMessage: message,
                openSnackbar: true
            });
        } else {
            this.setState({
                snackbarVariant: SNACKBAR_TYPE.error,
                snackbarMessage: message,
                openSnackbar: true
            });
        }
        window.location.reload();
    }

    getAccessories = async () => {
        try {
            const response = await makeRequest('accessories');
            this.setState({ accessories: response })
        } catch (e) {
            console.log(e);
        }
    }

    openDialog = () => {
        this.setState({ openDialog: true })
    }

    handleClose = () => {
        this.setState({ openDialog: false });
    }

    componentDidMount() {
        this.getAccessories();
    }

    render() {
        return (
            <div className="root">
                <div className="add">
                    <Fab size="small" color="secondary" aria-label="Add" onClick={this.openDialog}>
                        <AddIcon />
                    </Fab>
                </div>
                <div className="cards">
                    {this.state.accessories.map((accessory, key) =>
                        <MediaCard itemDetails={accessory} key={key} title='deleteAccessory' snackBar={this.openSnackbar} />
                    )}
                </div>
                <FormDialog
                    onClose={this.handleClose}
                    open={this.state.openDialog}
                    fields={fields}
                    title='accessory'
                    snackBar={this.openSnackbar}
                />
                <Snackbars
                    message={this.state.snackbarMessage}
                    open={this.state.openSnackbar}
                    handleClose={this.handleClose}
                    variant={this.state.snackbarVariant}
                />
            </div>
        )
    }
}


export default withRouter(Accessories);