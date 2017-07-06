import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import * as persistState from 'redux-localstorage';
import * as reducers from '../reducers';

export default function configureStore(initialState = {}) {
  const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    }),
    initialState,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(browserHistory),
        createLogger()
      ),
      persistState('auth')
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const newRootReducer = require('../reducers').default; // tslint:disable-line:no-require-imports
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
}
