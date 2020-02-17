import axios from 'axios';
import { toast } from 'react-toastify';

import { get, post } from '../models/apiModel';
import { patients as patientsTypes } from './index';

const setNewPatientSuccess = payload => ({ type: patientsTypes.POST_NEW_PATIENT_SUCCESS, payload });
const setNewPatientError = error => ({ type: patientsTypes.POST_NEW_PATIENT_FAILURE, payload: error });

export const addNewPatient = patient => dispatch => {
  dispatch({ type: patientsTypes.POST_NEW_PATIENT_REQUEST });

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

const setPatientsListSuccess = payload => ({ type: patientsTypes.GET_PATIENTS_LIST_SUCCESS, payload });
const setPatientsListFailure = error => ({ type: patientsTypes.GET_PATIENTS_LIST_FAILURE, payload: error });

export const getPatientsList = () => dispatch => {
  dispatch({ type: patientsTypes.GET_PATIENTS_LIST_REQUEST });

  axios
    .get(get.patients_list, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => dispatch(setPatientsListSuccess(res.data)))
    .catch(e => console.log(e));
};
