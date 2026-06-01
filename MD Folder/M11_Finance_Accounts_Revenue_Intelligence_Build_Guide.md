# M11 — Finance, Accounts & Revenue Intelligence
### Real Estate AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** The complete financial nervous system for a real estate developer — from individual buyer collections to project P&L to investor reporting — all automated, accurate, and real-time.

**Document Type:** Module Build Guide & Parameter Reference  
**Module Code:** M11  
**Total Sub-Modules:** 7 (11.1 → 11.7)  
**Version:** 2.0  
**Company:** Fortiv Solutions  
**Classification:** Confidential  
**Market:** India — Gujarat Focus (Surat, Vadodara)

---

## Module Overview

### Purpose
Replace manual spreadsheet-based financial tracking with an **autonomous revenue intelligence engine** that monitors every rupee collected and spent across all projects in real time — generating demand notes, releasing commission, forecasting cash flow, and delivering board-ready reports without a single manual step.

### Core Problem Being Solved

| Pain Point | Without M11 | With M11 |
|---|---|---|
| Collections visibility | Manual Excel, 3 days out of date | Real-time dashboard, drillable to unit level |
| Demand note issuance | 2–3 days manual effort per milestone | Auto-generated same day, all buyers notified |
| Broker commission disputes | No transparency, verbal arguments | Live commission tracker, CP self-serve portal |
| Project P&L | Known only at completion | Continuously monitored throughout construction |
| Cash flow gaps | Discovered when accounts run dry | 60–90 day early warning model |
| Accounting entries | Manual double-entry in Tally | Auto-pushed with correct ledger codes |
| Financial reporting | 4–6 hours manual preparation | Auto-generated and emailed on schedule |

### Demo Wow Moment
**Show the collections dashboard updating as a payment comes in** — total collected goes up, outstanding goes down, receipt generated and sent — in real time. CFOs physically lean forward when they see this.

---

## Module-Level Parameters

| Parameter | Value |
|---|---|
| Module ID | M11 |
| Module Name | Finance, Accounts & Revenue Intelligence |
| Sub-module Count | 7 |
| Primary Output | Real-time financial dashboards, automated demand notes, P&L statements, cash flow forecasts |
| Primary Users | CFO, Finance Manager, Accounts Team, MD/CEO, Sales Manager |
| Data Refresh Rate | Real-time for collections; batch (EOD) for accounting entries |
| Accounting Integration | Tally Prime (primary) · Zoho Books (alternate) |
| Projects Covered | All active Fortiv projects — Greenview Heights, Skyline Residences, Business Park |
| Compliance | GST · TDS · PF · ESI · Professional Tax (Gujarat) · RERA · IndAS 115 |
| Currency Format | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Demo Financial Period | Q1 2025 (Jan–Mar 2025) |

---

## Module Pages & Navigation Structure

```
M11 — Finance, Accounts & Revenue Intelligence
│
├── [Page 1]  Module Dashboard / CFO Overview              ← Landing page for M11
│             (Collections KPIs, P&L snapshot, cash flow chart, pending actions)
│
├── [Page 2]  11.1  Collections & Receivables Dashboard
│             (Billed vs collected, aging buckets, overdue list, project drill-down)
│
├── [Page 3]  11.2  Demand Note Automation
│             (Milestone trigger log, demand note queue, delivery status per buyer)
│
├── [Page 4]  11.3  Broker Commission Tracker
│             (Commission ledger per broker, deal-wise breakdown, payment status)
│
├── [Page 5]  11.4  Project P&L Monitor
│             (Revenue recognition, cost tracking, margin forecast, multi-project compare)
│
├── [Page 6]  11.5  Cash Flow Forecaster
│             (90/180-day inflow-outflow model, gap alerts, scenario modelling)
│
├── [Page 7]  11.6  Tally / Accounting Sync Agent
│             (Sync log, ledger mapping, reconciliation report, error queue)
│
└── [Page 8]  11.7  Financial Report Generator
              (Report library, schedule, one-click generation, distribution log)
```

---

## Page 1 — Module Dashboard (M11 CFO Overview)

### Purpose
The landing screen for Module 11. Gives the CFO and MD an immediate, comprehensive snapshot of financial health across all projects — without opening a single spreadsheet. Everything visible in one scroll.

### Layout
- **Top Stats Bar** (5 KPI cards across)
- **Centre Left:** Monthly Collections Bar Chart (12 months)
- **Centre Right:** Project-wise P&L Summary (3 projects)
- **Bottom Left:** Cash Position Gauge (next 90 days)
- **Bottom Right:** Pending Finance Actions (action queue)

### KPI Cards (Top Stats Bar)

| Card | Metric | Mock Value | Color |
|---|---|---|---|
| Total Billed (All Projects) | Cumulative demand raised | ₹24.6 Cr | Primary Navy #1A3C5E |
| Total Collected | Payments received to date | ₹18.2 Cr | Success Green #1D9E75 |
| Collection Rate | % of billed amount collected | 74% | Accent Blue #2E86AB |
| Total Outstanding | Billed but unpaid | ₹6.4 Cr | Warning Amber #E8A838 |
| 90+ Day Overdue | Receivables overdue > 90 days | ₹1.5 Cr | Danger Red #D85A30 (pulsing) |

### Monthly Collections Bar Chart
Recharts bar chart — October 2024 to March 2025. Includes horizontal target line at ₹3.0 Cr/month.

| Month | Collected | vs Target |
|---|---|---|
| Oct 2024 | ₹2.4 Cr | ⚠️ Below |
| Nov 2024 | ₹3.1 Cr | ✅ Above |
| Dec 2024 | ₹2.8 Cr | ⚠️ Below |
| Jan 2025 | ₹3.6 Cr | ✅ Above |
| Feb 2025 | ₹3.2 Cr | ✅ Above |
| Mar 2025 | ₹3.1 Cr | ✅ Above |

### Project-wise P&L Summary (Snapshot Cards)

| Project | Revenue Recognised | Cost Incurred | Gross Margin | Margin % |
|---|---|---|---|---|
| Fortiv Greenview Heights | ₹8.4 Cr | ₹6.0 Cr | ₹2.4 Cr | 28.6% |
| Fortiv Skyline Residences | ₹6.2 Cr | ₹4.3 Cr | ₹1.9 Cr | 30.6% |
| Fortiv Business Park | ₹3.6 Cr | ₹2.8 Cr | ₹0.8 Cr | 22.2% |

### Pending Finance Actions (Actionable Queue)

| # | Action | Module Link | Priority |
|---|---|---|---|
| 1 | 3 demand notes pending milestone confirmation | M11.2 | 🔴 High |
| 2 | ₹2.8 Cr outstanding 31–60 days — 9 buyers | M11.1 | 🔴 High |
| 3 | Commission payout for 4 brokers pending approval | M11.3 | 🟡 Medium |
| 4 | Tally sync queue — 3 failed entries | M11.6 | 🟡 Medium |
| 5 | Monthly MIS Report due in 2 days | M11.7 | 🔵 Normal |

---

## Page 2 — Sub-Module 11.1: Collections & Receivables Dashboard

### What It Is
A real-time financial overview dashboard showing the **complete collections status across all projects** — total billed, collected, outstanding, aging analysis, and project-wise breakdown — accessible to finance and management at any time. Replaces a manually compiled Excel sheet that is always 3 days out of date.

