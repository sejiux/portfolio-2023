// src/lib/site-config.ts

export const SiteConfig = {
  metadataBase: new URL("https://archive.sejiux.com"),
  title: {
    default: 'Sejiux',
    template: `Sejiux - %s`,
  },
  description: 'A product developer who combines technical mastery with creative sensivity to forge unique, engaging and memorable digital experiences.',
  generator: 'NextJs',
  applicationName: 'Sejiux',
  referrer: 'origin-when-cross-origin',
  authors: { name: 'Sejiux', url: 'https://archive.sejiux.com' },
  creator: 'Sejiux',
  publisher: 'Sejiux',
} as const;
  