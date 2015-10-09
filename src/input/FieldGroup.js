import React, { PropTypes } from 'react';

import Field from './Field';
import FormGroup from './FormGroup';

function FieldGroup({id, label, editable, required, status, children, ...other}) {
  return (
    <FormGroup id={id} label={label} editable={editable} required={required} status={status}>
      <Field id={id} status={status} {...other} />
      { children }
    </FormGroup>
  );
}

FieldGroup.propTypes = {
  id: PropTypes.string.isRequired
};
FormGroup.defaultProps = {
  editable: true,
  required: false
};

export default FieldGroup;
