# M9 — Project & Construction Intelligence
### Real Estate AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** A complete construction lifecycle management system — from ground-breaking to possession — giving developers and project teams real-time visibility into milestones, costs, compliance, and timelines.

**Document Type:** Module Build Guide & Parameter Reference  
**Module Code:** M9  
**Total Sub-Modules:** 7 (9.1 → 9.7)  
**Version:** 2.0  
**Company:** Fortiv Solutions  
**Classification:** Confidential  
**Market:** India — Gujarat Focus (Surat, Vadodara)

---

## Module Overview

### Purpose
Replace fragmented, manual construction tracking with a **unified construction intelligence engine** that gives developers, project managers, and directors real-time visibility into milestone progress, subcontractor performance, procurement status, statutory approvals, site activity, project costs, and possession readiness — all in one command view.

### Core Problem Being Solved

| Pain Point | Without M9 | With M9 |
|---|---|---|
| Milestone tracking | Excel sheets, verbal updates, monthly site visits | Live Gantt timeline with % complete per phase |
| Schedule delays | Discovered at RERA QPR — too late | Delay risk flagged weeks in advance |
| Subcontractor management | WhatsApp threads, verbal agreements | Digital work orders, milestone payments, performance scores |
| Procurement | Phone calls, manual POs, missed deliveries | Automated PO, vendor follow-up, shortage alerts |
| Statutory approvals | Missed deadlines, last-minute scrambles | 21-day advance alerts for every approval & NOC |
| Site documentation | Photos scattered in WhatsApp groups | AI-tagged, searchable visual site log |
| Cost overruns | Discovered post-project — too late to fix | Rolling cost-to-complete with overrun alerts at 10% |
| Possession handover | Chaotic, unhappy buyers, RERA complaints | Structured, snag-cleared, document-ready possession |

### Demo Wow Moment
**Live project milestone timeline with a site photo AI-tagging in real time and a possession countdown** — the first time a developer client sees this, they immediately ask "can we implement this for our team?"

---

## Module-Level Parameters

| Parameter | Value |
|---|---|
| Module ID | M9 |
| Module Name | Project & Construction Intelligence |
| Sub-module Count | 7 |
| Primary Output | Real-time project visibility across milestones, costs, compliance, and possession |
| Primary Users | Project Director, Project Manager, Site Engineer, Accounts Team, Management |
| Data Refresh Rate | Real-time (photo uploads, WhatsApp updates) + Weekly (milestone % updates) + Daily (approval status) |
| Demo Project | Fortiv Greenview Heights, Vesu, Surat — 240 units, G+14, RERA Registered, Dec 2026 possession |
| Compliance | Gujarat RERA · DPDP Act 2023 · Labour Law · GST on subcontractor invoices |
| Currency Format | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Demo Financial Period | Q1 2025 (Jan–Mar 2025) |
| Languages | English (primary) · Hindi · Gujarati |
| Integration Modules | M6.3 (RERA QPR), M8.2 (Maintenance), M10.2 (Demand Letters), M11.4 (Revenue), M12 (AI Brain) |

---

## Module Pages & Navigation Structure

```
M9 — Project & Construction Intelligence
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M9
│             (Project health, milestone summary, cost donut, possession countdown)
│
├── [Page 2]  9.1  Project Milestone Tracker
│             (Gantt timeline, phase-wise % complete, delay risk, critical path)
│
├── [Page 3]  9.2  Subcontractor Management Agent
│             (Contractor database, work orders, milestone payments, performance scores)
│
├── [Page 4]  9.3  Material Procurement Tracker
│             (Indent log, PO tracker, delivery status, shortage alerts)
│
├── [Page 5]  9.4  Statutory Approvals Monitor
│             (Approval status board, deadline alerts, OC readiness checklist)
│
├── [Page 6]  9.5  Construction Photo & Site Log AI
│             (Photo gallery, AI tags, progress comparison, issue flags)
│
├── [Page 7]  9.6  Cost-to-Complete Forecaster
│             (Budget vs actual by category, forecasted margin, overrun alerts)
│
└── [Page 8]  9.7  Possession Readiness Dashboard
              (Unit-wise possession schedule, snag status, payment clearance, countdown)
```

---

## Page 1 — Module Dashboard (M9 Overview)

### Purpose
The landing screen for Module 9. Gives management a helicopter view of the entire active project — milestone health, current spend vs budget, possession countdown, site activity, and compliance status — in a single command view.

### Layout
- **Top Stats Bar** (5 KPI cards across)
- **Centre Left (55%):** Milestone Progress Summary + Critical Alerts Feed
- **Centre Right (45%):** Cost Budget Donut Chart + Statutory Approvals Status
- **Bottom Bar:** Possession Countdown + Quick-access tiles to each sub-module (9.1 → 9.7)

### KPI Cards (Top Stats Bar)

| Card | Metric | Mock Value | Color |
|---|---|---|---|
| Overall Progress | % construction complete across all phases | 67% | Accent Blue #2E86AB |
| Budget Utilised | Spend vs total budget | ₹16.2Cr / ₹28.4Cr (57%) | Primary Navy #1A3C5E |
| Active Contractors | Contractors with live work orders | 14 | Success Green #1D9E75 |
| Approvals Pending | Statutory approvals not yet received | 3 | Warning Amber #E8A838 |
| Days to Possession | Countdown to RERA possession date | 571 days | Danger Red #D85A30 |

### Milestone Progress Summary (Centre Left)

Visual status tiles for all construction phases — colour-coded:
- 🟢 **Completed** — phase 100% done
- 🔵 **In Progress** — currently active
- 🟡 **At Risk** — behind schedule
- 🔴 **Delayed** — critical path impact

| Phase | Status | % Complete | Days Ahead/Behind |
|---|---|---|---|
| Land Acquisition | ✅ Completed | 100% | On time |
| Design & Drawings | ✅ Completed | 100% | On time |
| RERA Registration | ✅ Completed | 100% | On time |
| Building Plan Approval | ✅ Completed | 100% | On time |
| Foundation | ✅ Completed | 100% | On time |
| Basement / Podium | ✅ Completed | 100% | On time |
| Structural (Floors 1–8) | 🔵 In Progress | 84% | On time |
| Structural (Floors 9–14) | 🔵 In Progress | 31% | 3 days behind |
| External Finishing | 🔵 Not Started | 0% | On schedule |
| Internal Finishing | 🔵 Not Started | 0% | On schedule |
| MEP / Services | 🔵 Not Started | 0% | On schedule |
| OC Application | 🔵 Not Started | 0% | On schedule |
| Possession | 🔵 Planned | 0% | Dec 2026 |

### Critical Alerts Feed (Live)
- 🔴 **Fire NOC** — Application not submitted · Possession dependency · Action required
- 🟡 **RERA Q1 Report** — Due in 8 days · Auto-compile initiated · Review needed
- 🟡 **Floors 9–14 Structure** — 3 days behind schedule · Cascade impact: 12 days on MEP
- 🟢 **Tower A Floor 10 Slab** — Casting completed this morning · Site photo confirmed

### Cost Budget Donut Chart (Centre Right)
Recharts donut showing cost distribution:

