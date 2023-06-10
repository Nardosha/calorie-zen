import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from './AppContext';

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  const value = useContext(AppContext);

  return value.loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRouteElement;
