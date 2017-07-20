import * as React from 'react';
import { Link } from 'redux-little-router';
import { Icon } from 'src/components';
import { Group, Agent, Device, connect } from 'src/data';
import './Breadcrumbs.styl';

interface BreadcrumbsConnectedProps {
  group: Group;
  agent: Agent;
  device: Device;
}

class Breadcrumbs extends React.Component<BreadcrumbsConnectedProps> {

  render() {
    const { group, agent, device } = this.props;

    const items = [
      <li key='home'>
        <Link href='/' className='pt-breadcrumb'>
          <Icon name='predictive-analysis' size='large' />
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
    }

    if (group && agent) {
      items.push(
        <li key='agent'>
          <Link href={`/${group.id}/${agent.id}`} className='pt-breadcrumb'>
            <Icon name='desktop' />
            {agent.name}
          </Link>
        </li>
      );
    }

    if (group && agent && device) {
      items.push(
        <li key='device'>
          <Link href={`/${group.id}/${agent.id}/${device.id}`} className='pt-breadcrumb'>
            <Icon name='cog' />
            {device.name}
          </Link>
        </li>
      );
    }

    return (
      <ul className='breadcrumbs pt-breadcrumbs'>
        {items}
      </ul>
    );
  }

}

export default connect(Breadcrumbs, {
  readPropsFromRedux: state => {
    const { groupid, agentid, deviceid } = state.router.params;
    return {
      group: groupid ? state.groups.get(groupid) : null,
      agent: agentid ? state.agents.get(agentid) : null,
      device: deviceid ? state.devices.get(deviceid) : null
    };
  }
});
