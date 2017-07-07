import Api from './Api';
import User from '../models/User';

interface LoginPayload {
  username: string;
  password: string;
}

interface CreateUserPayload {
  username: string;
  password: string;
  email: string;
  agentid: string;
}

class AuthResult {

  token: string;
  user: User;

  constructor(data: any) {
    this.token = data.token;
    this.user = new User(data.user);
  }

}

class AuthApi extends Api {

  login(payload: LoginPayload): Promise<AuthResult> {
    return this.postRequest('/auth', payload).then(result => new AuthResult(result));
  }

  getToken(): Promise<AuthResult> {
    return this.getRequest('/auth').then(result => new AuthResult(result));
  }

  createUser(payload: CreateUserPayload): Promise<AuthResult> {
    return this.postRequest('/users', payload).then(result => new AuthResult(result));
  }

}

export default AuthApi;
