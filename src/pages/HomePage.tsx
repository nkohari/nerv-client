import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import { GroupCardList } from 'src/components';
import { Action, loadAgentsByUser, loadGroupsByUser } from 'src/actions';
import { Collection, Agent, Group, connect } from 'src/data';

interface HomePageProps {
  agents: Collection<Agent>;
  groups: Collection<Group>;
  loadAgentsByUser: Action;
  loadGroupsByUser: Action;
}

class HomePage extends React.Component<HomePageProps> {

  static connectedActions = {
    loadAgentsByUser,
    loadGroupsByUser
  };

  static readPropsFromRedux = state => ({
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
