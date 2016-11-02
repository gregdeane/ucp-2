import { combineReducers } from 'redux';

import visibility from './visibility.reducer';
import userDetails from './user-details.reducer';
import userPermissions from './user-permissions.reducer';

const rootReducer = combineReducers({
  visibility,
  userDetails,
  userPermissions
});

export default rootReducer;
