# M10 — Buyer Portal & Post-Sale Experience
### Real Estate AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** A branded self-service portal that transforms the buyer experience from booking to possession — keeping buyers informed, engaged, and satisfied through the longest phase of their journey.

**Document Type:** Module Build Guide & Parameter Reference  
**Module Code:** M10  
**Total Sub-Modules:** 7 (10.1 → 10.7)  
**Version:** 2.0  
**Company:** Fortiv Solutions  
**Classification:** Confidential  
**Market:** India — Gujarat Focus (Surat, Vadodara)

---

## Module Overview

### Purpose
Replace scattered buyer communications, manual payment follow-ups, and absent post-possession engagement with a **unified buyer experience engine** — one portal where every Fortiv buyer can access their documents, track construction, manage payments, log snags, and stay connected from booking day to years after possession.

### Core Problem Being Solved

| Pain Point | Without M10 | With M10 |
|---|---|---|
| Buyer information anxiety | Constant calls — "Is my project on track?" | Fortnightly automated site photo updates to WhatsApp + portal |
| Payment follow-up | Agent manually chases each buyer | Automated demand → reminder → escalation sequence |
| Document access | Buyer calls office for every document | 24/7 self-service document library on portal |
| Post-possession snags | Buyer complains on RERA/social media | Structured snag logging, AI triage, tracked resolution |
| Resale / rental | Buyer goes to competitor broker | Fortiv captures resale/rental transaction with in-house agent |
| Society handover | Chaotic, disputed, ad-hoc | Automated documentation, AGM planning, committee onboarding |
| Post-possession relationship | Lost — developer never contacts buyer again | Annual NPS, community newsletter, referral programme, new project previews |

### Demo Wow Moment
**A buyer opens their portal and sees their floor plan highlighted in the building, their payment schedule with the next due date counting down, and a WhatsApp message automatically sent with the construction update from last week** — everything automated, zero manual effort.

---

## Module-Level Parameters

| Parameter | Value |
|---|---|
| Module ID | M10 |
| Module Name | Buyer Portal & Post-Sale Experience |
| Sub-module Count | 7 |
| Primary Output | Engaged, informed buyers from booking through possession and beyond |
| Primary Users | Buyers / Homeowners, Relationship Managers, Sales Agents, Finance Team, Society Committee |
| Portal Access | Web (desktop + mobile) · WhatsApp-first for updates and alerts |
| Authentication | Aadhaar OTP · Email/Password · WhatsApp OTP |
| Languages | English · Hindi · Gujarati |
| Demo Project | Fortiv Greenview Heights, Vesu, Surat — 240 units · G+14 · Dec 2026 possession |
| Compliance | Gujarat RERA · DPDP Act 2023 · Gujarat Cooperative Societies Act (for 10.6) |
| Currency Format | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Demo Financial Period | Q1 2025 (Jan–Mar 2025) |
| Integration Modules | M9.1 (Milestones), M9.5 (Site Photos), M8.1 (Tenant Screening), M8.2 (Maintenance), M6 (Documents), M11.1 (Collections), M3.1 (AVM), M12.4 (Referrals) |

---

## Module Pages & Navigation Structure

```
M10 — Buyer Portal & Post-Sale Experience
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M10
│             (Active buyers, payment health, NPS snapshot, portal engagement stats)
│
├── [Page 2]  10.1  Buyer Self-Service Portal
│             (Buyer dashboard view, document library, unit details, communication log)
│
├── [Page 3]  10.2  Payment Schedule & Receipt Manager
│             (Demand letter tracker, payment timeline, reminder sequence, outstanding view)
│
├── [Page 4]  10.3  Construction Progress Feed
│             (Fortnightly update composer, delivery log, buyer-wise update history)
│
├── [Page 5]  10.4  Snag / Punch List Agent
│             (Snag inbox, AI triage view, resolution tracker, analytics by category)
│
├── [Page 6]  10.5  Resale & Rental Assistance Agent
│             (Listing builder, inquiry feed, agent assignment, seller update log)
│
├── [Page 7]  10.6  Society Onboarding Agent
│             (Formation checklist, resident directory, AGM planner, AMC handover tracker)
│
└── [Page 8]  10.7  Post-Possession NPS & Loyalty Bot
              (Survey dashboard, NPS score trend, detractor alerts, promoter referral tracker)
```

---

## Page 1 — Module Dashboard (M10 Overview)

### Purpose
The landing screen for Module 10. Gives the Relationship Manager and Sales Manager a real-time view of buyer health across the entire portfolio — payment status, engagement activity, snag backlog, NPS, and portal usage — all in one command view.

### Layout
- **Top Stats Bar** (5 KPI cards across)
- **Centre Left (55%):** Buyer Payment Health Summary + Upcoming Demand Notes
- **Centre Right (45%):** NPS Score Gauge + Portal Engagement Chart
- **Bottom:** Active Snag Count + Quick-access tiles to sub-modules (10.1 → 10.7)

### KPI Cards (Top Stats Bar)

| Card | Metric | Mock Value | Color |
|---|---|---|---|
| Active Buyers | Total registered buyers on portal | 186 | Primary Navy #1A3C5E |
| Portal Active (Last 7 Days) | Buyers who logged in this week | 74 (40%) | Accent Blue #2E86AB |
| Payments Overdue | Buyers with missed installments | 18 | Danger Red #D85A30 |
| Open Snags | Unresolved snag tickets | 9 | Warning Amber #E8A838 |
| NPS Score | Current rolling NPS | +62 | Success Green #1D9E75 |

### Buyer Payment Health Summary (Centre Left)

| Status | Buyer Count | Total Amount | Color |
|---|---|---|---|
| Payment Current — All Clear | 148 | — | #1D9E75 |
| Upcoming Demand Due (< 30 days) | 24 | ₹3.8 Cr | #2E86AB |
| Overdue — 1–30 Days | 9 | ₹74.2 L | #E8A838 |
| Overdue — 31–60 Days | 6 | ₹48.6 L | #D85A30 |
| Overdue — 60+ Days | 3 | ₹38.1 L | #D85A30 (pulsing) |
| **Total Outstanding** | **18 buyers** | **₹1.61 Cr** | |

### Upcoming Demand Notes (Next 30 Days)

| Milestone | Trigger Date | Buyers Affected | Total Demand Value | Status |
|---|---|---|---|---|
| Structural — Floor 12 Slab | 28/01/2025 | 38 | ₹6.4 Cr | Auto-compile pending |
| Structural — Floor 13 Slab | 18/02/2025 | 38 | ₹6.4 Cr | Not yet triggered |
| Internal Finishing Commencement | 01/03/2025 | 120 | ₹18.2 Cr | Not yet triggered |

### NPS Score Gauge (Centre Right)
Semicircle gauge showing current NPS:
- **Current NPS: +62** (Fortiv Greenview Heights, post-30-day surveys)
- Promoters: 74 buyers (score 9–10) — 62%
- Passives: 29 buyers (score 7–8) — 24%
- Detractors: 17 buyers (score 0–6) — 14%
- Trend sparkline: NPS 3 months ago: +54 → +58 → +62 (improving)

