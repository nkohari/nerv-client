type Period = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute';

interface CoinsFormattingOptions {
  default?: string;
  locale?: string;
  period?: Period;
  precision?: number;
  suffix?: boolean;
}

const defaults: CoinsFormattingOptions = {
  default: '-',
  locale: window.navigator.language,
  period: 'minute',
  precision: 2,
  suffix: true
};

export function coins(value: number, symbol: string, options: CoinsFormattingOptions = {}) {
  const config: CoinsFormattingOptions = { ...defaults, ...options };

  if (value === undefined || value === null) {
    return config.default;
  }

  let scaled;
  let suffix;

  switch (config.period) {
    case 'year':
      scaled = value * 60 * 24 * 365;
      suffix = `${symbol}/y`;
      break;
    case 'month':
      scaled = value * 60 * 24 * 30;
      suffix = `${symbol}/m`;
      break;
    case 'week':
      scaled = value * 60 * 24 * 7;
      suffix = `${symbol}/w`;
      break;
    case 'day':
      scaled = value * 60 * 24;
      suffix = `${symbol}/d`;
      break;
    case 'hour':
      scaled = value * 60;
      suffix = `${symbol}/h`;
      break;
    case 'minute':
      scaled = value;
      suffix = `${symbol}/m`;
      break;
    default:
      throw new Error(`Unknown period ${config.period}`);
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
