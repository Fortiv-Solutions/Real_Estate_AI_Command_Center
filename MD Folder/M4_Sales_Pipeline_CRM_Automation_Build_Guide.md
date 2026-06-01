# M4 — Sales Pipeline & CRM Automation
### Real Estate AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** Automates every step of the sales journey from first contact to registration — so no deal falls through, no follow-up is missed, and every agent has a clear view of what to do next.

**Document Type:** Module Build Guide & Parameter Reference  
**Module Code:** M4  
**Total Sub-Modules:** 6 (4.1 → 4.6)  
**Version:** 2.0  
**Company:** Fortiv Solutions  
**Classification:** Confidential  
**Market:** India — Gujarat Focus (Surat, Vadodara)

---

## Module Overview

### Purpose
Replace disconnected, agent-dependent deal tracking with an **autonomous sales pipeline engine** that keeps every deal moving — automating follow-ups, syncing data across all channels, scheduling and confirming visits, nurturing cold leads, and giving every stakeholder a real-time view of the full pipeline from first inquiry to property registration.

### Core Problem Being Solved

| Pain Point | Without M4 | With M4 |
|---|---|---|
| Data integrity | 30–40% duplicate leads across portals | Auto-dedup — one clean record per buyer |
| Site visit no-shows | No-show rate 30–45% (no reminders) | Automated multi-step reminders — no-shows drop 35–45% |
| Post-visit follow-up | 1–2 agent touchpoints, then abandoned | 7 automated, personalised touchpoints per buyer |
| Lead nurturing | Long-horizon leads lost, not followed up | 30/60/90-day multi-track drip keeps every lead warm |
| Pipeline visibility | Manager finds out at month-end | Real-time deal board — stage, value, urgency — always visible |
| Listing content | 45–90 min per listing, inconsistent quality | AI writes listing in 30 seconds across all formats |

### Demo Wow Moment
**Live deal pipeline board** — cards moving stages in real time, a WhatsApp follow-up triggering automatically after a visit is marked complete, and an AI listing dropping into all portal formats simultaneously within 30 seconds.

---

## Module-Level Parameters

| Parameter | Value |
|---|---|
| Module ID | M4 |
| Module Name | Sales Pipeline & CRM Automation |
| Sub-module Count | 6 |
| Primary Output | Active deals tracked stage-to-registration; automated touchpoints executed without agent input |
| Primary Users | Sales Agents, Sales Manager, Marketing Team, Management |
| CRM Compatibility | Zoho CRM · HubSpot · Salesforce · Custom CRM via API |
| Pipeline Stages | Inquiry → Site Visit Scheduled → Visited → Negotiation → Booking Amount Paid → Agreement Signed → Loan Processing → Full Payment → Registration |
| Channels | WhatsApp (primary) · Email (secondary) · SMS (tertiary) |
| Languages | English · Hindi · Gujarati |
| Calendar Integration | Google Calendar |
| Listing Platforms | 99acres · MagicBricks · Fortiv Website |
| Compliance | DPDP Act 2023 · RERA (Gujarat) |
| Currency Format | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Demo Financial Period | Q1 2025 (Jan–Mar 2025) |

---

## Module Pages & Navigation Structure

```
M4 — Sales Pipeline & CRM Automation
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M4
│             (Pipeline health KPIs, deal board summary, today's actions)
│
├── [Page 2]  4.1  CRM Sync & Deduplication
│             (Sync log, dedup merge view, field normalisation status)
│
├── [Page 3]  4.2  Site Visit Scheduler
│             (Calendar view, upcoming visits, reminder log, no-show tracker)
│
├── [Page 4]  4.3  Post-Visit Follow-Up Agent
│             (Follow-up sequence tracker, objection handling log, buyer response feed)
│
├── [Page 5]  4.4  Nurture Drip Engine
│             (Track A/B/C drip status, engagement signal feed, content calendar)
│
├── [Page 6]  4.5  Deal Pipeline Tracker
│             (Kanban board view, deal card details, stuck deal alerts, velocity metrics)
│
└── [Page 7]  4.6  AI Listing Writer
              (Input form, format selector, generated output preview, one-click publish)
```

---

## Page 1 — Module Dashboard (M4 Overview)

### Purpose
The landing screen for Module 4. Provides a complete, real-time health check of the entire sales pipeline — active deals by stage, follow-up queue, today's visit schedule, and conversion metrics at a glance.

### Layout
- **Top Stats Bar** (4 KPI cards across)
- **Centre Left:** Kanban Pipeline Summary (condensed — deal count per stage)
- **Centre Right:** Today's Activity Feed (visits, follow-ups, messages sent)
- **Bottom:** Quick-access tiles to each sub-module (4.1 → 4.6)

### KPI Cards (Top Stats Bar)

| Card | Metric | Mock Value | Colour |
|---|---|---|---|
| Active Deals | Total deals currently in pipeline | 23 | Primary Navy #1A3C5E |
| In Negotiation | Deals at Negotiation stage | 6 | Amber #E8A838 (pulsing) |
| Bookings This Month | Deals reaching Booking Amount Paid | 4 | Success Green #1D9E75 |
| Pipeline Value | Total ₹ value of all active deals | ₹4.2 Cr | Accent Blue #2E86AB |

### Condensed Kanban Summary (Centre Left)
Horizontal stage strip showing count of deals per stage — clicking any stage navigates to the full Pipeline Tracker (4.5).

| Stage | Mock Count | Indicator |
|---|---|---|
| Inquiry | 8 | Grey |
| Site Visit Scheduled | 5 | Blue |
| Visited | 4 | Blue |
| Negotiation | 6 | Amber (pulsing) |
| Booking Amount Paid | 3 | Green |
| Agreement Signed | 2 | Green |
| Loan Processing | 1 | Teal |
| Full Payment | 1 | Teal |
| Registration | 0 | Grey |

### Today's Activity Feed (Centre Right)
Real-time scroll of pipeline events:
- Visit confirmations sent / completed / cancelled
- Automated follow-up messages dispatched
- Deals stage-changed (with agent name)
- Stuck deal alerts fired
- New listings published via AI Writer

### Sub-Module Quick Access Tiles (Bottom Row)
Six clickable tiles, each showing:
- Sub-module number + name
- One-line description
- Status indicator (Active / Paused)
- Actions executed today via this sub-module

---

## Page 2 — Sub-Module 4.1: CRM Sync & Deduplication

### What It Is
A **bidirectional synchronisation and data quality layer** between all lead sources and the central CRM — ensuring every lead is captured once, correctly attributed, and deduplicated before it enters the pipeline.

