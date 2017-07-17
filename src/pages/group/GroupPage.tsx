import * as React from 'react';
import { Page, AgentCardList, Loading } from 'src/components';
import { Action, loadGroup, loadAgentsByGroup, loadDevicesByGroup, loadMeasuresByGroup } from 'src/actions';
import { Group, Agent, Device, Measure, connect } from 'src/data';
import GroupPageSidebar from './GroupPageSidebar';

interface GroupPageProps {
  groupid: string;
  group: Group;
  agents: Agent[];
  devices: Device[];
  measures: Measure[];
  loadGroup: Action;
  loadAgentsByGroup: Action;
  loadDevicesByGroup: Action;
  loadMeasuresByGroup: Action;
}

class GroupPage extends React.Component<GroupPageProps> {

  static connectedActions = {
    loadGroup,
    loadAgentsByGroup,
    loadDevicesByGroup,
    loadMeasuresByGroup
  };

  static readPropsFromRedux = (state, props) => {
    const { groupid } = state.router.params;
    return {
      groupid,
      group: state.groups.get(groupid),
      agents: state.agents.forGroup(groupid),
      devices: state.devices.forGroup(groupid),
      measures: state.measures.forGroup(groupid)
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
    this.props.loadMeasuresByGroup(groupid);
  }

  render() {
    const { group, agents, devices, measures } = this.props;

    if (!group) {
      return <Loading />;
    }

    return (
      <Page className='group-page'>
        <GroupPageSidebar group={group} agents={agents} devices={devices} measures={measures} />
        <div className='page-content'>
          <AgentCardList agents={agents} />
        </div>
      </Page>
    );
  }

}

export default connect(GroupPage);
