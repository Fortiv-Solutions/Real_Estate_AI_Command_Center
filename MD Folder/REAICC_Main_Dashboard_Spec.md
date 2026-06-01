# Real Estate AI Command Center
## Main Dashboard — Design & Component Specification
### Fortiv Solutions · fortivsolutions.in · India's First End-to-End Real Estate AI Operating System

> **Page Purpose:** The single executive overview screen — one glance communicates the health of the entire 12-module platform, from lead pipeline to construction progress to cash flow, with zero navigation required.

**Classification:** Confidential · Internal Build Reference · Version 2.0  
**Market:** India — Gujarat Focus (Surat · Vadodara)  
**Dashboard Type:** Real-Time Command Dashboard (auto-refresh every 30 seconds)  
**Primary Audience:** Directors, Sales Manager, Operations Head  
**Currency:** ₹ Indian Rupee — Lakhs (L) and Crores (Cr)  
**Date Format:** DD/MM/YYYY  

---

## 1. Page Header Strip

**Full-width header, dark navy (`#0D1B2A`), height: 64px**

| Element | Content | Alignment |
|---|---|---|
| Logo + wordmark | Fortiv Solutions logotype | Left |
| Page title | `Real Estate AI Command Center` — serif display font (Playfair Display) | Centre |
| Live indicator | 🟢 `LIVE · Last refreshed: 20/01/2025 14:32:07` — ticking every second | Right |
| Alert bell | Icon + badge count (e.g. `3 alerts`) — opens side drawer on click | Right |
| User avatar | Role label: `Rahul Modi — Sales Manager` | Right |

**Accent rule:** 2px gradient rule below header: `#2E86AB → #1D9E75`

---

## 2. Platform Pulse Bar *(Row 1 — Full Width)*

**8 animated counter tiles in a single horizontal strip.** These are platform-wide mega-stats — the first data the eye lands on. All counters tick up from 0 on page load.

| # | Counter Label | Mock Value | Sub-label | Color |
|---|---|---|---|---|
| 1 | Total Leads (All Time) | 1,247 | `↑ 47 today` | `#2E86AB` |
| 2 | Active Deals | 68 | `₹4.2 Cr pipeline` | `#1A3C5E` |
| 3 | Automations Run Today | 8,234 | `Across 12 modules` | `#1D9E75` |
| 4 | WhatsApp Messages Sent | 3,812 | `Avg response: 12 sec` | `#25D366` |
| 5 | Revenue Collected | ₹18.2 Cr | `74% collection rate` | `#1D9E75` |
| 6 | AI Conversations Today | 84 | `31 leads qualified` | `#2E86AB` |
| 7 | Docs Processed (Month) | 312 | `98% accuracy` | `#1A3C5E` |
| 8 | Data Points Processed | 2.4M | `Today across all layers` | `#1D9E75` |

**Design note:** Each tile has a thin top border in its accent color, white card background, metric in `JetBrains Mono` bold 28px, label in `DM Sans` 11px uppercase tracking.

---

## 3. Module Health Grid *(Row 2 — Full Width)*

**12 module tiles in a 6×2 responsive grid.** The "nerve centre" strip — instantly communicates whether every system is operational.

Each tile contains:
- Module number + abbreviated name
- Pulsing status dot (🟢 Active / 🟡 Degraded / 🔴 Down)
- Uptime percentage (last 30 days)
- One live KPI for that module
- Click-to-navigate to that module's dashboard

| Tile | Module | Status | Uptime | Live KPI |
|---|---|---|---|---|
| M1 | Lead Generation | 🟢 Active | 99.8% | `47 leads today · 12 hot` |
| M2 | Conversational AI | 🟢 Active | 99.9% | `84 conversations · 12 sec avg` |
| M3 | Property Intelligence | 🟢 Active | 99.6% | `14 AVMs run · 48 alerts active` |
| M4 | Sales Pipeline & CRM | 🟢 Active | 100% | `23 active deals · 6 in negotiation` |
| M5 | Analytics & Forecasting | 🟢 Active | 99.4% | `84% forecast accuracy · ₹1.84 Cr predicted` |
| M6 | Document AI | 🟡 Degraded | 98.1% | `3 agreements pending · 2 RERA deadlines` |
| M7 | HR Pipeline | 🟢 Active | 99.2% | `38 candidates · 3 joining this month` |
| M8 | Tenant Management | 🟢 Active | 99.7% | `42 units · ₹7.8L rent collected` |
| M9 | Construction Intelligence | 🟢 Active | 99.5% | `67% progress · 571 days to possession` |
| M10 | Buyer Portal | 🟢 Active | 99.9% | `186 buyers · 18 payments overdue` |
| M11 | Finance & Revenue | 🟢 Active | 99.6% | `₹6.4 Cr outstanding · 74% collection` |
| M12 | AI Brain & Security | 🟢 Active | 100% | `68 deals monitored · 0 breaches` |

**Design note:** Degraded module tiles emit an amber glow. Down modules pulse red. Background: `#F5F6FA`. Font: `DM Sans`.

---

## 4. Primary KPI Scorecards *(Row 3 — 5 cards, full width)*

The five most business-critical numbers, always visible regardless of module context.