### Portal Engagement Chart (Centre Right, Below Gauge)
Bar chart — Weekly portal logins last 8 weeks:

| Week | Logins |
|---|---|
| Wk 1 (Nov) | 41 |
| Wk 2 (Nov) | 38 |
| Wk 3 (Nov) | 52 |
| Wk 4 (Nov) | 47 |
| Wk 1 (Dec) | 61 |
| Wk 2 (Dec) | 58 |
| Wk 1 (Jan) | 74 |
| Wk 2 (Jan) | 69 |

### Sub-Module Quick Access Tiles (Bottom Row)
Seven clickable tiles, each showing:
- Sub-module number + name
- One-line description
- Status badge (Active / Pending / Alert)
- Key metric today (e.g. "9 open snags", "18 overdue payments", "NPS +62")

---

## Page 2 — Sub-Module 10.1: Buyer Self-Service Portal

### What It Is
A branded, secure web portal where every Fortiv Solutions buyer can access all information about their property purchase — unit status, documents, payment schedule, construction progress, and communications — 24/7 from any device, without calling the office.

### Portal Authentication Methods

| Method | How It Works | Security Level |
|---|---|---|
| Aadhaar OTP | Enter Aadhaar number → OTP to linked mobile | High — biometric-linked |
| Email + Password | Standard login with email + self-set password | Medium |
| WhatsApp OTP | WhatsApp message with 6-digit OTP to registered number | High |
| First-time Setup | Buyer receives setup link via WhatsApp after booking confirmation | — |

### Buyer Dashboard Sections

#### Section 1 — Property Overview Card

| Field | Description | Mock Value |
|---|---|---|
| `project_name` | Project display name | Fortiv Greenview Heights |
| `unit_number` | Buyer's unit identifier | Tower A — Unit 801 |
| `configuration` | Unit type | 2BHK |
| `carpet_area` | Registered carpet area | 788 sq ft |
| `floor` | Floor number | 8th Floor |
| `tower` | Tower identifier | Tower A |
| `total_consideration` | Sale agreement value | ₹57.2 Lakhs |
| `booking_date` | Date of booking | 14/03/2023 |
| `rera_number` | Project RERA number | GJ/RES/SURAT/2023/00847 |
| `possession_target` | RERA possession date | December 2026 |
| `construction_stage` | Current active phase | Structural — Floors 9–14 (67% complete) |
| `relationship_manager` | Assigned RM | Priya Rana — +91 98765 00001 |

#### Section 2 — Payment Summary Card

| Field | Description | Mock Value |
|---|---|---|
| `total_consideration` | Agreement value | ₹57.2 Lakhs |
| `total_paid` | Amount paid to date | ₹38.6 Lakhs |
| `payment_percentage` | % of total paid | 67.5% |
| `next_installment_amount` | Next tranche due | ₹8.58 Lakhs |
| `next_installment_due_date` | When it's due | 28/02/2025 |
| `next_installment_milestone` | What triggers it | Structural Floor 12 Slab |
| `balance_outstanding` | Remaining total | ₹18.6 Lakhs |
| `last_payment_date` | Most recent payment | 10/11/2024 |
| `last_payment_amount` | Most recent amount | ₹8.58 Lakhs |

#### Section 3 — Document Library

| Document | Date | Status | Action |
|---|---|---|---|
| Booking Form | 14/03/2023 | ✅ Executed | Download PDF |
| Allotment Letter | 28/03/2023 | ✅ Issued | Download PDF |
| Sale Agreement | 22/04/2023 | ✅ Registered | Download PDF |
| Demand Letter — Foundation | 15/06/2023 | ✅ Paid | Download PDF |
| Payment Receipt — ₹8.58L | 10/11/2024 | ✅ Issued | Download PDF |
| Floor Plan — Unit A-801 | — | ✅ Available | Download PDF |
| Possession Letter | — | ⏳ Dec 2026 | Not yet issued |

#### Section 4 — Construction Progress Feed (embedded from 10.3)
Latest 3 update cards shown inline:
- Most recent update (fortnightly) with site photo thumbnail
- % complete for buyer's relevant tower
- "View all updates →" link

#### Section 5 — Communication Log
Searchable timeline of all interactions:
- WhatsApp messages sent by Fortiv system
- Email communications
- Call log entries (by agent)
- Demand letters sent
- Site visit confirmations

### Page Layout (Buyer's View)
**Left Sidebar:** Navigation — My Property · Payments · Documents · Construction Updates · My Snags · Resale/Rental · Contact RM  
**Main Panel:** Default landing = Property Overview Card + Payment Summary  
**Top Right:** Notification bell (unread updates) + Language toggle (EN / हिं / ગુ)  
**Footer:** RERA details · Fortiv contact · Grievance portal link

### Key UI Elements
- **Floor plan visual** — building cross-section with buyer's floor highlighted in accent blue
- **Payment progress bar** — horizontal bar: 67.5% filled in teal green, remainder in grey
- **Countdown to next payment** — "Next installment in 42 days — ₹8.58 Lakhs"
- **"Talk to Your RM" button** — one-tap WhatsApp / call to Priya Rana
- **Multilingual toggle** — English · Hindi · Gujarati — changes entire portal interface

---

## Page 3 — Sub-Module 10.2: Payment Schedule & Receipt Manager

### What It Is
An automated payment lifecycle system that generates demand letters when construction milestones are reached, delivers them via WhatsApp + email + portal, tracks receipt of payment, auto-generates receipts, and runs a structured reminder sequence for overdue installments.

### Payment Schedule Structure (Milestone-Linked)

| Tranche | Milestone Trigger | % of Total | Amount (₹57.2L unit) | Due After Milestone |
|---|---|---|---|---|
| Booking Amount | Booking | 5% | ₹2.86 L | At booking |
| Allotment | Allotment letter | 10% | ₹5.72 L | Within 30 days |
| Foundation | Foundation complete | 10% | ₹5.72 L | 30 days |
| Plinth / Podium | Podium complete | 10% | ₹5.72 L | 30 days |
| Floor 4 Slab | Slab Floor 4 | 10% | ₹5.72 L | 30 days |
| Floor 8 Slab | Slab Floor 8 | 10% | ₹5.72 L | 30 days |
| Floor 12 Slab | Slab Floor 12 | 15% | ₹8.58 L | 30 days |
| Brickwork Complete | Internal walls done | 10% | ₹5.72 L | 30 days |
| Possession | OC received | 20% | ₹11.44 L | At possession |
| **Total** | | **100%** | **₹57.2 L** | |

### Demand Letter Parameters

