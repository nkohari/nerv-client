import { getApiUrl } from '../../utils';

abstract class Api {

  protected getRequest(path: string, token?: string): Promise<any> {
    return this.request(path, {
      method: 'get',
      headers: this.createHeaders(token)
    });
  }

  protected postRequest(path: string, body: any, token?: string): Promise<any> {
    return this.request(path, {
      method: 'post',
      headers: this.createHeaders(token),
      body: JSON.stringify(body)
    });
  }

  private request(path: string, options: object): Promise<any> {
    return fetch(getApiUrl(path), options).then(res => {
      const json = res.json();
      if (res.status >= 200 && res.status <= 299) {
        return json;
      } else {
        return json.then(err => { throw err; });
      }
    });
  }

  private createHeaders(token: string) {
    const headers = new Headers();

    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    if (token) {
      headers.append('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

}

export default Api;