| Card | Metric | Mock Value | Trend | Color |
|---|---|---|---|---|
| Hot Leads Right Now | Leads scored 75–100, active pipeline | **12** | `↑ 3 since yesterday` | `#D85A30` pulsing |
| Pipeline Value | ₹ value of all active deals in CRM | **₹4.2 Cr** | `↑ ₹0.3 Cr this week` | `#1A3C5E` |
| Revenue This Month | Payments collected in current month | **₹3.6 Cr** | `✅ Above ₹3.0 Cr target` | `#1D9E75` |
| Collection Rate | Billed vs collected (all projects) | **74%** | `₹6.4 Cr outstanding` | `#2E86AB` |
| RERA Compliance | Nearest compliance deadline | **11 days** | `QPR — 31/01/2025` | `#D85A30` |

**Design note:** Cards use `JetBrains Mono` for the primary metric value (40px bold), `DM Sans` for label and trend. Pulsing animation on "Hot Leads" and "RERA Compliance" if value is critical.

---

## 5. Dashboard Grid — Main Body *(Rows 4–7)*

The main body is a **3-column asymmetric grid** (40% · 35% · 25%) containing 9 distinct panels arranged across 4 rows. Each panel has a subtle drop shadow, `#FFFFFF` background, `#0D1B2A` header stripe with white panel title.

---

### 5.1 — Lead Acquisition Funnel *(Column 1, Rows 4–5 · Large Panel)*

**Source:** M1 Lead Generation & Acquisition

A vertical conversion funnel showing the full lead journey from raw capture to qualified deal entry.

```
LEADS CAPTURED TODAY
────────────────────────────────────────────────
  All Sources Combined              ██████████████  47
  Enriched (>60% completeness)      ████████████    38   (81%)
  AI Scored                         ████████████    38   (100%)
  Hot (Score 75–100)                ████            12   (32%)
  Warm (Score 40–74)                ████████        23   (61%)
  Cold (Score 0–39)                 ██               3   (8%)  ← (missed as "12" earlier; cold=12 today total but only 3 new)
  Site Visits Booked (Today)        ██               7
  Entered Sales Pipeline            █                4
```

**Sub-panels within this card:**

**Lead Source Donut (right half of panel):**

| Source | Volume | Share |
|---|---|---|
| 99acres | 28% | |
| Facebook Lead Ads | 22% | |
| MagicBricks | 15% | |
| WhatsApp Organic | 12% | |
| Housing.com | 9% | |
| Google Ads | 8% | |
| Referral / Other | 6% | |

**Bottom stat row:**
- `Avg Enrichment Time: 91 sec` · `Avg AI Score: 68` · `Response Time to Lead: < 60 sec` · `Duplicates Merged Today: 3`

---

### 5.2 — Sales Pipeline Kanban Summary *(Column 2, Rows 4–5 · Large Panel)*

**Source:** M4 Sales Pipeline & CRM Automation

Condensed horizontal Kanban showing deal counts and aggregate deal value per stage. Clicking any stage navigates to M4.

| Stage | Deals | Value | Status |
|---|---|---|---|
| Inquiry | 8 | — | `#9B9B9B` Grey |
| Site Visit Scheduled | 5 | — | `#2E86AB` Blue |
| Visited | 4 | ₹0.9 Cr | `#2E86AB` Blue |
| **Negotiation** | **6** | **₹1.6 Cr** | `#E8A838` Amber · pulsing |
| Booking Amount Paid | 3 | ₹0.8 Cr | `#1D9E75` Green |
| Agreement Signed | 2 | ₹0.6 Cr | `#1D9E75` Green |
| Loan Processing | 1 | ₹0.3 Cr | `#1A3C5E` Teal |
| **Total Active Pipeline** | **23 deals** | **₹4.2 Cr** | |

**Bookings This Month:** `4` · **Target:** `6` · **Completion:** `67%` (progress bar)

**Today's Pipeline Activity Feed (live scroll, last 6 events):**
```
14:28 — Rajesh Patel → Negotiation stage ↑  (Priya Rana)
13:45 — Priya Shah site visit confirmed Saturday
12:30 — Deepak Trivedi — deal stuck 19 days ⚠️ Alert fired
11:15 — Amit Desai — Booking Amount received ₹2.5L
10:02 — New listing published: Greenview Heights 3BHK T-4
09:17 — 3 follow-up messages auto-sent via AI
```

---

### 5.3 — Finance & Revenue Snapshot *(Column 3, Rows 4–5 · Large Panel)*

**Source:** M11 Finance, Accounts & Revenue Intelligence

**Collection Health Gauge (radial/arc chart):**
- Billed: ₹24.6 Cr
- Collected: ₹18.2 Cr
- Outstanding: ₹6.4 Cr
- 90+ Day Overdue: ₹1.5 Cr 🔴

**Project P&L Snapshot (3 mini cards stacked):**

| Project | Margin% | Status |
|---|---|---|
| Greenview Heights | 28.6% | 🟢 On track |
| Skyline Residences | 30.6% | 🟢 On track |
| Business Park | 22.2% | 🟡 Margin pressure |

**Monthly Collection Sparkline (6-month bar):**
`Oct ₹2.4Cr · Nov ₹3.1Cr · Dec ₹2.8Cr · Jan ₹3.6Cr · Feb ₹3.2Cr · Mar ₹3.1Cr`
Target line at ₹3.0 Cr/month.

