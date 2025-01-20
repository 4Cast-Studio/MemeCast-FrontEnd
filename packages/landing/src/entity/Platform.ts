// Use this instead of Partial to ensure TypeScript checks the properties.
export type NullableProperty<T> = {
  readonly [K in keyof T]: T[K] | null | undefined;
};

export type PlatformSummaryData = NullableProperty<{
  walletCount: string;
  gamePlayVolume: string;
  interactions: string;
  gameRounds: string;
  revenueShare: string;
}>;

export type PlatformSummary = {
  readonly walletsCount: number;
  readonly interactionsCount: number;
  readonly roundsCount: number;
  readonly totalVolumeUsd: number;
  readonly totalRewardsUsd: number;
};