| Category | Budgeted | Spent | % Utilised |
|---|---|---|---|
| Civil / Structural | ₹12.5Cr | ₹8.4Cr | 67% |
| MEP (Mechanical/Electrical/Plumbing) | ₹4.2Cr | ₹1.8Cr | 43% |
| External Finishing | ₹3.8Cr | ₹0.9Cr | 24% |
| Internal Finishing | ₹3.5Cr | ₹0.6Cr | 17% |
| Statutory / Approvals | ₹0.8Cr | ₹0.7Cr | 88% |
| Landscaping / External Development | ₹1.2Cr | ₹0.4Cr | 33% |
| Project Overheads | ₹2.4Cr | ₹3.4Cr | ⚠️ 142% |

> **Overhead overrun flag** — amber alert: Project Overhead category is tracking 42% over budget.

### Possession Countdown Banner (Bottom)
```
┌────────────────────────────────────────────────────────────┐
│  FORTIV GREENVIEW HEIGHTS · RERA POSSESSION: DEC 2026      │
│                                                            │
│         571 DAYS REMAINING                                 │
│  240 Total Units · 38 Ready · 179 Under Construction       │
│  Next milestone: Tower A Floor 12 Slab — Est. 14 days      │
└────────────────────────────────────────────────────────────┘
```

### Sub-Module Quick Access Tiles (Bottom Row)
Eight clickable tiles, each showing:
- Sub-module number + name
- One-line description
- Status indicator (Active / Alert / On Track)
- Latest update timestamp

---

## Page 2 — Sub-Module 9.1: Project Milestone Tracker

### What It Is
An interactive visual Gantt timeline that tracks every construction phase of the project — from land acquisition to possession handover — showing planned vs actual progress, completion percentages, delay risk indicators, and critical path in real time.

### Construction Phases Tracked

| Phase | Phase Code | Dependency |
|---|---|---|
| Land Acquisition | P01 | — |
| Design & Drawings | P02 | P01 |
| RERA Registration | P03 | P02 |
| Building Plan Approval | P04 | P02 |
| Foundation | P05 | P03, P04 |
| Basement / Podium | P06 | P05 |
| Structural — Floors 1–8 | P07 | P06 |
| Structural — Floors 9–14 | P08 | P07 |
| External Finishing | P09 | P07 (partial), P08 |
| Internal Finishing | P10 | P09 |
| MEP / Services | P11 | P07 (partial) |
| Landscaping / External Development | P12 | P08 |
| OC Application | P13 | P09, P10, P11, P12 |
| OC Receipt | P14 | P13 |
| Possession | P15 | P14 |

### Phase Detail Parameters (Per Phase Card)

| Field | Description | Example |
|---|---|---|
| `phase_name` | Full phase name | Structural — Floors 9–14 |
| `phase_code` | System identifier | P08 |
| `planned_start` | Baseline start date | 01/11/2024 |
| `actual_start` | Real start date | 04/11/2024 |
| `planned_end` | Baseline completion date | 30/04/2025 |
| `forecast_end` | Current completion forecast | 12/05/2025 |
| `delay_days` | Days behind baseline | +12 days |
| `pct_complete` | Current % completion | 31% |
| `responsible_person` | Assigned engineer/PM | Vijay Thakkar (Project Manager) |
| `sub_phases` | Floor-by-floor breakdown | Floor 9: 85% · Floor 10: 72% · Floor 11: 44% |
| `critical_path` | On critical path to possession? | ✓ Yes |
| `last_updated` | When % was last updated | 14/01/2025 |
| `updated_by` | Who submitted update | Ramesh (Site Engineer) |
| `cascade_impact` | Downstream delay effect | +12 days on MEP start |

### Mock Demo Data — Full Milestone Timeline

| Phase | Planned Start | Planned End | Actual/Forecast End | % Complete | Status |
|---|---|---|---|---|---|
| Land Acquisition | 01/03/2022 | 31/05/2022 | 31/05/2022 | 100% | ✅ Done |
| Design & Drawings | 01/06/2022 | 30/09/2022 | 30/09/2022 | 100% | ✅ Done |
| RERA Registration | 01/09/2022 | 31/12/2022 | 31/12/2022 | 100% | ✅ Done |
| Building Plan Approval | 01/09/2022 | 28/02/2023 | 28/02/2023 | 100% | ✅ Done |
| Foundation | 01/03/2023 | 31/07/2023 | 31/07/2023 | 100% | ✅ Done |
| Basement / Podium | 01/08/2023 | 31/01/2024 | 31/01/2024 | 100% | ✅ Done |
| Structural Floors 1–8 | 01/02/2024 | 31/10/2024 | 31/10/2024 | 100% | ✅ Done |
| Structural Floors 9–14 | 01/11/2024 | 30/04/2025 | 12/05/2025 | 31% | 🟡 At Risk |
| External Finishing | 01/01/2025 | 30/06/2025 | 12/07/2025 | 8% | 🔵 In Progress |
| Internal Finishing | 01/05/2025 | 31/10/2025 | 12/11/2025 | 0% | 🔵 Upcoming |
| MEP / Services | 01/04/2025 | 30/09/2025 | 12/10/2025 | 0% | 🔵 Upcoming |
| Landscaping | 01/07/2025 | 30/11/2025 | 30/11/2025 | 0% | 🔵 Upcoming |
| OC Application | 01/11/2025 | 31/01/2026 | 12/02/2026 | 0% | 🔵 Upcoming |
| OC Receipt | 01/02/2026 | 30/09/2026 | 11/10/2026 | 0% | 🔵 Upcoming |
| Possession | 01/10/2026 | 31/12/2026 | 31/12/2026 | 0% | 🔵 Target |

### Page Layout
**Top Bar:** Project selector (Greenview Heights / Skyline Residences / Business Park) | Tower filter | Phase filter  
**Main Area (70%):** Gantt-style horizontal timeline with phase bars, colour-coded by status  
**Right Panel (30%):** Phase detail card — click any phase to expand  
**Bottom Strip:** Critical path indicator + "Delay cascade: if P08 delays 12 days → possession impact: +12 days"

### Key UI Elements
- **Critical path highlight** — phases on critical path shown with orange border
- **Delay cascade popup** — hover a delayed phase to see downstream impact summary
- **Progress update button** — site engineer can submit new % from this page
- **Sub-phase drill-down** — click structural phase to see floor-by-floor breakdown
- **Planned vs Actual** — two bars per phase: grey (planned) vs coloured (actual/forecast)

---

## Page 3 — Sub-Module 9.2: Subcontractor Management Agent

### What It Is
A complete digital subcontractor management system covering onboarding, work order generation, milestone-based payment tracking, quality checksheets, and performance scoring for all contractors engaged on Fortiv projects.

### Contractor Database Parameters

