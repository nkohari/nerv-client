import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import { Action, updateAgent } from 'src/actions';
import { Sidebar, SidebarBlock, SidebarItem, Time } from 'src/components';
import { Agent, Device, ExchangeRateCollection, Sample, User, connect } from 'src/data';
import { format } from 'src/utils';

interface AgentPageSidebarProps {
  agent: Agent;
  devices: Device[];
  samples: Sample[];
  user: User;
  exchangeRates: ExchangeRateCollection;
  updateAgent: Action;
}

class AgentPageSidebar extends React.Component<AgentPageSidebarProps> {

  static connectedActions = {
    updateAgent
  };

  static readPropsFromRedux = state => ({
    user: state.auth.user,
    exchangeRates: state.exchangeRates
  })

  onNameChanged = name => {
    const { agent } = this.props;
    this.props.updateAgent(agent.groupid, agent.id, { name });
  }

  render() {
    const { agent, devices, samples, user, exchangeRates } = this.props;

    const lastSample = samples.reduce((last, sample) => {
      return (!last || sample.time.valueOf() > last.valueOf()) ? sample : last;
    }, null);

    if (!lastSample || exchangeRates.isLoading) {
      return this.renderEmpty();
    }

    const rate = exchangeRates.for(lastSample.symbol, user.currency);
    const coinsPerMonth = lastSample.coins * 24 * 30;

    const hashrate = format.hashrate(lastSample.hashrate, { precision: 0 });
    const coins = format.number(coinsPerMonth, { precision: 4 });
    const revenue = format.currency(coinsPerMonth * rate.amount, user.currency);

    return (
      <Sidebar title={agent.name} subtitle={`Agent ${agent.id}`} iconName='desktop'>
        <SidebarBlock text={hashrate} details={`from ${devices.length} devices`} />
        <SidebarBlock text={coins} details={`${lastSample.symbol} per month`} />
        <SidebarBlock text={revenue} details='revenue per month' />
        <SidebarItem title='Last Seen'>
          <Time value={lastSample.time} />
        </SidebarItem>
      </Sidebar>
    );
  }

  renderEmpty() {
    const { agent } = this.props;
    return (
      <Sidebar title={agent.name} subtitle={`Agent ${agent.id}`} iconName='desktop'>
        <Spinner />
      </Sidebar>
    );
  }

}

export default connect(AgentPageSidebar);
