import * as React from 'react';
import * as classNames from 'classnames';
import { push } from 'redux-little-router';
import { AutoSizer, Table, Column } from 'react-virtualized';
import { Agent, AgentCollection, Group, connect } from 'src/data';
import './AgentTable.styl';

interface AgentTableDeclaredProps {
  group: Group;
  agents: AgentCollection;
}

interface AgentTableConnectedProps {
  push: typeof push;
}

class AgentTable extends React.Component<AgentTableDeclaredProps & AgentTableConnectedProps> {

  onRowClicked = (agent: Agent) => (
    event => {
      const { groupid, id } = agent;
      this.props.push(`/${groupid}/${id}`);
    }
  )

  render() {
    const { agents } = this.props;

    const getRowData = params => agents.at(params.index);

    return (
      <div className='agent-table'>
        <AutoSizer>
          {size => (
          <Table
              height={size.height}
              width={size.width}
              headerHeight={40}
              rowHeight={32}
              rowCount={agents.length}
              rowGetter={getRowData}
              rowRenderer={this.renderTableRow}
            >
              <Column label='Name' dataKey='name' width={100} />
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
        className={classNames('agent-table-row', params.className)}
        role='row'
        style={params.style}
        onClick={this.onRowClicked(params.rowData)}
      >
        {params.columns}
      </div>
    );
  }

}

export default connect<AgentTableDeclaredProps>(AgentTable, {
  actions: {
    push
  }
});
