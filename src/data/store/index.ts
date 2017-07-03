import production from './production';
import development from './development';

const configureStore = (process.env.NODE_ENV === 'production') ? production : development;

export default configureStore;
