import { ExchangeRate, request } from 'src/data';

export function listByCurrency(currency: string, token: string): Promise<ExchangeRate[]> {
  const url = '/metadata/exchangerates';
  const params = { currency };
  return request.get(url, { params, token }).then(result => (
    result.exchangeRates.map(item => new ExchangeRate(item))
  ));
}
