import { Action, handleActions } from 'redux-actions';
import { UserLoggedInPayload } from '../actions/auth';
import User from '../models/User';

export interface AuthState {
  token: string;
  user: User;
}

const defaultState: AuthState = {
  token: null,
  user: null
};

const authReducer = handleActions<AuthState>({
  USER_LOGGED_IN: (state, action: Action<UserLoggedInPayload>) => ({
    ...state,
    token: action.payload.token,
    user: action.payload.user
  }),
  USER_LOGGED_OUT: state => ({
    ...state,
    token: null,
    user: null
  })
},
defaultState);

export default authReducer;
