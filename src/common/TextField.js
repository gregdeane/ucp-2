import React, { PropTypes } from 'react';

const TextField = (props) => {

  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  return (
    <div>
      <label htmlFor={props.name} className="dc-label">{props.label}</label>
      <input type="text"
             name={props.name}
             id={props.name}
             className="dc-input"
             placeholder={props.placeholder}
             onChange={handleChange} />
    </div>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default TextField;
