import { Identifiable } from 'src/data';
import { AggregateGroup } from './AggregateGroup';

export class Aggregate implements Identifiable {

  id: string;
  time: Date;
  groupid: string;
  agentid: string;
  deviceid: string;
  symbol: string;
  tot: AggregateGroup;
  avg: AggregateGroup;
  min: AggregateGroup;
  max: AggregateGroup;

  constructor(data: Partial<Aggregate> = {}) {
    this.id = data.id;
    this.time = data.time;
    this.groupid = data.groupid;
    this.agentid = data.agentid;
    this.deviceid = data.deviceid;
    this.symbol = data.symbol;
    this.tot = new AggregateGroup(data.tot);
    this.avg = new AggregateGroup(data.avg);
    this.min = new AggregateGroup(data.min);
    this.max = new AggregateGroup(data.max);
  }

  toJSON() {
    return {
      id: this.id,
      time: this.time,
      groupid: this.groupid,
      agentid: this.agentid,
      deviceid: this.deviceid,
      symbol: this.symbol,
      tot: this.tot,
      avg: this.avg,
      min: this.min,
      max: this.max
    };
  }

}
