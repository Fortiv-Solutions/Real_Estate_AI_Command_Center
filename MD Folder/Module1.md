# M1 — Lead Generation & Acquisition
### Real Estate AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** Proactively sources, captures, enriches and scores every lead from every channel — so your pipeline fills itself without manual effort.

**Document Type:** Module Build Guide & Parameter Reference  
**Module Code:** M1  
**Total Sub-Modules:** 6 (1.1 → 1.6)  
**Version:** 2.0  
**Company:** Fortiv Solutions  
**Classification:** Confidential  
**Market:** India — Gujarat Focus (Surat, Vadodara)

---

## Module Overview

### Purpose
Replace manual lead hunting with an **autonomous acquisition engine** that monitors portals, social platforms, and owner listings 24/7, enriches every contact automatically, and scores each lead before an agent ever picks up the phone.

### Core Problem Being Solved
| Pain Point | Without M1 | With M1 |
|---|---|---|
| Lead sourcing | Manual portal checks, 5–7 tabs open daily | Unified auto-feed from all channels |
| Response time | Hours (industry avg: 2–6 hrs) | Under 60 seconds (automated) |
| Lead quality | Unknown profile, agent goes in blind | Fully enriched profile in 90 seconds |
| Prioritisation | First-in, first-called (random) | Score-ranked — hottest lead called first |
| FSBO discovery | Never found (or found late) | Discovered before competing brokers |
| Portal management | Manual monitoring per portal | Single aggregated feed |

### Demo Wow Moment
**Live lead feed updating in real time** — scores changing, hot leads pulsing red, new leads dropping in from multiple sources simultaneously.

---

## Module-Level Parameters

| Parameter | Value |
|---|---|
| Module ID | M1 |
| Module Name | Lead Generation & Acquisition |
| Sub-module Count | 6 |
| Primary Output | Scored, enriched lead records in CRM pipeline |
| Primary Users | Sales Agents, Sales Manager, Marketing Team |
| Data Refresh Rate | Real-time (webhook) + Every 4–6 hours (scraper jobs) |
| Lead Sources Covered | 99acres, MagicBricks, Housing.com, NoBroker, Facebook Lead Ads, Instagram Lead Ads, Google Ads, JustDial, Sulekha, Quikr, OLX, WhatsApp, Website, Referral |
| Languages | English, Hindi, Gujarati |
| CRM Integration | Auto-push all leads to CRM with source tags |
| Compliance | DPDP Act 2023 · No illegal scraping of personal data |
| Currency Format | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Demo Financial Period | Q1 2025 (Jan–Mar 2025) |

---

## Module Pages & Navigation Structure

```
M1 — Lead Generation & Acquisition
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M1
│             (Stats, KPIs, live feed preview, source donut chart)
│
├── [Page 2]  1.1  FSBO & Owner Listing Hunter
│             (Discovered listings feed, map, scrape log)
│
├── [Page 3]  1.2  Google Maps Builder & Broker Scraper
│             (Map view, business list, type filter, enrichment status)
│
├── [Page 4]  1.3  Facebook & Google Ads Lead Sync
│             (Live sync feed, campaign attribution table, UTM tracker)
│
├── [Page 5]  1.4  Portal Lead Aggregator
│             (Unified inbox, source colour filter, duplicate merge log)
│
├── [Page 6]  1.5  Lead Enrichment Agent
│             (Lead card expansion view, enrichment completeness scores)
│
└── [Page 7]  1.6  AI Lead Scoring Engine
              (Live scoring table, score breakdown, intent badges)
```

---

## Page 1 — Module Dashboard (M1 Overview)

### Purpose
The landing screen for Module 1. Gives a helicopter view of the entire lead acquisition engine — total leads, source breakdown, top scoring leads, and real-time activity.

### Layout
- **Top Stats Bar** (4 KPI cards across)
- **Centre Left:** Live Lead Feed (real-time scroll)
- **Centre Right:** Source Distribution Donut Chart
- **Bottom:** Quick-access tiles to each sub-module (1.1 → 1.6)

### KPI Cards (Top Stats Bar)

| Card | Metric | Mock Value | Color |
|---|---|---|---|
| Total Leads Today | Count of all leads entered today | 47 | Accent Blue #2E86AB |
| Hot Leads | Leads scored 75–100 | 12 | Danger Red #D85A30 (pulsing) |
| Average Score | Mean score across all active leads | 68 | Primary Navy #1A3C5E |
| Leads This Month | Total leads in current month | 312 | Success Green #1D9E75 |

### Source Distribution Donut Chart
Recharts donut showing lead volume by channel:

| Source | Mock Volume | Color |
|---|---|---|
| 99acres | 28% | #2E86AB |
| Facebook Lead Ads | 22% | #1A3C5E |
| MagicBricks | 15% | #1D9E75 |
| WhatsApp | 12% | #25D366 |
| Housing.com | 9% | #E8A838 |
| Google Ads | 8% | #D85A30 |
| Referral / Other | 6% | #9B9B9B |

### Live Lead Feed (real-time scroll)
Compact rows updating every 3–5 seconds, showing:
- Lead name
- Source badge (colour-coded portal icon)
- AI Score (0–100, animated bar)
- Intent label (🔴 Hot / 🟡 Warm / 🔵 Cold)
- Time since discovered ("2 min ago")

### Sub-Module Quick Access Tiles (Bottom Row)
Six clickable tiles, each showing:
- Sub-module number + name
- One-line description
- Status indicator (Active / Paused)
- Leads captured via this sub-module today

---

## Page 2 — Sub-Module 1.1: FSBO & Owner Listing Hunter

### What It Is
An autonomous agent that continuously scans **For Sale By Owner (FSBO)** listings across Indian real estate platforms to identify properties being sold directly by owners — without a broker — giving Fortiv Solutions exclusive first-mover access.

