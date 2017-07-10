import * as React from 'react';
import { Agent, Device, Group, connect } from 'src/data';
import './AgentCard.styl';

interface AgentCardProps {
  group: Group;
  agent: Agent;
  devices: Device[];
}

class AgentCard extends React.Component<AgentCardProps> {

  static readPropsFromRedux = (state, props) => ({
    devices: state.devices.items.filter(d => d.agentid === props.agent.id)
  })

  render() {
    const { agent, devices } = this.props;
    return (
      <div className='group-card pt-card pt-interactive'>
        <h5>{agent.name}</h5>
        {devices.length} devices
      </div>
    );
  }

}

export default connect(AgentCard);
