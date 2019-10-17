import React from 'react';

import useForm from '../hooks/useForm';
import TextInput from './inputs/TextInput';
import PasswordInput from './inputs/PasswordInput';
import Loader from './Loader';

function FormPanel({ btnText, submitCallback, model, loading, error }) {
  const [inputs, setInputs, setSubmit] = useForm(model, submitCallback);

  const Components = { TextInput, PasswordInput };

  const capitalize = expression => expression.charAt(0).toUpperCase() + expression.slice(1);

  const renderInput = input => {
    const Component = Components[capitalize(input.type) + 'Input'];
    return <Component key={input.name} setInputs={setInputs} {...input} />;
  };

  const requiredAndNotFilled = inputs.some(i => i.required && (!i.value || i.alert));

  return (
    <div className="form">
      {inputs.map(input => renderInput(input))}
      {error && <div className="text-danger">{error}</div>}
      {loading ? (
        <Loader />
      ) : (
        <div className={`form__button ${requiredAndNotFilled ? 'disabled' : ''}`} onClick={setSubmit}>
          {btnText}
        </div>
      )}
    </div>
  );
}

export default FormPanel;