| Field | Description | Example |
|---|---|---|
| `demand_number` | Unique demand note ID | DN/GVH/2025/0847-08 |
| `buyer_name` | Registered buyer | Rajesh Patel |
| `unit_number` | Unit reference | Tower A — 801 |
| `project_name` | Project name | Fortiv Greenview Heights |
| `rera_number` | Project RERA | GJ/RES/SURAT/2023/00847 |
| `demand_tranche` | Which installment | Tranche 7 — Floor 12 Slab |
| `amount_demanded` | Amount due this tranche | ₹8,58,000 |
| `gst_amount` | GST applicable (if under-construction) | ₹51,480 (6% on ₹8.58L) |
| `total_payable` | Amount + GST | ₹9,09,480 |
| `due_date` | Payment deadline | 27/02/2025 |
| `bank_name` | Escrow account bank | HDFC Bank |
| `account_number` | Escrow account | 50200XXXXXXXX |
| `ifsc_code` | IFSC | HDFC0001234 |
| `upi_id` | UPI ID for payment | fortiv.gvh@hdfcbank |
| `qr_code` | UPI QR code embedded in PDF | ✅ Included |
| `milestone_evidence` | Photo from M9.5 confirming slab done | Attached (Tower A Floor 12 — 28/01/2025) |
| `generation_time` | When letter was created | 28/01/2025 09:14 AM |
| `delivery_status` | Sent via WhatsApp + Email + Portal | ✅ Delivered 09:17 AM |
| `buyer_acknowledged` | Did buyer open the demand? | ✅ Opened 11:42 AM |

### Payment Receipt Parameters

| Field | Description | Example |
|---|---|---|
| `receipt_number` | Receipt ID | REC/GVH/2025/0847-08 |
| `buyer_name` | Registered buyer | Rajesh Patel |
| `unit_number` | Unit reference | Tower A — 801 |
| `amount_received` | Payment received | ₹9,09,480 |
| `payment_date` | Date of payment | 14/02/2025 |
| `payment_mode` | How paid | NEFT |
| `transaction_reference` | Bank reference | NEFT250145HDFC23781 |
| `cumulative_paid` | Total paid to date | ₹46,55,480 |
| `balance_outstanding` | Remaining total | ₹10,04,520 |
| `receipt_generated_at` | Auto-generation time | 14/02/2025 03:22 PM |
| `receipt_sent_via` | Delivery channel | WhatsApp ✅ + Email ✅ + Portal ✅ |

### Payment Reminder Sequence

| Day | Trigger | Message | Channel |
|---|---|---|---|
| D-7 | 7 days before due date | "Your installment of ₹9,09,480 for Fortiv Greenview Heights (Unit A-801) is due on 27/02/2025. [UPI QR attached]" | WhatsApp |
| D-0 | Due date | "Today is your payment due date — ₹9,09,480. Pay now via UPI or bank transfer. Ref: DN/GVH/2025/0847-08." | WhatsApp + Email |
| D+3 | 3 days overdue | "Friendly reminder: your payment of ₹9,09,480 is 3 days overdue. Please pay at your earliest convenience." | WhatsApp |
| D+7 | 7 days overdue | "Your payment is 7 days overdue. To avoid any inconvenience, please clear by [date]. Contact Priya Rana for assistance." | WhatsApp + Email |
| D+15 | 15 days overdue | Escalation to Relationship Manager: "Buyer [Name], Unit A-801 — ₹9,09,480 overdue 15 days. Please call today." | RM WhatsApp alert |
| D+30 | 30 days overdue | MD-level alert + demand for interest as per sale agreement clause | Internal escalation |

### Mock Demo Data — Payment Status Board

| Buyer | Unit | Tranche | Amount | Due Date | Status |
|---|---|---|---|---|---|
| Rajesh Patel | A-801 | Floor 12 Slab | ₹9.09 L | 27/02/2025 | ⏳ Upcoming |
| Priya Shah | A-802 | Floor 12 Slab | ₹11.98 L | 27/02/2025 | ⏳ Upcoming |
| Amit Desai | A-803 | Floor 12 Slab | ₹8.43 L | 27/02/2025 | ⏳ Upcoming |
| Sunita Mehta | A-601 | Floor 8 Slab | ₹8.01 L | 10/01/2025 | 🔴 18 Days Overdue |
| Vikram Joshi | A-602 | Floor 8 Slab | ₹10.74 L | 10/01/2025 | 🟡 Paid — Receipt Issued |
| Deepak Trivedi | A-603 | Floor 8 Slab | ₹11.14 L | 10/01/2025 | 🔴 18 Days Overdue |
| Kavita Agarwal | A-401 | Plinth / Podium | ₹6.31 L | 15/12/2024 | 🔴 34 Days Overdue |
| Pooja Sharma | A-1001 | Floor 12 Slab | ₹8.01 L | 27/02/2025 | ⏳ Upcoming |

### Page Layout
**Top Tab Row:** All Buyers | Upcoming Demands | Overdue | Demand Generation Queue  
**Upcoming Demands Tab:** Milestone-linked demand calendar — what goes out when  
**Overdue Tab:** Colour-coded aging table with one-click "Send Reminder" and "Escalate to RM"  
**Demand Generation Queue:** Milestones achieved awaiting demand note batch generation with "Generate All" button  
**Right Panel:** Click any buyer row → full payment timeline from booking to possession

### Key UI Elements
- **Payment progress timeline** per buyer — booking through possession, tranches as nodes, paid = teal, upcoming = blue, overdue = red
- **Bulk demand note generator** — "Floor 12 Slab complete. Generate 38 demand notes?" one-click
- **Overdue aging badge** — days overdue counter pulsing on each overdue row
- **UPI QR in demand PDF** — embedded scannable QR in demand letter for instant payment

---

## Page 4 — Sub-Module 10.3: Construction Progress Feed

### What It Is
An automated construction progress update engine that delivers fortnightly visual site updates to every buyer — drawn from M9.5 (site photos) and M9.1 (milestone data) — via WhatsApp and the buyer portal, with zero manual effort from the sales or project team.

### Update Package Structure (Per Fortnightly Dispatch)

| Component | Source | Example Content |
|---|---|---|
| Header | System generated | "Fortiv Greenview Heights — Construction Update #18 · Jan 2025" |
| Hero Site Photo | M9.5 — AI-selected | Tower A Floor 11 slab casting in progress |
| Progress Summary | M9.1 milestone % | "Overall structural progress: 67% complete. Tower A: 84%. Tower B: 51%." |
| Phase Update | M9.1 current phase | "This fortnight: Tower A Floor 12 formwork complete. Casting scheduled 28 Jan." |
| Possession Forecast | M9.1 possession estimate | "On track for December 2026 possession." |
| Additional Photos (2–3) | M9.5 — AI-curated | Podium waterproofing + Ground floor lobby masonry |
| Next Milestone Preview | M9.1 upcoming | "Next: Tower B Floor 10 slab casting — estimated 10 Feb" |
| RM Sign-off | Auto-personalised | "Warm regards, Priya Rana — Your Relationship Manager" |

### Update Personalisation Logic

| Buyer Attribute | Personalisation Applied |
|---|---|
| Tower A buyer | Tower A-specific photos and progress % featured first |
| Tower B buyer | Tower B-specific photos and progress % featured first |
| Upper floor (9+) | Update includes specific floor progress when available |
| Selected special finishes | Update mentions when floor finishing work has begun |
| Promoter (NPS 9–10) | Update includes referral nudge: "Love your home so far? Refer a friend." |
| New buyer (< 60 days) | Extra welcoming tone + "welcome to the Fortiv family" message |

### Milestone Announcement Messages (Special Events)

