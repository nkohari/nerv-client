interface PercentageFormattingOptions {
  default?: string;
  locale?: string;
  precision?: number;
}

const defaults: PercentageFormattingOptions = {
  default: '-',
  locale: window.navigator.language,
  precision: 2
};

export function percentage(value: number, options: PercentageFormattingOptions = {}) {
  const config: PercentageFormattingOptions = { ...defaults, ...options };

  if (value === undefined || value === null) {
    return config.default;
  }

  return value.toLocaleString(config.locale, {
    style: 'percent',
    maximumFractionDigits: config.precision
  });
}
