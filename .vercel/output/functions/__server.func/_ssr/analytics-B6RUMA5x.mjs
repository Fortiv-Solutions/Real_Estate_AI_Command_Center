import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, C as Card } from "./AppShell-BaoefHhz.mjs";
import { i as Route$2 } from "./router-DmP4UeSu.mjs";
import { m as ChevronLeft, b as ArrowRight, s as Clock, k as Check, A as Activity, a1 as TriangleAlert, e as Building, F as FileText, Y as Sparkles, t as Download, _ as SquareCheckBig, Z as Square } from "../_libs/lucide-react.mjs";
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
const reportDeliveryLog = [{
  id: 1,
  report: "Daily Agent Report",
  recipient: "Team WhatsApp Group",
  channel: "WhatsApp",
  time: "20/01/2025 07:00 PM",
  status: "Delivered"
}, {
  id: 2,
  report: "Executive Brief",
  recipient: "Directors WhatsApp",
  channel: "WhatsApp + Email",
  time: "20/01/2025 07:30 AM",
  status: "Delivered"
}, {
  id: 3,
  report: "Inventory Report",
  recipient: "Rahul Modi (Manager)",
  channel: "WhatsApp",
  time: "18/01/2025 09:00 AM",
  status: "Delivered"
}, {
  id: 4,
  report: "Investor Report (Monthly)",
  recipient: "LP Mailing List (8)",
  channel: "Email (PDF)",
  time: "15/01/2025 10:00 AM",
  status: "Delivered"
}, {
  id: 5,
  report: "Daily Agent Report",
  recipient: "Team WhatsApp Group",
  channel: "WhatsApp",
  time: "19/01/2025 07:00 PM",
  status: "Delivered"
}];
const dataHealthModules = [{
  id: "M1",
  name: "M1 — Lead Generation",
  type: "Lead records, scores",
  sync: "20/01/2025 06:58 PM",
  status: "Live"
}, {
  id: "M4",
  name: "M4 — Sales Pipeline",
  type: "Deal records, stages",
  sync: "20/01/2025 06:55 PM",
  status: "Live"
}, {
  id: "M4.2",
  name: "M4.2 — Visit Scheduler",
  type: "Visit completions",
  sync: "20/01/2025 06:55 PM",
  status: "Live"
}, {
  id: "M1.3",
  name: "M1.3 — Ads Sync",
  type: "Campaign spend + leads",
  sync: "20/01/2025 06:00 PM",
  status: "Live"
}, {
  id: "M9",
  name: "M9 — Construction",
  type: "Milestone updates",
  sync: "19/01/2025 05:00 PM",
  status: "Delayed"
}, {
  id: "M11",
  name: "M11 — Finance",
  type: "Collections, payments",
  sync: "20/01/2025 03:00 PM",
  status: "Live"
}];
const agentScorecards = [{
  agent: "Priya Rana",
  leads: 6,
  callsAtt: 6,
  callsConn: 6,
  visits: 3,
  bookings: 1,
  revenue: 56,
  rank: "🥇 1st",
  isStar: true,
  hasAlert: false
}, {
  agent: "Ankit Shah",
  leads: 5,
  callsAtt: 5,
  callsConn: 4,
  visits: 2,
  bookings: 0,
  revenue: 0,
  rank: "2nd",
  isStar: false,
  hasAlert: false
}, {
  agent: "Meera Patel",
  leads: 4,
  callsAtt: 4,
  callsConn: 3,
  visits: 1,
  bookings: 0,
  revenue: 0,
  rank: "3rd",
  isStar: false,
  hasAlert: false
}, {
  agent: "Kiran Desai",
  leads: 3,
  callsAtt: 3,
  callsConn: 1,
  visits: 0,
  bookings: 0,
  revenue: 0,
  rank: "⚠️ Alert",
  isStar: false,
  hasAlert: true
}];
const forecastPipelineStages = [{
  stage: "Inquiry",
  probability: 5,
  contribution: "Low"
}, {
  stage: "Site Visit Scheduled",
  probability: 10,
  contribution: "Low"
}, {
  stage: "Visited",
  probability: 20,
  contribution: "Moderate"
}, {
  stage: "Negotiation",
  probability: 40,
  contribution: "Significant"
}, {
  stage: "Booking Amount Paid",
  probability: 85,
  contribution: "High"
}, {
  stage: "Agreement Signed",
  probability: 92,
  contribution: "Very High"
}, {
  stage: "Loan Processing",
  probability: 95,
  contribution: "Near certain"
}, {
  stage: "Full Payment",
  probability: 98,
  contribution: "Near certain"
}];
const forecastAccuracyLog = [{
  period: "Dec 2024 (30-day)",
  predicted: 7,
  actual: 6,
  accuracy: "85.7%"
}, {
  period: "Nov 2024 (30-day)",
  predicted: 9,
  actual: 10,
  accuracy: "90.0%"
}, {
  period: "Oct 2024 (30-day)",
  predicted: 14,
  actual: 13,
  accuracy: "92.9%"
}, {
  period: "Q4 2024 (90-day)",
  predicted: 28,
  actual: 26,
  accuracy: "92.9%"
}, {
  period: "Q3 2024 (90-day)",
  predicted: 22,
  actual: 25,
  accuracy: "88.0%"
}];
const demoProjects = [{
  id: "proj-1",
  name: "Fortiv Greenview Heights, Vesu, Surat",
  config: "2BHK/3BHK",
  price: "₹48L–₹85L",
  rera: "P01200023XXX",
  totalUnits: 156,
  sold: 108,
  available: 48,
  towersCount: 2
}, {
  id: "proj-2",
  name: "Fortiv Skyline Residences, Gotri, Vadodara",
  config: "3BHK/4BHK",
  price: "₹90L–₹1.8Cr",
  rera: "Pending",
  totalUnits: 210,
  sold: 86,
  available: 124,
  towersCount: 3
}, {
  id: "proj-3",
  name: "Fortiv Business Park, Althan, Surat",
  config: "Commercial",
  price: "₹1.2Cr–₹4.5Cr",
  rera: "Ready Possession",
  totalUnits: 72,
  sold: 38,
  available: 34,
  towersCount: 1
}];
const inventorySummary = [{
  id: "inv-1",
  project: "Fortiv Greenview Heights",
  config: "2BHK",
  tower: "Tower A, Fl 1–5",
  available: 4,
  velocity: "Normal",
  avgDays: 38,
  action: "Monitor",
  color: "text-amber-500"
}, {
  id: "inv-2",
  project: "Fortiv Greenview Heights",
  config: "2BHK",
  tower: "Tower A, Fl 11–14",
  available: 7,
  velocity: "Fast",
  avgDays: 22,
  action: "—",
  color: "text-emerald-600"
}, {
  id: "inv-3",
  project: "Fortiv Greenview Heights",
  config: "3BHK",
  tower: "Tower B",
  available: 11,
  velocity: "Slow",
  avgDays: 67,
  action: "Scheme active",
  color: "text-red-600"
}, {
  id: "inv-4",
  project: "Fortiv Skyline Residences",
  config: "3BHK",
  tower: "Tower 1",
  available: 18,
  velocity: "Normal",
  avgDays: 44,
  action: "Monitor",
  color: "text-amber-500"
}, {
  id: "inv-5",
  project: "Fortiv Skyline Residences",
  config: "4BHK",
  tower: "Tower 2",
  available: 6,
  velocity: "Stalled",
  avgDays: 94,
  action: "Escalate",
  color: "text-red-600 animate-pulse"
}, {
  id: "inv-6",
  project: "Fortiv Business Park",
  config: "Commercial",
  tower: "Block C",
  available: 9,
  velocity: "Normal",
  avgDays: 52,
  action: "Monitor",
  color: "text-amber-500"
}];
const schemeEffectiveness = [{
  id: 1,
  name: "Free Parking (Feb 2025)",
  project: "Greenview Heights",
  unitType: "2BHK T-A Fl 1–5",
  launchDate: "01/02/2025",
  before: "0.4 units/wk",
  after: "0.8 units/wk",
  uplift: "+100%"
}, {
  id: 2,
  name: "₹50K Stamp Duty Subsidy",
  project: "Greenview Heights",
  unitType: "3BHK T-B",
  launchDate: "15/01/2025",
  before: "0.3 units/wk",
  after: "0.5 units/wk",
  uplift: "+67%"
}, {
  id: 3,
  name: "No Floor Rise (Jan)",
  project: "Skyline Residences",
  unitType: "All",
  launchDate: "01/01/2025",
  before: "0.6 units/wk",
  after: "0.9 units/wk",
  uplift: "+50%"
}];
const mockDistributionLog = [{
  id: 1,
  report: "Monthly Update",
  project: "Greenview Heights",
  period: "Jan 2025",
  generated: "01/02 09:02",
  recipients: 8,
  opened: "7/8 (87.5%)",
  portal: true
}, {
  id: 2,
  report: "Monthly Update",
  project: "Skyline Residences",
  period: "Jan 2025",
  generated: "01/02 09:05",
  recipients: 5,
  opened: "4/5 (80.0%)",
  portal: true
}, {
  id: 3,
  report: "Quarterly — Q4 2024",
  project: "Greenview Heights",
  period: "Oct–Dec 2024",
  generated: "02/01 10:00",
  recipients: 8,
  opened: "8/8 (100%)",
  portal: true
}, {
  id: 4,
  report: "Flash — Possession Notice",
  project: "Business Park",
  period: "—",
  generated: "18/01 11:30",
  recipients: 3,
  opened: "3/3 (100%)",
  portal: true
}];
const channelPerformanceBase = [{
  channel: "Referral",
  spend: 4e4,
  leads: 8,
  score: 76,
  visits: 6,
  bookings: 3,
  cpb: 13333,
  cpl: 5e3,
  cpv: 6667,
  roi: 12.6
}, {
  channel: "WhatsApp Organic",
  spend: 0,
  leads: 14,
  score: 69,
  visits: 9,
  bookings: 2,
  cpb: 0,
  cpl: 0,
  cpv: 0,
  roi: Infinity
}, {
  channel: "Google Ads",
  spend: 12e4,
  leads: 26,
  score: 52,
  visits: 10,
  bookings: 2,
  cpb: 6e4,
  cpl: 4615,
  cpv: 12e3,
  roi: 2.8
}, {
  channel: "Facebook Ads",
  spend: 18e4,
  leads: 47,
  score: 45,
  visits: 14,
  bookings: 2,
  cpb: 9e4,
  cpl: 3830,
  cpv: 12857,
  roi: 1.9
}, {
  channel: "99acres",
  spend: 15e4,
  leads: 28,
  score: 58,
  visits: 8,
  bookings: 1,
  cpb: 15e4,
  cpl: 5357,
  cpv: 18750,
  roi: 1.1
}, {
  channel: "MagicBricks",
  spend: 12e4,
  leads: 19,
  score: 55,
  visits: 5,
  bookings: 1,
  cpb: 12e4,
  cpl: 6316,
  cpv: 24e3,
  roi: 1.3
}, {
  channel: "Instagram Ads",
  spend: 8e4,
  leads: 22,
  score: 43,
  visits: 6,
  bookings: 0,
  cpb: 0,
  cpl: 3636,
  cpv: 13333,
  roi: 0
}, {
  channel: "Housing.com",
  spend: 9e4,
  leads: 11,
  score: 49,
  visits: 3,
  bookings: 0,
  cpb: 0,
  cpl: 8182,
  cpv: 3e4,
  roi: 0
}];
const campaignPerformance = [{
  campaign: "Greenview Heights — Jan 2025",
  platform: "Facebook",
  spend: 11e4,
  leads: 34,
  cpl: 3235,
  visits: 10,
  bookings: 2,
  cpb: 55e3
}, {
  campaign: "Surat 2BHK Google Search",
  platform: "Google",
  spend: 8e4,
  leads: 18,
  cpl: 4444,
  visits: 7,
  bookings: 2,
  cpb: 4e4
}, {
  campaign: "Business Park Commercial",
  platform: "Facebook",
  spend: 7e4,
  leads: 13,
  cpl: 5385,
  visits: 4,
  bookings: 0,
  cpb: 0
}, {
  campaign: "Vesu Locality Awareness",
  platform: "Instagram",
  spend: 8e4,
  leads: 22,
  cpl: 3636,
  visits: 6,
  bookings: 0,
  cpb: 0
}];
const historicalBriefsLog = [{
  week: "W03 2025",
  period: "13–19 Jan",
  delivered: "20 Jan 07:30",
  wa: "Opened",
  email: "3/3 Opened",
  actions: "3 of 5"
}, {
  week: "W02 2025",
  period: "06–12 Jan",
  delivered: "13 Jan 07:30",
  wa: "Opened",
  email: "3/3 Opened",
  actions: "4 of 5"
}, {
  week: "W01 2025",
  period: "30 Dec–05 Jan",
  delivered: "06 Jan 07:30",
  wa: "Opened",
  email: "2/3 Opened",
  actions: "2 of 5"
}, {
  week: "W52 2024",
  period: "23–29 Dec",
  delivered: "30 Dec 07:30",
  wa: "Opened",
  email: "3/3 Opened",
  actions: "5 of 5"
}];
const formatInr = (value, type = "Rs") => {
  if (type === "Cr") return `₹${value.toFixed(2)} Cr`;
  if (type === "L") return `₹${value} L`;
  return `₹${value.toLocaleString("en-IN")}`;
};
function AnalyticsManager() {
  const {
    tab
  } = Route$2.useSearch();
  const navigate = useNavigate({
    from: Route$2.fullPath
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
    desc: "Helicopter view of reports logs, data health indicators, and core operational stats.",
    stats: "47 reports sent",
    status: "Active"
  }, {
    id: "daily-report",
    name: "Daily Performance Report",
    desc: "Daily activity scorecards compiled automatically for the team and management at 7 PM.",
    stats: "77.8% Contact Rate",
    status: "Scheduled"
  }, {
    id: "forecast",
    name: "Sales Forecast Dashboard",
    desc: "ML forecasting engine simulating 30/60/90-day booking runs under macro scenario settings.",
    stats: "84.0% Model Acc.",
    status: "Active"
  }, {
    id: "inventory",
    name: "Inventory Velocity Tracker",
    desc: "Real-time block velocity heatmaps, pricing triggers, and slow-mover tracking systems.",
    stats: "116 available units",
    status: "Active"
  }, {
    id: "investor-report",
    name: "Investor & LP Report Generator",
    desc: "One-click compiled investor dossiers with automated text formatting and portal sync.",
    stats: "Monthly run ready",
    status: "Active"
  }, {
    id: "marketing-roi",
    name: "Marketing ROI Dashboard",
    desc: "Blended cost-per-booking tracking with multi-touch attribution and spend calculators.",
    stats: "₹7.7L spend tracked",
    status: "Active"
  }, {
    id: "executive-brief",
    name: "Executive Weekly Briefing",
    desc: "AI compiled executive briefing PDFs and WhatsApp summaries generated every Monday.",
    stats: "Next brief W04",
    status: "Scheduled"
  }];
  const getPageHeader = () => {
    switch (activeTab) {
      case "menu":
        return {
          title: "Analytics, Forecasting & Reporting",
          subtitle: "Real-time intelligence that turns operational data into decisions — automated reports, AI forecasts, and performance visibility without spreadsheets."
        };
      case "overview":
        return {
          title: "Analytics Dashboard Overview",
          subtitle: "Live system health monitoring, recent reports dispatched, and quick access."
        };
      case "daily-report":
        return {
          title: "Daily Performance Report",
          subtitle: "Automated end-of-day team activity summary. WhatsApp and Email dispatches trigger at 7:00 PM."
        };
      case "forecast":
        return {
          title: "Sales Forecast Agent",
          subtitle: "90-day booking forecasts utilizing historical pricing records, pipeline weightings, and seasonal models."
        };
      case "inventory":
        return {
          title: "Inventory Velocity Tracker",
          subtitle: "Tower-level absorption heatmap, price sensitivity recommendations, and orphan assignment filters."
        };
      case "investor-report":
        return {
          title: "Investor & LP Report Generator",
          subtitle: "Multi-page branded investor briefings generated instantly from active operations data."
        };
      case "marketing-roi":
        return {
          title: "Marketing ROI Dashboard",
          subtitle: "Portals and social media spend vs revenue attribution logs, cost-per-booking ratios, and spend projections."
        };
      case "executive-brief":
        return {
          title: "Executive Weekly Briefing",
          subtitle: "Leadership briefing pack compiled from M1-M11 operational variables for Monday mornings."
        };
      default:
        return {
          title: "Analytics, Forecasting & Reporting",
          subtitle: "Real-time intelligence & forecasting command center."
        };
    }
  };
  const headerInfo = getPageHeader();
  const dynamicTitle = activeTab === "menu" ? headerInfo.title : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("menu"), className: "group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95 mr-0.5", "aria-label": "Back to analytics menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors", onClick: () => setActiveTab("menu"), children: headerInfo.title })
  ] });
  const renderDashboardOverview = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Reports Delivered (Month)", value: "47", desc: "Total dispatches", color: "text-blue-700" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Forecast Accuracy", value: "84%", desc: "Trailing 30-day actuals", color: "text-emerald-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Channels Tracked", value: "10", desc: "Ad platforms + portals", color: "text-slate-800" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Forecasted Revenue (30D)", value: "₹1.84 Cr", desc: "Weighted projections", color: "text-emerald-600" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4 border-b border-border pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-primary" }),
            " Automated Report Delivery Log (7 Days)"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none h-[280px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Report" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Delivered To" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Channel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Status" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium text-foreground", children: reportDeliveryLog.map((log) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-bold", children: log.report }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-slate-500 font-semibold", children: log.recipient }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono text-xs", children: log.channel }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono text-slate-400", children: log.time }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-mono", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }),
                " ",
                log.status
              ] }) })
            ] }, log.id)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4 border-b border-border pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5 text-emerald-600 animate-pulse" }),
            " Data Source Health Panel"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto h-[280px] space-y-2 pr-1 scrollbar-none", children: dataHealthModules.map((mod) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl border border-border/60 bg-background flex items-center justify-between text-xs transition-colors hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: mod.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-semibold", children: mod.type })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 text-xs font-extrabold font-mono px-2 py-0.5 rounded ${mod.status === "Live" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-amber-50 text-amber-600 border border-amber-100"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1 w-1 rounded-full ${mod.status === "Live" ? "bg-emerald-500" : "bg-amber-500 animate-pulse"}` }),
                mod.status
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono text-slate-400 mt-1", children: [
                "Sync: ",
                mod.sync.split(" ")[1]
              ] })
            ] })
          ] }, mod.id)) })
        ] })
      ] })
    ] });
  };
  const [selectedAgentMsg, setSelectedAgentMsg] = reactExports.useState(null);
  const [selectedAgentAlert, setSelectedAgentAlert] = reactExports.useState(null);
  const teamSummary = {
    leads: 18,
    leadsDelta: "+3",
    contacts: 14,
    contactRate: "77.8%",
    visits: 6,
    visitsDelta: "+2",
    bookings: 1,
    bookingsValue: "₹56L"
  };
  const renderDailyReport = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-4 border border-border bg-card p-4 rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center border-r border-border last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Leads Received" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base font-bold text-foreground font-mono mt-1", children: [
            teamSummary.leads,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500 text-xs", children: teamSummary.leadsDelta })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:border-r border-border last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Leads Contacted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-foreground font-mono mt-1", children: teamSummary.contacts })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:border-r border-border last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Contact Rate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-emerald-600 font-mono mt-1", children: teamSummary.contactRate })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:border-r border-border last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Site Visits Done" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base font-bold text-foreground font-mono mt-1", children: [
            teamSummary.visits,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500 text-xs", children: teamSummary.visitsDelta })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Daily Bookings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base font-bold text-emerald-600 font-mono mt-1", children: [
            teamSummary.bookings,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold", children: [
              "(",
              teamSummary.bookingsValue,
              ")"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-8 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Sales Agent Scorecards" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-400 font-mono", children: "Last updated today at 6:45 PM" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: agentScorecards.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `p-4 border transition-all duration-300 flex flex-col justify-between h-48 bg-card ${item.isStar ? "border-amber-400/80 shadow-[0_4px_16px_rgba(232,168,56,0.06)]" : item.hasAlert ? "border-red-600/60" : "border-border/60 hover:border-slate-400"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm text-foreground font-display", children: item.agent }),
                  item.isStar && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-amber-50 text-amber-700 font-extrabold px-1.5 py-0.5 rounded-full border border-amber-100 flex items-center gap-0.5", children: "⭐ STAR" }),
                  item.hasAlert && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-red-50 text-red-600 font-extrabold px-1.5 py-0.5 rounded-full border border-red-100 flex items-center gap-0.5", children: "⚠️ ALERT" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-mono font-bold px-2 py-0.5 rounded ${item.isStar ? "bg-amber-100 text-amber-800" : "bg-secondary text-slate-600"}`, children: item.rank })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-xs font-mono py-1 border-y border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase font-sans font-bold", children: "Leads" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground mt-0.5", children: item.leads })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase font-sans font-bold", children: "Calls (C/A)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-foreground mt-0.5", children: [
                    item.callsConn,
                    "/",
                    item.callsAtt
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase font-sans font-bold", children: "Visits" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground mt-0.5", children: item.visits })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase", children: "Revenue Generated" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono font-bold text-foreground", children: item.revenue > 0 ? formatInr(item.revenue, "L") : "—" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedAgentMsg(item.agent), className: "h-6 px-2 rounded bg-secondary hover:bg-ink hover:text-cream text-xs font-bold transition-all border border-border/50 uppercase tracking-widest", children: "Preview WA" }),
                item.hasAlert && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedAgentAlert(item.agent), className: "h-6 px-2 rounded bg-red-50 hover:bg-red-600 hover:text-white text-red-600 text-xs font-bold transition-all border border-red-200 uppercase tracking-widest animate-pulse", children: "Alert Detail" })
              ] })
            ] })
          ] }, item.agent)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 border border-border bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-500 font-display mb-3 border-b border-border pb-2", children: "Team Funnel Conversion Trend (7 Days)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3.5", children: [{
              label: "Leads Sourced",
              base: [12, 14, 18, 11, 15, 13, 18],
              color: "#2E86AB",
              current: 18
            }, {
              label: "Site Visits",
              base: [3, 4, 6, 2, 5, 4, 6],
              color: "#0E86E9",
              current: 6
            }, {
              label: "Bookings",
              base: [0, 1, 0, 1, 0, 0, 1],
              color: "#1D9E75",
              current: 1
            }].map((spark) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: spark.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-mono text-slate-400 font-bold", children: [
                  spark.current,
                  " today"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full", viewBox: "0 0 100 30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { fill: "none", stroke: spark.color, strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", points: spark.base.map((val, idx) => `${idx * 16 + 2},${28 - val * 1.3}`).join(" ") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "98", cy: 28 - spark.base[spark.base.length - 1] * 1.3, r: "3", fill: spark.color })
              ] }) })
            ] }, spark.label)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 border border-border bg-card space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-500 font-display border-b border-border pb-2", children: "Report Transmission Logs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-slate-500 border-b border-border pb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WhatsApp Broadcast Group" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-mono text-xs font-extrabold flex items-center gap-1", children: "✅ Sent 7:00 PM" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-slate-500 border-b border-border pb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Management Email Queue" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-mono text-xs font-extrabold flex items-center gap-1", children: "✅ Sent 7:01 PM" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-slate-500 pb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "PDF Document Compiled" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-mono text-xs font-extrabold flex items-center gap-1", children: "✅ Saved (4.2MB)" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      selectedAgentMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-md p-5 border border-border bg-card shadow-2xl space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: [
            "WhatsApp Report Preview · ",
            selectedAgentMsg
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedAgentMsg(null), className: "text-xs font-bold text-slate-400 hover:text-slate-600", children: "Close" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3.5 bg-secondary/35 rounded-xl border border-border/60 font-mono text-xs text-foreground leading-relaxed whitespace-pre-wrap", children: `📊 *Fortiv Solutions — Daily Performance Report*
📅 Monday, 20 January 2025 | 7:00 PM

