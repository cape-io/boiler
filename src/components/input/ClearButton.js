import React, { PropTypes } from 'react';

import Icon from '../Icon';

function ClearButton({onClick, ...rest}) {
  const style = {
    position: 'absolute',
    top: 0,
    bottom: 5,
    right: 5,
    border: 'none',
    background: 'transparent',
    width: '3rem'
  };
  return (
    <button
      type="button"
      title="Clear input value"
      className="input-clear-x btn btn-default btn-xs"
      onClick={onClick}
      style={style}
      tabIndex="-1"
      {...rest}
    >
      <Icon symbol="remove" hidden="true" />
    </button>
  );
}
ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ClearButton;
