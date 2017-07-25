import { createAction } from 'redux-actions';
import { Credentials } from 'src/data';

export const userLoggedIn = createAction<Credentials>('USER_LOGGED_IN');
export const userLoggedOut = createAction('USER_LOGGED_OUT');
