import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SpanningTable from '../Table'
import Button from '@material-ui/core/Button';

import '../Sales/sales.sass'

class Sales extends Component {


    render() {
        return (
            <div className="cart">
                <p> Your Cart </p>
                <SpanningTable />
                <div className="purchase">
                    <Button size="big" color="default"> Complete Purchase </Button>
                </div>
            </div>
        )
    }
}


export default withRouter(Sales);