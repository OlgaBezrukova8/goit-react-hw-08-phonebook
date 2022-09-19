import { createReducer } from '@reduxjs/toolkit';
import { setUser, resetUser } from './user-actions';

const initialState = { token: '', name: '', email: '' };

const userReducer = createReducer(initialState, {
  [setUser]: (_, { payload }) => payload,
  [resetUser]: () => initialState,
});

export default userReducer;