| Field | Description | Example |
|---|---|---|
| `contractor_name` | Company or individual name | Mehta Civil Works |
| `trade_category` | Scope category | Civil — Structural |
| `contact_person` | Primary contact | Jayesh Mehta |
| `phone` | Mobile number | +91 99xxxxxxxx |
| `gst_number` | GST registration | 24AAAAA0000A1Z5 |
| `pan_number` | PAN card | AAAPM1234A |
| `labour_licence` | Labour Dept licence number | SUL/2023/04521 |
| `licence_expiry` | Licence expiry date | 31/03/2026 |
| `pf_registration` | PF registration number | GJ/SRT/12345/000/0001234 |
| `insurance_type` | Workmen compensation policy | National Insurance |
| `insurance_expiry` | Insurance policy expiry | 15/08/2025 |
| `rate_card` | Agreed rate schedule | ₹420/sq ft for shuttering |
| `performance_score` | Rolling performance score (0–100) | 82 |
| `projects_handled` | Past Fortiv projects | Fortiv Skyline Phase 1 |
| `empanelment_status` | Active / Suspended / Blacklisted | Active |

### Work Order Parameters (Per WO)

| Field | Description | Example |
|---|---|---|
| `wo_number` | Work order ID | WO/GVH/2025/047 |
| `project` | Project name | Fortiv Greenview Heights |
| `contractor` | Assigned contractor | Mehta Civil Works |
| `scope_description` | Scope of work | RCC slab casting — Tower A Floor 11 |
| `drawings_reference` | Drawing numbers | DWG-SA-T1-F11-01 to 04 |
| `rate` | Agreed unit rate | ₹420/sq ft |
| `quantity` | Estimated quantity | 4,800 sq ft |
| `total_wo_value` | Total work order value | ₹20.16 Lakhs |
| `start_date` | Planned start | 20/01/2025 |
| `completion_date` | Planned completion | 15/02/2025 |
| `milestones` | Payment milestones | 30% on formwork · 40% on casting · 30% on curing |
| `current_milestone` | Active milestone | Formwork (30%) — In progress |
| `amount_paid` | Paid to date | ₹6.05 Lakhs |
| `balance_payable` | Remaining | ₹14.11 Lakhs |
| `quality_status` | Quality checklist | 2 of 3 milestones cleared |
| `delivery_status` | WO status | In Progress |

### Mock Demo Data — Active Work Orders

| WO # | Contractor | Scope | Value | Status | Payment Status |
|---|---|---|---|---|---|
| WO/GVH/2025/041 | Mehta Civil Works | Tower A Fl 10 Slab | ₹18.9L | ✅ Completed | ₹18.9L Paid |
| WO/GVH/2025/042 | Patel Plumbing Co. | Internal Plumbing Fl 1–5 | ₹12.4L | 🔵 In Progress | ₹4.9L Paid |
| WO/GVH/2025/043 | Shree Electricals | Underground Cabling | ₹8.6L | ✅ Completed | ₹8.6L Paid |
| WO/GVH/2025/044 | Ramdev Steel | Reinforcement Tower B Fl 9–10 | ₹24.3L | 🔵 In Progress | ₹7.3L Paid |
| WO/GVH/2025/045 | Aakash Tiles | Lobby Floor Tiling | ₹5.8L | 🔵 In Progress | ₹0 Paid |
| WO/GVH/2025/046 | JP Waterproofing | Terrace Waterproofing Tower A | ₹3.2L | ⚪ Not Started | ₹0 Paid |
| WO/GVH/2025/047 | Mehta Civil Works | Tower A Fl 11 Slab | ₹20.16L | 🔵 In Progress | ₹6.05L Paid |
| WO/GVH/2025/048 | Green Landscaping | Podium Garden Layout | ₹4.1L | ⚪ Not Started | ₹0 Paid |

### Contractor Performance Scorecard Parameters

| Metric | Weightage | Example |
|---|---|---|
| On-time completion rate | 35% | 88% (last 6 WOs) |
| Quality rejection rate | 30% | 4% (rejected milestones) |
| Safety incident count | 20% | 0 incidents |
| Responsiveness score | 15% | 4.2 / 5 (team rating) |
| **Overall Score** | 100% | **82 / 100** |

### Page Layout
**Top Tabs:** All Contractors | Active Work Orders | Payment Approvals | Document Expiry Alerts  
**Contractors Tab:** Searchable table with performance score badges and document validity indicators  
**Work Orders Tab:** Kanban-style board — Draft → Active → Milestone Pending → Completed  
**Payment Approvals:** Pending payment certifications awaiting PM / Director sign-off  
**Document Expiry Alerts:** Contractors with insurance or licence expiring in next 30 / 60 / 90 days

### Key UI Elements
- **Performance score badge** — colour-coded: 80+ green, 60–79 amber, below 60 red
- **Milestone certification flow** — "Site Engineer Certified → PM Approved → Accounts Payment Advice"
- **Document expiry warning** — amber banner: "Patel Plumbing — Insurance expires in 22 days"
- **WhatsApp WO delivery** — "Send Work Order via WhatsApp" button on each WO record

---

## Page 4 — Sub-Module 9.3: Material Procurement Tracker

### What It Is
A structured procurement management system that tracks material indent requests from site, vendor quotations, purchase orders, delivery confirmations, and quality inspection — ensuring materials reach site on time and procurement processes are followed with a complete audit trail.

### Indent Request Parameters

| Field | Description | Example |
|---|---|---|
| `indent_number` | Indent ID | IND/GVH/2025/112 |
| `raised_by` | Site engineer | Ramesh Patel (Site Engineer) |
| `material_name` | Material description | M30 Grade Ready Mix Concrete |
| `quantity_required` | Amount needed | 180 cubic metres |
| `unit` | Unit of measurement | Cubic Metres |
| `required_by_date` | When needed at site | 28/01/2025 |
| `purpose` | What it's for | Tower A Floor 11 Slab Casting |
| `approval_status` | Approval workflow | PM Approved → Procurement |
| `indent_date` | Date raised | 14/01/2025 |
| `urgency` | Priority level | High (casting scheduled in 14 days) |

### Purchase Order Parameters

| Field | Description | Example |
|---|---|---|
| `po_number` | PO ID | PO/GVH/2025/089 |
| `material_name` | Material | M30 Grade Ready Mix Concrete |
| `vendor_name` | Selected vendor | Ultratech Cement RMC — Surat |
| `quantity_ordered` | PO quantity | 190 cubic metres |
| `rate` | Agreed rate | ₹6,200 per cubic metre |
| `total_po_value` | PO value | ₹11.78 Lakhs |
| `l1_vendor` | Lowest quotation vendor | ✓ Ultratech (L1) |
| `delivery_date_promised` | Vendor committed date | 27/01/2025 |
| `delivery_date_actual` | Real delivery date | — (pending) |
| `quality_status` | Inspection result | — (pending) |
| `invoice_received` | Billing status | — (pending) |
| `po_sent_via` | Channel | WhatsApp + Email |

### Vendor Comparison Table (Per Material Category)

| Vendor | Quoted Rate | Delivery Lead Time | Past Rating | L1? |
|---|---|---|---|---|
| Ultratech Cement RMC | ₹6,200/cu.m | 2 days | ⭐ 4.6 | ✓ L1 |
| ACC RMC Surat | ₹6,380/cu.m | 3 days | ⭐ 4.3 | L2 |
| Shree RMC Surat | ₹6,550/cu.m | 1 day | ⭐ 4.1 | L3 |

