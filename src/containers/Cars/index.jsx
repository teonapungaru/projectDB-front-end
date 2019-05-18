import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import EnhancedTable from '../Table'
import makeRequest from '../../service/dataService';

const cars = [
    { id: 'model', numeric: false, disablePadding: true, label: 'Model' },
    { id: 'engine', numeric: true, disablePadding: false, label: 'Engine' },
    { id: 'horsePower', numeric: true, disablePadding: false, label: 'Horse Power' },
    { id: 'fuelType', numeric: false, disablePadding: false, label: 'Fuel Type' },
    { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
]

class Cars extends Component {
    constructor(props) {
        super(props);
    }

    // getCars = async => {
    //     try {
    //         const response = await makeRequest('cars');
    //         this.setState({ cars: response })
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    render() {
        return (
            <div>
                <EnhancedTable
                    tableHeader={cars}
                    tableTitle='Cars'
                />
            </div>
        )
    }
}


export default withRouter(Cars);