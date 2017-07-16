import { Collection, Agent } from 'src/data';

export class AgentCollection extends Collection<Agent> {

  forGroup(groupid): Agent[] {
    return this.filter(item => item.groupid === groupid);
  }

}
