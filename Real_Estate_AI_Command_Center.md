# Real Estate AI Command Center
### by Fortiv Solutions · fortivsolutions.in

> **India's First End-to-End Real Estate AI Operating System**
> 12 Modules · 75 Sub-Modules · Built for India · RERA Compliant · WhatsApp-First

---

**Document Type:** Product Reference & Build Guide
**Version:** 2.0
**Company:** Fortiv Solutions
**Classification:** Confidential
**Market:** India — Gujarat Focus

---

## Table of Contents

1. [M1 — Lead Generation & Acquisition](#m1--lead-generation--acquisition)
2. [M2 — Conversational AI & Engagement](#m2--conversational-ai--engagement)
3. [M3 — Property Intelligence & Valuation](#m3--property-intelligence--valuation)
4. [M4 — Sales Pipeline & CRM Automation](#m4--sales-pipeline--crm-automation)
5. [M5 — Analytics, Forecasting & Reporting](#m5--analytics-forecasting--reporting)
6. [M6 — Document AI & Compliance](#m6--document-ai--compliance)
7. [M7 — HR Pipeline Automation](#m7--hr-pipeline-automation)
8. [M8 — Tenant & Property Management](#m8--tenant--property-management)
9. [M9 — Project & Construction Intelligence](#m9--project--construction-intelligence)
10. [M10 — Buyer Portal & Post-Sale Experience](#m10--buyer-portal--post-sale-experience)
11. [M11 — Finance, Accounts & Revenue Intelligence](#m11--finance-accounts--revenue-intelligence)
12. [M12 — AI Brain, Data Layer & Security](#m12--ai-brain-data-layer--security)
13. [Demo Build Prompts](#demo-build-prompts)
14. [Brand & Tech Constants](#brand--tech-constants)

---

## M1 — Lead Generation & Acquisition

> Proactively sources, captures, enriches and scores every lead from every channel — so your pipeline fills itself without manual effort.

**Module purpose:** Replace manual lead hunting with an autonomous acquisition engine that monitors portals, social platforms, and owner listings 24/7, enriches every contact automatically, and scores each lead before an agent ever picks up the phone.

**Demo wow moment:** Live lead feed updating in real time — scores changing, hot leads pulsing red, new leads dropping in from multiple sources simultaneously.

---

### 1.1 FSBO & Owner Listing Hunter

**What it is:**
An autonomous agent that continuously scans For Sale By Owner (FSBO) listings across Indian real estate platforms — JustDial, Sulekha, Quikr, OLX, 99acres owner section, and classified sites — to identify properties being sold directly by owners without a broker.

**What it does:**
- Monitors target platforms every 4–6 hours for new owner-listed properties in defined localities
- Extracts owner contact details, property specs, asking price, and listing date
- Cross-references against existing CRM to avoid duplicates
- Pushes qualified FSBO leads directly into the sales pipeline with source tag "FSBO"
- Flags off-market opportunities before they reach broker networks

**Why it matters:**
FSBO leads are exclusive — no competing broker has them. They convert at higher rates because owners are motivated and there is no commission-sharing complication.

**Demo data:** Show 6 FSBO leads from Vesu, Adajan, Pal with owner names, property details, and a "Discovered 2 hours ago" timestamp badge.

---

### 1.2 Google Maps Builder & Broker Scraper

**What it is:**
A geo-targeted intelligence agent that searches Google Maps for builders, developers, real estate offices, and landowners in specified localities, building a structured database of potential clients, partners, and deal sources.

**What it does:**
- Accepts a target locality list (e.g. Vesu, Adajan, Katargam in Surat)
- Searches Google Maps for: real estate developers, builders, property dealers, land brokers, housing societies
- Extracts: business name, address, phone number, website, rating, review count, operating hours
- Enriches records with LinkedIn company profiles and website data where available
- Segments output by type: Developer / Broker / Landowner / Society
- Auto-pushes to CRM with "Outreach Pending" status

**Why it matters:**
Builds a complete local stakeholder database in hours instead of weeks of manual research. Useful for B2B outreach, channel partner recruitment, and land acquisition sourcing.

**Demo data:** Show a map view with 12 pinned businesses in Surat, each with a type badge and enrichment status.

---

### 1.3 Facebook & Google Ads Lead Sync

**What it is:**
A real-time integration layer that automatically pulls every submitted lead from Facebook Lead Ads, Instagram Lead Ads, and Google Lead Form extensions into the CRM — eliminating manual CSV downloads and delayed entry.

**What it does:**
- Webhook-based real-time sync — lead appears in CRM within 30 seconds of form submission
- Pulls all form fields: name, phone, email, property interest, budget, location preference
- Tags each lead with campaign name, ad set, creative, and platform source
- Triggers instant WhatsApp acknowledgement message to the lead: "Thank you for your interest in [Project Name]. Our team will call you within 15 minutes."
- Notifies the assigned agent via WhatsApp with lead details and a one-click call button
- Logs UTM parameters for marketing ROI tracking in M5

**Why it matters:**
Studies show 78% of leads go to whoever responds first. Manual CSV downloads mean leads wait hours. This module makes response time under 60 seconds — automatically.

**Demo data:** Show a live sync animation — Facebook ad submission → CRM entry → WhatsApp sent — with a 28-second timestamp across the flow.

---

### 1.4 Portal Lead Aggregator

**What it is:**
A unified inbox that consolidates all inbound property inquiry leads from 99acres, MagicBricks, Housing.com, NoBroker, and other portals into a single pipeline — ending the chaos of checking 5 different portal dashboards.

**What it does:**
- Connects to portal APIs (where available) and email-based lead notifications (fallback)
- Parses and normalises lead data across different portal formats into a consistent schema
- Detects and merges duplicate leads (same phone number from multiple portals)
- Applies source attribution: which portal sent this lead
- Routes leads to the correct project/agent based on property interest
- Tracks response status per portal to maintain portal response rate scores (critical for portal ranking algorithms)

**Why it matters:**
Most real estate teams check 5–7 portals daily. Leads slip through, duplicates waste agent time, and portal response rates drop — hurting listing visibility. This module is the central nervous system for all portal activity.

**Demo data:** Show a unified feed with 20 leads, colour-coded by source portal, with duplicate merge alert ("3 duplicates merged today").

---

### 1.5 Lead Enrichment Agent

**What it is:**
An AI agent that automatically appends missing and contextual information to every new lead record — turning a name and phone number into a fully profiled prospect before the first agent call.

**What it does:**
- Reverse phone lookup: appends operator, location, and carrier data
- LinkedIn profile matching: finds professional background, company, designation
- Social media presence: identifies Facebook, Instagram profiles linked to the number/email
- Income estimation: uses designation + company data to estimate income bracket
- Property intent signals: analyses if the person has recently searched or listed similar properties
- WhatsApp activity check: verifies if the number has an active WhatsApp account (critical for outreach)
- Enrichment completeness score: 0–100% showing how complete the profile is

**Why it matters:**
Agents walking into a call knowing the buyer's designation, company, and income bracket close 40% more effectively than those going in blind. Enrichment happens in 90 seconds automatically.

**Demo data:** Show a lead card expanding from "Rajesh Patel, +91 98765 XXXXX" to a full profile with LinkedIn photo placeholder, "VP Sales at Adani Group", "Income: ₹18–25L/year", "WhatsApp: Active".

---

### 1.6 AI Lead Scoring Engine

**What it is:**
A machine learning model that assigns every lead a real-time score from 0 to 100 based on 23 behavioural, demographic, and intent signals — telling agents exactly who to call first, every time.

**What it does:**
- Scoring factors include: source quality (referral > organic > paid), budget match to available inventory, response to WhatsApp/email, website page visits and time spent, number of inquiries (same lead, multiple projects = high intent), income-to-property-price ratio, lead age (recency), portal engagement score, and enrichment completeness
- Score updates in real time as new signals arrive (e.g. lead opens a brochure → score increases by 8 points)
- Intent classification: Hot (75–100) / Warm (40–74) / Cold (0–39)
- Predicted conversion probability shown as a percentage
- Reason codes shown to agents: "High score because: budget matches 2BHK Vesu, 3 portal inquiries this week, WhatsApp opened in under 5 min"
- Weekly model recalibration based on actual conversion outcomes

**Why it matters:**
Without scoring, agents call leads in the order they arrive — wasting hours on cold contacts while hot buyers go to competitors. Scoring focuses 100% of agent effort on the 20% of leads that generate 80% of revenue.

**Demo data:** Live updating table — scores pulsing, a lead moving from 61 to 74 (Warm → Hot) with a highlight animation. Show reason codes on hover.

---

## M2 — Conversational AI & Engagement

> A 24/7 AI front-office that engages every lead instantly across every channel — WhatsApp, phone, web, email — qualifying them and booking visits without any agent involvement.

**Module purpose:** Ensure zero lead goes unresponded regardless of time of day, agent availability, or message volume. The AI handles first contact, qualification, and booking — handing over to human agents only when the buyer is ready.

**Demo wow moment:** Live WhatsApp conversation auto-playing — buyer sends a message, AI responds in 8 seconds, asks 4 qualifying questions, and books a site visit — zero human involved.

---

### 2.1 WhatsApp AI Chatbot

**What it is:**
A fully autonomous AI assistant deployed on WhatsApp Business API that handles inbound buyer inquiries, qualifies prospects, shares property information, and books site visits — in English, Hindi, and Gujarati — 24 hours a day, 7 days a week.

**What it does:**
- Responds to inbound WhatsApp messages within 8 seconds at any hour
- Conducts structured qualification: budget range, preferred locality, configuration (1/2/3BHK), possession timeline, and purpose (self-use/investment)
- Shares project brochures, floor plans, price lists, and virtual tour links via WhatsApp
- Books site visits directly into agent calendars and sends confirmation with address and agent details
- Handles 40+ common buyer questions: "Is RERA registered?", "What's the EMI?", "Is it ready possession?", "What's the maintenance charge?"
- Detects frustration or complex queries and escalates to a human agent with full conversation context
- Supports language switching mid-conversation: buyer can switch from English to Gujarati seamlessly
- Sends automated follow-up messages if buyer goes quiet: "Hi Rajesh, did you get a chance to review the brochure we shared?"

**Why it matters:**
70% of real estate inquiries in India come via WhatsApp. Most teams respond in 2–6 hours. This bot responds in 8 seconds — capturing buyers before competitors even know they exist.

**Demo script:**
```
Buyer: "Hi, interested in 2BHK in Surat"
AI: "Hello! Welcome to Fortiv Solutions 🏠 I'm happy to help you find your perfect home in Surat. May I ask your budget range?"
Buyer: "Around 50-60 lakhs"
AI: "Great choice! We have some excellent options in that range. Which area do you prefer — Vesu, Adajan, or Pal?"
Buyer: "Vesu preferred"
AI: "Perfect. Are you looking for ready possession or under-construction?"
Buyer: "Under construction is fine"
AI: "Wonderful! I'd like to recommend Fortiv Greenview Heights in Vesu — RERA registered, G+14, possession Dec 2026, prices starting ₹48L. Shall I send the brochure?"
Buyer: "Yes please"
AI: [Sends brochure PDF] "Sent! Would you like to schedule a site visit this weekend?"
Buyer: "Saturday works"
AI: "Site visit confirmed for Saturday 11:00 AM ✓ Our agent Priya Rana will meet you. Address: [Location]. You'll receive a reminder Friday evening. See you Saturday! 🙏"
```

---

### 2.2 Missed Call Auto-Responder

**What it is:**
An automation that detects every missed call on Fortiv Solutions' business phone lines and immediately sends a personalised WhatsApp message to the caller — recovering 100% of missed call leads that would otherwise be lost.

**What it does:**
- Detects missed call via telephony integration (Exotel, Knowlarity, or similar)
- Sends WhatsApp message within 60 seconds: "Hi, we noticed you called Fortiv Solutions. We're sorry we missed you! How can we help? Are you looking to buy, rent, or invest in a property?"
- If buyer responds, WhatsApp AI Chatbot (2.1) takes over and continues qualification
- If no WhatsApp response within 2 hours, triggers an SMS fallback
- If no response to SMS, adds to "Callback Required" queue in CRM with priority flag
- Logs all missed calls with response rates for team accountability reporting

**Why it matters:**
Research shows 62% of missed business calls never call back. This module means a missed call is never a lost lead — the prospect hears from Fortiv within 60 seconds even if no agent is available.

**Demo data:** Show a timeline — "Call missed 2:47 PM → WhatsApp sent 2:47:52 PM → Buyer replied 2:51 PM → Qualification started 2:51 PM → Visit booked 2:58 PM."

---

### 2.3 Website AI Chat Widget

**What it is:**
An intelligent chat widget embedded on the Fortiv Solutions website, trained on all projects, pricing, floor plans, amenities, neighbourhood information, RERA details, and FAQs using Retrieval-Augmented Generation (RAG) — so it answers accurately from real data, not guesses.

**What it does:**
- Appears on website with a branded Fortiv Solutions avatar and greeting
- Answers property-specific questions by searching the knowledge base: "Does Greenview Heights have a swimming pool?" → retrieves amenity list → answers accurately
- Shows project photos, floor plan thumbnails, and pricing cards inside the chat widget
- Collects lead details (name, phone, email) naturally through conversation — not a form
- Compares projects: "What's the difference between Greenview Heights and Skyline Residences?" → side-by-side comparison
- Handles pricing objections: "That seems expensive" → "Let me show you the EMI calculator at current SBI rates..."
- Transfers to WhatsApp with one click: "Continue on WhatsApp?" — conversation context carries over

**Why it matters:**
Website visitors who get instant answers convert at 3.5x the rate of those who fill a form and wait for a callback. The widget turns passive visitors into active conversations.

---

### 2.4 Telegram Agent for Field Staff

**What it is:**
A Telegram bot exclusively for Fortiv Solutions' internal sales team — allowing field agents to query the entire AI system from their phone while on site visits, client meetings, or on the road, without needing to open a laptop or log into the CRM.

**What it does:**
- Lead lookup: "Show me details for Rajesh Patel" → returns full lead profile, score, history, and last interaction
- Comparable pulls: "Comps for 2BHK in Vesu under 60L" → returns 5 comparable units with prices
- Property info: "Floor plan for Tower A Unit 802" → sends floor plan image
- Booking: "Book site visit for Priya Shah on Sunday 10am with me" → confirms and updates calendar
- Price check: "Current price list for Skyline Residences 3BHK" → sends updated pricing
- Manager commands: "Show me today's pipeline" → summary of all active deals and their stages
- Quick notes: "Note: Amit Desai interested in ground floor unit only, wife prefers south-facing" → logs to CRM against lead record

**Why it matters:**
Agents in the field lose deals because they can't find information fast enough in front of a client. This bot makes every agent look like they have the entire system memorised.

---

### 2.5 Voice IVR Bot

**What it is:**
An AI-powered Interactive Voice Response system that handles inbound calls to Fortiv Solutions' main business number — understanding natural speech, qualifying callers, and routing them intelligently — without requiring callers to navigate number menus.

**What it does:**
- Answers in a natural, professional voice: "Welcome to Fortiv Solutions. I'm your AI assistant. How can I help you today?"
- Understands natural language: "I'm looking for a 2BHK in Vesu" (no "Press 1 for..." menus)
- Conducts voice-based qualification: budget, locality, configuration, timeline
- Books callbacks: "Our agent will call you back at your preferred time. Would 11am tomorrow work?"
- Routes to live agent when ready: transfers call with a spoken briefing to the agent: "Connecting you to Priya. I've shared your requirements with her."
- Handles after-hours calls: "We're closed now but I've noted your requirements and our team will call you at 10am tomorrow."
- Supports Hindi and Gujarati voice interactions in addition to English

**Why it matters:**
Many buyers — especially older demographics or non-tech-savvy investors — prefer calling over WhatsApp. This ensures every call is handled professionally regardless of whether an agent is available.

---

### 2.6 Email AI Responder

**What it is:**
An AI system that monitors the Fortiv Solutions inbound email inbox and automatically drafts and sends personalised responses to property inquiry emails — attaching relevant brochures, price lists, and scheduling links.

**What it does:**
- Monitors designated inquiry email addresses (e.g. sales@fortivsolutions.in)
- Classifies incoming emails: New Inquiry / Follow-up / Document Request / Complaint / Spam
- For new inquiries: parses buyer requirements from email text, matches to relevant project, drafts personalised response with project highlights, pricing, brochure attachment, and site visit booking link
- Response sent within 3 minutes of email receipt
- For follow-ups: retrieves CRM context and drafts a contextual reply referencing previous conversation
- CC's the assigned agent on every response so they stay in the loop
- Logs all email interactions in CRM timeline

**Why it matters:**
Email inquiries from portals and organic search are often high-quality buyers doing serious research. Slow email response (industry average: 4–6 hours) loses these buyers to competitors who respond faster.

---

## M3 — Property Intelligence & Valuation

> Data-driven pricing, matching and market intelligence — so every agent and buyer has the right numbers at the right moment.

**Module purpose:** Give agents, buyers, and management access to accurate property valuations, intelligent recommendations, and real-time market data — eliminating guesswork from pricing decisions and matching.

---

### 3.1 Automated Valuation Model (AVM)

**What it is:**
An AI-powered property valuation engine that estimates current market value for any residential or commercial property in target geographies using circle rates, registration data, comparable transactions, and locality demand trends.

**What it does:**
- Input: property address, type (flat/plot/villa/commercial), configuration, floor, age
- Processes: government circle rates for the locality, last 6 months of registered transactions in the micro-market, available inventory pricing on portals, distance to key amenities (schools, hospitals, metro), project-specific premium/discount factors
- Output: estimated market value (point estimate + ±5% range), price per square foot vs locality average, price trend chart (6-month movement), confidence score (based on data availability)
- Compares to listing price: "This unit is listed at ₹58L. AVM estimate: ₹54–57L. Slightly overpriced."
- Generates one-page valuation summary PDF with Fortiv Solutions branding

**Why it matters:**
Sellers overprice and sit on inventory for months. Buyers overpay without knowing. AVM gives agents the data authority to have honest pricing conversations backed by evidence, not opinion.

---

### 3.2 CMA Report Generator

**What it is:**
An automated tool that produces branded Comparative Market Analysis (CMA) reports for sellers — comparing their property against recent sales and active listings to determine the right asking price.

**What it does:**
- Pulls 5–10 comparable properties sold in the same locality within the last 6 months
- Compares: size (sq ft), configuration, floor, age, amenities, distance from landmarks
- Calculates price per sq ft for each comparable and the subject property
- Shows active competition: currently listed properties the seller is competing against
- Recommends a list price range with justification
- Exports as a polished, branded PDF with charts, map, and comparison tables
- Includes Fortiv Solutions agent's photo, contact, and personalised message section

**Why it matters:**
Agents who present data-backed CMA reports in listing appointments win mandates at significantly higher rates than those who "just know the market." This turns every listing pitch into a professional consultation.

---

### 3.3 Property Matching Engine

**What it is:**
A vector-search-powered recommendation system that intelligently matches buyers to the most relevant available properties based on their stated preferences, budget, behaviour history, and revealed priorities — ranked by fit score.

**What it does:**
- Builds a buyer preference vector from: stated requirements (from chatbot qualification), search behaviour (pages visited, time spent on each), saved/shortlisted units, and past inquiry patterns
- Matches against available inventory database using semantic similarity
- Ranks properties by overall fit score (0–100) with explanation: "87% match — budget fits, Vesu location preferred, 2BHK matches, north-facing preferred (detected from browsing)"
- Learns from feedback: if buyer rejects a recommendation, the model adjusts the preference vector
- Re-matches and alerts buyer automatically when a new listing matching their profile appears
- Handles conflicting preferences: "Buyer wants Vesu but budget suggests Adajan — shows both with trade-off explanation"

**Why it matters:**
Most property portals show generic search results. This engine understands what the buyer actually wants — including things they haven't explicitly said — and shows them the right property first.

---

### 3.4 Price Alert Bot

**What it is:**
An automated monitoring agent that watches property listings matching a buyer's saved criteria and sends instant WhatsApp or email notifications the moment a matching property appears or an existing listing drops in price.

**What it does:**
- Buyer saves a search profile: locality, configuration, budget range, possession timeline
- Agent monitors: 99acres, MagicBricks, Housing.com, NoBroker, and Fortiv's own new launches
- Triggers immediately when: new listing matches profile, or existing listing price drops into buyer's budget
- Alert format: "New Match! 2BHK in Vesu — ₹57.5L — 1,180 sq ft — Ready possession. [View Details] [Book Visit]"
- Tracks alert open rates and follow-up actions per buyer
- Automatically expires and cleans up saved searches after 90 days of inactivity

**Why it matters:**
Buyers who aren't ready today will be ready in 3–6 months. Keeping them in a passive monitoring funnel means Fortiv is the first to reach them when the right property appears — before they find it themselves.

---

### 3.5 Market Intelligence Dashboard

**What it is:**
A live intelligence hub that aggregates locality-level market data from multiple sources and presents it as an interactive dashboard — giving management, agents, and clients a data-backed view of the real estate market in real time.

**What it does:**
- Price trend charts: average price per sq ft by locality, month-over-month and year-over-year
- Demand heat map: colour-coded map of Surat/Vadodara showing high/medium/low inquiry density by area
- Inventory analysis: total active listings by locality, new listings added this week, listings removed (sold/expired)
- Absorption rate: at current sales pace, how many months of inventory exist in each micro-market
- Days on market: average time a listing sits before selling — by configuration and locality
- Rental yield data: gross rental yield % by area and unit type
- New project launches: recent developer launches with pricing and absorption data
- Weekly automated market report: generated every Monday, sent to management WhatsApp group

**Why it matters:**
Decisions about project launches, pricing, and marketing budget should be driven by data. This dashboard replaces "I think the market is moving" with "The data shows absorption in Vesu is 4.2 months and accelerating."

---

### 3.6 Competitor Price Tracker

**What it is:**
An automated monitoring agent that tracks competitor developer and broker listings in Fortiv's target micro-markets, detecting price changes, new launches, and inventory movements on a weekly basis.

**What it does:**
- Monitors: identified competitor projects in Vesu, Adajan, Pal, Althan, Katargam
- Tracks: listing prices, new launches, price cuts, scheme changes (10:90 payment, offers), project completion updates
- Price change alert: "Shreenath Builders cut 2BHK price in Vesu by ₹1.8L this week — now ₹54.2L vs Fortiv's ₹57.5L"
- New launch alert: "New project launched: XYZ Developers — Althan — 2/3BHK — ₹52–78L — 240 units"
- Weekly competitor intelligence report: price comparison matrix, Fortiv's positioning vs competitors
- Trend over time: tracks whether competitors are raising or cutting prices — signals market direction

**Why it matters:**
In a competitive market, pricing decisions made without competitor awareness can result in inventory sitting unsold for months or leaving money on the table. This module makes Fortiv the most market-aware developer in its geography.

---

## M4 — Sales Pipeline & CRM Automation

> Automates every step of the sales journey from first contact to registration — so no deal falls through, no follow-up is missed, and every agent has a clear view of what to do next.

---

### 4.1 CRM Sync & Deduplication

**What it is:**
A bidirectional synchronisation and data quality layer between all lead sources and the central CRM — ensuring every lead is captured, correctly attributed, and deduplicated automatically.

**What it does:**
- Real-time sync from: portal aggregator (M1.4), WhatsApp chatbot (M2.1), Facebook/Google Ads (M1.3), website widget (M2.3), manual agent entries
- Deduplication logic: matches on phone number (primary), email (secondary), and name+locality (tertiary)
- Merge action: when duplicate detected, merges all interaction history, source attributions, and notes into single record — oldest record is master
- Field normalisation: standardises phone formats (+91 prefix), name casing (Title Case), email (lowercase)
- CRM push includes: source, campaign, medium, content (full UTM), first touch date, lead score from M1.6
- Bidirectional sync: CRM updates (stage changes, notes) push back to automation system for workflow triggering
- Supports: Zoho CRM, HubSpot, Salesforce, or custom CRM via API

**Why it matters:**
The average real estate team has 30–40% duplicate leads in their CRM from multiple portal subscriptions. Duplicates waste agent time, inflate pipeline numbers, and create confusion. This module maintains data integrity as the foundation everything else relies on.

---

### 4.2 Site Visit Scheduler

**What it is:**
An intelligent scheduling system that books site visits based on buyer availability, agent calendars, and project show-flat availability — sending confirmations and reminders automatically via WhatsApp.

**What it does:**
- Booking triggers from: WhatsApp chatbot (2.1), agent manual booking, website widget (2.3), inbound call (2.5)
- Checks agent calendar availability in real time (Google Calendar integration)
- Offers buyer 3 time slots within their preferred window
- Confirms booking via WhatsApp to both buyer and agent
- WhatsApp reminder to buyer: 24 hours before ("Looking forward to seeing you tomorrow at 11am at Fortiv Greenview Heights, Vesu!") and 1 hour before
- WhatsApp alert to agent: morning of visit with buyer profile, score, requirements summary, and talking points
- If buyer cancels or no-shows: automatic reschedule prompt sent within 2 hours
- No-show tracking: agents can mark no-shows; system follows up with buyer and logs reason

**Why it matters:**
Site visit to booking conversion is the most critical conversion rate in real estate. Every missed visit is a lost potential booking. Automated reminders reduce no-show rates by 35–45%.

---

### 4.3 Post-Visit Follow-Up Agent

**What it is:**
An automated multi-step follow-up engine that activates immediately after a site visit — sending personalised content, addressing common objections, and guiding the buyer toward a booking decision.

**What it does:**
- Triggered when agent marks visit as "Completed" in CRM
- Step 1 (1 hour after visit): WhatsApp message — "Thank you for visiting Fortiv Greenview Heights today! Hope you loved the show flat. Here are the photos from your visit and the payment plan we discussed." [Attaches photos and payment plan PDF]
- Step 2 (Day 2): "Hi [Name], just checking in — any questions about the property? We're happy to arrange another visit or a virtual walkthrough."
- Step 3 (Day 4): Sends comparison document — "Here's how Fortiv Greenview Heights compares to similar projects in Vesu — location, price, amenities, RERA status."
- Step 4 (Day 7): Sends urgency trigger if relevant — "We have 3 units remaining in your preferred floor range. Would you like to block one?"
- Objection handling: if buyer mentions "too expensive" → sends EMI calculator + home loan options. "Not RERA registered?" → sends RERA certificate. "Location concern?" → sends locality advantage document
- Agent is notified of all buyer responses and can take over at any point

**Why it matters:**
Most buyers need 5–7 touchpoints after a site visit before making a decision. Without automation, agents give up after 1–2 follow-ups. This module runs 7 touchpoints automatically — increasing post-visit conversion by 25–40%.

---

### 4.4 Nurture Drip Engine

**What it is:**
A long-term, multi-channel automated communication system that maintains consistent, personalised engagement with leads over 30, 60, and 90-day cycles — keeping Fortiv Solutions top-of-mind until buyers are ready to act.

**What it does:**
- Three drip tracks based on buyer stage:
  - **Track A (30-day):** Active buyers — high frequency (every 3–4 days), property-specific content
  - **Track B (60-day):** Warm leads — medium frequency (weekly), market insights + project updates
  - **Track C (90-day):** Cold/long-horizon leads — low frequency (bi-weekly), educational content + market news
- Content types: project updates (new floor released, price revision), market news ("Surat real estate up 12% YoY"), festive offers (Diwali/Navratri discount campaigns), buyer success stories, construction progress photos, blog content
- Channels: WhatsApp (primary), email (secondary), SMS (tertiary)
- Smart exit: when a lead re-engages (clicks a link, replies to a message), automatically moves them from drip track to active follow-up queue and alerts the agent
- Personalisation: uses buyer's name, preferred project, configuration, and locality in every message

**Why it matters:**
Real estate decisions take time — often 3–18 months from first inquiry to purchase. Without nurturing, leads go cold and buy from whoever stayed in touch. This module ensures Fortiv stays in the conversation through the entire decision cycle.

---

### 4.5 Deal Pipeline Tracker

**What it is:**
A structured, stage-based deal management system that tracks every active deal through the full sales lifecycle — from first inquiry to property registration — giving management and agents real-time visibility into pipeline health.

**What it does:**
- Pipeline stages: Inquiry → Site Visit Scheduled → Visited → Negotiation → Booking Amount Paid → Agreement Signed → Loan Processing → Full Payment → Registration
- Each deal card shows: buyer name, property unit, deal value in ₹, assigned agent, days in current stage, next action required, and urgency indicator
- Stuck deal alerts: deal has been in same stage for more than X days (configurable) → agent and manager alerted
- Stage velocity metrics: average time spent in each stage — identifies bottlenecks ("Deals spend average 12 days in Negotiation — industry standard is 5")
- Forecasting input: feeds into M5.2 sales forecast based on weighted pipeline value by stage
- Manager override: managers can reassign deals, change stages, and add notes directly
- Daily pipeline summary: sent every morning to management via WhatsApp — "Active deals: 23 | In negotiation: 6 | Booking due this week: 3 | Total pipeline: ₹4.2Cr"

**Why it matters:**
Without a structured pipeline, deals fall through cracks, agents forget to follow up, and managers have no visibility until it's too late. This module gives everyone a shared, real-time view of every deal.

---

### 4.6 AI Listing Writer

**What it is:**
An LLM-powered content generation tool that creates compelling, SEO-optimised property listing descriptions, WhatsApp broadcast copy, social media captions, and email content from structured project data — in seconds.

**What it does:**
- Input: project name, locality, configuration, price, key amenities, USPs, RERA number, possession date
- Output formats:
  - **Portal listing (long):** 300–400 word description optimised for 99acres/MagicBricks SEO
  - **WhatsApp broadcast (short):** 50–80 word punchy message with key details and CTA
  - **Instagram caption:** Engaging, emoji-light caption with hashtags
  - **Email subject + body:** Click-worthy subject line + 150-word email body
  - **Gujarati version:** Auto-translated listing for local market content
- Tone options: Formal / Conversational / Urgency / Luxury
- Brand voice consistency: all outputs follow Fortiv Solutions' brand guidelines
- One-click publish: to 99acres, MagicBricks, and Fortiv website simultaneously via n8n workflow

**Why it matters:**
Writing a quality listing description for each unit, in multiple formats, for multiple platforms takes 45–90 minutes per listing. This module does it in 30 seconds — consistently, at scale.

---

## M5 — Analytics, Forecasting & Reporting

> Real-time intelligence that turns operational data into decisions — automated reports, AI forecasts, and performance visibility without a single manual spreadsheet.

---

### 5.1 Daily Agent Performance Report

**What it is:**
An automated daily performance summary compiled at end-of-day for each sales agent and the overall team — delivered to the team WhatsApp group and management email every evening at 7 PM.

**What it does:**
- Metrics per agent: leads assigned, calls attempted, calls connected, site visits conducted, follow-ups sent, bookings achieved, revenue generated
- Team summary: total pipeline activity, leads received vs leads contacted, visits completed vs scheduled, conversion rate
- Top performer highlight: "Today's star: Priya Rana — 3 visits, 1 booking, ₹62L revenue"
- Laggard alert (to manager only): "Note: Ankit Shah contacted only 4 of 12 assigned leads today"
- Trend indicator: vs yesterday, vs last week same day, vs monthly average
- Format: clean WhatsApp-formatted summary (no PDF, instant readability) + full PDF via email

**Why it matters:**
What gets measured gets managed. When agents know their numbers are being tracked and reported daily, activity levels increase significantly. Managers stop flying blind and can intervene same-day rather than discovering problems in the weekly review.

---

### 5.2 Sales Forecast Agent

**What it is:**
A machine learning forecasting model that analyses historical booking data, current pipeline health, seasonal patterns, and market signals to predict expected sales and revenue for the next 30, 60, and 90 days.

**What it does:**
- Analyses: 18+ months of historical booking data by project, configuration, locality, price band, and agent
- Inputs from pipeline: weighted deals by stage (Negotiation = 40% probability, Booking Amount Paid = 85%)
- Seasonal adjustment: detects patterns (Navratri/Diwali peaks, summer slowdowns) and adjusts forecast accordingly
- Output: predicted bookings count and revenue value for 30/60/90 days with confidence intervals
- Scenario modelling: "What if we add 2 more agents?" / "What if we launch a Diwali discount scheme?" → forecast updates
- Accuracy tracking: compares previous forecasts to actual outcomes and shows model accuracy %
- Alert: when pipeline health drops and forecast suggests a shortfall, management alerted 3 weeks in advance

**Why it matters:**
Management currently finds out about revenue shortfalls at end-of-month. This model gives a 30–90 day early warning, giving enough time to course-correct — more marketing spend, more agent hires, a pricing scheme.

---

### 5.3 Inventory Velocity Tracker

**What it is:**
A real-time inventory monitoring system that tracks how quickly different unit types are selling across all active Fortiv projects — identifying fast-moving inventory, slow movers, and pricing optimisation opportunities.

**What it does:**
- Tracks per project, per tower, per configuration: units available, units sold this month, units sold this quarter, average days on market
- Velocity classification: Fast (selling in <30 days), Normal (30–60 days), Slow (>60 days)
- Price sensitivity analysis: when a unit sits unsold for 45+ days, shows comparable sold prices and recommends price adjustment range
- Scheme effectiveness: tracks how an incentive scheme (e.g. "free parking for bookings in March") affected velocity
- Handover between agents: when agent leaves, shows all inventory they were pitching to prospects so no unit goes "orphaned"
- Weekly inventory status report: sent to management with units remaining, velocity by type, and recommended action per slow mover

**Why it matters:**
Unsold inventory is dead capital. Identifying slow movers early — and understanding whether the cause is pricing, location, floor, or competition — allows targeted interventions before months of holding cost accumulate.

---

### 5.4 Investor & LP Report Generator

**What it is:**
An automated system that generates professional, formatted investor update reports for Limited Partners (LPs) and project investors — covering sales performance, construction milestones, cash flows, and forward outlook — eliminating hours of manual report preparation.

**What it does:**
- Pulls data from: M4.5 (pipeline), M9.1 (construction milestones), M11.4 (project P&L), M11.5 (cash flow)
- Report sections: Executive Summary, Sales Performance (bookings, revenue, pipeline), Construction Status (% complete, milestone timeline), Financial Summary (collections, costs, projected returns), Market Update (macro context), Next Period Outlook
- Frequency: monthly standard report + quarterly comprehensive report
- Branding: Fortiv Solutions branded cover page, project photos, charts and tables
- Distribution: auto-emailed as PDF to investor mailing list + uploaded to investor portal (M10)
- Customisation: different report templates for different investor tiers (seed investor vs institutional)

**Why it matters:**
Investors who receive timely, professional, data-rich updates are more likely to reinvest in future projects. Manual report preparation takes 4–6 hours per report and often results in delays. Automation makes this effortless and consistent.

---

### 5.5 Marketing ROI Dashboard

**What it is:**
A unified marketing performance dashboard that tracks cost-per-lead, cost-per-site-visit, and cost-per-booking by channel — giving marketing teams and management clear visibility into which channels deliver the best return on spend.

**What it does:**
- Channels tracked: 99acres, MagicBricks, Housing.com, NoBroker, Facebook Ads, Google Ads, Instagram, Referral, WhatsApp, Offline (hoardings, events)
- Metrics per channel: spend, leads generated, cost per lead, lead quality score (from M1.6), leads converted to visits, cost per visit, leads converted to bookings, cost per booking, ROI multiple
- Attribution model: first-touch, last-touch, and multi-touch attribution views
- Budget allocation recommendation: "Referral and WhatsApp deliver ₹80 cost/lead vs ₹580 for 99acres. Consider reallocating ₹50K/month from portals to referral incentive programme."
- Trend charts: week-on-week CPL by channel over 3 months
- Campaign level drill-down: which specific Facebook campaign or Google ad group is performing

**Why it matters:**
Most real estate companies spend ₹3–5L per month on portals and ads with no visibility into which spend is actually generating bookings. This dashboard directs budget to what works and stops waste on what doesn't.

---

### 5.6 Executive Weekly Briefing

**What it is:**
An AI-compiled executive intelligence brief delivered every Monday morning to leadership — summarising the week's performance, key risks, opportunities, and priorities — with zero manual preparation.

**What it does:**
- Compiled from: all module data across the platform
- Sections: Week in Numbers (revenue, bookings, visits, leads), Deal Highlights (biggest wins and risks), Team Pulse (top performers, underperformers, HR notes), Market Signals (competitor movement from M3.6, market trends from M3.5), Compliance Alerts (upcoming RERA deadlines from M6.3), Finance Snapshot (collections, outstanding from M11), This Week's Priority Actions (AI-generated top 5 recommended actions)
- Format: clean PDF + WhatsApp summary version (5 bullet points for quick read)
- Delivery: email + WhatsApp at 7:30 AM every Monday
- Length: 2-page PDF — no fluff, only what matters

**Why it matters:**
Senior leadership in most real estate companies spend Sunday evening manually pulling reports to prepare for Monday. This module gives them 2 hours back every week and ensures they walk into Monday with complete situational awareness.

---

## M6 — Document AI & Compliance

> Automates every document in the real estate transaction lifecycle — from agreement generation to RERA compliance — eliminating manual paperwork and legal risk.

---

### 6.1 Agreement Draft Generator

**What it is:**
An AI-powered document drafting tool that generates first drafts of sale agreements, Memoranda of Understanding (MOUs), allotment letters, payment schedules, and cancellation letters from approved templates and deal data — ready for legal review in minutes.

**What it does:**
- Input: CRM deal data (buyer name, address, unit number, price, payment schedule, possession date, RERA number)
- Pulls: approved legal templates for each document type (maintained by Fortiv's legal team)
- Merges: all variable fields into template accurately — names, amounts (in both numerals and words), dates, unit specifications
- Generates: complete draft document as Word (.docx) file for legal review
- Supports document types: Sale Agreement, MOU, Allotment Letter, Payment Schedule, Demand Letter, Cancellation Agreement, Possession Letter, Society Transfer Letter
- Version control: tracks all changes to templates with timestamp and editor name
- Legal review flag: generated drafts are flagged as "Draft — Pending Legal Review" until approved

**Why it matters:**
A typical sale agreement takes 2–3 hours to prepare manually, with high risk of data entry errors (wrong amounts, wrong dates). This module reduces that to 3 minutes, with zero manual transcription errors.

---

### 6.2 OCR Document Extractor

**What it is:**
An Optical Character Recognition (OCR) and AI extraction system that scans uploaded documents — property deeds, KYC documents, bank statements, ITRs, encumbrance certificates — and extracts structured data directly into CRM fields.

**What it does:**
- Accepts: PDF, JPG, PNG uploads via WhatsApp, email, or web portal
- Document types handled: Aadhaar card, PAN card, passport, voter ID, bank statements (6 months), salary slips, ITR (Form 16), property title deed, encumbrance certificate, NOC, khata extract
- Extracts and maps to CRM: full name, DOB, address, ID numbers, income figures, property details, lien/encumbrance status
- Validation: cross-checks extracted name against CRM lead name — flags mismatches
- Completeness check: shows which KYC documents are pending per buyer
- Secure storage: stores all documents in encrypted, access-controlled document vault with buyer-level permissions

**Why it matters:**
Document collection for a property transaction involves 15–20 documents per buyer. Manual extraction and entry takes 45–90 minutes per buyer. OCR extraction takes 2 minutes and eliminates transcription errors that can cause legal complications.

---

### 6.3 RERA Compliance Monitor

**What it is:**
An automated compliance management agent that tracks all Gujarat RERA obligations for every active project — monitoring filing deadlines, document requirements, and regulatory updates — to ensure Fortiv Solutions never misses a RERA compliance deadline.

**What it does:**
- Project registration: tracks RERA project registration status and expiry for all projects
- Quarterly progress reports (QPR): monitors QPR submission deadlines (every quarter), sends alert 21 days before, then 14 days, then 7 days, then day-of
- Annual audit: tracks annual RERA audit submission deadlines
- Advertisement compliance: checks that all marketing materials include RERA registration number before use
- Document compliance: tracks required project documents (title deed, encumbrance, building plan approval, etc.) and flags missing items
- Amendment filings: alerts when project changes (delay in possession, plan modification) require RERA amendment filing
- Regulatory updates: monitors Gujarat RERA website for new circulars, notifications, and rule changes — summarises impact for Fortiv's team
- Penalty prevention: for any deadline missed, calculates potential penalty exposure and escalates immediately

**Why it matters:**
RERA penalties in Gujarat can be up to 5% of project cost for non-compliance. More critically, RERA violations attract buyer complaints that become public record — damaging reputation and sales. This module makes compliance proactive, not reactive.

---

### 6.4 Stamp Duty & Registration Calculator

**What it is:**
An automated calculator that computes exact stamp duty and property registration charges for any transaction in Gujarat — using current government circle rates, property type, buyer profile, and applicable concessions.

**What it does:**
- Inputs: property locality, type (residential/commercial), area (sq ft), transaction value, buyer profile (male/female/joint/company)
- Applies current Gujarat government circle rates for the specific locality
- Calculates: stamp duty (% of transaction value or circle rate, whichever is higher), registration fee, miscellaneous charges (stamp vendor fee, etc.)
- Applies concessions: female buyer discount (1% rebate in Gujarat), affordable housing concessions, first-time buyer exemptions where applicable
- Total cost-of-purchase summary: property price + stamp duty + registration + GST (under-construction) + maintenance deposit
- EMI calculation: includes all upfront costs in total funding requirement shown to home loan agent
- Generates calculation summary PDF: useful for buyer's home loan application

**Why it matters:**
Stamp duty miscalculation is a common source of buyer surprises at registration — damaging trust and sometimes causing deals to fall through. This calculator gives buyers complete cost transparency upfront, reducing post-booking shocks.

---

### 6.5 E-Signature Workflow

**What it is:**
A digital signature collection and tracking system that sends documents to buyers and sellers for legally valid electronic signature — tracking status, sending reminders, and storing executed documents securely.

**What it does:**
- Triggered when: document draft is approved for signing (from M6.1 or manual upload)
- Sends signing invitation via email and WhatsApp to all parties
- Supports: Aadhaar-based e-sign (legally valid under IT Act), OTP-based e-sign, and DSC (Digital Signature Certificate) for company transactions
- Multi-party signing: defines signing sequence (buyer signs first, then seller, then witness)
- Status tracking: shows real-time signing status for each party — Sent / Opened / Signed / Completed
- Automated reminders: if not signed within 24 hours → reminder. If not signed in 48 hours → escalation to agent
- Stores executed documents: auto-saves to Google Drive in organised folder structure (Project > Buyer Name > Document Type)
- Sends executed copy: automatically sends fully signed document to all parties via WhatsApp and email

**Why it matters:**
Physical document signing requires multiple in-person meetings, courier arrangements, and days of back-and-forth. E-signature reduces this to same-day, remote execution — especially critical for NRI buyers or buyers in other cities.

---

### 6.6 KYC Verification Agent

**What it is:**
An automated identity and document verification system that validates buyer KYC documents against authoritative databases before processing a booking — ensuring compliance with AML/KYC norms and preventing fraudulent transactions.

**What it does:**
- Aadhaar verification: validates Aadhaar number format and (with buyer consent) verifies against UIDAI database
- PAN verification: validates PAN number against Income Tax Department database, confirms name match
- Bank account verification: verifies account number + IFSC combination with a ₹1 penny drop test, confirms account holder name
- CIBIL/credit check (optional): with buyer consent, pulls credit score and repayment history for home loan pre-assessment
- Negative list check: screens buyer name against PMLA (Prevention of Money Laundering Act) watchlists
- Results: Verified ✓ / Flag for Review ⚠️ / Reject ✗ — each with specific reason codes
- Audit trail: complete log of all verification checks with timestamp, result, and data source — stored for 7 years per regulatory requirement

**Why it matters:**
Real estate is a high-value transaction category targeted by money laundering. FEMA and PMLA regulations require KYC compliance. Manual KYC checking is slow and inconsistent. Automated verification takes 90 seconds, is 100% consistent, and creates a defensible audit trail.

---

## M7 — HR Pipeline Automation

> A complete end-to-end HR automation system — from sourcing talent to processing payroll — designed specifically for the hiring demands of a growing real estate company.

---

### 7.1 Resume Screening Agent

**What it is:**
An NLP-powered resume analysis system that automatically parses every incoming application, scores candidates against the job description, and creates a ranked shortlist — eliminating manual CV reading for standard roles.

**What it does:**
- Monitors: careers email inbox, Naukri job posting applications, LinkedIn applications, and direct referrals
- Parses: extracts structured data from resumes in any format (PDF, Word, JPG) — name, contact, education, experience, skills, last CTC, notice period
- Scoring criteria (configurable per role): years of relevant experience, industry background (real estate preferred), CTC range match, educational qualification, skill keyword match, tenure stability (penalises job-hopping), location match
- Outputs: ranked shortlist with score (0–100), pass/fail status, and specific reason codes
- Flagging: highlights candidates with specific green flags (real estate background, local market knowledge) and red flags (unexplained gaps, multiple short tenures)
- Bulk processing: screens 200 resumes in the time a human reviews 5

**Why it matters:**
A typical Senior Sales Agent job posting at a real estate company receives 80–150 applications. Manual screening to a 5-person shortlist takes 6–8 hours. This agent does it in 15 minutes, freeing HR to focus on interviews.

---

### 7.2 Interview Scheduler

**What it is:**
An automated interview coordination system that manages the back-and-forth of scheduling candidate interviews — syncing with interviewer calendars, sending invitations, and dispatching reminders — without a single email chain.

**What it does:**
- Triggered when: candidate is moved to "Shortlisted" stage in HR pipeline
- Checks: interviewer availability in Google Calendar for the next 5 business days
- Sends candidate: 3 time slot options via email and WhatsApp
- When candidate selects slot: creates calendar event for interviewer with candidate details, resume, and scoring brief
- Confirmations: WhatsApp + email confirmation to candidate, calendar invite to interviewer
- Reminders: WhatsApp reminder to candidate 1 hour before, interviewer reminder 30 minutes before
- Reschedule handling: if candidate requests reschedule → re-offers 3 new slots automatically
- No-show tracking: if candidate doesn't join, marks as "No Show" and sends one reschedule opportunity
- Multi-round support: HR round → Manager round → Director round — automates scheduling for each stage

**Why it matters:**
Scheduling interviews across multiple rounds, multiple candidates, and multiple interviewers is a significant HR time drain. This automation reduces interview scheduling effort by 85% and nearly eliminates no-show-without-notice situations.

---

### 7.3 Onboarding Agent

**What it is:**
A fully automated new employee onboarding workflow that triggers the moment an offer is accepted — generating offer documents, collecting KYC, scheduling induction, and managing the Day 1 checklist without HR manually coordinating each step.

**What it does:**
- Triggered by: HR marking candidate as "Offer Accepted" in pipeline
- Day 0 (Offer Accepted): generates offer letter from template, sends via WhatsApp and email for e-signature (connects to M6.5)
- Day 0–7 (Pre-joining): sends document collection checklist via WhatsApp (educational certificates, experience letters, ID proofs, address proof, bank details), sends reminder every 2 days for pending documents
- Day -1 (Day before joining): sends "Your first day" WhatsApp — office address, reporting time, parking instructions, dress code, who to ask for
- Day 1: notifies IT to create email ID, notifies Admin to prepare ID card and laptop, alerts reporting manager with new joiner profile
- Week 1: schedules product training sessions, CRM training, and team introduction meetings
- Day 30: triggers probation check-in reminder to reporting manager

**Why it matters:**
Poor onboarding is the #1 cause of early attrition in sales roles. A structured, automated onboarding process ensures every new hire gets the same professional experience — regardless of how busy HR is that week.

---

### 7.4 Attendance & Payroll Agent

**What it is:**
An automated payroll processing system that reads attendance data, calculates salaries with all applicable deductions, generates payslips, and pushes accounting entries to Tally — running the full payroll cycle with minimal human intervention.

**What it does:**
- Attendance input: reads from biometric system integration, GPS-based check-in app, or manual HR entry
- Payroll calculations: gross salary per employee, less: PF (12% employee + 12% employer), ESI (0.75% employee + 3.25% employer for eligible employees), professional tax (Gujarat slab), TDS (per Form 12B/16), LOP (loss of pay) deductions, advances deducted
- Incentive processing: reads M7.5 agent performance data → calculates incentive payout per agreed scheme → adds to gross
- Payslip generation: branded Fortiv Solutions payslip PDF for each employee with full earnings/deductions breakup
- Distribution: sends payslip to each employee's WhatsApp and email on payroll date
- Tally integration: pushes journal entries to Tally Prime with correct ledger codes for each salary head
- Statutory filings: generates PF challan, ESI challan, PT challan for monthly statutory payments

**Why it matters:**
Monthly payroll for a 30-person team takes 2–3 days manually, with high error risk. Errors in salary calculation or statutory compliance attract employee dissatisfaction and regulatory penalties. This module runs payroll in 2 hours with zero calculation errors.

---

### 7.5 Agent Performance Tracking AI

**What it is:**
A continuous performance monitoring system that tracks every sales agent's activity metrics and outcomes — generating objective performance data for coaching, appraisals, incentive calculation, and early identification of underperformance.

**What it does:**
- Pulls from M4 (pipeline activity), M2 (chatbot handoffs), M1 (lead assignments) automatically
- Metrics tracked per agent: leads assigned, leads contacted within SLA (1 hour), call attempts, call connections, site visits conducted, visits-to-bookings conversion rate, revenue generated, average deal size, days-to-close, follow-up compliance score
- Weekly performance score (0–100): composite of activity and outcome metrics, benchmarked against team average
- Trend tracking: is the agent improving, declining, or consistent?
- Coaching flags: specific alerts to managers — "Ankit Shah has visited 12 clients this month but converted 0 — coaching on closing skills recommended"
- Top performer identification: weekly callout of top agent across all metrics
- Appraisal data: quarterly performance summary auto-generated per agent — used as input to annual review and increment decisions
- Incentive input: feeds calculated performance metrics to M7.4 for incentive payroll processing

**Why it matters:**
Without objective performance data, appraisals are subjective and incentives are disputed. This module makes performance measurement fair, transparent, and automatic — reducing manager time on performance management and improving agent accountability.

---

### 7.6 Talent Sourcing Agent

**What it is:**
A proactive recruitment agent that continuously searches Naukri, LinkedIn, Shine, and other job platforms for relevant candidates matching open positions — building a pipeline of pre-identified talent before a role becomes urgent.

**What it does:**
- Configured with: job role specifications, required experience, preferred background, location, CTC range
- Searches: Naukri (resume database), LinkedIn (People search), Shine, Indeed — regularly
- Profile scoring: scores each identified profile against job requirements (same model as M7.1)
- Enrichment: appends LinkedIn profile, current employer, designation, tenure, and estimated CTC
- Outreach (optional): can send automated connection request or InMail on LinkedIn with a template message
- Pipeline population: shortlisted profiles added to HR pipeline in CRM with "Sourced" tag
- Prevents repeat outreach: tracks all profiles contacted to avoid reaching out to the same person twice
- Role-based: separate sourcing agents running for each open position simultaneously

**Why it matters:**
The best candidates are passive — they're not actively looking. Reactive hiring (posting a job when a role opens) always takes longer and yields weaker candidates than proactive sourcing. This agent builds a ready talent pipeline at all times.

---

### 7.7 HR Policy Chatbot

**What it is:**
A RAG-powered internal chatbot trained on Fortiv Solutions' HR manual, leave policies, reimbursement rules, code of conduct, appraisal process, and all other HR documentation — answering employee queries instantly via WhatsApp or a web interface.

**What it does:**
- Answers queries like: "How many casual leaves do I get?" / "What's the process for medical reimbursement?" / "When is the appraisal cycle?" / "How do I apply for work-from-home?" / "What is the notice period policy?"
- Retrieves accurate answers from the actual HR manual (RAG) — not hallucinated responses
- Leave requests: employee sends "Apply for leave 15–17 March" → bot creates leave request in HRMS → sends confirmation with balance update
- Reimbursement: guides employee through correct form and submission process, checks eligibility
- Grievance logging: employee can raise a grievance anonymously via the bot → creates ticket in HR system
- Policy updates: when HR updates a policy, bot knowledge base is updated and employees are notified
- Escalation: for sensitive or complex issues, bot collects context and routes to the HR manager with full conversation transcript

**Why it matters:**
HR teams in growing companies spend 30–40% of their time answering the same routine policy questions repeatedly. This bot handles 80% of those queries instantly, freeing HR to focus on strategic people management.

---

## M8 — Tenant & Property Management

> Automates the complete lifecycle of tenant management and property maintenance — from finding the right tenant to renewal — so property owners and managers can operate at scale.

---

### 8.1 Tenant Screening Pipeline

**What it is:**
A comprehensive automated background verification pipeline for prospective tenants — covering identity, income verification, rental history, and references — scoring applicants and ranking them for the property owner's review.

**What it does:**
- Tenant application form: collected via WhatsApp chatbot or web portal
- Identity verification: Aadhaar and PAN verification via API (connects to M6.6)
- Income verification: bank statement analysis (last 3 months) — monthly credit total, salary credits, income stability score; or employment verification call to HR department
- Rental history check: asks for previous landlord reference, conducts automated reference call or WhatsApp outreach
- CIBIL score check: with tenant consent, pulls credit score — flags defaults or large outstanding loans
- Police verification: generates police verification form (Surat Police format) and guides tenant through submission process
- Tenant score (0–100): composite score based on all above factors
- Recommendation to owner: "Recommended / Conditional / Not Recommended" with reasons
- Comparison view: if multiple applicants for one property, side-by-side comparison of all scores

**Why it matters:**
Bad tenants — those who delay rent, damage property, or refuse to vacate — are a nightmare that costs landlords months of rent and legal fees. This pipeline identifies warning signs before a lease is signed.

---

### 8.2 Maintenance Request Router

**What it is:**
An intelligent maintenance management system where tenants raise requests via WhatsApp or web portal and AI triages severity, assigns the correct vendor, tracks resolution, and keeps the tenant updated throughout — without a property manager manually coordinating each request.

**What it does:**
- Tenant submits request: WhatsApp message or web form — can include photos/videos of the issue
- AI triage: classifies request by type (plumbing/electrical/civil/carpentry/pest/AC) and severity (Emergency / Urgent / Normal)
- Emergency handling: plumbing burst, complete electrical failure, security issue → immediate alert to property manager + auto-call to emergency vendor
- Vendor assignment: selects from pre-approved vendor list by category, proximity, and availability
- Vendor notification: sends work order via WhatsApp with tenant address, issue description, and photos
- Tenant update: "Your maintenance request #MR-247 has been assigned to Ravi Plumbing. Expected arrival: Today 3–5 PM."
- Completion tracking: vendor marks complete → tenant confirmation request → if tenant confirms, ticket closed; if dissatisfied, escalated to manager
- Cost tracking: vendor submits bill → logged against property maintenance ledger

**Why it matters:**
Property managers handling 20+ units manually are overwhelmed by maintenance coordination. Tenants waiting 3–4 days for a plumber to respond do not renew leases. This module creates a professional, accountable maintenance experience at scale.

---

### 8.3 Rent Collection Agent

**What it is:**
An automated rent collection system that sends reminders, tracks payments, generates receipts, and escalates overdue accounts — ensuring consistent, on-time rent collection across an entire portfolio without manual follow-up.

**What it does:**
- Reminder sequence: 7 days before due date → "Friendly reminder: your rent of ₹18,500 is due on 1st March." | 3 days before → "Your rent is due in 3 days. UPI link: [Pay Now]" | Due date → "Today is your rent due date. Amount: ₹18,500." | 3 days overdue → "Your rent is 3 days overdue. Please pay today to avoid late fee." | 7 days overdue → escalation to property manager
- Payment tracking: detects payment confirmation (UPI/bank transfer) and automatically marks as paid
- Receipt generation: auto-generates rent receipt PDF and sends to tenant via WhatsApp within 5 minutes of payment confirmation
- Late fee calculation: if lease specifies late fee (e.g. 2% per month), calculates and adds to outstanding amount after due date
- Escalation workflow: 7+ days overdue → property manager receives detailed report with tenant name, unit, amount, and communication history
- Annual rent revision reminder: alerts property manager 60 days before lease anniversary to review and update rent amount

**Why it matters:**
Even a portfolio of 10 rental properties with consistent manual follow-up requires significant time monthly. At 50+ units, it becomes a full-time job. This module scales rent collection to any portfolio size.

---

### 8.4 Home Loan Copilot

**What it is:**
An intelligent home loan assistance agent that assesses buyer loan eligibility, recommends the most suitable lending products from major Indian banks, and guides buyers through the application process — removing the financing barrier from the sales process.

**What it does:**
- Eligibility assessment: based on monthly income (stated by buyer or verified from M6.2), existing EMI obligations, credit score (if available), age, employment type (salaried/self-employed)
- Loan eligibility calculation: maximum loan amount as per each bank's criteria (typically 60–65x monthly net salary for salaried, 4–5x annual profit for self-employed)
- Bank comparison: compares current rates and processing fees from SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, LIC Housing Finance — for the specific loan amount and tenure
- EMI calculator: shows monthly EMI at different tenure options (10/15/20/25 years) for each bank
- Recommendation: "Based on your profile, HDFC Bank offers the best rate at 8.65% for your loan amount with fastest processing."
- Document checklist: generates personalised loan application document checklist based on buyer's employment type
- Bank introduction: with buyer consent, connects buyer to Fortiv Solutions' bank relationship manager for fast-track processing

**Why it matters:**
"I'll wait until I arrange finance" is one of the most common reasons buyers delay bookings. Having a loan copilot that gives instant eligibility and recommendation turns financing from a barrier into a solved problem — keeping buyers moving toward a booking.

---

### 8.5 Tenant NPS & Feedback Bot

**What it is:**
An automated customer satisfaction measurement system that surveys tenants at key milestones — move-in, 3 months, 6 months, and at renewal — collecting feedback, measuring NPS, and flagging unhappy tenants for proactive intervention before problems escalate.

**What it does:**
- Move-in survey (Day 7): "How was your move-in experience? Rate 1–10." + 3 open-ended questions about flat condition, handover process, and areas for improvement
- Quarterly check-in: "How satisfied are you with your home at [Property Address]? Rate 1–10."
- NPS question: "How likely are you to recommend this property to a friend or colleague? 0–10."
- Classification: Promoters (9–10) / Passives (7–8) / Detractors (0–6)
- Detractor alert: score of 6 or below → immediate WhatsApp alert to property manager with full tenant profile and survey response
- Promoter activation: score of 9–10 → automated message: "Thank you! Would you be willing to refer a friend? Here's our referral link." (connects to M12.4)
- Renewal prediction: low NPS at 5-month mark predicts likely non-renewal — alerts manager to intervene before tenant decides

**Why it matters:**
Tenant acquisition costs (brokerage, vacancy, cleaning, minor repairs) average ₹25,000–50,000 per unit. Retaining a good tenant by addressing concerns early is far cheaper than finding a new one. This module identifies dissatisfied tenants 60–90 days before they decide to leave.

---

### 8.6 Lease Renewal Agent

**What it is:**
An automated lease renewal management system that identifies expiring leases well in advance, prepares renewal proposals, negotiates terms, manages the e-signature process, and tracks all renewals across the portfolio — ensuring maximum renewal rates.

**What it does:**
- Portfolio monitoring: tracks all lease end dates across every property in the Fortiv portfolio
- 90-day alert: property manager flagged 90 days before expiry with renewal recommendation (retain at same rent / revise rent / decide on new tenant)
- 60-day outreach: automated WhatsApp to tenant — "Your lease at [Address] expires on [Date]. We'd love to have you continue. Here's a renewal proposal." [Attaches draft renewal agreement with revised rent if applicable]
- Rent revision suggestion: based on M3.5 market intelligence, suggests appropriate revised rent with market comparables
- Response tracking: monitors if tenant has opened and responded to renewal proposal
- Follow-up sequence: if no response in 7 days → reminder. 14 days → escalation to manager.
- Renewal agreement: on acceptance, triggers M6.5 e-signature workflow for new agreement
- Rejection workflow: if tenant decides to vacate → triggers vacancy management process: maintenance inspection scheduling, new tenant sourcing (M8.1), property listing for rent (M4.6)

**Why it matters:**
A 30-day vacancy on a ₹20,000/month rental = ₹20,000 lost + ₹20,000+ in re-letting costs. For a portfolio of 50 properties, a 20% non-renewal rate without proactive management costs ₹4L+ annually. This module maximises renewals through early, professional engagement.

---

## M9 — Project & Construction Intelligence

> A complete construction lifecycle management system — from ground-breaking to possession — giving developers and project teams real-time visibility into milestones, costs, compliance, and completion timelines.

**Demo wow moment:** Live project milestone timeline with a site photo AI-tagging in real time and a possession countdown — the first time a developer client sees this, they immediately ask "can we implement this for our team?"

---

### 9.1 Project Milestone Tracker

**What it is:**
An interactive visual timeline that tracks every construction phase of a project — from land acquisition to possession handover — showing planned vs actual progress, completion percentages, and delay risk indicators in real time.

**What it does:**
- Tracks phases: Land Acquisition → Design & Drawings → RERA Registration → Building Plan Approval → Foundation → Basement/Podium → Structure (floor by floor) → External Finishing → Internal Finishing → Services (MEP) → OC Application → OC Receipt → Possession
- Each phase shows: planned start date, actual start date, planned completion, actual/forecast completion, % complete, responsible person, and dependent phases
- Gantt-style view: visual timeline showing phase sequence and dependencies
- Critical path highlighting: identifies which phases are on the critical path to possession
- Delay cascade calculation: if Phase 6 is delayed by 15 days, which phases does this affect and by how much?
- Progress update mechanism: site engineers update % complete weekly via Telegram bot (M2.4) or web interface
- Reporting: auto-generates progress summary for RERA QPR (M6.3) and investor report (M5.4)

**Why it matters:**
Construction project overruns in India average 24–36 months beyond original schedule. The primary cause is lack of proactive visibility. This tracker surfaces delays early — when corrective action is still possible — rather than discovering them at the quarterly RERA report.

---

### 9.2 Subcontractor Management Agent

**What it is:**
A complete subcontractor management system covering onboarding, work order management, milestone-based payment tracking, and performance scoring for all contractors engaged on Fortiv projects.

**What it does:**
- Contractor database: profiles for all empanelled contractors with trade category, rate card, GST number, past performance score, insurance validity, and license details
- Work order generation: when a scope is awarded, auto-generates work order with scope description, drawings reference, rate, milestone payment schedule, and start/end date
- Milestone-based payment: payment release only when site engineer certifies milestone complete → triggers payment approval workflow → auto-generates payment advice to accounts
- Quality checklist: for each milestone, site engineer completes digital quality checklist before certifying completion
- Performance scoring: tracks on-time completion rate, quality rejection rate, safety incidents, and responsiveness — score affects future award decisions
- Document compliance: monitors contractor's labour licence, PF registration, insurance validity — alerts when expiring
- Subcontractor WhatsApp integration: contractors receive work orders and can update progress via WhatsApp

**Why it matters:**
Subcontractor management is one of the messiest parts of real estate development — verbal agreements, delayed payments, quality disputes. This module creates a digital paper trail for every subcontractor interaction, reducing disputes and improving site accountability.

---

### 9.3 Material Procurement Tracker

**What it is:**
A procurement management system that tracks material indent requests from site, vendor quotations, purchase orders, delivery status, and quality inspection — ensuring materials arrive on time and procurement processes are followed.

**What it does:**
- Material indent: site engineer raises indent for required materials with quantity and required-by date
- Vendor quotation: system sends quotation request to 3 approved vendors per material category
- Comparison and approval: compares quotations, flags L1 (lowest) vendor, generates approval workflow for project manager/director based on order value
- Purchase order: on approval, auto-generates PO and sends to vendor via WhatsApp/email
- Delivery tracking: vendor updates expected delivery date; site engineer confirms actual receipt and quantity
- Quality inspection: site engineer marks quality as Accepted / Rejected with photo — rejected materials trigger replacement PO automatically
- Cost tracking: all material costs tracked against project budget by category (feeds M9.6)
- Shortage alert: when material stock at site is projected to run out before next delivery, advance procurement alert sent

**Why it matters:**
Material procurement delays are the #2 cause of construction schedule slippage (after subcontractor issues). Having structured, trackable procurement with automatic vendor follow-up reduces "waiting for material" delays dramatically.

---

### 9.4 Statutory Approvals Monitor

**What it is:**
A regulatory and statutory compliance tracker for construction projects — monitoring the status of all required approvals, permissions, and NOCs, with deadline alerts and escalations to ensure construction proceeds without regulatory interruptions.

**What it does:**
- Tracks approvals: Building Plan Approval, RERA Registration, Environment Clearance, Fire NOC (provisional and final), Tree NOC, Excavation Permission, Labour Department Registration, RERA Quarterly Reports, Commencement Certificate, Occupation Certificate, Completion Certificate
- Status tracking per approval: Not Applied → Applied → Under Review → Approved / Rejected / Reverted
- Deadline management: for each pending approval, tracks expected decision date and alerts when overdue
- RERA QPR: automatically compiles required data from M9.1 (progress) and M9.3 (material cost) for RERA Quarterly Progress Report, alerts 21 days before deadline
- OC readiness checklist: tracks all pre-conditions for Occupation Certificate application — structural completion, fire NOC, lift inspection, water connection, sewage connection, and others
- Escalation tree: if approval delayed beyond expected date → auto-escalates to legal/liaison team with specific approval details

**Why it matters:**
A single delayed approval — especially OC — can hold up 200 unit possessions, triggering RERA penalty obligations and buyer compensation claims. Proactive approval tracking prevents projects from being ambushed by regulatory delays.

---

### 9.5 Construction Photo & Site Log AI

**What it is:**
An AI-powered site documentation system where field staff upload construction photos via WhatsApp and the AI automatically tags, classifies, analyses progress, and maintains a structured visual site log — replacing manual photo filing and progress reports.

**What it does:**
- Photo submission: site engineers or supervisors send photos to a dedicated WhatsApp number with simple captions like "Tower A Floor 8 slab casting"
- AI auto-tagging: classifies each photo by project, tower, floor, zone, activity type, and construction phase
- Progress detection: compares current photo to previous photos of the same area — detects visible progress and estimates % advance (e.g. "Slab casting approx 85% visible vs last photo 14 days ago")
- Milestone documentation: when a major milestone is reached (e.g. "Tower B topping out"), AI generates a milestone documentation package — photos, date, brief description — for RERA reporting and investor updates
- Issue flagging: detects visible quality concerns or safety issues in photos (exposed reinforcement, safety gear violations) — alerts project manager
- Timeline photo gallery: searchable gallery organised by date, floor, zone, and activity — accessible to project team and management
- Auto-populates M9.1: photo-confirmed progress updates milestone tracker completion percentages

**Why it matters:**
Construction documentation is typically an afterthought — photos stored randomly on WhatsApp groups, progress reports written from memory. This module turns site photos into structured intelligence without requiring any extra effort from field staff.

---

### 9.6 Cost-to-Complete Forecaster

**What it is:**
A financial model that continuously compares budgeted vs actual project expenditure at each construction stage and forecasts the final project cost — alerting management to cost overruns before they become unmanageable.

**What it does:**
- Budget baseline: project is set up with detailed cost budget by category (civil, MEP, finishing, external development, landscaping, overheads, statutory, marketing, sales)
- Actual cost input: draws from M9.2 (subcontractor payments), M9.3 (material procurement), direct cost entries
- Budget vs actual by category: shows for each cost head — budgeted, spent to date, % spent, projected final cost
- Cost-to-complete model: for work remaining, applies unit rate estimates to remaining scope to project final cost per category
- Margin forecast: revenue (from M11.4) minus projected final cost = forecasted project margin and margin %
- Overrun alert: when any cost category is tracking >10% over budget → automatic alert to project director with details
- Scenario modelling: "What is the margin impact if civil cost overruns by 8%?" → instant updated forecast

**Why it matters:**
Project profitability in real estate is not known until the project is delivered. By that time, cost overruns have already happened. This model gives management a rolling view of project profitability throughout construction, enabling course corrections.

---

### 9.7 Possession Readiness Dashboard

**What it is:**
A comprehensive possession planning and execution dashboard that manages the entire process of handing over completed units to buyers — from pre-possession inspections to documentation to final handover.

**What it does:**
- Possession schedule: unit-wise possession schedule based on OC receipt date and construction completion sequence
- Buyer communication: automated series to buyers — "Your possession is scheduled for [Date]! Here's what to expect and documents to bring."
- Pre-possession inspection: site engineer completes per-unit snagging checklist (walls, flooring, fixtures, plumbing, electrical, doors, windows) — any snag creates a work order in M8.2
- Snag resolution tracking: tracks all pre-possession snags to completion — possession is cleared only when all snags are resolved
- Pending balance check: connects to M11.1 — if buyer has any outstanding payment, possession is flagged pending clearance
- Document preparation: auto-generates possession letter, no-dues certificate, key handover receipt
- Possession event management: schedules all possessions for a week, assigns Fortiv staff to conduct handovers, manages time slots
- Countdown display: "47 units possession in next 30 days | Snag-clear: 31 units | Pending payment clearance: 8 units | Ready for immediate possession: 38 units"

**Why it matters:**
Possession is the most significant moment in a buyer's relationship with a developer. A chaotic, poorly managed possession event damages trust built over years and generates RERA complaints. A structured, prepared possession process creates happy buyers who become referral sources.

---

## M10 — Buyer Portal & Post-Sale Experience

> A branded self-service portal that transforms the buyer experience from booking to possession — keeping buyers informed, engaged, and satisfied through the longest phase of their journey.

**Demo wow moment:** Show a buyer opening their portal and seeing their floor plan highlighted in the building, their payment schedule with the next due date counting down, and a WhatsApp message automatically sent with the construction update from last week — everything automated.

---

### 10.1 Buyer Self-Service Portal

**What it is:**
A branded, secure web portal where every Fortiv Solutions buyer can access all information about their property purchase — unit status, documents, payment schedule, construction progress, and communications — 24/7 without calling the office.

**What it does:**
- Secure login: Aadhaar OTP or email/password authentication per buyer
- Dashboard overview: property details (project, tower, floor, unit number, area), booking amount paid, total consideration, next payment due, possession target, current construction stage
- Document library: all buyer's executed documents in one place — booking form, allotment letter, sale agreement, demand letters, payment receipts, possession letter (when issued)
- Payment history: complete payment schedule with amounts, due dates, paid dates, and receipts
- Communication log: all WhatsApp, email, and call interactions with Fortiv team, searchable
- Unit-specific information: floor plan, unit specifications, finishes selected, modifications approved
- Contact: "Talk to your Relationship Manager" — one-tap WhatsApp or call to assigned agent
- Multilingual: English, Hindi, Gujarati interface options

**Why it matters:**
The most common calls to a real estate company's office are "When is my possession?" and "Can you send me my payment schedule?" This portal answers both instantly — reducing inbound call volume by 50–60% while improving buyer satisfaction.

---

### 10.2 Payment Schedule & Receipt Manager

**What it is:**
An automated payment management system that tracks each buyer's payment schedule, automatically generates and sends demand letters when construction milestones are achieved, tracks payment receipts, and maintains a complete financial record per buyer.

**What it does:**
- Milestone-linked demand: when M9.1 marks a construction milestone complete → system automatically generates demand letter for the linked payment tranche
- Demand letter format: professional PDF on Fortiv letterhead — buyer details, unit details, amount due, due date, RERA details, bank account for payment, UPI QR code
- Multi-channel delivery: demand letter sent via WhatsApp, email, and uploaded to buyer portal simultaneously
- Payment acknowledgement: when payment received (via bank statement API or manual confirmation) → auto-generate and send receipt
- Receipt format: branded receipt PDF with payment reference, date, amount, cumulative paid, balance outstanding
- Payment reminder sequence: if payment not received by due date → D+3 reminder → D+7 reminder → D+15 escalation to relationship manager
- Outstanding tracker: real-time view of each buyer's payment status — current, overdue, and upcoming installments

**Why it matters:**
Delayed collection of installments is the primary cause of construction funding gaps. Automated, timely demand notes with professional receipts maintain cash flow and reduce the awkwardness of agents chasing clients for money.

---

### 10.3 Construction Progress Feed

**What it is:**
An automated construction progress update system that delivers fortnightly visual updates to every buyer — including site photos, milestone completion percentages, and updated possession timeline — directly to their WhatsApp and buyer portal.

**What it does:**
- Sourced from: M9.5 (site photo log) and M9.1 (milestone tracker) — no additional data entry required
- Fortnightly update package: 3–5 site photos from the week, milestone completion % update, specific update message ("Tower A slab casting for Floor 12 completed this week — 84% structural complete overall"), updated possession forecast if any change
- WhatsApp delivery: formatted update with photos sent to each buyer's WhatsApp
- Portal update: same content added to buyer's portal dashboard under "Construction Updates"
- Project-specific messaging: buyers in Tower A get Tower A updates; buyers who selected specific finishes get updates when their floor's finishing work begins
- Milestone announcement: when a major milestone is achieved (e.g. topping out, OC received) → special announcement message with celebration tone and key detail
- Buyer response: if buyer replies to an update with a question, routed to relationship manager with full context

**Why it matters:**
Real estate buyers in India suffer from severe information anxiety during the construction period. "Is the project actually being built?" is a constant worry that drives complaints, RERA inquiries, and social media negativity. Regular, visual, authentic updates convert anxious buyers into project advocates.

---

### 10.4 Snag / Punch List Agent

**What it is:**
A structured defect management system for the possession phase — where buyers can log snags (defects or incomplete items) via WhatsApp or the portal, have them triaged by AI, tracked through resolution, and confirmed closed — creating a transparent and accountable post-possession warranty process.

**What it does:**
- Snag submission: buyer submits via WhatsApp (photo + description) or portal — "Bathroom floor tile has a crack near the door. Photo attached."
- AI triage: classifies snag by type (civil/plumbing/electrical/carpentry), severity (cosmetic/functional/structural), and warranty coverage (within scope / chargeable)
- Work order creation: creates work order in M8.2 with all snag details, assigned to appropriate site team or vendor
- Buyer notification: "Your snag #SN-1047 has been registered. Category: Civil — Flooring. Expected resolution: Within 5 working days. You'll be updated via WhatsApp."
- Resolution tracking: buyer receives WhatsApp update when work team is assigned, when they visit, and when work is completed
- Buyer sign-off: "Has your snag been resolved to your satisfaction? Reply YES or NO." — if NO, re-escalated
- Analytics: tracks snag categories by project and floor — identifies systematic quality issues for future projects

**Why it matters:**
Post-possession snag handling is the most common source of buyer grievances filed on RERA. A transparent, tracked, acknowledged snag process — even if resolution takes time — prevents grievances. Unacknowledged snags become RERA complaints.

---

### 10.5 Resale & Rental Assistance Agent

**What it is:**
An AI agent that helps existing Fortiv Solutions buyers who wish to resell or rent their unit — creating a listing, qualifying interested buyers, and connecting them with a Fortiv agent — creating a post-possession revenue stream and extending the buyer relationship.

**What it does:**
- Triggered by: buyer expressing resale or rental intent (via portal, WhatsApp, or direct inquiry)
- Resale listing: creates a listing for the unit with specifications, photos (from buyer or site archive), price recommendation from M3.1 AVM, and RERA details
- Distribution: lists on 99acres, MagicBricks, and Fortiv's own platform with source tracking
- Buyer qualification: M2.1 WhatsApp chatbot qualifies inbound inquiries for the resale listing
- Rental listing: creates rental listing with recommended rent from M3.5 market data, runs tenant screening (M8.1) for interested applicants
- Agent assignment: Fortiv agent manages the resale/rental transaction, earning brokerage
- Seller updates: current owner receives updates on inquiry activity, visits scheduled, and offers received

**Why it matters:**
After possession, most developers lose the buyer relationship entirely. This module creates a continuous engagement loop — buyers come back to Fortiv for resale or rental rather than going to an independent broker — generating recurring brokerage revenue and maintaining the relationship for future project recommendations.

---

### 10.6 Society Onboarding Agent

**What it is:**
An automated post-possession society formation and management onboarding system — handling the legal and administrative steps to form a Resident Welfare Society (RWA) and transition property management responsibilities from developer to residents.

**What it does:**
- Society formation: auto-generates society registration documents required under Gujarat Cooperative Societies Act
- Resident directory: compiles complete resident contact database from buyer records — name, unit, email, WhatsApp
- First AGM planning: schedules first Annual General Meeting, sends notices to all residents, prepares agenda, records minutes
- Maintenance charge setup: calculates per-unit maintenance contribution, sets up collection workflow (M8.3)
- Common area documentation: transfers maintenance records, vendor contracts, and common area specifications to society committee
- AMC handover: tracks all Annual Maintenance Contracts (lift, generator, STP, swimming pool) and transfers to society with renewal dates
- Sinking fund setup: guides society on sinking fund calculation and collection as per RERA requirement
- Society WhatsApp group: auto-creates structured society communication group with proper categorisation

**Why it matters:**
Post-possession society formation is typically handled ad-hoc, resulting in confusion, disputes, and maintenance issues that reflect poorly on the developer. A structured onboarding process creates a smooth transition, happy residents, and protects the developer from post-delivery blame.

---

### 10.7 Post-Possession NPS & Loyalty Bot

**What it is:**
An automated long-term satisfaction monitoring and loyalty management system that conducts periodic NPS surveys post-possession, converts promoters into referral sources, and maintains an engaged owner community for future projects.

**What it does:**
- Survey schedule: Day 30 post-possession (move-in experience) → 3 months (settling-in satisfaction) → 12 months (overall satisfaction) → annual thereafter
- NPS measurement: standard 0–10 likelihood to recommend score
- Qualitative feedback: 2–3 specific questions per survey stage (e.g. at 3 months: construction quality, maintenance responsiveness, value for money)
- Detractor response (0–6): immediate alert to relationship manager + personalised WhatsApp outreach within 24 hours
- Passive follow-up (7–8): monthly project update and community content to nudge toward promoter
- Promoter activation (9–10): "Thank you! We'd love your help. Refer a friend and earn ₹10,000 as our way of saying thank you." → tracks referrals attributed to each promoter (connects to M12.4)
- Community content: monthly Fortiv homeowner community newsletter — market updates, home improvement tips, new project previews — maintains brand presence with existing owners
- Project launch priority: existing buyers get early access and preferred pricing on new Fortiv project launches

**Why it matters:**
The most powerful sales channel in Indian real estate is word-of-mouth referral. Satisfied buyers who receive continued value and recognition become unpaid brand ambassadors. This module systematically converts buyers into advocates.

---

## M11 — Finance, Accounts & Revenue Intelligence

> The complete financial nervous system for a real estate developer — from individual buyer collections to project P&L to investor reporting — all automated, accurate, and real-time.

**Demo wow moment:** Show the collections dashboard updating as a payment comes in — total collected goes up, outstanding goes down, receipt generated and sent — in real time. CFOs physically lean forward when they see this.

---

### 11.1 Collections & Receivables Dashboard

**What it is:**
A real-time financial overview dashboard showing the complete collections status across all projects — total billed, collected, outstanding, aging analysis, and project-wise breakdown — accessible to finance and management at any time.

**What it does:**
- Top-level metrics: Total Billed (across all active projects), Total Collected, Collection Rate %, Total Outstanding
- Project breakdown: same metrics per project with drill-down to tower and unit level
- Collection timeline chart: monthly collections bar chart for last 12 months with target line
- Aging analysis: outstanding receivables bucketed by overdue age — Current (not yet due) / 0–30 days / 31–60 days / 61–90 days / 90+ days — with total amount and buyer count per bucket
- Overdue buyer list: drillable list of overdue accounts with buyer name, unit, amount overdue, days overdue, last contact date, relationship manager, and recommended action
- Weekly collection target tracker: target vs actual collections for current week and month
- Alert: when total outstanding in 90+ days bucket exceeds 10% of total billed → finance director alert

**Why it matters:**
This is the #1 screen that wins CFO and MD buy-in in demos. Replacing a manually compiled Excel sheet that's always 3 days out of date with a real-time, drillable dashboard that shows exactly where every rupee is — is immediately and viscerally valuable.

---

### 11.2 Demand Note Automation

**What it is:**
An automated demand note generation and delivery system that creates and sends payment demand letters to buyers at the correct time — triggered by construction milestones, time-based schedules, or specific events — ensuring collections happen on schedule.

**What it does:**
- Milestone trigger: when M9.1 marks a milestone complete → system auto-identifies all units with a payment tranche linked to that milestone → generates demand notes for all affected buyers
- Template management: different demand note templates for different payment types (foundation, slab, plinth, possession)
- Generation: pulls buyer details, unit details, amount (per sale agreement), due date (30 days from milestone), bank details, RERA reference — generates branded PDF
- Multi-channel delivery: WhatsApp (primary), email (secondary), uploaded to buyer portal (M10.1)
- Acknowledgement tracking: did the buyer open the demand note? Did they reply with questions?
- Payment follow-up: connects to M10.2 payment reminders — if not paid within 30 days, reminder sequence activates
- Batch processing: when a milestone covers 150 units (e.g. all Tower A buyers), generates and sends all 150 demand notes within 10 minutes

**Why it matters:**
Delayed demand note issuance delays collections. Manual preparation of 150 demand notes takes 2–3 days during which construction funding gaps widen. Automated same-day demand note generation on milestone completion closes this gap.

---

### 11.3 Broker Commission Tracker

**What it is:**
A complete channel partner commission management system that calculates, tracks, and releases broker commissions based on deal milestone completion — with automated commission statements and payment records.

**What it does:**
- Commission structure setup: configurable per project — e.g. "2% on booking, 1% on 50% payment, 2% on possession"
- Deal tracking: tracks each broker deal through payment milestones — triggers commission calculation when milestone conditions are met
- Calculation: applies commission rate to relevant tranche amount, calculates GST on commission (18%), generates net payable
- Approval workflow: commission statement sent to accounts for approval before payment
- Commission statement: professional PDF statement for each broker per deal — amount, deal details, TDS deduction (if applicable), net payable
- Payment tracking: marks commission as Pending / Approved / Paid, records payment date and reference
- Broker portal (M12.4): brokers can view their deal status, commission earned, and commission payment status in real time
- Analytics: total commission liability per project, top earning brokers, commission-to-revenue ratio

**Why it matters:**
Commission disputes are the primary source of broker relationship damage in real estate. Transparent, automated, milestone-based commission tracking — where brokers can see their commission status in real time — builds trust and loyalty in the channel partner network.

---

### 11.4 Project P&L Monitor

**What it is:**
A live project-level profit and loss tracking system that monitors revenue recognition, actual costs, and projected margins throughout the project lifecycle — giving management continuous visibility into project profitability rather than discovering it only at completion.

**What it does:**
- Revenue side: total saleable area, sold units, total consideration (all units), bookings amount collected, milestone-linked revenue recognised (per IndAS 115 / percentage completion method)
- Cost side: draws from M9.2 (subcontractor), M9.3 (material), direct cost entries — land cost, design fees, approvals, marketing, overheads
- Gross margin: revenue recognised minus direct project costs
- EBITDA: gross margin minus overheads allocation
- Margin percentage: current actual margin % vs original pro-forma margin %
- Trend: margin trajectory — is the project trending better or worse than budget?
- Alerts: if current margin forecast drops >3% below pro-forma → immediate alert to MD/CFO
- Comparison: side-by-side P&L for all active projects — which project is most profitable?

**Why it matters:**
Many developers complete a project and only then discover the margin was half of what they projected. By that time, nothing can be done. This module provides the equivalent of a real-time financial instrument panel — not just a post-mortem.

---

### 11.5 Cash Flow Forecaster

**What it is:**
A forward-looking cash flow model that projects expected inflows (from buyer payment schedules) and outflows (from construction costs, subcontractor payments, overheads) for the next 90 and 180 days — identifying funding gaps before they occur.

**What it does:**
- Inflow projections: based on M10.2 payment schedules (upcoming installments due from buyers) weighted by payment probability (based on historical collection rates per buyer segment)
- Outflow projections: scheduled subcontractor milestone payments (M9.2), material procurement orders (M9.3), upcoming statutory payments (M7.4 payroll, advance taxes), loan repayment schedules
- Net cash position: running balance chart showing projected cash position day-by-day for next 180 days
- Funding gap alerts: when projected cash balance drops below minimum threshold → alert to CFO with gap size and timing
- Scenario modelling: "What if 30% of this month's collections are delayed by 15 days?" → updated cash flow projection
- Bridge loan trigger: when gap is identified 60+ days in advance → automatically drafts a brief for the CFO to approach lender for bridge financing

**Why it matters:**
Construction halts due to cash flow crises are the most damaging events in real estate development — causing delays, RERA penalties, buyer complaints, and reputational damage. This model provides a 60–90 day early warning — enough time to take corrective action.

---

### 11.6 Tally / Accounting Sync Agent

**What it is:**
An automated accounting integration that pushes all financial transactions from the Command Center into Tally Prime (or Zoho Books) with correct ledger mapping — eliminating double-entry and ensuring the accounting system is always current.

**What it does:**
- Transaction types pushed automatically: buyer receipts (each payment collected), demand notes issued (accounts receivable entry), subcontractor payments (project cost entries), material purchases (inventory/cost entries), payroll entries (M7.4 output), commission payments (sales cost entries), advance tax payments
- Ledger mapping: each transaction type is mapped to the correct Tally ledger (configurable per Fortiv's chart of accounts)
- GST mapping: correctly classifies transactions as taxable/exempt, applies correct CGST/SGST/IGST codes, generates GSTR-3B data
- Sync frequency: real-time for high-value transactions (buyer receipts), batch at EOD for operational entries
- Reconciliation report: daily reconciliation report showing transactions pushed to Tally vs source system — any discrepancies flagged
- Error handling: if Tally push fails, transaction is queued and retried — finance team alerted if queue builds up

**Why it matters:**
Most real estate companies have a significant gap between their operations system and accounting system — causing month-end reconciliation nightmares and inaccurate books. This sync ensures accounting is always current, without accountants manually re-entering every transaction.

---

### 11.7 Financial Report Generator

**What it is:**
An automated report generation system that produces all standard finance department reports — monthly MIS, collections report, ageing analysis, project-wise P&L, and cash flow statements — on schedule without manual preparation.

**What it does:**
- Monthly MIS: Revenue billed, collected, outstanding; costs incurred; EBITDA; project-wise summary — auto-generated on 1st of every month for the previous month
- Collections report: detailed collections analysis by project, configuration, payment stage, and salesperson — generated weekly
- Ageing analysis: detailed overdue analysis with buyer contact details, generated weekly
- Project P&L statement: formal P&L per project, generated monthly
- Board pack financials: quarterly financial summary in board presentation format — charts, commentary, KPIs
- Format: PDF reports with Fortiv branding, charts, tables, and commentary
- Distribution: auto-emailed to relevant stakeholders on schedule
- On-demand: any report can be regenerated for any date range on demand

**Why it matters:**
Finance teams in real estate companies spend 30–40% of their time generating reports that are out of date before they're read. This module delivers current, accurate reports automatically — freeing finance staff for analysis rather than compilation.

---

## M12 — AI Brain, Data Layer & Security

> The intelligence layer that connects all 11 modules into one thinking system — sharing data, surfacing cross-module insights, predicting risks, and ensuring every action is secure and compliant.

**Demo wow moment:** The AI Insights feed cycling through observations that no human would notice — cross-module patterns, predictive risk scores, and recommended actions — making the entire system feel alive and intelligent.

---

### 12.1 Unified Customer Intelligence Graph

**What it is:**
A single, comprehensive profile for every lead, buyer, and stakeholder that aggregates all touchpoints and data from every module — creating a 360-degree view of each person's journey with Fortiv Solutions across every interaction, transaction, and communication.

**What it does:**
- Single profile view: one screen shows — lead source and score (M1), all WhatsApp and email conversations (M2), property match scores (M3), deal stage and history (M4), document status (M6), payment history (M10, M11), post-possession NPS (M10.7), referrals made (M12.4)
- Interaction timeline: chronological timeline of every touchpoint — first portal inquiry → chatbot conversation → site visit → negotiation call → booking → demand note → possession → snag → NPS survey
- Relationship mapping: if buyer referred another buyer, shows the referral chain
- Sentiment analysis: analyses WhatsApp conversation tone over time — "Buyer was engaged and positive until Week 8, then responses shortened — potential dissatisfaction flag"
- Next best action: AI recommends the single most impactful next action for each lead/buyer based on their current stage and behaviour pattern
- Privacy controls: access to full profile restricted to authorised roles per M12.5 RBAC

**Why it matters:**
Currently, a buyer's information is scattered across the WhatsApp of 3 different agents, the CRM, a Google Sheet, and someone's email. When an agent leaves, the context is lost. This unified graph makes every buyer's complete history institutional knowledge — available to whoever is handling the relationship.

---

### 12.2 Cross-Module AI Insights Engine

**What it is:**
An analytical AI layer that continuously analyses patterns across all modules — identifying non-obvious correlations, performance anomalies, market signals, and operational risks — and surfaces actionable recommendations to the right person at the right time.

**What it does:**
- Pattern detection examples:
  - "Leads from Facebook who visit the website pricing page within 24 hours of inquiry convert 3.1x higher — suggest prioritising these leads in M1.6"
  - "Site visits conducted on Saturdays have 2.4x booking conversion vs weekdays — suggest shifting open house events to Saturdays"
  - "Units on floors 8–12 in Tower A are taking 40% longer to sell than other floors — pricing or floor plan issue"
  - "Agent Rahul Modi's conversion drops significantly when he handles more than 45 active leads — recommend capping his assignment at 40"
- Insight classification: Sales / Pricing / Operations / Team / Market / Compliance / Finance / Risk
- Confidence scoring: each insight shows the data sample size and confidence level
- Action button: each insight has a "Take Action" button that routes to the relevant module or creates a task for the responsible person
- Insight history: all past insights with outcomes tracked — "This insight was actioned 23 days ago. Result: Tower A Saturday visits increased 40%, bookings increased by 2 in next 30 days."
- Weekly digest: top 5 most actionable insights delivered to management every Monday (feeds into M5.6)

**Why it matters:**
Individual module dashboards show what happened. The insights engine shows why it happened, what pattern it reflects, and what to do about it. This is what makes the Command Center feel like it has a brain — not just a data system.

---

### 12.3 Predictive Deal Risk Scorer

**What it is:**
An AI model that continuously monitors every active deal and scores its abandonment or cancellation risk — allowing agents to intervene proactively before a deal goes cold, rather than discovering it has been lost.

**What it does:**
- Risk signals monitored: days since last buyer contact, decline in WhatsApp message response rate, unanswered calls (3+ in a row), delayed payment beyond due date, negative sentiment in recent conversation, competitive inquiry signals (buyer asked about other developers), stage stagnation (no movement in X days)
- Risk score (0–100): low (0–30), medium (31–60), high (61–100)
- Score breakdown: shows contributing factors and their weights — "High risk because: 11 days no contact (40%), payment overdue by 8 days (35%), asked about Shreenath project last call (25%)"
- Alert system: when deal crosses into High risk → agent alerted with risk score, contributing factors, and recommended intervention
- Intervention suggestions: based on risk type — "No contact: send a WhatsApp with new floor release" / "Price concern: send EMI calculator" / "Competing inquiry: call with scheme offer"
- Manager view: all high-risk deals visible to sales manager for oversight
- Historical accuracy: tracks how many high-risk deals were saved through intervention vs lost — shows model accuracy and intervention ROI

**Why it matters:**
The difference between a deal won and a deal lost is often a single well-timed call or message at the moment of doubt. This model identifies that moment predictively — so agents can make that call before the buyer goes to a competitor.

---

### 12.4 Channel Partner (CP) Portal & Tracker

**What it is:**
A dedicated digital portal for Fortiv Solutions' channel partner (broker) network — where CPs can register deals, track commission status, access marketing materials, view their performance leaderboard, and stay engaged with Fortiv's project updates.

**What it does:**
- CP onboarding: self-registration with RERA broker number verification, GST details, bank account for commission payment
- Deal registration: CP registers a deal by submitting buyer details — system checks for existing lead (if Fortiv already has the lead, flags for CP claim resolution)
- Deal tracking: CP can see their registered deals and stage in the pipeline (Registered → Visit Done → Negotiation → Booked → Commission Payable → Commission Paid)
- Commission visibility: real-time view of commissions earned, approved, and paid per deal
- Leaderboard: monthly ranking of top CPs by deals and revenue — creates healthy competition and recognition
- Resource library: current price lists, brochures, floor plans, project photos, and marketing copy — always current, self-serve
- Event calendar: upcoming site visits, project launches, broker meets — CPs register directly
- Performance alerts: CP receives instant notification when their registered deal moves stage

**Why it matters:**
Channel partners are responsible for 40–60% of real estate sales in India. They give their loyalty to developers who make their job easiest. A professional, transparent CP portal — where brokers can self-serve and trust that their commission is tracked — is one of the most powerful broker loyalty tools available.

---

### 12.5 Role-Based Access Control (RBAC)

**What it is:**
A granular permission management system that controls exactly what each user can see and do in the Command Center — based on their role — ensuring sensitive data is accessible only to authorised personnel.

**What it does:**
- Role definitions (configurable): Sales Agent / Senior Agent / Sales Manager / Marketing / Finance / HR / Project Team / C-Suite / Channel Partner / Buyer / System Admin
- Permission granularity per role:
  - **Sales Agent:** can see and edit their own leads and deals only; cannot see financials or HR data
  - **Sales Manager:** full visibility of team leads, deals, and performance; no financial approvals
  - **Finance:** full financial modules (M11), read access to M4 pipeline; no HR data
  - **HR:** full M7 access; no financial or sales data
  - **C-Suite:** full read access to all modules; approval authority for high-value actions
  - **Channel Partner:** own registered deals and commissions only (M12.4); no internal data
  - **Buyer:** own portal data only (M10.1)
- Audit log: every data access and action recorded with user, timestamp, and action
- Session management: auto-timeout after inactivity, MFA for high-privilege roles
- Role change workflow: role changes require manager approval and are logged

**Why it matters:**
As the platform handles sensitive buyer KYC, financial, and HR data, it becomes a significant data security and privacy liability. RBAC ensures agents cannot access competitor lead lists, finance staff cannot view HR payroll, and buyers can only see their own data — essential for DPDP Act compliance.

---

### 12.6 DPDP Act Compliance Layer

**What it is:**
A dedicated data privacy and compliance management module that ensures Fortiv Solutions' use of personal data complies with India's Digital Personal Data Protection (DPDP) Act 2023 — including consent management, data retention, and data subject rights.

**What it does:**
- Consent capture: records explicit consent from every lead and buyer at point of data collection — "I consent to Fortiv Solutions contacting me about property inquiries" — with timestamp and channel
- Consent management: maintains consent status per individual — can view, update, or withdraw consent
- Consent withdrawal: when a person withdraws consent → system flags their record, stops all automated communications (WhatsApp, email, SMS), and alerts their assigned agent
- Data retention policy: defines retention periods per data category — leads not converted: 2 years / active buyers: 7 years post-registration / HR records: as per statutory requirement
- Auto-deletion: data approaching retention limit is flagged for review and deletion per policy
- Data subject requests: buyer/lead can request access to their data (what Fortiv holds), correction, or deletion — system compiles response within 7 days
- Audit trail: complete log of all personal data processing activities for regulatory defensibility
- Breach protocol: if data breach detected → automated incident report generated, DPA notification prepared within 72-hour DPDP Act requirement

**Why it matters:**
The DPDP Act 2023 imposes significant penalties for non-compliance — up to ₹250 crore per violation. Real estate companies are specifically high-risk because they handle sensitive personal data (income, ID documents, financial transactions) at scale. This module is the compliance shield.

---

### 12.7 System Health & Uptime Dashboard

**What it is:**
A real-time operational monitoring dashboard that tracks the health of every module, workflow, integration, and AI agent in the Command Center — alerting the technical team immediately when anything fails, so issues are resolved before they impact business operations.

**What it does:**
- Module status: live status for all 12 modules and their automation workflows — Active / Degraded / Down
- Integration health: monitoring of all external integrations — WhatsApp API, portal APIs, CRM sync, Tally sync, KYC APIs, e-sign platform — with uptime percentage and last successful sync time
- Workflow monitoring: all n8n/automation workflows showing: last run time, last run status (success/failure), run count today, failure rate
- AI agent health: for each AI agent, shows: average response time, success rate, and queue depth
- Alert configuration: define alert thresholds — if WhatsApp API response time >5 seconds → alert; if lead scoring failure rate >5% → alert
- Incident log: history of all incidents with root cause and resolution time
- Monthly uptime report: SLA performance report showing uptime % per module and integration
- Pulsing live view: a dashboard screen showing all systems with green/amber/red indicators pulsing in real time — the "mission control" visual

**Why it matters:**
If the WhatsApp chatbot goes down at 9pm on a Sunday, 50 leads could go unresponded by Monday morning. If the CRM sync breaks, bookings could be double-counted. The system health dashboard ensures nothing fails silently — every issue is detected and resolved before it costs a deal.

---

## Demo Build Prompts

> Copy these prompts directly into Claude to build each module's demo screen.

### Master Prompt (Full App)
Use the file `Fortiv_RE_AI_Command_Center_Prompt.md` — paste the MASTER PROMPT section into Claude with "render in Artifacts" at the end.

### Quick Module Prompts

**M1 — Lead Scoring Live Feed:**
Build a live lead scoring dashboard for Fortiv Solutions' Real Estate AI Command Center. Show 12 Indian buyer leads (Rajesh Patel, Priya Shah, Amit Desai etc.) with source (99acres/Facebook/WhatsApp), AI score 0-100 with animated color bar, intent label (Hot/Warm/Cold), property interest, budget in ₹ lakhs, and last activity. Scores update every 3 seconds. Filter tabs: All/Hot/Warm/Cold. Top stats: 47 total leads, 12 hot, avg score 68. Dark sidebar, navy #1A3C5E primary, recharts donut for source split. React app.

**M2 — WhatsApp Chatbot:**
Build an authentic WhatsApp conversation simulator for Fortiv Solutions. Green header #25D366, contact "Fortiv AI Assistant". Auto-play a qualifying conversation with buyer Rajesh Patel — 11 messages covering budget, location preference (Vesu), timeline, property recommendation (Fortiv Greenview Heights), and site visit booking (Saturday 11am confirmed ✓). Typing indicators between messages, 1.5–3 second realistic delays, blue double-tick read receipts. Right side: AI Qualification Summary filling in as conversation progresses. Replay Demo button. React app.

**M4 — Sales Pipeline Kanban:**
Build a Kanban sales pipeline for Fortiv Solutions Real Estate Command Center. 6 columns: Inquiry | Site Visit Scheduled | Visited | Negotiation | Booking | Registered. 15 deal cards with Indian buyer names, property details (Fortiv Greenview Heights / Skyline Residences), values in ₹ lakhs, agent names, days in stage, urgency dots (green/amber/red). AI banner: "3 deals idle 8+ days in Negotiation." Pipeline stats: ₹4.2Cr total, ₹1.8Cr closed this month. Click card to open side panel with deal history and next action. React + recharts.

**M9 — Construction Dashboard:**
Build a construction intelligence dashboard for Fortiv Greenview Heights project (240 units, G+14, Surat). Include: milestone timeline (Land Acquisition ✓ through Possession Dec 2026 with % complete per phase), 6 site photo cards with AI tags (Tower A Floor 8, Podium Level etc.), statutory approvals table (RERA ✓, RERA Q1 Report due in 8 days in amber, Fire NOC pending in red), cost donut chart (₹28.4Cr budget, ₹16.2Cr spent), possession countdown 571 days. Amber #E8A838 accent, navy primary. React app.

**M11 — Collections Dashboard:**
Build a CFO-level collections dashboard for Fortiv Solutions. Show: Total Billed ₹24.6Cr | Collected ₹18.2Cr (74%) | Outstanding ₹6.4Cr. Monthly collections bar chart Oct 2024–Mar 2025 with ₹3Cr target line (green bars = above target). Aging buckets table (0-30 days ₹2.1Cr, 31-60 ₹2.8Cr, 60+ ₹1.5Cr). Top 5 overdue accounts with buyer names, units, amounts, days overdue, Send WhatsApp Reminder button per row. Project P&L: Greenview Heights 28% margin, Skyline 31%, Business Park 24%. All amounts in ₹ Indian format. JetBrains Mono for numbers. React + recharts.

**M12 — AI Brain:**
Build the AI Brain command view for Fortiv Solutions Real Estate AI Command Center. Show: (1) simulated customer graph with SVG nodes (Lead Source, Agent, Property, Documents, Payments, WhatsApp — connected to central buyer node); (2) live AI insights feed cycling every 4 seconds through 8 insights with category badges (Sales/Pricing/Team/Risk/Compliance/Finance) and Take Action buttons; (3) predictive deal risk table with 6 deals scored 0-100 (color coded green/amber/red) with risk factors; (4) system health grid showing all 12 modules with pulsing green/amber status dots and uptime %; (5) animated data counters (leads tracked: 1,247; automations run: 8,234 etc.). Dark background #0D1B2A, glowing #2E86AB accents. React app.

---

## Brand & Tech Constants

```
Company:            Fortiv Solutions
Website:            fortivsolutions.in
Product:            Real Estate AI Command Center
Tagline:            India's First End-to-End Real Estate AI Operating System
Version:            2.0 (12 Modules, 75 Sub-Modules)
Market:             India — Gujarat focus (Surat, Vadodara)

Brand Colors:
  Primary:          #1A3C5E  (deep navy)
  Accent:           #2E86AB  (electric blue)
  Success:          #1D9E75  (teal green)
  Warning:          #E8A838  (amber)
  Danger:           #D85A30  (coral red)
  Dark bg:          #0D1B2A  (near black)
  Light bg:         #F5F6FA  (off white)
  Card bg:          #FFFFFF

Typography:
  Display:          Playfair Display / DM Serif Display
  Body/UI:          DM Sans / Plus Jakarta Sans
  Data/Numbers:     JetBrains Mono

Demo Projects:
  Project 1:        Fortiv Greenview Heights, Vesu, Surat
                    2BHK/3BHK · ₹45L–₹85L · RERA Registered · Dec 2026 possession
  Project 2:        Fortiv Skyline Residences, Gotri, Vadodara
                    3BHK/4BHK · ₹90L–₹1.8Cr · Under Construction
  Project 3:        Fortiv Business Park, Althan, Surat
                    Commercial · ₹1.2Cr–₹4.5Cr · Ready possession

Demo Buyer Names:
  Rajesh Patel, Priya Shah, Amit Desai, Sunita Mehta, Vikram Joshi,
  Anita Gujarati, Deepak Trivedi, Kavita Agarwal, Suresh Nair, Pooja Sharma,
  Mahesh Khanna, Ritu Bhandari, Arjun Malhotra, Nisha Verma, Sanjay Kapoor

Demo Agent Names:
  Priya Rana (Senior Agent), Rahul Modi (Sales Manager),
  Ankit Shah (Agent), Meera Patel (Agent), Kiran Desai (Team Lead)

Portal Sources:
  99acres, MagicBricks, Housing.com, NoBroker, Facebook Lead Ads,
  Google Ads, WhatsApp, Website, Referral, JustDial

Target Localities — Surat:
  Vesu, Adajan, Pal, Althan, Dumas Road, Katargam, Piplod, Palanpur

Target Localities — Vadodara:
  Alkapuri, Gotri, Manjalpur, Waghodia Road, Kalali

Currency:           ₹ (Indian Rupee) — always use lakhs (L) and crores (Cr)
Date Format:        DD/MM/YYYY
Financial Period:   Q1 2025 (Jan–Mar 2025)
Languages:          English (primary) · Hindi · Gujarati

Compliance:
  RERA:             Gujarat RERA compliant
  KYC:              Aadhaar + PAN verification
  Privacy:          DPDP Act 2023 compliant
  Accounting:       Tally Prime / Zoho Books integration
  Taxation:         GST, TDS, PF, ESI, Professional Tax (Gujarat)
```

---

*Real Estate AI Command Center by Fortiv Solutions*
*Version 2.0 · 12 Modules · 75 Sub-Modules · India-Ready*
*fortivsolutions.in · Confidential*
