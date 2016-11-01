import * as types from '../constants/user-info.action.types';

const initialState = {
  details: {
    firstName: '',
    lastName: '',
    email: ''
  },
  permissions: {}
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER_DETAILS:
      //console.log('user-info.reducer.js / UPDATE_USER_DETAILS / state, action', state, action);
      console.log('state', state);
      console.log('action', action);
      return {
        ...state,
        details: action.details
      };

    case types.UPDATE_USER_PERMISSIONS:
      return {
        ...state,
        permissions: action.permissions
      };

    default:
      return state
  }
};

export default userInfo;
