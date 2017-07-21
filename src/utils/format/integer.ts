interface IntegerFormattingOptions {
  locale?: string;
  default?: string;
}

const defaults: IntegerFormattingOptions = {
  locale: window.navigator.language,
  default: '-'
};

export function integer(value: number, options: IntegerFormattingOptions = {}) {
  const config: IntegerFormattingOptions = { ...defaults, ...options };

  if (value === undefined || value === null) {
    return config.default;
  }

  return value.toLocaleString(config.locale, {
    maximumFractionDigits: 0
  });
}
