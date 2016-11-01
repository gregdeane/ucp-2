import * as types from '../constants/user-info.action.types';

export const updateUserDetails = (details, fieldName, value) => {
  console.log('user-info.actions.js / userDetails, fieldName, value', details, fieldName, value);
  return {
    type: types.UPDATE_USER_DETAILS,
    details,
    fieldName,
    value
  };
};

export const updateUserPermissions = (userPermissions) => {
  return {
    type: types.UPDATE_USER_PERMISSIONS,
    userPermissions
  };
};
