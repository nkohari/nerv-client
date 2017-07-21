export { default as getApiUrl } from './getApiUrl';
export { default as hashBy } from './hashBy';

import { currency } from './format/currency';
import { decimal } from './format/decimal';
import { hashrate } from './format/hashrate';
import { integer } from './format/integer';
import { percentage } from './format/percentage';

export const format = {
  currency,
  decimal,
  hashrate,
  integer,
  percentage
};
