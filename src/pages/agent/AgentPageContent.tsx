import * as React from 'react';
import { Button, NonIdealState } from '@blueprintjs/core';
import { PageContent, PageControls, DeviceCardList, Chart, ChartFieldSelector, ChartPeriodSelector } from 'src/components';
import { Agent, Device, Sample } from 'src/data';

interface AgentPageContentProps {
  agent: Agent;
  devices: Device[];
  samples: Sample[];
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

  onFieldSelected = field => {
    this.setState({ field });
  }
  onPeriodSelected = period => {
    this.setState({ period });
  }

  render() {
    const { devices, samples } = this.props;
    const { field, period } = this.state;

    if (devices.length === 0) {
      return this.renderEmpty();
    }

    const controls = (
      <PageControls>
        <div className='pt-navbar-group pt-align-left'>
          <div className='pt-button-group'>
            <ChartFieldSelector value={field} onChange={this.onFieldSelected} />
            <ChartPeriodSelector value={period} onChange={this.onPeriodSelected} />
          </div>
        </div>
        <div className='pt-navbar-group pt-align-right'>
          <Button iconName='refresh' />
        </div>
      </PageControls>
    );

    return (
      <PageContent className='agent-page-content' controls={controls}>
        <Chart samples={samples} field={field} />
        <DeviceCardList devices={devices} />
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
