import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Customers from './containers/Customers';
import Accessories from './containers/Accessories';
import Sales from './containers/Sales';
import Cars from './containers/Cars';
import Header from './containers/Header';

import './App.sass';


class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>        
              <Route path="/" component={Header} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;

