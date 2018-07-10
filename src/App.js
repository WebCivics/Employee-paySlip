import React, { Component } from 'react';
import Employee from './Employee/employee';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Calculatetaxes from './TaxCalculator/calculatetaxes';

class App extends Component {
  render() {

    let routes = (
      <Router>
      <Switch >
        <Route path="/" exact component={Employee} />
        <Route path="/pay-slip" exact component={Calculatetaxes} />
       </Switch>
      </Router>
    );

    
    return (
      <div>
        
        {routes}
      
      </div>
    );
  }
}

export default App;
