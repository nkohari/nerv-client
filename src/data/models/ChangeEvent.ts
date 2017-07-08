import { Model } from '../framework';

export interface ChangeEvent {
  op: 'create' | 'update';
  type: string;
  model: Model;
}
