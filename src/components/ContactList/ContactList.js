import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onRemoveContact }) {
  const phonebookContacts = contacts();
  return (
    <ul className={css.list}>
      {phonebookContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.list__item}>
            <span className={css.name}>{name}</span>
            <span className={css.number}>{number}</span>
            <button
              className={css.deleteBtn}
              type="button"
              onClick={() => onRemoveContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
