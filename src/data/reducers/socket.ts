import { Action, handleActions } from 'redux-actions';
import { SocketStatus } from '../models/SocketStatus';

export interface SocketState {
  status: SocketStatus;
  error: Error;
}

const defaultState: SocketState = {
  status: SocketStatus.Disconnected,
  error: null
};

const authReducer = handleActions<SocketState>({
  SOCKET_CONNECTED: state => ({
    ...state,
    status: SocketStatus.Connected
  }),
  SOCKET_DISCONNECTED: state => ({
    ...state,
    status: SocketStatus.Disconnected
  }),
  SOCKET_ERROR: (state, action: Action<Error>) => ({
    ...state,
    status: SocketStatus.Error,
    error: action.payload
  })
},
defaultState);

export default authReducer;
