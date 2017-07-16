import * as React from 'react';
import { Icon } from 'src/components';
import './SidebarItem.styl';

interface SidebarItemProps {
  title: string;
  iconName?: string;
}

class SidebarItem extends React.Component<SidebarItemProps> {

  render() {
    const { iconName, title, children } = this.props;

    let icon;
    if (iconName) {
      icon = <Icon name={iconName} />;
    }

    return (
      <div className='sidebar-item'>
        <div className='sidebar-item-header'>
          {icon}
          {title}
        </div>
        <div className='sidebar-item-content'>
          {children}
        </div>
      </div>
    );
  }

}

export default SidebarItem;
