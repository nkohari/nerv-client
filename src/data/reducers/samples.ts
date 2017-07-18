import { Action, handleActions } from 'redux-actions';
import { Sample, SampleCollection, merge } from 'src/data';

const defaultState = new SampleCollection();

const samplesReducer = handleActions<SampleCollection>({
  SAMPLES_LOADING: state => new SampleCollection({
    ...state,
    isLoading: true,
    error: null
  }),
  SAMPLES_LOADED: (state, action: Action<Sample[]>) => new SampleCollection({
    ...state,
    isLoading: false,
    items: merge(state.items, action.payload)
  }),
  SAMPLES_ERROR: (state, action: Action<FetchError>) => new SampleCollection({
    ...state,
    isLoading: false,
    error: action.payload
  })
},
defaultState);

export default samplesReducer;
