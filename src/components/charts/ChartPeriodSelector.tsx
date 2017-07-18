import * as React from 'react';
import { Selector } from 'src/components';

interface ChartPeriodSelectorProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

const FIELDS = [
  { text: 'for the past 5 minutes', value: '5 minutes' },
  { text: 'for the past 15 minutes', value: '15 minutes' },
  { text: 'for the past hour', value: '1 hour' },
  { text: 'for the past day', value: '1 day' },
  { text: 'for the past week', value: '1 week' },
  { text: 'for the past month', value: '1 month' }
];

class ChartPeriodSelector extends React.Component<ChartPeriodSelectorProps> {

  render() {
    return <Selector {...this.props} fields={FIELDS} />;
  }

}

export default ChartPeriodSelector;
