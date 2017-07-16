import * as React from 'react';
import { Page, Sidebar, AgentCardList, Loading } from 'src/components';
import { Action, loadGroup, loadAgentsByGroup, loadDevicesByGroup } from 'src/actions';
import { Group, Agent, connect } from 'src/data';

interface GroupPageProps {
  groupid: string;
  group: Group;
  agents: Agent[];
  loadGroup: Action;
  loadAgentsByGroup: Action;
  loadDevicesByGroup: Action;
}

class GroupPage extends React.Component<GroupPageProps> {

  static connectedActions = {
    loadGroup,
    loadAgentsByGroup,
    loadDevicesByGroup
  };

  static readPropsFromRedux = (state, props) => {
    const { groupid } = state.router.params;
    return {
      groupid,
      group: state.groups.get(groupid),
      agents: state.agents.forGroup(groupid)
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
  }

  render() {
    const { group, agents } = this.props;

    if (!group) {
      return <Loading />;
    }

    return (
      <Page className='group-page'>
        <Sidebar title={group.name} iconName='build' />
        <div className='page-content'>
          <AgentCardList agents={agents} />
        </div>
      </Page>
    );
  }

}

export default connect(GroupPage);
