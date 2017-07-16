import { createAction } from 'redux-actions';
import { API, Group } from 'src/data';

export const loadGroup = (groupid: string) => (
  (dispatch, getState) => {
    const { auth, groups } = getState();
    if (!groups.has(groupid)) {
      dispatch(groupsLoading());
      API.groups.get(groupid, auth.token)
      .then(group => {
        dispatch(groupsLoaded([group]));
      })
      .catch(error => {
        dispatch(groupsError(error));
      });
    }
  }
);

export const loadGroupsByUser = () => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(groupsLoading());
    API.groups.listByUser(auth.token)
    .then(groups => {
      dispatch(groupsLoaded(groups));
    })
    .catch(error => {
      dispatch(groupsError(error));
    });
  }
);

export const groupsLoading = createAction('GROUPS_LOADING');
export const groupsLoaded = createAction<Group[]>('GROUPS_LOADED');
export const groupsError = createAction<FetchError>('GROUPS_ERROR');