| Milestone | Trigger | Message Tone | Extra Element |
|---|---|---|---|
| Tower A Topping Out | P07 100% complete | Celebratory | Time-lapse / milestone photo |
| Tower B Topping Out | P08 100% complete | Celebratory | Milestone photo |
| OC Received | P14 complete | Triumphant | Possession date confirmation |
| Possession Launch | P15 initiated | Exciting | Possession slot booking link |

### Update Delivery Log Parameters

| Field | Description | Example |
|---|---|---|
| `update_id` | Unique dispatch ID | UPDATE/GVH/2025/018 |
| `dispatch_date` | Date sent | 14/01/2025 |
| `buyers_targeted` | How many buyers received | 186 |
| `whatsapp_delivered` | Successful WhatsApp deliveries | 181 (97.3%) |
| `whatsapp_read` | Buyers who read the message | 143 (79.0%) |
| `portal_views` | Buyers who viewed on portal | 74 |
| `replies_received` | Buyers who replied with questions | 8 |
| `replies_routed_to` | Where replies went | Priya Rana (RM) |
| `update_source_photos` | Photos from M9.5 used | PHT/GVH/2025/1841 to 1846 |
| `milestone_pct_used` | Milestone data from M9.1 | Phase P07: 84%, Phase P08: 31% |

### Mock Demo — Update History Log

| Update # | Date | Headline | WhatsApp Read Rate | Replies |
|---|---|---|---|---|
| #015 | 03/12/2024 | Tower A Floor 9 slab casting complete | 76% | 4 |
| #016 | 17/12/2024 | Tower B Floor 8 structural milestone ✅ | 81% | 6 |
| #017 | 31/12/2024 | Year-end progress: 63% structural complete | 88% | 12 |
| #018 | 14/01/2025 | Tower A Floor 11 formwork underway | 79% | 8 |

### Page Layout (Admin View — RM / Manager)
**Top Stats:** Last dispatch date · Next scheduled dispatch · Read rate trend sparkline  
**Main Area:** Update history log — click any update to see full content + delivery analytics  
**Compose Panel:** "Preview Next Update" — shows auto-compiled draft before scheduled send  
**Right Panel:** Buyer engagement heatmap — which buyers never read updates (re-engagement needed?)  
**Bottom:** Milestone announcement queue — upcoming major milestones with draft announcement previews

### Key UI Elements
- **WhatsApp preview card** — shows exactly how the update will look on buyer's WhatsApp before sending
- **Read rate bar** — per-update horizontal bar showing delivery → delivered → read %
- **"Send Now" override button** — manually trigger an update outside the fortnightly schedule (e.g. for a major milestone)
- **Buyer non-engagement badge** — buyers who haven't opened the last 3 updates flagged for RM follow-up

---

## Page 5 — Sub-Module 10.4: Snag / Punch List Agent

### What It Is
A structured post-possession defect management system where buyers log snags via WhatsApp or portal, AI triages each case, a work order is auto-created and tracked through resolution, and the buyer is kept updated at every step — preventing RERA grievance filings through transparency and accountability.

### Snag Submission Flow
```
[Buyer sends WhatsApp to Fortiv Snag Bot: +91 9XXXXXXXX]
  Message: "Bathroom floor tile has a crack near the door." + photo
        ↓
[AI classifies: Category = Civil — Flooring · Severity = Cosmetic · Warranty = Within Scope]
        ↓
[Snag ticket created: SN-1047]
        ↓
[Buyer receives: "Your snag #SN-1047 has been registered. Civil — Flooring.
                  Expected resolution: 5 working days. You'll hear from us shortly."]
        ↓
[Work order created in M8.2 and assigned to Aakash Tiles (site vendor)]
        ↓
[Vendor notified via WhatsApp with unit address + snag photo + description]
        ↓
[Buyer update: "Work team scheduled: Tomorrow, 16/01/2025, between 10 AM–12 PM."]
        ↓
[Vendor marks complete → Buyer receives: "Has your snag been resolved? Reply YES or NO."]
        ↓
[Buyer: YES → Ticket closed · Buyer: NO → Re-escalated to site manager]
```

### Snag Ticket Parameters

| Field | Description | Example |
|---|---|---|
| `snag_id` | Unique ticket ID | SN-1047 |
| `unit_number` | Buyer's unit | Tower A — Unit 801 |
| `buyer_name` | Registered buyer | Rajesh Patel |
| `buyer_phone` | WhatsApp contact | +91 98765 43210 |
| `submission_channel` | How it was raised | WhatsApp |
| `description` | Buyer's description | "Bathroom floor tile crack near door" |
| `photo_attached` | Photo provided? | ✅ 1 photo |
| `ai_category` | AI-classified type | Civil — Flooring |
| `ai_severity` | Cosmetic / Functional / Structural | Cosmetic |
| `warranty_coverage` | In scope / Chargeable | ✅ Within Warranty |
| `work_order_id` | Linked WO in M8.2 | WO/GVH/POST/2025/018 |
| `assigned_vendor` | Assigned contractor | Aakash Tiles |
| `expected_resolution_days` | SLA days | 5 working days |
| `status` | Current ticket status | Resolved — Buyer Confirmed |
| `opened_date` | When raised | 14/01/2025 |
| `resolved_date` | When confirmed closed | 17/01/2025 |
| `resolution_days_taken` | Actual turnaround | 3 days |
| `buyer_satisfaction` | Buyer sign-off | ✅ YES — Satisfied |
| `escalated` | Was it escalated? | No |
| `re_opened` | Buyer re-opened? | No |

### AI Triage Classification Matrix

| Category | Sub-category | Default Severity | SLA | Warranty |
|---|---|---|---|---|
| Civil — Flooring | Crack / Loose tile / Hollow tile | Cosmetic | 5 days | ✅ In scope |
| Civil — Walls | Plaster crack / Paint peeling | Cosmetic | 7 days | ✅ In scope |
| Civil — Structural | Crack in column / beam / slab | 🔴 Structural | Same day | ✅ In scope |
| Civil — Doors/Windows | Door not closing / window gap | Functional | 3 days | ✅ In scope |
| MEP — Plumbing | Leaking tap / blocked drain | Functional | 2 days | ✅ In scope |
| MEP — Electrical | Point not working / trip | Functional | 1 day | ✅ In scope |
| MEP — Electrical | Loose wiring visible | 🔴 Safety | Same day | ✅ In scope |
| Finishing — Carpentry | Cabinet hinge broken | Cosmetic | 5 days | ✅ In scope |
| Damage by Buyer | Buyer-caused damage | — | Chargeable | ❌ Not in warranty |

### Mock Demo Data — Active Snag Board

