interface HashrateFormattingOptions {
  locale?: string;
  precision?: number;
  suffix?: boolean;
}

const defaults: HashrateFormattingOptions = {
  locale: window.navigator.language,
  precision: 2,
  suffix: true
};

export function hashrate(value: number, options: HashrateFormattingOptions = {}) {
  const config = { ...defaults, ...options };

  let scaled;
  let suffix;

  if (value > 1e9) {
    scaled = value / 1e9;
    suffix = 'GH/s';
  } else if (value > 1e6) {
    scaled = value / 1e6;
    suffix = 'MH/s';
  } else if (value > 1e3) {
    scaled = value / 1e3;
    suffix = 'KH/s';
  } else {
    scaled = value;
    suffix = 'H/s';
  }

  const formatted = scaled.toLocaleString(config.locale, {
    maximumFractionDigits: config.precision
  });

  if (config.suffix) {
    return formatted + suffix;
  } else {
    return formatted;
  }
}