**Cash Flow Horizon:** `90-day net positive projected ✅`

**Pending Finance Actions (top 3):**
```
🔴 3 demand notes pending milestone confirmation     → M11
🔴 ₹2.8 Cr outstanding 31–60 days — 9 buyers        → M11
🟡 GST filing due in 8 days                          → M11
```

---

### 5.4 — AI Conversations & Engagement *(Column 1, Row 6 · Medium Panel)*

**Source:** M2 Conversational AI & Engagement

**Live Conversation Counter (animated):**
- Active Conversations Right Now: `6`
- Today Total: `84`
- Avg First Response: `12 sec`
- Leads Qualified by AI: `31` (37% of conversations)
- Escalated to Human Agent: `9`
- Site Visits Booked via AI: `7`

**Channel Breakdown (horizontal stacked bar):**

| Channel | Volume | Share |
|---|---|---|
| WhatsApp AI Chatbot | 36 conv | 42% |
| Website Widget | 18 conv | 21% |
| Voice IVR | 15 conv | 18% |
| Email AI Responder | 10 conv | 12% |
| Telegram (Internal) | 5 conv | 7% |

**Missed Call Recovery:** `18 missed · 14 recovered via WhatsApp · 77.7% rate`

---

### 5.5 — Property Intelligence & Market Pulse *(Column 2, Row 6 · Medium Panel)*

**Source:** M3 Property Intelligence & Valuation

**Market Pulse Ticker (3 signals, auto-cycling every 4 seconds):**

| Signal | Locality | Value | Trend |
|---|---|---|---|
| Avg Price/Sq Ft | Vesu, Surat | ₹4,850/sq ft | `↑ +3.2% MoM` |
| Absorption Rate | Adajan, Surat | 4.8 months | `↓ Tightening` |
| Avg Days on Market | Pal, Surat | 38 days | `↓ Faster sales` |

**Valuation Activity Today:**
- AVMs Run: `14` · CMA Reports Generated (week): `6`
- Active Buyer Alerts (saved searches): `48`
- Alerts Triggered Today: `9` · Competitor Price Updates: `5`

**Inventory Match Summary:**
```
2BHK Vesu — 8 active alerts · 3 matches triggered today
3BHK Adajan — 6 active alerts · 2 matches triggered
Commercial Althan — 4 active alerts · 1 match triggered
```

---

### 5.6 — Document & Compliance Status *(Column 3, Row 6 · Medium Panel)*

**Source:** M6 Document AI & Compliance

**Compliance Health (4 status badges):**

| Item | Status | Value |
|---|---|---|
| KYC Completion Rate | 🟡 Action needed | 78% |
| Agreements Pending Review | 🔴 Urgent | 3 pending |
| E-Signatures Pending | 🟡 Attention | 4 awaiting |
| RERA Deadlines (30 days) | 🔴 Critical | 2 (QPR: 11 days) |

**Upcoming RERA Deadlines (rolling 30-day calendar strip):**
```
🔴 31 Jan 2025 — QPR Submission — Greenview Heights (11 days)
🔴 31 Jan 2025 — QPR Submission — Skyline Residences (11 days)
🟡 15 Feb 2025 — Ad Compliance Review — Business Park (26 days)
🟢 31 Mar 2025 — Annual Audit — Greenview Heights (70 days)
```

**Document Activity (last 4 events, live scroll):**
```
11:30 — KYC Verified — Deepak Trivedi — All checks passed ✓
11:15 — OCR Complete — Priya Shah — Aadhaar + PAN — 98%
10:42 — Agreement Generated — Rajesh Patel — Greenview Heights
09:58 — E-sign Sent — Vikram Joshi — MOU — Awaiting
```

---

### 5.7 — Construction & Project Progress *(Column 1, Row 7 · Medium Panel)*

**Source:** M9 Project & Construction Intelligence

**Across All Active Projects:**

| Metric | Value |
|---|---|
| Overall Construction Progress | 67% |
| Budget Utilised | ₹16.2 Cr / ₹28.4 Cr (57%) |
| Active Contractors | 14 |
| Statutory Approvals Pending | 3 |
| Days to Possession (Greenview Heights) | 571 days |

**Phase Progress (horizontal milestone bar, Greenview Heights):**
```
Land Acquisition      ✅ Complete
Design & Drawings     ✅ Complete
RERA Registration     ✅ Complete
Foundation            ✅ Complete
Basement / Podium     ✅ Complete
Structure Floors 1–8  ✅ Complete
Structure Floors 9–14 🔵 In Progress  (74%)
Finishing — Block A   🟡 At Risk      (22%)
MEP Works             ⬜ Planned
Handover Prep         ⬜ Planned
```

**Budget Burn Gauge:** `₹16.2 Cr of ₹28.4 Cr — 57% spent at 67% completion ✅ Under budget`

---

### 5.8 — Tenant, Buyer & Post-Sale Health *(Column 2, Row 7 · Medium Panel)*

**Sources:** M8 Tenant & Property Management · M10 Buyer Portal & Post-Sale

**Portfolio Overview:**

