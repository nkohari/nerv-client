import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import { Action, Collection, Group, loadGroup, connect } from '../data';

interface GroupPageProps {
  groups: Collection<Group>;
  params: { [name: string]: string };
  loadGroup: Action<string>;
}

class GroupPage extends React.Component<GroupPageProps> {

  static actionsToProps = {
    loadGroup
  };

  static stateToProps = state => ({
    groups: state.groups
  })

  componentWillMount() {
    const { groupid } = this.props.params;
    this.props.loadGroup(groupid);
  }

  componentWillReceiveProps(newProps) {
    const oldId = this.props.params.groupid;
    const newId = newProps.params.groupid;
    if (oldId !== newId) {
      this.props.loadGroup(newId);
    }
  }

  render() {
    const { groups, params } = this.props;
    const group = groups.items.find(g => g.id === params.groupid);

    if (!group) {
      return <Spinner />;
    }

    return (
      <div className='page group-page'>
        <div className='page-content'>
          This is group {group.name}
        </div>
      </div>
    );
  }

}

export default connect(GroupPage);
