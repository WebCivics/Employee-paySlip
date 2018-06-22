import React, { Component } from 'react';
import Employee from './Employee/employee';
import './App.css';
import { Route, Switch,withRouter } from 'react-router-dom';
import Calculatetaxes from './TaxCalculator/calculatetaxes';

class App extends Component {
  render() {

    let routes = (
      <Switch >
        <Route path="/" exact component={Employee} />
        <Route path="/pay-slip" exact component={Calculatetaxes} />
       </Switch> 
    );

    
    return (
      <div>
        
        {routes}
      
      </div>
    );
  }
}

export default withRouter(App);
