import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './items-actions';

const itemsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export default itemsReducer;
