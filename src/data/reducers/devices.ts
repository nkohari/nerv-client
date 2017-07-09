import { Device, createCollectionReducer } from 'data';

const devicesReducer = createCollectionReducer<Device>(Device);

export default devicesReducer;
