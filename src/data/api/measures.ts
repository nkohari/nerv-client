import { Measure, request } from 'src/data';

export function listByGroup(groupid: string, token: string): Promise<Measure[]> {
  return request.get(`/groups/${groupid}/measures`, { token }).then(result => (
    result.measures.map(item => new Measure(item))
  ));
}

export function listByAgent(groupid: string, agentid: string, token: string): Promise<Measure[]> {
  return request.get(`/groups/${groupid}/agents/${agentid}/measures`, { token }).then(result => (
    result.measures.map(item => new Measure(item))
  ));
}

export function listByDevice(groupid: string, agentid: string, deviceid: string, token: string): Promise<Measure[]> {
  return request.get(`/groups/${groupid}/agents/${agentid}/devices/${deviceid}/measures`, { token }).then(result => (
    result.measures.map(item => new Measure(item))
  ));
}
