# M5 — Analytics, Forecasting & Reporting
### Real Estate AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** Real-time intelligence that turns operational data into decisions — automated reports, AI forecasts, and performance visibility without a single manual spreadsheet.

**Document Type:** Module Build Guide & Parameter Reference  
**Module Code:** M5  
**Total Sub-Modules:** 6 (5.1 → 5.6)  
**Version:** 2.0  
**Company:** Fortiv Solutions  
**Classification:** Confidential  
**Market:** India — Gujarat Focus (Surat, Vadodara)

---

## Module Overview

### Purpose
Replace manual reporting, guesswork forecasting, and end-of-month surprises with an **autonomous intelligence engine** that monitors every metric across the organisation in real time — delivering daily agent reports, 90-day revenue forecasts, inventory velocity signals, investor-grade reports, marketing ROI breakdowns, and executive briefings, all with zero manual preparation.

### Core Problem Being Solved

| Pain Point | Without M5 | With M5 |
|---|---|---|
| Agent performance visibility | Manager reviews weekly (too late to act) | Daily automated report every evening at 7 PM |
| Revenue forecasting | Finance guesses at month-end | ML model with 30/60/90-day forecast + confidence interval |
| Inventory intelligence | Sales team doesn't know what's slow-moving | Real-time velocity classification per unit type |
| Investor reporting | 4–6 hours manual prep per report, often delayed | Auto-generated, branded PDF in minutes |
| Marketing ROI | Spend without knowing which channel converts | Channel-level cost-per-booking dashboard |
| Executive awareness | Sunday evening manual report pull | AI-compiled 2-page brief delivered Monday 7:30 AM |

### Demo Wow Moment
**Live forecast dashboard** — pipeline health feeding into the 90-day revenue projection in real time, a channel ROI table showing that referrals cost 7× less than 99acres per booking, and an executive brief generating in full from a single click.

---

## Module-Level Parameters

| Parameter | Value |
|---|---|
| Module ID | M5 |
| Module Name | Analytics, Forecasting & Reporting |
| Sub-module Count | 6 |
| Primary Output | Automated daily/weekly/monthly intelligence reports delivered to right stakeholders without manual effort |
| Primary Users | Sales Manager · Management / Directors · Marketing Team · Finance Team · Investors |
| Data Sources | M1 (Lead pipeline) · M2 (Chatbot interactions) · M3 (Property & market intelligence) · M4 (Deals & CRM) · M6 (Compliance) · M9 (Construction) · M11 (Finance) |
| Report Delivery Channels | WhatsApp (primary) · Email (secondary) · Investor portal (M10) |
| Report Formats | WhatsApp summary · PDF · In-app dashboard |
| Forecast Horizon | 30 / 60 / 90 days |
| Historical Data Window | 18+ months |
| Compliance | DPDP Act 2023 |
| Currency Format | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Demo Financial Period | Q1 2025 (Jan–Mar 2025) |

---

## Module Pages & Navigation Structure

```
M5 — Analytics, Forecasting & Reporting
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M5
│             (KPI summary tiles, data health status, report delivery log)
│
├── [Page 2]  5.1  Daily Agent Performance Report
│             (Agent scorecards, team summary, trend indicators, delivery log)
│
├── [Page 3]  5.2  Sales Forecast Agent
│             (30/60/90-day projections, pipeline input feed, scenario modelling)
│
├── [Page 4]  5.3  Inventory Velocity Tracker
│             (Unit-level velocity heatmap, slow-mover flag list, scheme effectiveness)
│
├── [Page 5]  5.4  Investor & LP Report Generator
│             (Report builder, data pull preview, distribution log, template selector)
│
├── [Page 6]  5.5  Marketing ROI Dashboard
│             (Channel performance table, CPL/CPV/CPB metrics, attribution model, budget allocation AI)
│
└── [Page 7]  5.6  Executive Weekly Briefing
              (Brief preview, section breakdown, delivery schedule, action item tracker)
```

---

## Page 1 — Module Dashboard (M5 Overview)

### Purpose
The landing screen for Module 5. Provides a live health check of the analytics engine — which reports have been delivered, what data is feeding the forecast, which channels are underperforming, and where management attention is needed today.

### Layout
- **Top Stats Bar** (4 KPI cards across)
- **Centre Left:** Report Delivery Log (last 7 days — all automated reports sent)
- **Centre Right:** Data Health Panel (all source modules — are they feeding M5 correctly?)
- **Bottom:** Quick-access tiles to each sub-module (5.1 → 5.6)

### KPI Cards (Top Stats Bar)

| Card | Metric | Mock Value | Colour |
|---|---|---|---|
| Reports Delivered (This Month) | Total automated reports dispatched | 47 | Accent Blue #2E86AB |
| Forecast Accuracy (Last 30 Days) | ML model accuracy vs actual bookings | 84% | Success Green #1D9E75 |
| Channels Tracked | Marketing channels in ROI dashboard | 10 | Primary Navy #1A3C5E |
| Forecast Revenue (Next 30 Days) | Predicted pipeline-weighted revenue | ₹1.84 Cr | Teal #1D9E75 |

### Report Delivery Log (Centre Left)
Chronological list of every automated report sent in the last 7 days:

| Report | Delivered To | Channel | Time | Status |
|---|---|---|---|---|
| Daily Agent Report | Team WhatsApp Group | WhatsApp | 20/01 7:00 PM | ✅ Delivered |
| Executive Brief | Directors WhatsApp | WhatsApp + Email | 20/01 7:30 AM | ✅ Delivered |
| Inventory Report | Rahul Modi (Manager) | WhatsApp | 18/01 9:00 AM | ✅ Delivered |
| Investor Report (Monthly) | LP Mailing List (8) | Email (PDF) | 15/01 10:00 AM | ✅ Delivered |
| Daily Agent Report | Team WhatsApp Group | WhatsApp | 19/01 7:00 PM | ✅ Delivered |

### Data Health Panel (Centre Right)
Status of all data source modules feeding M5:

| Source Module | Data Type | Last Sync | Status |
|---|---|---|---|
| M1 — Lead Generation | Lead records, scores | 20/01 6:58 PM | 🟢 Live |
| M4 — Sales Pipeline | Deal records, stages | 20/01 6:55 PM | 🟢 Live |
| M4.2 — Visit Scheduler | Visit completions | 20/01 6:55 PM | 🟢 Live |
| M1.3 — Ads Sync | Campaign spend + leads | 20/01 6:00 PM | 🟢 Live |
| M9 — Construction | Milestone updates | 19/01 5:00 PM | 🟡 Delayed |
| M11 — Finance | Collections, payments | 20/01 3:00 PM | 🟢 Live |
| M6.3 — RERA Compliance | Deadline calendar | 18/01 9:00 AM | 🟢 Live |

### Sub-Module Quick Access Tiles (Bottom Row)
Six clickable tiles, each showing:
- Sub-module number + name
- One-line description
- Status indicator (Active / Scheduled / Paused)
- Last report generated timestamp

---

## Page 2 — Sub-Module 5.1: Daily Agent Performance Report

