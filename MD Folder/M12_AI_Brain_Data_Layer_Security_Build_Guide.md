# M12 — AI Brain, Data Layer & Security
### Real Estate AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** The intelligence layer that connects all 11 modules into one thinking system — sharing data, surfacing cross-module insights, predicting risks, and ensuring every action is secure and compliant.

**Document Type:** Module Build Guide & Parameter Reference  
**Module Code:** M12  
**Total Sub-Modules:** 7 (12.1 → 12.7)  
**Version:** 2.0  
**Company:** Fortiv Solutions  
**Classification:** Confidential  
**Market:** India — Gujarat Focus (Surat, Vadodara)

---

## Module Overview

### Purpose
M12 is the **central nervous system** of the Real Estate AI Command Center. It does not operate independently — it reads, connects, and enriches every other module. Where M1 through M11 each handle a specific business domain, M12 stitches them into a single intelligent platform: unifying every customer record into one graph, detecting patterns no human analyst would find, predicting deal risk before it's visible, managing channel partner relationships, enforcing who can see what, protecting personal data under the DPDP Act, and monitoring that the entire system stays alive and responsive.

Without M12, the Command Center is eleven capable but disconnected tools. With M12, it becomes one thinking system.

### Core Problem Being Solved

| Pain Point | Without M12 | With M12 |
|---|---|---|
| Buyer data scattered | 3 agents' WhatsApp + CRM + Excel + email | Single 360° profile — every interaction in one place |
| Invisible patterns | Decisions made on gut feel | Cross-module AI surfaces non-obvious correlations |
| Deals lost silently | Discovered after buyer goes cold | Predictive risk scorer alerts 7–14 days early |
| Broker loyalty | Brokers go wherever commission is clearest | Self-serve CP portal — transparent, professional |
| Data access | Everyone sees everything (or nothing) | Granular role-based access — right data, right person |
| Privacy compliance | DPDP Act exposure, no audit trail | Consent management, retention, breach protocol |
| System downtime | Discovered when business is impacted | Real-time health monitoring — every module, every API |

### Demo Wow Moment
**The AI Insights feed cycling through observations that no human would notice** — cross-module patterns, predictive risk scores, recommended actions — making the entire system feel alive and intelligent. The customer graph SVG with pulsing connections is the visual centrepiece that communicates "this is one system, not seven tools."

---

## Module-Level Parameters

| Parameter | Value |
|---|---|
| Module ID | M12 |
| Module Name | AI Brain, Data Layer & Security |
| Sub-module Count | 7 |
| Primary Output | Unified customer intelligence, AI insights, deal risk scores, CP portal, access control, privacy compliance, system uptime |
| Primary Users | MD/CEO, CTO, Sales Manager, Finance, HR, Channel Partners, Buyers, System Admin |
| Data Sources | All M1–M11 modules + external APIs |
| AI Models Used | Graph analytics, pattern detection, regression (risk scoring), NLP (sentiment analysis) |
| Compliance | DPDP Act 2023 · RERA · IT Act 2000 · PMLA · AML/KYC norms |
| Uptime Target | 99.5% per module · 99.9% for core data layer |
| Currency Format | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Demo Financial Period | Q1 2025 (Jan–Mar 2025) |

---

## Module Pages & Navigation Structure

```
M12 — AI Brain, Data Layer & Security
│
├── [Page 1]  Module Dashboard / AI Command View            ← Landing page for M12
│             (Insights feed, system health grid, data counters, graph preview)
│
├── [Page 2]  12.1  Unified Customer Intelligence Graph
│             (360° buyer profile, interaction timeline, relationship map, next action)
│
├── [Page 3]  12.2  Cross-Module AI Insights Engine
│             (Insights feed, category filters, confidence scores, action routing)
│
├── [Page 4]  12.3  Predictive Deal Risk Scorer
│             (Risk table, signal breakdown, intervention suggestions, manager view)
│
├── [Page 5]  12.4  Channel Partner (CP) Portal & Tracker
│             (CP deal registration, commission visibility, leaderboard, resource library)
│
├── [Page 6]  12.5  Role-Based Access Control (RBAC)
│             (Role matrix, user management, permission grid, audit log)
│
├── [Page 7]  12.6  DPDP Act Compliance Layer
│             (Consent register, data subject requests, retention tracker, breach log)
│
└── [Page 8]  12.7  System Health & Uptime Dashboard
              (Module status grid, integration health, workflow monitor, incident log)
```

---

## Page 1 — Module Dashboard (M12 AI Command View)

### Purpose
The landing screen for Module 12. This is the most visually impressive screen in the entire Command Center — it communicates the intelligence, connectivity, and real-time nature of the platform at a glance. Designed to wow a technical audience and a business audience simultaneously.

### Layout
- **Top Row:** 5 animated data counters (platform-wide stats)
- **Centre Left:** Mini customer graph SVG (interactive, pulsing connections)
- **Centre Right:** Live AI Insights feed (cycling through 8 insights)
- **Bottom Left:** System health grid (all 12 modules — green/amber/red dots)
- **Bottom Right:** Predictive risk summary (top 3 high-risk deals)

### Animated Data Counters (Top Row)

| Counter | Label | Mock Value | Animation |
|---|---|---|---|
| 1 | Leads Tracked | 1,247 | Counts up on load |
| 2 | Automations Run Today | 8,234 | Counts up, then ticks live |
| 3 | WhatsApp Messages Sent | 3,812 | Counts up on load |
| 4 | Active Deals in Pipeline | 68 | Static with subtle pulse |
| 5 | Data Points Processed | 2.4M | Counts up with "M" suffix |

### Mini Customer Graph SVG
Central node: buyer avatar (e.g. "Rajesh Patel")  
Connected nodes (spokes outward): Lead Source · Agent · Property · Documents · Payments · WhatsApp · NPS  
Lines pulse with data-flow animation. Each node is colour-coded by module.

### Live AI Insights Feed (8 Cycling Insights)
8 insights rotate every 4 seconds with category badge, insight text, and "Take Action" button. Full detail on Page 3 (12.2).

### System Health Grid (12 Modules, 3-column grid)
Each tile: module name + pulsing status dot (Green = Active / Amber = Degraded / Red = Down) + uptime %. Full detail on Page 8 (12.7).

### High-Risk Deals Summary (Top 3)
Compact cards showing: buyer name, deal value, risk score (red badge), primary risk reason. Links to Page 4 (12.3).

---

## Page 2 — Sub-Module 12.1: Unified Customer Intelligence Graph

### What It Is
A single, **comprehensive 360° profile for every lead, buyer, and stakeholder** that aggregates all touchpoints and data from every module — creating a complete view of each person's journey with Fortiv Solutions across every interaction, transaction, and communication since first contact.

### What It Does
- Single profile view: one screen shows all module data for any individual — lead score, all conversations, property matches, deal history, documents, payments, NPS, referrals made
- Interaction timeline: chronological view of every touchpoint from first inquiry to post-possession
- Relationship mapping: shows referral chain — who referred whom; broker who registered the deal
- Sentiment analysis: analyses WhatsApp conversation tone over time — detects emerging dissatisfaction
- Next best action: AI recommends the single highest-impact next action per buyer/lead
- Privacy controls: access to full profile restricted to authorised roles per M12.5 RBAC

### Profile Data Sources (Per Module)

| Module | Data Contributed to Profile |
|---|---|
| M1 — Lead Generation | Lead source, AI score, enrichment profile, income bracket, intent signals |
| M2 — Conversational AI | All WhatsApp messages, chatbot qualification answers, email thread, IVR call log |
| M3 — Property Intelligence | AVM valuation history, matched properties shown, saved searches, price alerts |
| M4 — Sales Pipeline | Deal stage history, site visit records, negotiation notes, agent interactions |
| M5 — Analytics | Attributed to which marketing campaign, channel ROI contribution |
| M6 — Document AI | KYC documents collected, agreement versions, e-sign status, verification results |
| M7 — HR (Agent) | Which agent handled each interaction (for accountability, not exposed to buyer) |
| M8 — Tenant/Loan | Home loan copilot usage, loan eligibility estimate, bank referral status |
| M9 — Construction | Possession readiness status for their unit, snag history |
| M10 — Buyer Portal | Portal login frequency, documents downloaded, construction update views |
| M11 — Finance | Full payment history, demand notes received, outstanding amount, receipts |
| M12.3 — Risk | Current deal risk score and contributing signals |
| M12.4 — CP Portal | Which broker registered the deal, commission status |

### Profile Page Layout
**Left Column (30%):** Profile card — photo placeholder, name, contact, lead score badge, deal stage badge, relationship manager  
**Centre Column (45%):** Interaction timeline — chronological feed of all events  
**Right Column (25%):** Quick stats panel + Next Best Action card

### Profile Card Fields

