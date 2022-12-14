import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'users/signup',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/signup', user);
      token.set(data.token);
      Notify.success(`User ${data.user.name} is successfully registered`);
      return data;
    } catch (error) {
      Notify.failure("Can't create user or user exists");
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', user);
      Notify.success('Success login');
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(
        Notify.failure("Can't log in or user does not exist")
      );
    }
  }
);

export const logOut = createAsyncThunk(
  'users/logout',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/logout', user);
      token.unset();
      Notify.success('Logged out successfully');
      return data;
    } catch (error) {
      return rejectWithValue(
        Notify.failure(`Can't log out user: ${error.message}`)
      );
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'users/current',
  async (userToken, { rejectWithValue }) => {
    try {
      token.set(userToken);
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.payload);
    }
  }
);
