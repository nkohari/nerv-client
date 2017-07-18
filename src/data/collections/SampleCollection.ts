import { Collection, Sample } from 'src/data';

export class SampleCollection extends Collection<Sample> {

  forGroup(groupid): Sample[] {
    return this.filter(item => item.groupid === groupid);
  }

  forAgent(agentid): Sample[] {
    return this.filter(item => item.agentid === agentid);
  }

  forDevice(deviceid): Sample[] {
    return this.filter(item => item.deviceid === deviceid);
  }

}
