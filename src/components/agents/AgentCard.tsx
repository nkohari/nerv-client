import * as React from 'react';
import { Agent } from 'src/data';
import './AgentCard.styl';

interface AgentCardProps {
  agent: Agent;
}

class AgentCard extends React.Component<AgentCardProps> {

  render() {
    const { agent } = this.props;
    return (
      <div className='agent-card pt-card pt-interactive'>
        <div className='agent-card-header'>
          {agent.name}
        </div>
      </div>
    );
  }

}

export default AgentCard;
