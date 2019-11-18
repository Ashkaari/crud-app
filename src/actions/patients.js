import axios from 'axios';
import { toast } from 'react-toastify';

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
    .then(() => {
      dispatch(setNewPatientSuccess(patient));
      toast.success(`Successfully added patient ${patient.name} ${patient.lastname}`);
    })
    .catch(e => {
      dispatch(setNewPatientError(e.response.data));
      toast.error(e.response.data.notification);
    });
};
