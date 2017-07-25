import { NervApiClient, Credentials } from 'nerv-api';

export function createApiClient(credentials?: Credentials): NervApiClient {
  return new NervApiClient(process.env.API_HOST, { credentials });
}
