# M3 — Property Intelligence & Valuation
### Real Estate AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** Data-driven pricing, matching and market intelligence — so every agent and buyer has the right numbers at the right moment.

**Document Type:** Module Build Guide & Parameter Reference  
**Module Code:** M3  
**Total Sub-Modules:** 6 (3.1 → 3.6)  
**Version:** 2.0  
**Company:** Fortiv Solutions  
**Classification:** Confidential  
**Market:** India — Gujarat Focus (Surat, Vadodara)

---

## Module Overview

### Purpose
Give agents, buyers, and management access to **accurate property valuations, intelligent property matching, and real-time market data** — eliminating guesswork from every pricing decision, recommendation, and competitive strategy.

### Core Problem Being Solved

| Pain Point | Without M3 | With M3 |
|---|---|---|
| Property pricing | Opinion-based — "I think it's worth ₹58L" | AVM data-backed estimate in seconds |
| Listing appointments | Agent walks in with gut feel | Branded CMA report with comps, charts, map |
| Buyer matching | Generic portal search results | Vector-scored property matches with fit explanation |
| Passive buyer follow-up | Buyer finds the right property on their own | Price alert bot notifies buyer the moment a match appears |
| Market awareness | "I think the market is moving" | Live data: absorption rate, price trends, demand heatmap |
| Competitor pricing | Anecdotal ("heard they cut prices") | Weekly tracked competitor price matrix |

### Demo Wow Moment
**AVM engine running live** — agent types a property address, presses evaluate, and a full valuation summary appears in under 5 seconds, with a comparison to listing price, confidence score, and a downloadable branded PDF.

---

## Module-Level Parameters

| Parameter | Value |
|---|---|
| Module ID | M3 |
| Module Name | Property Intelligence & Valuation |
| Sub-module Count | 6 |
| Primary Output | Valuations, CMA reports, matched property lists, price alerts, market intelligence, competitor data |
| Primary Users | Sales Agents, Sales Manager, Management, Buyers (alerts) |
| Data Sources | Government circle rates, registration data, portal listings, locality demand signals, Google Maps |
| Geographies | Surat (Vesu, Adajan, Pal, Althan, Katargam, Piplod, Palanpur, Dumas Road) · Vadodara (Alkapuri, Gotri, Manjalpur, Waghodia Road, Kalali) |
| Report Export | PDF (branded Fortiv Solutions) |
| Languages | English (primary) · Gujarati (reports) |
| Compliance | Gujarat circle rate data · RERA reference data |
| Currency Format | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Date Format | DD/MM/YYYY |
| Demo Financial Period | Q1 2025 (Jan–Mar 2025) |

---

## Module Pages & Navigation Structure

```
M3 — Property Intelligence & Valuation
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M3
│             (Valuation stats, active alerts, market pulse, quick tools)
│
├── [Page 2]  3.1  Automated Valuation Model (AVM)
│             (Property input form, valuation output card, trend chart, PDF export)
│
├── [Page 3]  3.2  CMA Report Generator
│             (Subject property, comparable selector, report preview, PDF export)
│
├── [Page 4]  3.3  Property Matching Engine
│             (Buyer profile, matched property grid, fit score breakdown)
│
├── [Page 5]  3.4  Price Alert Bot
│             (Active saved searches, alert log, trigger history, notification preview)
│
├── [Page 6]  3.5  Market Intelligence Dashboard
│             (Price trend charts, demand heatmap, absorption rate, inventory analysis)
│
└── [Page 7]  3.6  Competitor Price Tracker
              (Competitor listing table, price change log, weekly intelligence report)
```

---

## Page 1 — Module Dashboard (M3 Overview)

### Purpose
The M3 landing screen — a single view showing the state of property intelligence activity across all six sub-modules: valuations run today, active buyer alerts, market movement summary, and quick-launch tools.

### Layout
- **Top Stats Bar** — 5 KPI cards
- **Left Centre** — Market Pulse strip (3 key market signals)
- **Right Centre** — Active Price Alerts count + recent triggers
- **Bottom** — Quick-access tiles to each sub-module (3.1 → 3.6)

### KPI Cards (Top Stats Bar)

| Card | Metric | Mock Value | Color |
|---|---|---|---|
| AVMs Run Today | Number of valuations generated | 14 | Accent Blue #2E86AB |
| CMA Reports Generated | Reports created this week | 6 | Primary Navy #1A3C5E |
| Active Buyer Alerts | Live saved searches monitoring listings | 48 | Warning Amber #E8A838 |
| Alerts Triggered Today | Matches found and sent | 9 | Success Green #1D9E75 |
| Competitor Updates | Price changes tracked this week | 5 | Danger Red #D85A30 |

### Market Pulse Strip (3 Key Signals)

| Signal | Locality | Value | Trend |
|---|---|---|---|
| Avg Price/Sq Ft | Vesu, Surat | ₹4,850/sq ft | ↑ +3.2% MoM |
| Absorption Rate | Adajan, Surat | 4.8 months | ↓ Tightening |
| Avg Days on Market | Pal, Surat | 38 days | ↓ Faster sales |

### Sub-Module Quick Access Tiles (Bottom Row)
Six tiles, each showing:
- Sub-module number + name
- One-line description
- Icon (calculator / report / matching / bell / chart / eye)
- Activity count today

---

## Page 2 — Sub-Module 3.1: Automated Valuation Model (AVM)

### What It Is
An **AI-powered property valuation engine** that estimates current market value for any residential or commercial property in Surat and Vadodara — using circle rates, registration data, comparable transactions, and locality demand trends — delivering a branded valuation report in under 5 seconds.

### Input Form — All Fields

| Field | Type | Required | Options / Format |
|---|---|---|---|
| `property_address` | Text | ✓ | Full street address |
| `locality` | Dropdown | ✓ | Vesu / Adajan / Pal / Althan / Katargam / Piplod / Palanpur / Dumas Road / Alkapuri / Gotri / Manjalpur / Waghodia Road / Kalali |
| `city` | Dropdown | ✓ | Surat / Vadodara |
| `property_type` | Dropdown | ✓ | Flat / Plot / Villa / Row House / Commercial Office / Commercial Shop |
| `configuration` | Dropdown | ✓ | 1BHK / 2BHK / 3BHK / 4BHK / N/A (Plot/Commercial) |
| `carpet_area_sqft` | Number | ✓ | e.g. 1,050 |
| `builtup_area_sqft` | Number | Optional | e.g. 1,180 |
| `floor_number` | Number | ✓ | 0–30 |
| `total_floors` | Number | ✓ | e.g. 14 |
| `property_age_years` | Number | ✓ | 0 = new / under construction |
| `facing` | Dropdown | Optional | North / South / East / West / NE / NW / SE / SW |
| `parking` | Dropdown | Optional | 1 Covered / 2 Covered / Open / None |
| `amenities` | Multi-select | Optional | Pool / Gym / Club / Lift / Security / Garden |
| `listed_price` | Number (₹L) | Optional | Current asking price if known |
| `purpose` | Dropdown | ✓ | Valuation for Sale / Valuation for Purchase / Loan / Internal |

### Data Sources Processed by AVM

