import { Model } from 'src/data';

export interface ChangeEvent {
  op: 'create' | 'update';
  type: string;
  model: Model;
}
