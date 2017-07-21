import * as React from 'react';
import { updateDevice } from 'src/actions';
import { Sidebar } from 'src/components';
import { Device, ExchangeRateCollection, User, connect } from 'src/data';

interface DevicePageSidebarProps {
  device: Device;
}

interface DevicePageSidebarConnectedProps {
  user: User;
  exchangeRates: ExchangeRateCollection;
  updateDevice: typeof updateDevice;
}

class DevicePageSidebar extends React.Component<DevicePageSidebarProps & DevicePageSidebarConnectedProps> {

  render() {
    const { device } = this.props;
    return (
      <Sidebar title={device.name} subtitle={`Device ${device.id}`} iconName='desktop'>
      </Sidebar>
    );
  }

}

export default connect(DevicePageSidebar, {
  actions: {
    updateDevice
  },
  readPropsFromRedux: (state, props: DevicePageSidebarProps) => ({
    user: state.auth.user,
    exchangeRates: state.exchangeRates
  })
});