| Field | Source | Example |
|---|---|---|
| `buyer_name` | CRM | Rajesh Patel |
| `phone` | CRM | +91 98765 XXXXX |
| `email` | CRM | rajesh.patel@gmail.com |
| `whatsapp_active` | M1.5 enrichment | ✓ Active |
| `designation` | M1.5 enrichment | VP Sales |
| `company` | M1.5 enrichment | Adani Group |
| `income_bracket` | M1.5 enrichment | ₹18–25L/year |
| `lead_source` | M1.3 / M1.4 | 99acres — Greenview Heights Jan 2025 |
| `ai_score` | M1.6 | 82 🔴 Hot |
| `deal_stage` | M4.5 | Negotiation |
| `deal_value` | M4.5 | ₹57.5L |
| `unit_number` | M4 | Tower A, Unit 804, Floor 8 |
| `project` | M4 | Fortiv Greenview Heights, Vesu |
| `relationship_manager` | M4 | Priya Rana |
| `first_contact_date` | M1 | 03/01/2025 |
| `days_as_lead` | Derived | 44 days |
| `site_visits` | M4.2 | 2 visits (11/01, 18/01) |
| `deal_risk_score` | M12.3 | 62 ⚠️ Medium Risk |
| `nps_score` | M10.7 | Not yet (pre-possession) |
| `referrals_made` | M12.4 | 0 |
| `profile_completeness` | M1.5 | 87% |

### Interaction Timeline (Chronological — Mock Data for Rajesh Patel)

| Date/Time | Event Type | Detail | Module |
|---|---|---|---|
| 03/01/2025 09:14 | 🟦 Lead Captured | Inquiry from 99acres — 2BHK Vesu ₹48–60L | M1.4 |
| 03/01/2025 09:14 | 🟩 AI Score Set | Initial score: 46 (Warm) | M1.6 |
| 03/01/2025 09:15 | 💬 WhatsApp Sent | Auto-acknowledgement sent | M2.1 |
| 03/01/2025 09:22 | 💬 WhatsApp Reply | Buyer replied: "Yes interested, when can I visit?" | M2.1 |
| 03/01/2025 09:22 | 🟩 Score Update | Score: 46 → 58 (+12, WhatsApp replied in <5 min) | M1.6 |
| 03/01/2025 09:45 | 📋 Enrichment | Profile enriched: VP Sales, Adani Group, ₹18–25L income | M1.5 |
| 03/01/2025 09:45 | 🟩 Score Update | Score: 58 → 70 (+12, income bracket confirms affordability) | M1.6 |
| 05/01/2025 10:00 | 📞 Agent Call | Priya Rana called — 8 min conversation — noted: prefers Floor 6+ | M4 |
| 06/01/2025 14:00 | 📎 Brochure Opened | Tracked PDF link opened — 4 min 32 sec read time | M2.6 |
| 06/01/2025 14:00 | 🟩 Score Update | Score: 70 → 78 (+8, brochure opened) → 🔴 HOT | M1.6 |
| 08/01/2025 11:00 | 🗓️ Visit Booked | Site visit confirmed — 11/01 Saturday 11:00 AM — Priya Rana | M4.2 |
| 10/01/2025 18:00 | 💬 WhatsApp | Reminder sent: "Looking forward to seeing you tomorrow!" | M4.2 |
| 11/01/2025 11:00 | 🏠 Site Visit 1 | Attended — 45 min — Interested in Tower A, Floor 8 | M4.2 |
| 11/01/2025 13:00 | 📎 Post-Visit Materials | Photos + payment plan sent via WhatsApp | M4.3 |
| 13/01/2025 10:00 | 💬 Follow-up D2 | "Any questions about the property?" | M4.3 |
| 15/01/2025 09:00 | 📊 Comparison Doc | Greenview Heights vs Skyline comparison sent | M4.3 |
| 17/01/2025 11:00 | 🏠 Site Visit 2 | Attended with spouse — further interest — asked about Unit 804 | M4.2 |
| 18/01/2025 12:00 | 💬 Negotiation | Buyer asking for ₹2L discount — in negotiation | M4.5 |
| 20/01/2025 09:00 | ⚠️ Risk Alert | Deal risk score elevated to 62 — 7 days since last contact | M12.3 |
| 22/01/2025 10:00 | 💬 WhatsApp Nudge | Auto-sent: "Hi Rajesh, 3 units remaining on Floor 8..." | M4.3 |

### Sentiment Analysis Panel

| Period | Avg Sentiment | Signals |
|---|---|---|
| Week 1 (03–09 Jan) | 😊 Positive (0.74) | Quick replies, enthusiastic language, asked about floors |
| Week 2 (10–16 Jan) | 😊 Positive (0.81) | Brought spouse, asked specific unit questions |
| Week 3 (17–23 Jan) | 😐 Neutral (0.51) | Slower replies, shorter messages, discount request |

> ⚠️ **Sentiment Alert:** Buyer sentiment declined this week. Combined with 7 days no contact — risk score elevated. Recommended action: personal call from Sales Manager (not junior agent).

### Next Best Action Card

```
🎯 NEXT BEST ACTION — Rajesh Patel
Action:    Manager-level call (Rahul Modi) — not agent
Reason:    Sentiment declining + 7 days no contact + discount request unresolved
Timing:    Today before 1:00 PM (buyer's most active window based on chat history)
Script:    "Rajesh, I wanted to personally follow up on Unit 804 —
           I've spoken to our team and I have something for you."
Predicted outcome if actioned today:  +18% conversion probability
```

### Key UI Elements
- **Graph visualisation** — SVG nodes connected to central buyer profile — pulsing when new event added
- **Timeline filter** — filter by event type: Calls / WhatsApp / Visits / Payments / Documents / AI Events
- **Sentiment line chart** — week-by-week sentiment score plotted as a smooth curve
- **"Take Action" button** — executes the next best action (opens WhatsApp compose / schedules call)
- **Export profile** — one-click PDF export of the full buyer profile (for legal/handover use)

---

## Page 3 — Sub-Module 12.2: Cross-Module AI Insights Engine

### What It Is
An analytical AI layer that **continuously analyses patterns across all 11 modules** — identifying non-obvious correlations, performance anomalies, market signals, and operational risks — and surfaces actionable recommendations to the right person at the right time. This is what makes the Command Center feel like it has a brain, not just a database.

### What It Does
- Continuously analyses: lead conversion patterns, agent performance variations, inventory velocity, campaign attribution, buyer behaviour, construction cost trends, and market signals
- Classifies insights by category and confidence level
- Routes each insight to the relevant module and responsible person
- Tracks outcome of actioned insights: "This insight was acted on 23 days ago — outcome: +2 bookings in 30 days"
- Weekly digest: top 5 most actionable insights delivered to management every Monday (feeds M5.6)

### Insight Categories & Badge Colors

| Category | Description | Badge Color |
|---|---|---|
| Sales | Lead conversion, agent performance, pipeline patterns | #2E86AB Blue |
| Pricing | Inventory velocity, price sensitivity, competitor signals | #E8A838 Amber |
| Team | Agent performance anomalies, coaching flags | #1D9E75 Green |
| Risk | Deal abandonment signals, compliance risks | #D85A30 Red |
| Compliance | RERA deadlines, document gaps, DPDP flags | #D85A30 Red |
| Finance | Collection anomalies, cash flow risks, P&L signals | #9B2226 Dark Red |
| Market | Competitor movements, locality demand shifts | #1A3C5E Navy |
| Operations | System performance, workflow bottlenecks | #6C757D Grey |

### The 8 Live Rotating Insights (Demo Set)

| # | Category | Insight | Confidence | Recommended Action |
|---|---|---|---|---|
| 1 | Sales | Facebook leads who visit the website pricing page within 24 hours of inquiry convert 3.1× higher than those who don't. | 91% | Prioritise pricing-page visitors in M1.6 score (+8 points trigger) |
| 2 | Pricing | Units on Floors 8–12, Tower A, Greenview Heights are taking 40% longer to sell than other floors. This may indicate a pricing or floor plan concern at that range. | 84% | Review Floor 8–12 pricing or offer a scheme for pending units |
| 3 | Team | Agent Rahul Modi's conversion rate drops by 34% when he handles more than 45 active leads simultaneously. Below 40 leads, his rate is the team's highest. | 88% | Cap Rahul's lead assignment at 40; redistribute above 40 to Priya Rana |
| 4 | Sales | Site visits conducted on Saturdays have 2.4× the booking conversion rate compared to weekday visits. | 79% | Shift open house events to Saturdays; reduce weekday slot capacity |
| 5 | Finance | Business Park collections are 12% below monthly target for 2 consecutive months. Combined with 3.8% margin shortfall — early distress signal. | 86% | Finance Director review: accelerate collections + cost containment |
| 6 | Market | Shreenath Builders cut 2BHK prices in Vesu by ₹1.8L this week (now ₹54.2L vs Fortiv ₹57.5L). Buyer inquiries for Vesu dropped 14% in the last 7 days. | 77% | Review Vesu pricing or launch a scheme within 10 days |
| 7 | Risk | 4 deals in Negotiation stage have been idle for 10+ days with no agent contact logged. All 4 are approaching high-risk threshold. | 93% | Immediate manager review + contact each buyer today |
| 8 | Compliance | RERA Quarterly Progress Report for Greenview Heights is due in 8 days. M9.1 construction data is ready; M6.3 compliance monitor has not been triggered. | 100% | Trigger RERA QPR preparation workflow immediately |

