import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './App';
import {
    Counter,
    JoinLogin,
    JoinLoginEmail,
    List,
  } from './containers';

export default function routes(store) {
  const requireLogin = (nextState, replaceState, cb) => {
    function checkAuth() {
      const { auth: { user }} = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replaceState(null, '/login');
      }
      cb();
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth);
    } else {
      checkAuth();
    }
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      <IndexRoute component={List} />
      <Route path="counter" component={Counter} increment={1} color="darkred" />
      <Route path="join-login" component={JoinLogin}>
        <IndexRoute component={JoinLoginEmail} />
      </Route>
    </Route>
  );
}
