import * as React from 'react';
import { Button } from '@blueprintjs/core';
import { PageContent, PageControls, Chart, ChartFieldSelector, ChartPeriodSelector } from 'src/components';
import { Device, Sample } from 'src/data';

interface DevicePageContentProps {
  device: Device;
  samples: Sample[];
}

interface DevicePageContentState {
  field: string;
  period: string;
}

class DevicePageContent extends React.Component<DevicePageContentProps, DevicePageContentState> {

  constructor(props) {
    super(props);
    this.state = { field: 'hashrate', period: '1 hour' };
  }

  onFieldSelected = field => {
    this.setState({ field });
  }

  onPeriodSelected = period => {
    this.setState({ period });
  }

  render() {
    const { samples } = this.props;
    const { field, period } = this.state;

    const controls = (
      <PageControls>
        <div className='pt-navbar-group pt-align-left'>
          <div className='pt-button-group'>
            <ChartFieldSelector value={field} onChange={this.onFieldSelected} />
            <ChartPeriodSelector value={period} onChange={this.onPeriodSelected} />
          </div>
        </div>
        <div className='pt-navbar-group pt-align-right'>
          <Button iconName='refresh' />
        </div>
      </PageControls>
    );

    return (
      <PageContent className='device-page-content' controls={controls}>
        <Chart samples={samples} field={field} />
      </PageContent>
    );
  }

}

export default DevicePageContent;
