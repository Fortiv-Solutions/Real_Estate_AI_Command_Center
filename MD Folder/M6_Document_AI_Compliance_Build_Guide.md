# M6 — Document AI & Compliance
### Real Estate AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** Automates every document in the real estate transaction lifecycle — from agreement generation to RERA compliance — eliminating manual paperwork and legal risk.

**Document Type:** Module Build Guide & Parameter Reference  
**Module Code:** M6  
**Total Sub-Modules:** 6 (6.1 → 6.6)  
**Version:** 2.0  
**Company:** Fortiv Solutions  
**Classification:** Confidential  
**Market:** India — Gujarat Focus (Surat, Vadodara)

---

## Module Overview

### Purpose
Replace manual document preparation, physical KYC collection, and reactive compliance tracking with an **autonomous document intelligence engine** — generating agreements in minutes, extracting data from uploaded documents via OCR, monitoring every RERA deadline proactively, calculating stamp duty with precision, orchestrating e-signature flows end-to-end, and running automated KYC verification before any booking is processed.

### Core Problem Being Solved

| Pain Point | Without M6 | With M6 |
|---|---|---|
| Agreement drafting | 2–3 hours manual preparation, high error risk | AI-generated draft in 3 minutes, zero transcription errors |
| KYC document collection | 45–90 min per buyer, manual data entry | OCR extraction in 2 minutes, auto-mapped to CRM |
| RERA compliance | Deadlines missed, penalties incurred | Proactive alerts 21 days ahead — never miss a filing |
| Stamp duty calculation | Manual calculation errors cause deal friction | Auto-calculated from circle rates with full cost-of-purchase summary |
| Document signing | Multi-meeting, courier, days of delay | Same-day e-signature via WhatsApp — NRI-ready |
| KYC / AML verification | Manual, inconsistent, no audit trail | 90-second automated check against UIDAI, ITD, PMLA — 7-year audit log |

### Demo Wow Moment
**Agreement generated in 3 minutes** from CRM data — all fields merged, amounts in words and numerals, RERA number embedded — followed by an e-signature link dispatched to buyer via WhatsApp, with a real-time signing status tracker updating live as the buyer signs.

---

## Module-Level Parameters

| Parameter | Value |
|---|---|
| Module ID | M6 |
| Module Name | Document AI & Compliance |
| Sub-module Count | 6 |
| Primary Output | Generated legal documents · KYC-verified buyer records · RERA-compliant project filings · E-signed executed agreements |
| Primary Users | Legal / Compliance Team · Sales Agents · Finance Team · Management |
| Document Formats | Word (.docx) · PDF · E-signature envelope |
| Storage | Google Drive (organised folder structure) · Encrypted document vault |
| KYC Verification APIs | UIDAI (Aadhaar) · Income Tax Dept (PAN) · Bank penny drop · PMLA watchlist |
| E-signature Methods | Aadhaar-based e-sign · OTP-based e-sign · DSC (Digital Signature Certificate) |
| Compliance Frameworks | Gujarat RERA · PMLA 2002 · FEMA · IT Act 2000 · DPDP Act 2023 |
| Audit Retention | 7 years (per regulatory requirement) |
| Currency Format | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Demo Financial Period | Q1 2025 (Jan–Mar 2025) |

---

## Module Pages & Navigation Structure

```
M6 — Document AI & Compliance
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M6
│             (Document health KPIs, RERA deadline calendar, recent activity feed)
│
├── [Page 2]  6.1  Agreement Draft Generator
│             (Document type selector, CRM data pull, draft preview, version log)
│
├── [Page 3]  6.2  OCR Document Extractor
│             (Upload interface, extraction results, field mapping, completeness tracker)
│
├── [Page 4]  6.3  RERA Compliance Monitor
│             (Deadline calendar, QPR tracker, document checklist, penalty exposure panel)
│
├── [Page 5]  6.4  Stamp Duty & Registration Calculator
│             (Input form, calculation breakdown, cost-of-purchase summary, PDF export)
│
├── [Page 6]  6.5  E-Signature Workflow
│             (Document queue, signing status tracker, reminder log, executed document vault)
│
└── [Page 7]  6.6  KYC Verification Agent
              (Verification dashboard, check results per buyer, audit trail log, watchlist status)
```

---

## Page 1 — Module Dashboard (M6 Overview)

### Purpose
The landing screen for Module 6. Provides a real-time compliance and document health view — pending agreements, overdue RERA actions, KYC completion status across active buyers, and e-signature queue status.

