import * as React from 'react';
import { Link } from 'redux-little-router';
import { AgentCard } from 'src/components';
import { Agent } from 'src/data';
import './AgentCardList.styl';

interface AgentCardListProps {
  agents: Agent[];
}

class AgentCardList extends React.Component<AgentCardListProps> {

  render() {
    const { agents } = this.props;

    const items = agents.map(agent => (
      <li key={agent.id}>
        <Link href={`/${agent.groupid}/${agent.id}`}>
          <AgentCard agent={agent} />
        </Link>
      </li>
    ));

    return (
      <ul className='agent-card-list'>
        {items}
      </ul>
    );
  }

}

export default AgentCardList;
