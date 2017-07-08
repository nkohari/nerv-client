import * as React from 'react';
import { Link } from 'react-router';
import { Agent } from 'data';

interface AgentListProps {
  agents: Agent[];
}

class AgentList extends React.Component<AgentListProps> {

  render() {
    const { agents } = this.props;

    const items = agents.map(agent => (
      <li key={agent.id}>
        <Link to={`/${agent.groupid}/agents/${agent.id}`}>{agent.name}</Link>
      </li>
    ));

    return (
      <ul className='agent-list'>
        {items}
      </ul>
    );
  }

}

export default AgentList;