### Platforms Monitored
| Platform | Type | Scan Frequency |
|---|---|---|
| JustDial | Classifieds | Every 4 hours |
| Sulekha | Classifieds | Every 4 hours |
| Quikr | Classifieds | Every 6 hours |
| OLX | Classifieds | Every 6 hours |
| 99acres (Owner Section) | Portal — Owner Listings | Every 4 hours |
| NoBroker | Owner-only Portal | Every 4 hours |

### What It Does
- Monitors target platforms every 4–6 hours for new owner-listed properties in defined localities
- Extracts owner contact details, property specs, asking price, and listing date
- Cross-references against existing CRM to avoid duplicates
- Pushes qualified FSBO leads directly into the sales pipeline with source tag **"FSBO"**
- Flags off-market opportunities before they reach broker networks

### Page Layout
**Top:** Filter bar — Locality | Property Type | Bedrooms | Price Range | Discovered (time filter)  
**Main area:** Card grid of discovered FSBO listings  
**Right panel:** Map view with pins for each discovered property

### FSBO Lead Card Parameters (per card)

| Field | Description | Mock Example |
|---|---|---|
| `owner_name` | Owner's full name | Dinesh Patel |
| `phone` | Owner phone number | +91 97xxxxxxxx |
| `locality` | Area / micro-market | Vesu, Surat |
| `property_type` | Flat / Plot / Villa / Commercial | 2BHK Flat |
| `area_sqft` | Carpet/built-up area | 1,050 sq ft |
| `asking_price` | Listed asking price | ₹54 Lakhs |
| `price_per_sqft` | Derived metric | ₹5,143/sq ft |
| `listing_date` | When listing was found | 15/01/2025 |
| `discovered_badge` | Time since discovery | "Discovered 2 hours ago" |
| `source_platform` | Where it was found | JustDial |
| `source_tag` | CRM source label | FSBO |
| `crm_status` | Pipeline status | New / Contacted / In Progress |
| `duplicate_check` | Cross-referenced with CRM | ✓ Not in CRM |
| `off_market_flag` | Not on broker networks | 🔴 Off-Market |
| `agent_assigned` | Assigned sales agent | Priya Rana |

### Mock Demo Data (6 FSBO Leads)

| # | Owner | Locality | Property | Price | Discovered |
|---|---|---|---|---|---|
| 1 | Dinesh Patel | Vesu | 2BHK, 1,050 sq ft | ₹54L | 2 hrs ago |
| 2 | Bhavna Shah | Adajan | 3BHK, 1,420 sq ft | ₹72L | 5 hrs ago |
| 3 | Ramesh Joshi | Pal | 2BHK, 980 sq ft | ₹48L | 1 hr ago |
| 4 | Sunita Trivedi | Vesu | Plot, 800 sq yd | ₹1.1Cr | 3 hrs ago |
| 5 | Kalpesh Mehta | Adajan | 1BHK, 640 sq ft | ₹32L | 6 hrs ago |
| 6 | Harsha Desai | Pal | Villa, 2,200 sq ft | ₹1.4Cr | 30 min ago |

### Key UI Elements
- **"Discovered X ago" timestamp badge** — amber if < 2 hrs (priority), grey if older
- **Off-Market badge** — red tag indicating no broker has it yet
- **"Add to Pipeline" CTA** — one-click push to CRM
- **Map pin view** — toggle between card grid and map

### Why It Matters
FSBO leads are exclusive — no competing broker has them. They convert at higher rates because owners are motivated and there is no commission-sharing complication.

---

## Page 3 — Sub-Module 1.2: Google Maps Builder & Broker Scraper

### What It Is
A geo-targeted intelligence agent that searches Google Maps for builders, developers, real estate offices, and landowners in specified localities — building a structured stakeholder database for B2B outreach, channel partner recruitment, and land acquisition.

### Search Categories
| Type | Google Maps Search Term | Segment Tag |
|---|---|---|
| Developer | "real estate developer [locality]" | Developer |
| Broker | "property dealer [locality]" | Broker |
| Land Broker | "land broker [locality]" | Land Broker |
| Builder Office | "builder office [locality]" | Builder |
| Housing Society | "housing society [locality]" | Society |

### What It Extracts Per Business Record

| Field | Description | Example |
|---|---|---|
| `business_name` | Registered business name | Shree Builders Pvt Ltd |
| `address` | Full street address | 12, Ring Road, Vesu, Surat |
| `phone` | Primary phone number | +91 261 xxxxxxx |
| `website` | Business website URL | shreebuildersurat.com |
| `google_rating` | Star rating (out of 5) | 4.2 ★ |
| `review_count` | Number of Google reviews | 38 reviews |
| `operating_hours` | Open/closed + hours | Mon–Sat, 10AM–7PM |
| `segment_type` | Developer / Broker / Landowner / Society | Developer |
| `linkedin_enriched` | LinkedIn company page found | ✓ / ✗ |
| `website_enriched` | Website data pulled | ✓ / ✗ |
| `crm_status` | Current pipeline status | Outreach Pending |
| `locality` | Target locality | Vesu, Surat |
| `maps_url` | Google Maps link | [View on Maps] |

### Target Localities (Pre-configured)

**Surat:** Vesu, Adajan, Pal, Althan, Dumas Road, Katargam, Piplod, Palanpur  
**Vadodara:** Alkapuri, Gotri, Manjalpur, Waghodia Road, Kalali

### Page Layout
**Top Bar:** Locality selector (multi-select) | Segment type filter | Enrichment status filter  
**Left Panel (60%):** Sortable data table of discovered businesses  
**Right Panel (40%):** Google Maps embed with colour-coded pins  

### Map Pin Color Legend
| Segment | Pin Color |
|---|---|
| Developer | #1A3C5E Navy |
| Broker | #2E86AB Blue |
| Land Broker | #E8A838 Amber |
| Society | #1D9E75 Green |

