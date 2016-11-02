import * as types from '../constants/user-roles.action.types';

export const addUserRoles = (roles) => {
  return {
    type: types.ADD_USER_ROLES,
    roles
  };
};

export const updateUserRoles = (settings, id, rollId, rollName, value, status) => {
  return {
    type: types.UPDATE_USER_ROLES,
    settings,
    id,
    rollId,
    rollName,
    value,
    status
  };
};
