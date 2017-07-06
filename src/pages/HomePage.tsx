import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import { GroupList } from '../components';
import { Action, GroupsState, LoadStatus, loadGroups, connect } from '../data';

interface HomePageProps {
  groups: GroupsState;
  loadGroups: Action;
}

class HomePage extends React.Component<HomePageProps> {

  static actionsToProps = {
    loadGroups
  };

  static stateToProps = state => ({
    groups: state.groups
  })

  componentWillMount() {
    this.props.loadGroups();
  }

  render() {
    const { groups } = this.props;

    if (groups.status === LoadStatus.Loading) {
      return <Spinner />;
    }

    return (
      <div className='page home-page'>
        <GroupList groups={groups.items} />
      </div>
    );
  }

}

export default connect(HomePage);
