import { AuthContext, request, User } from 'data';

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

function createAuthContext(data: any): AuthContext {
  return {
    token: data.token,
    user: new User(data.user)
  };
}

function login(payload: LoginPayload): Promise<AuthContext> {
  return request.post('/auth', payload).then(result => createAuthContext(result));
}

function getToken(): Promise<AuthContext> {
  return request.get('/auth').then(result => createAuthContext(result));
}

function createUser(payload: CreateUserPayload): Promise<AuthContext> {
  return request.post('/users', payload).then(result => createAuthContext(result));
}

export default {
  login,
  getToken,
  createUser
};