### Insight Detail Panel (Expanded View — Insight #1)

```
INSIGHT #AI-2025-0142
Category:       Sales
Generated:      16/01/2025 07:00 AM (Weekly analysis run)
Confidence:     91% (based on 312 leads analysed over 90 days)

FINDING:
Facebook Lead Ads leads who visit the Fortiv website pricing page within
24 hours of their initial inquiry convert to site visit at 31.4% vs 10.1%
for those who do not visit the pricing page in that window.
Conversion to booking: 18.2% vs 5.9%.

DATA BEHIND THIS:
  • 84 Facebook leads visited pricing page within 24hrs → 27 bookings (32.1%)
  • 228 Facebook leads did not visit pricing page → 13 bookings (5.7%)
  • Difference: 3.1× higher conversion rate

RECOMMENDED ACTION:
  → Add +8 points to M1.6 AI lead score when Facebook lead visits
     pricing page within 24 hours of inquiry
  → Create a dedicated WhatsApp follow-up for this segment:
     "Hi [Name], I noticed you were checking our pricing — happy to
      walk you through a personalised payment plan."

ROUTE TO:     Sales Manager (Rahul Modi) + Marketing Team
STATUS:       ⚪ Not yet actioned

[ Take Action ]  [ Dismiss ]  [ View Full Analysis ]
```

### Insight Outcome Tracking (Historical)

| Insight | Date | Actioned | Outcome | Verified |
|---|---|---|---|---|
| Saturday visits have 2.4× conversion | 02/12/2024 | ✅ Yes — shifted open house | Tower A Saturday visits +40%, bookings +2 in 30 days | ✅ |
| Rahul lead cap recommendation | 15/11/2024 | ✅ Yes — cap set at 40 | Rahul's conversion rate improved from 4.2% to 6.8% | ✅ |
| Floor 8–12 pricing signal | 08/01/2025 | ⏳ Under review | — | Pending |
| Facebook pricing page signal | 16/01/2025 | ⚪ Not actioned | — | Pending |
| Competitor price cut alert | 14/01/2025 | ✅ Yes — scheme launched | Inquiry volume recovered +11% in 2 weeks | ✅ |

### Page Layout
**Top:** Category filter tabs (All / Sales / Pricing / Team / Risk / Compliance / Finance / Market)  
**Centre:** Insight cards (stacked feed, newest first) — each expandable  
**Right Panel:** Insight outcome tracker — actioned vs pending vs dismissed  
**Bottom:** Weekly digest preview — top 5 insights this week

### Key UI Elements
- **Auto-cycling demo animation** — insights scroll / fade every 4 seconds in demo mode
- **Confidence bar** — horizontal bar under each insight showing 0–100% confidence
- **"Take Action" routing button** — routes to the correct module or creates a task in CRM
- **Outcome tracker** — green checkmark + outcome description on actioned insights
- **Filter by date range** — show insights from last 7 / 30 / 90 days

---

## Page 4 — Sub-Module 12.3: Predictive Deal Risk Scorer

### What It Is
An AI model that **continuously monitors every active deal and scores its abandonment or cancellation risk** — allowing agents to intervene proactively before a deal goes cold, rather than discovering it has been lost. The difference between a deal won and a deal lost is often a single well-timed call at the moment of doubt.

### What It Does
- Monitors 8 risk signal categories in real time across every active deal
- Risk score: 0 (no risk) → 100 (near-certain abandonment)
- Score updates every 6 hours; immediate update on critical signal triggers
- Alert: when deal crosses into High risk (61–100) → agent and manager alerted via WhatsApp
- Intervention suggestions: specific, context-aware recommended actions per risk reason
- Manager view: all High-risk deals visible across the team in one panel
- Historical accuracy tracking: shows how many high-risk deals were saved vs lost, and intervention ROI

### The 8 Risk Signal Categories

| # | Signal Category | High Risk Indicator | Weight |
|---|---|---|---|
| 1 | Contact Recency | No buyer contact in 10+ days | Very High |
| 2 | WhatsApp Response Rate | Response rate dropped below 40% (vs onboarding 80%+) | High |
| 3 | Call Connection | 3+ consecutive unanswered calls | High |
| 4 | Payment Behaviour | Installment overdue by 15+ days (active buyers) | Very High |
| 5 | Sentiment Decline | Conversation sentiment dropped >30% in last week | High |
| 6 | Competitive Inquiry Signal | Buyer mentioned competitor project in conversation | Very High |
| 7 | Stage Stagnation | No deal stage movement in 12+ days (Negotiation) | Medium |
| 8 | Engagement Drop | Zero portal logins, no brochure opens in 10 days | Medium |

### Risk Score Bands

| Score | Risk Level | Badge | Alert | Action |
|---|---|---|---|---|
| 0–30 | 🟢 Low | Green | None | Monitor normally |
| 31–60 | 🟡 Medium | Amber | Weekly digest | Agent review within 48 hrs |
| 61–80 | 🔴 High | Red | Immediate WhatsApp to agent + manager | Intervention today |
| 81–100 | 🔴🔴 Critical | Red pulsing | Immediate escalation to Sales Director | Director-level call |

### Live Risk Table (Mock Data — 15 Active Deals)

| Buyer Name | Unit | Deal Value | Stage | Risk Score | Risk Level | Primary Risk Reason | Days in Stage | Agent |
|---|---|---|---|---|---|---|---|---|
| Rajesh Patel | A-804 | ₹57.5L | Negotiation | **62** 🔴 | High | No contact 7 days + sentiment drop | 14 | Priya Rana |
| Vikram Joshi | BP-201 | ₹1.8Cr | Negotiation | **78** 🔴 | High | Payment overdue + 3 missed calls | 22 | Rahul Modi |
| Mahesh Khanna | S-1104 | ₹98.0L | Negotiation | **84** 🔴🔴 | Critical | Mentioned Shreenath project + 12 days no contact | 28 | Kiran Desai |
| Pooja Sharma | A-607 | ₹54.2L | Visited | **58** 🟡 | Medium | No follow-up engagement for 8 days | 8 | Ankit Shah |
| Suresh Nair | BP-102 | ₹2.8Cr | Negotiation | **71** 🔴 | High | Stage stagnation 18 days + low WhatsApp response | 18 | Rahul Modi |
| Deepak Trivedi | A-906 | ₹57.5L | Booking Due | **29** 🟢 | Low | All signals positive | 3 | Priya Rana |
| Sunita Mehta | C-502 | ₹62.0L | Visited | **44** 🟡 | Medium | No portal login in 9 days | 9 | Priya Rana |
| Kavita Agarwal | B-904 | ₹88.0L | Negotiation | **66** 🔴 | High | Budget concern raised, no resolution | 11 | Kiran Desai |
| Anita Gujarati | A-302 | ₹38.0L | Site Visit Scheduled | **18** 🟢 | Low | Visit confirmed, WhatsApp responsive | 2 | Meera Patel |
| Sanjay Kapoor | BP-401 | ₹3.2Cr | Negotiation | **89** 🔴🔴 | Critical | 88-day overdue + no response + legal notice sent | 34 | Rahul Modi |
| Ritu Bhandari | A-1104 | ₹52.0L | Visited | **37** 🟡 | Medium | Brochure not opened after 6 days | 6 | Ankit Shah |
| Arjun Malhotra | S-208 | ₹1.2Cr | Negotiation | **52** 🟡 | Medium | Sentiment neutral — needs nudge | 7 | Kiran Desai |
| Nisha Verma | A-409 | ₹55.0L | Inquiry | **12** 🟢 | Low | Fresh lead, high engagement | 1 | Meera Patel |
| Priya Shah | A-1102 | ₹57.5L | Booking Amount Paid | **8** 🟢 | Low | Payment received, booking confirmed | 2 | Priya Rana |
| Amit Desai | B-602 | ₹49.5L | Visited | **41** 🟡 | Medium | Follow-up D4 pending — no response yet | 4 | Ankit Shah |

### Score Breakdown Panel (Expanded — Mahesh Khanna, Score 84)

```
DEAL RISK SCORE: 84 🔴🔴 CRITICAL
Buyer: Mahesh Khanna · Unit S-1104 · Skyline Residences · ₹98L
Agent: Kiran Desai · Stage: Negotiation · Days in stage: 28

RISK SIGNAL BREAKDOWN:
🔴 Mentioned Shreenath project in call (14/01)                  +32 pts
🔴 12 days since last contact                                    +24 pts
🔴 WhatsApp response rate: 28% (was 72% in Week 1)              +16 pts
🟡 Stage stagnation: 28 days in Negotiation                     +10 pts
🟡 2 missed calls in last 5 days                                 +8 pts
✅ No payment overdue (no demand note yet)                        0 pts
✅ Portal last viewed 4 days ago                                  0 pts

PREDICTED OUTCOME (if no action today):    72% deal loss
PREDICTED OUTCOME (if actioned today):     41% save probability

RECOMMENDED INTERVENTION:
1. Director-level call (not agent) — Rahul Modi or MD
2. Acknowledge the competitor: "I understand you're evaluating options —
   let me show you specifically why Skyline is the right choice for you."
3. Offer a closing incentive: complimentary modular kitchen or 2 free
   car parks — within Fortiv's approved scheme for this project
4. Send Skyline vs Shreenath objective comparison document

ALERT STATUS: WhatsApp sent to Kiran Desai + Rahul Modi at 07:00 AM
```

