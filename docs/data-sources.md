# Data Sources & Live Index Fallback

Trade Dialer uses a smart hybrid data system to provide the most relevant market data, even when US markets are closed.

## How Our Data Works

### Primary Source: ETF Proxies via Twelve Data & Alpha Vantage

Market data is powered by Twelve Data and Alpha Vantage APIs through a backend proxy that handles caching, rate limiting, and symbol deduplication. We use three types of proxies:

| Proxy Type | Description | Example |
|------------|-------------|---------|
| **ETF_TRACKER** | Direct ETF that tracks the index | SPY tracks S&P 500, DIA tracks Dow Jones |
| **MSCI_PROXY** | iShares MSCI country ETF | EWJ (MSCI Japan) proxies for Nikkei 225 |
| **REGIONAL_PROXY** | Regional/sector ETF | FXI (China Large-Cap) proxies for SSE Composite |

All proxies are US-listed ETFs that trade during US market hours (09:30–16:00 ET).

### Proxy Quality Tiers

Each proxy is rated by how closely it tracks the actual index:

| Tier | Quality | Description |
|------|---------|-------------|
| **A** | Excellent | Direct ETF tracker or highly correlated MSCI proxy |
| **B** | Good | Country-level MSCI ETF, good correlation |
| **C** | Approximate | Regional proxy, broader correlation |

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

## Complete Symbol Reference

Below is the complete list of all indices tracked by Trade Dialer, including their proxy symbols, data quality tiers, and fallback sources.

### Americas

| Index | Proxy Symbol | Tier | Type | Currency | Fallback |
|-------|-------------|------|------|----------|----------|
| S&P 500 | SPY | A | ETF_TRACKER | USD | ^GSPC |
| Dow Jones | DIA | A | ETF_TRACKER | USD | ^DJI |
| NASDAQ-100 | QQQ | A | ETF_TRACKER | USD | ^NDX |
| S&P/TSX Composite | EWC | A | MSCI_PROXY | USD | ^GSPTSE |
| S&P/TSX 60 | EWC | B | MSCI_PROXY | USD | ^GSPTSE |
| IPC (Mexico) | EWW | B | REGIONAL_PROXY | USD | ^MXX |
| Bovespa | EWZ | A | MSCI_PROXY | USD | ^BVSP |

### Europe

| Index | Proxy Symbol | Tier | Type | Currency | Fallback |
|-------|-------------|------|------|----------|----------|
| FTSE 100 | EWU | A | MSCI_PROXY | USD | ^FTSE |
| FTSE 250 | EWU | B | MSCI_PROXY | USD | ^FTMC |
| DAX | EWG | A | MSCI_PROXY | USD | ^GDAXI |
| MDAX | EWG | B | MSCI_PROXY | USD | ^MDAXI |
| CAC 40 | EWQ | A | MSCI_PROXY | USD | ^FCHI |
| AEX | EWN | A | MSCI_PROXY | USD | ^AEX |
| FTSE MIB | EWI | A | MSCI_PROXY | USD | FTSEMIB.MI |
| IBEX 35 | EWP | B | MSCI_PROXY | USD | ^IBEX |
| SMI | EWL | B | MSCI_PROXY | USD | ^SSMI |
| SMIM | EWL | B | MSCI_PROXY | USD | — |
| BIST 100 | TUR | B | MSCI_PROXY | USD | XU100.IS |

### Asia-Pacific

| Index | Proxy Symbol | Tier | Type | Currency | Fallback |
|-------|-------------|------|------|----------|----------|
| Nikkei 225 | EWJ | B | MSCI_PROXY | USD | ^N225 |
| TOPIX | EWJ | B | MSCI_PROXY | USD | — |
| Hang Seng | EWH | A | MSCI_PROXY | USD | ^HSI |
| HSCEI | EWH | C | MSCI_PROXY | USD | ^HSCE |
| SSE Composite | FXI | C | REGIONAL_PROXY | USD | 000001.SS |
| SZSE Component | ASHR | C | REGIONAL_PROXY | USD | 399001.SZ |
| KOSPI | EWY | B | MSCI_PROXY | USD | ^KS11 |
| KOSDAQ | EWY | B | MSCI_PROXY | USD | ^KQ11 |
| TAIEX | EWT | B | MSCI_PROXY | USD | ^TWII |
| STI (Singapore) | EWS | B | MSCI_PROXY | USD | ^STI |
| ASX 200 | EWA | A | MSCI_PROXY | USD | ^AXJO |
| NIFTY 50 | INDA | A | MSCI_PROXY | USD | ^NSEI |
| SENSEX | INDA | A | MSCI_PROXY | USD | ^NSEI |
| TASI (Saudi Arabia) | KSA | B | MSCI_PROXY | USD | ^TASI.SR |

### Africa

| Index | Proxy Symbol | Tier | Type | Currency | Fallback |
|-------|-------------|------|------|----------|----------|
| JSE All Share | EZA | B | MSCI_PROXY | USD | ^J203.JO |

## What You See With Fallback Data

When viewing fallback data, you'll notice:

1. **Local currency values** — JPY for Nikkei, HKD for Hang Seng, etc.
2. **Index points** — Actual index level, not ETF price
3. **Blue "Index Live" indicator** — Shows data is from the local market
4. **Yahoo Finance link** — Click to verify the source

## Indices Without Fallback

Some indices don't have reliable Yahoo Finance data (marked with "—" in the tables above):

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
| Open markets (active + closes-soon) | Every 10 seconds |
| Markets opening soon | Every 10 seconds |
| Closed markets | Every 5 minutes |
| Market open/close countdowns | Every second |

### When Markets Are Closed

When a market is closed, the values shown are the **last regular session closing price**. Extended hours data (pre-market and after-hours trading) is not included.

Minor post-close corrections (e.g., settlement adjustments) may occasionally update slightly during the 5-minute refresh cycle for closed markets.

---

**Note:** Yahoo Finance data is used as a fallback source. While generally reliable, occasional discrepancies may occur. For official index values, always verify with the exchange directly.

---

Next: [Markets Directory](markets-directory.md) | Previous: [How It Works](how-it-works.md)
