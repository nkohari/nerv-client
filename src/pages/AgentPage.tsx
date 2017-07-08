import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import { Action, loadAgent } from 'actions';
import { Agent, connect } from '../data';

interface AgentPageProps {
  agent: Agent;
  params: { [name: string]: string };
  loadAgent: Action<string>;
}

class AgentPage extends React.Component<AgentPageProps> {

  static useActions = {
    loadAgent
  };

  static readPropsFromState = (state, props) => ({
    agent: state.agents.find(a => a.id === props.params.agentid)
  })

  componentDidMount() {
    const { groupid, agentid } = this.props.params;
    this.props.loadAgent(groupid, agentid);
  }

  componentWillReceiveProps(newProps) {
    const oldParams = this.props.params;
    const newParams = newProps.params;
    if (oldParams.agentid !== newParams.agentId) {
      this.props.loadAgent(newParams.groupid, newParams.agentId);
    }
  }

  render() {
    const { agent } = this.props;

    if (!agent) {
      return <Spinner />;
    }

    return (
      <div className='page agent-page'>
        <div className='page-content'>
          This is agent {agent.name}
        </div>
      </div>
    );
  }

}

export default connect(AgentPage);
