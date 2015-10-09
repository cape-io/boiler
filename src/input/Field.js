import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Input from './Input';
import Help from './Help';

function Field({className, hasErrors, help, id, children, ...other}) {
  return (
    <div className={classNames('editable-form col-md-9', className)}>
      <div className="editable-row">
        <Input
          {...other}
          className="form-control"
          id={id}
        />
        { children }
      </div>
      { help ? <Help help={help} id={id} hasErrors={hasErrors} /> : false }
    </div>
  );
}

Field.propTypes = {
  id: PropTypes.string.isRequired
};

export default Field;
