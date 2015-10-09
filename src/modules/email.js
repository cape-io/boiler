const UPDATE = 'email/UPDATE';
import emailValidate from './emailValidate';

const initialState = {
  asyncValid: false,
  asyncValidating: false,
  errorMsg: null,
  hasErrors: false,
  helpMsg: 'Please enter your email address.',
  initial: '',
  placeholder: 'you@example.com',
  status: null,
  value: '',
  visited: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

// Update the curent value. Update various properties based on validation.
export function onChange(email) {
  return {
    type: UPDATE,
    payload: emailValidate(email)
  };
}
