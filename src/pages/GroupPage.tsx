import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import { AgentCardList, Breadcrumbs } from 'components';
import { Action, loadGroup, loadAgentsByGroup, loadDevicesByGroup } from 'actions';
import { Group, Agent, connect } from 'data';

interface GroupPageProps {
  params: { [name: string]: string };
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

  static readPropsFromRedux = (state, props) => ({
    group: state.groups.items.find(g => g.id === props.params.groupid),
    agents: state.agents.items.filter(a => a.groupid === props.params.groupid)
  })

  componentDidMount() {
    const { groupid } = this.props.params;
    this.props.loadGroup(groupid);
    this.props.loadAgentsByGroup(groupid);
    this.props.loadDevicesByGroup(groupid);
  }

  componentWillReceiveProps(newProps) {
    const oldParams = this.props.params;
    const newParams = newProps.params;
    if (oldParams.groupid !== newParams.groupid) {
      this.props.loadGroup(newParams.groupid);
      this.props.loadAgentsByGroup(newParams.groupid);
      this.props.loadDevicesByGroup(newParams.groupid);
    }
  }

  render() {
    const { group, agents } = this.props;

    if (!group) {
      return <Spinner />;
    }

    return (
      <div className='page group-page'>
        <Breadcrumbs group={group} />
        <div className='page-content'>
          <AgentCardList agents={agents} />
        </div>
      </div>
    );
  }

}

export default connect(GroupPage);
