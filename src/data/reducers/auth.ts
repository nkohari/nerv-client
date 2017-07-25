import { Action, handleActions } from 'redux-actions';
import { Credentials } from 'src/data';

const defaultState: Credentials = {
  token: null,
  user: null
};

const authReducer = handleActions<Credentials>({
  USER_LOGGED_IN: (state, action: Action<Credentials>) => ({
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
