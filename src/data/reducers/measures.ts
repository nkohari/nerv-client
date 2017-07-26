import { Action, handleActions } from 'redux-actions';
import { Measure, MeasureCollection, MeasureEvent, lastWriteWins } from 'src/data';

const defaultState = new MeasureCollection();

const measuresReducer = handleActions<MeasureCollection>({
  MEASURES_LOADING: state => (
    state.next({ isLoading: true })
  ),
  MEASURES_LOADED: (state, action: Action<Measure[]>) => (
    state.merge(action.payload, lastWriteWins, { isLoading: false })
  ),
  MEASURE_EVENT_RECEIVED: (state, action: Action<MeasureEvent>) => (
    state.merge(action.payload.measures.map(datum => new Measure(datum)))
  )
},
defaultState);

export default measuresReducer;
