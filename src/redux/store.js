import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from '../redux/contacts/contactsSliceApi';
import filterReducer from '../redux/filter/filter-reducers';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
