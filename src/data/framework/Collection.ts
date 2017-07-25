import { HasIdentifier } from 'src/data';

type PredicateFunction<T> = (value: T, index?: number, array?: T[]) => boolean;
type CompareFunction<T> = (a: T, b: T) => number;

export class Collection<T extends HasIdentifier> {

  items: T[];
  isLoading: boolean;

  constructor(data: Partial<Collection<T>> = {}) {
    this.items = data.items || [];
    this.isLoading = data.isLoading || false;
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

  best(compare: CompareFunction<T>): T {
    return this.items.reduce((winner, item) => {
      return (!winner || compare(item, winner) > 0) ? item : winner;
    }, null);
  }

}
