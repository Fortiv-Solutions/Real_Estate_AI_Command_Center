import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, C as Card } from "./AppShell-Dji0FoTH.mjs";
import { h as Route$4 } from "./router-SPLEJOXz.mjs";
import { m as ChevronLeft, b as ArrowRight, g as Calendar, A as Activity, F as FileText, t as Download, U as Send, a3 as Upload, u as Eye, a2 as TriangleAlert, X as ShieldCheck } from "../_libs/lucide-react.mjs";
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
const activityFeed = [{
  time: "10:42 AM",
  event: "Agreement generated — Rajesh Patel — Sale Agreement — Greenview Heights",
  type: "doc"
}, {
  time: "11:15 AM",
  event: "OCR extraction complete — Priya Shah — Aadhaar + PAN — 98% completeness",
  type: "ocr"
}, {
  time: "11:30 AM",
  event: "KYC verified — Deepak Trivedi — All checks passed",
  type: "kyc"
}, {
  time: "01:04 PM",
  event: "E-signature sent — Vikram Joshi — MOU — Pending signing",
  type: "esign"
}, {
  time: "09:00 AM",
  event: "RERA alert dispatched — Greenview Heights QPR due in 11 days",
  type: "alert"
}];
const reraDeadlines = [{
  id: 1,
  deadline: "31/01/2025",
  project: "Greenview Heights",
  type: "QPR Submission",
  daysAway: 11,
  status: "Action needed"
}, {
  id: 2,
  deadline: "31/01/2025",
  project: "Skyline Residences",
  type: "QPR Submission",
  daysAway: 11,
  status: "Action needed"
}, {
  id: 3,
  deadline: "15/02/2025",
  project: "Business Park",
  type: "Advertisement Compliance Review",
  daysAway: 26,
  status: "Upcoming"
}, {
  id: 4,
  deadline: "31/03/2025",
  project: "Greenview Heights",
  type: "Annual Audit",
  daysAway: 70,
  status: "Tracked"
}];
const recentDocuments = [{
  id: 1,
  type: "Sale Agreement",
  buyer: "Rajesh Patel",
  project: "Greenview Heights",
  generated: "20/01 10:42",
  status: "Under Review",
  reviewer: "Adv. K. Shah"
}, {
  id: 2,
  type: "Allotment Letter",
  buyer: "Sunita Mehta",
  project: "Skyline Residences",
  generated: "19/01 03:15",
  status: "Approved",
  reviewer: "Rahul Modi"
}, {
  id: 3,
  type: "MOU",
  buyer: "Vikram Joshi",
  project: "Business Park",
  generated: "18/01 11:05",
  status: "Approved — E-sign sent",
  reviewer: "Adv. K. Shah"
}, {
  id: 4,
  type: "Payment Schedule",
  buyer: "Deepak Trivedi",
  project: "Greenview Heights",
  generated: "17/01 02:30",
  status: "Approved",
  reviewer: "Rahul Modi"
}, {
  id: 5,
  type: "Demand Letter",
  buyer: "Amit Desai",
  project: "Greenview Heights",
  generated: "16/01 10:00",
  status: "Approved — Sent",
  reviewer: "Rahul Modi"
}];
const templateVersionLog = [{
  version: "v2.3",
  changedBy: "Adv. K. Shah",
  desc: "Updated force majeure clause",
  date: "10/01/2025",
  status: "Active"
}, {
  version: "v2.2",
  changedBy: "Adv. K. Shah",
  desc: "Added RERA amendment clause",
  date: "15/12/2024",
  status: "Superseded"
}, {
  version: "v2.1",
  changedBy: "Rahul Modi",
  desc: "Updated possession date format",
  date: "01/12/2024",
  status: "Superseded"
}, {
  version: "v2.0",
  changedBy: "Adv. K. Shah",
  desc: "Base Gujarat RERA-compliant template",
  date: "01/10/2024",
  status: "Superseded"
}];
const ocrBuyerCompleteness = [{
  buyer: "Rajesh Patel",
  aadhaar: "Verified",
  pan: "Verified",
  bank: "Received",
  salary: "Received",
  noc: "N/A",
  score: 92
}, {
  buyer: "Priya Shah",
  aadhaar: "Verified",
  pan: "Verified",
  bank: "Pending",
  salary: "Pending",
  noc: "N/A",
  score: 65
}, {
  buyer: "Deepak Trivedi",
  aadhaar: "Verified",
  pan: "Verified",
  bank: "Received",
  salary: "Received",
  noc: "N/A",
  score: 92
}, {
  buyer: "Vikram Joshi",
  aadhaar: "Verified",
  pan: "Verified",
  bank: "Received",
  salary: "Received",
  noc: "Received",
  score: 100
}];
const ocrValidationFlags = [{
  id: 1,
  buyer: "Sunita Mehta",
  doc: "PAN Card",
  flag: "Name mismatch vs Aadhaar",
  severity: "Review"
}, {
  id: 2,
  buyer: "Priya Shah",
  doc: "Bank Statement",
  flag: "Document not yet uploaded",
  severity: "Pending"
}, {
  id: 3,
  buyer: "Amit Desai",
  doc: "Aadhaar (back page)",
  flag: "Low image quality — re-upload requested",
  severity: "Re-upload"
}];
const reraComplianceChecklist = [{
  doc: "Title Deed / Ownership Proof",
  greenview: "Filed",
  skyline: "Filed",
  bizpark: "Filed",
  mandatory: true
}, {
  doc: "Encumbrance Certificate",
  greenview: "Filed",
  skyline: "Filed",
  bizpark: "Filed",
  mandatory: true
}, {
  doc: "Building Plan Approval",
  greenview: "Filed",
  skyline: "Filed",
  bizpark: "Filed",
  mandatory: true
}, {
  doc: "Environmental Clearance",
  greenview: "Filed",
  skyline: "Pending renewal",
  bizpark: "Filed",
  mandatory: true
}, {
  doc: "Fire NOC",
  greenview: "Filed",
  skyline: "Filed",
  bizpark: "Filed",
  mandatory: true
}, {
  doc: "RERA Registration Certificate",
  greenview: "Valid (exp. Dec 2026)",
  skyline: "Valid (exp. Mar 2027)",
  bizpark: "Valid (exp. Jun 2025)",
  mandatory: true
}, {
  doc: "Last QPR Submission",
  greenview: "Oct 2024",
  skyline: "Oct 2024",
  bizpark: "Oct 2024",
  mandatory: true
}, {
  doc: "Next QPR Due",
  greenview: "⚠️ 31 Jan 2025",
  skyline: "⚠️ 31 Jan 2025",
  bizpark: "⚠️ 31 Jan 2025",
  mandatory: true
}, {
  doc: "Annual Audit",
  greenview: "Mar 2024",
  skyline: "Mar 2024",
  bizpark: "Mar 2024",
  mandatory: true
}, {
  doc: "Completion Certificate",
  greenview: "Under construction",
  skyline: "Under construction",
  bizpark: "Filed",
  mandatory: false
}];
const penaltyExposure = [{
  id: 1,
  project: "Greenview Heights",
  obligation: "QPR",
  deadline: "31/01/2025",
  projectCost: "₹45 Cr",
  maxPenalty: "₹2.25 Cr",
  daysAway: 11
}, {
  id: 2,
  project: "Skyline Residences",
  obligation: "QPR",
  deadline: "31/01/2025",
  projectCost: "₹82 Cr",
  maxPenalty: "₹4.10 Cr",
  daysAway: 11
}, {
  id: 3,
  project: "Business Park",
  obligation: "RERA Expiry",
  deadline: "30/06/2025",
  projectCost: "₹28 Cr",
  maxPenalty: "₹1.40 Cr",
  daysAway: 161
}];
const gujaratiLocalities = ["Vesu", "Adajan", "Pal", "Althan", "Gotri", "Alkapuri", "Waghodia Road", "Athwa", "Citylight", "Bhimrad"];
const activeSigningEnvelopes = [{
  id: 1,
  doc: "Sale Agreement",
  buyer: "Rajesh Patel",
  sent: "20/01 14:35",
  buyer_status: "Signed",
  seller_status: "Opened",
  w1: "Sent",
  w2: "Sent",
  overall: "In Progress"
}, {
  id: 2,
  doc: "MOU",
  buyer: "Vikram Joshi",
  sent: "18/01 11:30",
  buyer_status: "Signed",
  seller_status: "Signed",
  w1: "Signed",
  w2: "Signed",
  overall: "Completed"
}, {
  id: 3,
  doc: "Allotment Letter",
  buyer: "Sunita Mehta",
  sent: "19/01 04:00",
  buyer_status: "Opened",
  seller_status: "N/A",
  w1: "N/A",
  w2: "N/A",
  overall: "Awaiting Buyer"
}, {
  id: 4,
  doc: "Payment Schedule",
  buyer: "Deepak Trivedi",
  sent: "17/01 02:45",
  buyer_status: "Signed",
  seller_status: "N/A",
  w1: "N/A",
  w2: "N/A",
  overall: "Completed"
}];
const kycBuyers = [{
  buyer: "Rajesh Patel",
  aadhaar: "Verified",
  pan: "Verified",
  paLink: "Linked",
  bank: "Verified",
  pmla: "Clear",
  pep: "Not a PEP",
  cibil: 742,
  fema: "N/A",
  overall: "Proceed",
  flags: "None"
}, {
  buyer: "Priya Shah",
  aadhaar: "Verified",
  pan: "Verified",
  paLink: "Linked",
  bank: "Pending",
  pmla: "Clear",
  pep: "Not a PEP",
  cibil: 0,
  fema: "N/A",
  overall: "Incomplete",
  flags: "Bank pending"
}, {
  buyer: "Deepak Trivedi",
  aadhaar: "Verified",
  pan: "Verified",
  paLink: "Linked",
  bank: "Verified",
  pmla: "Clear",
  pep: "Not a PEP",
  cibil: 681,
  fema: "N/A",
  overall: "Proceed",
  flags: "None"
}, {
  buyer: "Vikram Joshi",
  aadhaar: "Verified",
  pan: "Verified",
  paLink: "Linked",
  bank: "Verified",
  pmla: "Clear",
  pep: "Not a PEP",
  cibil: 0,
  fema: "N/A",
  overall: "Proceed",
  flags: "None"
}, {
  buyer: "Sunita Mehta",
  aadhaar: "Verified",
  pan: "Name mismatch",
  paLink: "—",
  bank: "Pending",
  pmla: "Clear",
  pep: "Not a PEP",
  cibil: 0,
  fema: "N/A",
  overall: "Review",
  flags: "PAN name mismatch"
}];
const statusDot = (status) => {
  if (status === "Signed" || status === "Verified" || status === "Linked" || status === "Clear" || status === "Not a PEP") return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" });
  if (status === "Opened" || status === "Pending" || status === "Incomplete") return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse inline-block" });
  if (status === "Name mismatch" || status === "Review") return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse inline-block" });
  if (status === "Sent") return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-blue-400 inline-block" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-slate-300 inline-block" });
};
const statusBadge = (status) => {
  if (["Signed", "Verified", "Linked", "Clear", "Not a PEP", "Completed", "Filed", "Proceed"].some((s) => status.includes(s))) return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (["Opened", "Pending", "Upcoming", "Tracked", "Incomplete", "Under Review"].some((s) => status.includes(s))) return "bg-amber-50 text-amber-700 border border-amber-100";
  if (["Mismatch", "Action needed", "Review", "Reject"].some((s) => status.includes(s))) return "bg-red-50 text-[#D85A30] border border-red-100";
  if (["Sent", "Awaiting"].some((s) => status.includes(s))) return "bg-blue-50 text-blue-700 border border-blue-100";
  return "bg-slate-50 text-slate-600 border border-slate-200";
};
function ComplianceManager() {
  const {
    tab
  } = Route$4.useSearch();
  const navigate = useNavigate({
    from: Route$4.fullPath
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
    desc: "Document health KPIs, RERA deadline calendar, and real-time compliance activity feed.",
    stats: "3 pending review",
    status: "Active"
  }, {
    id: "agreement-gen",
    name: "Agreement Draft Generator",
    desc: "AI-generated sale agreements, MOUs, allotment letters, and demand notices from CRM deal records.",
    stats: "5 docs this week",
    status: "Active"
  }, {
    id: "ocr-extractor",
    name: "OCR Document Extractor",
    desc: "Optical extraction of buyer KYC documents with validation scoring and CRM field mapping.",
    stats: "97.4% avg accuracy",
    status: "Active"
  }, {
    id: "rera-monitor",
    name: "RERA Compliance Monitor",
    desc: "Deadline calendar, QPR filing tracker, penalty exposure calculator, and regulatory update feed.",
    stats: "2 deadlines due",
    status: "Alert"
  }, {
    id: "stamp-duty",
    name: "Stamp Duty & Cost Calculator",
    desc: "Auto-computed stamp duty, registration fees, GST, and full cost-of-purchase summary for any Gujarat property.",
    stats: "Live circle rates",
    status: "Active"
  }, {
    id: "esign",
    name: "E-Signature Workflow",
    desc: "Document signing queue, multi-party status tracker, reminder logs, and executed document vault.",
    stats: "4 envelopes active",
    status: "Active"
  }, {
    id: "kyc-verify",
    name: "KYC Verification Dashboard",
    desc: "Automated Aadhaar, PAN, bank, PMLA, and PEP verification with 7-year immutable audit trail.",
    stats: "78% completion rate",
    status: "Active"
  }];
  const getPageHeader = () => {
    const map = {
      menu: {
        title: "Document AI & Compliance",
        subtitle: "Automates every document in the real estate transaction lifecycle — from agreement generation to RERA compliance — eliminating manual paperwork and legal risk."
      },
      overview: {
        title: "Compliance Dashboard Overview",
        subtitle: "Real-time document health, RERA deadline indicators, and today's compliance activity across all active projects."
      },
      "agreement-gen": {
        title: "Agreement Draft Generator",
        subtitle: "AI-powered legal document drafting from approved templates and live CRM data — complete, accurate, in under 3 minutes."
      },
      "ocr-extractor": {
        title: "OCR Document Extractor",
        subtitle: "Scan and extract structured data from buyer KYC documents automatically, mapped directly to CRM records."
      },
      "rera-monitor": {
        title: "RERA Compliance Monitor",
        subtitle: "Track all Gujarat RERA obligations, QPR deadlines, document checklists, and penalty exposure across every active project."
      },
      "stamp-duty": {
        title: "Stamp Duty & Cost Calculator",
        subtitle: "Precise stamp duty, registration fee, GST, and full cost-of-purchase computation with Gujarat circle rate integration."
      },
      esign: {
        title: "E-Signature Workflow",
        subtitle: "Multi-party digital signing queue with real-time status tracking, automated reminders, and executed document vault."
      },
      "kyc-verify": {
        title: "KYC Verification Dashboard",
        subtitle: "Automated Aadhaar, PAN, PMLA, PEP, and bank verification with full consent management and 7-year audit trail."
      }
    };
    return map[activeTab] || map.menu;
  };
  const headerInfo = getPageHeader();
  const dynamicTitle = activeTab === "menu" ? headerInfo.title : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("menu"), className: "group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95 mr-0.5", "aria-label": "Back to compliance menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors", onClick: () => setActiveTab("menu"), children: headerInfo.title })
  ] });
  const renderOverview = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Agreements Pending Review", value: "3", desc: "Awaiting legal sign-off", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "RERA Deadlines (30 Days)", value: "2", desc: "Action required", color: "text-[#D85A30]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "KYC Completion Rate", value: "78%", desc: "Active buyers verified", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "E-Signatures Pending", value: "4", desc: "Documents awaiting sign", color: "text-[#1A3C5E]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 border-b border-border/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5 text-[#D85A30]" }),
            " RERA Deadline Calendar (Next 30 Days)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("rera-monitor"), className: "text-[9px] font-bold text-primary hover:underline font-mono", children: "Full Monitor →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: reraDeadlines.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-2.5 rounded-xl border flex items-center justify-between text-xs ${d.daysAway <= 14 ? "border-red-200 bg-red-50/40" : d.daysAway <= 30 ? "border-amber-200 bg-amber-50/20" : "border-border bg-background"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-foreground", children: [
              d.project,
              " — ",
              d.type
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] font-mono text-slate-400", children: [
              "Due: ",
              d.deadline
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-extrabold font-mono px-2 py-0.5 rounded ${statusBadge(d.status)}`, children: d.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-[9px] font-bold font-mono ${d.daysAway <= 14 ? "text-[#D85A30] animate-pulse" : d.daysAway <= 30 ? "text-amber-700" : "text-slate-500"}`, children: [
              d.daysAway,
              " days away"
            ] })
          ] })
        ] }, d.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 border-b border-border/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5 text-emerald-600 animate-pulse" }),
            " Document Activity Feed"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-500 animate-pulse" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 overflow-y-auto max-h-[280px] scrollbar-none pr-1", children: activityFeed.map((act, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5 text-xs leading-relaxed border-b border-border/30 pb-2.5 last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-slate-400 shrink-0 mt-0.5 text-[9.5px]", children: act.time }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-semibold ${act.type === "alert" ? "text-[#D85A30] animate-pulse font-bold" : act.type === "kyc" ? "text-emerald-600" : "text-foreground"}`, children: act.event })
        ] }, idx)) })
      ] })
    ] })
  ] });
  const [selectedDeal, setSelectedDeal] = reactExports.useState("Rajesh Patel — Tower A, Unit 903");
  const [docType, setDocType] = reactExports.useState("Sale Agreement");
  const [witness1, setWitness1] = reactExports.useState("Priya Rana");
  const [witness2, setWitness2] = reactExports.useState("Rahul Modi");
  const [genProgress, setGenProgress] = reactExports.useState(-1);
  const [genStep, setGenStep] = reactExports.useState("");
  const [selectedDocReview, setSelectedDocReview] = reactExports.useState(null);
  const startDocGen = () => {
    setGenProgress(0);
    setGenStep("PULLING CRM DEAL VARIABLES AND BUYER IDENTITY FIELDS...");
  };
  reactExports.useEffect(() => {
    if (genProgress === -1 || genProgress >= 100) return;
    const t = setTimeout(() => {
      setGenProgress((p) => {
        const next = p + 14;
        if (next === 28) setGenStep("MERGING BUYER KYC FIELDS INTO TEMPLATE v2.3...");
        if (next === 56) setGenStep("AUTO-CONVERTING AMOUNTS TO WORDS (₹56,00,000 → Rupees Fifty-Six Lakhs Only)...");
        if (next === 84) setGenStep("STAMPING RERA NUMBER AND POSSESSION DATE...");
        return next;
      });
    }, 300);
    return () => clearTimeout(t);
  }, [genProgress]);
  const renderAgreementGen = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Generated This Month", value: "14 docs", desc: "All templates", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Pending Legal Review", value: "3", desc: "Awaiting approval", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Approved This Week", value: "6", desc: "Ready for signing", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Avg Generation Time", value: "2m 48s", desc: "Incl. merge + preview", color: "text-[#1A3C5E]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4 border border-border bg-card flex flex-col justify-between min-h-[420px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2", children: "Document Generation Parameters" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500 block", children: "CRM Deal / Buyer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: selectedDeal, onChange: (e) => setSelectedDeal(e.target.value), className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none text-xs font-bold focus:border-ring", children: ["Rajesh Patel — Tower A, Unit 903", "Priya Shah — Tower B, Unit 1102", "Deepak Trivedi — Tower A, Unit 604", "Vikram Joshi — Business Park, Unit C-201"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: d }, d)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500 block", children: "Document Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: docType, onChange: (e) => setDocType(e.target.value), className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none text-xs font-bold focus:border-ring", children: ["Sale Agreement", "MOU", "Allotment Letter", "Payment Schedule", "Demand Letter", "Cancellation Agreement", "Possession Letter"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: t }, t)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500 block", children: "Witness 1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: witness1, onChange: (e) => setWitness1(e.target.value), className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none text-xs font-bold focus:border-ring" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500 block", children: "Witness 2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: witness2, onChange: (e) => setWitness2(e.target.value), className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none text-xs font-bold focus:border-ring" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500 block", children: "Legal Reviewer Assignment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none text-xs font-bold focus:border-ring", children: ["Adv. K. Shah (Lead Counsel)", "Rahul Modi (Manager)", "Legal Team Queue"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: r }, r)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500 block", children: "Template Version" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none text-xs font-bold focus:border-ring", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "v2.3 — Active (Force majeure updated)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "v2.2 — RERA amendment clause" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: startDocGen, disabled: genProgress >= 0 && genProgress < 100, className: "w-full h-9 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all mt-4 disabled:opacity-50 active:scale-95 flex items-center justify-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }),
          " ",
          genProgress >= 0 && genProgress < 100 ? "Generating..." : "Generate Document"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-8 p-4 border border-border bg-card min-h-[420px] flex flex-col justify-center", children: [
        genProgress === -1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-12 w-12 text-slate-300 mx-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm font-bold text-foreground", children: "Draft Generator Ready" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-xs mx-auto font-medium", children: "Configure deal and document type on the left and click Generate to preview the merged legal draft." })
        ] }),
        genProgress >= 0 && genProgress < 100 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8 space-y-4 animate-in fade-in duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-12 w-12 mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full border-4 border-slate-100 border-t-primary animate-spin" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs text-foreground uppercase tracking-widest font-display", children: "Drafting Document" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-bold font-mono text-primary mt-1", children: [
              genProgress,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9.5px] font-mono text-slate-400 uppercase tracking-wider mt-2", children: genStep })
          ] })
        ] }),
        genProgress >= 100 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 animate-in slide-in-from-bottom duration-500 h-full flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-amber-200 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-mono", children: "DRAFT — Pending Legal Review" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => alert("Document downloaded as .docx"), className: "h-7 px-2 rounded border border-border hover:bg-secondary text-xs font-bold text-slate-500 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
                " Export"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
                setGenProgress(-1);
                alert("Draft sent to Adv. K. Shah via WhatsApp for review.");
              }, className: "h-7 px-3 rounded bg-ink hover:bg-ink/90 text-cream text-xs font-bold flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5" }),
                " Send for Review"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-secondary/30 rounded-xl border border-border/60 font-mono text-[10px] text-foreground leading-relaxed overflow-y-auto flex-1 max-h-[260px] scrollbar-none whitespace-pre-wrap", children: `SALE AGREEMENT