| Source | Data Used | Weight |
|---|---|---|
| Gujarat government circle rates | Minimum government value per sq ft by locality | Medium |
| Registered transaction data | Last 6 months of SRO-registered sales in micro-market | High |
| Portal listing prices | Active listings on 99acres, MagicBricks, Housing.com | Medium |
| Distance to amenities | Schools, hospitals, metro, highway — from Google Maps | Medium |
| Floor premium model | Higher floor = premium, with diminishing returns above F8 | Low |
| Age depreciation model | Property value decline by age and condition | Medium |
| Demand pressure index | Inquiry density in that locality from M3.5 data | Medium |
| Project-specific factor | Fortiv projects carry brand premium / competitor discount | Low |

### AVM Output — All Parameters

| Output Field | Description | Mock Example |
|---|---|---|
| `estimated_value` | Point estimate in ₹ Lakhs | ₹55.4 Lakhs |
| `value_range_low` | Lower bound (−5%) | ₹52.6 Lakhs |
| `value_range_high` | Upper bound (+5%) | ₹58.2 Lakhs |
| `price_per_sqft_estimated` | Derived value per sq ft | ₹5,276/sq ft |
| `locality_avg_price_sqft` | Average ₹/sq ft in same locality | ₹4,980/sq ft |
| `vs_locality_avg` | How this property compares | +5.9% above locality avg |
| `vs_listed_price` | If listing price was entered | "Listed ₹58L → AVM: ₹55.4L — Slightly overpriced by ₹2.6L" |
| `listing_recommendation` | Verdict | Overpriced / Fairly Priced / Underpriced |
| `confidence_score` | Data quality confidence (0–100) | 82% |
| `confidence_label` | Confidence tier | High / Medium / Low |
| `transaction_count_used` | Comparable transactions found | 14 transactions |
| `data_freshness` | Age of most recent transaction | Most recent: 8 days ago |
| `price_trend_6m` | 6-month price movement in locality | +4.2% (Jan–Jun 2025) |
| `price_trend_1y` | 12-month movement | +9.1% (Jul 2024–Jun 2025) |
| `valuation_date` | When AVM was run | 15/01/2025 |
| `report_id` | Unique report reference | AVM-2025-0147 |
| `generated_by` | Agent who ran it | Priya Rana |

### Valuation Output Card Layout

```
╔══════════════════════════════════════════════════════════╗
║  🏠 AVM VALUATION REPORT — Report #AVM-2025-0147        ║
║  2BHK Flat · 1,050 sq ft · Floor 6 · Vesu, Surat        ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  ESTIMATED MARKET VALUE                                  ║
║  ₹ 55.4 Lakhs          ████████████░░  Confidence: 82%  ║
║  Range: ₹52.6L — ₹58.2L                                 ║
║                                                          ║
║  ₹5,276 / sq ft   vs   Locality avg: ₹4,980/sq ft       ║
║  ↑ 5.9% above locality average                           ║
╠══════════════════════════════════════════════════════════╣
║  LISTING COMPARISON                                      ║
║  Listed at: ₹58.0 Lakhs                                  ║
║  AVM Estimate: ₹55.4 Lakhs                               ║
║  ⚠️  Slightly Overpriced by ₹2.6L                        ║
╠══════════════════════════════════════════════════════════╣
║  PRICE TREND — VESU, SURAT                               ║
║  [6-month line chart: ₹4,610 → ₹4,720 → ₹4,810 →        ║
║   ₹4,890 → ₹4,960 → ₹5,010 / sq ft]                     ║
║  6M: +4.2%  ·  12M: +9.1%                               ║
╠══════════════════════════════════════════════════════════╣
║  Data: 14 transactions · Most recent: 8 days ago         ║
║  Valuation Date: 15/01/2025                              ║
║                                                          ║
║  [📄 Download PDF Report]  [📤 Share via WhatsApp]        ║
╚══════════════════════════════════════════════════════════╝
```

### Price Trend Chart (6-Month Line Chart)

| Month | Avg Price/Sq Ft — Vesu | MoM Change |
|---|---|---|
| Aug 2024 | ₹4,610 | — |
| Sep 2024 | ₹4,720 | +2.4% |
| Oct 2024 | ₹4,810 | +1.9% |
| Nov 2024 | ₹4,890 | +1.7% |
| Dec 2024 | ₹4,960 | +1.4% |
| Jan 2025 | ₹5,010 | +1.0% |

### Listing Recommendation Logic

| AVM vs Listed Price | Verdict | Badge Color |
|---|---|---|
| Listed > AVM by > 8% | Significantly Overpriced | #D85A30 Red |
| Listed > AVM by 3–8% | Slightly Overpriced | #E8A838 Amber |
| Listed within ±3% of AVM | Fairly Priced | #1D9E75 Green |
| Listed < AVM by 3–8% | Good Value | #2E86AB Blue |
| Listed < AVM by > 8% | Significantly Underpriced | #1A3C5E Navy |

### PDF Report Sections (Branded)
1. Cover page — Fortiv Solutions logo + property address + date + agent name
2. Valuation summary — estimated value, range, confidence
3. Comparable transactions table (last 6 months)
4. Price trend chart (6-month)
5. Locality overview — avg price, absorption rate, days on market
6. Methodology note — data sources used
7. Agent contact section — name, photo placeholder, phone, email

---

## Page 3 — Sub-Module 3.2: CMA Report Generator

### What It Is
An automated tool that produces **branded Comparative Market Analysis (CMA) reports** for sellers — comparing their property against recent comparable sales and active competing listings to determine the right asking price.

### When It's Used
- Listing appointment: agent presents CMA to a seller to justify the recommended asking price
- Buyer advisory: showing buyer what similar properties sold for vs what they're being asked to pay
- Internal pricing strategy: management reviewing project pricing vs market

### Input Parameters

| Field | Type | Required | Example |
|---|---|---|---|
| `subject_property_address` | Text | ✓ | B-802, Vesu Heights, Vesu, Surat |
| `subject_locality` | Dropdown | ✓ | Vesu |
| `subject_city` | Dropdown | ✓ | Surat |
| `subject_configuration` | Dropdown | ✓ | 2BHK |
| `subject_carpet_sqft` | Number | ✓ | 1,050 |
| `subject_floor` | Number | ✓ | 8 |
| `subject_age_years` | Number | ✓ | 3 |
| `subject_amenities` | Multi-select | Optional | Pool, Gym, Parking |
| `seller_name` | Text | ✓ | Mr. Dinesh Patel |
| `agent_name` | Dropdown | ✓ | Priya Rana |
| `comp_radius_km` | Slider | ✓ | 1.5 km |
| `comp_period_months` | Dropdown | ✓ | 6 months |
| `target_price` | Number (₹L) | Optional | Seller's expectations |
| `report_purpose` | Dropdown | ✓ | Listing Advisory / Purchase Advisory |

### Comparable Selection — Fields per Comp

| Field | Description | Example |
|---|---|---|
| `comp_id` | Reference number | COMP-001 |
| `comp_address` | Address of comparable | A-504, Green Park, Vesu |
| `comp_configuration` | Config | 2BHK |
| `comp_carpet_sqft` | Size | 1,020 sq ft |
| `comp_floor` | Floor | 5 |
| `comp_age_years` | Age | 4 years |
| `comp_sale_price` | Sold price | ₹52.5 Lakhs |
| `comp_price_per_sqft` | Derived | ₹5,147/sq ft |
| `comp_sale_date` | When sold | 10/10/2024 |
| `comp_days_on_market` | Time to sell | 42 days |
| `comp_amenities` | Amenities | Pool, Gym |
| `comp_distance_km` | Distance from subject | 0.6 km |
| `comp_status` | Sold / Active / Expired | Sold |
| `similarity_score` | How similar to subject | 91% |
| `adjustment_notes` | Why price adjusted | "+₹1.2L for 3 extra floors" |