| Snag ID | Unit | Buyer | Category | Severity | Status | Days Open |
|---|---|---|---|---|---|---|
| SN-1041 | A-401 | Rajesh Patel | MEP — Plumbing | Functional | ✅ Resolved | 2 days |
| SN-1042 | A-402 | Priya Shah | Civil — Flooring | Cosmetic | 🔵 Vendor Assigned | 4 days |
| SN-1043 | A-403 | Amit Desai | Civil — Walls | Cosmetic | 🔵 Scheduled | 3 days |
| SN-1044 | A-501 | Vikram Joshi | MEP — Electrical | Functional | 🔵 Work in Progress | 1 day |
| SN-1045 | A-502 | Deepak Trivedi | Civil — Doors | Functional | ✅ Resolved | 3 days |
| SN-1046 | A-503 | Kavita Agarwal | Finishing — Carpentry | Cosmetic | 🟡 Pending Vendor | 6 days |
| SN-1047 | A-801 | Pooja Sharma | Civil — Flooring | Cosmetic | 🟡 Pending Vendor | 5 days |
| SN-1048 | A-1001 | Mahesh Khanna | MEP — Plumbing | Functional | 🔴 Escalated | 9 days |
| SN-1049 | A-1002 | Ritu Bhandari | Civil — Walls | Cosmetic | 🔵 Registered | 1 day |

### Snag Analytics (Admin View)

| Metric | Value |
|---|---|
| Total Snags (Post-possession) | 49 |
| Resolved | 40 (81.6%) |
| Open | 9 (18.4%) |
| Avg Resolution Time | 4.2 days |
| Buyer Satisfaction Rate | 94.7% (satisfied on first resolution) |
| Most Common Category | Civil — Flooring (28%) |
| Re-opened Snags | 3 |
| Escalated Snags | 2 |

### Page Layout
**Top Tabs:** All Snags | Open | Resolved | Escalated | Analytics  
**Main Table:** Snag board sorted by days open (oldest first) with colour-coded status badges  
**Right Panel:** Click any snag → full timeline from submission to resolution  
**Analytics Tab:** Category breakdown donut + resolution time histogram + floor-wise heatmap  
**Alert Strip:** "SN-1048 — Mahesh Khanna — 9 days open — Escalated. Awaiting site manager."

### Key UI Elements
- **SLA countdown badge** — days remaining vs SLA per open snag
- **Structural snag alert** — any structural-severity snag triggers full-screen red alert banner
- **WhatsApp snag submission link** — buyer-facing QR code on possession letter linking to snag bot
- **Floor heatmap** — shows which floors / towers have highest snag concentration for QC learning

---

## Page 6 — Sub-Module 10.5: Resale & Rental Assistance Agent

### What It Is
An AI-powered post-possession revenue engine — when an existing Fortiv buyer wants to resell or rent their unit, this agent creates the listing, qualifies incoming buyers via WhatsApp chatbot, assigns a Fortiv agent to manage the transaction, and keeps the seller updated throughout — ensuring Fortiv earns brokerage on secondary transactions instead of losing them to independent brokers.

### Trigger Events (How Resale/Rental Is Initiated)

| Trigger | Channel | What Happens |
|---|---|---|
| Buyer clicks "Resell My Unit" on portal | Portal | Resale intent form opens |
| Buyer sends "I want to sell my flat" on WhatsApp | WhatsApp | AI chatbot collects intent and unit details |
| RM flags a buyer as resale-intent in CRM | M4 CRM | Resale agent automatically activated |
| NPS survey response includes "planning to sell" | M10.7 | Agent proactively reaches out |

### Resale Listing Parameters

| Field | Description | Example |
|---|---|---|
| `listing_id` | Unique listing ID | RSL/GVH/2025/004 |
| `listing_type` | Resale / Rental | Resale |
| `unit_number` | Unit to be listed | Tower A — Unit 1201 |
| `configuration` | Unit type | 3BHK |
| `carpet_area` | Carpet area (RERA) | 1,142 sq ft |
| `floor` | Floor | 12th Floor |
| `project_name` | Project | Fortiv Greenview Heights |
| `rera_number` | RERA ref | GJ/RES/SURAT/2023/00847 |
| `seller_name` | Current owner | Mahesh Khanna |
| `avm_valuation` | AI valuation from M3.1 | ₹88.4 Lakhs |
| `asking_price` | Seller's asking price | ₹91 Lakhs |
| `listing_photos` | Photos from site archive / buyer | 6 photos |
| `listing_description` | AI-generated listing copy | "Premium 3BHK at Fortiv Greenview Heights, Vesu, Surat..." |
| `portals_listed` | Distribution platforms | 99acres, MagicBricks, Fortiv Platform |
| `listing_date` | When published | 14/01/2025 |
| `inquiries_received` | Inbound interest count | 7 inquiries |
| `site_visits_done` | Visits arranged | 3 |
| `offers_received` | Formal offers | 1 (₹88 Lakhs) |
| `assigned_agent` | Fortiv agent handling | Rahul Modi |
| `commission_rate` | Fortiv brokerage | 1.5% of sale value |
| `status` | Listing status | Active — Negotiation |

### Rental Listing Additions

| Field | Description | Example |
|---|---|---|
| `rental_type` | Residential / Commercial | Residential |
| `expected_rent_avm` | Recommended rent from M3.5 | ₹28,000/month |
| `asking_rent` | Landlord's asking rent | ₹30,000/month |
| `furnishing_status` | Unfurnished / Semi / Fully | Semi-furnished |
| `tenant_screening` | Linked to M8.1 | ✅ Active — 2 applicants |
| `top_tenant_score` | Best applicant score (0–100) | 84 |

### Seller Update WhatsApp Messages

| Event | Auto-Message |
|---|---|
| New inquiry received | "You have a new inquiry for Unit A-1201. Buyer: Ritu Bhandari. Budget: ₹85–95L. Our agent Rahul Modi will coordinate a site visit." |
| Site visit scheduled | "A site visit for Unit A-1201 is scheduled for 18/01/2025 at 11 AM. Buyer: Ritu Bhandari. Rahul Modi will be present." |
| Offer received | "An offer of ₹88 Lakhs has been received for Unit A-1201. Our agent will discuss next steps with you today." |
| Offer accepted | "Congratulations! ₹88 Lakhs offer accepted. Rahul Modi will guide you through the documentation process." |

### Mock Demo Data — Active Resale / Rental Listings

| Listing ID | Type | Unit | Seller | Asking | Status | Inquiries |
|---|---|---|---|---|---|---|
| RSL/GVH/2025/001 | Resale | A-302 | Arjun Malhotra | ₹52 L | ✅ Deal Signed | 12 |
| RSL/GVH/2025/002 | Rental | A-501 | Vikram Joshi | ₹22K/mo | 🔵 Tenant Screening | 4 |
| RSL/GVH/2025/003 | Resale | A-702 | Nisha Verma | ₹68 L | 🔵 Visits in Progress | 5 |
| RSL/GVH/2025/004 | Resale | A-1201 | Mahesh Khanna | ₹91 L | 🟡 Offer in Negotiation | 7 |
| RSL/GVH/2025/005 | Rental | B-301 | Sanjay Kapoor | ₹18K/mo | 🔵 Listed — 1 Inquiry | 1 |

### Page Layout
**Top Tabs:** Active Listings | New Intent (Pending Listing) | Closed Deals | Analytics  
**Main Table:** Listing board with type badge (Resale/Rental), status, inquiry count, assigned agent  
**Right Panel:** Click any listing → full listing detail + inquiry log + seller update history  
**Analytics Panel:** Total listings this year · Total brokerage earned · Avg days to close

