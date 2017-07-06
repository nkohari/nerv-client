import * as React from 'react';
import { Group } from '../data';

interface GroupPageProps {
  group: Group;
}

class GroupPage extends React.Component<GroupPageProps> {

  render() {
    const { group } = this.props;
    return (
      <div className='page group-page'>
        {group.name} ({group.id})
      </div>
    );
  }

}

export default GroupPage;