### Mock Demo Data (12 Businesses in Surat)

| # | Business Name | Type | Locality | Rating | CRM Status |
|---|---|---|---|---|---|
| 1 | Shree Builders | Developer | Vesu | 4.2 ★ | Outreach Pending |
| 2 | Rajhans Realtors | Broker | Adajan | 3.9 ★ | Outreach Pending |
| 3 | Landmark Properties | Developer | Pal | 4.5 ★ | Contacted |
| 4 | Surat Land Deals | Land Broker | Katargam | 4.0 ★ | Outreach Pending |
| 5 | Greenfield Developers | Developer | Althan | 4.7 ★ | Outreach Pending |
| 6 | Prime Realty | Broker | Vesu | 3.7 ★ | Outreach Pending |
| 7 | Tulsi Housing | Society | Adajan | 4.1 ★ | Not Relevant |
| 8 | SNS Land Brokers | Land Broker | Piplod | 4.3 ★ | Outreach Pending |
| 9 | Parth Developers | Developer | Pal | 4.4 ★ | Contacted |
| 10 | City Property Hub | Broker | Katargam | 3.8 ★ | Outreach Pending |
| 11 | Vrundavan Builders | Developer | Althan | 4.6 ★ | Outreach Pending |
| 12 | Om Realtors | Broker | Vesu | 4.0 ★ | Outreach Pending |

### Key UI Elements
- **Enrichment status badge** — shows LinkedIn enriched / Website enriched / Phone verified
- **"Push to CRM" button** — adds selected businesses to CRM under outreach pipeline
- **Segment type badge** — colour-coded tag on each row
- **Maps embed** with toggleable satellite/roadmap view

---

## Page 4 — Sub-Module 1.3: Facebook & Google Ads Lead Sync

### What It Is
A real-time integration layer that automatically pulls every submitted lead from **Facebook Lead Ads**, **Instagram Lead Ads**, and **Google Lead Form extensions** into the CRM — eliminating manual CSV downloads and delayed follow-up.

### Integration Channels
| Platform | Integration Method | Sync Speed |
|---|---|---|
| Facebook Lead Ads | Facebook Marketing API + Webhook | < 30 seconds |
| Instagram Lead Ads | Facebook Marketing API + Webhook | < 30 seconds |
| Google Lead Form Ads | Google Ads API + Webhook | < 30 seconds |

### What Gets Captured Per Lead

| Field | Source | Example |
|---|---|---|
| `lead_name` | Form field | Rajesh Patel |
| `phone` | Form field | +91 98765 43210 |
| `email` | Form field | rajesh.patel@gmail.com |
| `property_interest` | Form field / ad context | 2BHK Flat |
| `budget_range` | Form field | ₹45–₹65 Lakhs |
| `location_preference` | Form field | Vesu, Surat |
| `campaign_name` | Ad metadata | Greenview Heights Jan 2025 |
| `ad_set_name` | Ad metadata | Surat 25-45 Age |
| `creative_name` | Ad metadata | Vesu 2BHK Video Ad |
| `platform_source` | System tagged | Facebook / Instagram / Google |
| `utm_source` | UTM parameter | facebook |
| `utm_medium` | UTM parameter | paid_social |
| `utm_campaign` | UTM parameter | greenview_jan25 |
| `form_submit_time` | Timestamp | 15/01/2025 14:23:47 |
| `crm_entry_time` | Timestamp | 15/01/2025 14:24:15 |
| `sync_duration` | Derived | 28 seconds |
| `whatsapp_sent` | System triggered | ✓ Sent at 14:24:18 |
| `agent_notified` | System triggered | ✓ Priya Rana notified |

### Automated Actions on Lead Capture
1. **Lead created in CRM** with all above fields
2. **WhatsApp auto-acknowledgement sent to lead:** *"Thank you for your interest in [Project Name]. Our team will call you within 15 minutes."*
3. **Agent WhatsApp notification** with lead details + one-click call button
4. **UTM logged** for M5 marketing ROI tracking

### Page Layout
**Top:** Live sync animation strip (Facebook → CRM → WhatsApp flow)  
**Left (55%):** Incoming lead feed with sync timestamps  
**Right (45%):** Campaign performance table + Platform source pie chart  

### Live Sync Flow Animation (Demo Visual)
```
[Facebook Ad Form Submitted]
        ↓ (0 sec)
[Lead captured by API]
        ↓ (8 sec)
[Lead created in CRM: Rajesh Patel]
        ↓ (15 sec)
[WhatsApp acknowledgement sent to +91 98765 43210]
        ↓ (28 sec)
[Agent Priya Rana notified via WhatsApp]

Total: 28 seconds ✓
```

### Campaign Attribution Table (Mock Data)

| Campaign | Platform | Leads | Cost Per Lead | Budget Spent | Status |
|---|---|---|---|---|---|
| Greenview Heights Jan 2025 | Facebook | 34 | ₹312 | ₹10,600 | Active |
| Surat 2BHK Google Search | Google Ads | 18 | ₹485 | ₹8,730 | Active |
| Skyline Residences Vadodara | Instagram | 12 | ₹278 | ₹3,336 | Active |
| Business Park Commercial | Facebook | 7 | ₹620 | ₹4,340 | Paused |
| Vesu Locality Awareness | Instagram | 22 | ₹190 | ₹4,180 | Active |

### Key UI Elements
- **Live sync counter** — "47 leads synced today in avg 31 seconds"
- **28-second timestamp flow** animation as demo focal point
- **Platform source badges** — FB / IG / Google logos on each lead row
- **WhatsApp sent confirmation** — green tick icon on each lead indicating auto-message sent

---

## Page 5 — Sub-Module 1.4: Portal Lead Aggregator

