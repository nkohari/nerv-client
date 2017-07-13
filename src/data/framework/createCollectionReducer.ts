import { Action, handleActions } from 'redux-actions';
import { Collection, merge, Model, ModelClass, ModelEvent } from 'src/data';

export function createCollectionReducer<T extends Model>(modelClass: ModelClass<T>) {
  const actionPrefix = `${modelClass.name.toUpperCase()}S`;

  const defaultState: Collection<T> = {
    items: [],
    isLoading: false,
    error: null
  };

  return handleActions<Collection<T>>({
    [`${actionPrefix}_LOADING`]: state => ({
      ...state,
      isLoading: true,
      error: null
    }),
    [`${actionPrefix}_LOADED`]: (state, action: Action<T[]>) => ({
      ...state,
      isLoading: false,
      items: merge(state.items, action.payload)
    }),
    [`${actionPrefix}_ERROR`]: (state, action: Action<FetchError>) => ({
      ...state,
      isLoading: false,
      error: action.payload
    }),
    MODEL_EVENT_RECEIVED: (state, action: Action<ModelEvent>) => {
      const event = action.payload;
      if (event.type !== modelClass.name) {
        return state;
      } else {
        return {
          ...state,
          items: merge(state.items, [new modelClass(event.model)])
        };
      }
    }
  },
  defaultState);
}
