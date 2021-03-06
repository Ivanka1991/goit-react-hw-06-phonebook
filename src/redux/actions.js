import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/addContact', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction('phonebook/deleteContact');

const changeFilter = createAction('phonebook/changeFilter');

const actions = { addContact, deleteContact, changeFilter };

export default actions;

// const addContact = ({name, number}) => ({
//   type:'phonebook/addContact',
//   payload: {
//     id: uuidv4(),
//     name,
//     number
//   }
// })

// const deleteContact = ( contact ) => ({
//   type:'phonebook/deleteContact',
//   payload: contact,
// })

// const changeFilter = value => ({
//   type:'phonebook/changeFilter',
//   payload: value,
// })

// export default {addContact, deleteContact, changeFilter}
