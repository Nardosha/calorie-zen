import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  console.log(Component);
  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRouteElement;
