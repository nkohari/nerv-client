import { Model } from 'data';

export interface ChangeEvent {
  op: 'create' | 'update';
  type: string;
  model: Model;
}
