import axios from 'axios';
import { post } from '../models/apiModel';
import { POST_NEW_PATIENT_FAILURE, POST_NEW_PATIENT_REQUEST, POST_NEW_PATIENT_SUCCESS } from './index';

export const setNewPatient = payload => ({ type: POST_NEW_PATIENT_SUCCESS, payload });

export const setNewPatientError = error => ({ type: POST_NEW_PATIENT_FAILURE, payload: error });

export const addNewPatient = patient => dispatch => {
  console.log('patient', patient);
  dispatch({ type: POST_NEW_PATIENT_REQUEST });

  axios
    .post(post.new_patient, patient, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(() => dispatch(setNewPatient(patient)))
    .catch(() => dispatch(setNewPatientError('Something went wrong my dude')));
};
