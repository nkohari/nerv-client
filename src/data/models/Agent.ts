import { Model } from 'src/data/framework/Model';

export class Agent extends Model {

  name: string;
  groupid: string;

  constructor(data: Partial<Agent> = {}) {
    super(data);
    this.name = data.name;
    this.groupid = data.groupid;
  }

}
