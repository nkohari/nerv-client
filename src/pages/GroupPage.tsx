import * as React from 'react';
import { AgentCardList, Loading } from 'src/components';
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
      group: state.groups.items.find(g => g.id === groupid),
      agents: state.agents.items.filter(a => a.groupid === groupid)
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
      <div className='page group-page'>
        <div className='page-content'>
          <AgentCardList agents={agents} />
        </div>
      </div>
    );
  }

}

export default connect(GroupPage);
