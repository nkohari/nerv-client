import { createAction } from 'redux-actions';
import { createApiClient, Group } from 'src/data';
import { Toaster } from 'src/services';

export const loadGroup = (groupid: string) => (
  (dispatch, getState) => {
    const { auth, groups } = getState();
    if (!groups.has(groupid)) {
      dispatch(groupsLoading());
      createApiClient(auth).groups.get(groupid).then(group => {
        dispatch(groupsLoaded([group]));
      })
      .catch(error => {
        Toaster.error(error);
      });
    }
  }
);

export const loadGroupsByUser = () => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(groupsLoading());
    createApiClient(auth).groups.list().then(groups => {
      dispatch(groupsLoaded(groups));
    })
    .catch(error => {
      Toaster.error(error);
    });
  }
);

export const updateGroup = (groupid: string, data: Partial<Group>) => (
  (dispatch, getState) => {
    const { auth } = getState();
    createApiClient(auth).groups.update(groupid, data).then(device => {
      dispatch(groupsLoaded([device]));
    })
    .catch(error => {
      Toaster.error(error);
    });
  }
);

export const groupsLoading = createAction('GROUPS_LOADING');
export const groupsLoaded = createAction<Group[]>('GROUPS_LOADED');
