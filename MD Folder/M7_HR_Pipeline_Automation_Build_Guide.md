# M7 — HR Pipeline Automation
### Real Estate AI Command Center · Fortiv Solutions · fortivsolutions.in

> **Module Tagline:** A complete end-to-end HR automation system — from sourcing talent to processing payroll — designed specifically for the hiring demands of a growing real estate company.

**Document Type:** Module Build Guide & Parameter Reference  
**Module Code:** M7  
**Total Sub-Modules:** 7 (7.1 → 7.7)  
**Version:** 2.0  
**Company:** Fortiv Solutions  
**Classification:** Confidential  
**Market:** India — Gujarat Focus (Surat, Vadodara)

---

## Module Overview

### Purpose
Replace manual HR coordination with an **autonomous talent and workforce engine** that sources candidates proactively, automates the entire hiring cycle, onboards new joiners without manual follow-up, processes payroll with zero calculation errors, and tracks every agent's performance — so HR can focus on people, not paperwork.

### Core Problem Being Solved

| Pain Point | Without M7 | With M7 |
|---|---|---|
| Resume screening | 6–8 hrs to shortlist 100 applications manually | 15 minutes — AI scores and ranks all candidates |
| Interview scheduling | 3–5 email/WhatsApp chains per candidate | Fully automated slot selection, confirmations, reminders |
| Onboarding | Ad-hoc, inconsistent, HR-dependent | Structured automated workflow from offer to Week 1 |
| Payroll processing | 2–3 days per month, error-prone | 2 hours, automated, zero calculation errors |
| Agent performance | Subjective appraisals, disputed incentives | Objective metrics auto-pulled from M4, M2, M1 |
| Talent pipeline | Reactive hiring — role opens, chaos follows | Proactive sourcing — talent pool built in advance |
| HR queries | HR answers same questions 20× a day | Chatbot resolves 80% of employee queries instantly |

### Demo Wow Moment
**Live HR Dashboard** — candidate pipeline flowing stage-to-stage, real-time performance scorecards pulsing for every agent, and payroll processing animation completing in seconds.

---

## Module-Level Parameters

| Parameter | Value |
|---|---|
| Module ID | M7 |
| Module Name | HR Pipeline Automation |
| Sub-module Count | 7 |
| Primary Output | Hired, onboarded, paid, and tracked employees |
| Primary Users | HR Manager, Sales Manager, Director, Finance Team |
| Data Sources | Naukri, LinkedIn, Shine, Indeed, Biometric/GPS Attendance, M4 CRM, M2 Chatbot, M1 Lead data |
| Payroll Integrations | Tally Prime, Zoho Books |
| Statutory Compliance | PF, ESI, Professional Tax (Gujarat), TDS, PAN/Aadhaar KYC |
| Languages | English, Hindi, Gujarati |
| Calendar Integration | Google Calendar — interview scheduling |
| Communication | WhatsApp Business API + Email for all candidate/employee comms |
| Compliance | DPDP Act 2023 · Labour Laws · Gujarat Shops & Establishments Act |
| Currency Format | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Demo Financial Period | Q1 2025 (Jan–Mar 2025) |

---

## Module Pages & Navigation Structure

```
M7 — HR Pipeline Automation
│
├── [Page 1]  Module Dashboard / Overview              ← Landing page for M7
│             (HR KPIs, hiring funnel, payroll status, performance snapshot)
│
├── [Page 2]  7.1  Resume Screening Agent
│             (Ranked shortlist, score breakdown, green/red flag summary)
│
├── [Page 3]  7.2  Interview Scheduler
│             (Candidate pipeline board, calendar view, confirmation log)
│
├── [Page 4]  7.3  Onboarding Agent
│             (Onboarding checklist tracker, document collection status, Day 1 kit)
│
├── [Page 5]  7.4  Attendance & Payroll Agent
│             (Payroll processing view, payslip generator, statutory filing tracker)
│
├── [Page 6]  7.5  Agent Performance Tracking AI
│             (Performance scorecards, leaderboard, coaching flags, appraisal data)
│
├── [Page 7]  7.6  Talent Sourcing Agent
│             (Proactive candidate pipeline, platform search log, enriched profiles)
│
└── [Page 8]  7.7  HR Policy Chatbot
              (Chat interface, policy query log, leave request tracker)
```

---

## Page 1 — Module Dashboard (M7 Overview)

### Purpose
The landing screen for Module 7. Gives the HR Manager and Director a complete view of people operations — active hiring pipeline, onboarding in progress, payroll status, and team performance — in a single glance.

### Layout
- **Top Stats Bar** (5 KPI cards across)
- **Left Panel (55%):** Hiring Funnel — candidates across all pipeline stages
- **Right Panel (45%):** Team Performance Snapshot — top/bottom performers this month
- **Bottom Row:** Quick-access tiles to each sub-module (7.1 → 7.7)

### KPI Cards (Top Stats Bar)

| Card | Metric | Mock Value | Color |
|---|---|---|---|
| Open Positions | Roles currently being hired | 4 | Accent Blue #2E86AB |
| Candidates in Pipeline | Total active across all stages | 38 | Primary Navy #1A3C5E |
| Joining This Month | Offer accepted, joining confirmed | 3 | Success Green #1D9E75 |
| Payroll Processed | Current month payroll status | ₹14.2L — Done ✓ | Success Green #1D9E75 |
| Pending HR Actions | Tasks awaiting HR attention | 7 | Warning Amber #E8A838 |

### Hiring Funnel (Visual Bar)

```
Sourced / Applied      ████████████████████████  142
Screened (AI)          ████████████████          38
Shortlisted            ████████                  12
Interview Scheduled    █████                     8
Interview Done         ████                      6
Offer Made             ███                       4
Joined                 ██                        3
```

### Team Performance Snapshot (Right Panel)
Compact scorecards for all 5 agents — colour-coded ring chart showing monthly performance score, leads assigned vs converted, with "Top Performer" badge on the highest scorer.

### Sub-Module Quick Access Tiles (Bottom Row)
Seven clickable tiles, each showing:
- Sub-module number + name
- One-line description
- Status indicator (Active / Paused)
- Last run / last activity timestamp

---

## Page 2 — Sub-Module 7.1: Resume Screening Agent

### What It Is
An NLP-powered resume analysis system that automatically parses every incoming application, scores candidates against the job description, and creates a **ranked shortlist** — eliminating manual CV reading for standard roles.

### Sources Monitored
| Source | Integration Method | Check Frequency |
|---|---|---|
| Naukri.com Applications | Naukri Job Posting API | Real-time |
| LinkedIn Easy Apply | LinkedIn Recruiter API | Every 2 hours |
| Careers Email Inbox | Email parsing (careers@fortivsolutions.in) | Real-time |
| Direct Referrals | Manual upload or WhatsApp forward | On upload |
| Shine.com | Portal API | Every 4 hours |
| Indeed India | Indeed API | Every 4 hours |

