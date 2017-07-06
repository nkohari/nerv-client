import { Action, handleActions } from 'redux-actions';
import { GroupsLoadedPayload, GroupsErrorPayload } from '../actions/groups';
import Group from '../models/Group';
import { LoadStatus } from '../models/LoadStatus';
import { hashBy } from '../../utils';

export interface GroupsState {
  items: Group[];
  byId: { [groupid: string]: Group };
  status: LoadStatus;
  error: Error;
}

const defaultState: GroupsState = {
  items: [],
  byId: {},
  status: LoadStatus.Ready,
  error: null
};

function merge(oldItemsById, newItems) {
  const byId = { ...oldItemsById, ...hashBy(newItems, 'id') };
  const items = Object.keys(byId).map(id => byId[id]);
  return { byId, items };
}

const authReducer = handleActions<GroupsState>({
  GROUPS_LOADING: state => ({
    ...state,
    status: LoadStatus.Loading,
    error: null
  }),
  GROUPS_LOADED: (state, action: Action<GroupsLoadedPayload>) => ({
    ...state,
    status: LoadStatus.Ready,
    ...merge(state.byId, action.payload.groups)
  }),
  GROUPS_ERROR: (state, action: Action<GroupsErrorPayload>) => ({
    ...state,
    status: LoadStatus.Error,
    error: action.payload.error
  })
},
defaultState);

export default authReducer;
