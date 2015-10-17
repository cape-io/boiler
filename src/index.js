import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-router';
import {Route} from 'react-router';

import configureStore from './configureStore';

import { App } from './App';
import CounterContainer from './containers/CounterContainer';
import Email from './containers/Email';

const store = configureStore();

render(
  <Provider store={store}>
    <ReduxRouter>
      <Route path="/" component={App}>
        <Route path="counter" component={CounterContainer} increment={1} color="darkred" />
        <Route path="login" component={Email} />
      </Route>
    </ReduxRouter>
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  // Use require because imports can't be conditional.
  // In production, you should ensure process.env.NODE_ENV
  // is envified so that Uglify can eliminate this
  // module and its dependencies as dead code.
  require('./createDevToolsWindow')(store);
}
