import * as types from '../constants/visibility.action.types';

export const toggleUserDetails = () => {
  return {
    type: types.TOGGLE_USERS_DETAILS
  };
};

export const toggleApplications = () => {
  return {
    type: types.TOGGLE_APPLICATIONS
  };
};
