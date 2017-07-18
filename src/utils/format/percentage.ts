interface PercentageFormattingOptions {
  locale?: string;
  precision?: number;
}

const defaults = {
  locale: window.navigator.language,
  precision: 2
};

export function percentage(value: number, options: PercentageFormattingOptions = {}) {
  const config = { ...defaults, ...options };

  return value.toLocaleString(config.locale, {
    style: 'percent',
    maximumFractionDigits: config.precision
  });
}
