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

export const toggleApplication = (settings, id) => {
  return {
    type: types.TOGGLE_APPLICATION,
    settings,
    id
  };
};