### Scoring Criteria (Configurable Per Role)

| Criterion | Category | Weight |
|---|---|---|
| Years of relevant experience | Experience | High |
| Real estate industry background | Industry | High |
| CTC range match | Compensation | High |
| Location match (Surat / Vadodara) | Location | Medium |
| Educational qualification | Education | Medium |
| Skill keyword match (real estate, CRM, sales) | Skills | Medium |
| Tenure stability (penalises job-hopping) | Stability | Medium |
| Notice period (shorter is better) | Availability | Low |

### What It Extracts Per Resume

| Field | Description | Example |
|---|---|---|
| `candidate_name` | Full name extracted from resume | Nikhil Mehta |
| `phone` | Primary phone number | +91 96xxxxxxxx |
| `email` | Email address | nikhil.mehta@gmail.com |
| `current_designation` | Current job title | Sales Executive |
| `current_company` | Current employer | XYZ Realty Pvt Ltd |
| `total_experience_yrs` | Years of work experience | 4.5 years |
| `relevant_experience_yrs` | Years in real estate/sales | 3 years |
| `current_ctc_lpa` | Current annual CTC | ₹4.8 LPA |
| `expected_ctc_lpa` | Expected annual CTC | ₹6.5 LPA |
| `notice_period_days` | Notice period in days | 30 days |
| `location` | Current city | Surat |
| `education` | Highest qualification | B.Com, VNSGU |
| `key_skills` | Extracted skill tags | CRM, Client Handling, Site Visits |
| `ai_score` | Automated screening score (0–100) | 78 |
| `pass_fail` | Shortlisting status | ✅ Shortlisted |
| `green_flags` | Positive signals | Real estate background, Local market |
| `red_flags` | Caution signals | 3 jobs in 2 years |
| `applied_role` | Role being applied for | Senior Sales Agent — Vesu |
| `source_platform` | Where application came from | Naukri |
| `application_date` | Date of application | 08/01/2025 |

### Page Layout
**Top:** Role selector (dropdown) | Filter bar — Score range / Pass/Fail / Source / Notice Period  
**Main Area (65%):** Ranked candidate table — sorted by AI Score (highest first)  
**Right Panel (35%):** Score breakdown card — opens on row click

### Mock Demo Data — Shortlisted Candidates (Role: Senior Sales Agent)

| # | Candidate | Current Role | Experience | CTC Exp | Score | Status |
|---|---|---|---|---|---|---|
| 1 | Nikhil Mehta | Sales Exec, XYZ Realty | 4.5 yrs RE | ₹6.5L | **84** | ✅ Shortlisted |
| 2 | Kavya Iyer | Sr Agent, PropTech India | 6 yrs RE | ₹8.2L | **79** | ✅ Shortlisted |
| 3 | Rohan Shukla | Team Lead, NoBroker | 5 yrs RE | ₹9L | **76** | ✅ Shortlisted |
| 4 | Deepika Nair | Sales Exec, HDFC Realty | 3 yrs RE | ₹5.8L | **71** | ✅ Shortlisted |
| 5 | Suraj Patil | Telecaller, Magic Bricks | 2 yrs | ₹4.2L | **58** | ⏳ Borderline |
| 6 | Ananya Kapoor | HR Executive | 0 yrs RE | ₹5.0L | **31** | ❌ Rejected |
| 7 | Pratik Shah | Fresher | 0 yrs | ₹3.0L | **18** | ❌ Rejected |

### Score Breakdown Panel (Click on Candidate)
```
Candidate: Nikhil Mehta — Score: 84 ✅ SHORTLISTED

WHY THIS SCORE:
✓ 4.5 years real estate experience (high relevance)        +20
✓ Current employer in real estate sector                   +12
✓ CTC expectation within budget range (₹6–8L band)        +15
✓ Location: Surat (no relocation required)                 +10
✓ Notice period: 30 days (acceptable)                      +8
✓ Skills matched: CRM, Client Handling, Site Visits        +10
✓ Stable tenure: avg 2.2 years per company                 +9
✗ No post-graduation degree                                 0

GREEN FLAGS:  Real estate background ✓  Local Surat market ✓
RED FLAGS:    None detected

Recommended Action: Schedule HR round interview
```

### Key UI Elements
- **AI Score bar** — animated fill, colour-coded by score range
- **Green flag / Red flag chips** — quick visual tag per candidate
- **Bulk shortlist action** — select multiple candidates → "Send Interview Invites" CTA
- **Export shortlist** — download top-N list as PDF for manager review
- **Processing counter** — "142 resumes screened · 12 shortlisted · 130 rejected — done in 13 minutes"

---

## Page 3 — Sub-Module 7.2: Interview Scheduler

### What It Is
An automated interview coordination system that manages the back-and-forth of scheduling candidate interviews — **syncing with interviewer calendars, sending invitations via WhatsApp, and dispatching reminders** — without a single manual email chain.

### Interview Rounds Supported

| Round | Interviewer | Format | Duration |
|---|---|---|---|
| Round 1 — HR Screening | HR Manager | Video / In-person | 20–30 min |
| Round 2 — Sales Manager | Rahul Modi (Sales Manager) | In-person | 45 min |
| Round 3 — Director | Director | In-person | 30 min |

### Automated Workflow Per Candidate

```
[Candidate marked "Shortlisted" in 7.1]
        ↓
[System checks interviewer calendar — 5 business days ahead]
        ↓
[WhatsApp + Email to candidate: 3 time slot options]
        ↓
[Candidate selects preferred slot]
        ↓
[Calendar event created: interviewer + candidate]
[WhatsApp confirmation + Google Meet link sent to candidate]
[Calendar invite sent to interviewer with resume + AI score brief]
        ↓
[Reminder: WhatsApp to candidate 1 hr before]
[Reminder: WhatsApp to interviewer 30 min before]
        ↓
[Post-interview: System sends feedback form to interviewer]
[Feedback received → candidate moved to next round or rejected]
```

### What Gets Tracked Per Interview

| Field | Description | Example |
|---|---|---|
| `candidate_name` | Full name | Nikhil Mehta |
| `interview_round` | Round number and type | Round 1 — HR |
| `interviewer_name` | Assigned interviewer | Priya Rana |
| `scheduled_date` | Confirmed interview date | 15/01/2025 |
| `scheduled_time` | Confirmed time slot | 11:00 AM |
| `format` | Video / In-person | In-person |
| `confirmation_status` | Candidate confirmed | ✓ Confirmed |
| `whatsapp_confirmation_sent` | Auto-confirmation status | ✓ Sent 14:31 |
| `reminder_1hr_sent` | Reminder sent | ✓ Sent 10:00 AM |
| `attendance_status` | Did candidate show? | Attended / No Show |
| `feedback_received` | Post-interview form | ✓ Submitted |
| `outcome` | Round result | Cleared / Rejected / Hold |
| `next_action` | System-generated next step | Schedule Round 2 |

