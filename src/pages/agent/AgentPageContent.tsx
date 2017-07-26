import * as React from 'react';
import { NonIdealState } from '@blueprintjs/core';
import { PageContent, Chart, DeviceTable } from 'src/components';
import { Agent, DeviceCollection } from 'src/data';

interface AgentPageContentProps {
  agent: Agent;
  devices: DeviceCollection;
}

interface AgentPageContentState {
  field: string;
  period: string;
}

class AgentPageContent extends React.Component<AgentPageContentProps, AgentPageContentState> {

  constructor(props) {
    super(props);
    this.state = { field: 'hashrate', period: '1 hour' };
  }

  render() {
    const { agent, devices } = this.props;

    if (devices.length === 0) {
      return this.renderEmpty();
    }

    return (
      <PageContent className='agent-page-content'>
        <Chart />
        <DeviceTable agent={agent} devices={devices} />
      </PageContent>
    );
  }

  renderEmpty() {
    return (
      <PageContent className='agent-page-content'>
        <NonIdealState
          visual='help'
          title='No Devices'
          description='This agent has no devices. Please run the agent.'
        />
      </PageContent>
    );
  }

}

export default AgentPageContent;
