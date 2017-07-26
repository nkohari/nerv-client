import { Action, handleActions } from 'redux-actions';
import { Collection, Model, ModelEvent, highestVersionWins } from 'src/data';

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
    [`${actionPrefix}_LOADING`]: state => (
      state.next({ isLoading: true })
    ),
    [`${actionPrefix}_LOADED`]: (state, action: Action<T[]>) => (
      state.merge(action.payload, highestVersionWins, { isLoading: false })
    ),
    MODEL_EVENT_RECEIVED: (state, action: Action<ModelEvent>) => {
      const event = action.payload;
      if (event.type !== modelClass.name) {
        return state;
      } else {
        return state.merge([new modelClass(event.model)], highestVersionWins);
      }
    }
  },
  defaultState);
}
