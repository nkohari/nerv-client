import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import { AgentList, Breadcrumbs } from 'components';
import { Action, loadGroup, loadAgentsByGroup } from 'actions';
import { Group, Agent, connect } from 'data';

interface GroupPageProps {
  params: { [name: string]: string };
  group: Group;
  agents: Agent[];
  loadGroup: Action<string>;
  loadAgentsByGroup: Action<string>;
}

class GroupPage extends React.Component<GroupPageProps> {

  static useActions = {
    loadGroup,
    loadAgentsByGroup
  };

  static readPropsFromState = (state, props) => ({
    group: state.groups.items.find(g => g.id === props.params.groupid),
    agents: state.agents.items.filter(a => a.groupid === props.params.groupid)
  })

  componentDidMount() {
    const { groupid } = this.props.params;
    this.props.loadGroup(groupid);
    this.props.loadAgentsByGroup(groupid);
  }

  componentWillReceiveProps(newProps) {
    const oldParams = this.props.params;
    const newParams = newProps.params;
    if (oldParams.groupid !== newParams.groupid) {
      this.props.loadGroup(newParams.groupid);
      this.props.loadAgentsByGroup(newParams.groupid);
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
          <h5>{group.name}</h5>
          <AgentList agents={agents} />
        </div>
      </div>
    );
  }

}

export default connect(GroupPage);
