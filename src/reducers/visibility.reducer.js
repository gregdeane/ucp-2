import * as types from '../constants/visibility.action.types';

import initialState from './state.initial';

const visibility = (state = initialState.visibility, action) => {
  switch (action.type) {
    case types.TOGGLE_USERS_DETAILS:
      return {
        ...state,
        userDetailsShown: !state.userDetailsShown
      };

    case types.TOGGLE_APPLICATIONS:
      return {
        ...state,
        applicationsShown: !state.applicationsShown
      };

    case types.TOGGLE_APPLICATION:
      return {
        ...state,
        applicationShown: {
          [action.id]: !state.applicationShown[action.id]
        }
      };

    default:
      return state;
  }
};

export default visibility;
