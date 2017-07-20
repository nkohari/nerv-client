import * as React from 'react';
import { Button, NonIdealState } from '@blueprintjs/core';
import { PageContent, PageControls, AgentCardList, Chart, ChartFieldSelector, ChartPeriodSelector } from 'src/components';
import { Agent, Group, Sample } from 'src/data';

interface GroupPageContentProps {
  group: Group;
  agents: Agent[];
}

interface GroupPageContentState {
  samples: Sample[];
  field: string;
  period: string;
}

class GroupPageContent extends React.Component<GroupPageContentProps, GroupPageContentState> {

  constructor(props) {
    super(props);
    this.state = {
      field: 'hashrate',
      period: '1 hour',
      samples: []
    };
  }

  onFieldSelected = field => {
    this.setState({ field });
  }
  onPeriodSelected = period => {
    this.setState({ period });
  }

  render() {
    const { agents } = this.props;
    const { field, period, samples } = this.state;

    if (agents.length === 0) {
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
        <AgentCardList agents={agents} />
      </PageContent>
    );
  }

  renderEmpty() {
    return (
      <PageContent className='group-page-content'>
        <NonIdealState
          visual='widget'
          title='No agents registered'
          description='This group has no agents registered to it. Please run the agent application on your machine.'
        />
      </PageContent>
    );
  }

}

export default GroupPageContent;