### CMA Output — All Parameters

| Output Field | Description | Mock Example |
|---|---|---|
| `recommended_price_low` | Recommended list price — low end | ₹54.0 Lakhs |
| `recommended_price_mid` | Recommended list price — midpoint | ₹56.5 Lakhs |
| `recommended_price_high` | Recommended list price — high end | ₹59.0 Lakhs |
| `avg_sold_price_sqft` | Comps average ₹/sq ft | ₹5,090/sq ft |
| `subject_implied_price` | Subject at avg comp rate | ₹53.4 Lakhs |
| `comps_count_sold` | Number of sold comps used | 7 |
| `comps_count_active` | Active competing listings | 4 |
| `avg_days_on_market` | How long comps took to sell | 38 days |
| `price_trend_note` | Market direction note | "Vesu prices up 4.2% in last 6 months" |
| `competition_summary` | Active competition note | "4 similar units listed in Vesu: ₹53L–₹62L" |
| `pricing_strategy_note` | Agent's recommendation | "List at ₹57L — competitive, above avg, sells in 30 days" |
| `report_date` | Report generation date | 15/01/2025 |
| `report_id` | Unique ID | CMA-2025-0042 |
| `agent_name` | Agent on report | Priya Rana |
| `agent_message` | Personalised agent note | "Dear Mr. Patel, based on..." |

### Mock CMA Data — 7 Comparable Sales (Vesu, Last 6 Months)

| # | Address | Config | Size | Floor | Age | Sold Price | ₹/Sq Ft | Date Sold | DOM |
|---|---|---|---|---|---|---|---|---|---|
| 1 | A-504, Green Park | 2BHK | 1,020 sq ft | 5 | 4 yrs | ₹52.5L | ₹5,147 | 10 Oct 2024 | 42 days |
| 2 | C-301, Sunrise Towers | 2BHK | 1,080 sq ft | 3 | 2 yrs | ₹55.8L | ₹5,167 | 22 Nov 2024 | 28 days |
| 3 | D-712, Shivalik Heights | 2BHK | 990 sq ft | 7 | 6 yrs | ₹49.2L | ₹4,970 | 05 Sep 2024 | 58 days |
| 4 | B-206, Orchid Residency | 2BHK | 1,100 sq ft | 2 | 1 yr | ₹57.2L | ₹5,200 | 30 Nov 2024 | 19 days |
| 5 | E-901, Vedant Towers | 2BHK | 1,040 sq ft | 9 | 3 yrs | ₹54.0L | ₹5,192 | 14 Dec 2024 | 35 days |
| 6 | F-402, Lotus Heights | 2BHK | 1,060 sq ft | 4 | 5 yrs | ₹50.8L | ₹4,792 | 08 Aug 2024 | 67 days |
| 7 | G-508, Skyview Park | 2BHK | 1,025 sq ft | 5 | 3 yrs | ₹53.5L | ₹5,220 | 02 Jan 2025 | 31 days |

**Average sold price: ₹53.3L · Avg ₹/sq ft: ₹5,098 · Avg DOM: 40 days**

### Mock Active Competition (4 Listings Currently Live in Vesu)

| # | Address | Config | Size | Listed Price | ₹/Sq Ft | Days Listed | Portal |
|---|---|---|---|---|---|---|---|
| 1 | H-602, Palm Springs | 2BHK | 1,070 sq ft | ₹58.0L | ₹5,421 | 12 days | 99acres |
| 2 | J-304, Royal Greens | 2BHK | 1,010 sq ft | ₹53.0L | ₹5,248 | 34 days | MagicBricks |
| 3 | K-705, Emerald Court | 2BHK | 1,090 sq ft | ₹62.0L | ₹5,688 | 8 days | Housing.com |
| 4 | L-201, Tulip Heights | 2BHK | 1,030 sq ft | ₹54.5L | ₹5,291 | 22 days | 99acres |

### CMA Report PDF Sections
1. Cover: Fortiv Solutions logo + "Comparative Market Analysis" + seller name + agent name + date
2. Executive Summary: subject property overview + recommended price range
3. Sold Comparables Table: 7 comps with all fields + colour-coded similarity score
4. Active Competition Table: 4 live listings — "What you're competing against"
5. Price Analysis Chart: Bar chart comparing sold prices of all comps vs subject
6. Market Trend Chart: 6-month price trend for Vesu
7. Recommended Pricing Strategy: narrative + justification
8. Agent's Personalised Message: custom note from agent to seller
9. Agent Contact Card: name, photo placeholder, phone, email, Fortiv logo

---

## Page 4 — Sub-Module 3.3: Property Matching Engine

### What It Is
A **vector-search-powered recommendation system** that intelligently matches buyers to the most relevant available properties based on their stated preferences, browsing behaviour, budget, and revealed priorities — ranked by fit score with plain-language explanation.

### How the Preference Vector Is Built

| Signal | Source | Weight |
|---|---|---|
| Stated budget range | Chatbot qualification (M2.1) | High |
| Stated locality preference | Chatbot qualification | High |
| Stated configuration | Chatbot qualification | High |
| Stated possession timeline | Chatbot qualification | Medium |
| Stated purpose (self-use/invest) | Chatbot qualification | Medium |
| Browsing: pages visited | Website tracking | Medium |
| Browsing: time spent per property | Website tracking | Medium |
| Browsing: units shortlisted | Website / portal | High |
| Browsing: floor plan opened | Website tracking | Medium |
| Price range viewed (browsing) | Website tracking | Medium |
| Past inquiries (same project) | CRM history | High |
| Rejected recommendations | Match feedback | High (negative signal) |
| Saved search criteria | Price alert bot (3.4) | High |

### Property Inventory Fields (Matched Against)

| Field | Description | Example |
|---|---|---|
| `project_name` | Project name | Fortiv Greenview Heights |
| `locality` | Project locality | Vesu, Surat |
| `city` | City | Surat |
| `configuration` | Unit type | 2BHK |
| `carpet_sqft` | Carpet area | 1,050 sq ft |
| `builtup_sqft` | Built-up area | 1,180 sq ft |
| `floor_number` | Floor | 6 |
| `facing` | Unit facing | North |
| `price_lakhs` | Total price | ₹56.5 Lakhs |
| `price_per_sqft` | ₹/sq ft | ₹5,381 |
| `possession_status` | Ready / UC | Under Construction |
| `possession_date` | Expected possession | Dec 2026 |
| `rera_registered` | RERA status | ✓ Yes |
| `rera_number` | Registration number | GJ/RERA/PROJ/XXXXX |
| `amenities` | Available amenities | Pool, Gym, Parking, Club |
| `parking_type` | Parking | 1 Covered |
| `loan_approved_banks` | Approved lenders | SBI, HDFC, ICICI |
| `available_units` | Unsold units | 38 units |
| `project_images` | Photo URLs | [Array of URLs] |

### Match Output — Fields per Matched Property

