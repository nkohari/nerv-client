import { User } from 'src/data';

export interface AuthContext {
  token: string;
  user: User;
}
