import * as React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Agent, Device, connect } from 'src/data';
import { DeviceWidget, IndicatorLight } from 'src/components';
import './AgentCard.styl';

interface AgentCardProps {
  agent: Agent;
}

interface AgentCardConnectedProps {
  devices: Device[];
}

const DUMMY_DATA = [
  45, 97, 22, 85, 63,
  39, 13, 45, 42, 36,
  69, 27, 23, 63, 80,
  87, 53, 63, 90, 98,
  84, 61, 38, 39, 32
];

class AgentCard extends React.Component<AgentCardProps & AgentCardConnectedProps> {

  render() {
    const { agent, devices } = this.props;

    const items = devices.map(device => (
      <li key={device.id} className='agent-card-device'>
        <DeviceWidget device={device} />
      </li>
    ));

    return (
      <div className='agent-card pt-card pt-interactive'>
        <div className='agent-card-header'>
          <IndicatorLight status='good' />
          {agent.name}
        </div>
        <div className='agent-card-graph'>
          <Sparklines data={DUMMY_DATA} margin={8} height={60} width={300}>
            <SparklinesLine style={{ stroke: '#137CBD', fill: '#48AFF0', fillOpacity: '0.5' }} />
          </Sparklines>
        </div>
        <ul>
          {items}
        </ul>
      </div>
    );
  }

}

export default connect(AgentCard, {
  readPropsFromRedux: (state, props: AgentCardProps) => ({
    devices: state.devices.forAgent(props.agent.id)
  })
});