| Field | Description | Example |
|---|---|---|
| `match_rank` | Ranking (1 = best) | 1 |
| `property_id` | Unit reference | GVH-2BHK-F6-802 |
| `project_name` | Project | Fortiv Greenview Heights |
| `configuration` | Config | 2BHK |
| `locality` | Location | Vesu, Surat |
| `price_lakhs` | Price | ₹56.5 Lakhs |
| `carpet_sqft` | Size | 1,050 sq ft |
| `fit_score` | 0–100 match score | 87 |
| `fit_label` | Score label | Excellent Match |
| `fit_reasons` | Why this scored high | ["Budget fits", "Vesu location preferred", "2BHK matches", "North-facing detected from browsing"] |
| `fit_gaps` | Where it doesn't match | ["Slightly above budget mid-point"] |
| `possession_match` | Matches timeline pref | ✓ Yes |
| `budget_fit` | Within budget? | Within range |
| `buyer_notified` | Alert sent for this match? | ✓ WhatsApp sent |
| `buyer_response` | Did buyer engage? | Opened — no reply |

### Fit Score Classification

| Score | Label | Badge Color | Action |
|---|---|---|---|
| 90–100 | Excellent Match | #1D9E75 Green | Show first — auto-notify buyer |
| 75–89 | Strong Match | #2E86AB Blue | Show in top 3 |
| 55–74 | Good Match | #E8A838 Amber | Show with trade-off note |
| 30–54 | Partial Match | #9B9B9B Grey | Show as alternative |
| 0–29 | Weak Match | #D85A30 Red | Exclude from primary results |

### Conflict Resolution Logic
When buyer preferences conflict, the engine surfaces both options with an explanation:

| Conflict | What Engine Does | Display |
|---|---|---|
| Wants Vesu but budget fits Adajan better | Shows both; flags trade-off | "Adajan option gives you more sq ft for the same price" |
| Wants ready possession but likes UC project | Shows both; highlights UC timeline | "Available Dec 2026 — 23 months away" |
| 2BHK preference but browsed 3BHK pages | Shows 2BHK first; includes 3BHK at bottom | "Based on your browsing, you may also like..." |
| Budget range straddles two segments | Shows from both ranges | "Two options within ₹2L of your max budget" |

### Page Layout
**Left Panel (35%) — Buyer Profile Card**
- Buyer name + AI score
- Preference vector summary (budget / locality / config)
- Browsing signals detected
- "Preference last updated: X hours ago"

**Main Area (65%) — Matched Property Grid**
- Property cards sorted by fit score
- Each card: project photo, name, price, config, fit score ring, fit reasons
- Fit score ring (circular progress indicator — colour by score tier)
- "Why this match?" expandable section

**Bottom Interaction Log**
- Buyer's past responses to recommendations (accepted / rejected / no response)
- Feedback used to recalibrate preference vector

### Mock Buyer Match Results — Rajesh Patel (Score 82)

| Rank | Property | Price | Fit Score | Top Reason |
|---|---|---|---|---|
| 1 | Fortiv Greenview Heights — 2BHK F6 | ₹56.5L | 87 — Excellent | Budget fits, Vesu, 2BHK, North-facing detected |
| 2 | Fortiv Greenview Heights — 2BHK F4 | ₹54.8L | 82 — Strong | Budget fits, Vesu, lower floor preference unclear |
| 3 | Orchid Residency — 2BHK F5 (resale) | ₹55.0L | 74 — Good | Budget fits, Vesu, older property (3 yrs) |
| 4 | Green Park — 2BHK F3 (resale) | ₹52.5L | 66 — Good | Under budget, slightly smaller, good value |
| 5 | Sunrise Towers — 2BHK F8 | ₹58.5L | 58 — Good | Slightly over budget, good locality match |
| 6 | Shivalik Heights — 2BHK F7 (resale) | ₹51.0L | 49 — Partial | Under budget, 6yr old property, lower amenities |

---

## Page 5 — Sub-Module 3.4: Price Alert Bot

### What It Is
An **automated monitoring agent** that watches property listings matching a buyer's saved search profile — across portals and Fortiv's own inventory — and sends an instant WhatsApp or email alert the moment a matching property appears or an existing listing price drops into the buyer's budget.

### Saved Search Profile — All Fields

| Field | Type | Description | Example |
|---|---|---|---|
| `search_id` | UUID | Unique saved search | SA-2025-0148 |
| `buyer_name` | String | Buyer name | Rajesh Patel |
| `buyer_phone` | String | WhatsApp number | +91 98765 43210 |
| `buyer_email` | String | Email | rajesh.patel@gmail.com |
| `city` | Dropdown | City | Surat |
| `localities` | Multi-select | Areas to monitor | Vesu, Adajan |
| `configuration` | Multi-select | Unit types | 2BHK |
| `budget_min` | Number (₹L) | Minimum budget | ₹45 Lakhs |
| `budget_max` | Number (₹L) | Maximum budget | ₹65 Lakhs |
| `possession_preference` | Dropdown | Ready / UC / Any | Any |
| `min_carpet_sqft` | Number | Minimum size | 950 sq ft |
| `property_type` | Dropdown | Flat/Plot/Villa/Commercial | Flat |
| `notification_channel` | Multi-select | WhatsApp / Email / Both | Both |
| `alert_frequency` | Dropdown | Instant / Daily digest | Instant |
| `search_created` | DateTime | When saved | 05/01/2025 |
| `search_expires` | DateTime | Auto-expires after 90 days inactive | 05/04/2025 |
| `last_activity` | DateTime | Last time buyer engaged with alert | 14/01/2025 |
| `alerts_sent` | Number | Total alerts sent | 4 |
| `alerts_opened` | Number | Alerts opened by buyer | 3 |
| `alerts_clicked` | Number | Buyer clicked through | 1 |
| `search_status` | Enum | Active / Paused / Expired | Active |

### Monitoring Sources

| Source | Check Frequency | What's Monitored |
|---|---|---|
| 99acres | Every 4 hours | New listings + price drops |
| MagicBricks | Every 4 hours | New listings + price drops |
| Housing.com | Every 6 hours | New listings + price drops |
| NoBroker | Every 6 hours | New listings + price drops |
| Fortiv own inventory | Real-time | New unit releases + price revisions |
| FSBO listings (from 1.1) | Every 4 hours | Owner-listed matches |

### Alert Trigger Conditions

| Trigger Type | Condition | Alert Sent |
|---|---|---|
| New listing match | New property appears meeting all search criteria | Instant |
| Price drop match | Existing listing drops into buyer's budget range | Instant |
| New Fortiv launch | Fortiv releases new units matching buyer profile | Instant |
| Price revision (own) | Fortiv adjusts price on a matched project | Instant |
| FSBO discovery | FSBO listing found matching buyer criteria | Instant |

### WhatsApp Alert Message Format

```
🏠 NEW MATCH FOUND — Fortiv AI Alert

2BHK Flat — Vesu, Surat
📐 1,180 sq ft (Carpet)
💰 ₹57.5 Lakhs  (₹4,872/sq ft)
🏗️ Under Construction · RERA Registered
📅 Possession: Dec 2026

📊 Fit Score: 84% match for your saved search

[🔍 View Details]  [📅 Book Site Visit]  [❌ Not Interested]

Fortiv Solutions · fortivsolutions.in
Reply STOP to unsubscribe from alerts.
```

### Alert Log — Column Parameters

