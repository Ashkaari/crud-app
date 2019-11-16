import React, { useState } from 'react';
import { isEmpty } from 'lodash';

import TextInput from './inputs/TextInput';
import DateInput from './inputs/DateInput';
import PasswordInput from './inputs/PasswordInput';
import RadioInput from './inputs/RadioInput';

import Loader from './Loader';
import useForm from '../hooks/useForm';

import 'styles/_components/inputs.scss';

const FormPanel = ({ className, btnText, submitCallback, model, loading, error, validationErrors }) => {
  const [fields, setInputs, setSubmit, setErrors] = useForm(model, submitCallback);
  const [needParsing, toggleParse] = useState(false);

  const Components = { TextInput, PasswordInput, DateInput, RadioInput };

  if (!isEmpty(validationErrors) && !loading && needParsing) {
    setErrors(fields, validationErrors);
    toggleParse(false);
  }

  const capitalize = expression => expression.charAt(0).toUpperCase() + expression.slice(1);

  const renderInput = field => {
    const Component = Components[capitalize(field.type) + 'Input'];

    switch (field.type) {
      case 'group': {
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
      }

      case 'radio': {
        return (
          <div className="form__group" key={field.name}>
            <span className="form__group-header">{field.label}</span>
            <div className="form__group-inputs">
              {field.enum.map(item => {
                return (
                  <Component
                    key={item}
                    checked={item === field.value}
                    type={field.type}
                    name={field.name}
                    label={capitalize(item)}
                    value={item}
                    setInputs={setInputs}
                  />
                );
              })}
            </div>
          </div>
        );
      }

      default: {
        return <Component key={field.name} setInputs={setInputs} {...field} />;
      }
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
        <div
          className={`form__button ${requiredAndNotFilled ? 'disabled' : ''}`}
          onClick={() => {
            toggleParse(true);
            setSubmit();
          }}
        >
          {btnText}
        </div>
      )}
    </div>
  );
};

export default FormPanel;