### Intervention Library (AI-Recommended Actions by Risk Type)

| Risk Reason | Recommended Intervention | Channel | Urgency |
|---|---|---|---|
| No contact 10+ days | Personal call from agent + \"Just checking in\" WhatsApp | WhatsApp + Call | Same day |
| Competitor mention | Objective comparison document + senior call | Call + Document | Same day |
| Budget concern | EMI calculator + home loan copilot intro | WhatsApp | Within 24 hrs |
| Price objection | Approved incentive scheme offer | Call | Same day |
| Sentiment decline | Empathy-first WhatsApp from manager | WhatsApp | Within 4 hrs |
| Stage stagnation | Site visit re-invite + urgency nudge | WhatsApp | Within 24 hrs |
| Payment overdue | Formal reminder + relationship call | Call + WhatsApp | Same day |
| Not RERA concern | Send RERA certificate + third-party review link | WhatsApp | Within 2 hrs |

### Page Layout
**Top:** Risk summary KPI cards (Total Deals / High Risk / Critical / Saved this month)  
**Centre:** Live risk table — sortable by score, stage, agent, days in stage  
**Right Panel:** Score breakdown (opens on row click)  
**Bottom:** Risk trend chart — how many deals moved into each risk band this week

### Key UI Elements
- **Pulsing red badge** on critical-risk rows (score 81–100)
- **"Intervene Now" button** — opens pre-filled WhatsApp message per risk reason
- **Risk score history sparkline** — small chart per row showing score movement over 14 days
- **Manager filter** — toggle to show only deals for a specific agent (for 1:1 coaching reviews)

---

## Page 5 — Sub-Module 12.4: Channel Partner (CP) Portal & Tracker

### What It Is
A dedicated digital portal for Fortiv Solutions' channel partner (broker) network — where CPs can **register deals, track commission status, access marketing materials, view their performance leaderboard, and stay engaged with Fortiv's project updates** — without needing to call or WhatsApp the sales team.

### What It Does
- CP self-registration with RERA broker number verification and GST details
- Deal registration: CP submits buyer details; system cross-checks for existing lead
- Real-time deal tracking: CP sees their registered deals move through the pipeline
- Commission visibility: live view of commissions earned, approved, and paid per deal
- Performance leaderboard: monthly ranking of top CPs
- Resource library: current price lists, brochures, floor plans, and marketing copy
- Event calendar: upcoming site visits, project launches, broker meets

### CP Onboarding Fields

| Field | Description | Validation |
|---|---|---|
| `cp_name` | Broker / firm full name | Required |
| `contact_person` | Primary contact name | Required |
| `phone` | Mobile number | Required + WhatsApp verified |
| `email` | Business email | Required + email verified |
| `rera_number` | Gujarat RERA broker registration | Auto-verified via RERA API |
| `gst_number` | GST registration number | Auto-validated format |
| `pan_number` | PAN for TDS purposes | Format validated |
| `bank_account` | Account number + IFSC for commission | Penny drop verified |
| `office_address` | Business address | Required |
| `localities_served` | Target micro-markets | Multi-select from locality list |
| `team_size` | Number of agents in their network | Optional |
| `portal_status` | Onboarding status | Pending / Active / Suspended |

### Deal Registration Flow

```
CP registers deal on portal:
  └── Enters: buyer name, phone, email, project interest, first contact date

System checks:
  ├── Is this phone already in Fortiv CRM?
  │     ├── NO → Register as CP deal, tag with CP name → Push to M4 pipeline
  │     └── YES → Check first-touch date
  │           ├── CP contacted buyer before CRM entry → CP gets credit
  │           └── Fortiv had buyer first → CP claim rejected, CP notified with reason
  
CP receives confirmation:
  └── "Deal registered: Rajesh Patel · Greenview Heights 2BHK · Deal ID: DEAL-2025-0412"
  └── "Commission applicable: 5% of final consideration on completion"
```

### Deal Status Visible to CP (Their Own Deals Only)

| Stage Visible in CP Portal | Maps to Internal Stage | Commission Trigger |
|---|---|---|
| Registered | Inquiry | — |
| Visit Scheduled | Site Visit Scheduled | — |
| Visit Done | Visited | — |
| Under Negotiation | Negotiation | — |
| Booked ✓ | Booking Amount Paid | Stage 1 commission triggered |
| 50% Payment Received | Agreement Signed | Stage 2 commission triggered |
| 90% Payment Received | Loan Processing/Payment | Stage 3 commission triggered |
| Possession Completed | Registration | Stage 4 commission triggered |
| Commission Payable | (M11.3 approved) | Statement generated |
| Commission Paid ✓ | (M11.3 paid) | Payment confirmed + receipt |

### CP Portal Dashboard (What a CP Sees)

**My Performance Summary (Current Month — Mock: Rajhans Realtors)**

| Metric | Value |
|---|---|
| Active Registered Deals | 8 |
| Deals Booked (Booking Amount Paid) | 3 |
| Commission Earned This Month | ₹2.4L |
| Commission Pending Approval | ₹1.8L |
| Commission Paid to Bank | ₹2.4L (Previous month settled) |
| My Leaderboard Rank | 🥇 #1 of 8 active CPs |

### CP Resource Library Contents

| Resource | Format | Last Updated |
|---|---|---|
| Greenview Heights — Price List Jan 2025 | PDF | 01/01/2025 |
| Greenview Heights — Floor Plans (All Towers) | PDF | 15/12/2024 |
| Greenview Heights — Brochure (English) | PDF | 01/12/2024 |
| Greenview Heights — Brochure (Gujarati) | PDF | 01/12/2024 |
| Skyline Residences — Price List Jan 2025 | PDF | 01/01/2025 |
| Skyline Residences — Floor Plans | PDF | 20/11/2024 |
| Business Park — Commercial Brochure | PDF | 01/10/2024 |
| CP Commission Structure — All Projects | PDF | 01/01/2025 |
| RERA Certificates — All 3 Projects | PDF | Evergreen |
| WhatsApp Marketing Kit (Images + Copy) | ZIP | 10/01/2025 |
| Upcoming Events Calendar | PDF | Updated weekly |

### CP Leaderboard (Monthly — January 2025)

| Rank | CP Name | Deals Registered | Deals Booked | Commission Earned | Trophy |
|---|---|---|---|---|---|
| 🥇 1 | Rajhans Realtors | 8 | 3 | ₹6.2L | 🏆 Top CP Jan 2025 |
| 🥈 2 | Prime Realty | 6 | 2 | ₹4.8L | |
| 🥉 3 | Landmark Properties | 5 | 2 | ₹4.1L | |
| 4 | City Property Hub | 4 | 1 | ₹3.2L | |
| 5 | SNS Land Brokers | 3 | 1 | ₹2.8L | |
| 6 | Om Realtors | 3 | 1 | ₹2.4L | |
| 7 | Parth Developers | 2 | 1 | ₹1.8L | |
| 8 | Greenfield Developers | 2 | 0 | ₹0.8L | |

### Page Layout
**Top:** CP selector (Admin view shows all CPs; CP login shows only their own data)  
**Left (40%):** My Deals pipeline — stage-by-stage deal tracker  
**Right (60%):** Commission ledger + leaderboard + resource library tabs  
**Bottom:** Upcoming events + notification centre

### Key UI Elements
- **Commission status badge** per deal — Pending / Approved / Paid (colour coded)
- **"Download Statement" button** — CP downloads their commission statement PDF
- **Resource library** — all files with last-updated date; download counter visible to admin
- **Notification bell** — CP alerted when their deal moves stage or commission is approved

---

## Page 6 — Sub-Module 12.5: Role-Based Access Control (RBAC)

### What It Is
A **granular permission management system that controls exactly what each user can see and do** in the Command Center — based on their defined role — ensuring sensitive data is accessible only to authorised personnel. As the platform handles buyer KYC, financial data, HR payroll, and operational records, RBAC is not optional — it is a legal and operational necessity.

### What It Does
- Defines roles with specific module-level and action-level permissions
- Users are assigned one primary role; admin can grant additional permissions per user
- Complete audit log of every data access and action — user, timestamp, action, record affected
- Session management: auto-timeout, MFA for high-privilege roles
- Role change workflow: changes require manager approval and are permanently logged
- Data export controls: who can download data from the platform

### Role Definitions & Access Matrix

