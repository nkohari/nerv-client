import { createAction } from 'redux-actions';
import { API, Agent } from 'src/data';

export const loadAgent = (groupid: string, agentid: string) => (
  (dispatch, getState) => {
    const { auth, agents } = getState();
    if (!agents.has(agentid)) {
      dispatch(agentsLoading());
      API.agents.get(groupid, agentid, auth.token)
      .then(agent => {
        dispatch(agentsLoaded([agent]));
      })
      .catch(error => {
        dispatch(agentsError(error));
      });
    }
  }
);

export const loadAgentsByGroup = (groupid: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(agentsLoading());
    API.agents.listByGroup(groupid, auth.token)
    .then(agents => {
      dispatch(agentsLoaded(agents));
    })
    .catch(error => {
      dispatch(agentsError(error));
    });
  }
);

export const loadAgentsByUser = () => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(agentsLoading());
    API.agents.listByUser(auth.token)
    .then(agents => {
      dispatch(agentsLoaded(agents));
    })
    .catch(error => {
      dispatch(agentsError(error));
    });
  }
);

export const updateAgent = (groupid: string, agentid: string, data: Partial<Agent>) => (
  (dispatch, getState) => {
    const { auth } = getState();
    API.agents.update(groupid, agentid, data, auth.token).then(agent => {
      dispatch(agentsLoaded([agent]));
    })
    .catch(error => {
      dispatch(agentsError(error));
    });
  }
);

export const agentsLoading = createAction('AGENTS_LOADING');
export const agentsLoaded = createAction<Agent[]>('AGENTS_LOADED');
export const agentsError = createAction<FetchError>('AGENTS_ERROR');
