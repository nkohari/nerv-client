import { createAction } from 'redux-actions';

export const socketConnected = createAction('SOCKET_CONNECTED');
export const socketDisconnected = createAction('SOCKET_DISCONNECTED');
export const socketError = createAction<Error>('SOCKET_ERROR');
export const messageReceived = createAction('MESSAGE_RECEIVED');
