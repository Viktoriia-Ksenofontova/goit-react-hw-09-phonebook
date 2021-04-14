import { v4 as uuidv4 } from 'uuid';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

export default function Filter() {
  const searchInputId = uuidv4();
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <>
      <label htmlFor={searchInputId} className={styles.filterLabel}>
        Find contacts by name
        <input
          className={styles.filterInput}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          id={searchInputId}
        />
      </label>
    </>
  );
}

// const mapStateToProps = state => ({
//   value: getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
