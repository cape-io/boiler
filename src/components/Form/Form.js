import React, { PropTypes } from 'react'

import Input from './Input'
import ReduxFormProps from './ReduxFormProps'

function Form(props) {
  const {
    asyncValidating,
    dirty,
    fields,
    active,
    handleSubmit,
    formInfo,
    invalid,
    resetForm,
    pristine,
    showFlags,
    valid,
    } = props
  const styles = {}

  return (
    <div>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        {
          formInfo.fields.map( fieldId => {
            const { id, hasAsyncValidate, ...other } = formInfo.field[fieldId]
            return (
              <Input
                key={fieldId}
                asyncValidating={hasAsyncValidate && asyncValidating}
                field={fields[fieldId]}
                styles={styles}
                showFlags={showFlags}
                {...other}
              />
            )
          })
        }
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-success" onClick={handleSubmit}>
              <i className="fa fa-paper-plane"/> Submit
            </button>
            <button className="btn btn-warning" onClick={resetForm} style={{ marginLeft: 15 }}>
              <i className="fa fa-undo"/> Reset
            </button>
          </div>
        </div>
      </form>

      <ReduxFormProps {...{ active, dirty, pristine, valid, invalid }} />
    </div>
  )
}
Form.propTypes = {
  active: PropTypes.string,
  asyncValidating: PropTypes.bool.isRequired,
  fields: PropTypes.object.isRequired,
  dirty: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  showFlags: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
  formInfo: PropTypes.object.isRequired,
}
Form.defaultProps = {
  showFlags: false,
}

export default Form
