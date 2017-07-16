import * as React from 'react';
import * as classNames from 'classnames';
import './Page.styl';

interface PageProps {
  className?: string;
}

class Page extends React.Component<PageProps> {

  render() {
    return (
      <div className={classNames('page', this.props.className)}>
        {this.props.children}
      </div>
    );
  }

}

export default Page;
