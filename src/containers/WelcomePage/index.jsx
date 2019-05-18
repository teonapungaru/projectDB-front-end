import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class WelcomePage extends Component {


    render() {
        return(
            <div>Welcome page</div>
        )
    }
}


export default withRouter(WelcomePage);