### Page Layout
**Top:** Stage selector filter — Invite Sent / Confirmed / Completed / No Show  
**Left Panel (55%):** Candidate pipeline board — Kanban-style stages  
**Right Panel (45%):** Calendar view — week view showing all scheduled interviews

### Candidate Pipeline Board — Stages

```
┌─────────────────┬─────────────────┬─────────────────┬─────────────────┐
│  Invite Sent    │   Confirmed     │   Completed     │    Outcome      │
│      (4)        │      (3)        │      (6)        │      (5)        │
├─────────────────┼─────────────────┼─────────────────┼─────────────────┤
│ Nikhil Mehta    │ Kavya Iyer      │ Rohan Shukla    │ ✅ Cleared R2   │
│ R1 HR · 15 Jan  │ R1 HR · 14 Jan  │ R1 HR · 11 Jan  │ Deepika Nair    │
│                 │                 │                 │                 │
│ Deepika Nair    │ Suraj Patil     │ Ananya K        │ ❌ Rejected     │
│ R1 HR · 16 Jan  │ R1 HR · 16 Jan  │ R1 HR · 10 Jan  │ 3 candidates    │
└─────────────────┴─────────────────┴─────────────────┴─────────────────┘
```

### WhatsApp Message Templates

**Slot Offer Message to Candidate:**
> *"Hi Nikhil, thank you for applying for the Senior Sales Agent role at Fortiv Solutions. We'd like to invite you for a 30-minute HR interview. Please select one of the following time slots:*
> *Option 1: Wednesday 15 Jan · 11:00 AM*
> *Option 2: Wednesday 15 Jan · 3:00 PM*
> *Option 3: Thursday 16 Jan · 10:00 AM*
> *Reply with 1, 2, or 3 to confirm."*

**Confirmation Message:**
> *"✅ Confirmed! Your interview with Fortiv Solutions is scheduled for Wednesday, 15 Jan at 11:00 AM at our Vesu office (address in pin below). Please carry a copy of your resume. See you soon!"*

**Day-Of Reminder:**
> *"Hi Nikhil, your interview at Fortiv Solutions is in 1 hour (11:00 AM). Office: 204, Tower B, Greenview Complex, Vesu, Surat. Reach out if you need directions."*

### Mock Interview Schedule — Week of 13–17 Jan 2025

| Date | Time | Candidate | Round | Interviewer | Status |
|---|---|---|---|---|---|
| Mon 13 Jan | 10:00 AM | Rohan Shukla | R2 — Manager | Rahul Modi | ✅ Completed |
| Tue 14 Jan | 11:00 AM | Kavya Iyer | R1 — HR | HR Manager | ✅ Confirmed |
| Wed 15 Jan | 11:00 AM | Nikhil Mehta | R1 — HR | HR Manager | ⏳ Scheduled |
| Wed 15 Jan | 3:00 PM | Suraj Patil | R1 — HR | HR Manager | ⏳ Scheduled |
| Thu 16 Jan | 10:00 AM | Deepika Nair | R1 — HR | HR Manager | ⏳ Scheduled |
| Fri 17 Jan | 2:00 PM | Kavya Iyer | R2 — Manager | Rahul Modi | ⏳ Pending R1 |

### Key UI Elements
- **No-show alert** — amber card if candidate doesn't join within 10 min of start time
- **Reschedule trigger** — one-click re-offers 3 new slots automatically
- **Calendar sync status** — "Google Calendar connected ✓" indicator
- **Interview brief** — click any scheduled event to view candidate's AI score summary and resume

---

## Page 4 — Sub-Module 7.3: Onboarding Agent

### What It Is
A fully automated new employee onboarding workflow that triggers the moment an offer is accepted — **generating offer documents, collecting KYC, scheduling induction, and managing the Day 1 checklist** without HR manually coordinating each step.

### Onboarding Timeline & Automated Actions

| Day | Trigger | Automated Action |
|---|---|---|
| Day 0 | Offer accepted in pipeline | Generate offer letter → send via WhatsApp + Email for e-sign (M6.5) |
| Day 0–7 | Pre-joining period | WhatsApp document collection checklist sent; reminder every 2 days for pending docs |
| Day −1 | Day before joining | "Your first day" WhatsApp: office address, reporting time, dress code, parking, who to ask for |
| Day 1 | Joining day | Notify IT (create email ID), notify Admin (ID card, laptop), alert reporting manager |
| Day 1–5 | Week 1 | Schedule: product training, CRM training, team intro meetings, territory briefing |
| Day 30 | One month | Trigger probation check-in reminder to reporting manager |
| Day 90 | Confirmation | Auto-generate probation completion reminder; HR to process confirmation letter |

### Document Collection Checklist (Sent via WhatsApp)

| # | Document Required | Status Tracking |
|---|---|---|
| 1 | Educational Certificates (10th, 12th, Graduation) | ⏳ Pending |
| 2 | Previous Employment Experience Letters | ⏳ Pending |
| 3 | Last 3 Months Salary Slips | ✅ Received |
| 4 | Aadhaar Card (front + back) | ✅ Received |
| 5 | PAN Card | ✅ Received |
| 6 | Address Proof (utility bill / rental agreement) | ⏳ Pending |
| 7 | Passport-size Photographs (4 copies) | ⏳ Pending |
| 8 | Bank Account Details (cancelled cheque / passbook) | ✅ Received |
| 9 | Emergency Contact Details form | ⏳ Pending |
| 10 | Declaration Form (signed) | ⏳ Pending |

### What Gets Tracked Per New Joiner

| Field | Description | Example |
|---|---|---|
| `employee_name` | Full name | Nikhil Mehta |
| `employee_id` | Auto-assigned ID | EMP-2025-012 |
| `designation` | Joining role | Senior Sales Agent |
| `department` | Department | Sales — Vesu Territory |
| `reporting_manager` | Direct manager | Rahul Modi |
| `joining_date` | Confirmed date of joining | 20/01/2025 |
| `offer_sent_date` | Offer letter sent | 12/01/2025 |
| `offer_signed_date` | E-signature received | 13/01/2025 |
| `docs_collected_pct` | Document completion % | 60% |
| `docs_pending` | List of pending documents | Address Proof, Certificates |
| `it_setup_status` | Email ID, system access | ⏳ In Progress |
| `id_card_ready` | Physical ID card | ✅ Ready |
| `laptop_assigned` | Device allocation | ✅ Assigned |
| `crm_access_given` | CRM login provisioned | ⏳ Pending |
| `induction_scheduled` | Training scheduled | ✅ 21 Jan 10:00 AM |
| `probation_period` | Duration | 3 months |
| `probation_check_in` | Scheduled | 20/02/2025 |

### Page Layout
**Top:** Status filter — Pre-joining / Joining This Week / Week 1 / Probation  
**Main Area:** Onboarding tracker card per employee (accordion style)  
**Each Card:** Timeline progress bar + checklist completion ring + pending action badge

