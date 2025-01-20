export function stringToNumber(input: string, defaultValue = 0): number {
  try {
    const value = Number(input);

    return Number.isNaN(value) ? defaultValue : value;
  } catch {
    return defaultValue;
  }
}

export function commify(
  input: number | string,
  minimumFractionDigits = 0,
  maximumFractionDigits = minimumFractionDigits,
): string {
  const formatter = new Intl.NumberFormat('en', {
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return formatter.format(Number(input));
}

export function formatPercentage(value: number, fractionDigits = 0): string {
  return `${(value * 100).toFixed(fractionDigits)}%`;
}

export function shortenNumber(num: number, fractionDigits = 0): string {
  if (num >= 1e12) {
    return (num / 1e12).toFixed(fractionDigits) + 't';
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(fractionDigits) + 'b';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(fractionDigits) + 'm';
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(fractionDigits) + 'k';
  } else {
    return num.toFixed(fractionDigits);
  }
}
