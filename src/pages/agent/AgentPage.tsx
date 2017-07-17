import * as React from 'react';
import { Page, Loading } from 'src/components';
import { Action, loadAgent, loadGroup, loadDevicesByAgent, loadMeasuresByAgent } from 'src/actions';
import { Agent, Device, Group, Measure, connect } from 'src/data';
import AgentPageSidebar from './AgentPageSidebar';

interface AgentPageProps {
  groupid: string;
  agentid: string;
  agent: Agent;
  group: Group;
  devices: Device[];
  measures: Measure[];
  loadAgent: Action;
  loadGroup: Action;
  loadDevicesByAgent: Action;
  loadMeasuresByAgent: Action;
}

class AgentPage extends React.Component<AgentPageProps> {

  static connectedActions = {
    loadAgent,
    loadGroup,
    loadDevicesByAgent,
    loadMeasuresByAgent
  };

  static readPropsFromRedux = (state, props) => {
    const { groupid, agentid } = state.router.params;
    return {
      groupid,
      agentid,
      group: state.groups.get(groupid),
      agent: state.agents.get(agentid),
      devices: state.devices.forAgent(agentid),
      measures: state.measures.forAgent(agentid)
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
    this.props.loadMeasuresByAgent(groupid, agentid);
  }

  render() {
    const { agent, group, devices, measures } = this.props;

    if (!agent || !group) {
      return <Loading />;
    }

    return (
      <Page className='agent-page'>
        <AgentPageSidebar agent={agent} devices={devices} measures={measures} />
        <div className='page-content'>
          {devices.length} devices
        </div>
      </Page>
    );
  }

}

export default connect(AgentPage);
