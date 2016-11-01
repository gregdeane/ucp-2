import * as types from '../constants/visibility.action.types';

import initialState from './state.initial';

const visibility = (state = initialState.visibility, action) => {
  switch (action.type) {
    case types.TOGGLE_USERS_DETAILS:
      return {
        ...state,
        userDetailsShown: !state.userDetailsShown
      };

    default:
      return state;
  }
};

export default visibility;
