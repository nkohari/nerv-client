import { createAction } from 'redux-actions';
import { MeasureEvent, ModelEvent } from 'src/data';

export const socketConnected = createAction('SOCKET_CONNECTED');
export const socketDisconnected = createAction('SOCKET_DISCONNECTED');
export const socketError = createAction<Error>('SOCKET_ERROR');

export const measureEventReceived = createAction<MeasureEvent>('MEASURE_EVENT_RECEIVED');
export const modelEventReceived = createAction<ModelEvent>('MODEL_EVENT_RECEIVED');
