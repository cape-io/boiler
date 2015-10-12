import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Input from './Input';
import Help from './Help';

function Field({className, hasErrors, status, helpMsg, errorMsg, id, children, onSubmit, ...other}) {
  return (
    <div className={classNames('editable-form col-md-9', status, className)}>
      <div className="editable-row">
        <Input
          {...other}
          className="form-control"
          id={id}
          onSubmit={hasErrors ? undefined : onSubmit}
        />
        { children }
      </div>
      { helpMsg ? <Help {...{helpMsg, id, hasErrors, errorMsg}} /> : false }
    </div>
  );
}

Field.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Field;
