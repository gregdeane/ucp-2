import { combineReducers } from 'redux';

import userDetails from './user-details.reducer';

const rootReducer = combineReducers({
  userDetails
});

export default rootReducer;
