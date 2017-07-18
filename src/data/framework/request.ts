import axios from 'axios';
import { getApiUrl } from 'src/utils';

interface GetRequestConfig {
  params?: { [name: string]: any };
  token?: string;
}

interface PostRequestConfig {
  data: any;
  token?: string;
}
interface PutRequestConfig {
  data: any;
  token?: string;
}

function get(path: string, config?: GetRequestConfig): Promise<any> {
  return axios({
    method: 'get',
    url: getApiUrl(path),
    headers: createHeaders(config.token),
    params: config.params
  }).then(response => response.data);
}

function post(path: string, config?: PostRequestConfig): Promise<any> {
  return axios({
    method: 'post',
    url: getApiUrl(path),
    headers: createHeaders(config.token),
    data: config.data
  }).then(response => response.data);
}

function put(path: string, config?: PutRequestConfig): Promise<any> {
  return axios({
    method: 'put',
    url: getApiUrl(path),
    headers: createHeaders(config.token),
    data: config.data
  }).then(response => response.data);
}

function createHeaders(token: string) {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : null
  };
}

export default {
  get,
  post,
  put
};
