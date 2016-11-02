import { combineReducers } from 'redux';

import visibility from './visibility.reducer';
import userDetails from './user-details.reducer';
import userRoles from './user-roles.reducer';

const rootReducer = combineReducers({
  visibility,
  userDetails,
  userRoles
});

export default rootReducer;
