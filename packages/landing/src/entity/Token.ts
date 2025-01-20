export const SrcEmpty = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export type Token = {
  readonly symbol: string;
  readonly name: string;
  readonly isNative: boolean;
  readonly decimals: number;
  readonly fractionDigits: number;
  readonly address: string;
  readonly src: string;
};

export const TokenDefault: Token = {
  symbol: '',
  name: '',
  isNative: false,
  decimals: 0,
  fractionDigits: 0,
  address: '',
  src: SrcEmpty,
};
