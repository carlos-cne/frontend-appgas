import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from '../interfaces/routeProps';

const isLogged = (): boolean => !!localStorage.getItem('logged');

const Private = ({
  component: Component,
  path,
  exact,
  ...rest
}: RouteProps) => (
  <Route
    {...rest}
    exact={exact}
    path={path}
    render={props =>
      isLogged() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default Private;
