import * as React from 'react';
import { Device } from 'src/data';
import EtherIcon from 'assets/images/coins/ETH.svg';
import PowerIcon from 'assets/images/power.svg';
import FanIcon from 'assets/images/fan.svg';
import TemperatureIcon from 'assets/images/temp.svg';
import './DeviceWidget.styl';

interface DeviceWidgetProps {
  device: Device;
}

class DeviceWidget extends React.Component<DeviceWidgetProps> {

  render() {
    const { device } = this.props;
    return (
      <div className='device-widget'>
        <div className='device-widget-header'>
          <span className='device-info'>
            {device.vendor} {device.model}
          </span>
          <span className={`device-type device-type-${device.type}`}>
            {device.type.toUpperCase()}
          </span>
        </div>
        <div className='device-widget-metrics'>
          <div className='device-metric device-hashrate'>
            <EtherIcon width={20} height={20} />
            20MH/s
          </div>
          <div className='device-metric device-power'>
            <PowerIcon width={20} height={20} />
            24.2V
          </div>
          <div className='device-metric device-fans'>
            <FanIcon width={20} height={20} />
            36%
          </div>
          <div className='device-metric device-fans'>
            <TemperatureIcon width={20} height={20} />
            60°
          </div>
        </div>
      </div>
    );
  }

}

export default DeviceWidget;
