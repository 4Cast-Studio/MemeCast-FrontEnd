import { DateTime, Duration } from 'luxon';

export const Transform = {
  toBooleanOrNull: (input: boolean | string | null | undefined): boolean | null => {
    return (input == null) ? null : input === true;
  },
  toBoolean: (input: boolean | string | null | undefined): boolean => {
    return input === true;
  },
  toStringOrNull: (input: string | number | null | undefined): string | null => {
    return (input == null) ? null : input.toString();
  },
  toString: (input: string | number | null | undefined): string => {
    return Transform.toStringOrNull(input) ?? '';
  },
  toNumberOrNull: (input: string | bigint | number | null | undefined): number | null => {
    return (input == null) ? null : Number(input);
  },
  toNumber: (input: string | bigint | number | null | undefined): number => {
    return Transform.toNumberOrNull(input) ?? 0;
  },
  toBigInt: (input: string | number | null | undefined): bigint => {
    return BigInt(input ?? 0);
  },
  toTimeFromSecondsOrNull: (input: string | number | null | undefined): DateTime | null => {
    return (input == null) ? null : DateTime.fromSeconds(Transform.toNumber(input));
  },
  toTimeFromSeconds: (input: string | number | null | undefined): DateTime => {
    return Transform.toTimeFromSecondsOrNull(input) ?? DateTime.fromMillis(0);
  },
  toDuration: (input: string | number | null | undefined): Duration => {
    return Duration.fromObject({ seconds: Transform.toNumber(input) });
  },
  toArray: <P, Q>(input: P[] | null | undefined, callback: (value: P) => Q): Q[] => {
    return Array.isArray(input) ? input.map(callback) : [];
  },
};
