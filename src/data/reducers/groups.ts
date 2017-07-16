import { Group, GroupCollection, createCollectionReducer } from 'src/data';

const groupsReducer = createCollectionReducer<Group>(Group, GroupCollection);

export default groupsReducer;
