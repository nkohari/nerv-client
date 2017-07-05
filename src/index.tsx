import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { FocusStyleManager } from '@blueprintjs/core';
import configureStore from './data/store';
import 'whatwg-fetch';

FocusStyleManager.onlyShowFocusOnTabs();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const render = () => {
  const createRouter = require('./createRouter').default; // tslint:disable-line:no-require-imports
  ReactDOM.render((
    <Provider store={store}>
      {createRouter(history)}
    </Provider>
  ), document.getElementById('app'));
};

render();

if (module.hot) {
  module.hot.accept(render);
}
