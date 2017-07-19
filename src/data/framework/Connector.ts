import { ReduxState } from '../ReduxState';

export interface Connector<P> {
  actions: { [name: string]: Function };
  readPropsFromRedux: (state: ReduxState, props?: P) => Partial<P>;
}
