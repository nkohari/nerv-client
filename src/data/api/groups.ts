import { request, Group } from 'data';

function get(id: string, token: string): Promise<Group> {
  return request.get(`/groups/${id}`, token).then(result => new Group(result.group));
}

function listByUser(token: string): Promise<Group[]> {
  return request.get('/groups', token).then(result => result.groups.map(item => new Group(item)));
}

export default {
  get,
  listByUser
};