### What It Is
A **unified inbox** that consolidates all inbound property inquiry leads from 99acres, MagicBricks, Housing.com, NoBroker, and other portals into a single pipeline — ending the chaos of checking 5 different portal dashboards.

### Portals Integrated
| Portal | Integration Method | Lead Type |
|---|---|---|
| 99acres | Portal API + Email Fallback | Inbound buyer inquiries |
| MagicBricks | Portal API + Email Fallback | Inbound buyer inquiries |
| Housing.com | Portal API + Email Fallback | Inbound buyer inquiries |
| NoBroker | Email-based parsing | Inbound buyer inquiries |
| JustDial | Email-based parsing | Inbound business inquiries |
| PropTiger | Email-based parsing | Inbound buyer inquiries |
| CommonFloor | Email-based parsing | Inbound buyer inquiries |

### What Gets Normalised Per Lead

| Field | Description | Example |
|---|---|---|
| `lead_name` | Buyer name | Priya Shah |
| `phone` | Contact number | +91 99xxxxxxxx |
| `email` | Email address | priya.shah@email.com |
| `source_portal` | Which portal sent this lead | 99acres |
| `property_interest` | What they're looking for | 3BHK Flat |
| `locality_preference` | Area preference | Adajan |
| `budget` | Stated budget | ₹70–₹85 Lakhs |
| `inquiry_message` | Original inquiry text | "Looking for spacious 3BHK..." |
| `inquiry_time` | When submitted on portal | 15/01/2025 11:45 |
| `crm_entry_time` | When it hit CRM | 15/01/2025 11:47 |
| `portal_response_rate` | Tracks response for portal rankings | Responded / Pending |
| `duplicate_flag` | Same phone seen from another portal | ⚠️ Duplicate — merged with #1042 |
| `assigned_agent` | Auto-routed to | Ankit Shah |
| `assigned_project` | Matched to relevant project | Fortiv Greenview Heights |
| `routing_reason` | Why this agent/project | "Budget + locality match" |

### Deduplication Logic
- Same phone number from multiple portals → **merge into one lead record**
- Primary source: portal with first submission
- All sources listed on the merged record: "99acres + MagicBricks + Housing.com"
- Daily dedup summary shown: **"3 duplicates merged today"**

### Page Layout
**Top Filter Bar:** Source Portal | Date Range | Assigned Agent | Project | Status (New/Responded/Qualified)  
**Main Area:** Unified lead feed — sorted by most recent, colour-coded by source portal  
**Right Panel:** Portal response rate tracker (critical for portal ranking algorithms)  
**Top Right Badge:** "3 duplicates merged today" (amber alert badge)

### Portal Colour Code
| Portal | Badge Color |
|---|---|
| 99acres | #E63946 Red |
| MagicBricks | #F4A261 Orange |
| Housing.com | #457B9D Blue |
| NoBroker | #2D6A4F Green |
| JustDial | #E9C46A Yellow |
| Google Ads | #4285F4 Google Blue |
| Facebook | #1877F2 FB Blue |

### Mock Demo Data (20 Leads, Unified Feed)

| # | Name | Source | Property Interest | Budget | Status |
|---|---|---|---|---|---|
| 1 | Rajesh Patel | 99acres | 2BHK, Vesu | ₹48–60L | New |
| 2 | Priya Shah | MagicBricks | 3BHK, Adajan | ₹70–85L | Responded |
| 3 | Amit Desai | Housing.com | 2BHK, Pal | ₹45–55L | New |
| 4 | Sunita Mehta | Facebook | 2BHK, Vesu | ₹50–65L | Qualified |
| 5 | Vikram Joshi | 99acres | Plot, Althan | ₹80L–1.2Cr | New |
| 6 | Anita Gujarati | NoBroker | 1BHK, Adajan | ₹28–35L | New |
| 7 | Deepak Trivedi | MagicBricks | 3BHK, Vesu | ₹75–90L | Responded |
| 8 | Kavita Agarwal | Google Ads | 2BHK, Katargam | ₹42–52L | New |
| 9 | Suresh Nair | 99acres | Commercial, Althan | ₹1.5–2.5Cr | New |
| 10 | Pooja Sharma | Housing.com | 2BHK, Adajan | ₹50–60L | Qualified |
| 11 | Mahesh Khanna | JustDial | 3BHK, Gotri (Vdra) | ₹90L–1.1Cr | New |
| 12 | Ritu Bhandari | Facebook | 2BHK, Vesu | ₹45–58L | New |
| 13 | Arjun Malhotra | MagicBricks | Villa, Pal | ₹1.2–1.6Cr | Responded |
| 14 | Nisha Verma | 99acres | 3BHK, Alkapuri (Vdra) | ₹85L–1Cr | New |
| 15 | Sanjay Kapoor | Google Ads | 2BHK, Piplod | ₹46–56L | New |
| 16 | Harsha Patel ⚠️ | 99acres + MagicBricks | 2BHK, Vesu | ₹50–65L | Merged Duplicate |
| 17 | Bhavesh Shah | NoBroker | 1BHK, Katargam | ₹30–38L | New |
| 18 | Dhara Joshi | Housing.com | 3BHK, Althan | ₹68–80L | New |
| 19 | Nilesh Trivedi | JustDial | Commercial, Althan | ₹2–4Cr | New |
| 20 | Meena Agarwal ⚠️ | MagicBricks + Housing.com | 2BHK, Adajan | ₹48–60L | Merged Duplicate |

### Portal Response Rate Tracker

| Portal | Leads This Month | Responded | Response Rate | Portal Target | Status |
|---|---|---|---|---|---|
| 99acres | 84 | 80 | 95.2% | 90% | ✅ On Track |
| MagicBricks | 62 | 58 | 93.5% | 90% | ✅ On Track |
| Housing.com | 47 | 41 | 87.2% | 85% | ✅ On Track |
| NoBroker | 29 | 24 | 82.7% | 80% | ✅ On Track |
| JustDial | 18 | 14 | 77.7% | 85% | ⚠️ Below Target |

