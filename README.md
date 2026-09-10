# ✈️ Flight Status Dashboard — Browser Demo

> An interactive, browser-based recreation of a Power BI dashboard analyzing ~1.95 million FAA domestic flight records — click an airport bar to cross-filter every chart on the page, no Power BI install required.

![React](https://img.shields.io/badge/React-CDN%20%7C%20No%20Build-blue?style=flat-square&logo=react) ![SVG](https://img.shields.io/badge/Charts-Hand--rolled%20SVG-yellow?style=flat-square) ![Static](https://img.shields.io/badge/Deploy-Static%20Site-brightgreen?style=flat-square)

---

## 📌 What It Does

This repo is a standalone web recreation of a Power BI dashboard I built on FAA domestic flight data. The original is a star-schema Power BI model with DAX measures; since a `.pbix` file isn't viewable in a browser, this version reproduces the same numbers and the same click-to-filter interaction as a single self-contained webpage anyone can open with no install.

---

<img width="680" height="522" alt="Untitled 500" src="https://github.com/user-attachments/assets/eb4bcf3d-a856-43dd-88b5-8efd983c2b5d" />


### Dashboard Overview

Untitled_500

---

## 🏗️ Data Pipeline

```
FAA Domestic Flight Records (1,949,742 rows)
     │
     ▼
Cleaning / Aggregation (Python + pandas)
     │
     ▼
Static JSON (pre-aggregated)
     │
     ▼
React Dashboard (KPI cards + SVG charts + cross-filter)
```

---

## 🛠️ Tools Used

| Tool | Purpose |
|------|---------|
| **React** (CDN) | UI rendering, no build step |
| **Hand-rolled SVG** | All charts — no charting library dependency |
| **Python / pandas** | Pre-aggregating the raw dataset into static JSON |
| **Power BI** | Original dashboard this demo recreates |

---

## 🚀 Features

- Click any airport bar to cross-filter every other chart on the page
- KPI cards for total flights, delayed flights, and canceled flights
- Total Flights by Airport — ranked bar chart across 10 hub airports
- % Delayed by Airline — recalculates live for the selected airport
- Cancellation Reasons donut chart (weather, airline/carrier, national air system, security)
- Cancellation rate by month trend
- Flight Status split — on-time / delayed / canceled in one glanceable bar
- Single `index.html` — no dependencies to install

---

## 📄 Dashboard Sections

| Section | Description |
|---------|-------------|
| KPI Cards | Total Flights (1,950K), Delayed (376K / 19.3%), Canceled (28,570 / 1.5%) |
| Total Flights by Airport | Atlanta, Chicago, Dallas-Fort Worth, Denver, Los Angeles, San Francisco, Phoenix, Houston, Las Vegas, Minneapolis |
| % Delayed by Airline | 11 carriers, Spirit (32%) through American (18.3%) |
| Cancellation Reasons | Donut chart of 28,570 canceled flights by cause |
| Cancellation Rate by Month | Bar sparkline, Feb as peak cancellation month |
| Flight Status | 79.2% On-Time / 19.3% Delayed / 1.5% Canceled |

---

## 🏃 How to Run

```bash
# Clone the repo
git clone https://github.com/Nateit1/flight-status-dashboard-demo.git
cd flight-status-dashboard-demo

# Open it — no install or build step needed
open index.html   # or just double-click it
```

---

## 💰 Cost

| Item | Cost |
|------|------|
| Hosting (GitHub Pages) | Free |
| Data storage | $0 (local / repo) |
| **Total** | **$0/month** |

---

## 🔗 Links

- 🌐 [Live Demo](#) <!-- replace # with your GitHub Pages URL once enabled -->
- 📁 [Dataset Source](https://www.kaggle.com/datasets/usdot/flight-delays)
