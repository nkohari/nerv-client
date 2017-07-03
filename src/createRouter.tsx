import * as React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Shell from './Shell';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import authorize from './utils/authorize';

const createRouter = history => (
  <Router history={history}>
    <Route path='login' component={LoginPage} />
    <Route path='/' component={authorize(Shell)}>
      <IndexRoute component={DashboardPage} />
    </Route>
  </Router>
);

export default createRouter;