### What It Does
- Tracks total billed, collected, and outstanding across all active projects simultaneously
- Project-level drill-down: same metrics per project, tower, and unit
- Monthly collections bar chart vs target over last 12 months
- Aging analysis: outstanding bucketed by overdue age with buyer count per bucket
- Overdue buyer list: drillable, actionable, with recommended next action per account
- Real-time update: when a payment is logged, the dashboard values update immediately
- Alert: when 90+ day bucket exceeds 10% of total billed → Finance Director alert

### Page Layout
**Top Stats Bar:** 5 KPI cards (Total Billed / Collected / Collection Rate % / Outstanding / 90+ Day Overdue)  
**Centre Left:** Aging Analysis Table  
**Centre Right:** Project Drill-Down Summary  
**Bottom:** Overdue Buyer Action List (sortable table)

### Aging Analysis Buckets

| Aging Bucket | Outstanding Amount | Buyer Count | % of Total Outstanding |
|---|---|---|---|
| Not Yet Due (Current) | ₹1.6 Cr | 34 buyers | 25% |
| 0–30 Days Overdue | ₹2.1 Cr | 18 buyers | 33% |
| 31–60 Days Overdue | ₹2.8 Cr | 9 buyers | 44% |
| 61–90 Days Overdue | ₹0.4 Cr | 3 buyers | 6% |
| 90+ Days Overdue | ₹1.5 Cr | 4 buyers | 23% |

> **Alert Threshold:** 90+ Day overdue at 23.4% of outstanding — exceeds 10% policy threshold. Finance Director alerted automatically.

### Project-wise Collections Detail

| Project | Billed | Collected | Outstanding | Collection % | Status |
|---|---|---|---|---|---|
| Fortiv Greenview Heights | ₹13.8 Cr | ₹10.6 Cr | ₹3.2 Cr | 76.8% | ✅ On Track |
| Fortiv Skyline Residences | ₹7.4 Cr | ₹5.4 Cr | ₹2.0 Cr | 73.0% | ⚠️ Watch |
| Fortiv Business Park | ₹3.4 Cr | ₹2.2 Cr | ₹1.2 Cr | 64.7% | 🔴 Action Required |

### Overdue Buyer Action List (Mock Data — Top 10 Overdue Accounts)

| # | Buyer Name | Unit | Project | Amount Overdue | Days Overdue | Last Contact | RM | Recommended Action |
|---|---|---|---|---|---|---|---|---|
| 1 | Rajesh Patel | A-804 | Greenview Heights | ₹8.4L | 62 days | 12/01/2025 | Priya Rana | Call + formal notice |
| 2 | Vikram Joshi | B-1201 | Skyline Residences | ₹14.2L | 91 days | 05/01/2025 | Rahul Modi | Legal notice |
| 3 | Deepak Trivedi | GH-203 | Greenview Heights | ₹6.8L | 47 days | 18/01/2025 | Ankit Shah | WhatsApp reminder |
| 4 | Sunita Mehta | C-502 | Greenview Heights | ₹5.2L | 34 days | 22/01/2025 | Priya Rana | Call today |
| 5 | Mahesh Khanna | S-1104 | Skyline Residences | ₹18.6L | 112 days | 28/12/2024 | Kiran Desai | Legal notice |
| 6 | Anita Gujarati | A-302 | Greenview Heights | ₹4.1L | 28 days | 25/01/2025 | Meera Patel | WhatsApp + call |
| 7 | Sanjay Kapoor | BP-401 | Business Park | ₹22.4L | 88 days | 08/01/2025 | Rahul Modi | Director call |
| 8 | Pooja Sharma | A-607 | Greenview Heights | ₹5.6L | 19 days | 28/01/2025 | Ankit Shah | Reminder SMS |
| 9 | Kavita Agarwal | B-904 | Skyline Residences | ₹9.8L | 55 days | 15/01/2025 | Kiran Desai | Formal letter |
| 10 | Suresh Nair | BP-102 | Business Park | ₹31.5L | 143 days | 19/12/2024 | Rahul Modi | Refer to legal |

### Key UI Elements
- **Real-time payment update animation** — when a payment lands, the Collected card ticks up and Outstanding ticks down with a green flash
- **"Send WhatsApp Reminder" button** — per row in overdue list — one-click outreach
- **Color-coded aging rows** — Current = white, 0–30 = pale yellow, 31–60 = amber, 61–90 = orange, 90+ = red
- **Collection rate gauge** — circular gauge showing 74% collection rate with green arc

---

## Page 3 — Sub-Module 11.2: Demand Note Automation

### What It Is
An automated demand note generation and delivery system that creates and sends **payment demand letters to all affected buyers at the correct time** — triggered by construction milestones, time-based payment schedules, or specific events — ensuring collections happen on schedule without any manual effort.

### What It Does
- Milestone trigger: when M9.1 marks a construction milestone complete → auto-identifies all units with a payment tranche linked to that milestone → generates demand notes for all affected buyers in a single batch run
- Pulls buyer details, unit details, amount (per sale agreement), due date, bank details, RERA reference
- Generates professional branded PDF demand note per buyer
- Delivers via WhatsApp (primary), email (secondary), and buyer portal (M10.1) simultaneously
- Tracks acknowledgement: did the buyer open/receive the demand note?
- Activates M10.2 payment reminder sequence if payment not received by due date

### Demand Note Payment Types & Templates

| Payment Type | Triggered By | Payment Due |
|---|---|---|
| Booking Amount | Booking confirmed in CRM | Immediate |
| Foundation | M9.1: Foundation milestone complete | 30 days from milestone |
| Plinth Level | M9.1: Plinth milestone complete | 30 days from milestone |
| Floor Slab (per floor) | M9.1: Slab casting milestone | 30 days from milestone |
| Brickwork | M9.1: Brickwork milestone | 30 days from milestone |
| Plastering | M9.1: Plastering milestone | 30 days from milestone |
| Flooring & Finishing | M9.1: Finishing milestone | 30 days from milestone |
| Pre-Possession | OC received + M9.7 possession schedule set | 15 days |
| On Possession | M9.7: Possession clearance confirmed | On handover date |

### Demand Note Fields (Per Document)

| Field | Source | Example |
|---|---|---|
| `buyer_name` | CRM — deal record | Rajesh Patel |
| `buyer_address` | CRM — KYC data | 12, Patel Nagar, Surat — 395007 |
| `unit_number` | CRM — unit allocation | Tower A, Unit 804, Floor 8 |
| `project_name` | Project database | Fortiv Greenview Heights, Vesu, Surat |
| `rera_number` | Project database | GUJRERA/GJ/R1/SURAT/2024/12345 |
| `configuration` | Unit database | 2BHK — 1,180 sq ft |
| `total_consideration` | Sale agreement | ₹57,50,000 |
| `payment_stage` | Milestone trigger | Floor Slab — 8th Floor |
| `amount_due` | Sale agreement % | ₹4,60,000 |
| `amount_in_words` | Auto-generated | Rupees Four Lakhs Sixty Thousand Only |
| `due_date` | Milestone date + 30 days | 15/02/2025 |
| `bank_account_name` | Finance master data | Fortiv Solutions Pvt Ltd |
| `bank_name` | Finance master data | HDFC Bank |
| `account_number` | Finance master data | XXXX XXXX 4821 |
| `ifsc_code` | Finance master data | HDFC0001234 |
| `upi_id` | Finance master data | fortiv.solutions@hdfcbank |
| `cumulative_paid` | Payment history | ₹18,40,000 (32% of total) |
| `balance_outstanding` | Derived | ₹39,10,000 |
| `demand_note_number` | Auto-generated serial | DN-GH-2025-0847 |
| `issued_date` | System timestamp | 16/01/2025 |
| `issued_by` | System | Finance Team — Fortiv Solutions |

