import { isEmpty } from 'lodash';

import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from '../actions';

export default function user(state = { isAuthenticated: false, user: {}, loading: false, error: null }, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }

    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        error: null,
        isAuthenticated: !isEmpty(action.payload.user),
        loading: false,
      };
    }

    case USER_REGISTER_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        error: null,
        loading: false,
      };
    }

    case USER_LOGIN_FAILURE:
    case USER_REGISTER_FAILURE: {
      return { ...state, ...action.payload, loading: false };
    }

    default:
      return state;
  }
}
