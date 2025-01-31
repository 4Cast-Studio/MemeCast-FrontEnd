import type { resources } from './Resource';

declare module 'i18next' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface CustomTypeOptions {
    resources: typeof resources.en;
    returnObjects: true;
  }
}
