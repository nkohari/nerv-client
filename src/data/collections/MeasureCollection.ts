import { Collection, Measure } from 'src/data';

export class MeasureCollection extends Collection<Measure> {

  forGroup(groupid: string): Measure[] {
    return this.filter(item => item.groupid === groupid);
  }

  forAgent(agentid: string): Measure[] {
    return this.filter(item => item.agentid === agentid);
  }

  forDevice(deviceid: string): Measure[] {
    return this.filter(item => item.deviceid === deviceid);
  }

  mostRecentForDevice(deviceid: string): Measure {
    return this.forDevice(deviceid).reduce((winner, item) => {
      return (!winner || item.time.valueOf() > winner.time.valueOf()) ? item : winner;
    }, null);
  }

}
