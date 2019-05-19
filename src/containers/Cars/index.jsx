import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import makeRequest from '../../service/dataService';
import MediaCard from '../ProductCard'

import '../Cars/cars.sass'

const cars = [
    {
        model: 'BMW',
        engine: 2.1,
        horsePower: 210,
        fuelType: 'diesel',
        price: 35000,
        image: 'https://cache4.pakwheels.com/system/car_generation_pictures/4681/original/BMW_X4_2017.jpg?1506086880'
    },
    {
        model: 'Audi',
        engine: 1.8,
        horsePower: 200,
        fuelType: 'benzina',
        price: 20000,
        image: 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/vdat/submodels/audi_a3_audi-a3-sedan_2019-1552084281910.jpg'
    }
]

class Cars extends Component {
    constructor(props) {
        super(props);
    }

    // getCars = async () => {
    //     try {
    //         const response = await makeRequest('cars');
    //         this.setState({ cars: response })
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    render() {
        return (
            <div className="cards">
                {cars.map((car, key) =>
                <MediaCard itemDetails={car} key={key}/>
                )}
            </div>
        )
    }
}


export default withRouter(Cars);