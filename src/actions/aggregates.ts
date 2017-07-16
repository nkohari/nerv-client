import { createAction } from 'redux-actions';
import { API, Aggregate } from 'src/data';

export const loadAggregatesByDevice = (groupid: string, agentid: string, deviceid: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(aggregatesLoading());
    API.aggregates.listByDevice(groupid, agentid, deviceid, auth.token).then(aggregates => {
      dispatch(aggregatesLoaded(aggregates));
    })
    .catch(error => {
      dispatch(aggregatesError(error));
    });
  }
);

export const loadAggregatesByAgent = (groupid: string, agentid: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(aggregatesLoading());
    API.aggregates.listByAgent(groupid, agentid, auth.token).then(aggregates => {
      dispatch(aggregatesLoaded(aggregates));
    })
    .catch(error => {
      dispatch(aggregatesError(error));
    });
  }
);

export const loadAggregatesByGroup = (groupid: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(aggregatesLoading());
    API.aggregates.listByGroup(groupid, auth.token).then(aggregates => {
      dispatch(aggregatesLoaded(aggregates));
    })
    .catch(error => {
      dispatch(aggregatesError(error));
    });
  }
);

export const loadAggregatesByUser = () => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(aggregatesLoading());
    API.aggregates.listByUser(auth.token).then(aggregates => {
      dispatch(aggregatesLoaded(aggregates));
    })
    .catch(error => {
      dispatch(aggregatesError(error));
    });
  }
);

export const aggregatesLoading = createAction('AGGREGATES_LOADING');
export const aggregatesLoaded = createAction<Aggregate[]>('AGGREGATES_LOADED');
export const aggregatesError = createAction<FetchError>('AGGREGATES_ERROR');
