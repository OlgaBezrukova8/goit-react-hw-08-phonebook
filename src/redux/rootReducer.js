import { combineReducers } from 'redux';

import itemsReducer from './items/items-reducers';
import filterReducer from './filter/filter-reducers';

const rootReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default rootReducer;
