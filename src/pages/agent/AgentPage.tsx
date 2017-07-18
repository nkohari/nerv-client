import * as React from 'react';
import { Page, Loading } from 'src/components';
import { Action, loadAgent, loadGroup, loadDevicesByAgent, loadSamplesByAgent } from 'src/actions';
import { Agent, Device, Group, Sample, connect } from 'src/data';
import AgentPageSidebar from './AgentPageSidebar';
import AgentPageContent from './AgentPageContent';
import './AgentPage.styl';

interface AgentPageProps {
  groupid: string;
  agentid: string;
  agent: Agent;
  group: Group;
  devices: Device[];
  samples: Sample[];
  loadAgent: Action;
  loadGroup: Action;
  loadDevicesByAgent: Action;
  loadSamplesByAgent: Action;
}

class AgentPage extends React.Component<AgentPageProps> {

  static connectedActions = {
    loadAgent,
    loadGroup,
    loadDevicesByAgent,
    loadSamplesByAgent
  };

  static readPropsFromRedux = (state, props) => {
    const { groupid, agentid } = state.router.params;
    return {
      groupid,
      agentid,
      group: state.groups.get(groupid),
      agent: state.agents.get(agentid),
      devices: state.devices.forAgent(agentid),
      samples: state.samples.forAgent(agentid)
    };
  }

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
    this.props.loadSamplesByAgent(groupid, agentid);
  }

  render() {
    const { agent, group, devices, samples } = this.props;

    if (!agent || !group) {
      return <Loading />;
    }

    return (
      <Page className='agent-page'>
        <AgentPageSidebar agent={agent} devices={devices} samples={samples} />
        <AgentPageContent agent={agent} devices={devices} samples={samples} />
      </Page>
    );
  }

}

export default connect(AgentPage);
