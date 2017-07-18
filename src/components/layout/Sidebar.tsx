import * as React from 'react';
import { Icon } from 'src/components';
import './Sidebar.styl';

interface SidebarProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  iconName?: string;
}

class Sidebar extends React.Component<SidebarProps> {

  render() {
    const { iconName, title, children } = this.props;

    let icon;
    if (iconName) {
      icon = <Icon name={iconName} size='large' />;
    }

    let subtitle;
    if (this.props.subtitle) {
      subtitle = <div className='sidebar-subtitle'>{this.props.subtitle}</div>;
    }

    return (
      <div className='sidebar'>
        <div className='sidebar-header'>
          <div className='sidebar-title'>
            {icon}
            {title}
          </div>
          {subtitle}
        </div>
        <div className='sidebar-content'>
          {children}
        </div>
      </div>
    );
  }

}

export default Sidebar;