| Metric | Value | Status |
|---|---|---|
| Total Units Managed | 42 | — |
| Rent Collected This Month | ₹7.8L of ₹9.2L | 🟡 84.8% |
| Leases Expiring in 60 Days | 6 | 🔴 Action needed |
| Open Maintenance Requests | 8 | 🟡 (1 emergency) |
| Portfolio NPS | 74 | 🟢 Strong |

**Buyer Portal Health:**

| Metric | Value | Status |
|---|---|---|
| Registered Buyers | 186 | — |
| Active (Last 7 Days) | 74 (40%) | 🟢 Engaged |
| Payments Overdue | 18 buyers · ₹1.61 Cr | 🔴 Escalate |
| Open Snag Tickets | 9 | 🟡 Attention |
| Buyer NPS | +62 | 🟢 Good |

**Outstanding Demand Summary:**
```
Overdue 1–30 days:   9 buyers · ₹74.2L
Overdue 31–60 days:  6 buyers · ₹48.6L
Overdue 60+ days:    3 buyers · ₹38.1L  🔴
```

---

### 5.9 — HR Pipeline & Team Performance *(Column 3, Row 7 · Medium Panel)*

**Source:** M7 HR Pipeline Automation

**Hiring at a Glance:**
- Open Positions: `4` · Candidates Active: `38` · Joining This Month: `3`
- Payroll Status: `₹14.2L — Processed ✅`
- Pending HR Actions: `7 items`

**Hiring Funnel (mini visual):**
```
Applied       142  ████████████████████████
Screened       38  ████████████████
Shortlisted    12  ████████
Interview       8  █████
Offer Made      4  ███
Joining         3  ██
```

**Team Performance Scorecards (5 agents, ring charts):**

| Agent | Role | Monthly Score | Leads Assigned | Converted |
|---|---|---|---|---|
| Priya Rana | Senior Agent | ⭐ 91/100 | 18 | 6 |
| Rahul Modi | Sales Manager | 88/100 | 12 | 4 |
| Ankit Shah | Agent | 76/100 | 22 | 5 |
| Meera Patel | Agent | 71/100 | 20 | 3 |
| Kiran Desai | Team Lead (Vadodara) | 84/100 | 15 | 5 |

`⭐ Top Performer: Priya Rana` badge displayed.

---

## 6. Analytics & Forecasting Panel *(Row 8 — Full Width, 2 columns)*

**Source:** M5 Analytics, Forecasting & Reporting

### 6.1 — Revenue Forecast (Left, 55%)

**ML-Powered 30-Day Revenue Forecast:**
- Predicted Revenue Next 30 Days: `₹1.84 Cr`
- Forecast Model Accuracy (last 30 days): `84%`
- Channels Tracked for ROI: `10`

**6-Month Collections Trend (Recharts bar chart):**

| Month | Collected | vs Target (₹3.0 Cr) |
|---|---|---|
| Oct 2024 | ₹2.4 Cr | ⚠️ Below |
| Nov 2024 | ₹3.1 Cr | ✅ Above |
| Dec 2024 | ₹2.8 Cr | ⚠️ Below |
| Jan 2025 | ₹3.6 Cr | ✅ +20% |
| Feb 2025 | ₹3.2 Cr | ✅ Above |
| Mar 2025 | ₹3.1 Cr | ✅ Above |

Target reference line at ₹3.0 Cr.

**Pipeline Conversion Probability (top 5 active deals):**

| Buyer | Deal Value | Stage | Conv. Probability |
|---|---|---|---|
| Deepak Trivedi | ₹82L | Negotiation | 74% |
| Priya Shah | ₹78L | Site Visit Confirmed | 68% |
| Rajesh Patel | ₹55L | Negotiation | 61% |
| Vikram Joshi | ₹92L | Visited | 44% |
| Suresh Nair | ₹2.1 Cr | Inquiry | 28% |

### 6.2 — Marketing ROI Dashboard (Right, 45%)

**Channel ROI Snapshot:**

| Channel | Leads | Cost/Lead | Total Spend | Conv. Rate |
|---|---|---|---|---|
| Referral | 22 | ₹0 | ₹0 | 27% |
| WhatsApp Organic | 18 | ~₹120 | ₹2,160 | 22% |
| 99acres | 84 | ₹380 | ₹31,920 | 8% |
| Facebook Lead Ads | 34 | ₹312 | ₹10,608 | 9% |
| Google Ads | 18 | ₹485 | ₹8,730 | 11% |
| Instagram Lead Ads | 12 | ₹278 | ₹3,336 | 8% |
| MagicBricks | 62 | ₹420 | ₹26,040 | 7% |
| Housing.com | 47 | ₹350 | ₹16,450 | 7% |
| JustDial | 18 | ₹510 | ₹9,180 | 5% |
| NoBroker | 29 | ₹290 | ₹8,410 | 6% |

Best CPL: `Instagram · ₹278` · Best Conv. Rate: `Referral · 27%` · Worst ROI: `JustDial`

**Automated Report Delivery Status (Last 7 Days):**
```
✅ Daily Agent Report        — Team WhatsApp  — 20/01 7:00 PM
✅ Executive Brief            — Directors      — 20/01 7:30 AM
✅ Inventory Report           — Rahul Modi     — 18/01 9:00 AM
✅ Investor Report (Monthly)  — LP List (8)    — 15/01 10:00 AM
```
Reports Delivered This Month: `47` · On-time Rate: `100%`

