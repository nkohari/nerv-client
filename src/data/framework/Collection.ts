export interface Collection<T> {
  items: T[];
  isLoading: boolean;
  error: Error;
}
