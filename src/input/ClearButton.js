import React, { PropTypes } from 'react';

import Icon from '../Icon';

function ClearButton({onClick, ...rest}) {
  return (
    <button
      type="button"
      title="Clear input value"
      className="input-clear-x btn btn-default btn-xs"
      onClick={onClick}
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
