import { post } from './request';
import { User } from '../data';

interface LoginResult {
  token: string;
  user: User;
}

export default function login(username: string, password: string): Promise<LoginResult> {
  return post<LoginResult>('/login', { username, password });
}
