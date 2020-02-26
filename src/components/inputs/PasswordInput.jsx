import React from 'react';
import ValidationAlert from './ValidationAlert';

const PasswordInput = ({ name, label, required, type, alert, setInputs }) => (
  <div className={`input__group ${alert ? 'error' : ''}`}>
    <input required={required} id={name} name={name} type={type} onChange={setInputs} />
    <label htmlFor={name}>{label}</label>
    <span className="bar" />
    <ValidationAlert content={alert} />
  </div>
);

export default PasswordInput;
