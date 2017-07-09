import * as React from 'react';
import { Agent, Group, connect } from 'data';
import './GroupCard.styl';

interface GroupCardProps {
  group: Group;
  agents: Agent[];
}

class GroupCard extends React.Component<GroupCardProps> {

  static readPropsFromState = (state, props) => ({
    agents: state.agents.items.filter(a => a.groupid === props.group.id)
  })

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

export default connect(GroupCard);