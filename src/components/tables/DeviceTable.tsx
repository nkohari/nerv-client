import * as React from 'react';
import * as classNames from 'classnames';
import { push } from 'redux-little-router';
import { AutoSizer, Table, Column } from 'react-virtualized';
import { Agent, Device, Measure, connect } from 'src/data';
import { cells } from 'src/components/tables/renderers';
import { RowParams } from 'src/components/tables/framework';
import './DeviceTable.styl';

interface DeviceTableDeclaredProps {
  agent: Agent;
  devices: Device[];
}

interface DeviceTableConnectedProps {
  measures: { [deviceid: string]: Measure };
  push: typeof push;
}

class DeviceTable extends React.Component<DeviceTableDeclaredProps & DeviceTableConnectedProps> {

  onRowClicked = (device: Device) => (
    event => {
      const { groupid, agentid, id } = device;
      this.props.push(`/${groupid}/${agentid}/${id}`);
    }
  )

  render() {
    const { devices, measures } = this.props;

    const getRowData = params => devices[params.index];
    const getKind = (params: RowParams<Device>) => `${params.rowData.vendor} ${params.rowData.model}`;
    const getMeasure = (name) => (
      (params: RowParams<Device>) =>
        measures[params.rowData.id] ? measures[params.rowData.id][name] : undefined
    );

    return (
      <div className='device-table'>
        <AutoSizer>
          {size => (
          <Table
              height={size.height}
              width={size.width}
              headerHeight={40}
              rowHeight={32}
              rowCount={devices.length}
              rowGetter={getRowData}
              rowRenderer={this.renderTableRow}
            >
              <Column label='Name' dataKey='name' width={100} />
              <Column label='Kind' dataKey='kind' width={150} cellDataGetter={getKind} />
              <Column label='Coin' dataKey='coin' width={40} cellDataGetter={getMeasure('symbol')} cellRenderer={cells.coinSymbol()} />
              <Column label='Rate' dataKey='hashrate' width={80} cellDataGetter={getMeasure('hashrate')} cellRenderer={cells.hashrate()} />
              <Column label='Temp (C)' dataKey='temp' width={80} cellDataGetter={getMeasure('temp')} cellRenderer={cells.integer()} />
              <Column label='Load %' dataKey='load' width={80} cellDataGetter={getMeasure('load')} cellRenderer={cells.percentage()} />
              <Column label='Fan %' dataKey='fanpercent' width={80} cellDataGetter={getMeasure('fanpercent')} cellRenderer={cells.percentage()} />
              <Column label='Fan RPM' dataKey='fanrpm' width={80} cellDataGetter={getMeasure('fanrpm')} cellRenderer={cells.integer()} />
              <Column label='Core (Hz)' dataKey='coreclock' width={80} cellDataGetter={getMeasure('coreclock')} cellRenderer={cells.integer()} />
              <Column label='RAM (Hz)' dataKey='ramclock' width={80} cellDataGetter={getMeasure('ramclock')} cellRenderer={cells.integer()} />
              <Column label='Power (V)' dataKey='power' width={80} cellDataGetter={getMeasure('power')} cellRenderer={cells.decimal(2)} />
            </Table>
          )}
        </AutoSizer>
      </div>
    );
  }

  renderTableRow = params => {
    return (
      <div
        key={params.key}
        className={classNames('device-table-row', params.className)}
        role='row'
        style={params.style}
        onClick={this.onRowClicked(params.rowData)}
      >
        {params.columns}
      </div>
    );
  }

}

export default connect(DeviceTable, {
  actions: {
    push
  },
  readPropsFromRedux: (state, props: DeviceTableDeclaredProps) => ({
    measures: state.measures.mostRecentForAgentByDevice(props.agent.id)
  })
});
