import { createAction } from 'redux-actions';
import { createApiClient, Sample } from 'src/data';

export const loadSamplesByDevice = (groupid: string, agentid: string, deviceid: string, period: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(samplesLoading());
    createApiClient(auth).samples.listByDevice(groupid, agentid, deviceid, period).then(samples => {
      dispatch(samplesLoaded(samples));
    })
    .catch(error => {
      dispatch(samplesError(error));
    });
  }
);

export const loadSamplesByAgent = (groupid: string, agentid: string, period: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(samplesLoading());
    createApiClient(auth).samples.listByAgent(groupid, agentid, period).then(samples => {
      dispatch(samplesLoaded(samples));
    })
    .catch(error => {
      dispatch(samplesError(error));
    });
  }
);

export const loadSamplesByGroup = (groupid: string, period: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(samplesLoading());
    createApiClient(auth).samples.listByGroup(groupid, period).then(samples => {
      dispatch(samplesLoaded(samples));
    })
    .catch(error => {
      dispatch(samplesError(error));
    });
  }
);

export const loadSamplesByUser = (period: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(samplesLoading());
    createApiClient(auth).samples.list(period).then(samples => {
      dispatch(samplesLoaded(samples));
    })
    .catch(error => {
      dispatch(samplesError(error));
    });
  }
);

export const samplesLoading = createAction('SAMPLES_LOADING');
export const samplesLoaded = createAction<Sample[]>('SAMPLES_LOADED');
export const samplesError = createAction<FetchError>('SAMPLES_ERROR');