---

## 7. AI Brain & Intelligence Layer *(Row 9 — Full Width, 3 columns)*

**Source:** M12 AI Brain, Data Layer & Security

### 7.1 — AI Insights Feed (Left, 35%)

**8 live AI-generated insights, cycling every 4 seconds.** Each card shows category badge, insight, and `Take Action →` CTA.

```
[LEAD INTELLIGENCE]
Deepak Trivedi deal stuck 19 days in Negotiation.
Probability dropping. Recommend director-level intervention.
→ Take Action

[REVENUE ALERT]
₹1.5 Cr outstanding 90+ days — 5 buyers unresponsive.
Escalate to legal notice workflow.
→ Take Action

[MARKET SIGNAL]
3BHK units in Tower B showing 40% slower absorption vs
Tower A. Consider pricing scheme or additional amenities.
→ Take Action

[COMPLIANCE CRITICAL]
RERA QPR submission due in 11 days for 2 projects.
Data compilation not yet started.
→ Take Action

[LEAD SCORE UPDATE]
Amit Desai score upgraded 61→74 (Warm→Hot).
Brochure opened + 3 portal inquiries this week.
→ Call Now

[HR SIGNAL]
Senior Sales Agent position at 19-day open vacancy.
Pipeline conversion declining in Adajan territory.
→ Review Candidates

[FINANCIAL INSIGHT]
Jan 2025 collections ₹3.6 Cr — highest in 6 months.
Referral channel contributing 22% of new pipeline this month.
→ View Analytics

[SYSTEM HEALTH]
M6 Document AI operating at degraded capacity (98.1% uptime).
3 agreements in queue. No data loss — monitoring active.
→ View M6
```

### 7.2 — Risk Intelligence (Centre, 35%)

**Source:** M12.3 Predictive Risk Engine

**Risk Summary KPIs:**

| Metric | Value | Status |
|---|---|---|
| Total Deals Monitored | 68 | — |
| High Risk (Score 70–84) | 4 | 🟡 Amber |
| Critical Risk (Score 85+) | 1 | 🔴 Red · pulsing |
| Deals Saved This Month | 3 | 🟢 |

**Top 5 High-Risk Deals:**

| Buyer | Deal Value | Risk Score | Primary Risk | Days in Stage |
|---|---|---|---|---|
| Deepak Trivedi | ₹82L | 🔴 87 | Stuck 19 days · Negotiation | 19 |
| Ritu Bhandari | ₹52L | 🟡 74 | Budget mismatch · No response | 11 |
| Mahesh Khanna | ₹98L | 🟡 71 | No WhatsApp activity | 8 |
| Nilesh Trivedi | ₹3.2Cr | 🟡 68 | Commercial — slow decision cycle | 14 |
| Pooja Sharma | ₹57L | 🟡 65 | 36 hours no response · Cold | 6 |

**Risk by Stage (mini bar chart):**
```
Negotiation     ████ 4 deals at risk
Visited         ██   2 deals at risk
Site Scheduled  █    1 deal at risk
```

### 7.3 — System Health & Security (Right, 30%)

**Source:** M12.7 System Health & Uptime · M12.5 RBAC & Security

**Platform Uptime (Last 30 Days):**

| Layer | Uptime | Status |
|---|---|---|
| n8n Workflow Engine | 99.94% | 🟢 |
| Supabase Database | 99.99% | 🟢 |
| AI / Gemini API | 99.71% | 🟢 |
| WhatsApp Business API | 99.83% | 🟢 |
| Portal Integrations | 98.40% | 🟡 |
| Document OCR Service | 98.10% | 🟡 |

**Security Status:**
```
Active Sessions:           12
Failed Auth Attempts (24h): 0
RBAC Violations (24h):      0
Data Encryption:            ✅ AES-256 at rest
Audit Log:                  ✅ Complete · 0 gaps
DPDP Act 2023 Compliance:   ✅ Active
```

**Open Incidents:** `0 Critical · 1 Minor (M6 degraded)`  
**Last Security Scan:** `20/01/2025 02:00 AM — Clean ✅`

---

## 8. Pending Actions Queue *(Row 10 — Full Width)*

**A unified, cross-module action queue — everything that needs a human decision today, in one place. Sorted by priority.**

| # | Priority | Action Required | Module | Owner | Deadline |
|---|---|---|---|---|---|
| 1 | 🔴 Critical | RERA QPR submission — start data compilation | M6 | Rahul Modi | 31/01/2025 |
| 2 | 🔴 Critical | ₹1.5 Cr 90+ day overdue — 5 buyers — escalate | M11 | Finance | Immediate |
| 3 | 🔴 Critical | Deepak Trivedi deal stuck 19 days — director call | M4 | Rahul Modi | Today |
| 4 | 🔴 High | 3 agreements pending legal sign-off | M6 | Legal | Within 24h |
| 5 | 🔴 High | 18 buyers with overdue payments — reminder sequence | M10 | Finance | Today |
| 6 | 🟡 Medium | 6 leases expiring in 60 days — renewal outreach | M8 | Ops | This week |
| 7 | 🟡 Medium | 4 e-signatures pending — follow up with buyers | M6 | Sales | Today |
| 8 | 🟡 Medium | M6 Document AI degraded — tech review | M12 | Dev Team | Today |
| 9 | 🟡 Medium | Senior Agent vacancy 19 days open — shortlist review | M7 | HR | This week |
| 10 | 🟡 Medium | 3 demand notes pending milestone confirmation | M11 | Finance | This week |
| 11 | 🟢 Low | 3BHK Tower B slow absorption — pricing review | M3 | Sales Manager | This week |
| 12 | 🟢 Low | Inventory Report — month-end data reconciliation | M5 | Ops | 31/01/2025 |

