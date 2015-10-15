const UPDATE = 'email/UPDATE';
const ASYNC_VALIDATE = 'email/ASYNC_VALIDATE';
const ASYNC_VALIDATION = 'email/ASYNC_VALIDATION';
const ASYNC_REQUEST_FAILURE = 'email/ASYNC_REQUEST_FAILURE';

import emailValidate from './emailValidate';

const initialState = {
  asyncValid: false,
  asyncValidating: false,
  asyncRequestFailure: false,
  errorMsg: null,
  hasErrors: false,
  helpMsg: 'Please enter your email address.',
  // validMsg: 'This looks like a valid email.',
  initial: '',
  label: 'Email',
  onLine: true,
  placeholder: 'you@example.com',
  required: true,
  status: null,
  user: null,
  value: '',
  visited: false,
};

function isOnLine() {
  return navigator.onLine;
}

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
    case ASYNC_REQUEST_FAILURE:
      return {
        ...state,
        ...action.payload,
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
// Most likely a network failure.
function handleAsyncFailure() {
  // @TODO do something with err.
  return {
    type: ASYNC_REQUEST_FAILURE,
    payload: {
      asyncRequestFailure: true,
      asyncValidating: false,
      onLine: isOnLine(),
    },
  };
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  } else if (response.status === 400) {
    return {
      hasErrors: true,
      errorMsg: 'Invalid email address.',
      // statusCode: response.status,
    };
  }
  // Probably a server error.
  return {
    statusText: response.statusText,
    statusCode: response.status,
    asyncRequestFailure: true,
  };
}

// Update the curent value. Update various properties based on validation.
export function onChange(email) {
  // Get initial validation results.
  const syncValidateResults = emailValidate(email);
  // Paint the basic action.
  const action = {
    type: UPDATE,
    payload: {
      ...syncValidateResults,
      onLine: isOnLine(),
    },
  };
  // Send action object. No async processing.
  return action;
}

export function onSubmit() {
  return (dispatch, getState) => {
    // @TODO Need a way to know what the root key for this module.
    const { email: {hasErrors, value, asyncValidating} } = getState();
    // Decide if we need an async validation.
    if (hasErrors) {
      return;
    }
    if (asyncValidating) {
      return;
    }
    if (!isOnLine()) {
      dispatch(handleAsyncFailure());
      return;
    }
    // Dispatch ASYNC_VALIDATE event.
    dispatch({type: ASYNC_VALIDATE});
    // Run async call.
    const options = {
      //credentials: 'include',
    };
    fetch(`http://kc.l:3031/api/user/email/${value}`, options)
      .then(checkStatus)
      .then(json => dispatch(handleAsyncValidation(json)))
      .catch((err) => dispatch(handleAsyncFailure(err)));
  };
}

export function sendToken(email) {
  //@TODO send token request to server.
  console.log(email);
  return;
}
