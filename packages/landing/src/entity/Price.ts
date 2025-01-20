import { type DateTime } from 'luxon';

export type PriceUpdate = {
  readonly price: number;
  readonly time: DateTime;
};