### Data Sources Synced

| Source | Integration Type | Sync Speed |
|---|---|---|
| Portal Lead Aggregator (M1.4) | Bidirectional API | Real-time webhook |
| WhatsApp AI Chatbot (M2.1) | Bidirectional API | Real-time webhook |
| Facebook / Google Ads (M1.3) | Bidirectional API | < 30 seconds |
| Website Widget (M2.3) | Bidirectional API | Real-time webhook |
| Manual Agent Entry | CRM direct input | Immediate |
| Inbound Call / IVR (M2.5) | Telephony integration | Real-time |

### Deduplication Logic

| Priority | Match Field | Action on Match |
|---|---|---|
| 1 (Primary) | Phone number | Merge — oldest record becomes master |
| 2 (Secondary) | Email address | Merge — oldest record becomes master |
| 3 (Tertiary) | Name + Locality | Flag for agent review before merge |

### What Gets Normalised Per Record

| Field | Normalisation Rule | Example Before | Example After |
|---|---|---|---|
| `phone` | Add +91 prefix, strip spaces/dashes | 9876543210 | +91 98765 43210 |
| `lead_name` | Title Case | RAJESH PATEL | Rajesh Patel |
| `email` | Lowercase | Rajesh.PATEL@Gmail.com | rajesh.patel@gmail.com |
| `source_tag` | Standardised enum | "fb ads", "facebook" | Facebook Lead Ads |
| `locality` | Standardised locality name | "vesu surat", "Vesu" | Vesu, Surat |
| `budget` | Split into min/max in ₹L | "50-60 lakhs" | ₹50L – ₹60L |

### CRM Push Payload (Per Lead)

| Field | Description | Example |
|---|---|---|
| `lead_id` | UUID | `lead_20250115_0047` |
| `source` | Traffic origin | Facebook Lead Ads |
| `campaign` | Ad campaign name | Greenview Heights Jan 2025 |
| `medium` | Channel type | paid_social |
| `utm_content` | Creative identifier | Vesu 2BHK Video Ad |
| `first_touch_date` | First contact timestamp | 15/01/2025 14:23:47 |
| `lead_score` | M1.6 AI score at entry | 67 |
| `intent_label` | Hot / Warm / Cold | Warm |
| `assigned_agent` | Auto-routed agent | Priya Rana |
| `assigned_project` | Matched project | Fortiv Greenview Heights |

### Bidirectional Sync (CRM → Automation)

When a CRM record is updated by an agent, the change triggers downstream automation:

| CRM Update | Downstream Trigger |
|---|---|
| Stage changed to "Site Visit Scheduled" | M4.2 scheduler activated, confirmation WhatsApp sent |
| Stage changed to "Visited" | M4.3 post-visit follow-up sequence started |
| Stage changed to "Negotiation" | M4.5 stuck deal timer starts |
| Agent adds note with keyword "price objection" | M4.3 objection-handling content sent |
| Stage changed to "Booking Amount Paid" | M6.1 agreement draft generation triggered |

### Page Layout
**Top Stat Bar:** Records synced today · Duplicates merged today · Normalisation errors (if any) · Sync health status  
**Left Panel (55%):** Live sync log — incoming records with source badge, timestamp, and normalisation status  
**Right Panel (45%):** Deduplication activity log — merge events with primary record ID, merged record ID, and reason  

### Mock Demo Data — Dedup Log

