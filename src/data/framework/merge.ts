import { HasIdentifier, Model } from 'src/data';

type Comparator<T> = (a: T, b: T) => boolean;

export const lastWriteWins = (a: any, b: any) => true;
export const highestVersionWins = (a: Model, b: Model) => a.version > b.version;

export function merge<T extends HasIdentifier>(oldItems: T[], newItems: T[], compare: Comparator<T> = lastWriteWins): T[] {
  const hash = [...oldItems, ...newItems].reduce((items, item) => {
    const existing = items[item.id];
    if (!existing || compare(item, existing)) {
      items[item.id] = item;
    }
    return items;
  }, {});
  return Object.keys(hash).map(id => hash[id]);
}
