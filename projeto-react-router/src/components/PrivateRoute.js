import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import fakeAuth from '../helpers/fake-auth';

/* <PrivateRoute path="/tasks" component={Tasks} /> */
// function PrivateRoute () {
const PrivateRoute = (props) => {
  const { component: Component, ...others } = props;
  return (
    <Route
      {...others}
      render={(routeProps) => {
        return fakeAuth.getAuthenticated()
          ? <Component {...routeProps} />
          : <Redirect
            to={{
              pathname: '/login',
              state: { from: routeProps.location }
            }}
          />
      }}
    />
  )
}

export default PrivateRoute;