### Mock Demo — Active Onboarding Employees

| Employee | Role | Joining Date | Docs | IT Setup | Induction | Status |
|---|---|---|---|---|---|---|
| Nikhil Mehta | Sr Sales Agent | 20/01/2025 | 60% ⏳ | ⏳ Pending | ✅ Scheduled | Pre-joining |
| Pooja Iyer | Telecaller | 15/01/2025 | 100% ✅ | ✅ Done | ✅ Done | Week 1 |
| Sagar Trivedi | Site Manager | 06/01/2025 | 100% ✅ | ✅ Done | ✅ Done | Month 1 |

### "Your First Day" WhatsApp Message Template
> *"🎉 Welcome to Fortiv Solutions, Nikhil! We're excited to have you join us tomorrow.*
> *📍 Office: 204, Tower B, Greenview Complex, Vesu, Surat — 395007*
> *⏰ Reporting time: 9:30 AM*
> *🚗 Parking: Available in basement (mention Fortiv Solutions)*
> *👔 Dress code: Business casual*
> *🙋 Ask for: Rahul Modi (Sales Manager)*
> *See you tomorrow! Any questions? Reply here."*

### Key UI Elements
- **Checklist completion ring** — circular progress per document category
- **Auto-reminder counter** — "3 reminders sent for pending docs"
- **Timeline rail** — visual onboarding journey from Offer → Day 1 → Month 1 → Confirmation
- **"Mark Day 1 Complete" CTA** — HR confirms joiner is in; triggers all Day 1 automations

---

## Page 5 — Sub-Module 7.4: Attendance & Payroll Agent

### What It Is
An automated payroll processing system that reads attendance data, calculates salaries with all applicable deductions, generates payslips, and pushes accounting entries to Tally — running the **full payroll cycle in 2 hours** with zero manual calculation.

### Payroll Input Sources

| Data Source | Type | Integration |
|---|---|---|
| Biometric System | Daily attendance punch | API / CSV import |
| GPS Check-in App | Field agent location-based check-in | Mobile app integration |
| Manual HR Entry | Leaves, adjustments | HRMS entry |
| M7.5 Performance Data | Incentive amounts | Automated data pull |
| HR Manager Approvals | Leave approvals, LOP decisions | HRMS workflow |

### Payroll Calculation Logic (Per Employee)

```
GROSS SALARY
─────────────────────────────────────────────────────
  Basic Salary                            (as per CTC)
+ HRA                                     (40% of Basic)
+ Special Allowance                       (balance of CTC)
+ Performance Incentive                   (from M7.5)
─────────────────────────────────────────────────────
= GROSS EARNINGS

DEDUCTIONS
─────────────────────────────────────────────────────
− PF (Employee)                           (12% of Basic)
− ESI (Employee)                          (0.75% if CTC ≤ ₹21K/month)
− Professional Tax (Gujarat)              (as per slab)
− TDS                                     (per Form 12B / 16)
− Loss of Pay (LOP)                       (absent days × daily rate)
− Advance Recovery                        (if any salary advance)
─────────────────────────────────────────────────────
= NET TAKE-HOME SALARY
```

### Statutory Deductions — Gujarat Slabs

| Statutory | Employee Contribution | Employer Contribution | Notes |
|---|---|---|---|
| PF (EPF) | 12% of Basic | 12% of Basic | Applicable to all employees |
| ESI | 0.75% of Gross | 3.25% of Gross | Only if Gross ≤ ₹21,000/month |
| Professional Tax (PT) | ₹200/month | — | Gujarat slab: ₹15K–20K = ₹150; >₹20K = ₹200 |
| TDS | Per Form 12B | — | Only if taxable income threshold crossed |

### What Gets Generated Per Employee Per Month

| Output | Description | Delivery |
|---|---|---|
| Payslip PDF | Branded Fortiv Solutions payslip with full earnings/deductions breakup | WhatsApp + Email on payroll date |
| Tally Journal Entry | Salary journal with correct ledger codes | Auto-pushed to Tally Prime |
| PF Challan | Monthly PF contribution challan | Generated for HR/Finance download |
| ESI Challan | Monthly ESI contribution challan | Generated for HR/Finance download |
| PT Challan | Monthly Professional Tax challan | Generated for HR/Finance download |
| Form 16 (Annual) | TDS certificate for each employee | Generated at year-end |

### Page Layout
**Top:** Month selector + Payroll run status indicator (Not Started / In Progress / Processed / Disbursed)  
**Left (60%):** Employee payroll table — all employees with calculated amounts  
**Right (40%):** Payroll summary card + statutory liability totals

### Mock Demo Data — January 2025 Payroll

| Employee | Designation | Gross | Deductions | Net Pay | Status |
|---|---|---|---|---|---|
| Priya Rana | Senior Agent | ₹62,000 | ₹9,340 | ₹52,660 | ✅ Processed |
| Rahul Modi | Sales Manager | ₹95,000 | ₹14,250 | ₹80,750 | ✅ Processed |
| Ankit Shah | Sales Agent | ₹45,000 | ₹6,750 | ₹38,250 | ✅ Processed |
| Meera Patel | Sales Agent | ₹45,000 | ₹6,750 | ₹38,250 | ✅ Processed |
| Kiran Desai | Team Lead | ₹72,000 | ₹10,800 | ₹61,200 | ✅ Processed |
| Nikhil Mehta | Sr Agent (New) | ₹52,000 | ₹7,800 | ₹44,200 | ⏳ Joining 20 Jan |

### Payroll Summary Card (Right Panel)

```
JANUARY 2025 PAYROLL SUMMARY
─────────────────────────────────────────
Total Employees:         28
Total Gross Payroll:     ₹14,20,000
Total Deductions:        ₹2,13,000
Total Net Disbursement:  ₹12,07,000
─────────────────────────────────────────
Employer PF Liability:   ₹1,02,600
Employer ESI Liability:  ₹18,400
Professional Tax:        ₹5,600
─────────────────────────────────────────
Total Payroll Cost:      ₹15,46,600
─────────────────────────────────────────
Run Status:              ✅ Processed
Payslips Sent:           28 / 28
Tally Entries Pushed:    ✅ Done
```

### Sample Payslip Structure (Fortiv Solutions — Branded)

