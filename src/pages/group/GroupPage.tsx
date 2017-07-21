import * as React from 'react';
import { Page, Loading } from 'src/components';
import { loadGroup, loadAgentsByGroup, loadDevicesByGroup } from 'src/actions';
import { Group, Agent, Device, connect } from 'src/data';
import GroupPageSidebar from './GroupPageSidebar';
import GroupPageContent from './GroupPageContent';

interface GroupPageConnectedProps {
  groupid: string;
  group: Group;
  agents: Agent[];
  devices: Device[];
  loadGroup: typeof loadGroup;
  loadAgentsByGroup: typeof loadAgentsByGroup;
  loadDevicesByGroup: typeof loadDevicesByGroup;
}

class GroupPage extends React.Component<GroupPageConnectedProps> {

  componentDidMount() {
    this.loadData(this.props.groupid);
  }

  componentWillReceiveProps(newProps) {
    const { groupid } = newProps;
    if (this.props.groupid !== groupid) {
      this.loadData(groupid);
    }
  }

  loadData(groupid: string) {
    this.props.loadGroup(groupid);
    this.props.loadAgentsByGroup(groupid);
    this.props.loadDevicesByGroup(groupid);
  }

  render() {
    const { group, agents } = this.props;

    if (!group) {
      return <Loading />;
    }

    return (
      <Page className='group-page'>
        <GroupPageSidebar group={group} />
        <GroupPageContent group={group} agents={agents} />
      </Page>
    );
  }

}

export default connect(GroupPage, {
  actions: {
    loadGroup,
    loadAgentsByGroup,
    loadDevicesByGroup
  },
  readPropsFromRedux: state => {
    const { groupid } = state.router.params;
    return {
      groupid,
      group: state.groups.get(groupid),
      agents: state.agents.forGroup(groupid),
      devices: state.devices.forGroup(groupid)
    };
  }
});
