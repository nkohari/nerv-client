import * as React from 'react';
import { Spinner } from '@blueprintjs/core';
import { Sidebar, SidebarBlock, SidebarItem, Time } from 'src/components';
import { Group, Agent, Device, ExchangeRateCollection, Sample, User, connect } from 'src/data';
import { format } from 'src/utils';

interface GroupPageSidebarProps {
  group: Group;
  agents: Agent[];
  devices: Device[];
  samples: Sample[];
  user: User;
  exchangeRates: ExchangeRateCollection;
}

class GroupPageSidebar extends React.Component<GroupPageSidebarProps> {

  static readPropsFromRedux = state => ({
    user: state.auth.user,
    exchangeRates: state.exchangeRates
  })

  render() {
    const { group, agents, samples, exchangeRates, user } = this.props;

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
      <Sidebar title={group.name} subtitle={`Group ${group.id}`} iconName='build'>
        <SidebarBlock text={hashrate} details={`from ${agents.length} agents`} />
        <SidebarBlock text={coins} details={`${lastSample.symbol} per month`} />
        <SidebarBlock text={revenue} details='revenue per month' />
        <SidebarItem title='Last Seen'>
          <Time value={lastSample.time} />
        </SidebarItem>
      </Sidebar>
    );
  }

  renderEmpty() {
    const { group } = this.props;
    return (
      <Sidebar title={group.name} subtitle={`Group ${group.id}`} iconName='build'>
        <Spinner />
      </Sidebar>
    );
  }

}

export default connect(GroupPageSidebar);
