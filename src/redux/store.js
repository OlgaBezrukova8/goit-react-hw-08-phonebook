import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contacts-slice';
import { authApi } from '../redux/auth/auth-slice';
import filterReducer from '../redux/filter/filter-reducers';
import userReducer from '../redux/user/user-reducers';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    user: userReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
