import React from 'react';
import { connect } from 'react-redux';

import FormPanel from '../components/FormPanel';
import patientModel from '../models/patientModel';
import { addNewPatient } from '../actions/patients';

import 'styles/_pages/new-patient.scss';

const NewPatient = () => {
  const handleSubmit = () => {
    let patient = {};

    patientModel.forEach(field => {
      if (field.type === 'group') {
        if (['fullname', 'additionalInfo'].includes(field.name)) {
          field.inputs.forEach(input => (patient[input.name] = input.value));
        } else {
          patient[field.name] = field.inputs.forEach(input => ({ [input.name]: input.value }));
        }
      } else {
        patient[field.name] = field.value;
      }
    });

    console.log('patient parsed', patient);
  };
  return (
    <>
      <div className="new-patient__title _page-title">New patient form</div>
      <FormPanel
        className={'new-patient__form'}
        btnText={'Save'}
        submitCallback={handleSubmit}
        model={patientModel}
        loading={false}
        error={false}
      />
    </>
  );
};

export default connect(
  state => ({
    loading: state.patients.loading,
    message: state.patients.message,
    error: state.patients.error,
  }),
  { addNewPatient }
)(NewPatient);
