import * as React from 'react';
import { NonIdealState } from '@blueprintjs/core';
import { PageContent, AgentTable, Chart } from 'src/components';
import { AgentCollection, Group } from 'src/data';

interface GroupPageContentProps {
  group: Group;
  agents: AgentCollection;
}

class GroupPageContent extends React.Component<GroupPageContentProps> {

  render() {
    const { group, agents } = this.props;

    if (agents.length === 0) {
      return this.renderEmpty();
    }

    return (
      <PageContent className='agent-page-content'>
        <Chart />
        <AgentTable group={group} agents={agents} />
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
