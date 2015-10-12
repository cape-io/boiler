const UPDATE = 'email/UPDATE';
const ASYNC_VALIDATE = 'email/ASYNC_VALIDATE';
const ASYNC_VALIDATION = 'email/ASYNC_VALIDATION';

import emailValidate from './emailValidate';

const initialState = {
  asyncValid: false,
  asyncValidating: false,
  errorMsg: null,
  hasErrors: false,
  helpMsg: 'Please enter your email address.',
  // validMsg: 'This looks like a valid email.',
  initial: '',
  label: 'Email',
  placeholder: 'you@example.com',
  required: true,
  status: null,
  user: null,
  value: '',
  visited: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE:
      const { value, errorMsg, ...other } = action.payload;
      return {
        ...state,
        ...other,
        asyncValid: false,
        asyncValidating: false,
        errorMsg: value ? errorMsg : null,
        value: value,
        user: null,
      };
    case ASYNC_VALIDATE:
      return {
        ...state,
        asyncValidating: true,
      };
    case ASYNC_VALIDATION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

// Update the curent value. Update various properties based on validation.
export function onChange(email) {
  // Get initial validation results.
  const syncValidateResults = emailValidate(email);
  // Paint the basic action.
  const action = {
    type: UPDATE,
    payload: syncValidateResults,
  };
  // Send action object. No async processing.
  return action;
}

function handleAsyncValidation(res) {
  // @TODO Do something with invalid result or error.
  // Check to make sure state is still asyncValidating.
  return {
    type: ASYNC_VALIDATION,
    payload: {
      asyncValidating: false,
      asyncValid: !res.hasErrors,
      status: res.hasErrors ? 'error' : 'success',
      ...res,
    },
  };
}

export function onSubmit() {
  return (dispatch, getState) => {
    const { email: {hasErrors, value} } = getState();
    // Decide if we need an async validation.
    if (hasErrors) {
      console.error('Submit with errors should never happen.');
      return;
    }
    // Dispatch ASYNC_VALIDATE event.
    dispatch({type: ASYNC_VALIDATE});
    // Run async call.
    fetch(`http://kc.l:3031/api/user/email/${value}`)
      .then(response => response.json())
      .then(json => dispatch(handleAsyncValidation(json)));
  };
}
