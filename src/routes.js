import React from 'react'
import { IndexRoute, Route } from 'react-router'

import {
    App,
    Counter,
    Explore,
    GithubUserPage,
    List,
    LoginForm,
    RepoPage,
    User,
    // UserPage,
  } from './containers'

/**
 * Please keep routes in alphabetical order
 */
export default function createRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={List} />
      <Route path="counter" component={Counter} increment={1} color="darkred" />
      <Route path="user" component={User}>
        <IndexRoute component={LoginForm} />
      </Route>
      <Route path="gh" component={Explore}>
        <Route
          path=":login/:name"
          component={RepoPage}
        />
        <Route
          path=":login"
          component={GithubUserPage}
        />
      </Route>
    </Route>
  )
}
