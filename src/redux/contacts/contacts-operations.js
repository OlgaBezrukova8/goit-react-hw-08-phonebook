import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const getContact = createAsyncThunk(
  'contacts/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('contacts', contact);
      Notify.success('Contact added successfully');
      return data;
    } catch (error) {
      return rejectWithValue(
        Notify.failure(`Failed to add the contact: ${error.message}`)
      );
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`contacts/${contactId}`);
      Notify.success('Contact delete successfully');
      return contactId;
    } catch (error) {
      return rejectWithValue(
        Notify.failure(`Failed to delete the contact: ${error.message}`)
      );
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/update',
  async (contact, { rejectWithValue }) => {
    try {
      const newData = { name: contact.name, number: contact.number };
      const { data } = await axios.patch(`contacts/${contact.id}`, newData);
      Notify.success('Contact update successfully');
      return data;
    } catch (error) {
      return rejectWithValue(
        Notify.failure(`Failed to update the contact: ${error.message}`)
      );
    }
  }
);
