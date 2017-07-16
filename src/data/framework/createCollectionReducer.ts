import { Action, handleActions } from 'redux-actions';
import { Collection, Model, ModelEvent, merge, highestVersionWins } from 'src/data';

interface ModelClass<T extends Model> {
  new(data?: any): T;
}

interface CollectionClass<T extends Model> {
  new(data?: any): Collection<T>;
}

export function createCollectionReducer<T extends Model>(modelClass: ModelClass<T>, collectionClass: CollectionClass<T>) {
  const actionPrefix = `${modelClass.name.toUpperCase()}S`;

  const defaultState = new collectionClass();

  return handleActions<Collection<T>>({
    [`${actionPrefix}_LOADING`]: state => new collectionClass({
      ...state,
      isLoading: true,
      error: null
    }),
    [`${actionPrefix}_LOADED`]: (state, action: Action<T[]>) => new collectionClass({
      ...state,
      isLoading: false,
      items: merge(state.items, action.payload, highestVersionWins)
    }),
    [`${actionPrefix}_ERROR`]: (state, action: Action<FetchError>) => new collectionClass({
      ...state,
      isLoading: false,
      error: action.payload
    }),
    MODEL_EVENT_RECEIVED: (state, action: Action<ModelEvent>) => {
      const event = action.payload;
      if (event.type !== modelClass.name) {
        return state;
      } else {
        return new collectionClass({
          ...state,
          items: merge(state.items, [new modelClass(event.model)], highestVersionWins)
        });
      }
    }
  },
  defaultState);
}
