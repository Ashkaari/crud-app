import React from 'react';
import FormPanel from '../components/FormPanel';
import patientModel from '../models/patientModel';

import 'styles/_pages/new-patient.scss';

const NewPatient = () => {
  return (
    <>
      <FormPanel
        className={'form__new-patient'}
        btnText={'Save'}
        submitCallback={e => console.log(e)}
        model={patientModel}
        loading={false}
        error={false}
      />
    </>
  );
};

export default NewPatient;