### What It Is
An **automated daily performance summary** compiled at end-of-day for each sales agent and the overall team — delivered to the team WhatsApp group and management email every evening at 7 PM, with zero manual preparation.

### Report Trigger
Scheduled automation runs at **6:45 PM daily** — pulls all CRM activity logged during the day, compiles metrics per agent, and dispatches report at **7:00 PM**.

### Metrics Per Agent

| Metric | Description | Data Source |
|---|---|---|
| `leads_assigned` | New leads allocated today | M4.1 CRM |
| `calls_attempted` | Outbound calls dialled | Telephony / CRM log |
| `calls_connected` | Calls answered by lead | Telephony log |
| `call_connect_rate` | Connects / Attempts % | Derived |
| `site_visits_conducted` | Visits completed today | M4.2 |
| `follow_ups_sent` | Follow-up messages dispatched | M4.3 |
| `leads_qualified` | Leads moved to Qualified stage | M4.5 CRM |
| `bookings_achieved` | Deals reaching Booking Amount Paid | M4.5 |
| `revenue_generated` | ₹ value of bookings today | M4.5 |
| `response_time_avg` | Avg minutes to first contact after lead assigned | M4.1 + CRM |
| `portal_response_rate` | % portal leads responded to within SLA | M1.4 |

### Team Summary Metrics

| Metric | Description | Mock Value |
|---|---|---|
| Total Leads Received | Across all channels today | 18 |
| Total Leads Contacted | Leads where call/WA was attempted | 14 |
| Contact Rate | Contacted / Received % | 77.8% |
| Visits Completed | Total site visits today | 6 |
| Bookings Today | Booking amount received | 1 |
| Revenue Today | Total booking value | ₹56L |
| Follow-ups Sent | Automated + agent-sent total | 34 |

### Trend Indicators (Per Metric)

| Comparison | Logic | Display |
|---|---|---|
| vs Yesterday | Today's value / Yesterday's value | ▲ +12% or ▼ -8% |
| vs Last Week (Same Day) | Today vs same day last week | ▲ +5% or ▼ -3% |
| vs Monthly Average | Today vs (month total / days elapsed) | Above avg / Below avg badge |

### WhatsApp Report Format (Delivered to Team Group)

```
📊 *Fortiv Solutions — Daily Performance Report*
📅 Monday, 20 January 2025 | 7:00 PM

━━━━━━━━━━━━━━━━━━━
📋 *TEAM SUMMARY*
━━━━━━━━━━━━━━━━━━━
Leads Received:      18  (▲ +3 vs yesterday)
Leads Contacted:     14  (77.8% contact rate)
Site Visits:          6  (▲ +2 vs yesterday)
Follow-ups Sent:     34
Bookings:             1  ✅ ₹56 Lakhs

━━━━━━━━━━━━━━━━━━━
👤 *AGENT SCORECARDS*
━━━━━━━━━━━━━━━━━━━
🥇 *Priya Rana*
   Leads: 6 | Calls: 6/6 | Visits: 3 | Booking: 1 (₹56L) ⭐

*Ankit Shah*
   Leads: 5 | Calls: 4/5 | Visits: 2 | Booking: 0

*Meera Patel*
   Leads: 4 | Calls: 3/4 | Visits: 1 | Booking: 0

*Kiran Desai*
   Leads: 3 | Calls: 1/3 | Visits: 0 | Booking: 0

━━━━━━━━━━━━━━━━━━━
🌟 *Today's Star: Priya Rana*
   3 visits · 1 booking · ₹56L revenue
━━━━━━━━━━━━━━━━━━━

Powered by Fortiv AI Command Center
```

### Manager-Only Alert (Separate WhatsApp DM)

```
⚠️ *Manager Alert — 20 January 2025*

Kiran Desai contacted only 1 of 3 assigned leads today.
Call connect rate: 33% (team avg: 78%)
Visits completed: 0 of 1 scheduled.

Recommend: Check in before tomorrow morning.
```

### Full PDF Report (Email — Management)
Detailed multi-page PDF including:
- Agent-by-agent scorecards with trend charts (7-day bars per metric)
- Team funnel: Leads → Contacted → Qualified → Visited → Booked
- Best and worst performing metrics of the day (flagged)
- Cumulative month-to-date performance vs targets

### Page Layout
**Top Bar:** Reports sent this month · Today's contact rate · Today's bookings · Today's revenue  
**Main Area:** Agent scorecard grid — one card per agent with all daily metrics + trend arrows  
**Bottom Strip:** Report delivery confirmation — WhatsApp sent ✓ · Email sent ✓ · PDF generated ✓  
**Side Panel:** 7-day trend sparklines per metric (mini charts per agent card)

### Mock Demo Data — Agent Scorecards (Today)

| Agent | Leads | Calls Att. | Calls Conn. | Visits | Bookings | Revenue | Rank |
|---|---|---|---|---|---|---|---|
| Priya Rana | 6 | 6 | 6 | 3 | 1 | ₹56L | 🥇 1st |
| Ankit Shah | 5 | 5 | 4 | 2 | 0 | — | 2nd |
| Meera Patel | 4 | 4 | 3 | 1 | 0 | — | 3rd |
| Kiran Desai | 3 | 3 | 1 | 0 | 0 | — | ⚠️ Alert |

### Key UI Elements
- **Daily star highlight** — top agent card has gold border + star badge
- **Laggard alert badge** — red ⚠️ tag on agent card if below-threshold performance
- **Trend arrows** — green ▲ or red ▼ on every metric relative to yesterday
- **"Report sent" confirmation strip** — shows WhatsApp group tick + email delivery receipt
- **Funnel visualisation** — team-level conversion funnel from leads to bookings

### Why It Matters
What gets measured gets managed. Daily visibility into agent activity means managers can intervene same-day — not at the end of the month when a missed target is irreversible. Agents who know their metrics are tracked daily consistently outperform those who aren't measured.

---

## Page 3 — Sub-Module 5.2: Sales Forecast Agent

### What It Is
A **machine learning forecasting model** that analyses 18+ months of historical booking data, current pipeline health, seasonal patterns, and macro market signals to predict expected sales and revenue for the next 30, 60, and 90 days — with confidence intervals and scenario modelling.

### Data Inputs to the Forecast Model

| Input Category | Specific Data | Source Module |
|---|---|---|
| Historical bookings | 18+ months of bookings by project, configuration, price band, agent | M4.5 (historical) |
| Current pipeline | All active deals weighted by pipeline stage probability | M4.5 (live) |
| Lead quality | AI lead scores, intent labels, enrichment completeness | M1.6 |
| Visit pipeline | Scheduled visits, completion rates, post-visit conversion rate | M4.2 |
| Seasonal patterns | Festival booking peaks (Navratri, Diwali), summer slowdowns, year-end | Historical |
| Market signals | Surat micro-market absorption rate, RBI rate changes, GST updates | M3 |
| Agent capacity | Active agents, avg bookings per agent per month | M5.1 |
| Marketing spend | Active campaign budgets and lead velocity | M5.5 |

### Pipeline Stage Probability Weights

