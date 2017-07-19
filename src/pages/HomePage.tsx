import * as React from 'react';
import { Page, GroupCardList, Loading } from 'src/components';
import { loadAgentsByUser, loadGroupsByUser } from 'src/actions';
import { AgentCollection, GroupCollection, connect } from 'src/data';

interface HomePageConnectedProps {
  agents: AgentCollection;
  groups: GroupCollection;
  loadAgentsByUser: typeof loadAgentsByUser;
  loadGroupsByUser: typeof loadGroupsByUser;
}

class HomePage extends React.Component<HomePageConnectedProps> {

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

export default connect(HomePage, {
  actions: {
    loadAgentsByUser,
    loadGroupsByUser
  },
  readPropsFromRedux: state => ({
    agents: state.agents,
    groups: state.groups
  })
});
