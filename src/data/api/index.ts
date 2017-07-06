import GroupApi from './GroupApi';
import UserApi from './UserApi';

export default {
  groups: new GroupApi(),
  users: new UserApi()
};
