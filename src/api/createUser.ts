import { post } from './request';
import { User } from '../data';

interface CreateUserPayload {
  username: string;
  password: string;
}

interface CreateUserResult {
  token: string;
  user: User;
}

export default function login(payload: CreateUserPayload): Promise<CreateUserResult> {
  return post<CreateUserResult>('/users', payload);
}
