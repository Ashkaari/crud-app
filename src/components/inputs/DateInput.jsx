import React, { useRef, useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';

import ValidationAlert from './ValidationAlert';
import useOuterClick from '../../hooks/useOuterClick';

const DateInput = ({ name, label, required, value, alert, setInputs }) => {
  const [open, setVisibility] = useState(false);
  const groupRef = useRef(null);

  useOuterClick(e => {
    if (!e.target.className.includes('react-calendar')) {
      setVisibility(false);
    }
  }, groupRef);

  return (
    <div className="input__group _date" ref={groupRef}>
      <input
        required={required}
        id={name}
        name={name}
        type="text"
        defaultValue={value ? moment(value).format('DD.MM.YYYY') : ''}
        onClick={() => setVisibility(!open)}
      />
      <label htmlFor={name}>{label}</label>
      <span className="bar" />
      {open && (
        <Calendar
          onChange={e => {
            setVisibility(false);
            setInputs({ target: { name, value: e } });
          }}
        />
      )}
      <ValidationAlert content={alert} />
    </div>
  );
};

export default DateInput;