```
╔══════════════════════════════════════════════════════╗
║         FORTIV SOLUTIONS — SALARY SLIP               ║
║         fortivsolutions.in                           ║
╠══════════════════════════════════════════════════════╣
║  Employee: Priya Rana          Month: January 2025   ║
║  ID: EMP-2024-003              Designation: Sr Agent ║
║  Department: Sales — Vesu      PAN: ABCDE1234F       ║
╠══════════════════════════╦═══════════════════════════╣
║  EARNINGS                ║  DEDUCTIONS               ║
╠══════════════════════════╬═══════════════════════════╣
║  Basic:       ₹31,000    ║  PF (Employee): ₹3,720    ║
║  HRA:         ₹12,400    ║  Professional Tax: ₹200   ║
║  Special All: ₹9,600     ║  TDS: ₹5,420             ║
║  Incentive:   ₹9,000     ║                           ║
╠══════════════════════════╬═══════════════════════════╣
║  GROSS:       ₹62,000    ║  TOTAL DED: ₹9,340        ║
╠══════════════════════════╩═══════════════════════════╣
║              NET PAY: ₹52,660                        ║
╚══════════════════════════════════════════════════════╝
```

### Key UI Elements
- **Payroll processing animation** — progress bar sweeping across all 28 employees in sequence
- **Statutory challan download buttons** — one click to download PF / ESI / PT challans
- **"Run Payroll" CTA** — primary action button that triggers the full calculation cycle
- **Tally sync status** — "Journal entries pushed ✓" green badge

---

## Page 6 — Sub-Module 7.5: Agent Performance Tracking AI

### What It Is
A continuous performance monitoring system that tracks every sales agent's activity metrics and outcomes — generating **objective, data-driven performance scores** for coaching, appraisals, incentive calculation, and early identification of underperformance.

### Data Sources (Auto-Pulled)

| Module | Data Pulled |
|---|---|
| M4 — Sales Pipeline | Leads assigned, stages moved, deals closed, revenue |
| M1 — Lead Acquisition | Leads assigned per agent, lead quality distributed |
| M2 — Conversational AI | Chatbot handoffs accepted, response speed |
| M7.2 — Interview Scheduler | Site visit counts (for hiring agents) |
| Attendance (M7.4) | Working days, punctuality |

### Metrics Tracked Per Agent (Monthly)

| Metric | Description | Calculation |
|---|---|---|
| Leads Assigned | Total leads allocated this month | From M1/M4 |
| Contacted Within SLA | Leads called within 1-hour SLA | % of assigned |
| Call Attempts | Total outbound call attempts | From CRM log |
| Call Connections | Calls actually answered | % of attempts |
| Site Visits Conducted | Physical site visits done | From M4 visit log |
| Visit-to-Booking Rate | Visits that converted to bookings | % |
| Revenue Generated | Closed deal value this month | From M4 |
| Average Deal Size | Mean deal value per booking | From M4 |
| Days to Close | Average days from lead to booking | From M4 |
| Follow-Up Compliance | Follow-ups done on time per CRM schedule | % |
| WhatsApp Response Speed | Avg minutes to respond after chatbot handoff | From M2 |
| Weekly Performance Score | Composite 0–100 score | Weighted formula |

### Performance Score Formula

```
WEEKLY PERFORMANCE SCORE (0–100)
─────────────────────────────────────────────────────
  Lead Contact Rate (within SLA)         × 0.20
  Visit-to-Booking Conversion Rate       × 0.25
  Revenue Generated vs Target            × 0.25
  Follow-Up Compliance Score             × 0.15
  Activity Metrics (calls, visits)       × 0.10
  Response Speed (WhatsApp handoffs)     × 0.05
─────────────────────────────────────────────────────
= COMPOSITE SCORE (0–100)

Benchmarked against team average for context.
```

### Score Classification

| Score Range | Performance Label | Badge Color | Manager Action |
|---|---|---|---|
| 80–100 | 🟢 Top Performer | #1D9E75 Green | Recognition + Referral bonus |
| 60–79 | 🔵 On Track | #2E86AB Blue | Standard 1:1 |
| 40–59 | 🟡 Needs Attention | #E8A838 Amber | Coaching session scheduled |
| 0–39 | 🔴 At Risk | #D85A30 Red | Immediate PIP / manager review |

### Mock Demo Data — Agent Scorecards (January 2025)

| Agent | Role | Leads | SLA % | Visits | Bookings | Revenue | Score | Label |
|---|---|---|---|---|---|---|---|---|
| Priya Rana | Sr Agent | 22 | 91% | 14 | 4 | ₹1.8Cr | **88** | 🟢 Top Performer |
| Rahul Modi | Sales Mgr | 8 | 100% | 6 | 3 | ₹2.4Cr | **92** | 🟢 Top Performer |
| Ankit Shah | Agent | 18 | 78% | 12 | 0 | ₹0 | **42** | 🟡 Needs Attention |
| Meera Patel | Agent | 15 | 87% | 9 | 2 | ₹74L | **68** | 🔵 On Track |
| Kiran Desai | Team Lead | 12 | 92% | 8 | 2 | ₹1.1Cr | **76** | 🔵 On Track |

### Coaching Flag (AI-Generated Alert)
```
⚠️ COACHING FLAG — Ankit Shah

Ankit has conducted 12 site visits this month but 
has not converted a single booking (0/12).

Industry benchmark: 1 in 4 visits converts.

Possible root cause:
• Closing skills gap — unable to handle objections at site
• Price negotiation — not empowered to offer flexibility
• Follow-up post-visit — only 2 of 12 visitors followed up within 24 hrs

Recommended action:
➜ Schedule 1:1 with Rahul Modi this week
➜ Shadow Priya Rana on next 3 site visits
➜ Role-play objection handling session with Manager
```

### Page Layout
**Top:** Period selector (This Week / This Month / Q1 2025) + Team Average Score chip  
**Main Area:** Performance scorecard grid — one card per agent with ring chart  
**Bottom:** Leaderboard bar chart (revenue + score side-by-side)  
**Right (slide-out):** Detailed drill-down per agent — all metrics + trend graph + coaching flags

### Key Animations (Demo-Specific)
| Animation | Description |
|---|---|
| Score ring fill | Circular progress animates on page load per agent |
| Top Performer pulse | Green badge pulses gently on top scorer |
| Trend sparkline | Mini 4-week trend line below each score |
| Coaching flag alert | Amber card slides in at bottom with animated warning icon |

---

## Page 7 — Sub-Module 7.6: Talent Sourcing Agent

### What It Is
A proactive recruitment agent that continuously searches Naukri, LinkedIn, Shine, and other platforms for candidates matching open positions — **building a pipeline of pre-identified talent before a role becomes urgent**.

### Platforms Searched

| Platform | Search Method | Frequency |
|---|---|---|
| Naukri Resume Database | Boolean search on resume DB | Daily |
| LinkedIn People Search | LinkedIn Recruiter / Sales Nav | Every 2 days |
| Shine.com | Resume database search | Every 3 days |
| Indeed India | Candidate search | Every 3 days |
| Internal Referral Network | WhatsApp / email broadcast | Per open role |

### How the Agent Works

```
[Open position configured: role, experience, location, CTC range]
        ↓
[Agent searches all platforms with Boolean queries]
        ↓
[Profile extracted: name, designation, company, tenure, CTC estimate]
        ↓
[Profile scored (same model as M7.1) against JD requirements]
        ↓
[Enrichment: LinkedIn profile, photo, contact (if available)]
        ↓
[Shortlisted profiles → HR Pipeline with "Sourced" tag]
        ↓
[Optional: Automated LinkedIn outreach message sent]
        ↓
[Repeat check: skip if this profile was already contacted]
```