### Page Layout
**Top:** Milestone Trigger Log — last 5 milestones with demand note batch counts  
**Centre:** Demand Note Queue — status table of all notes issued in current quarter  
**Bottom:** Delivery Status Panel — per-buyer delivery confirmation tracker

### Milestone Trigger Log (Recent Activity)

| Date | Milestone | Project | Tower | Units Affected | Demand Notes Generated | Status |
|---|---|---|---|---|---|---|
| 16/01/2025 | 8th Floor Slab Casting | Greenview Heights | Tower A | 24 units | 24 notes | ✅ All Delivered |
| 08/01/2025 | Brickwork 4th–6th Floor | Greenview Heights | Tower B | 18 units | 18 notes | ✅ All Delivered |
| 02/01/2025 | Plastering G+1–G+3 | Business Park | Block C | 12 units | 12 notes | ⚠️ 2 Undelivered |
| 24/12/2024 | Foundation Complete | Skyline Residences | Tower 1 | 48 units | 48 notes | ✅ All Delivered |
| 12/12/2024 | Booking Confirmation | Greenview Heights | All | 6 units | 6 notes | ✅ All Delivered |

### Demand Note Status Table (Mock Data — Current Quarter)

| # | Demand Note # | Buyer | Unit | Amount | Issued | Due Date | Payment Status | Delivery |
|---|---|---|---|---|---|---|---|---|
| 1 | DN-GH-2025-0847 | Rajesh Patel | A-804 | ₹4.6L | 16/01 | 15/02 | 🔴 Overdue | ✅ WhatsApp |
| 2 | DN-GH-2025-0848 | Priya Shah | A-1102 | ₹4.6L | 16/01 | 15/02 | ✅ Paid 28/01 | ✅ WhatsApp |
| 3 | DN-GH-2025-0849 | Deepak Trivedi | A-906 | ₹4.6L | 16/01 | 15/02 | 🟡 Due in 8 days | ✅ WhatsApp |
| 4 | DN-GH-2025-0850 | Sunita Mehta | A-301 | ₹4.6L | 16/01 | 15/02 | ✅ Paid 05/02 | ✅ Email |
| 5 | DN-GH-2025-0851 | Anita Gujarati | A-205 | ₹4.6L | 16/01 | 15/02 | 🟡 Due in 8 days | ✅ Portal |
| 6 | DN-BP-2025-0312 | Sanjay Kapoor | BP-401 | ₹22.4L | 02/01 | 01/02 | 🔴 Overdue 12 days | ⚠️ Undelivered |

### Key UI Elements
- **"Generate Demand Note" button** — manual trigger for any unit/milestone outside the automatic flow
- **Batch status badge** — \"24/24 delivered\" (green) or \"22/24 delivered — 2 failed\" (amber)
- **PDF preview panel** — click any row to preview the full demand note PDF in-browser
- **Retry delivery button** — for undelivered notes, resend via alternate channel

---

## Page 4 — Sub-Module 11.3: Broker Commission Tracker

### What It Is
A complete channel partner commission management system that **calculates, tracks, and releases broker commissions based on deal milestone completion** — with automated commission statements, real-time CP visibility, and clean payment records. Eliminates the #1 source of broker relationship damage: commission disputes.

### What It Does
- Commission structure setup: configurable per project (e.g. 2% on booking, 1% on 50% payment, 2% on possession)
- Tracks each broker deal through payment milestones — triggers commission calculation when conditions are met
- Calculates commission amount, GST (18%), and TDS (if applicable), generating net payable
- Approval workflow: commission statement sent for accounts approval before payment
- Branded PDF commission statement per broker per deal
- Payment tracking: Pending / Approved / Paid with dates and bank reference
- Broker portal integration (M12.4): brokers see their commission status in real time
- Analytics: total liability, top-earning CPs, commission-to-revenue ratio

### Commission Structure (Per Project)

**Fortiv Greenview Heights — Commission Structure:**

| Stage | Trigger | Commission % | On Amount |
|---|---|---|---|
| Stage 1 | Booking amount paid by buyer | 2.0% | Booking amount |
| Stage 2 | 50% of total consideration paid | 1.0% | Tranche amount |
| Stage 3 | 90% of total consideration paid | 1.5% | Tranche amount |
| Stage 4 | Possession / Registration | 0.5% | Final amount |
| **Total** | **All stages cleared** | **~5.0%** | **Total consideration** |

**Fortiv Business Park — Commission Structure:**

| Stage | Trigger | Commission % | On Amount |
|---|---|---|---|
| Stage 1 | Booking amount paid | 1.5% | Booking amount |
| Stage 2 | 40% payment received | 1.0% | Tranche |
| Stage 3 | Possession | 1.5% | Final amount |
| **Total** | — | **~4.0%** | **Total consideration** |

### Commission Fields Per Record

| Field | Description | Example |
|---|---|---|
| `cp_name` | Channel partner / broker name | Rajhans Realtors |
| `cp_rera_number` | Broker RERA registration | GUJRERA/GJ/A/SURAT/2022/00234 |
| `cp_gst_number` | GST registration | 24ABCDE1234F1Z5 |
| `deal_id` | CRM deal reference | DEAL-2025-0412 |
| `buyer_name` | Buyer in the deal | Priya Shah |
| `unit_number` | Unit sold | A-1102 |
| `project` | Project name | Fortiv Greenview Heights |
| `total_consideration` | Property sale value | ₹57,50,000 |
| `commission_stage` | Payout stage | Stage 1 — Booking |
| `commission_rate` | Rate applied | 2.0% |
| `commission_amount_gross` | Gross commission | ₹1,15,000 |
| `gst_on_commission` | 18% GST | ₹20,700 |
| `tds_deducted` | TDS @10% (if applicable) | ₹11,500 |
| `net_payable` | Final amount to CP | ₹1,23,200 |
| `commission_statement_no` | Document reference | CS-2025-0187 |
| `statement_date` | Date generated | 20/01/2025 |
| `approval_status` | Accounts approval | Approved |
| `payment_date` | When paid | 25/01/2025 |
| `payment_reference` | Bank transaction ref | NEFT/HDFC/20250125/8471 |
| `bank_account` | CP bank account | HDFC XXXX8421 |

### Page Layout
**Top:** Commission Summary KPIs (4 cards)  
**Centre Left:** Broker Commission Leaderboard (bar chart)  
**Centre Right:** Commission Status Pipeline (Pending → Approved → Paid)  
**Bottom:** Deal-wise Commission Ledger (full table, filterable)

### Commission KPI Cards (Top Bar)

| Card | Metric | Mock Value | Color |
|---|---|---|---|
| Total Commission Earned (Q1 2025) | Sum of all commissions payable | ₹28.4L | Primary Navy |
| Commission Paid | Settled to brokers | ₹19.6L | Success Green |
| Commission Pending Approval | Awaiting accounts approval | ₹6.2L | Amber |
| Commission Overdue | Approved but not yet paid | ₹2.6L | Danger Red |

