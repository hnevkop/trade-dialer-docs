# Data Sources & Live Index Fallback

Trade Dialer uses a smart hybrid data system to provide the most relevant market data, even when US markets are closed.

## How Our Data Works

### Primary Source: US-Listed ETF Proxies

For most index data, we use US-listed ETFs that track foreign indices. For example:
- **EWJ** tracks the Nikkei 225 (Japan)
- **EWH** tracks the Hang Seng (Hong Kong)
- **EWY** tracks the KOSPI (South Korea)

These ETFs trade on US exchanges during US market hours (09:30–16:00 ET).

### The Challenge

When the US market is closed but a foreign market is open, the ETF data becomes stale. For instance, if you check the Nikkei 225 at 10 PM ET, Tokyo's market is in full swing, but the US-listed EWJ ETF hasn't moved since 4 PM ET.

### The Solution: Yahoo Finance Fallback

Trade Dialer automatically switches to **live index data** from Yahoo Finance when:
1. The US market is closed
2. The foreign market is open
3. Yahoo Finance data is available for that index

![Data Source Switching](/images/data-source-fallback.png)
<!-- SCREENSHOT: Showing index with fallback data -->

## Visual Indicators

Trade Dialer clearly shows where your data is coming from:

![Live Status Indicators](/images/live-indicators.png)
<!-- SCREENSHOT: Cards showing different status indicators -->

| Indicator | Meaning |
|-----------|---------|
| 🟢 **Live** (green pulse) | Real-time ETF data during US market hours |
| 🔵 **Index Live** (blue pulse) | Live index data from Yahoo Finance fallback |
| ⚪ **At close** (gray) | Last session's closing price |
| 🇺🇸 **Closed** (gray badge) | US market closed, showing last ETF price |

## Supported Indices with Fallback

The following indices have Yahoo Finance fallback enabled:

### Asia-Pacific

| Index | Local Currency | Local Hours |
|-------|---------------|-------------|
| Nikkei 225 (Japan) | JPY | Tokyo hours |
| TOPIX (Japan) | JPY | Tokyo hours |
| Hang Seng (Hong Kong) | HKD | Hong Kong hours |
| HSCEI (Hong Kong) | HKD | Hong Kong hours |
| KOSPI (South Korea) | KRW | Seoul hours |
| KOSDAQ (South Korea) | KRW | Seoul hours |
| TAIEX (Taiwan) | TWD | Taipei hours |
| SSE Composite (China) | CNY | Shanghai hours |
| SZSE Component (China) | CNY | Shenzhen hours |
| STI (Singapore) | SGD | Singapore hours |
| ASX 200 (Australia) | AUD | Sydney hours |

### Europe & Middle East

| Index | Local Currency | Local Hours |
|-------|---------------|-------------|
| SMI (Switzerland) | CHF | Zurich hours |
| TASI (Saudi Arabia) | SAR | Riyadh hours |

### Americas

| Index | Local Currency | Local Hours |
|-------|---------------|-------------|
| IPC (Mexico) | MXN | Mexico City hours |

### Africa

| Index | Local Currency | Local Hours |
|-------|---------------|-------------|
| JSE All Share (South Africa) | ZAR | Johannesburg hours |

## What You See With Fallback Data

When viewing fallback data, you'll notice:

1. **Local currency values** — JPY for Nikkei, HKD for Hang Seng, etc.
2. **Index points** — Actual index level, not ETF price
3. **Blue "Index Live" indicator** — Shows data is from the local market
4. **Yahoo Finance link** — Click to verify the source

## Indices Without Fallback

Some indices don't have reliable Yahoo Finance data:

- **TOPIX** — No Yahoo Finance feed available
- **SMIM** — No Yahoo Finance feed available

For these indices, when the US market is closed, you'll see the 🇺🇸 **Closed** badge indicating the data is from the last US trading session.

## Benefits of This System

- **Real-time local data** — See what's actually happening in foreign markets
- **Local currency** — View values in JPY, HKD, KRW instead of USD
- **Transparent sourcing** — Always know where your data comes from
- **Graceful fallback** — Works seamlessly without any action needed

## Data Freshness

| Data Type | Update Frequency |
|-----------|-----------------|
| ETF prices (US hours) | Every 5 minutes |
| Index fallback (local hours) | Every 5 minutes |
| Market status | Real-time |

---

**Note:** Yahoo Finance data is used as a fallback source. While generally reliable, occasional discrepancies may occur. For official index values, always verify with the exchange directly.

---

Next: [Markets Directory](markets-directory.md) | Previous: [How It Works](how-it-works.md)