This Sale Agreement is entered into on this 20th day of January 2025

BETWEEN

[VENDOR]
Fortiv Solutions Pvt Ltd, represented by Rahul Modi, Director
CIN: U45200GJ2018PTC103XXX, Registered office: Surat, Gujarat

                              (hereinafter referred to as "the Vendor")

AND

[PURCHASER]
Name:    RAJESH KUMAR PATEL
Father:  Suresh Patel
Address: 12/A, Panchvati Society, Adajan, Surat — 395009
Aadhaar: XXXX XXXX 4521 (masked)
PAN:     ABCDE1234F

                              (hereinafter referred to as "the Purchaser")

SCHEDULE OF PROPERTY

Project:      Fortiv Greenview Heights, Vesu, Surat
RERA No.:     P01200023XXX
Unit:         Tower A, Floor 9, Unit 903
Type:         2BHK Residential Flat — 1,080 sq ft carpet area
Possession:   31st December 2026

CONSIDERATION

Total Sale Price:   ₹56,00,000
                   (Rupees Fifty-Six Lakhs Only)
Booking Amount:    ₹5,60,000
                   (Rupees Five Lakhs Sixty Thousand Only)
Balance Amount:    ₹50,40,000 as per payment schedule

STAMP DUTY:        ₹2,74,400
REGISTRATION FEE:  ₹30,000

