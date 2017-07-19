import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import { DeviceGauge } from 'src/components';
import { Device, Measure, ReduxState, connect } from 'src/data';
import { format } from 'src/utils';
import './DeviceCard.styl';

interface DeviceCardProps {
  device: Device;
  lastMeasure: Measure;
}

const COIN_IMAGES = {
  BTC: require('assets/images/coins/BTC.svg'),
  ETH: require('assets/images/coins/ETH.svg')
};

class DeviceCard extends React.Component<DeviceCardProps> {

  static readPropsFromRedux = (state: ReduxState, props: DeviceCardProps) => ({
    lastMeasure: state.measures.mostRecentForDevice(props.device.id)
  })

  render() {
    const { device, lastMeasure } = this.props;

    let gauges;
    if (lastMeasure) {
      gauges = this.renderGauges(lastMeasure);
    } else {
      gauges = <Spinner />; // TODO
    }

    return (
      <div className={`pt-card pt-interactive device-card device-card-${device.type}`}>
        <div className='device-card-type'>
          <span>{device.type}</span>
        </div>
        <div className='device-card-title'>
          <div className='device-name'>{device.name}</div>
          <div className='device-kind'>{device.vendor} {device.model}</div>
        </div>
        <div className='device-card-main'>
          {gauges}
        </div>
      </div>
    );
  }

  renderGauges(measure: Measure) {
    return (
      <ul className='device-gauge-list'>
        <li>
          <DeviceGauge icon={COIN_IMAGES[measure.symbol]}>
            {format.hashrate(measure.hashrate)}
          </DeviceGauge>
        </li>
        <li>
          <DeviceGauge icon={require('assets/images/temp.svg')}>
            {format.number(measure.temp)}C
          </DeviceGauge>
        </li>
        <li>
          <DeviceGauge icon={require('assets/images/fan.svg')}>
            {format.percentage(measure.fanpercent, { precision: 0 })} ({format.number(measure.fanrpm, { precision: 0 })} RPM)
          </DeviceGauge>
        </li>
        <li>
          <DeviceGauge icon={require('assets/images/clock.svg')}>
            {format.number(measure.coreclock)}Hz
          </DeviceGauge>
        </li>
        <li>
          <DeviceGauge icon={require('assets/images/power.svg')}>
            {format.number(measure.power)}V
          </DeviceGauge>
        </li>
      </ul>
    );
  }

}

export default connect(DeviceCard);
