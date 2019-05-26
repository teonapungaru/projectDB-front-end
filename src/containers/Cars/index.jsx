import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import makeRequest from '../../service/dataService';
import MediaCard from '../ProductCard'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import FormDialog from '../Dialog';
import { Snackbars, SNACKBAR_TYPE } from "../Snackbar";

import '../Cars/cars.sass'

const fields =['model', 'engine', 'horsePower', 'fuelType', 'price', 'image'];

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

    openSnackbar = (message, type) => {
        if(type === 'success') {
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
        this.setState({ openDialog: false });
    }

    componentDidMount() {
        this.getCars();
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
                    {this.state.cars.map((car, key) =>
                        <MediaCard itemDetails={car} key={key} title='deleteCar' snackBar={this.openSnackbar}/>
                    )}
                </div>
                <FormDialog
                    onClose={this.handleClose}
                    open={this.state.openDialog}
                    fields={fields}
                    title='car'
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


export default withRouter(Cars);