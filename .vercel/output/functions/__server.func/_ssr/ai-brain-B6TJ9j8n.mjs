import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, C as Card } from "./AppShell-BfHv5p0k.mjs";
import { j as Route$1 } from "./router-D7ZC1b3P.mjs";
import { m as ChevronLeft, b as ArrowRight, A as Activity, a6 as Users, S as Search, a3 as User, e as Building, y as MessageCircle, F as FileText, W as ShieldCheck, Y as Sparkles, a0 as TrendingUp, o as CircleAlert, t as Download } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/cmdk.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-tooltip.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const initialRiskDeals = [{
  rank: 1,
  name: "Rajesh Patel",
  unit: "A-804",
  project: "Greenview Heights",
  value: 575e4,
  stage: "Negotiation",
  score: 62,
  level: "High",
  reason: "No contact 7 days + sentiment drop",
  days: 14,
  rm: "Priya Rana"
}, {
  rank: 2,
  name: "Vikram Joshi",
  unit: "B-1201",
  project: "Skyline Residences",
  value: 142e5,
  stage: "Negotiation",
  score: 78,
  level: "High",
  reason: "Payment overdue + 3 missed calls",
  days: 22,
  rm: "Rahul Modi"
}, {
  rank: 3,
  name: "Mahesh Khanna",
  unit: "S-1104",
  project: "Skyline Residences",
  value: 98e5,
  stage: "Negotiation",
  score: 84,
  level: "Critical",
  reason: "Mentioned Shreenath project + 12 days idle",
  days: 28,
  rm: "Kiran Desai"
}, {
  rank: 4,
  name: "Pooja Sharma",
  unit: "A-607",
  project: "Greenview Heights",
  value: 542e4,
  stage: "Visited",
  score: 58,
  level: "Medium",
  reason: "No follow-up engagement for 8 days",
  days: 8,
  rm: "Ankit Shah"
}, {
  rank: 5,
  name: "Suresh Nair",
  unit: "BP-102",
  project: "Business Park",
  value: 28e6,
  stage: "Negotiation",
  score: 71,
  level: "High",
  reason: "Stage stagnation 18 days + low response",
  days: 18,
  rm: "Rahul Modi"
}, {
  rank: 6,
  name: "Deepak Trivedi",
  unit: "A-906",
  project: "Greenview Heights",
  value: 575e4,
  stage: "Booking Due",
  score: 29,
  level: "Low",
  reason: "All signals positive",
  days: 3,
  rm: "Priya Rana"
}, {
  rank: 7,
  name: "Sunita Mehta",
  unit: "C-502",
  project: "Greenview Heights",
  value: 62e5,
  stage: "Visited",
  score: 44,
  level: "Medium",
  reason: "No portal login in 9 days",
  days: 9,
  rm: "Priya Rana"
}, {
  rank: 8,
  name: "Kavita Agarwal",
  unit: "B-904",
  project: "Skyline Residences",
  value: 88e5,
  stage: "Negotiation",
  score: 66,
  level: "High",
  reason: "Budget concern raised, no resolution",
  days: 11,
  rm: "Kiran Desai"
}, {
  rank: 9,
  name: "Anita Gujarati",
  unit: "A-302",
  project: "Greenview Heights",
  value: 38e5,
  stage: "Site Visit Scheduled",
  score: 18,
  level: "Low",
  reason: "Visit confirmed, WhatsApp responsive",
  days: 2,
  rm: "Meera Patel"
}, {
  rank: 10,
  name: "Sanjay Kapoor",
  unit: "BP-401",
  project: "Business Park",
  value: 32e6,
  stage: "Negotiation",
  score: 89,
  level: "Critical",
  reason: "88-day overdue + no response + legal flag",
  days: 34,
  rm: "Rahul Modi"
}, {
  rank: 11,
  name: "Ritu Bhandari",
  unit: "A-1104",
  project: "Greenview Heights",
  value: 52e5,
  stage: "Visited",
  score: 37,
  level: "Medium",
  reason: "Brochure not opened after 6 days",
  days: 6,
  rm: "Ankit Shah"
}, {
  rank: 12,
  name: "Arjun Malhotra",
  unit: "S-208",
  project: "Skyline Residences",
  value: 12e6,
  stage: "Negotiation",
  score: 52,
  level: "Medium",
  reason: "Sentiment neutral — needs nudge",
  days: 7,
  rm: "Kiran Desai"
}, {
  rank: 13,
  name: "Nisha Verma",
  unit: "A-409",
  project: "Greenview Heights",
  value: 55e5,
  stage: "Inquiry",
  score: 12,
  level: "Low",
  reason: "Fresh lead, high engagement",
  days: 1,
  rm: "Meera Patel"
}, {
  rank: 14,
  name: "Priya Shah",
  unit: "A-1102",
  project: "Greenview Heights",
  value: 575e4,
  stage: "Booking Amount Paid",
  score: 8,
  level: "Low",
  reason: "Payment received, booking confirmed",
  days: 2,
  rm: "Priya Rana"
}, {
  rank: 15,
  name: "Amit Desai",
  unit: "B-602",
  project: "Skyline Residences",
  value: 495e4,
  stage: "Visited",
  score: 41,
  level: "Medium",
  reason: "Follow-up D4 pending — no response yet",
  days: 4,
  rm: "Ankit Shah"
}];
const initialCpDeals = [{
  id: "CPD-1",
  cpName: "Rajhans Realtors",
  buyer: "Priya Shah",
  unit: "A-1102",
  project: "Greenview Heights",
  value: 575e4,
  stage: "Booked",
  commission: 115e3,
  paid: 115e3,
  status: "Paid"
}, {
  id: "CPD-2",
  cpName: "Prime Realty",
  buyer: "Kavita Agarwal",
  unit: "B-904",
  project: "Skyline Residences",
  value: 88e5,
  stage: "Under Negotiation",
  commission: 176e3,
  paid: 0,
  status: "Pending"
}, {
  id: "CPD-3",
  cpName: "Landmark Properties",
  buyer: "Deepak Trivedi",
  unit: "A-906",
  project: "Greenview Heights",
  value: 575e4,
  stage: "Booked",
  commission: 115e3,
  paid: 115e3,
  status: "Paid"
}, {
  id: "CPD-4",
  cpName: "City Property Hub",
  buyer: "Vikram Joshi",
  unit: "B-1201",
  project: "Skyline Residences",
  value: 142e5,
  stage: "Under Negotiation",
  commission: 284e3,
  paid: 0,
  status: "Pending"
}, {
  id: "CPD-5",
  cpName: "SNS Land Brokers",
  buyer: "Anita Gujarati",
  unit: "A-302",
  project: "Greenview Heights",
  value: 38e5,
  stage: "Booked",
  commission: 76e3,
  paid: 76e3,
  status: "Paid"
}, {
  id: "CPD-6",
  cpName: "Om Realtors",
  buyer: "Mahesh Khanna",
  unit: "S-1104",
  project: "Skyline Residences",
  value: 98e5,
  stage: "Under Negotiation",
  commission: 196e3,
  paid: 0,
  status: "Approval pending"
}];
const cpLeaderboard = [{
  rank: 1,
  name: "Rajhans Realtors",
  rera: "GJ/A/SURAT/00234",
  deals: 8,
  booked: 3,
  earned: 62e4,
  trophy: "🏆 Top CP Jan 2025"
}, {
  rank: 2,
  name: "Prime Realty",
  rera: "GJ/A/VADODARA/00511",
  deals: 6,
  booked: 2,
  earned: 48e4,
  trophy: ""
}, {
  rank: 3,
  name: "Landmark Properties",
  rera: "GJ/A/SURAT/00188",
  deals: 5,
  booked: 2,
  earned: 41e4,
  trophy: ""
}, {
  rank: 4,
  name: "City Property Hub",
  rera: "GJ/A/SURAT/00344",
  deals: 4,
  booked: 1,
  earned: 32e4,
  trophy: ""
}, {
  rank: 5,
  name: "SNS Land Brokers",
  rera: "GJ/A/SURAT/00222",
  deals: 3,
  booked: 1,
  earned: 28e4,
  trophy: ""
}, {
  rank: 6,
  name: "Om Realtors",
  rera: "GJ/A/VADODARA/00812",
  deals: 3,
  booked: 1,
  earned: 24e4,
  trophy: ""
}];
const rbacUsers = [{
  id: "USR-001",
  name: "Priya Rana",
  email: "priya.rana@fortivsolutions.in",
  role: "Sales Agent",
  dept: "Sales — Surat",
  status: "Active",
  mfa: true,
  lastLogin: "16/01/2025 09:14"
}, {
  id: "USR-002",
  name: "Rahul Modi",
  email: "rahul.modi@fortivsolutions.in",
  role: "Sales Manager",
  dept: "Sales — Vadodara",
  status: "Active",
  mfa: true,
  lastLogin: "16/01/2025 14:23"
}, {
  id: "USR-003",
  name: "Ankit Shah",
  email: "ankit.shah@fortivsolutions.in",
  role: "Sales Agent",
  dept: "Sales — Surat",
  status: "Active",
  mfa: false,
  lastLogin: "16/01/2025 11:45"
}, {
  id: "USR-004",
  name: "Meera Patel",
  email: "meera.patel@fortivsolutions.in",
  role: "Senior Agent",
  dept: "Sales — Surat",
  status: "Active",
  mfa: true,
  lastLogin: "16/01/2025 10:30"
}, {
  id: "USR-005",
  name: "Kiran Desai",
  email: "kiran.desai@fortivsolutions.in",
  role: "Sales Agent",
  dept: "Sales — Vadodara",
  status: "Active",
  mfa: false,
  lastLogin: "16/01/2025 09:00"
}, {
  id: "USR-006",
  name: "CFO Shah",
  email: "cfo.shah@fortivsolutions.in",
  role: "CFO",
  dept: "Finance — Surat",
  status: "Active",
  mfa: true,
  lastLogin: "16/01/2025 08:30"
}, {
  id: "USR-007",
  name: "System Admin",
  email: "admin@fortivsolutions.in",
  role: "System Admin",
  dept: "IT — Surat",
  status: "Active",
  mfa: true,
  lastLogin: "16/01/2025 15:45"
}];
const securityAuditLogs = [{
  id: "LOG-01",
  time: "16/01/2025 14:23",
  user: "Priya Rana",
  action: "View Record",
  module: "M4 Sales",
  record: "Deal — Rajesh Patel (DEAL-0412)",
  ip: "192.168.1.42",
  type: "info"
}, {
  id: "LOG-02",
  time: "16/01/2025 14:25",
  user: "Priya Rana",
  action: "Modify Record",
  module: "M4 Sales",
  record: "Deal stage updated: Visited → Negotiation",
  ip: "192.168.1.42",
  type: "info"
}, {
  id: "LOG-03",
  time: "16/01/2025 13:00",
  user: "Rahul Modi",
  action: "Export Data",
  module: "M5 Analytics",
  record: "Weekly Collections Report — Jan W3",
  ip: "192.168.1.18",
  type: "warning"
}, {
  id: "LOG-04",
  time: "16/01/2025 11:45",
  user: "Ankit Shah",
  action: "View Record",
  module: "M1 Leads",
  record: "Lead — Pooja Sharma (LEAD-0847)",
  ip: "192.168.1.55",
  type: "info"
}, {
  id: "LOG-05",
  time: "16/01/2025 10:30",
  user: "System Admin",
  action: "Role Change",
  module: "M12.5 RBAC",
  record: "Meera Patel — Agent → Senior Agent",
  ip: "192.168.1.01",
  type: "critical"
}, {
  id: "LOG-06",
  time: "15/01/2025 23:14",
  user: "Unknown",
  action: "Failed Login",
  module: "Auth Core",
  record: "MFA challenge failed: priya.rana@fortivsolutions.in",
  ip: "45.33.10.84",
  type: "alert"
}];
const dpdpConsents = [{
  id: "CONS-01",
  name: "Rajesh Patel",
  contact: "+91 98765 XXXXX",
  purpose: "Property inquiries outreach",
  text: "I consent to Fortiv Solutions contacting me for project sales...",
  source: "99acres Form",
  time: "03/01/2025 09:14",
  status: "Active",
  expiry: "03/01/2027"
}, {
  id: "CONS-02",
  name: "Vikram Joshi",
  contact: "+91 98251 XXXXX",
  purpose: "Home Loan Copilot calculations",
  text: "I authorize sharing basic financials with partner banks...",
  source: "Portal Register",
  time: "05/01/2025 10:00",
  status: "Active",
  expiry: "05/01/2027"
}, {
  id: "CONS-03",
  name: "Sunita Mehta",
  contact: "+91 94281 XXXXX",
  purpose: "Direct WhatsApp updates",
  text: "I consent to receive automatic slab castings alerts...",
  source: "WhatsApp Bot Opt-in",
  time: "22/01/2025 10:00",
  status: "Active",
  expiry: "22/01/2027"
}, {
  id: "CONS-04",
  name: "Sanjay Kapoor",
  contact: "+91 98980 XXXXX",
  purpose: "KYC verification & RERA upload",
  text: "I authorize processing PAN/Aadhaar details for sale deed...",
  source: "KYC Document Portal",
  time: "08/01/2025 08:00",
  status: "Active",
  expiry: "08/01/2032"
}, {
  id: "CONS-05",
  name: "Suresh Nair",
  contact: "+91 97240 XXXXX",
  purpose: "Marketing Newsletter",
  text: "I consent to receive upcoming projects info...",
  source: "Website Widget",
  time: "19/12/2024 11:30",
  status: "Withdrawn",
  expiry: "Withdrawn 15/01/2025"
}];
const dpdpRequests = [{
  id: "DSR-001",
  name: "Suresh Nair",
  type: "Withdrawal & Deletion",
  date: "15/01/2025",
  slaDays: 2,
  status: "In Progress",
  details: "Withdraw marketing consent and purge campaign leads logs."
}, {
  id: "DSR-002",
  name: "Priya Shah",
  type: "Correction",
  date: "22/01/2025",
  slaDays: 5,
  status: "Under Review",
  details: "Update PAN details to correct spelling mistake in agreement draft."
}, {
  id: "DSR-003",
  name: "Rajesh Patel",
  type: "Access Request",
  date: "24/01/2025",
  slaDays: 6,
  status: "New",
  details: "Export all WhatsApp conversations and payment ledger files in PDF."
}];
const moduleHealthData = [{
  name: "M1 — Lead Generation & Scoring",
  status: "Active",
  uptime: "99.8%",
  speed: "1.2s",
  incident: "05/01/2025"
}, {
  name: "M2 — Conversational WhatsApp AI",
  status: "Active",
  uptime: "99.9%",
  speed: "0.8s",
  incident: "—"
}, {
  name: "M3 — Property Intel & AVM Core",
  status: "Active",
  uptime: "99.6%",
  speed: "2.1s",
  incident: "12/01/2025"
}, {
  name: "M4 — Sales Pipeline & CRM Broker",
  status: "Active",
  uptime: "99.9%",
  speed: "0.9s",
  incident: "—"
}, {
  name: "M5 — Analytics & Campaign ROI",
  status: "Active",
  uptime: "99.7%",
  speed: "1.8s",
  incident: "08/01/2025"
}, {
  name: "M6 — Document AI & Digital KYC",
  status: "Active",
  uptime: "99.5%",
  speed: "3.2s",
  incident: "10/01/2025"
}, {
  name: "M7 — HR Pipeline & Agent Comm.",
  status: "Active",
  uptime: "99.8%",
  speed: "1.4s",
  incident: "—"
}, {
  name: "M8 — Tenant Portal & Loan Copilot",
  status: "Degraded",
  uptime: "97.2%",
  speed: "4.8s",
  incident: "15/01/2025"
}, {
  name: "M9 — Construction Progress & Gantt",
  status: "Active",
  uptime: "99.6%",
  speed: "1.6s",
  incident: "03/01/2025"
}, {
  name: "M10 — Homeowner & Post-Sale Feed",
  status: "Active",
  uptime: "99.9%",
  speed: "0.7s",
  incident: "—"
}, {
  name: "M11 — Revenue Ledger & Finance Sync",
  status: "Active",
  uptime: "99.8%",
  speed: "1.3s",
  incident: "07/01/2025"
}, {
  name: "M12 — Neural Core & Neural Security",
  status: "Active",
  uptime: "99.9%",
  speed: "0.6s",
  incident: "—"
}];
const externalApisHealth = [{
  name: "WhatsApp Business API (Meta)",
  type: "Communication",
  status: "Active",
  delay: "180ms",
  errors: "0.02%",
  uptime: "99.9%"
}, {
  name: "99acres Leads Webhook",
  type: "Integration",
  status: "Active",
  delay: "450ms",
  errors: "0.10%",
  uptime: "99.6%"
}, {
  name: "MagicBricks API",
  type: "Integration",
  status: "Active",
  delay: "420ms",
  errors: "0.08%",
  uptime: "99.7%"
}, {
  name: "Tally Prime ERP Connector",
  type: "Accounting Sync",
  status: "Degraded",
  delay: "3200ms",
  errors: "3.20%",
  uptime: "97.4%"
}, {
  name: "Google Firebase Auth",
  type: "Security",
  status: "Active",
  delay: "95ms",
  errors: "0.00%",
  uptime: "99.9%"
}];
const liveSystemWorkflows = [{
  name: "Facebook Lead Capture Sync",
  type: "Real-time",
  lastRun: "16/01/2025 14:31:02",
  success: "99.9%",
  queue: 0
}, {
  name: "Milestone Billing tranches batcher",
  type: "Triggered",
  lastRun: "16/01/2025 14:00:00",
  success: "100.0%",
  queue: 0
}, {
  name: "CP Portal Commission pipeline pusher",
  type: "Triggered",
  lastRun: "16/01/2025 13:55:12",
  success: "99.8%",
  queue: 2
}, {
  name: "Tally prime ledger sync batch",
  type: "EOD (Batch)",
  lastRun: "15/01/2025 22:00:00",
  success: "96.8%",
  queue: 3
}];
const INSIGHTS = [{
  id: "AI-1",
  type: "Sales",
  text: "Facebook leads who visit the website pricing page within 24 hours of inquiry convert 3.1× higher than those who don't.",
  confidence: 91,
  action: "Prioritize leads in CRM routing",
  rm: "Sales Manager (Rahul Modi) + Marketing"
}, {
  id: "AI-2",
  type: "Pricing",
  text: "Units on Floors 8–12, Tower A, Greenview Heights are taking 40% longer to sell than other floors. Indicating high pricing sensitivity.",
  confidence: 84,
  action: "Review pricing or design scheme",
  rm: "MD + Sales Director"
}, {
  id: "AI-3",
  type: "Team",
  text: "Agent Rahul Modi's conversion rate drops by 34% when he handles more than 45 active leads simultaneously. Below 40, his rate is highest.",
  confidence: 88,
  action: "Cap agent active lead assignments",
  rm: "Sales Manager (Rahul Modi)"
}, {
  id: "AI-4",
  type: "Sales",
  text: "Site visits conducted on Saturdays have 2.4× the booking conversion rate compared to weekday visits.",
  confidence: 79,
  action: "Increase Saturday visit slots capacity",
  rm: "Sales Team"
}, {
  id: "AI-5",
  type: "Finance",
  text: "Business Park collections are 12% below monthly target for 2 consecutive months. Margin variance tracks 3.8% below pro-forma.",
  confidence: 86,
  action: "Audit costs & accelerate demands",
  rm: "Finance Director"
}, {
  id: "AI-6",
  type: "Market",
  text: "Shreenath Builders cut 2BHK prices in Vesu by ₹1.8L this week (now ₹54.2L vs Fortiv ₹57.5L). Local inquiries dropped 14%.",
  confidence: 77,
  action: "Launch closing incentive scheme",
  rm: "Marketing Director + MD"
}, {
  id: "AI-7",
  type: "Risk",
  text: "4 deals in Negotiation stage have been idle for 10+ days with no agent contact logged. Approaching critical abandonment risk.",
  confidence: 93,
  action: "Trigger manager-level outreach",
  rm: "Sales Manager (Rahul Modi)"
}];
const statusDotStyle = (status) => {
  if (["Active", "Success", "Paid", "Completed", "ok"].some((s) => s.toLowerCase() === status.toLowerCase())) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block shrink-0" });
  if (["Degraded", "In Progress", "Under Review", "warn", "Approval pending", "Pending"].some((s) => s.toLowerCase() === status.toLowerCase())) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse inline-block shrink-0" });
  if (["Action Required", "Critical", "Withdrawn", "Failed", "alert", "error"].some((s) => s.toLowerCase() === status.toLowerCase())) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse inline-block shrink-0" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-slate-400 inline-block shrink-0" });
};
const statusBadgeStyle = (status) => {
  if (["Active", "Success", "Paid", "Completed", "ok"].some((s) => s.toLowerCase() === status.toLowerCase())) return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (["Degraded", "In Progress", "Under Review", "warn", "Approval pending", "Pending"].some((s) => s.toLowerCase() === status.toLowerCase())) return "bg-amber-50 text-amber-700 border border-amber-100";
  if (["Action Required", "Critical", "Withdrawn", "Failed", "alert", "error"].some((s) => s.toLowerCase() === status.toLowerCase())) return "bg-red-50 text-[#D85A30] border border-red-100";
  return "bg-slate-50 text-slate-600 border border-slate-200";
};
function AIBrainModule() {
  const {
    tab
  } = Route$1.useSearch();
  const navigate = useNavigate({
    from: Route$1.fullPath
  });
  const activeTab = tab || "menu";
  const setActiveTab = (newTab) => {
    const nextTab = typeof newTab === "function" ? newTab(activeTab) : newTab;
    navigate({
      search: (prev) => ({
        ...prev,
        tab: nextTab === "menu" ? void 0 : nextTab
      })
    });
  };
  const submodulesList = [{
    id: "overview",
    name: "AI Command Dashboard",
    desc: "Stitches all 11 modules into one thinking core. Displays network data graph, live rotating insights feed, system health summaries, and high-risk deals.",
    stats: "Data Processed: 2.4M",
    status: "Active"
  }, {
    id: "graph",
    name: "Unified Customer Intelligence Graph",
    desc: "Assembles 360° buyer profile records, chronological interaction histories, real-time message sentiment tracking, and recommended next best actions.",
    stats: "1,247 Profiles Tracked",
    status: "Active"
  }, {
    id: "insights",
    name: "Cross-Module AI Insights Engine",
    desc: "Surfaces pricing sensitivities, team workload caps, Saturday visit multipliers, and competitor movements with confidence indicators.",
    stats: "8 Insights Active",
    status: "Active"
  }, {
    id: "risk",
    name: "Predictive Deal Risk Scorer",
    desc: "Monitors 8 deal threat vectors (recency stagnation, sentiment decay, loan friction) to alert sales managers with intervention playbooks.",
    stats: "3 Critical Risk Deals",
    status: "Active"
  }, {
    id: "cp-portal",
    name: "Channel Partner Portal & Tracker",
    desc: "Simulates broker self-registration, client deduplication checks, commission pipelines tracking, and resources kits downloads.",
    stats: "6 CPs Registered",
    status: "Active"
  }, {
    id: "rbac",
    name: "Role-Based Access Control",
    desc: "Manages permissions matrices across roles, user status suspension toggles, and security logs with failed-attempt alerts.",
    stats: "MFA: 100% Enabled (Mgr+)",
    status: "Active"
  }, {
    id: "dpdp",
    name: "DPDP Act Compliance Layer",
    desc: "Validates consent registers by source, manages access/deletion subject requests queues, and runs breach response procedures.",
    stats: "Compliant (DPDP 2023)",
    status: "Active"
  }, {
    id: "health",
    name: "System Health & Uptime Dashboard",
    desc: "Tracks live uptime grids across 12 modules, latency checkers for WhatsApp & Tally APIs, and active workflow queue depths.",
    stats: "System Uptime: 99.8%",
    status: "Active"
  }];
  const getPageHeader = () => {
    const map = {
      menu: {
        title: "AI Brain, Data Layer & Security Neural Core",
        subtitle: "The intelligence layer that connects all 11 business modules into a unified data environment, predicting deal risks, managing broker portals, and securing operations."
      },
      overview: {
        title: "AI Command Overview Dashboard",
        subtitle: "Helicopter view of intelligence metrics, live cycling cross-module findings, active risks, and module health logs."
      },
      graph: {
        title: "Unified Customer Intelligence Graph",
        subtitle: "A 360° timeline profile linking CRM, WhatsApp, documents, and payments records into one semantic map."
      },
      insights: {
        title: "Cross-Module AI Insights Engine",
        subtitle: "Discovers price sensitivities, team bottlenecks, and competitor actions to route warnings to directors."
      },
      risk: {
        title: "Predictive Deal Risk Scorer",
        subtitle: "Computes deal abandonment risks using contact recency, sentiment drops, and competitor mention signals."
      },
      "cp-portal": {
        title: "Channel Partner Portal Admin Panel",
        subtitle: "Manage broker deal submissions, track stage-based commission payouts, and view resource downloads."
      },
      rbac: {
        title: "Role-Based Access Control Console",
        subtitle: "Define granular viewing matrices, toggle MFA checks, and review active audit log records."
      },
      dpdp: {
        title: "DPDP Act Compliance Registry",
        subtitle: "Track explicit consent records, process subject requests, monitor retention policies, and test breach playbooks."
      },
      health: {
        title: "System Health & Uptime Mission Control",
        subtitle: "Real-time latency logs, external API connector indicators, and EOD batch queue monitors."
      }
    };
    return map[activeTab] || map.menu;
  };
  const headerInfo = getPageHeader();
  const dynamicTitle = activeTab === "menu" ? headerInfo.title : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("menu"), className: "group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95 mr-0.5", "aria-label": "Back to AI Core Menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors", onClick: () => setActiveTab("menu"), children: headerInfo.title })
  ] });
  const [insightIdx, setInsightIdx] = reactExports.useState(0);
  const [selectedGraphNode, setSelectedGraphNode] = reactExports.useState("center");
  reactExports.useEffect(() => {
    if (activeTab === "overview") {
      const timer = setInterval(() => {
        setInsightIdx((prev) => (prev + 1) % INSIGHTS.length);
      }, 4e3);
      return () => clearInterval(timer);
    }
  }, [activeTab]);
  const activeInsight = INSIGHTS[insightIdx];
  const graphNodeDetails = reactExports.useMemo(() => {
    const detailsMap = {
      center: {
        label: "Data Principal",
        text: "Rajesh Patel · VP Sales at Adani Group. In negotiation stage for Unit A-804 at Greenview Heights (₹57.5L).",
        stat: "Profile Completion: 87%"
      },
      lead: {
        label: "Lead Source (M1)",
        text: "Captured on 03/01/2025 via 99acres Lead Ads (Vesu campaign). Income bracket verified: ₹18-25L/year.",
        stat: "Initial AI Score: 46 (Warm)"
      },
      agent: {
        label: "Relationship Manager (M4)",
        text: "Managed by Priya Rana (Sales Team Surat). 14 direct phone/chat interactions logged.",
        stat: "Agent Score: 4.8/5 (Highly Responsive)"
      },
      property: {
        label: "Property Matching (M3)",
        text: "Matched configuration: 2BHK (1,180 sq ft) on Floor 8. 2 site visits completed on 11/01 and 18/01.",
        stat: "AVM Target: ₹57.5L"
      },
      whatsapp: {
        label: "WhatsApp Chat (M2)",
        text: "Last response: 22/01/2025. Sentiment dropped from 0.81 (enthusiastic) to 0.51 (short replies, idle).",
        stat: "WhatsApp Active: ✓"
      },
      payments: {
        label: "Finance (M11)",
        text: "Total billed to date: ₹24.6L. Total collected: ₹18.2L. Outstanding: ₹6.4L.",
        stat: "Collection Rate: 74%"
      },
      documents: {
        label: "Document AI (M6)",
        text: "KYC documents collected (PAN, Aadhaar). Agreement signed and e-verified successfully.",
        stat: "Status: Verified"
      },
      nps: {
        label: "NPS Survey (M10)",
        text: "Loyalty bot post-sale survey scheduled for Q4 2025 pre-possession.",
        stat: "Status: Pending Handover"
      }
    };
    return detailsMap[selectedGraphNode] || detailsMap.center;
  }, [selectedGraphNode]);
  const renderOverview = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Leads Tracked", value: "1,247", desc: "Registered in CRM", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Automations Run Today", value: "8,234", desc: "Cross-module rules", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "WhatsApp Sent", value: "3,812", desc: "Chatbot + RM triggers", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Active Deals", value: "68", desc: "Pipeline value: ₹42.8Cr", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Data Points Processed", value: "2.4M", desc: "Neural core engine", color: "text-[#D85A30]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-8 p-4 border border-border bg-card flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-3 border-b border-border/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-[10px] uppercase text-slate-500 tracking-wider font-display flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5 text-primary" }),
            " Interactive Customer Knowledge Graph"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono text-slate-400", children: "Click outer nodes to inspect touchpoints" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7 flex items-center justify-center relative bg-slate-950/20 rounded-2xl border border-border/20 p-2 min-h-[260px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", style: {
              filter: "drop-shadow(0 0 6px rgba(46,134,171,0.25))"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50%", y1: "50%", x2: "25%", y2: "25%", stroke: "#2E86AB", strokeWidth: "1.5", strokeDasharray: "3 3", className: "animate-[pulse_2s_infinite]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50%", y1: "50%", x2: "75%", y2: "25%", stroke: "#2E86AB", strokeWidth: "1.5", strokeDasharray: "3 3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50%", y1: "50%", x2: "15%", y2: "50%", stroke: "#2E86AB", strokeWidth: "1.5", strokeDasharray: "3 3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50%", y1: "50%", x2: "85%", y2: "50%", stroke: "#2E86AB", strokeWidth: "1.5", strokeDasharray: "3 3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50%", y1: "50%", x2: "25%", y2: "75%", stroke: "#2E86AB", strokeWidth: "1.5", strokeDasharray: "3 3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50%", y1: "50%", x2: "75%", y2: "75%", stroke: "#2E86AB", strokeWidth: "1.5", strokeDasharray: "3 3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50%", y1: "50%", x2: "50%", y2: "15%", stroke: "#2E86AB", strokeWidth: "1.5", strokeDasharray: "3 3" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedGraphNode("center"), className: `absolute w-14 h-14 rounded-full bg-[#0D1B2A] border-2 flex items-center justify-center transition-all z-20 ${selectedGraphNode === "center" ? "border-primary shadow-[0_0_15px_rgba(46,134,171,0.5)] scale-110" : "border-slate-500 hover:border-primary"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-primary animate-pulse" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedGraphNode("lead"), className: `absolute top-[15%] left-[20%] w-9 h-9 rounded-full bg-[#1B263B] border grid place-items-center text-slate-300 z-10 transition-all ${selectedGraphNode === "lead" ? "border-[#2E86AB] scale-110" : "border-border"}`, title: "Lead Source", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedGraphNode("agent"), className: `absolute top-[15%] left-[70%] w-9 h-9 rounded-full bg-[#1B263B] border grid place-items-center text-slate-300 z-10 transition-all ${selectedGraphNode === "agent" ? "border-[#2E86AB] scale-110" : "border-border"}`, title: "Agent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedGraphNode("property"), className: `absolute top-[43%] left-[10%] w-9 h-9 rounded-full bg-[#1B263B] border grid place-items-center text-slate-300 z-10 transition-all ${selectedGraphNode === "property" ? "border-[#2E86AB] scale-110" : "border-border"}`, title: "Property MATCH", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedGraphNode("whatsapp"), className: `absolute top-[43%] left-[80%] w-9 h-9 rounded-full bg-[#1B263B] border grid place-items-center text-slate-300 z-10 transition-all ${selectedGraphNode === "whatsapp" ? "border-[#2E86AB] scale-110" : "border-border"}`, title: "WhatsApp Feed", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5 text-emerald-400" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedGraphNode("payments"), className: `absolute top-[70%] left-[20%] w-9 h-9 rounded-full bg-[#1B263B] border grid place-items-center text-slate-300 z-10 transition-all ${selectedGraphNode === "payments" ? "border-[#2E86AB] scale-110" : "border-border"}`, title: "Payments Ledger", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5 text-amber-500" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedGraphNode("documents"), className: `absolute top-[70%] left-[70%] w-9 h-9 rounded-full bg-[#1B263B] border grid place-items-center text-slate-300 z-10 transition-all ${selectedGraphNode === "documents" ? "border-[#2E86AB] scale-110" : "border-border"}`, title: "Documents AI", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5 text-blue-400" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedGraphNode("nps"), className: `absolute top-[5%] left-[45%] w-9 h-9 rounded-full bg-[#1B263B] border grid place-items-center text-slate-300 z-10 transition-all ${selectedGraphNode === "nps" ? "border-[#2E86AB] scale-110" : "border-border"}`, title: "NPS Survey", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-purple-400" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 flex flex-col justify-between bg-secondary/20 p-3 rounded-2xl border border-border/40 font-mono text-[10px] leading-relaxed text-slate-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/30 pb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground uppercase tracking-wider", children: graphNodeDetails.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded font-mono", children: graphNodeDetails.stat })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-sans font-medium text-slate-300 leading-normal", children: graphNodeDetails.text })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("graph"), className: "mt-4 h-7 w-full rounded bg-ink hover:bg-ink/90 text-cream text-[9px] font-mono uppercase tracking-wider flex items-center justify-center gap-1", children: [
              "Inspect 360° Profile ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4 border border-border bg-card flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/40 pb-2 flex justify-between items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-[10px] uppercase text-slate-500 tracking-wider font-display flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary animate-pulse" }),
            " Live Neural Core Findings"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono text-slate-400", children: "Cycles 4 seconds" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-between space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[8.5px] font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle("Active")}`, children: [
                activeInsight.type,
                " Insight"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono text-slate-400 font-bold", children: [
                "Confidence: ",
                activeInsight.confidence,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground font-semibold leading-relaxed font-sans", children: activeInsight.text }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] text-slate-400 font-normal", children: [
              "Route Action: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-slate-600 font-mono", children: activeInsight.action })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              alert(`Insight [${activeInsight.id}] routed successfully to ${activeInsight.rm}.`);
            }, className: "h-8 w-full rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold uppercase tracking-wider transition-all", children: "Action Recommendation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: INSIGHTS.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setInsightIdx(idx), className: `h-1.5 flex-1 rounded-full transition-all ${idx === insightIdx ? "bg-primary" : "bg-slate-200 hover:bg-slate-300"}`, "aria-label": `Go to insight ${idx + 1}` }, idx)) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/40 pb-2 flex justify-between items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-[10px] uppercase text-slate-500 tracking-wider font-display flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-emerald-500" }),
            " Platform Modules Health Core"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("health"), className: "text-[9px] font-bold text-primary underline font-mono", children: "Mission Control" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs font-semibold", children: moduleHealthData.map((m, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/20 pb-1.5 last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            statusDotStyle(m.status),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground text-[11px] truncate max-w-[200px]", children: m.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-slate-400 font-bold", children: m.uptime })
        ] }, idx)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/40 pb-2 flex justify-between items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-[10px] uppercase text-slate-500 tracking-wider font-display flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5 text-[#D85A30]" }),
            " High-Risk Active Deals"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("risk"), className: "text-[9px] font-bold text-primary underline font-mono", children: "Risk Matrix" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: initialRiskDeals.slice(0, 3).map((deal, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center bg-secondary/35 p-2 rounded-xl border border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground text-[11px] font-bold", children: [
              deal.name,
              " · Unit ",
              deal.unit
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9.5px] text-slate-400 font-normal", children: deal.reason })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-red-500 bg-red-50 border border-red-100 px-1.5 py-0.5 rounded text-[10px]", children: deal.score }) })
        ] }, idx)) })
      ] }) })
    ] })
  ] });
  const [selectedProfile, setSelectedProfile] = reactExports.useState("Rajesh Patel");
  const activeProfileData = reactExports.useMemo(() => {
    return initialRiskDeals.find((b) => b.name === selectedProfile) || initialRiskDeals[0];
  }, [selectedProfile]);
  const customerTimeline = reactExports.useMemo(() => {
    if (selectedProfile === "Rajesh Patel") {
      return [{
        time: "03/01/2025 09:14",
        type: "Lead Captured",
        text: "Inquiry from 99acres — 2BHK Vesu ₹48–60L",
        module: "M1.4"
      }, {
        time: "03/01/2025 09:14",
        type: "AI Score Set",
        text: "Initial score: 46 (Warm)",
        module: "M1.6"
      }, {
        time: "03/01/2025 09:15",
        type: "WhatsApp Sent",
        text: "Auto-acknowledgement sent introducing RM Priya Rana",
        module: "M2.1"
      }, {
        time: "03/01/2025 09:22",
        type: "WhatsApp Reply",
        text: "Buyer replied: 'Yes interested, when can I visit?'",
        module: "M2.1"
      }, {
        time: "03/01/2025 09:22",
        type: "Score Update",
        text: "Score: 46 → 58 (+12, WhatsApp reply in <5min)",
        module: "M1.6"
      }, {
        time: "03/01/2025 09:45",
        type: "Profile Enriched",
        text: "VP Sales, Adani Group, ₹18–25L income tier verified",
        module: "M1.5"
      }, {
        time: "05/01/2025 10:00",
        type: "Agent Call Log",
        text: "Priya Rana called — 8 min discussion — noted: prefers Floor 6+",
        module: "M4.1"
      }, {
        time: "06/01/2025 14:00",
        type: "Brochure Opened",
        text: "Tracked PDF opened — 4 min 32 sec reading time logged",
        module: "M2.6"
      }, {
        time: "11/01/2025 11:00",
        type: "Site Visit 1",
        text: "Attended — 45 min — Interested in Tower A Floor 8 layouts",
        module: "M4.2"
      }, {
        time: "18/01/2025 11:00",
        type: "Site Visit 2",
        text: "Attended with spouse — requested pricing for Unit 804",
        module: "M4.2"
      }, {
        time: "20/01/2025 09:00",
        type: "Risk Alert",
        text: "Deal risk score elevated to 62: 7 days since last contact",
        module: "M12.3"
      }];
    } else {
      return [{
        time: "05/01/2025 10:00",
        type: "Lead Captured",
        text: "Referral from CP Rajhans Realtors",
        module: "M12.4"
      }, {
        time: "08/01/2025 11:00",
        type: "Site Visit Complete",
        text: "Attended with CP broker. Positive intent.",
        module: "M4.2"
      }, {
        time: "12/01/2025 12:00",
        type: "Offer Submitted",
        text: "Negotiation stage. Requested commercial term sheet.",
        module: "M4.5"
      }, {
        time: "15/01/2025 16:30",
        type: "Risk Elevated",
        text: "Risk score 78. Missed calls + payment schedule dispute.",
        module: "M12.3"
      }];
    }
  }, [selectedProfile]);
  const renderGraph = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 border-b border-border/30 pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 text-xs font-bold uppercase tracking-wider font-mono mr-2", children: "Select Buyer Profile:" }),
      ["Rajesh Patel", "Vikram Joshi", "Mahesh Khanna", "Suresh Nair", "Sanjay Kapoor"].map((name) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedProfile(name), className: `h-8 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${selectedProfile === name ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`, children: name }, name))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4 border border-border bg-card space-y-4 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pb-3 border-b border-border/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-full bg-primary/25 text-primary border border-primary/20 grid place-items-center text-sm font-bold", children: selectedProfile.split(" ").map((w) => w[0]).join("") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground text-sm font-bold", children: selectedProfile }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] font-mono text-slate-400 font-bold uppercase tracking-wide", children: [
                "Score: ",
                activeProfileData.score,
                " · ",
                activeProfileData.level,
                " Risk"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 text-xs font-semibold text-slate-600 font-mono", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/20 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Unit allocation:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-bold", children: [
                activeProfileData.unit,
                " (",
                activeProfileData.project,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/20 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Deal Value:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-bold", children: [
                "₹",
                (activeProfileData.value / 1e5).toFixed(1),
                "L"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/20 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Relationship RM:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-bold", children: activeProfileData.rm })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/20 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Designation Tier:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-bold", children: "VP / Director level" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/20 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Data Source:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-bold", children: "Organic Campaigns" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Privacy Consent:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded font-bold", children: "Active" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/40 space-y-1.5 font-mono text-[9px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sentiment Analysis (M2)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-600", children: "Neutral (0.51)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-normal leading-normal", children: "WhatsApp messaging speed dropped by 45% over the past 7 days. Empathy-first recovery sequence required." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Neural Timeline Touchpoints" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-96 overflow-y-auto scrollbar-none space-y-3 pr-1 text-xs", children: customerTimeline.map((evt, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-5 border-l border-border/60 pb-3 last:pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-slate-900 border-2 border-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-mono text-[9px] text-slate-400 mb-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: evt.time }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#2E86AB]", children: evt.module })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground font-bold", children: evt.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-normal mt-0.5 leading-normal", children: evt.text })
        ] }, idx)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-3 p-4 border border-border bg-card flex flex-col justify-between h-full min-h-[400px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "AI Recommended Action" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-50/20 border border-red-200 rounded-xl space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono font-bold text-[#D85A30] flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3.5 w-3.5 animate-bounce" }),
              " HIGH IMPACT ACTION TRIGGERED"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground text-xs font-bold leading-normal", children: "Direct Manager Call from Sales lead (Rahul Modi) — not agent." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10.5px] text-slate-400 font-normal leading-normal mt-1", children: "Unresolved discount objection (₹2L) has stalled the deal. Acknowledging the competitor creates a +18% conversion probability boost." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[9px] text-slate-500 leading-normal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Context Script:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            '"Rajesh, I wanted to personally check in. We have approved the modular kitchen incentive scheme for Floor 8 Unit 804..."'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Next best action workflow executed for ${selectedProfile}. WhatsApp dispatch triggered.`), className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all", children: "Execute Playbook Call" })
        ] })
      ] })
    ] })
  ] });
  const [insightsFilter, setInsightsFilter] = reactExports.useState("All");
  const [expandedInsight, setExpandedInsight] = reactExports.useState("AI-1");
  const [actionedInsights, setActionedInsights] = reactExports.useState({});
  const filteredInsights = reactExports.useMemo(() => {
    if (insightsFilter === "All") return INSIGHTS;
    return INSIGHTS.filter((i) => i.type.toLowerCase() === insightsFilter.toLowerCase());
  }, [insightsFilter]);
  const renderInsights = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 border-b border-border/30 pb-3", children: ["All", "Sales", "Pricing", "Team", "Finance", "Market", "Risk"].map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setInsightsFilter(cat), className: `h-8 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${insightsFilter === cat ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`, children: cat }, cat)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-7 space-y-3", children: filteredInsights.map((insight) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { onClick: () => setExpandedInsight(expandedInsight === insight.id ? null : insight.id), className: `p-4 border transition-all cursor-pointer bg-card ${expandedInsight === insight.id ? "border-primary shadow-sm" : "border-border/60 hover:border-slate-400"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8.5px] font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle("Active")}`, children: insight.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono text-slate-400 font-bold", children: [
            "Confidence: ",
            insight.confidence,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-foreground text-xs font-bold font-sans pr-4 leading-normal", children: insight.text }),
        expandedInsight === insight.id && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-border/40 text-[10.5px] leading-relaxed text-slate-400 space-y-3 font-mono animate-in fade-in duration-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-slate-500 uppercase text-[9px] tracking-wider block", children: "Recommended Action:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: insight.action })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[9.5px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Recipient Group: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: insight.rm })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Status: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: actionedInsights[insight.id] ? "text-emerald-600" : "text-slate-600", children: actionedInsights[insight.id] ? "Actioned ✓" : "Pending Action" })
            ] })
          ] }),
          !actionedInsights[insight.id] && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
            e.stopPropagation();
            setActionedInsights((prev) => ({
              ...prev,
              [insight.id]: true
            }));
            alert(`Action playbook initialized for insight [${insight.id}].`);
          }, className: "h-7 w-full rounded bg-ink hover:bg-ink/90 text-cream text-[9px] font-mono uppercase tracking-wider mt-1.5", children: "Route Action Playbook" })
        ] })
      ] }, insight.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Historical Recommendation ROI" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3.5 text-xs font-semibold", children: [{
          insight: "Saturday visits capacity shift",
          actioned: "02/12/2024",
          outcome: "Saturdays site visits +40%, booking conversion improved 2.4x",
          verified: true
        }, {
          insight: "Agent workload lead allocation cap",
          actioned: "15/11/2024",
          outcome: "Rahul Modi active conversion rose from 4.2% to 6.8%",
          verified: true
        }, {
          insight: "Vesu price closing incentive campaign",
          actioned: "14/01/2025",
          outcome: "Inquiry volumes recovered 11% back to baseline thresholds",
          verified: true
        }].map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/40 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-mono text-[9px] text-slate-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Actioned: ",
              row.actioned
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-bold", children: "✓ Verified ROI" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground text-xs font-bold leading-normal", children: row.insight }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-normal leading-normal", children: row.outcome })
        ] }, i)) })
      ] })
    ] })
  ] });
  const [selectedRiskDeal, setSelectedRiskDeal] = reactExports.useState("Rajesh Patel");
  const riskData = reactExports.useMemo(() => {
    return initialRiskDeals.find((b) => b.name === selectedRiskDeal) || initialRiskDeals[0];
  }, [selectedRiskDeal]);
  const renderRisk = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Active Deals", value: "68", desc: "Pipeline monitor active", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "High-Risk Deals", value: "6", desc: "Requires urgent callback", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Critical Risk Deals", value: "3", desc: "Abandonment imminent", color: "text-[#D85A30] animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Deals Saved This Month", value: "12", desc: "Playbook success rate: 78%", color: "text-[#1D9E75]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-8 p-0 border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display uppercase tracking-wider", children: "Predictive Deal Risk Table" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none h-[420px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display sticky top-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Buyer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Unit / Project" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: initialRiskDeals.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setSelectedRiskDeal(b.name), className: `hover:bg-secondary/15 cursor-pointer ${selectedRiskDeal === b.name ? "bg-secondary/20 border-l-2 border-l-primary" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold", children: b.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground font-mono", children: b.unit }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9.5px] text-slate-400 font-normal", children: b.project })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono", children: [
              "₹",
              (b.value / 1e5).toFixed(1),
              "L"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: b.score >= 80 ? "text-red-500 animate-pulse" : b.score >= 60 ? "text-amber-500" : "text-emerald-600", children: b.score }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle(b.level)}`, children: b.level }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
              e.stopPropagation();
              alert(`Intervention sequence triggered for ${b.name}. RM notified.`);
            }, className: "h-6 px-2 rounded bg-ink text-cream hover:bg-ink/90 text-[9px] font-mono uppercase", children: "Intervene" }) })
          ] }, i)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4 border border-border bg-card flex flex-col justify-between h-[470px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/40 pb-2 flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Risk Breakdown Profile" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-extrabold px-1.5 py-0.2 rounded font-mono ${statusBadgeStyle(riskData.level)}`, children: riskData.level })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 font-mono text-xs text-slate-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground text-sm font-bold font-sans", children: [
              riskData.name,
              " (Unit ",
              riskData.unit,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/40 space-y-1.5 text-[9.5px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Contact Recency (>10d):" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-bold", children: [
                  riskData.days,
                  " days idle"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-border/30 pt-1.5 mt-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Risk Score:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-bold text-sm ${riskData.score >= 80 ? "text-red-500 animate-pulse" : "text-amber-500"}`, children: [
                  riskData.score,
                  " / 100"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-red-50/20 border border-red-200 text-[#D85A30] rounded-xl text-[9px] leading-normal font-sans", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Primary Trigger Reason:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              riskData.reason
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[8.5px] font-mono text-slate-400 bg-secondary/25 p-2 rounded-lg leading-normal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Approved Close Incentive:" }),
            " Modular kitchen upgrade & 2 Free Car Parks on immediate slot confirmation."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Direct WhatsApp message with incentive sent to ${riskData.name}.`), className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all", children: "Trigger Playbook Outreach" })
        ] })
      ] })
    ] })
  ] });
  const [cpDeals, setCpDeals] = reactExports.useState(initialCpDeals);
  const [newDealForm, setNewDealForm] = reactExports.useState({
    buyer: "",
    phone: "",
    email: "",
    project: "Greenview Heights"
  });
  const handleRegisterDeal = (e) => {
    e.preventDefault();
    if (!newDealForm.buyer || !newDealForm.phone) {
      alert("Please complete required Buyer Name and Phone details.");
      return;
    }
    const isDuplicate = cpDeals.some((d) => d.buyer.toLowerCase() === newDealForm.buyer.toLowerCase());
    if (isDuplicate) {
      alert(`Conflict Detected: Buyer "${newDealForm.buyer}" is already registered in the Command Center CRM database. Claim rejected.`);
      return;
    }
    const newDeal = {
      id: `CPD-${cpDeals.length + 1}`,
      cpName: "Rajhans Realtors",
      buyer: newDealForm.buyer,
      unit: "TBD",
      project: newDealForm.project,
      value: 6e6,
      stage: "Registered",
      commission: 12e4,
      paid: 0,
      status: "Pending"
    };
    setCpDeals([newDeal, ...cpDeals]);
    alert(`Success: Deal [${newDeal.id}] registered successfully under Rajhans Realtors. Added to M4 Sales Pipeline.`);
    setNewDealForm({
      buyer: "",
      phone: "",
      email: "",
      project: "Greenview Heights"
    });
  };
  const renderCpPortal = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "col-span-12 lg:col-span-4 p-4 border border-border bg-card flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Broker Deal Submission" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleRegisterDeal, className: "space-y-3 text-xs font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-400", children: "Buyer Full Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "e.g. Rajesh Patel", value: newDealForm.buyer, onChange: (e) => setNewDealForm({
              ...newDealForm,
              buyer: e.target.value
            }), className: "w-full h-8 border border-border rounded-lg text-xs px-2.5 bg-card text-foreground", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-400", children: "Buyer Phone Number *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "e.g. +91 98765 XXXXX", value: newDealForm.phone, onChange: (e) => setNewDealForm({
              ...newDealForm,
              phone: e.target.value
            }), className: "w-full h-8 border border-border rounded-lg text-xs px-2.5 bg-card text-foreground", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-400", children: "Buyer Email ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "e.g. email@gmail.com", value: newDealForm.email, onChange: (e) => setNewDealForm({
              ...newDealForm,
              email: e.target.value
            }), className: "w-full h-8 border border-border rounded-lg text-xs px-2.5 bg-card text-foreground" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-400", children: "Project Interest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: newDealForm.project, onChange: (e) => setNewDealForm({
              ...newDealForm,
              project: e.target.value
            }), className: "w-full h-8 border border-border rounded-lg text-xs px-2 bg-card text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Greenview Heights" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Skyline Residences" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Business Park" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all mt-4", children: "Submit Client Lead Claim" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-8 p-0 border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border text-[10px] font-bold uppercase text-slate-500 font-display", children: "Registered Deals Registry (Admin view)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none h-[340px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "CP Broker" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Buyer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Project" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Commission" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Stage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: cpDeals.map((deal, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold", children: deal.cpName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: deal.buyer }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono", children: deal.project }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono", children: [
              "₹",
              (deal.commission / 1e5).toFixed(1),
              "L"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500 font-bold", children: deal.stage }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle(deal.status)}`, children: deal.status }) })
          ] }, i)) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border text-[10px] font-bold uppercase text-slate-500 font-display", children: "Broker network leaderboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: cpLeaderboard.map((cp) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-bold font-mono", children: cp.rank }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-2.5 font-bold", children: [
            cp.name,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-slate-400 block font-normal font-mono", children: [
              "RERA: ",
              cp.rera
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-2.5 font-mono text-slate-400", children: [
            cp.deals,
            " deals registered"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-2.5 font-mono text-slate-400", children: [
            cp.booked,
            " bookings"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-2.5 font-mono font-bold text-foreground", children: [
            "₹",
            (cp.earned / 1e5).toFixed(1),
            "L"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 text-right font-mono font-bold text-primary", children: cp.trophy })
        ] }, cp.rank)) }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "CP Portal Resource Library Kits" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 text-xs font-semibold text-slate-600", children: [{
          doc: "Greenview Heights Price List Jan 2025.pdf",
          size: "1.4 MB",
          clicks: 142
        }, {
          doc: "Vesu Floor Plans & layouts Tower A-C.pdf",
          size: "8.6 MB",
          clicks: 231
        }, {
          doc: "WhatsApp Social Marketing Zip Kit.zip",
          size: "24.5 MB",
          clicks: 98
        }].map((res, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/30 pb-2 last:border-0 last:pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: res.doc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] text-slate-400 font-normal", children: [
              "File size: ",
              res.size,
              " · downloads logged: ",
              res.clicks
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Initiating download for resource: ${res.doc}`), className: "h-6 w-6 rounded bg-secondary hover:bg-slate-300 text-slate-600 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }) })
        ] }, i)) })
      ] })
    ] })
  ] });
  const [users, setUsers] = reactExports.useState(rbacUsers);
  const toggleUserStatus = (id, name, currentStatus) => {
    const nextStatus = currentStatus === "Active" ? "Suspended" : "Active";
    setUsers((prev) => prev.map((u) => {
      if (u.id === id) {
        return {
          ...u,
          status: nextStatus
        };
      }
      return u;
    }));
    alert(`Security Action: User Account for ${name} has been set to [${nextStatus}].`);
  };
  const renderRbac = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-8 p-0 border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display uppercase tracking-wider", children: "User Registry Manager" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none h-[320px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "User" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Role / Dept" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "MFA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Last Session" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 text-right", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: users.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-bold", children: [
              u.name,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 block font-normal font-mono", children: u.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: u.role }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9.5px] text-slate-400 font-normal", children: u.dept })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] px-1.5 py-0.2 rounded font-mono ${u.mfa ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`, children: u.mfa ? "Enabled" : "Disabled" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-slate-400 text-[10px]", children: u.lastLogin }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle(u.status)}`, children: u.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleUserStatus(u.id, u.name, u.status), className: `h-6 px-2.5 rounded text-[9px] font-mono uppercase ${u.status === "Active" ? "bg-red-600 hover:bg-red-700 text-white" : "bg-ink text-cream hover:bg-ink/90"}`, children: u.status === "Active" ? "Suspend" : "Activate" }) })
          ] }, u.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "RBAC Module Permission Matrix" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 font-mono text-[9px] text-slate-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-5 text-center font-bold text-foreground border-b border-border/40 pb-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-left col-span-2", children: "Role Scope" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Edit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Exprt" })
          ] }),
          [{
            role: "Sales Agent",
            v: "✓",
            e: "Own",
            ex: "✗"
          }, {
            role: "Sales Manager",
            v: "Full",
            e: "Full",
            ex: "Team"
          }, {
            role: "CFO / Finance",
            v: "M11",
            e: "M11",
            ex: "Full"
          }, {
            role: "System Admin",
            v: "All",
            e: "All",
            ex: "All"
          }].map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-5 text-center border-b border-border/20 py-2 last:border-0 last:pb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-left font-bold text-foreground col-span-2", children: row.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-bold", children: row.v }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-600", children: row.e }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: row.ex === "✗" ? "text-red-500" : "text-emerald-600", children: row.ex })
          ] }, i))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-0 border border-border bg-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 border-b border-border flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Platform Security Logs (Audit Feed)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono text-red-500 animate-pulse font-bold", children: "1 Alert Flagged Today" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none max-h-44", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: securityAuditLogs.map((log) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `hover:bg-secondary/15 font-mono text-[10px] ${log.type === "alert" ? "bg-red-50/15 text-red-600" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 text-slate-400", children: log.time }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-bold", children: log.user }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 text-slate-400", children: log.action }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-bold", children: log.module }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 text-slate-400", children: log.record }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 text-slate-500 font-bold", children: log.ip })
      ] }, log.id)) }) }) })
    ] })
  ] });
  const [consents, setConsents] = reactExports.useState(dpdpConsents);
  const [dsrRequests, setDsrRequests] = reactExports.useState(dpdpRequests);
  const [breachStep, setBreachStep] = reactExports.useState(0);
  const withdrawConsent = (id, name) => {
    setConsents((prev) => prev.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          status: "Withdrawn",
          expiry: `Withdrawn ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
        };
      }
      return c;
    }));
    alert(`DPDP Core: Consent withdrawn for principal ${name}. All automated marketing schedules paused.`);
  };
  const processDsr = (id, name) => {
    setDsrRequests((prev) => prev.filter((r) => r.id !== id));
    alert(`Success: Data Subject Request resolved for ${name}. Confirmation notice compiled and emailed.`);
  };
  const renderDpdp = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-8 p-0 border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display uppercase tracking-wider", children: "DPDP Act Explicit Consent Registry" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none h-[300px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Data Principal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Consent Purpose" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Source" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Expiry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 text-right", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: consents.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-bold", children: [
              c.name,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 block font-normal font-mono", children: c.contact })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground truncate max-w-[200px]", children: c.purpose }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9.5px] text-slate-400 font-normal truncate max-w-[200px]", children: c.text })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-slate-400 text-[10px]", children: c.source }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-[10px]", children: c.expiry }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle(c.status)}`, children: c.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-right", children: c.status === "Active" ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => withdrawConsent(c.id, c.name), className: "h-6 px-2 rounded bg-red-600 hover:bg-red-700 text-white text-[9px] font-mono uppercase", children: "Withdraw" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-mono text-[9px]", children: "Withdrawn" }) })
          ] }, c.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Data Subject Requests Queue" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 font-semibold text-xs text-slate-600", children: dsrRequests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-6 text-slate-400", children: "All subject requests resolved successfully." }) : dsrRequests.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/50 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-mono text-[9px] text-slate-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              r.id,
              " · SLA: ",
              r.slaDays,
              " days"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8.5px] px-1.5 py-0.2 rounded font-mono ${statusBadgeStyle(r.status)}`, children: r.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground text-sm font-bold", children: r.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9.5px] text-slate-400 font-normal mt-0.5", children: [
              r.type,
              " Request: ",
              r.details
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => processDsr(r.id, r.name), className: "h-7 w-full rounded bg-ink hover:bg-ink/90 text-cream text-[9px] font-mono uppercase tracking-wider", children: "Approve & Process Request" })
        ] }, r.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2 flex justify-between items-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Data Retention Policy Schedule" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs font-semibold text-slate-600", children: [{
          type: "Leads not converted",
          retention: "2 years from contact",
          basis: "Consent",
          status: "Active"
        }, {
          type: "Buyer KYC Documents",
          retention: "7 years post-possession",
          basis: "PMLA / RERA",
          status: "Active"
        }, {
          type: "Financial Accounts entries",
          retention: "8 years",
          basis: "Income Tax",
          status: "Active"
        }].map((pol, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/40 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-foreground", children: pol.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[9.5px] text-slate-400", children: pol.retention }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[8.5px] font-mono mt-2 pt-1 border-t border-border/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Basis: ",
              pol.basis
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-bold", children: pol.status })
          ] })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-[#D85A30]/5 text-[#D85A30] space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-[#D85A30]/20 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase tracking-wider font-display", children: "Interactive Breach Response Playbook" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 font-semibold text-xs text-[#D85A30]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] leading-relaxed font-sans font-medium text-slate-600", children: "In case of a detected security data breach, DPDP 2023 mandates containment actions and DPA notification within 72 hours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-[#D85A30]/10 rounded-xl border border-[#D85A30]/20 font-mono text-[9.5px] space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Current Step:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Step ",
                breachStep + 1,
                " of 4"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground font-bold mt-1.5", children: [
              breachStep === 0 && "Step 1: Containerize & Revoke Access keys",
              breachStep === 1 && "Step 2: Impact assessment and Data Categories involved",
              breachStep === 2 && "Step 3: Compile DPA Gujarat Notification draft (mandatory 72h)",
              breachStep === 3 && "Step 4: WhatsApp Alert notifications to affected Data Principals"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            if (breachStep < 3) setBreachStep(breachStep + 1);
            else {
              setBreachStep(0);
              alert("Breach mitigation response simulation completed successfully.");
            }
          }, className: "flex-1 h-8 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all", children: breachStep === 3 ? "Reset Simulator" : "Approve Next Step" }) })
        ] })
      ] })
    ] })
  ] });
  const renderHealth = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 animate-in fade-in duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 border-b border-border flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Command Center Neural Modules" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono text-slate-400", children: "Target: 99.5% Uptime" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none max-h-96", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display sticky top-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Module Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Uptime (30d)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Response Speed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Last Incident" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: moduleHealthData.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-bold", children: m.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-mono text-slate-400", children: m.uptime }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-mono text-slate-400", children: m.speed }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-mono text-slate-400", children: m.incident }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle(m.status)}`, children: m.status }) })
        ] }, i)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-5 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Integration API Connector Logs" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 font-semibold text-xs text-slate-600", children: externalApisHealth.map((api, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/30 pb-2 last:border-0 last:pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground text-[11px] font-bold", children: api.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] text-slate-400 font-normal", children: [
              "Type: ",
              api.type,
              " · Delay: ",
              api.delay,
              " · Uptime: ",
              api.uptime
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8.5px] font-extrabold px-1.5 py-0.2 rounded font-mono ${statusBadgeStyle(api.status)}`, children: api.status }) })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Live System Workflow Queues" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 font-mono text-[9.5px] text-slate-500", children: liveSystemWorkflows.map((flow, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/20 pb-2 last:border-0 last:pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground font-sans font-bold text-xs", children: flow.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] text-slate-400 font-normal mt-0.5", children: [
              "Frequency: ",
              flow.type,
              " · Success: ",
              flow.success
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-1.5 py-0.2 rounded font-bold ${flow.queue > 0 ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-400"}`, children: [
            "Queue: ",
            flow.queue
          ] })
        ] }, i)) })
      ] })
    ] })
  ] }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: dynamicTitle, subtitle: headerInfo.subtitle, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "transition-all duration-300", children: [
    activeTab === "menu" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 animate-in fade-in duration-300", children: submodulesList.map((mod) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { onClick: () => setActiveTab(mod.id), className: "submodule-card p-5 cursor-pointer flex flex-col justify-between group h-44", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border font-mono text-emerald-700 bg-emerald-50 border-emerald-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
          " ",
          mod.status
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground group-hover:text-ink transition-colors mt-1 font-display", children: mod.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2 font-medium", children: mod.desc })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 mt-4 pt-3 flex items-center justify-between text-[11px] font-bold text-muted-foreground group-hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-foreground", children: mod.stats }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5 text-ink group-hover:underline font-mono", children: [
          "Access ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })
        ] })
      ] })
    ] }, mod.id)) }),
    activeTab === "overview" && renderOverview(),
    activeTab === "graph" && renderGraph(),
    activeTab === "insights" && renderInsights(),
    activeTab === "risk" && renderRisk(),
    activeTab === "cp-portal" && renderCpPortal(),
    activeTab === "rbac" && renderRbac(),
    activeTab === "dpdp" && renderDpdp(),
    activeTab === "health" && renderHealth()
  ] }) });
}
function StatBox({
  label,
  value,
  desc,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 flex flex-col justify-between relative min-h-24 border border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-400 font-display", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-baseline justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-2xl font-bold tracking-tight font-mono ${color}`, children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold text-muted-foreground", children: desc })
    ] })
  ] });
}
export {
  AIBrainModule as component
};
