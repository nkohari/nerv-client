import { createAction } from 'redux-actions';
import { API, ExchangeRate } from 'src/data';

export const loadExchangeRates = () => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(exchangeRatesLoading());
    API.exchangeRates.listByCurrency(auth.user.currency, auth.token).then(exchangeRates => {
      dispatch(exchangeRatesLoaded(exchangeRates));
    })
    .catch(error => {
      dispatch(exchangeRatesError(error));
    });
  }
);

export const exchangeRatesLoading = createAction('EXCHANGE_RATES_LOADING');
export const exchangeRatesLoaded = createAction<ExchangeRate[]>('EXCHANGE_RATES_LOADED');
export const exchangeRatesError = createAction<FetchError>('EXCHANGE_RATES_ERROR');