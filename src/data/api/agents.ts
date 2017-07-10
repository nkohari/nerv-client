import { Agent, request } from 'src/data';

export function get(groupid: string, agentid: string, token: string): Promise<Agent> {
  return request.get(`/groups/${groupid}/agents/${agentid}`, token).then(result => (
    new Agent(result.agent)
  ));
}

export function listByUser(token: string): Promise<Agent[]> {
  return request.get('/agents', token).then(result => (
    result.agents.map(item => new Agent(item))
  ));
}

export function listByGroup(groupid: string, token: string): Promise<Agent[]> {
  return request.get(`/groups/${groupid}/agents`, token).then(result => (
    result.agents.map(item => new Agent(item))
  ));
}
