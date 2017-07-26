import { Action, handleActions } from 'redux-actions';
import { Sample, SampleCollection, lastWriteWins } from 'src/data';

const defaultState = new SampleCollection();

const samplesReducer = handleActions<SampleCollection>({
  SAMPLES_LOADING: state => (
    state.next({ isLoading: true })
  ),
  SAMPLES_LOADED: (state, action: Action<Sample[]>) => (
    state.merge(action.payload, lastWriteWins, { isLoading: false })
  )
},
defaultState);

export default samplesReducer;
