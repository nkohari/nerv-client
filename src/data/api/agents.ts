import { Agent, request } from 'src/data';

export function get(groupid: string, agentid: string, token: string): Promise<Agent> {
  const url = `/groups/${groupid}/agents/${agentid}`;
  return request.get(url, { token }).then(result => (
    new Agent(result.agent)
  ));
}

export function update(groupid: string, agentid: string, data: Partial<Agent>, token: string): Promise<Agent> {
  const url = `/groups/${groupid}/agents/${agentid}`;
  return request.put(url, { data, token }).then(result => (
    new Agent(result.agent)
  ));
}

export function listByUser(token: string): Promise<Agent[]> {
  const url = '/agents';
  return request.get(url, { token }).then(result => (
    result.agents.map(item => new Agent(item))
  ));
}

export function listByGroup(groupid: string, token: string): Promise<Agent[]> {
  const url = `/groups/${groupid}/agents`;
  return request.get(url, { token }).then(result => (
    result.agents.map(item => new Agent(item))
  ));
}
