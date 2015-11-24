import React from 'react'
import { IndexRoute, Route } from 'react-router'

import {
    App,
    Counter,
    JoinLogin,
    JoinLoginEmail,
    List,
    RepoPage,
    UserPage,
  } from './containers'

/**
 * Please keep routes in alphabetical order
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={List} />
    <Route path="counter" component={Counter} increment={1} color="darkred" />
    <Route path="join-login" component={JoinLogin}>
      <IndexRoute component={JoinLoginEmail} />
    </Route>
    <Route path="gh/:login/:name"
           component={RepoPage} />
         <Route path="gh/:login"
           component={UserPage} />
  </Route>
)
