import { getApiUrl } from '../utils';

const createHeaders = (token: string) => {
  const headers = new Headers();

  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');

  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  return headers;
};

function request<T>(path: string, options: object): Promise<T> {
  return fetch(getApiUrl(path), options).then(res => {
    const json = res.json();
    if (res.status >= 200 && res.status <= 299) {
      return json;
    } else {
      return json.then(err => { throw err; });
    }
  });
}

export function get<T = any>(path: string, token?: string): Promise<T> {
  return request<T>(path, {
    method: 'get',
    headers: createHeaders(token)
  });
}

export function post<T = any>(path: string, body: any, token?: string): Promise<T> {
  return request<T>(path, {
    method: 'post',
    headers: createHeaders(token),
    body: JSON.stringify(body)
  });
}
