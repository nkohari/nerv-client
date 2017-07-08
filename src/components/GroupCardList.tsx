import * as React from 'react';
import { Link } from 'react-router';
import { GroupCard } from 'components';
import { Group } from 'data';
import './GroupCardList.styl';

interface GroupCardListProps {
  groups: Group[];
}

class GroupCardList extends React.Component<GroupCardListProps> {

  render() {
    const { groups } = this.props;

    const items = groups.map(group => (
      <li key={group.id}>
        <Link to={`/${group.id}`}>
          <GroupCard group={group} />
        </Link>
      </li>
    ));

    return (
      <ul className='group-card-list'>
        {items}
      </ul>
    );
  }

}

export default GroupCardList;
