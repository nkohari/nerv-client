import * as React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Shell from './Shell';
import { DashboardPage, LoginPage, SignupPage } from './pages';
import { redirectIfAuthenticated, redirectIfNotAuthenticated } from './utils';

const createRouter = history => (
  <Router history={history}>
    <Route path='/' component={redirectIfNotAuthenticated(Shell)}>
      <IndexRoute component={DashboardPage} />
    </Route>
    <Route path='login' component={redirectIfAuthenticated(LoginPage)} />
    <Route path='signup' component={redirectIfAuthenticated(SignupPage)} />
  </Router>
);

export default createRouter;
