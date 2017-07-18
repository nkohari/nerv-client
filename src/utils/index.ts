export { default as getApiUrl } from './getApiUrl';
export { default as hashBy } from './hashBy';

import { currency } from './format/currency';
import { hashrate } from './format/hashrate';
import { number } from './format/number';
import { percentage } from './format/percentage';

export const format = {
  currency,
  hashrate,
  number,
  percentage
};
