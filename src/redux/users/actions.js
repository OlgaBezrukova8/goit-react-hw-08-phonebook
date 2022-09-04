import { ADD_CONTACT, DELETE_CONTACT } from './types';

export const addContact = contacts => {
  return {
    type: ADD_CONTACT,
    payload: contacts,
  };
};

export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};
