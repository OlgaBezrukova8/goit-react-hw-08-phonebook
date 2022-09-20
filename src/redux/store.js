import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsApi } from './contacts/contacts-slice';
import { authApi } from '../redux/auth/auth-slice';
import filterReducer from '../redux/filter/filter-reducers';
import userReducer from '../redux/user/user-reducers';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authApi.reducer);

export const store = configureStore({
  reducer: {
    // [authApi.reducerPath]: authApi.reducer,
    [authApi.reducerPath]: persistedReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    user: userReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);