### Broker Commission Leaderboard (Mock Data)

| Rank | Broker Name | Deals Registered | Commission Earned | Commission Paid | Status |
|---|---|---|---|---|---|
| 🥇 1 | Rajhans Realtors | 8 | ₹6.2L | ₹6.2L | ✅ Fully Settled |
| 🥈 2 | Prime Realty | 6 | ₹4.8L | ₹3.4L | ⚠️ ₹1.4L Pending |
| 🥉 3 | Landmark Properties | 5 | ₹4.1L | ₹4.1L | ✅ Fully Settled |
| 4 | City Property Hub | 4 | ₹3.2L | ₹2.1L | ⚠️ ₹1.1L Pending |
| 5 | SNS Land Brokers | 3 | ₹2.8L | ₹2.8L | ✅ Fully Settled |
| 6 | Om Realtors | 3 | ₹2.4L | ₹0 | 🔴 Approval Pending |
| 7 | Parth Developers | 2 | ₹1.8L | ₹1.8L | ✅ Fully Settled |
| 8 | Greenfield Developers | 2 | ₹1.6L | ₹1.0L | ⚠️ ₹0.6L Pending |

### Key UI Elements
- **"Approve Commission" button** — one-click approval per statement in the pending queue
- **"Generate Statement PDF"** — on-demand branded PDF per broker per deal
- **Commission pipeline visual** — horizontal flow showing Calculated → Approved → Paid with counts at each stage
- **CP portal link badge** — shows that broker can view their own status in M12.4 portal

---

## Page 5 — Sub-Module 11.4: Project P&L Monitor

### What It Is
A live **project-level profit and loss tracking system** that monitors revenue recognition, actual costs, and projected margins throughout the project lifecycle — giving management continuous visibility into project profitability rather than discovering it only at completion.

### What It Does
- Revenue side: tracks total saleable area, units sold, total consideration, bookings collected, and milestone-linked revenue recognised per IndAS 115 / percentage completion method
- Cost side: draws from M9.2 (subcontractor payments), M9.3 (material procurement), and direct cost entries
- Calculates gross margin, EBITDA, and margin % in real time
- Trend: is margin trajectory improving or declining vs original pro-forma?
- Alert: if current margin forecast drops >3% below pro-forma → immediate alert to MD/CFO
- Multi-project comparison: side-by-side P&L for all active projects

### Revenue Recognition Method
Revenue is recognised using the **Percentage Completion Method (IndAS 115)**:

```
Revenue Recognised = (% Construction Complete) × (Total Units Sold × Avg Selling Price)
```

| % Complete | Revenue Recognisable | Notes |
|---|---|---|
| 0–25% | 0% | No revenue until foundation complete |
| 25–50% | Proportional | Recognised as % advances |
| 50–75% | Proportional | Major recognition phase |
| 75–100% | Full remaining | Final recognition at OC/possession |

### P&L Fields Per Project

| Field | Description | Greenview Heights | Skyline Residences | Business Park |
|---|---|---|---|---|
| Total Units | Total saleable units | 240 | 180 | 48 |
| Units Sold | Confirmed bookings | 186 | 122 | 38 |
| Unsold Units | Available inventory | 54 | 58 | 10 |
| Total Sales Value | Consideration for sold units | ₹18.4 Cr | ₹14.2 Cr | ₹8.6 Cr |
| Construction % Complete | Overall project progress | 72% | 48% | 95% |
| Revenue Recognised | Per % completion method | ₹8.4 Cr | ₹6.2 Cr | ₹3.6 Cr |
| Land Cost | Acquisition + stamp duty | ₹2.1 Cr | ₹3.4 Cr | ₹1.8 Cr |
| Construction Cost (Actual) | Civil + MEP + finishing (to date) | ₹3.2 Cr | ₹2.8 Cr | ₹1.6 Cr |
| Sales & Marketing Cost | Ad spend + commissions | ₹0.42 Cr | ₹0.38 Cr | ₹0.22 Cr |
| Overheads Allocated | Admin + finance charges | ₹0.28 Cr | ₹0.22 Cr | ₹0.18 Cr |
| Total Cost to Date | Sum of all costs | ₹6.0 Cr | ₹6.8 Cr | ₹3.8 Cr |
| Gross Margin | Revenue – Direct costs | ₹2.4 Cr | ₹1.9 Cr | ₹0.8 Cr |
| Gross Margin % | | 28.6% | 30.6% | 22.2% |
| Pro-forma Margin % | Original budgeted target | 30.0% | 30.0% | 26.0% |
| Variance vs Budget | Actual vs pro-forma | ⚠️ -1.4% | ✅ +0.6% | 🔴 -3.8% |
| Projected Final Margin % | Based on cost-to-complete | 29.2% | 31.4% | 23.8% |

### Page Layout
**Top:** Project selector tabs (Greenview Heights | Skyline Residences | Business Park | All Projects)  
**Left Panel (50%):** P&L Waterfall Chart — revenue down to EBITDA  
**Right Panel (50%):** Cost Category Donut + Line chart (margin trend over 6 months)  
**Bottom:** Alert banner if any project is tracking >3% below pro-forma

### Margin Alert Logic

| Condition | Action | Alert Recipient |
|---|---|---|
| Margin forecast < Pro-forma by 1–3% | ⚠️ Warning flag on dashboard | Finance Manager |
| Margin forecast < Pro-forma by >3% | 🔴 Immediate WhatsApp + email alert | CFO + MD |
| Margin forecast < Pro-forma by >5% | 🔴 Urgent + board escalation flag | CFO + MD + Board |

> **Current Alert:** Fortiv Business Park is tracking 3.8% below pro-forma. CFO has been notified. Cost-to-complete review recommended.

### Key UI Elements
- **Waterfall chart** — visual P&L showing revenue, each cost category, and resulting margin
- **Margin trend line** — 6-month chart showing margin % movement (is the project improving or declining?)
- **Traffic light badge** per project — Green (on target) / Amber (within 3%) / Red (>3% below)
- **"Run Scenario" button** — opens modeller: \"What if civil cost increases by 5%?\" → updated forecast instantly

---

## Page 6 — Sub-Module 11.5: Cash Flow Forecaster

### What It Is
A forward-looking cash flow model that **projects expected inflows and outflows for the next 90 and 180 days** — identifying funding gaps before they occur and giving management enough warning to take corrective action. The real estate equivalent of a financial weather forecast.

### What It Does
- Inflow projections: based on upcoming buyer installments due (from M10.2 payment schedules), weighted by historical collection rates
- Outflow projections: scheduled subcontractor payments (M9.2), material procurement orders (M9.3), payroll (M7.4), statutory payments, loan repayments
- Net cash position: rolling daily balance chart for next 180 days
- Funding gap alerts: when projected cash balance drops below minimum threshold → CFO alert
- Scenario modelling: delay scenarios, collection rate changes, cost overrun impact
- Bridge financing briefing: when gap is identified 60+ days ahead, auto-drafts lender brief

### Cash Flow Projection Parameters

| Parameter | Value | Source |
|---|---|---|
| Opening Cash Balance (01/02/2025) | ₹2.84 Cr | Tally Prime |
| Collection Probability Rate — Current buyers | 78% | Historical (M11.1) |
| Collection Probability Rate — Overdue 31–60 days | 55% | Historical (M11.1) |
| Collection Probability Rate — Overdue 90+ days | 30% | Historical (M11.1) |
| Minimum Cash Threshold | ₹0.75 Cr | CFO policy |
| Alert Lead Time | 21 days | CFO policy |

