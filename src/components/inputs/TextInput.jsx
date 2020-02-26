import React from 'react';
import ValidationAlert from './ValidationAlert';

const TextInput = ({ name, label, type, value, alert, setInputs }) => (
  <div className={`input__group ${alert ? '_error' : ''}`}>
    <input required id={name} name={name} type={type} value={value || ''} onChange={setInputs} />
    <label htmlFor={name}>{label}</label>
    <ValidationAlert content={alert} />
  </div>
);

export default TextInput;
