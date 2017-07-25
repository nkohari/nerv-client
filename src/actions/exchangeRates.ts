import { createAction } from 'redux-actions';
import { createApiClient, ExchangeRate } from 'src/data';
import { Toaster } from 'src/services';

export const loadExchangeRates = () => (
  (dispatch, getState) => {
    const { auth } = getState();
    dispatch(exchangeRatesLoading());
    createApiClient(auth).exchangeRates.listByCurrency(auth.user.currency).then(exchangeRates => {
      dispatch(exchangeRatesLoaded(exchangeRates));
    })
    .catch(error => {
      Toaster.error(error);
    });
  }
);

export const exchangeRatesLoading = createAction('EXCHANGE_RATES_LOADING');
export const exchangeRatesLoaded = createAction<ExchangeRate[]>('EXCHANGE_RATES_LOADED');
