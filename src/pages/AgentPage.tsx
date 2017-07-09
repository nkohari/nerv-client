import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import { Breadcrumbs } from 'components';
import { Action, loadAgent, loadGroup } from 'actions';
import { Agent, Group, connect } from 'data';

interface AgentPageProps {
  params: { [name: string]: string };
  agent: Agent;
  group: Group;
  loadAgent: Action<string>;
  loadGroup: Action<string>;
}

class AgentPage extends React.Component<AgentPageProps> {

  static useActions = {
    loadAgent,
    loadGroup
  };

  static readPropsFromState = (state, props) => ({
    agent: state.agents.find(a => a.id === props.params.agentid),
    group: state.groups.find(g => g.id === props.params.groupid)
  })

  componentDidMount() {
    const { groupid, agentid } = this.props.params;
    this.props.loadAgent(groupid, agentid);
    this.props.loadGroup(groupid);
  }

  componentWillReceiveProps(newProps) {
    const oldParams = this.props.params;
    const newParams = newProps.params;
    if (oldParams.agentid !== newParams.agentId) {
      this.props.loadAgent(newParams.groupid, newParams.agentId);
      this.props.loadGroup(newParams.groupid);
    }
  }

  render() {
    const { agent, group } = this.props;

    if (!agent || !group) {
      return <Spinner />;
    }

    return (
      <div className='page agent-page'>
        <Breadcrumbs group={group} agent={agent} />
        <div className='page-content'>
          <h5>{agent.name}</h5>
        </div>
      </div>
    );
  }

}

export default connect(AgentPage);