> **Note:** Portal response rate directly impacts listing visibility. If response rate drops below portal threshold, Fortiv's listings get demoted in search results.

---

## Page 6 — Sub-Module 1.5: Lead Enrichment Agent

### What It Is
An AI agent that automatically appends missing and contextual information to every new lead record — turning a name and phone number into a **fully profiled prospect** in 90 seconds, before the first agent call.

### Enrichment Data Sources
| Data Type | Source Used | Field Populated |
|---|---|---|
| Phone carrier / operator | Telecom lookup API | `operator`, `location` |
| Professional background | LinkedIn API / scrape | `designation`, `company`, `seniority` |
| Social profiles | Facebook / Instagram lookup | `social_links` |
| Income estimation | Designation + company model | `income_bracket` |
| Property intent signals | Portal activity tracking | `recent_property_searches` |
| WhatsApp status | WhatsApp Business API check | `whatsapp_active` |
| Email validity | Email verification API | `email_valid` |
| Digital footprint | Web search aggregation | `web_presence_score` |

### Enrichment Fields Per Lead

| Field | Description | Example |
|---|---|---|
| `full_name` | Buyer name | Rajesh Patel |
| `phone` | Mobile number | +91 98765 XXXXX |
| `phone_operator` | Telecom carrier | Jio — Gujarat |
| `email` | Email address | rajesh.patel@gmail.com |
| `email_valid` | Verified real inbox | ✓ Valid |
| `whatsapp_active` | Active WhatsApp on this number | ✓ Active |
| `linkedin_profile` | LinkedIn URL | linkedin.com/in/rajeshpatel |
| `designation` | Job title | VP Sales |
| `company` | Employer name | Adani Group |
| `seniority_level` | Seniority tier | Senior (VP level) |
| `industry` | Employer industry | Conglomerate / Infrastructure |
| `income_bracket` | Estimated annual income | ₹18–25 Lakhs/year |
| `income_confidence` | Confidence of income estimate | High (based on VP at Adani) |
| `facebook_profile` | Facebook URL | fb.com/rajeshpatel |
| `instagram_profile` | Instagram handle | @rajesh.patel |
| `social_presence_score` | How active on social (0–100) | 72 |
| `recent_property_searches` | Property intent from past activity | Searched 2BHK Vesu (2 weeks ago) |
| `property_intent_signal` | High / Medium / Low | High |
| `enrichment_completeness` | % of fields filled | 87% |
| `enrichment_timestamp` | When enrichment ran | 15/01/2025 14:26:02 |
| `enrichment_duration` | Time taken | 91 seconds |

### Enrichment Completeness Score Scale
| Score Range | Label | Badge Color |
|---|---|---|
| 85–100% | Fully Enriched | Green #1D9E75 |
| 60–84% | Mostly Enriched | Blue #2E86AB |
| 40–59% | Partially Enriched | Amber #E8A838 |
| 0–39% | Needs Enrichment | Red #D85A30 |

### Page Layout
**Left Panel (40%):** Lead list with enrichment completeness progress bars  
**Right Panel (60%):** Expanded lead card — before/after enrichment view  
**Top:** Enrichment stats — "128 leads enriched today · Avg completeness: 79% · Avg time: 88 seconds"

### Demo Lead Card — Before & After Enrichment

**Before (Raw Lead — just captured from 99acres):**
```
Name:     Rajesh Patel
Phone:    +91 98765 XXXXX
Source:   99acres
Status:   New Inquiry
Completeness: 12%
```

**After (Fully Enriched — 91 seconds later):**
```
Name:           Rajesh Patel
Phone:          +91 98765 XXXXX
Operator:       Jio — Gujarat
Email:          rajesh.patel@gmail.com ✓
WhatsApp:       ✓ Active
LinkedIn:       linkedin.com/in/rajeshpatel
Designation:    VP Sales
Company:        Adani Group
Income:         ₹18–25 Lakhs/year (High confidence)
Facebook:       fb.com/rajeshpatel
Property Intent: High — searched 2BHK Vesu recently
Completeness:   87% ████████░░
Enriched in:    91 seconds
```

### Mock Enrichment Queue (5 Leads in Progress)

| Lead Name | Source | Raw Completeness | Enriched Completeness | Status |
|---|---|---|---|---|
| Rajesh Patel | 99acres | 12% | 87% | ✅ Complete |
| Priya Shah | Facebook | 35% | 91% | ✅ Complete |
| Amit Desai | MagicBricks | 18% | 74% | ✅ Complete |
| Sunita Mehta | WhatsApp | 22% | 68% | ⏳ In Progress |
| Vikram Joshi | Housing.com | 10% | — | ⏳ Queued |

### Key UI Elements
- **Animated card expansion** — raw card "unfolds" into full profile as enrichment populates
- **Completeness ring chart** — circular progress indicator per lead
- **LinkedIn photo placeholder** — avatar placeholder with "VP Sales at Adani Group" label
- **WhatsApp active badge** — green WhatsApp icon showing reachability

---

## Page 7 — Sub-Module 1.6: AI Lead Scoring Engine

### What It Is
A machine learning model that assigns every lead a **real-time score from 0 to 100** based on **23 behavioural, demographic, and intent signals** — telling agents exactly who to call first, every time.

### The 23 Scoring Signals

