import { Aggregate, request } from 'src/data';

export function listByUser(token: string): Promise<Aggregate[]> {
  return request.get('/history', { token }).then(result => (
    result.aggregates.map(item => new Aggregate(item))
  ));
}

export function listByGroup(groupid: string, token: string): Promise<Aggregate[]> {
  return request.get(`/groups/${groupid}/history`, { token }).then(result => (
    result.aggregates.map(item => new Aggregate(item))
  ));
}

export function listByAgent(groupid: string, agentid: string, token: string): Promise<Aggregate[]> {
  return request.get(`/groups/${groupid}/agents/${agentid}/history`, { token }).then(result => (
    result.aggregates.map(item => new Aggregate(item))
  ));
}

export function listByDevice(groupid: string, agentid: string, deviceid: string, token: string): Promise<Aggregate[]> {
  return request.get(`/groups/${groupid}/agents/${agentid}/devices/${deviceid}/history`, { token }).then(result => (
    result.aggregates.map(item => new Aggregate(item))
  ));
}
