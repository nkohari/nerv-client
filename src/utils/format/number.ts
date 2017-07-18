interface NumberFormattingOptions {
  locale?: string;
  precision?: number;
}

const defaults = {
  locale: window.navigator.language,
  precision: 2
};

export function number(value: number, options: NumberFormattingOptions = {}) {
  const config = { ...defaults, ...options };

  return value.toLocaleString(config.locale, {
    maximumFractionDigits: config.precision
  });
}
