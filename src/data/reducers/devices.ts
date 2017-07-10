import { Device, createCollectionReducer } from 'src/data';

const devicesReducer = createCollectionReducer<Device>(Device);

export default devicesReducer;