| Pipeline Stage | Conversion Probability | Weight in Forecast |
|---|---|---|
| Inquiry | 5% | Low contribution |
| Site Visit Scheduled | 10% | Low contribution |
| Visited | 20% | Moderate |
| Negotiation | 40% | Significant |
| Booking Amount Paid | 85% | High |
| Agreement Signed | 92% | Very High |
| Loan Processing | 95% | Near certain |
| Full Payment | 98% | Near certain |
| Registration | 100% | Closed — not in forecast |

### Forecast Output Structure

| Horizon | Predicted Bookings | Predicted Revenue | Confidence Band |
|---|---|---|---|
| 30 Days | 6 bookings | ₹3.8 Cr | ₹3.1 Cr – ₹4.6 Cr |
| 60 Days | 13 bookings | ₹8.2 Cr | ₹6.8 Cr – ₹9.6 Cr |
| 90 Days | 21 bookings | ₹13.1 Cr | ₹10.8 Cr – ₹15.4 Cr |

### Seasonal Adjustment Calendar

| Period | Adjustment | Reason |
|---|---|---|
| Navratri (Oct) | +25% uplift | Gujarat festive buying surge |
| Diwali (Oct–Nov) | +35% uplift | Peak booking season nationally |
| New Year (Jan) | +10% uplift | Year-start new home decisions |
| Ugadi / Gudi Padwa (Mar–Apr) | +15% uplift | Auspicious new beginning — property buying |
| April–June | -10% deflation | Summer heat reduces site visits in Surat |
| July–August | -5% deflation | Monsoon season slowdowns |

### Scenario Modelling

Management can run "what-if" scenarios that update the 90-day forecast in real time:

| Scenario | Input Change | Forecast Impact |
|---|---|---|
| Add 2 agents | `+2 active_agents` | +18% volume uplift |
| Launch Diwali 3% discount scheme | `discount_scheme = true` | +28% volume, -3% margin |
| Increase Facebook ad budget by ₹1L/month | `+₹1L ads_spend` | +12 leads/month → +1.4 bookings |
| One project RERA extension delay | `project_status = paused` | -22% 90-day volume |
| SBI home loan rate up 50bps | `home_loan_rate +0.5%` | -8% volume (price-sensitive segment) |

### Forecast Accuracy Tracking

| Period | Predicted Bookings | Actual Bookings | Accuracy |
|---|---|---|---|
| Dec 2024 (30-day) | 7 | 6 | 85.7% |
| Nov 2024 (30-day) | 9 | 10 | 90% |
| Oct 2024 (30-day) | 14 | 13 | 92.9% (Diwali) |
| Q4 2024 (90-day) | 28 | 26 | 92.9% |
| Q3 2024 (90-day) | 22 | 25 | 88% |

**Model accuracy (trailing 6 months): 84%**

### Shortfall Alert Logic

| Condition | Alert Triggered | Recipients | Lead Time |
|---|---|---|---|
| 30-day forecast < monthly target by >20% | Red alert | Management + Sales Manager | 21 days ahead |
| 60-day forecast showing declining trend | Amber alert | Management | 30 days ahead |
| Pipeline weighted value drops >15% week-on-week | Amber alert | Sales Manager | Immediate |
| Agent capacity gap detected (leads > agent bandwidth) | Alert | HR + Sales Manager | Immediate |

### Page Layout
**Top Bar:** 30-day forecast · 60-day forecast · 90-day forecast · Model accuracy %  
**Main Area Left (55%):** Forecast chart — bar chart showing predicted bookings by month with confidence band (shaded area above/below bar)  
**Main Area Right (45%):** Scenario modelling panel — sliders and toggles for each scenario variable  
**Bottom Left:** Pipeline contribution table — weighted deals feeding into forecast by stage  
**Bottom Right:** Accuracy tracking table — last 6 months predicted vs actual  

### Mock Forecast Chart Data (Monthly — Next 90 Days)

| Month | Low Estimate | Base Forecast | High Estimate | Seasonal Flag |
|---|---|---|---|---|
| Feb 2025 | 4 | 6 | 8 | — |
| Mar 2025 | 5 | 7 | 10 | Ugadi uplift |
| Apr 2025 | 6 | 8 | 11 | Ugadi peak |

### Key UI Elements
- **Confidence band shading** — translucent band around forecast bars showing low/high range
- **Seasonal flag markers** — calendar icons on months with known uplift/deflation with tooltip
- **Scenario slider panel** — adjusting any slider updates all three forecast bars in real time (animated)
- **"Shortfall risk" badge** — amber banner if 30-day forecast misses target by >20%
- **Pipeline feed table** — bottom table shows which specific deals are contributing to which forecast bucket
- **Accuracy gauge** — circular gauge showing model accuracy % with colour (>85% green, 70–85% amber, <70% red)

### Why It Matters
Management currently discovers revenue shortfalls at end-of-month, when nothing can be done. A 30–90 day forecast with 84%+ accuracy gives enough lead time to course-correct — hire more agents, increase marketing spend, or launch a scheme — before the gap becomes a crisis.

---

## Page 4 — Sub-Module 5.3: Inventory Velocity Tracker

### What It Is
A **real-time inventory monitoring system** that tracks how quickly each unit type is selling across all active Fortiv projects — classifying velocity, flagging slow movers, recommending price adjustments, and tracking scheme effectiveness.

### Velocity Classification

| Classification | Definition | Action Required |
|---|---|---|
| 🟢 Fast | Selling in < 30 days average | No action — monitor supply |
| 🟡 Normal | Selling in 30–60 days average | Light monitoring |
| 🔴 Slow | Selling in > 60 days average | Intervention required |
| ⚫ Stalled | No sale in > 90 days | Urgent pricing / scheme review |

### Tracked Metrics Per Unit Type (Per Project, Per Tower)

| Metric | Description | Example |
|---|---|---|
| `project_name` | Project identifier | Fortiv Greenview Heights |
| `tower` | Tower designation | Tower A |
| `configuration` | Unit type | 2BHK |
| `floor_range` | Floor grouping | Floors 1–5 / 6–10 / 11–14 |
| `total_units` | Total inventory in this category | 24 |
| `units_sold` | Sold to date | 16 |
| `units_available` | Remaining available | 8 |
| `units_sold_this_month` | Sales velocity this month | 3 |
| `units_sold_this_quarter` | Sales velocity this quarter | 9 |
| `avg_days_on_market` | Average days from listing to booking | 38 days |
| `velocity_class` | Fast / Normal / Slow / Stalled | Normal |
| `price_per_sqft` | Current asking price | ₹4,950/sq ft |
| `comparable_sold_price` | Avg price of comparable sold units nearby | ₹4,820/sq ft |
| `price_recommendation` | Suggested price range if slow | ₹4,750–₹4,900/sq ft |
| `active_prospects` | Leads currently being pitched this unit | 4 |
| `agent_pitching` | Agent(s) actively pitching this inventory | Priya Rana, Ankit Shah |
| `scheme_active` | Any incentive scheme running | Free parking (Feb 2025) |
| `scheme_impact` | Velocity change since scheme launched | +40% vs prior 30 days |

### Price Sensitivity Trigger Logic

