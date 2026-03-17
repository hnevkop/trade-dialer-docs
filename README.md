# Trade Dialer Documentation

Documentation site for [Trade Dialer](https://www.trade-dialer.com) — a free global stock market tracker.

**Live Documentation:** [https://hnevkop.github.io/trade-dialer-docs](https://hnevkop.github.io/trade-dialer-docs)

## What is Trade Dialer?

Trade Dialer helps you track when stock markets around the world open and close. It shows:

- **Live market status** — See which markets are open, closing soon, or closed
- **Real-time countdowns** — Know exactly when a market opens or closes
- **Index values** — Track major indices like S&P 500, DAX, Nikkei 225 (updated every 10 seconds for open markets)
- **Holiday calendars** — Never be surprised by a closed market

## Supported Markets

Trade Dialer tracks **36 indices** across **17+ exchanges** worldwide:

| Region | Markets |
|--------|---------|
| **Americas** | NYSE, NASDAQ, Toronto (TSX), Mexico (BMV), Brazil (B3) |
| **Europe** | London (LSE), Frankfurt (XETRA), Paris (Euronext), Amsterdam, Madrid, Milan, Zurich (SIX), Istanbul |
| **Asia-Pacific** | Tokyo (TSE), Shanghai (SSE), Shenzhen (SZSE), Hong Kong (HKEX), Seoul (KRX), Taiwan (TWSE), Mumbai (NSE/BSE), Singapore (SGX), Riyadh (Tadawul) |
| **Oceania & Africa** | Sydney (ASX), Johannesburg (JSE) |

## Documentation Topics

- [How It Works](/docs/how-it-works.md) — Understanding the application
- [Data Sources & Fallback](/docs/data-sources.md) — Where we get market data
- [Markets Directory](/docs/markets-directory.md) — Full list of supported exchanges
- [Global Timezones](/docs/timezones.md) — Trading timezones explained
- [Market Holidays](/docs/holidays.md) — Holiday calendars for all exchanges
- [Trading Hours & Overlaps](/docs/market-hours.md) — When markets are open simultaneously

## Development

This documentation is built with [VitePress](https://vitepress.dev/).

### Prerequisites

- Node.js 18+
- npm

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev
```

The site will be available at `http://localhost:5173/trade-dialer-docs/`

### Build

```bash
# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## License

MIT