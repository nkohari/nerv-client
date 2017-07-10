import { Action, handleActions } from 'redux-actions';
import { AuthContext } from 'src/data';

const defaultState: AuthContext = {
  token: null,
  user: null
};

const authReducer = handleActions<AuthContext>({
  USER_LOGGED_IN: (state, action: Action<AuthContext>) => ({
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
