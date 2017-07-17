import * as React from 'react';
import { Sidebar, SidebarItem, Time } from 'src/components';
import { Group, Agent, Device, Measure } from 'src/data';

interface GroupPageSidebarProps {
  group: Group;
  agents: Agent[];
  devices: Device[];
  measures: Measure[];
}

class GroupPageSidebar extends React.Component<GroupPageSidebarProps> {

  render() {
    const { group, agents, measures } = this.props;

    const lastSeen: Date = measures.reduce((last, measure) => {
      return (measure.time.valueOf() > last.valueOf()) ? measure.time : last;
    }, new Date(0));

    return (
      <Sidebar title={group.name} iconName='build'>
        <div className='sidebar-summary'>
          <div className='big-number'>83MH/s</div>
          from {agents.length} agents
        </div>
        <SidebarItem title='Last Seen'>
          <Time value={lastSeen} />
        </SidebarItem>
      </Sidebar>
    );
  }

}

export default GroupPageSidebar;
