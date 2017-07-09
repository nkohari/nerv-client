import * as React from 'react';
import { IndexLink, Link } from 'react-router';
import { Agent, Group } from 'data';
import './Breadcrumbs.styl';

interface BreadcrumbsProps {
  group?: Group;
  agent?: Agent;
}

class Breadcrumbs extends React.Component<BreadcrumbsProps> {

  render() {
    const { group, agent } = this.props;

    const items = [
      <li key='home'>
        <IndexLink to='/' className='pt-breadcrumb'>
          <span className='pt-icon-standard pt-icon-home' />
          Groups
        </IndexLink>
      </li>
    ];

    if (group) {
      items.push(
        <li key='group'>
          <Link to={`/${group.id}`} className='pt-breadcrumb'>
            {group.name}
          </Link>
        </li>
      );

      if (agent) {
        items.push(
          <li key='agent'>
            <Link to={`/${group.id}/agents/${agent.id}`} className='pt-breadcrumb'>
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

export default Breadcrumbs;
