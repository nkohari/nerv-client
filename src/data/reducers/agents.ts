import { Agent, createCollectionReducer } from 'data';

const agentsReducer = createCollectionReducer<Agent>(Agent);

export default agentsReducer;
