import Model from './Model';

class Group extends Model {

  name: string;

  constructor(data: Partial<Group> = {}) {
    super(data);
    this.name = data.name;
  }

}

export default Group;
