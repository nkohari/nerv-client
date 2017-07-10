import { applyMiddleware, combineReducers, compose, createStore, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import { routerForBrowser } from 'redux-little-router';
import { createLogger } from 'redux-logger';
import * as persistState from 'redux-localstorage';
import { reducers } from 'src/data';

export function configureStoreForDevelopment(routes, initialState) {
  const router = routerForBrowser({ routes });

  const store = createStore(
    combineReducers({
      router: router.reducer,
      ...reducers
    }),
    initialState,
    compose(
      router.enhancer as StoreEnhancer<any>,
      applyMiddleware(
        thunk,
        router.middleware,
        createLogger()
      ),
      persistState('auth')
    )
  );

  if (module.hot) {
    module.hot.accept('data', () => {
      const newRootReducer = require('data').reducers; // tslint:disable-line:no-require-imports
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
}
