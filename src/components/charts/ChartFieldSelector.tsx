import * as React from 'react';
import { Selector } from 'src/components';

interface ChartFieldSelectorProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

const FIELDS = [
  { text: 'Hashrate', value: 'hashrate' },
  { text: 'Coins per minute', value: 'coins' },
  { text: 'Load %', value: 'load' },
  { text: 'Power (volts)', value: 'power' },
  { text: 'Core clock (Hz)', value: 'coreclock' },
  { text: 'RAM clock (Hz)', value: 'ramclock' },
  { text: 'Temperature (C)', value: 'temp' },
  { text: 'Fan RPM', value: 'fanrpm' },
  { text: 'Fan Speed %', value: 'fanpercent' }
];

class ChartFieldSelector extends React.Component<ChartFieldSelectorProps> {

  render() {
    return <Selector {...this.props} fields={FIELDS} />;
  }

}

export default ChartFieldSelector;
