import {
  AgentCollection,
  Credentials,
  DeviceCollection,
  ExchangeRateCollection,
  GroupCollection,
  MeasureCollection,
  SampleCollection,
  SocketState,
  RouterState
} from 'src/data';

export interface ReduxState {
  agents: AgentCollection;
  auth: Credentials;
  devices: DeviceCollection;
  exchangeRates: ExchangeRateCollection;
  groups: GroupCollection;
  measures: MeasureCollection;
  samples: SampleCollection;
  socket: SocketState;
  router: RouterState;
}
