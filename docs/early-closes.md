# Early Close Days

Some stock exchanges close earlier than usual on certain days, typically before major holidays. Trade Dialer tracks these early close days and displays them alongside regular trading hours.

## What are Early Closes?

On early close days, markets open at their regular time but close several hours earlier. For example, the NYSE normally closes at 4:00 PM ET, but on Christmas Eve it closes at 1:00 PM ET.

## Supported Exchanges

| Exchange | Early Close Days | Close Time |
|----------|-----------------|------------|
| **NYSE / NASDAQ** | Day before Independence Day (Jul 3), Day after Thanksgiving, Christmas Eve | 1:00 PM ET |
| **TSX (Toronto)** | Christmas Eve | 1:00 PM ET |
| **LSE (London)** | Christmas Eve, New Year's Eve | 12:30 PM |
| **Euronext (Paris/Amsterdam)** | Christmas Eve, New Year's Eve | 2:05 PM CET |
| **HKEX (Hong Kong)** | Lunar New Year Eve, Christmas Eve, New Year's Eve | 12:00 PM (morning session only) |
| **JSE (Johannesburg)** | Christmas Eve, New Year's Eve | 12:00 PM SAST |
| **ASX (Australia)** | Christmas Eve, New Year's Eve | 2:10 PM AEDT |

## How It's Displayed

### On Exchange Tiles

- **Status badge**: Shows "EARLY CLOSE" instead of "TRADING" when the market is open on an early close day
- **Trading Hours section**: Displays an amber alert with the adjusted close time
- **Early Closes dropdown**: Lists all upcoming early close days (similar to Holidays)

### On "Is X Open?" Pages

- **Today's Early Close alert**: Amber box showing the early close time and reason
- **Upcoming Early Closes section**: Lists future early close days with dates and times

## Visual Indicators

Early close information uses an **amber/orange color theme** to distinguish it from:

| Color | Status |
|-------|--------|
| **Green** | Market open/trading |
| **Amber/Orange** | Early close day |
| **Yellow** | Lunch break (Asian markets) |
| **Blue** | Market closed/sleeping |
| **Red** | Closes soon |

## Data Sources

Early close schedules are based on official exchange calendars:

- [NYSE Holiday Calendar](https://www.nyse.com/markets/hours-calendars)
- [LSE Business Days](https://www.londonstockexchange.com/equities-trading/business-days)
- [Euronext Trading Hours](https://www.euronext.com/en/trading/trading-hours-holidays)
- [HKEX Trading Calendar](https://www.hkex.com.hk/Services/Trading/Securities/Overview/Trading-Mechanism?sc_lang=en)
- [JSE Trading Calendar](https://clientportal.jse.co.za/reports/trading-calendars)
- [ASX Trading Calendar](https://www.asx.com.au/markets/market-resources/trading-hours-calendar)

---

*Note: Early close dates are updated annually. The current data covers 2026.*

---

Previous: [Market Holidays](holidays.md) | Next: [Trading Hours & Overlaps](market-hours.md)
