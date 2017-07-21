import { request, Group } from 'src/data';

export function get(groupid: string, token: string): Promise<Group> {
  const url = `/groups/${groupid}`;
  return request.get(url, { token }).then(result => (
    new Group(result.group)
  ));
}

export function update(groupid: string, data: Partial<Group>, token: string): Promise<Group> {
  const url = `/groups/${groupid}`;
  return request.put(url, { data, token }).then(result => (
    new Group(result.group)
  ));
}

export function listByUser(token: string): Promise<Group[]> {
  return request.get('/groups', { token }).then(result => (
    result.groups.map(item => new Group(item))
  ));
}
