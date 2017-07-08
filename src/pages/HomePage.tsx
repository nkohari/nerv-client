import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import { GroupCardList } from 'components';
import { Action, loadAgentsByUser, loadGroupsByUser } from 'actions';
import { Collection, Agent, Group, connect } from 'data';

interface HomePageProps {
  agents: Collection<Agent>;
  groups: Collection<Group>;
  loadAgentsByUser: Action;
  loadGroupsByUser: Action;
}

class HomePage extends React.Component<HomePageProps> {

  static useActions = {
    loadAgentsByUser,
    loadGroupsByUser
  };

  static readPropsFromState = state => ({
    agents: state.agents,
    groups: state.groups
  })

  componentDidMount() {
    this.props.loadAgentsByUser();
    this.props.loadGroupsByUser();
  }

  render() {
    const { agents, groups } = this.props;

    if (agents.isLoading || groups.isLoading) {
      return <Spinner />;
    }

    return (
      <div className='page home-page'>
        <div className='page-content'>
          <GroupCardList groups={groups.items} />
        </div>
      </div>
    );
  }

}

export default connect(HomePage);
