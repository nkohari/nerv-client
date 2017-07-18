import * as React from 'react';
import * as classNames from 'classnames';
import './PageControls.styl';

interface PageControlsProps {
  className?: string;
}

class PageControls extends React.Component<PageControlsProps> {

  render() {
    return (
      <div className={classNames('pt-navbar page-controls', this.props.className)}>
        {this.props.children}
      </div>
    );
  }

}

export default PageControls;
