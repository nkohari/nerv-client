import Model from './Model';

class User extends Model {

  username: string;

  constructor(data: any = {}) {
    super(data);
    this.username = data.username;
  }

}

export default User;
