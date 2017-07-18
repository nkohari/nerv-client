// API
import * as agentsApi from './api/agents';
import * as authApi from './api/auth';
import * as devicesApi from './api/devices';
import * as exchangeRateApi from './api/exchangeRates';
import * as groupsApi from './api/groups';
import * as measuresApi from './api/measures';
import * as samplesApi from './api/samples';

export const API = {
  agents: agentsApi,
  auth: authApi,
  devices: devicesApi,
  exchangeRates: exchangeRateApi,
  groups: groupsApi,
  measures: measuresApi,
  samples: samplesApi
};

// Framework
export { AuthContext } from './framework/AuthContext';
export { Collection } from './framework/Collection';
export { connect } from './framework/connect';
export { createCollectionReducer } from './framework/createCollectionReducer';
export { Identifiable } from './framework/Identifiable';
export { MeasureEvent } from './framework/MeasureEvent';
export { ModelEvent } from './framework/ModelEvent';
export { merge, highestVersionWins, lastWriteWins } from './framework/merge';
export { Model } from './framework/Model';
export { default as request } from './framework/request';
export { SocketState } from './framework/SocketState';
export { SocketStatus } from './framework/SocketStatus';
export { SocketMessage } from './framework/SocketMessage';

// Models
export { Agent } from './models/Agent';
export { Device } from './models/Device';
export { Group } from './models/Group';
export { User } from './models/User';

// Measures
export { Measure } from './measures/Measure';
export { Sample } from './measures/Sample';

// Metadata
export { ExchangeRate } from './metadata/ExchangeRate';
export { NetworkData } from './metadata/NetworkData';

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

// Store
import { configureStoreForProduction } from './store/production';
import { configureStoreForDevelopment } from './store/development';

export const configureStore = (process.env.NODE_ENV === 'production') ? configureStoreForProduction : configureStoreForDevelopment;