### Mock Demo Data — Active Procurement Log

| Indent # | Material | Quantity | Vendor | PO Value | Delivery | Status |
|---|---|---|---|---|---|---|
| IND/GVH/2025/108 | TMT Steel Fe500 | 28 MT | Kamdhenu Steel | ₹19.6L | 18/01/2025 | ✅ Delivered & Accepted |
| IND/GVH/2025/109 | OPC 53 Grade Cement | 400 Bags | Ultratech | ₹2.2L | 20/01/2025 | ✅ Delivered & Accepted |
| IND/GVH/2025/110 | CPVC Plumbing Pipes | 1,200 m | Astral Pipes | ₹1.8L | 22/01/2025 | 🔵 In Transit |
| IND/GVH/2025/111 | Ceramic Floor Tiles | 2,400 sq ft | Somany Tiles | ₹4.1L | 25/01/2025 | 🔵 PO Sent |
| IND/GVH/2025/112 | M30 RMC | 190 cu.m | Ultratech RMC | ₹11.78L | 27/01/2025 | 🔵 PO Sent |
| IND/GVH/2025/113 | AAC Blocks 200mm | 8,000 blocks | Siporex | ₹3.4L | 30/01/2025 | ⚪ Quotation Stage |
| IND/GVH/2025/114 | Electrical Conduit 25mm | 3,000 m | Finolex | ₹0.9L | 02/02/2025 | ⚪ Approval Pending |

### Shortage Alert System
Automated alerts triggered when:
- Current site stock ÷ daily consumption rate < 5 days
- Next delivery > 3 days away
- Alert sent to: Site Engineer + Procurement Manager via WhatsApp

**Demo Shortage Alert:**
```
⚠️ MATERIAL SHORTAGE ALERT — Fortiv Greenview Heights
Material: OPC Cement (53 Grade)
Current Stock: ~80 bags
Daily Use: ~35 bags
Days Remaining: ~2.3 days
Next Delivery: Not scheduled
ACTION REQUIRED: Raise indent immediately.
— Fortiv AI Procurement Bot
```

### Page Layout
**Top Bar:** Project filter | Material category | Date range | Status filter (All / Pending / In Transit / Delivered)  
**Main Area:** Sortable procurement log table with status badges and delivery countdown  
**Alert Strip (Top):** Active shortage alerts — pulsing amber  
**Right Panel:** Click any PO row → vendor comparison table + delivery timeline  
**Bottom Chart:** Monthly material cost bar chart vs budget by category

### Key UI Elements
- **L1 badge** — green "L1 — Lowest Quote" tag on recommended vendor
- **Approval chain indicator** — "Site Engineer → PM Approved → Director Approved → PO Issued"
- **Shortage alert badge** — red pulsing icon on materials within 3 days of running out
- **Quality rejection flow** — "Mark as Rejected" triggers replacement PO automatically

---

## Page 5 — Sub-Module 9.4: Statutory Approvals Monitor

### What It Is
A regulatory compliance tracker for construction projects — monitoring the status of all required approvals, permissions, and NOCs with deadline alerts, 21-day advance warnings, and escalations to ensure construction proceeds without regulatory interruptions.

### Approvals Tracked

| Approval | Authority | Stage | Due / Received | Days Left | Status |
|---|---|---|---|---|---|
| RERA Registration | Gujarat RERA | ✅ Received | 31/12/2022 | — | ✅ Complete |
| Building Plan Approval | SUDA / Surat Municipal | ✅ Received | 28/02/2023 | — | ✅ Complete |
| Environment Clearance | SEIAA Gujarat | ✅ Received | 30/06/2023 | — | ✅ Complete |
| Excavation Permission | Surat Municipal Corp | ✅ Received | 28/02/2023 | — | ✅ Complete |
| Labour Dept Registration | Labour Commissioner Gujarat | ✅ Received | 15/03/2023 | — | ✅ Complete |
| RERA Q4 2024 QPR | Gujarat RERA | ✅ Submitted | 31/12/2024 | — | ✅ Complete |
| RERA Q1 2025 QPR | Gujarat RERA | 🟡 Due | 31/01/2025 | 8 days | ⚠️ Action Required |
| Fire NOC (Provisional) | Surat Fire & Emergency | 🔴 Not Applied | 15/03/2025 | 60 days | ❌ Not Initiated |
| Tree NOC | Surat Municipal Corp | ✅ Received | 30/04/2023 | — | ✅ Complete |
| Lift Inspection Certificate | Gujarat Lift Inspector | ⚪ Not Applicable Yet | Jun 2026 | — | — |
| Water Connection (NOC) | SUDA | ⚪ Not Applicable Yet | Aug 2026 | — | — |
| Commencement Certificate | SUDA | ✅ Received | 01/04/2023 | — | ✅ Complete |
| Occupation Certificate | SUDA | ⚪ Not Applied | Oct 2026 | — | OC Readiness: 43% |
| Completion Certificate | Surat Municipal | ⚪ Not Applied | Nov 2026 | — | — |

### Approval Record Parameters (Per Approval)

| Field | Description | Example |
|---|---|---|
| `approval_name` | Full approval name | Fire NOC (Provisional) |
| `authority` | Issuing authority | Surat Fire & Emergency Services |
| `application_status` | Not Applied / Applied / Under Review / Approved / Rejected | Not Applied |
| `application_date` | When applied | — |
| `expected_decision_date` | Estimated decision date | 15/03/2025 |
| `received_date` | When approved | — |
| `validity_period` | Approval validity | 5 years |
| `renewal_required` | Does it expire? | Yes — review at OC stage |
| `responsible_person` | Liaison owner | Suresh Mehta (Legal/Liaison) |
| `alert_threshold_days` | Days before deadline to alert | 21 days |
| `escalation_contact` | Who gets escalation | Rahul Modi (Director) |
| `document_ref` | Document location | Google Drive / M6 Document AI |
| `possession_dependency` | Blocks possession if not received? | ✓ Yes — critical |

### RERA QPR Auto-Compilation
When RERA Quarterly Progress Report is due (21-day advance alert), system auto-compiles:
- Physical progress data pulled from M9.1 milestone tracker
- Financial data pulled from M9.6 cost-to-complete
- Unit booking and allotment data from M4 CRM
- Formats into RERA QPR template for project manager review
- Sends draft to Relationship Manager / Legal team for approval before submission

### OC Readiness Checklist

| Pre-condition | Status | Notes |
|---|---|---|
| Structural completion | 🔵 In Progress | 67% overall |
| Fire NOC (Final) | ❌ Not Initiated | Depends on provisional first |
| Lift Inspection Certificate | ⚪ Not Yet | Applicable after installation |
| Water Connection NOC | ⚪ Not Yet | Apply 6 months before possession |
| Sewage Connection | ⚪ Not Yet | Apply 6 months before possession |
| Electricity Connection | ⚪ Not Yet | Apply 4 months before possession |
| Road / Access Certificate | ✅ Complete | Approved at building plan stage |
| Completion Certificate | ⚪ Not Yet | After OC |
| **OC Readiness Score** | **43%** | **Est. Ready: Sep 2026** |

