import { ADD_CONTACT, DELETE_CONTACT } from './types';
import { combineReducers } from 'redux';

export const reducer = (store = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      console.log([...store, payload]);
      return [...store, payload];
    case DELETE_CONTACT:
      return store.filter(contact => contact.id !== payload);

    default:
      return store;
  }
};

export default combineReducers({ users: reducer });


/*

import { ADD_CONTACT, DELETE_CONTACT, UPDATE } from './user-types';
import { combineReducers } from 'redux';
export const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);
    case UPDATE:
      return state.map(contact => {
        if (contact.id === payload) {
          if (contact.status === 'yes') {
            contact.status = 'no';
          } else {
            contact.status = 'yes';
          }
        }
        return contact;
      });
    default:
      return state;
  }
};

export default combineReducers({ users: reducer });
*/