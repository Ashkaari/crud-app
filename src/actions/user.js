import axios from 'axios';
import jwt from 'jsonwebtoken';
import api from '../models/apiModel';
import setAuthorizationToken from '../services/setAuthorizationToken';

import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from './index';

export function setUserData(user) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: user,
  };
}

export const login = data => dispatch => {
  dispatch({ type: USER_LOGIN_REQUEST });

  axios
    .post(api.login, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      localStorage.setItem('jwtToken', response.data.token);
      setAuthorizationToken(response.data.token);
      dispatch(setUserData(jwt.decode(response.data.token)));
    })
    .catch(e => {
      dispatch({ type: USER_LOGIN_FAILURE, payload: e.response.data });
    });
};
