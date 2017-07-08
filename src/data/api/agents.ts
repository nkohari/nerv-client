import { Agent, request } from 'data';

function get(groupid: string, agentid: string, token: string): Promise<Agent> {
  return request.get(`/groups/${groupid}/agents/${agentid}`, token).then(result => (
    new Agent(result.group)
  ));
}

function listByUser(token: string): Promise<Agent[]> {
  return request.get('/agents', token).then(result => (
    result.agents.map(item => new Agent(item))
  ));
}

function listByGroup(groupid: string, token: string): Promise<Agent[]> {
  return request.get(`/groups/${groupid}/agents`, token).then(result => (
    result.agents.map(item => new Agent(item))
  ));
}

export default {
  get,
  listByUser,
  listByGroup
};
