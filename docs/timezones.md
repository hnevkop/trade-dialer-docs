# Understanding Global Timezones

One of the biggest challenges for global traders is keeping track of market hours across different timezones. Trade Dialer solves this problem by showing you everything in **your local time**.

## The Problem: Markets Operate in Local Time

Every stock exchange operates on its own local schedule:

- **New York Stock Exchange** opens at 9:30 AM Eastern Time
- **London Stock Exchange** opens at 8:00 AM London Time
- **Tokyo Stock Exchange** opens at 9:00 AM Japan Time

If you're a trader in Singapore trying to catch the NYSE open, you need to know that 9:30 AM in New York is actually 10:30 PM in Singapore (the same day in summer, but it shifts with daylight saving time).

This gets confusing fast.

## The Solution: Everything in Your Time

Trade Dialer automatically converts all market times to your local timezone.

![Timezone Conversion](/images/timezone-conversion.png)
<!-- SCREENSHOT: Shows a market with countdown, caption: "A trader in London sees when NYSE opens in London time" -->

When you see "Opens in 2h 34m", that's 2 hours and 34 minutes from **right now, wherever you are**.

## World Markets & Their Timezones

### Americas

| Exchange | Local Timezone | Trading Hours (Local) |
|----------|---------------|----------------------|
| NYSE (New York) | Eastern Time | 9:30 AM – 4:00 PM |
| NASDAQ | Eastern Time | 9:30 AM – 4:00 PM |
| TSX (Toronto) | Eastern Time | 9:30 AM – 4:00 PM |
| BMV (Mexico City) | Central Time | 8:30 AM – 3:00 PM |
| B3 (São Paulo) | Brasília Time | 10:00 AM – 5:30 PM |

### Europe

| Exchange | Local Timezone | Trading Hours (Local) |
|----------|---------------|----------------------|
| LSE (London) | GMT/BST | 8:00 AM – 4:30 PM |
| XETRA (Frankfurt) | CET/CEST | 9:00 AM – 5:30 PM |
| Euronext (Paris) | CET/CEST | 9:00 AM – 5:30 PM |
| Euronext (Amsterdam) | CET/CEST | 9:00 AM – 5:30 PM |
| BME (Madrid) | CET/CEST | 9:00 AM – 5:30 PM |
| Borsa Italiana (Milan) | CET/CEST | 9:00 AM – 5:30 PM |
| SIX (Zurich) | CET/CEST | 9:00 AM – 5:30 PM |
| Borsa Istanbul | Turkey Time (UTC+3) | 9:30 AM – 5:30 PM |

### Asia-Pacific

| Exchange | Local Timezone | Trading Hours (Local) |
|----------|---------------|----------------------|
| JPX (Tokyo) | Japan Time | 9:00 AM – 3:00 PM |
| SSE (Shanghai) | China Time | 9:30 AM – 3:00 PM |
| SZSE (Shenzhen) | China Time | 9:30 AM – 3:00 PM |
| HKEX (Hong Kong) | Hong Kong Time | 9:30 AM – 4:00 PM |
| KRX (Seoul) | Korea Time | 9:00 AM – 3:30 PM |
| TWSE (Taipei) | Taiwan Time | 9:00 AM – 1:30 PM |
| SGX (Singapore) | Singapore Time | 9:00 AM – 5:00 PM |
| NSE/BSE (Mumbai) | India Time | 9:15 AM – 3:30 PM |
| Tadawul (Riyadh) | Arabia Time | 10:00 AM – 3:00 PM |

### Oceania & Africa

| Exchange | Local Timezone | Trading Hours (Local) |
|----------|---------------|----------------------|
| ASX (Sydney) | AEST/AEDT | 10:00 AM – 4:00 PM |
| JSE (Johannesburg) | South Africa Time | 9:00 AM – 5:00 PM |

## Daylight Saving Time (DST)

Daylight saving time adds another layer of complexity:

- **US & Canada:** Clocks spring forward in March, fall back in November
- **Europe:** Clocks change in late March and late October (different dates than US!)
- **Australia:** Clocks change in October and April (opposite hemisphere!)
- **Many Asian markets:** Do NOT observe daylight saving time

### The DST Gap Problem

For about 2-3 weeks each spring and fall, the US and Europe are "out of sync":

**Example (March 2026):**
- March 8: US switches to daylight saving time
- March 29: Europe switches to summer time

During those 3 weeks, the time difference between New York and London is 4 hours instead of the usual 5 hours. This means:
- NYSE opens at 1:30 PM London time (instead of 2:30 PM)
- The US-Europe overlap window is longer than usual

**Trade Dialer handles all of this automatically.** You just see the correct countdown.

## Special Cases

### Saudi Arabia: Sunday–Thursday

Most markets trade Monday through Friday. But the Saudi stock exchange (Tadawul) trades **Sunday through Thursday** because Friday is the Islamic holy day.

![Saudi Weekend](/images/saudi-weekend.png)
<!-- SCREENSHOT: Tadawul showing "Opens Sunday" on Friday/Saturday -->

### India: Half-Hour Offset

India Standard Time is UTC+5:30 — not a whole hour offset. The Indian markets (NSE, BSE) open at 9:15 AM, which is an unusual time that reflects this half-hour offset.

### Australia: Opposite Seasons

When it's winter in New York, it's summer in Sydney. Australia's daylight saving time runs from October to April, which is the opposite of the Northern Hemisphere. The time difference between Sydney and New York varies throughout the year:

| Period | Sydney ahead of New York |
|--------|-------------------------|
| Jan–Mar (US winter, AUS summer) | 16 hours |
| Mar–Apr (both on DST) | 14 hours |
| Apr–Oct (US summer, AUS winter) | 14 hours |
| Oct–Nov (US on DST, AUS on DST) | 16 hours |

## Tips for Global Traders

### 1. Use Trade Dialer as Your Reference

Don't try to do timezone math in your head. Let Trade Dialer show you exactly when markets open and close in your local time.

### 2. Be Aware of DST Transitions

Mark the DST change dates on your calendar. The two weeks after a change can be confusing as your usual schedule shifts.

### 3. Know the Overlap Windows

The best liquidity often occurs when multiple markets are open. See our [Trading Hours Guide](market-hours.md) for details.

### 4. Set Alerts for Key Markets

If you trade specific markets, consider setting phone alarms for their open/close times in your local timezone.

## Frequently Asked Questions

**Q: Why did the market open time change by an hour?**
A: Most likely due to daylight saving time. Either your country or the exchange's country changed their clocks.

**Q: The countdown says "Opens in 19 hours" — is that right?**
A: Yes! If a market just closed on Friday afternoon, it won't open again until Monday morning, which could be 60+ hours away. On Sunday evening, you'll see ~14-19 hours depending on the market.

**Q: I'm traveling — will Trade Dialer still work?**
A: Yes! Trade Dialer uses your device's timezone setting. If your phone or laptop updates to the local timezone, the countdowns will adjust automatically.

---

Next: [Market Holidays](holidays.md)
