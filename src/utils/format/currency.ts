interface CurrencyFormattingOptions {
  currency?: string;
  default?: string;
  locale?: string;
  precision?: number;
}

const defaults: CurrencyFormattingOptions = {
  default: '-',
  locale: window.navigator.language,
  precision: 2
};

export function currency(value: number, currency: string, options: CurrencyFormattingOptions = {}) {
  const config: CurrencyFormattingOptions = { ...defaults, ...options };

  if (value === undefined || value === null) {
    return config.default;
  }

  return value.toLocaleString(config.locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: config.precision
  });
}