### Profile Data Extracted Per Candidate

| Field | Description | Example |
|---|---|---|
| `profile_name` | Full name | Sneha Kapoor |
| `current_designation` | Current job title | Sales Executive |
| `current_employer` | Current company | PropTech India Pvt Ltd |
| `years_experience` | Total experience | 3.5 years |
| `relevant_experience` | Real estate years | 2.5 years |
| `current_ctc_estimate` | Estimated CTC | ₹5.2 LPA |
| `location` | City | Surat |
| `platform_found` | Discovery source | Naukri |
| `linkedin_url` | LinkedIn profile link | linkedin.com/in/snehakapoor |
| `ai_score` | Fit score vs JD | 73 |
| `outreach_status` | Contact status | Message Sent / Not Contacted |
| `last_contacted_date` | Date of last outreach | 10/01/2025 |
| `response_status` | Did they respond? | Interested / No Response / Not Interested |

### Open Roles & Sourcing Status

| Role | Target Profile | Profiles Found | Shortlisted | Contacted | Interested |
|---|---|---|---|---|---|
| Senior Sales Agent — Vesu | 3–6 yrs RE, Surat | 34 | 8 | 6 | 3 |
| Telecaller — Vadodara | 1–3 yrs, BPO/Real estate | 28 | 5 | 5 | 2 |
| Site Supervisor | Civil background, 5+ yrs | 19 | 4 | 3 | 1 |
| Digital Marketing Exec | 2–4 yrs, Real estate ads | 22 | 6 | 4 | 2 |

### LinkedIn Outreach Message Template
> *"Hi Sneha, I came across your profile and was impressed by your real estate sales experience in Surat. We're building a high-performance sales team at Fortiv Solutions (fortivsolutions.in) and have an exciting opening for a Senior Sales Agent.*
> *We offer competitive CTC, strong incentives, and a structured growth path.*
> *Would you be open to a quick 15-minute call this week? Looking forward to hearing from you!"*

### Page Layout
**Top:** Role selector dropdown + Active search status indicator  
**Main Area (60%):** Sourced candidate table — scored and tagged  
**Right Panel (40%):** Outreach status tracker + Platform breakdown donut chart

### Key UI Elements
- **"Sourced" tag badge** — differentiates from inbound applications
- **Duplicate check indicator** — "Already contacted on 10/01/2025" alert if re-found
- **Platform attribution chip** — Naukri / LinkedIn / Shine tag per profile
- **"Add to Pipeline" CTA** — move to active hiring pipeline in 7.1

---

## Page 8 — Sub-Module 7.7: HR Policy Chatbot

### What It Is
A **RAG-powered internal chatbot** trained on Fortiv Solutions' HR manual, leave policies, reimbursement rules, code of conduct, appraisal process, and all HR documentation — answering employee queries instantly via WhatsApp or web interface.

### How It Works

```
[Employee sends query via WhatsApp or web chat]
        ↓
[NLP engine classifies query type]
        ↓
[RAG retrieval: fetches relevant policy section from HR manual]
        ↓
[AI generates accurate, policy-grounded response]
        ↓
[Response sent to employee via same channel]
        ↓
[For action requests (leave, reimbursement): creates ticket in HRMS]
[For grievances: anonymised ticket created, HR notified]
[For complex queries: collects context, routes to HR Manager with transcript]
```

### Query Categories Handled

| Category | Example Query | Bot Action |
|---|---|---|
| Leave Policy | "How many casual leaves do I get per year?" | Policy lookup → Answer |
| Leave Application | "Apply for leave 15–17 March" | Creates leave request in HRMS |
| Leave Balance | "What's my leave balance?" | Pulls from HRMS → Answers |
| Reimbursement | "What's the travel reimbursement policy?" | Policy lookup → Answer |
| Payslip | "Send me my January payslip" | Triggers payslip delivery from M7.4 |
| Holiday List | "Is 26 January a holiday?" | Calendar lookup → Answer |
| WFH Policy | "How do I apply for work from home?" | Policy + HRMS form link |
| Appraisal | "When is the appraisal cycle this year?" | Policy lookup → Answer |
| Notice Period | "What is my notice period?" | Employment contract lookup |
| Grievance | "I want to raise a complaint" | Anonymous ticket creation |
| Escalation | "I need to speak to HR" | Collects context → routes to HR Manager |

### Sample Chat Flow

```
Employee: How many casual leaves do I have left?
─────────────────────────────────────────────────
Bot:      Hi Ankit! Let me check your leave balance.

          📋 Your Leave Balance — January 2025:
          ├── Casual Leave:    4 remaining (of 12)
          ├── Sick Leave:      8 remaining (of 12)
          ├── Earned Leave:    6 remaining (of 18)
          └── Comp Off:        1 pending approval

          Would you like to apply for a leave? Just say 
          "Apply leave [dates]" and I'll raise the request.
─────────────────────────────────────────────────
Employee: Apply leave 14 and 15 February
─────────────────────────────────────────────────
Bot:      ✅ Leave request raised!

          📋 Leave Request #LR-2025-088
          ├── Type:      Casual Leave (2 days)
          ├── Dates:     14–15 Feb 2025 (Fri–Sat)
          └── Status:    Sent to Rahul Modi for approval

          You'll receive a WhatsApp confirmation once approved.
          Remaining CL after approval: 2 days.
```

### Policy Knowledge Base (Source Documents)
| Document | Last Updated |
|---|---|
| Fortiv Solutions HR Manual v3.0 | Dec 2024 |
| Leave Policy 2025 | Jan 2025 |
| Travel & Expense Reimbursement Policy | Oct 2024 |
| Code of Conduct | Jan 2024 |
| Performance Appraisal Process 2025 | Dec 2024 |
| Salary Advance Policy | Jun 2024 |
| IT & Device Usage Policy | Mar 2024 |
| Grievance Redressal Policy | Jan 2024 |

### Page Layout
**Left Panel (50%):** Live chat interface (WhatsApp-style UI)  
**Right Panel (50%):** Query log + HR action queue

### Query Log (Right Panel — Mock Data)

| Time | Employee | Query | Category | Resolved |
|---|---|---|---|---|
| 09:14 AM | Ankit Shah | Leave balance enquiry | Leave | ✅ Bot |
| 09:31 AM | Meera Patel | Applied leave 14–15 Feb | Leave Action | ✅ Bot |
| 10:02 AM | Priya Rana | Petrol reimbursement limit | Reimbursement | ✅ Bot |
| 10:45 AM | Kiran Desai | Appraisal cycle dates | Appraisal | ✅ Bot |
| 11:20 AM | Ankit Shah | Salary advance process | Finance | ⏳ Escalated to HR |
| 02:15 PM | New Joiner | Notice period for probation | Policy | ✅ Bot |