| Condition | Action |
|---|---|
| Unit unsold for 45+ days | Show comparable sold prices + recommended price range |
| Unit unsold for 60+ days | Red flag — alert Sales Manager + recommend active scheme |
| Unit unsold for 90+ days | Escalate to Management — pricing / floor / facing review |
| Price reduced by agent | Log revision, track velocity change post-reduction |
| New scheme launched | Tag all slow units with scheme, track velocity delta |

### Inventory Heatmap (Visual)

The main visual is a **floor-plan heatmap** of each tower:
- Green cells = sold units
- Amber cells = active prospect (visit scheduled / in negotiation)
- Red cells = available with no prospect
- Grey cells = held / reserved

Clicking any cell expands to show that unit's full record.

### Scheme Effectiveness Tracker

| Scheme Name | Project | Unit Type | Launch Date | Velocity Before | Velocity After | Uplift |
|---|---|---|---|---|---|---|
| Free Parking (Feb 2025) | Greenview Heights | 2BHK T-A Fl 1–5 | 01/02/2025 | 0.4 units/week | 0.8 units/week | +100% |
| ₹50K Stamp Duty Subsidy | Greenview Heights | 3BHK T-B | 15/01/2025 | 0.3 units/week | 0.5 units/week | +67% |
| No Floor Rise (Jan) | Skyline Residences | All | 01/01/2025 | 0.6 units/week | 0.9 units/week | +50% |

### Agent Orphan Alert

When an agent is reassigned or exits, the system identifies all inventory they were pitching and flags it for reassignment — so no unit falls unattended:

```
⚠️ Agent Orphan Alert — 18 January 2025
Ankit Shah has been reassigned to Vadodara territory.

Orphaned Inventory (being pitched by Ankit):
• Greenview Heights, Tower A, Unit 604 (2BHK) — Prospect: Amit Desai (Score: 61)
• Greenview Heights, Tower B, Unit 1102 (3BHK) — Prospect: Deepak Trivedi (Score: 82)

Recommend: Reassign to Priya Rana (Vesu territory expert)
Action: [Reassign] [Review]
```

### Page Layout
**Top Bar:** Total units available · Fast-moving count · Slow/stalled count · Avg days on market (all projects)  
**Main Area Left (60%):** Project/Tower selector → Floor-plan heatmap visual  
**Main Area Right (40%):** Slow-mover list — flagged units with days on market, price recommendation, action button  
**Bottom Left:** Velocity by configuration chart — bar chart showing avg sell time by type (1BHK vs 2BHK vs 3BHK)  
**Bottom Right:** Scheme effectiveness table  

### Mock Demo Data — Inventory Summary

| Project | Config | Tower | Available | Velocity Class | Avg Days | Action |
|---|---|---|---|---|---|---|
| Greenview Heights | 2BHK | Tower A, Fl 1–5 | 4 | 🟡 Normal | 38 days | Monitor |
| Greenview Heights | 2BHK | Tower A, Fl 11–14 | 7 | 🟢 Fast | 22 days | — |
| Greenview Heights | 3BHK | Tower B | 11 | 🔴 Slow | 67 days | Scheme active |
| Skyline Residences | 3BHK | Tower 1 | 18 | 🟡 Normal | 44 days | Monitor |
| Skyline Residences | 4BHK | Tower 2 | 6 | ⚫ Stalled | 94 days | ⚠️ Escalate |
| Business Park | Commercial | Block C | 9 | 🟡 Normal | 52 days | Monitor |

### Key UI Elements
- **Heatmap tower visual** — colour-coded floor plan grid; hovering any cell shows unit details
- **Slow-mover red badge** — units at >60 days highlighted with recommended action
- **Price recommendation card** — appears automatically alongside stalled unit record
- **Scheme toggle** — launch a scheme directly from slow-mover card with one click
- **Agent orphan alert panel** — appears on dashboard when reassignment creates unattended inventory
- **Velocity trend sparkline** — mini 30-day chart per unit type showing sell-through rate trend

### Why It Matters
Unsold inventory is dead capital — tying up funds, accumulating holding costs, and representing a missed revenue opportunity. Catching a slow-moving unit at 45 days allows a targeted intervention. Waiting until 120 days means months of avoidable cost and lost negotiating leverage.

---

## Page 5 — Sub-Module 5.4: Investor & LP Report Generator

### What It Is
An **automated, branded report generation system** that compiles professional investor update reports for Limited Partners and project investors — pulling live data from across the platform, formatting it into a structured document, and distributing it without a single hour of manual preparation.

### Report Frequencies

| Report Type | Frequency | Trigger | Recipients |
|---|---|---|---|
| Monthly Update | Monthly | 1st of each month, 9:00 AM | All active investors per project |
| Quarterly Comprehensive | Quarterly | End of Q1/Q2/Q3/Q4 | All investors + seed LPs |
| Milestone Flash Report | Event-driven | RERA filing, possession, major booking | Relevant investors only |
| Ad-hoc Report | Manual trigger | Management request | Custom list |

### Report Sections — Monthly Update

| Section | Content | Data Source |
|---|---|---|
| Cover Page | Project photo, report title, period, Fortiv branding | Static template |
| Executive Summary | 4–5 line narrative: period highlights, key metrics, forward look | AI-compiled from all data |
| Sales Performance | Bookings this period, revenue collected, pipeline health | M4.5 |
| Inventory Status | Units sold vs available, velocity by type | M5.3 |
| Construction Update | % completion, milestone achieved, next milestone, photos | M9.1 |
| Financial Summary | Collections, cost status, projected returns | M11.4, M11.5 |
| Market Context | Surat/Vadodara market update, appreciation data | M3 |
| Next Period Outlook | Expected bookings, upcoming events, planned campaigns | M5.2 + Management input |
| RERA & Compliance | Registration status, last QPR submission, next deadline | M6.3 |
| Appendix | Payment schedule summary, unit availability table | M4.5, M5.3 |

### Report Sections — Quarterly Comprehensive (Additional)

| Section | Content |
|---|---|
| Financial Deep-Dive | Full P&L per project — revenue, cost of construction, overheads, net margin |
| Cash Flow Statement | Collections, disbursements, reserve fund status |
| ROI Summary | IRR calculation to date, projected final IRR at completion |
| Comparable Market Analysis | How project pricing compares to neighbourhood comps (from M3) |
| Regulatory Update | Any new RERA/Gujarat government regulations affecting project |

### Investor Tier Templates

| Tier | Template Style | Data Depth |
|---|---|---|
| Seed Investor / Individual | Concise — 4–6 pages | Sales, construction milestone, financial summary |
| Institutional / LP | Comprehensive — 10–14 pages | All sections + full financial tables + IRR model |
| Equity Partner | Full data access | All sections + appendix + raw data export option |

### Report Generation Workflow

| Step | Action | Duration |
|---|---|---|
| 1 | Trigger fires (scheduled or manual) | Instant |
| 2 | System pulls data from M4.5, M9.1, M11.4, M11.5, M5.3, M6.3 | 30–45 seconds |
| 3 | AI generates narrative sections (Executive Summary, Market Context, Outlook) | 60 seconds |
| 4 | Template engine merges data + narrative + charts into branded PDF | 30–45 seconds |
| 5 | PDF reviewed by management (optional — auto-release if toggle enabled) | Manual / Auto |
| 6 | Report emailed to investor mailing list + uploaded to M10 investor portal | Instant |
| Total generation time | Automated | 2–3 minutes |

