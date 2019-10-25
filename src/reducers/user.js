import { isEmpty } from 'lodash';

import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../actions';

export default function user(state = { isAuthenticated: false, user: {}, loading: false }, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        error: '',
        loading: true,
      };
    }

    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        isAuthenticated: !isEmpty(action.payload.user),
        loading: false,
      };
    }

    case USER_LOGIN_FAILURE: {
      return { ...state, ...action.payload, loading: false };
    }

    default:
      return state;
  }
}