### Key UI Elements
- **AVM vs Asking Price** comparison badge — "AVM: ₹88.4L · Asking: ₹91L (↑ 2.9% over AVM)"
- **"List This Unit" button** — pre-fills listing form from CRM unit data in one click
- **Portal syndication status** — green ticks for 99acres / MagicBricks / Fortiv Platform
- **Seller update log** — timeline of all auto-sent WhatsApp updates to seller per listing

---

## Page 7 — Sub-Module 10.6: Society Onboarding Agent

### What It Is
An automated post-possession society formation and handover system — managing the legal, administrative, and operational steps to form a Resident Welfare Association (RWA/Society) and smoothly transition property management responsibilities from Fortiv Solutions to the residents.

### Society Formation Checklist (Master Progress Tracker)

| Step | Description | Status | Responsible |
|---|---|---|---|
| 1 | OC received — possession complete (prerequisite) | ✅ Done (Dec 2026) | Project Team |
| 2 | Compile resident directory from buyer records | ✅ Auto-compiled | System |
| 3 | Draft society bye-laws (Gujarat Cooperative Act) | 🔵 In Progress | Legal Team |
| 4 | First AGM notice sent to all residents | ⏳ Scheduled Jan 2027 | System |
| 5 | First AGM conducted — committee elected | ⏳ Pending | Society |
| 6 | Society registration filed with Registrar | ⏳ Pending | Legal Team |
| 7 | Society registration received | ⏳ Pending | — |
| 8 | Bank account opened in society name | ⏳ Pending | Committee |
| 9 | Maintenance charge collection setup (M8.3) | ⏳ Pending | Finance + Committee |
| 10 | Common area documentation transferred | ⏳ Pending | Project Team |
| 11 | AMC contracts handed over to committee | ⏳ Pending | Project Team |
| 12 | Sinking fund calculation shared | ⏳ Pending | Finance |
| 13 | Society WhatsApp group created | ⏳ Pending | System |
| 14 | Society formally operational | ⏳ Pending | — |

### Resident Directory Parameters (Auto-compiled from Buyer Records)

| Field | Source | Example |
|---|---|---|
| `unit_number` | CRM | A-801 |
| `tower` | CRM | Tower A |
| `floor` | CRM | 8th Floor |
| `owner_name` | CRM (buyer name) | Rajesh Patel |
| `owner_phone` | CRM | +91 98765 43210 |
| `owner_email` | CRM | rajesh.patel@gmail.com |
| `whatsapp_active` | M1.5 enrichment | ✅ Active |
| `possession_date` | M9.7 | 22/12/2026 |
| `resident_status` | Self-occupying / Tenant / Vacant | Self-occupying |
| `tenant_name` | M8.1 (if rental) | — |
| `tenant_phone` | M8.1 | — |

### AGM Planner Parameters

| Item | Detail |
|---|---|
| Notice period required | 14 days (Gujarat Cooperative Act) |
| Notice delivery | WhatsApp + Email to all residents + Notice board PDF |
| Agenda items | Election of committee · Adoption of bye-laws · Maintenance charge approval · Sinking fund approval |
| Quorum requirement | 25% of members (minimum 60 of 240 for Greenview Heights) |
| Minutes | Auto-generated draft minutes sent to committee within 48 hrs |
| Follow-up | Non-attending residents receive meeting summary and resolutions passed |

### AMC Handover Tracker

| AMC Contract | Vendor | Contract Value/Year | Expiry | Status |
|---|---|---|---|---|
| Elevator Maintenance | Otis India | ₹2.4 L/year | Mar 2027 | 🔵 To Be Transferred |
| DG Set Maintenance | Cummins India | ₹1.8 L/year | Jun 2027 | 🔵 To Be Transferred |
| STP / Water Treatment | Thermax | ₹1.2 L/year | Dec 2026 | 🔵 To Be Transferred |
| Fire Fighting System | Johnson Controls | ₹0.9 L/year | Feb 2027 | 🔵 To Be Transferred |
| Swimming Pool | AquaCare Surat | ₹0.6 L/year | Aug 2027 | 🔵 To Be Transferred |
| CCTV & Security | G4S India | ₹1.1 L/year | Jan 2027 | 🔵 To Be Transferred |
| Housekeeping | Clean India Services | ₹3.6 L/year | Month-to-month | 🔵 To Be Transferred |

### Maintenance Charge Calculation (Per Unit — Sample)

| Component | Basis | Rate | Monthly Charge |
|---|---|---|---|
| Common area maintenance | Per sq ft carpet | ₹2.5/sq ft/month | ₹1,970 (for 788 sq ft) |
| Sinking fund contribution | Per sq ft carpet | ₹0.5/sq ft/month | ₹394 |
| Staff salaries (pro-rata) | Per unit equal | — | ₹280 |
| AMC charges (pro-rata) | Per unit equal | — | ₹480 |
| **Total Monthly Maintenance** | | | **₹3,124/unit** |

### Page Layout
**Top:** Society formation progress bar (Steps 1–14, % complete)  
**Main Tabs:** Formation Checklist · Resident Directory · AGM Planner · AMC Handover · Maintenance Setup  
**Formation Checklist Tab:** Step-by-step tracker with status badges and "Mark Complete" for each step  
**Resident Directory Tab:** Searchable table of all 240 units with owner/tenant details and WhatsApp status  
**AGM Tab:** AGM notice composer + attendance tracker + minutes generator  
**AMC Tab:** Full AMC register with vendor contact, contract value, and transfer status  

### Key UI Elements
- **Formation progress bar** — "Society 43% formed" completion bar at top of page
- **"Send AGM Notice" button** — one-click sends notice to all residents via WhatsApp + Email
- **Resident directory export** — download complete directory as PDF or Excel for committee
- **Maintenance charge calculator** — input carpet area → auto-calculates per-unit monthly charge

---

## Page 8 — Sub-Module 10.7: Post-Possession NPS & Loyalty Bot

### What It Is
An automated long-term satisfaction monitoring and loyalty management system that conducts periodic NPS surveys post-possession, converts satisfied buyers into referral sources, manages detractor intervention, and maintains ongoing community engagement — turning Fortiv's existing buyer base into its most powerful sales channel.

### Survey Schedule & Flow

| Survey | Trigger | Key Questions | NPS Question |
|---|---|---|---|
| Move-in Survey | 30 days post-possession | Construction quality, handover experience, flat condition | "How likely to recommend Fortiv — 0 to 10?" |
| Settling-in Survey | 3 months post-possession | Maintenance responsiveness, neighbourhood, value for money | "0 to 10 — recommend?" |
| Annual Survey | 12 months post-possession | Overall satisfaction, society performance, Fortiv responsiveness | "0 to 10 — recommend?" |
| Ongoing Annual | Every 12 months thereafter | Current satisfaction, any concerns | "0 to 10 — recommend?" |

### NPS Classification & Response Actions

| Score | Classification | Automated Action | RM Action |
|---|---|---|---|
| 9–10 | Promoter | "Thank you! Refer a friend and earn ₹10,000." + referral link | Flag for community ambassador programme |
| 7–8 | Passive | Monthly community newsletter + next project preview | Optional RM check-in at 6-month mark |
| 0–6 | Detractor | Internal alert + personalised apology message + "Our team will call you within 24 hours" | Mandatory call within 24 hours |

