import * as types from '../constants/user-roles.action.types';

import initialState from './state.initial';

const userRoles = (state = initialState.roles, action) => {
  switch (action.type) {
    case types.ADD_USER_ROLES:
      return {
        ...state,
        products: action.products
      };

    case types.UPDATE_USER_ROLES:
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

export default userRoles;
