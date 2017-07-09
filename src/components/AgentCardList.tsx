import * as React from 'react';
import { Link } from 'react-router';
import { AgentCard } from 'components';
import { Agent } from 'data';
import './AgentCardList.styl';

interface AgentCardListProps {
  agents: Agent[];
}

class AgentCardList extends React.Component<AgentCardListProps> {

  render() {
    const { agents } = this.props;

    const items = agents.map(agent => (
      <li key={agent.id}>
        <Link to={`/${agent.groupid}/${agent.id}`}>
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
