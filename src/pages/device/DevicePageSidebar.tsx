import * as React from 'react';
import { Sidebar } from 'src/components';
import { Device } from 'src/data';

interface DevicePageSidebarProps {
  device: Device;
}

class DevicePageSidebar extends React.Component<DevicePageSidebarProps> {

  render() {
    const { device } = this.props;
    return (
      <Sidebar title={device.name} subtitle={`Device ${device.id}`} iconName='cog'>
      </Sidebar>
    );
  }

}

export default DevicePageSidebar;
