import React from 'react';
import ValidationAlert from './ValidationAlert';

const PasswordInput = ({ name, label, required, type, alert, setInputs }) => (
  <div className="form__group __text">
    <input required={required} id={name} name={name} type={type} onChange={setInputs} />
    <label htmlFor={name}>{label}</label>
    <span className="bar" />
    <ValidationAlert content={alert} />
  </div>
);

export default PasswordInput;