### Page Layout
**Top Alert Banner:** Active overdue / at-risk approvals — pulsing red/amber  
**Main Table:** All approvals sorted by urgency (most critical at top) — colour-coded status badges  
**Right Panel:** Click any approval → full history, document attachments, responsible person, next action  
**Bottom Section:** OC Readiness Checklist with % score gauge  
**RERA QPR Panel:** Status of current quarter's report + auto-compile progress

### Key UI Elements
- **Deadline countdown badge** — "8 days to RERA Q1 QPR" pulsing amber
- **Critical dependency tag** — 🔴 "Possession blocked if not received" tag on critical approvals
- **Auto-compile button** — "Start RERA QPR Compilation" pulls from M9.1 + M9.6 + M4
- **Escalation log** — "Escalated to Rahul Modi on 12/01/2025 — 15 days overdue"

---

## Page 6 — Sub-Module 9.5: Construction Photo & Site Log AI

### What It Is
An AI-powered site documentation system where field staff upload construction photos via WhatsApp and the AI automatically tags, classifies, analyses progress, and maintains a structured searchable visual site log — replacing random photo storage in WhatsApp groups.

### Photo Submission Process
```
[Site Engineer takes photo at Tower A Floor 11]
        ↓
[Sends to Fortiv Site Log WhatsApp: +91 9XXXXXXXX with caption "Tower A Floor 11 slab casting"]
        ↓
[AI receives photo + caption]
        ↓
[AI auto-tags: Project=GVH · Tower=A · Floor=11 · Activity=Slab Casting · Phase=Structural]
        ↓
[Progress detected: compared to Floor 11 photos from last session — "35% advance"]
        ↓
[Photo appears in Site Log gallery within 90 seconds]
        ↓
[M9.1 milestone % updated automatically based on photo confirmation]
```

### AI Auto-Tag Parameters (Per Photo)

| Field | Description | Example |
|---|---|---|
| `photo_id` | Unique identifier | PHT/GVH/2025/1847 |
| `project` | Project name | Fortiv Greenview Heights |
| `upload_time` | When submitted | 14/01/2025 11:42 AM |
| `uploaded_by` | Field staff name | Ramesh Patel (Site Engineer) |
| `tower` | Tower identifier | Tower A |
| `floor` | Floor number | Floor 11 |
| `zone` | Area within floor | North Wing |
| `activity_type` | Construction activity | Slab Casting |
| `phase_tag` | Construction phase | Structural |
| `progress_estimate` | AI-estimated advance | ~35% advance vs last photo |
| `issue_flag` | Any concern detected | None |
| `milestone_linked` | Associated milestone | P07 — Structural Floors 9–14 |
| `milestone_confirmation` | Does this confirm a milestone? | Partial confirmation (84% floor slabs done) |
| `caption_original` | Original caption sent | "Tower A Floor 11 slab casting" |
| `ai_description` | AI-generated description | "Slab casting in progress on Tower A Floor 11 North Wing. Approximately 35% of slab area cast. Formwork visible on South Wing area — casting pending." |

### Mock Demo Photo Cards (6 Cards)

| Card | Tag | Location | Activity | AI Note | Date |
|---|---|---|---|---|---|
| 1 | Tower A Floor 11 | Structural | Slab Casting | Progress: 35% advance vs 14 days ago | 14/01/2025 |
| 2 | Tower B Floor 9 | Structural | Column Casting | 4 columns complete, 8 remaining visible | 13/01/2025 |
| 3 | Podium Level | External | Waterproofing | 2nd coat application in progress | 12/01/2025 |
| 4 | Tower A Fl 1–5 | MEP | Plumbing Rough-in | Vertical risers 80% complete | 11/01/2025 |
| 5 | Ground Level | External | Compound Wall | North boundary 90% complete | 10/01/2025 |
| 6 | Tower A Floor 8 | Internal | Block Masonry | ⚠️ Safety: Labourers without helmets detected | 09/01/2025 |

### Issue Flag Categories (AI Detection)

| Issue Type | Trigger | Severity | Auto-Alert To |
|---|---|---|---|
| Safety gear violation | PPE not visible on workers | 🔴 High | Site Safety Officer + Project Manager |
| Exposed reinforcement | Rebar visible post-casting | 🟡 Medium | Site Engineer for review |
| Water ponding | Standing water visible on slab | 🟡 Medium | Site Engineer |
| Improper formwork | Formwork gaps or misalignment | 🔴 High | Project Manager |
| Quality concern | Surface cracks or voids visible | 🔴 High | Project Manager + Director |
| Debris accumulation | Excessive waste on floor | 🟢 Low | Site Supervisor |

### Page Layout
**Top Bar:** Project | Tower | Floor | Activity Type | Date Range | Issue Filter  
**Main Gallery:** Masonry grid of photo cards — AI-tagged badges on each image  
**Left Filter Panel:** Collapsible category drill-down tree (Phase → Tower → Floor)  
**Right Slide-in Panel:** Click any photo → enlarged view + AI description + milestone link + issue log  
**Bottom Timeline:** Horizontal photo strip showing same location across time (progress comparison)

### Key UI Elements
- **AI tag badges** on each photo card — Tower / Floor / Activity / Date
- **Progress arrow badge** — "↑ 35% advance" in green on progress photos
- **Issue flag badge** — red warning triangle with issue type on flagged photos
- **Compare view** — side-by-side of same zone on two different dates
- **Milestone confirmation button** — "Confirm this as P07 milestone evidence" for project manager

---

## Page 7 — Sub-Module 9.6: Cost-to-Complete Forecaster

### What It Is
A financial model that continuously compares budgeted vs actual project expenditure at each construction stage and forecasts the final project cost — alerting management to cost overruns before they become unmanageable.

### Budget vs Actual by Cost Category

| Category | Budget (₹) | Spent to Date (₹) | % Used | Projected Final (₹) | Variance |
|---|---|---|---|---|---|
| Civil / Structural | ₹12.50 Cr | ₹8.42 Cr | 67.4% | ₹12.38 Cr | -₹0.12 Cr ✅ |
| MEP (Mechanical/Electrical/Plumbing) | ₹4.20 Cr | ₹1.84 Cr | 43.8% | ₹4.35 Cr | +₹0.15 Cr 🟡 |
| External Finishing | ₹3.80 Cr | ₹0.92 Cr | 24.2% | ₹3.78 Cr | -₹0.02 Cr ✅ |
| Internal Finishing | ₹3.50 Cr | ₹0.62 Cr | 17.7% | ₹3.52 Cr | +₹0.02 Cr ✅ |
| Statutory / Approvals | ₹0.80 Cr | ₹0.70 Cr | 87.5% | ₹0.88 Cr | +₹0.08 Cr 🟡 |
| Landscaping / External Dev | ₹1.20 Cr | ₹0.38 Cr | 31.7% | ₹1.18 Cr | -₹0.02 Cr ✅ |
| Project Overheads | ₹2.40 Cr | ₹3.42 Cr | 142.5% | ₹4.20 Cr | +₹1.80 Cr 🔴 |
| **Total Project** | **₹28.40 Cr** | **₹16.30 Cr** | **57.4%** | **₹30.29 Cr** | **+₹1.89 Cr 🔴** |

