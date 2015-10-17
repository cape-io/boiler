import React, { PropTypes } from 'react';
import classNames from 'classnames';

// A simple span that displays help text.
// Optional class added when help is related to an error.
function Help({helpMsg, errorMsg, hasErrors, id, children, ...rest}) {
  const className = classNames({
    'help-block': true,
    'validation-message': hasErrors
  });

  return (
    <span className={className} id={`${id}-helpBlock`} {...rest}>
      { children }
      { helpMsg ? helpMsg + ' ' : false }
      { errorMsg ? errorMsg : false }
    </span>
  );
}

Help.propTypes = {
  helpMsg: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  hasErrors: PropTypes.bool
};

export default Help;
