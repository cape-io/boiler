const UPDATE = 'email/UPDATE';
const ASYNC_VALIDATION = 'email/ASYNC_VALIDATION';

import emailValidate from './emailValidate';

const initialState = {
  asyncValid: false,
  asyncValidating: false,
  errorMsg: null,
  hasErrors: false,
  helpMsg: 'Please enter your email address.',
  initial: '',
  label: 'Email',
  placeholder: 'you@example.com',
  status: null,
  value: '',
  visited: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ASYNC_VALIDATION:
    case UPDATE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

function shouldAsyncValidate(payload) {
  if (payload.hasErrors) {
    return false;
  }
  return true;
}

function handleAsyncValidation({isValid}) {
  // @TODO Do something with invalid result or error.
  return {
    type: ASYNC_VALIDATION,
    payload: {
      asyncValidating: false,
      asyncValid: isValid
    }
  };
}

// Update the curent value. Update various properties based on validation.
export function onChange(email) {
  // Get initial validation results.
  const syncValidateResults = emailValidate(email);
  // Paint the basic action.
  const action = {
    type: UPDATE,
    payload: syncValidateResults
  };
  // Decide if we need an async validation.
  if (shouldAsyncValidate(syncValidateResults)) {
    // Adjust the payload before sending the first action.
    action.payload.asyncValidating = true;
    // Return a function with the first param dispatch.
    return dispatch => {
      // Send the initial action.
      dispatch(action);
      setTimeout(() => {
        dispatch(handleAsyncValidation({isValid: true}));
      }, 1000);
    };
  }
  // Send action object. No async processing.
  return action;
}
