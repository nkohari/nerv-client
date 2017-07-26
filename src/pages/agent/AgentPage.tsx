import * as React from 'react';
import { Page, Loading } from 'src/components';
import { loadAgent, loadGroup, loadDevicesByAgent } from 'src/actions';
import { Agent, DeviceCollection, Group, connect } from 'src/data';
import AgentPageSidebar from './AgentPageSidebar';
import AgentPageContent from './AgentPageContent';
import './AgentPage.styl';

interface AgentPageConnectedProps {
  groupid: string;
  agentid: string;
  agent: Agent;
  group: Group;
  devices: DeviceCollection;
  loadAgent: typeof loadAgent;
  loadGroup: typeof loadGroup;
  loadDevicesByAgent: typeof loadDevicesByAgent;
}

class AgentPage extends React.Component<AgentPageConnectedProps> {

  componentDidMount() {
    const { groupid, agentid } = this.props;
    this.loadData(groupid, agentid);
  }

  componentWillReceiveProps(newProps) {
    const { groupid, agentid } = newProps;
    if (this.props.agentid !== agentid) {
      this.loadData(groupid, agentid);
    }
  }

  loadData(groupid, agentid) {
    this.props.loadAgent(groupid, agentid);
    this.props.loadGroup(groupid);
    this.props.loadDevicesByAgent(groupid, agentid);
  }

  render() {
    const { agent, group, devices } = this.props;

    if (!agent || !group) {
      return <Loading />;
    }

    return (
      <Page className='agent-page'>
        <AgentPageSidebar agent={agent} devices={devices} />
        <AgentPageContent agent={agent} devices={devices} />
      </Page>
    );
  }

}

export default connect(AgentPage, {
  actions: {
    loadAgent,
    loadGroup,
    loadDevicesByAgent
  },
  readPropsFromRedux: state => {
    const { groupid, agentid } = state.router.params;
    return {
      groupid,
      agentid,
      group: state.groups.get(groupid),
      agent: state.agents.get(agentid),
      devices: state.devices.forAgent(agentid)
    };
  }
});
