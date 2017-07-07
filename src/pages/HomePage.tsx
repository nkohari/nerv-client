import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import { GroupList } from '../components';
import { Action, Collection, Group, loadAllGroups, connect } from '../data';

interface HomePageProps {
  groups: Collection<Group>;
  loadAllGroups: Action;
}

class HomePage extends React.Component<HomePageProps> {

  static actionsToProps = {
    loadAllGroups
  };

  static stateToProps = state => ({
    groups: state.groups
  })

  componentWillMount() {
    this.props.loadAllGroups();
  }

  render() {
    const { groups } = this.props;

    if (groups.isLoading) {
      return <Spinner />;
    }

    return (
      <div className='page home-page'>
        <div className='page-content'>
          <GroupList groups={groups.items} />
        </div>
      </div>
    );
  }

}

export default connect(HomePage);