| Role | Module Access | Can Edit | Can Export | Financial Data | HR Data | Notes |
|---|---|---|---|---|---|---|
| **Sales Agent** | M1 (own leads), M2, M3, M4 (own deals) | Own leads + deals only | No | No | No | Cannot see other agents' leads |
| **Senior Agent** | M1, M2, M3, M4 (own + junior team) | Own + assigned agents | Own data only | No | No | Can mentor junior agents |
| **Sales Manager** | M1–M4 full, M5 (read), M12.3, M12.4 | Full M1–M4 | M4 reports | Summary only | No | Cannot approve commissions |
| **Marketing** | M1 (read), M2 (read), M3, M5 | M3 listings, M4.6 content | Campaign reports | No | No | Can edit property listings |
| **Finance** | M11 full, M4 (read pipeline), M10.2, M6 | M11 full | All M11 reports | Full | No | Cannot access M7 HR or M1 leads |
| **HR** | M7 full, M12.5 (own users) | M7 full | M7 reports | No | Full | Cannot access sales or finance |
| **Project Team** | M9 full, M6 (read), M8 (read) | M9 full | M9 reports | No | No | Construction-facing role |
| **C-Suite / MD** | All modules (read) | Approval only | All | Full | Full | Cannot edit operational data |
| **CFO** | M11 full, M5, M12.6 (read) | M11 full + approvals | All financial | Full | Salary summary | Can approve commissions |
| **System Admin** | All modules | All (configuration) | All | Full | Full | Highest privilege — MFA mandatory |
| **Channel Partner** | M12.4 (own deals + commission only) | None | Own statements | Own commission | No | External portal access |
| **Buyer** | M10.1 (own unit only) | None | Own documents | Own payments | No | External portal access |

### Permission Granularity (Action Level)

For each module, permissions are defined at the action level:

| Action | Example |
|---|---|
| View | See the record/data |
| Create | Add a new record |
| Edit | Modify an existing record |
| Delete | Remove a record (restricted to Admin only) |
| Export | Download data as CSV/PDF |
| Approve | Trigger an approval workflow step |
| Configure | Change system settings or rules |
| Audit | View the audit log for this module |

### User Management Fields

| Field | Description | Example |
|---|---|---|
| `user_id` | Unique user identifier | USR-20250001 |
| `full_name` | Employee full name | Priya Rana |
| `email` | Login email | priya.rana@fortivsolutions.in |
| `phone` | Mobile for MFA | +91 98xxxxxxxx |
| `role` | Assigned system role | Sales Agent |
| `additional_permissions` | Specific extras granted | View M5 reports |
| `reporting_to` | Manager | Rahul Modi |
| `department` | Team | Sales — Surat |
| `status` | Account status | Active / Suspended / Pending |
| `mfa_enabled` | Multi-factor auth | ✅ Enabled (mandatory for Manager+) |
| `last_login` | Most recent session | 16/01/2025 09:14 |
| `session_timeout` | Auto-logout after | 30 minutes (agent) / 60 minutes (manager) |
| `created_date` | When account was created | 15/11/2024 |
| `created_by` | Who created the account | System Admin — Rahul Modi |

### Audit Log (Sample Entries)

| Timestamp | User | Action | Module | Record Affected | IP Address |
|---|---|---|---|---|---|
| 16/01/2025 14:23 | Priya Rana | View | M4 | Deal — Rajesh Patel (DEAL-0412) | 192.168.1.42 |
| 16/01/2025 14:25 | Priya Rana | Edit | M4 | Deal — Stage updated: Visited → Negotiation | 192.168.1.42 |
| 16/01/2025 13:00 | Rahul Modi | Export | M5 | Weekly Collections Report — Jan W3 | 192.168.1.18 |
| 16/01/2025 11:45 | Ankit Shah | View | M1 | Lead — Pooja Sharma (LEAD-0847) | 192.168.1.55 |
| 16/01/2025 10:30 | System Admin | Role Change | M12.5 | Meera Patel — Agent → Senior Agent | 192.168.1.01 |
| 16/01/2025 09:00 | Kiran Desai | View | M4 | Deal — Mahesh Khanna (DEAL-0389) | 192.168.2.14 |
| 15/01/2025 23:14 | Unknown | Failed Login | — | Login attempt — priya.rana@fortivsolutions.in | 45.33.XX.XX ⚠️ |

> ⚠️ **Security Alert:** Failed login from unrecognised IP at 23:14. Account temporarily locked. System Admin notified.

### Page Layout
**Top:** User search + filter (by role / department / status) + "Add User" button  
**Centre Left:** User list table — name, role, status, last login, MFA status  
**Centre Right:** Permission matrix (visual grid — roles vs modules)  
**Bottom:** Audit log feed — last 20 actions, filterable by user/module/action

### Key UI Elements
- **Permission grid visual** — colour-coded matrix showing all roles × all modules at a glance
- **MFA status badge** — green lock icon if MFA enabled; amber warning if not
- **Failed login alert** — red banner when suspicious login detected
- **"Suspend User" button** — one-click account suspension (for leavers or security events)
- **Role change approval workflow** — proposed change → manager approval → logged

---

## Page 7 — Sub-Module 12.6: DPDP Act Compliance Layer

### What It Is
A dedicated data privacy and compliance management module ensuring Fortiv Solutions' use of personal data **complies with India's Digital Personal Data Protection (DPDP) Act 2023** — including consent management, data subject rights, retention policy enforcement, and breach protocol. With penalties up to ₹250 Cr per violation, this module is both legally required and commercially essential.

### What It Does
- Captures and stores explicit consent at every point of data collection
- Maintains consent status per individual — view, update, or withdraw
- Enforces data retention policies per data category; flags data approaching deletion
- Processes data subject access, correction, and deletion requests within 7 days
- Audit trail for all personal data processing activities
- Breach detection and 72-hour notification protocol to Data Protection Authority (DPA)

### Consent Management Fields

| Field | Description | Example |
|---|---|---|
| `consent_id` | Unique consent record ID | CONS-20250103-00847 |
| `data_principal_name` | Person who gave consent | Rajesh Patel |
| `data_principal_phone` | Contact identifier | +91 98765 XXXXX |
| `consent_purpose` | What they consented to | Property inquiry outreach |
| `consent_text_shown` | Exact text displayed at time of consent | "I consent to Fortiv Solutions contacting me..." |
| `consent_given_via` | Channel where consent was captured | 99acres inquiry form |
| `consent_timestamp` | Date and time of consent | 03/01/2025 09:14:22 |
| `consent_status` | Current status | Active / Withdrawn / Expired |
| `withdrawal_date` | If withdrawn, when | — |
| `withdrawal_channel` | How withdrawal was communicated | — |
| `data_categories_covered` | What personal data this covers | Name, phone, email, property preferences |
| `processing_activities` | What Fortiv does with this data | WhatsApp outreach, CRM record, marketing |
| `retention_period` | How long data kept | 2 years (lead not converted) |
| `retention_expiry_date` | When data must be deleted | 03/01/2027 |

### Consent Capture Points (Across Modules)

| Touch Point | Module | Consent Method |
|---|---|---|
| 99acres / MagicBricks inquiry form | M1.4 | Form checkbox: "I agree to be contacted by Fortiv Solutions" |
| Facebook Lead Ads form | M1.3 | Facebook consent + Fortiv supplemental consent |
| WhatsApp first message | M2.1 | Bot sends consent message; reply confirms consent |
| Website chat widget | M2.3 | Widget consent banner before chat starts |
| Missed call auto-response | M2.2 | Disclaimer in auto-response WhatsApp |
| Buyer portal registration | M10.1 | Explicit Terms & Privacy Policy acceptance |
| CP portal registration | M12.4 | Explicit Terms & Privacy Policy acceptance |
| KYC document collection | M6.2 | Signed consent form as part of KYC |

### Data Retention Policy (Fortiv Solutions)

| Data Category | Retention Period | Legal Basis | Auto-Delete at Expiry |
|---|---|---|---|
| Leads — not converted | 2 years from first contact | Consent | ✅ Yes (flagged 30 days before) |
| Leads — converted to buyer | 7 years post-registration | RERA + IT Act | ✅ Yes (flagged 90 days before) |
| Buyer KYC documents | 7 years post-registration | PMLA + RERA | ✅ Yes |
| HR employee records | Duration of employment + 5 years | Labour law | ✅ Yes |
| Financial records | 8 years | Companies Act + Income Tax | ✅ Yes |
| Audit logs | 5 years | IT Act 2000 | ✅ Yes |
| CP / broker records | Duration of relationship + 3 years | Contract + GST | ✅ Yes |
| Security logs | 2 years | IT Act 2000 | ✅ Yes |

### Data Retention Dashboard (Mock Stats)

| Retention Category | Total Records | Expiring in 30 Days | Expiring in 90 Days | Already Expired (Action Required) |
|---|---|---|---|---|
| Unconverted leads | 3,847 | 142 | 384 | 12 ⚠️ |
| Converted buyer records | 824 | 0 | 0 | 0 |
| KYC documents | 824 | 0 | 0 | 0 |
| HR records | 58 | 0 | 2 | 0 |
| Audit logs | — | — | — | 0 |