### Promoter Referral Programme Parameters

| Parameter | Value |
|---|---|
| Referral reward for promoter | ₹10,000 (post-booking of referred buyer) |
| Referral reward payment timing | On referred buyer's allotment |
| Tracking method | Unique referral link per promoter (linked to M12.4) |
| Attribution window | 90 days from referral link click to booking |
| Reward delivery | Bank transfer + Thank You letter from MD |
| Referral leaderboard | Top 10 referrers shown in community newsletter |

### Community Engagement Content Calendar

| Month | Content | Delivery Channel |
|---|---|---|
| Every month | Fortiv Homeowner Community Newsletter (market update, home tips, new project preview) | WhatsApp + Email |
| March | "Home Improvement Tips for the New Year" | WhatsApp |
| June | "Monsoon Proofing Your Home — 5 Tips" | WhatsApp |
| October | "Diwali Home Décor Guide" | WhatsApp |
| December | "Year in Review — Community Highlights" | WhatsApp + Email |
| New project launch | Early access invitation to existing buyers | WhatsApp + Email |

### NPS Dashboard Parameters (Admin View)

| Metric | Value |
|---|---|
| Current NPS Score | +62 |
| Survey Response Rate | 68% (119 of 175 eligible buyers surveyed) |
| Promoters | 74 buyers (62%) |
| Passives | 29 buyers (24%) |
| Detractors | 16 buyers (14%) |
| Open Detractor Cases | 3 (awaiting RM resolution) |
| Referrals Generated | 18 |
| Referral Bookings | 4 |
| Referral Revenue | ₹2.24 Cr (4 bookings × avg ₹56L) |
| Avg NPS Trend | +54 → +58 → +62 (3-quarter trend) |

### Mock Demo Data — Recent NPS Responses

| Buyer | Unit | Survey | Score | Classification | Status |
|---|---|---|---|---|---|
| Rajesh Patel | A-801 | Move-in (30 days) | 9 | 🟢 Promoter | Referral link sent |
| Priya Shah | A-802 | Move-in (30 days) | 8 | 🔵 Passive | Newsletter enrolled |
| Amit Desai | A-803 | Move-in (30 days) | 10 | 🟢 Promoter | Referral link sent · 2 referrals made |
| Sunita Mehta | A-601 | Settling-in (3 months) | 5 | 🔴 Detractor | RM called · Snag resolved · Re-survey pending |
| Vikram Joshi | A-602 | Settling-in (3 months) | 9 | 🟢 Promoter | Referral link sent · 1 referral booked |
| Deepak Trivedi | A-603 | Settling-in (3 months) | 7 | 🔵 Passive | Monthly newsletter |
| Kavita Agarwal | A-503 | Move-in (30 days) | 10 | 🟢 Promoter | Ambassador programme invited |
| Pooja Sharma | A-1001 | Move-in (30 days) | 4 | 🔴 Detractor | RM escalated · Open case |

### Page Layout
**Top Stats Bar:** NPS Score gauge · Promoter % · Detractor % · Open detractor cases · Referrals generated  
**Main Tabs:** NPS Overview | Survey Responses | Detractor Cases | Referral Tracker | Community Engagement  
**NPS Overview Tab:** NPS trend line chart + promoter/passive/detractor donut + property-wise NPS comparison  
**Detractor Cases Tab:** All open detractor cases with days since survey, RM assigned, resolution status  
**Referral Tracker Tab:** Per-promoter referral count, attributed bookings, rewards paid  
**Community Engagement Tab:** Newsletter send log, open rates, community content calendar  

### Key UI Elements
- **NPS gauge** — prominent semicircle gauge: current score +62, scale -100 to +100
- **Detractor alert card** — red alert for any uncontacted detractor > 24 hours since survey
- **Referral leaderboard** — top 5 promoters with referral count and reward status
- **NPS trend sparkline** — 8-quarter NPS history showing improvement trajectory
- **"Preview Newsletter" button** — shows current month's community newsletter before dispatch

---

## Data Schema — M10 Fields Reference

| Field Name | Type | Sub-module | Description |
|---|---|---|---|
| `buyer_id` | UUID | All | Unique buyer CRM identifier |
| `unit_number` | String | All | Unit identifier (e.g. A-801) |
| `buyer_name` | String | All | Registered buyer full name |
| `buyer_phone` | String | All | WhatsApp-active mobile number |
| `buyer_email` | String | All | Email address |
| `portal_login_method` | Enum | 10.1 | Aadhaar OTP / Email+Password / WhatsApp OTP |
| `portal_last_login` | DateTime | 10.1 | Last portal access timestamp |
| `total_consideration` | Number (₹) | 10.1, 10.2 | Sale agreement value |
| `amount_paid` | Number (₹) | 10.2 | Cumulative collected |
| `balance_outstanding` | Number (₹) | 10.2 | Remaining payable |
| `next_installment_amount` | Number (₹) | 10.2 | Next tranche amount |
| `next_installment_due` | Date | 10.2 | Due date for next tranche |
| `payment_status` | Enum | 10.2 | Current / Upcoming / Overdue |
| `overdue_days` | Number | 10.2 | Days past due date |
| `demand_number` | String | 10.2 | Demand note ID |
| `demand_delivery_status` | Enum | 10.2 | Generated / Sent / Delivered / Acknowledged |
| `receipt_number` | String | 10.2 | Payment receipt ID |
| `update_id` | String | 10.3 | Construction update dispatch ID |
| `update_read` | Boolean | 10.3 | Did buyer read the update? |
| `update_replied` | Boolean | 10.3 | Did buyer reply with a question? |
| `snag_id` | String | 10.4 | Snag ticket ID |
| `snag_category` | String | 10.4 | Civil / MEP / Finishing type |
| `snag_severity` | Enum | 10.4 | Cosmetic / Functional / Structural |
| `snag_status` | Enum | 10.4 | Registered / Assigned / In Progress / Resolved / Escalated |
| `snag_resolution_days` | Number | 10.4 | Actual days taken to resolve |
| `buyer_satisfied` | Boolean | 10.4 | YES / NO on resolution confirmation |
| `listing_id` | String | 10.5 | Resale/rental listing ID |
| `listing_type` | Enum | 10.5 | Resale / Rental |
| `asking_price` | Number (₹) | 10.5 | Seller's asking price |
| `avm_valuation` | Number (₹) | 10.5 | AI valuation from M3.1 |
| `listing_inquiries` | Number | 10.5 | Inquiry count received |
| `listing_status` | Enum | 10.5 | Active / Under Offer / Closed |
| `society_step_status` | Enum | 10.6 | Per step: Pending / In Progress / Complete |
| `resident_status` | Enum | 10.6 | Self-occupying / Tenant / Vacant |
| `amc_transfer_status` | Enum | 10.6 | Pending / Transferred |
| `nps_score` | Number (0–10) | 10.7 | NPS rating given |
| `nps_classification` | Enum | 10.7 | Promoter / Passive / Detractor |
| `nps_survey_date` | Date | 10.7 | When survey was completed |
| `detractor_case_open` | Boolean | 10.7 | Open resolution case for detractor |
| `detractor_resolved` | Boolean | 10.7 | Case resolved |
| `referral_link_sent` | Boolean | 10.7 | Referral link delivered to promoter |
| `referrals_made` | Number | 10.7 | Referred leads from this promoter |
| `referral_bookings` | Number | 10.7 | Referred leads that booked |
| `referral_reward_paid` | Boolean | 10.7 | ₹10,000 reward disbursed |

