import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, C as Card } from "./AppShell-BfHv5p0k.mjs";
import { h as Route$3 } from "./router-D7ZC1b3P.mjs";
import { m as ChevronLeft, b as ArrowRight, D as DollarSign, X as Smile, a6 as Users, S as Search, w as House, a3 as User, t as Download, y as MessageCircle, i as Camera, N as Plus } from "../_libs/lucide-react.mjs";
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
const initialBuyersPool = [{
  id: "B01",
  name: "Rajesh Patel",
  unit: "A-801",
  config: "2BHK",
  value: 572e4,
  paid: 386e4,
  status: "Current",
  nps: 9,
  class: "Promoter",
  rm: "Priya Rana"
}, {
  id: "B02",
  name: "Priya Shah",
  unit: "A-802",
  config: "3BHK",
  value: 842e4,
  paid: 5683e3,
  status: "Current",
  nps: 8,
  class: "Passive",
  rm: "Priya Rana"
}, {
  id: "B03",
  name: "Amit Desai",
  unit: "A-803",
  config: "2BHK",
  value: 485e4,
  paid: 3273e3,
  status: "Current",
  nps: 10,
  class: "Promoter",
  rm: "Meera Patel"
}, {
  id: "B04",
  name: "Sunita Mehta",
  unit: "A-601",
  config: "2BHK",
  value: 52e5,
  paid: 351e4,
  status: "18 Days Overdue",
  overdueAmount: 801e3,
  nps: 5,
  class: "Detractor",
  rm: "Priya Rana"
}, {
  id: "B05",
  name: "Vikram Joshi",
  unit: "A-602",
  config: "3BHK",
  value: 825e4,
  paid: 5568e3,
  status: "Current",
  nps: 9,
  class: "Promoter",
  rm: "Rahul Modi"
}, {
  id: "B06",
  name: "Deepak Trivedi",
  unit: "A-603",
  config: "3BHK",
  value: 795e4,
  paid: 5366e3,
  status: "18 Days Overdue",
  overdueAmount: 1114e3,
  nps: 7,
  class: "Passive",
  rm: "Ankit Shah"
}, {
  id: "B07",
  name: "Kavita Agarwal",
  unit: "A-503",
  config: "2BHK",
  value: 468e4,
  paid: 2517e3,
  status: "34 Days Overdue",
  overdueAmount: 631e3,
  nps: 10,
  class: "Promoter",
  rm: "Priya Rana"
}, {
  id: "B08",
  name: "Pooja Sharma",
  unit: "A-1001",
  config: "2BHK",
  value: 572e4,
  paid: 386e4,
  status: "Current",
  nps: 4,
  class: "Detractor",
  rm: "Priya Rana"
}, {
  id: "B09",
  name: "Mahesh Khanna",
  unit: "A-1201",
  config: "3BHK",
  value: 91e5,
  paid: 91e5,
  status: "Current",
  nps: 9,
  class: "Promoter",
  rm: "Rahul Modi"
}, {
  id: "B10",
  name: "Ritu Bhandari",
  unit: "A-1002",
  config: "2BHK",
  value: 52e5,
  paid: 351e4,
  status: "Current",
  nps: 8,
  class: "Passive",
  rm: "Meera Patel"
}];
const initialSnags = [{
  id: "SN-1041",
  unit: "A-401",
  buyer: "Rajesh Patel",
  phone: "+91 98765 43210",
  category: "MEP — Plumbing",
  severity: "Functional",
  status: "Resolved",
  opened: "14/01/2025",
  resolved: "16/01/2025",
  duration: 2,
  note: "Plumbing trap leakage in secondary toilet fixed",
  satisfaction: "Satisfied"
}, {
  id: "SN-1042",
  unit: "A-802",
  buyer: "Priya Shah",
  phone: "+91 99123 45678",
  category: "Civil — Flooring",
  severity: "Cosmetic",
  status: "Work in Progress",
  opened: "20/01/2025",
  resolved: "Pending",
  duration: 4,
  note: "Bathroom wall joint tile alignment",
  satisfaction: "—"
}, {
  id: "SN-1043",
  unit: "A-803",
  buyer: "Amit Desai",
  phone: "+91 97654 32109",
  category: "Civil — Walls",
  severity: "Cosmetic",
  status: "Scheduled",
  opened: "22/01/2025",
  resolved: "Pending",
  duration: 2,
  note: "Living room wall putty touchups",
  satisfaction: "—"
}, {
  id: "SN-1044",
  unit: "A-602",
  buyer: "Vikram Joshi",
  phone: "+91 99245 12345",
  category: "MEP — Electrical",
  severity: "Functional",
  status: "Resolved",
  opened: "10/01/2025",
  resolved: "13/01/2025",
  duration: 3,
  note: "Master bedroom switches replaced",
  satisfaction: "Satisfied"
}, {
  id: "SN-1045",
  unit: "A-1001",
  buyer: "Pooja Sharma",
  phone: "+91 98765 00001",
  category: "MEP — Plumbing",
  severity: "Functional",
  status: "Escalated",
  opened: "15/01/2025",
  resolved: "Pending",
  duration: 9,
  note: "Kitchen main sink basin pipe dripping continuously",
  satisfaction: "—"
}];
const resalesListings = [{
  id: "RSL-01",
  type: "Resale",
  unit: "A-302",
  owner: "Arjun Malhotra",
  asking: 52e5,
  avm: 505e4,
  status: "Deal Signed",
  inquiries: 12,
  agent: "Rahul Modi"
}, {
  id: "RSL-02",
  type: "Rental",
  unit: "A-501",
  owner: "Vikram Joshi",
  asking: 22e3,
  avm: 21e3,
  status: "Tenant Screening",
  inquiries: 4,
  agent: "Priya Rana"
}, {
  id: "RSL-03",
  type: "Resale",
  unit: "A-702",
  owner: "Nisha Verma",
  asking: 68e5,
  avm: 66e5,
  status: "Visits in Progress",
  inquiries: 5,
  agent: "Rahul Modi"
}, {
  id: "RSL-04",
  type: "Resale",
  unit: "A-1201",
  owner: "Mahesh Khanna",
  asking: 91e5,
  avm: 884e4,
  status: "Offer in Negotiation",
  inquiries: 7,
  agent: "Rahul Modi"
}, {
  id: "RSL-05",
  type: "Rental",
  unit: "B-301",
  owner: "Sanjay Kapoor",
  asking: 18e3,
  avm: 17500,
  status: "Listed",
  inquiries: 1,
  agent: "Meera Patel"
}];
const amcContracts = [{
  id: "A1",
  name: "Elevator Maintenance",
  vendor: "Otis India",
  val: 24e4,
  expiry: "31/03/2027",
  status: "To Be Transferred"
}, {
  id: "A2",
  name: "DG Set Power Backup",
  vendor: "Cummins India",
  val: 18e4,
  expiry: "30/06/2027",
  status: "To Be Transferred"
}, {
  id: "A3",
  name: "STP & Water Plant",
  vendor: "Thermax",
  val: 12e4,
  expiry: "31/12/2026",
  status: "To Be Transferred"
}, {
  id: "A4",
  name: "Fire Fighting Systems",
  vendor: "Johnson Controls",
  val: 9e4,
  expiry: "28/02/2027",
  status: "To Be Transferred"
}];
const initialDemandNotes = [{
  milestone: "Structural — Floor 12 Slab",
  date: "28/01/2025",
  buyers: 38,
  val: 64e6,
  status: "Auto-compile pending"
}, {
  milestone: "Structural — Floor 13 Slab",
  date: "18/02/2025",
  buyers: 38,
  val: 64e6,
  status: "Not yet triggered"
}, {
  milestone: "Internal Finishing",
  date: "01/03/2025",
  buyers: 120,
  val: 182e6,
  status: "Not yet triggered"
}];
const checklistSteps = [{
  id: 1,
  step: "OC received (Prerequisite)",
  status: "Completed",
  owner: "Project Team"
}, {
  id: 2,
  step: "Compile resident directory from buyer records",
  status: "Completed",
  owner: "System"
}, {
  id: 3,
  step: "Draft society bye-laws (Cooperative Act)",
  status: "In Progress",
  owner: "Legal Team"
}, {
  id: 4,
  step: "First AGM notice sent to all residents",
  status: "Pending",
  owner: "System"
}, {
  id: 5,
  step: "First AGM conducted — committee elected",
  status: "Pending",
  owner: "Society"
}, {
  id: 6,
  step: "Society registration filing",
  status: "Pending",
  owner: "Legal Team"
}, {
  id: 7,
  step: "Common area handovers & AMC contracts",
  status: "Pending",
  owner: "Project Team"
}];
const statusBadge = (status) => {
  if (["Current", "Complete", "Completed", "Resolved", "Deal Signed", "Active"].some((s) => status.includes(s))) return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (["In Progress", "In Transit", "PO Sent", "Scheduled", "Applied", "Under Review", "Tenant Screening", "Visits in Progress", "Offer in Negotiation", "Listed", "Planned"].some((s) => status.includes(s))) return "bg-amber-50 text-amber-700 border border-amber-100";
  if (["Action Required", "Not Initiated", "Not Applied", "Pending Snags", "Blocked", "Payment Pending", "Snag Pending", "At Risk", "Delayed", "Overrun", "Critical Overrun", "Escalated", "18 Days Overdue", "34 Days Overdue"].some((s) => status.includes(s))) return "bg-red-50 text-[#D85A30] border border-red-100";
  return "bg-slate-50 text-slate-600 border border-slate-200";
};
function BuyerManager() {
  const {
    tab
  } = Route$3.useSearch();
  const navigate = useNavigate({
    from: Route$3.fullPath
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
    desc: "Overall active buyers portfolio, payment health summary, rolling NPS indices, and visual portal logins trend charts.",
    stats: "NPS rolling score: +62",
    status: "Active"
  }, {
    id: "self-service",
    name: "Buyer Self-Service Portal",
    desc: "Secure secure buyer login panel simulation, full document registry download logs, and property details overview card.",
    stats: "186 registered buyers",
    status: "Active"
  }, {
    id: "payments",
    name: "Payment Schedule & Receipt Manager",
    desc: "Construction milestone-linked payment tranches, automated demand note letters, and receipt dispatch sequencing.",
    stats: "₹1.61Cr outstanding total",
    status: "Active"
  }, {
    id: "progress",
    name: "Construction Progress Feed",
    desc: "Personalized fortnightly visual update composes, site photo thumbnail log history, and WhatsApp delivery check analytics.",
    stats: "Next update: 10 Feb",
    status: "Active"
  }, {
    id: "snag",
    name: "Snag / Punch List Agent",
    desc: "AI-triaged post-possession tickets inbox categorized by severity, linked work order assignments, and satisfaction scores.",
    stats: "9 active open snags",
    status: "Active"
  }, {
    id: "resale",
    name: "Resale & Rental Assistance Agent",
    desc: "AI-based valuation (AVM) secondary market rental/resale listings management, portal syndication, and commission pipelines.",
    stats: "5 active list properties",
    status: "Active"
  }, {
    id: "society",
    name: "Society Onboarding Agent",
    desc: "Cooperative societies formation tracker checklists, automated AGM invitations schedule, and AMC contracts handover logs.",
    stats: "RWA formation: 43% complete",
    status: "Active"
  }, {
    id: "nps",
    name: "Post-Possession NPS & Loyalty Bot",
    desc: "Periodic buyer satisfaction surveys logs, promoter referral leaders, rewards disbursal log, and detractor intervention panels.",
    stats: "NPS Score: +62 (High)",
    status: "Active"
  }];
  const getPageHeader = () => {
    const map = {
      menu: {
        title: "Buyer Portal & Post-Sale Experience",
        subtitle: "A branded self-service portal that transforms the buyer experience from booking to possession — keeping buyers informed, engaged, and satisfied."
      },
      overview: {
        title: "Post-Sale Dashboard Overview",
        subtitle: "Consolidated portfolio view of registered buyers, installment collections health, rolling satisfaction indicators, and feedback trends."
      },
      "self-service": {
        title: "Buyer Self-Service Portal Simulator",
        subtitle: "Detailed homeowner personal dashboard representing flat layout highlights, registered documents archive, and direct RM communication log."
      },
      payments: {
        title: "Payment Schedule & Receipt Manager",
        subtitle: "Milestone-linked payment invoice builder, automated demand sequence timelines, and tax receipt generator."
      },
      progress: {
        title: "Construction Progress Feed Composer",
        subtitle: "Dispatch fortnightly customized construction milestones and site photo streams directly to buyer WhatsApp logs."
      },
      snag: {
        title: "Snag / Punch List Agent",
        subtitle: "Triages cosmetic and structural post-possession buyer snags, assigning local site vendors with automated tracking."
      },
      resale: {
        title: "Resale & Rental Assistance Agent",
        subtitle: "Assist existing buyers in leasing or reselling completed flats, matching properties with pre-qualified leads and managing commissions."
      },
      society: {
        title: "Society Onboarding Agent",
        subtitle: "Manage the legal transition process of property maintenance and contracts to Resident Welfare Associations (RWA)."
      },
      nps: {
        title: "Post-Possession NPS & Loyalty Bot",
        subtitle: "Periodic survey engine collecting satisfaction reviews, triggering detractor resolution alerts, and rewarding promoter referrals."
      }
    };
    return map[activeTab] || map.menu;
  };
  const headerInfo = getPageHeader();
  const dynamicTitle = activeTab === "menu" ? headerInfo.title : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("menu"), className: "group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95 mr-0.5", "aria-label": "Back to buyer menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors", onClick: () => setActiveTab("menu"), children: headerInfo.title })
  ] });
  const renderOverview = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Active Buyers", value: "186", desc: "Total registered", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Portal Active (7d)", value: "74", desc: "40% weekly logins", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Payments Overdue", value: "18", desc: "Missed installments", color: "text-[#D85A30]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Open Snags", value: "9", desc: "Unresolved tickets", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Rolling NPS Score", value: "+62", desc: "Excellent index", color: "text-[#1D9E75]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4 border-b border-border/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-3.5 w-3.5 text-emerald-600" }),
            " Buyer Payment Health Summary"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("payments"), className: "text-[9px] font-bold text-primary hover:underline font-mono", children: "Receipt Manager →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 font-semibold text-xs text-foreground", children: [{
          l: "Payment Current — All Clear",
          count: "148 buyers",
          pct: 80,
          c: "bg-emerald-500"
        }, {
          l: "Upcoming Demand Due (< 30 days)",
          count: "24 buyers (₹3.8 Cr)",
          pct: 13,
          c: "bg-blue-500"
        }, {
          l: "Overdue — 1–30 Days",
          count: "9 buyers (₹74.2 L)",
          pct: 5,
          c: "bg-amber-500 animate-pulse"
        }, {
          l: "Overdue — 31–60 Days",
          count: "6 buyers (₹48.6 L)",
          pct: 3,
          c: "bg-red-400 animate-pulse"
        }, {
          l: "Overdue — 60+ Days",
          count: "3 buyers (₹38.1 L)",
          pct: 2,
          c: "bg-red-600 animate-pulse"
        }].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.l }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 font-normal", children: p.count })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-secondary/50 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${p.c}`, style: {
            width: `${p.pct * 1.2}%`
          } }) })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-5 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Smile, { className: "h-3.5 w-3.5 text-emerald-600" }),
              " Rolling NPS index"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("nps"), className: "text-[9px] font-bold text-primary hover:underline font-mono", children: "Survey Bot →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-16 w-16 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 36 36", className: "h-16 w-16 -rotate-90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9155", fill: "none", stroke: "#e5e7eb", strokeWidth: "3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9155", fill: "none", strokeWidth: "3", stroke: "#1D9E75", strokeDasharray: "81 19", strokeLinecap: "round" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 flex items-center justify-center font-mono font-extrabold text-[13px] text-emerald-600", children: "+62" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "Rolling NPS Score (+62)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-normal mt-0.5", children: "74 Promoters (62%) · 29 Passives (24%) · 17 Detractors (14%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9.5px] font-mono text-emerald-600 mt-1", children: "Trend: +54 → +58 → +62 (Improving)" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-3 border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5 text-[#2E86AB]" }),
            " Portal Engagement logins"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 flex items-end gap-1.5 pt-2", children: [41, 38, 52, 47, 61, 58, 74, 69].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-end items-center h-full group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-[#2E86AB]/80 rounded-t hover:bg-[#2E86AB] transition-colors", style: {
              height: `${v}%`
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8px] font-mono text-slate-400 mt-1", children: [
              "W",
              i + 1
            ] })
          ] }, i)) })
        ] })
      ] })
    ] })
  ] });
  const [selectedBuyerId, setSelectedBuyerId] = reactExports.useState("B01");
  const selectedBuyer = reactExports.useMemo(() => {
    return initialBuyersPool.find((b) => b.id === selectedBuyerId) || initialBuyersPool[0];
  }, [selectedBuyerId]);
  const renderSelfService = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-center justify-between border-b border-border/30 pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-slate-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: selectedBuyerId, onChange: (e) => setSelectedBuyerId(e.target.value), className: "h-8 border border-border rounded-lg text-xs font-semibold px-2 bg-card text-foreground", children: initialBuyersPool.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: b.id, children: [
          b.name,
          " (",
          b.unit,
          ")"
        ] }, b.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono font-bold text-slate-400 bg-secondary px-2.5 py-1 rounded border border-border/60", children: "Aadhaar & WhatsApp OTP Authenticated" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-7 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/40 pb-2 flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-sm text-foreground font-display flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-4 w-4 text-primary" }),
              " Property Overview — Unit ",
              selectedBuyer.unit
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200", children: "RERA Registered" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/30 rounded-xl space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-400 uppercase font-mono", children: "Owner Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground text-sm", children: selectedBuyer.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/30 rounded-xl space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-400 uppercase font-mono", children: "Total Consideration" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground text-sm", children: [
                "₹",
                (selectedBuyer.value / 1e5).toFixed(1),
                " Lakhs"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/30 rounded-xl space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-400 uppercase font-mono", children: "Registered Area" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground", children: [
                selectedBuyer.config === "2BHK" ? "788 sq ft" : "1,142 sq ft",
                " (Carpet)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/30 rounded-xl space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-400 uppercase font-mono", children: "Target RERA Possession" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "December 2026" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/30 rounded-xl space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-400 uppercase font-mono", children: "Relationship Manager" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3 w-3 text-slate-400" }),
                " ",
                selectedBuyer.rm
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/30 rounded-xl space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-400 uppercase font-mono", children: "Construction Stage" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse inline-block" }),
                " Floors 9–14 Structural"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-border/40 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Payment Summary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-emerald-600", children: [
                (selectedBuyer.paid / selectedBuyer.value * 100).toFixed(1),
                "% paid"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-full bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-emerald-500 rounded-full", style: {
              width: `${selectedBuyer.paid / selectedBuyer.value * 100}%`
            } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-slate-400 font-mono", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Paid: ₹",
                (selectedBuyer.paid / 1e5).toFixed(1),
                "L"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Remaining: ₹",
                ((selectedBuyer.value - selectedBuyer.paid) / 1e5).toFixed(1),
                "L"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2 mb-3", children: "Self-Service Document Library" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 text-xs font-semibold", children: [{
            name: "Booking Application Form",
            date: "14/03/2023",
            status: "Executed"
          }, {
            name: "Allotment Letter",
            date: "28/03/2023",
            status: "Issued"
          }, {
            name: "Agreement for Sale (Registered)",
            date: "22/04/2023",
            status: "Executed"
          }, {
            name: "Flat Layout Plan Annexure",
            date: "22/04/2023",
            status: "Available"
          }].map((doc, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-2 rounded-xl bg-background border border-border/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold truncate text-foreground", children: doc.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] text-slate-400 font-mono mt-0.5", children: [
                "Date: ",
                doc.date
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Downloading ${doc.name} PDF...`), className: "h-7 w-7 rounded-lg border border-border hover:bg-secondary flex items-center justify-center text-slate-500 hover:text-foreground shrink-0 ml-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }) })
          ] }, idx)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-5 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card space-y-4 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Communication Logs" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 font-semibold mt-3 text-xs", children: [{
            sender: "Fortiv AI Bot",
            msg: "Fortnightly Progress update #18 dispatched via WhatsApp",
            time: "14/01/2025 09:14 AM"
          }, {
            sender: selectedBuyer.rm,
            msg: "Personal call: discussing floor tile choice options",
            time: "08/01/2025 02:40 PM"
          }, {
            sender: "Accounts Dept",
            msg: "Demand note for Floor 8 Slab payment dispatched",
            time: "30/12/2024 10:15 AM"
          }, {
            sender: "System Notification",
            msg: "Registered Sale Agreement document copy uploaded to portal",
            time: "25/04/2023"
          }].map((log, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/20 pb-2.5 last:border-0 last:pb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-mono text-[9px] text-slate-400 mb-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: log.sender }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: log.time })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-sans text-[11px] leading-relaxed", children: log.msg })
          ] }, idx)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 border-t border-border/40 space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => alert(`Starting simulated WhatsApp chat with ${selectedBuyer.name}...`), className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
          " Message via WhatsApp"
        ] }) })
      ] }) })
    ] })
  ] });
  const [demandNotes, setDemandNotes] = reactExports.useState(initialDemandNotes);
  const [paymentFilter, setPaymentFilter] = reactExports.useState("All");
  const filteredPayments = reactExports.useMemo(() => {
    if (paymentFilter === "All") return initialBuyersPool;
    if (paymentFilter === "Overdue") return initialBuyersPool.filter((b) => b.status.includes("Overdue"));
    return initialBuyersPool.filter((b) => b.status === paymentFilter);
  }, [paymentFilter]);
  const compileDemandNotes = (milestoneName) => {
    setDemandNotes((prev) => prev.map((d) => {
      if (d.milestone === milestoneName) {
        return {
          ...d,
          status: "Demand notes compiled"
        };
      }
      return d;
    }));
    alert(`Demand notes compiled and queued for dispatch for: ${milestoneName}`);
  };
  const renderPayments = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Installments Received", value: "₹16.3Cr", desc: "All-time bookings collections", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Receivables", value: "₹1.61Cr", desc: "18 buyers overdue", color: "text-[#D85A30]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Next Milestone Demands", value: "₹6.4Cr", desc: "Floor 12 Slab milestone", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Tax Receipts Dispatched", value: "100%", desc: "Auto GST invoices", color: "text-[#1D9E75]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Milestone Demand Note Dispatcher" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 font-semibold text-xs text-slate-600", children: demandNotes.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/50 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-mono text-[9.5px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: d.date }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: statusBadge(d.status), children: d.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground text-sm font-bold", children: d.milestone }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-normal mt-0.5", children: [
              d.buyers,
              " buyers affected · Value: ₹",
              (d.val / 1e7).toFixed(2),
              "Cr"
            ] })
          ] }),
          d.status === "Auto-compile pending" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => compileDemandNotes(d.milestone), className: "w-full h-7 rounded bg-ink hover:bg-ink/90 text-cream text-[10px] font-bold uppercase tracking-wider transition-all", children: "Compile & Dispatch Demand Notes" })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display uppercase tracking-wider", children: "Buyer Ledger & Receivables" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: ["All", "Overdue", "Current"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPaymentFilter(f), className: `h-6 px-2.5 rounded text-[9px] font-bold uppercase tracking-wider border transition-all ${paymentFilter === f ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`, children: f }, f)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Buyer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Unit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Agr. Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Paid" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: filteredPayments.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold", children: b.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold text-slate-400", children: b.unit }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono", children: [
              "₹",
              (b.value / 1e5).toFixed(1),
              "L"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono", children: [
              "₹",
              (b.paid / 1e5).toFixed(1),
              "L"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadge(b.status)}`, children: b.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: b.status.includes("Overdue") ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`WhatsApp payment reminder sequence triggered for ${b.name}.`), className: "h-6 px-2 rounded bg-red-600 hover:bg-red-700 text-white text-[9px] font-mono uppercase shrink-0", children: "Remind" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Receipt PDF REC/GVH/2025/00${b.id} re-dispatched to email.`), className: "h-6 px-2 rounded border border-border text-[9px] font-mono hover:bg-secondary", children: "Receipt" }) })
          ] }, b.id)) })
        ] }) })
      ] })
    ] })
  ] });
  const [composingMsg, setComposingMsg] = reactExports.useState("Structural slabs on Tower A are now 84% completed. Plastering works starting on floors 1–4. Target Dec 2026 possession remains fully on track.");
  const simulateProgressDispatch = () => {
    alert(`Fortnightly Visual Site Update successfully dispatched to 186 registered buyers via WhatsApp & Portal.`);
  };
  const renderProgress = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 animate-in fade-in duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Customized Progress Feed Composer" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 text-xs font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-400", children: "Hero Update Narrative" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: composingMsg, onChange: (e) => setComposingMsg(e.target.value), className: "w-full h-24 border border-border rounded-xl p-3 bg-secondary/20 text-foreground font-sans focus:outline-none focus:border-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-dashed border-border rounded-2xl flex flex-col items-center justify-center font-mono text-slate-400 text-[10px] h-28 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-6 w-6 stroke-[1.5] mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Concrete casting photo (Tower A)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] bg-slate-100 text-slate-500 px-1.5 rounded mt-1", children: "AI selected from site logs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border border-dashed border-border rounded-2xl flex flex-col items-center justify-center font-mono text-slate-400 text-[10px] h-28 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-6 w-6 stroke-[1.5] mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Waterproofing photo (Podium)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] bg-slate-100 text-slate-500 px-1.5 rounded mt-1", children: "AI selected from site logs" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[10px] text-slate-600 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-slate-800", children: "Dynamic Personalization Rules Active:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Tower A buyers receive Tower A-specific photos & slab completion stats first." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "• Promoters (NPS 9-10) receive a Referral promotion footer badge." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: simulateProgressDispatch, className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all", children: "Dispatch Visual Update to all Buyers" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "WhatsApp Message Preview" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-[#ECF3EE] rounded-2xl border border-emerald-100 font-sans text-xs leading-relaxed text-slate-700 font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-slate-800 mb-1", children: "Fortiv Greenview Heights ·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 bg-emerald-950/10 rounded-xl mb-2 flex items-center justify-center text-slate-400 font-mono text-[9px] border border-emerald-200", children: "[Embedded Hero Construction Photo]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hi Rajesh!" }),
          " Here is your construction update #18 for Fortiv Greenview Heights:"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: composingMsg }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/80 border border-slate-200 rounded-xl p-2 mt-2 font-mono text-[9.5px] text-slate-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Progress Dashboard Overview:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "• Overall structural progress: 67% complete",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "• Tower A slabs: 84% completed",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "• Tower B slabs: 31% completed"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-slate-400 font-mono text-[9.5px]", children: "Warm regards, Priya Rana (Relationship Manager)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right text-[8px] text-slate-400 mt-1", children: "11:42 AM ✓✓" })
      ] })
    ] })
  ] }) });
  const [snags, setSnags] = reactExports.useState(initialSnags);
  const [selectedSnag, setSelectedSnag] = reactExports.useState(initialSnags[0]);
  const resolveSnag = (id) => {
    setSnags((prev) => prev.map((s) => {
      if (s.id === id) {
        return {
          ...s,
          status: "Resolved",
          resolved: "Today",
          satisfaction: "Satisfied"
        };
      }
      return s;
    }));
    setSelectedSnag((prev) => {
      if (prev.id === id) {
        return {
          ...prev,
          status: "Resolved",
          resolved: "Today",
          satisfaction: "Satisfied"
        };
      }
      return prev;
    });
    alert(`Snag ${id} resolved. Closed-loop customer confirmation dispatched.`);
  };
  const renderSnag = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Snags Logged", value: "49", desc: "Post-possession handovers", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Tickets Resolved", value: "40", desc: "81.6% resolution rate", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Active Open Tickets", value: "9", desc: "Awaiting fix", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Average Resolution", value: "4.2 days", desc: "Turnaround SLA speed", color: "text-[#2E86AB]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border text-[10px] font-bold uppercase text-slate-500 font-display", children: "Snag Defect Registry" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Ticket" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Buyer / Unit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Severity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: snags.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setSelectedSnag(s), className: `hover:bg-secondary/15 cursor-pointer transition-colors ${selectedSnag.id === s.id ? "bg-secondary/20 font-bold" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold text-slate-400", children: s.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: s.buyer }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] text-slate-400 font-mono font-normal", children: [
                "Unit ",
                s.unit
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500 font-mono", children: s.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8.5px] px-2 py-0.5 rounded font-mono font-bold uppercase ${s.severity === "Functional" ? "bg-amber-100 text-amber-700" : s.severity === "Structural" ? "bg-red-100 text-red-700 border border-red-200" : "bg-slate-100 text-slate-500"}`, children: s.severity }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(s.status)}`, children: s.status }) })
          ] }, s.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/40 pb-2 flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "AI Triage Case File" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(selectedSnag.status)}`, children: selectedSnag.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 text-xs font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-display font-bold text-foreground text-sm", children: [
              "Ticket ",
              selectedSnag.id,
              " (",
              selectedSnag.category,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-normal", children: [
              "Buyer: ",
              selectedSnag.buyer,
              " · ",
              selectedSnag.phone
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[9.5px] space-y-1.5 text-slate-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Date Opened:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: selectedSnag.opened })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Date Resolved:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: selectedSnag.resolved })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Severity Tier:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-bold", children: selectedSnag.severity })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Buyer Satisfaction:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-bold", children: selectedSnag.satisfaction })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-background border border-border/50 rounded-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1", children: "Issue Description & Note:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-[11px] leading-relaxed font-sans", children: selectedSnag.note })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/10 text-emerald-700 text-[10px] font-mono leading-relaxed", children: [
            "⚡ ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "AI Triage Rule:" }),
            " Within 12-month post-handover warranty coverage period. Work order dispatch pre-approved."
          ] }),
          selectedSnag.status !== "Resolved" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => resolveSnag(selectedSnag.id), className: "w-full h-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-widest transition-all", children: "Mark Ticket as Resolved" })
        ] })
      ] })
    ] })
  ] });
  const [resales, setResales] = reactExports.useState(resalesListings);
  const [selectedListing, setSelectedListing] = reactExports.useState(resalesListings[0]);
  const addListing = () => {
    const newListing = {
      id: `RSL-0${resales.length + 1}`,
      type: "Resale",
      unit: "A-1002",
      owner: "Ritu Bhandari",
      asking: 535e4,
      avm: 52e5,
      status: "Listed",
      inquiries: 0,
      agent: "Meera Patel"
    };
    setResales((prev) => [...prev, newListing]);
    setSelectedListing(newListing);
    alert("New resale listing successfully generated using pre-filled CRM unit parameters.");
  };
  const renderResale = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "In-House Brokerage Listings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: addListing, className: "h-8 px-3 rounded-md bg-ink hover:bg-ink/90 text-cream text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
        " List Completed Unit"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Listing ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Unit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Owner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Asking Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: resales.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setSelectedListing(r), className: `hover:bg-secondary/15 cursor-pointer transition-colors ${selectedListing.id === r.id ? "bg-secondary/20 font-bold" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold text-slate-400", children: r.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8.5px] px-2 py-0.5 rounded font-mono font-bold uppercase ${r.type === "Rental" ? "bg-blue-50 text-blue-700" : "bg-purple-50 text-purple-700"}`, children: r.type }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold text-slate-700", children: r.unit }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500", children: r.owner }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold", children: r.type === "Rental" ? `₹${(r.asking / 1e3).toFixed(0)}k/mo` : `₹${(r.asking / 1e5).toFixed(1)}L` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(r.status)}`, children: r.status }) })
        ] }, r.id)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Secondary Deal Card" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 text-xs font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-display font-bold text-foreground text-sm", children: [
              "Unit ",
              selectedListing.unit,
              " (",
              selectedListing.type,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-normal", children: [
              "Assigned In-House Broker: ",
              selectedListing.agent
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[9.5px] space-y-1 text-slate-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Owner Name:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: selectedListing.owner })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Asking Quote:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-bold", children: selectedListing.type === "Rental" ? `₹${selectedListing.asking.toLocaleString()}/mo` : `₹${(selectedListing.asking / 1e5).toFixed(1)} Lakhs` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI valuation (AVM):" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-bold", children: selectedListing.type === "Rental" ? `₹${selectedListing.avm.toLocaleString()}/mo` : `₹${(selectedListing.avm / 1e5).toFixed(1)} Lakhs` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Inquiries Received:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-bold", children: selectedListing.inquiries })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl border border-purple-200 bg-purple-50/10 text-purple-700 text-[10px] font-mono leading-relaxed", children: [
            "⭐ ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fortiv Brokerage Fee (1.5%):" }),
            " Estimated revenue: ₹",
            selectedListing.type === "Rental" ? "₹320" : `${(selectedListing.asking * 0.015 / 1e5).toFixed(2)} Lakhs`,
            " upon close."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Syndicated listing ${selectedListing.id} updated on 99acres and MagicBricks.`), className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all", children: "Sync with External Portals" }) })
        ] })
      ] })
    ] })
  ] });
  const [checklist, setChecklist] = reactExports.useState(checklistSteps);
  const markStepComplete = (id) => {
    setChecklist((prev) => prev.map((s) => {
      if (s.id === id) {
        return {
          ...s,
          status: "Completed"
        };
      }
      return s;
    }));
  };
  const renderSociety = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-border bg-card rounded-2xl space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Resident Welfare Association (RWA) Handover Progress" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary font-bold", children: "43% formed" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-full bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary rounded-full", style: {
        width: "43%"
      } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border text-[10px] font-bold uppercase text-slate-500 font-display", children: "Legal Transfer Steps" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: checklist.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold text-slate-400 w-8", children: s.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-foreground", children: s.step }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-400 font-mono text-[10px]", children: s.owner }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(s.status)}`, children: s.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-right", children: s.status !== "Completed" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => markStepComplete(s.id), className: "h-6 px-2 rounded bg-ink hover:bg-ink/90 text-cream text-[9px] font-mono uppercase", children: "Complete" }) })
        ] }, s.id)) }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Operational Handover Contracts (AMC)" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 font-semibold text-xs text-slate-600", children: [
          amcContracts.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/30 pb-2 last:border-0 last:pb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: a.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] text-slate-400 font-normal", children: [
                "Vendor: ",
                a.vendor,
                " · Exp: ",
                a.expiry
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-mono font-bold bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded shrink-0", children: a.status })
          ] }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert("Batch AGM Notice issued to all 186 registered resident emails & WhatsApp numbers."), className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all mt-3", children: "Draft & Dispatch AGM Notice" })
        ] })
      ] })
    ] })
  ] });
  const [promoters, setPromoters] = reactExports.useState(initialBuyersPool.filter((b) => b.class === "Promoter"));
  const detractors = reactExports.useMemo(() => {
    return initialBuyersPool.filter((b) => b.class === "Detractor");
  }, []);
  const renderNps = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "NPS Survey responses", value: "68%", desc: "119 of 175 surveyed", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Attributed Bookings", value: "4", desc: "From referrals", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Referral Revenue", value: "₹2.24Cr", desc: "Active pipeline value", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Detractor Cases Pending", value: "3", desc: "Awaiting RM callbacks", color: "text-[#D85A30]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 border-b border-border text-[10px] font-bold uppercase text-slate-500 font-display flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Promoter Loyalty Leaderboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-emerald-600 font-mono", children: "Disbursing ₹10,000 per booking" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Promoter" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Unit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Referrals Made" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: promoters.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold text-slate-400", children: p.unit }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-extrabold text-emerald-600", children: [
              "★ ",
              p.nps
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-slate-500", children: p.name === "Amit Desai" ? "2 referrals made" : p.name === "Vikram Joshi" ? "1 referral booked" : "0 referrals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Unique referral tracking link: fortiv.in/loyalty/ref-00${p.id} re-dispatched.`), className: "h-6 px-2 rounded bg-ink hover:bg-ink/90 text-cream text-[9px] font-mono uppercase", children: "Referral Link" }) })
          ] }, idx)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Detractor Followup Intervention Queue" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 font-semibold text-xs", children: detractors.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl border border-red-200 bg-red-50/15 space-y-2 text-[#D85A30]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-mono text-[9px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Score: ★ ",
              d.nps,
              " (",
              d.class,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Unit ",
              d.unit
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: d.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-normal text-slate-500 mt-0.5", children: [
              "Assigned Liaison Manager: ",
              d.rm
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Urgent RM scheduling task dispatched to ${d.rm} for detractor call.`), className: "w-full h-7 rounded bg-ink text-cream hover:bg-ink/90 text-[9.5px] font-bold uppercase tracking-wider font-mono transition-all", children: "Schedule Priority Callback" })
        ] }, i)) })
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
    activeTab === "self-service" && renderSelfService(),
    activeTab === "payments" && renderPayments(),
    activeTab === "progress" && renderProgress(),
    activeTab === "snag" && renderSnag(),
    activeTab === "resale" && renderResale(),
    activeTab === "society" && renderSociety(),
    activeTab === "nps" && renderNps()
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
  BuyerManager as component
};
