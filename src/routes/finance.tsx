import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell, Card } from "../components/AppShell";
import { useState, useMemo, useEffect } from "react";
import {
  ChevronLeft,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  Clock,
  Send,
  Eye,
  Download,
  Activity,
  Calendar,
  Building,
  User,
  Users,
  Search,
  Check,
  X,
  TrendingUp,
  CreditCard,
  FileText,
  DollarSign,
  Briefcase,
  Camera,
  Layers,
  Sparkles,
  AlertCircle,
  BarChart3,
  Layers3,
  Upload,
  MessageCircle,
  Percent,
  Plus,
  Home,
  CheckSquare,
  Smile,
  LogOut,
  Mail,
  Phone,
  UserCheck,
} from "lucide-react";

export const Route = createFileRoute("/finance")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tab: (search.tab as string) || undefined,
    };
  },
  head: () => ({ meta: [{ title: "Finance & Accounts · Fortiv" }] }),
  component: FinanceManager,
});

type TabType =
  | "menu"
  | "overview"
  | "collections"
  | "demand-notes"
  | "commission"
  | "pl-monitor"
  | "forecaster"
  | "tally-sync"
  | "reports";

// --- MOCK DATA ---

const initialOverdueBuyers = [
  { rank: 1, name: "Rajesh Patel", unit: "A-804", project: "Greenview Heights", amount: 840000, days: 62, contact: "12/01/2025", rm: "Priya Rana", action: "Call + formal notice" },
  { rank: 2, name: "Vikram Joshi", unit: "B-1201", project: "Skyline Residences", amount: 1420000, days: 91, contact: "05/01/2025", rm: "Rahul Modi", action: "Legal notice" },
  { rank: 3, name: "Deepak Trivedi", unit: "GH-203", project: "Greenview Heights", amount: 680000, days: 47, contact: "18/01/2025", rm: "Ankit Shah", action: "WhatsApp reminder" },
  { rank: 4, name: "Sunita Mehta", unit: "C-502", project: "Greenview Heights", amount: 520000, days: 34, contact: "22/01/2025", rm: "Priya Rana", action: "Call today" },
  { rank: 5, name: "Mahesh Khanna", unit: "S-1104", project: "Skyline Residences", amount: 1860000, days: 112, contact: "28/12/2024", rm: "Kiran Desai", action: "Legal notice" },
  { rank: 6, name: "Anita Gujarati", unit: "A-302", project: "Greenview Heights", amount: 410000, days: 28, contact: "25/01/2025", rm: "Meera Patel", action: "WhatsApp + call" },
  { rank: 7, name: "Sanjay Kapoor", unit: "BP-401", project: "Business Park", amount: 2240000, days: 88, contact: "08/01/2025", rm: "Rahul Modi", action: "Director call" },
  { rank: 8, name: "Pooja Sharma", unit: "A-607", project: "Greenview Heights", amount: 560000, days: 19, contact: "28/01/2025", rm: "Ankit Shah", action: "Reminder SMS" },
  { rank: 9, name: "Kavita Agarwal", unit: "B-904", project: "Skyline Residences", amount: 980000, days: 55, contact: "15/01/2025", rm: "Kiran Desai", action: "Formal letter" },
  { rank: 10, name: "Suresh Nair", unit: "BP-102", project: "Business Park", amount: 3150000, days: 143, contact: "19/12/2024", rm: "Rahul Modi", action: "Refer to legal" }
];

const initialMilestoneTriggers = [
  { id: "T1", date: "16/01/2025", milestone: "8th Floor Slab Casting", project: "Greenview Heights", tower: "Tower A", units: 24, notes: 24, status: "All Delivered" },
  { id: "T2", date: "08/01/2025", milestone: "Brickwork 4th–6th Floor", project: "Greenview Heights", tower: "Tower B", units: 18, notes: 18, status: "All Delivered" },
  { id: "T3", date: "02/01/2025", milestone: "Plastering G+1–G+3", project: "Business Park", tower: "Block C", units: 12, notes: 12, status: "2 Undelivered" },
  { id: "T4", date: "24/12/2024", milestone: "Foundation Complete", project: "Skyline Residences", tower: "Tower 1", units: 48, notes: 48, status: "All Delivered" }
];

const initialBrokerCommissions = [
  { rank: 1, cp: "Rajhans Realtors", deals: 8, earned: 620000, paid: 620000, status: "Fully Settled" },
  { rank: 2, cp: "Prime Realty", deals: 6, earned: 480000, paid: 340000, status: "Pending payout" },
  { rank: 3, cp: "Landmark Properties", deals: 5, earned: 410000, paid: 410000, status: "Fully Settled" },
  { rank: 4, cp: "City Property Hub", deals: 4, earned: 320000, paid: 210000, status: "Pending payout" },
  { rank: 5, cp: "SNS Land Brokers", deals: 3, earned: 280000, paid: 280000, status: "Fully Settled" },
  { rank: 6, cp: "Om Realtors", deals: 3, earned: 240000, paid: 0, status: "Approval pending" }
];

const projectPlsData = [
  { id: "P1", name: "Fortiv Greenview Heights", units: 240, sold: 186, unsold: 54, value: 184000000, pct: 72, recognized: 84000000, land: 21000000, construct: 32000000, sales: 4200000, overheads: 2800000, cost: 60000000, margin: 24000000, pctMargin: 28.6, proforma: 30.0, status: "Watch" },
  { id: "P2", name: "Fortiv Skyline Residences", units: 180, sold: 122, unsold: 58, value: 142000000, pct: 48, recognized: 62000000, land: 34000000, construct: 28000000, sales: 3800000, overheads: 2200000, cost: 68000000, recognizedCost: 43000000, margin: 19000000, pctMargin: 30.6, proforma: 30.0, status: "On Track" },
  { id: "P3", name: "Fortiv Business Park", units: 48, sold: 38, unsold: 10, value: 86000000, pct: 95, recognized: 36000000, land: 18000000, construct: 16000000, sales: 2200000, overheads: 1800000, cost: 38000000, recognizedCost: 28000000, margin: 8000000, pctMargin: 22.2, proforma: 26.0, status: "Action Required" }
];

