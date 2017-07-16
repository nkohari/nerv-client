import { Collection, Device } from 'src/data';

export class DeviceCollection extends Collection<Device> {

  forGroup(groupid): Device[] {
    return this.filter(item => item.groupid === groupid);
  }

  forAgent(agentid): Device[] {
    return this.filter(item => item.agentid === agentid);
  }

}
