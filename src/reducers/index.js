import { combineReducers } from 'redux';

import userInfo from './user-info.reducer';

const rootReducer = combineReducers({
  userInfo
});

export default rootReducer;
