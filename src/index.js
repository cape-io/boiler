import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

import configureStore from './configureStore';

import getRoutes from './routes';
const initialState = {};
const store = configureStore(initialState, getRoutes);

const component = <ReduxRouter routes={getRoutes(store)} />;
const destEl = document.getElementById('root');

render(
  <Provider store={store}>
    { component }
  </Provider>,
  destEl
);

if (process.env.NODE_ENV !== 'production') {
  // Use require because imports can't be conditional.
  // In production, you should ensure process.env.NODE_ENV
  // is envified so that Uglify can eliminate this
  // module and its dependencies as dead code.
  require('./createDevToolsWindow')(store);
}