━━━━━━━━━━━━━━━━━━━
📋 *TEAM SUMMARY*
━━━━━━━━━━━━━━━━━━━
Leads Received:      18  (▲ +3 vs yesterday)
Leads Contacted:     14  (77.8% contact rate)
Site Visits:          6  (▲ +2 vs yesterday)
Follow-ups Sent:     34
Bookings:             1  ✅ ₹56 Lakhs

━━━━━━━━━━━━━━━━━━━
👤 *AGENT SCORECARDS*
━━━━━━━━━━━━━━━━━━━
🥇 *Priya Rana*
   Leads: 6 | Calls: 6/6 | Visits: 3 | Booking: 1 (₹56L) ⭐

*Ankit Shah*
   Leads: 5 | Calls: 4/5 | Visits: 2 | Booking: 0

*Meera Patel*
   Leads: 4 | Calls: 3/4 | Visits: 1 | Booking: 0

*Kiran Desai*
   Leads: 3 | Calls: 1/3 | Visits: 0 | Booking: 0

━━━━━━━━━━━━━━━━━━━
🌟 *Today's Star: Priya Rana*
   3 visits · 1 booking · ₹56L revenue
━━━━━━━━━━━━━━━━━━━

Powered by Fortiv AI Command Center` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400 font-semibold text-center uppercase tracking-widest", children: "Dispatched via WhatsApp Business Cloud API" })
      ] }) }),
      selectedAgentAlert && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-md p-5 border border-border bg-card shadow-2xl space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-red-600/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-bold text-xs uppercase text-red-600 tracking-wider font-display flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
            " Manager Alert Detail"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedAgentAlert(null), className: "text-xs font-bold text-slate-400 hover:text-slate-600", children: "Close" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3.5 bg-red-50/40 rounded-xl border border-red-200 font-mono text-xs text-red-600 leading-relaxed whitespace-pre-wrap", children: `⚠️ *Manager Alert — 20 January 2025*

