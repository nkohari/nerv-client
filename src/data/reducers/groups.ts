import { Action, handleActions } from 'redux-actions';
import { Collection, merge } from '../framework';
import Group from '../models/Group';

const defaultState: Collection<Group> = {
  items: [],
  isLoading: false,
  error: null
};

const authReducer = handleActions<Collection<Group>>({
  GROUPS_LOADING: state => ({
    ...state,
    isLoading: true,
    error: null
  }),
  GROUPS_LOADED: (state, action: Action<Group[]>) => ({
    ...state,
    isLoading: false,
    items: merge(state.items, action.payload)
  }),
  GROUPS_ERROR: (state, action: Action<Error>) => ({
    ...state,
    isLoading: false,
    error: action.payload
  })
},
defaultState);

export default authReducer;
