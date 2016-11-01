import * as types from '../constants/user-details.action.types';

export const updateUserDetails = (details, fieldName, value) => {
  console.log(details);
  return {
    type: types.UPDATE_USER_DETAILS,
    details,
    fieldName,
    value
  };
};
