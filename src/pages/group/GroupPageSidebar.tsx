import * as React from 'react';
import { updateGroup } from 'src/actions';
import { Sidebar } from 'src/components';
import { Group, ExchangeRateCollection, User, connect } from 'src/data';

interface GroupPageSidebarProps {
  group: Group;
}

interface GroupPageSidebarConnectedProps {
  user: User;
  exchangeRates: ExchangeRateCollection;
  updateGroup: typeof updateGroup;
}

class GroupPageSidebar extends React.Component<GroupPageSidebarProps & GroupPageSidebarConnectedProps> {

  render() {
    const { group } = this.props;
    return (
      <Sidebar title={group.name} subtitle={`Group ${group.id}`} iconName='desktop'>
      </Sidebar>
    );
  }

}

export default connect(GroupPageSidebar, {
  actions: {
    updateGroup
  },
  readPropsFromRedux: (state, props: GroupPageSidebarProps) => ({
    user: state.auth.user,
    exchangeRates: state.exchangeRates
  })
});
