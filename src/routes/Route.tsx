import React from 'react';
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';

import { isAuthenticated } from '../services/auth';

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={() =>
        !isAuthenticated === isPrivate ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location },
            }}
          />
        )}
    />
  );
};

export default RouteWrapper;
