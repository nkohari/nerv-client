import { Identifiable } from './Identifiable';

type PredicateFunction<T> = (value: T, index?: number, array?: T[]) => boolean;
type CompareFunction<T> = (a: T, b: T) => number;

export class Collection<T extends Identifiable> {

  items: T[];
  isLoading: boolean;
  error: Error;

  constructor(data: Partial<Collection<T>> = {}) {
    this.items = data.items || [];
    this.isLoading = data.isLoading || false;
    this.error = data.error || null;
  }

  get(id: string): T {
    return this.items.find(item => item.id === id);
  }

  has(id: string): boolean {
    return this.items.some(item => item.id === id);
  }

  all() {
    return [...this.items];
  }

  find(func: PredicateFunction<T>): T {
    return this.items.find(func);
  }

  filter(func: PredicateFunction<T>): T[] {
    return this.items.filter(func);
  }

  sort(compare: CompareFunction<T>): T[] {
    const result = [...this.items];
    result.sort(compare);
    return result;
  }

}
