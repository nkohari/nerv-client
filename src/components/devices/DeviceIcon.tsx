import * as React from 'react';
import * as classNames from 'classnames';
import { omit } from 'lodash';
import { Device } from 'src/data';
import CpuIcon from 'assets/images/cpu.svg';
import GpuIcon from 'assets/images/gpu.svg';

interface DeviceIconProps {
  device: Device;
  className?: string;
  size?: number;
}

class DeviceIcon extends React.Component<DeviceIconProps> {

  static defaultProps = {
    size: 40
  };

  render() {
    const { className, device, size } = this.props;

    const props = {
      className: classNames('device-icon', className),
      width: size,
      height: size,
      ...omit(this.props, 'device', 'size')
    };

    switch (device.type) {
      case 'cpu':
        return <CpuIcon { ...props } />;
      case 'gpu':
        return <GpuIcon { ...props } />;
      default:
        throw new Error(`Unknown device type ${device.type}`);
    }
  }

}

export default DeviceIcon;
