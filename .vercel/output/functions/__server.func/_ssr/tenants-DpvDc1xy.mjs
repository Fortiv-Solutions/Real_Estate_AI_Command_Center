import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, C as Card } from "./AppShell-BfHv5p0k.mjs";
import { R as Route$c } from "./router-D7ZC1b3P.mjs";
import { m as ChevronLeft, b as ArrowRight, D as DollarSign, A as Activity, g as Calendar, F as FileText, t as Download, N as Plus, a1 as TriangleAlert } from "../_libs/lucide-react.mjs";
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
const portfolioUnits = [{
  id: "GH-4B",
  project: "Fortiv Greenview Heights",
  unit: "Flat 4B",
  tenant: "Ramesh Iyer",
  rent: 18500,
  start: "15/04/2024",
  end: "14/03/2025",
  nps: 9,
  status: "Paid",
  history: "Clean"
}, {
  id: "GH-5C",
  project: "Fortiv Greenview Heights",
  unit: "Flat 5C",
  tenant: "Priya Sharma",
  rent: 21e3,
  start: "01/02/2024",
  end: "31/01/2025",
  nps: 9,
  status: "Paid",
  history: "Clean"
}, {
  id: "GH-8C",
  project: "Fortiv Greenview Heights",
  unit: "Flat 8C",
  tenant: "Kavita Agarwal",
  rent: 18500,
  start: "01/06/2024",
  end: "31/05/2025",
  nps: 8,
  status: "Paid",
  history: "Clean"
}, {
  id: "GH-12A",
  project: "Fortiv Greenview Heights",
  unit: "Flat 12A",
  tenant: "Rajesh Patel",
  rent: 22500,
  start: "16/02/2024",
  end: "15/02/2025",
  nps: 4,
  status: "Overdue",
  overdueDays: 3,
  history: "Clean"
}, {
  id: "SR-3A",
  project: "Fortiv Skyline Residences",
  unit: "Flat 3A",
  tenant: "Vikram Joshi",
  rent: 28e3,
  start: "01/05/2024",
  end: "30/04/2025",
  nps: 6,
  status: "Paid",
  history: "Minor issue"
}, {
  id: "SR-9A",
  project: "Fortiv Skyline Residences",
  unit: "Flat 9A",
  tenant: "Suresh Nair",
  rent: 32e3,
  start: "01/03/2024",
  end: "28/02/2025",
  nps: 8,
  status: "Paid",
  history: "Clean"
}, {
  id: "BP-2A",
  project: "Fortiv Business Park",
  unit: "Office 2A",
  tenant: "Apex Corp",
  rent: 55e3,
  start: "01/01/2024",
  end: "31/12/2024",
  nps: 7,
  status: "Overdue",
  overdueDays: 7,
  history: "Clean"
}, {
  id: "BP-3B",
  project: "Fortiv Business Park",
  unit: "Office 3B",
  tenant: "Sunrise Traders",
  rent: 48e3,
  start: "15/02/2024",
  end: "14/02/2025",
  nps: 8,
  status: "Paid",
  history: "Clean"
}];
const initialApplicants = [{
  id: 1,
  name: "Ramesh Iyer",
  employment: "HDFC Bank — Manager",
  income: 68e3,
  cibil: 762,
  score: 81,
  recommendation: "Recommended",
  status: "Verified",
  phone: "+91 98765 43210",
  email: "ramesh.iyer@gmail.com",
  emi: 12e3,
  ratio: 27,
  ref: "Positive",
  pmla: "Clear",
  police: "Submitted",
  term: "11 months",
  moveIn: "01/02/2025"
}, {
  id: 2,
  name: "Sunita Bhatt",
  employment: "Infosys — Sr Engineer",
  income: 72e3,
  cibil: 748,
  score: 78,
  recommendation: "Recommended",
  status: "Verified",
  phone: "+91 99234 56789",
  email: "sunita.b@gmail.com",
  emi: 15e3,
  ratio: 26,
  ref: "Positive",
  pmla: "Clear",
  police: "Received",
  term: "11 months",
  moveIn: "15/02/2025"
}, {
  id: 3,
  name: "Ajay Soni",
  employment: "Self-employed — Shop Owner",
  income: 45e3,
  cibil: 641,
  score: 54,
  recommendation: "Conditional",
  status: "Pending Checks",
  phone: "+91 98123 45678",
  email: "ajay.soni@outlook.com",
  emi: 8e3,
  ratio: 41,
  ref: "Neutral",
  pmla: "Clear",
  police: "Form generated",
  term: "11 months",
  moveIn: "01/02/2025"
}, {
  id: 4,
  name: "Manish Tiwari",
  employment: "Freelancer — Designer",
  income: 28e3,
  cibil: 580,
  score: 31,
  recommendation: "Not Recommended",
  status: "Review Required",
  phone: "+91 97654 32109",
  email: "manish.t@gmail.com",
  emi: 5e3,
  ratio: 66,
  ref: "Negative",
  pmla: "Clear",
  police: "Not submitted",
  term: "11 months",
  moveIn: "01/02/2025"
}];
const initialRequests = [{
  id: "MR-247",
  unit: "Flat 8C",
  project: "Greenview Heights",
  category: "Plumbing",
  severity: "Emergency",
  tenant: "Kavita Agarwal",
  status: "In Progress",
  age: "1.5 hrs",
  desc: "Water leakage from ceiling in master bathroom. Started 2 hours ago. Spreading to wiring.",
  vendor: "Ravi Plumbing",
  arrival: "Today 3–5 PM",
  cost: 18500,
  target: "2 hours",
  elapsed: 1.5,
  satisfied: true,
  date: "15/01/2025 14:23",
  photos: ["photo1.jpg [Bathroom Ceiling Leak]", "photo2.jpg [Water Damage]"]
}, {
  id: "MR-246",
  unit: "Office 2A",
  project: "Business Park",
  category: "Electrical",
  severity: "Urgent",
  tenant: "Apex Corp",
  status: "Vendor Assigned",
  age: "3 hrs",
  desc: "Server room AC power socket sparking. Tripping local circuit breaker.",
  vendor: "Sharma Electricals",
  arrival: "Today 4–6 PM",
  cost: 0,
  target: "Same day",
  elapsed: 3,
  satisfied: null,
  date: "15/01/2025 12:45",
  photos: ["sparking_plug.jpg"]
}, {
  id: "MR-244",
  unit: "Flat 5B",
  project: "Greenview Heights",
  category: "AC / Appliances",
  severity: "Urgent",
  tenant: "Deepak Trivedi",
  status: "Pending Dispatch",
  age: "6 hrs",
  desc: "AC unit blowing warm air. Compressor makes a heavy grinding noise.",
  vendor: "Cool Air Services",
  arrival: "Pending scheduling",
  cost: 0,
  target: "Same day",
  elapsed: 6,
  satisfied: null,
  date: "15/01/2025 09:30",
  photos: []
}, {
  id: "MR-241",
  unit: "Flat 12A",
  project: "Greenview Heights",
  category: "Carpentry",
  severity: "Normal",
  tenant: "Rajesh Patel",
  status: "Scheduled",
  age: "2 days",
  desc: "Balcony wooden door lock jammed. Requires latch replacement.",
  vendor: "Mohan Carpentry",
  arrival: "17 Jan 10 AM",
  cost: 0,
  target: "3 days",
  elapsed: 48,
  satisfied: null,
  date: "13/01/2025 11:00",
  photos: []
}, {
  id: "MR-239",
  unit: "Flat 3D",
  project: "Skyline Residences",
  category: "Pest Control",
  severity: "Normal",
  tenant: "Anita Shah",
  status: "Scheduled",
  age: "3 days",
  desc: "Termite marks seen on kitchen cabinets. Requesting immediate inspection.",
  vendor: "Clean India Pest Control",
  arrival: "18 Jan 11 AM",
  cost: 0,
  target: "3 days",
  elapsed: 72,
  satisfied: null,
  date: "12/01/2025 15:00",
  photos: ["termite_cabinet.jpg"]
}, {
  id: "MR-238",
  unit: "Flat 7B",
  project: "Greenview Heights",
  category: "Painting",
  severity: "Normal",
  tenant: "Suresh Kumar",
  status: "Closed",
  age: "5 days ago",
  desc: "Water seepage touch-up paint required in guest room.",
  vendor: "Colour Master",
  arrival: "Completed 14 Jan",
  cost: 3500,
  target: "3 days",
  elapsed: 54,
  satisfied: true,
  date: "10/01/2025 10:00",
  photos: []
}];
const vendorPanel = [{
  name: "Ravi Plumbing",
  cat: "Plumbing",
  phone: "+91 94234 56789",
  jobs: 6,
  rating: 4.7,
  resolution: "2.8 hrs"
}, {
  name: "Sharma Electricals",
  cat: "Electrical",
  phone: "+91 96123 45678",
  jobs: 4,
  rating: 4.4,
  resolution: "3.5 hrs"
}, {
  name: "Cool Air Services",
  cat: "AC / Appliances",
  phone: "+91 93765 43210",
  jobs: 5,
  rating: 4.2,
  resolution: "4.0 hrs"
}, {
  name: "Mohan Carpentry",
  cat: "Carpentry",
  phone: "+91 98654 32109",
  jobs: 3,
  rating: 4.5,
  resolution: "Next day"
}, {
  name: "Clean India Pest Control",
  cat: "Pest Control",
  phone: "+91 95123 45678",
  jobs: 2,
  rating: 4.6,
  resolution: "Next day"
}];
const initialSurveys = [{
  id: "SUR-2025-084",
  tenant: "Ramesh Iyer",
  unit: "GH-4B",
  type: "6-Month Check-In",
  nps: 9,
  classification: "Promoter",
  comment: "Outstanding property maintenance. Any issues are resolved in hours via WhatsApp.",
  date: "12/01/2025"
}, {
  id: "SUR-2025-083",
  tenant: "Kavita Agarwal",
  unit: "GH-8C",
  type: "3-Month Check-In",
  nps: 7,
  classification: "Passive",
  comment: "The flat condition is excellent, but society parking is slightly congested in the evening.",
  date: "11/01/2025"
}, {
  id: "SUR-2025-082",
  tenant: "Priya Sharma",
  unit: "GH-5C",
  type: "Move-In Check-In",
  nps: 10,
  classification: "Promoter",
  comment: "Seamless handover process. Extremely professional staff and clean flat.",
  date: "10/01/2025"
}, {
  id: "SUR-2025-081",
  tenant: "Rajesh Patel",
  unit: "GH-12A",
  type: "6-Month Check-In",
  nps: 4,
  classification: "Detractor",
  comment: "Maintenance took 5 days for urgent AC issue. Neighbors are noisy in Tower A. Parking is too congested.",
  date: "09/01/2025"
}, {
  id: "SUR-2025-080",
  tenant: "Suresh Nair",
  unit: "SR-9A",
  type: "3-Month Check-In",
  nps: 8,
  classification: "Passive",
  comment: "Overall satisfied, no major complaints. Water pressure could be slightly higher.",
  date: "05/01/2025"
}, {
  id: "SUR-2025-079",
  tenant: "Vikram Joshi",
  unit: "SR-3A",
  type: "Move-In Check-In",
  nps: 6,
  classification: "Detractor",
  comment: "Pest control wasn't done properly before moving in. Found wood dust in wardrobes.",
  date: "02/01/2025"
}];
const initialRenewals = [{
  id: "LS-2024-038",
  unit: "GH-12A",
  tenant: "Rajesh Patel",
  currentRent: 22500,
  proposedRent: 24e3,
  marketRange: "₹24,000–25,000",
  expiry: "15 Feb 2025",
  daysAway: 14,
  nps: 4,
  stage: "60-Day Outreach",
  outreach1: "16/12/2024",
  outreach2: "23/12/2024",
  response: "Pending",
  eSign: "Not started"
}, {
  id: "LS-2024-035",
  unit: "SR-9A",
  tenant: "Suresh Nair",
  currentRent: 32e3,
  proposedRent: 33500,
  marketRange: "₹33,000–35,000",
  expiry: "28 Feb 2025",
  daysAway: 27,
  nps: 8,
  stage: "90-Day Alert",
  outreach1: "—",
  outreach2: "—",
  response: "Negotiating",
  eSign: "Not started"
}, {
  id: "LS-2024-040",
  unit: "GH-5C",
  tenant: "Priya Sharma",
  currentRent: 21e3,
  proposedRent: 21500,
  marketRange: "₹20,500–22,000",
  expiry: "10 Mar 2025",
  daysAway: 38,
  nps: 9,
  stage: "Outreach Sent",
  outreach1: "10/01/2025",
  outreach2: "—",
  response: "Pending",
  eSign: "Not started"
}, {
  id: "LS-2024-041",
  unit: "SR-3A",
  tenant: "Vikram Joshi",
  currentRent: 28e3,
  proposedRent: 29500,
  marketRange: "₹29,000–31,000",
  expiry: "15 Mar 2025",
  daysAway: 43,
  nps: 6,
  stage: "Outreach Sent",
  outreach1: "15/01/2025",
  outreach2: "—",
  response: "Accepted",
  eSign: "Draft Sent"
}, {
  id: "LS-2024-031",
  unit: "BP-3B",
  tenant: "Apex Corp",
  currentRent: 55e3,
  proposedRent: 58e3,
  marketRange: "₹57,000–60,000",
  expiry: "31 Mar 2025",
  daysAway: 59,
  nps: 7,
  stage: "Negotiating",
  outreach1: "01/01/2025",
  outreach2: "08/01/2025",
  response: "Counter offer (₹56,500)",
  eSign: "Not started"
}];
const bankRates = [{
  bank: "SBI Home Loan",
  rate: 8.5,
  fee: "0.35% + GST",
  time: "15–20 days",
  maxTenure: 30
}, {
  bank: "LIC Housing Finance",
  rate: 8.5,
  fee: "0.25% + GST",
  time: "20–25 days",
  maxTenure: 30
}, {
  bank: "HDFC Bank",
  rate: 8.65,
  fee: "0.50% + GST",
  time: "10–12 days",
  maxTenure: 30
}, {
  bank: "ICICI Bank",
  rate: 8.75,
  fee: "0.50% + GST",
  time: "7–10 days",
  maxTenure: 30
}, {
  bank: "Axis Bank",
  rate: 8.75,
  fee: "1.00% + GST",
  time: "10–12 days",
  maxTenure: 30
}, {
  bank: "Kotak Mahindra",
  rate: 8.85,
  fee: "0.50% + GST",
  time: "7–10 days",
  maxTenure: 20
}];
const statusBadge = (status) => {
  if (["Verified", "Received", "Linked", "Clear", "Paid", "Completed", "Proceed", "Closed", "Promoter", "Concluded", "Renewed"].some((s) => status.includes(s))) return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (["Opened", "Pending", "Incomplete", "In Progress", "Vendor Assigned", "Negotiating", "Passive", "Awaiting Buyer"].some((s) => status.includes(s))) return "bg-amber-50 text-amber-700 border border-amber-100";
  if (["Mismatch", "Action needed", "Review", "Reject", "Overdue", "Detractor", "Emergency", "Urgent", "Vacating"].some((s) => status.includes(s))) return "bg-red-50 text-[#D85A30] border border-red-100";
  if (["Sent", "Outreach Sent", "Scheduled"].some((s) => status.includes(s))) return "bg-blue-50 text-blue-700 border border-blue-100";
  return "bg-slate-50 text-slate-600 border border-slate-200";
};
function TenantPropertyManager() {
  const {
    tab
  } = Route$c.useSearch();
  const navigate = useNavigate({
    from: Route$c.fullPath
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
    name: "Dashboard Overview",
    desc: "Portfolio metrics, rent collection status, maintenance ticketing, renewals calendar, and home loan pipelines.",
    stats: "42 units active",
    status: "Active"
  }, {
    id: "screening",
    name: "Tenant Screening Pipeline",
    desc: "Automated background checks covering identity, income, references, credit, and composite owner recommendations.",
    stats: "4 applicants active",
    status: "Active"
  }, {
    id: "maintenance",
    name: "Maintenance Request Router",
    desc: "Live tenant maintenance queue, AI severity classification, vendor dispatch logs, and SLA tracker.",
    stats: "8 open requests",
    status: "Active"
  }, {
    id: "rent",
    name: "Rent Collection Agent",
    desc: "Portfolio rent ledger, payment tracking, automated reminders, and digital receipt generation.",
    stats: "84.7% collected",
    status: "Active"
  }, {
    id: "loan",
    name: "Home Loan Copilot",
    desc: "Buyer loan eligibility calculator, bank comparable rate grid, and custom document checklists.",
    stats: "Live rates integrated",
    status: "Active"
  }, {
    id: "nps",
    name: "Tenant NPS & Feedback Bot",
    desc: "Tenant satisfaction metrics at move-in, 3m, 6m, and renewals with real-time detractor alerts.",
    stats: "NPS +21 this quarter",
    status: "Active"
  }, {
    id: "renewal",
    name: "Lease Renewal Agent",
    desc: "Lease expiry tracker, rent revisions compared with market comparables, outreach log, and e-signatures.",
    stats: "6 expiring soon",
    status: "Active"
  }];
  const getPageHeader = () => {
    const map = {
      menu: {
        title: "Tenant & Property Management",
        subtitle: "Automates the complete lifecycle of tenant management and property maintenance — from finding the right tenant to renewal — so property owners and managers can operate at scale."
      },
      overview: {
        title: "Portfolio Dashboard Overview",
        subtitle: "Real-time tenant portfolio metrics, rent collection status, open maintenance tickets, and upcoming lease renewals."
      },
      screening: {
        title: "Tenant Screening Pipeline",
        subtitle: "Comprehensive background checks including Aadhaar, PAN, bank statements, CIBIL credit, and landlord references."
      },
      maintenance: {
        title: "Maintenance Request Router",
        subtitle: "Tenant maintenance tickets triaged by AI, with automated vendor dispatching and real-time SLA monitoring."
      },
      rent: {
        title: "Rent Collection Agent",
        subtitle: "Portfolio rent ledger, payment status notifications, automated reminder sequences, and digital receipt logs."
      },
      loan: {
        title: "Home Loan Copilot",
        subtitle: "Determine home loan eligibility, compare interest rates across major Indian banks, and generate required document checklists."
      },
      nps: {
        title: "Tenant NPS & Feedback Bot",
        subtitle: "Automated feedback bot collecting tenant satisfaction scores at key lifecycle milestones and triggering manager alerts."
      },
      renewal: {
        title: "Lease Renewal Agent",
        subtitle: "Track lease anniversaries, calculate rent revisions against market data, and manage outreach timelines."
      }
    };
    return map[activeTab] || map.menu;
  };
  const headerInfo = getPageHeader();
  const dynamicTitle = activeTab === "menu" ? headerInfo.title : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("menu"), className: "group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95 mr-0.5", "aria-label": "Back to tenant menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors", onClick: () => setActiveTab("menu"), children: headerInfo.title })
  ] });
  const renderOverview = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Units Managed", value: "42", desc: "Active properties", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Rent Collected (May)", value: "₹7.8L of ₹9.2L", desc: "84.7% received", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Open Maintenance", value: "8", desc: "Pending resolution", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Leases Expiring (60 Days)", value: "6", desc: "Requiring action", color: "text-[#D85A30] animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Portfolio NPS", value: "74", desc: "Out of 100", color: "text-[#2E86AB]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4 border-b border-border/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-3.5 w-3.5 text-emerald-600" }),
            " Rent Collection Status"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("rent"), className: "text-[9px] font-bold text-primary hover:underline font-mono", children: "Ledger Details →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [{
          project: "Fortiv Greenview Heights",
          units: "10/12 paid",
          amount: "₹2.2L / ₹2.6L",
          pct: 83,
          status: "Normal"
        }, {
          project: "Fortiv Skyline Residences",
          units: "8/8 paid",
          amount: "₹2.4L / ₹2.4L",
          pct: 100,
          status: "Completed"
        }, {
          project: "Fortiv Business Park",
          units: "4/6 paid",
          amount: "₹1.8L / ₹2.8L",
          pct: 64,
          status: "Alert"
        }, {
          project: "Other Managed Properties",
          units: "14/16 paid",
          amount: "₹1.4L / ₹1.4L",
          pct: 87,
          status: "Normal"
        }].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
              p.project,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-400 font-normal", children: [
                "(",
                p.units,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-slate-500", children: [
              p.amount,
              " ",
              p.status === "Completed" && "✅",
              " ",
              p.status === "Alert" && "⚠️"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 bg-secondary/50 rounded-full overflow-hidden flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${p.pct === 100 ? "bg-emerald-500" : p.pct >= 80 ? "bg-primary" : "bg-amber-500"}`, style: {
            width: `${p.pct}%`
          } }) })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-5 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5 text-amber-500" }),
              " Maintenance Queue Summary"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("maintenance"), className: "text-[9px] font-bold text-primary hover:underline font-mono", children: "Open Queue →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-2 rounded bg-red-50/50 border border-red-100 text-red-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-red-500 animate-ping" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🔴 Emergency (1)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono", children: "Water leakage — GH Flat 8C" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-2 rounded bg-amber-50/50 border border-amber-100 text-amber-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🟡 Urgent (3)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono", children: "AC malfunction · jammed door lock · termites" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-200 text-slate-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🟢 Normal (4)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono", children: "Touch-up paint · fan replace · tap drip" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5 text-[#D85A30]" }),
              " Leases Expiring (60 Days)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("renewal"), className: "text-[9px] font-bold text-primary hover:underline font-mono", children: "Renewal Agent →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 text-[11px] font-semibold text-slate-600", children: [{
            unit: "Flat 12A, Greenview",
            tenant: "Rajesh Patel",
            exp: "15 Feb 2025",
            days: 14,
            alert: true
          }, {
            unit: "Office 3B, Business Park",
            tenant: "Apex Corp",
            exp: "28 Feb 2025",
            days: 27,
            alert: false
          }, {
            unit: "Flat 5C, Greenview",
            tenant: "Priya Sharma",
            exp: "10 Mar 2025",
            days: 38,
            alert: false
          }, {
            unit: "Flat 9A, Skyline",
            tenant: "Suresh Nair",
            exp: "20 Mar 2025",
            days: 48,
            alert: false
          }].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/30 pb-1.5 last:border-0 last:pb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground truncate", children: r.unit }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-slate-400 font-normal", children: [
                r.tenant,
                " · Expiry: ",
                r.exp
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2 py-0.5 rounded text-[9.5px] font-mono font-bold shrink-0 ${r.alert ? "bg-red-50 text-red-600 border border-red-100 animate-pulse" : "bg-slate-100 text-slate-500"}`, children: [
              "⏳ ",
              r.days,
              " days"
            ] })
          ] }, i)) })
        ] })
      ] })
    ] })
  ] });
  const [selectedApplicant, setSelectedApplicant] = reactExports.useState(initialApplicants[0]);
  const [compareMode, setCompareMode] = reactExports.useState(false);
  const [screeningFilter, setScreeningFilter] = reactExports.useState("All");
  const filteredApplicants = reactExports.useMemo(() => {
    if (screeningFilter === "All") return initialApplicants;
    return initialApplicants.filter((a) => a.recommendation.toLowerCase().includes(screeningFilter.toLowerCase()) || a.status.toLowerCase().includes(screeningFilter.toLowerCase()));
  }, [screeningFilter]);
  const renderScreening = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Applicants", value: "12", desc: "This month", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Awaiting Checks", value: "3", desc: "Verification pending", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Approved / Recommended", value: "7", desc: "Passed identity + credit", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Average CIBIL Score", value: "738", desc: "Salaried applicants", color: "text-[#2E86AB]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: ["All", "Recommended", "Conditional", "Not Recommended"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setScreeningFilter(f), className: `h-7 px-3 rounded-lg text-[10px] font-bold uppercase tracking-widest border transition-all ${screeningFilter === f ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`, children: f }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCompareMode(!compareMode), className: `h-7 px-3 rounded-lg text-[10px] font-bold uppercase tracking-widest border transition-all ml-auto ${compareMode ? "bg-primary text-white border-primary" : "border-border text-slate-500 hover:bg-secondary"}`, children: compareMode ? "Show Details View" : "Compare Shortlisted Applicants" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `p-0 overflow-hidden border border-border bg-card ${compareMode ? "col-span-12" : "col-span-12 lg:col-span-7"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display uppercase tracking-wider", children: "Prospective Tenants — Flat 4B, Greenview Heights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-mono text-slate-400", children: "Target Rent: ₹18,500/month" })
        ] }),
        compareMode ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-r border-border/40 pr-4 space-y-4 text-slate-500 font-display text-[11px] uppercase tracking-wider py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Composite Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "CIBIL Credit Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Monthly Income" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Rent-to-Income Ratio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Employment stability" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Identity Verification" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "References" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "PMLA Watchlist" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Police verification" })
          ] }),
          [initialApplicants[0], initialApplicants[1]].map((app, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-xl border border-border space-y-4 text-slate-700 ${i === 0 ? "bg-emerald-50/10 border-emerald-200" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-sm text-foreground flex items-center justify-between border-b border-border/40 pb-2", children: [
              app.name,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(app.recommendation)}`, children: app.recommendation })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-mono font-bold text-primary", children: app.score }),
              " / 100"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono", children: [
              app.cibil,
              " (Good)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono", children: [
              "₹",
              app.income.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono", children: [
              app.ratio,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: app.employment }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-emerald-600", children: "✓ Aadhaar + PAN Verified" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              app.ref,
              " Reference"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-emerald-600 font-mono", children: "Clear" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-slate-500", children: app.police })
          ] }, i))
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Applicant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Employment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Income" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "CIBIL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Recommendation" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: filteredApplicants.map((app) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setSelectedApplicant(app), className: `hover:bg-secondary/15 cursor-pointer transition-colors ${selectedApplicant.id === app.id ? "bg-secondary/20 font-bold" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: app.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9.5px] text-slate-400 font-mono", children: app.phone })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500 text-[11px] max-w-[120px] truncate", children: app.employment }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono", children: [
              "₹",
              app.income.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-slate-500", children: app.cibil }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-12 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${app.score >= 75 ? "bg-emerald-500" : app.score >= 50 ? "bg-amber-500" : "bg-red-500"}`, style: {
                width: `${app.score}%`
              } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono font-bold ${app.score >= 75 ? "text-emerald-600" : app.score >= 50 ? "text-amber-600" : "text-red-600"}`, children: app.score })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(app.recommendation)}`, children: [
              app.recommendation === "Recommended" ? "✅ " : app.recommendation === "Conditional" ? "⚠️ " : "❌ ",
              app.recommendation
            ] }) })
          ] }, app.id)) })
        ] }) })
      ] }),
      !compareMode && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Applicant Score Breakdown" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(selectedApplicant.recommendation)}`, children: selectedApplicant.recommendation })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-sm text-foreground", children: selectedApplicant.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-semibold", children: selectedApplicant.employment })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-secondary/10 p-2.5 rounded-xl border border-border/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-12 w-12 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 36 36", className: "h-12 w-12 -rotate-90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9155", fill: "none", stroke: "#e5e7eb", strokeWidth: "3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9155", fill: "none", strokeWidth: "3", stroke: selectedApplicant.score >= 75 ? "#1D9E75" : selectedApplicant.score >= 50 ? "#E8A838" : "#D85A30", strokeDasharray: `${selectedApplicant.score} ${100 - selectedApplicant.score}`, strokeLinecap: "round" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute inset-0 flex items-center justify-center text-[11px] font-extrabold font-mono ${selectedApplicant.score >= 75 ? "text-emerald-600" : selectedApplicant.score >= 50 ? "text-amber-600" : "text-red-600"}`, children: selectedApplicant.score })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] space-y-0.5 font-semibold text-slate-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "CIBIL Bureau Score: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground font-bold", children: selectedApplicant.cibil })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "Rent-to-Income Ratio: ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground font-bold", children: [
                  selectedApplicant.ratio,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "PMLA Status: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600", children: "Clear" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "Police verification: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground font-bold", children: selectedApplicant.police })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/35 rounded-xl p-3 font-mono text-[9.5px] leading-relaxed text-slate-600 space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-[8.5px] uppercase tracking-wider text-slate-400 mb-1.5", children: "Score Breakdown:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-emerald-600", children: "✓ Aadhaar + PAN verification passed (+18)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-emerald-600", children: [
              "✓ CIBIL score: ",
              selectedApplicant.cibil,
              " (+",
              selectedApplicant.cibil >= 750 ? "16" : "12",
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-emerald-600", children: [
              "✓ Rent-to-income: ",
              selectedApplicant.ratio,
              "% (",
              selectedApplicant.ratio <= 30 ? "Healthy +15" : "High +5",
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-emerald-600", children: "✓ Stable employer reference (+12)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-emerald-600", children: [
              "✓ Landlord reference: ",
              selectedApplicant.ref,
              " (+10)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: selectedApplicant.police === "Received" ? "text-emerald-600" : "text-slate-400", children: selectedApplicant.police === "Received" ? "✓ Police verification received (+10)" : "⏳ Police verification result pending (0)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Lease Agreement draft generated for ${selectedApplicant.name} and sent via WhatsApp/email for e-signing.`), disabled: selectedApplicant.score < 50, className: "flex-1 h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all disabled:opacity-50", children: "Approve & Send Lease" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Applicant ${selectedApplicant.name} has been marked as Rejected.`), className: "h-8 px-3 border border-red-200 hover:bg-red-50 text-red-500 rounded-lg text-xs font-bold uppercase", children: "Reject" })
          ] })
        ] })
      ] })
    ] })
  ] });
  const [selectedRequest, setSelectedRequest] = reactExports.useState(initialRequests[0]);
  const [mRequests, setMRequests] = reactExports.useState(initialRequests);
  const [severityFilter, setSeverityFilter] = reactExports.useState("All");
  const filteredRequests = reactExports.useMemo(() => {
    if (severityFilter === "All") return mRequests;
    return mRequests.filter((r) => r.severity === severityFilter || r.status === severityFilter);
  }, [mRequests, severityFilter]);
  const triggerVendorDispatch = (reqId, vendorName) => {
    setMRequests((prev) => prev.map((r) => {
      if (r.id === reqId) {
        return {
          ...r,
          status: "Vendor Assigned",
          vendor: vendorName,
          arrival: "Today between 3–5 PM"
        };
      }
      return r;
    }));
    setSelectedRequest((prev) => {
      if (prev.id === reqId) {
        return {
          ...prev,
          status: "Vendor Assigned",
          vendor: vendorName,
          arrival: "Today between 3–5 PM"
        };
      }
      return prev;
    });
    alert(`Vendor ${vendorName} dispatched. WhatsApp confirmation sent to tenant.`);
  };
  const resolveTicket = (reqId) => {
    setMRequests((prev) => prev.map((r) => {
      if (r.id === reqId) {
        return {
          ...r,
          status: "Closed",
          elapsed: r.elapsed || 2.5
        };
      }
      return r;
    }));
    setSelectedRequest((prev) => {
      if (prev.id === reqId) {
        return {
          ...prev,
          status: "Closed"
        };
      }
      return prev;
    });
    alert(`Ticket ${reqId} marked as Resolved. Confirmation ping sent to tenant.`);
  };
  const renderMaintenance = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Tickets Logged", value: "184", desc: "Year to date", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Emergency Tickets", value: "1", desc: "SLA: < 2 hours", color: "text-[#D85A30]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Urgent Tickets", value: "3", desc: "SLA: Same day", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Avg Resolution Time", value: "3.8 hrs", desc: "Emergency SLA met", color: "text-[#1D9E75]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 items-center", children: ["All", "Emergency", "Urgent", "Normal", "In Progress", "Closed"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSeverityFilter(s), className: `h-7 px-3 rounded-lg text-[10px] font-bold uppercase tracking-widest border transition-all ${severityFilter === s ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`, children: s }, s)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display uppercase tracking-wider", children: "Live Request Queue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-500 animate-pulse" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Ticket" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Unit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Severity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Tenant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: filteredRequests.map((req) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setSelectedRequest(req), className: `hover:bg-secondary/15 cursor-pointer transition-colors ${selectedRequest.id === req.id ? "bg-secondary/20 font-bold" : ""} ${req.severity === "Emergency" && req.status !== "Closed" ? "border-l-2 border-l-red-500 animate-pulse" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold text-slate-400", children: req.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: req.unit }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500", children: req.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(req.severity)}`, children: req.severity }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: req.tenant }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(req.status)}`, children: req.status === "Closed" ? "✅ Resolved" : `🔧 ${req.status}` }) })
          ] }, req.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: [
            "Ticket Details — ",
            selectedRequest.id
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(selectedRequest.severity)}`, children: selectedRequest.severity })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-foreground", children: [
              "Unit: ",
              selectedRequest.unit,
              " (",
              selectedRequest.project,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-slate-400 font-semibold font-mono", children: [
              "Created: ",
              selectedRequest.date,
              " · Age: ",
              selectedRequest.age
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/30 rounded-xl border border-border/40 font-mono text-[10px] leading-relaxed text-slate-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Description:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: selectedRequest.desc })
          ] }),
          selectedRequest.photos.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-slate-400", children: "Attached Media" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: selectedRequest.photos.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2 py-1.5 bg-slate-100 border border-slate-200 rounded-lg font-mono text-[9px] text-slate-500 flex items-center gap-1 cursor-pointer hover:bg-slate-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5" }),
              " ",
              p
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 pt-3 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Assigned Vendor:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-bold", children: selectedRequest.vendor || "Not assigned" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Arrival Target:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-bold", children: selectedRequest.arrival })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex gap-2", children: [
            selectedRequest.status === "Pending Dispatch" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-slate-400 block", children: "Pre-Approved Vendors" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1.5", children: vendorPanel.filter((v) => v.cat === selectedRequest.category).map((v, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => triggerVendorDispatch(selectedRequest.id, v.name), className: "h-8 border border-border bg-background hover:bg-secondary rounded text-[10px] font-bold text-slate-700 flex flex-col justify-center items-center py-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[120px]", children: v.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8px] font-normal text-slate-400 font-mono", children: [
                  "★ ",
                  v.rating,
                  " · ",
                  v.resolution
                ] })
              ] }, idx)) })
            ] }),
            selectedRequest.status !== "Pending Dispatch" && selectedRequest.status !== "Closed" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => resolveTicket(selectedRequest.id), className: "w-full h-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-widest transition-all", children: "Resolve Ticket" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1", children: "WhatsApp Communications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-emerald-50/50 rounded-xl p-2.5 text-[9.5px] leading-relaxed text-slate-600 font-medium border border-emerald-100/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-slate-700 block", children: "System Acknowledgment (Tenant):" }),
              `Hi ${selectedRequest.tenant}, we've received your request (${selectedRequest.category}). Classified as ${selectedRequest.severity}. Ticket #${selectedRequest.id}. Assigning vendor...`
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2 mb-3", children: "Pre-Approved Vendor Network" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2", children: "Vendor Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2", children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2 font-mono", children: "Rating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2 font-mono", children: "Jobs (Month)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2 font-mono", children: "Avg Resolution" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium", children: vendorPanel.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-bold", children: v.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 text-slate-500", children: v.cat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-mono text-slate-400", children: v.phone }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-2.5 text-amber-500 font-bold", children: [
            "★ ",
            v.rating
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-mono", children: v.jobs }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-mono font-bold text-primary", children: v.resolution })
        ] }, i)) })
      ] }) })
    ] })
  ] });
  const [rentLedger, setRentLedger] = reactExports.useState(portfolioUnits);
  const [rentFilter, setRentFilter] = reactExports.useState("All");
  const filteredLedger = reactExports.useMemo(() => {
    if (rentFilter === "All") return rentLedger;
    return rentLedger.filter((r) => r.status.toLowerCase() === rentFilter.toLowerCase());
  }, [rentLedger, rentFilter]);
  const sendRentReminder = (tenantName) => {
    alert(`WhatsApp reminder with UPI payment link dispatched to ${tenantName}.`);
  };
  const generateUpiLink = (tenantName, rentAmt) => {
    alert(`UPI Link generated:
upi://pay?pa=fortivrent@upi&pn=Fortiv%20Solutions&am=${rentAmt}&cu=INR
SMS/WhatsApp preview copied to clipboard.`);
  };
  const renderRent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Monthly Rent Receivable", value: "₹9.24L", desc: "42 units total", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Collected Rent", value: "₹7.82L", desc: "84.7% received", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Outstanding Rent", value: "₹1.41L", desc: "5 units outstanding", color: "text-[#D85A30]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Late Fees Levied", value: "₹4,230", desc: "2% penalty rule", color: "text-[#E8A838]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 items-center", children: ["All", "Paid", "Overdue"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setRentFilter(f), className: `h-7 px-3 rounded-lg text-[10px] font-bold uppercase tracking-widest border transition-all ${rentFilter === f ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`, children: f }, f)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-0 overflow-hidden border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 border-b border-border flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display uppercase tracking-wider", children: "Portfolio Rent Ledger" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-mono text-slate-400", children: "Due Date: 1st of every month" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Unit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Tenant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Monthly Rent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Expiry / Revision" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Reminders" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: filteredLedger.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: row.unit }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9.5px] text-slate-400 font-mono truncate max-w-[120px]", children: row.project })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold text-slate-700", children: row.tenant }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-bold", children: [
            "₹",
            row.rent.toLocaleString("en-IN")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(row.status)}`, children: row.status === "Paid" ? "✅ Paid" : `⚠️ Overdue ${row.overdueDays}d` }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-slate-500", children: row.end }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono", children: row.status === "Paid" ? "N/A" : row.overdueDays && row.overdueDays >= 7 ? "3 sent (Escalated)" : "2 sent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: row.status === "Paid" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => alert(`Downloading Digital Receipt RCP-2025-0142 for ${row.tenant}...`), className: "h-6 px-2 rounded border border-border hover:bg-secondary text-[9px] font-bold text-slate-500 uppercase flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3 w-3" }),
            " Receipt"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => sendRentReminder(row.tenant), className: "h-6 px-2 rounded bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-700 text-[9px] font-bold uppercase", children: "Remind" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => generateUpiLink(row.tenant, row.rent), className: "h-6 px-2 rounded border border-border hover:bg-secondary text-[9px] font-bold text-slate-500 uppercase", children: "UPI Link" })
          ] }) }) })
        ] }, row.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2", children: "Automated Reminder Sequence Timeline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-3 text-xs font-semibold", children: [{
        day: "Day -7",
        title: "First Reminder",
        desc: "WhatsApp reminder with direct UPI payment link."
      }, {
        day: "Day -3",
        title: "Second Reminder",
        desc: "Direct payment button with due-date alert."
      }, {
        day: "Day 0",
        title: "Due Date",
        desc: "Today is rent due date notice via WhatsApp & Email."
      }, {
        day: "Day +3",
        title: "Overdue",
        desc: "Overdue alert + 2% late fee penalty notice."
      }, {
        day: "Day +7",
        title: "Escalation",
        desc: "Alert sent to Property Manager to contact tenant."
      }].map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/15 rounded-xl border border-border/50 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold font-mono text-primary uppercase", children: step.day }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: step.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9.5px] text-slate-500 font-normal leading-relaxed", children: step.desc })
      ] }, i)) })
    ] })
  ] });
  const [loanIncome, setLoanIncome] = reactExports.useState(85e3);
  const [loanEmi, setLoanEmi] = reactExports.useState(12e3);
  const [propertyVal, setPropertyVal] = reactExports.useState(72);
  const [downPayment, setDownPayment] = reactExports.useState(12);
  const [loanTenure, setLoanTenure] = reactExports.useState(20);
  const [empType, setEmpType] = reactExports.useState("Salaried");
  const calculatedReq = reactExports.useMemo(() => {
    return Math.max(0, propertyVal - downPayment);
  }, [propertyVal, downPayment]);
  const maxEligibility = reactExports.useMemo(() => {
    if (empType === "Salaried") {
      const allowedEmi = loanIncome * 0.5 - loanEmi;
      if (allowedEmi <= 0) return 0;
      const monthlyRate = 8.5 / 12 / 100;
      const n = loanTenure * 12;
      const factor = (Math.pow(1 + monthlyRate, n) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, n));
      return Math.round(allowedEmi * factor / 1e5);
    } else {
      const estAnnualProfit = loanIncome * 12;
      return Math.round(estAnnualProfit * 4.5 / 1e5);
    }
  }, [loanIncome, loanEmi, loanTenure, empType]);
  reactExports.useMemo(() => {
    const loanAmt = calculatedReq * 1e5;
    const rate = 8.5 / 12 / 100;
    const n = loanTenure * 12;
    const emiVal = loanAmt * rate * Math.pow(1 + rate, n) / (Math.pow(1 + rate, n) - 1);
    const totalPaid = emiVal * n;
    const totalInterest = totalPaid - loanAmt;
    return {
      emi: Math.round(emiVal) || 0,
      interest: Math.round(totalInterest) || 0,
      total: Math.round(totalPaid) || 0
    };
  }, [calculatedReq, loanTenure]);
  const renderLoanCopilot = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2", children: "Interactive Eligibility Calculator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 text-xs font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500 block", children: "Employment Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["Salaried", "Self-employed"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEmpType(t), className: `flex-1 h-8 rounded-lg border text-xs font-bold uppercase transition-all ${empType === t ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`, children: t }, t)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500", children: "Net Monthly Income (₹)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-primary font-bold", children: [
                "₹",
                loanIncome.toLocaleString("en-IN")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "20000", max: "300000", step: "5000", value: loanIncome, onChange: (e) => setLoanIncome(parseInt(e.target.value)), className: "w-full accent-primary" })
          ] }),
          empType === "Salaried" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500", children: "Existing Monthly EMIs (₹)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-primary font-bold", children: [
                "₹",
                loanEmi.toLocaleString("en-IN")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "0", max: "100000", step: "2000", value: loanEmi, onChange: (e) => setLoanEmi(parseInt(e.target.value)), className: "w-full accent-primary" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500", children: "Property Price (Lakhs)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-primary font-bold", children: [
                  "₹",
                  propertyVal,
                  "L"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "15", max: "200", step: "5", value: propertyVal, onChange: (e) => setPropertyVal(parseInt(e.target.value)), className: "w-full accent-primary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500", children: "Down Payment (Lakhs)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-primary font-bold", children: [
                  "₹",
                  downPayment,
                  "L"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "3", max: "100", step: "1", value: downPayment, onChange: (e) => setDownPayment(parseInt(e.target.value)), className: "w-full accent-primary" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500", children: "Tenure (Years)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-primary font-bold", children: [
                loanTenure,
                " Years"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "10", max: "30", step: "5", value: loanTenure, onChange: (e) => setLoanTenure(parseInt(e.target.value)), className: "w-full accent-primary" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/30 rounded-xl border border-border/40 font-mono text-[10px] space-y-1 text-slate-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "Loan Sought: ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-foreground", children: [
              "₹",
              calculatedReq,
              " Lakhs"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            "Calculated Max Loan Eligibility: ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-emerald-600", children: [
              "₹",
              maxEligibility,
              " Lakhs"
            ] })
          ] }),
          calculatedReq > maxEligibility ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-red-500 font-bold mt-1", children: [
            "⚠️ Loan sought exceeds eligibility by ₹",
            Math.round(calculatedReq - maxEligibility),
            "L. Increase down payment or add a co-applicant."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-emerald-600 font-bold mt-1", children: "✓ Eligibility criteria met." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-7 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2 mb-3", children: "Live Rate Comparisons & EMI Calculations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Bank" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Interest Rate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-mono", children: "EMI (approx)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Processing Fee" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-mono", children: "Time Frame" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium", children: bankRates.map((bank, i) => {
              const rate = bank.rate / 12 / 100;
              const n = loanTenure * 12;
              const principal = calculatedReq * 1e5;
              const emiAmt = Math.round(principal * rate * Math.pow(1 + rate, n) / (Math.pow(1 + rate, n) - 1)) || 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 font-bold flex items-center gap-1.5", children: [
                  bank.bank,
                  bank.rate === 8.5 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-bold bg-emerald-100 text-emerald-700 px-1 py-0.2 rounded border border-emerald-200", children: "Best Rate" }),
                  bank.time.includes("7") && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-bold bg-blue-100 text-blue-700 px-1 py-0.2 rounded border border-blue-200", children: "Fastest" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 font-mono", children: [
                  bank.rate.toFixed(2),
                  "% p.a."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 font-mono font-extrabold text-primary", children: [
                  "₹",
                  emiAmt.toLocaleString("en-IN")
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-slate-500 font-mono", children: bank.fee }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-slate-400 font-mono", children: bank.time })
              ] }, i);
            }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2", children: [
            "EMI Tenure Analysis (SBI Home Loan, ₹",
            calculatedReq,
            "L)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 text-xs font-semibold", children: [15, 20, 30].map((t) => {
            const rate = 8.5 / 12 / 100;
            const n = t * 12;
            const principal = calculatedReq * 1e5;
            const emi = Math.round(principal * rate * Math.pow(1 + rate, n) / (Math.pow(1 + rate, n) - 1)) || 0;
            const totalPaid = emi * n;
            const interest = totalPaid - principal;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/15 rounded-xl border border-border/50 text-center space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold font-mono text-primary", children: [
                t,
                " YEARS"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-bold text-foreground text-sm", children: [
                "₹",
                emi.toLocaleString("en-IN"),
                "/mo"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] text-slate-400 font-normal", children: [
                "Interest: ₹",
                Math.round(interest / 1e5).toFixed(1),
                "L"
              ] })
            ] }, t);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => alert("Connecting to bank relationship partner... SMS with contact card dispatched."), className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest font-sans transition-all flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
            " Connect to Bank RM (SBI Vesu)"
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2", children: [
        "Home Loan Document Checklist (",
        empType,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] font-semibold text-slate-600 leading-relaxed", children: empType === "Salaried" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground border-b border-border/40 pb-0.5", children: "KYC & Identity:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "✓ Aadhaar Card (front + back) - Self-attested" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "✓ PAN Card - Self-attested" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "✓ Passport Size Photographs (4 copies)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground border-b border-border/40 pb-0.5", children: "Income Proofs:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "✓ Last 3 months Salary Slips (Company seal)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "✓ Last 2 years Form 16 (Part A & B)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "✓ Bank statement for last 6 months (salary account)" })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground border-b border-border/40 pb-0.5", children: "Business KYC:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "✓ Business Registration Certificate (GST / Trade Licence)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "✓ CA Certified Balance Sheet & P&L statements (last 2 years)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "✓ PAN of Firm/Company + Proprietor" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground border-b border-border/40 pb-0.5", children: "Financial Documents:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "✓ ITR for last 2 years (with computation of income)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "✓ Bank statements for last 12 months (current account)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "✓ GST Returns (last 4 quarters)" })
        ] })
      ] }) })
    ] })
  ] });
  const [surveys, setSurveys] = reactExports.useState(initialSurveys);
  const [newSurveyName, setNewSurveyName] = reactExports.useState("");
  const [newSurveyNps, setNewSurveyNps] = reactExports.useState(9);
  const [newSurveyComment, setNewSurveyComment] = reactExports.useState("");
  const [newSurveyType, setNewSurveyType] = reactExports.useState("Move-In Check-In");
  const npsDistribution = reactExports.useMemo(() => {
    const total = surveys.length;
    const promoters = surveys.filter((s) => s.nps >= 9).length;
    const passives = surveys.filter((s) => s.nps >= 7 && s.nps <= 8).length;
    const detractors = surveys.filter((s) => s.nps <= 6).length;
    const npsScore = Math.round((promoters - detractors) / total * 100);
    return {
      total,
      promoters,
      passives,
      detractors,
      npsScore
    };
  }, [surveys]);
  const submitSurvey = (e) => {
    e.preventDefault();
    if (!newSurveyName || !newSurveyComment) {
      alert("Please fill out name and comment.");
      return;
    }
    const classification = newSurveyNps >= 9 ? "Promoter" : newSurveyNps >= 7 ? "Passive" : "Detractor";
    const newSurvey = {
      id: `SUR-2025-08${surveys.length + 5}`,
      tenant: newSurveyName,
      unit: "GH-2B",
      type: newSurveyType,
      nps: newSurveyNps,
      classification,
      comment: newSurveyComment,
      date: "15/01/2025"
    };
    setSurveys((prev) => [newSurvey, ...prev]);
    setNewSurveyName("");
    setNewSurveyComment("");
    alert(`Survey response logged! Overall Portfolio NPS updated.`);
  };
  const renderNps = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "NPS Snapshot" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-24 w-24 mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 36 36", className: "h-24 w-24 -rotate-90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9155", fill: "none", stroke: "#e5e7eb", strokeWidth: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9155", fill: "none", strokeWidth: "3", stroke: npsDistribution.npsScore >= 50 ? "#1D9E75" : npsDistribution.npsScore >= 20 ? "#2E86AB" : "#D85A30", strokeDasharray: `${Math.max(0, npsDistribution.npsScore)} ${100 - Math.max(0, npsDistribution.npsScore)}`, strokeLinecap: "round" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-extrabold font-mono text-primary", children: [
                "+",
                npsDistribution.npsScore
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase tracking-wider text-slate-400 font-bold", children: "NPS Score" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-semibold text-slate-500 font-mono", children: [
            "Total Responses: ",
            npsDistribution.total
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between p-2 rounded bg-emerald-50 text-emerald-700 border border-emerald-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "😊 Promoters (9–10)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
              npsDistribution.promoters,
              " (",
              Math.round(npsDistribution.promoters / npsDistribution.total * 100),
              "%)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between p-2 rounded bg-blue-50 text-blue-700 border border-blue-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "😐 Passives (7–8)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
              npsDistribution.passives,
              " (",
              Math.round(npsDistribution.passives / npsDistribution.total * 100),
              "%)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between p-2 rounded bg-red-50 text-red-700 border border-red-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "😟 Detractors (0–6)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
              npsDistribution.detractors,
              " (",
              Math.round(npsDistribution.detractors / npsDistribution.total * 100),
              "%)"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card border-red-200 bg-red-50/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-bold text-red-700 border-b border-red-200 pb-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 animate-pulse shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Active Detractor Alert — Immediate outreach required" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 font-semibold text-slate-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "Tenant: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Rajesh Patel" }),
                " (Flat 12A, Tower A, Vesu)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "Expiry Date: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "15 Feb 2025" }),
                " (14 days remaining)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "NPS Score: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 font-bold font-mono", children: "4/10 (Detractor)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert("Property Manager has initiated contact. Action logged."), className: "h-7 px-3 bg-red-600 hover:bg-red-700 text-white rounded text-[10px] uppercase font-bold tracking-wider", children: "Log PM Call Outreach" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white border border-red-100 rounded-xl font-mono text-[10px] leading-relaxed text-slate-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-slate-800", children: "Feedback Transcript:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: '"Maintenance took 5 days for urgent AC issue. Neighbors are noisy in Tower A. Parking is too congested."' })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2", children: "Feedback Input Simulator" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submitSurvey, className: "grid grid-cols-1 md:grid-cols-12 gap-3 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-400", children: "Tenant Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: newSurveyName, onChange: (e) => setNewSurveyName(e.target.value), placeholder: "e.g. Ramesh Patel", className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none font-bold" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-400", children: "Survey Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: newSurveyType, onChange: (e) => setNewSurveyType(e.target.value), className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none font-bold", children: ["Move-In Check-In", "3-Month Check-In", "6-Month Check-In", "Pre-Renewal Survey", "Post-Maintenance"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: t }, t)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-400", children: "NPS (0-10)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: "0", max: "10", value: newSurveyNps, onChange: (e) => setNewSurveyNps(parseInt(e.target.value) || 0), className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none font-mono font-bold" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-3 flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
              " Submit Response"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-12 space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-400", children: "Comments" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: newSurveyComment, onChange: (e) => setNewSurveyComment(e.target.value), placeholder: "Write tenant comments here...", className: "w-full h-12 p-2 rounded-lg border border-border bg-background text-foreground outline-none font-normal" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-0 overflow-hidden border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display uppercase tracking-wider", children: "Historical NPS Logs" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Tenant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Unit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Score" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Classification" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Comments" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: surveys.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold text-slate-400", children: row.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold", children: row.tenant }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500 font-mono", children: row.unit }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500", children: row.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-extrabold text-primary", children: [
            row.nps,
            "/10"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(row.classification)}`, children: row.classification }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-400 font-normal max-w-[240px] truncate", children: row.comment })
        ] }, row.id)) })
      ] }) })
    ] })
  ] });
  const [renewals, setRenewals] = reactExports.useState(initialRenewals);
  const [selectedRenewal, setSelectedRenewal] = reactExports.useState(initialRenewals[0]);
  const concludeRenewal = (id, revisionRent) => {
    setRenewals((prev) => prev.map((r) => {
      if (r.id === id) {
        return {
          ...r,
          stage: "Concluded",
          response: "Accepted",
          currentRent: revisionRent,
          eSign: "Completed"
        };
      }
      return r;
    }));
    setSelectedRenewal((prev) => {
      if (prev.id === id) {
        return {
          ...prev,
          stage: "Concluded",
          response: "Accepted",
          currentRent: revisionRent,
          eSign: "Completed"
        };
      }
      return prev;
    });
    alert(`Renewal completed! New rent ₹${revisionRent.toLocaleString("en-IN")} logged in systems.`);
  };
  const sendProposal = (tenantName) => {
    alert(`Proposal WhatsApp sent to ${tenantName} containing draft lease and revised rate.`);
  };
  const renderRenewal = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Leases Expiring (Quarter)", value: "14", desc: "Portfolio total", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Renewals Concluded", value: "8", desc: "57% completed", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Negotiations Active", value: "3", desc: "2 in pipeline", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Vacancy Risks", value: "2", desc: "Declined renewal", color: "text-[#D85A30]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display uppercase tracking-wider", children: "Lease Renewal Pipelines" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Unit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Tenant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Expires In" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Current" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Proposed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "NPS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Stage" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: renewals.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setSelectedRenewal(row), className: `hover:bg-secondary/15 cursor-pointer transition-colors ${selectedRenewal.id === row.id ? "bg-secondary/20 font-bold" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold text-slate-700", children: row.unit }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: row.tenant }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-slate-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-1.5 py-0.5 rounded text-[10px] font-bold ${row.daysAway <= 14 ? "bg-red-50 text-red-600 border border-red-100 animate-pulse" : "bg-slate-100 text-slate-500"}`, children: [
              row.daysAway,
              " days"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono", children: [
              "₹",
              row.currentRent.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono text-primary font-bold", children: [
              "₹",
              row.proposedRent.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-mono font-bold ${row.nps < 5 ? "text-red-500 animate-pulse" : "text-emerald-500"}`, children: [
              "★ ",
              row.nps,
              " ",
              row.nps < 5 && "⚠️"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(row.stage)}`, children: row.stage }) })
          ] }, row.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: [
            "Renewal Proposal — ",
            selectedRenewal.unit
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(selectedRenewal.stage)}`, children: selectedRenewal.stage })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: selectedRenewal.tenant }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-slate-400 font-semibold font-mono", children: [
              "Lease Expiry: ",
              selectedRenewal.expiry,
              " (",
              selectedRenewal.daysAway,
              " days away)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/40 font-semibold space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-slate-400", children: "Rent Revision Intelligence (Market Comp)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-slate-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Current Rent:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground font-bold", children: [
                "₹",
                selectedRenewal.currentRent.toLocaleString("en-IN"),
                "/mo"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-slate-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Market Range Comparable:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground font-bold", children: selectedRenewal.marketRange })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-slate-500 border-t border-border/40 pt-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Recommended Offer:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-primary font-extrabold", children: [
                "₹",
                selectedRenewal.proposedRent.toLocaleString("en-IN"),
                "/mo"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 font-mono text-[10px] text-slate-500 font-semibold border border-border/40 p-2.5 rounded-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              "Outreach 1 (60d): ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: selectedRenewal.outreach1 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              "Outreach 2 (30d): ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: selectedRenewal.outreach2 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              "Tenant response: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-primary", children: selectedRenewal.response })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              "E-Sign envelope: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-emerald-600", children: selectedRenewal.eSign })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => sendProposal(selectedRenewal.tenant), className: "flex-1 h-8 border border-border hover:bg-secondary rounded-lg text-xs font-bold uppercase tracking-wider text-slate-700", children: "Send Proposal" }),
            selectedRenewal.stage !== "Concluded" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => concludeRenewal(selectedRenewal.id, selectedRenewal.proposedRent), className: "flex-1 h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all", children: "Conclude Lease" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1", children: "WhatsApp Proposal Template" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-emerald-50/50 rounded-xl p-2.5 text-[9px] leading-relaxed text-slate-600 font-semibold border border-emerald-100/50", children: `Hi ${selectedRenewal.tenant}, your lease for ${selectedRenewal.unit} expires on ${selectedRenewal.expiry}. Proposal: Current Rent: ₹${selectedRenewal.currentRent.toLocaleString()} -> Proposed: ₹${selectedRenewal.proposedRent.toLocaleString()}/mo. Reply YES to accept.` })
          ] })
        ] })
      ] })
    ] })
  ] });
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
    activeTab === "screening" && renderScreening(),
    activeTab === "maintenance" && renderMaintenance(),
    activeTab === "rent" && renderRent(),
    activeTab === "loan" && renderLoanCopilot(),
    activeTab === "nps" && renderNps(),
    activeTab === "renewal" && renderRenewal()
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
  TenantPropertyManager as component
};