| Column | Description | Example |
|---|---|---|
| `alert_id` | Unique alert ID | ALT-2025-0348 |
| `buyer_name` | Who received it | Rajesh Patel |
| `trigger_type` | New Listing / Price Drop / Fortiv Launch | New Listing |
| `property_matched` | What was found | 2BHK, Vesu — ₹57.5L |
| `source` | Where found | 99acres |
| `fit_score` | Match score | 84% |
| `alert_sent_time` | When sent | 15/01/2025 14:32 |
| `channel` | WhatsApp / Email | WhatsApp |
| `opened` | Did buyer open it? | ✓ Yes |
| `clicked` | Did buyer click through? | ✓ Yes |
| `buyer_action` | What buyer did | Booked site visit |
| `outcome` | Final result | Visit scheduled — Sat 11am |

### Mock Active Saved Searches (10 Buyers)

| # | Buyer | Localities | Config | Budget | Alerts Sent | Status |
|---|---|---|---|---|---|---|
| 1 | Rajesh Patel | Vesu, Adajan | 2BHK | ₹45–65L | 4 | Active |
| 2 | Priya Shah | Adajan | 3BHK | ₹70–90L | 2 | Active |
| 3 | Amit Desai | Pal, Althan | 2BHK | ₹42–55L | 6 | Active |
| 4 | Sunita Mehta | Vesu | 2BHK | ₹48–65L | 1 | Active |
| 5 | Vikram Joshi | Althan | Plot | ₹80L–1.2Cr | 3 | Active |
| 6 | Anita Gujarati | Adajan, Katargam | 1BHK | ₹28–38L | 0 | Active |
| 7 | Deepak Trivedi | Vesu, Adajan | 3BHK | ₹70–95L | 5 | Active |
| 8 | Kavita Agarwal | Katargam | 2BHK | ₹40–52L | 2 | Active |
| 9 | Mahesh Khanna | Gotri (Vdra) | 3BHK | ₹85L–1.1Cr | 1 | Active |
| 10 | Pooja Sharma | Adajan | 2BHK | ₹48–62L | 3 | Active |

### Mock Alert Log (Today — 9 Alerts Triggered)

| # | Buyer | Trigger | Property | Source | Fit | Opened | Action |
|---|---|---|---|---|---|---|---|
| 1 | Rajesh Patel | New Listing | 2BHK Vesu ₹57.5L | 99acres | 84% | ✓ | Visit Booked |
| 2 | Deepak Trivedi | Price Drop | 3BHK Adajan ₹78L→₹74L | MagicBricks | 79% | ✓ | Brochure Requested |
| 3 | Amit Desai | New Listing | 2BHK Pal ₹49L | Housing.com | 88% | ✓ | Clicked — No Visit |
| 4 | Priya Shah | Fortiv Launch | 3BHK Greenview Ht | Fortiv | 92% | ✓ | Visit Booked |
| 5 | Pooja Sharma | Price Drop | 2BHK Adajan ₹60L→₹56L | NoBroker | 71% | ✓ | Opened — No Action |
| 6 | Sunita Mehta | New Listing | 2BHK Vesu ₹55L | 99acres | 76% | ✗ | Not Opened |
| 7 | Kavita Agarwal | New Listing | 2BHK Katargam ₹46L | JustDial | 83% | ✓ | Brochure Requested |
| 8 | Vikram Joshi | FSBO | Plot Althan ₹95L | FSBO Hunter | 67% | ✓ | No Action |
| 9 | Anita Gujarati | Price Drop | 1BHK Adajan ₹34L→₹31L | Housing.com | 91% | ✗ | Not Opened |

### Alert Performance Metrics (Mock)

| Metric | Value |
|---|---|
| Active saved searches | 48 |
| Alerts sent today | 9 |
| Alert open rate | 77.8% |
| Click-through rate | 55.6% |
| Visits booked via alerts | 2 |
| Avg time — listing found to alert sent | 4 min 12 sec |
| Searches expiring in next 7 days | 3 |

---

## Page 6 — Sub-Module 3.5: Market Intelligence Dashboard

### What It Is
A **live intelligence hub** that aggregates locality-level market data from multiple sources and presents it as an interactive dashboard — giving management, agents, and clients a data-backed view of the Surat and Vadodara real estate market in real time.

### Data Sections in the Dashboard

| Section | Content | Chart Type |
|---|---|---|
| Price Trend | Avg ₹/sq ft by locality over 6–12 months | Line chart |
| Demand Heat Map | Inquiry density by area | Colour-coded map |
| Inventory Analysis | Active listings by locality | Bar chart |
| Absorption Rate | Months of inventory at current pace | Gauge / Table |
| Days on Market | Avg DOM by config + locality | Horizontal bar |
| Rental Yield | Gross rental yield % | Table |
| New Project Launches | Recent launches with pricing | Card grid |
| Weekly Report | Auto-generated Monday morning | PDF download |

### Price Trend Data (Mock — Surat Localities, Jan 2025)

| Locality | Aug 2024 | Sep 2024 | Oct 2024 | Nov 2024 | Dec 2024 | Jan 2025 | 6M Change |
|---|---|---|---|---|---|---|---|
| Vesu | ₹4,610 | ₹4,720 | ₹4,810 | ₹4,890 | ₹4,960 | ₹5,010 | +8.7% |
| Adajan | ₹4,820 | ₹4,900 | ₹4,975 | ₹5,040 | ₹5,110 | ₹5,180 | +7.5% |
| Pal | ₹4,280 | ₹4,340 | ₹4,400 | ₹4,450 | ₹4,500 | ₹4,540 | +6.1% |
| Althan | ₹4,510 | ₹4,580 | ₹4,650 | ₹4,730 | ₹4,810 | ₹4,880 | +8.2% |
| Katargam | ₹3,850 | ₹3,900 | ₹3,940 | ₹3,980 | ₹4,010 | ₹4,050 | +5.2% |
| Piplod | ₹4,100 | ₹4,160 | ₹4,220 | ₹4,280 | ₹4,330 | ₹4,380 | +6.8% |

### Demand Heat Map — Inquiry Density by Locality

| Locality | Weekly Inquiries | Heat Level | Map Color |
|---|---|---|---|
| Vesu | 142 | 🔴 Very High | #D85A30 |
| Adajan | 118 | 🔴 High | #E8A838 |
| Althan | 87 | 🟡 High | #E8A838 |
| Pal | 72 | 🟡 Medium | #2E86AB |
| Piplod | 58 | 🟡 Medium | #2E86AB |
| Katargam | 41 | 🔵 Low | #1D9E75 |
| Palanpur | 28 | 🔵 Low | #1D9E75 |
| Dumas Road | 19 | 🔵 Very Low | #9B9B9B |

### Inventory Analysis — Surat (Active Listings)

| Locality | Total Active | New This Week | Removed (Sold/Expired) | Net Change |
|---|---|---|---|---|
| Vesu | 284 | 18 | 22 | −4 (tightening) |
| Adajan | 312 | 24 | 19 | +5 (growing) |
| Pal | 198 | 12 | 9 | +3 |
| Althan | 156 | 10 | 14 | −4 (tightening) |
| Katargam | 224 | 8 | 6 | +2 |
| Piplod | 145 | 9 | 11 | −2 |

### Absorption Rate by Locality

| Locality | Active Listings | Monthly Sales | Absorption Rate | Market Condition |
|---|---|---|---|---|
| Vesu | 284 | 67 | **4.2 months** | Seller's market |
| Adajan | 312 | 58 | **5.4 months** | Balanced |
| Althan | 156 | 42 | **3.7 months** | Seller's market |
| Pal | 198 | 31 | **6.4 months** | Slightly buyer-favouring |
| Katargam | 224 | 28 | **8.0 months** | Buyer's market |
| Piplod | 145 | 24 | **6.0 months** | Balanced |

