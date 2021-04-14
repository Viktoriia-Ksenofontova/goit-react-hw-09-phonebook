import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const PrivateRoute = ({ children, ...routeProps }) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuth);
  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
