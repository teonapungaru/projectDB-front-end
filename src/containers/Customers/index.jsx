import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import makeRequest from '../../service/dataService';

import SimpleTable from '../CustomersList'

class Customers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customers:[],
            contactDetails:[]
        }
    }

    getCustomers = async () => {
        try {
            const response = await makeRequest('customers');
            console.log(response)
            this.setState({customers: response})
        } catch (e) {
            console.log(e);
        }
    }

    getContactDetails = async () => {
        try {
            const response = await makeRequest('contactDetails');
            console.log(response)
            this.setState({contactDetails: response})
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount(){
        this.getCustomers();
        this.getContactDetails();
    }

    render() {
        console.log(this.state, 'state')
        return(
            <div>
                <SimpleTable details={this.state.contactDetails[0]} />
            </div>
        )
    }
}


export default withRouter(Customers);