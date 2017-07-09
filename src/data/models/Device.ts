import { Model } from 'data/framework/Model';

export class Device extends Model {

  groupid: string;
  agentid: string;
  vendor: string;
  model: string;

  constructor(data: Partial<Device> = {}) {
    super(data);
    this.groupid = data.groupid;
    this.agentid = data.agentid;
    this.vendor = data.vendor;
    this.model = data.model;
  }

}
