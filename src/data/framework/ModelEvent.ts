import { Model } from 'src/data';

export interface ModelEvent {
  op: 'create' | 'update';
  type: string;
  model: Model;
}
