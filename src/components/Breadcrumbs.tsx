import * as React from 'react';
import { Link } from 'redux-little-router';
import { Agent, Group, connect } from 'src/data';
import './Breadcrumbs.styl';

interface BreadcrumbsProps {
  group?: Group;
  agent?: Agent;
}

class Breadcrumbs extends React.Component<BreadcrumbsProps> {

  static readPropsFromRedux = (state, props) => {
    const { groupid, agentid } = state.router.params;
    return {
      group: groupid ? state.groups.items.find(g => g.id === groupid) : null,
      agent: agentid ? state.agents.items.find(a => a.id === agentid) : null
    };
  }

  render() {
    const { group, agent } = this.props;

    const items = [
      <li key='home'>
        <Link href='/' className='pt-breadcrumb'>
          <span className='pt-icon-large pt-icon-build' />
          Mineboss
        </Link>
      </li>
    ];

    if (group) {
      items.push(
        <li key='group'>
          <Link href={`/${group.id}`} className='pt-breadcrumb'>
            <span className='pt-icon-standard pt-icon-layout-auto' />
            {group.name}
          </Link>
        </li>
      );

      if (agent) {
        items.push(
          <li key='agent'>
            <Link href={`/${group.id}/${agent.id}`} className='pt-breadcrumb'>
              <span className='pt-icon-standard pt-icon-desktop' />
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
