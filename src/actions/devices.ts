import { createAction } from 'redux-actions';
import { API, Device } from 'data';

export const loadDevice = (groupid: string, agentid: string, deviceid: string) => (
  (dispatch, getState) => {
    const { auth, devices } = getState();
    if (!devices.items.find(a => a.id === agentid)) {
      dispatch(devicesLoading());
      API.devices.get(groupid, agentid, deviceid, auth.token)
      .then(device => {
        dispatch(devicesLoaded([device]));
      })
      .catch(error => {
        dispatch(devicesError(error));
      });
    }
  }
);

export const loadDevicesByAgent = (groupid: string, agentid: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(devicesLoading());
    API.devices.listByAgent(groupid, agentid, auth.token)
    .then(devices => {
      dispatch(devicesLoaded(devices));
    })
    .catch(error => {
      dispatch(devicesError(error));
    });
  }
);

export const loadDevicesByGroup = (groupid: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(devicesLoading());
    API.devices.listByGroup(groupid, auth.token)
    .then(devices => {
      dispatch(devicesLoaded(devices));
    })
    .catch(error => {
      dispatch(devicesError(error));
    });
  }
);

export const devicesLoading = createAction('DEVICES_LOADING');
export const devicesLoaded = createAction<Device[]>('DEVICES_LOADED');
export const devicesError = createAction<Error>('DEVICES_ERROR');
