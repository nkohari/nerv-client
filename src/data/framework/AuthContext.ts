import { User } from 'data';

export interface AuthContext {
  token: string;
  user: User;
}