WITNESSES:
1. Priya Rana      _______________
2. Rahul Modi      _______________

[Document continues — full template v2.3 — Force majeure clause updated 10/01/2025]` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 pt-2 border-t border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setGenProgress(-1), className: "flex-1 h-8 border border-border hover:bg-secondary rounded-lg text-xs font-bold text-slate-600 uppercase tracking-widest", children: "Reset Generator" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-0 overflow-hidden border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Recent Generated Documents Log" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Document Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Buyer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Generated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Reviewer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: recentDocuments.map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold", children: doc.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: doc.buyer }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500", children: doc.project }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-slate-400", children: doc.generated }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-bold px-2 py-0.5 rounded font-mono ${statusBadge(doc.status)}`, children: doc.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500 font-semibold", children: doc.reviewer }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "h-6 px-2 rounded border border-border hover:bg-secondary text-[9px] font-bold text-slate-500 uppercase tracking-widest", children: "View" }) })
        ] }, doc.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2 mb-3", children: "Template Version Control Log" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Version" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Changed By" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Change Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-mono", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium text-slate-600", children: templateVersionLog.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono font-bold text-foreground", children: v.version }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: v.changedBy }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: v.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono text-slate-400", children: v.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-bold px-2 py-0.5 rounded font-mono ${v.status === "Active" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-slate-50 text-slate-500 border border-slate-200"}`, children: v.status }) })
        ] }, v.version)) })
      ] }) })
    ] })
  ] });
  const [ocrUploadBuyer, setOcrUploadBuyer] = reactExports.useState("Rajesh Patel");
  const [ocrDocType, setOcrDocType] = reactExports.useState("Aadhaar Card");
  const [ocrRunning, setOcrRunning] = reactExports.useState(false);
  const [ocrDone, setOcrDone] = reactExports.useState(false);
  const [ocrProgress, setOcrProgress] = reactExports.useState(0);
  const startOcr = () => {
    setOcrRunning(true);
    setOcrDone(false);
    setOcrProgress(0);
  };
  reactExports.useEffect(() => {
    if (!ocrRunning || ocrProgress >= 100) {
      if (ocrProgress >= 100) {
        setOcrRunning(false);
        setOcrDone(true);
      }
      return;
    }
    const t = setTimeout(() => setOcrProgress((p) => p + 8), 200);
    return () => clearTimeout(t);
  }, [ocrRunning, ocrProgress]);
  const renderOcrExtractor = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Documents Processed Today", value: "12", desc: "Across all buyers", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Avg Processing Time", value: "81 sec", desc: "OCR + field mapping", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Extraction Accuracy", value: "97.4%", desc: "Avg confidence score", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Pending KYC (Active Buyers)", value: "2 buyers", desc: "Documents incomplete", color: "text-[#E8A838]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card flex flex-col justify-between min-h-[400px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2", children: "Document Upload & Extraction" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500 block", children: "Buyer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: ocrUploadBuyer, onChange: (e) => setOcrUploadBuyer(e.target.value), className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none text-xs font-bold focus:border-ring", children: ["Rajesh Patel", "Priya Shah", "Deepak Trivedi", "Vikram Joshi", "Sunita Mehta"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: b }, b)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500 block", children: "Document Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: ocrDocType, onChange: (e) => setOcrDocType(e.target.value), className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none text-xs font-bold focus:border-ring", children: ["Aadhaar Card", "PAN Card", "Passport", "Bank Statement (6M)", "Salary Slip", "ITR / Form 16", "Property Title Deed", "Encumbrance Certificate"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: t }, t)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-2 border-dashed border-border/60 rounded-xl p-6 text-center space-y-2 hover:border-primary/50 transition-colors cursor-pointer bg-secondary/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-8 w-8 text-slate-300 mx-auto" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold text-slate-500", children: "Drop file here or click to upload" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9.5px] font-mono text-slate-400", children: "JPG, PNG, PDF — max 10MB" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9.5px] text-slate-400 font-semibold border-t border-border/40 pt-2", children: "Upload channels: WhatsApp · Email · Buyer Portal (M10) · Manual Agent Upload" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: startOcr, disabled: ocrRunning, className: "w-full h-9 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all mt-4 disabled:opacity-50 active:scale-95", children: ocrRunning ? `Extracting... ${ocrProgress}%` : "Run OCR Extraction" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card min-h-[400px] flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2 mb-3", children: [
          "Extraction Results — ",
          ocrUploadBuyer,
          " / ",
          ocrDocType
        ] }),
        !ocrRunning && !ocrDone && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2 text-slate-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-10 w-10 mx-auto stroke-[1.5]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium", children: "Upload a document and run extraction to view results." })
        ] }) }),
        ocrRunning && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full border-4 border-slate-100 border-t-primary animate-spin" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-foreground", children: "Running OCR Extraction" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base font-mono font-bold text-primary mt-1", children: [
              ocrProgress,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-48 h-1 bg-secondary rounded-full mt-2 mx-auto overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary transition-all", style: {
              width: `${ocrProgress}%`
            } }) })
          ] })
        ] }),
        ocrDone && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 animate-in fade-in duration-300 flex-1 overflow-y-auto scrollbar-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/30 rounded-xl border border-border/60 font-mono text-[10px] text-foreground leading-relaxed whitespace-pre-wrap", children: `DOCUMENT:  ${ocrDocType} (Front + Back)
