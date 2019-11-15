import axios from 'axios';
import { post } from '../models/apiModel';
import { POST_NEW_PATIENT_FAILURE, POST_NEW_PATIENT_REQUEST, POST_NEW_PATIENT_SUCCESS } from './index';

export const setNewPatientSuccess = payload => ({ type: POST_NEW_PATIENT_SUCCESS, payload });
export const setNewPatientError = error => ({ type: POST_NEW_PATIENT_FAILURE, payload: error });

export const addNewPatient = patient => dispatch => {
  dispatch({ type: POST_NEW_PATIENT_REQUEST });

  axios
    .post(post.patients_new, patient, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(() => dispatch(setNewPatientSuccess(patient)))
    .catch(e => dispatch(setNewPatientError(e.response.data)));
};