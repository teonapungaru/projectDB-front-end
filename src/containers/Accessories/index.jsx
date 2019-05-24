import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import makeRequest from '../../service/dataService';
import MediaCard from '../ProductCard'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import FormDialog from '../Dialog';

import '../Accessories/accessories.sass'

const fields = ['name', 'price' ];

class Accessories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accessories: []
        }
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
                        <MediaCard itemDetails={accessory} key={key} title='deleteAccessory'/>
                    )}
                </div>
                <FormDialog
                    onClose={this.handleClose}
                    open={this.state.openDialog}
                    fields={fields}
                    title='accessory'
                />
            </div>
        )
    }
}


export default withRouter(Accessories);