import * as React from 'react';
import { Page, AgentCardList, Loading } from 'src/components';
import { Action, loadGroup, loadAgentsByGroup, loadDevicesByGroup, loadSamplesByGroup } from 'src/actions';
import { Group, Agent, Device, Sample, connect } from 'src/data';
import GroupPageSidebar from './GroupPageSidebar';

interface GroupPageProps {
  groupid: string;
  group: Group;
  agents: Agent[];
  devices: Device[];
  samples: Sample[];
  loadGroup: Action;
  loadAgentsByGroup: Action;
  loadDevicesByGroup: Action;
  loadSamplesByGroup: Action;
}

class GroupPage extends React.Component<GroupPageProps> {

  static connectedActions = {
    loadGroup,
    loadAgentsByGroup,
    loadDevicesByGroup,
    loadSamplesByGroup
  };

  static readPropsFromRedux = (state, props) => {
    const { groupid } = state.router.params;
    return {
      groupid,
      group: state.groups.get(groupid),
      agents: state.agents.forGroup(groupid),
      devices: state.devices.forGroup(groupid),
      samples: state.samples.forGroup(groupid)
    };
  }

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
    this.props.loadSamplesByGroup(groupid);
  }

  render() {
    const { group, agents, devices, samples } = this.props;

    if (!group) {
      return <Loading />;
    }

    return (
      <Page className='group-page'>
        <GroupPageSidebar group={group} agents={agents} devices={devices} samples={samples} />
        <div className='page-content'>
          <AgentCardList agents={agents} />
        </div>
      </Page>
    );
  }

}

export default connect(GroupPage);
