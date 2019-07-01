import React, { useState } from 'react';
import './Form.css';

const Form = ({ addNewColor, removeForm }) => {
  const [value, setValue] = useState('');

  function onFormSubmit(event) {
    event.preventDefault();
    addNewColor(value);
    removeForm();
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>
          <input
            type="color"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
