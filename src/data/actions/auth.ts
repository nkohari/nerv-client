import { createAction } from 'redux-actions';
import User from '../models/User';

export type UserLoggedInPayload = {
  token: string;
  user: User;
};

export const userLoggedIn = createAction<UserLoggedInPayload>('USER_LOGGED_IN');
export const userLoggedOut = createAction('USER_LOGGED_OUT');
