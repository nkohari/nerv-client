import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import * as persistState from 'redux-localstorage';
import * as reducers from '../reducers';

export default function configureStore(initialState = {}) {
  return createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    }),
    initialState,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(browserHistory)
      ),
      persistState('auth')
    )
  );
}