---

## Mock Data Constants (Demo-Ready)

### Demo Project
```
Project:              Fortiv Greenview Heights
Location:             Vesu, Surat, Gujarat
Total Units:          240 (Tower A + Tower B · G+14)
Configuration:        2BHK (780–920 sq ft) · 3BHK (1,100–1,280 sq ft)
Pricing:              ₹45L–₹85L (2BHK) · ₹72L–₹1.1Cr (3BHK)
RERA Number:          GJ/RES/SURAT/2023/00847
Possession:           December 2026
Registered Buyers:    186
Portal Signups:       186 (100%)
Portal Active (7d):   74 (40%)
```

### Demo Buyer Pool

```
Rajesh Patel      — Unit A-801  — 2BHK — ₹57.2L — Promoter (NPS 9)  — Priya Rana (RM)
Priya Shah        — Unit A-802  — 3BHK — ₹84.2L — Passive (NPS 8)   — Priya Rana (RM)
Amit Desai        — Unit A-803  — 2BHK — ₹48.5L — Promoter (NPS 10) — 2 referrals made
Sunita Mehta      — Unit A-601  — 2BHK — ₹52.0L — Detractor (NPS 5) — Payment 18 days overdue
Vikram Joshi      — Unit A-602  — 3BHK — ₹82.5L — Promoter (NPS 9)  — 1 referral booked
Deepak Trivedi    — Unit A-603  — 3BHK — ₹79.5L — Passive (NPS 7)   — Ankit Shah (RM)
Kavita Agarwal    — Unit A-503  — 2BHK — ₹46.8L — Promoter (NPS 10) — Ambassador programme
Pooja Sharma      — Unit A-1001 — 2BHK — ₹57.2L — Detractor (NPS 4) — Open escalation case
Mahesh Khanna     — Unit A-1201 — 3BHK — ₹91.0L — Resale listed     — Rahul Modi (agent)
Ritu Bhandari     — Unit A-1002 — 2BHK — ₹52.0L — New (NPS pending) — Meera Patel (RM)
```

### Demo Agents / Relationship Managers
```
Priya Rana     — Senior Agent / RM   (handles Hot buyers + post-possession — Vesu territory)
Rahul Modi     — Sales Manager       (handles resale, escalations, large-ticket buyers)
Ankit Shah     — Agent / RM          (handles mid-tier buyers, Tower B)
Meera Patel    — Agent / RM          (handles new buyers, nurture, community engagement)
Kiran Desai    — Team Lead           (handles Vadodara — Skyline Residences buyers)
```

---

## Brand & Design Parameters for M10 UI

### Color Usage

| Element | Color | Hex |
|---|---|---|
| Page background | Dark navy | #0D1B2A |
| Card / panel background | White | #FFFFFF |
| Primary brand | Deep navy | #1A3C5E |
| Accent / active / portal highlights | Electric blue | #2E86AB |
| Paid / resolved / promoter | Teal green | #1D9E75 |
| Overdue / at risk / passive | Amber | #E8A838 |
| Critical overdue / detractor / structural snag | Coral red | #D85A30 |
| Section background / portal page bg | Off white | #F5F6FA |
| WhatsApp elements | WhatsApp Green | #25D366 |

### Typography

| Use Case | Font |
|---|---|
| Module title, page headings, portal headers | Playfair Display or DM Serif Display |
| Body text, labels, navigation, form fields | DM Sans or Plus Jakarta Sans |
| All ₹ amounts, percentages, dates, scores | JetBrains Mono |

### Key Animations (Demo-Specific)

| Animation | Where | Description |
|---|---|---|
| Payment progress bar fill | 10.1 Buyer Portal | Bar animates from 0 to 67.5% on portal load |
| NPS gauge sweep | 10.7 Dashboard | Gauge needle sweeps to +62 on page load |
| Demand note generation burst | 10.2 | "38 demand notes generating..." counter ticks up |
| Snag status pipeline | 10.4 | Status moves Registered → Assigned → Resolved with timeline animation |
| Fortnightly update WhatsApp | 10.3 | WhatsApp phone mockup shows update message arriving |
| Detractor alert pulse | 10.7 | Red detractor cards pulse every 3 seconds |
| Referral counter tick | 10.7 | "18 referrals generated" count ticks up on load |
| Portal login animation | 10.1 | OTP input → dashboard reveal with floor plan highlight |

---

## Technical Integration Map for M10

| Sub-module | Feeds Into / Pulls From | Integration Type |
|---|---|---|
| 10.1 Buyer Portal | M6 (Document AI), M9.1 (Milestones), M9.5 (Photos), M11.1 (Payments) | Read-only portal display of live data |
| 10.2 Payment Manager | M9.1 (milestone trigger), M11.1 (collections), WhatsApp Business API | Milestone event → Demand generation → WA delivery |
| 10.3 Progress Feed | M9.1 (milestone %), M9.5 (site photos), WhatsApp Business API | Auto-pull → compose → batch WhatsApp send |
| 10.4 Snag Agent | WhatsApp Business API (snag intake), M8.2 (work order), M9.7 (pre-possession snags) | WA receive → AI → WO create → WA update |
| 10.5 Resale Agent | M3.1 (AVM valuation), M3.5 (rental market), M2.1 (chatbot qualify), M8.1 (tenant screen) | AI valuation + chatbot qualification |
| 10.6 Society Agent | CRM buyer records (directory), M8.3 (rent collection setup), WhatsApp (AGM notice) | Auto-compile + WA/email delivery |
| 10.7 NPS & Loyalty | WhatsApp (survey delivery), M12.4 (referral tracking), M4 CRM (detractor alerts) | Scheduled survey → NPS scoring → CRM alert |

---

## Summary: M10 at a Glance

| Item | Detail |
|---|---|
| Module | M10 — Buyer Portal & Post-Sale Experience |
| Sub-modules | 7 (10.1 → 10.7) |
| Total pages | 8 (1 dashboard + 7 sub-module pages) |
| Primary data objects | Buyer records, Payment schedules, Snag tickets, NPS surveys, Listings, Society records |
| Demo project | Fortiv Greenview Heights — 240 units · G+14 · Vesu Surat · Dec 2026 possession |
| Key output | Engaged buyers from booking to possession + post-possession loyalty & referral engine |
| Demo focus | Buyer portal opening with animated floor plan + payment countdown + auto WhatsApp update |
| Design tone | Dark navy admin view + clean white buyer portal · Trust-building · Transparent |
| Compliance | Gujarat RERA · DPDP Act 2023 · Gujarat Cooperative Societies Act |
| Currency | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Date format | DD/MM/YYYY |
| Languages | English (primary) · Hindi · Gujarati |

---

*Real Estate AI Command Center — Module 10 Build Guide*  
*by Fortiv Solutions · fortivsolutions.in*  
*Version 2.0 · Confidential*
