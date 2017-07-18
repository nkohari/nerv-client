import { ExchangeRate, request } from 'src/data';

export function listByCurrency(currency: string, token: string): Promise<ExchangeRate[]> {
  const params = { currency };
  return request.get('/metadata/exchangerates', { params, token }).then(result => (
    result.exchangeRates.map(item => new ExchangeRate(item))
  ));
}
