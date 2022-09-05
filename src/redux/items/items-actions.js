import { createAction } from '@reduxjs/toolkit';
import { ADD_CONTACT, DELETE_CONTACT } from './items-types';

export const addContact = createAction(ADD_CONTACT);
export const deleteContact = createAction(DELETE_CONTACT);