### Key UI Elements
- **WhatsApp-style chat interface** — green header, speech bubbles, read receipts
- **Resolution badge** — "Resolved by Bot" vs "Escalated to HR" tag per query
- **Policy citation** — bot responses link to specific policy section for transparency
- **HRMS action badge** — "Leave request created ✓" confirmation banner
- **80% deflection rate counter** — "80 of 100 queries this month resolved without HR intervention"

---

## Complete Module 7 — Master Parameter Reference

### All Data Fields Across M7

| Field Name | Type | Sub-module | Description |
|---|---|---|---|
| `employee_id` | String | All | Unique employee ID (EMP-YYYY-NNN) |
| `employee_name` | String | All | Full legal name |
| `designation` | String | All | Current job title |
| `department` | String | All | Department |
| `reporting_manager` | String | All | Direct reporting manager |
| `joining_date` | Date | 7.3 | Date of joining |
| `probation_end_date` | Date | 7.3 | End of probation period |
| `candidate_id` | UUID | 7.1, 7.2, 7.6 | Applicant tracking ID |
| `candidate_name` | String | 7.1, 7.2, 7.6 | Applicant full name |
| `candidate_phone` | String | 7.1, 7.2, 7.6 | Mobile number |
| `candidate_email` | String | 7.1, 7.2 | Email address |
| `current_designation` | String | 7.1, 7.6 | Current job title |
| `current_company` | String | 7.1, 7.6 | Current employer |
| `total_experience_yrs` | Number | 7.1, 7.6 | Total years experience |
| `relevant_experience_yrs` | Number | 7.1, 7.6 | Real estate / relevant years |
| `current_ctc_lpa` | Number (₹L) | 7.1, 7.6 | Current CTC annual |
| `expected_ctc_lpa` | Number (₹L) | 7.1, 7.6 | Expected CTC annual |
| `notice_period_days` | Number | 7.1 | Notice period in days |
| `ai_screening_score` | Number (0–100) | 7.1, 7.6 | AI fit score vs JD |
| `pass_fail_status` | Enum | 7.1 | Shortlisted / Rejected / Borderline |
| `green_flags` | Array | 7.1 | Positive signal list |
| `red_flags` | Array | 7.1 | Caution signal list |
| `source_platform` | Enum | 7.1, 7.6 | Naukri / LinkedIn / Shine / Indeed / Email |
| `applied_role` | String | 7.1 | Role applied for |
| `interview_round` | Enum | 7.2 | Round 1 / Round 2 / Round 3 |
| `interviewer_name` | String | 7.2 | Assigned interviewer |
| `interview_date` | Date | 7.2 | Scheduled interview date |
| `interview_time` | String | 7.2 | Scheduled interview time |
| `interview_format` | Enum | 7.2 | Video / In-person |
| `confirmation_status` | Enum | 7.2 | Confirmed / Pending / Rescheduled |
| `attendance_status` | Enum | 7.2 | Attended / No Show |
| `interview_outcome` | Enum | 7.2 | Cleared / Rejected / Hold |
| `interviewer_feedback` | Text | 7.2 | Free-text feedback from interviewer |
| `offer_sent_date` | Date | 7.3 | Date offer letter was sent |
| `offer_signed_date` | Date | 7.3 | Date e-signature received |
| `docs_collected_pct` | Number (%) | 7.3 | Document completion percentage |
| `docs_pending` | Array | 7.3 | List of missing documents |
| `it_setup_status` | Enum | 7.3 | Pending / In Progress / Done |
| `crm_access_given` | Boolean | 7.3 | CRM login provisioned |
| `induction_date` | DateTime | 7.3 | Scheduled induction session |
| `month_year` | String | 7.4 | Payroll period (MM/YYYY) |
| `gross_salary` | Number (₹) | 7.4 | Gross earnings for month |
| `pf_employee` | Number (₹) | 7.4 | PF deducted from employee |
| `pf_employer` | Number (₹) | 7.4 | PF contributed by employer |
| `esi_employee` | Number (₹) | 7.4 | ESI deducted from employee |
| `esi_employer` | Number (₹) | 7.4 | ESI contributed by employer |
| `professional_tax` | Number (₹) | 7.4 | PT deducted |
| `tds_deducted` | Number (₹) | 7.4 | TDS deducted |
| `lop_days` | Number | 7.4 | Loss of pay days |
| `lop_amount` | Number (₹) | 7.4 | LOP deduction |
| `incentive_amount` | Number (₹) | 7.4 | Performance incentive from M7.5 |
| `net_salary` | Number (₹) | 7.4 | Net take-home salary |
| `payslip_sent` | Boolean | 7.4 | Payslip delivered to employee |
| `tally_pushed` | Boolean | 7.4 | Journal entry pushed to Tally |
| `leads_assigned` | Number | 7.5 | Leads allocated this period |
| `sla_contact_rate` | Number (%) | 7.5 | % leads called within 1-hr SLA |
| `site_visits_done` | Number | 7.5 | Physical site visits conducted |
| `visit_to_booking_rate` | Number (%) | 7.5 | Site visit conversion rate |
| `revenue_generated` | Number (₹Cr) | 7.5 | Revenue from closed deals |
| `avg_deal_size` | Number (₹L) | 7.5 | Mean deal value |
| `days_to_close` | Number | 7.5 | Average lead-to-booking days |
| `followup_compliance` | Number (%) | 7.5 | On-time follow-up rate |
| `performance_score` | Number (0–100) | 7.5 | Composite weekly/monthly score |
| `performance_label` | Enum | 7.5 | Top Performer / On Track / Needs Attention / At Risk |
| `coaching_flag` | Text | 7.5 | AI-generated coaching recommendation |
| `linkedin_url` | URL | 7.6 | Sourced candidate LinkedIn profile |
| `outreach_status` | Enum | 7.6 | Not Contacted / Message Sent / Responded |
| `response_status` | Enum | 7.6 | Interested / No Response / Not Interested |
| `query_text` | Text | 7.7 | Employee's query to chatbot |
| `query_category` | Enum | 7.7 | Leave / Reimbursement / Policy / Action / Escalation |
| `resolution_type` | Enum | 7.7 | Bot Resolved / Escalated to HR |
| `hrms_action_created` | Boolean | 7.7 | Leave/reimbursement ticket created |
| `policy_section_cited` | String | 7.7 | Source policy section for answer |

---

## Mock Data Constants (Demo-Ready)

### Demo Employee Pool
```
Priya Rana        — Senior Agent     — EMP-2024-003 — ₹62,000/month — Score: 88
Rahul Modi        — Sales Manager    — EMP-2023-001 — ₹95,000/month — Score: 92
Ankit Shah        — Sales Agent      — EMP-2024-007 — ₹45,000/month — Score: 42
Meera Patel       — Sales Agent      — EMP-2024-009 — ₹45,000/month — Score: 68
Kiran Desai       — Team Lead        — EMP-2023-005 — ₹72,000/month — Score: 76
```