| # | Primary Record | Merged Record | Match Reason | Outcome |
|---|---|---|---|---|
| 1 | Rajesh Patel (#1042) | Rajesh Patel (#1089) | Same phone +91 98765 43210 | Merged — 99acres + MagicBricks |
| 2 | Priya Shah (#1063) | Priya Shah (#1091) | Same email priya.shah@gmail.com | Merged — Housing.com + Facebook |
| 3 | Amit Desai (#1077) | Amit Desai (#1098) | Same phone + Same name | Merged — JustDial + WhatsApp |

### Key UI Elements
- **Sync health badge** — green "All systems syncing" or red alert if any source disconnected
- **"3 duplicates merged today" amber badge** — fades in as floating notification
- **Normalisation error row** — highlighted amber with "Review" CTA if auto-normalisation uncertain
- **Bidirectional sync indicator** — dual arrows icon showing CRM ↔ Automation live status

### Why It Matters
The average real estate team carries 30–40% duplicate leads across portal subscriptions. Duplicates waste agent time, inflate pipeline counts, and create conflicting records. Clean data here is the foundation every other module depends on.

---

## Page 3 — Sub-Module 4.2: Site Visit Scheduler

### What It Is
An **intelligent scheduling system** that books site visits based on buyer availability, agent calendars, and project show-flat availability — confirming with both parties and sending layered reminders automatically via WhatsApp.

### Booking Trigger Sources

| Source | How Visit is Booked |
|---|---|
| WhatsApp AI Chatbot (M2.1) | Bot qualifies buyer, proposes 3 slots, buyer confirms in chat |
| Agent manual booking | Agent creates visit directly in CRM / Telegram bot (M2.4) |
| Website Chat Widget (M2.3) | Widget collects availability, books slot, confirms |
| Inbound Call IVR (M2.5) | IVR collects time preference, passes to scheduler |
| Post-visit reschedule | Triggered automatically if prior visit was a no-show |

### Scheduling Logic

| Step | Action |
|---|---|
| 1 | Buyer provides preferred date/time window |
| 2 | System checks assigned agent's Google Calendar for availability |
| 3 | System checks show-flat calendar for slot availability |
| 4 | Offers buyer 3 available time slots within their preferred window |
| 5 | Buyer selects slot via WhatsApp quick-reply button |
| 6 | Booking confirmed — calendar invite created for agent |
| 7 | Confirmation WhatsApp sent to buyer + agent |

### Visit Record Parameters

| Field | Description | Example |
|---|---|---|
| `visit_id` | Unique visit identifier | `visit_20250118_0023` |
| `lead_name` | Buyer name | Rajesh Patel |
| `lead_score` | AI score at booking | 74 |
| `assigned_agent` | Agent conducting visit | Priya Rana |
| `project` | Property to visit | Fortiv Greenview Heights, Vesu |
| `visit_datetime` | Confirmed date and time | 18/01/2025 11:00 AM |
| `booking_channel` | How visit was booked | WhatsApp Chatbot |
| `booking_time` | When booking was made | 15/01/2025 02:58 PM |
| `confirmation_sent` | WhatsApp confirmation dispatched | ✓ 15/01/2025 02:58 PM |
| `reminder_24hr_sent` | 24-hour reminder dispatched | ✓ 17/01/2025 11:00 AM |
| `reminder_1hr_sent` | 1-hour reminder dispatched | ✓ 18/01/2025 10:00 AM |
| `visit_status` | Current status | Scheduled / Completed / No-Show / Cancelled / Rescheduled |
| `no_show_reason` | If applicable | Buyer unavailable — rescheduling |
| `agent_briefing_sent` | Morning-of agent briefing sent | ✓ 18/01/2025 09:00 AM |

### Automated Reminder Sequence

| Trigger | Recipient | Message Type | Timing |
|---|---|---|---|
| Visit booked | Buyer | WhatsApp confirmation with address + agent name | Immediate |
| Visit booked | Agent | WhatsApp notification with buyer profile + score | Immediate |
| 24 hours before | Buyer | WhatsApp reminder: date, time, address, agent name | T-24 hours |
| Morning of visit | Agent | WhatsApp briefing: buyer profile, requirements, talking points, score | 9:00 AM day-of |
| 1 hour before | Buyer | WhatsApp reminder with Maps link | T-1 hour |
| Visit no-show detected | Buyer | WhatsApp reschedule prompt | T+2 hours |
| Visit completed (agent marks) | System | Triggers M4.3 post-visit follow-up sequence | Immediate |

### Page Layout
**Top Filter Bar:** Date Range · Agent · Project · Visit Status  
**Main Area (60%):** Calendar view (week view default) showing scheduled visits as colour-coded blocks  
**Right Panel (40%):** Upcoming visits list — next 5 visits in chronological order with status badges  
**Bottom Strip:** No-show log — visits marked as no-show with reschedule action buttons  

### Mock Demo Data — Upcoming Visits

| # | Buyer | Score | Agent | Project | Date/Time | Status |
|---|---|---|---|---|---|---|
| 1 | Rajesh Patel | 🔴 74 | Priya Rana | Greenview Heights | 18/01 11:00 AM | Confirmed |
| 2 | Priya Shah | 🟡 61 | Ankit Shah | Greenview Heights | 18/01 03:00 PM | Confirmed |
| 3 | Deepak Trivedi | 🔴 82 | Priya Rana | Greenview Heights | 19/01 10:00 AM | Confirmed |
| 4 | Sunita Mehta | 🟡 55 | Meera Patel | Skyline Residences | 19/01 02:00 PM | Confirmed |
| 5 | Vikram Joshi | 🔴 78 | Rahul Modi | Business Park | 20/01 11:30 AM | Confirmed |

### Key UI Elements
- **Colour-coded calendar blocks** — Red (Hot lead visit), Amber (Warm lead visit), Blue (Cold lead visit)
- **"Reminders sent" tick badges** — 24hr / 1hr confirmation on each visit card
- **Agent briefing preview panel** — hover any visit to see what briefing the agent received
- **No-show rate counter** — "No-show rate this month: 18% (target: <25%)"
- **One-click reschedule** — no-show visits prompt reschedule message with one click

### Why It Matters
Site visit to booking conversion is the most critical conversion rate in real estate. Every no-show is a lost conversion opportunity. Automated, layered reminders reduce no-show rates by 35–45% — requiring no agent effort.

---

## Page 4 — Sub-Module 4.3: Post-Visit Follow-Up Agent

### What It Is
An **automated multi-step follow-up engine** that activates the moment an agent marks a site visit as completed — sending personalised content, handling objections automatically, and guiding buyers toward a booking decision across a 7-day touchpoint sequence.

### Trigger Condition
Agent marks visit status as **"Completed"** in CRM → Follow-up sequence begins immediately.

### Follow-Up Sequence (7 Touchpoints)

| Step | Timing | Channel | Content | Trigger Type |
|---|---|---|---|---|
| Step 1 | 1 hour after visit | WhatsApp | Thank you + visit photos + payment plan PDF | Automatic |
| Step 2 | Day 2 | WhatsApp | Check-in message — "Any questions? Ready to arrange another visit?" | Automatic |
| Step 3 | Day 4 | WhatsApp | Competitive comparison document — Greenview Heights vs 2 nearby projects | Automatic |
| Step 4 | Day 7 | WhatsApp | Urgency trigger (if applicable) — "3 units remaining on your preferred floor" | Automatic |
| Step 5 | Day 10 | Email | Full property brochure + payment plan + home loan calculator | Automatic |
| Step 6 | Day 14 | WhatsApp | Market context — "Vesu prices up 8% YoY — here's why now is a good time" | Automatic |
| Step 7 | Day 21 | WhatsApp + Agent notification | Final check-in — agent flagged to call personally | Semi-automatic |

### Objection Handling Logic

When buyer responds with an objection keyword, the system automatically sends pre-approved handling content:

| Objection Keyword Detected | Automated Response Sent |
|---|---|
| "too expensive" / "price is high" / "cost" | EMI calculator + home loan options from SBI/HDFC/ICICI |
| "RERA" / "registration" / "legal" | RERA certificate + project registration document |
| "location" / "far from office" / "connectivity" | Locality advantage document + Google Maps distance calculator |
| "construction quality" / "builder reputation" | Builder credentials doc + past project photos + testimonials |
| "not ready" / "think about it" / "later" | Moves to Track B drip (M4.4) + agent notified |
| "competition" / "other project" / "comparing" | Comparative analysis document sent automatically |

### Per-Buyer Follow-Up Record

| Field | Description | Example |
|---|---|---|
| `follow_up_id` | Sequence identifier | `fu_20250118_0047` |
| `visit_id` | Linked visit | `visit_20250118_0023` |
| `lead_name` | Buyer name | Rajesh Patel |
| `sequence_start` | When sequence was triggered | 18/01/2025 12:15 PM |
| `current_step` | Active step in sequence | Step 3 — Comparison Doc |
| `steps_completed` | Count of steps sent | 2 of 7 |
| `buyer_responses` | Messages received from buyer | 1 response — "What's the EMI?" |
| `objection_detected` | Flagged objection type | Price / EMI concern |
| `auto_response_sent` | Handling content dispatched | ✓ EMI calculator sent 20/01 |
| `agent_override` | Agent has taken over manually | ✗ |
| `sequence_status` | Active / Paused / Completed / Agent Taken Over | Active |
| `conversion_outcome` | Result if sequence completes | Pending |

### Page Layout
**Top Bar:** Active sequences · Sequences completed this month · Post-visit conversion rate · Objections auto-handled  
**Main Table:** One row per active buyer — sequence step, buyer response status, objection flag, next action due  
**Side Panel:** Click any row → Expand full conversation timeline showing every message sent + buyer reply  
**Bottom:** Objection log — all detected objections + auto-responses sent (with delivery status)  

### Mock Demo Data — Active Follow-Up Sequences

| # | Buyer | Visit Date | Current Step | Last Response | Objection | Status |
|---|---|---|---|---|---|---|
| 1 | Rajesh Patel | 18/01 | Step 3 — Comparison | "Looks good, considering" | None | 🟢 Active |
| 2 | Priya Shah | 16/01 | Step 5 — Email | No response | "Too expensive" — handled | 🟡 Slow |
| 3 | Deepak Trivedi | 14/01 | Step 4 — Urgency | "Interested, need 1 week" | None | 🟢 Active |
| 4 | Amit Desai | 10/01 | Step 7 — Agent flag | "Will discuss with wife" | Location concern — handled | 🔴 Agent action needed |
| 5 | Sunita Mehta | 08/01 | Completed — Booking | Booking confirmed ✓ | None | ✅ Converted |

### Key UI Elements
- **Sequence progress bar** on each row — shows steps 1–7 with completed steps filled
- **"Objection handled automatically"** tag — amber badge showing which objection was auto-responded
- **Agent override button** — agent can pause automation and take over conversation at any step
- **Conversion rate counter** — "Post-visit conversion this month: 28% (vs 18% pre-M4)"
- **Response timeline panel** — full WhatsApp-style message thread in side panel per buyer

### Why It Matters
Most agents give up on a buyer after 1–2 follow-ups. Research shows 5–7 touchpoints are needed after a site visit before most buyers decide. This module runs 7 automated, personalised touchpoints — increasing post-visit conversion by 25–40%.

---

## Page 5 — Sub-Module 4.4: Nurture Drip Engine

### What It Is
A **long-term, multi-channel automated communication system** that maintains consistent engagement with leads across 30, 60, and 90-day cycles — keeping Fortiv Solutions top-of-mind until buyers are ready to act, regardless of how long their decision cycle takes.

### Drip Tracks

| Track | Target Segment | Frequency | Horizon | Content Focus |
|---|---|---|---|---|
| Track A — Active | Buyers visited, engaged, decision imminent | Every 3–4 days | 30 days | Project-specific — new floors, pricing, availability, urgent CTAs |
| Track B — Warm | Qualified, interested, not yet visited | Weekly | 60 days | Market insights, project updates, visit invitations |
| Track C — Long-Horizon | Inquired but not yet qualified or cold | Bi-weekly | 90 days | Educational content, market news, brand-building |

### Track Assignment Logic

| Event | Track Assignment |
|---|---|
| Lead qualified + visit completed + engaged | Track A |
| Lead qualified + visit booked / high score (>60) | Track B |
| Lead created + score < 40 + no response | Track C |
| Buyer responds to drip → re-engages | Moved from C → B or B → A + agent alerted |
| Visit no-show (no reschedule) | Moved to Track B |
| Post-visit sequence completed (no conversion) | Moved from A → Track B |

### Content Library by Track

**Track A — Active Buyer Content**
| Content Type | Description | Frequency |
|---|---|---|
| Unit availability update | "Only 4 units left on floors 8–12 — your preferred range" | Every 4 days |
| Payment plan reminder | Specific payment schedule tailored to their budget | Week 2 |
| Festive scheme alert | Diwali / Navratri discount or offer | Festival windows |
| Construction progress photo | Site progress with possession timeline update | Bi-weekly |
| EMI recalculation | "At current SBI rates, your EMI for this unit is ₹28,400/month" | Week 3 |
| Social proof | "12 families from Adajan have already booked in Tower A" | Week 4 |

**Track B — Warm Lead Content**
| Content Type | Description | Frequency |
|---|---|---|
| Market insight | "Surat real estate appreciation: 12% YoY in Vesu micro-market" | Weekly |
| Project update | New phase launch, RERA renewal, amenity addition | As needed |
| Visit invitation | "We have open house this Saturday — bring the family" | Bi-weekly |
| Blog/educational | "How to evaluate under-construction properties in Gujarat" | Weekly |
| Comparative advantage | "Why Vesu outperforms Adajan for 5-year ROI" | Week 3 |

**Track C — Cold / Long-Horizon Content**
| Content Type | Description | Frequency |
|---|---|---|
| Market news | RBI rate change impact on home loans | Bi-weekly |
| Educational | "First-time buyer checklist for Gujarat" | Bi-weekly |
| Brand content | Fortiv project portfolio overview | Monthly |
| Festive greetings | Personalised festive wishes | Festival windows |

### Smart Exit Conditions (Drip → Active Pipeline)

| Re-engagement Signal | Action |
|---|---|
| Buyer replies to any drip message | Move to Track A + immediate agent alert |
| Buyer clicks a link in drip message | Score increases + agent alerted if score crosses 60 |
| Buyer books visit via drip CTA | Track exits → M4.2 scheduler takes over |
| Buyer calls inbound | Removed from drip + transferred to active pipeline |

### Drip Record Parameters

| Field | Description | Example |
|---|---|---|
| `drip_id` | Sequence identifier | `drip_20250110_0031` |
| `lead_name` | Buyer name | Meera Patel |
| `active_track` | Current drip track | Track B — Warm |
| `track_start_date` | When placed on this track | 10/01/2025 |
| `messages_sent` | Count of messages dispatched | 4 |
| `messages_opened` | Count of messages opened/read | 3 |
| `links_clicked` | CTA clicks registered | 1 |
| `last_engagement_date` | Most recent buyer interaction | 20/01/2025 |
| `re_engagement_flag` | Buyer has re-engaged | ✗ |
| `smart_exit_triggered` | Exit condition met | ✗ |
| `next_message_due` | Scheduled send time | 24/01/2025 10:00 AM |
| `assigned_agent` | Watching agent | Meera Patel |

### Page Layout
**Top Stats Bar:** Total leads in drip · Track A count · Track B count · Track C count · Re-engagements this week  
**Main Table:** All leads in drip — Track badge, messages sent/opened, last engagement, next message due  
**Right Panel:** Content calendar — upcoming scheduled drip messages across all tracks for next 14 days  
**Bottom:** Re-engagement feed — leads that have re-engaged this week, now moved to active pipeline  

### Mock Demo Data — Active Drip Leads

| # | Lead Name | Track | Messages Sent | Last Engagement | Next Message | Re-engaged |
|---|---|---|---|---|---|---|
| 1 | Anita Gujarati | Track C | 6 | 18/01 (opened) | 24/01 | ✗ |
| 2 | Kavita Agarwal | Track B | 3 | 20/01 (link clicked) | 22/01 | ✗ |
| 3 | Pooja Sharma | Track A | 8 | 19/01 (replied "interested") | → Active Pipeline | ✅ |
| 4 | Mahesh Khanna | Track B | 5 | 14/01 (opened) | 21/01 | ✗ |
| 5 | Ritu Bhandari | Track C | 2 | 11/01 (opened) | 25/01 | ✗ |

### Key UI Elements
- **Track badge colour** — Track A (Red/Hot), Track B (Amber/Warm), Track C (Blue/Cold)
- **Re-engagement flash** — green highlight + "Re-engaged" tag when a buyer exits drip into active pipeline
- **Content calendar strip** — scrollable 14-day view of scheduled content per track
- **"Smart Exit" counter** — "3 leads re-engaged from drip this month → ₹XX L potential pipeline added"
- **Open rate per track** — "Track A: 72% open rate · Track B: 58% · Track C: 41%"

### Why It Matters
Real estate decision cycles in India average 3–18 months. Without nurturing, 70% of leads who don't convert in week one are never contacted again — and eventually buy from whoever stayed in touch. This module ensures Fortiv stays in the conversation through every buyer's full decision window.

---

## Page 6 — Sub-Module 4.5: Deal Pipeline Tracker

### What It Is
A **structured, stage-based deal management system** that tracks every active deal through the full sales lifecycle — from first inquiry to property registration — giving management and agents real-time visibility into pipeline health, deal velocity, and revenue forecast.

### Pipeline Stages

| Stage | Description | Typical Duration | Pipeline Weight |
|---|---|---|---|
| Inquiry | Lead captured, not yet contacted | 0–2 days | 5% |
| Site Visit Scheduled | Visit booked, not yet conducted | 1–7 days | 10% |
| Visited | Visit completed, follow-up in progress | 3–14 days | 20% |
| Negotiation | Price/terms discussion underway | 3–21 days | 40% |
| Booking Amount Paid | Token/booking amount received | 1–3 days | 75% |
| Agreement Signed | Sale agreement executed | 7–30 days | 85% |
| Loan Processing | Home loan in progress (if applicable) | 14–45 days | 90% |
| Full Payment | Full consideration received | 1–7 days | 95% |
| Registration | Property registration completed | 7–30 days | 100% (closed) |

### Deal Card Parameters

| Field | Description | Example |
|---|---|---|
| `deal_id` | Unique deal identifier | `deal_20250115_0018` |
| `buyer_name` | Buyer full name | Rajesh Patel |
| `property_unit` | Specific unit booked | Tower A, Floor 9, Unit 903 |
| `project` | Project name | Fortiv Greenview Heights, Vesu |
| `configuration` | Unit type | 2BHK, 1,080 sq ft |
| `deal_value` | Total transaction value | ₹56 Lakhs |
| `amount_collected` | Payments received to date | ₹5.6 Lakhs (10%) |
| `outstanding` | Balance due | ₹50.4 Lakhs |
| `assigned_agent` | Responsible agent | Priya Rana |
| `current_stage` | Active pipeline stage | Negotiation |
| `stage_entry_date` | When current stage was entered | 16/01/2025 |
| `days_in_stage` | Days at current stage | 5 |
| `stage_target_days` | Expected days for this stage | 7 |
| `urgency_flag` | Stuck deal indicator | 🟢 On track |
| `next_action` | What needs to happen next | Finalise payment plan agreement |
| `next_action_due` | Deadline for next action | 22/01/2025 |
| `manager_notes` | Manager-level commentary | — |
| `weighted_value` | Deal value × pipeline weight | ₹22.4 Lakhs (40%) |

### Stuck Deal Alert Logic

| Condition | Alert Type | Recipients |
|---|---|---|
| Deal in Inquiry for >3 days with no contact | Yellow alert | Assigned agent |
| Deal in Visited for >14 days with no stage movement | Yellow alert | Agent + Manager |
| Deal in Negotiation for >21 days | Red alert — escalation | Agent + Manager + Management |
| Deal in Agreement Signed for >35 days with no payment progress | Red alert | Manager + Finance team |
| Any deal with 0 activity (no note/update) for >7 days | Yellow alert | Agent |

### Stage Velocity Metrics

| Stage | Industry Standard | Fortiv Avg (Mock) | Status |
|---|---|---|---|
| Inquiry → Visit Scheduled | 3 days | 1.8 days | ✅ Better |
| Visit Scheduled → Visited | 5 days | 4.2 days | ✅ Better |
| Visited → Negotiation | 7 days | 9.1 days | 🟡 Monitor |
| Negotiation → Booking | 10 days | 12.4 days | 🟡 Monitor |
| Booking → Agreement | 14 days | 11.2 days | ✅ Better |
| Agreement → Full Payment | 45 days | 38.7 days | ✅ Better |
| Full Payment → Registration | 21 days | 24.1 days | 🟡 Monitor |

### Daily Morning Pipeline Summary (WhatsApp to Management)

```
📊 Fortiv Solutions — Morning Pipeline Briefing
18 January 2025 | 08:30 AM

Active Deals:      23
In Negotiation:    6    ← 2 past target duration
Visits Today:      4
Bookings Due:      3    (this week)
Total Pipeline:    ₹4.2 Cr
Weighted Value:    ₹1.84 Cr

🔴 Stuck Deals (action needed):
1. Deepak Trivedi — Negotiation 19 days (target 10) | Agent: Priya Rana
2. Amit Desai — Visited 16 days (target 14) | Agent: Ankit Shah

📅 Today's Visits: Rajesh Patel (11AM), Priya Shah (3PM)

Powered by Fortiv AI Command Center
```

### Page Layout
**Top Bar:** Pipeline KPIs — Active deals · Weighted value · Avg deal velocity · This month's bookings  
**Main Area:** Full Kanban board — one column per pipeline stage, deal cards as draggable tiles  
**Card hover panel:** Expands to show full deal card with all parameters + activity log  
**Bottom Bar:** Stage velocity chart (bar chart — actual vs benchmark per stage) · Stuck deal red list  

### Mock Demo Data — Active Deals (Kanban)

| Deal | Buyer | Project | Value | Stage | Days in Stage | Urgency |
|---|---|---|---|---|---|---|
| 1 | Rajesh Patel | Greenview Heights | ₹56L | Negotiation | 5 | 🟢 On track |
| 2 | Priya Shah | Greenview Heights | ₹78L | Visited | 8 | 🟢 On track |
| 3 | Deepak Trivedi | Greenview Heights | ₹52L | Negotiation | 19 | 🔴 Stuck |
| 4 | Vikram Joshi | Business Park | ₹2.1Cr | Agreement Signed | 12 | 🟢 On track |
| 5 | Sunita Mehta | Skyline Residences | ₹94L | Booking Amount Paid | 2 | 🟢 On track |
| 6 | Amit Desai | Greenview Heights | ₹49L | Visited | 16 | 🔴 Stuck |
| 7 | Suresh Nair | Business Park | ₹3.4Cr | Loan Processing | 21 | 🟡 Watch |
| 8 | Pooja Sharma | Greenview Heights | ₹58L | Site Visit Scheduled | 2 | 🟢 On track |

### Key UI Elements
- **Kanban columns** — drag-and-drop deal cards between stages (stage change auto-logs to CRM)
- **Stuck deal pulse** — red cards pulse on kanban board, demanding attention
- **Deal card urgency indicator** — traffic light (🟢 🟡 🔴) based on days vs target duration
- **Manager override panel** — right-click any card: Reassign agent / Force-move stage / Add note / Escalate
- **Pipeline value ticker** — live total of all weighted deal values at top of board
- **Velocity chart** — bottom bar comparing Fortiv stage durations vs industry benchmark

### Why It Matters
Without a structured pipeline, deals fall through cracks — agents forget follow-ups, managers have no visibility, and revenue shortfalls are discovered at month-end. This board gives every stakeholder complete, shared, real-time visibility into every active deal at all times.

---

## Page 7 — Sub-Module 4.6: AI Listing Writer

### What It Is
An **LLM-powered content generation tool** that creates compelling, format-specific property listing descriptions, WhatsApp broadcast copy, social media captions, and email content from structured project data — in under 30 seconds — and publishes to portals in one click.

### Input Parameters

| Field | Type | Example |
|---|---|---|
| `project_name` | Text | Fortiv Greenview Heights |
| `locality` | Text | Vesu, Surat |
| `configuration` | Multi-select | 2BHK, 3BHK |
| `price_starting` | ₹ Lakhs | ₹48L |
| `price_range` | ₹ Lakhs | ₹48L – ₹85L |
| `area_range` | Sq ft | 1,020 – 1,640 sq ft |
| `rera_number` | Text | P01200023XXX |
| `possession_date` | Date | December 2026 |
| `structure` | Text | G+14 floors, 2 towers |
| `key_amenities` | Multi-select | Swimming Pool, Clubhouse, Children's Play Area, EV Charging |
| `usps` | Text area | Corner units, Vesu micro-market, CCTV, Society maintenance ₹2/sq ft |
| `tone` | Select | Formal / Conversational / Urgency / Luxury |

### Output Formats Generated

| Format | Platform | Word Count | Output |
|---|---|---|---|
| Portal Listing (Long) | 99acres / MagicBricks | 300–400 words | SEO-optimised description with headings |
| WhatsApp Broadcast | WhatsApp Business | 50–80 words | Punchy, emoji-light, with CTA + RERA number |
| Instagram Caption | Instagram | 120–160 words | Engaging, emoji-enhanced, with hashtags |
| Email Subject + Body | Email | 120–150 words | Click-optimised subject + concise email body |
| Gujarati Version | All formats | Auto-translated | All above formats in Gujarati |

### Sample Generated Outputs (Mock)

**Portal Listing (Long) — Formal Tone**
```
Fortiv Greenview Heights — Premium 2 & 3 BHK Residences in Vesu, Surat

Discover elevated living at Fortiv Greenview Heights, a RERA-registered
residential development [RERA: P01200023XXX] nestled in the heart of Vesu,
Surat's most sought-after micro-market. Rising across G+14 floors in two
elegantly designed towers, Greenview Heights offers 2BHK and 3BHK
configurations ranging from 1,020 to 1,640 sq ft — meticulously crafted for
families who value space, light, and community.

Key Highlights:
• Premium 2BHK starting from ₹48 Lakhs
• Possession: December 2026
• Swimming pool, fully equipped clubhouse, children's play area
• 24/7 CCTV surveillance · EV charging stations · Society maintenance ₹2/sq ft
• 5 minutes to Vesu Main Road · 10 minutes to Surat airport

Vesu remains Surat's fastest-appreciating residential locality, recording 12%
capital appreciation in 2024. With limited inventory available across preferred
floor ranges, early booking is recommended.

Contact: +91 XXXXX XXXXX | www.fortivsolutions.in | RERA: P01200023XXX
```

**WhatsApp Broadcast — Urgency Tone**
```
🏡 *Fortiv Greenview Heights | Vesu, Surat*
2BHK from ₹48L | 3BHK from ₹68L
⭐ RERA Registered | Possession Dec 2026
Pool · Clubhouse · EV Charging

Only 6 units available in floors 8–12.
📞 Call/WhatsApp: +91 XXXXX XXXXX
```

**Instagram Caption — Conversational Tone**
```
Your dream home just got closer. 🏠✨
Fortiv Greenview Heights is now accepting bookings — and yes, it's everything
you've been picturing.

📍 Prime Vesu Location, Surat
🛏 2BHK from ₹48L | 3BHK from ₹68L
🏊 Pool · Clubhouse · Green Spaces
📋 RERA Registered · Possession Dec 2026

The view from the 12th floor is something else. Come see for yourself.
Book a site visit this weekend → Link in bio

#SuratRealEstate #VesuSurat #NewHome #FortivSolutions #2BHKSurat
#HomesInSurat #GujaratHomes #RERAApproved
```

### One-Click Publish Flow

| Step | Action |
|---|---|
| 1 | Agent clicks "Publish" for desired format(s) |
| 2 | System authenticates with 99acres API / MagicBricks API / Website CMS |
| 3 | Content + images pushed to selected platforms simultaneously |
| 4 | Platform listing IDs returned and logged against project record |
| 5 | Publication confirmation shown: "Published to 99acres, MagicBricks at 14:32:07" |

### Listing Performance Tracking

| Metric | Tracked Per Listing |
|---|---|
| Portal views | From 99acres / MagicBricks API (daily refresh) |
| Inquiries generated | Leads with source = this listing |
| Cost per lead from listing | Spend / leads (if paid listing) |
| Listing freshness | Days since last edit (portals penalise stale listings) |
| Auto-refresh alert | Alert when listing is 14+ days old without update |

### Page Layout
**Left Panel (45%):** Input form — all project parameters with dropdowns and text fields  
**Centre (55%):** Output preview — tabs for each format (Portal / WhatsApp / Instagram / Email / Gujarati)  
**Bottom Bar:** Published listings log — project, platform, publish date, views, leads generated, last refreshed  

### Mock Demo Data — Published Listings Log

| Project | Platform | Published | Views (7d) | Leads | Last Refreshed |
|---|---|---|---|---|---|
| Greenview Heights | 99acres | 02/01/2025 | 412 | 18 | 16/01/2025 |
| Greenview Heights | MagicBricks | 02/01/2025 | 287 | 11 | 16/01/2025 |
| Skyline Residences | 99acres | 05/01/2025 | 198 | 7 | 14/01/2025 |
| Business Park | MagicBricks | 10/01/2025 | 143 | 4 | 18/01/2025 |
| Greenview Heights | Fortiv Website | 02/01/2025 | 631 | 23 | 18/01/2025 |

### Key UI Elements
- **Side-by-side format tabs** — agent switches between Portal / WhatsApp / Instagram / Email in one view
- **Tone selector** — dropdown changes content regeneration on click
- **Gujarati toggle** — one click generates Gujarati version of active format
- **"Publish All" button** — publishes to all connected platforms in one action
- **Listing freshness badge** — amber if >10 days old, red if >14 days old (portal SEO risk)
- **30-second generation counter** — timer shows generation speed as demo focal point

### Why It Matters
Writing a quality listing in multiple formats for multiple platforms takes 45–90 minutes per unit manually — with inconsistent quality, missed keywords, and outdated pricing. This module produces everything in 30 seconds, consistently, at scale, in English and Gujarati.

---

## Complete Module 4 — Master Parameter Reference

### All Data Fields Across M4

| Field Name | Type | Sub-module | Description |
|---|---|---|---|
| `deal_id` | UUID | 4.5 | Unique deal record identifier |
| `lead_id` | UUID | 4.1 | Linked lead from M1 |
| `visit_id` | UUID | 4.2 | Site visit record identifier |
| `follow_up_id` | UUID | 4.3 | Post-visit sequence identifier |
| `drip_id` | UUID | 4.4 | Nurture sequence identifier |
| `listing_id` | UUID | 4.6 | Published listing identifier |
| `buyer_name` | String | All | Full buyer name |
| `phone` | String | All | Primary mobile number (+91 prefix) |
| `email` | String | All | Email address (lowercase) |
| `assigned_agent` | String | All | Responsible sales agent |
| `assigned_project` | String | All | Matched Fortiv project |
| `property_unit` | String | 4.5 | Specific unit (Tower/Floor/Unit no.) |
| `configuration` | Enum | 4.5, 4.6 | 1BHK / 2BHK / 3BHK / 4BHK / Commercial / Plot |
| `deal_value` | Number (₹L) | 4.5 | Total transaction consideration |
| `amount_collected` | Number (₹L) | 4.5 | Payments received to date |
| `outstanding` | Number (₹L) | 4.5 | Balance due |
| `weighted_value` | Number (₹L) | 4.5 | Deal value × stage probability |
| `current_stage` | Enum | 4.5 | Inquiry → Registration (9 stages) |
| `stage_entry_date` | DateTime | 4.5 | When current stage was entered |
| `days_in_stage` | Number | 4.5 | Days at current stage |
| `stage_target_days` | Number | 4.5 | Benchmark days for stage |
| `urgency_flag` | Enum | 4.5 | On Track / Watch / Stuck |
| `next_action` | Text | 4.5 | Required next step description |
| `next_action_due` | Date | 4.5 | Deadline for next action |
| `visit_datetime` | DateTime | 4.2 | Confirmed visit date and time |
| `booking_channel` | Enum | 4.2 | WhatsApp / Agent / Website / IVR |
| `confirmation_sent` | Boolean | 4.2 | Visit confirmation WhatsApp sent |
| `reminder_24hr_sent` | Boolean | 4.2 | 24-hour reminder sent |
| `reminder_1hr_sent` | Boolean | 4.2 | 1-hour reminder sent |
| `agent_briefing_sent` | Boolean | 4.2 | Morning briefing sent to agent |
| `visit_status` | Enum | 4.2 | Scheduled / Completed / No-Show / Cancelled / Rescheduled |
| `no_show_reason` | Text | 4.2 | Reason recorded if no-show |
| `follow_up_sequence_start` | DateTime | 4.3 | When post-visit sequence began |
| `current_step` | Number (1–7) | 4.3 | Active step in follow-up sequence |
| `steps_completed` | Number | 4.3 | Number of touchpoints dispatched |
| `buyer_responses` | Number | 4.3 | Count of buyer replies received |
| `objection_detected` | Enum | 4.3 | Price / RERA / Location / Quality / Other / None |
| `auto_response_sent` | Boolean | 4.3 | Objection handling content dispatched |
| `agent_override` | Boolean | 4.3 | Agent has manually taken over sequence |
| `sequence_status` | Enum | 4.3 | Active / Paused / Completed / Agent Taken Over |
| `active_track` | Enum | 4.4 | Track A / Track B / Track C |
| `track_start_date` | Date | 4.4 | When placed on drip track |
| `messages_sent` | Number | 4.4 | Total drip messages dispatched |
| `messages_opened` | Number | 4.4 | Messages opened/read by buyer |
| `links_clicked` | Number | 4.4 | CTA links clicked in drip messages |
| `last_engagement_date` | DateTime | 4.4 | Most recent buyer interaction |
| `re_engagement_flag` | Boolean | 4.4 | Buyer has re-engaged from drip |
| `smart_exit_triggered` | Boolean | 4.4 | Smart exit condition met |
| `next_message_due` | DateTime | 4.4 | Scheduled next drip send time |
| `crm_source` | Enum | 4.1 | Origin of record sync |
| `duplicate_flag` | Boolean | 4.1 | Record was deduplicated |
| `merged_sources` | Array | 4.1 | All portals linked to merged record |
| `normalisation_status` | Enum | 4.1 | Clean / Flagged / Reviewed |
| `listing_project` | String | 4.6 | Project the listing describes |
| `listing_format` | Enum | 4.6 | Portal Long / WhatsApp / Instagram / Email / Gujarati |
| `listing_tone` | Enum | 4.6 | Formal / Conversational / Urgency / Luxury |
| `listing_platform` | Enum | 4.6 | 99acres / MagicBricks / Website |
| `published_at` | DateTime | 4.6 | Publication timestamp |
| `portal_listing_id` | String | 4.6 | Platform's own listing ID |
| `listing_views_7d` | Number | 4.6 | Views in past 7 days |
| `leads_from_listing` | Number | 4.6 | Leads attributed to this listing |
| `listing_age_days` | Number | 4.6 | Days since last content refresh |
| `freshness_flag` | Enum | 4.6 | Fresh / Ageing / Stale |

---

## Mock Data Constants (Demo-Ready)

### Demo Deal Pool
```
Rajesh Patel      — 2BHK Greenview Heights — ₹56L — Negotiation (5 days)
Priya Shah        — 3BHK Greenview Heights — ₹78L — Visited (8 days)
Deepak Trivedi    — 2BHK Greenview Heights — ₹52L — Negotiation (19 days) 🔴 Stuck
Vikram Joshi      — Commercial Business Park — ₹2.1Cr — Agreement Signed (12 days)
Sunita Mehta      — 3BHK Skyline Residences — ₹94L — Booking Amount Paid (2 days)
Amit Desai        — 2BHK Greenview Heights — ₹49L — Visited (16 days) 🔴 Stuck
Suresh Nair       — Commercial Business Park — ₹3.4Cr — Loan Processing (21 days)
Pooja Sharma      — 2BHK Greenview Heights — ₹58L — Visit Scheduled (2 days)
```

### Demo Projects
```
Project 1: Fortiv Greenview Heights, Vesu, Surat
           2BHK/3BHK · ₹48L–₹85L · RERA: P01200023XXX · Dec 2026 possession
           G+14 · 2 towers · Pool, Clubhouse, EV Charging

Project 2: Fortiv Skyline Residences, Gotri, Vadodara
           3BHK/4BHK · ₹90L–₹1.8Cr · Under Construction
           G+18 · 3 towers · Premium amenities

Project 3: Fortiv Business Park, Althan, Surat
           Commercial Units · ₹1.2Cr–₹4.5Cr · Ready Possession
           Grade A commercial · Basement + G+8
```

### Demo Agents
```
Priya Rana     — Senior Agent     (Hot leads, Vesu territory)
Rahul Modi     — Sales Manager    (Escalations, large-ticket deals)
Ankit Shah     — Agent            (Warm leads, Adajan territory)
Meera Patel    — Agent            (Cold leads, nurture sequences)
Kiran Desai    — Team Lead        (Vadodara leads, Skyline Residences)
```

---

## Brand & Design Parameters for M4 UI

### Colour Usage

| Element | Colour | Hex |
|---|---|---|
| Page background | Dark navy | #0D1B2A |
| Card / panel background | White | #FFFFFF |
| Primary brand | Deep navy | #1A3C5E |
| Accent / links | Electric blue | #2E86AB |
| Stuck deal / danger | Coral red (pulsing) | #D85A30 |
| Watch / negotiation | Amber | #E8A838 |
| On track / success | Teal green | #1D9E75 |
| Completed / closed | Medium grey | #9B9B9B |
| Section background | Off white | #F5F6FA |

### Typography

| Use Case | Font |
|---|---|
| Module title, page heading | Playfair Display or DM Serif Display |
| Body text, labels, descriptions | DM Sans or Plus Jakarta Sans |
| All numbers, values, timestamps, deal IDs | JetBrains Mono |

### Key Animations (Demo-Specific)

| Animation | Where | Description |
|---|---|---|
| Stuck deal pulse | 4.5 Kanban board | Red deal cards pulse every 2 seconds |
| Stage drag animation | 4.5 Kanban | Card slides smoothly to new column on drag |
| Follow-up sequence progress bar | 4.3 table | Bar fills segment by segment as steps complete |
| Drip re-engagement flash | 4.4 table | Row flashes green when smart exit triggered |
| Sync activity indicator | 4.1 | Spinning sync icon on live log feed |
| Duplicate merge badge | 4.1 | "3 duplicates merged" amber badge fades in |
| Listing generation counter | 4.6 | 30-second countdown timer on generate action |
| WhatsApp confirmation tick | 4.2 | Double blue ticks animate on confirmation send |

---

## Technical Integration Map for M4

| Sub-module | External APIs / Services | Data Flow Direction |
|---|---|---|
| 4.1 CRM Sync | Zoho CRM / HubSpot / Salesforce, M1.3, M1.4, M2.1, M2.3, M2.5 | Bidirectional — All sources ↔ CRM |
| 4.2 Site Visit Scheduler | Google Calendar API, WhatsApp Business API | CRM → Calendar + WhatsApp → Buyer + Agent |
| 4.3 Post-Visit Follow-Up | WhatsApp Business API, Email service (SendGrid) | CRM trigger → WhatsApp/Email → Buyer |
| 4.4 Nurture Drip Engine | WhatsApp Business API, Email service, SMS gateway | Scheduled → WhatsApp/Email/SMS → Lead |
| 4.5 Deal Pipeline Tracker | CRM, M5.2 (Forecast), M6.1 (Agreement), M11 (Finance) | CRM ↔ Pipeline board; Stage events → downstream modules |
| 4.6 AI Listing Writer | Gemini / GPT-4 API, 99acres API, MagicBricks API, Fortiv CMS | Agent input → LLM → Portal APIs + CMS |

---

## Summary: M4 at a Glance

| Item | Detail |
|---|---|
| Module | M4 — Sales Pipeline & CRM Automation |
| Sub-modules | 6 (4.1 → 4.6) |
| Total pages | 7 (1 dashboard + 6 sub-module pages) |
| Primary data objects | Deal records (stage-tracked) · Visit records · Follow-up sequences · Drip tracks · Listings |
| Pipeline stages | 9 (Inquiry → Registration) |
| Channels covered | WhatsApp (primary) · Email · SMS · Portal APIs · Calendar |
| Key output | Every deal tracked stage-to-close; every buyer touched automatically at every step |
| Demo focus | Live Kanban board with stuck deal alerts + AI listing generating in 30 seconds |
| Design tone | Dark navy dashboard, Kanban-first, real-time urgency indicators, professional |
| Compliance | DPDP Act 2023 · RERA (Gujarat) — all communications compliant |
| Currency | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Date format | DD/MM/YYYY |
| Languages | English (primary) · Hindi · Gujarati |

---

*Real Estate AI Command Center — Module 4 Build Guide*  
*by Fortiv Solutions · fortivsolutions.in*  
*Version 2.0 · Confidential*
