import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import FormPanel from '../components/FormPanel';
import patientModel from '../models/patientModel';
import { addNewPatient } from '../actions/patients';

import 'styles/_pages/new-patient.scss';
import 'react-toastify/dist/ReactToastify.css';

const NewPatient = ({ addNewPatient, loading, ValidationError }) => {
  const handleSubmit = () => {
    let patient = {};

    patientModel.forEach(field => {
      if (field.type === 'group') {
        if (['fullname', 'additionalInfo'].includes(field.name)) {
          field.inputs.forEach(input => (patient[input.name] = input.value));
        } else {
          patient[field.name] = {};
          field.inputs.forEach(input => (patient[field.name][input.name] = input.value));
        }
      } else {
        patient[field.name] = field.value;
      }
    });

    addNewPatient(patient);
  };

  return (
    <>
      <div className="new-patient__title _page-title">New patient form</div>
      <FormPanel
        className={'new-patient__form'}
        btnText={'Save'}
        submitCallback={handleSubmit}
        model={patientModel}
        loading={loading}
        validationErrors={ValidationError}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </>
  );
};

export default connect(
  state => ({
    loading: state.patients.loading,
    message: state.patients.message,
    GlobalError: state.patients.GlobalError,
    ValidationError: state.patients.ValidationError,
  }),
  { addNewPatient }
)(NewPatient);
