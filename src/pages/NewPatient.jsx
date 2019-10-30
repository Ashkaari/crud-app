import React from 'react';
import FormPanel from '../components/FormPanel';
import patientModel from '../models/patientModel';

import 'styles/_pages/new-patient.scss';

const NewPatient = () => {
  return (
    <>
      <div className="new-patient__title _page-title">New patient form</div>
      <FormPanel
        className={'new-patient__form'}
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
