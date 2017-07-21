import * as React from 'react';
import { PageContent, Chart } from 'src/components';
import { Device } from 'src/data';

interface DevicePageContentProps {
  device: Device;
}

class DevicePageContent extends React.Component<DevicePageContentProps> {

  render() {
    return (
      <PageContent className='device-page-content'>
        <Chart />
      </PageContent>
    );
  }

}

export default DevicePageContent;
