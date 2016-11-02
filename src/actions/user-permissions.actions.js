import * as types from '../constants/user-permissions.action.types';

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
