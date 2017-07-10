import { applyMiddleware, combineReducers, compose, createStore, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import { routerForBrowser } from 'redux-little-router';
import * as persistState from 'redux-localstorage';
import { reducers } from 'src/data';

export function configureStoreForProduction(routes, initialState) {
  const router = routerForBrowser({ routes });

  return createStore(
    combineReducers({
      router: router.reducer,
      ...reducers
    }),
    initialState,
    compose(
      router.enhancer as StoreEnhancer<any>,
      applyMiddleware(
        thunk,
        router.middleware
      ),
      persistState('auth')
    )
  );
}
