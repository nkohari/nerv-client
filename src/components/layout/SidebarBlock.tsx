import * as React from 'react';
import './SidebarBlock.styl';

interface SidebarBlockProps {
  text: string;
  details: string;
}

class SidebarBlock extends React.Component<SidebarBlockProps> {

  render() {
    const { text, details } = this.props;
    return (
      <div className='sidebar-block'>
        <div className='sidebar-block-text'>{text}</div>
        <div className='sidebar-block-details'>{details}</div>
      </div>
    );
  }

}

export default SidebarBlock;