### Cost Overrun Alert Rules

| Threshold | Trigger | Action |
|---|---|---|
| Category > 10% over budget | Warning | Alert to Project Director + Project Manager |
| Category > 25% over budget | Critical | Alert to Director + MD |
| Total project > 5% over budget | Warning | Alert to Director + Finance |
| Total project > 10% over budget | Critical | Board-level escalation flag |

### Project Margin Forecast

| Item | Value | Notes |
|---|---|---|
| Total Revenue (all 240 units sold) | ₹52.40 Cr | From M11.4 Revenue tracker |
| Total Cost — Budget | ₹28.40 Cr | Baseline |
| Total Cost — Projected Final | ₹30.29 Cr | Current forecast incl. overhead overrun |
| **Projected Gross Profit** | **₹22.11 Cr** | |
| **Projected Margin %** | **42.2%** | vs budgeted 45.6% |
| Margin Delta vs Budget | -3.4 percentage points | Overhead overrun is primary cause |

### Scenario Modelling Tool

Pre-built scenario buttons for instant sensitivity analysis:

| Scenario | Input | Impact on Margin |
|---|---|---|
| Civil overrun +8% | +₹1.00 Cr | Margin drops to 40.2% |
| MEP overrun +15% | +₹0.63 Cr | Margin drops to 41.0% |
| Overhead normalised | -₹1.00 Cr | Margin recovers to 44.1% |
| 10 unsold units | -₹2.18 Cr revenue | Margin drops to 37.3% |

### Cost-to-Complete Formula Applied

```
Projected Final Cost (per category) = 
    Spent to Date 
  + (Remaining % of scope × Unit rate × Remaining quantity estimate)
```

### Page Layout
**Top Cards:** Total Budget | Total Spent | Projected Final | Projected Margin % | Budget Variance  
**Main Chart:** Recharts grouped bar chart — Budget vs Spent vs Projected per category  
**Right Panel:** Margin forecast card with scenario modelling buttons  
**Alert Panel:** Active overrun alerts with "View Details" and "Raise to Director" actions  
**Bottom Table:** Category-level budget drill-down with full detail

### Key UI Elements
- **Overrun badge** — category rows with >10% overrun highlighted in amber/red with variance amount
- **Margin gauge** — semicircle gauge showing current forecasted margin % vs budgeted margin %
- **Scenario button row** — 4 one-click scenario buttons update the full model instantly
- **Alert card** — "Project Overheads: ₹1.80 Cr overrun projected. Raise to Director?" with CTA

---

## Page 8 — Sub-Module 9.7: Possession Readiness Dashboard

### What It Is
A comprehensive possession planning and execution dashboard that manages the entire process of handing over completed units to buyers — from pre-possession snagging to documentation to final key handover — ensuring a professional, structured, zero-RERA-complaint possession experience.

### Possession Schedule Overview (Demo: Fortiv Greenview Heights — Dec 2026)

| Metric | Value |
|---|---|
| Total Units | 240 |
| RERA Possession Date | 31/12/2026 |
| Days Remaining | 571 |
| Units — OC Received | 0 (OC pending Oct 2026) |
| Units — Snag Inspection Complete | 38 |
| Units — Snag-Free (Cleared) | 24 |
| Units — Payment Fully Cleared | 198 |
| Units — Payment Pending | 42 |
| Units — Ready for Possession | 0 (OC pending) |
| **Possession Week Forecast (Dec 2026)** | **~48 possessions/week for 5 weeks** |

### Unit-Wise Possession Status Parameters

| Field | Description | Example |
|---|---|---|
| `unit_number` | Unit identifier | A-801 |
| `tower` | Tower | Tower A |
| `floor` | Floor | 8th Floor |
| `configuration` | Unit type | 2BHK |
| `carpet_area` | Carpet area | 788 sq ft |
| `buyer_name` | Registered buyer | Rajesh Patel |
| `buyer_phone` | Contact | +91 98765 43210 |
| `sale_agreement_value` | Total consideration | ₹54.6 Lakhs |
| `amount_paid` | Collected to date | ₹54.6 Lakhs |
| `balance_outstanding` | Pending payment | ₹0 |
| `payment_clearance` | Ready for possession on payment? | ✅ Payment Clear |
| `snag_inspection_date` | When inspection was done | 05/12/2026 |
| `snags_raised` | Total defects found | 3 |
| `snags_resolved` | Defects fixed | 3 |
| `snag_clearance` | All snags fixed? | ✅ Snag Free |
| `possession_letter_issued` | Letter generated? | ✅ Issued 15/12/2026 |
| `possession_date_scheduled` | Booked possession slot | 22/12/2026 10:00 AM |
| `possession_staff` | Assigned Fortiv team member | Priya Rana |
| `possession_completed` | Handover done? | ✅ Completed |
| `key_handover_receipt` | Signed by buyer? | ✅ Signed |

### Pre-Possession Snagging Checklist (Per Unit)

| Check Item | Category | Status |
|---|---|---|
| Floor tiles — no cracks, aligned, grouted | Civil — Flooring | ✅ Clear |
| Wall plaster — smooth, no cracks, painted | Civil — Walls | ✅ Clear |
| Windows — all operational, no gaps | Civil — Openings | ✅ Clear |
| Main door — lock, handle, stopper functional | Civil — Doors | 🔴 Snag: Handle loose |
| Bedroom doors — all operational | Civil — Doors | ✅ Clear |
| Electrical — all points working, no loose wiring | MEP — Electrical | ✅ Clear |
| Plumbing — all taps, flush, drainage working | MEP — Plumbing | 🔴 Snag: Basin tap dripping |
| Kitchen — platform, sink, drain functional | Finishing | ✅ Clear |
| Bathroom — tiles, fixtures, waterproofing | Finishing | ✅ Clear |
| Balcony — railing, drain, waterproofing | Civil | ✅ Clear |
| Electrical panel — all MCBs functioning | MEP | ✅ Clear |
| **Unit Snag Status** | | 🟡 2 Open Snags |

### Possession Communication Sequence (Auto-WhatsApp to Buyer)

| Trigger | Message | Timing |
|---|---|---|
| OC Received | "Great news! We've received the Occupation Certificate for Fortiv Greenview Heights. Possession starts [Date]. Our team will be in touch to schedule your handover." | Within 24 hrs of OC |
| Possession Scheduled | "Your possession for Unit [X] has been scheduled for [Date] at [Time]. Here's what to bring and expect. [PDF attached]" | 14 days before |
| Possession Reminder | "Your possession is in 3 days — [Date] at [Time]. Please ensure your payment is fully cleared and bring original ID." | D-3 |
| Possession Day | "Today is your big day! 🎉 Your handover is at [Time]. Our team [Name] will meet you at the Fortiv Greenview Heights sales office." | Morning of possession |
| Post-Possession | "Congratulations on your new home! Your unit [X] has been handed over. For any queries or snags, WhatsApp us at [number]." | Within 1 hr of handover |

### Mock Demo Data — Possession Week Schedule

