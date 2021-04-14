import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './Components/Navigation/AppBar';
import Spinner from './Components/Loader/Loader';
import authOperations from './redux/auth/auth-operations';
import { getError } from './redux/contacts/contacts-selectors';
import { ToastContainer, toast } from 'react-toastify';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const Home = lazy(() =>
  import('./Components/views/Home/Home' /*webpackChunkName: "home-page"*/),
);
const RegisterView = lazy(() =>
  import(
    './Components/views/RegisterView/RegisterView' /*webpackChunkName: "register-page"*/
  ),
);
const LoginView = lazy(() =>
  import(
    './Components/views/LoginView/LoginView' /*webpackChunkName: "login-page"*/
  ),
);
const ContactsView = lazy(() =>
  import(
    './Components/views/ContactsView' /*webpackChunkName: "contacts-page"*/
  ),
);

export default function App() {
  const error = useSelector(getError);
  const dispatch = useDispatch();

  // componentDidMount() {
  //   this.props.onGetUserInfo();
  // }

  useEffect(() => {
    dispatch(authOperations.getUserInfo());
  }, [dispatch]);

  // const { error } = this.props;
  return (
    <>
      <div className="App">
        <AppBar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <PublicRoute exact path="/">
              <Home />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
        <ToastContainer />
      </div>
      {error &&
        toast.error(`${error}`, { position: toast.POSITION.TOP_CENTER })}
    </>
  );
}

// const mapDispatchToProps = {
//   onGetUserInfo: authOperations.getUserInfo,
// };
// const mapStateToProps = state => ({
//   error: getError(state),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