### 90-Day Cash Flow Summary (Feb–Apr 2025)

| Period | Projected Inflows | Projected Outflows | Net | Cumulative Balance |
|---|---|---|---|---|
| Feb 2025 – Week 1 | ₹0.84 Cr | ₹0.62 Cr | +₹0.22 Cr | ₹3.06 Cr |
| Feb 2025 – Week 2 | ₹1.12 Cr | ₹0.88 Cr | +₹0.24 Cr | ₹3.30 Cr |
| Feb 2025 – Week 3 | ₹0.48 Cr | ₹1.42 Cr | -₹0.94 Cr | ₹2.36 Cr |
| Feb 2025 – Week 4 | ₹0.72 Cr | ₹0.56 Cr | +₹0.16 Cr | ₹2.52 Cr |
| Mar 2025 – Week 1 | ₹1.24 Cr | ₹0.84 Cr | +₹0.40 Cr | ₹2.92 Cr |
| Mar 2025 – Week 2 | ₹0.36 Cr | ₹1.68 Cr | -₹1.32 Cr | ₹1.60 Cr |
| Mar 2025 – Week 3 | ₹0.92 Cr | ₹0.74 Cr | +₹0.18 Cr | ₹1.78 Cr |
| Mar 2025 – Week 4 | ₹0.28 Cr | ₹1.24 Cr | -₹0.96 Cr | ₹0.82 Cr |
| Apr 2025 – Week 1 | ₹0.18 Cr | ₹0.86 Cr | -₹0.68 Cr | ₹0.14 Cr ⚠️ |
| Apr 2025 – Week 2 | ₹1.42 Cr | ₹0.64 Cr | +₹0.78 Cr | ₹0.92 Cr |

> **⚠️ Gap Alert: April Week 1 balance projected at ₹0.14 Cr — below ₹0.75 Cr threshold. Bridge funding or accelerated collections required. CFO notified 21 days in advance.**

### Outflow Categories (90-Day Breakdown)

| Outflow Category | Feb 2025 | Mar 2025 | Apr 2025 | Source |
|---|---|---|---|---|
| Subcontractor Payments | ₹0.84 Cr | ₹1.12 Cr | ₹0.68 Cr | M9.2 |
| Material Procurement | ₹0.42 Cr | ₹0.56 Cr | ₹0.38 Cr | M9.3 |
| Payroll (All Staff) | ₹0.28 Cr | ₹0.28 Cr | ₹0.28 Cr | M7.4 |
| Broker Commissions | ₹0.19 Cr | ₹0.14 Cr | ₹0.08 Cr | M11.3 |
| Statutory Payments | ₹0.12 Cr | ₹0.12 Cr | ₹0.12 Cr | Finance |
| Loan EMI | ₹0.24 Cr | ₹0.24 Cr | ₹0.24 Cr | Finance |
| Marketing & Ads | ₹0.18 Cr | ₹0.22 Cr | ₹0.14 Cr | Marketing |
| **Total Outflows** | **₹2.27 Cr** | **₹2.68 Cr** | **₹1.92 Cr** | |

### Scenario Modelling Options

| Scenario | Question | Impact |
|---|---|---|
| Collection Delay | What if 30% of March collections are delayed by 15 days? | Apr Week 1 gap worsens by ₹0.38 Cr |
| Cost Overrun | What if civil costs increase 8% in Q2? | Net 90-day shortfall +₹0.42 Cr |
| Accelerated Sales | What if 10 new bookings close in Feb? | Apr gap eliminated; surplus ₹0.34 Cr |
| Bridge Loan | What if ₹1 Cr bridge loan received Mar Week 1? | All gaps covered with ₹0.28 Cr buffer |

### Page Layout
**Top:** Current cash position card + 90-day net cash summary  
**Centre:** Interactive line chart — day-by-day projected balance for 180 days (red zone below threshold)  
**Bottom Left:** Inflow projections table  
**Bottom Right:** Outflow projections table + Scenario selector buttons

### Key UI Elements
- **Gap alert banner** — red banner with days-until-gap countdown and recommended actions
- **Threshold line** — horizontal red dashed line at ₹0.75 Cr on the chart
- **Scenario toggle buttons** — \"Delay 30% Collections\" / \"Add ₹1 Cr Bridge\" — instantly redraws the chart
- **"Draft Lender Brief" button** — when gap identified, auto-generates a 1-page funding brief for CFO to send to bank

---

## Page 7 — Sub-Module 11.6: Tally / Accounting Sync Agent

### What It Is
An automated accounting integration that **pushes all financial transactions from the Command Center into Tally Prime (or Zoho Books) with correct ledger mapping** — eliminating double-entry data work and ensuring the accounting system is always current to within one business day.

### What It Does
- Pushes all transaction types automatically with correct ledger codes
- GST classification: correctly applies CGST/SGST/IGST codes per transaction type
- Real-time sync for high-value transactions (buyer receipts); batch EOD for operational entries
- Daily reconciliation report: transactions in Command Center vs entries in Tally — discrepancies flagged
- Error queue: failed syncs queued and retried automatically; finance team alerted if queue builds

### Transaction Types & Ledger Mapping

| Transaction Type | Trigger | Tally Ledger (Debit) | Tally Ledger (Credit) | GST |
|---|---|---|---|---|
| Buyer Payment Received | Payment confirmed in M11.1 | Bank / Cash | Advance from Buyers | NIL (not yet revenue) |
| Demand Note Issued | Demand note generated in M11.2 | Debtors — Buyers | Advance Billing | NIL |
| Revenue Recognition | % completion milestone | Advance from Buyers | Revenue — Project Sales | GST as applicable |
| Subcontractor Payment | M9.2 milestone payment | Subcontractor Cost — Civil/MEP | Bank | CGST + SGST |
| Material Purchase | M9.3 purchase order | Material Cost — Project | Creditors / Bank | CGST + SGST |
| Broker Commission | M11.3 commission approved | Sales Commission | Bank | CGST + SGST |
| Payroll Disbursement | M7.4 payroll run | Salary Expense (per grade) | Bank | NIL |
| PF Employer Contribution | M7.4 payroll run | PF Expense | PF Payable | NIL |
| ESI Contribution | M7.4 payroll run | ESI Expense | ESI Payable | NIL |
| Advance Tax Payment | Finance manual entry | Advance Tax | Bank | NIL |
| TDS Deducted (from CP) | M11.3 payment | TDS Payable | Bank | NIL |

### Sync Log Parameters (Per Entry)

| Field | Description | Example |
|---|---|---|
| `sync_id` | Unique sync record ID | SYNC-20250116-08472 |
| `transaction_type` | Type of financial transaction | Buyer Payment Received |
| `transaction_ref` | Source system reference | PAY-GH-2025-1284 |
| `amount` | Transaction amount in ₹ | ₹4,60,000 |
| `debit_ledger` | Tally debit ledger | Bank — HDFC Current |
| `credit_ledger` | Tally credit ledger | Advance from Buyers |
| `cost_centre` | Project allocation | Fortiv Greenview Heights |
| `gst_applicable` | GST flag | No |
| `voucher_type` | Tally voucher type | Receipt |
| `voucher_number` | Tally-assigned voucher # | RV/2025/01/4821 |
| `sync_time` | When pushed to Tally | 16/01/2025 14:32:18 |
| `sync_status` | Result | ✅ Success |
| `error_code` | If failed | — |

