interface DecimalFormattingOptions {
  default?: string;
  locale?: string;
  precision?: number;
}

const defaults: DecimalFormattingOptions = {
  default: '-',
  locale: window.navigator.language,
  precision: 2
};

export function decimal(value: number, options: DecimalFormattingOptions = {}) {
  const config: DecimalFormattingOptions = { ...defaults, ...options };

  if (value === undefined || value === null) {
    return config.default;
  }

  return value.toLocaleString(config.locale, {
    maximumFractionDigits: config.precision
  });
}