**Total Open Actions:** `12` · Critical: `5` · Medium: `5` · Low: `2`

---

## 9. Design & Visual Specification

### Color System

| Role | Name | Hex | Usage |
|---|---|---|---|
| Page background | Midnight Navy | `#0D1B2A` | Full page bg |
| Panel background | White | `#FFFFFF` | All data cards |
| Section tint | Off White | `#F5F6FA` | Alternate row bg, section bg |
| Primary brand | Deep Navy | `#1A3C5E` | Headings, primary KPI cards |
| Accent | Electric Blue | `#2E86AB` | Links, secondary KPIs, info |
| Success | Teal Green | `#1D9E75` | Positive metrics, on-target |
| Warning | Amber | `#E8A838` | Needs attention, medium risk |
| Critical | Coral Red | `#D85A30` | Urgent, overdue, critical risk |
| WhatsApp | WA Green | `#25D366` | WhatsApp-specific metrics |
| Text primary | Near Black | `#1A1A2E` | Body text |
| Text secondary | Cool Grey | `#6B7A8D` | Labels, sub-text |
| Border / divider | Light Grey | `#E2E8F0` | Panel borders, table rows |

### Typography

| Use Case | Font | Size | Weight |
|---|---|---|---|
| Page title | Playfair Display | 28px | 600 |
| Module name, panel title | DM Serif Display | 20px | 600 |
| Section label, card title | DM Sans | 13px | 600 · uppercase · 0.08em tracking |
| Body text, table text | DM Sans | 14px | 400 |
| All numbers, KPI values, amounts | JetBrains Mono | 28–40px | 700 |
| Sub-labels, timestamps | DM Sans | 11px | 400 · `#6B7A8D` |

### Animation Inventory

| Animation | Component | Behaviour |
|---|---|---|
| Counter tick-up | Platform Pulse Bar (Row 1) | All 8 counters count up from 0 on page load, 1.2s ease-out |
| Pulsing dot | Module Health Grid · Hot Lead badge · RERA alert | 2s pulse, opacity 1.0 → 0.5 → 1.0 |
| Live feed append | Pipeline Activity Feed · Doc Activity · AI Insights | New row slides in from top, existing rows push down |
| Score flash | AI Insights — score change | 400ms green/amber flash on value change |
| Insight cycle | AI Brain Insights Feed (7.1) | Card fades out/in every 4 seconds |
| Gauge arc fill | Finance Collection Gauge (5.3) | Arc draws clockwise on load, 1.5s |
| Progress bar fill | Construction milestone bar (5.7) | Fills left-to-right on scroll-into-view |
| Alert glow | Module Health tile — Degraded (M6) | Amber drop-shadow pulses every 3s |
| Sparkline draw | Revenue trend (6.1) | Line draws left-to-right on load |

### Responsive Breakpoints

| Viewport | Layout |
|---|---|
| ≥1440px | Full 3-column grid as specified |
| 1200–1440px | 3-column grid, reduced padding |
| 992–1200px | 2-column grid; column 3 stacks below |
| < 992px | Single column; Platform Pulse Bar wraps to 2×4 |

---

## 10. Data Source Mapping

Every panel on this dashboard has a live data source. This table maps each dashboard component to its originating module and primary Supabase tables.

| Dashboard Section | Source Module | Primary Supabase Tables |
|---|---|---|
| Platform Pulse Bar | M1 + M2 + M11 + M12 | `leads`, `conversations`, `collections`, `automation_logs` |
| Module Health Grid | M12.7 | `system_health`, `module_uptime` |
| Primary KPI Scorecards | M1 + M4 + M11 + M6 | `leads`, `deals`, `collections`, `compliance_calendar` |
| Lead Acquisition Funnel | M1 | `leads`, `lead_scores`, `enrichment_records` |
| Sales Pipeline Kanban | M4 | `deals`, `deal_stages`, `pipeline_events` |
| Finance & Revenue | M11 | `billing_records`, `collections`, `project_pl` |
| AI Conversations | M2 | `conversations`, `conversation_outcomes` |
| Property Intelligence | M3 | `avm_runs`, `buyer_alerts`, `market_data` |
| Document & Compliance | M6 | `documents`, `kyc_records`, `rera_calendar`, `esign_queue` |
| Construction Progress | M9 | `construction_phases`, `milestones`, `contractor_wos` |
| Tenant & Buyer Health | M8 + M10 | `units`, `rent_records`, `buyer_payments`, `snags` |
| HR & Team Performance | M7 | `candidates`, `employee_scores`, `payroll_records` |
| Revenue Forecast | M5 | `forecast_models`, `pipeline_weighted_revenue` |
| Marketing ROI | M5 + M1 | `campaign_attribution`, `lead_costs` |
| AI Insights Feed | M12.2 | `ai_insights`, `next_best_actions` |
| Risk Intelligence | M12.3 | `deal_risk_scores`, `risk_signals` |
| System Health | M12.7 | `system_health`, `incident_log` |
| Pending Actions Queue | M4 + M6 + M10 + M11 + M7 + M12 | `action_queue` (cross-module aggregated view) |

