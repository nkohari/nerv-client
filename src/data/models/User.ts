import { Model } from 'src/data/framework/Model';

export class User extends Model {

  username: string;
  email: string;
  currency: string;

  constructor(data: Partial<User> = {}) {
    super(data);
    this.username = data.username;
    this.email = data.email;
    this.currency = data.currency;
  }

}
