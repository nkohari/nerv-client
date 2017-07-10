import { Group, createCollectionReducer } from 'src/data';

const groupsReducer = createCollectionReducer<Group>(Group);

export default groupsReducer;
