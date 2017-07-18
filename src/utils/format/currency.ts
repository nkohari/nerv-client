interface CurrencyFormattingOptions {
  locale?: string;
  currency?: string;
  precision?: number;
}

const defaults = {
  locale: window.navigator.language,
  precision: 2
};

export function currency(value: number, currency: string, options: CurrencyFormattingOptions = {}) {
  const config = { ...defaults, ...options };

  return value.toLocaleString(config.locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: config.precision
  });
}
