import { Action, handleActions } from 'redux-actions';
import { SocketErrorPayload } from '../actions/socket';
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
  SOCKET_ERROR: (state, action: Action<SocketErrorPayload>) => ({
    ...state,
    status: SocketStatus.Error,
    error: action.payload.error
  })
},
defaultState);

export default authReducer;
