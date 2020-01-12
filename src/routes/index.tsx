import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';

import Private from './private';
import Guest from './guest';

const Routes = () => (
  <Router>
    <Switch>
      <Private path="/home" component={Home} />
      <Guest path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Routes;
