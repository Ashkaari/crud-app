import React from 'react';

import useForm from '../hooks/useForm';
import TextInput from './inputs/TextInput';
import DateInput from './inputs/DateInput';
import PasswordInput from './inputs/PasswordInput';
import Loader from './Loader';

import 'styles/_components/inputs.scss';

function FormPanel({ className, btnText, submitCallback, model, loading, error }) {
  const [fields, setInputs, setSubmit] = useForm(model, submitCallback);

  const Components = { TextInput, PasswordInput, DateInput };

  const capitalize = expression => expression.charAt(0).toUpperCase() + expression.slice(1);

  const renderInput = field => {
    if (field.type === 'group') {
      return (
        <div className="form__group" key={field.name}>
          <span className="form__group-header">{field.label}</span>
          <div className="form__group-inputs">
            {field.inputs.map(input => {
              const Component = Components[capitalize(input.type) + 'Input'];
              return <Component key={input.name} setInputs={setInputs} {...input} />;
            })}
          </div>
        </div>
      );
    } else {
      const Component = Components[capitalize(field.type) + 'Input'];
      return <Component key={field.name} setInputs={setInputs} {...field} />;
    }
  };

  let requiredAndNotFilled = false;

  if (fields.some(i => i.type === 'group')) {
    for (let field of fields) {
      requiredAndNotFilled =
        field.type === 'group' && field.required
          ? field.inputs.some(i => i.required && (!i.value || i.alert))
          : field.required && (!field.value || field.alert);

      if (requiredAndNotFilled) break;
    }
  }

  return (
    <div className={className || 'form'}>
      {fields.map(field => renderInput(field))}
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