Kiran Desai contacted only 1 of 3 assigned leads today.
Call connect rate: 33% (team avg: 78%)
Visits completed: 0 of 1 scheduled.

Recommend: Check in before tomorrow morning.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            alert("WhatsApp notification dispatched to Kiran Desai: 'Please update your call logs for today.'");
            setSelectedAgentAlert(null);
          }, className: "flex-1 h-8 rounded bg-ink hover:bg-ink/90 text-cream text-xs font-bold uppercase tracking-widest", children: "Nudge Agent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedAgentAlert(null), className: "h-8 px-4 rounded border border-border hover:bg-secondary text-slate-500 text-xs font-bold uppercase tracking-widest", children: "Dismiss Alert" })
        ] })
      ] }) })
    ] });
  };
  const [agentsModifier, setAgentsModifier] = reactExports.useState(0);
  const [diwaliScheme, setDiwaliScheme] = reactExports.useState(false);
  const [fbSpendModifier, setFbSpendModifier] = reactExports.useState(0);
  const [reraDelay, setReraDelay] = reactExports.useState(false);
  const [rateUplift, setRateUplift] = reactExports.useState(false);
  const forecastMetrics = reactExports.useMemo(() => {
    let modifier = 0;
    modifier += agentsModifier * 0.09;
    if (diwaliScheme) modifier += 0.28;
    modifier += fbSpendModifier * 0.12;
    if (reraDelay) modifier -= 0.22;
    if (rateUplift) modifier -= 0.08;
    const base30Val = 6;
    const base60Val = 13;
    const base90Val = 21;
    const b30 = Math.max(1, Math.round(base30Val * (1 + modifier)));
    const b60 = Math.max(2, Math.round(base60Val * (1 + modifier)));
    const b90 = Math.max(3, Math.round(base90Val * (1 + modifier)));
    const base30Rev = 3.8;
    const base60Rev = 8.2;
    const base90Rev = 13.1;
    const marginMod = diwaliScheme ? 0.97 : 1;
    const r30 = Math.max(0.5, base30Rev * (1 + modifier) * marginMod);
    const r60 = Math.max(1, base60Rev * (1 + modifier) * marginMod);
    const r90 = Math.max(2, base90Rev * (1 + modifier) * marginMod);
    return {
      b30,
      b60,
      b90,
      r30,
      r60,
      r90,
      low30: r30 * 0.82,
      high30: r30 * 1.21,
      low60: r60 * 0.83,
      high60: r60 * 1.17,
      low90: r90 * 0.82,
      high90: r90 * 1.18,
      modifierPercent: Math.round(modifier * 100)
    };
  }, [agentsModifier, diwaliScheme, fbSpendModifier, reraDelay, rateUplift]);
  const hasShortfallRisk = forecastMetrics.r30 < 3;
  const renderForecast = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      hasShortfallRisk && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-600/10 border border-red-600/30 rounded-xl text-red-600 flex items-center justify-between text-xs font-semibold animate-bounce", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Shortfall Risk Alert:" }),
          " 30-day forecasted revenue (",
          formatInr(forecastMetrics.r30, "Cr"),
          ") has fallen below the targets threshold."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold font-mono", children: "CRITICAL STAGE" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "30-day Revenue Forecast", value: formatInr(forecastMetrics.r30, "Cr"), desc: `${forecastMetrics.b30} bookings`, color: "text-slate-800" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "60-day Revenue Forecast", value: formatInr(forecastMetrics.r60, "Cr"), desc: `${forecastMetrics.b60} bookings`, color: "text-slate-800" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "90-day Revenue Forecast", value: formatInr(forecastMetrics.r90, "Cr"), desc: `${forecastMetrics.b90} bookings`, color: "text-slate-800" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "ML Forecast Accuracy", value: "84%", desc: "Trailing 6M Average", color: "text-emerald-600" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4 border-b border-border pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Forecasted Projections with Confidence Bands" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-xs font-bold uppercase tracking-widest text-slate-400 font-display", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded bg-sky-100 border border-sky-300" }),
                " Range"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded bg-primary" }),
                " Forecast Value"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-x-auto scrollbar-none py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "min-w-[450px] w-full h-[220px]", viewBox: "0 0 500 220", children: [
            [0, 5, 10, 15, 20].map((grid, idx) => {
              const y = 170 - grid * 8;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50", y1: y, x2: "480", y2: y, stroke: "rgba(148, 163, 184, 0.1)", strokeWidth: "1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "35", y: y + 3, textAnchor: "end", className: "text-[10px] font-mono fill-slate-400 font-bold", children: [
                  grid,
                  " Cr"
                ] })
              ] }, idx);
            }),
            [{
              label: "Feb 2025 (30D)",
              val: forecastMetrics.r30,
              low: forecastMetrics.low30,
              high: forecastMetrics.high30,
              fill: "#2E86AB"
            }, {
              label: "Mar 2025 (60D)",
              val: forecastMetrics.r60,
              low: forecastMetrics.low60,
              high: forecastMetrics.high60,
              fill: "#0E86E9"
            }, {
              label: "Apr 2025 (90D)",
              val: forecastMetrics.r90,
              low: forecastMetrics.low90,
              high: forecastMetrics.high90,
              fill: "#1A3C5E"
            }].map((bar, i) => {
              const x = 110 + i * 130;
              const barW = 36;
              const valY = 170 - bar.val * 8;
              const lowY = 170 - bar.low * 8;
              const highY = 170 - bar.high * 8;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "group/bar", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: x - 6, y: highY, width: barW + 12, height: Math.max(4, lowY - highY), fill: "rgba(14, 134, 233, 0.08)", stroke: "rgba(14, 134, 233, 0.2)", strokeDasharray: "2 2", rx: "4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x, y: valY, width: barW, height: Math.max(4, 170 - valY), fill: bar.fill, rx: "3", className: "transition-all duration-500 ease-out" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: x - 4, y1: highY, x2: x + barW + 4, y2: highY, stroke: "#0E86E9", strokeWidth: "1.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: x - 4, y1: lowY, x2: x + barW + 4, y2: lowY, stroke: "#0E86E9", strokeWidth: "1.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: x + barW / 2, y1: highY, x2: x + barW / 2, y2: lowY, stroke: "#0E86E9", strokeWidth: "1", strokeDasharray: "2 2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: x + barW / 2, y: "190", textAnchor: "middle", className: "text-xs font-bold fill-foreground", children: bar.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: x + barW / 2, y: valY - 12, textAnchor: "middle", className: "text-xs font-mono font-bold fill-primary opacity-0 group-hover/bar:opacity-100 transition-opacity", children: [
                  "₹",
                  bar.val.toFixed(2),
                  "Cr"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: x + barW / 2, y: highY - 4, textAnchor: "middle", className: "text-[7.5px] font-mono fill-cyan-700 opacity-0 group-hover/bar:opacity-100 transition-opacity font-bold", children: [
                  "H: ₹",
                  bar.high.toFixed(2),
                  "Cr"
                ] })
              ] }, bar.label);
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50", y1: "170", x2: "480", y2: "170", stroke: "#1e293b", strokeWidth: "1.5" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border pb-2", children: "Scenario Modelling Simulation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 font-semibold leading-relaxed mt-2", children: "Toggle macroeconomic properties and sales variables to test forecast impacts in real time." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Add Active Sales Agents" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-primary font-bold", children: [
                  "+",
                  agentsModifier,
                  " Agents (",
                  Math.round(agentsModifier * 9),
                  "% uplift)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "0", max: "5", value: agentsModifier, onChange: (e) => setAgentsModifier(parseInt(e.target.value)), className: "w-full accent-primary bg-secondary h-1.5 rounded-lg appearance-none cursor-pointer" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Increase FB/IG Ads Budget" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-primary font-bold", children: [
                  "+₹",
                  fbSpendModifier,
                  "L/month (",
                  fbSpendModifier * 12,
                  "% uplift)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "0", max: "2", step: "0.5", value: fbSpendModifier, onChange: (e) => setFbSpendModifier(parseFloat(e.target.value)), className: "w-full accent-primary bg-secondary h-1.5 rounded-lg appearance-none cursor-pointer" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-1 border-t border-border mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-600 font-bold", children: "Diwali 3% Discount Scheme" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400 font-semibold", children: "Uplifts volume +28%, margin drops -3%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: diwaliScheme, onChange: (e) => setDiwaliScheme(e.target.checked), className: "h-4 w-4 accent-primary cursor-pointer" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-1 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-600 font-bold", children: "Project RERA Extension Delay" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400 font-semibold", children: "Deflates quarterly bookings by -22%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: reraDelay, onChange: (e) => setReraDelay(e.target.checked), className: "h-4 w-4 accent-primary cursor-pointer" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-1 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-600 font-bold", children: "SBI Home Loan Interest Rate +50bps" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400 font-semibold", children: "Contracts price-sensitive buyers (-8% impact)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: rateUplift, onChange: (e) => setRateUplift(e.target.checked), className: "h-4 w-4 accent-primary cursor-pointer" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 border-t border-border text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono font-extrabold text-slate-400 uppercase tracking-widest", children: [
            "Net Forecast Adjustment: ",
            forecastMetrics.modifierPercent >= 0 ? `+${forecastMetrics.modifierPercent}` : forecastMetrics.modifierPercent,
            "%"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-6 p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display mb-3 border-b border-border pb-2", children: "Pipeline Stage Weightings & Forecast Contributions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none max-h-[220px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Pipeline Stage" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Conversion Probability" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-mono", children: "Weight contribution" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium text-slate-600", children: forecastPipelineStages.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-foreground font-bold", children: row.stage }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2 font-mono text-foreground", children: [
                row.probability,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono", children: row.contribution })
            ] }, row.stage)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-6 p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display mb-3 border-b border-border pb-2", children: "Model Historical Accuracy Log" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none max-h-[220px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Validation Period" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Predicted Bookings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Actual Bookings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-mono", children: "Accuracy Rate" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium text-slate-600", children: forecastAccuracyLog.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-foreground font-bold", children: row.period }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono text-foreground", children: row.predicted }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono text-foreground", children: row.actual }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono text-emerald-600 font-extrabold", children: row.accuracy })
            ] }, row.period)) })
          ] }) })
        ] })
      ] })
    ] });
  };
  const [selectedProject, setSelectedProject] = reactExports.useState("proj-1");
  const [selectedUnit, setSelectedUnit] = reactExports.useState(null);
  const [orphanReassigned, setOrphanReassigned] = reactExports.useState(false);
  const [activeSchemes, setActiveSchemes] = reactExports.useState([]);
  const handleCellClick = (unitId) => {
    setSelectedUnit(unitId);
  };
  const heatmapGrid = reactExports.useMemo(() => {
    const arr = [];
    const seed = selectedProject === "proj-1" ? 11 : selectedProject === "proj-2" ? 23 : 37;
    for (let f = 14; f >= 1; f--) {
      for (let u = 1; u <= 4; u++) {
        const unitNumber = f * 100 + u;
        const hash = (f * 7 + u * 13 + seed) % 100;
        let status = "sold";
        if (hash < 12) status = "negotiation";
        else if (hash < 24) status = "available";
        else if (hash < 32) status = "held";
        arr.push({
          id: `unit-${unitNumber}`,
          num: unitNumber,
          floor: f,
          col: u === 1 ? "A" : u === 2 ? "B" : u === 3 ? "C" : "D",
          status,
          config: u % 2 === 0 ? "3BHK" : "2BHK",
          daysOnMarket: hash * 2 + 10,
          askingPrice: 4700 + hash * 10,
          pitching: status === "negotiation" ? "Priya Rana" : status === "available" && unitNumber === 604 && !orphanReassigned ? "Ankit Shah (Orphan)" : "Unassigned"
        });
      }
    }
    return arr;
  }, [selectedProject, orphanReassigned]);
  const heatmapStats = reactExports.useMemo(() => {
    const stats = {
      sold: 0,
      negotiation: 0,
      available: 0,
      held: 0
    };
    heatmapGrid.forEach((u) => stats[u.status]++);
    return stats;
  }, [heatmapGrid]);
  const renderInventory = () => {
    const projectDetails = demoProjects.find((p) => p.id === selectedProject) || demoProjects[0];
    const activeUnitDetail = heatmapGrid.find((u) => u.id === selectedUnit);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Target Project:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: selectedProject, onChange: (e) => {
            setSelectedProject(e.target.value);
            setSelectedUnit(null);
          }, className: "h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs font-bold", children: demoProjects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.id, children: p.name.split(",")[0] }, p.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-muted-foreground font-mono", children: [
          "RERA Ref: ",
          projectDetails.rera,
          " | Available: ",
          projectDetails.available,
          " / ",
          projectDetails.totalUnits
        ] })
      ] }),
      !orphanReassigned && selectedProject === "proj-1" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-50 border border-red-200 rounded-xl text-foreground flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs leading-relaxed font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-600 font-bold flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 animate-pulse" }),
            " Agent Orphan Alert — Ankit Shah Reassigned"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs font-medium", children: "Unit 604 (2BHK, prospect: Amit Desai, score: 61) is currently unassigned in the Vesu territory." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setOrphanReassigned(true);
          alert("Orphaned unit successfully reassigned to Priya Rana.");
        }, className: "h-7 px-3 bg-ink hover:bg-ink/90 text-cream text-xs font-bold uppercase tracking-widest rounded transition-all shrink-0 active:scale-95", children: "Reassign to Priya Rana" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card min-h-[460px] flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border pb-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-xs text-foreground font-display flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "h-4 w-4 text-primary" }),
                " Tower Absorption Heatmap (Click unit cells)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5 text-xs font-bold font-mono", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded bg-emerald-600" }),
                  " Sold (",
                  heatmapStats.sold,
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded bg-amber-500 animate-pulse" }),
                  " Negotiation (",
                  heatmapStats.negotiation,
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded bg-red-600" }),
                  " Available (",
                  heatmapStats.available,
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded bg-slate-400" }),
                  " Held (",
                  heatmapStats.held,
                  ")"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1.5 max-h-[350px] overflow-y-auto pr-1 scrollbar-none", children: heatmapGrid.map((unit) => {
              const isSelected = selectedUnit === unit.id;
              const bg = unit.status === "sold" ? "bg-emerald-600 hover:bg-emerald-700 text-white" : unit.status === "negotiation" ? "bg-amber-500 text-white animate-pulse" : unit.status === "held" ? "bg-slate-400 text-white" : "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100/50";
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => handleCellClick(unit.id), className: `h-9 rounded-lg flex flex-col justify-center items-center cursor-pointer transition-all duration-300 text-xs font-mono font-bold select-none ${bg} ${isSelected ? "ring-2 ring-primary ring-offset-2 scale-95" : ""}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: unit.num }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[7.5px] uppercase font-sans font-semibold opacity-80", children: [
                  unit.col,
                  " · ",
                  unit.config
                ] })
              ] }, unit.id);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono text-slate-400 text-center border-t border-border pt-3", children: "*Tower grid represents G+14 structural layout snapshot. Delayed updates sync every 24 hours." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 border border-border bg-card min-h-[220px] flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-500 font-display border-b border-border pb-2 mb-3", children: "Unit Properties Panel" }),
              activeUnitDetail ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 text-xs font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Unit Number" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground font-bold", children: [
                    activeUnitDetail.num,
                    " (Floor ",
                    activeUnitDetail.floor,
                    ", Col ",
                    activeUnitDetail.col,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Configuration" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
                    activeUnitDetail.config,
                    " Layout"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Average Days Listed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground font-bold", children: [
                    activeUnitDetail.daysOnMarket,
                    " days"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Active Pitching Agent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold", children: activeUnitDetail.pitching })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Asking Price Range" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground font-bold", children: [
                    "₹",
                    activeUnitDetail.askingPrice,
                    "/sq ft"
                  ] })
                ] }),
                activeUnitDetail.daysOnMarket >= 45 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 bg-amber-50 border border-amber-200 rounded-lg text-slate-700 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold flex items-center gap-1 text-amber-800", children: "💡 Price Sensitivity Warning" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 font-medium", children: [
                    "Unsold for ",
                    activeUnitDetail.daysOnMarket,
                    " days. Nearby sold comps: ₹4,820/sq ft. Recommended pricing adjustment: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-mono text-red-600", children: "₹4,750–₹4,900/sq ft" }),
                    "."
                  ] })
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 text-slate-400 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "h-8 w-8 mx-auto stroke-[1.5]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium max-w-[200px] mx-auto", children: "Select any unit grid box to inspect its sales metrics and velocity alerts." })
              ] })
            ] }),
            activeUnitDetail && activeUnitDetail.status === "available" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Launched 'Free Parking' promo code scheme on Unit ${activeUnitDetail.num}.`), className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream text-xs font-bold uppercase tracking-widest rounded-lg transition-all mt-4", children: "Apply Incentive Scheme" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 border border-border bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-500 font-display border-b border-border pb-2 mb-3", children: "Incentive Schemes Effectiveness" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none max-h-[160px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 py-1.5", children: "Scheme" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 py-1.5 font-mono", children: "Uplift" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 py-1.5 font-mono", children: "Sales delta" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium text-slate-600", children: schemeEffectiveness.map((sch) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 text-foreground font-bold", children: sch.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-2 font-mono text-emerald-600 font-extrabold", children: sch.uplift }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-2 py-2 font-mono", children: [
                  sch.before,
                  " → ",
                  sch.after
                ] })
              ] }, sch.id)) })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display mb-3 border-b border-border pb-2", children: "Average Days on Market by Configuration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-2 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full max-w-[340px] h-[130px]", viewBox: "0 0 300 130", children: [
            [{
              label: "1BHK Studio",
              days: 28,
              max: 80,
              fill: "#1D9E75"
            }, {
              label: "2BHK Family",
              days: 38,
              max: 80,
              fill: "#2E86AB"
            }, {
              label: "3BHK Premium",
              days: 67,
              max: 80,
              fill: "#D85A30"
            }].map((bar, i) => {
              const y = 15 + i * 36;
              const barL = bar.days / bar.max * 160;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "75", y: y + 11, textAnchor: "end", className: "text-xs font-bold fill-foreground", children: bar.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "85", y, width: "160", height: "15", fill: "rgba(148, 163, 184, 0.12)", rx: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "85", y, width: barL, height: "15", fill: bar.fill, rx: "2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: 85 + barL + 8, y: y + 11, className: "text-xs font-mono font-extrabold fill-slate-700", children: [
                  bar.days,
                  "d"
                ] })
              ] }, bar.label);
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "85", y1: "10", x2: "85", y2: "115", stroke: "#1e293b", strokeWidth: "1" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display mb-3 border-b border-border pb-2", children: "Slow-Moving Inventory Warnings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none max-h-[160px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Tower / Config" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-mono", children: "Available" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Avg Days" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Velocity Class" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Recommended Action" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium text-slate-600", children: inventorySummary.map((inv) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2 text-foreground font-bold", children: [
                inv.project.split(" ")[1],
                " ",
                inv.tower,
                " (",
                inv.config,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2 font-mono text-foreground", children: [
                inv.available,
                " units"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2 font-mono text-foreground", children: [
                inv.avgDays,
                "d"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: inv.color, children: [
                "● ",
                inv.velocity
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono font-bold text-primary", children: inv.action })
            ] }, inv.id)) })
          ] }) })
        ] })
      ] })
    ] });
  };
  const [reportProject, setReportProject] = reactExports.useState("proj-1");
  const [reportType, setReportType] = reactExports.useState("Monthly Update");
  const [reportPeriod, setReportPeriod] = reactExports.useState("January 2025");
  const [reportTemplate, setReportTemplate] = reactExports.useState("Seed Investor / Individual");
  const [generationProgress, setGenerationProgress] = reactExports.useState(-1);
  const [generationStep, setGenerationStep] = reactExports.useState("");
  const [activePdfTab, setActivePdfTab] = reactExports.useState("cover");
  const [autoRelease, setAutoRelease] = reactExports.useState(false);
  const startPdfGeneration = () => {
    setGenerationProgress(0);
    setGenerationStep("PULLING LIVE OPERATIONAL VALUES FROM M4 AND M11...");
  };
  reactExports.useEffect(() => {
    if (generationProgress === -1) return;
    if (generationProgress >= 100) {
      setTimeout(() => {
        setGenerationProgress(101);
      }, 500);
      return;
    }
    const interval = setTimeout(() => {
      setGenerationProgress((prev) => {
        const next = prev + 10;
        if (next === 30) setGenerationStep("AI COMPILING EXECUTIVE SUMMARIES AND EXPLOITS...");
        if (next === 60) setGenerationStep("MERGING TOWERS VEOCITY HEATMAPS AND FINANCIAL MARGINS...");
        if (next === 90) setGenerationStep("TEMPLATE RENDER ENGINE EXPORTING BRANDED PDF FILE...");
        return next;
      });
    }, 250);
    return () => clearTimeout(interval);
  }, [generationProgress]);
  const renderInvestorReport = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Reports Generated (Q1)", value: "4 reports", desc: "Automatic dispatches", color: "text-blue-700" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Next Scheduled Run", value: "01/03 09:00", desc: "Monthly recurring", color: "text-slate-800" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Active Distribution Pool", value: "24 LPs", desc: "Syncing portals", color: "text-slate-800" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "LP Email Open Rate", value: "87.5%", desc: "Trailing 3 runs", color: "text-emerald-600" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card flex flex-col justify-between min-h-[460px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border pb-2", children: "Dossier Compilation Settings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 font-semibold leading-relaxed mt-2", children: "Select parameters to extract real-time pipeline records and compile investor documents." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 text-xs font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500 block", children: "Target Project" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: reportProject, onChange: (e) => setReportProject(e.target.value), className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs font-bold", children: demoProjects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.id, children: p.name.split(",")[0] }, p.id)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500 block", children: "Report Frequency Style" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: reportType, onChange: (e) => setReportType(e.target.value), className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs font-bold", children: ["Monthly Update", "Quarterly Comprehensive", "Milestone Flash Report", "Ad-hoc Report"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500 block", children: "Reporting Period" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: reportPeriod, onChange: (e) => setReportPeriod(e.target.value), className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs font-bold", children: ["January 2025", "Q1 2025", "February 2025", "FY 2024-25"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p, children: p }, p)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-slate-500 block", children: "Investor Tier Template" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: reportTemplate, onChange: (e) => setReportTemplate(e.target.value), className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs font-bold", children: ["Seed Investor / Individual", "Institutional / LP", "Equity Partner"].map((tem) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: tem, children: tem }, tem)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-2 border-t border-border mt-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-600 font-bold", children: "Auto-Release to LP Portals" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400 font-semibold", children: "Distribute instantly upon compile, skipping approvals" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: autoRelease, onChange: (e) => setAutoRelease(e.target.checked), className: "h-4 w-4 accent-primary cursor-pointer" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: startPdfGeneration, disabled: generationProgress >= 0 && generationProgress <= 100, className: "w-full h-9 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all mt-4 disabled:opacity-50 active:scale-95 flex items-center justify-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }),
            " ",
            generationProgress >= 0 && generationProgress <= 100 ? "Compiling..." : "Generate Investor Report"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card min-h-[460px] flex flex-col justify-center relative", children: [
          generationProgress === -1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-12 w-12 text-slate-300 mx-auto animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm font-bold text-foreground", children: "PDF Compilation Ready" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-xs mx-auto font-medium", children: "Configure the settings on the left pane and compile to view the simulated investor PDF reader dashboard." })
          ] }),
          generationProgress >= 0 && generationProgress <= 100 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8 space-y-4 animate-in fade-in duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-12 w-12 mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full border-4 border-slate-100 border-t-primary animate-spin" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs text-foreground uppercase tracking-widest font-display", children: "Compiling Investor PDF" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base font-bold font-mono text-primary font-bold mt-1", children: [
                generationProgress,
                "% Completed"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-slate-400 uppercase tracking-wider mt-3 font-semibold", children: generationStep })
            ] })
          ] }),
          generationProgress === 101 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in slide-in-from-bottom duration-500 h-full flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 border-b border-border pb-2", children: [{
              id: "cover",
              label: "Cover Page"
            }, {
              id: "exec",
              label: "Executive Summary"
            }, {
              id: "sales",
              label: "Sales & Inventory"
            }, {
              id: "financials",
              label: "Financial Metrics"
            }].map((tab2) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActivePdfTab(tab2.id), className: `h-7 px-2.5 rounded-lg text-xs font-bold border transition-all ${activePdfTab === tab2.id ? "bg-ink border-ink text-cream" : "bg-background border-border text-slate-500 hover:bg-muted"}`, children: tab2.label }, tab2.id)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-secondary/35 rounded-xl border border-border/60 text-xs text-slate-700 leading-relaxed overflow-y-auto max-h-[260px] scrollbar-none font-sans font-medium flex-1", children: [
              activePdfTab === "cover" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-lg text-primary uppercase tracking-widest", children: "Fortiv Solutions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-16 bg-primary mx-auto" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl font-extrabold text-foreground tracking-tight", children: [
                  reportType.toUpperCase(),
                  " — ",
                  reportPeriod.toUpperCase()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-mono text-slate-400", children: [
                  "Project: ",
                  demoProjects.find((p) => p.id === reportProject)?.name.split(",")[0]
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-400 mt-6", children: [
                  "Confidential · Generated at: 20/01/2025 09:00 AM",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Data Sources: M1, M4.2, M5.3, M11 · Compliance: DPDP Act 2023"
                ] })
              ] }),
              activePdfTab === "exec" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-foreground text-sm border-b border-border pb-1 uppercase font-display", children: "Executive Summary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs leading-relaxed", children: [
                  "During the period of ",
                  reportPeriod,
                  ", project development has proceeded on target. Sales volumes have maintained velocity across core towers, specifically driven by promotional scheme impacts. Net construction progress has crossed the 42% threshold, with key compliance registrations lodged at Gujarat RERA."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold text-slate-800 mt-2", children: "Key Highlights:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-4 space-y-1 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Total revenue bookings captured: ₹1.84 Cr (weighted targets achieved)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Occupancy velocity: G+14 towers sold inventory reached 108 / 156 units" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Next scheduled milestone: Tower A 12th-slab casting due in February" })
                ] })
              ] }),
              activePdfTab === "sales" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-foreground text-sm border-b border-border pb-1 uppercase font-display", children: "Sales & Absorption Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed", children: "Inventory velocity analysis highlights normal sales runs in the 2BHK family layouts, whereas 3BHK premium inventories show a minor seasonal slowdown, currently mitigated by parking promotion schemes." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 border border-border bg-background rounded-lg text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground block uppercase font-bold", children: "Total Sold Units" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold font-mono text-emerald-600", children: "108 Units (69.2%)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 border border-border bg-background rounded-lg text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground block uppercase font-bold", children: "Remaining Available" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold font-mono text-red-600", children: "48 Units (30.8%)" })
                  ] })
                ] })
              ] }),
              activePdfTab === "financials" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-foreground text-sm border-b border-border pb-1 uppercase font-display", children: "Financial Metrics Overview" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: "Project cash reserves are stable, with collections tracking ahead of the construction billing schedule. Escrow accounts have been audited in compliance with regulatory RERA standards." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs border-t border-border pt-2 font-mono", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Collections (Month)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: "₹3.80 Cr" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Outstanding Receivables" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: "₹12.40 L" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-emerald-600 font-extrabold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "IRR Target Projection" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "14.8% MTD" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                alert("PDF report successfully dispatched via Email to LP Mailing List.");
                setGenerationProgress(-1);
              }, className: "flex-1 h-8 bg-ink hover:bg-ink/90 text-cream text-xs font-bold uppercase tracking-widest rounded-lg transition-all", children: "Send & Distribute Report" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                alert("Downloading generated PDF...");
              }, className: "h-8 px-3 border border-border hover:bg-secondary rounded-lg text-slate-500 flex items-center justify-center", title: "Download PDF", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setGenerationProgress(-1), className: "h-8 px-3 border border-border hover:bg-secondary rounded-lg text-slate-500 text-xs font-bold uppercase tracking-widest", children: "Reset" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-0 overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Historical LP Distribution Records" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Report Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Project" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Period" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Generated Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Recipients" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Email Open Rate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Portal Sync" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 font-medium text-foreground bg-background", children: mockDistributionLog.map((log) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold", children: log.report }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500 font-semibold", children: log.project }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono", children: log.period }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-slate-400", children: log.generated }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono", children: [
              log.recipients,
              " LPs"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold text-blue-600", children: log.opened }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-mono text-xs font-extrabold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100", children: "✅ Synced M10" }) })
          ] }, log.id)) })
        ] }) })
      ] })
    ] });
  };
  const [attributionModel, setAttributionModel] = reactExports.useState("Time Decay");
  const [expandedChannel, setExpandedChannel] = reactExports.useState(null);
  const [refSpendAlloc, setRefSpendAlloc] = reactExports.useState(40);
  const [googleSpendAlloc, setGoogleSpendAlloc] = reactExports.useState(120);
  const [fbSpendAlloc, setFbSpendAlloc] = reactExports.useState(180);
  const [nineNineAcresSpendAlloc, setNineNineAcresSpendAlloc] = reactExports.useState(150);
  const calculatedAllocations = reactExports.useMemo(() => {
    const refBookings = Math.max(0, Math.round(refSpendAlloc / 13.33));
    const googleBookings = Math.max(0, Math.round(googleSpendAlloc / 60));
    const fbBookings = Math.max(0, Math.round(fbSpendAlloc / 90));
    const nineNineBookings = Math.max(0, Math.round(nineNineAcresSpendAlloc / 150));
    const totalSpend = refSpendAlloc + googleSpendAlloc + fbSpendAlloc + nineNineAcresSpendAlloc;
    const totalBookings = refBookings + googleBookings + fbBookings + nineNineBookings;
    const blendedCpb = totalBookings > 0 ? totalSpend * 1e3 / totalBookings : 0;
    return {
      refBookings,
      googleBookings,
      fbBookings,
      nineNineBookings,
      totalSpend,
      totalBookings,
      blendedCpb
    };
  }, [refSpendAlloc, googleSpendAlloc, fbSpendAlloc, nineNineAcresSpendAlloc]);
  const channelPerformanceTable = reactExports.useMemo(() => {
    return channelPerformanceBase.map((item) => {
      let multiplier = 1;
      if (attributionModel === "First Touch") {
        if (item.channel === "Facebook Ads" || item.channel === "Google Ads") multiplier = 1.15;
        if (item.channel === "Referral") multiplier = 0.8;
      } else if (attributionModel === "Last Touch") {
        if (item.channel === "Referral") multiplier = 1.25;
        if (item.channel === "99acres") multiplier = 1.1;
        if (item.channel === "Facebook Ads") multiplier = 0.85;
      } else if (attributionModel === "Linear") {
        multiplier = 1;
      }
      const bookingsVal = item.bookings === 0 ? 0 : Math.round(item.bookings * multiplier);
      const cpbVal = bookingsVal > 0 ? Math.round(item.spend / bookingsVal) : 0;
      return {
        ...item,
        bookings: bookingsVal,
        cpb: cpbVal
      };
    });
  }, [attributionModel]);
  const renderMarketingRoi = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Attribution Model:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: ["First Touch", "Last Touch", "Linear", "Time Decay"].map((model) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAttributionModel(model), className: `h-7 px-3 rounded-lg text-xs font-bold transition-all border uppercase tracking-wider ${attributionModel === model ? "bg-ink border-ink text-cream" : "bg-background border-border text-slate-500 hover:bg-muted"}`, children: model }, model)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground font-mono", children: "Blended CPB Target: < ₹1,00,000 | Blended MTD: ₹70,000" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-8 p-0 overflow-hidden border border-border bg-card flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 bg-secondary/30 border-b border-border flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Channel Marketing Performance Table" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400 font-mono font-bold", children: "Sorted by Cost-per-booking (CPB)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2", children: "Channel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2 font-mono", children: "Spend" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2 font-mono", children: "Leads" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2", children: "Avg Score" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2", children: "Visits" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2 font-mono", children: "Bookings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2 font-mono", children: "CPB Ratio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2", children: "ROI" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium text-foreground", children: channelPerformanceTable.map((ch) => {
                const isExpanded = expandedChannel === ch.channel;
                const hasBookings = ch.bookings > 0;
                const roiClass = ch.roi === Infinity ? "bg-emerald-100 text-emerald-800" : ch.roi >= 5 ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : ch.roi >= 1.5 ? "bg-amber-50 text-amber-700 border border-amber-100" : "bg-red-50 text-red-600 border border-red-100";
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setExpandedChannel(isExpanded ? null : ch.channel), className: "hover:bg-secondary/15 cursor-pointer border-b border-border last:border-none", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-bold flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary hover:underline", children: ch.channel }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400", children: "▶" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-xs", children: ch.spend > 0 ? formatInr(ch.spend) : "₹0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-xs", children: ch.leads }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold", children: ch.score }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono", children: ch.visits }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-emerald-600 font-extrabold", children: ch.bookings }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-xs font-bold", children: ch.spend > 0 && hasBookings ? formatInr(ch.cpb) : "—" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded text-xs font-extrabold font-mono ${roiClass}`, children: ch.roi === Infinity ? "∞" : `${ch.roi}x` }) })
                  ] }, ch.channel),
                  isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 8, className: "px-4 py-3 bg-secondary/15 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 animate-in fade-in duration-300", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Campaign Level Drill-down" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs border border-border/60 bg-background rounded-lg overflow-hidden", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/20 text-muted-foreground text-[10px] uppercase font-mono", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5", children: "Campaign Name" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5", children: "Spend" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 font-mono", children: "Leads Sourced" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 font-mono", children: "Visits Done" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 font-mono", children: "Bookings" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5", children: "CPB" })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/20 font-medium text-slate-600", children: campaignPerformance.map((cam, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-50", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-bold text-foreground", children: cam.campaign }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2 font-mono", children: [
                          "₹",
                          cam.spend / 1e3,
                          "K"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono", children: cam.leads }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono", children: cam.visits }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono text-emerald-600 font-extrabold", children: cam.bookings }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono", children: cam.bookings > 0 ? `₹${cam.cpb / 1e3}k` : "—" })
                      ] }, idx)) })
                    ] })
                  ] }) }) })
                ] });
              }) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono text-slate-400 text-center py-2.5 border-t border-border bg-secondary/10", children: "*Campaign tracking integrations pull spend values from Facebook Ads Manager API and Google Ads API daily." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 border border-border bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-500 font-display border-b border-border pb-2 mb-3", children: "AI Budget Recommendations" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-sky-50/50 border border-sky-200 rounded-xl text-xs space-y-3 leading-relaxed font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold flex items-center gap-1.5 text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 animate-bounce" }),
                " AI Allocation Engine Verdict"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 font-medium text-slate-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-700 font-bold block", children: "🟢 INCREASE:" }),
                  "• Referral Programme: ₹40K spend → 3 bookings (CPB ₹13K). Increase budget to ₹80K (Est: +3 bookings).",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• Google Ads: Strong leads quality score (52) — increase spend from ₹1.2L to ₹1.8L."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-700 font-bold block", children: "🟡 MAINTAIN:" }),
                  "• Facebook Ads: High leads volumes but lower scores — maintain budget; improve creatives targeting."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 font-bold block", children: "🔴 REVIEW / DOWNGRADE:" }),
                  "• Housing.com: ₹90K spend, 0 bookings. Downsize subscription tier or pause allocation for 30 days."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-sky-300/40 pt-2 font-bold text-primary text-xs", children: "Total potential reallocation: Reallocate ₹90K from Housing.com to Referrals. Est: +2.8 bookings/month." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 border border-border bg-card space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-500 font-display border-b border-border pb-2", children: "Spend Allocation Simulator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-mono", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Referral Spend" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "₹",
                    refSpendAlloc,
                    "k"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "10", max: "100", value: refSpendAlloc, onChange: (e) => setRefSpendAlloc(parseInt(e.target.value)), className: "w-full accent-primary h-1 bg-secondary rounded-lg appearance-none cursor-pointer" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-mono", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Google Ads Spend" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "₹",
                    googleSpendAlloc,
                    "k"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "50", max: "250", value: googleSpendAlloc, onChange: (e) => setGoogleSpendAlloc(parseInt(e.target.value)), className: "w-full accent-primary h-1 bg-secondary rounded-lg appearance-none cursor-pointer" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-mono", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Facebook Ads Spend" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "₹",
                    fbSpendAlloc,
                    "k"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "50", max: "300", value: fbSpendAlloc, onChange: (e) => setFbSpendAlloc(parseInt(e.target.value)), className: "w-full accent-primary h-1 bg-secondary rounded-lg appearance-none cursor-pointer" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-secondary/40 border border-border/60 rounded-xl space-y-1 text-center font-mono mt-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-slate-400 font-sans font-bold", children: "Projected Results" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-extrabold text-foreground", children: [
                  calculatedAllocations.totalBookings,
                  " Bookings"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500", children: [
                  "Blended CPB: ₹",
                  Math.round(calculatedAllocations.blendedCpb).toLocaleString("en-IN")
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] });
  };
  const [actionsChecked, setActionsChecked] = reactExports.useState([false, false, false, false]);
  const [briefSection, setBriefSection] = reactExports.useState("numbers");
  const priorityActionsList = [{
    text: "Follow up personally on Deepak Trivedi deal — stuck 19 days in Negotiation (Priya Rana).",
    reason: "stuck deal objection",
    severity: "border-l-4 border-l-[#D85A30]"
  }, {
    text: "Launch incentive scheme for 3BHK Tower B — 11 units slow-moving at 67 days avg.",
    reason: "slow inventory velocity",
    severity: "border-l-4 border-l-[#E8A838]"
  }, {
    text: "Review Housing.com campaign spend (₹90K spent MTD with 0 bookings closed).",
    reason: "channel ROI leak",
    severity: "border-l-4 border-l-[#D85A30]"
  }, {
    text: "Recruit 1 additional field agent for Vadodara region to match forecast shortfall.",
    reason: "forecast capacity gap",
    severity: "border-l-4 border-l-slate-400"
  }];
  const handleActionToggle = (idx) => {
    setActionsChecked((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };
  const actionCompletionCount = actionsChecked.filter(Boolean).length;
  const actionCompletionRate = Math.round(actionCompletionCount / priorityActionsList.length * 100);
  const renderExecutiveBrief = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Briefings Delivered (YTD)", value: "22", desc: "Monday dispatches", color: "text-blue-700" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Last brief compiled", value: "20 Jan 07:22", desc: "Monday W03", color: "text-slate-800" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Next Compilation Run", value: "5 days 16 hrs", desc: "Scheduled 27 Jan", color: "text-slate-800" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Executive Open Rate", value: "100%", desc: "All directors checked", color: "text-emerald-600" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card min-h-[460px] flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between border-b border-border pb-2 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-xs text-foreground font-display flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-primary" }),
              " AI Compiled Weekly Briefing Preview (Week W03)"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 border-b border-border pb-2 mb-3", children: [{
              id: "numbers",
              label: "Week in Numbers"
            }, {
              id: "deals",
              label: "Deal Highlights"
            }, {
              id: "finance",
              label: "Finance Brief"
            }].map((sec) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setBriefSection(sec.id), className: `h-6 px-2.5 rounded-lg text-xs font-bold border transition-all ${briefSection === sec.id ? "bg-ink border-ink text-cream" : "bg-background border-border text-slate-500 hover:bg-muted"}`, children: sec.label }, sec.id)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/60 text-xs text-slate-700 leading-relaxed font-sans font-medium h-[220px] overflow-y-auto scrollbar-none", children: [
              briefSection === "numbers" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold text-foreground uppercase text-xs font-display border-b border-border pb-0.5", children: "Week in Numbers (13–19 Jan 2025)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs border border-border bg-background rounded overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/20 text-muted-foreground text-[10px] font-mono", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 py-1", children: "KPI" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 py-1 font-mono", children: "This Week" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 py-1 font-mono", children: "Last Week" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 py-1", children: "Change" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-border/20 font-medium text-slate-600 font-mono", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5 text-foreground font-sans font-bold", children: "Weekly Revenue" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5 font-bold text-foreground", children: "₹1.12 Cr" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5", children: "₹0.95 Cr" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5 text-emerald-600 font-extrabold", children: "▲ +18%" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5 text-foreground font-sans font-bold", children: "Bookings Closed" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5 font-bold text-foreground", children: "2" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5", children: "1" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5 text-emerald-600 font-extrabold", children: "▲ +100%" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5 text-foreground font-sans font-bold", children: "Site Visits Done" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5 font-bold text-foreground", children: "18" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5", children: "15" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5 text-emerald-600 font-extrabold", children: "▲ +20%" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5 text-foreground font-sans font-bold", children: "New Leads Captured" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5 font-bold text-foreground", children: "84" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5", children: "71" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5 text-emerald-600 font-extrabold", children: "▲ +18%" })
                    ] })
                  ] })
                ] })
              ] }),
              briefSection === "deals" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold text-foreground uppercase text-xs font-display border-b border-border pb-0.5", children: "Deal Highlights" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Top Booking closed:" }),
                  " Rajesh Patel block booking at Greenview Heights (2BHK, ₹56L booking value, Priya Rana)."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "At-Risk Deals:" }),
                  " Deepak Trivedi has been stuck in the negotiation stage for 19 days. Priya Rana reports pricing disputes. Suggested personal director check-in callback."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Team Performance:" }),
                  " Priya Rana was the star agent of the week, conducting 3 visits and booking ₹56L revenue."
                ] })
              ] }),
              briefSection === "finance" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-bold text-foreground uppercase text-xs font-display border-b border-border pb-0.5", children: "Finance Snapshot" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Finance Performance:" }),
                  " Blended cost-per-booking remains around ₹70,000. MagicBricks subscription renewal due next week. Escalated escrow balance meets reserve ratio targets."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Cash Flow:" }),
                  " Net operational collections this week touched ₹1.12 Cr, tracking aligned with pipeline development schedules."
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-3 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert("Weekly brief summary dispatched to Directors WhatsApp group."), className: "flex-1 h-8 bg-ink hover:bg-ink/90 text-cream text-xs font-bold uppercase tracking-widest rounded-lg transition-all", children: "Send WhatsApp Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert("Dispatched full 2-page brief PDF to leadership email inbox."), className: "flex-1 h-8 border border-border hover:bg-secondary text-slate-600 text-xs font-bold uppercase tracking-widest rounded-lg transition-all", children: "Dispatch Email Briefing" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card flex flex-col justify-between min-h-[460px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border pb-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Weekly Priority Actions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono font-extrabold text-emerald-600", children: "MTD TRACKING" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 py-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-semibold text-slate-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Actions Completed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground font-bold", children: [
                    actionCompletionCount,
                    " of ",
                    priorityActionsList.length,
                    " (",
                    actionCompletionRate,
                    "%)"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-emerald-600 transition-all duration-500", style: {
                  width: `${actionCompletionRate}%`
                } }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 pt-1", children: priorityActionsList.map((action, idx) => {
              const isChecked = actionsChecked[idx];
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => handleActionToggle(idx), className: `p-2 rounded-lg border border-border/60 bg-background text-xs font-semibold cursor-pointer transition-all hover:bg-secondary/15 flex items-start gap-2.5 ${action.severity} ${isChecked ? "opacity-60 line-through decoration-slate-400" : ""}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "shrink-0 mt-0.5 text-slate-400 hover:text-primary", children: isChecked ? /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "h-3.5 w-3.5 text-emerald-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "h-3.5 w-3.5 text-slate-300" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5 leading-snug", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: action.text }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono text-slate-400 font-extrabold uppercase", children: action.reason })
                ] })
              ] }, idx);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3 flex justify-between items-center text-xs font-mono text-slate-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Freshness: as of 20/01 07:22 AM" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Compliant with GDPR / DPDP" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-0 overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Executive Briefings Historical Log" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "ISO Week" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Date Range" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Delivered Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "WhatsApp Delivery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Email Delivery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Priority Actions Handled" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 font-medium text-foreground bg-background", children: historicalBriefsLog.map((log) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold", children: log.week }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500 font-semibold", children: log.period }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-slate-400", children: log.delivered }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 text-emerald-600 font-mono font-bold", children: [
              "✅ ",
              log.wa
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 text-emerald-600 font-mono font-bold", children: [
              "✅ ",
              log.email
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-bold", children: [
              log.actions,
              " completed"
            ] })
          ] }, log.week)) })
        ] }) })
      ] })
    ] });
  };
  const renderMenuSelection = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-in fade-in duration-300", children: submodulesList.map((mod) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { onClick: () => setActiveTab(mod.id), className: "bg-card border shadow-sm rounded-xl p-5 cursor-pointer flex flex-col justify-between group h-48", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
          " ",
          mod.status
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground group-hover:text-ink transition-colors mt-1 font-display", children: mod.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2 font-medium", children: mod.desc })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border mt-4 pt-3 flex items-center justify-between text-xs font-bold text-muted-foreground group-hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-foreground", children: mod.stats }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5 text-ink group-hover:underline font-mono", children: [
          "Access ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })
        ] })
      ] })
    ] }, mod.id)) }) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: dynamicTitle, subtitle: headerInfo.subtitle, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "transition-all duration-300", children: [
    activeTab === "menu" && renderMenuSelection(),
    activeTab === "overview" && renderDashboardOverview(),
    activeTab === "daily-report" && renderDailyReport(),
    activeTab === "forecast" && renderForecast(),
    activeTab === "inventory" && renderInventory(),
    activeTab === "investor-report" && renderInvestorReport(),
    activeTab === "marketing-roi" && renderMarketingRoi(),
    activeTab === "executive-brief" && renderExecutiveBrief()
  ] }) });
}
function StatBox({
  label,
  value,
  desc,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 flex flex-col justify-between relative min-h-24 border border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-slate-400 font-display", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-baseline justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-2xl font-bold tracking-tight font-mono ${color}`, children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground", children: desc })
    ] })
  ] });
}
export {
  AnalyticsManager as component
};