| Date | Time Slot | Unit | Buyer | Configuration | Payment | Snag Status | Staff |
|---|---|---|---|---|---|---|---|
| 20/12/2026 | 10:00 AM | A-401 | Rajesh Patel | 2BHK | ✅ Clear | ✅ Clear | Priya Rana |
| 20/12/2026 | 11:30 AM | A-402 | Priya Shah | 3BHK | ✅ Clear | ✅ Clear | Ankit Shah |
| 20/12/2026 | 02:00 PM | A-403 | Amit Desai | 2BHK | ✅ Clear | 🟡 1 Open Snag | Meera Patel |
| 20/12/2026 | 03:30 PM | A-404 | Sunita Mehta | 2BHK | 🔴 ₹2.1L Pending | ✅ Clear | — (blocked) |
| 21/12/2026 | 10:00 AM | A-501 | Vikram Joshi | 3BHK | ✅ Clear | ✅ Clear | Priya Rana |
| 21/12/2026 | 11:30 AM | A-502 | Deepak Trivedi | 3BHK | ✅ Clear | ✅ Clear | Rahul Modi |
| 21/12/2026 | 02:00 PM | A-503 | Kavita Agarwal | 2BHK | ✅ Clear | ✅ Clear | Ankit Shah |
| 22/12/2026 | 10:00 AM | A-801 | Pooja Sharma | 2BHK | ✅ Clear | ✅ Clear | Priya Rana |

> **A-404 (Sunita Mehta):** Possession blocked — ₹2.1L outstanding. Auto-WhatsApp reminder sent. RM Meera Patel alerted.

### Documents Auto-Generated Per Possession

| Document | Generated When | Format |
|---|---|---|
| Possession Letter | 14 days before slot | PDF — Fortiv letterhead |
| No-Dues Certificate | On payment clearance | PDF — signed by Accounts |
| Key Handover Receipt | At handover | PDF — buyer signs digitally |
| Welcome Letter | At handover | PDF — warm tone, maintenance contacts |
| Society Handover Note (when applicable) | Post-OC | PDF |

### Page Layout
**Top Countdown:** Possession date countdown + aggregate stats (ready / pending / blocked)  
**Main View (Tabbed):**
- **Calendar View:** Week-wise possession schedule with colour-coded status
- **Unit Grid:** All 240 units with status tiles — click to open unit possession card
- **Blocked Units:** Units pending payment or snag resolution — with one-click action buttons
- **Documents:** Document generation queue — generate/send for selected units

**Right Panel:** Unit possession card — full detail when unit selected  
**Alert Strip:** "8 units payment pending · 6 units open snags · Send bulk reminder?"

### Key UI Elements
- **Possession countdown clock** — "571 days · 13 hours · 42 minutes" (animated)
- **Unit status traffic light** — 🟢 Ready · 🟡 Snag Pending · 🔴 Payment Pending · ⚪ Scheduled
- **Bulk WhatsApp sender** — select units → "Send possession reminder to selected buyers"
- **Snag tracker link** — "View open snags" opens M10.4 Snag Agent filtered by unit
- **Block possession button** — auto-flags units with open payment or unresolved critical snags

---

## Data Schema — M9 Fields Reference

| Field Name | Type | Sub-module | Description |
|---|---|---|---|
| `project_id` | UUID | All | Unique project identifier |
| `project_name` | String | All | Project display name |
| `rera_number` | String | 9.1, 9.4 | Gujarat RERA registration number |
| `total_units` | Number | 9.7 | Total units in project |
| `phase_code` | String | 9.1 | P01–P15 construction phase code |
| `phase_name` | String | 9.1 | Full phase name |
| `planned_start_date` | Date | 9.1 | Baseline phase start |
| `actual_start_date` | Date | 9.1 | Actual phase start |
| `planned_end_date` | Date | 9.1 | Baseline phase completion |
| `forecast_end_date` | Date | 9.1 | Current revised forecast |
| `pct_complete` | Number (0–100) | 9.1 | Current % completion |
| `delay_days` | Number | 9.1 | Days behind baseline (0 if on time) |
| `critical_path` | Boolean | 9.1 | True if on critical path to possession |
| `cascade_impact_days` | Number | 9.1 | Downstream delay in days |
| `responsible_person` | String | 9.1 | Phase owner name |
| `contractor_id` | UUID | 9.2 | Subcontractor unique ID |
| `contractor_name` | String | 9.2 | Subcontractor company name |
| `trade_category` | Enum | 9.2 | Civil / MEP / Finishing / External |
| `performance_score` | Number (0–100) | 9.2 | Contractor performance score |
| `wo_number` | String | 9.2 | Work order number |
| `wo_value` | Number (₹) | 9.2 | Total work order value |
| `milestone_status` | Enum | 9.2 | Pending / Site-Certified / PM-Approved / Paid |
| `insurance_expiry` | Date | 9.2 | Contractor insurance expiry |
| `licence_expiry` | Date | 9.2 | Labour licence expiry |
| `indent_number` | String | 9.3 | Material indent ID |
| `material_name` | String | 9.3 | Material description |
| `quantity_required` | Number | 9.3 | Required quantity |
| `unit_of_measure` | String | 9.3 | cu.m / MT / bags / sq ft |
| `required_by_date` | Date | 9.3 | When needed at site |
| `po_number` | String | 9.3 | Purchase order number |
| `l1_vendor` | String | 9.3 | Lowest-quote vendor name |
| `po_value` | Number (₹) | 9.3 | PO amount |
| `delivery_status` | Enum | 9.3 | PO Sent / In Transit / Delivered / Rejected |
| `quality_inspection_status` | Enum | 9.3 | Pending / Accepted / Rejected |
| `shortage_flag` | Boolean | 9.3 | Material shortage detected |
| `approval_name` | String | 9.4 | Statutory approval name |
| `issuing_authority` | String | 9.4 | Regulatory body |
| `application_status` | Enum | 9.4 | Not Applied / Applied / Under Review / Approved |
| `days_to_deadline` | Number | 9.4 | Days until deadline/due date |
| `possession_dependency` | Boolean | 9.4 | Blocks possession if not received |
| `oc_readiness_pct` | Number (0–100) | 9.4 | OC readiness checklist % complete |
| `photo_id` | String | 9.5 | Site photo unique ID |
| `tower_tag` | String | 9.5 | Auto-tagged tower |
| `floor_tag` | String | 9.5 | Auto-tagged floor |
| `activity_tag` | String | 9.5 | Auto-tagged activity type |
| `progress_estimate` | String | 9.5 | AI progress assessment |
| `issue_flag` | Boolean | 9.5 | Safety or quality issue detected |
| `issue_type` | String | 9.5 | Issue category |
| `budget_category` | String | 9.6 | Cost category name |
| `budget_amount` | Number (₹) | 9.6 | Approved budget |
| `spent_to_date` | Number (₹) | 9.6 | Actual spend |
| `projected_final` | Number (₹) | 9.6 | Forecasted final cost |
| `variance_amount` | Number (₹) | 9.6 | Projected final vs budget |
| `overrun_flag` | Boolean | 9.6 | >10% over budget |
| `project_margin_pct` | Number (%) | 9.6 | Current forecasted margin |
| `unit_number` | String | 9.7 | Unit identifier (e.g. A-801) |
| `buyer_name` | String | 9.7 | Registered buyer |
| `payment_clearance` | Boolean | 9.7 | All payments received |
| `snag_clearance` | Boolean | 9.7 | All snags resolved |
| `possession_date_scheduled` | DateTime | 9.7 | Booked handover slot |
| `possession_completed` | Boolean | 9.7 | Handover done |
| `possession_staff` | String | 9.7 | Assigned team member |

