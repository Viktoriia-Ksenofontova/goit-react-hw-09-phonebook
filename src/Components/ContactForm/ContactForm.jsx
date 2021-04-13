import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

function ContactForm({ items, formSubmitHandler }) {
  const [name, setName] = useState('');
  const handleInputNameChange = e => {
    setName(e.target.value);
  };

  const [number, setNumber] = useState('');
  const handleInputNumberChange = e => {
    setNumber(e.target.value);
  };

  // state = {
  //   name: '',
  //   number: '',
  // };

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();
  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const { items, formSubmitHandler } = this.props;

    if (items.find(item => item.name === name)) {
      return toast.info(`${name} is already in contacts.`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    formSubmitHandler({ name, number });
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
      <label htmlFor={nameInputId} className={styles.formLabel}>
        Name
        <input
          className={styles.formInput}
          type="text"
          placeholder="Enter name"
          name="name"
          value={name}
          onChange={handleInputNameChange}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label htmlFor={numberInputId} className={styles.formLabel}>
        Number
        <input
          className={styles.formInput}
          type="tel"
          placeholder="Enter telephone number"
          name="number"
          value={number}
          onChange={handleInputNumberChange}
          id={numberInputId}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className={styles.formBtn}>
        Add contact
      </button>
      <ToastContainer />
    </form>
  );
}

ContactForm.defaultProps = {
  items: [],
};

ContactForm.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape),
  formSubmitHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  formSubmitHandler: data => dispatch(contactsOperations.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
