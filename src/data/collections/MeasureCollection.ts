import { Collection, Measure } from 'src/data';

export class MeasureCollection extends Collection<Measure> {

  forGroup(groupid): Measure[] {
    return this.filter(item => item.groupid === groupid);
  }

  forAgent(agentid): Measure[] {
    return this.filter(item => item.agentid === agentid);
  }

  forDevice(deviceid): Measure[] {
    return this.filter(item => item.deviceid === deviceid);
  }

}