const tallySyncLogs = [
  { id: "SYNC-1", type: "Buyer Payment Received", ref: "PAY-GH-1284", val: 460000, debit: "Bank — HDFC Current", credit: "Advance from Buyers", project: "Greenview Heights", voucher: "Receipt", tallyRef: "RV/2025/01/4821", time: "16/01/2025 14:32", status: "Success" },
  { id: "SYNC-2", type: "Subcontractor Payment", ref: "PAY-C047", val: 605000, debit: "Subcontractor Cost — Civil", credit: "Bank — HDFC Current", project: "Greenview Heights", voucher: "Payment", tallyRef: "PV/2025/01/0812", time: "16/01/2025 15:10", status: "Success" },
  { id: "SYNC-3", type: "Material Purchase", ref: "PO-IND112", val: 1178000, debit: "Material Cost — Concrete", credit: "Ultratech RMC Ledger", project: "Greenview Heights", voucher: "Journal", tallyRef: "JV/2025/01/1041", time: "16/01/2025 16:44", status: "Success" },
  { id: "SYNC-4", type: "Broker Commission", ref: "COMM-CS187", val: 123200, debit: "Sales Commission Expense", credit: "Bank — HDFC Current", project: "Greenview Heights", voucher: "Payment", tallyRef: "PV/2025/01/0815", time: "17/01/2025 10:15", status: "Success" }
];

const failedSyncQueue = [
  { id: "FAIL-1", type: "Subcontractor payment", cp: "Ravi Plumbing", val: 84000, error: "Ledger name mismatch", action: "Fix ledger name" },
  { id: "FAIL-2", type: "Material purchase", cp: "JSW Steel", val: 28000, error: "GST code not found", action: "Update GST master" },
  { id: "FAIL-3", type: "Buyer receipt", cp: "Kavita Agarwal", val: 8000, error: "Network timeout", action: "Auto-retry scheduled" }
];

const reportSchedules = [
  { name: "Monthly MIS Financial Report", freq: "Monthly", nextRun: "01/06/2026", audience: "CFO, MD, Board", format: "PDF", status: "Active" },
  { name: "Weekly Collections & Aging Report", freq: "Weekly", nextRun: "08/06/2026", audience: "Finance Manager, Sales Head", format: "PDF/Excel", status: "Active" },
  { name: "Broker Commission Statements", freq: "Monthly", nextRun: "25/06/2026", audience: "Accounts, CPs", format: "PDF", status: "Active" },
  { name: "Quarterly Board Financial Pack", freq: "Quarterly", nextRun: "01/07/2026", audience: "Board of Directors", format: "PDF", status: "Active" }
];

const cashflowOutflows90d = [
  { cat: "Subcontractor Payments", feb: 8400000, mar: 11200000, apr: 6800000, source: "M9.2 Work Orders" },
  { cat: "Material Procurement", feb: 4200000, mar: 5600000, apr: 3800000, source: "M9.3 Purchase Orders" },
  { cat: "Payroll (All Staff)", feb: 2800000, mar: 2800000, apr: 2800000, source: "M7.4 Payroll Registry" },
  { cat: "Broker Commissions", feb: 1900000, mar: 1400000, apr: 800000, source: "M11.3 Tracker" },
  { cat: "Statutory / Taxes", feb: 1200000, mar: 1200000, apr: 1200000, source: "GST/TDS Invoices" },
  { cat: "Project Loans EMIs", feb: 2400000, mar: 2400000, apr: 2400000, source: "HDFC Term Loan" }
];

const monthlyCollectionsTrend = [
  { m: "Oct 2024", v: 240, status: "Below" },
  { m: "Nov 2024", v: 310, status: "Above" },
  { m: "Dec 2024", v: 280, status: "Below" },
  { m: "Jan 2025", v: 360, status: "Above" },
  { m: "Feb 2025", v: 320, status: "Above" },
  { m: "Mar 2025", v: 310, status: "Above" }
];

const statusDotStyle = (status: string) => {
  if (["Complete", "Completed", "Success", "Paid", "Current", "Fully Settled", "On Track"].some(s => status.includes(s)))
    return <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block shrink-0" />;
  if (["In Progress", "In Transit", "PO Sent", "Scheduled", "Applied", "Under Review", "Pending payout", "Watch", "Auto-compile pending"].some(s => status.includes(s)))
    return <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse inline-block shrink-0" />;
  if (["Action Required", "Not Initiated", "Not Applied", "Pending Snags", "Blocked", "Payment Pending", "Snag Pending", "At Risk", "Delayed", "Overrun", "Critical Overrun", "Escalated", "Overdue", "Approval pending", "Failed"].some(s => status.includes(s)))
    return <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse inline-block shrink-0" />;
  return <span className="h-1.5 w-1.5 rounded-full bg-slate-300 inline-block shrink-0" />;
};

const statusBadgeStyle = (status: string) => {
  if (["Complete", "Completed", "Success", "Paid", "Current", "Fully Settled", "On Track"].some(s => status.includes(s)))
    return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (["In Progress", "In Transit", "PO Sent", "Scheduled", "Applied", "Under Review", "Pending payout", "Watch", "Auto-compile pending", "Active"].some(s => status.includes(s)))
    return "bg-amber-50 text-amber-700 border border-amber-100";
  if (["Action Required", "Not Initiated", "Not Applied", "Pending Snags", "Blocked", "Payment Pending", "Snag Pending", "At Risk", "Delayed", "Overrun", "Critical Overrun", "Escalated", "Overdue", "Approval pending", "Failed"].some(s => status.includes(s)))
    return "bg-red-50 text-[#D85A30] border border-red-100";
  return "bg-slate-50 text-slate-600 border border-slate-200";
};

