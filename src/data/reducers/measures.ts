import { Action, handleActions } from 'redux-actions';
import { Measure, MeasureCollection, MeasureEvent, merge } from 'src/data';

const defaultState = new MeasureCollection();

const measuresReducer = handleActions<MeasureCollection>({
  MEASURES_LOADING: state => new MeasureCollection({
    ...state,
    isLoading: true,
    error: null
  }),
  MEASURES_LOADED: (state, action: Action<Measure[]>) => new MeasureCollection({
    ...state,
    isLoading: false,
    items: merge(state.items, action.payload)
  }),
  MEASURES_ERROR: (state, action: Action<FetchError>) => new MeasureCollection({
    ...state,
    isLoading: false,
    error: action.payload
  }),
  MEASURE_EVENT_RECEIVED: (state, action: Action<MeasureEvent>) => new MeasureCollection({
    ...state,
    items: merge(state.items, action.payload.measures.map(datum => new Measure(datum)))
  })
},
defaultState);

export default measuresReducer;
