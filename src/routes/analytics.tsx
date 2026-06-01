import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell, Card, Stat } from "../components/AppShell";
import { useState, useMemo, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ArrowRight,
  Plus,
  Flame,
  Clock,
  Sparkles,
  User,
  Building,
  AlertTriangle,
  Calendar,
  Search,
  CheckCircle,
  GitBranch,
  RefreshCw,
  Sliders,
  DollarSign,
  Share2,
  Download,
  Info,
  CalendarDays,
  Play,
  RotateCcw,
  Activity,
  Layers,
  ArrowUpRight,
  TrendingUp,
  SlidersHorizontal,
  Mail,
  Check,
  CheckSquare,
  Square,
  FileText
} from "lucide-react";

// Route declaration
export const Route = createFileRoute("/analytics")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tab: (search.tab as string) || undefined,
    };
  },
  head: () => ({ meta: [{ title: "Analytics & Forecasting · Fortiv" }] }),
  component: AnalyticsManager,
});

type TabType =
  | "menu"
  | "overview"
  | "daily-report"
  | "forecast"
  | "inventory"
  | "investor-report"
  | "marketing-roi"
  | "executive-brief";

// --- MOCK DATA CONSTANTS ---

const reportDeliveryLog = [
  { id: 1, report: "Daily Agent Report", recipient: "Team WhatsApp Group", channel: "WhatsApp", time: "20/01/2025 07:00 PM", status: "Delivered" },
  { id: 2, report: "Executive Brief", recipient: "Directors WhatsApp", channel: "WhatsApp + Email", time: "20/01/2025 07:30 AM", status: "Delivered" },
  { id: 3, report: "Inventory Report", recipient: "Rahul Modi (Manager)", channel: "WhatsApp", time: "18/01/2025 09:00 AM", status: "Delivered" },
  { id: 4, report: "Investor Report (Monthly)", recipient: "LP Mailing List (8)", channel: "Email (PDF)", time: "15/01/2025 10:00 AM", status: "Delivered" },
  { id: 5, report: "Daily Agent Report", recipient: "Team WhatsApp Group", channel: "WhatsApp", time: "19/01/2025 07:00 PM", status: "Delivered" }
];

const dataHealthModules = [
  { id: "M1", name: "M1 — Lead Generation", type: "Lead records, scores", sync: "20/01/2025 06:58 PM", status: "Live" },
  { id: "M4", name: "M4 — Sales Pipeline", type: "Deal records, stages", sync: "20/01/2025 06:55 PM", status: "Live" },
  { id: "M4.2", name: "M4.2 — Visit Scheduler", type: "Visit completions", sync: "20/01/2025 06:55 PM", status: "Live" },
  { id: "M1.3", name: "M1.3 — Ads Sync", type: "Campaign spend + leads", sync: "20/01/2025 06:00 PM", status: "Live" },
  { id: "M9", name: "M9 — Construction", type: "Milestone updates", sync: "19/01/2025 05:00 PM", status: "Delayed" },
  { id: "M11", name: "M11 — Finance", type: "Collections, payments", sync: "20/01/2025 03:00 PM", status: "Live" },
  { id: "M6.3", name: "M6.3 — RERA Compliance", type: "Deadline calendar", sync: "18/01/2025 09:00 AM", status: "Live" }
];

const agentScorecards = [
  { agent: "Priya Rana", leads: 6, callsAtt: 6, callsConn: 6, visits: 3, bookings: 1, revenue: 56, rank: "🥇 1st", isStar: true, hasAlert: false },
  { agent: "Ankit Shah", leads: 5, callsAtt: 5, callsConn: 4, visits: 2, bookings: 0, revenue: 0, rank: "2nd", isStar: false, hasAlert: false },
  { agent: "Meera Patel", leads: 4, callsAtt: 4, callsConn: 3, visits: 1, bookings: 0, revenue: 0, rank: "3rd", isStar: false, hasAlert: false },
  { agent: "Kiran Desai", leads: 3, callsAtt: 3, callsConn: 1, visits: 0, bookings: 0, revenue: 0, rank: "⚠️ Alert", isStar: false, hasAlert: true }
];

const forecastPipelineStages = [
  { stage: "Inquiry", probability: 5, contribution: "Low" },
  { stage: "Site Visit Scheduled", probability: 10, contribution: "Low" },
  { stage: "Visited", probability: 20, contribution: "Moderate" },
  { stage: "Negotiation", probability: 40, contribution: "Significant" },
  { stage: "Booking Amount Paid", probability: 85, contribution: "High" },
  { stage: "Agreement Signed", probability: 92, contribution: "Very High" },
  { stage: "Loan Processing", probability: 95, contribution: "Near certain" },
  { stage: "Full Payment", probability: 98, contribution: "Near certain" }
];

const forecastAccuracyLog = [
  { period: "Dec 2024 (30-day)", predicted: 7, actual: 6, accuracy: "85.7%" },
  { period: "Nov 2024 (30-day)", predicted: 9, actual: 10, accuracy: "90.0%" },
  { period: "Oct 2024 (30-day)", predicted: 14, actual: 13, accuracy: "92.9%" },
  { period: "Q4 2024 (90-day)", predicted: 28, actual: 26, accuracy: "92.9%" },
  { period: "Q3 2024 (90-day)", predicted: 22, actual: 25, accuracy: "88.0%" }
];

const forecastMonthlyBase = [
  { month: "Feb 2025", low: 4.0, base: 6.0, high: 8.0, flag: "" },
  { month: "Mar 2025", low: 5.0, base: 7.0, high: 10.0, flag: "Ugadi uplift" },
  { month: "Apr 2025", low: 6.0, base: 8.0, high: 11.0, flag: "Ugadi peak" }
];

const demoProjects = [
  { id: "proj-1", name: "Fortiv Greenview Heights, Vesu, Surat", config: "2BHK/3BHK", price: "₹48L–₹85L", rera: "P01200023XXX", totalUnits: 156, sold: 108, available: 48, towersCount: 2 },
  { id: "proj-2", name: "Fortiv Skyline Residences, Gotri, Vadodara", config: "3BHK/4BHK", price: "₹90L–₹1.8Cr", rera: "Pending", totalUnits: 210, sold: 86, available: 124, towersCount: 3 },
  { id: "proj-3", name: "Fortiv Business Park, Althan, Surat", config: "Commercial", price: "₹1.2Cr–₹4.5Cr", rera: "Ready Possession", totalUnits: 72, sold: 38, available: 34, towersCount: 1 }
];

const inventorySummary = [
  { id: "inv-1", project: "Fortiv Greenview Heights", config: "2BHK", tower: "Tower A, Fl 1–5", available: 4, velocity: "Normal", avgDays: 38, action: "Monitor", color: "text-[#E8A838]" },
  { id: "inv-2", project: "Fortiv Greenview Heights", config: "2BHK", tower: "Tower A, Fl 11–14", available: 7, velocity: "Fast", avgDays: 22, action: "—", color: "text-[#1D9E75]" },
  { id: "inv-3", project: "Fortiv Greenview Heights", config: "3BHK", tower: "Tower B", available: 11, velocity: "Slow", avgDays: 67, action: "Scheme active", color: "text-[#D85A30]" },
  { id: "inv-4", project: "Fortiv Skyline Residences", config: "3BHK", tower: "Tower 1", available: 18, velocity: "Normal", avgDays: 44, action: "Monitor", color: "text-[#E8A838]" },
  { id: "inv-5", project: "Fortiv Skyline Residences", config: "4BHK", tower: "Tower 2", available: 6, velocity: "Stalled", avgDays: 94, action: "Escalate", color: "text-[#D85A30] animate-pulse" },
  { id: "inv-6", project: "Fortiv Business Park", config: "Commercial", tower: "Block C", available: 9, velocity: "Normal", avgDays: 52, action: "Monitor", color: "text-[#E8A838]" }
];

const schemeEffectiveness = [
  { id: 1, name: "Free Parking (Feb 2025)", project: "Greenview Heights", unitType: "2BHK T-A Fl 1–5", launchDate: "01/02/2025", before: "0.4 units/wk", after: "0.8 units/wk", uplift: "+100%" },
  { id: 2, name: "₹50K Stamp Duty Subsidy", project: "Greenview Heights", unitType: "3BHK T-B", launchDate: "15/01/2025", before: "0.3 units/wk", after: "0.5 units/wk", uplift: "+67%" },
  { id: 3, name: "No Floor Rise (Jan)", project: "Skyline Residences", unitType: "All", launchDate: "01/01/2025", before: "0.6 units/wk", after: "0.9 units/wk", uplift: "+50%" }
];

const mockDistributionLog = [
  { id: 1, report: "Monthly Update", project: "Greenview Heights", period: "Jan 2025", generated: "01/02 09:02", recipients: 8, opened: "7/8 (87.5%)", portal: true },
  { id: 2, report: "Monthly Update", project: "Skyline Residences", period: "Jan 2025", generated: "01/02 09:05", recipients: 5, opened: "4/5 (80.0%)", portal: true },
  { id: 3, report: "Quarterly — Q4 2024", project: "Greenview Heights", period: "Oct–Dec 2024", generated: "02/01 10:00", recipients: 8, opened: "8/8 (100%)", portal: true },
  { id: 4, report: "Flash — Possession Notice", project: "Business Park", period: "—", generated: "18/01 11:30", recipients: 3, opened: "3/3 (100%)", portal: true }
];

const channelPerformanceBase = [
  { channel: "Referral", spend: 40000, leads: 8, score: 76, visits: 6, bookings: 3, cpb: 13333, cpl: 5000, cpv: 6667, roi: 12.6 },
  { channel: "WhatsApp Organic", spend: 0, leads: 14, score: 69, visits: 9, bookings: 2, cpb: 0, cpl: 0, cpv: 0, roi: Infinity },
  { channel: "Google Ads", spend: 120000, leads: 26, score: 52, visits: 10, bookings: 2, cpb: 60000, cpl: 4615, cpv: 12000, roi: 2.8 },
  { channel: "Facebook Ads", spend: 180000, leads: 47, score: 45, visits: 14, bookings: 2, cpb: 90000, cpl: 3830, cpv: 12857, roi: 1.9 },
  { channel: "99acres", spend: 150000, leads: 28, score: 58, visits: 8, bookings: 1, cpb: 150000, cpl: 5357, cpv: 18750, roi: 1.1 },
  { channel: "MagicBricks", spend: 120000, leads: 19, score: 55, visits: 5, bookings: 1, cpb: 120000, cpl: 6316, cpv: 24000, roi: 1.3 },
  { channel: "Instagram Ads", spend: 80000, leads: 22, score: 43, visits: 6, bookings: 0, cpb: 0, cpl: 3636, cpv: 13333, roi: 0.0 },
  { channel: "Housing.com", spend: 90000, leads: 11, score: 49, visits: 3, bookings: 0, cpb: 0, cpl: 8182, cpv: 30000, roi: 0.0 }
];

const campaignPerformance = [
  { campaign: "Greenview Heights — Jan 2025", platform: "Facebook", spend: 110000, leads: 34, cpl: 3235, visits: 10, bookings: 2, cpb: 55000 },
  { campaign: "Surat 2BHK Google Search", platform: "Google", spend: 80000, leads: 18, cpl: 4444, visits: 7, bookings: 2, cpb: 40000 },
  { campaign: "Business Park Commercial", platform: "Facebook", spend: 70000, leads: 13, cpl: 5385, visits: 4, bookings: 0, cpb: 0 },
  { campaign: "Vesu Locality Awareness", platform: "Instagram", spend: 80000, leads: 22, cpl: 3636, visits: 6, bookings: 0, cpb: 0 }
];

