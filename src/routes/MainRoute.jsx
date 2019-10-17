import React from 'react';
import { Route } from 'react-router-dom';

const MainRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    onUpdate
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

export default MainRoute;
