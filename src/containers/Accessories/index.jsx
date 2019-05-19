import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MediaCard from '../ProductCard'

const accessories = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
]

class Accessories extends Component {

    render() {
        return (
            <div>
                {/* {this.state.accessories.map(accessory =>
                <MediaCard itemDetails={accessory}/>
                )} */}
            </div>
        )
    }
}


export default withRouter(Accessories);