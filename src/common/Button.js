import React, { PropTypes } from 'react';

const Button = (props) => {
  return (
    <button type={props.type}
            onClick={props.onClick}
            className="dc-btn dc-btn--primary">
      {props.value}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
