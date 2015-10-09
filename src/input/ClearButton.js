import React, { PropTypes } from 'react';

import Icon from '../Icon';

function ClearButton({onClick, ...rest}) {
  const style = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
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
      {...rest}
    >
      <Icon symbol="remove" />
    </button>
  );
}
ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ClearButton;
