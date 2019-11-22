import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const isLoggedIn = localStorage.getItem('jwtToken');

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location, message: 'You need to be authorized to view this page' },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
