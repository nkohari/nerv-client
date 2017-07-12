import * as React from 'react';
import * as classNames from 'classnames';

interface IndicatorLightProps {
  status: 'good' | 'warning' | 'bad';
}

const INTENTS = {
  good: 'pt-intent-success',
  warning: 'pt-intent-warning',
  bad: 'pt-intent-error'
};

class IndicatorLight extends React.Component<IndicatorLightProps> {

  render() {
    const classes = classNames(
      'indicator-light',
      'pt-icon-standard',
      'pt-icon-full-circle',
      INTENTS[this.props.status]
    );

    return <span className={classes} />;
  }

}

export default IndicatorLight;
