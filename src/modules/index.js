import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import email from './email';

// Define what part of the store the reducer is responsible for.
export default combineReducers({
  email,
  router: routerStateReducer,
});