| # | Signal | Category | Weight (indicative) |
|---|---|---|---|
| 1 | Lead source quality | Source | High |
| 2 | Budget match to available inventory | Demographic | High |
| 3 | Response to WhatsApp message | Behavioural | High |
| 4 | Response to email | Behavioural | Medium |
| 5 | Website pages visited | Behavioural | Medium |
| 6 | Time spent on project page | Behavioural | Medium |
| 7 | Number of inquiries across projects | Intent | High |
| 8 | Income-to-property-price ratio | Demographic | High |
| 9 | Lead age / recency | Recency | Medium |
| 10 | Portal engagement score | Behavioural | Medium |
| 11 | Enrichment completeness score | Data quality | Low |
| 12 | Brochure opened (tracked link) | Intent | High |
| 13 | Price list downloaded | Intent | High |
| 14 | Virtual tour viewed | Intent | High |
| 15 | Site visit scheduled | Intent | Very High |
| 16 | Site visit attended | Intent | Very High |
| 17 | Referral source (vs cold lead) | Source | High |
| 18 | Social media activity / profile score | Demographic | Low |
| 19 | Response speed to AI chatbot | Behavioural | Medium |
| 20 | Budget flexibility indicators | Demographic | Medium |
| 21 | Location preference match | Demographic | Medium |
| 22 | Configuration match to available units | Inventory | High |
| 23 | Previous interaction history with Fortiv | Historical | Medium |

### Score Classification

| Score Range | Intent Label | Badge Color | Action |
|---|---|---|---|
| 75–100 | 🔴 Hot | #D85A30 (pulsing red) | Call within 15 minutes |
| 40–74 | 🟡 Warm | #E8A838 Amber | Call within 2 hours |
| 0–39 | 🔵 Cold | #2E86AB Blue | Nurture via WhatsApp sequence |

### Score Events (Real-Time Updates)
| Event | Score Change |
|---|---|
| Lead submits inquiry form | Baseline score set |
| WhatsApp acknowledged within 5 min | +12 points |
| Brochure opened (tracked) | +8 points |
| Price list downloaded | +10 points |
| Site visit scheduled | +20 points |
| Site visit attended | +25 points |
| Lead goes quiet for 48 hrs | -8 points |
| Inquiry repeated (same project) | +15 points |
| Budget confirmed to match inventory | +10 points |

### Page Layout
**Top Stats Row:**
- Total Active Leads: 47
- Hot (75–100): 12
- Warm (40–74): 23
- Cold (0–39): 12
- Avg Score: 68

**Main Table:** Live scoring table (all leads, sortable by score)  
**Right Panel:** Score breakdown panel (opens on row click)  
**Bottom:** Source quality distribution chart (bar chart — avg score by source)

### Live Scoring Table — Column Parameters

| Column | Content | Format |
|---|---|---|
| Lead Name | Full name | Text |
| Source | Platform badge | Coloured badge |
| Score | 0–100 numeric | Animated bar (fills as score changes) |
| Intent | Hot / Warm / Cold | Coloured label badge |
| Property Interest | Config + locality | "2BHK, Vesu" |
| Budget | Range in ₹ Lakhs | "₹48–65L" |
| Last Activity | Most recent signal | "Opened brochure 12 min ago" |
| Conversion % | Predicted probability | "74%" |
| Agent | Assigned agent | "Priya Rana" |
| Action | CTA button | "Call Now" / "Schedule Visit" |

### Mock Demo Data — Live Scoring Table (12 Leads)

| Name | Source | Score | Intent | Property | Budget | Last Activity |
|---|---|---|---|---|---|---|
| Rajesh Patel | 99acres | **82** | 🔴 Hot | 2BHK, Vesu | ₹48–60L | Opened brochure 12 min ago |
| Priya Shah | Facebook | **79** | 🔴 Hot | 3BHK, Adajan | ₹70–85L | Site visit confirmed Sat |
| Amit Desai | MagicBricks | **74** ↑ | 🔴 Hot | 2BHK, Pal | ₹45–55L | Score upgraded from 61 |
| Sunita Mehta | WhatsApp | **71** | 🟡 Warm | 2BHK, Vesu | ₹50–65L | WhatsApp replied 1 hr ago |
| Vikram Joshi | 99acres | **68** | 🟡 Warm | Plot, Althan | ₹80L–1.2Cr | Viewed price list |
| Anita Gujarati | Housing.com | **61** | 🟡 Warm | 1BHK, Adajan | ₹28–35L | Inquiry submitted 3 hrs ago |
| Deepak Trivedi | Referral | **88** | 🔴 Hot | 3BHK, Vesu | ₹75–90L | 2 inquiries this week |
| Kavita Agarwal | Google Ads | **55** | 🟡 Warm | 2BHK, Katargam | ₹42–52L | Email opened |
| Suresh Nair | 99acres | **47** | 🟡 Warm | Commercial, Althan | ₹1.5–2.5Cr | Initial inquiry only |
| Pooja Sharma | Facebook | **38** | 🔵 Cold | 2BHK, Adajan | ₹50–60L | No response for 36 hrs |
| Mahesh Khanna | JustDial | **29** | 🔵 Cold | 3BHK, Gotri | ₹90L–1.1Cr | No WhatsApp activity |
| Ritu Bhandari | MagicBricks | **22** | 🔵 Cold | 2BHK, Vesu | ₹45–58L | Budget mismatch flagged |

### Score Breakdown Panel (Hover / Click on Lead)
Opens a slide-out panel for any lead showing:
```
Lead: Amit Desai — Score: 74 🔴 HOT (↑ from 61)

WHY THIS SCORE:
✓ Budget matches 2BHK Vesu inventory            +12
✓ 3 portal inquiries this week                  +15
✓ WhatsApp responded within 5 minutes           +12
✓ Brochure opened (tracked link)                +8
✓ MagicBricks — medium-quality source           +6
✗ Site visit not yet scheduled                  0
✗ No email response                             0

Predicted Conversion:  43%
Recommended Action:    Call within 2 hours
Best Time to Call:     11AM–1PM (based on activity pattern)
```

### Score Update Animation (Demo)
- Every 3 seconds, at least one score in the table updates
- Score going UP: green flash + number ticks up
- Score going DOWN: amber flash + number ticks down  
- Crossing threshold (e.g. 61→74, Warm → Hot): full row highlight animation + intent badge changes colour

