import axios from 'axios';
import jwt from 'jsonwebtoken';
import { post } from '../models/apiModel';
import setAuthorizationToken from '../services/setAuthorizationToken';

import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from './index';

export const setUserLoginSuccess = user => ({ type: USER_LOGIN_SUCCESS, payload: user });
export const setUserLoginFailure = error => ({ type: USER_LOGIN_FAILURE, payload: error });

export const login = data => dispatch => {
  dispatch({ type: USER_LOGIN_REQUEST });

  axios
    .post(post.user_login, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      localStorage.setItem('jwtToken', response.data.token);
      setAuthorizationToken(response.data.token);
      dispatch(setUserLoginSuccess(jwt.decode(response.data.token)));
    })
    .catch(e => dispatch(setUserLoginFailure(e.response.data)));
};

export const setRegisterSuccess = data => ({ type: USER_REGISTER_SUCCESS, payload: data });
export const setRegisterFailure = error => ({ type: USER_REGISTER_FAILURE, payload: error });

export const register = data => dispatch => {
  dispatch({ type: USER_REGISTER_REQUEST });

  axios
    .post(post.user_registration, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      dispatch(setRegisterSuccess({ ...res.data }));
    })
    .catch(e => {
      const code = e.response.data.code;
      dispatch(setRegisterFailure(code ? 'User already exists' : 'Unhandled error'));
    });
};
