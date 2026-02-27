import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Trade Dialer Docs",
  description: "Documentation for Trade Dialer - track global stock market hours, timezones, holidays, and trading overlaps for NYSE, NASDAQ, LSE, and 17+ exchanges worldwide.",

  head: [
    // JetBrains Mono font
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap', rel: 'stylesheet' }],

    // Favicon
    ['link', { rel: 'icon', href: '/frankfurt.ico' }],

    // SEO Meta Tags
    ['meta', { name: 'keywords', content: 'stock market hours, trading hours, market holidays, NYSE hours, NASDAQ hours, global markets, timezone trading, market overlaps, trade dialer' }],
    ['meta', { name: 'author', content: 'Trade Dialer' }],
    ['meta', { name: 'robots', content: 'index, follow' }],

    // Open Graph (for social sharing)
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Trade Dialer Documentation' }],
    ['meta', { property: 'og:description', content: 'Learn about global stock market hours, timezones, holidays, and trading overlaps. Documentation for Trade Dialer.' }],
    ['meta', { property: 'og:image', content: '/trade-dialer.png' }],
    ['meta', { property: 'og:site_name', content: 'Trade Dialer Docs' }],

    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'Trade Dialer Documentation' }],
    ['meta', { name: 'twitter:description', content: 'Learn about global stock market hours, timezones, holidays, and trading overlaps.' }],
  ],

  // Clean URLs (no .html extension)
  cleanUrls: true,

  // Sitemap generation
  sitemap: {
    hostname: 'https://hnevkop.github.io/trade-dialer-docs'
  },

  // Last updated timestamp
  lastUpdated: true,

  themeConfig: {
    logo: '/trade-dialer.png',
    siteTitle: 'Trade Dialer',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/how-it-works' },
      { text: 'Trade Dialer', link: 'https://www.trade-dialer.com' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'How It Works', link: '/how-it-works' },
          { text: 'Markets Directory', link: '/markets-directory' }
        ]
      },
      {
        text: 'Understanding Markets',
        items: [
          { text: 'Global Timezones', link: '/timezones' },
          { text: 'Market Holidays', link: '/holidays' },
          { text: 'Trading Hours & Overlaps', link: '/market-hours' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hnevkop/trade-dialer-docs' }
    ],

    footer: {
      message: 'Trade Dialer - Free Global Stock Market Tracker',
      copyright: 'Market data is provided for informational purposes only.'
    },

    search: {
      provider: 'local'
    },

    // "Edit this page" link
    editLink: {
      pattern: 'https://github.com/hnevkop/trade-dialer-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    // Last updated text
    lastUpdated: {
      text: 'Last updated'
    }
  }
})
