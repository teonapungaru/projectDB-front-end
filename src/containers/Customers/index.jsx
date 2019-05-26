import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import makeRequest from '../../service/dataService';

import SimpleTable from '../CustomersList';
import { Snackbars, SNACKBAR_TYPE } from "../Snackbar";

class Customers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customers: [],
            contactDetails: []
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

    handleClose = () => {
        this.setState({ openSnackbar: false });
    }

    getCustomers = async () => {
        try {
            const response = await makeRequest('customers');
            console.log(response)
            this.setState({ customers: response })
        } catch (e) {
            console.log(e);
        }
    }

    getContactDetails = async () => {
        try {
            const response = await makeRequest('contactDetails');
            //console.log(response)
            this.setState({ contactDetails: response })
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.getCustomers();
        this.getContactDetails();
    }

    render() {
        return (
            <div>
                <div>
                    <SimpleTable
                        details={this.state.contactDetails}
                        customers={this.state.customers}
                        snackBar={this.openSnackbar}
                    />
                </div>
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


export default withRouter(Customers);