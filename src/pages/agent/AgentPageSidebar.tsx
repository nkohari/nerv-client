import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import { updateAgent } from 'src/actions';
import { Sidebar } from 'src/components';
import { Agent, DeviceCollection, ExchangeRateCollection, User, connect } from 'src/data';

interface AgentPageSidebarProps {
  agent: Agent;
  devices: DeviceCollection;
}

interface AgentPageSidebarConnectedProps {
  user: User;
  exchangeRates: ExchangeRateCollection;
  updateAgent: typeof updateAgent;
}

class AgentPageSidebar extends React.Component<AgentPageSidebarProps & AgentPageSidebarConnectedProps> {

  onNameChanged = name => {
    const { agent } = this.props;
    this.props.updateAgent(agent.groupid, agent.id, { name });
  }

  render() {
    const { agent } = this.props;

    return (
      <Sidebar title={agent.name} subtitle={`Agent ${agent.id}`} iconName='desktop'>
      </Sidebar>
    );
  }

  renderEmpty() {
    const { agent } = this.props;
    return (
      <Sidebar title={agent.name} subtitle={`Agent ${agent.id}`} iconName='desktop'>
        <Spinner />
      </Sidebar>
    );
  }

}

export default connect(AgentPageSidebar, {
  actions: {
    updateAgent
  },
  readPropsFromRedux: (state, props: AgentPageSidebarProps) => ({
    user: state.auth.user,
    exchangeRates: state.exchangeRates
  })
});
