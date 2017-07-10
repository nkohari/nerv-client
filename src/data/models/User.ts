import { Model } from 'src/data/framework/Model';

export class User extends Model {

  username: string;
  email: string;

  constructor(data: Partial<User> = {}) {
    super(data);
    this.username = data.username;
    this.email = data.email;
  }

}
