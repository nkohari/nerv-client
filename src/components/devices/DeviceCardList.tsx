import * as React from 'react';
import { Link } from 'redux-little-router';
import { DeviceCard } from 'src/components';
import { Device } from 'src/data';
import './DeviceCardList.styl';

interface DeviceCardListProps {
  devices: Device[];
}

class DeviceCardList extends React.Component<DeviceCardListProps> {

  render() {
    const { devices } = this.props;

    const items = devices.map(device => (
      <li key={device.id}>
        <Link href={`/${device.groupid}/${device.agentid}/${device.id}`}>
          <DeviceCard device={device} />
        </Link>
      </li>
    ));

    return (
      <ul className='device-card-list'>
        {items}
      </ul>
    );
  }

}

export default DeviceCardList;
