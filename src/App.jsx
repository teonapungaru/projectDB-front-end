import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