### Data Subject Request Handling

| Request Type | DPDP Act Right | SLA | Process |
|---|---|---|---|
| Access request | Right to access personal data held | 7 days | System auto-compiles all data for this individual → PDF → email |
| Correction request | Right to correct inaccurate data | 7 days | Agent reviews + corrects → confirmation sent |
| Deletion request | Right to erasure (where applicable) | 30 days | Checks legal holds → deletes where permissible → confirms |
| Withdrawal of consent | Right to withdraw consent | Immediate | All automated outreach stops; record flagged |
| Grievance | Right to raise complaint | 7 days acknowledgement | Routes to DPO (Data Protection Officer) |

### Breach Response Protocol

```
BREACH DETECTION → RESPONSE TIMELINE

Hour 0:    Breach detected (system alert or staff report)
           → Immediate containment actions (access revoke, API key rotation)
           → Incident Commander assigned (CTO or System Admin)

Hour 1:    Initial impact assessment
           → How many data principals affected?
           → What categories of personal data exposed?
           → Is breach contained or ongoing?

Hour 4:    Internal escalation
           → MD + CFO notified
           → Legal counsel engaged
           → Evidence preservation begins

Hour 24:   Detailed incident report compiled
           → Nature of breach, data affected, likely cause
           → Remediation steps taken and planned

Hour 72:   DPA Notification (mandatory under DPDP Act)
           → Auto-generated breach notification draft
           → Contains: nature, categories of data, approximate number affected,
             likely consequences, measures taken
           → Filed with Data Protection Authority of India

Day 7:     Affected data principals notified
           → WhatsApp + email notification to each affected individual
           → Plain language explanation + steps they can take

Day 30:    Post-incident review
           → Root cause analysis report
           → System improvements implemented
           → Insurance claim if applicable
```

### Page Layout
**Top:** Compliance health summary (4 KPI cards: Consent Records / Active Consents / Expired Data (action needed) / Open DSRs)  
**Centre Left:** Consent register (searchable table)  
**Centre Right:** Data subject requests queue  
**Bottom Left:** Retention expiry calendar  
**Bottom Right:** Breach log (empty/green in normal state; activates on incident)

### Key UI Elements
- **Consent status badge** — Active (green) / Withdrawn (amber) / Expired (red) per record
- **"Process Deletion" button** — one-click deletion workflow with legal hold check
- **Retention expiry alerts** — amber banner when any category has records expiring in 30 days
- **Breach response checklist** — step-by-step interactive checklist activates on incident declaration
- **DPDP Act reference panel** — key sections of the Act cited inline for each compliance control

---

## Page 8 — Sub-Module 12.7: System Health & Uptime Dashboard

### What It Is
A **real-time operational monitoring dashboard that tracks the health of every module, workflow, integration, and AI agent** in the Command Center — alerting the technical team immediately when anything fails, so issues are resolved before they impact business operations. The "mission control" screen for the platform.

### What It Does
- Live status for all 12 modules and their automation workflows
- Integration health monitoring for every external API
- Workflow run monitoring: last run time, success rate, queue depth
- AI agent health: response time, success rate, queue depth
- Configurable alert thresholds per integration and workflow
- Incident log: history of all incidents with root cause and resolution time
- Monthly SLA report: uptime % per module and integration

### Module Health Grid (All 12 Modules)

| Module | Name | Status | Uptime (30d) | Last Incident | Response Time |
|---|---|---|---|---|---|
| M1 | Lead Generation | 🟢 Active | 99.8% | 05/01/2025 | 1.2s avg |
| M2 | Conversational AI | 🟢 Active | 99.9% | — | 0.8s avg |
| M3 | Property Intelligence | 🟢 Active | 99.6% | 12/01/2025 | 2.1s avg |
| M4 | Sales Pipeline & CRM | 🟢 Active | 99.9% | — | 0.9s avg |
| M5 | Analytics & Reporting | 🟢 Active | 99.7% | 08/01/2025 | 1.8s avg |
| M6 | Document AI | 🟢 Active | 99.5% | 10/01/2025 | 3.2s avg |
| M7 | HR Pipeline | 🟢 Active | 99.8% | — | 1.4s avg |
| M8 | Tenant Management | 🟡 Degraded | 97.2% | 15/01/2025 | 4.8s avg ⚠️ |
| M9 | Construction Intelligence | 🟢 Active | 99.6% | 03/01/2025 | 1.6s avg |
| M10 | Buyer Portal | 🟢 Active | 99.9% | — | 0.7s avg |
| M11 | Finance & Revenue | 🟢 Active | 99.8% | 07/01/2025 | 1.3s avg |
| M12 | AI Brain & Security | 🟢 Active | 99.9% | — | 0.6s avg |

> ⚠️ **Current Alert:** M8 (Tenant Management) — Maintenance Request Router experiencing 4.8s average response (target: <2s). Investigation in progress. Non-critical; business operations unaffected.

### Integration Health Monitor

| Integration | Service | Status | Last Successful Sync | Error Rate (24h) | Uptime (30d) |
|---|---|---|---|---|---|
| WhatsApp Business API | Meta / WABA | 🟢 Active | 16/01/2025 14:31 | 0.02% | 99.9% |
| 99acres Lead API | 99acres | 🟢 Active | 16/01/2025 14:28 | 0.1% | 99.6% |
| MagicBricks Lead API | MagicBricks | 🟢 Active | 16/01/2025 14:22 | 0.08% | 99.7% |
| Housing.com API | Housing.com | 🟢 Active | 16/01/2025 13:55 | 0.15% | 99.4% |
| Facebook Marketing API | Meta | 🟢 Active | 16/01/2025 14:30 | 0.03% | 99.9% |
| Google Ads API | Google | 🟢 Active | 16/01/2025 14:00 | 0.05% | 99.8% |
| Tally Prime API | Tally | 🟡 Degraded | 16/01/2025 11:00 | 3.2% ⚠️ | 97.1% |
| UIDAI Aadhaar API | UIDAI | 🟢 Active | 16/01/2025 14:10 | 0.4% | 99.2% |
| Income Tax PAN API | CBDT | 🟢 Active | 16/01/2025 13:42 | 0.3% | 99.3% |
| DocuSign / e-Sign API | E-Sign Provider | 🟢 Active | 16/01/2025 12:18 | 0.1% | 99.8% |
| Google Calendar API | Google | 🟢 Active | 16/01/2025 14:31 | 0.02% | 99.9% |
| Google Drive API | Google | 🟢 Active | 16/01/2025 14:29 | 0.04% | 99.9% |
| CIBIL Score API | TransUnion | 🟢 Active | 16/01/2025 10:30 | 0.6% | 98.9% |
| Gujarat RERA API | G-RERA | 🟡 Degraded | 14/01/2025 09:00 | N/A (rate limited) | 88.4% ⚠️ |
| Exotel Telephony | Exotel | 🟢 Active | 16/01/2025 14:25 | 0.08% | 99.7% |
| Bank Statement API | Banking Partner | 🟢 Active | 16/01/2025 07:00 | 0.2% | 99.5% |

### Workflow Health Monitor (n8n Automation Workflows)

| Workflow Name | Module | Last Run | Status | Runs Today | Failure Rate | Queue Depth |
|---|---|---|---|---|---|---|
| Facebook Lead Sync | M1.3 | 14:30:47 | ✅ Success | 34 | 0% | 0 |
| Portal Lead Aggregator | M1.4 | 14:28:12 | ✅ Success | 142 | 0.7% | 0 |
| Lead Enrichment Queue | M1.5 | 14:31:02 | ✅ Success | 47 | 1.2% | 3 |
| WhatsApp Chatbot Handler | M2.1 | 14:31:55 | ✅ Success | 2,847 | 0% | 0 |
| Site Visit Reminder | M4.2 | 14:00:00 | ✅ Success | 12 | 0% | 0 |
| Post-Visit Follow-up | M4.3 | Scheduled 15:00 | ⏳ Pending | 8 | 0% | 0 |
| Demand Note Generator | M11.2 | 13:45:22 | ✅ Success | 3 | 0% | 0 |
| Tally Sync Agent | M11.6 | 11:00:18 | ⚠️ Partial | 28 | 10.7% | 3 ⚠️ |
| RERA QPR Reminder | M6.3 | 07:00:00 | ✅ Success | 1 | 0% | 0 |
| Deal Risk Scorer | M12.3 | 14:00:00 | ✅ Success | 4 | 0% | 0 |
| AI Insights Engine | M12.2 | 07:00:00 | ✅ Success | 1 | 0% | 0 |
| System Health Checker | M12.7 | 14:31:00 | ✅ Success | 288 | 0% | 0 |

### AI Agent Health Panel

