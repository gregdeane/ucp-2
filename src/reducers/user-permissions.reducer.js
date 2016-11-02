import * as types from '../constants/user-permissions.action.types';

import initialState from './state.initial';

const userPermissions = (state = initialState.permissions, action) => {
  switch (action.type) {
    case types.UPDATE_USER_PERMISSIONS:
      return {
        ...state,
        [action.id]: {
          id: action.rollId,
          name: action.rollName,
          value: action.value,
          status: action.status
        }
      };

    default:
      return state
  }
};

export default userPermissions;
