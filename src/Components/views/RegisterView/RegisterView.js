import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Section from '../../Section';
import authOperations from '../../../redux/auth/auth-operations';
import styles from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const handleNameChange = e => {
    setName(e.target.value);
  };

  const [email, setEmail] = useState('');
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState('');
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  // state = {
  //   name: '',
  //   email: '',
  //   password: '',
  // };

  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    // onSubmit({ name, email, password });
    reset();
  };

  return (
    <Section title="Регистрация">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={styles.formRegisterView}
      >
        <label className={styles.labelRegisterView}>
          Имя
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            className={styles.inputRegisterView}
            autoComplete="off"
          />
        </label>
        <label className={styles.labelRegisterView}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className={styles.inputRegisterView}
            autoComplete="off"
          />
        </label>
        <label className={styles.labelRegisterView}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.inputRegisterView}
            autoComplete="off"
          />
        </label>
        <button type="submit" className={styles.btnRegisterView}>
          Зарегестрироваться
        </button>
      </form>
    </Section>
  );
}

// const mapDispatchToProps = dispatch=>({
//   onSubmit: (data)=>dispatch(authOperations.register(data))
// })

// const mapDispatchToProps = {
//   onSubmit: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);
