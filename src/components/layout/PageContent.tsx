import * as React from 'react';
import * as classNames from 'classnames';
import './PageContent.styl';

interface PageContentProps {
  className?: string;
}

class PageContent extends React.Component<PageContentProps> {

  render() {
    return (
      <div className={classNames('page-content', this.props.className)}>
        <div className='page-content-main'>
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default PageContent;
