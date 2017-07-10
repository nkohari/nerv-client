import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import { Action, loadAgent, loadGroup, loadDevicesByAgent } from 'src/actions';
import { Agent, Device, Group, connect } from 'src/data';

interface AgentPageProps {
  groupid: string;
  agentid: string;
  agent: Agent;
  group: Group;
  devices: Device[];
  loadAgent: Action;
  loadGroup: Action;
  loadDevicesByAgent: Action;
}

class AgentPage extends React.Component<AgentPageProps> {

  static connectedActions = {
    loadAgent,
    loadGroup,
    loadDevicesByAgent
  };

  static readPropsFromRedux = (state, props) => {
    const { groupid, agentid } = state.router.params;
    return {
      groupid,
      agentid,
      group: state.groups.items.find(g => g.id === groupid),
      agent: state.agents.items.find(a => a.id === agentid),
      devices: state.devices.items.filter(d => d.agentid === agentid)
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
  }

  render() {
    const { agent, group, devices } = this.props;

    if (!agent || !group) {
      return <Spinner />;
    }

    return (
      <div className='page agent-page'>
        <div className='page-content'>
          {devices.length} devices
        </div>
      </div>
    );
  }

}

export default connect(AgentPage);
