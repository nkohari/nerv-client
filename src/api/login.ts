import { post } from './request';
import { User } from '../data';

interface LoginPayload {
  username: string;
  password: string;
}

interface LoginResult {
  token: string;
  user: User;
}

export default function login(payload: LoginPayload): Promise<LoginResult> {
  return post<LoginResult>('/login', payload);
}