### Layout
- **Top Stats Bar** (4 KPI cards across)
- **Centre Left:** RERA Deadline Calendar (next 30 days)
- **Centre Right:** Document Activity Feed (today's document events)
- **Bottom:** Quick-access tiles to each sub-module (6.1 → 6.6)

### KPI Cards (Top Stats Bar)

| Card | Metric | Mock Value | Colour |
|---|---|---|---|
| Agreements Pending Review | Drafts generated, awaiting legal sign-off | 3 | Amber #E8A838 |
| RERA Deadlines (Next 30 Days) | Upcoming compliance filing dates | 2 | Coral Red #D85A30 (if <14 days) |
| KYC Completion Rate | Buyers with full KYC verified / total active buyers | 78% | Accent Blue #2E86AB |
| E-Signatures Pending | Documents sent for signing, not yet completed | 4 | Primary Navy #1A3C5E |

### RERA Deadline Calendar (Centre Left)
30-day rolling calendar view highlighting upcoming RERA obligations:

| Deadline | Project | Type | Days Away | Status |
|---|---|---|---|---|
| 31/01/2025 | Greenview Heights | QPR Submission | 11 days | 🔴 Action needed |
| 31/01/2025 | Skyline Residences | QPR Submission | 11 days | 🔴 Action needed |
| 15/02/2025 | Business Park | Advertisement Compliance Review | 26 days | 🟡 Upcoming |
| 31/03/2025 | Greenview Heights | Annual Audit | 70 days | 🟢 Tracked |

### Document Activity Feed (Centre Right)
Real-time scroll of document events today:

- Agreement generated — Rajesh Patel — Sale Agreement — Greenview Heights (10:42 AM)
- OCR extraction complete — Priya Shah — Aadhaar + PAN — 98% completeness (11:15 AM)
- KYC verified — Deepak Trivedi — All checks passed ✓ (11:30 AM)
- E-signature sent — Vikram Joshi — MOU — Pending signing (01:04 PM)
- RERA alert dispatched — Greenview Heights QPR due in 11 days (09:00 AM)

### Sub-Module Quick Access Tiles (Bottom Row)
Six clickable tiles, each showing:
- Sub-module number + name
- One-line description
- Status indicator (Active / Alert / Idle)
- Count of pending actions in this sub-module today

---

## Page 2 — Sub-Module 6.1: Agreement Draft Generator

### What It Is
An **AI-powered document drafting tool** that generates legally structured first drafts of sale agreements, MOUs, allotment letters, payment schedules, and other transaction documents from approved templates and live CRM deal data — in under 3 minutes, ready for legal review.

### Supported Document Types

| Document Type | When Generated | Template Owner |
|---|---|---|
| Sale Agreement | On booking confirmation — after KYC verified | Legal Team |
| Memorandum of Understanding (MOU) | On verbal deal agreement — before full booking | Legal Team |
| Allotment Letter | After booking amount received | Sales Manager |
| Payment Schedule | Alongside Sale Agreement | Finance Team |
| Demand Letter | When payment milestone is due | Finance Team |
| Cancellation Agreement | On buyer-initiated cancellation request | Legal Team |
| Possession Letter | On project completion — before handover | Legal Team |
| Society Transfer Letter | Post-registration — for society membership | Legal Team |

### Document Generation Workflow

| Step | Action | Duration |
|---|---|---|
| 1 | Agent selects document type and linked deal from CRM | Instant |
| 2 | System pulls all variable fields from CRM deal record | 10 seconds |
| 3 | AI merges fields into approved legal template | 30–60 seconds |
| 4 | Amounts auto-converted to words (₹56,00,000 → Rupees Fifty-Six Lakhs Only) | Instant |
| 5 | Draft generated as .docx file, flagged "Draft — Pending Legal Review" | Instant |
| 6 | Legal team receives WhatsApp alert with review link | Instant |
| 7 | Legal team reviews, approves, or requests edits | Manual |
| 8 | On approval — document status changes to "Approved — Ready for Signing" | Instant |
| 9 | M6.5 e-signature workflow triggered automatically | Instant |

### Variable Fields Pulled from CRM

| Field | Source | Example |
|---|---|---|
| `buyer_full_name` | CRM lead record | Rajesh Kumar Patel |
| `buyer_father_name` | KYC record (M6.6) | Suresh Patel |
| `buyer_address` | KYC — Aadhaar extract (M6.2) | 12/A, Panchvati Society, Adajan, Surat — 395009 |
| `buyer_aadhaar_last4` | KYC — masked | XXXX XXXX 4521 |
| `buyer_pan` | KYC — PAN card | ABCDE1234F |
| `property_unit` | CRM deal record | Tower A, Floor 9, Unit 903 |
| `property_description` | Project master | 2BHK Residential Flat, 1,080 sq ft carpet area |
| `project_name` | Project master | Fortiv Greenview Heights |
| `project_rera` | Project master | P01200023XXX |
| `total_consideration` | CRM deal value | ₹56,00,000 (Rupees Fifty-Six Lakhs Only) |
| `booking_amount` | CRM payment record | ₹5,60,000 (Rupees Five Lakhs Sixty Thousand Only) |
| `payment_schedule` | M4 deal payment plan | Milestone-based schedule (6 instalments) |
| `possession_date` | Project master | 31st December 2026 |
| `agreement_date` | System date on approval | 20th January 2025 |
| `stamp_duty_value` | M6.4 calculator output | ₹2,24,000 |
| `registration_fee` | M6.4 calculator output | ₹30,000 |
| `witness_1_name` | Agent entry | Priya Rana |
| `witness_2_name` | Agent entry | Rahul Modi |

### Version Control Log

Every change to a template is tracked:

| Version | Changed By | Change Description | Date | Status |
|---|---|---|---|---|
| v2.3 | Legal — Adv. K. Shah | Updated force majeure clause | 10/01/2025 | Active |
| v2.2 | Legal — Adv. K. Shah | Added RERA amendment clause | 15/12/2024 | Superseded |
| v2.1 | Rahul Modi | Updated possession date format | 01/12/2024 | Superseded |
| v2.0 | Legal — Adv. K. Shah | Base Gujarat RERA-compliant template | 01/10/2024 | Superseded |

### Document Record Parameters

| Field | Description | Example |
|---|---|---|
| `doc_id` | Unique document identifier | `doc_20250120_SA_0023` |
| `doc_type` | Document type enum | Sale Agreement |
| `deal_id` | Linked CRM deal | `deal_20250115_0018` |
| `buyer_name` | Buyer full name | Rajesh Kumar Patel |
| `project` | Project name | Fortiv Greenview Heights |
| `unit` | Property unit | Tower A, Unit 903 |
| `template_version` | Template used | v2.3 |
| `generated_at` | Generation timestamp | 20/01/2025 10:42:17 |
| `generated_by` | Agent who triggered | Priya Rana |
| `review_status` | Draft / Under Review / Approved / Rejected | Under Review |
| `legal_reviewer` | Assigned reviewer | Adv. K. Shah |
| `approved_at` | Approval timestamp | 20/01/2025 14:30:00 |
| `esign_triggered` | M6.5 workflow started | ✓ |
| `storage_path` | Google Drive location | /Greenview Heights/Rajesh Patel/Sale Agreement v1.docx |

### Page Layout
**Top Bar:** Documents generated this month · Pending legal review · Approved this week · Avg generation time  
**Main Area Left (40%):** Input panel — Deal selector (from CRM), Document type selector, Witness names, Generate button  
**Main Area Right (60%):** Document preview — rendered Word-style preview of generated draft, all merged fields highlighted in blue  
**Bottom:** Document log — all generated documents with status badges, review assignment, and action buttons  

### Mock Demo Data — Recent Documents

| # | Document | Buyer | Project | Generated | Status | Reviewer |
|---|---|---|---|---|---|---|
| 1 | Sale Agreement | Rajesh Patel | Greenview Heights | 20/01 10:42 | 🟡 Under Review | Adv. K. Shah |
| 2 | Allotment Letter | Sunita Mehta | Skyline Residences | 19/01 03:15 | ✅ Approved | Rahul Modi |
| 3 | MOU | Vikram Joshi | Business Park | 18/01 11:05 | ✅ Approved — Sent for e-sign | Adv. K. Shah |
| 4 | Payment Schedule | Deepak Trivedi | Greenview Heights | 17/01 02:30 | ✅ Approved | Rahul Modi |
| 5 | Demand Letter | Amit Desai | Greenview Heights | 16/01 10:00 | ✅ Approved — Sent | Rahul Modi |

### Key UI Elements
- **Merged field highlights** — all variable fields shown in blue in the preview; click any field to see source CRM record
- **Amount-in-words auto-display** — amounts shown in both numeral and word form side-by-side in preview
- **"Draft — Pending Legal Review" watermark** — visible across preview until legally approved
- **Legal reviewer assignment** — dropdown to assign to specific legal team member with WhatsApp notification
- **3-minute generation timer** — countdown animation as demo focal point
- **Version selector** — dropdown to switch template version if needed (with change log tooltip)

### Why It Matters
A manually prepared sale agreement takes 2–3 hours with significant risk of data entry errors — wrong amounts, wrong dates, wrong unit descriptions — that can cause legal complications or deal delays. This module generates a complete, accurate draft in 3 minutes with zero transcription errors.

---

## Page 3 — Sub-Module 6.2: OCR Document Extractor

### What It Is
An **Optical Character Recognition and AI extraction system** that scans uploaded buyer documents — Aadhaar, PAN, bank statements, ITRs, property deeds, and more — and extracts structured data directly into CRM fields, with validation and completeness tracking.

### Upload Channels

| Channel | How Document Arrives | Accepted Formats |
|---|---|---|
| WhatsApp | Buyer sends photo/PDF to agent's business number | JPG, PNG, PDF |
| Email | Buyer emails documents to designated inbox | PDF, JPG, PNG |
| Web Portal (M10) | Buyer uploads directly through buyer portal | PDF, JPG, PNG |
| Agent Upload | Agent manually uploads from their device | PDF, JPG, PNG |

### Supported Document Types

| Document | Data Extracted | Validation Check |
|---|---|---|
| Aadhaar Card (front + back) | Full name, DOB, gender, address, Aadhaar number (masked) | Name cross-check vs CRM record |
| PAN Card | Full name, PAN number, DOB | Name + DOB cross-check vs Aadhaar |
| Passport | Full name, passport number, DOB, nationality, expiry | Name cross-check; expiry validity |
| Voter ID | Full name, voter ID number, address, DOB | Name cross-check |
| Bank Statement (6 months) | Account number, IFSC, account holder name, avg balance, income credits | Name cross-check vs KYC |
| Salary Slip (latest 3 months) | Employer name, designation, gross salary, net salary, PF deductions | Employer cross-check vs LinkedIn (M1.5) |
| ITR / Form 16 | Assessment year, total income, tax paid, employer TAN | Name + PAN cross-check |
| Property Title Deed | Property description, survey number, owner names, area | — |
| Encumbrance Certificate | Property address, encumbrance period, lien status | Lien flag if encumbrance found |
| NOC (Society / Builder) | Issuing authority, property address, NOC validity | Expiry date flagged |
| Khata Extract | Property owner name, khata number, area | Name cross-check vs CRM |

### Extraction Result Fields (Per Document)

| Field | Description | Example |
|---|---|---|
| `doc_upload_id` | Upload record identifier | `ocr_20250118_0041` |
| `buyer_id` | Linked CRM buyer record | `lead_20250115_0047` |
| `document_type` | Detected document type | Aadhaar Card |
| `extracted_name` | Name as read from document | RAJESH KUMAR PATEL |
| `extracted_dob` | Date of birth extracted | 14/06/1985 |
| `extracted_address` | Address as on document | 12/A, Panchvati Society, Adajan, Surat |
| `id_number_masked` | ID number — last 4 shown | XXXX XXXX 4521 (Aadhaar) |
| `extraction_confidence` | AI confidence score | 97.4% |
| `name_match_status` | vs CRM lead name | ✓ Match |
| `validation_flag` | Any mismatch or concern | None |
| `mapped_to_crm` | Fields pushed to CRM | ✓ |
| `storage_path` | Encrypted vault location | /Greenview Heights/Rajesh Patel/KYC/Aadhaar.pdf |
| `uploaded_at` | Upload timestamp | 18/01/2025 11:15:42 |
| `processed_at` | OCR completion timestamp | 18/01/2025 11:17:03 |
| `processing_time_sec` | End-to-end OCR duration | 81 seconds |

### Validation Logic

| Validation Check | Pass Condition | Fail Action |
|---|---|---|
| Name match (Aadhaar vs CRM) | ≥90% string similarity | Flag for agent review |
| Name match (PAN vs Aadhaar) | Exact match (ignoring case) | Flag — possible mismatched documents |
| DOB consistency (Aadhaar vs PAN) | Same date of birth on both | Flag — documents may belong to different persons |
| Document expiry (Passport, NOC) | Expiry date > today | Flag — expired document not accepted |
| Encumbrance check | EC shows "Nil encumbrance" | Flag — lien detected, escalate to legal |
| Extraction confidence | >85% | Below 85%: flag for manual review |
| Photo quality | Minimum resolution detected | Below threshold: request re-upload |

### KYC Completeness Tracker

Per buyer, shows which documents have been received and which are pending:

| Document | Rajesh Patel | Priya Shah | Deepak Trivedi | Vikram Joshi |
|---|---|---|---|---|
| Aadhaar Card | ✅ Verified | ✅ Verified | ✅ Verified | ✅ Verified |
| PAN Card | ✅ Verified | ✅ Verified | ✅ Verified | ✅ Verified |
| Bank Statement (6M) | ✅ Received | ⏳ Pending | ✅ Received | ✅ Received |
| Salary Slip / ITR | ✅ Received | ⏳ Pending | ✅ Received | ✅ Received |
| Property NOC | ➖ N/A | ➖ N/A | ➖ N/A | ✅ Received |
| **Completeness Score** | **92%** | **65%** | **92%** | **100%** |

### Pending Document Follow-Up
When documents are pending, system sends automated WhatsApp reminder to buyer:

```
Hi Priya, 🙏

To proceed with your booking at Fortiv Greenview Heights, we need a few
documents from you:

⏳ Pending:
• Bank Statement (last 6 months)
• Latest Salary Slip (any 1 of last 3 months)

You can send them right here on WhatsApp as a photo or PDF.
Any questions — just reply to this message!

— Fortiv Solutions Team
```

### Page Layout
**Top Bar:** Documents processed today · Avg processing time · Extraction accuracy avg · Pending KYC count (active buyers)  
**Main Area Left (45%):** Upload panel — drag-and-drop or select document type + buyer + upload file  
**Main Area Right (55%):** Extraction results — side-by-side view: document image (left) + extracted fields (right) with confidence scores  
**Bottom Left:** Buyer KYC completeness grid — all active buyers with completeness % and pending document list  
**Bottom Right:** Validation flag log — any documents flagged for manual review with reason  

### Mock Extraction Demo (Aadhaar Card)

```
DOCUMENT:  Aadhaar Card (Front + Back)
BUYER:     Rajesh Patel (lead_20250115_0047)
UPLOADED:  18/01/2025 11:15 AM via WhatsApp

EXTRACTED FIELDS:
────────────────────────────────────────
Full Name:      RAJESH KUMAR PATEL          [Confidence: 99.1%] ✓
Date of Birth:  14/06/1985                  [Confidence: 98.7%] ✓
Gender:         Male                        [Confidence: 99.9%] ✓
Address:        12/A, Panchvati Society,    [Confidence: 94.2%] ✓
                Adajan, Surat - 395009
Aadhaar No.:    XXXX XXXX 4521 (masked)     [Confidence: 99.8%] ✓

VALIDATION:
Name vs CRM:    RAJESH KUMAR PATEL ↔ Rajesh Patel → ✓ Match (96.4% similarity)
Mismatch Flag:  None

MAPPED TO CRM:  ✓ All fields updated
STORAGE:        /Greenview Heights/Rajesh Patel/KYC/Aadhaar.pdf
PROCESSING TIME: 81 seconds
```

### Key UI Elements
- **Side-by-side view** — document image left, extracted fields right with individual confidence scores
- **Confidence colour coding** — >95% green, 85–95% amber, <85% red (flag for review)
- **Name match indicator** — prominent tick or flag comparing extracted name vs CRM name
- **"Request Re-upload" button** — one click sends buyer a WhatsApp asking for a clearer document photo
- **KYC completeness progress bar** — per-buyer horizontal bar showing % complete with pending items listed
- **Lien alert banner** — red banner if encumbrance certificate shows active lien — escalates to legal automatically

### Why It Matters
A property transaction requires 15–20 documents per buyer. Manual extraction and data entry takes 45–90 minutes per buyer — with risk of transcription errors that can cause legal or registration complications. OCR extraction takes 81 seconds on average, with 97%+ accuracy, and auto-populates every CRM field with zero manual typing.

---

## Page 4 — Sub-Module 6.3: RERA Compliance Monitor

### What It Is
An **automated compliance management agent** that tracks all Gujarat RERA obligations across every active Fortiv project — monitoring filing deadlines, document completeness, advertisement compliance, regulatory changes, and penalty exposure — so Fortiv never misses a compliance deadline.

### RERA Obligations Tracked

| Obligation Type | Frequency | Authority | Penalty for Non-Compliance |
|---|---|---|---|
| Project Registration | One-time (renewable) | GujRERA | Project cannot be marketed |
| Quarterly Progress Report (QPR) | Every quarter (Jan/Apr/Jul/Oct 31) | GujRERA | Up to 5% project cost |
| Annual Audit Report | Annual | GujRERA | Up to 5% project cost |
| Advertisement Compliance | Per-advertisement | GujRERA | ₹10,000 per violation |
| Possession Certificate Filing | On possession | GujRERA | Penalty + buyer right to withdraw |
| Project Amendment Filing | On any change to approved plan | GujRERA | Up to 5% project cost |
| Completion Certificate | On construction completion | GujRERA / Local Authority | Project cannot be handed over |
| Society Formation | Post-possession | Registrar of Societies | Legal complications for buyers |

### QPR Deadline Alert Cadence

| Alert | Trigger Timing | Recipients | Channel |
|---|---|---|---|
| Early Warning | 21 days before deadline | Compliance Team + Management | WhatsApp + Email |
| Reminder | 14 days before deadline | Compliance Team + Legal | WhatsApp |
| Urgent | 7 days before deadline | Compliance Team + Legal + Directors | WhatsApp + Email |
| Final Alert | 3 days before deadline | All above + Accounts | WhatsApp |
| Day-Of | On deadline day | All above | WhatsApp (7:00 AM) |
| Missed Filing | Day after deadline | Management + Legal | WhatsApp + Email — Escalation |

### Document Compliance Checklist (Per Project)

| Document | Greenview Heights | Skyline Residences | Business Park | Mandatory |
|---|---|---|---|---|
| Title Deed / Ownership Proof | ✅ Filed | ✅ Filed | ✅ Filed | Yes |
| Encumbrance Certificate | ✅ Filed | ✅ Filed | ✅ Filed | Yes |
| Building Plan Approval | ✅ Filed | ✅ Filed | ✅ Filed | Yes |
| Environmental Clearance | ✅ Filed | ⏳ Pending renewal | ✅ Filed | Yes |
| Fire NOC | ✅ Filed | ✅ Filed | ✅ Filed | Yes |
| RERA Registration Certificate | ✅ Valid (exp. Dec 2026) | ✅ Valid (exp. Mar 2027) | ✅ Valid (exp. Jun 2025) | Yes |
| Last QPR Submission | ✅ Oct 2024 | ✅ Oct 2024 | ✅ Oct 2024 | Yes |
| Next QPR Due | ⚠️ 31 Jan 2025 | ⚠️ 31 Jan 2025 | ⚠️ 31 Jan 2025 | Yes |
| Annual Audit | ✅ Mar 2024 | ✅ Mar 2024 | ✅ Mar 2024 | Yes |
| Completion Certificate | ➖ Under construction | ➖ Under construction | ✅ Filed | On completion |

### Penalty Exposure Calculator

When a deadline is at risk, the system calculates and displays financial exposure:

| Project | Obligation | Deadline | Days Overdue (If Missed) | Project Cost | Max Penalty Exposure |
|---|---|---|---|---|---|
| Greenview Heights | QPR | 31/01/2025 | 0 (upcoming) | ₹45 Cr | ₹2.25 Cr |
| Skyline Residences | QPR | 31/01/2025 | 0 (upcoming) | ₹82 Cr | ₹4.1 Cr |
| Business Park | RERA Expiry | 30/06/2025 | — | ₹28 Cr | ₹1.4 Cr |

### Amendment Filing Triggers

When CRM or M9 (construction) data indicates a project change, the system flags it for potential RERA amendment:

| Change Detected | Amendment Required | Alert Sent To |
|---|---|---|
| Possession date pushed back | Yes — Timeline amendment | Legal + Management |
| Floor plan revised | Yes — Layout amendment | Legal Team |
| Amenity removed / substituted | Yes — Specifications amendment | Legal + Management |
| Project cost increase >10% | Yes — Financial amendment | Legal + Finance |
| New tower / phase added | Yes — Project scope amendment | Legal + Management |

### Regulatory Update Monitor

System monitors the Gujarat RERA website for new circulars and notifications:

```
📋 RERA Regulatory Update — 15 January 2025

New Circular: GujRERA/CIRCULAR/2025/001
Summary: QPR submission format updated — new section for EV charging
infrastructure progress mandatory from Q1 2025 onwards.

Impact on Fortiv:
• Greenview Heights: EV charging section required in Jan 2025 QPR ✓ (planned)
• Skyline Residences: EV charging section required — data to be sourced from M9
• Business Park: N/A (commercial — different format)

Action Required: Legal team to update QPR template before 31 Jan 2025 deadline.
Assigned To: Adv. K. Shah
Due: 25/01/2025
```

### Page Layout
**Top Bar:** Active RERA registrations · Next deadline (days away) · QPR status (all projects) · Compliance health score  
**Main Area Left (55%):** Deadline calendar — 90-day rolling calendar with colour-coded deadline markers  
**Main Area Right (45%):** Document compliance checklist — per-project grid showing filed / pending / expiring items  
**Bottom Left:** Penalty exposure panel — live financial exposure calculator per upcoming deadline  
**Bottom Right:** Regulatory update feed — recent RERA circulars with impact summary  

### RERA Compliance Alert (WhatsApp — Sent to Compliance Team)

```
⚠️ *RERA Compliance Alert — Fortiv Solutions*
📅 20 January 2025 | 09:00 AM

*QPR Submission Due in 11 Days*

Projects requiring QPR by 31 January 2025:
1. Fortiv Greenview Heights (P01200023XXX) ⚠️
2. Fortiv Skyline Residences (P01200045XXX) ⚠️
3. Fortiv Business Park (P01200067XXX) ⚠️

Max combined penalty exposure if missed: ₹7.75 Cr

*Action Required:*
• Compile construction progress data with M9 team
• Update EV charging section per Circular 2025/001
• Submit via GujRERA portal by 31 Jan 23:59 IST

Documents needed: Construction photos · Financial summary · Unit sales data

Assigned: Adv. K. Shah + Accounts Team
Next reminder: 24 January 2025

Powered by Fortiv AI Command Center
```

### Key UI Elements
- **90-day deadline calendar** — colour-coded: Red (< 14 days), Amber (14–30 days), Green (> 30 days)
- **Compliance health score** — overall % score (0–100) based on all obligations being on track; shown prominently
- **Penalty exposure cards** — per-project financial exposure shown as ₹ figure with red urgency colouring
- **Amendment trigger badge** — orange badge appears on project card when a change requiring RERA amendment is detected
- **"Mark as Filed" button** — one-click to update filing status after submission; timestamp logged
- **Regulatory update feed** — scrollable feed with impact classification (High / Medium / Low) per circular

### Why It Matters
RERA penalties in Gujarat can reach 5% of total project cost — ₹2–4 Cr on a typical project. More critically, RERA violations attract public buyer complaints that damage brand reputation and directly suppress sales. This module converts compliance from a reactive scramble into a calendar-driven, proactively managed obligation.

---

## Page 5 — Sub-Module 6.4: Stamp Duty & Registration Calculator

### What It Is
An **automated stamp duty and property registration charge calculator** that computes exact transaction costs for any Gujarat property deal — applying current government circle rates, buyer profile concessions, and GST — and generates a complete cost-of-purchase summary for buyers and agents.

### Input Parameters

| Field | Type | Options / Example |
|---|---|---|
| `property_locality` | Dropdown | Vesu, Adajan, Pal, Althan, Gotri, Alkapuri, Waghodia Road... |
| `property_type` | Dropdown | Residential Flat / Residential Plot / Villa / Commercial Office / Commercial Shop |
| `carpet_area_sqft` | Number | 1,080 sq ft |
| `transaction_value` | ₹ | ₹56,00,000 |
| `circle_rate_value` | Auto-fetched | ₹4,800/sq ft (Vesu, Residential) |
| `buyer_profile` | Dropdown | Male / Female / Joint (Male primary) / Joint (Female primary) / Company / NRI |
| `property_purpose` | Dropdown | Self-use / Investment |
| `is_first_purchase` | Toggle | Yes / No |
| `is_affordable_housing` | Toggle | Yes / No (< ₹45L in Gujarat) |
| `under_construction` | Toggle | Yes / No (GST applicability) |
| `possession_status` | Dropdown | Under Construction / Ready Possession |

### Calculation Logic — Step by Step

| Step | Calculation | Example |
|---|---|---|
| 1 | Determine stamp duty base value | Higher of: Transaction Value (₹56L) vs Circle Rate Value (1,080 × ₹4,800 = ₹51.84L) → ₹56L |
| 2 | Apply stamp duty rate | Gujarat residential: 4.9% → ₹56L × 4.9% = ₹2,74,400 |
| 3 | Apply female buyer concession (if applicable) | Female primary: -1% rebate → ₹56L × 3.9% = ₹2,18,400 |
| 4 | Calculate registration fee | 1% of transaction value, max ₹30,000 → ₹30,000 |
| 5 | Add GST (under-construction only) | 5% on base price (excl. land) → Approx ₹1,40,000 (on construction component) |
| 6 | Add maintenance deposit | As per project schedule → ₹54,000 (₹50/sq ft × 1,080) |
| 7 | Add miscellaneous charges | Stamp vendor fee, franking charges → ₹5,000 |

### Gujarat Stamp Duty Rate Matrix

| Buyer Profile | Residential Rate | Commercial Rate | Concession Applied |
|---|---|---|---|
| Male | 4.9% | 4.9% | None |
| Female (primary) | 3.9% | 4.9% | 1% rebate (Gujarat Govt) |
| Joint — Male primary | 4.9% | 4.9% | None |
| Joint — Female primary | 3.9% | 4.9% | 1% rebate on total |
| Company | 4.9% | 4.9% | None |
| NRI (Individual) | 4.9% | 4.9% | None |
| Affordable Housing (<₹45L) | 3.9% | — | Additional 1% rebate |

### Sample Cost-of-Purchase Summary (Mock — Rajesh Patel)

```
╔══════════════════════════════════════════════════════╗
║     COST-OF-PURCHASE SUMMARY — FORTIV SOLUTIONS      ║
╠══════════════════════════════════════════════════════╣
║  Buyer:          Rajesh Kumar Patel (Male)           ║
║  Property:       Tower A, Unit 903 — 1,080 sq ft     ║
║  Project:        Fortiv Greenview Heights, Vesu      ║
║  Status:         Under Construction                  ║
╠══════════════════════════════════════════════════════╣
║  BASE COSTS                                          ║
║  Property Price:              ₹ 56,00,000            ║
║                                                      ║
║  GOVERNMENT CHARGES                                  ║
║  Stamp Duty (4.9%):           ₹  2,74,400            ║
║  Registration Fee:            ₹     30,000           ║
║                                                      ║
║  TAXES                                               ║
║  GST @ 5% (construction):     ₹  1,40,000 (approx)  ║
║                                                      ║
║  OTHER CHARGES                                       ║
║  Maintenance Deposit:         ₹     54,000           ║
║  Miscellaneous:               ₹      5,000           ║
╠══════════════════════════════════════════════════════╣
║  TOTAL COST OF PURCHASE:      ₹ 61,03,400            ║
╠══════════════════════════════════════════════════════╣
║  HOME LOAN REQUIREMENT:       ₹ 55,43,400            ║
║  (After ₹5.6L booking amount)                        ║
╚══════════════════════════════════════════════════════╝
  RERA No: P01200023XXX | Calculated: 20/01/2025
  This is an estimate. Final charges subject to
  Sub-Registrar assessment at time of registration.
```

### EMI Estimation (Home Loan)

| Loan Amount | Interest Rate | Tenure | Monthly EMI |
|---|---|---|---|
| ₹40L (SBI — current rate) | 8.75% p.a. | 20 years | ₹35,400 |
| ₹45L | 8.75% p.a. | 20 years | ₹39,825 |
| ₹50L | 8.75% p.a. | 20 years | ₹44,250 |
| ₹55.4L (full requirement) | 8.75% p.a. | 20 years | ₹49,022 |

### Calculation Record Parameters

| Field | Description | Example |
|---|---|---|
| `calc_id` | Calculation record identifier | `calc_20250120_0019` |
| `buyer_name` | Buyer name | Rajesh Kumar Patel |
| `property_unit` | Property unit reference | Tower A, Unit 903 |
| `transaction_value` | Agreed property price | ₹56,00,000 |
| `circle_rate_value` | Government circle rate value | ₹51,84,000 |
| `stamp_duty_base` | Higher of transaction / circle rate | ₹56,00,000 |
| `stamp_duty_rate` | Rate applied | 4.9% |
| `stamp_duty_amount` | Computed stamp duty | ₹2,74,400 |
| `registration_fee` | Registration charges | ₹30,000 |
| `gst_amount` | GST on construction component | ₹1,40,000 |
| `maintenance_deposit` | Society maintenance deposit | ₹54,000 |
| `misc_charges` | Miscellaneous | ₹5,000 |
| `total_cost_of_purchase` | Sum of all above | ₹61,03,400 |
| `home_loan_requirement` | Total minus booking amount | ₹55,43,400 |
| `pdf_generated` | Summary PDF created | ✓ |
| `calculated_at` | Timestamp | 20/01/2025 12:10:00 |

### Page Layout
**Left Panel (40%):** Input form — all parameters as dropdowns and number fields, with a prominent "Calculate" button  
**Right Panel (60%):** Cost-of-purchase summary card — cleanly formatted breakdown with line items, total, and home loan requirement  
**Bottom Left:** EMI table — three tenure/rate combinations with monthly EMI figures  
**Bottom Right:** Circle rate reference panel — showing current GujRERA circle rates for selected locality  

### Key UI Elements
- **Live calculation update** — summary card recalculates on every input change without needing to click Calculate
- **Female buyer toggle animation** — switching buyer profile to Female visually animates the 1% stamp duty reduction
- **Circle rate comparison note** — shows if transaction value < circle rate (flag: "Registration will be on circle rate value")
- **"Generate PDF" button** — one-click produces formatted cost summary PDF for buyer's home loan application
- **GST note** — tooltip on GST line: "Applicable only on under-construction properties. GST is on construction component, not land value."
- **Affordable housing highlight** — if property value < ₹45L, additional concession badge appears automatically

### Why It Matters
Stamp duty miscalculation — or failing to disclose total cost-of-purchase upfront — is a leading cause of buyer frustration at registration. Buyers discover unexpected costs at the last step, damaging trust and sometimes collapsing completed deals. Transparent, accurate upfront calculation prevents this entirely.

---

## Page 6 — Sub-Module 6.5: E-Signature Workflow

### What It Is
A **digital signature collection and tracking system** that sends approved documents to buyers, sellers, and witnesses for legally valid electronic signature — managing multi-party signing sequences, sending automated reminders, and storing all executed documents securely in Google Drive.

### Trigger Conditions

| Trigger | What Gets Sent for Signing |
|---|---|
| Agreement approved in M6.1 | Sale Agreement / MOU — sent to buyer + seller + witnesses |
| Allotment letter approved | Allotment letter — sent to buyer only |
| Payment schedule approved | Payment schedule — sent to buyer for acknowledgement |
| Cancellation agreement approved | Cancellation deed — sent to buyer + seller |
| Possession letter approved | Possession letter — sent to buyer |
| Manual trigger by agent | Any uploaded document — custom recipient list |

### E-Signature Methods Supported

| Method | Legal Basis | Suitable For | Authentication |
|---|---|---|---|
| Aadhaar-based e-Sign | IT Act 2000 + UIDAI | All individual buyers (Indian residents) | OTP to Aadhaar-linked mobile |
| OTP-based e-Sign | IT Act 2000 | All buyers | OTP to registered mobile |
| DSC (Digital Signature Certificate) | IT Act 2000 | Companies, NRIs, institutional buyers | USB token / PFX file |

### Multi-Party Signing Sequence

| Party | Signing Order | Document Role | Notification Channel |
|---|---|---|---|
| Buyer | 1st | Executant / Purchaser | WhatsApp + Email |
| Co-Buyer (if joint) | 2nd | Co-Executant | WhatsApp + Email |
| Seller / Fortiv Representative | 3rd | Executant / Vendor | Email |
| Witness 1 | 4th | Witness | WhatsApp |
| Witness 2 | 5th | Witness | WhatsApp |

### Signing Status States

| Status | Meaning | Display |
|---|---|---|
| Sent | Invitation dispatched — not yet opened | Blue |
| Opened | Recipient opened the signing link | Amber |
| Signed | Signature completed by this party | Green |
| Declined | Recipient declined to sign | Red — escalate |
| Completed | All parties have signed | Green ✅ — executed |
| Expired | Signing link expired (72-hour limit) | Grey — resend required |

### Automated Reminder Sequence

| Trigger | Recipient | Message | Timing |
|---|---|---|---|
| Document sent | All parties | Signing invitation with link | Immediate |
| Not signed after 24 hours | Unsigned party | Reminder: "Your signature is pending on [document name]" | T+24 hrs |
| Not signed after 48 hours | Unsigned party + Agent | Escalation reminder | T+48 hrs |
| Signed by one party | Next party in sequence | "Your turn to sign — [Buyer name] has signed" | Immediately after prior party signs |
| All parties signed | All parties + Agent | "Document fully executed — copy attached" | Immediate |

### Document Execution Record Parameters

| Field | Description | Example |
|---|---|---|
| `esign_id` | E-signature envelope identifier | `esign_20250120_0017` |
| `doc_id` | Linked document | `doc_20250120_SA_0023` |
| `doc_type` | Document type | Sale Agreement |
| `buyer_name` | Primary buyer | Rajesh Kumar Patel |
| `project` | Property project | Fortiv Greenview Heights |
| `unit` | Property unit | Tower A, Unit 903 |
| `sent_at` | Envelope dispatched | 20/01/2025 14:35:00 |
| `esign_method` | Signature method | Aadhaar-based e-Sign |
| `party_1_status` | Buyer signing status | ✅ Signed — 20/01/2025 15:12 |
| `party_2_status` | Seller signing status | ⏳ Opened — pending |
| `party_3_status` | Witness 1 status | ⏳ Sent — not yet opened |
| `party_4_status` | Witness 2 status | ⏳ Sent — not yet opened |
| `completion_status` | Overall envelope status | In Progress |
| `completed_at` | All-party completion time | — (pending) |
| `executed_doc_path` | Google Drive storage path | /Greenview Heights/Rajesh Patel/Sale Agreement Executed.pdf |
| `executed_copy_sent` | Copy dispatched to all parties | ✗ (pending completion) |
| `legal_validity` | Signature type legal standing | IT Act 2000 — Legally valid |

### Executed Document Storage Structure (Google Drive)

```
Fortiv Solutions/
└── Projects/
    └── Fortiv Greenview Heights/
        └── Buyers/
            └── Rajesh Kumar Patel/
                ├── KYC/
                │   ├── Aadhaar.pdf
                │   ├── PAN.pdf
                │   └── Bank Statement.pdf
                ├── Agreements/
                │   ├── MOU — Executed — 15Jan2025.pdf
                │   ├── Sale Agreement — Draft — 20Jan2025.docx
                │   └── Payment Schedule — Executed — 15Jan2025.pdf
                └── Payments/
                    └── Booking Amount Receipt — 16Jan2025.pdf
```

### Page Layout
**Top Bar:** Documents pending signing · Completed this month · Avg signing time · Expired envelopes (requiring resend)  
**Main Table:** All active signing envelopes — one row per document — with per-party status indicators  
**Side Panel:** Click any row → Expand full signing timeline (party by party, with timestamps)  
**Bottom Left:** Execution timeline — average signing duration from sent to fully executed (benchmark: same day)  
**Bottom Right:** Executed document vault — folder browser for completed, signed documents  

### Mock Demo Data — Active Signing Envelopes

| # | Document | Buyer | Sent | Buyer | Seller | W1 | W2 | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | Sale Agreement | Rajesh Patel | 20/01 14:35 | ✅ Signed | ⏳ Opened | ⏳ Sent | ⏳ Sent | In Progress |
| 2 | MOU | Vikram Joshi | 18/01 11:30 | ✅ Signed | ✅ Signed | ✅ Signed | ✅ Signed | ✅ Completed |
| 3 | Allotment Letter | Sunita Mehta | 19/01 04:00 | ⏳ Opened | ➖ N/A | ➖ N/A | ➖ N/A | Awaiting Buyer |
| 4 | Payment Schedule | Deepak Trivedi | 17/01 02:45 | ✅ Signed | ➖ N/A | ➖ N/A | ➖ N/A | ✅ Completed |

### Key UI Elements
- **Party status dots** — coloured status indicator per party (Blue/Amber/Green/Red) in a compact signing status strip
- **"Resend" one-click** — resend signing link to any party who hasn't opened within 24 hours
- **Signing timeline expand** — click row to see full event log (sent / opened / signed / timestamp per party)
- **Completion animation** — when all parties sign, envelope row turns fully green with "✅ Executed" badge
- **"View Executed Document" button** — opens the final signed PDF directly in-browser
- **Average signing time counter** — "Avg time to full execution: 4.2 hours" metric on dashboard

### Why It Matters
Physical document signing in real estate typically requires 2–3 in-person meetings, courier arrangements, and several days of delay — a serious friction point for NRI buyers or buyers in other cities. E-signature reduces this to same-day remote execution — with full legal validity under the IT Act 2000.

---

## Page 7 — Sub-Module 6.6: KYC Verification Agent

### What It Is
An **automated identity and document verification system** that validates every buyer's KYC documents against authoritative government databases before any booking is processed — ensuring compliance with PMLA, FEMA, and real estate AML norms, with a complete 7-year audit trail.

### Verification Checks Performed

| Check | Database / Method | What Is Verified | Time |
|---|---|---|---|
| Aadhaar Verification | UIDAI API (with buyer consent) | Aadhaar number valid + name matches | 10–15 sec |
| PAN Verification | Income Tax Dept. API | PAN valid + name matches + not deactivated | 5–8 sec |
| PAN–Aadhaar Link | Income Tax Dept. API | PAN is linked to Aadhaar (mandatory from 2024) | 5 sec |
| Bank Account Verification | Penny drop API (₹1 transfer) | Account number + IFSC valid + account holder name matches | 15–20 sec |
| CIBIL Credit Check | CIBIL API (optional — buyer consent required) | Credit score + repayment history | 10 sec |
| PMLA Negative List | PMLA / UNODC watchlist | Buyer name not on money laundering watchlist | 5 sec |
| FEMA Check | RBI / FEMA database | For NRI buyers — FEMA compliance status | 10 sec |
| Politically Exposed Person (PEP) | PEP database | Buyer not a PEP (enhanced due diligence if yes) | 5 sec |
| Total Verification Time | — | All checks combined | ~90 seconds |

### Verification Result Outcomes

| Result | Meaning | Action |
|---|---|---|
| ✅ Verified — Proceed | All checks passed | Booking can proceed — KYC green-lit |
| ⚠️ Flag for Review | One or more soft flags raised | Hold booking — legal/compliance review required |
| ❌ Reject | Critical check failed | Booking blocked — legal escalation |

### Verification Result Codes

| Code | Check | Trigger |
|---|---|---|
| `AADHAAR_INVALID` | Aadhaar | Number format invalid or UIDAI lookup failed |
| `AADHAAR_NAME_MISMATCH` | Aadhaar | Extracted name does not match UIDAI record |
| `PAN_DEACTIVATED` | PAN | PAN marked as deactivated by Income Tax Dept. |
| `PAN_NAME_MISMATCH` | PAN | Name on PAN does not match Aadhaar name |
| `PAN_AADHAAR_NOT_LINKED` | PAN–Aadhaar link | PAN not linked to Aadhaar — non-compliant post-2024 |
| `BANK_ACCOUNT_INVALID` | Bank verification | Penny drop failed — invalid account or IFSC |
| `BANK_NAME_MISMATCH` | Bank verification | Account holder name does not match KYC name |
| `PMLA_WATCHLIST_HIT` | PMLA check | Name match on PMLA / UNODC watchlist |
| `PEP_FLAG` | PEP check | Buyer identified as Politically Exposed Person |
| `FEMA_FLAG` | FEMA (NRI) | NRI buyer with FEMA compliance concern |
| `LOW_CREDIT_SCORE` | CIBIL (optional) | Score below 650 — home loan risk flag (advisory only) |

### Per-Buyer Verification Record

| Field | Description | Example |
|---|---|---|
| `kyc_id` | KYC verification record identifier | `kyc_20250118_0031` |
| `buyer_name` | Buyer full name | Rajesh Kumar Patel |
| `deal_id` | Linked deal | `deal_20250115_0018` |
| `aadhaar_check` | Aadhaar verification result | ✅ Verified |
| `pan_check` | PAN verification result | ✅ Verified |
| `pan_aadhaar_link` | PAN–Aadhaar link status | ✅ Linked |
| `bank_check` | Bank account verification | ✅ Verified |
| `pmla_check` | PMLA watchlist result | ✅ Clear |
| `pep_check` | PEP status | ✅ Not a PEP |
| `cibil_score` | CIBIL score (if consented) | 742 (Good) |
| `fema_check` | FEMA check (NRI only) | ➖ N/A (Resident Indian) |
| `overall_status` | Aggregate result | ✅ Verified — Proceed |
| `flags_raised` | Any flags | None |
| `verified_at` | Verification completion timestamp | 18/01/2025 11:30:41 |
| `verification_duration_sec` | Total time for all checks | 87 seconds |
| `verified_by` | System + reviewer (if manual) | System (automated) |
| `audit_log_id` | Immutable audit record | `audit_20250118_0031` |
| `audit_retention_until` | 7-year audit log expiry | 18/01/2032 |

### Consent Management

Before any database lookup, the system collects and logs explicit buyer consent per IT Act and DPDP Act 2023 requirements:

| Check | Consent Required | Consent Method | Consent Logged |
|---|---|---|---|
| Aadhaar verification | Yes — UIDAI mandate | WhatsApp OTP confirmation or web portal checkbox | ✓ Timestamped |
| PAN verification | Yes — IT Dept. mandate | WhatsApp OTP confirmation | ✓ Timestamped |
| CIBIL check | Yes — optional | Explicit buyer opt-in checkbox | ✓ Timestamped |
| Bank penny drop | Yes — implied consent | Buyer provides account details voluntarily | ✓ Logged |
| PMLA / PEP check | No — regulatory obligation | Not required | N/A |

### Verification Status Dashboard

Summary view across all active buyers:

| Buyer | Aadhaar | PAN | P-A Link | Bank | PMLA | CIBIL | Overall |
|---|---|---|---|---|---|---|---|
| Rajesh Patel | ✅ | ✅ | ✅ | ✅ | ✅ | 742 | ✅ Proceed |
| Priya Shah | ✅ | ✅ | ✅ | ⏳ Pending | ✅ | — | ⚠️ Incomplete |
| Deepak Trivedi | ✅ | ✅ | ✅ | ✅ | ✅ | 681 | ✅ Proceed |
| Vikram Joshi | ✅ | ✅ | ✅ | ✅ | ✅ | — | ✅ Proceed |
| Sunita Mehta | ✅ | ⚠️ Name mismatch | — | ⏳ Pending | ✅ | — | ⚠️ Review |

### Audit Trail Log

Every verification check generates an immutable, timestamped audit record:

```
AUDIT RECORD — kyc_20250118_0031
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Buyer:              Rajesh Kumar Patel
Deal:               Tower A, Unit 903 — ₹56L
Verification Date:  18/01/2025 11:30:41

CHECKS PERFORMED:
11:30:12 — Aadhaar API (UIDAI): RAJESH KUMAR PATEL — PASS ✅
11:30:19 — PAN API (ITD): ABCDE1234F — PASS ✅
11:30:24 — PAN-Aadhaar Link: Linked since 01/06/2022 — PASS ✅
11:30:36 — Bank Penny Drop (SBI XXXX4821): Name match — PASS ✅
11:30:41 — PMLA Watchlist: No match — CLEAR ✅
11:30:44 — PEP Database: No match — CLEAR ✅

OVERALL RESULT: VERIFIED — PROCEED ✅
CONSENT LOGGED: Aadhaar consent OTP confirmed 11:29:58 ✓

Verified By: System (Automated)
Audit Record ID: audit_20250118_0031
Retention Until: 18 January 2032
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMMUTABLE RECORD — DO NOT MODIFY
```

### Page Layout
**Top Bar:** KYC verifications run today · Verified (proceed) · Flagged (review) · Rejected · Avg verification time  
**Main Table:** All active buyers — per-check status dots across all verification dimensions + overall result  
**Side Panel:** Click any buyer row → Full verification record with audit trail log  
**Bottom Left:** Verification result distribution chart — Pie: Verified / Flagged / Rejected  
**Bottom Right:** Flag resolution queue — all flagged verifications with reason code and assigned reviewer  

### Key UI Elements
- **Per-check status dots** — compact coloured indicators (✅ 🟡 ❌) across 6 checks in a single row per buyer
- **"Booking Blocked" red banner** — appears on deal card in M4.5 if KYC status is Flagged or Rejected
- **Consent confirmation badge** — shows consent was collected and timestamped before any lookup ran
- **90-second verification animation** — progress bar cycling through each check as demo focal point
- **Audit trail panel** — click any buyer to see the complete immutable log formatted as above
- **PMLA hit escalation** — if PMLA check returns a match, system immediately locks the deal and alerts Legal + Management

### Why It Matters
Real estate is among the highest-risk sectors for money laundering under PMLA. FEMA regulations apply to NRI transactions. Manual KYC is inconsistent, slow, and produces no audit trail. Automated verification runs 6 checks in 90 seconds, creates a 7-year immutable audit log, and ensures every booking is PMLA-compliant — protecting Fortiv Solutions from regulatory exposure.

---

## Complete Module 6 — Master Parameter Reference

### All Data Fields Across M6

| Field Name | Type | Sub-module | Description |
|---|---|---|---|
| `doc_id` | UUID | 6.1 | Document record identifier |
| `doc_type` | Enum | 6.1 | Sale Agreement / MOU / Allotment Letter / Payment Schedule / Demand Letter / Cancellation / Possession Letter / Society Transfer |
| `deal_id` | UUID | 6.1, 6.5, 6.6 | Linked CRM deal record |
| `buyer_name` | String | All | Full legal name of buyer |
| `buyer_father_name` | String | 6.1 | Father's name (for legal documents) |
| `buyer_address` | Text | 6.1, 6.2 | Full registered address |
| `buyer_aadhaar_last4` | String | 6.1, 6.6 | Last 4 digits of Aadhaar (masked) |
| `buyer_pan` | String | 6.1, 6.6 | PAN number |
| `property_unit` | String | 6.1 | Tower / Floor / Unit reference |
| `property_description` | Text | 6.1 | Legal property description |
| `project_rera` | String | 6.1, 6.3 | RERA registration number |
| `total_consideration` | ₹ | 6.1 | Total transaction value in numerals |
| `total_consideration_words` | Text | 6.1 | Total value in words |
| `booking_amount` | ₹ | 6.1 | Booking / token amount |
| `payment_schedule` | Object | 6.1 | Milestone-based payment plan |
| `possession_date` | Date | 6.1 | Expected possession date |
| `agreement_date` | Date | 6.1 | Date of agreement execution |
| `template_version` | String | 6.1 | Legal template version used |
| `review_status` | Enum | 6.1 | Draft / Under Review / Approved / Rejected |
| `legal_reviewer` | String | 6.1 | Assigned legal reviewer |
| `approved_at` | DateTime | 6.1 | Approval timestamp |
| `storage_path` | String | 6.1, 6.5 | Google Drive file path |
| `doc_upload_id` | UUID | 6.2 | OCR upload record |
| `document_type` | Enum | 6.2 | Aadhaar / PAN / Passport / Bank Statement / ITR / Title Deed / EC / NOC / Khata |
| `extracted_name` | String | 6.2 | Name as extracted from document |
| `extracted_dob` | Date | 6.2 | DOB extracted |
| `extracted_address` | Text | 6.2 | Address extracted |
| `id_number_masked` | String | 6.2 | ID number with masking applied |
| `extraction_confidence` | % | 6.2 | AI extraction confidence score |
| `name_match_status` | Enum | 6.2 | Match / Mismatch / Partial |
| `validation_flag` | Text | 6.2 | Flag reason if any |
| `mapped_to_crm` | Boolean | 6.2 | Fields pushed to CRM record |
| `processing_time_sec` | Number | 6.2 | OCR processing duration |
| `kyc_completeness_pct` | % | 6.2 | % of required documents received |
| `rera_obligation_type` | Enum | 6.3 | QPR / Annual Audit / Registration / Advertisement / Amendment / Possession Certificate / Completion Certificate |
| `rera_deadline` | Date | 6.3 | Filing deadline |
| `days_to_deadline` | Number | 6.3 | Days remaining |
| `filing_status` | Enum | 6.3 | Upcoming / Alert / Overdue / Filed |
| `filed_at` | DateTime | 6.3 | Actual filing timestamp |
| `penalty_exposure` | ₹Cr | 6.3 | Maximum penalty if missed |
| `compliance_health_score` | Number (0–100) | 6.3 | Overall compliance score |
| `regulatory_update_id` | UUID | 6.3 | RERA circular / notification ID |
| `calc_id` | UUID | 6.4 | Stamp duty calculation record |
| `transaction_value` | ₹ | 6.4 | Agreed property price |
| `circle_rate_value` | ₹ | 6.4 | Government circle rate valuation |
| `stamp_duty_base` | ₹ | 6.4 | Stamp duty computation base |
| `stamp_duty_rate` | % | 6.4 | Rate applied |
| `stamp_duty_amount` | ₹ | 6.4 | Computed duty |
| `registration_fee` | ₹ | 6.4 | Registration charges |
| `gst_amount` | ₹ | 6.4 | GST on construction component |
| `maintenance_deposit` | ₹ | 6.4 | Society maintenance deposit |
| `total_cost_of_purchase` | ₹ | 6.4 | All-in purchase cost |
| `home_loan_requirement` | ₹ | 6.4 | Funding required after booking amount |
| `buyer_profile` | Enum | 6.4 | Male / Female / Joint / Company / NRI |
| `esign_id` | UUID | 6.5 | E-signature envelope identifier |
| `esign_method` | Enum | 6.5 | Aadhaar e-Sign / OTP e-Sign / DSC |
| `party_1_status` | Enum | 6.5 | Sent / Opened / Signed / Declined / Expired |
| `party_2_status` | Enum | 6.5 | (same as above) |
| `party_3_status` | Enum | 6.5 | (same as above) |
| `party_4_status` | Enum | 6.5 | (same as above) |
| `completion_status` | Enum | 6.5 | In Progress / Completed / Expired |
| `completed_at` | DateTime | 6.5 | All-party completion timestamp |
| `executed_doc_path` | String | 6.5 | Google Drive path to signed PDF |
| `executed_copy_sent` | Boolean | 6.5 | Executed copy dispatched to all parties |
| `kyc_id` | UUID | 6.6 | KYC verification record |
| `aadhaar_check` | Enum | 6.6 | Verified / Failed / Error |
| `pan_check` | Enum | 6.6 | Verified / Failed / Deactivated |
| `pan_aadhaar_link` | Enum | 6.6 | Linked / Not Linked |
| `bank_check` | Enum | 6.6 | Verified / Failed / Name Mismatch |
| `pmla_check` | Enum | 6.6 | Clear / Hit |
| `pep_check` | Enum | 6.6 | Not a PEP / PEP Identified |
| `cibil_score` | Number | 6.6 | CIBIL credit score (if consented) |
| `fema_check` | Enum | 6.6 | N/A / Compliant / Flag |
| `overall_kyc_status` | Enum | 6.6 | Verified — Proceed / Flag for Review / Reject |
| `flags_raised` | Array | 6.6 | List of result codes (if any) |
| `verification_duration_sec` | Number | 6.6 | Total verification time |
| `consent_logged` | Boolean | 6.6 | Buyer consent recorded and timestamped |
| `audit_log_id` | UUID | 6.6 | Immutable audit record ID |
| `audit_retention_until` | Date | 6.6 | 7-year retention expiry |

---

## Mock Data Constants (Demo-Ready)

### Demo Buyers (KYC & Document Pool)
```
Rajesh Kumar Patel   — Tower A, Unit 903, Greenview Heights — ₹56L — KYC ✅ Verified
Priya Shah           — 3BHK Greenview Heights — ₹78L — KYC ⚠️ Bank pending
Deepak Trivedi       — Tower A, Unit 604, Greenview Heights — ₹52L — KYC ✅ Verified
Vikram Joshi         — Commercial Unit C-202, Business Park — ₹2.1Cr — KYC ✅ Verified
Sunita Mehta         — Tower 1, 3BHK, Skyline Residences — ₹94L — KYC ⚠️ PAN name mismatch
```

### Demo Projects (RERA Reference)
```
Project 1: Fortiv Greenview Heights, Vesu, Surat
           RERA: P01200023XXX | Valid until Dec 2026 | QPR due 31 Jan 2025
           Project cost: ₹45 Cr | Max penalty exposure: ₹2.25 Cr

Project 2: Fortiv Skyline Residences, Gotri, Vadodara
           RERA: P01200045XXX | Valid until Mar 2027 | QPR due 31 Jan 2025
           Project cost: ₹82 Cr | Max penalty exposure: ₹4.1 Cr

Project 3: Fortiv Business Park, Althan, Surat
           RERA: P01200067XXX | Expiry: Jun 2025 (renewal required)
           Project cost: ₹28 Cr | Max penalty exposure: ₹1.4 Cr
```

### Demo Legal Team
```
Adv. K. Shah       — Primary legal reviewer (Sale Agreements, MOUs)
Rahul Modi         — Sales Manager reviewer (Allotment Letters, Payment Schedules)
Compliance Team    — RERA monitoring, KYC escalations
Accounts Team      — Demand Letters, stamp duty calculations
```

### Demo Circle Rates (Surat — Jan 2025)
```
Vesu (Residential):      ₹4,800/sq ft
Adajan (Residential):    ₹4,200/sq ft
Pal (Residential):       ₹3,800/sq ft
Althan (Commercial):     ₹6,200/sq ft
Katargam (Residential):  ₹3,200/sq ft
```

---

## Brand & Design Parameters for M6 UI

### Colour Usage

| Element | Colour | Hex |
|---|---|---|
| Page background | Dark navy | #0D1B2A |
| Card / panel background | White | #FFFFFF |
| Primary brand | Deep navy | #1A3C5E |
| Accent / links | Electric blue | #2E86AB |
| Verified / compliant | Teal green | #1D9E75 |
| Warning / review required | Amber | #E8A838 |
| Alert / non-compliant | Coral red | #D85A30 |
| Neutral / N/A | Medium grey | #9B9B9B |
| Section background | Off white | #F5F6FA |
| Document preview background | Light grey | #F0F2F5 |

### Typography

| Use Case | Font |
|---|---|
| Module title, section heading | Playfair Display or DM Serif Display |
| Body text, labels, UI elements | DM Sans or Plus Jakarta Sans |
| Document preview text (agreement, cost summary) | DM Mono or JetBrains Mono |
| All ₹ figures, timestamps, IDs | JetBrains Mono |

### Key Animations (Demo-Specific)

| Animation | Where | Description |
|---|---|---|
| 3-minute generation countdown | 6.1 | Progress bar fills as agreement draft generates |
| Merged field highlight pulse | 6.1 preview | Blue fields pulse once on document load |
| OCR field-by-field reveal | 6.2 | Extracted fields populate one-by-one as OCR processes |
| Confidence bar fill | 6.2 | Per-field confidence bars animate to final % |
| RERA calendar deadline pulse | 6.3 | Red deadline markers pulse on calendar |
| Penalty exposure counter | 6.3 | ₹ figure increments as days-overdue counter advances (demo) |
| Stamp duty live recalculation | 6.4 | Summary card updates instantly on any input change |
| E-sign party status flip | 6.5 | Status dot flips from Sent → Opened → Signed with animation |
| KYC check-by-check progress | 6.6 | 6 check indicators light up sequentially during 90-sec demo |
| PMLA hit escalation flash | 6.6 | Full-screen red banner if PMLA match detected |

---

## Technical Integration Map for M6

| Sub-module | External APIs / Services | Data Flow Direction |
|---|---|---|
| 6.1 Agreement Draft Generator | CRM (M4.5), Project master DB, Google Drive, WhatsApp Business API, Gemini / GPT-4 | CRM → Template Engine → .docx → Google Drive + Legal review |
| 6.2 OCR Document Extractor | Google Vision API / Tesseract OCR, CRM (M4), Google Drive | Upload → OCR → CRM field update + Vault storage |
| 6.3 RERA Compliance Monitor | Gujarat RERA Portal (web scrape / API), CRM, M9 (construction), WhatsApp Business API, SendGrid | RERA portal → Compliance engine → Alerts → Legal/Management |
| 6.4 Stamp Duty Calculator | Gujarat Govt circle rate DB, CRM (M4.5), SendGrid (PDF export) | CRM deal data → Calculation engine → Summary + PDF |
| 6.5 E-Signature Workflow | E-sign provider (DigiSign / Leegality / NSDL e-Sign), Google Drive, WhatsApp Business API, SendGrid | M6.1 approved doc → E-sign platform → Parties → Google Drive |
| 6.6 KYC Verification Agent | UIDAI API, Income Tax Dept. API, Penny drop API, CIBIL API, PMLA/UNODC watchlist, PEP database | Buyer consent → API checks → KYC record + Audit log |

---

## Summary: M6 at a Glance

| Item | Detail |
|---|---|
| Module | M6 — Document AI & Compliance |
| Sub-modules | 6 (6.1 → 6.6) |
| Total pages | 7 (1 dashboard + 6 sub-module pages) |
| Primary data objects | Generated documents · OCR extraction records · RERA compliance calendar · Stamp duty calculations · E-signature envelopes · KYC verification records |
| Document types supported | 8 (Sale Agreement, MOU, Allotment Letter, Payment Schedule, Demand Letter, Cancellation Agreement, Possession Letter, Society Transfer Letter) |
| KYC checks | 6 automated checks in ~90 seconds (Aadhaar, PAN, PAN–Aadhaar link, Bank, PMLA, PEP) |
| RERA obligations tracked | 8 types across all Gujarat RERA regulatory categories |
| Key output | Zero-paperwork transaction lifecycle — documents generated, signed, verified, and filed automatically |
| Demo focus | Agreement generating in 3 minutes + e-sign dispatched via WhatsApp + 90-second KYC verification |
| Design tone | Dark navy dashboard, document-preview-forward, compliance-alert-driven |
| Compliance | Gujarat RERA · PMLA 2002 · FEMA · IT Act 2000 · DPDP Act 2023 |
| Audit retention | 7 years — all KYC checks immutably logged |
| Currency | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Date format | DD/MM/YYYY |
| Languages | English (primary) · Document Gujarati version available for stamp duty summary |

---

*Real Estate AI Command Center — Module 6 Build Guide*  
*by Fortiv Solutions · fortivsolutions.in*  
*Version 2.0 · Confidential*
