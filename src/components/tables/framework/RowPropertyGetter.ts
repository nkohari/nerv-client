import { RowParams } from './RowParams';

export type RowPropertyGetter<T> = (name: string) => (params: RowParams<T>) => any;