### Report Record Parameters

| Field | Description | Example |
|---|---|---|
| `report_id` | Unique report identifier | `rpt_20250115_M_GH` |
| `project` | Project this report covers | Fortiv Greenview Heights |
| `report_type` | Monthly / Quarterly / Flash / Ad-hoc | Monthly |
| `period` | Reporting period | January 2025 |
| `generated_at` | Timestamp of generation | 01/02/2025 09:02:47 |
| `data_pull_timestamp` | When source data was snapshotted | 01/02/2025 09:00:00 |
| `ai_narrative_generated` | Executive summary AI-written | ✓ |
| `template_used` | Investor tier template | Seed Investor — Monthly |
| `reviewed_by` | Management reviewer | Rahul Modi |
| `approved_at` | When approved for release | 01/02/2025 09:45 AM |
| `recipients_count` | Number of investors on distribution list | 8 |
| `email_delivered` | Confirmed email delivery | ✓ 8/8 |
| `portal_uploaded` | Uploaded to M10 investor portal | ✓ |
| `open_rate` | % of recipients who opened email | 87.5% |

### Page Layout
**Top Bar:** Reports generated this quarter · Next scheduled report date · Total investors on distribution · Last report open rate  
**Main Area Left (50%):** Report builder panel — project selector, report type, period, template, recipient list  
**Main Area Right (50%):** Report preview — rendered PDF preview in-browser  
**Bottom:** Distribution log — all past reports with delivery status, open rates, and download counts  

### Mock Distribution Log

| Report | Project | Period | Generated | Recipients | Opened | Portal |
|---|---|---|---|---|---|---|
| Monthly Update | Greenview Heights | Jan 2025 | 01/02 09:02 | 8 | 7/8 (87.5%) | ✓ |
| Monthly Update | Skyline Residences | Jan 2025 | 01/02 09:05 | 5 | 4/5 (80%) | ✓ |
| Quarterly — Q4 2024 | Greenview Heights | Oct–Dec 2024 | 02/01 10:00 | 8 | 8/8 (100%) | ✓ |
| Flash — Possession Notice | Business Park | — | 18/01 11:30 | 3 | 3/3 (100%) | ✓ |

### Key UI Elements
- **In-browser PDF preview** — live preview of report as data is selected, updates in real time
- **"Generate Report" countdown** — 3-minute generation timer as demo focal point
- **Tier template selector** — toggle between Seed / Institutional / Equity with live preview update
- **Distribution list manager** — add/remove investors per project with tier tag
- **Open rate badge** — each report in log shows email open rate with colour indicator
- **Auto-release toggle** — management can enable auto-distribution without manual approval step

### Why It Matters
Investors receiving timely, professional, data-rich updates reinvest at higher rates and refer other investors. Manual report preparation takes 4–6 hours per report and is often delayed. Automation makes investor communication effortless, consistent, and credibility-building.

---

## Page 6 — Sub-Module 5.5: Marketing ROI Dashboard

### What It Is
A **unified marketing performance dashboard** that tracks cost-per-lead, cost-per-visit, and cost-per-booking for every marketing channel — giving the marketing team and management clear visibility into which channels generate bookings and which channels waste budget.

### Channels Tracked

| Channel | Type | Spend Tracked |
|---|---|---|
| 99acres (Listing + Ads) | Portal | Monthly subscription + featured listing cost |
| MagicBricks | Portal | Monthly subscription + boost spend |
| Housing.com | Portal | Monthly subscription |
| NoBroker | Portal | Monthly subscription |
| Facebook Lead Ads | Paid Social | Daily ad spend from Ads Manager API |
| Instagram Lead Ads | Paid Social | Daily ad spend from Ads Manager API |
| Google Search Ads | Paid Search | Daily ad spend from Google Ads API |
| Referral Programme | Organic | Referral incentive payouts (manual entry) |
| WhatsApp Organic | Organic | No direct cost (time cost tracked optionally) |
| Offline (Events/Hoardings) | Offline | Manual monthly entry |

### Metrics Per Channel

| Metric | Formula | Description |
|---|---|---|
| `spend` | Actual ₹ spent | Campaign or subscription cost |
| `leads_generated` | Count | Leads sourced from this channel |
| `cost_per_lead` | Spend / Leads | CPL in ₹ |
| `lead_quality_score` | Avg M1.6 score | Average AI score of leads from this source |
| `leads_to_visits` | Visits / Leads % | What % of leads from this channel visited |
| `cost_per_visit` | Spend / Visits | CPV in ₹ |
| `visits_to_bookings` | Bookings / Visits % | Post-visit conversion rate per channel |
| `leads_to_bookings` | Bookings / Leads % | End-to-end conversion rate |
| `cost_per_booking` | Spend / Bookings | CPB in ₹ — the most critical metric |
| `roi_multiple` | Revenue / Spend | Return multiple on channel spend |

### Mock Demo Data — Channel Performance Table (January 2025)

| Channel | Spend | Leads | CPL | Avg Score | Visits | CPV | Bookings | CPB | ROI |
|---|---|---|---|---|---|---|---|---|---|
| Referral | ₹40K | 8 | ₹5,000 | 76 | 6 | ₹6,667 | 3 | ₹13,333 | 12.6× |
| WhatsApp Organic | ₹0 | 14 | ₹0 | 69 | 9 | ₹0 | 2 | ₹0 | ∞ |
| Google Ads | ₹1.2L | 26 | ₹4,615 | 52 | 10 | ₹12,000 | 2 | ₹60,000 | 2.8× |
| Facebook Ads | ₹1.8L | 47 | ₹3,830 | 45 | 14 | ₹12,857 | 2 | ₹90,000 | 1.9× |
| 99acres | ₹1.5L | 28 | ₹5,357 | 58 | 8 | ₹18,750 | 1 | ₹1,50,000 | 1.1× |
| MagicBricks | ₹1.2L | 19 | ₹6,316 | 55 | 5 | ₹24,000 | 1 | ₹1,20,000 | 1.3× |
| Instagram Ads | ₹80K | 22 | ₹3,636 | 43 | 6 | ₹13,333 | 0 | — | 0× |
| Housing.com | ₹90K | 11 | ₹8,182 | 49 | 3 | ₹30,000 | 0 | — | 0× |

### Attribution Models

| Model | Logic | Use Case |
|---|---|---|
| First Touch | 100% credit to first channel that touched the buyer | Understanding awareness drivers |
| Last Touch | 100% credit to last channel before booking | Understanding conversion drivers |
| Multi-Touch (Linear) | Equal credit across all touchpoints | Balanced view |
| Multi-Touch (Time Decay) | More credit to touchpoints closer to booking | Used in Fortiv default view |

### AI Budget Allocation Recommendation

Generated automatically based on CPB and ROI data:

