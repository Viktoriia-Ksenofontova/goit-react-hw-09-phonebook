import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import styles from './AppBar.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const onLogOut = () => dispatch(authOperations.logout());
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div className={styles.userMenu}>
      <p className={styles.userMenuText}> Welcome, your email: {email}</p>
      <button type="button" onClick={onLogOut} className={styles.userMenuBtn}>
        Logout
      </button>
    </div>
  );
}

// const mapStateToProps = state => ({
//   email: authSelectors.getUserEmail(state),
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logout,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
