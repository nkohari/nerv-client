import * as React from 'react';
import { Page, GroupCardList, Loading } from 'src/components';
import { loadAgentsByUser, loadGroupsByUser } from 'src/actions';
import { Collection, Agent, Group, ReduxState, connect } from 'src/data';

interface HomePageProps {
  agents: Collection<Agent>;
  groups: Collection<Group>;
  loadAgentsByUser: typeof loadAgentsByUser;
  loadGroupsByUser: typeof loadGroupsByUser;
}

class HomePage extends React.Component<HomePageProps> {

  static connectedActions = {
    loadAgentsByUser,
    loadGroupsByUser
  };

  static readPropsFromRedux = (state: ReduxState) => ({
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
      return <Loading />;
    }

    return (
      <Page className='home-page'>
        <div className='page-content'>
          <GroupCardList groups={groups.all()} />
        </div>
      </Page>
    );
  }

}

export default connect(HomePage);