| AI Agent | Module | Avg Response Time | Success Rate (24h) | Queue Depth | Status |
|---|---|---|---|---|---|
| WhatsApp AI Chatbot | M2.1 | 2.8s | 99.8% | 0 | 🟢 Active |
| Lead Enrichment Agent | M1.5 | 91s (by design) | 97.4% | 3 | 🟢 Active |
| AI Lead Scoring Engine | M1.6 | 0.4s | 100% | 0 | 🟢 Active |
| AVM Valuation Model | M3.1 | 4.2s | 98.1% | 0 | 🟢 Active |
| OCR Document Extractor | M6.2 | 8.4s | 96.8% | 1 | 🟢 Active |
| Resume Screening Agent | M7.1 | 24s | 99.2% | 0 | 🟢 Active |
| Deal Risk Scorer | M12.3 | 1.1s | 100% | 0 | 🟢 Active |
| AI Insights Engine | M12.2 | 18.2s (weekly) | 100% | 0 | 🟢 Active |
| Maintenance Request Router | M8.2 | 4.8s | 94.1% | 5 | 🟡 Degraded |

### Alert Configuration (Configurable Thresholds)

| Alert Type | Threshold | Current Value | Status | Alert Recipient |
|---|---|---|---|---|
| WhatsApp API response time | >5 seconds | 2.8s | ✅ OK | CTO |
| Lead sync failure rate | >5% | 0.7% | ✅ OK | CTO |
| Tally sync error rate | >5% | 10.7% | 🔴 Alert Active | CTO + Finance Manager |
| M8 response time | >2 seconds | 4.8s | ⚠️ Alert Active | CTO |
| RERA API uptime | <95% | 88.4% | ⚠️ Alert Active | CTO + Legal |
| Overall platform uptime | <99% | 99.4% | ✅ OK | CTO |
| AI queue depth | >10 items | 0–3 | ✅ OK | CTO |
| Failed login attempts | >3 in 1 hour | 1 (overnight) | ✅ OK | System Admin |

### Incident Log (Last 30 Days)

| # | Date | Module/Integration | Incident | Duration | Root Cause | Status |
|---|---|---|---|---|---|---|
| 1 | 15/01/2025 | M8 — Tenant Mgmt | Maintenance router slowdown — 4.8s response | Ongoing | Database query optimisation needed | 🟡 Investigating |
| 2 | 12/01/2025 | M3 — Property Intel | AVM valuation API timeout — 3 failures | 22 min | External data provider outage | ✅ Resolved |
| 3 | 10/01/2025 | M6 — Document AI | OCR processing queue backed up to 18 items | 45 min | High volume upload event | ✅ Resolved |
| 4 | 08/01/2025 | M5 — Analytics | Weekly report generation failed — incorrect data join | 2 hrs | Schema change in M4 not propagated | ✅ Resolved |
| 5 | 07/01/2025 | M11 — Finance | Tally sync returned duplicate voucher error | 1 hr | Tally server restart mid-sync | ✅ Resolved |
| 6 | 05/01/2025 | M1 — Lead Gen | FSBO scraper blocked by JustDial — 4 hr gap | 4 hrs | Rate limiting — scraper frequency reduced | ✅ Resolved |
| 7 | 03/01/2025 | M9 — Construction | Site photo upload failure — WhatsApp size limit | 30 min | Image compression not applied | ✅ Resolved |

### Monthly Uptime SLA Report (January 2025)

| Category | Target | Achieved | Status |
|---|---|---|---|
| Core Data Layer (M12) | 99.9% | 99.9% | ✅ Met |
| Buyer-Facing (M2, M10) | 99.9% | 99.9% | ✅ Met |
| Sales Operations (M1, M4) | 99.5% | 99.7% | ✅ Met |
| Finance (M11) | 99.5% | 99.8% | ✅ Met |
| Construction (M9) | 99.0% | 99.6% | ✅ Met |
| Tenant Management (M8) | 99.0% | 97.2% | ⚠️ Below SLA |
| Overall Platform | 99.0% | 99.4% | ✅ Met |

### Page Layout
**Top:** System health summary (3 KPI cards: Active Modules / Degraded / Open Incidents)  
**Centre Left:** Module health grid (12 tiles, 3×4, pulsing status dots)  
**Centre Right:** Integration health table  
**Bottom Left:** Workflow run monitor (expandable rows per workflow)  
**Bottom Right:** Incident log + open alert feed

### Key UI Elements
- **Pulsing green/amber/red status dots** — live indicator per module and integration
- **"Mission control" layout** — dark background, glowing status indicators, data density
- **Alert banner** — red banner at top of page when any active alert is firing
- **Incident timer** — for active incidents, shows elapsed time since detection
- **"Acknowledge Alert" button** — team member marks they've seen and are actioning an alert
- **SLA compliance ring charts** — circular gauge per category showing % uptime vs target

---

## Complete Module 12 — Master Parameter Reference

### All Data Fields Across M12

| Field Name | Type | Sub-module | Description |
|---|---|---|---|
| `buyer_id` | UUID | 12.1 | Unique buyer CRM ID |
| `profile_completeness` | Number (%) | 12.1 | % of profile fields populated across modules |
| `interaction_count` | Number | 12.1 | Total recorded touchpoints with Fortiv |
| `sentiment_score` | Number (0–1) | 12.1 | Latest sentiment score from NLP analysis |
| `sentiment_trend` | Enum | 12.1 | Improving / Stable / Declining |
| `next_best_action` | String | 12.1 | AI-recommended next action |
| `next_best_action_reason` | String | 12.1 | Why this action is recommended |
| `referrals_made` | Number | 12.1, 12.4 | Buyers referred by this person |
| `referred_by` | String | 12.1, 12.4 | CP or buyer who referred this lead |
| `insight_id` | String | 12.2 | Unique insight reference (AI-YYYY-NNNN) |
| `insight_category` | Enum | 12.2 | Sales / Pricing / Team / Risk / Compliance / Finance / Market / Operations |
| `insight_text` | String | 12.2 | Full insight description |
| `confidence_pct` | Number (%) | 12.2 | Statistical confidence of the insight |
| `data_sample_size` | Number | 12.2 | Number of records analysed |
| `insight_status` | Enum | 12.2 | Not Actioned / In Review / Actioned / Dismissed |
| `insight_outcome` | String | 12.2 | Outcome if actioned (tracked 30 days later) |
| `route_to_module` | String | 12.2 | Which module this insight affects |
| `route_to_person` | String | 12.2 | Who should see and action this insight |
| `deal_risk_score` | Number (0–100) | 12.3 | Real-time deal abandonment risk |
| `risk_band` | Enum | 12.3 | Low / Medium / High / Critical |
| `risk_signal_breakdown` | JSON | 12.3 | Contribution of each signal to total score |
| `days_no_contact` | Number | 12.3 | Days since last buyer contact |
| `whatsapp_response_rate` | Number (%) | 12.3 | Response rate over last 14 days |
| `competitor_mention_flag` | Boolean | 12.3 | True if buyer mentioned competitor |
| `stage_stagnation_days` | Number | 12.3 | Days without deal stage movement |
| `sentiment_decline_flag` | Boolean | 12.3 | True if sentiment dropped >30% this week |
| `intervention_recommended` | String | 12.3 | Specific suggested action |
| `risk_alert_sent` | Boolean | 12.3 | Whether agent was alerted |
| `risk_alert_timestamp` | DateTime | 12.3 | When alert was sent |
| `cp_id` | UUID | 12.4 | Channel partner unique ID |
| `cp_rera_number` | String | 12.4 | Broker RERA registration (verified) |
| `cp_status` | Enum | 12.4 | Pending / Active / Suspended |
| `cp_deals_registered` | Number | 12.4 | Total deals registered by this CP |
| `cp_deals_booked` | Number | 12.4 | Deals that reached booking stage |
| `cp_commission_earned` | Number (₹) | 12.4 | Total commission earned YTD |
| `cp_commission_paid` | Number (₹) | 12.4 | Commission settled to CP |
| `cp_leaderboard_rank` | Number | 12.4 | Monthly rank among all active CPs |
| `cp_portal_last_login` | DateTime | 12.4 | When CP last accessed portal |
| `user_id` | UUID | 12.5 | System user unique identifier |
| `user_role` | Enum | 12.5 | All role types as defined |
| `mfa_enabled` | Boolean | 12.5 | Multi-factor authentication status |
| `session_timeout_min` | Number | 12.5 | Auto-logout timer in minutes |
| `last_login` | DateTime | 12.5 | Most recent successful login |
| `audit_action` | String | 12.5 | Action recorded in audit log |
| `audit_record_affected` | String | 12.5 | Record or module acted upon |
| `audit_ip_address` | String | 12.5 | IP address of action |
| `consent_id` | UUID | 12.6 | Unique consent record ID |
| `consent_status` | Enum | 12.6 | Active / Withdrawn / Expired |
| `consent_purpose` | String | 12.6 | Purpose stated at time of collection |
| `consent_channel` | String | 12.6 | Where consent was captured |
| `retention_expiry_date` | Date | 12.6 | When data must be deleted |
| `dsr_type` | Enum | 12.6 | Access / Correction / Deletion / Withdrawal / Grievance |
| `dsr_status` | Enum | 12.6 | Open / In Progress / Completed |
| `breach_id` | String | 12.6 | Breach incident reference |
| `breach_detected_at` | DateTime | 12.6 | When breach was discovered |
| `dpa_notified_at` | DateTime | 12.6 | When DPA was notified (must be <72 hrs) |
| `module_id` | Enum | 12.7 | M1–M12 |
| `module_status` | Enum | 12.7 | Active / Degraded / Down |
| `module_uptime_30d` | Number (%) | 12.7 | Uptime over last 30 days |
| `integration_name` | String | 12.7 | External API / service name |
| `integration_status` | Enum | 12.7 | Active / Degraded / Down |
| `integration_error_rate` | Number (%) | 12.7 | Error rate over last 24 hours |
| `workflow_name` | String | 12.7 | n8n automation workflow name |
| `workflow_last_run` | DateTime | 12.7 | Most recent execution timestamp |
| `workflow_success_rate` | Number (%) | 12.7 | Success rate over last 24 hours |
| `incident_id` | String | 12.7 | Incident reference |
| `incident_duration_min` | Number | 12.7 | How long the incident lasted |
| `incident_root_cause` | String | 12.7 | Identified cause |
| `incident_status` | Enum | 12.7 | Investigating / Resolved |

