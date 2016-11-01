import * as types from '../constants/user-info.actions';

const initialState = {
  details: {},
  permissions: {}
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER_DETAILS:
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
