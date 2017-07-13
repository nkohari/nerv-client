import { Action, handleActions } from 'redux-actions';
import { Collection, Measure, MeasureEvent } from 'src/data';

const defaultState: Collection<Measure> = {
  items: [],
  isLoading: false,
  error: null
};

const mergeMeasures = (oldItems: Measure[], newItems: Measure[]): Measure[] => {
  const hash = [...oldItems, ...newItems].reduce((items, item) => {
    items[item.id] = item;
    return items;
  }, {});
  return Object.keys(hash).map(id => hash[id]);
};

const measuresReducer = handleActions<Collection<Measure>>({
  MEASURES_LOADING: state => ({
    ...state,
    isLoading: true,
    error: null
  }),
  MEASURES_LOADED: (state, action: Action<Measure[]>) => ({
    ...state,
    isLoading: false,
    items: mergeMeasures(state.items, action.payload)
  }),
  MEASURES_ERROR: (state, action: Action<FetchError>) => ({
    ...state,
    isLoading: false,
    error: action.payload
  }),
  MEASURE_EVENT_RECEIVED: (state, action: Action<MeasureEvent>) => ({
    ...state,
    items: mergeMeasures(state.items, action.payload.measures.map(datum => new Measure(datum)))
  })
},
defaultState);

export default measuresReducer;