---

## 11. Page Layout Blueprint

```
┌─────────────────────────────────────────────────────────────────────┐
│  HEADER BAR — Logo · "Real Estate AI Command Center" · LIVE · Alerts│
├─────────────────────────────────────────────────────────────────────┤
│  PLATFORM PULSE BAR — 8 animated counters (full width)              │
├─────────────────────────────────────────────────────────────────────┤
│  MODULE HEALTH GRID — 12 tiles (6×2) with status dots + live KPI    │
├─────────────────────────────────────────────────────────────────────┤
│  PRIMARY KPI SCORECARDS — 5 cards (full width)                      │
├──────────────────────┬──────────────────────┬───────────────────────┤
│ 5.1 Lead Funnel      │ 5.2 Sales Kanban     │ 5.3 Finance Snapshot  │
│ + Source Donut       │ + Activity Feed      │ + P&L + Cash Flow     │
│ (M1)                 │ (M4)                 │ (M11)                 │
├──────────────────────┼──────────────────────┼───────────────────────┤
│ 5.4 AI Conversations │ 5.5 Property Intel   │ 5.6 Document &        │
│ + Channel Breakdown  │ + Market Pulse       │ Compliance Status     │
│ (M2)                 │ (M3)                 │ (M6)                  │
├──────────────────────┼──────────────────────┼───────────────────────┤
│ 5.7 Construction     │ 5.8 Tenant & Buyer   │ 5.9 HR & Team         │
│ + Milestone Bar      │ Health Summary       │ Performance           │
│ (M9)                 │ (M8 + M10)           │ (M7)                  │
├──────────────────────┴──────────────────────┴───────────────────────┤
│  ANALYTICS & FORECASTING — Revenue Forecast + Marketing ROI (M5)    │
├─────────────────────────────────────────────────────────────────────┤
│  AI INTELLIGENCE LAYER — Insights Feed · Risk Intel · System Health  │
│  (M12.2)                   (M12.3)           (M12.7)                │
├─────────────────────────────────────────────────────────────────────┤
│  PENDING ACTIONS QUEUE — 12 cross-module priority actions (full wid)│
└─────────────────────────────────────────────────────────────────────┘
```

---

## 12. Complete KPI & Metric Inventory

All metrics tracked on this dashboard, indexed for QA and data pipeline verification.

### Revenue & Financial KPIs

| KPI | Formula / Source | Mock Value |
|---|---|---|
| Total Billed (All Projects) | Sum of all demand notes raised | ₹24.6 Cr |
| Total Revenue Collected | Sum of all payment receipts | ₹18.2 Cr |
| Collection Rate | Collected ÷ Billed × 100 | 74% |
| Total Outstanding | Billed − Collected | ₹6.4 Cr |
| 90+ Day Overdue | Receivables with age > 90 days | ₹1.5 Cr |
| Revenue This Month | Current month collections | ₹3.6 Cr |
| Monthly Target | Configured target | ₹3.0 Cr |
| Forecast Revenue (Next 30 Days) | ML model output (pipeline-weighted) | ₹1.84 Cr |
| Gross Margin — Greenview Heights | (Revenue − Cost) ÷ Revenue | 28.6% |
| Gross Margin — Skyline Residences | (Revenue − Cost) ÷ Revenue | 30.6% |
| Gross Margin — Business Park | (Revenue − Cost) ÷ Revenue | 22.2% |
| 90-Day Cash Flow | Projected net positive / negative | Positive ✅ |

### Lead Generation KPIs

| KPI | Formula / Source | Mock Value |
|---|---|---|
| Total Leads (All Time) | CRM lead count | 1,247 |
| Leads Today | Today's new leads | 47 |
| Hot Leads (75–100) | Leads with AI score ≥ 75 | 12 |
| Warm Leads (40–74) | Leads with AI score 40–74 | 23 |
| Cold Leads (0–39) | Leads with AI score < 40 | 12 |
| Average AI Lead Score | Mean of all active lead scores | 68 |
| Lead Enrichment Rate | Enriched leads ÷ Total leads | 81% |
| Avg Enrichment Time | Mean time per enrichment job | 91 sec |
| Response Time to Lead | Time from capture to first contact | < 60 sec |
| Duplicates Merged Today | Deduplication engine count | 3 |
| FSBO Leads Discovered | FSBO hunter output | 6 (last scan) |
| Portal Response Rate | Avg across all portals | 87.2% |

### Sales Pipeline KPIs

