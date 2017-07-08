import { Model } from './Model';

export interface ModelClass<T extends Model> {
  new(data?: any): T;
}