> **Interpretation:** < 4 months = Seller's market (prices rising). 4–6 months = Balanced. > 6 months = Buyer's market (prices under pressure).

### Days on Market by Configuration — Vesu (Mock)

| Configuration | Avg DOM Jan 2025 | Change vs 3 Months Ago |
|---|---|---|
| 1BHK | 28 days | −6 days (selling faster) |
| 2BHK | 38 days | −4 days |
| 3BHK | 52 days | −3 days |
| 4BHK | 74 days | +8 days (slowing) |
| Commercial | 94 days | +12 days |
| Plot | 118 days | −15 days (improving) |

### Rental Yield by Locality and Config (Mock — Jan 2025)

| Locality | 2BHK Avg Rent/Month | 2BHK Avg Market Value | Gross Rental Yield |
|---|---|---|---|
| Vesu | ₹18,500 | ₹56L | 3.97% |
| Adajan | ₹20,000 | ₹62L | 3.87% |
| Pal | ₹14,500 | ₹48L | 3.63% |
| Althan | ₹16,000 | ₹52L | 3.69% |
| Katargam | ₹12,000 | ₹40L | 3.60% |
| Piplod | ₹15,000 | ₹50L | 3.60% |

### New Project Launches — Q1 2025 (Mock)

| # | Project | Developer | Locality | Config | Price Range | Total Units | Absorption (week 1) |
|---|---|---|---|---|---|---|---|
| 1 | Sunrise Valley | Rajhans Builders | Althan | 2/3BHK | ₹52–78L | 180 | 12% booked |
| 2 | Silver Heights | Landmark Dev | Adajan | 3/4BHK | ₹85L–1.4Cr | 96 | 8% booked |
| 3 | Green Meadows | Parth Developers | Pal | 2BHK | ₹44–58L | 240 | 5% booked |
| 4 | Urban Square | SNS Group | Katargam | Commercial | ₹80L–2.2Cr | 64 | 3% booked |

### Weekly Automated Market Report
**Auto-generated:** Every Monday at 8:00 AM  
**Delivered to:** Management WhatsApp group + email  
**Format:** PDF download + WhatsApp summary message  

**Report Sections:**
1. Market summary paragraph (AI-generated narrative)
2. Price trend table — all localities vs previous week
3. Top 3 opportunities identified this week
4. Competitor activity summary
5. Fortiv positioning vs market
6. Recommended actions for the week

---

## Page 7 — Sub-Module 3.6: Competitor Price Tracker

### What It Is
An **automated monitoring agent** that tracks competitor developer and broker listings in Fortiv's target micro-markets — detecting price changes, new launches, payment scheme changes, and inventory movements on a weekly basis.

### Competitors Monitored (Mock — Surat)

| # | Competitor Name | Type | Localities Active | Projects Tracked |
|---|---|---|---|---|
| 1 | Shreenath Builders | Developer | Vesu, Adajan | 2 projects |
| 2 | Rajhans Realtors | Developer | Adajan, Althan | 3 projects |
| 3 | Landmark Properties | Developer | Pal, Vesu | 2 projects |
| 4 | Parth Developers | Developer | Pal, Katargam | 1 project |
| 5 | Greenfield Developers | Developer | Althan | 2 projects |
| 6 | SNS Land Group | Developer | Althan, Katargam | 2 projects |

### What Gets Tracked Per Competitor Listing

| Field | Description | Example |
|---|---|---|
| `competitor_name` | Developer / broker name | Shreenath Builders |
| `project_name` | Project being tracked | Shreenath Heights |
| `locality` | Location | Vesu, Surat |
| `configuration` | Unit type | 2BHK |
| `carpet_sqft` | Unit size | 1,020 sq ft |
| `listed_price_current` | Current listed price | ₹54.2 Lakhs |
| `listed_price_previous` | Price 1 week ago | ₹56.0 Lakhs |
| `price_change` | ₹ difference | −₹1.8 Lakhs |
| `price_change_pct` | % change | −3.2% |
| `price_per_sqft` | Current ₹/sq ft | ₹5,314/sq ft |
| `change_type` | Type of change | Price Cut |
| `payment_scheme` | Current scheme | 10:90 Construction Linked |
| `scheme_changed` | New scheme detected? | ✓ Yes — added "No EMI till possession" |
| `portal_listed` | Where listed | 99acres, MagicBricks |
| `total_units` | Project size | 180 units |
| `units_remaining` | Unsold inventory estimate | ~140 units |
| `possession_date` | Claimed possession | Jun 2026 |
| `detected_date` | When change was logged | 15/01/2025 |
| `vs_fortiv_price` | Fortiv's price for same config | ₹57.5L (Fortiv) vs ₹54.2L (Shreenath) |
| `fortiv_premium` | How much more Fortiv charges | +₹3.3L (+6.1%) |
| `premium_justified_by` | Differentiators | RERA, brand, location corner |

### Competitive Positioning Matrix (Mock — Vesu 2BHK, Jan 2025)

| Developer / Project | Price | ₹/Sq Ft | Carpet Sq Ft | RERA | Possession | Fortiv vs This |
|---|---|---|---|---|---|---|
| **Fortiv Greenview Heights** | **₹56.5L** | **₹5,381** | **1,050** | ✓ | **Dec 2026** | — |
| Shreenath Heights | ₹54.2L | ₹5,314 | 1,020 | ✓ | Jun 2026 | +₹2.3L (+4.2%) |
| Orchid Residency (resale) | ₹55.0L | ₹5,250 | 1,048 | ✓ | Ready | +₹1.5L (+2.7%) |
| Green Park Heights | ₹52.0L | ₹5,096 | 1,020 | ✗ | Mar 2026 | +₹4.5L (+8.7%) |
| Palm Springs | ₹58.0L | ₹5,421 | 1,070 | ✓ | Dec 2025 | −₹1.5L (−2.6%) |
| Royal Greens | ₹53.0L | ₹5,248 | 1,010 | ✓ | Ready | +₹3.5L (+6.6%) |

### Price Change Alert Format (WhatsApp / Email to Management)

```
⚡ COMPETITOR PRICE ALERT — Fortiv Intelligence

Shreenath Builders has cut the price of their 2BHK units in Vesu.

Previous Price:   ₹56.0 Lakhs
New Price:        ₹54.2 Lakhs
Change:           −₹1.8L (−3.2%)

Fortiv Greenview Heights (same config): ₹56.5L
Gap vs Shreenath: +₹2.3L (+4.2%)

Possible reasons: Slow absorption, Q1 push, scheme reset.
Recommended action: Review Fortiv pricing strategy for Vesu 2BHK.

[📊 View Full Report]  [📞 Schedule Strategy Call]

— Fortiv Intelligence System · 15/01/2025
```

### New Launch Alert Format

```
🚀 NEW COMPETITOR LAUNCH DETECTED

Developer:    Rajhans Builders
Project:      Sunrise Valley
Locality:     Althan, Surat
Config:       2BHK & 3BHK
Price Range:  ₹52L – ₹78L
Total Units:  180
Launch Date:  12/01/2025
Portal:       99acres, MagicBricks

Impact on Fortiv:
  Fortiv Business Park (Althan) — Commercial only, no direct overlap.
  Watch: if absorption fast → validates Althan demand.

[📊 View Competitor Intel]

— Fortiv Intelligence System · 15/01/2025
```

### Price Change Log (Mock — This Week, 5 Events)