### Demo Candidate Pool (In Pipeline)
```
Nikhil Mehta      — Sr Agent applicant — Score: 84 — Shortlisted — Interview: 15 Jan
Kavya Iyer        — Sr Agent applicant — Score: 79 — Shortlisted — Interview: 14 Jan
Rohan Shukla      — Sr Agent applicant — Score: 76 — Interview Done — Cleared R2
Deepika Nair      — Agent applicant    — Score: 71 — Shortlisted — Interview: 16 Jan
Suraj Patil       — Telecaller         — Score: 58 — Borderline   — Under review
```

### Demo Joining Pipeline
```
Nikhil Mehta      — Sr Sales Agent  — Joining: 20/01/2025 — Docs: 60% complete
Pooja Iyer        — Telecaller      — Joining: 15/01/2025 — Week 1 in progress
Sagar Trivedi     — Site Manager    — Joined: 06/01/2025  — Month 1
```

### Demo Projects (for agent territory assignment)
```
Project 1: Fortiv Greenview Heights, Vesu, Surat
           2BHK/3BHK · ₹45L–₹85L · RERA Registered · Dec 2026 possession
           Territory Agents: Priya Rana, Ankit Shah

Project 2: Fortiv Skyline Residences, Gotri, Vadodara
           3BHK/4BHK · ₹90L–₹1.8Cr · Under Construction
           Territory Agent: Kiran Desai

Project 3: Fortiv Business Park, Althan, Surat
           Commercial · ₹1.2Cr–₹4.5Cr · Ready possession
           Territory Agent: Rahul Modi
```

---

## Brand & Design Parameters for M7 UI

### Color Usage

| Element | Color | Hex |
|---|---|---|
| Page background | Dark navy | #0D1B2A |
| Card / panel background | White | #FFFFFF |
| Primary brand | Deep navy | #1A3C5E |
| Accent / links | Electric blue | #2E86AB |
| Top Performer badge | Teal green (pulsing) | #1D9E75 |
| Needs Attention / warning | Amber | #E8A838 |
| At Risk / danger | Coral red | #D85A30 |
| On Track | Electric blue | #2E86AB |
| Section background | Off white | #F5F6FA |

### Typography

| Use Case | Font |
|---|---|
| Module title, page heading | Playfair Display or DM Serif Display |
| Body text, labels, descriptions | DM Sans or Plus Jakarta Sans |
| All numbers, salaries, scores, CTC, dates | JetBrains Mono |

### Key Animations (Demo-Specific)

| Animation | Where | Description |
|---|---|---|
| Performance score ring fill | 7.5 scorecards | Ring animates from 0 to score on load |
| Top Performer pulse | 7.5 leaderboard | Green badge pulses softly |
| Payroll processing sweep | 7.4 payroll run | Progress bar sweeps employee by employee |
| Pipeline card drop | 7.2 Kanban | Candidate card drops to next column on stage move |
| Chatbot typing indicator | 7.7 chat | 3-dot typing animation before bot response |
| Score tick-up | 7.1 shortlist | AI score increments with flash as resume is processed |
| Coaching flag slide-in | 7.5 agent cards | Amber card slides from right with warning icon |

---

## Technical Integration Map for M7

| Sub-module | External APIs / Services | Data Flow Direction |
|---|---|---|
| 7.1 Resume Screening | Naukri API, LinkedIn API, Shine API, Indeed API, Email Parser | Platform → Parsed resume → CRM |
| 7.2 Interview Scheduler | Google Calendar API, WhatsApp Business API, Email | CRM → Calendar → Candidate/Interviewer |
| 7.3 Onboarding Agent | WhatsApp Business API, Email, M6.5 E-Signature, Google Drive | CRM trigger → WhatsApp → Document vault |
| 7.4 Payroll Agent | Biometric System, Tally Prime API, Zoho Books, WhatsApp API, PF/ESI portals | Attendance + M7.5 → Calculations → Tally + Payslip → Employee |
| 7.5 Performance AI | M4 (pipeline data), M1 (lead assignment), M2 (chatbot handoffs) | CRM data pull → Score engine → Dashboard + M7.4 |
| 7.6 Talent Sourcing | Naukri Resume DB, LinkedIn Recruiter API, Shine, Indeed | Platform search → Scored profiles → CRM |
| 7.7 HR Policy Chatbot | WhatsApp Business API, RAG knowledge base, HRMS | Employee message → RAG retrieval → WhatsApp response + HRMS action |

---

## Demo Build Prompt for M7

**M7 — HR Pipeline Dashboard:**
Build a comprehensive HR Pipeline Automation dashboard for Fortiv Solutions Real Estate AI Command Center. Include: (1) Hiring funnel bar showing stages from Sourced (142) to Joined (3); (2) Agent performance scorecard grid for 5 agents — Priya Rana (88, Top Performer), Rahul Modi (92, Top Performer), Ankit Shah (42, Needs Attention), Meera Patel (68, On Track), Kiran Desai (76, On Track) — with animated score rings and coaching flag for Ankit; (3) January 2025 payroll summary card — ₹14.2L gross, 28 employees, processed ✓; (4) Interview pipeline Kanban with 4 candidate cards across Invite Sent / Confirmed / Completed / Outcome stages; (5) HR Policy Chatbot panel on right with WhatsApp-style chat showing Ankit Shah's leave balance query resolved in 3 messages. Dark background #0D1B2A, navy #1A3C5E primary, JetBrains Mono for numbers, pulsing green badge for top performers. React + recharts app.

---

## Summary: M7 at a Glance

| Item | Detail |
|---|---|
| Module | M7 — HR Pipeline Automation |
| Sub-modules | 7 (7.1 → 7.7) |
| Total pages | 8 (1 dashboard + 7 sub-module pages) |
| Primary data objects | Candidate records, Employee records, Payroll entries, Performance scores |
| Channels covered | Naukri, LinkedIn, Shine, Indeed, WhatsApp, Email, Google Calendar, Tally Prime |
| Key output | Hired → onboarded → paid → performance-tracked employees with zero manual HR bottlenecks |
| Demo focus | Agent performance scorecards + payroll processing animation + chatbot live query resolution |
| Design tone | Dark navy dashboard, data-dense, metric-driven, professional |
| Statutory compliance | PF, ESI, Professional Tax (Gujarat), TDS, DPDP Act 2023 |
| Currency | ₹ Indian Rupee — Lakhs (L) and Crores (Cr) |
| Date format | DD/MM/YYYY |
| Languages | English (primary) · Hindi · Gujarati |

---

*Real Estate AI Command Center — Module 7 Build Guide*  
*by Fortiv Solutions · fortivsolutions.in*  
*Version 2.0 · Confidential*