### Source Quality Chart (Average Score by Lead Source)

| Source | Avg Score | Quality Tier |
|---|---|---|
| Referral | 76 | Premium |
| WhatsApp Organic | 69 | High |
| 99acres | 58 | Medium |
| MagicBricks | 55 | Medium |
| Google Ads | 52 | Medium |
| Housing.com | 49 | Medium |
| Facebook Lead Ads | 45 | Standard |
| JustDial | 41 | Standard |
| NoBroker | 38 | Standard |

---

## Complete Module 1 — Master Parameter Reference

### All Data Fields Across M1

| Field Name | Type | Sub-module | Description |
|---|---|---|---|
| `lead_id` | UUID | All | Unique CRM ID |
| `lead_name` | String | All | Full buyer/owner name |
| `phone` | String | All | Primary mobile number |
| `phone_operator` | String | 1.5 | Telecom carrier |
| `email` | String | 1.3, 1.5 | Email address |
| `email_valid` | Boolean | 1.5 | Email verification status |
| `whatsapp_active` | Boolean | 1.5 | Active WhatsApp on number |
| `source_portal` | Enum | 1.4 | 99acres / MagicBricks / Housing.com / NoBroker / Facebook / Google / JustDial / FSBO / Maps |
| `source_tag` | String | All | System-assigned source tag |
| `campaign_name` | String | 1.3 | Ad campaign name |
| `ad_set_name` | String | 1.3 | Ad set name |
| `creative_name` | String | 1.3 | Creative name |
| `utm_source` | String | 1.3 | UTM source |
| `utm_medium` | String | 1.3 | UTM medium |
| `utm_campaign` | String | 1.3 | UTM campaign |
| `property_interest` | String | All | What they're looking for |
| `configuration` | Enum | All | 1BHK / 2BHK / 3BHK / 4BHK / Plot / Villa / Commercial |
| `locality_preference` | String | All | Preferred locality |
| `budget_min` | Number (₹L) | All | Minimum budget |
| `budget_max` | Number (₹L) | All | Maximum budget |
| `possession_preference` | Enum | 1.4, 1.3 | Ready / Under Construction / Any |
| `purpose` | Enum | 1.3 | Self-use / Investment / Rental |
| `inquiry_message` | Text | 1.4 | Original inquiry text |
| `inquiry_time` | DateTime | All | When inquiry was submitted |
| `crm_entry_time` | DateTime | All | When lead entered CRM |
| `sync_duration_sec` | Number | 1.3 | Seconds from form to CRM |
| `whatsapp_sent` | Boolean | 1.3 | Auto-WhatsApp triggered |
| `agent_notified` | Boolean | 1.3 | Agent WhatsApp sent |
| `assigned_agent` | String | All | Assigned sales agent |
| `assigned_project` | String | All | Matched Fortiv project |
| `crm_status` | Enum | All | New / Contacted / Qualified / In Pipeline |
| `duplicate_flag` | Boolean | 1.4 | Merged duplicate record |
| `merged_sources` | Array | 1.4 | All portals this lead came from |
| `portal_response_rate` | Enum | 1.4 | Responded / Pending |
| `linkedin_profile` | URL | 1.5 | LinkedIn profile URL |
| `designation` | String | 1.5 | Job title |
| `company` | String | 1.5 | Employer |
| `seniority_level` | Enum | 1.5 | Junior / Mid / Senior / C-Suite |
| `income_bracket` | String | 1.5 | Estimated income range |
| `income_confidence` | Enum | 1.5 | High / Medium / Low |
| `social_links` | Object | 1.5 | FB + IG URLs |
| `social_presence_score` | Number (0–100) | 1.5 | Social activity score |
| `recent_property_searches` | Text | 1.5 | Intent signals from activity |
| `property_intent_signal` | Enum | 1.5 | High / Medium / Low |
| `enrichment_completeness` | Number (0–100%) | 1.5 | Profile completeness % |
| `enrichment_timestamp` | DateTime | 1.5 | When enrichment completed |
| `enrichment_duration_sec` | Number | 1.5 | Seconds taken to enrich |
| `ai_score` | Number (0–100) | 1.6 | Real-time AI lead score |
| `intent_label` | Enum | 1.6 | Hot / Warm / Cold |
| `conversion_probability` | Number (%) | 1.6 | Predicted conversion % |
| `score_reason_codes` | Array | 1.6 | Why this score (factors) |
| `score_last_updated` | DateTime | 1.6 | Last score recalculation |
| `score_delta` | Number | 1.6 | Change since last update |
| `best_call_time` | String | 1.6 | Recommended call window |
| `fsbo_platform` | String | 1.1 | Where FSBO was found |
| `listing_date` | Date | 1.1 | When listing was posted |
| `asking_price` | Number (₹L) | 1.1 | Owner's asking price |
| `area_sqft` | Number | 1.1 | Property size |
| `off_market_flag` | Boolean | 1.1 | True if not on broker networks |
| `business_name` | String | 1.2 | Maps-sourced business name |
| `google_rating` | Number | 1.2 | Google Maps star rating |
| `review_count` | Number | 1.2 | Number of Google reviews |
| `segment_type` | Enum | 1.2 | Developer / Broker / Landowner / Society |
| `maps_url` | URL | 1.2 | Google Maps link |

---

## Mock Data Constants (Demo-Ready)

