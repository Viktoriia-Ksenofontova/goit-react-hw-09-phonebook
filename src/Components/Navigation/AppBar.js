import UserAuthentication from './UserAuthentication';
import UserMenu from './UserMenu';
import MainNavigation from './MainNavigation';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuth);

  return (
    <header className={styles.header}>
      <MainNavigation />
      {isAuthenticated ? <UserMenu /> : <UserAuthentication />}
    </header>
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuth(state),
// });

// export default connect(mapStateToProps)(AppBar);
