import { Measure, request } from 'src/data';

export function listByGroup(groupid: string, token: string): Promise<Measure[]> {
  const url = `/groups/${groupid}/measures`;
  return request.get(url, { token }).then(result => (
    result.measures.map(item => new Measure(item))
  ));
}

export function listByAgent(groupid: string, agentid: string, token: string): Promise<Measure[]> {
  const url = `/groups/${groupid}/agents/${agentid}/measures`;
  return request.get(url, { token }).then(result => (
    result.measures.map(item => new Measure(item))
  ));
}

export function listByDevice(groupid: string, agentid: string, deviceid: string, token: string): Promise<Measure[]> {
  const url = `/groups/${groupid}/agents/${agentid}/devices/${deviceid}/measures`;
  return request.get(url, { token }).then(result => (
    result.measures.map(item => new Measure(item))
  ));
}
