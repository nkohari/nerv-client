import * as React from 'react';
import { Sidebar, SidebarItem, Time } from 'src/components';
import { Agent, Device, Measure } from 'src/data';

interface AgentPageSidebarProps {
  agent: Agent;
  devices: Device[];
  measures: Measure[];
}

class AgentPageSidebar extends React.Component<AgentPageSidebarProps> {

  render() {
    const { agent, devices, measures } = this.props;

    const lastSeen: Date = measures.reduce((last, measure) => {
      return (measure.time.valueOf() > last.valueOf()) ? measure.time : last;
    }, new Date(0));

    return (
      <Sidebar title={agent.name} iconName='desktop'>
        <div className='sidebar-summary'>
          <div className='big-number'>83MH/s</div>
          from {devices.length} devices
        </div>
        <SidebarItem title='Last Seen'>
          <Time value={lastSeen} />
        </SidebarItem>
      </Sidebar>
    );
  }

}

export default AgentPageSidebar;
