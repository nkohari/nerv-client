import * as React from 'react';
import * as moment from 'moment';
import { NonIdealState } from '@blueprintjs/core';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Sample } from 'src/data';
import './Chart.styl';

interface ChartProps {
  field: string;
  samples: Sample[];
}

class Chart extends React.Component<ChartProps> {

  render() {
    const { samples, field } = this.props;

    if (samples.length === 0) {
      return this.renderEmpty();
    }

    const data = samples.map(sample => ({
      time: moment(sample.time).format('LT'),
      [field]: sample[field]
    }));

    return (
      <div className='chart pt-card'>
        <ResponsiveContainer width='100%' height={300}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey='time' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Area type='monotone' dataKey={field} stroke='#1F4B99' fill='#2965CC' />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }

  renderEmpty() {
    return (
      <div className='chart pt-card'>
        <NonIdealState
          visual='timeline-area-chart'
          title='Not enough data'
          description="We're still collecting data for this chart. Please check back in a few minutes."
        />
      </div>
    );
  }

}

export default Chart;
