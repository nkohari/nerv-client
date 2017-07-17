import { createAction } from 'redux-actions';
import { API, Measure } from 'src/data';

export const loadMeasuresByGroup = (groupid: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(measuresLoading());
    API.measures.listByGroup(groupid, auth.token).then(measures => {
      dispatch(measuresLoaded(measures));
    })
    .catch(error => {
      dispatch(measuresError(error));
    });
  }
);

export const loadMeasuresByAgent = (groupid: string, agentid: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(measuresLoading());
    API.measures.listByAgent(groupid, agentid, auth.token).then(measures => {
      dispatch(measuresLoaded(measures));
    })
    .catch(error => {
      dispatch(measuresError(error));
    });
  }
);

export const loadMeasuresByDevice = (groupid: string, agentid: string, deviceid: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(measuresLoading());
    API.measures.listByDevice(groupid, agentid, deviceid, auth.token).then(measures => {
      dispatch(measuresLoaded(measures));
    })
    .catch(error => {
      dispatch(measuresError(error));
    });
  }
);

export const measuresLoading = createAction('MEASURES_LOADING');
export const measuresLoaded = createAction<Measure[]>('MEASURES_LOADED');
export const measuresError = createAction<FetchError>('MEASURES_ERROR');
