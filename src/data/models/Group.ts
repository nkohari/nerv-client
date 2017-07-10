import { Model } from 'src/data/framework/Model';

export class Group extends Model {

  name: string;

  constructor(data: Partial<Group> = {}) {
    super(data);
    this.name = data.name;
  }

}
