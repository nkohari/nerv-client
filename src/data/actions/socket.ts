import { createAction } from 'redux-actions';

export type SocketErrorPayload = {
  error: Error
};

export const socketConnected = createAction('SOCKET_CONNECTED');
export const socketDisconnected = createAction('SOCKET_DISCONNECTED');
export const socketError = createAction<SocketErrorPayload>('SOCKET_ERROR');
export const messageReceived = createAction('MESSAGE_RECEIVED');
