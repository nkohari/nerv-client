import * as React from 'react';
import { Link } from 'react-router';
import { Group } from '../data';

interface GroupListProps {
  groups: Group[];
}

class GroupList extends React.Component<GroupListProps> {

  render() {
    const { groups } = this.props;

    const items = groups.map(group => (
      <li key={group.id}>
        <Link to={`/${group.id}`}>{group.name}</Link>
      </li>
    ));

    return (
      <ul className='group-list'>
        {items}
      </ul>
    );
  }

}

export default GroupList;
