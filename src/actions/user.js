import axios from 'axios';
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from './index';
import api from '../models/apiMap';

export const login = data => dispatch => {
  dispatch({ type: USER_LOGIN_REQUEST });

  axios
    .post(api.login, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => dispatch({ type: USER_LOGIN_SUCCESS, payload: { ...response.data } }))
    .catch(e => {
      dispatch({ type: USER_LOGIN_FAILURE, payload: e.response.data });
    });
};
