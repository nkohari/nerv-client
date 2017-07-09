import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import { Breadcrumbs } from 'components';
import { Action, loadAgent, loadGroup, loadDevicesByAgent } from 'actions';
import { Agent, Device, Group, connect } from 'data';

interface AgentPageProps {
  params: { [name: string]: string };
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

  static readPropsFromRedux = (state, props) => ({
    group: state.groups.items.find(g => g.id === props.params.groupid),
    agent: state.agents.items.find(a => a.id === props.params.agentid),
    devices: state.devices.items.filter(d => d.agentid === props.params.agentid)
  })

  componentDidMount() {
    const { groupid, agentid } = this.props.params;
    this.props.loadAgent(groupid, agentid);
    this.props.loadGroup(groupid);
    this.props.loadDevicesByAgent(groupid, agentid);
  }

  componentWillReceiveProps(newProps) {
    const oldParams = this.props.params;
    const newParams = newProps.params;
    if (oldParams.agentid !== newParams.agentid) {
      this.props.loadAgent(newParams.groupid, newParams.agentid);
      this.props.loadGroup(newParams.groupid);
      this.props.loadDevicesByAgent(newParams.groupid, newParams.agentid);
    }
  }

  render() {
    const { agent, group, devices } = this.props;
    console.log(this.props);

    if (!agent || !group) {
      return <Spinner />;
    }

    return (
      <div className='page agent-page'>
        <Breadcrumbs group={group} agent={agent} />
        <div className='page-content'>
          {devices.length} devices
        </div>
      </div>
    );
  }

}

export default connect(AgentPage);
