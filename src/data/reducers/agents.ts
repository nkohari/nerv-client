import { Agent, createCollectionReducer } from 'src/data';

const agentsReducer = createCollectionReducer<Agent>(Agent);

export default agentsReducer;
