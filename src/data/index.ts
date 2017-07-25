// Framework
export { Collection } from './framework/Collection';
export { connect } from './framework/connect';
export { createApiClient } from './framework/createApiClient';
export { createCollectionReducer } from './framework/createCollectionReducer';
export { MeasureEvent } from './framework/MeasureEvent';
export { ModelEvent } from './framework/ModelEvent';
export { merge, highestVersionWins, lastWriteWins } from './framework/merge';
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
  Identifiable,
  Measure,
  Model,
  NetworkData,
  Sample,
  User
} from 'nerv-api';

// Collections
export { AgentCollection } from './collections/AgentCollection';
export { DeviceCollection } from './collections/DeviceCollection';
export { ExchangeRateCollection } from './collections/ExchangeRateCollection';
export { GroupCollection } from './collections/GroupCollection';
export { MeasureCollection } from './collections/MeasureCollection';
export { NetworkDataCollection } from './collections/NetworkDataCollection';
export { SampleCollection } from './collections/SampleCollection';

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
