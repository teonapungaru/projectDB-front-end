import React from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import { navigation } from '../../config/path.js'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';

import './topBar.sass';

class TopBar extends React.Component {

    constructor() {
        super()

        this.state = { anchorEl: null }
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null, open: false });
    };

    goToWelcome = () => {
        this.handleClose();
        this.props.history.push(navigation.welcome);

    }

    goToCars = () => {
        this.handleClose();
        this.props.history.push(navigation.cars);

    }

    goToCustomers = () => {
        this.handleClose();
        this.props.history.push(navigation.customers);
    }

    goToAccessories = () => {
        this.handleClose();
        this.props.history.push(navigation.accessories);
    }

    goToSales = () => {
        this.handleClose();
        this.props.history.push(navigation.sales);
    }

    render() {
        const { anchorEl } = this.state;

        return (
            <div className="buttons">
                <Button onClick={this.goToWelcome}>Home</Button>
                <Button onClick={this.goToCars}>Cars</Button>
                <Button onClick={this.goToCustomers}>Customers</Button>
                <Button onClick={this.goToAccessories}>Accessories</Button>
                <Button onClick={this.goToSales}>Sales</Button>

                <ClickAwayListener onClickAway={this.handleClose}>
                    <Menu
                        id="top-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >


                    </Menu>
                </ClickAwayListener>
            </div>
        );
    }
}

export default withRouter(TopBar);