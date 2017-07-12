import * as React from 'react';
import * as classNames from 'classnames';
import './Icon.styl';

interface IconProps {
  name: string;
  size?: string;
  className?: string;
}

class Icon extends React.Component<IconProps> {

  static defaultProps = {
    size: 'standard'
  };

  render() {
    const { size, name, className } = this.props;

    const classes = classNames(
      'icon',
      `pt-icon-${size}`,
      `pt-icon-${name}`,
      className
    );

    return <span className={classes} />;
  }

}

export default Icon;