```
💡 AI Budget Recommendation — January 2025

Based on this month's performance:

✅ Increase:
• Referral Programme: ₹40K spend → 3 bookings (CPB ₹13K)
  Recommend: Increase referral incentive budget to ₹80K → est. +3 bookings
• Google Ads: Strong lead quality (score 52) — consider ₹1.8L vs current ₹1.2L

⚠️ Maintain:
• Facebook Ads: High lead volume but lower quality — maintain current budget,
  improve creative targeting to raise avg lead score above 55

🔴 Review:
• Housing.com: ₹90K spend, 0 bookings this month. Consider downgrading
  subscription tier or pausing for 30 days and re-evaluating.
• Instagram Ads: 22 leads, 0 bookings. Audience targeting review recommended.

Total potential reallocation: ₹90K from Housing.com → Referral Programme
Estimated impact: +2–3 additional bookings/month at current conversion rates
```

### Trend Charts (Time-Series Views)

| Chart | X-Axis | Y-Axis | Period |
|---|---|---|---|
| CPL Trend by Channel | Week (12 weeks) | ₹ Cost per Lead | 3 months |
| Bookings by Channel | Month (6 months) | Booking count | 6 months |
| ROI Multiple by Channel | Month (6 months) | ROI × | 6 months |
| Lead Quality Score by Channel | Month (6 months) | Avg AI score | 6 months |

### Campaign-Level Drill-Down

Clicking any channel row expands to campaign-level detail:

| Campaign | Platform | Spend | Leads | CPL | Visits | Bookings | CPB |
|---|---|---|---|---|---|---|---|
| Greenview Heights — Jan 2025 | Facebook | ₹1.1L | 34 | ₹3,235 | 10 | 2 | ₹55,000 |
| Surat 2BHK Google Search | Google | ₹80K | 18 | ₹4,444 | 7 | 2 | ₹40,000 |
| Business Park Commercial | Facebook | ₹70K | 13 | ₹5,385 | 4 | 0 | — |
| Vesu Locality Awareness | Instagram | ₹80K | 22 | ₹3,636 | 6 | 0 | — |

### Page Layout
**Top Bar:** Total marketing spend this month · Total bookings from paid channels · Blended CPB · Best ROI channel badge  
**Main Table:** Channel performance table — all 10 channels with full metrics, sortable by CPB  
**Right Panel:** AI budget recommendation card (auto-generated, shown alongside table)  
**Bottom Left:** CPL trend chart by channel (12-week time series, recharts line chart)  
**Bottom Right:** ROI comparison bar chart — all channels ranked by ROI multiple  

### Key UI Elements
- **CPB ranking sort** — table default-sorted by Cost Per Booking (ascending) — best ROI at top
- **ROI badge** — colour-coded multiplier: >5× green, 2–5× amber, <2× red, 0× grey
- **AI recommendation card** — prominent call-out box with increase / maintain / review verdicts
- **Attribution model toggle** — switch between First Touch / Last Touch / Multi-Touch — table updates live
- **Campaign drill-down expand** — click row arrow to expand to campaign-level table
- **Budget reallocation calculator** — drag spend from one channel to another to see projected booking impact

### Why It Matters
Most real estate companies spend ₹3–5L per month across portals and ads with no idea which spend generates bookings. This dashboard makes it impossible to hide poor channel performance — and makes the case for reallocation decisions with data, not gut feel.

---

## Page 7 — Sub-Module 5.6: Executive Weekly Briefing

### What It Is
An **AI-compiled executive intelligence brief** delivered every Monday morning at 7:30 AM to Fortiv Solutions' leadership — summarising the prior week's performance, flagging risks and opportunities, and recommending priority actions, with zero manual preparation required.

### Delivery Schedule

| Item | Detail |
|---|---|
| Delivery Day | Every Monday |
| Delivery Time | 7:30 AM |
| Delivery Channels | WhatsApp (5-point summary) + Email (full PDF) |
| Compilation Time | Automated — compiles 6:00–7:25 AM Monday |
| Length | 2-page PDF (email) + 8-line WhatsApp summary |
| Recipients | Directors / Founders / Management (configurable list) |

### Brief Sections — Full PDF

| Section | Content | Data Sources |
|---|---|---|
| Week in Numbers | 6 KPIs: revenue, bookings, visits, leads, CPB, pipeline value | M4.5, M5.1, M5.5 |
| vs Last Week | Every KPI with directional trend ▲ / ▼ vs prior week | Historical M5.1 |
| Deal Highlights | Biggest wins (bookings closed) + biggest risks (stuck deals, deals at risk) | M4.5 |
| Team Pulse | Top performer, any under-performance flags, HR notes if applicable | M5.1, M7 |
| Market Signals | Competitor movement, new project launches in target localities | M3.6 |
| Compliance Alerts | RERA deadlines in next 30 days, any overdue items | M6.3 |
| Finance Snapshot | Collections this week, outstanding receivables, payment defaults | M11 |
| Priority Actions | AI-generated top 5 recommended actions for the week ahead | AI synthesis |

### AI-Generated Priority Actions Logic

The Priority Actions section is AI-compiled by analysing all module data and identifying the 5 highest-impact actions management should take this week:

| Priority Signal | Example Action Generated |
|---|---|
| Stuck deal >21 days in Negotiation | "Follow up personally on Deepak Trivedi deal — 19 days in Negotiation. Priya Rana flagged price objection." |
| Inventory stalling (>60 days unsold) | "Launch incentive scheme for 3BHK Tower B — 11 units slow-moving at 67 days avg. Recommend free parking offer." |
| Channel ROI anomaly | "Housing.com delivered 0 bookings in January on ₹90K spend. Review subscription renewal." |
| Forecast shortfall alert | "30-day forecast is ₹0.6Cr below target. Consider adding 1 agent for Vadodara territory." |
| RERA deadline approaching | "Greenview Heights QPR due 31 January — 11 days away. Ensure M9 construction data is updated." |

### WhatsApp Brief Format (8-Line Summary)

```
📋 *Fortiv Solutions — Executive Brief*
*Week of 13–19 January 2025*

📈 Revenue (Week):     ₹1.12 Cr (▲ +18% vs last week)
🏠 Bookings:           2 (Greenview Heights — 2BHK)
👥 Site Visits:        18 completed (▲ +3)
🔥 Pipeline Value:     ₹4.2 Cr (23 active deals)
📢 New Leads:          84 (CPB: ₹58,000 best channel: Referral)
⚠️ Risk:              Deepak Trivedi deal stuck 19 days · 3BHK inventory slow

*Top Priority This Week:*
1. Personal follow-up on Trivedi deal (Priya Rana)
2. Launch 3BHK scheme — Tower B going slow
3. RERA QPR due Jan 31 — start data compilation

Full brief in email 📩
```

### Full PDF Sample — Week in Numbers Section

| KPI | This Week | Last Week | Change | vs Monthly Avg |
|---|---|---|---|---|
| Revenue (Bookings) | ₹1.12 Cr | ₹0.95 Cr | ▲ +18% | ▲ +6% |
| Bookings | 2 | 1 | ▲ +100% | On target |
| Site Visits | 18 | 15 | ▲ +20% | ▲ +8% |
| New Leads | 84 | 71 | ▲ +18% | On target |
| Contact Rate | 77% | 74% | ▲ +3pp | On target |
| Pipeline Value | ₹4.2 Cr | ₹3.8 Cr | ▲ +10.5% | Strong |