### Demo Lead Pool
```
Rajesh Patel      — VP Sales, Adani Group — Budget ₹48–65L — 2BHK Vesu
Priya Shah        — HR Manager, Infosys — Budget ₹70–85L — 3BHK Adajan
Amit Desai        — Business Owner — Budget ₹45–55L — 2BHK Pal
Sunita Mehta      — Teacher, Gujarat Board — Budget ₹50–65L — 2BHK Vesu
Vikram Joshi      — Civil Engineer — Budget ₹80L–1.2Cr — Plot Althan
Anita Gujarati    — Homemaker — Budget ₹28–35L — 1BHK Adajan
Deepak Trivedi    — CA, Self-employed — Budget ₹75–90L — 3BHK Vesu
Kavita Agarwal    — Doctor, SMIMER — Budget ₹42–52L — 2BHK Katargam
Suresh Nair       — Director, MNC — Budget ₹1.5–2.5Cr — Commercial Althan
Pooja Sharma      — Software Engineer — Budget ₹50–60L — 2BHK Adajan
Mahesh Khanna     — Retired Govt Officer — Budget ₹90L–1.1Cr — 3BHK Gotri
Ritu Bhandari     — MBA Student — Budget ₹45–58L — 2BHK Vesu
```

### Demo Projects
```
Project 1: Fortiv Greenview Heights, Vesu, Surat
           2BHK/3BHK · ₹45L–₹85L · RERA Registered · Dec 2026 possession

Project 2: Fortiv Skyline Residences, Gotri, Vadodara
           3BHK/4BHK · ₹90L–₹1.8Cr · Under Construction

Project 3: Fortiv Business Park, Althan, Surat
           Commercial · ₹1.2Cr–₹4.5Cr · Ready possession
```

### Demo Agents
```
Priya Rana     — Senior Agent     (handles Hot leads, Vesu territory)
Rahul Modi     — Sales Manager    (handles escalations, large-ticket)
Ankit Shah     — Agent            (handles Warm leads, Adajan territory)
Meera Patel    — Agent            (handles Cold leads, nurture sequences)
Kiran Desai    — Team Lead        (handles Vadodara leads)
```

---

## Brand & Design Parameters for M1 UI

### Color Usage
| Element | Color | Hex |
|---|---|---|
| Page background | Dark navy | #0D1B2A |
| Card/panel background | White | #FFFFFF |
| Primary brand | Deep navy | #1A3C5E |
| Accent / links | Electric blue | #2E86AB |
| Hot lead / danger | Coral red (pulsing) | #D85A30 |
| Warm lead / warning | Amber | #E8A838 |
| Cold lead / info | Electric blue | #2E86AB |
| Success / verified | Teal green | #1D9E75 |
| Section background | Off white | #F5F6FA |

### Typography
| Use Case | Font |
|---|---|
| Module title, page heading | Playfair Display or DM Serif Display |
| Body text, labels, descriptions | DM Sans or Plus Jakarta Sans |
| All numbers, scores, budgets, timestamps | JetBrains Mono |

### Key Animations (Demo-Specific)
| Animation | Where | Description |
|---|---|---|
| Pulsing red score | Hot leads in 1.6 | Score badge pulses every 2 seconds |
| Score tick-up | 1.6 live table | Number increments with flash on update |
| Sync flow | 1.3 | FB → CRM → WA flow animates on load |
| Card expansion | 1.5 | Lead card "unfolds" to show enriched data |
| Live feed drop-in | M1 Dashboard | New lead rows drop in from top of feed |
| Duplicate merge badge | 1.4 | "3 duplicates merged" fades in as amber alert |

---

## Technical Integration Map for M1

| Sub-module | External APIs / Services | Data Flow Direction |
|---|---|---|
| 1.1 FSBO Hunter | JustDial, Sulekha, Quikr, OLX, 99acres, NoBroker | Scraper → CRM |
| 1.2 Maps Scraper | Google Maps API, LinkedIn API | API → CRM |
| 1.3 Ads Sync | Facebook Marketing API, Google Ads API, WhatsApp Business API | Webhook → CRM → WhatsApp |
| 1.4 Portal Aggregator | 99acres API, MagicBricks API, Housing.com API, Email parsing | API/Email → CRM |
| 1.5 Enrichment Agent | Telecom lookup, LinkedIn API, WhatsApp API, Email verify API | API → CRM record update |
| 1.6 Scoring Engine | Internal ML model, CRM event streams | Real-time scoring → CRM |

---

## Summary: M1 at a Glance

| Item | Detail |
|---|---|
| Module | M1 — Lead Generation & Acquisition |
| Sub-modules | 6 (1.1 → 1.6) |
| Total pages | 7 (1 dashboard + 6 sub-module pages) |
| Primary data objects | Lead records (enriched + scored) |
| Channels covered | FSBO, Google Maps, Facebook, Instagram, Google Ads, 99acres, MagicBricks, Housing.com, NoBroker, JustDial, WhatsApp, Referral |
| Key output | Every lead scored 0–100 with full profile before agent touches it |
| Demo focus | Live scoring table with pulsing hot leads + sync animation |
| Design tone | Dark navy dashboard, data-dense, real-time, professional |
| Compliance | DPDP Act 2023 — no unlawful personal data storage |
| Currency | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Date format | DD/MM/YYYY |
| Languages | English (primary) · Hindi · Gujarati |

---

*Real Estate AI Command Center — Module 1 Build Guide*  
*by Fortiv Solutions · fortivsolutions.in*  
*Version 2.0 · Confidential*


Analyze the provided modules and submodules thoroughly. I want to integrate these submodules into our existing Module section.

Implementation requirements:

* When a user clicks on a module, check whether it contains submodules.
* If submodules are available, display them as detailed cards within the module view.
* Each submodule card should include relevant information and provide a clear overview of the submodule.
* When a user clicks on a submodule card, navigate to and display the corresponding submodule section.
* The navigation flow should be intuitive and seamless, improving the overall user experience and making it easier to move between modules and submodules.
* Ensure the UI remains clean, organized, and scalable for future module additions.
* Use the provided mock data for each specific submodule and maintain the same data structure throughout the implementation.
* Analyze the best possible UX approach and suggest any improvements that can further enhance navigation and accessibility.
