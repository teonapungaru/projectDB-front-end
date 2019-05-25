import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../WelcomePage/welcome.sass'
import SingleLineGridList from '../Grid'

class WelcomePage extends Component {


    render() {
        return (
            <div>
                <div className="welcome">
                    <img src='https://static1.squarespace.com/static/5197ad38e4b00822eb85b2a3/t/5ad603f088251b7278b5c385/1523975159127/WELCOME-header-orlando-wedding-photographer+copy+copy.jpg?format=1000w' />
                </div>
                <div className="root">
                    <SingleLineGridList />
                </div>
            </div>
        )
    }
}


export default withRouter(WelcomePage);