import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initializeCurrentLocation } from 'redux-little-router';
import { FocusStyleManager } from '@blueprintjs/core';
import { configureStore } from 'src/data';
import routes from './routes';
import 'whatwg-fetch';

FocusStyleManager.onlyShowFocusOnTabs();

const store = configureStore(routes, {});

const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

const render = () => {
  const App = require('./App').default; // tslint:disable-line
  ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>
  ), document.getElementById('root'));
};

render();

if (module.hot) {
  module.hot.accept('./App', render);
}
