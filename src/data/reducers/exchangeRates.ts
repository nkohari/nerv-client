import { Action, handleActions } from 'redux-actions';
import { ExchangeRate, ExchangeRateCollection, merge } from 'src/data';

const defaultState = new ExchangeRateCollection();

const exchangeRatesReducer = handleActions<ExchangeRateCollection>({
  EXCHANGE_RATES_LOADING: state => new ExchangeRateCollection({
    ...state,
    isLoading: true,
    error: null
  }),
  EXCHANGE_RATES_LOADED: (state, action: Action<ExchangeRate[]>) => new ExchangeRateCollection({
    ...state,
    isLoading: false,
    items: merge(state.items, action.payload)
  }),
  EXCHANGE_RATES_ERROR: (state, action: Action<FetchError>) => new ExchangeRateCollection({
    ...state,
    isLoading: false,
    error: action.payload
  })
},
defaultState);

export default exchangeRatesReducer;
