import * as types from '../constants/user-details.action.types';

export const updateUserDetails = (settings, fieldName, value) => {
  return {
    type: types.UPDATE_USER_DETAILS,
    settings,
    fieldName,
    value
  };
};
