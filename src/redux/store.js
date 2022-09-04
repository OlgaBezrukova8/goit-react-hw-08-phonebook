import { createStore, combineReducers } from 'redux';
import { reducer } from '../redux/users/reducers';

const rootReducer = combineReducers({ users: reducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
