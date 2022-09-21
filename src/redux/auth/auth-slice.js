import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, signUp, getCurrentUser } from './auth-operations';

const initialState = {
  user: { email: '', name: '' },
  token: '',
  isLoading: false,
  isLoggedIn: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.pending]: state => {
      state.isLoading = true;
      state.isLoggedIn = false;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [signUp.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload.message;
    },

    [logIn.pending]: state => {
      state.isLoading = true;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = payload.token;
    },
    [logIn.rejected]: (state, payload) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },

    [logOut.pending]: state => {
      state.isLoading = true;
      state.isLoggedIn = false;
    },
    [logOut.fulfilled]: state => {
      state.isLoading = false;
      state.token = '';
    },
    [logOut.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload.message;
    },

    [getCurrentUser.pending]: state => {
      state.isLoading = true;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
    },
    [getCurrentUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.token = '';
    },
  },
});

export default authSlice.reducer;
