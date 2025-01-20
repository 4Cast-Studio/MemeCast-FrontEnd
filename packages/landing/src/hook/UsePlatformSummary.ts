import { HermesClient, type PriceUpdate as PythPriceUpdate } from '@pythnetwork/hermes-client';
import { useCallback, useMemo } from 'react';
import { DateTime } from 'luxon';
import { HttpClient } from '#/entity/HttpClient';
import { type PlatformSummaryData } from '#/entity/Platform';
import { type PriceUpdate } from '#/entity/Price';
import { Transform } from '#/util/Transform';
import { useQueryData } from './UseQueryData';

export function usePlatformSummary() {
  const clientPyth = useMemo(() => {
    return new HermesClient('https://hermes.pyth.network');
  }, []);

  const clientBackend = useMemo(() => {
    return new HttpClient({
      url: 'https://app.memecast.ai/api/api',
      params: {
        code: '2nk53oGI2RvWWMhp8N1UlgGM_L3tr9Qpj1adGj_DeIPGAzFubNLJoQ==',
      },
    });
  }, []);

  const queryKey = useMemo(() => {
    return ['usePlatformSummary'];
  }, []);

  const queryFn = useCallback(async () => {
    try {
      const priceFeeds = await clientPyth.getPriceFeeds({
        query: 'SOL',
        filter: 'crypto',
      });

      const priceFeed = priceFeeds.find((item) => item.attributes.symbol === 'Crypto.SOL/USD');
      const priceFeedId = priceFeed?.id ?? '';

      const priceUpdates = await clientPyth.getLatestPriceUpdates([priceFeedId]);

      const { price } = parsePrice(priceUpdates);

      const data = await clientBackend.get<PlatformSummaryData>('/GetPlatformMetrics');

      return {
        walletsCount: Transform.toNumber(data.walletCount),
        interactionsCount: Transform.toNumber(data.interactions),
        roundsCount: Transform.toNumber(data.gameRounds),
        totalVolumeUsd: Transform.toNumber(data.gamePlayVolume) * price,
        totalRewardsUsd: Transform.toNumber(data.revenueShare) * price,
      };
    } catch {
      return {
        walletsCount: 0,
        interactionsCount: 0,
        roundsCount: 0,
        totalVolumeUsd: 0,
        totalRewardsUsd: 0,
      };
    }
  }, [clientPyth, clientBackend]);

  const { data, isFetching, query } = useQueryData({
    queryKey,
    queryFn,
    initialData: {
      walletsCount: 0,
      interactionsCount: 0,
      roundsCount: 0,
      totalVolumeUsd: 0,
      totalRewardsUsd: 0,
    },
  });

  return {
    platformSummary: data,
    platformSummaryLoading: isFetching,
    queryPlatformSummary: query,
  };
}

function parsePrice(data: PythPriceUpdate): PriceUpdate {
  const { price, expo, publish_time } = data.parsed?.[0]?.price ?? {};

  return {
    price: Number(price ?? '0') * 10 ** (expo ?? 0),
    time: DateTime.fromSeconds(publish_time ?? 0),
  };
}