### Daily Reconciliation Report (Mock — 16/01/2025)

| Metric | Count | Amount |
|---|---|---|
| Transactions in Command Center today | 28 | ₹18.4L |
| Successfully pushed to Tally | 25 | ₹17.2L |
| Failed / Queued | 3 | ₹1.2L |
| Reconciliation Status | ⚠️ 3 items pending | — |

### Failed Transaction Queue (Mock)

| # | Transaction | Amount | Error | Action |
|---|---|---|---|---|
| 1 | Subcontractor payment — Ravi Plumbing | ₹0.84L | Ledger name mismatch | Fix ledger name → Retry |
| 2 | Material purchase — JSW Steel | ₹0.28L | GST code not found | Update GST master → Retry |
| 3 | Buyer receipt — Kavita Agarwal | ₹0.08L | Network timeout | Auto-retry scheduled 6PM |

### Page Layout
**Top:** Sync health cards (Today's transactions, Success rate, Queue depth, Last sync time)  
**Centre:** Live sync log feed — transactions pushed in last 24 hours with status  
**Bottom Left:** Failed queue table with fix actions  
**Bottom Right:** Reconciliation summary donut (Synced vs Failed vs Pending)

### Key UI Elements
- **Sync status pulsing indicator** — green dot pulsing when sync is active, amber when queue building
- **"Retry All" button** — bulk retry all failed transactions in the queue
- **Ledger mapping configuration** — admin panel to view and edit ledger mapping rules
- **Last successful Tally sync timestamp** — shown prominently on the page header

---

## Page 8 — Sub-Module 11.7: Financial Report Generator

### What It Is
An automated report generation system that **produces all standard finance department reports on schedule without manual preparation** — monthly MIS, collections reports, aging analysis, project P&L statements, and board pack financials — delivered to the right people at the right time, every time.

### What It Does
- Generates scheduled reports automatically on set dates
- Pulls live data from all M11 sub-modules and relevant other modules (M5, M9, M10)
- Produces branded PDF reports with charts, tables, and written commentary
- Distributes to the correct stakeholder group via email + WhatsApp
- On-demand regeneration for any report, any date range, at any time
- Report archive: all previously generated reports stored and searchable

### Report Library (Complete Reference)

| Report Name | Frequency | Auto-Generated | Primary Audience | Pages | Data Sources |
|---|---|---|---|---|---|
| Monthly MIS Report | Monthly — 1st of month | ✅ Yes | CFO, MD, Board | 4–5 | M11.1, M11.4, M11.5 |
| Weekly Collections Report | Weekly — Monday 9AM | ✅ Yes | Finance Manager, Sales Head | 2–3 | M11.1 |
| Aging Analysis Report | Weekly — Monday 9AM | ✅ Yes | Finance Manager | 2 | M11.1 |
| Demand Note Status Report | Weekly — Friday 5PM | ✅ Yes | Finance Manager | 2 | M11.2 |
| Broker Commission Statement | Monthly — 25th | ✅ Yes | Accounts, each CP | 1 per CP | M11.3 |
| Project P&L Statement | Monthly — 1st | ✅ Yes | CFO, MD | 3 per project | M11.4 |
| Cash Flow Forecast | Fortnightly | ✅ Yes | CFO | 2 | M11.5 |
| Quarterly Board Pack | Quarterly | ✅ Yes | Board of Directors | 8–10 | All M11 modules |
| LP / Investor Report | Monthly | ✅ Yes | Investors | 5–6 | M11.4, M9.1, M5.4 |
| GSTR-3B Data Extract | Monthly — 18th | ✅ Yes | Accounts, CA | 2 | M11.6 |
| TDS Certificate (Form 16A) | Quarterly | ✅ Yes | Channel Partners | 1 per CP | M11.3, M11.6 |
| Ad-hoc / Custom Report | On demand | Manual trigger | As required | Variable | Any module |

### Monthly MIS Report — Section Structure

```
FORTIV SOLUTIONS — MONTHLY MIS REPORT
Period: January 2025

1. EXECUTIVE SUMMARY
   - Bookings: 14 units | Revenue: ₹8.2 Cr | Collections: ₹3.6 Cr | Outstanding: ₹6.4 Cr

2. SALES PERFORMANCE
   - Units booked vs target | Project-wise bookings | Agent-wise performance

3. COLLECTIONS SUMMARY
   - Total billed, collected, outstanding — month and cumulative
   - Aging analysis table | Overdue accounts summary

4. PROJECT-WISE P&L
   - Greenview Heights | Skyline Residences | Business Park
   - Revenue recognised | Cost incurred | Gross margin | vs Pro-forma

5. CASH FLOW SNAPSHOT
   - Current balance | 30-day inflow forecast | 30-day outflow forecast | Net position

6. KEY RISKS & ALERTS
   - Business Park margin 3.8% below pro-forma
   - April cash gap projected — bridge required
   - 4 buyers in 90+ day overdue — legal notice recommended

7. NEXT MONTH OUTLOOK
   - Expected collections | Upcoming milestones | Demand notes due
```

### Report Distribution Matrix

| Report | Finance Manager | CFO | MD | Sales Head | Board | Investors | Each CP |
|---|---|---|---|---|---|---|---|
| Monthly MIS | ✅ | ✅ | ✅ | Read only | ✅ | ✗ | ✗ |
| Weekly Collections | ✅ | Summary | Summary | ✅ | ✗ | ✗ | ✗ |
| Project P&L | ✅ | ✅ | ✅ | ✗ | Quarterly | Quarterly | ✗ |
| Cash Flow Forecast | ✅ | ✅ | ✅ | ✗ | ✗ | ✗ | ✗ |
| Investor Report | ✅ | ✅ | ✅ | ✗ | ✗ | ✅ | ✗ |
| Commission Statement | ✅ | ✗ | ✗ | ✗ | ✗ | ✗ | ✅ Their own |
| GSTR-3B Extract | ✅ | ✅ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Quarterly Board Pack | ✅ | ✅ | ✅ | ✗ | ✅ | ✗ | ✗ |

### Page Layout
**Top:** Report scheduler / calendar view — upcoming auto-reports  
**Centre:** Report library — all generated reports in a card grid (name, date, type, download button)  
**Bottom Left:** Report generation status (last 5 reports — success/failure)  
**Bottom Right:** On-demand report generator (pick report type + date range → Generate)

### Report Generation Status (Recent)

| Report Name | Scheduled For | Generated | Status | Distribution |
|---|---|---|---|---|
| Monthly MIS — Jan 2025 | 01/02/2025 7:00 AM | 01/02/2025 6:58 AM | ✅ Success | 5 recipients emailed |
| Weekly Collections — Wk 4 Jan | 27/01/2025 9:00 AM | 27/01/2025 9:00 AM | ✅ Success | 3 recipients emailed |
| Aging Analysis — Wk 4 Jan | 27/01/2025 9:00 AM | 27/01/2025 9:01 AM | ✅ Success | 2 recipients emailed |
| Project P&L — Jan 2025 | 01/02/2025 7:00 AM | 01/02/2025 7:02 AM | ✅ Success | 3 recipients emailed |
| Broker Commission — Jan 2025 | 25/01/2025 8:00 AM | 25/01/2025 8:00 AM | ✅ Success | 8 CPs emailed individually |

### Key UI Elements
- **Calendar view** — monthly calendar showing upcoming scheduled reports with colour-coded report type badges
- **"Generate Now" button** — manual trigger for any report with date range picker
- **PDF preview inline** — click any report card to preview the PDF in the browser
- **Distribution log** — per report, shows who received it, when, and whether they opened it (email open tracking)

---

## Complete Module 11 — Master Parameter Reference

### All Data Fields Across M11

| Field Name | Type | Sub-module | Description |
|---|---|---|---|
| `buyer_id` | UUID | 11.1, 11.2 | Unique buyer record ID from CRM |
| `buyer_name` | String | All | Full buyer name |
| `unit_number` | String | All | Allocated unit reference |
| `project_name` | Enum | All | Greenview Heights / Skyline Residences / Business Park |
| `total_consideration` | Number (₹) | 11.1–11.4 | Agreed sale price in the sale agreement |
| `total_billed` | Number (₹) | 11.1 | Cumulative demand raised to date |
| `total_collected` | Number (₹) | 11.1 | Cumulative payments received |
| `total_outstanding` | Number (₹) | 11.1 | Billed minus collected |
| `collection_rate_pct` | Number (%) | 11.1 | Collected / Billed × 100 |
| `aging_bucket` | Enum | 11.1 | Current / 0–30 / 31–60 / 61–90 / 90+ |
| `days_overdue` | Number | 11.1 | Days past due date |
| `last_contact_date` | Date | 11.1 | Date of last RM contact |
| `recommended_action` | String | 11.1 | AI-generated next action |
| `demand_note_id` | String | 11.2 | Unique demand note reference (DN-XXXX) |
| `payment_stage` | String | 11.2 | Which construction/payment milestone |
| `amount_due` | Number (₹) | 11.2 | Amount in this demand note |
| `amount_in_words` | String | 11.2 | Rupees in written form |
| `due_date` | Date | 11.2 | Payment due date |
| `delivery_channel` | Enum | 11.2 | WhatsApp / Email / Portal |
| `delivery_status` | Enum | 11.2 | Delivered / Undelivered / Opened |
| `payment_status` | Enum | 11.2, 11.1 | Paid / Due / Overdue |
| `cp_name` | String | 11.3 | Channel partner / broker name |
| `cp_rera_number` | String | 11.3 | Broker RERA registration |
| `cp_gst_number` | String | 11.3 | GST registration |
| `commission_stage` | String | 11.3 | Which payout stage |
| `commission_rate` | Number (%) | 11.3 | Rate applied to consideration |
| `commission_gross` | Number (₹) | 11.3 | Gross commission amount |
| `gst_on_commission` | Number (₹) | 11.3 | 18% GST on commission |
| `tds_deducted` | Number (₹) | 11.3 | TDS deduction if applicable |
| `net_payable` | Number (₹) | 11.3 | Final payable to CP |
| `commission_status` | Enum | 11.3 | Calculated / Approved / Paid |
| `payment_reference` | String | 11.3 | Bank transaction reference |
| `total_units` | Number | 11.4 | Total saleable units in project |
| `units_sold` | Number | 11.4 | Units with confirmed bookings |
| `construction_pct_complete` | Number (%) | 11.4 | Overall project completion % |
| `revenue_recognised` | Number (₹) | 11.4 | Revenue per IndAS 115 / % completion |
| `cost_to_date` | Number (₹) | 11.4 | Total actual cost incurred |
| `gross_margin` | Number (₹) | 11.4 | Revenue recognised – costs |
| `gross_margin_pct` | Number (%) | 11.4 | Margin as % of revenue |
| `proforma_margin_pct` | Number (%) | 11.4 | Original budgeted margin |
| `margin_variance` | Number (%) | 11.4 | Actual vs pro-forma margin |
| `projected_final_margin` | Number (%) | 11.4 | Cost-to-complete forecast |
| `opening_cash_balance` | Number (₹) | 11.5 | Cash at start of forecast period |
| `projected_inflows_30d` | Number (₹) | 11.5 | Expected collections next 30 days |
| `projected_outflows_30d` | Number (₹) | 11.5 | Expected payments next 30 days |
| `net_cash_position_30d` | Number (₹) | 11.5 | Projected balance at day 30 |
| `minimum_cash_threshold` | Number (₹) | 11.5 | Alert threshold set by CFO |
| `gap_alert_flag` | Boolean | 11.5 | True if projected balance < threshold |
| `gap_alert_date` | Date | 11.5 | When gap is projected to occur |
| `sync_id` | String | 11.6 | Unique Tally sync record ID |
| `transaction_type` | Enum | 11.6 | Buyer Receipt / Subcontractor / Payroll / etc. |
| `debit_ledger` | String | 11.6 | Tally ledger name (debit) |
| `credit_ledger` | String | 11.6 | Tally ledger name (credit) |
| `voucher_number` | String | 11.6 | Tally-assigned voucher reference |
| `sync_status` | Enum | 11.6 | Success / Failed / Queued |
| `error_code` | String | 11.6 | Error description if failed |
| `report_name` | String | 11.7 | Report identifier |
| `report_type` | Enum | 11.7 | MIS / Collections / P&L / Cash Flow / Commission / etc. |
| `generated_at` | DateTime | 11.7 | When report was auto-generated |
| `distribution_list` | Array | 11.7 | Recipients (name + email) |
| `open_rate` | Number (%) | 11.7 | Email open tracking |

---

## Mock Data Constants (Demo-Ready)

### Demo Financial Summary (Q1 2025)

```
Total Billed (All Projects):           ₹24.6 Cr
Total Collected:                       ₹18.2 Cr
Collection Rate:                       74%
Total Outstanding:                     ₹6.4 Cr
90+ Day Overdue:                       ₹1.5 Cr

Greenview Heights Gross Margin:        28.6%   (pro-forma: 30.0%)
Skyline Residences Gross Margin:       30.6%   (pro-forma: 30.0%) ✅
Business Park Gross Margin:            22.2%   (pro-forma: 26.0%) 🔴

Total Commission Paid (Q1 2025):       ₹19.6L
Commission Pending:                    ₹8.8L

April 2025 Cash Gap Alert:             ₹0.14 Cr projected balance
Minimum Cash Threshold:                ₹0.75 Cr
Bridge Funding Requirement:            ₹0.61 Cr (by 1st April 2025)

Active Brokers (CP Network):           8 registered CPs
Top CP (Jan 2025):                     Rajhans Realtors — ₹6.2L earned
```

### Demo Buyer Pool (Finance Context)

```
Rajesh Patel      — Unit A-804, Greenview Heights — ₹57.5L — ₹8.4L overdue (62 days)
Priya Shah        — Unit A-1102, Greenview Heights — ₹57.5L — Payments current
Deepak Trivedi    — Unit A-906, Greenview Heights — ₹57.5L — Upcoming demand ₹4.6L
Sunita Mehta      — Unit C-502, Greenview Heights — ₹62.0L — ₹5.2L overdue (34 days)
Vikram Joshi      — Unit B-1201, Skyline Residences — ₹1.2Cr — ₹14.2L overdue (91 days)
Mahesh Khanna     — Unit S-1104, Skyline Residences — ₹98.0L — ₹18.6L overdue (112 days)
Sanjay Kapoor     — Unit BP-401, Business Park — ₹3.2Cr — ₹22.4L overdue (88 days)
Suresh Nair       — Unit BP-102, Business Park — ₹2.8Cr — ₹31.5L overdue (143 days) → Legal
```

### Demo Broker Pool (Commission Context)

```
Rajhans Realtors        — 8 deals — ₹6.2L earned — ✅ Fully settled
Prime Realty            — 6 deals — ₹4.8L earned — ⚠️ ₹1.4L pending
Landmark Properties     — 5 deals — ₹4.1L earned — ✅ Fully settled
City Property Hub       — 4 deals — ₹3.2L earned — ⚠️ ₹1.1L pending
SNS Land Brokers        — 3 deals — ₹2.8L earned — ✅ Fully settled
Om Realtors             — 3 deals — ₹2.4L earned — 🔴 Approval pending
```

### Demo Projects (Finance Context)

```
Project 1: Fortiv Greenview Heights, Vesu, Surat
           240 units · 186 sold · 72% construction complete
           P&L: ₹8.4 Cr revenue recognised · 28.6% gross margin

Project 2: Fortiv Skyline Residences, Gotri, Vadodara
           180 units · 122 sold · 48% construction complete
           P&L: ₹6.2 Cr revenue recognised · 30.6% gross margin

Project 3: Fortiv Business Park, Althan, Surat
           48 units · 38 sold · 95% construction complete
           P&L: ₹3.6 Cr revenue recognised · 22.2% gross margin ⚠️
```

---

## Brand & Design Parameters for M11 UI

### Color Usage

| Element | Color | Hex |
|---|---|---|
| Page background | Dark navy | #0D1B2A |
| Card / panel background | White | #FFFFFF |
| Primary brand | Deep navy | #1A3C5E |
| Accent / links | Electric blue | #2E86AB |
| Positive metric / paid / on-target | Teal green | #1D9E75 |
| Warning / watch / pending | Amber | #E8A838 |
| Critical / overdue / gap alert | Coral red (pulsing) | #D85A30 |
| Section background | Off white | #F5F6FA |

### Typography

| Use Case | Font |
|---|---|
| Module title, page headings | Playfair Display or DM Serif Display |
| Body text, labels, descriptions | DM Sans or Plus Jakarta Sans |
| All financial figures, percentages, dates | JetBrains Mono |

### Key Animations (Demo-Specific)

| Animation | Where | Description |
|---|---|---|
| Live payment update | 11.1 Dashboard | Collected card ticks up + Outstanding ticks down in real time when payment received |
| Pulsing overdue badge | 11.1 Overdue list | 90+ day bucket badge pulses red |
| Cash flow line draw | 11.5 Chart | Line animates left-to-right on page load; gap area fills red below threshold line |
| Receipt sent animation | 11.2 Demand note | Green checkmark appears + \"Receipt sent via WhatsApp\" fades in on payment confirmation |
| Sync stream | 11.6 | Transaction entries \"flow\" from Command Center to Tally icon in real time |
| Margin trend pulse | 11.4 P&L | Projects below pro-forma margin have a red pulsing indicator on their margin % |

---

## Technical Integration Map for M11

| Sub-module | Inputs From | Outputs To | External APIs / Services |
|---|---|---|---|
| 11.1 Collections Dashboard | M10.2 (payment records), M4.5 (deal values), Finance entries | M11.5 (inflow data), M5.4 (investor report) | Bank statement API (UPI/NEFT confirmation) |
| 11.2 Demand Note Automation | M9.1 (milestone triggers), CRM (buyer + unit data), Sale agreement data | M10.1 (buyer portal), M10.2 (payment reminders), M11.1 (receivables) | WhatsApp Business API, Email API, Google Drive |
| 11.3 Commission Tracker | M4.5 (deal stage data), M12.4 (CP portal) | M11.6 (accounting entry), M7.4 (payroll — commission component) | WhatsApp API (CP notification), Bank transfer API |
| 11.4 Project P&L | M9.2 (subcontractor costs), M9.3 (material costs), M11.1 (collections), M4.5 (bookings) | M5.4 (investor report), M5.6 (exec briefing), M11.7 (reports) | Internal calculation engine |
| 11.5 Cash Flow Forecaster | M10.2 (upcoming installments), M9.2 (subcontractor payments), M9.3 (material procurement), M7.4 (payroll) | M11.7 (cash flow report), CFO WhatsApp alert | Internal forecasting model |
| 11.6 Tally Sync Agent | All M11 transactions, M7.4 (payroll), M9.2 (payments), M9.3 (purchases) | Tally Prime / Zoho Books | Tally Prime API, Zoho Books API |
| 11.7 Report Generator | All M11 sub-modules, M9.1 (construction), M5.4 (sales data) | Email distribution, WhatsApp summary, Google Drive archive | PDF generation engine, Email API, Google Drive API |

---

## Summary: M11 at a Glance

| Item | Detail |
|---|---|
| Module | M11 — Finance, Accounts & Revenue Intelligence |
| Sub-modules | 7 (11.1 → 11.7) |
| Total pages | 8 (1 CFO dashboard + 7 sub-module pages) |
| Primary data objects | Financial transactions, demand notes, commission records, P&L entries, cash flow projections |
| Key integrations | Tally Prime, WhatsApp Business API, Bank Statement API, Google Drive, M9 (construction), M10 (buyer portal), M7.4 (payroll) |
| Key output | Real-time collections dashboard + automated demand notes + live project P&L + 180-day cash flow model |
| Demo focus | Live collections update animation + cash flow gap alert + CFO overview dashboard |
| Design tone | Dark navy, data-dense, CFO-grade, high-number precision, professional |
| Compliance | GST · TDS · PF · ESI · Professional Tax · RERA · IndAS 115 · DPDP Act 2023 |
| Currency | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Date format | DD/MM/YYYY |
| Accounting | Tally Prime (primary) · Zoho Books (alternate) |

---

### Demo Build Prompt (M11 — Claude Artifact)

> Copy this prompt directly into Claude to build the M11 demo screen:

**M11 — Collections Dashboard:**  
Build a CFO-level Finance & Collections dashboard for Fortiv Solutions Real Estate AI Command Center. Top stats row: Total Billed ₹24.6 Cr | Collected ₹18.2 Cr (74%) | Outstanding ₹6.4 Cr | 90+ Day Overdue ₹1.5 Cr (pulsing red). Monthly collections bar chart Oct 2024–Mar 2025 with ₹3 Cr target line — green bars above target, amber below. Aging buckets table with colour-coded rows (Current=white, 0–30=yellow, 31–60=amber, 61–90=orange, 90+=red). Project P&L cards: Greenview Heights 28.6%, Skyline 30.6%, Business Park 22.2% (red badge). Cash flow line chart showing 180-day projection — red dashed threshold at ₹0.75 Cr — April gap area shaded red. Top 5 overdue buyer table with buyer name, unit, amount, days overdue, and "Send Reminder" button per row. Live update animation: when a payment lands, collected ticks up and outstanding ticks down. JetBrains Mono for all numbers. Dark background #0D1B2A, navy #1A3C5E primary, teal #1D9E75 for positive values, amber #E8A838 warnings, coral #D85A30 for alerts. React + recharts.

---

*Real Estate AI Command Center — Module 11 Build Guide*  
*by Fortiv Solutions · fortivsolutions.in*  
*Version 2.0 · Confidential*