| # | Competitor | Project | Config | Change | Type | Detected | Alert Sent |
|---|---|---|---|---|---|---|---|
| 1 | Shreenath Builders | Shreenath Heights | 2BHK | −₹1.8L (−3.2%) | Price Cut | 15/01/2025 | ✓ Management |
| 2 | Rajhans Realtors | Sunrise Valley | 3BHK | New Launch ₹65–78L | New Launch | 12/01/2025 | ✓ Management |
| 3 | Parth Developers | Green Meadows | 2BHK | Added 10:90 scheme | Scheme Change | 13/01/2025 | ✓ Management |
| 4 | Landmark Properties | Landmark Greens | 3BHK | +₹2.2L (+2.8%) | Price Increase | 10/01/2025 | ✓ Management |
| 5 | Greenfield Developers | Greenfield Towers | 2BHK | −₹0.9L (−1.7%) | Price Cut | 09/01/2025 | ✓ Management |

### Weekly Competitor Intelligence Report Sections
1. Executive Summary — "3 competitors cut prices this week in Vesu/Adajan; 1 raised. New launch in Althan."
2. Full Competitive Pricing Matrix — all tracked projects vs Fortiv
3. Price Change Log — all changes this week with ₹ and % movement
4. New Launches Detected — this week's new projects
5. Fortiv Positioning Analysis — premium / discount vs each competitor with justification
6. Trend Chart — competitor price movement over 12 weeks (multi-line chart)
7. Recommended Actions — pricing, marketing, or project strategy recommendations

---

## Complete Module 3 — Master Parameter Reference

### All Data Fields Across M3

| Field Name | Type | Sub-module | Description |
|---|---|---|---|
| `valuation_id` | UUID | 3.1 | Unique AVM report ID |
| `property_address` | String | 3.1, 3.2 | Full address of subject property |
| `property_type` | Enum | 3.1, 3.2 | Flat / Plot / Villa / Commercial |
| `configuration` | Enum | All | 1BHK / 2BHK / 3BHK / 4BHK / Plot / Commercial |
| `locality` | String | All | Micro-market name |
| `city` | Enum | All | Surat / Vadodara |
| `carpet_area_sqft` | Number | 3.1, 3.2, 3.3 | Carpet area in sq ft |
| `builtup_area_sqft` | Number | 3.1, 3.2 | Built-up area |
| `floor_number` | Number | 3.1, 3.2 | Floor level |
| `total_floors` | Number | 3.1 | Total floors in building |
| `property_age_years` | Number | 3.1, 3.2 | Age of property |
| `facing` | Enum | 3.1, 3.3 | N/S/E/W/NE/NW/SE/SW |
| `parking` | String | 3.1, 3.2, 3.3 | Parking type / count |
| `amenities` | Array | 3.1, 3.2, 3.3 | List of amenities |
| `listed_price_lakhs` | Number | 3.1, 3.2 | Stated asking price |
| `purpose` | Enum | 3.1 | Sale / Purchase / Loan / Internal |
| `estimated_value_lakhs` | Number | 3.1 | AVM point estimate |
| `value_range_low` | Number | 3.1 | −5% bound |
| `value_range_high` | Number | 3.1 | +5% bound |
| `price_per_sqft_estimated` | Number | 3.1 | Derived ₹/sq ft |
| `locality_avg_price_sqft` | Number | 3.1, 3.5 | Locality avg ₹/sq ft |
| `vs_listed_price` | String | 3.1 | Over/under/fairly priced |
| `listing_recommendation` | Enum | 3.1 | Overpriced / Fairly Priced / Underpriced |
| `confidence_score` | Number (%) | 3.1 | AVM confidence |
| `transaction_count_used` | Number | 3.1 | Comps found |
| `data_freshness_days` | Number | 3.1 | Age of most recent transaction |
| `price_trend_6m_pct` | Number | 3.1, 3.5 | 6-month price movement % |
| `price_trend_1y_pct` | Number | 3.1, 3.5 | 12-month movement % |
| `report_id` | String | 3.1, 3.2 | Report reference number |
| `generated_by` | String | 3.1, 3.2 | Agent who ran report |
| `report_date` | Date | 3.1, 3.2 | Date report was generated |
| `cma_id` | UUID | 3.2 | Unique CMA report ID |
| `seller_name` | String | 3.2 | Seller name |
| `comp_radius_km` | Number | 3.2 | Search radius for comps |
| `comp_period_months` | Number | 3.2 | Time window for comps |
| `comp_id` | String | 3.2 | Comparable property ID |
| `comp_sale_price` | Number | 3.2 | Comparable's sold price |
| `comp_sale_date` | Date | 3.2 | When comparable sold |
| `comp_days_on_market` | Number | 3.2 | DOM for comparable |
| `comp_similarity_score` | Number (%) | 3.2 | How similar to subject |
| `recommended_price_low` | Number | 3.2 | CMA low-end recommendation |
| `recommended_price_mid` | Number | 3.2 | CMA midpoint |
| `recommended_price_high` | Number | 3.2 | CMA high-end |
| `comps_count_sold` | Number | 3.2 | Sold comps used |
| `comps_count_active` | Number | 3.2 | Active competing listings |
| `avg_days_on_market` | Number | 3.2, 3.5 | Area avg DOM |
| `match_rank` | Number | 3.3 | Property match ranking |
| `property_id` | String | 3.3 | Inventory unit ID |
| `project_name` | String | 3.3, 3.4, 3.6 | Project name |
| `fit_score` | Number (0–100) | 3.3 | Match fit score |
| `fit_label` | Enum | 3.3 | Excellent / Strong / Good / Partial / Weak |
| `fit_reasons` | Array | 3.3 | Why this scored high |
| `fit_gaps` | Array | 3.3 | Where it doesn't match |
| `preference_vector` | Object | 3.3 | Buyer's full preference model |
| `buyer_feedback` | Enum | 3.3 | Accepted / Rejected / No Response |
| `search_id` | UUID | 3.4 | Saved search ID |
| `budget_min` | Number (₹L) | 3.4 | Min budget |
| `budget_max` | Number (₹L) | 3.4 | Max budget |
| `localities_monitored` | Array | 3.4 | Areas in saved search |
| `notification_channel` | Enum | 3.4 | WhatsApp / Email / Both |
| `alert_frequency` | Enum | 3.4 | Instant / Daily |
| `search_expires` | Date | 3.4 | Auto-expiry date |
| `alerts_sent` | Number | 3.4 | Total alerts sent |
| `alert_open_rate` | Number (%) | 3.4 | % opened |
| `alert_click_rate` | Number (%) | 3.4 | % clicked through |
| `trigger_type` | Enum | 3.4 | New Listing / Price Drop / Fortiv Launch / FSBO |
| `price_alert_sent` | Boolean | 3.4 | Alert was triggered and sent |
| `absorption_rate_months` | Number | 3.5 | Months of inventory |
| `market_condition` | Enum | 3.5 | Seller's / Balanced / Buyer's |
| `rental_yield_pct` | Number | 3.5 | Gross rental yield |
| `weekly_inquiries` | Number | 3.5 | Demand by locality |
| `heat_level` | Enum | 3.5 | Very High / High / Medium / Low |
| `active_listings` | Number | 3.5 | Current inventory count |
| `new_listings_week` | Number | 3.5 | Added this week |
| `removed_listings_week` | Number | 3.5 | Removed this week |
| `competitor_name` | String | 3.6 | Competitor name |
| `listed_price_current` | Number | 3.6 | Current competitor price |
| `listed_price_previous` | Number | 3.6 | Prior week price |
| `price_change_lakhs` | Number | 3.6 | ₹ difference |
| `price_change_pct` | Number | 3.6 | % change |
| `change_type` | Enum | 3.6 | Price Cut / Price Increase / New Launch / Scheme Change |
| `vs_fortiv_price` | Number | 3.6 | Fortiv price for same config |
| `fortiv_premium_lakhs` | Number | 3.6 | Fortiv premium/discount in ₹ |
| `fortiv_premium_pct` | Number | 3.6 | Fortiv premium/discount in % |
| `payment_scheme` | String | 3.6 | Current payment plan |
| `scheme_changed` | Boolean | 3.6 | New scheme detected |
| `units_remaining` | Number | 3.6 | Estimated unsold inventory |

