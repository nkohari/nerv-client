import * as React from 'react';
import { Page, Loading } from 'src/components';
import { loadAgent, loadGroup, loadDevice } from 'src/actions';
import { Agent, Device, Group, connect } from 'src/data';
import DevicePageSidebar from './DevicePageSidebar';
import DevicePageContent from './DevicePageContent';
import './DevicePage.styl';

interface DevicePageConnectedProps {
  groupid: string;
  agentid: string;
  deviceid: string;
  agent: Agent;
  group: Group;
  device: Device;
  loadAgent: typeof loadAgent;
  loadGroup: typeof loadGroup;
  loadDevice: typeof loadDevice;
}

class DevicePage extends React.Component<DevicePageConnectedProps> {

  componentDidMount() {
    const { groupid, agentid, deviceid } = this.props;
    this.loadData(groupid, agentid, deviceid);
  }

  componentWillReceiveProps(newProps) {
    const { groupid, agentid, deviceid } = newProps;
    if (this.props.deviceid !== deviceid) {
      this.loadData(groupid, agentid, deviceid);
    }
  }

  loadData(groupid, agentid, deviceid) {
    this.props.loadAgent(groupid, agentid);
    this.props.loadGroup(groupid);
    this.props.loadDevice(groupid, agentid, deviceid);
  }

  render() {
    const { agent, group, device } = this.props;

    if (!agent || !group || !device) {
      return <Loading />;
    }

    return (
      <Page className='agent-page'>
        <DevicePageSidebar device={device} />
        <DevicePageContent device={device} />
      </Page>
    );
  }

}

export default connect(DevicePage, {
  actions: {
    loadAgent,
    loadGroup,
    loadDevice
  },
  readPropsFromRedux: state => {
    const { groupid, agentid, deviceid } = state.router.params;
    return {
      groupid,
      agentid,
      deviceid,
      group: state.groups.get(groupid),
      agent: state.agents.get(agentid),
      device: state.devices.get(deviceid)
    };
  }
});
