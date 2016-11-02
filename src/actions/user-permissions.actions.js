import * as types from '../constants/user-permissions.action.types';

export const addUserPermissionsObject = (settings, id, rollId, rollName, value, status) => {
  return {
    type: types.ADD_USER_PERMISSIONS_OBJECT,
    settings,
    id,
    rollId,
    rollName,
    value,
    status
  };
};

export const updateUserPermissions = (settings, id, rollId, rollName, value, status) => {
  return {
    type: types.UPDATE_USER_PERMISSIONS,
    settings,
    id,
    rollId,
    rollName,
    value,
    status
  };
};
