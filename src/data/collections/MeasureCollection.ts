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

  mostRecentForAgent(agentid: string): Measure {
    return this.forAgent(agentid).reduce((winner, item) => {
      return (!winner || item.time.valueOf() > winner.time.valueOf()) ? item : winner;
    }, null);
  }

}
