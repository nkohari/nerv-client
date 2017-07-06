import * as React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Shell from './Shell';
import { HomePage, GroupPage, Login, Signup } from './pages';
import { redirectIfAuthenticated, redirectIfNotAuthenticated } from './utils';

const createRouter = history => (
  <Router history={history}>
    <Route path='/' component={redirectIfNotAuthenticated(Shell)}>
      <Route path='/{groupid}' component={GroupPage} />
      <IndexRoute component={HomePage} />
    </Route>
    <Route path='login' component={redirectIfAuthenticated(Login)} />
    <Route path='signup' component={redirectIfAuthenticated(Signup)} />
  </Router>
);

export default createRouter;
