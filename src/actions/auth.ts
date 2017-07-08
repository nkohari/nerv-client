import { createAction } from 'redux-actions';
import { AuthContext } from 'data';

export const userLoggedIn = createAction<AuthContext>('USER_LOGGED_IN');
export const userLoggedOut = createAction('USER_LOGGED_OUT');
