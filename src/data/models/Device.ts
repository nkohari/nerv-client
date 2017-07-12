import { Model } from 'src/data/framework/Model';

export class Device extends Model {

  groupid: string;
  agentid: string;
  type: string;
  vendor: string;
  model: string;

  constructor(data: Partial<Device> = {}) {
    super(data);
    this.groupid = data.groupid;
    this.agentid = data.agentid;
    this.type = data.type;
    this.vendor = data.vendor;
    this.model = data.model;
  }

}
