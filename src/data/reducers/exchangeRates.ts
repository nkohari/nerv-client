import { Action, handleActions } from 'redux-actions';
import { ExchangeRate, ExchangeRateCollection, lastWriteWins } from 'src/data';

const defaultState = new ExchangeRateCollection();

const exchangeRatesReducer = handleActions<ExchangeRateCollection>({
  EXCHANGE_RATES_LOADING: state => (
    state.next({ isLoading: true })
  ),
  EXCHANGE_RATES_LOADED: (state, action: Action<ExchangeRate[]>) => (
    state.merge(action.payload, lastWriteWins, { isLoading: false })
  )
},
defaultState);

export default exchangeRatesReducer;
