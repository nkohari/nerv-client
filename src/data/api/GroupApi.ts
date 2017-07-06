import Api from './Api';
import Group from '../models/Group';

class GroupApi extends Api {

  list(token: string): Promise<Group[]> {
    return this.getRequest('/groups', token).then(result => result.groups.map(item => new Group(item)));
  }

  get(id: string, token: string): Promise<Group> {
    return this.getRequest(`/groups/${id}`, token).then(result => new Group(result));
  }

}

export default GroupApi;
