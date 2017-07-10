import { getApiUrl } from 'src/utils';

function get(path: string, token?: string): Promise<any> {
  return request(path, {
    method: 'get',
    headers: createHeaders(token)
  });
}

function post(path: string, body: any, token?: string): Promise<any> {
  return request(path, {
    method: 'post',
    headers: createHeaders(token),
    body: JSON.stringify(body)
  });
}

function request(path: string, options: object): Promise<any> {
  return fetch(getApiUrl(path), options).then(res => {
    const json = res.json();
    if (res.status >= 200 && res.status <= 299) {
      return json;
    } else {
      return json.then(err => { throw err; });
    }
  });
}

function createHeaders(token: string) {
  const headers = new Headers();

  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');

  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  return headers;
}

export default {
  get,
  post
};
