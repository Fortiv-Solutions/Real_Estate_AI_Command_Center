import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, C as Card } from "./AppShell-BpFYqF_r.mjs";
import { f as Route$6 } from "./router-CIivQbm3.mjs";
import { n as ChevronLeft, b as ArrowRight, a1 as TrendingUp, f as Building, p as CircleAlert, a2 as TriangleAlert } from "../_libs/lucide-react.mjs";
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
const initialOverdueBuyers = [{
  rank: 1,
  name: "Rajesh Patel",
  unit: "A-804",
  project: "Greenview Heights",
  amount: 84e4,
  days: 62,
  contact: "12/01/2025",
  rm: "Priya Rana",
  action: "Call + formal notice"
}, {
  rank: 2,
  name: "Vikram Joshi",
  unit: "B-1201",
  project: "Skyline Residences",
  amount: 142e4,
  days: 91,
  contact: "05/01/2025",
  rm: "Rahul Modi",
  action: "Legal notice"
}, {
  rank: 3,
  name: "Deepak Trivedi",
  unit: "GH-203",
  project: "Greenview Heights",
  amount: 68e4,
  days: 47,
  contact: "18/01/2025",
  rm: "Ankit Shah",
  action: "WhatsApp reminder"
}, {
  rank: 4,
  name: "Sunita Mehta",
  unit: "C-502",
  project: "Greenview Heights",
  amount: 52e4,
  days: 34,
  contact: "22/01/2025",
  rm: "Priya Rana",
  action: "Call today"
}, {
  rank: 5,
  name: "Mahesh Khanna",
  unit: "S-1104",
  project: "Skyline Residences",
  amount: 186e4,
  days: 112,
  contact: "28/12/2024",
  rm: "Kiran Desai",
  action: "Legal notice"
}, {
  rank: 6,
  name: "Anita Gujarati",
  unit: "A-302",
  project: "Greenview Heights",
  amount: 41e4,
  days: 28,
  contact: "25/01/2025",
  rm: "Meera Patel",
  action: "WhatsApp + call"
}, {
  rank: 7,
  name: "Sanjay Kapoor",
  unit: "BP-401",
  project: "Business Park",
  amount: 224e4,
  days: 88,
  contact: "08/01/2025",
  rm: "Rahul Modi",
  action: "Director call"
}, {
  rank: 8,
  name: "Pooja Sharma",
  unit: "A-607",
  project: "Greenview Heights",
  amount: 56e4,
  days: 19,
  contact: "28/01/2025",
  rm: "Ankit Shah",
  action: "Reminder SMS"
}, {
  rank: 9,
  name: "Kavita Agarwal",
  unit: "B-904",
  project: "Skyline Residences",
  amount: 98e4,
  days: 55,
  contact: "15/01/2025",
  rm: "Kiran Desai",
  action: "Formal letter"
}, {
  rank: 10,
  name: "Suresh Nair",
  unit: "BP-102",
  project: "Business Park",
  amount: 315e4,
  days: 143,
  contact: "19/12/2024",
  rm: "Rahul Modi",
  action: "Refer to legal"
}];
const initialMilestoneTriggers = [{
  id: "T1",
  date: "16/01/2025",
  milestone: "8th Floor Slab Casting",
  project: "Greenview Heights",
  tower: "Tower A",
  units: 24,
  notes: 24,
  status: "All Delivered"
}, {
  id: "T2",
  date: "08/01/2025",
  milestone: "Brickwork 4th–6th Floor",
  project: "Greenview Heights",
  tower: "Tower B",
  units: 18,
  notes: 18,
  status: "All Delivered"
}, {
  id: "T3",
  date: "02/01/2025",
  milestone: "Plastering G+1–G+3",
  project: "Business Park",
  tower: "Block C",
  units: 12,
  notes: 12,
  status: "2 Undelivered"
}, {
  id: "T4",
  date: "24/12/2024",
  milestone: "Foundation Complete",
  project: "Skyline Residences",
  tower: "Tower 1",
  units: 48,
  notes: 48,
  status: "All Delivered"
}];
const initialBrokerCommissions = [{
  rank: 1,
  cp: "Rajhans Realtors",
  deals: 8,
  earned: 62e4,
  paid: 62e4,
  status: "Fully Settled"
}, {
  rank: 2,
  cp: "Prime Realty",
  deals: 6,
  earned: 48e4,
  paid: 34e4,
  status: "Pending payout"
}, {
  rank: 3,
  cp: "Landmark Properties",
  deals: 5,
  earned: 41e4,
  paid: 41e4,
  status: "Fully Settled"
}, {
  rank: 4,
  cp: "City Property Hub",
  deals: 4,
  earned: 32e4,
  paid: 21e4,
  status: "Pending payout"
}, {
  rank: 5,
  cp: "SNS Land Brokers",
  deals: 3,
  earned: 28e4,
  paid: 28e4,
  status: "Fully Settled"
}, {
  rank: 6,
  cp: "Om Realtors",
  deals: 3,
  earned: 24e4,
  paid: 0,
  status: "Approval pending"
}];
const projectPlsData = [{
  id: "P1",
  name: "Fortiv Greenview Heights",
  units: 240,
  sold: 186,
  unsold: 54,
  value: 184e6,
  pct: 72,
  recognized: 84e6,
  land: 21e6,
  construct: 32e6,
  sales: 42e5,
  overheads: 28e5,
  cost: 6e7,
  margin: 24e6,
  pctMargin: 28.6,
  proforma: 30,
  status: "Watch"
}, {
  id: "P2",
  name: "Fortiv Skyline Residences",
  units: 180,
  sold: 122,
  unsold: 58,
  value: 142e6,
  pct: 48,
  recognized: 62e6,
  land: 34e6,
  construct: 28e6,
  sales: 38e5,
  overheads: 22e5,
  cost: 68e6,
  recognizedCost: 43e6,
  margin: 19e6,
  pctMargin: 30.6,
  proforma: 30,
  status: "On Track"
}, {
  id: "P3",
  name: "Fortiv Business Park",
  units: 48,
  sold: 38,
  unsold: 10,
  value: 86e6,
  pct: 95,
  recognized: 36e6,
  land: 18e6,
  construct: 16e6,
  sales: 22e5,
  overheads: 18e5,
  cost: 38e6,
  recognizedCost: 28e6,
  margin: 8e6,
  pctMargin: 22.2,
  proforma: 26,
  status: "Action Required"
}];
const tallySyncLogs = [{
  id: "SYNC-1",
  type: "Buyer Payment Received",
  ref: "PAY-GH-1284",
  val: 46e4,
  debit: "Bank — HDFC Current",
  credit: "Advance from Buyers",
  project: "Greenview Heights",
  voucher: "Receipt",
  tallyRef: "RV/2025/01/4821",
  time: "16/01/2025 14:32",
  status: "Success"
}, {
  id: "SYNC-2",
  type: "Subcontractor Payment",
  ref: "PAY-C047",
  val: 605e3,
  debit: "Subcontractor Cost — Civil",
  credit: "Bank — HDFC Current",
  project: "Greenview Heights",
  voucher: "Payment",
  tallyRef: "PV/2025/01/0812",
  time: "16/01/2025 15:10",
  status: "Success"
}, {
  id: "SYNC-3",
  type: "Material Purchase",
  ref: "PO-IND112",
  val: 1178e3,
  debit: "Material Cost — Concrete",
  credit: "Ultratech RMC Ledger",
  project: "Greenview Heights",
  voucher: "Journal",
  tallyRef: "JV/2025/01/1041",
  time: "16/01/2025 16:44",
  status: "Success"
}, {
  id: "SYNC-4",
  type: "Broker Commission",
  ref: "COMM-CS187",
  val: 123200,
  debit: "Sales Commission Expense",
  credit: "Bank — HDFC Current",
  project: "Greenview Heights",
  voucher: "Payment",
  tallyRef: "PV/2025/01/0815",
  time: "17/01/2025 10:15",
  status: "Success"
}];
const failedSyncQueue = [{
  id: "FAIL-1",
  type: "Subcontractor payment",
  cp: "Ravi Plumbing",
  val: 84e3,
  error: "Ledger name mismatch",
  action: "Fix ledger name"
}, {
  id: "FAIL-2",
  type: "Material purchase",
  cp: "JSW Steel",
  val: 28e3,
  error: "GST code not found",
  action: "Update GST master"
}, {
  id: "FAIL-3",
  type: "Buyer receipt",
  cp: "Kavita Agarwal",
  val: 8e3,
  error: "Network timeout",
  action: "Auto-retry scheduled"
}];
const reportSchedules = [{
  name: "Monthly MIS Financial Report",
  freq: "Monthly",
  nextRun: "01/06/2026",
  audience: "CFO, MD, Board",
  format: "PDF",
  status: "Active"
}, {
  name: "Weekly Collections & Aging Report",
  freq: "Weekly",
  nextRun: "08/06/2026",
  audience: "Finance Manager, Sales Head",
  format: "PDF/Excel",
  status: "Active"
}, {
  name: "Broker Commission Statements",
  freq: "Monthly",
  nextRun: "25/06/2026",
  audience: "Accounts, CPs",
  format: "PDF",
  status: "Active"
}, {
  name: "Quarterly Board Financial Pack",
  freq: "Quarterly",
  nextRun: "01/07/2026",
  audience: "Board of Directors",
  format: "PDF",
  status: "Active"
}];
const cashflowOutflows90d = [{
  cat: "Subcontractor Payments",
  feb: 84e5,
  mar: 112e5,
  apr: 68e5,
  source: "M9.2 Work Orders"
}, {
  cat: "Material Procurement",
  feb: 42e5,
  mar: 56e5,
  apr: 38e5,
  source: "M9.3 Purchase Orders"
}, {
  cat: "Payroll (All Staff)",
  feb: 28e5,
  mar: 28e5,
  apr: 28e5,
  source: "M7.4 Payroll Registry"
}, {
  cat: "Broker Commissions",
  feb: 19e5,
  mar: 14e5,
  apr: 8e5,
  source: "M11.3 Tracker"
}, {
  cat: "Statutory / Taxes",
  feb: 12e5,
  mar: 12e5,
  apr: 12e5,
  source: "GST/TDS Invoices"
}, {
  cat: "Project Loans EMIs",
  feb: 24e5,
  mar: 24e5,
  apr: 24e5,
  source: "HDFC Term Loan"
}];
const monthlyCollectionsTrend = [{
  m: "Oct 2024",
  v: 240,
  status: "Below"
}, {
  m: "Nov 2024",
  v: 310,
  status: "Above"
}, {
  m: "Dec 2024",
  v: 280,
  status: "Below"
}, {
  m: "Jan 2025",
  v: 360,
  status: "Above"
}, {
  m: "Feb 2025",
  v: 320,
  status: "Above"
}, {
  m: "Mar 2025",
  v: 310,
  status: "Above"
}];
const statusBadgeStyle = (status) => {
  if (["Complete", "Completed", "Success", "Paid", "Current", "Fully Settled", "On Track"].some((s) => status.includes(s))) return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (["In Progress", "In Transit", "PO Sent", "Scheduled", "Applied", "Under Review", "Pending payout", "Watch", "Auto-compile pending", "Active"].some((s) => status.includes(s))) return "bg-amber-50 text-amber-700 border border-amber-100";
  if (["Action Required", "Not Initiated", "Not Applied", "Pending Snags", "Blocked", "Payment Pending", "Snag Pending", "At Risk", "Delayed", "Overrun", "Critical Overrun", "Escalated", "Overdue", "Approval pending", "Failed"].some((s) => status.includes(s))) return "bg-red-50 text-[#D85A30] border border-red-100";
  return "bg-slate-50 text-slate-600 border border-slate-200";
};
function FinanceManager() {
  const {
    tab
  } = Route$6.useSearch();
  const navigate = useNavigate({
    from: Route$6.fullPath
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
    desc: "Overall active billed receivables KPIs, monthly collections target trend, project margins summary, and pending actions alerts.",
    stats: "Total Collected: ₹18.2Cr",
    status: "Active"
  }, {
    id: "collections",
    name: "Collections & Receivables Dashboard",
    desc: "Real-time receivables ledger tracking, age-wise collection buckets, and overdue buyer prioritization list.",
    stats: "₹6.4Cr outstanding balance",
    status: "Active"
  }, {
    id: "demand-notes",
    name: "Demand Note Automation",
    desc: "Automated milestone-linked billing dispatcher, delivery notifications timeline, and in-browser PDF note previewers.",
    stats: "Last: 8th Floor Slab Casting",
    status: "Active"
  }, {
    id: "commission",
    name: "Broker Commission Tracker",
    desc: "Milestone-linked broker commission payouts pipelines, CP leaderboards, net payable calculations, and CP portal status syncs.",
    stats: "Top CP: Rajhans Realtors",
    status: "Active"
  }, {
    id: "pl-monitor",
    name: "Project P&L Monitor",
    desc: "Percentage construction complete recognised revenue, Direct costs trackers, EBITDA margins, and pro-forma targets variances.",
    stats: "GH gross margin: 28.6%",
    status: "Active"
  }, {
    id: "forecaster",
    name: "Cash Flow Forecaster",
    desc: "90/180-day inflow-outflow forecaster models, minimum cash reserves gap alerts, and bridge loan modellers.",
    stats: "April cash gap projected",
    status: "Active"
  }, {
    id: "tally-sync",
    name: "Tally / Accounting Sync Agent",
    desc: "Double-entry automatic ledger voucher pushes, CGST/SGST ledger mappings, reconciliations, and failed queue error fixes.",
    stats: "Sync success rate: 99.1%",
    status: "Active"
  }, {
    id: "reports",
    name: "Financial Report Generator",
    desc: "Monthly MIS statements library, scheduled report distribution logs, CA tax extracts, and one-click PDF creators.",
    stats: "MIS Report generated",
    status: "Active"
  }];
  const getPageHeader = () => {
    const map = {
      menu: {
        title: "Finance, Accounts & Revenue Intelligence",
        subtitle: "The complete financial nervous system for a real estate developer — from individual buyer collections to project P&L to investor reporting."
      },
      overview: {
        title: "Financial Dashboard Overview",
        subtitle: "Helicopter CFO view of collections KPIs, project P&L snapshot, projected cash position, and pending operational tasks."
      },
      collections: {
        title: "Collections & Receivables Dashboard",
        subtitle: "Real-time Receivables Tracker mapping outstanding amounts to aging buckets and recommended RM callbacks."
      },
      "demand-notes": {
        title: "Demand Note Automation Engine",
        subtitle: "Auto-compile and dispatch milestone-triggered demand invoices to buyers via WhatsApp, email, and portal."
      },
      commission: {
        title: "Broker Commission Tracker",
        subtitle: "Channel Partner payment ledgers, commission milestone approval queues, and CP portal ledger syncs."
      },
      "pl-monitor": {
        title: "Project P&L Monitor",
        subtitle: "Construction cost trackers and revenue recognition margins vs baseline pro-forma targets."
      },
      forecaster: {
        title: "Cash Flow Forecaster Model",
        subtitle: "90/180-day forecast, cash reserves threshold analysis, and bridge financing modeller."
      },
      "tally-sync": {
        title: "Tally / Accounting Sync Agent",
        subtitle: "Monitor automatic double-entry voucher pushes, reconcile daily balances, and clear ledger mapping exceptions."
      },
      reports: {
        title: "Financial Report Generator Pack",
        subtitle: "Branded PDF MIS statements scheduler,CA tax extracts, and stakeholder distribution log archives."
      }
    };
    return map[activeTab] || map.menu;
  };
  const headerInfo = getPageHeader();
  const dynamicTitle = activeTab === "menu" ? headerInfo.title : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("menu"), className: "group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95 mr-0.5", "aria-label": "Back to finance menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors", onClick: () => setActiveTab("menu"), children: headerInfo.title })
  ] });
  const renderOverview = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Billed", value: "₹24.6 Cr", desc: "Demand notes raised", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Collected", value: "₹18.2 Cr", desc: "Receipts logged to date", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Collection Rate", value: "74%", desc: "Target threshold: 85%", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Outstanding", value: "₹6.4 Cr", desc: "Receivables balance", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "90+ Day Overdue", value: "₹1.5 Cr", desc: "Escalated collections", color: "text-[#D85A30] animate-pulse" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4 border-b border-border/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5 text-primary" }),
            " Monthly Collections (Oct 2024 – Mar 2025)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-slate-400", children: "Target: ₹3.0 Cr/month" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-44 flex items-end gap-3.5 pt-2", children: monthlyCollectionsTrend.map((t, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-end items-center h-full group relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute -top-6 text-[10px] font-mono font-bold text-foreground opacity-0 group-hover:opacity-100 transition-opacity", children: [
            "₹",
            (t.v / 100).toFixed(2),
            "Cr"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full rounded-t transition-all duration-300 ${t.status === "Above" ? "bg-emerald-500/80 hover:bg-emerald-500" : "bg-[#2E86AB]/80 hover:bg-[#2E86AB]"}`, style: {
            height: `${t.v / 400 * 100}%`
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono text-slate-500 mt-1.5 truncate max-w-full", children: t.m })
        ] }, idx)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5 border-b border-border/40 pb-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "h-3.5 w-3.5 text-primary" }),
          " Project P&L Summary Snapshot"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3.5 text-xs font-semibold", children: projectPlsData.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/30 pb-2 last:border-0 last:pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] text-slate-400 font-normal", children: [
              "Cost: ₹",
              (p.cost / 1e7).toFixed(1),
              "Cr · Revenue: ₹",
              (p.recognized / 1e7).toFixed(1),
              "Cr"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-foreground", children: [
              "₹",
              (p.margin / 1e7).toFixed(1),
              "Cr"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-[9.5px] font-bold ${p.status === "Action Required" ? "text-red-500" : "text-slate-400"}`, children: [
              p.pctMargin,
              "% Margin"
            ] })
          ] })
        ] }, i)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5 border-b border-border/40 pb-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3.5 w-3.5 text-red-500 animate-pulse" }),
        " Pending Finance Actionable Queue"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5 text-xs font-semibold", children: [{
        a: "3 Milestone Demands notes queue",
        tag: "M11.2",
        c: "border-red-200 bg-red-50/20 text-red-700",
        t: "demand-notes"
      }, {
        a: "₹2.8Cr overdue 31–60 days",
        tag: "M11.1",
        c: "border-red-200 bg-red-50/20 text-red-700",
        t: "collections"
      }, {
        a: "CP payouts pending approval",
        tag: "M11.3",
        c: "border-amber-200 bg-amber-50/20 text-amber-700",
        t: "commission"
      }, {
        a: "Tally sync queue failed records",
        tag: "M11.6",
        c: "border-amber-200 bg-amber-50/20 text-amber-700",
        t: "tally-sync"
      }, {
        a: "MIS Monthly Financial Pack due",
        tag: "M11.7",
        c: "border-slate-200 bg-slate-50 text-slate-600",
        t: "reports"
      }].map((act, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setActiveTab(act.t), className: `p-3 rounded-xl border flex flex-col justify-between cursor-pointer hover:shadow-sm transition-all h-24 ${act.c}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "line-clamp-2", children: act.a }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[9px] font-mono font-bold mt-1.5 pt-1.5 border-t border-current/25", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: act.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "underline", children: "Resolve →" })
        ] })
      ] }, i)) })
    ] })
  ] });
  const [agingFilter, setAgingFilter] = reactExports.useState("All");
  const filteredOverdues = reactExports.useMemo(() => {
    if (agingFilter === "All") return initialOverdueBuyers;
    if (agingFilter === "90+") return initialOverdueBuyers.filter((b) => b.days >= 90);
    return initialOverdueBuyers;
  }, [agingFilter]);
  const renderCollections = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Outstanding", value: "₹6.4 Cr", desc: "Billed but unpaid", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Current (Not Yet Due)", value: "₹1.6 Cr", desc: "Due within 30 days", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Overdue (1–60 Days)", value: "₹4.9 Cr", desc: "Active aging tracking", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Critical (90+ Days)", value: "₹1.5 Cr", desc: "23.4% of total outstanding", color: "text-[#D85A30]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-50 border border-red-200 rounded-xl text-xs flex items-center gap-3 font-semibold text-[#D85A30] animate-pulse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 shrink-0 text-red-500 animate-bounce" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Finance Alert:" }),
        " 90+ Day Overdue bucket is at ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "23.4% of outstanding" }),
        ", exceeding the 10% policy threshold. Legal notice sequence has been auto-queued."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4 border border-border bg-card space-y-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/40 pb-2 flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Aging Analysis Buckets" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono bg-red-100 text-red-700 px-2 py-0.5 rounded border border-red-200", children: "Alert Threshold Exceeded" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 text-xs font-semibold", children: [{
          b: "Current (Not Due)",
          val: "₹1.6 Cr",
          buyers: "34 buyers",
          pct: 25
        }, {
          b: "0–30 Days Overdue",
          val: "₹2.1 Cr",
          buyers: "18 buyers",
          pct: 33
        }, {
          b: "31–60 Days Overdue",
          val: "₹2.8 Cr",
          buyers: "9 buyers",
          pct: 44
        }, {
          b: "61–90 Days Overdue",
          val: "₹0.4 Cr",
          buyers: "3 buyers",
          pct: 6
        }, {
          b: "90+ Days Overdue",
          val: "₹1.5 Cr",
          buyers: "4 buyers",
          pct: 23
        }].map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/30 pb-2 last:border-0 last:pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: row.b }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9.5px] text-slate-400 font-normal", children: row.buyers })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-foreground", children: row.val }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] text-slate-400 font-mono font-normal", children: [
              row.pct,
              "% of total"
            ] })
          ] })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-8 p-0 border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display uppercase tracking-wider", children: "Overdue Buyer Action Ledger" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: ["All", "90+"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAgingFilter(f), className: `h-6 px-2 rounded text-[9px] font-bold uppercase border transition-all ${agingFilter === f ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`, children: f === "90+" ? "90+ Days Overdue" : "Show All" }, f)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Buyer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Unit / Project" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Overdue Val" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Days" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "RM" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: filteredOverdues.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `hover:bg-secondary/15 ${b.days >= 90 ? "bg-red-50/10 border-l-2 border-l-red-500" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold", children: b.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground font-mono", children: b.unit }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9.5px] text-slate-400 font-normal", children: b.project })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-bold text-foreground", children: [
              "₹",
              (b.amount / 1e5).toFixed(1),
              "L"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-bold", children: [
              b.days,
              " d"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500", children: b.rm }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Outreach sequence [${b.action}] triggered for ${b.name} via WhatsApp.`), className: `h-6 px-2.5 rounded text-[9px] font-mono uppercase ${b.days >= 90 ? "bg-red-600 hover:bg-red-700 text-white" : "bg-ink text-cream hover:bg-ink/90"}`, children: b.days >= 90 ? "Legal notice" : "Remind" }) })
          ] }, b.rank)) })
        ] }) })
      ] })
    ] })
  ] });
  const [milestones, setMilestones] = reactExports.useState(initialMilestoneTriggers);
  const simulateDemandGeneration = (id, milestone) => {
    setMilestones((prev) => prev.map((m) => {
      if (m.id === id) {
        return {
          ...m,
          status: "All Delivered"
        };
      }
      return m;
    }));
    alert(`Milestone demand note batch generated successfully for ${milestone}. Dispatched via WhatsApp, Email & Portal.`);
  };
  const renderDemands = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 animate-in fade-in duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Milestone Trigger Log" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 font-semibold text-xs text-slate-600", children: milestones.map((m, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/50 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-mono text-[9px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-400", children: [
            m.date,
            " · ",
            m.project
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8.5px] px-1.5 py-0.2 rounded font-mono ${statusBadgeStyle(m.status)}`, children: m.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground text-sm font-bold", children: [
            m.milestone,
            " (",
            m.tower,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-normal mt-0.5", children: [
            "Affects ",
            m.units,
            " units · Est batch value: ₹",
            (m.units * 4.6).toFixed(1),
            " Lakhs"
          ] })
        ] }),
        m.status.includes("pending") && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => simulateDemandGeneration(m.id, m.milestone), className: "h-7 w-full rounded bg-ink hover:bg-ink/90 text-cream text-[10px] font-mono uppercase tracking-wider transition-all", children: "Generate & Send Batch Notes" })
      ] }, m.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/40 pb-2 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Demand Document Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert("Downloading PDF template..."), className: "text-[9px] font-bold text-primary underline font-mono", children: "Download Sample PDF" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-background border border-border/50 rounded-2xl font-mono text-[9px] leading-relaxed text-slate-600 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-bold text-foreground text-xs uppercase border-b border-border/40 pb-2", children: "Fortiv Solutions Pvt Ltd · Demand Letter" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-[9.5px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Buyer:" }),
            " Rajesh Patel"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Voucher ID:" }),
            " DN-GH-2025-0847"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Unit:" }),
            " Tower A, Unit 804"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "RERA:" }),
            " GJ/RES/SURAT/2023/00847"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-b border-border/40 py-2 my-2 text-foreground font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tranche Stage:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Floor Slab — 8th Floor" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-1 text-[10.5px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Amount Demanded:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary", children: "₹4,60,000" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cumulative Paid:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "₹18,40,000" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Outstanding Balance:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "₹39,10,000" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Payment Due Date:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-red-500", children: "15/02/2025" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/40 p-2.5 rounded-xl text-[8.5px] border border-border/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Escrow Accounts:" }),
          " HDFC Bank · A/c No: 50200847214 · IFSC: HDFC0001234"
        ] })
      ] })
    ] })
  ] }) });
  const [commissions, setCommissions] = reactExports.useState(initialBrokerCommissions);
  const releaseCommission = (cp, earned) => {
    setCommissions((prev) => prev.map((c) => {
      if (c.cp === cp) {
        return {
          ...c,
          status: "Fully Settled",
          paid: earned
        };
      }
      return c;
    }));
    alert(`Commission of ₹${(earned / 1e5).toFixed(2)}L cleared for payment transfer. Bank remittance triggered.`);
  };
  const renderCommissions = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total CP Commission (Q1)", value: "₹28.4L", desc: "Cumulative liability", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Commissions Settled", value: "₹19.6L", desc: "Transferred to brokers", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Awaiting Approval", value: "₹6.2L", desc: "Accounts queue pending", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Overdue Settles", value: "₹2.6L", desc: "Auto-reconciles on hold", color: "text-[#D85A30]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border text-[10px] font-bold uppercase text-slate-500 font-display", children: "Broker Payout Ledgers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Broker Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Deals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Commission" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Paid" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: commissions.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold", children: c.cp }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-bold text-slate-400", children: [
              c.deals,
              " deals"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono", children: [
              "₹",
              (c.earned / 1e5).toFixed(1),
              "L"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono", children: [
              "₹",
              (c.paid / 1e5).toFixed(1),
              "L"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle(c.status)}`, children: c.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: c.status !== "Fully Settled" ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => releaseCommission(c.cp, c.earned), className: "h-6 px-2 rounded bg-ink hover:bg-ink/90 text-cream text-[9px] font-mono uppercase", children: "Release" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-bold text-[9px]", children: "✓ Cleared" }) })
          ] }, c.rank)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Channel Partner Integration Sync" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 text-xs font-semibold text-slate-600 leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Commission calculations synchronize automatically with the broker portal (M12.4). Net commissions are generated subtracting TDS @10% and adding GST @18%." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[9.5px] space-y-1.5 text-slate-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Commission Rate:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "2.0% on booking tranche" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Gross commission:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "₹1,15,000" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GST @18% added:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "+₹20,700" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "TDS @10% deducted:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "-₹11,500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-border/40 pt-1 mt-1 text-foreground font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Net CP Payable:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-sm", children: "₹1,23,200" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert("Broker payouts bulk sync pushed to CP portal."), className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all", children: "Push Payouts Status to CP Portal" })
        ] })
      ] })
    ] })
  ] });
  const [selectedPlProject, setSelectedPlProject] = reactExports.useState("P1");
  const currentPl = reactExports.useMemo(() => {
    return projectPlsData.find((p) => p.id === selectedPlProject) || projectPlsData[0];
  }, [selectedPlProject]);
  const renderPlMonitor = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 border-b border-border/30 pb-3", children: projectPlsData.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedPlProject(p.id), className: `h-8 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${selectedPlProject === p.id ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`, children: p.name }, p.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/40 pb-2 flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Revenue Recognition & Cost Waterfall" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadgeStyle(currentPl.status)}`, children: currentPl.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 text-xs font-semibold text-slate-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/30 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Overall Completion Status:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground font-bold", children: [
              currentPl.pct,
              "% Complete"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/30 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Recognised Revenue (IndAS 115):" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground font-bold", children: [
              "₹",
              (currentPl.recognized / 1e7).toFixed(2),
              "Cr"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/30 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Land Cost Allocation:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground font-bold", children: [
              "₹",
              (currentPl.land / 1e7).toFixed(2),
              "Cr"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/30 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Construction Cost Incurred:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground font-bold", children: [
              "₹",
              (currentPl.construct / 1e7).toFixed(2),
              "Cr"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/30 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sales Marketing & Overhead:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground font-bold", children: [
              "₹",
              ((currentPl.sales + currentPl.overheads) / 1e7).toFixed(2),
              "Cr"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mt-2 pt-2 text-foreground font-bold text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Gross Project Margin:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-primary", children: [
              "₹",
              (currentPl.margin / 1e7).toFixed(2),
              "Cr"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Baseline target variances" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[10px] space-y-1.5 text-slate-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Current Margin %:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-bold", children: [
                  currentPl.pctMargin,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Budgeted Pro-forma:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
                  currentPl.proforma,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-border/40 pt-1.5 mt-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Variance Delta:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-bold ${currentPl.pctMargin - currentPl.proforma >= 0 ? "text-emerald-600" : "text-red-500 animate-pulse"}`, children: [
                  (currentPl.pctMargin - currentPl.proforma).toFixed(1),
                  "%"
                ] })
              ] })
            ] }),
            currentPl.status === "Action Required" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl border border-red-200 bg-red-50/20 text-red-700 text-[10px] animate-pulse", children: [
              "⚠️ ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Margin Warning Alert:" }),
              " Cost overrun is tracking 3.8% below pro-forma target threshold. Project cost-to-complete audit recommended."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Cost ledger audit report request generated for project: ${currentPl.name}.`), className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all mt-4", children: "Request Cost Ledger Audit" })
      ] })
    ] })
  ] });
  const [cashScenario, setCashScenario] = reactExports.useState("baseline");
  const inflowsProjected = reactExports.useMemo(() => {
    let scalar = 1;
    if (cashScenario === "delay") scalar = 0.7;
    if (cashScenario === "accelerate") scalar = 1.25;
    return Math.round(18e6 * scalar);
  }, [cashScenario]);
  const renderForecaster = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Opening Balance", value: "₹2.84 Cr", desc: "Remittance accounts", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Projected Inflows (90d)", value: `₹ ${(inflowsProjected / 1e7).toFixed(2)} Cr`, desc: "Milestone billing tranches", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Projected Outflows", value: "₹6.87 Cr", desc: "Subcontractor + procurement", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Funding Gap Alert", value: "₹0.61 Cr", desc: "Required by 1st April 2025", color: "text-[#D85A30]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Scenario Sensitivity Cash modeller" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [{
        id: "baseline",
        name: "Baseline Forecast"
      }, {
        id: "delay",
        name: "30% Inflows Delay"
      }, {
        id: "accelerate",
        name: "Accelerated bookings (+10)"
      }, {
        id: "loan",
        name: "₹1.0Cr Bridge Funding"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCashScenario(s.id), className: `h-8 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${cashScenario === s.id ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`, children: s.name }, s.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Projected Outflows Breakdown" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 font-semibold text-xs text-slate-600", children: cashflowOutflows90d.map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/30 pb-2 last:border-0 last:pb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: o.cat }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] text-slate-400 font-normal", children: [
              "Source: ",
              o.source
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-foreground", children: [
              "₹",
              ((o.feb + o.mar + o.apr) / 1e7).toFixed(2),
              "Cr"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-400 font-mono font-normal", children: "3-Month Sum" })
          ] })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4 border border-[#D85A30] bg-red-50/15 space-y-4 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-[#D85A30] tracking-wider font-display border-b border-red-200 pb-2", children: "CFO Funding Gap Briefing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-600 leading-relaxed font-semibold", children: "Projected cash balance falls below the minimum ₹0.75 Cr threshold in April Week 1. Bridge funding of ₹0.61 Cr required to cover subcontractor dues." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert("Lender Bridge Briefing Document generated & sent to bank partner."), className: "w-full h-8 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold uppercase tracking-widest transition-all", children: "Draft & Send Lender Brief" })
      ] })
    ] })
  ] });
  const [syncQueue, setSyncQueue] = reactExports.useState(failedSyncQueue);
  const clearSyncQueueItem = (id, cp) => {
    setSyncQueue((prev) => prev.filter((s) => s.id !== id));
    alert(`Sync queue voucher cleared. Re-routed invoice to Tally ledger for: ${cp}.`);
  };
  const renderTallySync = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Sync Success Rate", value: "99.1%", desc: "Last 30 days", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Transactions Pushed", value: "1,842", desc: "Cumulative invoices", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Exceptions in Queue", value: `${syncQueue.length}`, desc: "Awaiting correction", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Last Successful Sync", value: "10 Min ago", desc: "Tally Gateway active", color: "text-[#2E86AB]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border text-[10px] font-bold uppercase text-slate-500 font-display", children: "Tally Gateway Sync Logs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Sync ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Transaction Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Debit/Credit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: tallySyncLogs.map((log) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold text-slate-400", children: log.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: log.type }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] text-slate-400 font-mono font-normal", children: [
                "Ref: ",
                log.ref,
                " · ",
                log.time
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-bold", children: [
              "₹",
              (log.val / 1e5).toFixed(1),
              "L"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9.5px] text-slate-500 font-mono truncate max-w-[120px]", children: log.debit }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-400 font-mono truncate max-w-[120px]", children: log.credit })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle(log.status)}`, children: log.status }) })
          ] }, log.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Sync Error Reconciliation Panel" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 font-semibold text-xs text-slate-600", children: syncQueue.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 text-center text-slate-400 font-mono", children: "All transactions synced successfully. Error queue empty." }) : syncQueue.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-50/10 rounded-xl border border-red-200/50 space-y-2 text-red-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-mono text-[9px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: e.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Value: ₹",
              (e.val / 1e5).toFixed(1),
              "L"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-foreground font-bold", children: [
              e.type,
              " — ",
              e.cp
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9.5px] text-slate-500 font-normal mt-0.5", children: [
              "Error: ",
              e.error
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => clearSyncQueueItem(e.id, e.cp), className: "h-6 w-full rounded bg-ink hover:bg-ink/90 text-cream text-[9px] font-mono uppercase tracking-wider", children: [
            "Resolve & Sync Ledger: ",
            e.action
          ] })
        ] }, e.id)) })
      ] })
    ] })
  ] });
  const renderReports = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 animate-in fade-in duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "MIS & Compliance Schedules" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 font-semibold text-xs text-slate-600", children: reportSchedules.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/50 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground text-sm font-bold", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] text-slate-400 font-normal", children: [
            "Next scheduled run: ",
            r.nextRun,
            " · Audience: ",
            r.audience
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-mono font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded mr-2", children: r.freq }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-extrabold px-1.5 py-0.2 rounded font-mono ${statusBadgeStyle(r.status)}`, children: r.status })
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4 flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "One-Click PDF Report Generator" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-400", children: "Select Financial Document Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full h-8 border border-border rounded-lg text-xs font-semibold px-2 bg-card text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Executive Monthly MIS P&L Pack" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Receivables aging analysis & overdue checklist" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Quarterly board meeting finance presentation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Monthly GSTR-3B tax data extract sheet" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-normal leading-relaxed", children: "Generates a multi-page styled PDF document pre-populated with live collections ledger values, cash flows projections, and RERA project summaries." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert("Report successfully compiled and dispatched to stakeholders list via Email."), className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all mt-4", children: "Generate & Email Report" })
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
    activeTab === "collections" && renderCollections(),
    activeTab === "demand-notes" && renderDemands(),
    activeTab === "commission" && renderCommissions(),
    activeTab === "pl-monitor" && renderPlMonitor(),
    activeTab === "forecaster" && renderForecaster(),
    activeTab === "tally-sync" && renderTallySync(),
    activeTab === "reports" && renderReports()
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
  FinanceManager as component
};
