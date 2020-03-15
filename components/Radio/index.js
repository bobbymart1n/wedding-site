import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ label, value, onChange, name }) => {
  return (
    <label>
      {label}
      <input 
        type='radio'
        name={name}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

Radio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Radio;