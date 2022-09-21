import { createSlice } from '@reduxjs/toolkit';
import {
  getContact,
  addContact,
  deleteContact,
  updateContact,
} from './contacts-operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: {},
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContact.pending]: state => {
      state.isLoading = true;
    },
    [getContact.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
      state.isLoading = false;
    },
    [getContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts = [...state.contacts, payload];
      state.isLoading = false;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
      state.isLoading = false;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [updateContact.pending]: state => {
      state.isLoading = true;
    },
    [updateContact.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.map(contact => {
        if (contact.id === payload.id) {
          contact = {
            id: payload.id,
            name: payload.name,
            number: payload.number,
          };
        }
        return contact;
      });
      state.isLoading = false;
    },
    [updateContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default contactsSlice.reducer;
