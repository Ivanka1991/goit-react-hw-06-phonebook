import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { getFulteredContacts } from '../../redux/selectors';
import actions from '../../redux/actions';

function ContactList() {
  const contacts = useSelector(getFulteredContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.list__item}>
            <span className={css.name}>{name}</span>
            <span className={css.number}>{number}</span>
            <button
              className={css.deleteBtn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
