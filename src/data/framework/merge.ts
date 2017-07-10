import { Model } from 'src/data';

/**
 * Merges two arrays of models by selecting the models with the highest version number.
 * Called by reducers when new data is loaded from the API.
 * @param oldItems The items which were already stored in state.
 * @param newItems The new items which have been received.
 * @returns The merged array of items.
 */
export function merge<T extends Model>(oldItems: T[], newItems: T[]): T[] {
  if (oldItems.length === 0) {
    return [...newItems];
  }

  const hash = {};
  const items = [...oldItems, ...newItems];

  items.forEach(item => {
    if (!hash[item.id] || item.version > hash[item.id].version) {
      hash[item.id] = item;
    }
  });

  return Object.keys(hash).map(id => hash[id]);
}
