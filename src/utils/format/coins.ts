type Period = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute';

interface CoinsFormattingOptions {
  locale?: string;
  precision?: number;
  suffix?: boolean;
  period?: Period;
}

const defaults = {
  locale: window.navigator.language,
  precision: 2,
  suffix: true,
  period: 'minute'
};

export function coins(cpm: number, symbol: string, options: CoinsFormattingOptions = {}) {
  const config = { ...defaults, ...options };

  let scaled;
  let suffix;

  switch (config.period) {
    case 'year':
      scaled = cpm * 60 * 24 * 365;
      suffix = `${symbol}/y`;
      break;
    case 'month':
      scaled = cpm * 60 * 24 * 30;
      suffix = `${symbol}/m`;
      break;
    case 'week':
      scaled = cpm * 60 * 24 * 7;
      suffix = `${symbol}/w`;
      break;
    case 'day':
      scaled = cpm * 60 * 24;
      suffix = `${symbol}/d`;
      break;
    case 'hour':
      scaled = cpm * 60;
      suffix = `${symbol}/h`;
      break;
    case 'minute':
      scaled = cpm;
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
