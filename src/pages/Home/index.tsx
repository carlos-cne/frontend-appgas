import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import OrderDashboard from '../OrderDashboard';

function signOut() {
  localStorage.removeItem('logged');
}

export default function Home() {
  const { path } = useRouteMatch();

  return (
    <div>
      <h1>This is a principal page</h1>

      <p>Sign out</p>
      <button type="button" onClick={signOut}>
        Click here
      </button>
      <Switch>
        <Route path={`${path}/order-dashboard`} component={OrderDashboard} />
      </Switch>
    </div>
  );
}