### Brief Record Parameters

| Field | Description | Example |
|---|---|---|
| `brief_id` | Unique brief identifier | `brief_20250120_W03` |
| `week_number` | ISO week number | Week 3, 2025 |
| `period_start` | Week start date | 13/01/2025 |
| `period_end` | Week end date | 19/01/2025 |
| `compiled_at` | When AI compilation completed | 20/01/2025 07:22:41 |
| `delivered_at` | Delivery timestamp | 20/01/2025 07:30:00 |
| `whatsapp_delivered` | WhatsApp delivery confirmation | ✓ |
| `email_delivered` | Email delivery confirmation | ✓ 3/3 recipients |
| `pdf_pages` | PDF length | 2 pages |
| `priority_actions_count` | Number of AI actions generated | 5 |
| `data_sources_pulled` | Modules that fed this brief | M4.5, M5.1, M5.5, M6.3, M11 |
| `management_opened` | All recipients opened the brief | ✓ |

### Page Layout
**Top Bar:** Briefs delivered (year to date) · Last brief date · Next brief date · Average open rate  
**Main Area Left (50%):** Brief preview — rendered PDF preview in-browser, navigable by section  
**Main Area Right (50%):** Priority actions panel — current week's 5 AI-generated action items with source reasoning  
**Bottom Left:** Section data freshness — which module supplied which section + timestamp  
**Bottom Right:** Historical brief log — past 8 weeks with open rates and action completion tracking  

### Mock Historical Brief Log

| Week | Period | Delivered | WA Opened | Email Opened | Actions Actioned |
|---|---|---|---|---|---|
| W03 2025 | 13–19 Jan | 20 Jan 07:30 | ✓ | ✓ 3/3 | 3 of 5 |
| W02 2025 | 06–12 Jan | 13 Jan 07:30 | ✓ | ✓ 3/3 | 4 of 5 |
| W01 2025 | 30 Dec–05 Jan | 06 Jan 07:30 | ✓ | ✓ 2/3 | 2 of 5 |
| W52 2024 | 23–29 Dec | 30 Dec 07:30 | ✓ | ✓ 3/3 | 5 of 5 |

### Key UI Elements
- **In-browser PDF preview** — management can preview the full brief before delivery
- **Priority actions card** — top-right panel, 5 action items each with source signal and urgency colour
- **Action tracking checkboxes** — management can mark actions as completed; completion rate tracked over time
- **Section data freshness indicator** — each brief section shows "data as of [timestamp]" tooltip
- **Next brief countdown** — "Next executive brief in: 5 days 16 hours" timer on dashboard
- **WhatsApp + Email delivery confirmation** — green ticks showing both channels confirmed delivered

### Why It Matters
Senior leadership in most real estate companies spend Sunday evening manually pulling data and preparing for Monday. This module delivers 2 hours back every week, ensures complete situational awareness before the week begins, and generates priority actions that management can act on immediately — not discover three weeks later.

---

## Complete Module 5 — Master Parameter Reference

### All Data Fields Across M5

| Field Name | Type | Sub-module | Description |
|---|---|---|---|
| `report_id` | UUID | 5.4 | Investor report identifier |
| `brief_id` | UUID | 5.6 | Executive brief identifier |
| `agent_id` | String | 5.1 | Sales agent identifier |
| `agent_name` | String | 5.1 | Agent full name |
| `leads_assigned` | Number | 5.1 | Leads allocated to agent today |
| `calls_attempted` | Number | 5.1 | Outbound call attempts |
| `calls_connected` | Number | 5.1 | Calls successfully connected |
| `call_connect_rate` | % | 5.1 | Connects / Attempts |
| `site_visits_conducted` | Number | 5.1 | Visits completed |
| `follow_ups_sent` | Number | 5.1 | Follow-up messages sent |
| `bookings_achieved` | Number | 5.1 | Bookings today |
| `revenue_generated` | ₹L | 5.1 | Revenue from today's bookings |
| `response_time_avg_min` | Number | 5.1 | Avg minutes to first contact |
| `portal_response_rate` | % | 5.1 | Portal leads responded within SLA |
| `forecast_30d_bookings` | Number | 5.2 | Predicted bookings — 30 days |
| `forecast_60d_bookings` | Number | 5.2 | Predicted bookings — 60 days |
| `forecast_90d_bookings` | Number | 5.2 | Predicted bookings — 90 days |
| `forecast_30d_revenue` | ₹Cr | 5.2 | Predicted revenue — 30 days |
| `forecast_60d_revenue` | ₹Cr | 5.2 | Predicted revenue — 60 days |
| `forecast_90d_revenue` | ₹Cr | 5.2 | Predicted revenue — 90 days |
| `confidence_low` | ₹Cr | 5.2 | Forecast lower bound |
| `confidence_high` | ₹Cr | 5.2 | Forecast upper bound |
| `model_accuracy_pct` | % | 5.2 | Trailing 6-month forecast accuracy |
| `seasonal_adjustment` | % | 5.2 | Seasonal uplift/deflation applied |
| `scenario_name` | String | 5.2 | What-if scenario label |
| `pipeline_weighted_value` | ₹Cr | 5.2 | Sum of all deals × stage probability |
| `unit_id` | String | 5.3 | Specific unit identifier |
| `project_name` | String | 5.3, 5.4 | Project name |
| `tower` | String | 5.3 | Tower designation |
| `configuration` | Enum | 5.3 | 1BHK / 2BHK / 3BHK / 4BHK / Commercial |
| `floor_range` | String | 5.3 | Floor grouping |
| `total_units` | Number | 5.3 | Total inventory in category |
| `units_sold` | Number | 5.3 | Sold to date |
| `units_available` | Number | 5.3 | Remaining available |
| `avg_days_on_market` | Number | 5.3 | Average days to sell |
| `velocity_class` | Enum | 5.3 | Fast / Normal / Slow / Stalled |
| `comparable_sold_price` | ₹/sq ft | 5.3 | Nearby comparable sold price |
| `price_recommendation` | String | 5.3 | Suggested price range |
| `scheme_active` | Boolean | 5.3 | Incentive scheme running |
| `scheme_impact_pct` | % | 5.3 | Velocity change post-scheme |
| `active_prospects` | Number | 5.3 | Leads being pitched this unit |
| `investor_tier` | Enum | 5.4 | Seed / Institutional / Equity |
| `report_period` | String | 5.4 | Reporting month/quarter |
| `report_type` | Enum | 5.4 | Monthly / Quarterly / Flash / Ad-hoc |
| `recipients_count` | Number | 5.4 | Investors on distribution list |
| `email_open_rate` | % | 5.4 | % recipients who opened email |
| `portal_uploaded` | Boolean | 5.4 | Uploaded to M10 investor portal |
| `channel_name` | String | 5.5 | Marketing channel label |
| `channel_type` | Enum | 5.5 | Portal / Paid Social / Paid Search / Organic / Offline |
| `spend` | ₹ | 5.5 | Marketing spend on channel |
| `leads_generated` | Number | 5.5 | Leads from this channel |
| `cost_per_lead` | ₹ | 5.5 | CPL |
| `lead_quality_score_avg` | Number | 5.5 | Avg AI score of channel leads |
| `leads_to_visits_pct` | % | 5.5 | Visit conversion rate |
| `cost_per_visit` | ₹ | 5.5 | CPV |
| `leads_to_bookings_pct` | % | 5.5 | End-to-end conversion rate |
| `cost_per_booking` | ₹ | 5.5 | CPB — primary ROI metric |
| `roi_multiple` | Number | 5.5 | Revenue / Spend |
| `attribution_model` | Enum | 5.5 | First Touch / Last Touch / Linear / Time Decay |
| `brief_period_start` | Date | 5.6 | Week start date |
| `brief_period_end` | Date | 5.6 | Week end date |
| `priority_actions` | Array | 5.6 | AI-generated action items |
| `priority_actions_actioned` | Number | 5.6 | Actions marked completed by management |
| `management_opened` | Boolean | 5.6 | All recipients opened the brief |
| `data_sources_pulled` | Array | 5.6 | Module IDs that fed the brief |

