// API
import * as agentsApi from './api/agents';
import * as aggregatesApi from './api/aggregates';
import * as authApi from './api/auth';
import * as devicesApi from './api/devices';
import * as groupsApi from './api/groups';
import * as measuresApi from './api/measures';

export const API = {
  agents: agentsApi,
  aggregates: aggregatesApi,
  auth: authApi,
  devices: devicesApi,
  groups: groupsApi,
  measures: measuresApi
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
export { Aggregate } from './measures/Aggregate';
export { Measure } from './measures/Measure';

// Collections
export { AgentCollection } from './collections/AgentCollection';
export { AggregateCollection } from './collections/AggregateCollection';
export { DeviceCollection } from './collections/DeviceCollection';
export { GroupCollection } from './collections/GroupCollection';
export { MeasureCollection } from './collections/MeasureCollection';

// Reducers
import { default as agentsReducer } from './reducers/agents';
import { default as aggregatesReducer } from './reducers/aggregates';
import { default as devicesReducer } from './reducers/devices';
import { default as authReducer } from './reducers/auth';
import { default as groupsReducer } from './reducers/groups';
import { default as measuresReducer } from './reducers/measures';
import { default as socketReducer } from './reducers/socket';

export const reducers = {
  agents: agentsReducer,
  aggregates: aggregatesReducer,
  devices: devicesReducer,
  auth: authReducer,
  groups: groupsReducer,
  measures: measuresReducer,
  socket: socketReducer
};

// Store
import { configureStoreForProduction } from './store/production';
import { configureStoreForDevelopment } from './store/development';

export const configureStore = (process.env.NODE_ENV === 'production') ? configureStoreForProduction : configureStoreForDevelopment;
