import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import styles from './ContactsList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  // componentDidMount() {
  //   fetchContacts();
  // }
  // const { contacts, onDeleteContact } = this.props;

  return contacts.length > 0 ? (
    <ul className={styles.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.listItem}>
          <p className="name">
            {name}: <span>{number}</span>
          </p>
          <button
            className={styles.Btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <h3>You haven't contacts</h3>
  );
}

// const mapStateToProps = state => ({
//   contacts: getVisibleContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
