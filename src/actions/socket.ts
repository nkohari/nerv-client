import { createAction } from 'redux-actions';
import { SocketMessage, ChangeEvent } from 'src/data';

export const socketConnected = createAction('SOCKET_CONNECTED');
export const socketDisconnected = createAction('SOCKET_DISCONNECTED');
export const socketError = createAction<Error>('SOCKET_ERROR');

export const changeMessageReceived = createAction<SocketMessage<ChangeEvent>>('CHANGE_MESSAGE_RECEIVED');