function FinanceManager() {
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
    { id: "overview", name: "Dashboard Overview", desc: "Overall active billed receivables KPIs, monthly collections target trend, project margins summary, and pending actions alerts.", stats: "Total Collected: ₹18.2Cr", status: "Active" },
    { id: "collections", name: "Collections & Receivables Dashboard", desc: "Real-time receivables ledger tracking, age-wise collection buckets, and overdue buyer prioritization list.", stats: "₹6.4Cr outstanding balance", status: "Active" },
    { id: "demand-notes", name: "Demand Note Automation", desc: "Automated milestone-linked billing dispatcher, delivery notifications timeline, and in-browser PDF note previewers.", stats: "Last: 8th Floor Slab Casting", status: "Active" },
    { id: "commission", name: "Broker Commission Tracker", desc: "Milestone-linked broker commission payouts pipelines, CP leaderboards, net payable calculations, and CP portal status syncs.", stats: "Top CP: Rajhans Realtors", status: "Active" },
    { id: "pl-monitor", name: "Project P&L Monitor", desc: "Percentage construction complete recognised revenue, Direct costs trackers, EBITDA margins, and pro-forma targets variances.", stats: "GH gross margin: 28.6%", status: "Active" },
    { id: "forecaster", name: "Cash Flow Forecaster", desc: "90/180-day inflow-outflow forecaster models, minimum cash reserves gap alerts, and bridge loan modellers.", stats: "April cash gap projected", status: "Active" },
    { id: "tally-sync", name: "Tally / Accounting Sync Agent", desc: "Double-entry automatic ledger voucher pushes, CGST/SGST ledger mappings, reconciliations, and failed queue error fixes.", stats: "Sync success rate: 99.1%", status: "Active" },
    { id: "reports", name: "Financial Report Generator", desc: "Monthly MIS statements library, scheduled report distribution logs, CA tax extracts, and one-click PDF creators.", stats: "MIS Report generated", status: "Active" }
  ];

  const getPageHeader = () => {
    const map: Record<TabType, { title: string; subtitle: string }> = {
      menu: { title: "Finance, Accounts & Revenue Intelligence", subtitle: "The complete financial nervous system for a real estate developer — from individual buyer collections to project P&L to investor reporting." },
      overview: { title: "Financial Dashboard Overview", subtitle: "Helicopter CFO view of collections KPIs, project P&L snapshot, projected cash position, and pending operational tasks." },
      collections: { title: "Collections & Receivables Dashboard", subtitle: "Real-time Receivables Tracker mapping outstanding amounts to aging buckets and recommended RM callbacks." },
      "demand-notes": { title: "Demand Note Automation Engine", subtitle: "Auto-compile and dispatch milestone-triggered demand invoices to buyers via WhatsApp, email, and portal." },
      commission: { title: "Broker Commission Tracker", subtitle: "Channel Partner payment ledgers, commission milestone approval queues, and CP portal ledger syncs." },
      "pl-monitor": { title: "Project P&L Monitor", subtitle: "Construction cost trackers and revenue recognition margins vs baseline pro-forma targets." },
      forecaster: { title: "Cash Flow Forecaster Model", subtitle: "90/180-day forecast, cash reserves threshold analysis, and bridge financing modeller." },
      "tally-sync": { title: "Tally / Accounting Sync Agent", subtitle: "Monitor automatic double-entry voucher pushes, reconcile daily balances, and clear ledger mapping exceptions." },
      reports: { title: "Financial Report Generator Pack", subtitle: "Branded PDF MIS statements scheduler,CA tax extracts, and stakeholder distribution log archives." }
    };
    return map[activeTab] || map.menu;
  };

  const headerInfo = getPageHeader();

  const dynamicTitle = activeTab === "menu" ? headerInfo.title : (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setActiveTab("menu")}
        className="group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95 mr-0.5"
        aria-label="Back to finance menu"
      >
        <ChevronLeft className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>
      <span className="font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors" onClick={() => setActiveTab("menu")}>
        {headerInfo.title}
      </span>
    </div>
  );

  // --- 1. CFO Dashboard Overview ---
  const renderOverview = () => (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 5 KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <StatBox label="Total Billed" value="₹24.6 Cr" desc="Demand notes raised" color="text-[#1A3C5E]" />
        <StatBox label="Total Collected" value="₹18.2 Cr" desc="Receipts logged to date" color="text-[#1D9E75]" />
        <StatBox label="Collection Rate" value="74%" desc="Target threshold: 85%" color="text-[#2E86AB]" />
        <StatBox label="Total Outstanding" value="₹6.4 Cr" desc="Receivables balance" color="text-[#E8A838]" />
        <StatBox label="90+ Day Overdue" value="₹1.5 Cr" desc="Escalated collections" color="text-[#D85A30] animate-pulse" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Left: Collections Bar Chart */}
        <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card">
          <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-2">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-primary" /> Monthly Collections (Oct 2024 – Mar 2025)
            </div>
            <span className="text-[10px] font-mono text-slate-400">Target: ₹3.0 Cr/month</span>
          </div>
          <div className="h-44 flex items-end gap-3.5 pt-2">
            {monthlyCollectionsTrend.map((t, idx) => (
              <div key={idx} className="flex-1 flex flex-col justify-end items-center h-full group relative">
                <span className="absolute -top-6 text-[10px] font-mono font-bold text-foreground opacity-0 group-hover:opacity-100 transition-opacity">₹{(t.v/100).toFixed(2)}Cr</span>
                <div
                  className={`w-full rounded-t transition-all duration-300 ${t.status === "Above" ? "bg-emerald-500/80 hover:bg-emerald-500" : "bg-[#2E86AB]/80 hover:bg-[#2E86AB]"}`}
                  style={{ height: `${(t.v / 400) * 100}%` }}
                />
                <span className="text-[9px] font-mono text-slate-500 mt-1.5 truncate max-w-full">{t.m}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Right: Project-wise P&L Snapshot */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5 border-b border-border/40 pb-2 mb-3">
              <Building className="h-3.5 w-3.5 text-primary" /> Project P&L Summary Snapshot
            </div>
            <div className="space-y-3.5 text-xs font-semibold">
              {projectPlsData.map((p, i) => (
                <div key={i} className="flex justify-between items-center border-b border-border/30 pb-2 last:border-0 last:pb-0">
                  <div>
                    <div className="text-foreground">{p.name}</div>
                    <div className="text-[9.5px] text-slate-400 font-normal">Cost: ₹{(p.cost/10000000).toFixed(1)}Cr · Revenue: ₹{(p.recognized/10000000).toFixed(1)}Cr</div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono font-bold text-foreground">₹{(p.margin/10000000).toFixed(1)}Cr</span>
                    <div className={`text-[9.5px] font-bold ${p.status === "Action Required" ? "text-red-500" : "text-slate-400"}`}>{p.pctMargin}% Margin</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom section: Pending Actions */}
      <Card className="p-4 border border-border bg-card">
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5 border-b border-border/40 pb-2 mb-3">
          <AlertCircle className="h-3.5 w-3.5 text-red-500 animate-pulse" /> Pending Finance Actionable Queue
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5 text-xs font-semibold">
          {[
            { a: "3 Milestone Demands notes queue", tag: "M11.2", c: "border-red-200 bg-red-50/20 text-red-700", t: "demand-notes" },
            { a: "₹2.8Cr overdue 31–60 days", tag: "M11.1", c: "border-red-200 bg-red-50/20 text-red-700", t: "collections" },
            { a: "CP payouts pending approval", tag: "M11.3", c: "border-amber-200 bg-amber-50/20 text-amber-700", t: "commission" },
            { a: "Tally sync queue failed records", tag: "M11.6", c: "border-amber-200 bg-amber-50/20 text-amber-700", t: "tally-sync" },
            { a: "MIS Monthly Financial Pack due", tag: "M11.7", c: "border-slate-200 bg-slate-50 text-slate-600", t: "reports" }
          ].map((act, i) => (
            <div
              key={i}
              onClick={() => setActiveTab(act.t as TabType)}
              className={`p-3 rounded-xl border flex flex-col justify-between cursor-pointer hover:shadow-sm transition-all h-24 ${act.c}`}
            >
              <div className="line-clamp-2">{act.a}</div>
              <div className="flex justify-between items-center text-[9px] font-mono font-bold mt-1.5 pt-1.5 border-t border-current/25">
                <span>{act.tag}</span>
                <span className="underline">Resolve →</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  // --- 2. Collections & Receivables (11.1) ---
  const [agingFilter, setAgingFilter] = useState("All");
  const filteredOverdues = useMemo(() => {
    if (agingFilter === "All") return initialOverdueBuyers;
    if (agingFilter === "90+") return initialOverdueBuyers.filter(b => b.days >= 90);
    return initialOverdueBuyers;
  }, [agingFilter]);

  const renderCollections = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Total Outstanding" value="₹6.4 Cr" desc="Billed but unpaid" color="text-[#1A3C5E]" />
        <StatBox label="Current (Not Yet Due)" value="₹1.6 Cr" desc="Due within 30 days" color="text-[#2E86AB]" />
        <StatBox label="Overdue (1–60 Days)" value="₹4.9 Cr" desc="Active aging tracking" color="text-[#E8A838]" />
        <StatBox label="Critical (90+ Days)" value="₹1.5 Cr" desc="23.4% of total outstanding" color="text-[#D85A30]" />
      </div>

      {/* Critical overdue alert */}
      <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs flex items-center gap-3 font-semibold text-[#D85A30] animate-pulse">
        <AlertTriangle className="h-5 w-5 shrink-0 text-red-500 animate-bounce" />
        <div>
          <span className="font-bold">Finance Alert:</span> 90+ Day Overdue bucket is at <strong>23.4% of outstanding</strong>, exceeding the 10% policy threshold. Legal notice sequence has been auto-queued.
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Aging table summary */}
        <Card className="col-span-12 lg:col-span-4 p-4 border border-border bg-card space-y-3.5">
          <div className="border-b border-border/40 pb-2 flex justify-between items-center">
            <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Aging Analysis Buckets</h4>
            <span className="text-[9px] font-mono bg-red-100 text-red-700 px-2 py-0.5 rounded border border-red-200">Alert Threshold Exceeded</span>
          </div>
          <div className="space-y-2.5 text-xs font-semibold">
            {[
              { b: "Current (Not Due)", val: "₹1.6 Cr", buyers: "34 buyers", pct: 25 },
              { b: "0–30 Days Overdue", val: "₹2.1 Cr", buyers: "18 buyers", pct: 33 },
              { b: "31–60 Days Overdue", val: "₹2.8 Cr", buyers: "9 buyers", pct: 44 },
              { b: "61–90 Days Overdue", val: "₹0.4 Cr", buyers: "3 buyers", pct: 6 },
              { b: "90+ Days Overdue", val: "₹1.5 Cr", buyers: "4 buyers", pct: 23 }
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center border-b border-border/30 pb-2 last:border-0 last:pb-0">
                <div>
                  <div className="text-foreground">{row.b}</div>
                  <div className="text-[9.5px] text-slate-400 font-normal">{row.buyers}</div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono font-bold text-foreground">{row.val}</span>
                  <div className="text-[9.5px] text-slate-400 font-mono font-normal">{row.pct}% of total</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Action list */}
        <Card className="col-span-12 lg:col-span-8 p-0 border border-border bg-card overflow-hidden">
          <div className="p-3 bg-secondary/35 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-xs text-foreground font-display uppercase tracking-wider">Overdue Buyer Action Ledger</h3>
            <div className="flex gap-1.5">
              {["All", "90+"].map(f => (
                <button
                  key={f}
                  onClick={() => setAgingFilter(f)}
                  className={`h-6 px-2 rounded text-[9px] font-bold uppercase border transition-all ${agingFilter === f ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`}
                >
                  {f === "90+" ? "90+ Days Overdue" : "Show All"}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Buyer</th>
                  <th className="px-3.5 py-2.5 font-mono">Unit / Project</th>
                  <th className="px-3.5 py-2.5 font-mono">Overdue Val</th>
                  <th className="px-3.5 py-2.5 font-mono">Days</th>
                  <th className="px-3.5 py-2.5">RM</th>
                  <th className="px-3.5 py-2.5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {filteredOverdues.map(b => (
                  <tr key={b.rank} className={`hover:bg-secondary/15 ${b.days >= 90 ? "bg-red-50/10 border-l-2 border-l-red-500" : ""}`}>
                    <td className="px-3.5 py-3 font-bold">{b.name}</td>
                    <td className="px-3.5 py-3">
                      <div className="font-bold text-foreground font-mono">{b.unit}</div>
                      <div className="text-[9.5px] text-slate-400 font-normal">{b.project}</div>
                    </td>
                    <td className="px-3.5 py-3 font-mono font-bold text-foreground">₹{(b.amount/100000).toFixed(1)}L</td>
                    <td className="px-3.5 py-3 font-mono font-bold">{b.days} d</td>
                    <td className="px-3.5 py-3 text-slate-500">{b.rm}</td>
                    <td className="px-3.5 py-3">
                      <button
                        onClick={() => alert(`Outreach sequence [${b.action}] triggered for ${b.name} via WhatsApp.`)}
                        className={`h-6 px-2.5 rounded text-[9px] font-mono uppercase ${b.days >= 90 ? "bg-red-600 hover:bg-red-700 text-white" : "bg-ink text-cream hover:bg-ink/90"}`}
                      >
                        {b.days >= 90 ? "Legal notice" : "Remind"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 3. Demand Note Automation (11.2) ---
  const [milestones, setMilestones] = useState(initialMilestoneTriggers);

  const simulateDemandGeneration = (id: string, milestone: string) => {
    setMilestones(prev => prev.map(m => {
      if (m.id === id) {
        return { ...m, status: "All Delivered" };
      }
      return m;
    }));
    alert(`Milestone demand note batch generated successfully for ${milestone}. Dispatched via WhatsApp, Email & Portal.`);
  };

  const renderDemands = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-12 gap-5">
        {/* Milestone logs */}
        <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border/40 pb-2"><h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Milestone Trigger Log</h3></div>

          <div className="space-y-3 font-semibold text-xs text-slate-600">
            {milestones.map((m, idx) => (
              <div key={m.id} className="p-3 bg-secondary/35 rounded-xl border border-border/50 space-y-2">
                <div className="flex justify-between font-mono text-[9px]">
                  <span className="text-slate-400">{m.date} · {m.project}</span>
                  <span className={`text-[8.5px] px-1.5 py-0.2 rounded font-mono ${statusBadgeStyle(m.status)}`}>{m.status}</span>
                </div>
                <div>
                  <div className="text-foreground text-sm font-bold">{m.milestone} ({m.tower})</div>
                  <p className="text-[10px] text-slate-400 font-normal mt-0.5">Affects {m.units} units · Est batch value: ₹{(m.units * 4.6).toFixed(1)} Lakhs</p>
                </div>
                {m.status.includes("pending") && (
                  <button
                    onClick={() => simulateDemandGeneration(m.id, m.milestone)}
                    className="h-7 w-full rounded bg-ink hover:bg-ink/90 text-cream text-[10px] font-mono uppercase tracking-wider transition-all"
                  >
                    Generate & Send Batch Notes
                  </button>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* PDF template preview */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border/40 pb-2 flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Demand Document Preview</span>
            <button onClick={() => alert("Downloading PDF template...")} className="text-[9px] font-bold text-primary underline font-mono">Download Sample PDF</button>
          </div>
          <div className="p-4 bg-background border border-border/50 rounded-2xl font-mono text-[9px] leading-relaxed text-slate-600 space-y-3">
            <div className="text-center font-bold text-foreground text-xs uppercase border-b border-border/40 pb-2">Fortiv Solutions Pvt Ltd · Demand Letter</div>
            <div className="grid grid-cols-2 gap-2 text-[9.5px]">
              <div><strong>Buyer:</strong> Rajesh Patel</div>
              <div className="text-right"><strong>Voucher ID:</strong> DN-GH-2025-0847</div>
              <div><strong>Unit:</strong> Tower A, Unit 804</div>
              <div className="text-right"><strong>RERA:</strong> GJ/RES/SURAT/2023/00847</div>
            </div>
            <div className="border-t border-b border-border/40 py-2 my-2 text-foreground font-semibold">
              <div className="flex justify-between"><span>Tranche Stage:</span><span>Floor Slab — 8th Floor</span></div>
              <div className="flex justify-between mt-1 text-[10.5px]"><span>Amount Demanded:</span><span className="font-bold text-primary">₹4,60,000</span></div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between"><span>Cumulative Paid:</span><span>₹18,40,000</span></div>
              <div className="flex justify-between"><span>Outstanding Balance:</span><span>₹39,10,000</span></div>
              <div className="flex justify-between"><span>Payment Due Date:</span><span className="font-bold text-red-500">15/02/2025</span></div>
            </div>
            <div className="bg-secondary/40 p-2.5 rounded-xl text-[8.5px] border border-border/30">
              <strong>Escrow Accounts:</strong> HDFC Bank · A/c No: 50200847214 · IFSC: HDFC0001234
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 4. Broker Commission Tracker (11.3) ---
  const [commissions, setCommissions] = useState(initialBrokerCommissions);

  const releaseCommission = (cp: string, earned: number) => {
    setCommissions(prev => prev.map(c => {
      if (c.cp === cp) {
        return { ...c, status: "Fully Settled", paid: earned };
      }
      return c;
    }));
    alert(`Commission of ₹${(earned/100000).toFixed(2)}L cleared for payment transfer. Bank remittance triggered.`);
  };

  const renderCommissions = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Total CP Commission (Q1)" value="₹28.4L" desc="Cumulative liability" color="text-[#1A3C5E]" />
        <StatBox label="Commissions Settled" value="₹19.6L" desc="Transferred to brokers" color="text-[#1D9E75]" />
        <StatBox label="Awaiting Approval" value="₹6.2L" desc="Accounts queue pending" color="text-[#E8A838]" />
        <StatBox label="Overdue Settles" value="₹2.6L" desc="Auto-reconciles on hold" color="text-[#D85A30]" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* CP Leaderboard */}
        <Card className="col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden">
          <div className="p-3 bg-secondary/35 border-b border-border text-[10px] font-bold uppercase text-slate-500 font-display">Broker Payout Ledgers</div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Broker Name</th>
                  <th className="px-3.5 py-2.5 font-mono">Deals</th>
                  <th className="px-3.5 py-2.5 font-mono">Commission</th>
                  <th className="px-3.5 py-2.5 font-mono">Paid</th>
                  <th className="px-3.5 py-2.5">Status</th>
                  <th className="px-3.5 py-2.5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {commissions.map(c => (
                  <tr key={c.rank} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-3 font-bold">{c.cp}</td>
                    <td className="px-3.5 py-3 font-mono font-bold text-slate-400">{c.deals} deals</td>
                    <td className="px-3.5 py-3 font-mono">₹{(c.earned/100000).toFixed(1)}L</td>
                    <td className="px-3.5 py-3 font-mono">₹{(c.paid/100000).toFixed(1)}L</td>
                    <td className="px-3.5 py-3">
                      <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle(c.status)}`}>{c.status}</span>
                    </td>
                    <td className="px-3.5 py-3">
                      {c.status !== "Fully Settled" ? (
                        <button
                          onClick={() => releaseCommission(c.cp, c.earned)}
                          className="h-6 px-2 rounded bg-ink hover:bg-ink/90 text-cream text-[9px] font-mono uppercase"
                        >
                          Release
                        </button>
                      ) : (
                        <span className="text-emerald-600 font-bold text-[9px]">✓ Cleared</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* CP portal synchronization */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border/40 pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Channel Partner Integration Sync</h4></div>
          <div className="space-y-3.5 text-xs font-semibold text-slate-600 leading-relaxed">
            <p>Commission calculations synchronize automatically with the broker portal (M12.4). Net commissions are generated subtracting TDS @10% and adding GST @18%.</p>
            <div className="p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[9.5px] space-y-1.5 text-slate-700">
              <div className="flex justify-between"><span>Commission Rate:</span><span className="text-foreground">2.0% on booking tranche</span></div>
              <div className="flex justify-between"><span>Gross commission:</span><span className="text-foreground">₹1,15,000</span></div>
              <div className="flex justify-between"><span>GST @18% added:</span><span className="text-foreground">+₹20,700</span></div>
              <div className="flex justify-between"><span>TDS @10% deducted:</span><span className="text-foreground">-₹11,500</span></div>
              <div className="flex justify-between border-t border-border/40 pt-1 mt-1 text-foreground font-bold"><span>Net CP Payable:</span><span className="text-primary text-sm">₹1,23,200</span></div>
            </div>
            <button
              onClick={() => alert("Broker payouts bulk sync pushed to CP portal.")}
              className="w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
            >
              Push Payouts Status to CP Portal
            </button>
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 5. Project P&L Monitor (11.4) ---
  const [selectedPlProject, setSelectedPlProject] = useState("P1");
  const currentPl = useMemo(() => {
    return projectPlsData.find(p => p.id === selectedPlProject) || projectPlsData[0];
  }, [selectedPlProject]);

  const renderPlMonitor = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="flex items-center gap-1.5 border-b border-border/30 pb-3">
        {projectPlsData.map(p => (
          <button
            key={p.id}
            onClick={() => setSelectedPlProject(p.id)}
            className={`h-8 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${selectedPlProject === p.id ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Waterfall costs panel */}
        <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border/40 pb-2 flex justify-between items-center">
            <h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Revenue Recognition & Cost Waterfall</h3>
            <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadgeStyle(currentPl.status)}`}>{currentPl.status}</span>
          </div>

          <div className="space-y-3.5 text-xs font-semibold text-slate-600">
            <div className="flex justify-between border-b border-border/30 pb-2">
              <span>Overall Completion Status:</span>
              <span className="font-mono text-foreground font-bold">{currentPl.pct}% Complete</span>
            </div>
            <div className="flex justify-between border-b border-border/30 pb-2">
              <span>Recognised Revenue (IndAS 115):</span>
              <span className="font-mono text-foreground font-bold">₹{(currentPl.recognized/10000000).toFixed(2)}Cr</span>
            </div>
            <div className="flex justify-between border-b border-border/30 pb-2">
              <span>Land Cost Allocation:</span>
              <span className="font-mono text-foreground font-bold">₹{(currentPl.land/10000000).toFixed(2)}Cr</span>
            </div>
            <div className="flex justify-between border-b border-border/30 pb-2">
              <span>Construction Cost Incurred:</span>
              <span className="font-mono text-foreground font-bold">₹{(currentPl.construct/10000000).toFixed(2)}Cr</span>
            </div>
            <div className="flex justify-between border-b border-border/30 pb-2">
              <span>Sales Marketing & Overhead:</span>
              <span className="font-mono text-foreground font-bold">₹{((currentPl.sales + currentPl.overheads)/10000000).toFixed(2)}Cr</span>
            </div>
            <div className="flex justify-between mt-2 pt-2 text-foreground font-bold text-sm">
              <span>Gross Project Margin:</span>
              <span className="font-mono text-primary">₹{(currentPl.margin/10000000).toFixed(2)}Cr</span>
            </div>
          </div>
        </Card>

        {/* Margin comparison */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4 flex flex-col justify-between">
          <div className="space-y-3.5">
            <div className="border-b border-border/40 pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Baseline target variances</h4></div>
            <div className="text-xs font-semibold space-y-3">
              <div className="p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[10px] space-y-1.5 text-slate-700">
                <div className="flex justify-between"><span>Current Margin %:</span><span className="text-foreground font-bold">{currentPl.pctMargin}%</span></div>
                <div className="flex justify-between"><span>Budgeted Pro-forma:</span><span className="text-foreground">{currentPl.proforma}%</span></div>
                <div className="flex justify-between border-t border-border/40 pt-1.5 mt-1.5">
                  <span>Variance Delta:</span>
                  <span className={`font-bold ${(currentPl.pctMargin - currentPl.proforma) >= 0 ? "text-emerald-600" : "text-red-500 animate-pulse"}`}>
                    {(currentPl.pctMargin - currentPl.proforma).toFixed(1)}%
                  </span>
                </div>
              </div>

              {currentPl.status === "Action Required" && (
                <div className="p-2.5 rounded-xl border border-red-200 bg-red-50/20 text-red-700 text-[10px] animate-pulse">
                  ⚠️ <strong>Margin Warning Alert:</strong> Cost overrun is tracking 3.8% below pro-forma target threshold. Project cost-to-complete audit recommended.
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => alert(`Cost ledger audit report request generated for project: ${currentPl.name}.`)}
            className="w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all mt-4"
          >
            Request Cost Ledger Audit
          </button>
        </Card>
      </div>
    </div>
  );

  // --- 6. Cash Flow Forecaster (11.5) ---
  const [cashScenario, setCashScenario] = useState("baseline");

  const inflowsProjected = useMemo(() => {
    let scalar = 1.0;
    if (cashScenario === "delay") scalar = 0.7;
    if (cashScenario === "accelerate") scalar = 1.25;
    return Math.round(18000000 * scalar);
  }, [cashScenario]);

  const renderForecaster = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Opening Balance" value="₹2.84 Cr" desc="Remittance accounts" color="text-[#1A3C5E]" />
        <StatBox label="Projected Inflows (90d)" value={`₹ ${(inflowsProjected/10000000).toFixed(2)} Cr`} desc="Milestone billing tranches" color="text-[#1D9E75]" />
        <StatBox label="Projected Outflows" value="₹6.87 Cr" desc="Subcontractor + procurement" color="text-[#2E86AB]" />
        <StatBox label="Funding Gap Alert" value="₹0.61 Cr" desc="Required by 1st April 2025" color="text-[#D85A30]" />
      </div>

      {/* Scenario buttons */}
      <Card className="p-4 border border-border bg-card space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Scenario Sensitivity Cash modeller</span>
        <div className="flex flex-wrap gap-2">
          {[
            { id: "baseline", name: "Baseline Forecast" },
            { id: "delay", name: "30% Inflows Delay" },
            { id: "accelerate", name: "Accelerated bookings (+10)" },
            { id: "loan", name: "₹1.0Cr Bridge Funding" }
          ].map(s => (
            <button
              key={s.id}
              onClick={() => setCashScenario(s.id)}
              className={`h-8 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${cashScenario === s.id ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </Card>

      {/* Outflows list */}
      <div className="grid grid-cols-12 gap-5">
        <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border/40 pb-2"><h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Projected Outflows Breakdown</h3></div>
          <div className="space-y-3 font-semibold text-xs text-slate-600">
            {cashflowOutflows90d.map((o, i) => (
              <div key={i} className="flex justify-between items-center border-b border-border/30 pb-2 last:border-0 last:pb-0">
                <div>
                  <div className="text-foreground">{o.cat}</div>
                  <div className="text-[9.5px] text-slate-400 font-normal">Source: {o.source}</div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono font-bold text-foreground">₹{((o.feb + o.mar + o.apr)/10000000).toFixed(2)}Cr</span>
                  <div className="text-[9px] text-slate-400 font-mono font-normal">3-Month Sum</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Gap Alert brief card */}
        <Card className="col-span-12 lg:col-span-4 p-4 border border-[#D85A30] bg-red-50/15 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase text-[#D85A30] tracking-wider font-display border-b border-red-200 pb-2">CFO Funding Gap Briefing</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-semibold">
              Projected cash balance falls below the minimum ₹0.75 Cr threshold in April Week 1. Bridge funding of ₹0.61 Cr required to cover subcontractor dues.
            </p>
          </div>
          <button
            onClick={() => alert("Lender Bridge Briefing Document generated & sent to bank partner.")}
            className="w-full h-8 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
          >
            Draft & Send Lender Brief
          </button>
        </Card>
      </div>
    </div>
  );

  // --- 7. TallySync Agent (11.6) ---
  const [syncQueue, setSyncQueue] = useState(failedSyncQueue);

  const clearSyncQueueItem = (id: string, cp: string) => {
    setSyncQueue(prev => prev.filter(s => s.id !== id));
    alert(`Sync queue voucher cleared. Re-routed invoice to Tally ledger for: ${cp}.`);
  };

  const renderTallySync = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Sync Success Rate" value="99.1%" desc="Last 30 days" color="text-[#1D9E75]" />
        <StatBox label="Transactions Pushed" value="1,842" desc="Cumulative invoices" color="text-[#1A3C5E]" />
        <StatBox label="Exceptions in Queue" value={`${syncQueue.length}`} desc="Awaiting correction" color="text-[#E8A838]" />
        <StatBox label="Last Successful Sync" value="10 Min ago" desc="Tally Gateway active" color="text-[#2E86AB]" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Sync Log Feed */}
        <Card className="col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden">
          <div className="p-3 bg-secondary/35 border-b border-border text-[10px] font-bold uppercase text-slate-500 font-display">Tally Gateway Sync Logs</div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Sync ID</th>
                  <th className="px-3.5 py-2.5">Transaction Type</th>
                  <th className="px-3.5 py-2.5 font-mono">Value</th>
                  <th className="px-3.5 py-2.5 font-mono">Debit/Credit</th>
                  <th className="px-3.5 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {tallySyncLogs.map(log => (
                  <tr key={log.id} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-3 font-mono font-bold text-slate-400">{log.id}</td>
                    <td className="px-3.5 py-3">
                      <div className="font-bold text-foreground">{log.type}</div>
                      <div className="text-[9px] text-slate-400 font-mono font-normal">Ref: {log.ref} · {log.time}</div>
                    </td>
                    <td className="px-3.5 py-3 font-mono font-bold">₹{(log.val/100000).toFixed(1)}L</td>
                    <td className="px-3.5 py-3">
                      <div className="text-[9.5px] text-slate-500 font-mono truncate max-w-[120px]">{log.debit}</div>
                      <div className="text-[9px] text-slate-400 font-mono truncate max-w-[120px]">{log.credit}</div>
                    </td>
                    <td className="px-3.5 py-3">
                      <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle(log.status)}`}>{log.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Failed Voucher Queue */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border/40 pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Sync Error Reconciliation Panel</h4></div>
          <div className="space-y-3 font-semibold text-xs text-slate-600">
            {syncQueue.length === 0 ? (
              <div className="p-4 text-center text-slate-400 font-mono">All transactions synced successfully. Error queue empty.</div>
            ) : (
              syncQueue.map(e => (
                <div key={e.id} className="p-3 bg-red-50/10 rounded-xl border border-red-200/50 space-y-2 text-red-600">
                  <div className="flex justify-between font-mono text-[9px]">
                    <span>{e.id}</span>
                    <span>Value: ₹{(e.val/100000).toFixed(1)}L</span>
                  </div>
                  <div>
                    <div className="text-foreground font-bold">{e.type} — {e.cp}</div>
                    <p className="text-[9.5px] text-slate-500 font-normal mt-0.5">Error: {e.error}</p>
                  </div>
                  <button
                    onClick={() => clearSyncQueueItem(e.id, e.cp)}
                    className="h-6 w-full rounded bg-ink hover:bg-ink/90 text-cream text-[9px] font-mono uppercase tracking-wider"
                  >
                    Resolve & Sync Ledger: {e.action}
                  </button>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 8. Financial Report Generator (11.7) ---
  const renderReports = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-12 gap-5">
        {/* Reports Schedule lists */}
        <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border/40 pb-2"><h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">MIS & Compliance Schedules</h3></div>
          <div className="space-y-3 font-semibold text-xs text-slate-600">
            {reportSchedules.map((r, i) => (
              <div key={i} className="p-3 bg-secondary/35 rounded-xl border border-border/50 flex justify-between items-center">
                <div>
                  <div className="text-foreground text-sm font-bold">{r.name}</div>
                  <div className="text-[9.5px] text-slate-400 font-normal">Next scheduled run: {r.nextRun} · Audience: {r.audience}</div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[9.5px] font-mono font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded mr-2">{r.freq}</span>
                  <span className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded font-mono ${statusBadgeStyle(r.status)}`}>{r.status}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* On-demand report generator */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4 flex flex-col justify-between">
          <div className="space-y-3.5">
            <div className="border-b border-border/40 pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">One-Click PDF Report Generator</h4></div>
            <div className="text-xs font-semibold space-y-3">
              <div className="space-y-1">
                <label className="text-slate-400">Select Financial Document Type</label>
                <select className="w-full h-8 border border-border rounded-lg text-xs font-semibold px-2 bg-card text-foreground">
                  <option>Executive Monthly MIS P&L Pack</option>
                  <option>Receivables aging analysis & overdue checklist</option>
                  <option>Quarterly board meeting finance presentation</option>
                  <option>Monthly GSTR-3B tax data extract sheet</option>
                </select>
              </div>
              <p className="text-[10px] text-slate-400 font-normal leading-relaxed">
                Generates a multi-page styled PDF document pre-populated with live collections ledger values, cash flows projections, and RERA project summaries.
              </p>
            </div>
          </div>

          <button
            onClick={() => alert("Report successfully compiled and dispatched to stakeholders list via Email.")}
            className="w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all mt-4"
          >
            Generate & Email Report
          </button>
        </Card>
      </div>
    </div>
  );

  return (
    <AppShell title={dynamicTitle} subtitle={headerInfo.subtitle}>
      <div className="transition-all duration-300">
        {activeTab === "menu" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 animate-in fade-in duration-300">
            {submodulesList.map((mod) => (
              <Card
                key={mod.id}
                onClick={() => setActiveTab(mod.id as TabType)}
                className="p-5 border border-border/70 hover:border-ink hover:shadow-[0_4px_20px_rgba(11,31,51,0.04)] transition-all duration-300 cursor-pointer flex flex-col justify-between group h-44 bg-card"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border font-mono text-emerald-700 bg-emerald-50 border-emerald-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> {mod.status}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-ink transition-colors mt-1 font-display">{mod.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2 font-medium">{mod.desc}</p>
                </div>
                <div className="border-t border-border/40 mt-4 pt-3 flex items-center justify-between text-[11px] font-bold text-muted-foreground group-hover:text-foreground">
                  <span className="font-mono font-bold text-foreground">{mod.stats}</span>
                  <span className="flex items-center gap-0.5 text-ink group-hover:underline font-mono">Access <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Card>
            ))}
          </div>
        )}
        {activeTab === "overview" && renderOverview()}
        {activeTab === "collections" && renderCollections()}
        {activeTab === "demand-notes" && renderDemands()}
        {activeTab === "commission" && renderCommissions()}
        {activeTab === "pl-monitor" && renderPlMonitor()}
        {activeTab === "forecaster" && renderForecaster()}
        {activeTab === "tally-sync" && renderTallySync()}
        {activeTab === "reports" && renderReports()}
      </div>
    </AppShell>
  );
}

function StatBox({ label, value, desc, color }: { label: string; value: string; desc: string; color: string }) {
  return (
    <Card className="p-4 flex flex-col justify-between relative min-h-24 border border-border bg-card">
      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-display">{label}</div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className={`font-display text-2xl font-bold tracking-tight font-mono ${color}`}>{value}</div>
        <span className="text-[9px] font-semibold text-muted-foreground">{desc}</span>
      </div>
    </Card>
  );
}
