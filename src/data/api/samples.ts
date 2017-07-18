import { Sample, request } from 'src/data';

export function listByUser(period: string, token: string): Promise<Sample[]> {
  const url = '/samples';
  const params = { period };
  return request.get(url, { params, token }).then(result => (
    result.samples.map(item => new Sample(item))
  ));
}

export function listByGroup(groupid: string, period: string, token: string): Promise<Sample[]> {
  const url = `/groups/${groupid}/samples`;
  const params = { period };
  return request.get(url, { params, token }).then(result => (
    result.samples.map(item => new Sample(item))
  ));
}

export function listByAgent(groupid: string, agentid: string, period: string, token: string): Promise<Sample[]> {
  const url = `/groups/${groupid}/agents/${agentid}/samples`;
  const params = { period };
  return request.get(url, { params, token }).then(result => (
    result.samples.map(item => new Sample(item))
  ));
}

export function listByDevice(groupid: string, agentid: string, deviceid: string, period: string, token: string): Promise<Sample[]> {
  const url = `/groups/${groupid}/agents/${agentid}/devices/${deviceid}/samples`;
  const params = { period };
  return request.get(url, { params, token }).then(result => (
    result.samples.map(item => new Sample(item))
  ));
}
