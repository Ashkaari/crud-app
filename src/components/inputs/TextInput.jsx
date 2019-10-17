import React from 'react';
import ValidationAlert from './ValidationAlert';

import '../../styles/component-inputs.scss';

const TextInput = ({ name, label, required, type, value, alert, setInputs }) => (
  <div className="form__group">
    <input required={required} id={name} name={name} type={type} value={value || ''} onChange={setInputs} />
    <label htmlFor={name}>{label}</label>
    <span className="bar" />
    <ValidationAlert content={alert} />
  </div>
);

export default TextInput;