BUYER:     ${ocrUploadBuyer}
UPLOADED:  20/01/2025 11:15 AM via WhatsApp

EXTRACTED FIELDS:
────────────────────────────────────
Full Name:      RAJESH KUMAR PATEL     [Confidence: 99.1%] ✓
Date of Birth:  14/06/1985             [Confidence: 98.7%] ✓
Gender:         Male                   [Confidence: 99.9%] ✓
Address:        12/A, Panchvati Soc,   [Confidence: 94.2%] ✓
                Adajan, Surat - 395009
ID Number:      XXXX XXXX 4521 (masked)[Confidence: 99.8%] ✓

VALIDATION:
Name vs CRM:    RAJESH KUMAR PATEL ↔ Rajesh Patel → ✓ Match (96.4%)
Mismatch Flag:  None

MAPPED TO CRM:  ✓ All fields updated
STORAGE:        /Greenview Heights/Rajesh Patel/KYC/${ocrDocType.replace(/ /g, "_")}.pdf
PROCESSING TIME: 81 seconds` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert("CRM fields updated successfully."), className: "flex-1 h-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-widest transition-all", children: "Confirm & Push to CRM" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOcrDone(false), className: "h-8 px-4 border border-border hover:bg-secondary rounded-lg text-xs font-bold text-slate-500", children: "Reset" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2 mb-3", children: "Buyer KYC Completeness Grid" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Buyer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Aadhaar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "PAN" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Bank Statement" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Salary / ITR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Property NOC" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-mono", children: "Completeness" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Action" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium text-foreground", children: ocrBuyerCompleteness.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-bold", children: b.buyer }),
          [b.aadhaar, b.pan, b.bank, b.salary, b.noc].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-1 text-[10px] font-bold font-mono ${v === "Verified" || v === "Received" ? "text-emerald-600" : v === "Pending" ? "text-amber-600 animate-pulse" : "text-slate-400"}`, children: [
            statusDot(v),
            " ",
            v
          ] }) }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-16 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${b.score === 100 ? "bg-emerald-600" : b.score >= 80 ? "bg-primary" : "bg-amber-500"}`, style: {
              width: `${b.score}%`
            } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-foreground", children: [
              b.score,
              "%"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: b.score < 100 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`WhatsApp reminder sent to ${b.buyer} requesting pending documents.`), className: "h-6 px-2 rounded bg-amber-50 hover:bg-amber-100 text-amber-700 text-[9px] font-bold border border-amber-200 uppercase tracking-widest", children: "Remind" }) })
        ] }, b.buyer)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2 mb-3", children: "Active Validation Flags" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: ocrValidationFlags.map((flag) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl border border-red-200 bg-red-50/30 flex items-center justify-between text-xs font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-bold", children: [
            flag.buyer,
            " — ",
            flag.doc
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono text-[#D85A30]", children: flag.flag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(flag.severity)}`, children: flag.severity }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Re-upload request sent to ${flag.buyer} via WhatsApp.`), className: "h-6 px-2 rounded border border-border hover:bg-secondary text-[9px] font-bold text-slate-500", children: "Request Re-upload" })
        ] })
      ] }, flag.id)) })
    ] })
  ] });
  const [markedFiled, setMarkedFiled] = reactExports.useState([]);
  const renderReraMonitor = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Active RERA Registrations", value: "3 projects", desc: "Greenview, Skyline, BizPark", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Next Deadline", value: "11 days", desc: "QPR — 3 projects", color: "text-[#D85A30]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "QPR Status (All Projects)", value: "⚠️ Due Jan 31", desc: "3 projects pending", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Compliance Health Score", value: "74/100", desc: "QPR filing gap", color: "text-[#2E86AB]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-50 border border-red-200 rounded-xl text-xs flex items-center gap-3 font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-[#D85A30] animate-pulse shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#D85A30]", children: "Combined Penalty Exposure Alert:" }),
        " Greenview Heights + Skyline Residences QPR submissions are due in 11 days. Total maximum penalty exposure if missed: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono", children: "₹6.35 Cr" }),
        ". Immediate action required."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2 mb-3", children: "90-Day Compliance Deadline Calendar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 max-h-[320px] overflow-y-auto scrollbar-none pr-1", children: reraDeadlines.concat([{
          id: 5,
          deadline: "28/02/2025",
          project: "Business Park",
          type: "RERA Renewal — Initiate 60 days early",
          daysAway: 39,
          status: "Upcoming"
        }, {
          id: 6,
          deadline: "31/03/2025",
          project: "Greenview Heights",
          type: "Annual Audit Submission",
          daysAway: 70,
          status: "Tracked"
        }, {
          id: 7,
          deadline: "31/03/2025",
          project: "Skyline Residences",
          type: "Annual Audit Submission",
          daysAway: 70,
          status: "Tracked"
        }]).map((d) => {
          const filed = markedFiled.includes(d.id);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-2.5 rounded-xl border flex items-center justify-between text-xs transition-all ${filed ? "border-emerald-200 bg-emerald-50/30" : d.daysAway <= 14 ? "border-red-200 bg-red-50/40" : d.daysAway <= 30 ? "border-amber-200 bg-amber-50/20" : "border-border bg-background"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `h-8 w-8 rounded-lg flex items-center justify-center text-[11px] font-extrabold font-mono shrink-0 ${d.daysAway <= 14 ? "bg-red-100 text-[#D85A30]" : d.daysAway <= 30 ? "bg-amber-100 text-amber-700" : "bg-secondary text-slate-500"}`, children: [
                d.daysAway,
                "d"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: d.project }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-semibold", children: d.type }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] font-mono text-slate-400 mt-0.5", children: [
                  "Due: ",
                  d.deadline
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1.5", children: [
              filed ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-bold px-2 py-0.5 rounded font-mono bg-emerald-50 text-emerald-700 border border-emerald-100", children: "✅ Filed" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-bold px-2 py-0.5 rounded font-mono ${statusBadge(d.status)}`, children: d.status }),
              !filed && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMarkedFiled((p) => [...p, d.id]), className: "h-6 px-2 rounded border border-border hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 text-[9px] font-bold text-slate-500 uppercase tracking-widest transition-all", children: "Mark Filed" })
            ] })
          ] }, d.id);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2 mb-3", children: "Document Compliance Checklist" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none max-h-[330px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-[10.5px] divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[8.5px] uppercase tracking-wider font-display sticky top-0 bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 py-2", children: "Document" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 py-2", children: "GH" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 py-2", children: "SR" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 py-2", children: "BP" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium text-slate-600", children: reraComplianceChecklist.map((row, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 font-bold text-foreground text-[10px]", children: row.doc }),
            [row.greenview, row.skyline, row.bizpark].map((val, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: `px-2 py-2 font-mono text-[9px] font-bold ${val.includes("⚠️") ? "text-[#D85A30] animate-pulse" : val === "Filed" || val.includes("Valid") || val.includes("Mar 2024") || val.includes("Oct 2024") ? "text-emerald-600" : val === "Under construction" ? "text-slate-400" : "text-amber-600"}`, children: val }, i))
          ] }, idx)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-mono text-slate-400 mt-2 pt-2 border-t border-border/30", children: "GH = Greenview Heights | SR = Skyline Residences | BP = Business Park" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2 mb-3", children: "Financial Penalty Exposure Calculator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Obligation Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Deadline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Days Away" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Project Cost" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Max Penalty (5%)" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: penaltyExposure.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold", children: row.project }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500", children: row.obligation }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono", children: row.deadline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-extrabold ${row.daysAway <= 14 ? "text-[#D85A30] animate-pulse" : row.daysAway <= 30 ? "text-amber-600" : "text-slate-500"}`, children: [
            row.daysAway,
            " days"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono", children: row.projectCost }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-extrabold text-[#D85A30]", children: row.maxPenalty })
        ] }, row.id)) })
      ] }) })
    ] })
  ] });
  const [locality, setLocality] = reactExports.useState("Vesu");
  const [propType, setPropType] = reactExports.useState("Residential Flat");
  const [carpetArea, setCarpetArea] = reactExports.useState(1080);
  const [txnValue, setTxnValue] = reactExports.useState(56e5);
  const [buyerProfile, setBuyerProfile] = reactExports.useState("Male");
  const [underConstruction, setUnderConstruction] = reactExports.useState(true);
  const [isFirstPurchase, setIsFirstPurchase] = reactExports.useState(false);
  const stampCalc = reactExports.useMemo(() => {
    const circleRate = 4800;
    const circleValue = carpetArea * circleRate;
    const base = Math.max(txnValue, circleValue);
    const rate = buyerProfile === "Female (primary)" || buyerProfile === "Joint — Female primary" ? 0.039 : 0.049;
    const stampDuty = Math.round(base * rate);
    const regFee = Math.min(Math.round(txnValue * 0.01), 3e4);
    const gst = underConstruction ? Math.round(txnValue * 0.05 * 0.5) : 0;
    const maintDeposit = Math.round(carpetArea * 50);
    const misc = 5e3;
    const total = txnValue + stampDuty + regFee + gst + maintDeposit + misc;
    const booking = Math.round(txnValue * 0.1);
    const loanReq = total - booking;
    return {
      circleValue,
      base,
      rate,
      stampDuty,
      regFee,
      gst,
      maintDeposit,
      misc,
      total,
      booking,
      loanReq,
      rateLabel: `${(rate * 100).toFixed(1)}%`
    };
  }, [locality, carpetArea, txnValue, buyerProfile, underConstruction]);
  const formatLkh = (v) => v >= 1e7 ? `₹${(v / 1e7).toFixed(2)} Cr` : v >= 1e5 ? `₹${(v / 1e5).toFixed(2)} L` : `₹${v.toLocaleString("en-IN")}`;
  const renderStampDuty = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2", children: "Calculation Parameters" }),
        [{
          label: "Locality",
          type: "select",
          opts: gujaratiLocalities,
          val: locality,
          set: setLocality
        }, {
          label: "Property Type",
          type: "select",
          opts: ["Residential Flat", "Residential Plot", "Villa", "Commercial Office", "Commercial Shop"],
          val: propType,
          set: setPropType
        }, {
          label: "Buyer Profile",
          type: "select",
          opts: ["Male", "Female (primary)", "Joint — Male primary", "Joint — Female primary", "Company", "NRI (Individual)"],
          val: buyerProfile,
          set: setBuyerProfile
        }].map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500 block", children: field.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: field.val, onChange: (e) => field.set(e.target.value), className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none text-xs font-bold focus:border-ring", children: field.opts.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: o }, o)) })
        ] }, field.label)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500 block", children: "Carpet Area (sq ft)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: carpetArea, onChange: (e) => setCarpetArea(parseInt(e.target.value) || 0), className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none text-xs font-bold font-mono focus:border-ring" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500 block", children: "Transaction Value (₹)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: txnValue, onChange: (e) => setTxnValue(parseInt(e.target.value) || 0), className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none text-xs font-bold font-mono focus:border-ring" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 text-xs font-semibold border-t border-border/40 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: underConstruction, onChange: (e) => setUnderConstruction(e.target.checked), className: "accent-primary" }),
            "Under Construction (GST applies)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: isFirstPurchase, onChange: (e) => setIsFirstPurchase(e.target.checked), className: "accent-primary" }),
            "First Purchase"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 bg-secondary/40 rounded-lg text-[10px] font-mono text-slate-500 border border-border/40", children: [
          "Circle rate (",
          locality,
          ", ",
          propType,
          "): ₹4,800/sq ft | Value: ",
          formatLkh(stampCalc.circleValue),
          txnValue < stampCalc.circleValue && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-amber-600 font-bold mt-0.5", children: "⚠️ Transaction value below circle rate — registration will be on circle rate." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-5 border border-border bg-card font-mono text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-4 border-b border-border/40 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-base uppercase tracking-widest text-primary", children: "Cost-of-Purchase Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-slate-400 mt-1", children: [
            "Fortiv Solutions · Real-time Calculator · ",
            buyerProfile
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-1 border-b border-border/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-sans font-semibold", children: "Property Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: formatLkh(txnValue) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9.5px] uppercase tracking-wider text-slate-400 font-sans font-bold pt-1", children: "Government Charges" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-500 font-sans font-semibold", children: [
              "Stamp Duty (",
              stampCalc.rateLabel,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: formatLkh(stampCalc.stampDuty) })
          ] }),
          buyerProfile.includes("Female") && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9.5px] text-emerald-600 font-bold pl-2", children: "✓ 1% female buyer concession applied" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-sans font-semibold", children: "Registration Fee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: formatLkh(stampCalc.regFee) })
          ] }),
          underConstruction && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9.5px] uppercase tracking-wider text-slate-400 font-sans font-bold pt-1", children: "Taxes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-sans font-semibold", children: "GST @ 5% (construction component)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: formatLkh(stampCalc.gst) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9.5px] uppercase tracking-wider text-slate-400 font-sans font-bold pt-1", children: "Other Charges" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-sans font-semibold", children: "Maintenance Deposit (₹50/sq ft)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: formatLkh(stampCalc.maintDeposit) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-sans font-semibold", children: "Miscellaneous Charges" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: formatLkh(stampCalc.misc) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-2 border-t-2 border-foreground/20 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground text-sm", children: "TOTAL COST OF PURCHASE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-extrabold text-primary text-sm", children: formatLkh(stampCalc.total) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-0.5 border-t border-border/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-sans font-semibold", children: "Booking Amount Paid" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-600 font-bold", children: [
              "- ",
              formatLkh(stampCalc.booking)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-1 bg-secondary/30 rounded-lg px-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold font-sans text-foreground", children: "Home Loan Requirement" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-primary", children: formatLkh(stampCalc.loanReq) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 border-t border-border/40 pt-3 flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert("Cost summary PDF downloaded for buyer's home loan application."), className: "flex-1 h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest font-sans transition-all", children: "Generate PDF Summary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8.5px] font-mono text-slate-400 text-center mt-2", children: "RERA No: P01200023XXX | Circle rate: GujRERA Jan 2025 | Estimate only — final at Sub-Registrar" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2 mb-3", children: "Home Loan EMI Reference (SBI @ 8.75% p.a.)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2", children: "Loan Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2 font-mono", children: "Interest Rate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2 font-mono", children: "Tenure" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2 font-mono", children: "Monthly EMI (Approx)" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium", children: [{
          loan: "₹40 L (SBI)",
          rate: "8.75%",
          tenure: "20 years",
          emi: "₹35,400"
        }, {
          loan: "₹45 L",
          rate: "8.75%",
          tenure: "20 years",
          emi: "₹39,825"
        }, {
          loan: "₹50 L",
          rate: "8.75%",
          tenure: "20 years",
          emi: "₹44,250"
        }, {
          loan: `${formatLkh(stampCalc.loanReq)} (full req.)`,
          rate: "8.75%",
          tenure: "20 years",
          emi: `₹${Math.round(stampCalc.loanReq / 1e5 * 885).toLocaleString("en-IN")}`
        }].map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `hover:bg-secondary/15 ${i === 3 ? "font-bold text-foreground" : "text-slate-600"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-mono", children: row.loan }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-mono", children: row.rate }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-mono", children: row.tenure }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-mono font-extrabold text-primary", children: row.emi })
        ] }, i)) })
      ] }) })
    ] })
  ] });
  const [expandedEnvelope, setExpandedEnvelope] = reactExports.useState(null);
  const renderEsign = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Documents Pending Signing", value: "2", desc: "Envelopes in-progress", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Completed This Month", value: "18", desc: "Fully executed", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Avg Signing Time", value: "4.2 hrs", desc: "Sent to full execution", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Expired Envelopes", value: "0", desc: "Requiring resend", color: "text-[#1A3C5E]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-0 overflow-hidden border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 border-b border-border flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Active Signing Envelopes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono font-bold text-slate-400", children: "Click any row to expand timeline" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Document" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Buyer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Sent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Buyer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Seller" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Witness 1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Witness 2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: activeSigningEnvelopes.map((env) => {
          const isExpanded = expandedEnvelope === env.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setExpandedEnvelope(isExpanded ? null : env.id), className: "hover:bg-secondary/15 cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold", children: env.doc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: env.buyer }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-slate-400", children: env.sent }),
              [env.buyer_status, env.seller_status, env.w1, env.w2].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-1 text-[10px] font-bold font-mono ${s === "Signed" ? "text-emerald-600" : s === "Opened" ? "text-amber-600" : s === "Sent" ? "text-blue-600" : s === "N/A" ? "text-slate-300" : "text-slate-500"}`, children: [
                s !== "N/A" && statusDot(s),
                " ",
                s
              ] }) }, i)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${env.overall === "Completed" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : env.overall.includes("Progress") ? "bg-blue-50 text-blue-700 border border-blue-100" : "bg-amber-50 text-amber-700 border border-amber-100"}`, children: env.overall === "Completed" ? "✅ Executed" : env.overall }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
                env.overall !== "Completed" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
                  e.stopPropagation();
                  alert(`Resend notification sent to ${env.buyer}.`);
                }, className: "h-6 px-2 rounded border border-border hover:bg-secondary text-[9px] font-bold text-slate-500", children: "Resend" }),
                env.overall === "Completed" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: (e) => {
                  e.stopPropagation();
                  alert("Opening executed document preview...");
                }, className: "h-6 px-2 rounded bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-[9px] font-bold flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3 w-3" }),
                  " View"
                ] })
              ] }) })
            ] }, env.id),
            isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { colSpan: 9, className: "px-4 py-3 bg-secondary/15 border-b border-border/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2", children: "Signing Timeline" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4", children: [{
                party: "Buyer",
                name: env.buyer,
                status: env.buyer_status,
                time: env.buyer_status === "Signed" ? "15:12" : env.buyer_status === "Opened" ? "14:48 (viewing)" : "14:35 (sent)"
              }, {
                party: "Seller",
                name: "Fortiv Solutions",
                status: env.seller_status,
                time: env.seller_status === "Signed" ? "16:40" : env.seller_status === "Opened" ? "15:30 (viewing)" : env.seller_status === "N/A" ? "—" : "15:00 (sent)"
              }, {
                party: "Witness 1",
                name: "Priya Rana",
                status: env.w1,
                time: env.w1 === "Signed" ? "17:05" : env.w1 === "N/A" ? "—" : "16:45 (sent)"
              }, {
                party: "Witness 2",
                name: "Rahul Modi",
                status: env.w2,
                time: env.w2 === "Signed" ? "17:22" : env.w2 === "N/A" ? "—" : "16:45 (sent)"
              }].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-2.5 rounded-lg border text-[10.5px] font-semibold min-w-[140px] ${p.status === "Signed" ? "border-emerald-200 bg-emerald-50/50" : p.status === "Opened" ? "border-amber-200 bg-amber-50/50" : p.status === "N/A" ? "border-border bg-background opacity-40" : "border-blue-200 bg-blue-50/30"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: p.party }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-500", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `font-mono text-[9.5px] font-bold mt-1 ${p.status === "Signed" ? "text-emerald-600" : p.status === "Opened" ? "text-amber-600" : "text-blue-600"}`, children: [
                  p.status,
                  " · ",
                  p.time
                ] })
              ] }, i)) })
            ] }) }, `${env.id}-expand`)
          ] });
        }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2 mb-3", children: "Executed Document Vault (Google Drive)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10.5px] text-foreground leading-relaxed bg-secondary/30 p-3 rounded-xl border border-border/60 whitespace-pre", children: `Fortiv Solutions/
