import * as React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Shell from './Shell';
import { HomePage, GroupPage, AgentPage, Login, Signup } from 'pages';
import { redirectIfAuthenticated, redirectIfNotAuthenticated } from 'utils';

const createRouter = history => (
  <Router history={history}>
    <Route path='login' component={redirectIfAuthenticated(Login)} />
    <Route path='signup' component={redirectIfAuthenticated(Signup)} />
    <Route path='/' component={redirectIfNotAuthenticated(Shell)}>
      <Route path=':groupid' component={GroupPage} />
      <Route path=':groupid/:agentid' component={AgentPage} />
      <IndexRoute component={HomePage} />
    </Route>
  </Router>
);

export default createRouter;
