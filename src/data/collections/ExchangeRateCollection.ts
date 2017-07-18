import { Collection, ExchangeRate } from 'src/data';

export class ExchangeRateCollection extends Collection<ExchangeRate> {

  for(symbol: string, currency: string): ExchangeRate {
    return this.find(item => item.symbol === symbol && item.currency === currency);
  }

}