└── Projects/
    ├── Fortiv Greenview Heights/
    │   └── Buyers/
    │       └── Rajesh Kumar Patel/
    │           ├── KYC/
    │           │   ├── Aadhaar.pdf              [Encrypted ✓]
    │           │   ├── PAN.pdf                  [Encrypted ✓]
    │           │   └── Bank Statement.pdf       [Encrypted ✓]
    │           ├── Agreements/
    │           │   ├── MOU — Executed — 15Jan2025.pdf          [Signed ✅]
    │           │   ├── Sale Agreement — Draft — 20Jan2025.docx [Draft 🟡]
    │           │   └── Payment Schedule — Executed.pdf        [Signed ✅]
    │           └── Payments/
    │               └── Booking Amount Receipt — 16Jan2025.pdf  [Filed ✅]
    └── Fortiv Business Park/
        └── Buyers/
            └── Vikram Joshi/
                └── Agreements/
                    └── MOU — Executed — 18Jan2025.pdf          [Signed ✅]` })
    ] })
  ] });
  const [selectedKycBuyer, setSelectedKycBuyer] = reactExports.useState(null);
  const [kycRunning, setKycRunning] = reactExports.useState(false);
  const [kycProgress, setKycProgress] = reactExports.useState(0);
  const [kycDone, setKycDone] = reactExports.useState(false);
  const [kycStep, setKycStep] = reactExports.useState("");
  const startKyc = (buyer) => {
    setSelectedKycBuyer(buyer);
    setKycRunning(true);
    setKycDone(false);
    setKycProgress(0);
    setKycStep("AADHAAR API (UIDAI) VERIFICATION IN PROGRESS...");
  };
  reactExports.useEffect(() => {
    if (!kycRunning || kycProgress >= 100) {
      if (kycProgress >= 100) {
        setKycRunning(false);
        setKycDone(true);
      }
      return;
    }
    const t = setTimeout(() => {
      setKycProgress((p) => {
        const next = p + 12;
        if (next === 24) setKycStep("PAN VERIFICATION (INCOME TAX DEPT)...");
        if (next === 48) setKycStep("PAN–AADHAAR LINK STATUS CHECK...");
        if (next === 60) setKycStep("BANK ACCOUNT PENNY DROP (₹1 TRANSFER)...");
        if (next === 72) setKycStep("PMLA WATCHLIST SCAN...");
        if (next === 84) setKycStep("PEP DATABASE CHECK...");
        return next;
      });
    }, 250);
    return () => clearTimeout(t);
  }, [kycRunning, kycProgress]);
  const selectedBuyerKyc = kycBuyers.find((b) => b.buyer === selectedKycBuyer);
  const renderKycVerify = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "KYC Completion Rate", value: "78%", desc: "Active buyer pool", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Fully Verified Buyers", value: "3 of 5", desc: "Ready to transact", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Verification Reviews", value: "2", desc: "Manual review needed", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Avg Verification Time", value: "87 sec", desc: "All checks combined", color: "text-[#1A3C5E]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Buyer Verification Status Dashboard" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5", children: "Buyer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5", children: "Aadhaar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5", children: "PAN" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5", children: "P–A Link" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5", children: "Bank" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5", children: "PMLA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 font-mono", children: "CIBIL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5", children: "Result" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5", children: "Run" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium text-foreground", children: kycBuyers.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-bold", children: b.buyer }),
            [b.aadhaar, b.pan, b.paLink, b.bank, b.pmla].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-1 text-[10px] font-bold font-mono ${v === "Verified" || v === "Linked" || v === "Clear" ? "text-emerald-600" : v === "Pending" ? "text-amber-600 animate-pulse" : v === "Name mismatch" ? "text-[#D85A30] animate-pulse" : v === "—" ? "text-slate-300" : "text-slate-500"}`, children: [
              statusDot(v),
              " ",
              v
            ] }) }, i)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono font-bold", children: b.cibil > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: b.cibil >= 700 ? "text-emerald-600" : "text-amber-600", children: b.cibil }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-300", children: "—" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${b.overall === "Proceed" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : b.overall === "Incomplete" ? "bg-amber-50 text-amber-700 border border-amber-100" : "bg-red-50 text-[#D85A30] border border-red-100 animate-pulse"}`, children: [
              b.overall === "Proceed" ? "✅ " : b.overall === "Review" ? "⚠️ " : "⏳ ",
              b.overall
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => startKyc(b.buyer), disabled: kycRunning, className: "h-6 px-2 rounded bg-ink hover:bg-ink/90 text-cream text-[9px] font-bold uppercase tracking-widest disabled:opacity-40 transition-all", children: "Run" }) })
          ] }, b.buyer)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card min-h-[380px] flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2 mb-3", children: "Live Verification Engine" }),
        !kycRunning && !kycDone && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2 text-slate-400", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-10 w-10 mx-auto stroke-[1.5]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium max-w-[200px]", children: "Select a buyer and click Run to execute all verification checks in real time." })
        ] }) }),
        kycRunning && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-12 w-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full border-4 border-slate-100 border-t-primary animate-spin" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-xs text-foreground uppercase tracking-widest font-display", children: "KYC Checks Running" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-foreground font-semibold mt-1", children: selectedKycBuyer }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-bold font-mono text-primary mt-1", children: [
              kycProgress,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-mono text-slate-400 uppercase tracking-wider mt-2 max-w-[220px] mx-auto", children: kycStep })
          ] })
        ] }),
        kycDone && selectedBuyerKyc && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 animate-in fade-in duration-300 flex-1 overflow-y-auto scrollbar-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-2.5 rounded-xl border text-center text-xs font-bold ${selectedBuyerKyc.overall === "Proceed" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-amber-200 bg-amber-50 text-amber-700"}`, children: [
            selectedBuyerKyc.overall === "Proceed" ? "✅ VERIFIED — BOOKING MAY PROCEED" : "⚠️ MANUAL REVIEW REQUIRED",
            " · ",
            selectedBuyerKyc.buyer
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/30 rounded-xl border border-border/60 font-mono text-[10px] text-foreground leading-relaxed whitespace-pre", children: `AUDIT RECORD — kyc_20250118_003${kycBuyers.indexOf(selectedBuyerKyc)}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Buyer:    ${selectedBuyerKyc.buyer}
Date:     18/01/2025 11:30

CHECKS:
11:30:12 — Aadhaar (UIDAI):  ${selectedBuyerKyc.aadhaar === "Verified" ? "PASS ✅" : "FLAG ⚠️"}
11:30:19 — PAN (ITD):        ${selectedBuyerKyc.pan === "Verified" ? "PASS ✅" : "FLAG ⚠️"}
11:30:24 — PAN-Aadhaar Link: ${selectedBuyerKyc.paLink === "Linked" ? "PASS ✅" : "PENDING —"}
11:30:36 — Bank Penny Drop:  ${selectedBuyerKyc.bank === "Verified" ? "PASS ✅" : "PENDING —"}
11:30:41 — PMLA Watchlist:   ${selectedBuyerKyc.pmla === "Clear" ? "CLEAR ✅" : "FLAG ⚠️"}
11:30:44 — PEP Database:     ${selectedBuyerKyc.pep === "Not a PEP" ? "CLEAR ✅" : "FLAG ⚠️"}
${selectedBuyerKyc.cibil > 0 ? `11:30:52 — CIBIL Score:      ${selectedBuyerKyc.cibil} (${selectedBuyerKyc.cibil >= 700 ? "Good" : "Fair"}) ✅` : ""}

RESULT: ${selectedBuyerKyc.overall.toUpperCase()}
FLAGS: ${selectedBuyerKyc.flags}
Audit log ID: audit_20250118_003${kycBuyers.indexOf(selectedBuyerKyc)}
Retained until: 18/01/2032 (7-year law)` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setKycDone(false);
            setSelectedKycBuyer(null);
          }, className: "w-full h-8 border border-border hover:bg-secondary rounded-lg text-xs font-bold text-slate-600 uppercase tracking-widest", children: "Reset" })
        ] })
      ] })
    ] })
  ] });
  const renderMenuSelection = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-in fade-in duration-300", children: submodulesList.map((mod) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { onClick: () => setActiveTab(mod.id), className: "submodule-card p-5 cursor-pointer flex flex-col justify-between group h-48", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border font-mono ${mod.status === "Alert" ? "text-[#D85A30] bg-red-50 border-red-100" : "text-emerald-700 bg-emerald-50 border-emerald-100"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${mod.status === "Alert" ? "bg-[#D85A30] animate-pulse" : "bg-emerald-500 animate-pulse"}` }),
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
  ] }, mod.id)) }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: dynamicTitle, subtitle: headerInfo.subtitle, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "transition-all duration-300", children: [
    activeTab === "menu" && renderMenuSelection(),
    activeTab === "overview" && renderOverview(),
    activeTab === "agreement-gen" && renderAgreementGen(),
    activeTab === "ocr-extractor" && renderOcrExtractor(),
    activeTab === "rera-monitor" && renderReraMonitor(),
    activeTab === "stamp-duty" && renderStampDuty(),
    activeTab === "esign" && renderEsign(),
    activeTab === "kyc-verify" && renderKycVerify()
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
  ComplianceManager as component
};
