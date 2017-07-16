import { Action, handleActions } from 'redux-actions';
import { Aggregate, AggregateCollection, merge } from 'src/data';

const defaultState = new AggregateCollection();

const aggregatesReducer = handleActions<AggregateCollection>({
  AGGREGATES_LOADING: state => new AggregateCollection({
    ...state,
    isLoading: true,
    error: null
  }),
  AGGREGATES_LOADED: (state, action: Action<Aggregate[]>) => new AggregateCollection({
    ...state,
    isLoading: false,
    items: merge(state.items, action.payload)
  }),
  AGGREGATES_ERROR: (state, action: Action<FetchError>) => new AggregateCollection({
    ...state,
    isLoading: false,
    error: action.payload
  })
},
defaultState);

export default aggregatesReducer;
