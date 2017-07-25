import { createAction } from 'redux-actions';
import { Agent, createApiClient } from 'src/data';
import { Toaster } from 'src/services';

export const loadAgent = (groupid: string, agentid: string) => (
  (dispatch, getState) => {
    const { auth, agents } = getState();
    if (!agents.has(agentid)) {
      dispatch(agentsLoading());
      createApiClient(auth).agents.get(groupid, agentid).then(agent => {
        dispatch(agentsLoaded([agent]));
      })
      .catch(error => {
        Toaster.error(error);
      });
    }
  }
);

export const loadAgentsByGroup = (groupid: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(agentsLoading());
    createApiClient(auth).agents.listByGroup(groupid).then(agents => {
      dispatch(agentsLoaded(agents));
    })
    .catch(error => {
      Toaster.error(error);
    });
  }
);

export const loadAgentsByUser = () => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(agentsLoading());
    createApiClient(auth).agents.list().then(agents => {
      dispatch(agentsLoaded(agents));
    })
    .catch(error => {
      Toaster.error(error);
    });
  }
);

export const updateAgent = (groupid: string, agentid: string, data: Partial<Agent>) => (
  (dispatch, getState) => {
    const { auth } = getState();
    createApiClient(auth).agents.update(groupid, agentid, data).then(agent => {
      dispatch(agentsLoaded([agent]));
    })
    .catch(error => {
      Toaster.error(error);
    });
  }
);

export const agentsLoading = createAction('AGENTS_LOADING');
export const agentsLoaded = createAction<Agent[]>('AGENTS_LOADED');
