import * as React from 'react';
import { Link } from 'redux-little-router';
import { Icon } from 'src/components';
import { Agent, Group, ReduxState, connect } from 'src/data';
import './Breadcrumbs.styl';

interface BreadcrumbsProps {
  group?: Group;
  agent?: Agent;
}

class Breadcrumbs extends React.Component<BreadcrumbsProps> {

  static readPropsFromRedux = (state: ReduxState) => {
    const { groupid, agentid } = state.router.params;
    return {
      group: groupid ? state.groups.get(groupid) : null,
      agent: agentid ? state.agents.get(agentid) : null
    };
  }

  render() {
    const { group, agent } = this.props;

    const items = [
      <li key='home'>
        <Link href='/' className='pt-breadcrumb'>
          <Icon name='predictive-analysis' />
          Nerv
        </Link>
      </li>
    ];

    if (group) {
      items.push(
        <li key='group'>
          <Link href={`/${group.id}`} className='pt-breadcrumb'>
            <Icon name='build' />
            {group.name}
          </Link>
        </li>
      );

      if (agent) {
        items.push(
          <li key='agent'>
            <Link href={`/${group.id}/${agent.id}`} className='pt-breadcrumb'>
              <Icon name='desktop' />
              {agent.name}
            </Link>
          </li>
        );
      }
    }

    return (
      <ul className='breadcrumbs pt-breadcrumbs'>
        {items}
      </ul>
    );
  }

}

export default connect(Breadcrumbs);
