import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';


import TopBar from '../../components/TopBar/TopBar';
import './header.sass';

import WelcomePage from '../WelcomePage'
import Cars from '../Cars'
import Customers from '../Customers'
import Accessories from '../Accessories';
import Sales from '../Sales';

const colorScheme = createMuiTheme({
    palette: {
        primary: { main: '#fff' },
        secondary: {
            light: '#e3e000',
            main: '#f6f6f7',
            dark: '#0f738a'
        }
    },
    typography: {
        useNextVariants: true
    }
});

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }


    render() {
        return (
            <MuiThemeProvider theme={colorScheme}>
                <div>
                    <AppBar position="static">
                        <Toolbar className="toolbar">
                            <TopBar />
                        </Toolbar>
                    </AppBar>
                </div>
                <Route exact path={`${this.props.match.path}`} component={WelcomePage} />
                <Route exact path={`${this.props.match.path}cars`} component={Cars} />
                <Route exact path={`${this.props.match.path}customers`} component={Customers} />
                <Route exact path={`${this.props.match.path}accessories`} component={Accessories} />
                <Route exact path={`${this.props.match.path}sales`} component={Sales} />

            </MuiThemeProvider>
        )
    }
}

export default withRouter(Header);