---

## Mock Data Constants (Demo-Ready)

### Demo AI Insights Summary (Q1 2025)

```
Total insights generated (Jan 2025):     24
High-confidence (>80%):                  18
Actioned by team:                        11 (46%)
Verified positive outcome:               8 of 11 actioned
Avg improvement where actioned:          +23% on target metric

Top insight impact:
  Saturday open house → 40% more visits, 2 additional bookings
  Rahul lead cap → Conversion rate 4.2% → 6.8%
  Competitor price alert → Inquiry recovery +11% in 2 weeks
```

### Demo Deal Risk Summary (Current)

```
Total active deals:          68
Low risk (0–30):             41 (60%)
Medium risk (31–60):         18 (26%)
High risk (61–80):           7  (10%)
Critical risk (81–100):      2  (3%)

Critical deals:
  Sanjay Kapoor — BP-401 — ₹3.2 Cr — Risk 89 — 88 days overdue, no response
  Mahesh Khanna — S-1104 — ₹98L — Risk 84 — Competitor mention, 12 days silent

Deals saved by risk intervention (Jan 2025):   4 deals · ₹1.84 Cr
```

### Demo Channel Partner Network

```
Total registered CPs:          8
Active CPs (deal in 90 days):  7
Total deals via CP network:    34 (Jan 2025)
% of total bookings via CP:    48%
Total CP commission paid YTD:  ₹19.6L
Top CP:                        Rajhans Realtors — 8 deals — ₹6.2L earned
```

### Demo System Health (Current)

```
Modules active:           11 of 12
Modules degraded:         1 (M8 — Tenant Management, non-critical)
Active alerts:            3 (Tally sync, M8 response time, RERA API)
Open incidents:           1 (M8 — under investigation)
30-day platform uptime:   99.4%
WhatsApp messages/day:    3,812 avg
Automations/day:          8,234 avg
Data points processed:    2.4M total
```

---

## Brand & Design Parameters for M12 UI

### Color Usage

| Element | Color | Hex |
|---|---|---|
| Page background | Near black — "deep space" | #0D1B2A |
| Card / panel background | Dark navy card | #1A3C5E |
| Primary accent | Electric blue (glowing) | #2E86AB |
| Graph node — active | Glowing teal | #1D9E75 |
| Graph edge — data flowing | Pulsing blue | #2E86AB |
| Status — active / healthy | Teal green | #1D9E75 |
| Status — degraded | Amber | #E8A838 |
| Status — down / critical | Coral red (pulsing) | #D85A30 |
| Data counter text | White mono | #FFFFFF |
| Insight card background | Dark navy slightly lighter | #243B55 |

### Typography

| Use Case | Font |
|---|---|
| Module title, section headings | Playfair Display or DM Serif Display |
| Body text, labels, insight text | DM Sans or Plus Jakarta Sans |
| All counters, scores, percentages, timestamps | JetBrains Mono |

### Key Animations (Demo-Specific)

| Animation | Where | Description |
|---|---|---|
| Customer graph pulsing edges | 12.1 + M12 Dashboard | SVG edges animate data flow from each connected node to central buyer node every 2 seconds |
| Counter tick-up | M12 Dashboard | All 5 data counters count up from 0 to their values on page load |
| Insight auto-cycle | 12.2 + Dashboard | Insight cards fade/slide in every 4 seconds in demo mode |
| Risk score pulse | 12.3 | High-risk score badges pulse red; critical badges pulse faster |
| Sync stream | 12.7 | Lines of \"data\" animate from module boxes to Tally / WhatsApp icons |
| Module status pulse | 12.7 | Green dots pulse slowly; amber pulses faster; red pulses fastest |
| Sentiment line draw | 12.1 | Sentiment chart draws from left to right on panel open |
| System health glow | M12 Dashboard | Module grid tiles emit a subtle glow in their status colour |

---

## Technical Integration Map for M12

| Sub-module | Reads From | Writes To / Triggers | External APIs |
|---|---|---|---|
| 12.1 Customer Graph | All M1–M11 modules | Display only; next action triggers M4 tasks | NLP sentiment model (internal) |
| 12.2 Insights Engine | All M1–M11 modules | M5.6 (exec digest), M4 (task creation), M1.6 (score rule updates) | Internal ML + statistical models |
| 12.3 Risk Scorer | M2 (chat logs), M4 (deal stage, contact log), M10 (portal activity), M11 (payment status) | Agent WhatsApp alerts, M4 tasks | WhatsApp Business API, Sentiment NLP |
| 12.4 CP Portal | M4.5 (deal stages), M11.3 (commissions) | M4 (deal registration), M11.3 (commission trigger) | RERA broker verification API, Bank penny drop |
| 12.5 RBAC | User management (internal) | All modules (permission enforcement) | LDAP / SSO (optional), MFA provider |
| 12.6 DPDP Compliance | All modules (personal data processing) | Consent flags to M2 (stop outreach), deletion across all modules | DPA notification system, Email API |
| 12.7 System Health | All modules + integrations (health probes) | Alert WhatsApp to CTO, incident log | Uptime monitoring API, PagerDuty-style alerting |

---

## Summary: M12 at a Glance

| Item | Detail |
|---|---|
| Module | M12 — AI Brain, Data Layer & Security |
| Sub-modules | 7 (12.1 → 12.7) |
| Total pages | 8 (1 AI command dashboard + 7 sub-module pages) |
| Primary data objects | Customer profiles, AI insights, deal risk scores, CP records, user permissions, consent records, system health events |
| Key integrations | All M1–M11 modules · WhatsApp API · RERA API · UIDAI · CIBIL · Tally Prime · Google Drive · Uptime Monitor · MFA Provider |
| Key output | 360° customer intelligence · Cross-module AI insights · Deal risk scores · CP portal · RBAC enforcement · DPDP compliance · Platform uptime monitoring |
| Demo focus | AI Insights cycling feed · Customer graph SVG animation · System health pulsing grid · Animated data counters |
| Design tone | Deep dark background, glowing accents, data-dense, "mission control" intelligence aesthetic |
| Compliance | DPDP Act 2023 · RERA · IT Act 2000 · PMLA / AML · RBAC audit trail |
| Currency | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Date format | DD/MM/YYYY |

---

### Demo Build Prompt (M12 — Claude Artifact)

> Copy this prompt directly into Claude to build the M12 demo screen:

**M12 — AI Brain Command View:**  
Build the AI Brain command view for Fortiv Solutions Real Estate AI Command Center. Five animated data counters at top (Leads Tracked: 1,247 · Automations Run: 8,234 · WhatsApp Messages: 3,812 · Active Deals: 68 · Data Points: 2.4M) — all count up on load. Centre left: animated SVG customer intelligence graph — central buyer node "Rajesh Patel" with 7 spoke nodes (Lead Source, Agent, Property, Documents, Payments, WhatsApp, NPS) connected by pulsing animated edges. Centre right: live AI insights feed cycling every 4 seconds through 8 insights with category badges (Sales/Pricing/Team/Risk/Compliance/Finance/Market) coloured by type, confidence bar 0–100%, and "Take Action" button per insight. Bottom left: 12-module health grid (3×4) with module name and pulsing status dot (11 green, 1 amber). Bottom right: deal risk table — 6 deals with risk scores 0–100 (colour-coded green/amber/red), risk reason, and "Intervene" button; critical deals (score 80+) pulse red. Dark background #0D1B2A, glowing electric blue #2E86AB accents, teal #1D9E75 for healthy, amber for degraded, coral #D85A30 for critical. JetBrains Mono for all numbers. React app.

---

*Real Estate AI Command Center — Module 12 Build Guide*  
*by Fortiv Solutions · fortivsolutions.in*  
*Version 2.0 · Confidential*
