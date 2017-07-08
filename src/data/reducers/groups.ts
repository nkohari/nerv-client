import { Group, createCollectionReducer } from 'data';

const groupsReducer = createCollectionReducer<Group>(Group);

export default groupsReducer;
