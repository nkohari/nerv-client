import * as React from 'react';
import { Button } from '@blueprintjs/core';
import { ChartFieldSelector, ChartPeriodSelector } from 'src/components';
import './ChartControls.styl';

interface ChartControlsProps {
  field: string;
  period: string;
  onFieldChanged: (field: string) => void;
  onPeriodChanged: (period: string) => void;
  onRefresh: () => void;
}

class ChartControls extends React.Component<ChartControlsProps> {

  render() {
    const { field, period, onFieldChanged, onPeriodChanged, onRefresh } = this.props;
    return (
      <div className='chart-controls pt-navbar'>
        <div className='pt-navbar-group pt-align-left'>
          <div className='pt-button-group'>
            <ChartFieldSelector value={field} onChange={onFieldChanged} />
            <ChartPeriodSelector value={period} onChange={onPeriodChanged} />
          </div>
        </div>
        <div className='pt-navbar-group pt-align-right'>
          <Button iconName='refresh' onClick={onRefresh} />
        </div>
      </div>
    );
  }

}

export default ChartControls;
