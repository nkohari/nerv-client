type HashByResult<T> = { [key: string]: T };
type MapFunction<T> = (item: T) => string;

export default function hashBy<T>(items: T[], propertyOrFunction: string | MapFunction<T>): HashByResult<T> {
  const func = (typeof propertyOrFunction === 'function') ? propertyOrFunction : (item) => item[propertyOrFunction];
  return items.reduce((hash, item) => {
    const key = func(item);
    hash[key] = item;
    return hash;
  }, {});
}
