import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import FieldGroup from '../../components/Form/Form'
import * as actions from '../../redux/modules/email'

// Move into a constants file or something.
const FORM_ID = 'cape/login'

// This is where we define computed fields (reselect module) or make other changes.
// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const {
    entities: { forms },
  } = state
  const form = forms[FORM_ID]
  return {
    // A unique name for this form.
    form: form.id,
    // All the fields in your form.
    fields: form.fields,
    // Details needed for the form html elements.
    formInfo: form,
  }
}

// Which action creators does it want to receive by props?
// This gets merged into props too.
// Not sure why it needs to happen here.
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actions, dispatch)
// }

function handleSubmit(data) {
  console.log(data);
}

export default compose(
  connect(mapStateToProps),
  reduxForm({
    onSubmit: handleSubmit,
  })
)(FieldGroup)
