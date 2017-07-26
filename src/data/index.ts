// Framework
export { connect } from './framework/connect';
export { createApiClient } from './framework/createApiClient';
export { createCollectionReducer } from './framework/createCollectionReducer';
export { FetchError } from './framework/FetchError';
export { MeasureEvent } from './framework/MeasureEvent';
export { ModelEvent } from './framework/ModelEvent';
export { SocketState } from './framework/SocketState';
export { SocketStatus } from './framework/SocketStatus';
export { SocketMessage } from './framework/SocketMessage';
export { RouterState } from './framework/RouterState';

export {
  Agent,
  Credentials,
  Device,
  ExchangeRate,
  Group,
  HasIdentifier,
  Measure,
  Model,
  NetworkData,
  Sample,
  User,
  Collection,
  AgentCollection,
  DeviceCollection,
  ExchangeRateCollection,
  GroupCollection,
  MeasureCollection,
  NetworkDataCollection,
  SampleCollection,
  lastWriteWins,
  highestVersionWins
} from 'nerv-api';

// Reducers
import { default as agentsReducer } from './reducers/agents';
import { default as authReducer } from './reducers/auth';
import { default as devicesReducer } from './reducers/devices';
import { default as exchangeRatesReducer } from './reducers/exchangeRates';
import { default as groupsReducer } from './reducers/groups';
import { default as measuresReducer } from './reducers/measures';
import { default as samplesReducer } from './reducers/samples';
import { default as socketReducer } from './reducers/socket';

export const reducers = {
  agents: agentsReducer,
  auth: authReducer,
  devices: devicesReducer,
  exchangeRates: exchangeRatesReducer,
  groups: groupsReducer,
  measures: measuresReducer,
  samples: samplesReducer,
  socket: socketReducer
};

export { ReduxState } from './ReduxState';

// Store
import { configureStoreForProduction } from './store/production';
import { configureStoreForDevelopment } from './store/development';

export const configureStore = (process.env.NODE_ENV === 'production') ? configureStoreForProduction : configureStoreForDevelopment;
