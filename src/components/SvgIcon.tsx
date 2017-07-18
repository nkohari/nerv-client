import * as React from 'react';
import * as classNames from 'classnames';
import './SvgIcon.styl';

interface SvgIconProps {
  src: React.ComponentClass;
  size?: 'standard' | 'large';
  className?: string;
}

class SvgIcon extends React.Component<SvgIconProps> {

  static defaultProps = {
    size: 'standard'
  };

  render() {
    const { size, src, className } = this.props;

    const props = {
      className: classNames('svg-icon', `svg-icon-${size}`, className)
    };

    return React.createElement(src, props as any);
  }

}

export default SvgIcon;
