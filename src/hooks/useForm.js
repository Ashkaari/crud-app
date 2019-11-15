import { useState } from 'react';

const useForm = (initModel, submitCallBack) => {
  const [inputs, setInputs] = useState(initModel);

  const handleChange = e => {
    e.persist && e.persist();
    inputs.forEach(i => {
      let group = i.type === 'group' ? i.inputs : inputs;
      parseInputGroup(group, e);

      setInputs([...inputs]);
    });
  };

  const handleSubmit = e => {
    e && e.preventDefault();
    inputs.forEach(i => {
      if (i.type === 'group') {
        validateInputGroup(i.inputs);
      } else {
        validateInput(i);
      }
    });

    inputs.some(i => i.alert) ? setInputs([...inputs]) : submitCallBack(inputs);
  };

  const handleRequestValidation = (inputs, errors) => {
    for (let key in errors) {
      let errorPath = key.split('.');
      let fieldIndex = inputs.findIndex(input => input.name === errorPath[0]);

      if (fieldIndex === -1) continue;
      if (errorPath.length > 1) {
        for (let i = 0; i < inputs[fieldIndex].inputs.length; i++) {
          let input = inputs[fieldIndex].inputs[i];
          if (input.name === errorPath[1]) {
            input.alert = errors[key];
            break;
          }
        }
      } else {
        inputs[fieldIndex] = { ...inputs[fieldIndex], alert: errors[key] };
      }
    }
    setInputs([...inputs]);
  };

  const parseInputGroup = (group, e) => {
    group.forEach(i => {
      if (i.name === e.target.name) {
        i.value = i.type === 'checkbox' ? e.target.checked : e.target.value;
        parseInput(i);
        validateInput(i);
      }
    });
  };

  const parseInput = input => (input.value = input.parseFun ? input.parseFun(input.value) : input.value);

  const validateInputGroup = inputs => {
    inputs.forEach(i => validateInput(i));
  };

  const validateInput = input => {
    let alert = null;
    input.validators &&
      input.validators.forEach(v => (alert = v.isValidFun && !v.isValidFun(input.value) ? v.alert : alert));
    input.alert = alert;
  };

  return [inputs, handleChange, handleSubmit, handleRequestValidation];
};

export default useForm;
