// API
import { default as agentsApi } from './api/agents';
import { default as authApi } from './api/auth';
import { default as groupsApi } from './api/groups';

export const API = {
  agents: agentsApi,
  auth: authApi,
  groups: groupsApi
};

// Models
export { Agent } from './models/Agent';
export { Group } from './models/Group';
export { User } from './models/User';

// Framework
export { AuthContext } from './framework/AuthContext';
export { ChangeEvent } from './framework/ChangeEvent';
export { Collection } from './framework/Collection';
export { connect } from './framework/connect';
export { createCollectionReducer } from './framework/createCollectionReducer';
export { merge } from './framework/merge';
export { Model } from './framework/Model';
export { ModelClass } from './framework/ModelClass';
export { default as request } from './framework/request';
export { SocketState } from './framework/SocketState';
export { SocketStatus } from './framework/SocketStatus';
export { SocketMessage } from './framework/SocketMessage';

// Reducers
import { default as agentsReducer } from './reducers/agents';
import { default as authReducer } from './reducers/auth';
import { default as groupsReducer } from './reducers/groups';
import { default as socketReducer } from './reducers/socket';

export const reducers = {
  agents: agentsReducer,
  auth: authReducer,
  groups: groupsReducer,
  socket: socketReducer
};

// Store
import { configureStoreForProduction } from './store/production';
import { configureStoreForDevelopment } from './store/development';

export const configureStore = (process.env.NODE_ENV === 'production') ? configureStoreForProduction : configureStoreForDevelopment;
