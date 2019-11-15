import React from 'react';

import ValidationAlert from './ValidationAlert';

const RadioInput = ({ name, label, checked, value, type, alert, setInputs }) => (
  <div className="input__group-radio">
    <input required checked={checked} id={name} name={name} value={value} type={type} onChange={setInputs} />
    <label htmlFor={name}>{label}</label>
    <ValidationAlert content={alert} />
  </div>
);

export default RadioInput;