| KPI | Formula / Source | Mock Value |
|---|---|---|
| Total Active Deals | Deals in all CRM stages | 23 |
| Total Pipeline Value | Sum of deal values in CRM | ₹4.2 Cr |
| Deals in Negotiation | Count at Negotiation stage | 6 |
| Bookings This Month | Deals at Booking Amount Paid | 4 |
| Monthly Booking Target | Configured target | 6 |
| Booking Target Completion | Bookings ÷ Target | 67% |
| Avg Deal Conversion Probability | ML model, top 5 deals | 55% |
| Stuck Deal Alert Count | Deals >14 days in same stage | 1 |
| Site Visits Booked Today | Confirmed visits (AI + agent) | 7 |
| Site Visits Attended (Month) | Actual vs scheduled | M4 data |

### AI Engagement KPIs

| KPI | Formula / Source | Mock Value |
|---|---|---|
| AI Conversations Today | Total across all channels | 84 |
| Active Conversations Now | Real-time count | 6 |
| Avg First Response Time | Mean across all channels | 12 sec |
| AI Lead Qualification Rate | Qualified ÷ Total conversations | 37% |
| Leads Qualified by AI | AI-qualified leads today | 31 |
| Escalation Rate | Escalated to human ÷ Total | 10.7% |
| AI Site Visits Booked | Visits confirmed without agent | 7 |
| Missed Call Recovery Rate | Recovered via WhatsApp ÷ Missed | 77.7% |
| Automations Run Today | n8n workflow executions | 8,234 |
| WhatsApp Messages Sent | Total outbound messages | 3,812 |

### Property & Market Intelligence KPIs

| KPI | Formula / Source | Mock Value |
|---|---|---|
| AVMs Run Today | Valuation model executions | 14 |
| CMA Reports (Week) | Comparative market analyses | 6 |
| Active Buyer Alerts | Live saved searches | 48 |
| Alerts Triggered Today | Matches sent to buyers | 9 |
| Competitor Price Updates | Price changes tracked | 5 |
| Avg Price/Sq Ft — Vesu | Market data feed | ₹4,850/sq ft |
| Absorption Rate — Adajan | Months of supply | 4.8 months |
| Avg Days on Market — Pal | Listing age at sale | 38 days |

### Construction & Project KPIs

| KPI | Formula / Source | Mock Value |
|---|---|---|
| Overall Construction Progress | Weighted % complete | 67% |
| Budget Utilised | Spend ÷ Total budget | 57% (₹16.2 / ₹28.4 Cr) |
| Active Contractors | Live work orders | 14 |
| Statutory Approvals Pending | Not yet received | 3 |
| Days to Possession | Countdown to RERA date | 571 days |
| Budget vs Progress Variance | Progress % − Budget % | +10% (under budget) ✅ |

### Tenant & Buyer KPIs

| KPI | Formula / Source | Mock Value |
|---|---|---|
| Total Units Managed | Portfolio count | 42 |
| Rent Collection Rate | Rent received ÷ Total expected | 84.8% (₹7.8L / ₹9.2L) |
| Leases Expiring in 60 Days | Renewal pipeline | 6 |
| Open Maintenance Requests | Pending resolution | 8 |
| Portfolio NPS | Tenant NPS score | 74 |
| Registered Buyers (Portal) | Active buyer accounts | 186 |
| Buyer Portal Active Rate | Logged in last 7 days | 40% (74 / 186) |
| Overdue Payments | Buyers behind on schedule | 18 |
| Total Outstanding (Buyers) | All overdue combined | ₹1.61 Cr |
| Buyer NPS | Post-sale satisfaction score | +62 |
| Open Snag Tickets | Unresolved defects | 9 |

### Document & Compliance KPIs

| KPI | Formula / Source | Mock Value |
|---|---|---|
| KYC Completion Rate | KYC verified ÷ Active buyers | 78% |
| Agreements Pending Review | Awaiting legal sign-off | 3 |
| E-Signatures Pending | Sent but not completed | 4 |
| RERA Deadlines (30 Days) | Upcoming filings | 2 |
| Nearest RERA Deadline | Days away | 11 days |
| Docs Processed This Month | OCR + AI extractions | 312 |
| Document AI Accuracy | Verified extraction accuracy | 98% |

### HR & Team KPIs

| KPI | Formula / Source | Mock Value |
|---|---|---|
| Open Positions | Active job openings | 4 |
| Candidates in Pipeline | All active candidates | 38 |
| Joining This Month | Confirmed joiners | 3 |
| Payroll Processed | Status + amount | ₹14.2L ✅ |
| Pending HR Actions | Unresolved HR tasks | 7 |
| Top Agent Score | Best performer this month | 91/100 (Priya Rana) |

### System & Platform KPIs

| KPI | Formula / Source | Mock Value |
|---|---|---|
| Modules Active | Healthy module count | 11 of 12 |
| Modules Degraded | Partial function | 1 (M6) |
| Platform Uptime (30 Days) | Weighted avg | 99.7% |
| Data Points Processed Today | All data layers | 2.4M |
| Open Incidents | Unresolved system events | 1 Minor |
| Security Violations (24h) | Auth failures + RBAC breaches | 0 |
| DPDP Compliance Status | Regulatory adherence | Active ✅ |
| High-Risk Deals | Risk score ≥ 70 | 5 |
| Critical Risk Deals | Risk score ≥ 85 | 1 |

---

*Real Estate AI Command Center — Main Dashboard Specification*  
*by Fortiv Solutions · fortivsolutions.in*  
*Version 2.0 · Confidential · All 12 modules consolidated*
