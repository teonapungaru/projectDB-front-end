import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import makeRequest from '../../service/dataService';
import MediaCard from '../ProductCard'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import FormDialog from '../Dialog';

import '../Cars/cars.sass'

const fields =['model', 'engine', 'horsePower', 'fuelType', 'price'];

class Cars extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: []
        }
    }

    getCars = async () => {
        try {
            const response = await makeRequest('cars');
            this.setState({ cars: response })
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
        this.getCars();
    }

    render() {
        console.log(this.state.cars)
        return (
            <div className="root">
                <div className="add">
                    <Fab size="small" color="secondary" aria-label="Add" onClick={this.openDialog}>
                        <AddIcon />
                    </Fab>
                </div>
                <div className="cards">
                    {this.state.cars.map((car, key) =>
                        <MediaCard itemDetails={car} key={key} title='deleteCar'/>
                    )}
                </div>
                <FormDialog
                    onClose={this.handleClose}
                    open={this.state.openDialog}
                    fields={fields}
                    title='car'
                />
            </div>
        )
    }
}


export default withRouter(Cars);