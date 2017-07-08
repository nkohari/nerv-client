import { Action, handleActions } from 'redux-actions';
import { Collection, merge } from '../framework';
import Group from '../models/Group';
import { SocketMessage, ChangeEvent } from '../models';

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
  }),
  CHANGE_MESSAGE_RECEIVED: (state, action: Action<SocketMessage<ChangeEvent>>) => {
    const event = action.payload.body;
    if (event.type !== 'Group') {
      return state;
    } else {
      return {
        ...state,
        items: merge(state.items, [new Group(event.model)])
      };
    }
  }
},
defaultState);

export default authReducer;
