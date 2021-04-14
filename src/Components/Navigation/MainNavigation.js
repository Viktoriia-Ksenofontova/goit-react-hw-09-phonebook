import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';
import authSelectors from '../../redux/auth/auth-selectors';

export default function MainNavigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuth);

  return (
    <div>
      <NavLink
        className={styles.headerLink}
        activeClassName={styles.headerLinkActive}
        to="/"
        exact
      >
        Главная
      </NavLink>
      {isAuthenticated && (
        <NavLink
          className={styles.headerLink}
          activeClassName={styles.headerLinkActive}
          to="/contacts"
          exact
        >
          Контакты
        </NavLink>
      )}
    </div>
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuth(state),
// });

// export default connect(mapStateToProps)(MainNavigation);