---

## Mock Data Constants (Demo-Ready)

### Demo Agent Pool
```
Priya Rana      — Senior Agent     (Vesu territory · Hot leads)
Ankit Shah      — Agent            (Adajan territory · Warm leads)
Meera Patel     — Agent            (Cold leads · Nurture sequences)
Kiran Desai     — Team Lead        (Vadodara · Skyline Residences)
Rahul Modi      — Sales Manager    (Escalations · Large-ticket deals)
```

### Demo Projects
```
Project 1: Fortiv Greenview Heights, Vesu, Surat
           2BHK/3BHK · ₹48L–₹85L · RERA: P01200023XXX · Dec 2026 possession
           G+14 · 2 towers · 156 total units · 108 sold · 48 available

Project 2: Fortiv Skyline Residences, Gotri, Vadodara
           3BHK/4BHK · ₹90L–₹1.8Cr · Under Construction · G+18
           3 towers · 210 total units · 86 sold · 124 available

Project 3: Fortiv Business Park, Althan, Surat
           Commercial · ₹1.2Cr–₹4.5Cr · Ready Possession · G+8
           72 total units · 38 sold · 34 available
```

### Demo Investors / LPs
```
Investor 1: Suresh Nair         — Seed investor · Greenview Heights · ₹1.5Cr
Investor 2: Dinesh & Bhavna Patel — Individual · Greenview Heights · ₹85L
Investor 3: Skyline Capital LLP  — Institutional · Skyline Residences · ₹4.2Cr
Investor 4: Mehta Family Trust   — LP · Greenview Heights · ₹2.1Cr
```

### Demo KPI Targets (Monthly)
```
Bookings Target:       10 bookings / month
Revenue Target:        ₹6.5 Cr / month
Leads Target:          350 leads / month
Contact Rate Target:   >75%
Visit Target:          60 visits / month
Post-Visit Conversion: >25%
CPB Target:            < ₹1,00,000 blended
```

---

## Brand & Design Parameters for M5 UI

### Colour Usage

| Element | Colour | Hex |
|---|---|---|
| Page background | Dark navy | #0D1B2A |
| Card / panel background | White | #FFFFFF |
| Primary brand | Deep navy | #1A3C5E |
| Accent / links | Electric blue | #2E86AB |
| On-target / positive trend | Teal green | #1D9E75 |
| Warning / watch | Amber | #E8A838 |
| Alert / shortfall | Coral red | #D85A30 |
| Neutral / inactive | Medium grey | #9B9B9B |
| Section background | Off white | #F5F6FA |
| Chart palette (multi-series) | Blue → Green → Amber → Red | Sequential |

### Typography

| Use Case | Font |
|---|---|
| Module title, section heading | Playfair Display or DM Serif Display |
| Body text, labels, descriptions | DM Sans or Plus Jakarta Sans |
| All numbers, KPIs, ₹ values, timestamps, percentages | JetBrains Mono |

### Key Animations (Demo-Specific)

| Animation | Where | Description |
|---|---|---|
| Forecast bar update | 5.2 scenario sliders | Bars re-draw in real time as sliders move |
| Shortfall badge fade-in | 5.2 | Amber "shortfall risk" banner appears when threshold crossed |
| Inventory heatmap load | 5.3 | Cells colour in progressively on page load |
| Slow-mover pulse | 5.3 | Red cells in heatmap pulse on load |
| Report generation countdown | 5.4 | 3-minute progress bar during live report generation demo |
| ROI column sort | 5.5 | Table rows animate to new order on CPB sort |
| Priority action pop-in | 5.6 | Action items slide in sequentially on brief page load |
| Delivery confirmation tick | 5.1, 5.6 | WhatsApp double-tick animates on report send confirmation |

---

## Technical Integration Map for M5

| Sub-module | External APIs / Services | Data Flow Direction |
|---|---|---|
| 5.1 Agent Performance Report | CRM (M4), Telephony API, WhatsApp Business API, SendGrid (email) | CRM → Report Engine → WhatsApp + Email |
| 5.2 Sales Forecast Agent | M4.5 (pipeline), M1.6 (lead scores), M3 (market data), Historical bookings DB | All modules → ML model → Dashboard + Alerts |
| 5.3 Inventory Velocity Tracker | M4.5 (sales data), M11 (financials), Project master data | Sales events → Velocity engine → Dashboard + Alerts |
| 5.4 Investor Report Generator | M4.5, M9.1, M11.4, M11.5, M5.3, M6.3, Gemini/GPT-4 API, SendGrid, M10 Portal | Multi-source pull → LLM narrative → PDF → Email + Portal |
| 5.5 Marketing ROI Dashboard | Facebook Ads API, Google Ads API, M1.3 (UTM data), M4.5 (bookings) | Ad platforms → Attribution engine → Dashboard |
| 5.6 Executive Weekly Briefing | All M1–M11 modules, Gemini/GPT-4 API, WhatsApp Business API, SendGrid | All modules → LLM synthesis → WhatsApp + Email |

---

## Summary: M5 at a Glance

| Item | Detail |
|---|---|
| Module | M5 — Analytics, Forecasting & Reporting |
| Sub-modules | 6 (5.1 → 5.6) |
| Total pages | 7 (1 dashboard + 6 sub-module pages) |
| Primary data objects | Performance reports · Forecast models · Inventory velocity records · Investor reports · Channel ROI data · Executive briefs |
| Data sources | All 12 system modules |
| Key output | Zero-manual-effort intelligence delivered to every stakeholder at the right time |
| Demo focus | Live forecast scenario modelling + AI brief generating in real time |
| Design tone | Dark navy dashboard, data-dense, chart-forward, executive-grade |
| Compliance | DPDP Act 2023 · Financial data access restricted by role |
| Currency | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Date format | DD/MM/YYYY |
| Languages | English (primary) · Report Gujarati version available for local investor distribution |

---

*Real Estate AI Command Center — Module 5 Build Guide*  
*by Fortiv Solutions · fortivsolutions.in*  
*Version 2.0 · Confidential*
