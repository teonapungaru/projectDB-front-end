import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import makeRequest from '../../service/dataService';
import MediaCard from '../ProductCard'

const accessories = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
]

class Accessories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accessories:[]
        }
    }

    getAccessories = async () => {
        try {
            const response = await makeRequest('accessories');
            this.setState({accessories: response})
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount(){
        this.getAccessories();
    }

    render() {
        return (
            <div>
                {this.state.accessories.map((accessory, key) =>
                <MediaCard itemDetails={accessory} key={key}/>
                )}
            </div>
        )
    }
}


export default withRouter(Accessories);