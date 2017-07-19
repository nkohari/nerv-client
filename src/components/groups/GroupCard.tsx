import * as React from 'react';
import { Agent, Group, connect } from 'src/data';
import './GroupCard.styl';

type GroupCardProps = { group: Group };
type GroupCardConnectedProps = { agents: Agent[] };

class GroupCard extends React.Component<GroupCardProps & GroupCardConnectedProps> {

  render() {
    const { group, agents } = this.props;
    return (
      <div className='group-card pt-card pt-interactive'>
        <h5>{group.name}</h5>
        {agents.length} agents
      </div>
    );
  }

}

export default connect(GroupCard, {
  readPropsFromRedux: (state, props: GroupCardProps) => ({
    agents: state.agents.forGroup(props.group.id)
  })
});