---

## Mock Data Constants (Demo-Ready)

### Demo Buyer Pool (For Matching Engine & Price Alerts)

```
Rajesh Patel    — 2BHK · Vesu/Adajan · ₹45–65L · UC/Ready · Self-use · Score 82
Priya Shah      — 3BHK · Adajan · ₹70–90L · Any · Self-use · Score 79
Amit Desai      — 2BHK · Pal/Althan · ₹42–55L · UC · Investment · Score 74
Sunita Mehta    — 2BHK · Vesu · ₹48–65L · Any · Self-use · Score 71
Vikram Joshi    — Plot · Althan · ₹80L–1.2Cr · Any · Investment · Score 68
Anita Gujarati  — 1BHK · Adajan/Katargam · ₹28–38L · Any · Self-use · Score 61
Deepak Trivedi  — 3BHK · Vesu/Adajan · ₹70–95L · UC · Self-use · Score 88
Kavita Agarwal  — 2BHK · Katargam · ₹40–52L · Ready · Self-use · Score 55
Mahesh Khanna   — 3BHK · Gotri (Vdra) · ₹85L–1.1Cr · Any · Self-use · Score 47
Pooja Sharma    — 2BHK · Adajan · ₹48–62L · Any · Self-use · Score 38
```

### Demo Projects (Inventory for Matching)

```
Fortiv Greenview Heights — Vesu, Surat
  2BHK: 1,050 sq ft · ₹54.8L–₹58.5L (floor-dependent)
  3BHK: 1,380 sq ft · ₹68.0L–₹74.0L
  RERA: GJ/RERA/PROJ/XXXXX · Possession: Dec 2026
  Amenities: Rooftop Pool, Gym, Clubhouse, 2 Lifts, 24/7 Security, Covered Parking

Fortiv Skyline Residences — Gotri, Vadodara
  3BHK: 1,450 sq ft · ₹92L–₹1.12Cr
  4BHK: 1,850 sq ft · ₹1.35Cr–₹1.8Cr
  RERA: GJ/RERA/PROJ/YYYYY · Under Construction

Fortiv Business Park — Althan, Surat
  Commercial Office: 500–2,000 sq ft · ₹1.2Cr–₹4.5Cr
  Ready Possession
```

### Demo Agent Names

```
Priya Rana     — Senior Agent    — Vesu/Adajan territory
Rahul Modi     — Sales Manager   — All AVM + CMA strategy
Ankit Shah     — Agent           — Pal/Katargam territory
Meera Patel    — Agent           — Nurture + alert management
Kiran Desai    — Team Lead       — Vadodara territory
```

---

## Brand & Design Parameters for M3 UI

### Color Usage

| Element | Color | Hex |
|---|---|---|
| Page / app background | Dark navy | #0D1B2A |
| Card / panel background | White | #FFFFFF |
| Primary brand | Deep navy | #1A3C5E |
| Accent / links | Electric blue | #2E86AB |
| Excellent match / success | Teal green | #1D9E75 |
| Good match / warning | Amber | #E8A838 |
| Overpriced / danger | Coral red | #D85A30 |
| Underpriced / info | Electric blue | #2E86AB |
| Section background | Off white | #F5F6FA |
| Heat map — very high demand | Coral red | #D85A30 |
| Heat map — high demand | Amber | #E8A838 |
| Heat map — medium demand | Blue | #2E86AB |
| Heat map — low demand | Green | #1D9E75 |

### Typography

| Use Case | Font |
|---|---|
| Module title, page heading | Playfair Display or DM Serif Display |
| Body text, labels, descriptions | DM Sans or Plus Jakarta Sans |
| All prices, scores, ₹ values, percentages, sq ft | JetBrains Mono |

### Key Animations (Demo-Specific)

| Animation | Sub-module | Description |
|---|---|---|
| AVM result reveal | 3.1 | After "Evaluate" click — valuation card fades in with number tick-up |
| Confidence bar fill | 3.1 | Confidence bar animates from 0 to 82% on load |
| Fit score ring | 3.3 | Circular progress ring fills to match score on card load |
| Alert trigger pulse | 3.4 | New alert rows drop into log with amber highlight |
| Heat map colour fade | 3.5 | Map localities fade from grey to heat colour on load |
| Competitor price change | 3.6 | Price change rows flash red (cut) or green (increase) on first render |
| Line chart draw | 3.5, 3.6 | Price trend line animates left-to-right on load |

---

## Technical Integration Map for M3

| Sub-module | External APIs / Services | Data Flow Direction |
|---|---|---|
| 3.1 AVM | Gujarat SRO data, Circle rate API, Portal listing scraper, Google Maps API | External data → AVM model → Report |
| 3.2 CMA | Same as 3.1 + PDF generator (WeasyPrint/Puppeteer) | Data → Comp selector → PDF |
| 3.3 Matching Engine | CRM (buyer profiles), Inventory DB, Website tracking events, Vector DB | CRM + Inventory → Vector match → Ranked results |
| 3.4 Price Alert Bot | Portal scrapers (99acres/MagicBricks/Housing.com/NoBroker), WhatsApp Business API, Email API, CRM | Scraper → Compare → WhatsApp/Email → CRM log |
| 3.5 Market Intelligence | Portal listing scrapers, Demand tracking (internal), SRO data, Google Maps | External → Aggregation layer → Dashboard |
| 3.6 Competitor Tracker | Portal scrapers, Internal comparison model, WhatsApp API | Scraper → Compare vs Fortiv → Alert → Weekly report |

---

## Summary: M3 at a Glance

| Item | Detail |
|---|---|
| Module | M3 — Property Intelligence & Valuation |
| Sub-modules | 6 (3.1 → 3.6) |
| Total pages | 7 (1 dashboard + 6 sub-module pages) |
| Primary data objects | Valuation reports, CMA reports, buyer match lists, price alerts, market data, competitor records |
| Geographies | Surat (8 localities) + Vadodara (5 localities) |
| Key output | Data-backed valuations, smart property matches, proactive buyer alerts, market and competitor intelligence |
| Demo focus | AVM card reveal animation — property address in → valuation out in under 5 seconds |
| Design tone | Dark navy dashboard · Data-dense · Chart-heavy · Professional |
| Compliance | Gujarat circle rate data referenced · RERA numbers shown accurately |
| Currency | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Date format | DD/MM/YYYY |
| Language | English (primary) · Gujarati (PDF reports) |

---

*Real Estate AI Command Center — Module 3 Build Guide*  
*by Fortiv Solutions · fortivsolutions.in*  
*Version 2.0 · Confidential*
