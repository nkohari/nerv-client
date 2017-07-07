import GroupApi from './GroupApi';
import AuthApi from './AuthApi';

export default {
  auth: new AuthApi(),
  groups: new GroupApi()
};
