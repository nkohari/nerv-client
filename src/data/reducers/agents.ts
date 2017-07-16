import { Agent, AgentCollection, createCollectionReducer } from 'src/data';

const agentsReducer = createCollectionReducer<Agent>(Agent, AgentCollection);

export default agentsReducer;
