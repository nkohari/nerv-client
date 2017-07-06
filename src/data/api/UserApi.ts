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

class LoginResult {

  token: string;
  user: User;

  constructor(data: any) {
    this.token = data.token;
    this.user = new User(data.user);
  }

}

class UserApi extends Api {

  login(payload: LoginPayload): Promise<LoginResult> {
    return this.postRequest('/login', payload).then(result => new LoginResult(result));
  }

  create(payload: CreateUserPayload): Promise<LoginResult> {
    return this.postRequest('/users', payload).then(result => new LoginResult(result));
  }

}

export default UserApi;
