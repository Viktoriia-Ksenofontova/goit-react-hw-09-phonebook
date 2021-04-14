import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const PublicRoute = ({ children, ...routeProps }) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuth);
  return (
    <Route {...routeProps}>
      {isAuthenticated && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        children
      )}
    </Route>
  );
};

export default PublicRoute;
