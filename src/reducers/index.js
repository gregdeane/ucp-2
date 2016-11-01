import { combineReducers } from 'redux';

import visibility from './visibility.reducer';
import userDetails from './user-details.reducer';

const rootReducer = combineReducers({
  visibility,
  userDetails
});

export default rootReducer;
