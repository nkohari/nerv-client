import { createAction } from 'redux-actions';
import api from '../api';
import Group from '../models/Group';

export const loadAllGroups = () => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(groupsLoading());
    api.groups.list(auth.token)
    .then(groups => {
      dispatch(groupsLoaded(groups));
    })
    .catch(error => {
      dispatch(groupsError(error));
    });
  }
);

export const loadGroup = (groupid: string) => (
  (dispatch, getState) => {
    const { auth, groups } = getState();
    if (!groups.items.find(g => g.id === groupid)) {
      dispatch(groupsLoading());
      api.groups.get(groupid, auth.token)
      .then(group => {
        dispatch(groupsLoaded([group]));
      })
      .catch(error => {
        dispatch(groupsError(error));
      });
    }
  }
);

export const groupsLoading = createAction('GROUPS_LOADING');
export const groupsLoaded = createAction<Group[]>('GROUPS_LOADED');
export const groupsError = createAction<Error>('GROUPS_ERROR');
