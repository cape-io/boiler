import React, { PropTypes } from 'react'

import Field from './Field'
import FormGroup from './FormGroup'
import Buttons from './Buttons'

function FieldGroup({ id, label, editable, required, status, children, ...other }) {
  const { onClose, onSubmit, hasErrors, asyncValidating, value } = other
  let ButtonsEl = false
  if (onClose || onSubmit) {
    const disabled = hasErrors || asyncValidating || (required && !value)
    ButtonsEl = <Buttons onClose={onClose} onSubmit={onSubmit} disabled={disabled} />
  }
  return (
    <FormGroup id={id} label={label} editable={editable} required={required} status={status}>
      <Field id={id} status={status} disabled={asyncValidating} {...other}>
        { ButtonsEl }
      </Field>
      { children }
    </FormGroup>
  )
}

FieldGroup.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
}
FormGroup.defaultProps = {
  editable: true,
  required: false,
}

export default FieldGroup
