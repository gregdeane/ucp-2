import * as types from '../constants/user-details.action.types';

import initialState from './state.initial';

const userDetails = (state = initialState.details, action) => {
  switch (action.type) {
    case types.UPDATE_USER_DETAILS:
      return {
        ...state,
        [action.fieldName]: action.value
      };

    default:
      return state
  }
};

export default userDetails;