---

## Mock Data Constants (Demo-Ready)

### Demo Project
```
Project:           Fortiv Greenview Heights
Location:          Vesu, Surat, Gujarat
Total Units:       240 (G+14 Tower A & Tower B)
Configuration:     2BHK (780–920 sq ft) · 3BHK (1,100–1,280 sq ft)
Pricing:           ₹45L–₹85L (2BHK) · ₹72L–₹1.1Cr (3BHK)
RERA Number:       GJ/RES/SURAT/2023/00847
RERA Possession:   31/12/2026
Construction Start: March 2023
Overall Progress:  67% (as of Jan 2025)
Budget:            ₹28.4 Crore
Spent to Date:     ₹16.2 Crore
Forecasted Final:  ₹30.3 Crore
Projected Margin:  42.2%
Active Contractors: 14
```

### Demo Contractor Pool
```
Mehta Civil Works         — Civil / Structural  · Score: 82 · Active
Patel Plumbing Co.        — MEP / Plumbing      · Score: 75 · Active
Shree Electricals         — MEP / Electrical    · Score: 88 · Active
Ramdev Steel              — Steel / TMT Supply  · Score: 79 · Active
Aakash Tiles              — Finishing / Tiles   · Score: 71 · Active
JP Waterproofing          — Waterproofing       · Score: 84 · Active
Green Landscaping         — External / Gardens  · Score: 68 · Active
Vimal Carpentry           — Doors / Woodwork    · Score: 76 · Active
```

### Demo Buyer Pool (for Possession Dashboard)
```
Rajesh Patel    — Unit A-401  — 2BHK — ₹54.6L — Payment Clear
Priya Shah      — Unit A-402  — 3BHK — ₹84.2L — Payment Clear
Amit Desai      — Unit A-403  — 2BHK — ₹48.5L — Payment Clear
Sunita Mehta    — Unit A-404  — 2BHK — ₹52.0L — ₹2.1L Pending
Vikram Joshi    — Unit A-501  — 3BHK — ₹78.9L — Payment Clear
Deepak Trivedi  — Unit A-502  — 3BHK — ₹82.5L — Payment Clear
Kavita Agarwal  — Unit A-503  — 2BHK — ₹46.8L — Payment Clear
Pooja Sharma    — Unit A-801  — 2BHK — ₹57.2L — Payment Clear
```

### Demo Agents
```
Priya Rana     — Senior Agent     (Possession coordinator — Vesu territory)
Rahul Modi     — Sales Manager    (Escalations, director-level)
Ankit Shah     — Agent            (Possession scheduling)
Meera Patel    — Agent            (Overdue payment follow-up)
Kiran Desai    — Team Lead        (Vadodara Skyline Residences)
```

---

## Brand & Design Parameters for M9 UI

### Color Usage

| Element | Color | Hex |
|---|---|---|
| Page background | Dark navy | #0D1B2A |
| Card / panel background | White | #FFFFFF |
| Primary brand | Deep navy | #1A3C5E |
| Accent / links / in progress | Electric blue | #2E86AB |
| Completed phase | Teal green | #1D9E75 |
| At risk / warning | Amber (pulsing on critical) | #E8A838 |
| Overrun / critical | Coral red | #D85A30 |
| Section background | Off white | #F5F6FA |

### Typography

| Use Case | Font |
|---|---|
| Module title, page headings | Playfair Display or DM Serif Display |
| Body text, labels, descriptions | DM Sans or Plus Jakarta Sans |
| All numbers, costs, percentages, timers | JetBrains Mono |

### Key Animations (Demo-Specific)

| Animation | Where | Description |
|---|---|---|
| Possession countdown | M9 Dashboard + 9.7 | Live ticking days/hours/minutes counter |
| Phase bar fill | 9.1 Gantt | Progress bars animate to % complete on load |
| Overrun pulse | 9.6 Overheads row | Red row pulses every 3 seconds |
| Photo tag animation | 9.5 Gallery | AI tag badges "type on" per photo as gallery loads |
| Cost donut spin | M9 Dashboard | Donut chart spins in and segments land at values |
| Approval deadline countdown | 9.4 | Countdown badge pulses amber for items < 14 days |
| Snag clearance tick | 9.7 | Snag resolved → checkbox ticks green with micro animation |
| Cascade impact tooltip | 9.1 | Hover delayed phase → downstream phases glow amber |

---

## Technical Integration Map for M9

| Sub-module | Feeds Into / Pulls From | Integration Type |
|---|---|---|
| 9.1 Milestone Tracker | M6.3 (RERA QPR), M10.3 (Buyer progress updates), M12 AI Brain | Data export + AI read |
| 9.2 Subcontractor Agent | M11 (Accounts / payment release), WhatsApp Business API | Payment trigger + WA delivery |
| 9.3 Procurement Tracker | M9.2 (material cost → WO), M9.6 (cost feed), WhatsApp API | Bidirectional cost + WA |
| 9.4 Approvals Monitor | M6.3 RERA QPR compile, M9.7 possession readiness | Status dependency |
| 9.5 Site Photo AI | WhatsApp Business API (photo receive), M9.1 (progress update) | WhatsApp → AI → Milestone |
| 9.6 Cost Forecaster | M9.2 (subcontractor payments), M9.3 (material costs), M11.4 (revenue) | Auto-pull from spend data |
| 9.7 Possession Dashboard | M11.1 (payment clearance), M10.2 (demand letters), M8.2 (snag work orders) | Status sync + document trigger |

---

## Summary: M9 at a Glance

| Item | Detail |
|---|---|
| Module | M9 — Project & Construction Intelligence |
| Sub-modules | 7 (9.1 → 9.7) |
| Total pages | 8 (1 dashboard + 7 sub-module pages) |
| Primary data objects | Milestones, Work Orders, POs, Approvals, Photos, Cost Entries, Possession Records |
| Demo project | Fortiv Greenview Heights — 240 units, G+14, Vesu Surat, Dec 2026 possession |
| Key output | Real-time visibility into construction health, cost forecast, and possession readiness |
| Demo focus | Milestone timeline + site photo AI-tagging + possession countdown |
| Design tone | Dark navy command centre, data-dense, engineering-grade, professional |
| Compliance | Gujarat RERA · Labour Law · GST on sub-invoices · DPDP Act 2023 |
| Currency | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Date format | DD/MM/YYYY |
| Languages | English (primary) · Hindi · Gujarati |

---

*Real Estate AI Command Center — Module 9 Build Guide*  
*by Fortiv Solutions · fortivsolutions.in*  
*Version 2.0 · Confidential*