const historicalBriefsLog = [
  { week: "W03 2025", period: "13–19 Jan", delivered: "20 Jan 07:30", wa: "Opened", email: "3/3 Opened", actions: "3 of 5" },
  { week: "W02 2025", period: "06–12 Jan", delivered: "13 Jan 07:30", wa: "Opened", email: "3/3 Opened", actions: "4 of 5" },
  { week: "W01 2025", period: "30 Dec–05 Jan", delivered: "06 Jan 07:30", wa: "Opened", email: "2/3 Opened", actions: "2 of 5" },
  { week: "W52 2024", period: "23–29 Dec", delivered: "30 Dec 07:30", wa: "Opened", email: "3/3 Opened", actions: "5 of 5" }
];

// Helper to format currency
const formatInr = (value: number, type: "L" | "Cr" | "Rs" = "Rs") => {
  if (type === "Cr") return `₹${value.toFixed(2)} Cr`;
  if (type === "L") return `₹${value} L`;
  return `₹${value.toLocaleString("en-IN")}`;
};

function AnalyticsManager() {
  const { tab } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const activeTab = (tab as TabType) || "menu";
  const setActiveTab = (newTab: TabType | ((prev: TabType) => TabType)) => {
    const nextTab = typeof newTab === "function" ? newTab(activeTab) : newTab;
    navigate({
      search: (prev: any) => ({ ...prev, tab: nextTab === "menu" ? undefined : nextTab }),
    });
  };

  const submodulesList = [
    {
      id: "overview",
      name: "Dashboard Overview",
      desc: "Helicopter view of reports logs, data health indicators, and core operational stats.",
      stats: "47 reports sent",
      status: "Active"
    },
    {
      id: "daily-report",
      name: "Daily Performance Report",
      desc: "Daily activity scorecards compiled automatically for the team and management at 7 PM.",
      stats: "77.8% Contact Rate",
      status: "Scheduled"
    },
    {
      id: "forecast",
      name: "Sales Forecast Dashboard",
      desc: "ML forecasting engine simulating 30/60/90-day booking runs under macro scenario settings.",
      stats: "84.0% Model Acc.",
      status: "Active"
    },
    {
      id: "inventory",
      name: "Inventory Velocity Tracker",
      desc: "Real-time block velocity heatmaps, pricing triggers, and slow-mover tracking systems.",
      stats: "116 available units",
      status: "Active"
    },
    {
      id: "investor-report",
      name: "Investor & LP Report Generator",
      desc: "One-click compiled investor dossiers with automated text formatting and portal sync.",
      stats: "Monthly run ready",
      status: "Active"
    },
    {
      id: "marketing-roi",
      name: "Marketing ROI Dashboard",
      desc: "Blended cost-per-booking tracking with multi-touch attribution and spend calculators.",
      stats: "₹7.7L spend tracked",
      status: "Active"
    },
    {
      id: "executive-brief",
      name: "Executive Weekly Briefing",
      desc: "AI compiled executive briefing PDFs and WhatsApp summaries generated every Monday.",
      stats: "Next brief W04",
      status: "Scheduled"
    }
  ];

  // Helper method to return page header info
  const getPageHeader = () => {
    switch (activeTab) {
      case "menu":
        return {
          title: "Analytics, Forecasting & Reporting",
          subtitle: "Real-time intelligence that turns operational data into decisions — automated reports, AI forecasts, and performance visibility without spreadsheets.",
        };
      case "overview":
        return {
          title: "Analytics Dashboard Overview",
          subtitle: "Live system health monitoring, recent reports dispatched, and quick access.",
        };
      case "daily-report":
        return {
          title: "Daily Performance Report",
          subtitle: "Automated end-of-day team activity summary. WhatsApp and Email dispatches trigger at 7:00 PM.",
        };
      case "forecast":
        return {
          title: "Sales Forecast Agent",
          subtitle: "90-day booking forecasts utilizing historical pricing records, pipeline weightings, and seasonal models.",
        };
      case "inventory":
        return {
          title: "Inventory Velocity Tracker",
          subtitle: "Tower-level absorption heatmap, price sensitivity recommendations, and orphan assignment filters.",
        };
      case "investor-report":
        return {
          title: "Investor & LP Report Generator",
          subtitle: "Multi-page branded investor briefings generated instantly from active operations data.",
        };
      case "marketing-roi":
        return {
          title: "Marketing ROI Dashboard",
          subtitle: "Portals and social media spend vs revenue attribution logs, cost-per-booking ratios, and spend projections.",
        };
      case "executive-brief":
        return {
          title: "Executive Weekly Briefing",
          subtitle: "Leadership briefing pack compiled from M1-M11 operational variables for Monday mornings.",
        };
      default:
        return {
          title: "Analytics, Forecasting & Reporting",
          subtitle: "Real-time intelligence & forecasting command center.",
        };
    }
  };

  const headerInfo = getPageHeader();

  const dynamicTitle = activeTab === "menu" ? (
    headerInfo.title
  ) : (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setActiveTab("menu")}
        className="group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95 mr-0.5"
        aria-label="Back to analytics menu"
      >
        <ChevronLeft className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>
      <span
        className="font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors"
        onClick={() => setActiveTab("menu")}
      >
        {headerInfo.title}
      </span>
    </div>
  );

  // --- 1. Dashboard Overview Renders ---
  const renderDashboardOverview = () => {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        {/* Top KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatBox label="Reports Delivered (Month)" value="47" desc="Total dispatches" color="text-[#2E86AB]" />
          <StatBox label="Forecast Accuracy" value="84%" desc="Trailing 30-day actuals" color="text-[#1D9E75]" />
          <StatBox label="Channels Tracked" value="10" desc="Ad platforms + portals" color="text-[#1A3C5E]" />
          <StatBox label="Forecasted Revenue (30D)" value="₹1.84 Cr" desc="Weighted projections" color="text-[#1D9E75]" />
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Report Delivery Log */}
          <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card">
            <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" /> Automated Report Delivery Log (7 Days)
              </div>
            </div>
            <div className="overflow-x-auto scrollbar-none h-[280px]">
              <table className="w-full text-left text-xs divide-y divide-border/60">
                <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                  <tr>
                    <th className="px-3 py-2">Report</th>
                    <th className="px-3 py-2">Delivered To</th>
                    <th className="px-3 py-2">Channel</th>
                    <th className="px-3 py-2">Time</th>
                    <th className="px-3 py-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30 bg-background font-medium text-foreground">
                  {reportDeliveryLog.map((log) => (
                    <tr key={log.id} className="hover:bg-secondary/15">
                      <td className="px-3 py-2.5 font-bold">{log.report}</td>
                      <td className="px-3 py-2.5 text-slate-500 font-semibold">{log.recipient}</td>
                      <td className="px-3 py-2.5 font-mono text-[10px]">{log.channel}</td>
                      <td className="px-3 py-2.5 font-mono text-slate-400">{log.time}</td>
                      <td className="px-3 py-2.5">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-mono">
                          <Check className="h-3 w-3" /> {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Source Data Health panel */}
          <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card">
            <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5 text-emerald-600 animate-pulse" /> Data Source Health Panel
              </div>
            </div>
            <div className="overflow-y-auto h-[280px] space-y-2 pr-1 scrollbar-none">
              {dataHealthModules.map((mod) => (
                <div key={mod.id} className="p-2.5 rounded-xl border border-border/60 bg-background flex items-center justify-between text-xs transition-colors hover:bg-secondary/15">
                  <div className="space-y-0.5">
                    <div className="font-bold text-foreground">{mod.name}</div>
                    <div className="text-[10px] text-muted-foreground font-semibold">{mod.type}</div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center gap-1 text-[9px] font-extrabold font-mono px-2 py-0.5 rounded ${
                      mod.status === "Live" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-amber-50 text-amber-600 border border-amber-100"
                    }`}>
                      <span className={`h-1 w-1 rounded-full ${mod.status === "Live" ? "bg-emerald-500" : "bg-amber-500 animate-pulse"}`} />
                      {mod.status}
                    </span>
                    <div className="text-[8.5px] font-mono text-slate-400 mt-1">Sync: {mod.sync.split(" ")[1]}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // --- 2. Daily Performance Report States & Renders ---
  const [selectedAgentMsg, setSelectedAgentMsg] = useState<string | null>(null);
  const [selectedAgentAlert, setSelectedAgentAlert] = useState<string | null>(null);

  const teamSummary = {
    leads: 18,
    leadsDelta: "+3",
    contacts: 14,
    contactRate: "77.8%",
    visits: 6,
    visitsDelta: "+2",
    bookings: 1,
    bookingsValue: "₹56L",
    followups: 34
  };

  const renderDailyReport = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        {/* Team Funnel Strip */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 border border-border bg-card p-4 rounded-2xl">
          <div className="text-center border-r border-border/40 last:border-0">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Leads Received</div>
            <div className="text-base font-bold text-foreground font-mono mt-1">{teamSummary.leads} <span className="text-emerald-500 text-[10px]">{teamSummary.leadsDelta}</span></div>
          </div>
          <div className="text-center md:border-r border-border/40 last:border-0">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Leads Contacted</div>
            <div className="text-base font-bold text-foreground font-mono mt-1">{teamSummary.contacts}</div>
          </div>
          <div className="text-center md:border-r border-border/40 last:border-0">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Contact Rate</div>
            <div className="text-base font-bold text-emerald-600 font-mono mt-1">{teamSummary.contactRate}</div>
          </div>
          <div className="text-center md:border-r border-border/40 last:border-0">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Site Visits Done</div>
            <div className="text-base font-bold text-foreground font-mono mt-1">{teamSummary.visits} <span className="text-emerald-500 text-[10px]">{teamSummary.visitsDelta}</span></div>
          </div>
          <div className="text-center last:border-0">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Daily Bookings</div>
            <div className="text-base font-bold text-[#1D9E75] font-mono mt-1">{teamSummary.bookings} <span className="text-[11px] font-semibold">({teamSummary.bookingsValue})</span></div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Agent Scorecards List */}
          <div className="col-span-12 lg:col-span-8 space-y-3">
            <div className="flex items-center justify-between px-1">
              <h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Sales Agent Scorecards</h3>
              <span className="text-[10px] font-bold text-slate-400 font-mono">Last updated today at 6:45 PM</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {agentScorecards.map((item) => (
                <Card 
                  key={item.agent} 
                  className={`p-4 border transition-all duration-300 flex flex-col justify-between h-48 bg-card ${
                    item.isStar 
                      ? "border-amber-400/80 shadow-[0_4px_16px_rgba(232,168,56,0.06)]" 
                      : item.hasAlert 
                        ? "border-[#D85A30]/60" 
                        : "border-border/60 hover:border-slate-400"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-foreground font-display">{item.agent}</span>
                        {item.isStar && <span className="text-[9px] bg-amber-50 text-amber-700 font-extrabold px-1.5 py-0.5 rounded-full border border-amber-100 flex items-center gap-0.5">⭐ STAR</span>}
                        {item.hasAlert && <span className="text-[9px] bg-red-50 text-[#D85A30] font-extrabold px-1.5 py-0.5 rounded-full border border-red-100 flex items-center gap-0.5">⚠️ ALERT</span>}
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${item.isStar ? "bg-amber-100 text-amber-800" : "bg-secondary text-slate-600"}`}>
                        {item.rank}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs font-mono py-1 border-y border-border/40">
                      <div>
                        <div className="text-[8px] text-muted-foreground uppercase font-sans font-bold">Leads</div>
                        <div className="font-bold text-foreground mt-0.5">{item.leads}</div>
                      </div>
                      <div>
                        <div className="text-[8px] text-muted-foreground uppercase font-sans font-bold">Calls (C/A)</div>
                        <div className="font-bold text-foreground mt-0.5">{item.callsConn}/{item.callsAtt}</div>
                      </div>
                      <div>
                        <div className="text-[8px] text-muted-foreground uppercase font-sans font-bold">Visits</div>
                        <div className="font-bold text-foreground mt-0.5">{item.visits}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <div>
                      <div className="text-[8.5px] text-muted-foreground font-bold uppercase">Revenue Generated</div>
                      <div className="text-xs font-mono font-bold text-foreground">
                        {item.revenue > 0 ? formatInr(item.revenue, "L") : "—"}
                      </div>
                    </div>
                    
                    <div className="flex gap-1.5">
                      <button 
                        onClick={() => setSelectedAgentMsg(item.agent)}
                        className="h-6 px-2 rounded bg-secondary hover:bg-ink hover:text-cream text-[9px] font-bold transition-all border border-border/50 uppercase tracking-widest"
                      >
                        Preview WA
                      </button>
                      {item.hasAlert && (
                        <button 
                          onClick={() => setSelectedAgentAlert(item.agent)}
                          className="h-6 px-2 rounded bg-red-50 hover:bg-[#D85A30] hover:text-white text-[#D85A30] text-[9px] font-bold transition-all border border-red-200 uppercase tracking-widest animate-pulse"
                        >
                          Alert Detail
                        </button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sparklines & Conf Panel */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <Card className="p-4 border border-border bg-card">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display mb-3 border-b border-border/40 pb-2">
                Team Funnel Conversion Trend (7 Days)
              </h4>
              <div className="space-y-3.5">
                {[
                  { label: "Leads Sourced", base: [12, 14, 18, 11, 15, 13, 18], color: "#2E86AB", current: 18 },
                  { label: "Site Visits", base: [3, 4, 6, 2, 5, 4, 6], color: "#0E86E9", current: 6 },
                  { label: "Bookings", base: [0, 1, 0, 1, 0, 0, 1], color: "#1D9E75", current: 1 }
                ].map((spark) => (
                  <div key={spark.label} className="flex items-center justify-between text-xs">
                    <div className="space-y-0.5">
                      <span className="font-bold text-foreground">{spark.label}</span>
                      <div className="text-[10.5px] font-mono text-slate-400 font-bold">{spark.current} today</div>
                    </div>
                    {/* Tiny inline SVG Sparkline */}
                    <div className="w-24 h-8">
                      <svg className="w-full h-full" viewBox="0 0 100 30">
                        <polyline
                          fill="none"
                          stroke={spark.color}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points={spark.base.map((val, idx) => `${(idx * 16) + 2},${28 - (val * 1.3)}`).join(" ")}
                        />
                        {/* Highlights last point */}
                        <circle
                          cx="98"
                          cy={28 - (spark.base[spark.base.length - 1] * 1.3)}
                          r="3"
                          fill={spark.color}
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-4 border border-border bg-card space-y-3">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display border-b border-border/40 pb-2">
                Report Transmission Logs
              </h4>
              <div className="space-y-2 text-xs font-semibold">
                <div className="flex items-center justify-between text-slate-500 border-b border-border/30 pb-2">
                  <span>WhatsApp Broadcast Group</span>
                  <span className="text-emerald-600 font-mono text-[10.5px] font-extrabold flex items-center gap-1">
                    ✅ Sent 7:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-500 border-b border-border/30 pb-2">
                  <span>Management Email Queue</span>
                  <span className="text-emerald-600 font-mono text-[10.5px] font-extrabold flex items-center gap-1">
                    ✅ Sent 7:01 PM
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-500 pb-1">
                  <span>PDF Document Compiled</span>
                  <span className="text-emerald-600 font-mono text-[10.5px] font-extrabold flex items-center gap-1">
                    ✅ Saved (4.2MB)
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* WhatsApp Preview modals */}
        {selectedAgentMsg && (
          <div className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex items-center justify-center p-4">
            <Card className="w-full max-w-md p-5 border border-border bg-card shadow-2xl space-y-4">
              <div className="flex justify-between items-center border-b border-border/40 pb-2">
                <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">
                  WhatsApp Report Preview · {selectedAgentMsg}
                </h4>
                <button onClick={() => setSelectedAgentMsg(null)} className="text-xs font-bold text-slate-400 hover:text-slate-600">Close</button>
              </div>
              <div className="p-3.5 bg-secondary/35 rounded-xl border border-border/60 font-mono text-[10.5px] text-foreground leading-relaxed whitespace-pre-wrap">
                {`📊 *Fortiv Solutions — Daily Performance Report*
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

Powered by Fortiv AI Command Center`}
              </div>
              <div className="text-[10px] text-slate-400 font-semibold text-center uppercase tracking-widest">
                Dispatched via WhatsApp Business Cloud API
              </div>
            </Card>
          </div>
        )}

        {selectedAgentAlert && (
          <div className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex items-center justify-center p-4">
            <Card className="w-full max-w-md p-5 border border-border bg-card shadow-2xl space-y-4">
              <div className="flex justify-between items-center border-b border-[#D85A30]/40 pb-2">
                <h4 className="font-bold text-xs uppercase text-[#D85A30] tracking-wider font-display flex items-center gap-1">
                  <AlertTriangle className="h-4 w-4" /> Manager Alert Detail
                </h4>
                <button onClick={() => setSelectedAgentAlert(null)} className="text-xs font-bold text-slate-400 hover:text-slate-600">Close</button>
              </div>
              <div className="p-3.5 bg-red-50/40 rounded-xl border border-red-200 font-mono text-[10.5px] text-[#D85A30] leading-relaxed whitespace-pre-wrap">
                {`⚠️ *Manager Alert — 20 January 2025*

Kiran Desai contacted only 1 of 3 assigned leads today.
Call connect rate: 33% (team avg: 78%)
Visits completed: 0 of 1 scheduled.

Recommend: Check in before tomorrow morning.`}
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => {
                    alert("WhatsApp notification dispatched to Kiran Desai: 'Please update your call logs for today.'");
                    setSelectedAgentAlert(null);
                  }}
                  className="flex-1 h-8 rounded bg-ink hover:bg-ink/90 text-cream text-[10px] font-bold uppercase tracking-widest"
                >
                  Nudge Agent
                </button>
                <button 
                  onClick={() => setSelectedAgentAlert(null)}
                  className="h-8 px-4 rounded border border-border hover:bg-secondary text-slate-500 text-[10px] font-bold uppercase tracking-widest"
                >
                  Dismiss Alert
                </button>
              </div>
            </Card>
          </div>
        )}
      </div>
    );
  };

  // --- 3. Sales Forecast Agent States & Renders ---
  const [agentsModifier, setAgentsModifier] = useState(0);
  const [diwaliScheme, setDiwaliScheme] = useState(false);
  const [fbSpendModifier, setFbSpendModifier] = useState(0); // in Lakhs
  const [reraDelay, setReraDelay] = useState(false);
  const [rateUplift, setRateUplift] = useState(false);

  // Recalculates forecast based on active variables
  const forecastMetrics = useMemo(() => {
    let modifier = 0;
    
    // Scenarios weights
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

    // Revenue base ratios
    const base30Rev = 3.8;
    const base60Rev = 8.2;
    const base90Rev = 13.1;

    // Diwali drops margins slightly
    const marginMod = diwaliScheme ? 0.97 : 1;
    const r30 = Math.max(0.5, base30Rev * (1 + modifier) * marginMod);
    const r60 = Math.max(1.0, base60Rev * (1 + modifier) * marginMod);
    const r90 = Math.max(2.0, base90Rev * (1 + modifier) * marginMod);

    return {
      b30, b60, b90,
      r30, r60, r90,
      low30: r30 * 0.82, high30: r30 * 1.21,
      low60: r60 * 0.83, high60: r60 * 1.17,
      low90: r90 * 0.82, high90: r90 * 1.18,
      modifierPercent: Math.round(modifier * 100)
    };
  }, [agentsModifier, diwaliScheme, fbSpendModifier, reraDelay, rateUplift]);

  const hasShortfallRisk = forecastMetrics.r30 < 3.0; // Target is around 3.8Cr

  const renderForecast = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        
        {/* Shortfall warning banner */}
        {hasShortfallRisk && (
          <div className="p-3 bg-[#D85A30]/10 border border-[#D85A30]/30 rounded-xl text-[#D85A30] flex items-center justify-between text-xs font-semibold animate-bounce">
            <span className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              <strong>Shortfall Risk Alert:</strong> 30-day forecasted revenue ({formatInr(forecastMetrics.r30, "Cr")}) has fallen below the targets threshold.
            </span>
            <span className="text-[10px] font-bold font-mono">CRITICAL STAGE</span>
          </div>
        )}

        {/* Forecast KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatBox label="30-day Revenue Forecast" value={formatInr(forecastMetrics.r30, "Cr")} desc={`${forecastMetrics.b30} bookings`} color="text-[#1A3C5E]" />
          <StatBox label="60-day Revenue Forecast" value={formatInr(forecastMetrics.r60, "Cr")} desc={`${forecastMetrics.b60} bookings`} color="text-[#1A3C5E]" />
          <StatBox label="90-day Revenue Forecast" value={formatInr(forecastMetrics.r90, "Cr")} desc={`${forecastMetrics.b90} bookings`} color="text-[#1A3C5E]" />
          <StatBox label="ML Forecast Accuracy" value="84%" desc="Trailing 6M Average" color="text-[#1D9E75]" />
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Projections Chart (SVG Bars) */}
          <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card">
            <div className="flex justify-between items-center mb-4 border-b border-border/40 pb-2">
              <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">
                Forecasted Projections with Confidence Bands
              </h4>
              <div className="flex gap-3 text-[9px] font-bold uppercase tracking-widest text-slate-400 font-display">
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-sky-100 border border-sky-300" /> Range</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-primary" /> Forecast Value</span>
              </div>
            </div>

            {/* Custom SVG bar representation */}
            <div className="w-full overflow-x-auto scrollbar-none py-2">
              <svg className="min-w-[450px] w-full h-[220px]" viewBox="0 0 500 220">
                {/* Horizontal gridlines */}
                {[0, 5, 10, 15, 20].map((grid, idx) => {
                  const y = 170 - (grid * 8);
                  return (
                    <g key={idx}>
                      <line x1="50" y1={y} x2="480" y2={y} stroke="rgba(148, 163, 184, 0.1)" strokeWidth="1" />
                      <text x="35" y={y + 3} textAnchor="end" className="text-[8.5px] font-mono fill-slate-400 font-bold">{grid} Cr</text>
                    </g>
                  );
                })}

                {/* Draw ranges and bars */}
                {[
                  { label: "Feb 2025 (30D)", val: forecastMetrics.r30, low: forecastMetrics.low30, high: forecastMetrics.high30, fill: "#2E86AB" },
                  { label: "Mar 2025 (60D)", val: forecastMetrics.r60, low: forecastMetrics.low60, high: forecastMetrics.high60, fill: "#0E86E9" },
                  { label: "Apr 2025 (90D)", val: forecastMetrics.r90, low: forecastMetrics.low90, high: forecastMetrics.high90, fill: "#1A3C5E" }
                ].map((bar, i) => {
                  const x = 110 + i * 130;
                  const barW = 36;
                  
                  // Heights conversion
                  const valY = 170 - (bar.val * 8);
                  const lowY = 170 - (bar.low * 8);
                  const highY = 170 - (bar.high * 8);
                  
                  return (
                    <g key={bar.label} className="group/bar">
                      {/* Translucent Confidence Interval Shaded Area */}
                      <rect 
                        x={x - 6} 
                        y={highY} 
                        width={barW + 12} 
                        height={Math.max(4, lowY - highY)} 
                        fill="rgba(14, 134, 233, 0.08)" 
                        stroke="rgba(14, 134, 233, 0.2)"
                        strokeDasharray="2 2"
                        rx="4"
                      />
                      
                      {/* Forecast value bar */}
                      <rect 
                        x={x} 
                        y={valY} 
                        width={barW} 
                        height={Math.max(4, 170 - valY)} 
                        fill={bar.fill} 
                        rx="3" 
                        className="transition-all duration-500 ease-out"
                      />

                      {/* Low/High lines indicators */}
                      <line x1={x - 4} y1={highY} x2={x + barW + 4} y2={highY} stroke="#0E86E9" strokeWidth="1.5" />
                      <line x1={x - 4} y1={lowY} x2={x + barW + 4} y2={lowY} stroke="#0E86E9" strokeWidth="1.5" />
                      <line x1={x + barW/2} y1={highY} x2={x + barW/2} y2={lowY} stroke="#0E86E9" strokeWidth="1" strokeDasharray="2 2" />

                      {/* Month Text */}
                      <text x={x + barW/2} y="190" textAnchor="middle" className="text-[10px] font-bold fill-foreground">{bar.label}</text>
                      
                      {/* Values overlay on hover */}
                      <text x={x + barW/2} y={valY - 12} textAnchor="middle" className="text-[9.5px] font-mono font-bold fill-primary opacity-0 group-hover/bar:opacity-100 transition-opacity">
                        ₹{bar.val.toFixed(2)}Cr
                      </text>
                      <text x={x + barW/2} y={highY - 4} textAnchor="middle" className="text-[7.5px] font-mono fill-cyan-700 opacity-0 group-hover/bar:opacity-100 transition-opacity font-bold">
                        H: ₹{bar.high.toFixed(2)}Cr
                      </text>
                    </g>
                  );
                })}

                <line x1="50" y1="170" x2="480" y2="170" stroke="#1e293b" strokeWidth="1.5" />
              </svg>
            </div>
          </Card>

          {/* Scenario Modelling sliders */}
          <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
            <div>
              <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2">
                Scenario Modelling Simulation
              </h4>
              <p className="text-[10.5px] text-slate-400 font-semibold leading-relaxed mt-2">
                Toggle macroeconomic properties and sales variables to test forecast impacts in real time.
              </p>
            </div>

            <div className="space-y-3">
              {/* Slider 1: Active Agents */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-500">Add Active Sales Agents</span>
                  <span className="font-mono text-primary font-bold">+{agentsModifier} Agents ({Math.round(agentsModifier * 9)}% uplift)</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="5" 
                  value={agentsModifier} 
                  onChange={(e) => setAgentsModifier(parseInt(e.target.value))}
                  className="w-full accent-primary bg-secondary h-1.5 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Slider 2: Ads Spend */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-500">Increase FB/IG Ads Budget</span>
                  <span className="font-mono text-primary font-bold">+₹{fbSpendModifier}L/month ({fbSpendModifier * 12}% uplift)</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="2" 
                  step="0.5"
                  value={fbSpendModifier} 
                  onChange={(e) => setFbSpendModifier(parseFloat(e.target.value))}
                  className="w-full accent-primary bg-secondary h-1.5 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Toggle 1: Diwali Scheme */}
              <div className="flex items-center justify-between py-1 border-t border-border/40 mt-2">
                <div className="text-xs font-semibold">
                  <div className="text-slate-600 font-bold">Diwali 3% Discount Scheme</div>
                  <div className="text-[9.5px] text-slate-400 font-semibold">Uplifts volume +28%, margin drops -3%</div>
                </div>
                <input 
                  type="checkbox"
                  checked={diwaliScheme}
                  onChange={(e) => setDiwaliScheme(e.target.checked)}
                  className="h-4 w-4 accent-primary cursor-pointer"
                />
              </div>

              {/* Toggle 2: RERA Delay */}
              <div className="flex items-center justify-between py-1 border-t border-border/40">
                <div className="text-xs font-semibold">
                  <div className="text-slate-600 font-bold">Project RERA Extension Delay</div>
                  <div className="text-[9.5px] text-slate-400 font-semibold">Deflates quarterly bookings by -22%</div>
                </div>
                <input 
                  type="checkbox"
                  checked={reraDelay}
                  onChange={(e) => setReraDelay(e.target.checked)}
                  className="h-4 w-4 accent-primary cursor-pointer"
                />
              </div>

              {/* Toggle 3: Loan Rate up */}
              <div className="flex items-center justify-between py-1 border-t border-border/40">
                <div className="text-xs font-semibold">
                  <div className="text-slate-600 font-bold">SBI Home Loan Interest Rate +50bps</div>
                  <div className="text-[9.5px] text-slate-400 font-semibold">Contracts price-sensitive buyers (-8% impact)</div>
                </div>
                <input 
                  type="checkbox"
                  checked={rateUplift}
                  onChange={(e) => setRateUplift(e.target.checked)}
                  className="h-4 w-4 accent-primary cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-2 border-t border-border/40 text-center">
              <span className="text-[10px] font-mono font-extrabold text-slate-400 uppercase tracking-widest">
                Net Forecast Adjustment: {forecastMetrics.modifierPercent >= 0 ? `+${forecastMetrics.modifierPercent}` : forecastMetrics.modifierPercent}%
              </span>
            </div>
          </Card>
        </div>

        {/* Lower tables */}
        <div className="grid grid-cols-12 gap-5">
          {/* Pipeline Stage probability contribution */}
          <Card className="col-span-12 lg:col-span-6 p-4 border border-border bg-card">
            <h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display mb-3 border-b border-border/40 pb-2">
              Pipeline Stage Weightings & Forecast Contributions
            </h3>
            <div className="overflow-x-auto scrollbar-none max-h-[220px]">
              <table className="w-full text-left text-xs divide-y divide-border/60">
                <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                  <tr>
                    <th className="px-3 py-2">Pipeline Stage</th>
                    <th className="px-3 py-2">Conversion Probability</th>
                    <th className="px-3 py-2 font-mono">Weight contribution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30 bg-background font-medium text-slate-600">
                  {forecastPipelineStages.map((row) => (
                    <tr key={row.stage} className="hover:bg-secondary/15">
                      <td className="px-3 py-2 text-foreground font-bold">{row.stage}</td>
                      <td className="px-3 py-2 font-mono text-foreground">{row.probability}%</td>
                      <td className="px-3 py-2 font-mono">{row.contribution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Model Accuracy Log */}
          <Card className="col-span-12 lg:col-span-6 p-4 border border-border bg-card">
            <h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display mb-3 border-b border-border/40 pb-2">
              Model Historical Accuracy Log
            </h3>
            <div className="overflow-x-auto scrollbar-none max-h-[220px]">
              <table className="w-full text-left text-xs divide-y divide-border/60">
                <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                  <tr>
                    <th className="px-3 py-2">Validation Period</th>
                    <th className="px-3 py-2">Predicted Bookings</th>
                    <th className="px-3 py-2">Actual Bookings</th>
                    <th className="px-3 py-2 font-mono">Accuracy Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30 bg-background font-medium text-slate-600">
                  {forecastAccuracyLog.map((row) => (
                    <tr key={row.period} className="hover:bg-secondary/15">
                      <td className="px-3 py-2 text-foreground font-bold">{row.period}</td>
                      <td className="px-3 py-2 font-mono text-foreground">{row.predicted}</td>
                      <td className="px-3 py-2 font-mono text-foreground">{row.actual}</td>
                      <td className="px-3 py-2 font-mono text-emerald-600 font-extrabold">{row.accuracy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // --- 4. Inventory Velocity Tracker States & Renders ---
  const [selectedProject, setSelectedProject] = useState("proj-1");
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [orphanReassigned, setOrphanReassigned] = useState(false);
  const [activeSchemes, setActiveSchemes] = useState<number[]>([]);

  const handleCellClick = (unitId: string) => {
    setSelectedUnit(unitId);
  };

  // Simulated floor plan grids (14 floors, 4 units per floor)
  // Let's create a deterministic grid for project towers.
  const heatmapGrid = useMemo(() => {
    const arr = [];
    const seed = selectedProject === "proj-1" ? 11 : selectedProject === "proj-2" ? 23 : 37;
    for (let f = 14; f >= 1; f--) {
      for (let u = 1; u <= 4; u++) {
        const unitNumber = f * 100 + u;
        const hash = (f * 7 + u * 13 + seed) % 100;
        let status: "sold" | "negotiation" | "available" | "held" = "sold";
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
          askingPrice: 4700 + (hash * 10),
          pitching: status === "negotiation" ? "Priya Rana" : status === "available" && unitNumber === 604 && !orphanReassigned ? "Ankit Shah (Orphan)" : "Unassigned"
        });
      }
    }
    return arr;
  }, [selectedProject, orphanReassigned]);

  // Count availability
  const heatmapStats = useMemo(() => {
    const stats = { sold: 0, negotiation: 0, available: 0, held: 0 };
    heatmapGrid.forEach(u => stats[u.status]++);
    return stats;
  }, [heatmapGrid]);

  const renderInventory = () => {
    const projectDetails = demoProjects.find(p => p.id === selectedProject) || demoProjects[0];
    const activeUnitDetail = heatmapGrid.find(u => u.id === selectedUnit);

    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        
        {/* Project Selector Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border rounded-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Target Project:</span>
            <select
              value={selectedProject}
              onChange={(e) => {
                setSelectedProject(e.target.value);
                setSelectedUnit(null);
              }}
              className="h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs font-bold"
            >
              {demoProjects.map((p) => (
                <option key={p.id} value={p.id}>{p.name.split(",")[0]}</option>
              ))}
            </select>
          </div>
          <span className="text-xs font-semibold text-muted-foreground font-mono">
            RERA Ref: {projectDetails.rera} | Available: {projectDetails.available} / {projectDetails.totalUnits}
          </span>
        </div>

        {/* Agent Orphan Alert Panel */}
        {!orphanReassigned && selectedProject === "proj-1" && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-foreground flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs leading-relaxed font-semibold">
            <div className="space-y-0.5">
              <span className="text-[#D85A30] font-bold flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4 animate-pulse" /> Agent Orphan Alert — Ankit Shah Reassigned
              </span>
              <p className="text-muted-foreground text-[10.5px] font-medium">
                Unit 604 (2BHK, prospect: Amit Desai, score: 61) is currently unassigned in the Vesu territory.
              </p>
            </div>
            <button 
              onClick={() => {
                setOrphanReassigned(true);
                alert("Orphaned unit successfully reassigned to Priya Rana.");
              }}
              className="h-7 px-3 bg-ink hover:bg-ink/90 text-cream text-[10px] font-bold uppercase tracking-widest rounded transition-all shrink-0 active:scale-95"
            >
              Reassign to Priya Rana
            </button>
          </div>
        )}

        <div className="grid grid-cols-12 gap-5">
          {/* Visual Heatmap Grid (Tower view) */}
          <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card min-h-[460px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-border/40 pb-2 mb-3">
                <h3 className="font-bold text-xs text-foreground font-display flex items-center gap-1.5">
                  <Building className="h-4 w-4 text-primary" /> Tower Absorption Heatmap (Click unit cells)
                </h3>
                <div className="flex gap-2.5 text-[9px] font-bold font-mono">
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-emerald-600" /> Sold ({heatmapStats.sold})</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-amber-500 animate-pulse" /> Negotiation ({heatmapStats.negotiation})</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-[#D85A30]" /> Available ({heatmapStats.available})</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-slate-400" /> Held ({heatmapStats.held})</span>
                </div>
              </div>

              {/* Tower floor layout grid */}
              <div className="grid grid-cols-4 gap-1.5 max-h-[350px] overflow-y-auto pr-1 scrollbar-none">
                {heatmapGrid.map((unit) => {
                  const isSelected = selectedUnit === unit.id;
                  const bg = 
                    unit.status === "sold" 
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                      : unit.status === "negotiation" 
                        ? "bg-amber-500 text-white animate-pulse" 
                        : unit.status === "held" 
                          ? "bg-slate-400 text-white" 
                          : "bg-red-50 text-[#D85A30] border border-red-200 hover:bg-red-100/50";
                  
                  return (
                    <div 
                      key={unit.id}
                      onClick={() => handleCellClick(unit.id)}
                      className={`h-9 rounded-lg flex flex-col justify-center items-center cursor-pointer transition-all duration-300 text-[10px] font-mono font-bold select-none ${bg} ${
                        isSelected ? "ring-2 ring-primary ring-offset-2 scale-95" : ""
                      }`}
                    >
                      <div>{unit.num}</div>
                      <div className="text-[7.5px] uppercase font-sans font-semibold opacity-80">{unit.col} · {unit.config}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-[8.5px] font-mono text-slate-400 text-center border-t border-border/40 pt-3">
              *Tower grid represents G+14 structural layout snapshot. Delayed updates sync every 24 hours.
            </div>
          </Card>

          {/* Unit Detail / Pricing Recommendation */}
          <div className="col-span-12 lg:col-span-5 space-y-4">
            <Card className="p-4 border border-border bg-card min-h-[220px] flex flex-col justify-between">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display border-b border-border/40 pb-2 mb-3">
                  Unit Properties Panel
                </h4>
                {activeUnitDetail ? (
                  <div className="space-y-2.5 text-xs font-semibold">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Unit Number</span>
                      <span className="font-mono text-foreground font-bold">{activeUnitDetail.num} (Floor {activeUnitDetail.floor}, Col {activeUnitDetail.col})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Configuration</span>
                      <span className="text-foreground">{activeUnitDetail.config} Layout</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Average Days Listed</span>
                      <span className="font-mono text-foreground font-bold">{activeUnitDetail.daysOnMarket} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Active Pitching Agent</span>
                      <span className="text-primary font-bold">{activeUnitDetail.pitching}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Asking Price Range</span>
                      <span className="font-mono text-foreground font-bold">₹{activeUnitDetail.askingPrice}/sq ft</span>
                    </div>

                    {activeUnitDetail.daysOnMarket >= 45 && (
                      <div className="p-2 bg-amber-50 border border-amber-200 rounded-lg text-slate-700 text-[10.5px]">
                        <div className="font-bold flex items-center gap-1 text-amber-800">
                          💡 Price Sensitivity Warning
                        </div>
                        <div className="mt-1 font-medium">
                          Unsold for {activeUnitDetail.daysOnMarket} days. Nearby sold comps: ₹4,820/sq ft. 
                          Recommended pricing adjustment: <strong className="font-mono text-[#D85A30]">₹4,750–₹4,900/sq ft</strong>.
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12 text-slate-400 space-y-2">
                    <Building className="h-8 w-8 mx-auto stroke-[1.5]" />
                    <p className="text-[11px] font-medium max-w-[200px] mx-auto">Select any unit grid box to inspect its sales metrics and velocity alerts.</p>
                  </div>
                )}
              </div>

              {activeUnitDetail && activeUnitDetail.status === "available" && (
                <button 
                  onClick={() => alert(`Launched 'Free Parking' promo code scheme on Unit ${activeUnitDetail.num}.`)}
                  className="w-full h-8 bg-ink hover:bg-ink/90 text-cream text-xs font-bold uppercase tracking-widest rounded-lg transition-all mt-4"
                >
                  Apply Incentive Scheme
                </button>
              )}
            </Card>

            {/* Scheme Effectiveness */}
            <Card className="p-4 border border-border bg-card">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display border-b border-border/40 pb-2 mb-3">
                Incentive Schemes Effectiveness
              </h4>
              <div className="overflow-x-auto scrollbar-none max-h-[160px]">
                <table className="w-full text-left text-xs divide-y divide-border/60">
                  <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                    <tr>
                      <th className="px-2 py-1.5">Scheme</th>
                      <th className="px-2 py-1.5 font-mono">Uplift</th>
                      <th className="px-2 py-1.5 font-mono">Sales delta</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30 bg-background font-medium text-slate-600">
                    {schemeEffectiveness.map((sch) => (
                      <tr key={sch.id} className="hover:bg-secondary/15">
                        <td className="px-2 py-2 text-foreground font-bold">{sch.name}</td>
                        <td className="px-2 py-2 font-mono text-emerald-600 font-extrabold">{sch.uplift}</td>
                        <td className="px-2 py-2 font-mono">{sch.before} → {sch.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>

        {/* Lower row: Velocity by Config and Inventory Summary */}
        <div className="grid grid-cols-12 gap-5">
          {/* Average Sell Time by Config (SVG bar chart) */}
          <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card">
            <h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display mb-3 border-b border-border/40 pb-2">
              Average Days on Market by Configuration
            </h3>
            
            <div className="py-2 flex items-center justify-center">
              <svg className="w-full max-w-[340px] h-[130px]" viewBox="0 0 300 130">
                {[
                  { label: "1BHK Studio", days: 28, max: 80, fill: "#1D9E75" },
                  { label: "2BHK Family", days: 38, max: 80, fill: "#2E86AB" },
                  { label: "3BHK Premium", days: 67, max: 80, fill: "#D85A30" }
                ].map((bar, i) => {
                  const y = 15 + i * 36;
                  const barL = (bar.days / bar.max) * 160;
                  return (
                    <g key={bar.label}>
                      <text x="75" y={y + 11} textAnchor="end" className="text-[9px] font-bold fill-foreground">{bar.label}</text>
                      
                      <rect x="85" y={y} width="160" height="15" fill="rgba(148, 163, 184, 0.12)" rx="2" />
                      <rect x="85" y={y} width={barL} height="15" fill={bar.fill} rx="2" />
                      
                      <text x={85 + barL + 8} y={y + 11} className="text-[9px] font-mono font-extrabold fill-slate-700">{bar.days}d</text>
                    </g>
                  );
                })}
                <line x1="85" y1="10" x2="85" y2="115" stroke="#1e293b" strokeWidth="1" />
              </svg>
            </div>
          </Card>

          {/* Table summary of all towers */}
          <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card">
            <h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display mb-3 border-b border-border/40 pb-2">
              Slow-Moving Inventory Warnings
            </h3>
            <div className="overflow-x-auto scrollbar-none max-h-[160px]">
              <table className="w-full text-left text-xs divide-y divide-border/60">
                <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                  <tr>
                    <th className="px-3 py-2">Tower / Config</th>
                    <th className="px-3 py-2 font-mono">Available</th>
                    <th className="px-3 py-2">Avg Days</th>
                    <th className="px-3 py-2">Velocity Class</th>
                    <th className="px-3 py-2">Recommended Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30 bg-background font-medium text-slate-600">
                  {inventorySummary.map((inv) => (
                    <tr key={inv.id} className="hover:bg-secondary/15">
                      <td className="px-3 py-2 text-foreground font-bold">{inv.project.split(" ")[1]} {inv.tower} ({inv.config})</td>
                      <td className="px-3 py-2 font-mono text-foreground">{inv.available} units</td>
                      <td className="px-3 py-2 font-mono text-foreground">{inv.avgDays}d</td>
                      <td className="px-3 py-2 font-mono font-bold">
                        <span className={inv.color}>● {inv.velocity}</span>
                      </td>
                      <td className="px-3 py-2 font-mono font-bold text-primary">{inv.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // --- 5. Investor & LP Report Generator States & Renders ---
  const [reportProject, setReportProject] = useState("proj-1");
  const [reportType, setReportType] = useState("Monthly Update");
  const [reportPeriod, setReportPeriod] = useState("January 2025");
  const [reportTemplate, setReportTemplate] = useState("Seed Investor / Individual");
  const [generationProgress, setGenerationProgress] = useState(-1);
  const [generationStep, setGenerationStep] = useState("");
  const [activePdfTab, setActivePdfTab] = useState("cover");
  const [autoRelease, setAutoRelease] = useState(false);

  const startPdfGeneration = () => {
    setGenerationProgress(0);
    setGenerationStep("PULLING LIVE OPERATIONAL VALUES FROM M4 AND M11...");
  };

  // Generation progress logic
  useEffect(() => {
    if (generationProgress === -1) return;
    if (generationProgress >= 100) {
      setTimeout(() => {
        setGenerationProgress(101); // Complete state
      }, 500);
      return;
    }

    const interval = setTimeout(() => {
      setGenerationProgress(prev => {
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
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        
        {/* Top KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatBox label="Reports Generated (Q1)" value="4 reports" desc="Automatic dispatches" color="text-[#2E86AB]" />
          <StatBox label="Next Scheduled Run" value="01/03 09:00" desc="Monthly recurring" color="text-[#1A3C5E]" />
          <StatBox label="Active Distribution Pool" value="24 LPs" desc="Syncing portals" color="text-[#1A3C5E]" />
          <StatBox label="LP Email Open Rate" value="87.5%" desc="Trailing 3 runs" color="text-[#1D9E75]" />
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Report builder panel */}
          <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card flex flex-col justify-between min-h-[460px]">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2">
                  Dossier Compilation Settings
                </h4>
                <p className="text-[10.5px] text-slate-400 font-semibold leading-relaxed mt-2">
                  Select parameters to extract real-time pipeline records and compile investor documents.
                </p>
              </div>

              <div className="space-y-3.5 text-xs font-semibold">
                {/* Project selector */}
                <div className="space-y-1">
                  <label className="text-slate-500 block">Target Project</label>
                  <select 
                    value={reportProject} 
                    onChange={(e) => setReportProject(e.target.value)}
                    className="w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs font-bold"
                  >
                    {demoProjects.map((p) => (
                      <option key={p.id} value={p.id}>{p.name.split(",")[0]}</option>
                    ))}
                  </select>
                </div>

                {/* Report Type */}
                <div className="space-y-1">
                  <label className="text-slate-500 block">Report Frequency Style</label>
                  <select 
                    value={reportType} 
                    onChange={(e) => setReportType(e.target.value)}
                    className="w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs font-bold"
                  >
                    {["Monthly Update", "Quarterly Comprehensive", "Milestone Flash Report", "Ad-hoc Report"].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Report Period */}
                <div className="space-y-1">
                  <label className="text-slate-500 block">Reporting Period</label>
                  <select 
                    value={reportPeriod} 
                    onChange={(e) => setReportPeriod(e.target.value)}
                    className="w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs font-bold"
                  >
                    {["January 2025", "Q1 2025", "February 2025", "FY 2024-25"].map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                {/* Template Styles */}
                <div className="space-y-1">
                  <label className="text-slate-500 block">Investor Tier Template</label>
                  <select 
                    value={reportTemplate} 
                    onChange={(e) => setReportTemplate(e.target.value)}
                    className="w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs font-bold"
                  >
                    {["Seed Investor / Individual", "Institutional / LP", "Equity Partner"].map((tem) => (
                      <option key={tem} value={tem}>{tem}</option>
                    ))}
                  </select>
                </div>

                {/* Auto Release toggle */}
                <div className="flex items-center justify-between py-2 border-t border-border/40 mt-3">
                  <div>
                    <div className="text-slate-600 font-bold">Auto-Release to LP Portals</div>
                    <div className="text-[9.5px] text-slate-400 font-semibold">Distribute instantly upon compile, skipping approvals</div>
                  </div>
                  <input 
                    type="checkbox"
                    checked={autoRelease}
                    onChange={(e) => setAutoRelease(e.target.checked)}
                    className="h-4 w-4 accent-primary cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <button 
              onClick={startPdfGeneration}
              disabled={generationProgress >= 0 && generationProgress <= 100}
              className="w-full h-9 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all mt-4 disabled:opacity-50 active:scale-95 flex items-center justify-center gap-1.5"
            >
              <FileText className="h-4 w-4" /> {generationProgress >= 0 && generationProgress <= 100 ? "Compiling..." : "Generate Investor Report"}
            </button>
          </Card>

          {/* Preview Panel (Rendered PDF simulation) */}
          <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card min-h-[460px] flex flex-col justify-center relative">
            {generationProgress === -1 && (
              <div className="text-center p-8 space-y-3">
                <Sparkles className="h-12 w-12 text-slate-300 mx-auto animate-pulse" />
                <h4 className="font-display text-sm font-bold text-foreground">PDF Compilation Ready</h4>
                <p className="text-xs text-muted-foreground max-w-xs mx-auto font-medium">
                  Configure the settings on the left pane and compile to view the simulated investor PDF reader dashboard.
                </p>
              </div>
            )}

            {generationProgress >= 0 && generationProgress <= 100 && (
              <div className="text-center p-8 space-y-4 animate-in fade-in duration-300">
                <div className="relative h-12 w-12 mx-auto">
                  <span className="absolute inset-0 rounded-full border-4 border-slate-100 border-t-primary animate-spin" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-foreground uppercase tracking-widest font-display">Compiling Investor PDF</h4>
                  <div className="text-base font-bold font-mono text-primary font-bold mt-1">{generationProgress}% Completed</div>
                  <p className="text-[9.5px] font-mono text-slate-400 uppercase tracking-wider mt-3 font-semibold">{generationStep}</p>
                </div>
              </div>
            )}

            {generationProgress === 101 && (
              <div className="space-y-4 animate-in slide-in-from-bottom duration-500 h-full flex flex-col justify-between">
                
                {/* PDF Tabs Header */}
                <div className="flex flex-wrap gap-1 border-b border-border/40 pb-2">
                  {[
                    { id: "cover", label: "Cover Page" },
                    { id: "exec", label: "Executive Summary" },
                    { id: "sales", label: "Sales & Inventory" },
                    { id: "financials", label: "Financial Metrics" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActivePdfTab(tab.id)}
                      className={`h-7 px-2.5 rounded-lg text-[10.5px] font-bold border transition-all ${
                        activePdfTab === tab.id
                          ? "bg-ink border-ink text-cream"
                          : "bg-background border-border text-slate-500 hover:bg-muted"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Preview Paper Area */}
                <div className="p-4 bg-secondary/35 rounded-xl border border-border/60 text-xs text-slate-700 leading-relaxed overflow-y-auto max-h-[260px] scrollbar-none font-sans font-medium flex-1">
                  
                  {activePdfTab === "cover" && (
                    <div className="text-center py-6 space-y-4">
                      <div className="font-display font-bold text-lg text-primary uppercase tracking-widest">Fortiv Solutions</div>
                      <div className="h-0.5 w-16 bg-primary mx-auto" />
                      <h2 className="font-display text-xl font-extrabold text-foreground tracking-tight">
                        {reportType.toUpperCase()} — {reportPeriod.toUpperCase()}
                      </h2>
                      <p className="text-[10px] font-mono text-slate-400">Project: {demoProjects.find(p => p.id === reportProject)?.name.split(",")[0]}</p>
                      <p className="text-[10px] text-slate-400 mt-6">
                        Confidential · Generated at: 20/01/2025 09:00 AM<br />
                        Data Sources: M1, M4.2, M5.3, M6.3, M11 · Compliance: DPDP Act 2023
                      </p>
                    </div>
                  )}

                  {activePdfTab === "exec" && (
                    <div className="space-y-3">
                      <h4 className="font-bold text-foreground text-sm border-b border-border/40 pb-1 uppercase font-display">Executive Summary</h4>
                      <p className="text-[11px] leading-relaxed">
                        During the period of {reportPeriod}, project development has proceeded on target. Sales volumes have maintained velocity across core towers, specifically driven by promotional scheme impacts. Net construction progress has crossed the 42% threshold, with key compliance registrations lodged at Gujarat RERA.
                      </p>
                      <h5 className="font-bold text-[#1A3C5E] mt-2">Key Highlights:</h5>
                      <ul className="list-disc pl-4 space-y-1 text-[10.5px]">
                        <li>Total revenue bookings captured: ₹1.84 Cr (weighted targets achieved)</li>
                        <li>Occupancy velocity: G+14 towers sold inventory reached 108 / 156 units</li>
                        <li>Next scheduled milestone: Tower A 12th-slab casting due in February</li>
                      </ul>
                    </div>
                  )}

                  {activePdfTab === "sales" && (
                    <div className="space-y-3">
                      <h4 className="font-bold text-foreground text-sm border-b border-border/40 pb-1 uppercase font-display">Sales & Absorption Status</h4>
                      <p className="text-[11px] leading-relaxed">
                        Inventory velocity analysis highlights normal sales runs in the 2BHK family layouts, whereas 3BHK premium inventories show a minor seasonal slowdown, currently mitigated by parking promotion schemes.
                      </p>
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="p-2 border border-border bg-background rounded-lg text-center">
                          <span className="text-[9px] text-muted-foreground block uppercase font-bold">Total Sold Units</span>
                          <span className="text-sm font-bold font-mono text-[#1D9E75]">108 Units (69.2%)</span>
                        </div>
                        <div className="p-2 border border-border bg-background rounded-lg text-center">
                          <span className="text-[9px] text-muted-foreground block uppercase font-bold">Remaining Available</span>
                          <span className="text-sm font-bold font-mono text-[#D85A30]">48 Units (30.8%)</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activePdfTab === "financials" && (
                    <div className="space-y-3">
                      <h4 className="font-bold text-foreground text-sm border-b border-border/40 pb-1 uppercase font-display">Financial Metrics Overview</h4>
                      <p className="text-[11px]">
                        Project cash reserves are stable, with collections tracking ahead of the construction billing schedule. Escrow accounts have been audited in compliance with regulatory RERA standards.
                      </p>
                      <div className="space-y-1.5 text-[10.5px] border-t border-border/30 pt-2 font-mono">
                        <div className="flex justify-between">
                          <span>Total Collections (Month)</span>
                          <span className="font-bold text-foreground">₹3.80 Cr</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Outstanding Receivables</span>
                          <span className="font-bold text-foreground">₹12.40 L</span>
                        </div>
                        <div className="flex justify-between text-[#1D9E75] font-extrabold">
                          <span>IRR Target Projection</span>
                          <span>14.8% MTD</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* PDF footer controls */}
                <div className="flex gap-2 pt-2 border-t border-border/40">
                  <button 
                    onClick={() => {
                      alert("PDF report successfully dispatched via Email to LP Mailing List.");
                      setGenerationProgress(-1);
                    }}
                    className="flex-1 h-8 bg-ink hover:bg-ink/90 text-cream text-xs font-bold uppercase tracking-widest rounded-lg transition-all"
                  >
                    Send & Distribute Report
                  </button>
                  <button 
                    onClick={() => {
                      alert("Downloading generated PDF...");
                    }}
                    className="h-8 px-3 border border-border hover:bg-secondary rounded-lg text-slate-500 flex items-center justify-center"
                    title="Download PDF"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => setGenerationProgress(-1)}
                    className="h-8 px-3 border border-border hover:bg-secondary rounded-lg text-slate-500 text-xs font-bold uppercase tracking-widest"
                  >
                    Reset
                  </button>
                </div>

              </div>
            )}
          </Card>
        </div>

        {/* Distribution Log */}
        <Card className="p-0 overflow-hidden border border-border bg-card">
          <div className="p-3 bg-secondary/35 border-b border-border">
            <h3 className="font-bold text-xs text-foreground font-display">Historical LP Distribution Records</h3>
          </div>
          
          <div className="overflow-x-auto scrollbar-none bg-card">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Report Type</th>
                  <th className="px-3.5 py-2.5">Project</th>
                  <th className="px-3.5 py-2.5 font-mono">Period</th>
                  <th className="px-3.5 py-2.5 font-mono">Generated Date</th>
                  <th className="px-3.5 py-2.5 font-mono">Recipients</th>
                  <th className="px-3.5 py-2.5">Email Open Rate</th>
                  <th className="px-3.5 py-2.5">Portal Sync</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 font-medium text-foreground bg-background">
                {mockDistributionLog.map((log) => (
                  <tr key={log.id} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-3 font-bold">{log.report}</td>
                    <td className="px-3.5 py-3 text-slate-500 font-semibold">{log.project}</td>
                    <td className="px-3.5 py-3 font-mono">{log.period}</td>
                    <td className="px-3.5 py-3 font-mono text-slate-400">{log.generated}</td>
                    <td className="px-3.5 py-3 font-mono">{log.recipients} LPs</td>
                    <td className="px-3.5 py-3 font-mono font-bold text-[#0E86E9]">{log.opened}</td>
                    <td className="px-3.5 py-3">
                      <span className="text-emerald-600 font-mono text-[10px] font-extrabold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                        ✅ Synced M10
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    );
  };

  // --- 6. Marketing ROI Dashboard States & Renders ---
  const [attributionModel, setAttributionModel] = useState("Time Decay");
  const [expandedChannel, setExpandedChannel] = useState<string | null>(null);
  
  // Reallocation Calculator Sliders
  const [refSpendAlloc, setRefSpendAlloc] = useState(40); // k Rupees
  const [googleSpendAlloc, setGoogleSpendAlloc] = useState(120); // k
  const [fbSpendAlloc, setFbSpendAlloc] = useState(180); // k
  const [nineNineAcresSpendAlloc, setNineNineAcresSpendAlloc] = useState(150); // k

  const calculatedAllocations = useMemo(() => {
    // Basic projection logic: bookings = spend / cost_per_booking
    const refBookings = Math.max(0, Math.round(refSpendAlloc / 13.33));
    const googleBookings = Math.max(0, Math.round(googleSpendAlloc / 60));
    const fbBookings = Math.max(0, Math.round(fbSpendAlloc / 90));
    const nineNineBookings = Math.max(0, Math.round(nineNineAcresSpendAlloc / 150));

    const totalSpend = refSpendAlloc + googleSpendAlloc + fbSpendAlloc + nineNineAcresSpendAlloc;
    const totalBookings = refBookings + googleBookings + fbBookings + nineNineBookings;
    const blendedCpb = totalBookings > 0 ? (totalSpend * 1000) / totalBookings : 0;

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

  // Adjust mock table data values based on selected attribution model slightly to look organic
  const channelPerformanceTable = useMemo(() => {
    return channelPerformanceBase.map(item => {
      let multiplier = 1.0;
      if (attributionModel === "First Touch") {
        if (item.channel === "Facebook Ads" || item.channel === "Google Ads") multiplier = 1.15;
        if (item.channel === "Referral") multiplier = 0.8;
      } else if (attributionModel === "Last Touch") {
        if (item.channel === "Referral") multiplier = 1.25;
        if (item.channel === "99acres") multiplier = 1.1;
        if (item.channel === "Facebook Ads") multiplier = 0.85;
      } else if (attributionModel === "Linear") {
        multiplier = 1.0;
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
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        
        {/* Attribution Selector Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border rounded-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Attribution Model:</span>
            <div className="flex gap-1">
              {["First Touch", "Last Touch", "Linear", "Time Decay"].map((model) => (
                <button
                  key={model}
                  onClick={() => setAttributionModel(model)}
                  className={`h-7 px-3 rounded-lg text-xs font-bold transition-all border uppercase tracking-wider ${
                    attributionModel === model ? "bg-ink border-ink text-cream" : "bg-background border-border text-slate-500 hover:bg-muted"
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>
          <span className="text-xs font-semibold text-muted-foreground font-mono">
            Blended CPB Target: &lt; ₹1,00,000 | Blended MTD: ₹70,000
          </span>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Main Channels ROI table */}
          <Card className="col-span-12 lg:col-span-8 p-0 overflow-hidden border border-border bg-card flex flex-col justify-between">
            <div>
              <div className="p-3.5 bg-secondary/30 border-b border-border flex justify-between items-center">
                <h3 className="font-bold text-xs text-foreground font-display">Channel Marketing Performance Table</h3>
                <span className="text-[9px] text-slate-400 font-mono font-bold">Sorted by Cost-per-booking (CPB)</span>
              </div>
              
              <div className="overflow-x-auto scrollbar-none">
                <table className="w-full text-left text-xs divide-y divide-border/60">
                  <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                    <tr>
                      <th className="px-3.5 py-2">Channel</th>
                      <th className="px-3.5 py-2 font-mono">Spend</th>
                      <th className="px-3.5 py-2 font-mono">Leads</th>
                      <th className="px-3.5 py-2">Avg Score</th>
                      <th className="px-3.5 py-2">Visits</th>
                      <th className="px-3.5 py-2 font-mono">Bookings</th>
                      <th className="px-3.5 py-2 font-mono">CPB Ratio</th>
                      <th className="px-3.5 py-2">ROI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30 bg-background font-medium text-foreground">
                    {channelPerformanceTable.map((ch) => {
                      const isExpanded = expandedChannel === ch.channel;
                      const hasBookings = ch.bookings > 0;
                      
                      // ROI Color coding
                      const roiClass = 
                        ch.roi === Infinity 
                          ? "bg-emerald-100 text-emerald-800" 
                          : ch.roi >= 5.0 
                            ? "bg-emerald-50 text-[#1D9E75] border border-emerald-100" 
                            : ch.roi >= 1.5 
                              ? "bg-amber-50 text-amber-700 border border-amber-100" 
                              : "bg-red-50 text-[#D85A30] border border-red-100";
                      
                      return (
                        <>
                          <tr 
                            key={ch.channel} 
                            onClick={() => setExpandedChannel(isExpanded ? null : ch.channel)}
                            className="hover:bg-secondary/15 cursor-pointer border-b border-border/30 last:border-none"
                          >
                            <td className="px-3.5 py-3 font-bold flex items-center gap-1.5">
                              <span className="text-primary hover:underline">{ch.channel}</span>
                              <span className="text-[8px] text-slate-400">▶</span>
                            </td>
                            <td className="px-3.5 py-3 font-mono text-[11px]">{ch.spend > 0 ? formatInr(ch.spend) : "₹0"}</td>
                            <td className="px-3.5 py-3 font-mono text-[11px]">{ch.leads}</td>
                            <td className="px-3.5 py-3 font-mono font-bold">{ch.score}</td>
                            <td className="px-3.5 py-3 font-mono">{ch.visits}</td>
                            <td className="px-3.5 py-3 font-mono text-[#1D9E75] font-extrabold">{ch.bookings}</td>
                            <td className="px-3.5 py-3 font-mono text-[11px] font-bold">
                              {ch.spend > 0 && hasBookings ? formatInr(ch.cpb) : "—"}
                            </td>
                            <td className="px-3.5 py-3">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold font-mono ${roiClass}`}>
                                {ch.roi === Infinity ? "∞" : `${ch.roi}x`}
                              </span>
                            </td>
                          </tr>

                          {/* Nested Campaigns row if expanded */}
                          {isExpanded && (
                            <tr>
                              <td colSpan={8} className="px-4 py-3 bg-secondary/15 border-b border-border/40">
                                <div className="space-y-2 animate-in fade-in duration-300">
                                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                                    Campaign Level Drill-down
                                  </div>
                                  <table className="w-full text-left text-[11px] border border-border/60 bg-background rounded-lg overflow-hidden">
                                    <thead className="bg-secondary/20 text-muted-foreground text-[8px] uppercase font-mono">
                                      <tr>
                                        <th className="px-3 py-1.5">Campaign Name</th>
                                        <th className="px-3 py-1.5">Spend</th>
                                        <th className="px-3 py-1.5 font-mono">Leads Sourced</th>
                                        <th className="px-3 py-1.5 font-mono">Visits Done</th>
                                        <th className="px-3 py-1.5 font-mono">Bookings</th>
                                        <th className="px-3 py-1.5">CPB</th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/20 font-medium text-slate-600">
                                      {campaignPerformance.map((cam, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50">
                                          <td className="px-3 py-2 font-bold text-foreground">{cam.campaign}</td>
                                          <td className="px-3 py-2 font-mono">₹{(cam.spend/1000)}K</td>
                                          <td className="px-3 py-2 font-mono">{cam.leads}</td>
                                          <td className="px-3 py-2 font-mono">{cam.visits}</td>
                                          <td className="px-3 py-2 font-mono text-emerald-600 font-extrabold">{cam.bookings}</td>
                                          <td className="px-3 py-2 font-mono">{cam.bookings > 0 ? `₹${(cam.cpb/1000)}k` : "—"}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          )}
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-[8.5px] font-mono text-slate-400 text-center py-2.5 border-t border-border/40 bg-secondary/10">
              *Campaign tracking integrations pull spend values from Facebook Ads Manager API and Google Ads API daily.
            </div>
          </Card>

          {/* AI budget recommendations panel */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <Card className="p-4 border border-border bg-card">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display border-b border-border/40 pb-2 mb-3">
                AI Budget Recommendations
              </h4>
              <div className="p-3 bg-sky-50/50 border border-sky-200 rounded-xl text-xs space-y-3 leading-relaxed font-semibold">
                <div className="font-bold flex items-center gap-1.5 text-primary">
                  <Sparkles className="h-4 w-4 animate-bounce" /> AI Allocation Engine Verdict
                </div>
                
                <div className="space-y-2 font-medium text-slate-700">
                  <div>
                    <span className="text-emerald-700 font-bold block">🟢 INCREASE:</span>
                    • Referral Programme: ₹40K spend → 3 bookings (CPB ₹13K). Increase budget to ₹80K (Est: +3 bookings).<br />
                    • Google Ads: Strong leads quality score (52) — increase spend from ₹1.2L to ₹1.8L.
                  </div>
                  <div>
                    <span className="text-amber-700 font-bold block">🟡 MAINTAIN:</span>
                    • Facebook Ads: High leads volumes but lower scores — maintain budget; improve creatives targeting.
                  </div>
                  <div>
                    <span className="text-[#D85A30] font-bold block">🔴 REVIEW / DOWNGRADE:</span>
                    • Housing.com: ₹90K spend, 0 bookings. Downsize subscription tier or pause allocation for 30 days.
                  </div>
                </div>
                
                <div className="border-t border-sky-300/40 pt-2 font-bold text-primary text-[10.5px]">
                  Total potential reallocation: Reallocate ₹90K from Housing.com to Referrals. Est: +2.8 bookings/month.
                </div>
              </div>
            </Card>

            {/* Reallocation Calculator Simulator */}
            <Card className="p-4 border border-border bg-card space-y-3">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display border-b border-border/40 pb-2">
                Spend Allocation Simulator
              </h4>
              
              <div className="space-y-2 text-xs font-semibold">
                <div className="space-y-1">
                  <div className="flex justify-between font-mono">
                    <span className="text-slate-500">Referral Spend</span>
                    <span>₹{refSpendAlloc}k</span>
                  </div>
                  <input type="range" min="10" max="100" value={refSpendAlloc} onChange={(e) => setRefSpendAlloc(parseInt(e.target.value))} className="w-full accent-primary h-1 bg-secondary rounded-lg appearance-none cursor-pointer" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between font-mono">
                    <span className="text-slate-500">Google Ads Spend</span>
                    <span>₹{googleSpendAlloc}k</span>
                  </div>
                  <input type="range" min="50" max="250" value={googleSpendAlloc} onChange={(e) => setGoogleSpendAlloc(parseInt(e.target.value))} className="w-full accent-primary h-1 bg-secondary rounded-lg appearance-none cursor-pointer" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between font-mono">
                    <span className="text-slate-500">Facebook Ads Spend</span>
                    <span>₹{fbSpendAlloc}k</span>
                  </div>
                  <input type="range" min="50" max="300" value={fbSpendAlloc} onChange={(e) => setFbSpendAlloc(parseInt(e.target.value))} className="w-full accent-primary h-1 bg-secondary rounded-lg appearance-none cursor-pointer" />
                </div>

                <div className="p-2.5 bg-secondary/40 border border-border/60 rounded-xl space-y-1 text-center font-mono mt-3">
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-sans font-bold">Projected Results</div>
                  <div className="text-sm font-extrabold text-foreground">{calculatedAllocations.totalBookings} Bookings</div>
                  <div className="text-[10px] text-slate-500">Blended CPB: ₹{Math.round(calculatedAllocations.blendedCpb).toLocaleString("en-IN")}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  };

  // --- 7. Executive Weekly Briefing States & Renders ---
  const [actionsChecked, setActionsChecked] = useState<boolean[]>([false, false, false, false, false]);
  const [briefSection, setBriefSection] = useState("numbers");

  const priorityActionsList = [
    { text: "Follow up personally on Deepak Trivedi deal — stuck 19 days in Negotiation (Priya Rana).", reason: "stuck deal objection", severity: "border-l-4 border-l-[#D85A30]" },
    { text: "Launch incentive scheme for 3BHK Tower B — 11 units slow-moving at 67 days avg.", reason: "slow inventory velocity", severity: "border-l-4 border-l-[#E8A838]" },
    { text: "Review Housing.com campaign spend (₹90K spent MTD with 0 bookings closed).", reason: "channel ROI leak", severity: "border-l-4 border-l-[#D85A30]" },
    { text: "Recruit 1 additional field agent for Vadodara region to match forecast shortfall.", reason: "forecast capacity gap", severity: "border-l-4 border-l-slate-400" },
    { text: "Collect construction records for Greenview Heights QPR filing due Jan 31.", reason: "RERA compliance deadline", severity: "border-l-4 border-l-[#1A3C5E]" }
  ];

  const handleActionToggle = (idx: number) => {
    setActionsChecked(prev => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  const actionCompletionCount = actionsChecked.filter(Boolean).length;
  const actionCompletionRate = Math.round((actionCompletionCount / 5) * 100);

  const renderExecutiveBrief = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        
        {/* Top KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatBox label="Briefings Delivered (YTD)" value="22" desc="Monday dispatches" color="text-[#2E86AB]" />
          <StatBox label="Last brief compiled" value="20 Jan 07:22" desc="Monday W03" color="text-[#1A3C5E]" />
          <StatBox label="Next Compilation Run" value="5 days 16 hrs" desc="Scheduled 27 Jan" color="text-[#1A3C5E]" />
          <StatBox label="Executive Open Rate" value="100%" desc="All directors checked" color="text-[#1D9E75]" />
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Brief Preview Document */}
          <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card min-h-[460px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-border/40 pb-2 mb-3">
                <h3 className="font-bold text-xs text-foreground font-display flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-primary" /> AI Compiled Weekly Briefing Preview (Week W03)
                </h3>
              </div>

              {/* Navigator */}
              <div className="flex flex-wrap gap-1 border-b border-border/30 pb-2 mb-3">
                {[
                  { id: "numbers", label: "Week in Numbers" },
                  { id: "deals", label: "Deal Highlights" },
                  { id: "compliance", label: "RERA & Finance" }
                ].map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setBriefSection(sec.id)}
                    className={`h-6 px-2.5 rounded-lg text-[10px] font-bold border transition-all ${
                      briefSection === sec.id
                        ? "bg-ink border-ink text-cream"
                        : "bg-background border-border text-slate-500 hover:bg-muted"
                    }`}
                  >
                    {sec.label}
                  </button>
                ))}
              </div>

              {/* Simulated briefing papers */}
              <div className="p-3 bg-secondary/35 rounded-xl border border-border/60 text-xs text-slate-700 leading-relaxed font-sans font-medium h-[220px] overflow-y-auto scrollbar-none">
                
                {briefSection === "numbers" && (
                  <div className="space-y-3">
                    <h5 className="font-bold text-foreground uppercase text-[10.5px] font-display border-b border-border/20 pb-0.5">Week in Numbers (13–19 Jan 2025)</h5>
                    <table className="w-full text-left text-[11px] border border-border/30 bg-background rounded overflow-hidden">
                      <thead className="bg-secondary/20 text-muted-foreground text-[8px] font-mono">
                        <tr>
                          <th className="px-2 py-1">KPI</th>
                          <th className="px-2 py-1 font-mono">This Week</th>
                          <th className="px-2 py-1 font-mono">Last Week</th>
                          <th className="px-2 py-1">Change</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/20 font-medium text-slate-600 font-mono">
                        <tr>
                          <td className="px-2 py-1.5 text-foreground font-sans font-bold">Weekly Revenue</td>
                          <td className="px-2 py-1.5 font-bold text-foreground">₹1.12 Cr</td>
                          <td className="px-2 py-1.5">₹0.95 Cr</td>
                          <td className="px-2 py-1.5 text-emerald-600 font-extrabold">▲ +18%</td>
                        </tr>
                        <tr>
                          <td className="px-2 py-1.5 text-foreground font-sans font-bold">Bookings Closed</td>
                          <td className="px-2 py-1.5 font-bold text-foreground">2</td>
                          <td className="px-2 py-1.5">1</td>
                          <td className="px-2 py-1.5 text-emerald-600 font-extrabold">▲ +100%</td>
                        </tr>
                        <tr>
                          <td className="px-2 py-1.5 text-foreground font-sans font-bold">Site Visits Done</td>
                          <td className="px-2 py-1.5 font-bold text-foreground">18</td>
                          <td className="px-2 py-1.5">15</td>
                          <td className="px-2 py-1.5 text-emerald-600 font-extrabold">▲ +20%</td>
                        </tr>
                        <tr>
                          <td className="px-2 py-1.5 text-foreground font-sans font-bold">New Leads Captured</td>
                          <td className="px-2 py-1.5 font-bold text-foreground">84</td>
                          <td className="px-2 py-1.5">71</td>
                          <td className="px-2 py-1.5 text-emerald-600 font-extrabold">▲ +18%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {briefSection === "deals" && (
                  <div className="space-y-2">
                    <h5 className="font-bold text-foreground uppercase text-[10.5px] font-display border-b border-border/20 pb-0.5">Deal Highlights</h5>
                    <p className="text-[10.5px]">
                      <strong>Top Booking closed:</strong> Rajesh Patel block booking at Greenview Heights (2BHK, ₹56L booking value, Priya Rana).
                    </p>
                    <p className="text-[10.5px]">
                      <strong>At-Risk Deals:</strong> Deepak Trivedi has been stuck in the negotiation stage for 19 days. Priya Rana reports pricing disputes. Suggested personal director check-in callback.
                    </p>
                    <p className="text-[10.5px]">
                      <strong>Team Performance:</strong> Priya Rana was the star agent of the week, conducting 3 visits and booking ₹56L revenue.
                    </p>
                  </div>
                )}

                {briefSection === "compliance" && (
                  <div className="space-y-2">
                    <h5 className="font-bold text-foreground uppercase text-[10.5px] font-display border-b border-border/20 pb-0.5">RERA deadlines & Finance Snapshot</h5>
                    <p className="text-[10.5px]">
                      <strong>Gujarat RERA compliance:</strong> The QPR filing deadline for Greenview Heights is 31 January (11 days remaining). Construction progress logs need to sync from M9.
                    </p>
                    <p className="text-[10.5px]">
                      <strong>Finance:</strong> Blended cost-per-booking remains around ₹70,000. MagicBricks subscription renewal due next week. Escalated escrow balance meets reserve ratio targets.
                    </p>
                  </div>
                )}

              </div>
            </div>

            <div className="flex gap-2 pt-3 border-t border-border/40">
              <button 
                onClick={() => alert("Weekly brief summary dispatched to Directors WhatsApp group.")}
                className="flex-1 h-8 bg-ink hover:bg-ink/90 text-cream text-xs font-bold uppercase tracking-widest rounded-lg transition-all"
              >
                Send WhatsApp Summary
              </button>
              <button 
                onClick={() => alert("Dispatched full 2-page brief PDF to leadership email inbox.")}
                className="flex-1 h-8 border border-border hover:bg-secondary text-slate-600 text-xs font-bold uppercase tracking-widest rounded-lg transition-all"
              >
                Dispatch Email Briefing
              </button>
            </div>
          </Card>

          {/* Priority Actions list with checkmark state */}
          <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card flex flex-col justify-between min-h-[460px]">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center border-b border-border/40 pb-2 mb-2">
                  <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">
                    Weekly Priority Actions
                  </h4>
                  <span className="text-[10px] font-mono font-extrabold text-[#1D9E75]">MTD TRACKING</span>
                </div>
                
                {/* Completion rate progress bar */}
                <div className="space-y-1 py-1">
                  <div className="flex justify-between text-[10.5px] font-semibold text-slate-500">
                    <span>Actions Completed</span>
                    <span className="font-mono text-foreground font-bold">{actionCompletionCount} of 5 ({actionCompletionRate}%)</span>
                  </div>
                  <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 transition-all duration-500" style={{ width: `${actionCompletionRate}%` }} />
                  </div>
                </div>
              </div>

              {/* Action items list */}
              <div className="space-y-2.5 pt-1">
                {priorityActionsList.map((action, idx) => {
                  const isChecked = actionsChecked[idx];
                  return (
                    <div 
                      key={idx} 
                      onClick={() => handleActionToggle(idx)}
                      className={`p-2 rounded-lg border border-border/60 bg-background text-[11px] font-semibold cursor-pointer transition-all hover:bg-secondary/15 flex items-start gap-2.5 ${action.severity} ${
                        isChecked ? "opacity-60 line-through decoration-slate-400" : ""
                      }`}
                    >
                      <button className="shrink-0 mt-0.5 text-slate-400 hover:text-primary">
                        {isChecked ? (
                          <CheckSquare className="h-3.5 w-3.5 text-emerald-600" />
                        ) : (
                          <Square className="h-3.5 w-3.5 text-slate-300" />
                        )}
                      </button>
                      <div className="space-y-0.5 leading-snug">
                        <span className="text-foreground">{action.text}</span>
                        <div className="text-[8.5px] font-mono text-slate-400 font-extrabold uppercase">{action.reason}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-border/40 pt-3 flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span>Freshness: as of 20/01 07:22 AM</span>
              <span>Compliant with GDPR / DPDP</span>
            </div>
          </Card>
        </div>

        {/* Historical briefs log */}
        <Card className="p-0 overflow-hidden border border-border bg-card">
          <div className="p-3 bg-secondary/35 border-b border-border">
            <h3 className="font-bold text-xs text-foreground font-display">Executive Briefings Historical Log</h3>
          </div>
          
          <div className="overflow-x-auto scrollbar-none bg-card">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">ISO Week</th>
                  <th className="px-3.5 py-2.5">Date Range</th>
                  <th className="px-3.5 py-2.5 font-mono">Delivered Time</th>
                  <th className="px-3.5 py-2.5">WhatsApp Delivery</th>
                  <th className="px-3.5 py-2.5">Email Delivery</th>
                  <th className="px-3.5 py-2.5 font-mono">Priority Actions Handled</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 font-medium text-foreground bg-background">
                {historicalBriefsLog.map((log) => (
                  <tr key={log.week} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-3 font-bold">{log.week}</td>
                    <td className="px-3.5 py-3 text-slate-500 font-semibold">{log.period}</td>
                    <td className="px-3.5 py-3 font-mono text-slate-400">{log.delivered}</td>
                    <td className="px-3.5 py-3 text-emerald-600 font-mono font-bold">✅ {log.wa}</td>
                    <td className="px-3.5 py-3 text-emerald-600 font-mono font-bold">✅ {log.email}</td>
                    <td className="px-3.5 py-3 font-mono font-bold">{log.actions} completed</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    );
  };

  const renderMenuSelection = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-in fade-in duration-300">
          {submodulesList.map((mod) => (
            <Card
              key={mod.id}
              onClick={() => setActiveTab(mod.id as TabType)}
              className="p-5 border border-border/70 hover:border-ink hover:shadow-[0_4px_20px_rgba(11,31,51,0.04)] transition-all duration-300 cursor-pointer flex flex-col justify-between group h-48 bg-card"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> {mod.status}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground group-hover:text-ink transition-colors mt-1 font-display">
                  {mod.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2 font-medium">
                  {mod.desc}
                </p>
              </div>
              <div className="border-t border-border/40 mt-4 pt-3 flex items-center justify-between text-[11px] font-bold text-muted-foreground group-hover:text-foreground">
                <span className="font-mono font-bold text-foreground">{mod.stats}</span>
                <span className="flex items-center gap-0.5 text-ink group-hover:underline font-mono">
                  Access <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  return (
    <AppShell
      title={dynamicTitle}
      subtitle={headerInfo.subtitle}
    >
      <div className="transition-all duration-300">
        {activeTab === "menu" && renderMenuSelection()}
        {activeTab === "overview" && renderDashboardOverview()}
        {activeTab === "daily-report" && renderDailyReport()}
        {activeTab === "forecast" && renderForecast()}
        {activeTab === "inventory" && renderInventory()}
        {activeTab === "investor-report" && renderInvestorReport()}
        {activeTab === "marketing-roi" && renderMarketingRoi()}
        {activeTab === "executive-brief" && renderExecutiveBrief()}
      </div>
    </AppShell>
  );
}

// Subcomponent: Styled KPI box with border
function StatBox({
  label,
  value,
  desc,
  color
}: {
  label: string;
  value: string;
  desc: string;
  color: string;
}) {
  return (
    <Card className="p-4 flex flex-col justify-between relative min-h-24 border border-border bg-card">
      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-display">
        {label}
      </div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className={`font-display text-2xl font-bold tracking-tight font-mono ${color}`}>{value}</div>
        <span className="text-[9px] font-semibold text-muted-foreground">{desc}</span>
      </div>
    </Card>
  );
}
