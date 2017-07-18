import * as React from 'react';
import * as classNames from 'classnames';
import { PageControls } from 'src/components';
import './PageContent.styl';

interface PageContentProps {
  className?: string;
  controls?: React.ReactElement<PageControls>;
}

class PageContent extends React.Component<PageContentProps> {

  render() {
    return (
      <div className={classNames('page-content', this.props.className)}>
        {this.props.controls}
        <div className='page-content-main'>
          {this.props.children}
        </div>
      </div>
    );

  }

}

export default PageContent;
