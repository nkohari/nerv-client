import * as React from 'react';
import { SvgIcon } from 'src/components';
import './DeviceGauge.styl';

interface DeviceGaugeProps {
  icon: React.ComponentClass;
}

class DeviceGauge extends React.Component<DeviceGaugeProps> {

  render() {
    const { icon, children } = this.props;
    return (
      <div className='device-gauge device-hashrate'>
        <SvgIcon src={icon} size='large' className='device-gauge-icon' />
        <span className='device-gauge-text'>
          {children}
        </span>
      </div>
    );
  }

}

export default DeviceGauge;
