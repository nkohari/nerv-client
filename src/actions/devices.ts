import { createAction } from 'redux-actions';
import { createApiClient, Device } from 'src/data';
import { Toaster } from 'src/services';

export const loadDevice = (groupid: string, agentid: string, deviceid: string) => (
  (dispatch, getState) => {
    const { auth, devices } = getState();
    if (!devices.has(deviceid)) {
      dispatch(devicesLoading());
      createApiClient(auth).devices.get(groupid, agentid, deviceid).then(device => {
        dispatch(devicesLoaded([device]));
      })
      .catch(error => {
        Toaster.error(error);
      });
    }
  }
);

export const loadDevicesByAgent = (groupid: string, agentid: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(devicesLoading());
    createApiClient(auth).devices.listByAgent(groupid, agentid).then(devices => {
      dispatch(devicesLoaded(devices));
    })
    .catch(error => {
      Toaster.error(error);
    });
  }
);

export const loadDevicesByGroup = (groupid: string) => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(devicesLoading());
    createApiClient(auth).devices.listByGroup(groupid).then(devices => {
      dispatch(devicesLoaded(devices));
    })
    .catch(error => {
      Toaster.error(error);
    });
  }
);

export const updateDevice = (groupid: string, agentid: string, deviceid: string, data: Partial<Device>) => (
  (dispatch, getState) => {
    const { auth } = getState();
    createApiClient(auth).devices.update(groupid, agentid, deviceid, data).then(device => {
      dispatch(devicesLoaded([device]));
    })
    .catch(error => {
      Toaster.error(error);
    });
  }
);

export const devicesLoading = createAction('DEVICES_LOADING');
export const devicesLoaded = createAction<Device[]>('DEVICES_LOADED');
