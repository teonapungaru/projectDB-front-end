import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import EnhancedTable from '../Table'

const accessories = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
]

class Accessories extends Component {

    render() {
        return (
            <div>
                <EnhancedTable
                    tableHeader={accessories}
                    tableTitle='Accessories'
                />
            </div>
        )
    }
}


export default withRouter(Accessories);