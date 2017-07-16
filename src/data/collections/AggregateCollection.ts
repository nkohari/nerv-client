import { Collection, Aggregate } from 'src/data';

export class AggregateCollection extends Collection<Aggregate> {

  forGroup(groupid): Aggregate[] {
    return this.filter(item => item.groupid === groupid);
  }

  forAgent(agentid): Aggregate[] {
    return this.filter(item => item.agentid === agentid);
  }

  forDevice(deviceid): Aggregate[] {
    return this.filter(item => item.deviceid === deviceid);
  }

}
