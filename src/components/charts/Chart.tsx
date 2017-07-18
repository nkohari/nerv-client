import * as React from 'react';
import * as moment from 'moment';
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

}

export default Chart;
