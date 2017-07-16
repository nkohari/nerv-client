import { Device, DeviceCollection, createCollectionReducer } from 'src/data';

const devicesReducer = createCollectionReducer<Device>(Device, DeviceCollection);

export default devicesReducer;
