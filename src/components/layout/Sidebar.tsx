import * as React from 'react';
import { Icon } from 'src/components';
import './Sidebar.styl';

interface SidebarProps {
  title: string;
  iconName?: string;
}

class Sidebar extends React.Component<SidebarProps> {

  render() {
    const { iconName, title, children } = this.props;

    let icon;
    if (iconName) {
      icon = <Icon name={iconName} size='large' />;
    }

    return (
      <div className='sidebar'>
        <div className='sidebar-header'>
          {icon}
          {title}
        </div>
        <div className='sidebar-content'>
          {children}
        </div>
      </div>
    );
  }

}

export default Sidebar;
