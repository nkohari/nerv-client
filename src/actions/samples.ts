import { createAction } from 'redux-actions';
import { API, Sample } from 'src/data';

export const loadSamplesByDevice = (groupid: string, agentid: string, deviceid: string, period: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(samplesLoading());
    API.samples.listByDevice(groupid, agentid, deviceid, period, auth.token).then(samples => {
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
    API.samples.listByAgent(groupid, agentid, period, auth.token).then(samples => {
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
    API.samples.listByGroup(groupid, period, auth.token).then(samples => {
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
    API.samples.listByUser(period, auth.token).then(samples => {
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
