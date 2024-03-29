import * as React from 'react';
import { Link } from 'redux-little-router';
import { GroupCard } from 'src/components';
import { GroupCollection } from 'src/data';
import './GroupCardList.styl';

interface GroupCardListProps {
  groups: GroupCollection;
}

class GroupCardList extends React.Component<GroupCardListProps> {

  render() {
    const { groups } = this.props;

    const items = groups.map(group => (
      <li key={group.id}>
        <Link href={`/${group.id}`}>
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
