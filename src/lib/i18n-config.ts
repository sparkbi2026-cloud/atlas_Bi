export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'fr', 'de', 'it', 'es', 'pl'],
} as const

export type Locale = (typeof i18n)['locales'][number]
