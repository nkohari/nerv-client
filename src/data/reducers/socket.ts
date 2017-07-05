import { Action, handleActions } from 'redux-actions';
import { SocketErrorPayload } from '../actions/socket';

export type SocketStatus = 'disconnected' | 'connected' | 'error';

export interface SocketState {
  status: SocketStatus;
  error: Error;
}

const defaultState: SocketState = {
  status: 'disconnected',
  error: null
};

const authReducer = handleActions<SocketState>({
  SOCKET_CONNECTED: state => ({
    ...state,
    status: 'connected'
  }),
  SOCKET_DISCONNECTED: state => ({
    ...state,
    status: 'disconnected'
  }),
  SOCKET_ERROR: (state, action: Action<SocketErrorPayload>) => ({
    ...state,
    status: 'error',
    error: action.payload.error
  })
},
defaultState);

export default authReducer;
