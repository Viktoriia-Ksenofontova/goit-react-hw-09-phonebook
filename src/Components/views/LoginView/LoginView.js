import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Section from '../../Section';
import authOperations from '../../../redux/auth/auth-operations';
import styles from './LoginView.module.css';

export default function LoginView() {
  // state = {
  //   email: '',
  //   password: '',
  // };

  const [email, setEmail] = useState('');
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState('');
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };

  const dispatch = useDispatch();

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    // onSubmit({ email, password });
    reset();
  };

  return (
    <Section title="Вход">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={styles.formLoginView}
      >
        <label className={styles.labelLoginView}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className={styles.inputLoginView}
          />
        </label>
        <label className={styles.labelLoginView}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.inputLoginView}
          />
        </label>
        <button type="submit" className={styles.btnLoginView}>
          Войти
        </button>
      </form>
    </Section>
  );
}

// const mapDispatchToProps = {
//   onSubmit: authOperations.login,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
