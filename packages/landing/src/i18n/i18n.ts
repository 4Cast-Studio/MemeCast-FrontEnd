import type { Namespace, ParseKeys, TFunction } from 'i18next';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './Resource';

export function initI18n() {
  i18n.use(initReactI18next);

  i18n.init({
    lng: 'en',
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  }).catch(() => {});

  return i18n;
}

type TOpts = {
  returnObjects: true;
};

export type TranslationKey = ParseKeys<Namespace, TOpts>;
export type TranslationFunction = TFunction<Namespace>;
