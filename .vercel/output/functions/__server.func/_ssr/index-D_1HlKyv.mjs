import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, C as Card } from "./AppShell-Dji0FoTH.mjs";
import { d as ResponsiveContainer, c as PieChart, P as Pie, b as Cell, a as BarChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, R as ReferenceLine, B as Bar } from "../_libs/recharts.mjs";
import { Z as Sparkles, b as ArrowRight, O as OctagonAlert, X as ShieldCheck, aa as X, B as Bell } from "../_libs/lucide-react.mjs";
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
import "../_libs/lodash.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
function AnimatedCounter({
  value,
  duration = 1e3
}) {
  const [count, setCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let start = 0;
    const end = value;
    if (end === 0) return;
    const totalSteps = 30;
    const stepTime = duration / totalSteps;
    const increment = end / totalSteps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [value, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: count.toLocaleString("en-IN") });
}
function Dashboard() {
  const navigate = useNavigate();
  const [timeStr, setTimeStr] = reactExports.useState("");
  const [isAlertsOpen, setIsAlertsOpen] = reactExports.useState(false);
  const [insightIndex, setInsightIndex] = reactExports.useState(0);
  const [marketIndex, setMarketIndex] = reactExports.useState(0);
  const [actionFilter, setActionFilter] = reactExports.useState("All");
  reactExports.useEffect(() => {
    const updateTime = () => {
      const now = /* @__PURE__ */ new Date();
      const dd = String(now.getDate()).padStart(2, "0");
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const yyyy = now.getFullYear();
      const hh = String(now.getHours()).padStart(2, "0");
      const min = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setTimeStr(`${dd}/${mm}/${yyyy} ${hh}:${min}:${ss}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1e3);
    return () => clearInterval(timer);
  }, []);
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      setInsightIndex((prev) => (prev + 1) % 8);
    }, 4e3);
    return () => clearInterval(timer);
  }, []);
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      setMarketIndex((prev) => (prev + 1) % 3);
    }, 4e3);
    return () => clearInterval(timer);
  }, []);
  const consolidatedKPIs = [{
    label: "Leads & Qualification",
    value: 1247,
    sub: "12 Hot · ↑ 47 today",
    color: "#2E86AB",
    isNum: true
  }, {
    label: "Active Deals Pipeline",
    value: "₹4.2 Cr",
    sub: "68 Active Deals · ↑ ₹0.3 Cr this week",
    color: "#1A3C5E",
    isNum: false
  }, {
    label: "Revenue & Collections",
    value: "₹18.2 Cr",
    sub: "₹3.6 Cr this month · 74% rate",
    color: "#1D9E75",
    isNum: false
  }, {
    label: "AI Conversations & Engagement",
    value: 3812,
    sub: "84 chats today · 8,234 runs",
    color: "#25D366",
    isNum: true
  }, {
    label: "RERA & Legal Compliance",
    value: "11 Days",
    sub: "QPR Submission · 31/01/2025",
    color: "#D85A30",
    isNum: false
  }];
  const leadSources = [{
    name: "99acres",
    value: 28,
    color: "#1A3C5E"
  }, {
    name: "Facebook Ads",
    value: 22,
    color: "#2E86AB"
  }, {
    name: "MagicBricks",
    value: 15,
    color: "#1D9E75"
  }, {
    name: "WhatsApp Organic",
    value: 12,
    color: "#25D366"
  }, {
    name: "Housing.com",
    value: 9,
    color: "#E8A838"
  }, {
    name: "Google Ads",
    value: 8,
    color: "#D85A30"
  }, {
    name: "Referral / Other",
    value: 6,
    color: "#89C4F8"
  }];
  const pipelineStages = [{
    stage: "Inquiry",
    deals: 8,
    value: "—",
    color: "bg-slate-400"
  }, {
    stage: "Site Visit Scheduled",
    deals: 5,
    value: "—",
    color: "bg-blue-400"
  }, {
    stage: "Visited",
    deals: 4,
    value: "₹0.9 Cr",
    color: "bg-indigo-400"
  }, {
    stage: "Negotiation",
    deals: 6,
    value: "₹1.6 Cr",
    color: "bg-amber-500 animate-pulse"
  }, {
    stage: "Booking Amount Paid",
    deals: 3,
    value: "₹0.8 Cr",
    color: "bg-emerald-500"
  }, {
    stage: "Agreement Signed",
    deals: 2,
    value: "₹0.6 Cr",
    color: "bg-teal-500"
  }, {
    stage: "Loan Processing",
    deals: 1,
    value: "₹0.3 Cr",
    color: "bg-cyan-600"
  }];
  const pipelineLogs = [{
    time: "14:28",
    text: "Rajesh Patel → Negotiation stage ↑ (Priya Rana)"
  }, {
    time: "13:45",
    text: "Priya Shah site visit confirmed Saturday"
  }, {
    time: "12:30",
    text: "Deepak Trivedi — deal stuck 19 days ⚠️ Alert fired"
  }, {
    time: "11:15",
    text: "Amit Desai — Booking Amount received ₹2.5L"
  }, {
    time: "10:02",
    text: "New listing published: Greenview Heights 3BHK T-4"
  }, {
    time: "09:17",
    text: "3 follow-up messages auto-sent via AI"
  }];
  const projectPL = [{
    name: "Greenview Heights",
    margin: "28.6%",
    status: "On track",
    color: "bg-emerald-500"
  }, {
    name: "Skyline Residences",
    margin: "30.6%",
    status: "On track",
    color: "bg-emerald-500"
  }, {
    name: "Business Park",
    margin: "22.2%",
    status: "Margin pressure",
    color: "bg-amber-500"
  }];
  const channelBreakdown = [{
    name: "WhatsApp AI Chatbot",
    conv: 36,
    pct: 42,
    color: "bg-[#25D366]"
  }, {
    name: "Website Widget",
    conv: 18,
    pct: 21,
    color: "bg-[#2E86AB]"
  }, {
    name: "Voice IVR",
    conv: 15,
    pct: 18,
    color: "bg-[#1A3C5E]"
  }, {
    name: "Email AI",
    conv: 10,
    pct: 12,
    color: "bg-[#E8A838]"
  }, {
    name: "Telegram",
    conv: 5,
    pct: 7,
    color: "bg-[#89C4F8]"
  }];
  const marketPulse = [{
    loc: "Vesu, Surat",
    label: "Avg Price/Sq Ft",
    val: "₹4,850/sq ft",
    trend: "↑ +3.2% MoM",
    color: "text-emerald-500"
  }, {
    loc: "Adajan, Surat",
    label: "Absorption Rate",
    val: "4.8 Months",
    trend: "↓ Tightening",
    color: "text-blue-500"
  }, {
    loc: "Pal, Surat",
    label: "Avg Days on Market",
    val: "38 Days",
    trend: "↓ Faster sales",
    color: "text-emerald-500"
  }];
  const reraDeadlines = [{
    date: "31 Jan 2025",
    text: "QPR Submission — Greenview Heights (11 days)",
    isCrit: true
  }, {
    date: "31 Jan 2025",
    text: "QPR Submission — Skyline Residences (11 days)",
    isCrit: true
  }, {
    date: "15 Feb 2025",
    text: "Ad Compliance Review — Business Park (26 days)",
    isCrit: false
  }, {
    date: "31 Mar 2025",
    text: "Annual Audit — Greenview Heights (70 days)",
    isCrit: false
  }];
  const constructionMilestones = [{
    phase: "Land Acquisition",
    progress: 100,
    status: "Complete"
  }, {
    phase: "Design & Drawings",
    progress: 100,
    status: "Complete"
  }, {
    phase: "RERA Registration",
    progress: 100,
    status: "Complete"
  }, {
    phase: "Foundation",
    progress: 100,
    status: "Complete"
  }, {
    phase: "Basement / Podium",
    progress: 100,
    status: "Complete"
  }, {
    phase: "Structure Floors 1–8",
    progress: 100,
    status: "Complete"
  }, {
    phase: "Structure Floors 9–14",
    progress: 74,
    status: "In Progress"
  }, {
    phase: "Finishing — Block A",
    progress: 22,
    status: "At Risk"
  }];
  const hrAgents = [{
    name: "Priya Rana",
    role: "Senior Agent",
    score: 91,
    leads: 18,
    conv: 6,
    isTop: true
  }, {
    name: "Rahul Modi",
    role: "Sales Manager",
    score: 88,
    leads: 12,
    conv: 4,
    isTop: false
  }, {
    name: "Kiran Desai",
    role: "Team Lead",
    score: 84,
    leads: 15,
    conv: 5,
    isTop: false
  }, {
    name: "Ankit Shah",
    role: "Agent",
    score: 76,
    leads: 22,
    conv: 5,
    isTop: false
  }, {
    name: "Meera Patel",
    role: "Agent",
    score: 71,
    leads: 20,
    conv: 3,
    isTop: false
  }];
  const chartData = [{
    name: "Oct",
    Collected: 2.4,
    Target: 3
  }, {
    name: "Nov",
    Collected: 3.1,
    Target: 3
  }, {
    name: "Dec",
    Collected: 2.8,
    Target: 3
  }, {
    name: "Jan",
    Collected: 3.6,
    Target: 3
  }, {
    name: "Feb",
    Collected: 3.2,
    Target: 3
  }, {
    name: "Mar",
    Collected: 3.1,
    Target: 3
  }];
  const marketingChannels = [{
    name: "Referral",
    leads: 22,
    cpl: "₹0",
    spend: "₹0",
    conv: "27%"
  }, {
    name: "WhatsApp Organic",
    leads: 18,
    cpl: "₹120",
    spend: "₹2,160",
    conv: "22%"
  }, {
    name: "99acres",
    leads: 84,
    cpl: "₹380",
    spend: "₹31,920",
    conv: "8%"
  }, {
    name: "Facebook Lead Ads",
    leads: 34,
    cpl: "₹312",
    spend: "₹10,608",
    conv: "9%"
  }, {
    name: "Google Ads",
    leads: 18,
    cpl: "₹485",
    spend: "₹8,730",
    conv: "11%"
  }];
  const aiInsights = [{
    cat: "LEAD INTELLIGENCE",
    text: "Deepak Trivedi deal stuck 19 days in Negotiation. Probability dropping. Recommend director-level intervention.",
    action: "Take Action"
  }, {
    cat: "REVENUE ALERT",
    text: "₹1.5 Cr outstanding 90+ days — 5 buyers unresponsive. Escalate to legal notice workflow.",
    action: "Take Action"
  }, {
    cat: "MARKET SIGNAL",
    text: "3BHK units in Tower B showing 40% slower absorption vs Tower A. Consider pricing scheme changes.",
    action: "Take Action"
  }, {
    cat: "COMPLIANCE CRITICAL",
    text: "RERA QPR submission due in 11 days for 2 projects. Data compilation not yet started.",
    action: "Take Action"
  }, {
    cat: "LEAD SCORE UPDATE",
    text: "Amit Desai score upgraded 61→74 (Warm→Hot). Brochure opened + 3 portal inquiries this week.",
    action: "Call Now"
  }, {
    cat: "HR SIGNAL",
    text: "Senior Sales Agent position at 19-day open vacancy. Pipeline conversion declining in Adajan.",
    action: "Review Candidates"
  }, {
    cat: "FINANCIAL INSIGHT",
    text: "Jan 2025 collections ₹3.6 Cr — highest in 6 months. Referral channel contributing 22% of new pipeline.",
    action: "View Analytics"
  }, {
    cat: "SYSTEM HEALTH",
    text: "M6 Document AI operating at degraded capacity (98.1% uptime). 3 agreements in queue.",
    action: "View M6"
  }];
  const highRiskDeals = [{
    name: "Deepak Trivedi",
    value: "₹82L",
    risk: 87,
    stage: "Negotiation",
    days: 19,
    status: "🔴 font-bold text-red-500 animate-pulse"
  }, {
    name: "Ritu Bhandari",
    value: "₹52L",
    risk: 74,
    stage: "Negotiation",
    days: 11,
    status: "🟡 text-amber-500"
  }, {
    name: "Mahesh Khanna",
    value: "₹98L",
    risk: 71,
    stage: "No WhatsApp Activity",
    days: 8,
    status: "🟡 text-amber-500"
  }, {
    name: "Nilesh Trivedi",
    value: "₹3.2Cr",
    risk: 68,
    stage: "Commercial Cycle",
    days: 14,
    status: "🟡 text-amber-500"
  }, {
    name: "Pooja Sharma",
    value: "₹57L",
    risk: 65,
    stage: "Cold",
    days: 6,
    status: "🟡 text-amber-500"
  }];
  const actionsQueue = [{
    id: 1,
    priority: "Critical",
    text: "RERA QPR submission — start data compilation",
    module: "M6",
    owner: "Rahul Modi",
    deadline: "31/01/2025",
    pColor: "text-[#D85A30] bg-red-50 dark:bg-red-950/20 border-red-100 dark:border-red-900/50"
  }, {
    id: 2,
    priority: "Critical",
    text: "₹1.5 Cr 90+ day overdue — 5 buyers — escalate",
    module: "M11",
    owner: "Finance",
    deadline: "Immediate",
    pColor: "text-[#D85A30] bg-red-50 dark:bg-red-950/20 border-red-100 dark:border-red-900/50"
  }, {
    id: 3,
    priority: "Critical",
    text: "Deepak Trivedi deal stuck 19 days — director call",
    module: "M4",
    owner: "Rahul Modi",
    deadline: "Today",
    pColor: "text-[#D85A30] bg-red-50 dark:bg-red-950/20 border-red-100 dark:border-red-900/50"
  }, {
    id: 4,
    priority: "High",
    text: "3 agreements pending legal sign-off",
    module: "M6",
    owner: "Legal",
    deadline: "Within 24h",
    pColor: "text-orange-700 bg-orange-50 dark:bg-orange-950/20 border-orange-100 dark:border-orange-900/50"
  }, {
    id: 5,
    priority: "High",
    text: "18 buyers with overdue payments — reminder sequence",
    module: "M10",
    owner: "Finance",
    deadline: "Today",
    pColor: "text-orange-700 bg-orange-50 dark:bg-orange-950/20 border-orange-100 dark:border-orange-900/50"
  }, {
    id: 6,
    priority: "Medium",
    text: "6 leases expiring in 60 days — renewal outreach",
    module: "M8",
    owner: "Ops",
    deadline: "This week",
    pColor: "text-amber-700 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/50"
  }, {
    id: 7,
    priority: "Medium",
    text: "4 e-signatures pending — follow up with buyers",
    module: "M6",
    owner: "Sales",
    deadline: "Today",
    pColor: "text-amber-700 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/50"
  }, {
    id: 8,
    priority: "Medium",
    text: "M6 Document AI degraded — tech review",
    module: "M12",
    owner: "Dev Team",
    deadline: "Today",
    pColor: "text-amber-700 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/50"
  }, {
    id: 9,
    priority: "Medium",
    text: "Senior Agent vacancy 19 days open — shortlist review",
    module: "M7",
    owner: "HR",
    deadline: "This week",
    pColor: "text-amber-700 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/50"
  }, {
    id: 10,
    priority: "Medium",
    text: "3 demand notes pending milestone confirmation",
    module: "M11",
    owner: "Finance",
    deadline: "This week",
    pColor: "text-amber-700 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/50"
  }, {
    id: 11,
    priority: "Low",
    text: "3BHK Tower B slow absorption — pricing review",
    module: "M3",
    owner: "Sales Mgr",
    deadline: "This week",
    pColor: "text-emerald-700 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/50"
  }, {
    id: 12,
    priority: "Low",
    text: "Inventory Report — month-end data reconciliation",
    module: "M5",
    owner: "Ops",
    deadline: "31/01/2025",
    pColor: "text-emerald-700 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/50"
  }];
  const filteredActions = reactExports.useMemo(() => {
    if (actionFilter === "All") return actionsQueue;
    return actionsQueue.filter((act) => act.priority === actionFilter);
  }, [actionFilter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif-display font-semibold tracking-tight text-foreground select-none", children: "Real Estate AI Command Center" }) }), subtitle: "Fortiv Solutions · fortivsolutions.in · Executive Build Status Panel", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 px-3 py-1.5 rounded-full shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "LIVE · ",
        timeStr || "Loading..."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsAlertsOpen(true), className: "h-9 px-3 rounded-lg border border-border bg-card hover:bg-muted text-[12px] font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4 text-[#D85A30]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-[#D85A30] text-white px-1.5 py-0.5 rounded text-[9px] font-mono font-bold", children: "3 alerts" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[12px] font-bold border border-border bg-card rounded-lg px-3 py-1.5 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 grid place-items-center text-[10px] font-bold font-mono", children: "RM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-600 dark:text-slate-300 truncate max-w-[150px]", children: "Rahul Modi (Sales Manager)" })
    ] })
  ] }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 font-sans-dm relative z-10 animate-fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-400 font-display mb-2.5", children: "Key Operational KPIs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4", children: consolidatedKPIs.map((kpi, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "submodule-card p-4 rounded-xl flex flex-col justify-between min-h-[108px] transition-all duration-300 relative overflow-hidden", style: {
          borderTop: `3px solid ${kpi.color}`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9.5px] font-bold uppercase tracking-wider text-slate-400 leading-snug", children: kpi.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-bold font-mono-jb text-foreground", children: kpi.isNum ? /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { value: kpi.value }) : kpi.value })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 pt-2 border-t border-border/20 text-[9.5px] font-extrabold text-slate-500 flex justify-between items-center font-sans-dm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: kpi.sub }),
            kpi.label.includes("RERA") && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#D85A30] animate-pulse shadow-[0_0_8px_#D85A30]" })
          ] })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-5 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 flex flex-col min-h-[300px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between border-b border-border/40 pb-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground font-display", children: "Lead Acquisition Funnel" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
                to: "/leads"
              }), className: "text-[9.5px] font-bold text-[#0E86E9] hover:underline", children: "View Details →" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4 flex-1 items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-7 space-y-2", children: [{
                label: "Captured",
                val: 47,
                pct: 100,
                color: "bg-[#1A3C5E]"
              }, {
                label: "Enriched",
                val: 38,
                pct: 81,
                color: "bg-[#2E86AB]"
              }, {
                label: "AI Scored",
                val: 38,
                pct: 100,
                color: "bg-[#1D9E75]"
              }, {
                label: "Hot (75+)",
                val: 12,
                pct: 32,
                color: "bg-[#D85A30]"
              }, {
                label: "Warm (40+)",
                val: 23,
                pct: 61,
                color: "bg-[#E8A838]"
              }, {
                label: "Cold (0-39)",
                val: 3,
                pct: 8,
                color: "bg-slate-400"
              }].map((row, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5 text-[10.5px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-semibold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: row.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono-jb", children: [
                    row.val,
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-normal text-slate-400", children: [
                      "(",
                      row.pct,
                      "%)"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-secondary/40 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${row.color}`, style: {
                  width: `${row.pct}%`
                } }) })
              ] }, idx)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-5 flex flex-col items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-32 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PieChart, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: leadSources, cx: "50%", cy: "50%", innerRadius: 28, outerRadius: 45, paddingAngle: 2, dataKey: "value", children: leadSources.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, `cell-${idx}`)) }) }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1 text-center", children: "Lead Sources" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-border/40 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-slate-500 font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "Enrichment Time ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "block text-foreground font-mono-jb", children: "91s" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "Avg AI Score ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "block text-foreground font-mono-jb", children: "68" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "Response Time ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "block text-foreground font-mono-jb", children: "< 60s" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "Duplicates Merged ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "block text-foreground font-mono-jb", children: "3" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 flex flex-col min-h-[280px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between border-b border-border/40 pb-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground font-display", children: "AI Conversations & Engagement" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
                to: "/conversations"
              }), className: "text-[9.5px] font-bold text-[#0E86E9] hover:underline", children: "Configure AI →" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 text-xs font-semibold text-slate-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/20 rounded-xl border border-border/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-slate-400", children: "Active Convs Now" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold font-mono-jb text-[#0E86E9] mt-1 animate-pulse", children: "6" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/20 rounded-xl border border-border/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-slate-400", children: "Today's Conversations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold font-mono-jb text-foreground mt-1", children: "84" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Channel breakdown" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WhatsApp: 42%" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 rounded-full overflow-hidden flex bg-secondary/40", children: channelBreakdown.map((ch, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full ${ch.color}`, style: {
                width: `${ch.pct}%`
              }, title: `${ch.name}: ${ch.conv} convs (${ch.pct}%)` }, idx)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-x-3 gap-y-1 text-[9.5px] text-slate-400 font-bold mt-1", children: channelBreakdown.slice(0, 3).map((ch, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${ch.color}` }),
                ch.name.split(" ")[0]
              ] }, i)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-border/40 text-[10px] text-slate-500 flex justify-between font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Missed Call Recovery: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "18 → 14 recovered" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-jb text-emerald-600 font-bold", children: "77.7% rate" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-4 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 flex flex-col min-h-[300px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between border-b border-border/40 pb-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground font-display", children: "Sales Pipeline Summary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
                to: "/pipeline"
              }), className: "text-[9.5px] font-bold text-[#0E86E9] hover:underline", children: "CRM Board →" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 flex-1", children: pipelineStages.slice(2, 6).map((stage, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] font-medium p-1.5 hover:bg-secondary/20 rounded-lg transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2 w-2 rounded-full ${stage.color}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-600 dark:text-slate-400 font-semibold", children: stage.stage })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono-jb text-foreground font-bold", children: [
                  stage.deals,
                  " deals"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-jb text-slate-400 font-bold w-14 text-right", children: stage.value })
              ] })
            ] }, idx)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 bg-secondary/10 dark:bg-slate-950/20 border border-border/30 rounded-xl p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5", children: "Today's Pipeline Activity Feed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-24 overflow-y-auto scrollbar-none pr-1", children: pipelineLogs.slice(0, 3).map((log, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-slate-500 font-semibold leading-relaxed flex items-start gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-jb text-slate-400 shrink-0", children: log.time }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: log.text })
              ] }, i)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 flex flex-col min-h-[280px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between border-b border-border/40 pb-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground font-display", children: "Property Intel & Market Pulse" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
                to: "/properties"
              }), className: "text-[9.5px] font-bold text-[#0E86E9] hover:underline", children: "Market Data →" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-[#0E86E9]/5 dark:bg-[#0E86E9]/10 border border-[#0E86E9]/20 rounded-xl min-h-[76px] flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[10.5px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#0E86E9]", children: marketPulse[marketIndex].loc }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-400 uppercase tracking-wider text-[9px]", children: marketPulse[marketIndex].label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold font-mono-jb text-foreground", children: marketPulse[marketIndex].val }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold ${marketPulse[marketIndex].color}`, children: marketPulse[marketIndex].trend })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2.5 text-xs font-semibold text-slate-500 flex-1 justify-center flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/30 pb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AVMs Run Today" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-jb text-foreground font-bold", children: "14 runs" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/30 pb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Active Buyer Alerts" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-jb text-foreground font-bold", children: "48 alert rules" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pb-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Matches Triggered Today" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-jb text-[#0E86E9] font-bold", children: "9 matches" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-3 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 flex flex-col min-h-[300px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between border-b border-border/40 pb-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground font-display", children: "Project P&L Snapshot" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
                to: "/finance"
              }), className: "text-[9.5px] font-bold text-[#0E86E9] hover:underline", children: "Accounts →" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 flex-1 justify-center flex flex-col", children: projectPL.map((proj, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-secondary/15 dark:bg-slate-900/10 rounded-xl border border-border/30 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground truncate", children: proj.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-jb text-[#0E86E9]", children: proj.margin })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1.5 text-[10px] text-slate-500 font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${proj.color}` }),
                proj.status
              ] })
            ] }, idx)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 flex flex-col min-h-[280px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between border-b border-border/40 pb-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground font-display", children: "Compliance Deadlines" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
                to: "/compliance"
              }), className: "text-[9.5px] font-bold text-[#0E86E9] hover:underline", children: "Documents →" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 flex-1 justify-center flex flex-col", children: reraDeadlines.slice(0, 3).map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-mono-jb", children: item.date }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8.5px] px-1.5 py-0.5 rounded font-mono font-bold uppercase ${item.isCrit ? "bg-red-50 dark:bg-red-950/20 text-red-700 border border-red-100 dark:border-red-900/30" : "bg-amber-50 dark:bg-amber-950/20 text-amber-700 border border-amber-100 dark:border-amber-900/30"}`, children: item.isCrit ? "Critical" : "Warning" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10.5px] text-foreground mt-1 truncate font-medium", children: item.text })
            ] }, idx)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between border-b border-border/40 pb-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground font-display", children: "Construction Milestones" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
              to: "/projects"
            }), className: "text-[9.5px] font-bold text-[#0E86E9] hover:underline", children: "Uptime Dashboard →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 text-xs font-semibold text-slate-500 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              "Statutory Approvals ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "block text-foreground font-mono-jb", children: "3 Pending" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              "Days to Possession ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "block text-foreground font-mono-jb", children: "571 Days" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-border/20 pb-1.5", children: "Phase Milestone Progress (Tower Heights)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-36 overflow-y-auto scrollbar-none pr-1", children: constructionMilestones.slice(5).map((mile, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10.5px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-semibold mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: mile.phase }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono-jb", children: [
                  mile.progress,
                  "% (",
                  mile.status,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-secondary/40 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${mile.status === "Complete" ? "bg-emerald-500" : mile.status === "At Risk" ? "bg-red-500" : "bg-blue-500"}`, style: {
                width: `${mile.progress}%`
              } }) })
            ] }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between border-b border-border/40 pb-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground font-display", children: "Tenant & Buyer Overview" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
              to: "/buyers"
            }), className: "text-[9.5px] font-bold text-[#0E86E9] hover:underline", children: "Portal Data →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 text-xs font-semibold text-slate-500 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/25 dark:bg-slate-950/20 border border-border/30 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-slate-400", children: "Portfolio NPS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold font-mono-jb text-[#1D9E75] mt-1", children: "74" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/25 dark:bg-slate-950/20 border border-border/30 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-slate-400", children: "Buyer Portal Active" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold font-mono-jb text-[#2E86AB] mt-1", children: "40%" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs font-semibold text-slate-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/30 pb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Leases Expiring (60 days)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-jb text-[#D85A30] font-bold", children: "6 leases" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/30 pb-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Payments Overdue" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-jb text-[#D85A30] font-bold", children: "18 buyers" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pb-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Outstanding" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-jb text-foreground font-bold", children: "₹1.61 Cr" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-3 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between border-b border-border/40 pb-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground font-display", children: "HR Leaderboard" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
              to: "/hr"
            }), className: "text-[9.5px] font-bold text-[#0E86E9] hover:underline", children: "Hiring Funnel →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 max-h-[190px] overflow-y-auto scrollbar-none pr-1", children: hrAgents.map((agent, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs p-1.5 hover:bg-secondary/20 rounded-lg transition-colors border border-transparent hover:border-border/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-full bg-slate-100 text-slate-700 grid place-items-center text-[9px] font-bold font-mono", children: agent.name.split(" ").map((n) => n[0]).join("") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-foreground flex items-center gap-1", children: [
                  agent.name,
                  agent.isTop && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-100 px-1 rounded animate-pulse", children: "⭐ Top" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-slate-400", children: agent.role })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-jb font-bold text-[#0E86E9]", children: agent.score }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[8.5px] text-slate-400 font-semibold", children: [
                agent.conv,
                "/",
                agent.leads,
                " convs"
              ] })
            ] })
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between border-b border-border/40 pb-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground font-display", children: "Analytics & ML Forecasting Dashboard" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
            to: "/analytics"
          }), className: "text-[10px] font-bold text-[#0E86E9] hover:underline", children: "Intelligence View →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-7 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs font-semibold text-slate-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "Predicted Revenue (Next 30D):",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[#1D9E75] font-mono-jb text-base block sm:inline font-bold", children: "₹1.84 Cr" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "Model Accuracy:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground font-mono-jb block sm:inline font-bold", children: "84%" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-44 w-full text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: chartData, margin: {
              top: 5,
              right: 5,
              left: -25,
              bottom: 5
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", vertical: false }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", stroke: "#6B7A8D", fontSize: 10, tickLine: false }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "#6B7A8D", fontSize: 10, tickLine: false }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ReferenceLine, { y: 3, stroke: "#D85A30", strokeDasharray: "3 3", label: {
                value: "Target",
                fill: "#D85A30",
                fontSize: 10,
                position: "top"
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "Collected", fill: "#0E86E9", radius: [4, 4, 0, 0] })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-5 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2.5", children: "Channel ROI Performance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none flex-1 justify-center flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-[9px] uppercase tracking-wider text-slate-400 font-semibold font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1.5", children: "Channel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1.5 text-right", children: "Leads" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1.5 text-right", children: "Cost/Lead" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1.5 text-right", children: "Spend" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-1.5 text-right", children: "Conv%" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/20 text-foreground font-medium", children: marketingChannels.map((ch, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 font-bold truncate max-w-[90px]", children: ch.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 text-right font-mono-jb", children: ch.leads }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 text-right font-mono-jb text-slate-400", children: ch.cpl }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 text-right font-mono-jb font-bold", children: ch.spend }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 text-right font-mono-jb text-emerald-600 font-bold", children: ch.conv })
              ] }, i)) })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4 flex flex-col justify-between min-h-[260px] border-[#0E86E9]/20 relative overflow-hidden bg-[#0B1F33] text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#0E86E9]/20 blur-[30px] pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-white/10 pb-2 mb-3 relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[9px] font-extrabold uppercase tracking-widest text-[#89C4F8]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 animate-pulse" }),
              " AI Insights Feed"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-mono font-bold text-[#89C4F8]", children: [
              insightIndex + 1,
              " / 8"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-center text-left py-2 relative z-10 animate-fade-in key={insightIndex}", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] font-bold uppercase tracking-wider text-slate-400 font-mono-jb", children: [
              "[",
              aiInsights[insightIndex].cat,
              "]"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium leading-relaxed font-display text-white mt-1.5", children: aiInsights[insightIndex].text })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-3 pt-3 border-t border-white/10 relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-400 font-medium font-sans-dm", children: "Cycles every 4s" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => alert(`Insight Action triggered: ${aiInsights[insightIndex].cat}`), className: "h-7 px-3 rounded bg-[#0E86E9] hover:bg-[#0E53A0] text-white text-[9.5px] font-bold uppercase tracking-widest transition-colors flex items-center gap-1", children: [
              aiInsights[insightIndex].action,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 flex flex-col justify-between min-h-[260px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/40 pb-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] font-extrabold uppercase tracking-widest text-red-500 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(OctagonAlert, { className: "h-3 w-3 animate-pulse" }),
              " Risk Intelligence Summary"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-mono-jb font-bold text-red-600 bg-red-50 dark:bg-red-950/20 px-2 py-0.5 rounded border border-red-100 dark:border-red-900/30 animate-pulse", children: "1 Critical Deal At Risk" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none flex-1 justify-center flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-[9px] uppercase tracking-wider text-slate-400 font-semibold font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Buyer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Value" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Risk Score" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right", children: "Days stuck" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/20 text-foreground font-medium", children: highRiskDeals.slice(0, 3).map((deal, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 font-bold", children: deal.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-right font-mono-jb text-slate-400", children: deal.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: `py-2 text-right font-mono-jb ${deal.status}`, children: deal.risk }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 text-right font-mono-jb", children: [
                deal.days,
                " days"
              ] })
            ] }, idx)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-3 p-4 flex flex-col justify-between min-h-[260px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/40 pb-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] font-extrabold uppercase tracking-widest text-[#2E86AB] flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3 w-3" }),
              " Uptime & Security"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-mono-jb font-bold text-emerald-600", children: "Scan Clean ✓" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 flex-1 justify-center flex flex-col text-xs font-semibold text-slate-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/20 pb-1 font-mono-jb", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Gemini API Uptime" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500 font-bold", children: "99.71%" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/20 pb-1 font-mono-jb", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Supabase Database" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500 font-bold", children: "99.99%" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/20 pb-1 font-mono-jb", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WhatsApp API" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500 font-bold", children: "99.83%" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pb-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Active User Sessions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-mono-jb font-bold", children: "12 Active" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-2.5 border-t border-border/40 text-[9.5px] text-slate-400 font-bold flex justify-between uppercase font-display", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "DPDP Compliance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500 font-bold font-mono", children: "Active ✅" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/40 pb-3 mb-3 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-extrabold uppercase tracking-widest text-slate-400", children: "Unified Workflow Action Queue" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-foreground font-display", children: [
              "Pending Actions Queue (",
              filteredActions.length,
              " Open)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 flex-wrap", children: ["All", "Critical", "High", "Medium", "Low"].map((filter) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActionFilter(filter), className: `h-7 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all cursor-pointer ${actionFilter === filter ? "bg-slate-800 dark:bg-slate-200 text-cream dark:text-ink border-transparent" : "border-border text-slate-500 hover:bg-secondary"}`, children: filter }, filter)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-slate-400 text-[9px] uppercase tracking-wider font-display font-semibold", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Priority" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Action Required" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Module" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Owner" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Deadline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right", children: "Operation" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/20 text-foreground font-medium bg-background/50", children: filteredActions.map((act) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] px-2 py-0.5 rounded-full font-mono font-bold uppercase border ${act.pColor}`, children: act.priority }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-bold text-foreground truncate max-w-sm", children: act.text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono-jb text-slate-400", children: act.module }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-slate-500 font-semibold", children: act.owner }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono-jb text-foreground font-bold", children: act.deadline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Navigating to handle action: ${act.text}`), className: "h-6 px-2.5 rounded bg-[#0E86E9]/10 hover:bg-[#0E86E9] text-[#0E86E9] hover:text-white border border-[#0E86E9]/20 text-[9.5px] font-bold uppercase tracking-wider transition-colors cursor-pointer", children: "Resolve" }) })
          ] }, act.id)) })
        ] }) })
      ] })
    ] }),
    isAlertsOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-80 h-full bg-card border-l border-border p-5 shadow-2xl relative animate-in slide-in-from-right duration-300 flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsAlertsOpen(false), className: "absolute top-4 right-4 h-7 w-7 rounded-full border border-border flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-colors", "aria-label": "Close alerts panel", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-base font-bold font-serif-display text-foreground mt-4 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4 text-[#D85A30]" }),
          " System Notifications"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 overflow-y-auto max-h-[calc(100vh-140px)] pr-1 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg border border-red-200 bg-red-50/50 dark:bg-red-950/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-red-800 dark:text-red-300 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 bg-red-500 rounded-full animate-pulse" }),
              "🔴 RERA Compliance Alert"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-400 mt-1 font-medium leading-relaxed", children: "QPR submissions for Greenview Heights and Skyline Residences are due in 11 days. Data compilation has not been initialized." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg border border-red-200 bg-red-50/50 dark:bg-red-950/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-red-800 dark:text-red-300 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 bg-red-500 rounded-full animate-pulse" }),
              "🔴 Stuck Pipeline Deal"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-400 mt-1 font-medium leading-relaxed", children: "Deepak Trivedi (₹82L value) is stuck in the Negotiation stage for 19 days. Risk score elevated to 87." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg border border-amber-200 bg-amber-50/50 dark:bg-amber-950/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 bg-amber-500 rounded-full animate-pulse" }),
              "🟡 OCR Service Degraded"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-400 mt-1 font-medium leading-relaxed", children: "M6 Document AI parser currently operational at 98.1% capacity. 3 agreements in processing queue. Uptime logs degraded." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsAlertsOpen(false), className: "w-full h-9 mt-4 bg-slate-800 hover:bg-slate-900 text-cream dark:bg-slate-200 dark:hover:bg-white dark:text-ink rounded-lg text-xs font-bold uppercase tracking-widest transition-all cursor-pointer", children: "Acknowledge All" })
    ] }) })
  ] });
}
export {
  Dashboard as component
};
