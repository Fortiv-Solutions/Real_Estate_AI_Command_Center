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

export const Route = createFileRoute("/buyers")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tab: (search.tab as string) || undefined,
    };
  },
  head: () => ({ meta: [{ title: "Buyer Portal & Post-Sale · Fortiv" }] }),
  component: BuyerManager,
});

type TabType =
  | "menu"
  | "overview"
  | "self-service"
  | "payments"
  | "progress"
  | "snag"
  | "resale"
  | "society"
  | "nps";

// --- MOCK DATA ---

const initialBuyersPool = [
  { id: "B01", name: "Rajesh Patel", unit: "A-801", config: "2BHK", value: 5720000, paid: 3860000, status: "Current", nps: 9, class: "Promoter", rm: "Priya Rana" },
  { id: "B02", name: "Priya Shah", unit: "A-802", config: "3BHK", value: 8420000, paid: 5683000, status: "Current", nps: 8, class: "Passive", rm: "Priya Rana" },
  { id: "B03", name: "Amit Desai", unit: "A-803", config: "2BHK", value: 4850000, paid: 3273000, status: "Current", nps: 10, class: "Promoter", rm: "Meera Patel" },
  { id: "B04", name: "Sunita Mehta", unit: "A-601", config: "2BHK", value: 5200000, paid: 3510000, status: "18 Days Overdue", overdueAmount: 801000, nps: 5, class: "Detractor", rm: "Priya Rana" },
  { id: "B05", name: "Vikram Joshi", unit: "A-602", config: "3BHK", value: 8250000, paid: 5568000, status: "Current", nps: 9, class: "Promoter", rm: "Rahul Modi" },
  { id: "B06", name: "Deepak Trivedi", unit: "A-603", config: "3BHK", value: 7950000, paid: 5366000, status: "18 Days Overdue", overdueAmount: 1114000, nps: 7, class: "Passive", rm: "Ankit Shah" },
  { id: "B07", name: "Kavita Agarwal", unit: "A-503", config: "2BHK", value: 4680000, paid: 2517000, status: "34 Days Overdue", overdueAmount: 631000, nps: 10, class: "Promoter", rm: "Priya Rana" },
  { id: "B08", name: "Pooja Sharma", unit: "A-1001", config: "2BHK", value: 5720000, paid: 3860000, status: "Current", nps: 4, class: "Detractor", rm: "Priya Rana" },
  { id: "B09", name: "Mahesh Khanna", unit: "A-1201", config: "3BHK", value: 9100000, paid: 9100000, status: "Current", nps: 9, class: "Promoter", rm: "Rahul Modi" },
  { id: "B10", name: "Ritu Bhandari", unit: "A-1002", config: "2BHK", value: 5200000, paid: 3510000, status: "Current", nps: 8, class: "Passive", rm: "Meera Patel" }
];

const initialSnags = [
  { id: "SN-1041", unit: "A-401", buyer: "Rajesh Patel", phone: "+91 98765 43210", category: "MEP — Plumbing", severity: "Functional", status: "Resolved", opened: "14/01/2025", resolved: "16/01/2025", duration: 2, note: "Plumbing trap leakage in secondary toilet fixed", satisfaction: "Satisfied" },
  { id: "SN-1042", unit: "A-802", buyer: "Priya Shah", phone: "+91 99123 45678", category: "Civil — Flooring", severity: "Cosmetic", status: "Work in Progress", opened: "20/01/2025", resolved: "Pending", duration: 4, note: "Bathroom wall joint tile alignment", satisfaction: "—" },
  { id: "SN-1043", unit: "A-803", buyer: "Amit Desai", phone: "+91 97654 32109", category: "Civil — Walls", severity: "Cosmetic", status: "Scheduled", opened: "22/01/2025", resolved: "Pending", duration: 2, note: "Living room wall putty touchups", satisfaction: "—" },
  { id: "SN-1044", unit: "A-602", buyer: "Vikram Joshi", phone: "+91 99245 12345", category: "MEP — Electrical", severity: "Functional", status: "Resolved", opened: "10/01/2025", resolved: "13/01/2025", duration: 3, note: "Master bedroom switches replaced", satisfaction: "Satisfied" },
  { id: "SN-1045", unit: "A-1001", buyer: "Pooja Sharma", phone: "+91 98765 00001", category: "MEP — Plumbing", severity: "Functional", status: "Escalated", opened: "15/01/2025", resolved: "Pending", duration: 9, note: "Kitchen main sink basin pipe dripping continuously", satisfaction: "—" }
];

const resalesListings = [
  { id: "RSL-01", type: "Resale", unit: "A-302", owner: "Arjun Malhotra", asking: 5200000, avm: 5050000, status: "Deal Signed", inquiries: 12, agent: "Rahul Modi" },
  { id: "RSL-02", type: "Rental", unit: "A-501", owner: "Vikram Joshi", asking: 22000, avm: 21000, status: "Tenant Screening", inquiries: 4, agent: "Priya Rana" },
  { id: "RSL-03", type: "Resale", unit: "A-702", owner: "Nisha Verma", asking: 6800000, avm: 6600000, status: "Visits in Progress", inquiries: 5, agent: "Rahul Modi" },
  { id: "RSL-04", type: "Resale", unit: "A-1201", owner: "Mahesh Khanna", asking: 9100000, avm: 8840000, status: "Offer in Negotiation", inquiries: 7, agent: "Rahul Modi" },
  { id: "RSL-05", type: "Rental", unit: "B-301", owner: "Sanjay Kapoor", asking: 18000, avm: 17500, status: "Listed", inquiries: 1, agent: "Meera Patel" }
];

const amcContracts = [
  { id: "A1", name: "Elevator Maintenance", vendor: "Otis India", val: 240000, expiry: "31/03/2027", status: "To Be Transferred" },
  { id: "A2", name: "DG Set Power Backup", vendor: "Cummins India", val: 180000, expiry: "30/06/2027", status: "To Be Transferred" },
  { id: "A3", name: "STP & Water Plant", vendor: "Thermax", val: 120000, expiry: "31/12/2026", status: "To Be Transferred" },
  { id: "A4", name: "Fire Fighting Systems", vendor: "Johnson Controls", val: 90000, expiry: "28/02/2027", status: "To Be Transferred" }
];

const initialDemandNotes = [
  { milestone: "Structural — Floor 12 Slab", date: "28/01/2025", buyers: 38, val: 64000000, status: "Auto-compile pending" },
  { milestone: "Structural — Floor 13 Slab", date: "18/02/2025", buyers: 38, val: 64000000, status: "Not yet triggered" },
  { milestone: "Internal Finishing", date: "01/03/2025", buyers: 120, val: 182000000, status: "Not yet triggered" }
];

const checklistSteps = [
  { id: 1, step: "OC received (Prerequisite)", status: "Completed", owner: "Project Team" },
  { id: 2, step: "Compile resident directory from buyer records", status: "Completed", owner: "System" },
  { id: 3, step: "Draft society bye-laws (Cooperative Act)", status: "In Progress", owner: "Legal Team" },
  { id: 4, step: "First AGM notice sent to all residents", status: "Pending", owner: "System" },
  { id: 5, step: "First AGM conducted — committee elected", status: "Pending", owner: "Society" },
  { id: 6, step: "Society registration filing", status: "Pending", owner: "Legal Team" },
  { id: 7, step: "Common area handovers & AMC contracts", status: "Pending", owner: "Project Team" }
];

const statusDot = (status: string) => {
  if (["Current", "Complete", "Completed", "Resolved", "Deal Signed", "Active"].some(s => status.includes(s)))
    return <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block shrink-0" />;
  if (["In Progress", "In Transit", "PO Sent", "Scheduled", "Applied", "Under Review", "Tenant Screening", "Visits in Progress", "Offer in Negotiation", "Listed"].some(s => status.includes(s)))
    return <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse inline-block shrink-0" />;
  if (["Action Required", "Not Initiated", "Not Applied", "Pending Snags", "Blocked", "Payment Pending", "Snag Pending", "At Risk", "Delayed", "Overrun", "Critical Overrun", "Escalated", "18 Days Overdue", "34 Days Overdue"].some(s => status.includes(s)))
    return <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse inline-block shrink-0" />;
  return <span className="h-1.5 w-1.5 rounded-full bg-slate-300 inline-block shrink-0" />;
};

const statusBadge = (status: string) => {
  if (["Current", "Complete", "Completed", "Resolved", "Deal Signed", "Active"].some(s => status.includes(s)))
    return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (["In Progress", "In Transit", "PO Sent", "Scheduled", "Applied", "Under Review", "Tenant Screening", "Visits in Progress", "Offer in Negotiation", "Listed", "Planned"].some(s => status.includes(s)))
    return "bg-amber-50 text-amber-700 border border-amber-100";
  if (["Action Required", "Not Initiated", "Not Applied", "Pending Snags", "Blocked", "Payment Pending", "Snag Pending", "At Risk", "Delayed", "Overrun", "Critical Overrun", "Escalated", "18 Days Overdue", "34 Days Overdue"].some(s => status.includes(s)))
    return "bg-red-50 text-red-600 border border-red-100";
  return "bg-slate-50 text-slate-600 border border-slate-200";
};

function BuyerManager() {
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
    { id: "overview", name: "Dashboard Overview", desc: "Overall active buyers portfolio, payment health summary, rolling NPS indices, and visual portal logins trend charts.", stats: "NPS rolling score: +62", status: "Active" },
    { id: "self-service", name: "Buyer Self-Service Portal", desc: "Secure secure buyer login panel simulation, full document registry download logs, and property details overview card.", stats: "186 registered buyers", status: "Active" },
    { id: "payments", name: "Payment Schedule & Receipt Manager", desc: "Construction milestone-linked payment tranches, automated demand note letters, and receipt dispatch sequencing.", stats: "₹1.61Cr outstanding total", status: "Active" },
    { id: "progress", name: "Construction Progress Feed", desc: "Personalized fortnightly visual update composes, site photo thumbnail log history, and WhatsApp delivery check analytics.", stats: "Next update: 10 Feb", status: "Active" },
    { id: "snag", name: "Snag / Punch List Agent", desc: "AI-triaged post-possession tickets inbox categorized by severity, linked work order assignments, and satisfaction scores.", stats: "9 active open snags", status: "Active" },
    { id: "resale", name: "Resale & Rental Assistance Agent", desc: "AI-based valuation (AVM) secondary market rental/resale listings management, portal syndication, and commission pipelines.", stats: "5 active list properties", status: "Active" },
    { id: "society", name: "Society Onboarding Agent", desc: "Cooperative societies formation tracker checklists, automated AGM invitations schedule, and AMC contracts handover logs.", stats: "RWA formation: 43% complete", status: "Active" },
    { id: "nps", name: "Post-Possession NPS & Loyalty Bot", desc: "Periodic buyer satisfaction surveys logs, promoter referral leaders, rewards disbursal log, and detractor intervention panels.", stats: "NPS Score: +62 (High)", status: "Active" }
  ];

  const getPageHeader = () => {
    const map: Record<TabType, { title: string; subtitle: string }> = {
      menu: { title: "Buyer Portal & Post-Sale Experience", subtitle: "A branded self-service portal that transforms the buyer experience from booking to possession — keeping buyers informed, engaged, and satisfied." },
      overview: { title: "Post-Sale Dashboard Overview", subtitle: "Consolidated portfolio view of registered buyers, installment collections health, rolling satisfaction indicators, and feedback trends." },
      "self-service": { title: "Buyer Self-Service Portal Simulator", subtitle: "Detailed homeowner personal dashboard representing flat layout highlights, registered documents archive, and direct RM communication log." },
      payments: { title: "Payment Schedule & Receipt Manager", subtitle: "Milestone-linked payment invoice builder, automated demand sequence timelines, and tax receipt generator." },
      progress: { title: "Construction Progress Feed Composer", subtitle: "Dispatch fortnightly customized construction milestones and site photo streams directly to buyer WhatsApp logs." },
      snag: { title: "Snag / Punch List Agent", subtitle: "Triages cosmetic and structural post-possession buyer snags, assigning local site vendors with automated tracking." },
      resale: { title: "Resale & Rental Assistance Agent", subtitle: "Assist existing buyers in leasing or reselling completed flats, matching properties with pre-qualified leads and managing commissions." },
      society: { title: "Society Onboarding Agent", subtitle: "Manage the legal transition process of property maintenance and contracts to Resident Welfare Associations (RWA)." },
      nps: { title: "Post-Possession NPS & Loyalty Bot", subtitle: "Periodic survey engine collecting satisfaction reviews, triggering detractor resolution alerts, and rewarding promoter referrals." }
    };
    return map[activeTab] || map.menu;
  };

  const headerInfo = getPageHeader();

  const dynamicTitle = activeTab === "menu" ? headerInfo.title : (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setActiveTab("menu")}
        className="group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95 mr-0.5"
        aria-label="Back to buyer menu"
      >
        <ChevronLeft className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>
      <span className="font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors" onClick={() => setActiveTab("menu")}>
        {headerInfo.title}
      </span>
    </div>
  );

  // --- 1. Dashboard Overview (M10 Overview) ---
  const renderOverview = () => (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <StatBox label="Active Buyers" value="186" desc="Total registered" color="text-slate-800" />
        <StatBox label="Portal Active (7d)" value="74" desc="40% weekly logins" color="text-blue-700" />
        <StatBox label="Payments Overdue" value="18" desc="Missed installments" color="text-red-600" />
        <StatBox label="Open Snags" value="9" desc="Unresolved tickets" color="text-amber-500" />
        <StatBox label="Rolling NPS Score" value="+62" desc="Excellent index" color="text-emerald-600" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Left panel: Payment health */}
        <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card">
          <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
              <DollarSign className="h-3.5 w-3.5 text-emerald-600" /> Buyer Payment Health Summary
            </div>
            <button onClick={() => setActiveTab("payments")} className="text-xs font-bold text-primary hover:underline font-mono">Receipt Manager →</button>
          </div>
          <div className="space-y-4 font-semibold text-xs text-foreground">
            {[
              { l: "Payment Current — All Clear", count: "148 buyers", pct: 80, c: "bg-emerald-500" },
              { l: "Upcoming Demand Due (< 30 days)", count: "24 buyers (₹3.8 Cr)", pct: 13, c: "bg-blue-500" },
              { l: "Overdue — 1–30 Days", count: "9 buyers (₹74.2 L)", pct: 5, c: "bg-amber-500 animate-pulse" },
              { l: "Overdue — 31–60 Days", count: "6 buyers (₹48.6 L)", pct: 3, c: "bg-red-400 animate-pulse" },
              { l: "Overdue — 60+ Days", count: "3 buyers (₹38.1 L)", pct: 2, c: "bg-red-600 animate-pulse" }
            ].map((p, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between">
                  <span>{p.l}</span>
                  <span className="text-slate-400 font-normal">{p.count}</span>
                </div>
                <div className="h-2 w-full bg-secondary/50 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${p.c}`} style={{ width: `${p.pct * 1.2}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Right panel: NPS dial gauge */}
        <div className="col-span-12 lg:col-span-5 space-y-5">
          <Card className="p-5 border border-border bg-card">
            <div className="flex items-center justify-between mb-3 border-b border-border pb-2">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
                <Smile className="h-3.5 w-3.5 text-emerald-600" /> Rolling NPS index
              </div>
              <button onClick={() => setActiveTab("nps")} className="text-xs font-bold text-primary hover:underline font-mono">Survey Bot →</button>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="relative h-16 w-16 shrink-0">
                <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
                  <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.9155" fill="none" strokeWidth="3" stroke="#1D9E75" strokeDasharray="81 19" strokeLinecap="round" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-mono font-extrabold text-[13px] text-emerald-600">+62</span>
              </div>
              <div>
                <div className="text-foreground">Rolling NPS Score (+62)</div>
                <p className="text-xs text-slate-400 font-normal mt-0.5">
                  74 Promoters (62%) · 29 Passives (24%) · 17 Detractors (14%)
                </p>
                <p className="text-xs font-mono text-emerald-600 mt-1">
                  Trend: +54 → +58 → +62 (Improving)
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-5 border border-border bg-card">
            <div className="flex items-center justify-between mb-3 border-b border-border pb-2">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-blue-700" /> Portal Engagement logins
              </div>
            </div>
            <div className="h-20 flex items-end gap-1.5 pt-2">
              {[41, 38, 52, 47, 61, 58, 74, 69].map((v, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end items-center h-full group">
                  <div className="w-full bg-blue-700/80 rounded-t hover:bg-blue-700 transition-colors" style={{ height: `${v}%` }} />
                  <span className="text-[10px] font-mono text-slate-400 mt-1">W{i+1}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  // --- 2. Buyer Self-Service Portal (10.1) ---
  const [selectedBuyerId, setSelectedBuyerId] = useState("B01");
  const selectedBuyer = useMemo(() => {
    return initialBuyersPool.find(b => b.id === selectedBuyerId) || initialBuyersPool[0];
  }, [selectedBuyerId]);

  const renderSelfService = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-slate-400" />
          <select
            value={selectedBuyerId}
            onChange={(e) => setSelectedBuyerId(e.target.value)}
            className="h-8 border border-border rounded-lg text-xs font-semibold px-2 bg-card text-foreground"
          >
            {initialBuyersPool.map(b => (
              <option key={b.id} value={b.id}>{b.name} ({b.unit})</option>
            ))}
          </select>
        </div>
        <span className="text-xs font-mono font-bold text-slate-400 bg-secondary px-2.5 py-1 rounded border border-border/60">
          Aadhaar & WhatsApp OTP Authenticated
        </span>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Left side: Overview card & summary */}
        <div className="col-span-12 lg:col-span-7 space-y-4">
          <Card className="p-5 border border-border bg-card space-y-4">
            <div className="border-b border-border pb-2 flex justify-between items-center">
              <h3 className="font-bold text-sm text-foreground font-display flex items-center gap-1.5">
                <Home className="h-4 w-4 text-primary" /> Property Overview — Unit {selectedBuyer.unit}
              </h3>
              <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">RERA Registered</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
              <div className="p-3 bg-secondary/30 rounded-xl space-y-1">
                <div className="text-xs text-slate-400 uppercase font-mono">Owner Name</div>
                <div className="text-foreground text-sm">{selectedBuyer.name}</div>
              </div>
              <div className="p-3 bg-secondary/30 rounded-xl space-y-1">
                <div className="text-xs text-slate-400 uppercase font-mono">Total Consideration</div>
                <div className="text-foreground text-sm">₹{(selectedBuyer.value/100000).toFixed(1)} Lakhs</div>
              </div>
              <div className="p-3 bg-secondary/30 rounded-xl space-y-1">
                <div className="text-xs text-slate-400 uppercase font-mono">Registered Area</div>
                <div className="text-foreground">{selectedBuyer.config === "2BHK" ? "788 sq ft" : "1,142 sq ft"} (Carpet)</div>
              </div>
              <div className="p-3 bg-secondary/30 rounded-xl space-y-1">
                <div className="text-xs text-slate-400 uppercase font-mono">Target RERA Possession</div>
                <div className="text-foreground">December 2026</div>
              </div>
              <div className="p-3 bg-secondary/30 rounded-xl space-y-1">
                <div className="text-xs text-slate-400 uppercase font-mono">Relationship Manager</div>
                <div className="text-foreground flex items-center gap-1.5">
                  <User className="h-3 w-3 text-slate-400" /> {selectedBuyer.rm}
                </div>
              </div>
              <div className="p-3 bg-secondary/30 rounded-xl space-y-1">
                <div className="text-xs text-slate-400 uppercase font-mono">Construction Stage</div>
                <div className="text-foreground flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse inline-block" /> Floors 9–14 Structural
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-border space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span>Payment Summary</span>
                <span className="font-mono text-emerald-600">{((selectedBuyer.paid/selectedBuyer.value)*100).toFixed(1)}% paid</span>
              </div>
              <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(selectedBuyer.paid/selectedBuyer.value)*100}%` }} />
              </div>
              <div className="flex justify-between text-xs text-slate-400 font-mono">
                <span>Paid: ₹{(selectedBuyer.paid/100000).toFixed(1)}L</span>
                <span>Remaining: ₹{((selectedBuyer.value - selectedBuyer.paid)/100000).toFixed(1)}L</span>
              </div>
            </div>
          </Card>

          {/* Document list */}
          <Card className="p-5 border border-border bg-card">
            <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border pb-2 mb-3">Self-Service Document Library</h4>
            <div className="space-y-2.5 text-xs font-semibold">
              {[
                { name: "Booking Application Form", date: "14/03/2023", status: "Executed" },
                { name: "Allotment Letter", date: "28/03/2023", status: "Issued" },
                { name: "Agreement for Sale (Registered)", date: "22/04/2023", status: "Executed" },
                { name: "Flat Layout Plan Annexure", date: "22/04/2023", status: "Available" }
              ].map((doc, idx) => (
                <div key={idx} className="flex justify-between items-center p-2 rounded-xl bg-background border border-border">
                  <div className="min-w-0">
                    <div className="font-bold truncate text-foreground">{doc.name}</div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">Date: {doc.date}</div>
                  </div>
                  <button
                    onClick={() => alert(`Downloading ${doc.name} PDF...`)}
                    className="h-7 w-7 rounded-lg border border-border hover:bg-secondary flex items-center justify-center text-slate-500 hover:text-foreground shrink-0 ml-3"
                  >
                    <Download className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right side: RM contact & communication logs */}
        <div className="col-span-12 lg:col-span-5 space-y-4">
          <Card className="p-5 border border-border bg-card space-y-4 flex flex-col justify-between">
            <div>
              <div className="border-b border-border pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Communication Logs</h4></div>
              <div className="space-y-3 font-semibold mt-3 text-xs">
                {[
                  { sender: "Fortiv AI Bot", msg: "Fortnightly Progress update #18 dispatched via WhatsApp", time: "14/01/2025 09:14 AM" },
                  { sender: selectedBuyer.rm, msg: "Personal call: discussing floor tile choice options", time: "08/01/2025 02:40 PM" },
                  { sender: "Accounts Dept", msg: "Demand note for Floor 8 Slab payment dispatched", time: "30/12/2024 10:15 AM" },
                  { sender: "System Notification", msg: "Registered Sale Agreement document copy uploaded to portal", time: "25/04/2023" }
                ].map((log, idx) => (
                  <div key={idx} className="border-b border-border pb-2.5 last:border-0 last:pb-0">
                    <div className="flex justify-between font-mono text-xs text-slate-400 mb-0.5">
                      <span>{log.sender}</span>
                      <span>{log.time}</span>
                    </div>
                    <p className="text-foreground font-sans text-xs leading-relaxed">{log.msg}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border space-y-2">
              <button
                onClick={() => alert(`Starting simulated WhatsApp chat with ${selectedBuyer.name}...`)}
                className="w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="h-4 w-4" /> Message via WhatsApp
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  // --- 3. Payment Schedule & Receipt Manager (10.2) ---
  const [demandNotes, setDemandNotes] = useState(initialDemandNotes);
  const [paymentFilter, setPaymentFilter] = useState("All");

  const filteredPayments = useMemo(() => {
    if (paymentFilter === "All") return initialBuyersPool;
    if (paymentFilter === "Overdue") return initialBuyersPool.filter(b => b.status.includes("Overdue"));
    return initialBuyersPool.filter(b => b.status === paymentFilter);
  }, [paymentFilter]);

  const compileDemandNotes = (milestoneName: string) => {
    setDemandNotes(prev => prev.map(d => {
      if (d.milestone === milestoneName) {
        return { ...d, status: "Demand notes compiled" };
      }
      return d;
    }));
    alert(`Demand notes compiled and queued for dispatch for: ${milestoneName}`);
  };

  const renderPayments = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <StatBox label="Installments Received" value="₹16.3Cr" desc="All-time bookings collections" color="text-slate-800" />
        <StatBox label="Total Receivables" value="₹1.61Cr" desc="18 buyers overdue" color="text-red-600" />
        <StatBox label="Next Milestone Demands" value="₹6.4Cr" desc="Floor 12 Slab milestone" color="text-blue-700" />
        <StatBox label="Tax Receipts Dispatched" value="100%" desc="Auto GST invoices" color="text-emerald-600" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Left side: demand note creation queue */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Milestone Demand Note Dispatcher</h4></div>
          <div className="space-y-3 font-semibold text-xs text-slate-600">
            {demandNotes.map((d, i) => (
              <div key={i} className="p-3 bg-secondary/35 rounded-xl border border-border/50 space-y-2">
                <div className="flex justify-between font-mono text-xs">
                  <span className="text-slate-400">{d.date}</span>
                  <span className={statusBadge(d.status)}>{d.status}</span>
                </div>
                <div>
                  <div className="text-foreground text-sm font-bold">{d.milestone}</div>
                  <p className="text-xs text-slate-400 font-normal mt-0.5">{d.buyers} buyers affected · Value: ₹{(d.val/10000000).toFixed(2)}Cr</p>
                </div>
                {d.status === "Auto-compile pending" && (
                  <button
                    onClick={() => compileDemandNotes(d.milestone)}
                    className="w-full h-7 rounded bg-ink hover:bg-ink/90 text-cream text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Compile & Dispatch Demand Notes
                  </button>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Right side: Overdue collection list */}
        <Card className="col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden">
          <div className="p-3 bg-secondary/35 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-xs text-foreground font-display uppercase tracking-wider">Buyer Ledger & Receivables</h3>
            <div className="flex gap-1">
              {["All", "Overdue", "Current"].map(f => (
                <button
                  key={f}
                  onClick={() => setPaymentFilter(f)}
                  className={`h-6 px-2.5 rounded text-xs font-bold uppercase tracking-wider border transition-all ${paymentFilter === f ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Buyer</th>
                  <th className="px-3.5 py-2.5 font-mono">Unit</th>
                  <th className="px-3.5 py-2.5 font-mono">Agr. Value</th>
                  <th className="px-3.5 py-2.5 font-mono">Paid</th>
                  <th className="px-3.5 py-2.5">Status</th>
                  <th className="px-3.5 py-2.5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {filteredPayments.map(b => (
                  <tr key={b.id} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-3 font-bold">{b.name}</td>
                    <td className="px-3.5 py-3 font-mono font-bold text-slate-400">{b.unit}</td>
                    <td className="px-3.5 py-3 font-mono">₹{(b.value/100000).toFixed(1)}L</td>
                    <td className="px-3.5 py-3 font-mono">₹{(b.paid/100000).toFixed(1)}L</td>
                    <td className="px-3.5 py-3">
                      <span className={`text-xs font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadge(b.status)}`}>{b.status}</span>
                    </td>
                    <td className="px-3.5 py-3">
                      {b.status.includes("Overdue") ? (
                        <button
                          onClick={() => alert(`WhatsApp payment reminder sequence triggered for ${b.name}.`)}
                          className="h-6 px-2 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-mono uppercase shrink-0"
                        >
                          Remind
                        </button>
                      ) : (
                        <button
                          onClick={() => alert(`Receipt PDF REC/GVH/2025/00${b.id} re-dispatched to email.`)}
                          className="h-6 px-2 rounded border border-border text-xs font-mono hover:bg-secondary"
                        >
                          Receipt
                        </button>
                      )}
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

  // --- 4. Construction Progress Feed (10.3) ---
  const [composingMsg, setComposingMsg] = useState(
    "Structural slabs on Tower A are now 84% completed. Plastering works starting on floors 1–4. Target Dec 2026 possession remains fully on track."
  );

  const simulateProgressDispatch = () => {
    alert(`Fortnightly Visual Site Update successfully dispatched to 186 registered buyers via WhatsApp & Portal.`);
  };

  const renderProgress = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-12 gap-5">
        {/* Left side: Composer */}
        <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border pb-2"><h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Customized Progress Feed Composer</h3></div>

          <div className="space-y-3.5 text-xs font-semibold">
            <div className="space-y-1">
              <label className="text-slate-400">Hero Update Narrative</label>
              <textarea
                value={composingMsg}
                onChange={(e) => setComposingMsg(e.target.value)}
                className="w-full h-24 border border-border rounded-xl p-3 bg-secondary/20 text-foreground font-sans focus:outline-none focus:border-primary"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border border-dashed border-border rounded-2xl flex flex-col items-center justify-center font-mono text-slate-400 text-xs h-28 relative">
                <Camera className="h-6 w-6 stroke-[1.5] mb-1" />
                <span>Concrete casting photo (Tower A)</span>
                <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 rounded mt-1">AI selected from site logs</span>
              </div>
              <div className="p-3 border border-dashed border-border rounded-2xl flex flex-col items-center justify-center font-mono text-slate-400 text-xs h-28 relative">
                <Camera className="h-6 w-6 stroke-[1.5] mb-1" />
                <span>Waterproofing photo (Podium)</span>
                <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 rounded mt-1">AI selected from site logs</span>
              </div>
            </div>

            <div className="p-3 bg-secondary/35 rounded-xl border border-border font-mono text-xs text-slate-600 space-y-1">
              <strong className="text-slate-800">Dynamic Personalization Rules Active:</strong>
              <p>• Tower A buyers receive Tower A-specific photos & slab completion stats first.</p>
              <p>• Promoters (NPS 9-10) receive a Referral promotion footer badge.</p>
            </div>

            <div className="pt-2">
              <button
                onClick={simulateProgressDispatch}
                className="w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
              >
                Dispatch Visual Update to all Buyers
              </button>
            </div>
          </div>
        </Card>

        {/* Right side: WhatsApp template preview */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">WhatsApp Message Preview</h4></div>
          <div className="p-3 bg-[#ECF3EE] rounded-2xl border border-emerald-100 font-sans text-xs leading-relaxed text-slate-700 font-medium">
            <div className="font-bold text-slate-800 mb-1">Fortiv Greenview Heights ·</div>
            <div className="h-28 bg-emerald-950/10 rounded-xl mb-2 flex items-center justify-center text-slate-400 font-mono text-xs border border-emerald-200">
              [Embedded Hero Construction Photo]
            </div>
            <p><strong>Hi Rajesh!</strong> Here is your construction update #18 for Fortiv Greenview Heights:</p>
            <p className="mt-1">{composingMsg}</p>
            <div className="bg-white/80 border border-slate-200 rounded-xl p-2 mt-2 font-mono text-xs text-slate-600">
              <strong>Progress Dashboard Overview:</strong><br />
              • Overall structural progress: 67% complete<br />
              • Tower A slabs: 84% completed<br />
              • Tower B slabs: 31% completed
            </div>
            <p className="mt-2 text-slate-400 font-mono text-xs">Warm regards, Priya Rana (Relationship Manager)</p>
            <div className="text-right text-[10px] text-slate-400 mt-1">11:42 AM ✓✓</div>
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 5. Snag / Punch List Agent (10.4) ---
  const [snags, setSnags] = useState(initialSnags);
  const [selectedSnag, setSelectedSnag] = useState(initialSnags[0]);

  const resolveSnag = (id: string) => {
    setSnags(prev => prev.map(s => {
      if (s.id === id) {
        return { ...s, status: "Resolved", resolved: "Today", satisfaction: "Satisfied" };
      }
      return s;
    }));
    setSelectedSnag(prev => {
      if (prev.id === id) {
        return { ...prev, status: "Resolved", resolved: "Today", satisfaction: "Satisfied" };
      }
      return prev;
    });
    alert(`Snag ${id} resolved. Closed-loop customer confirmation dispatched.`);
  };

  const renderSnag = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <StatBox label="Total Snags Logged" value="49" desc="Post-possession handovers" color="text-slate-800" />
        <StatBox label="Tickets Resolved" value="40" desc="81.6% resolution rate" color="text-emerald-600" />
        <StatBox label="Active Open Tickets" value="9" desc="Awaiting fix" color="text-amber-500" />
        <StatBox label="Average Resolution" value="4.2 days" desc="Turnaround SLA speed" color="text-blue-700" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Snags list */}
        <Card className="col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden">
          <div className="p-3 bg-secondary/35 border-b border-border text-xs font-bold uppercase text-slate-500 font-display">Snag Defect Registry</div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Ticket</th>
                  <th className="px-3.5 py-2.5">Buyer / Unit</th>
                  <th className="px-3.5 py-2.5 font-mono">Category</th>
                  <th className="px-3.5 py-2.5">Severity</th>
                  <th className="px-3.5 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {snags.map(s => (
                  <tr
                    key={s.id}
                    onClick={() => setSelectedSnag(s)}
                    className={`hover:bg-secondary/15 cursor-pointer transition-colors ${selectedSnag.id === s.id ? "bg-secondary/20 font-bold" : ""}`}
                  >
                    <td className="px-3.5 py-3 font-mono font-bold text-slate-400">{s.id}</td>
                    <td className="px-3.5 py-3">
                      <div className="font-bold text-foreground">{s.buyer}</div>
                      <div className="text-xs text-slate-400 font-mono font-normal">Unit {s.unit}</div>
                    </td>
                    <td className="px-3.5 py-3 text-slate-500 font-mono">{s.category}</td>
                    <td className="px-3.5 py-3">
                      <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold uppercase ${s.severity === "Functional" ? "bg-amber-100 text-amber-700" : s.severity === "Structural" ? "bg-red-100 text-red-700 border border-red-200" : "bg-slate-100 text-slate-500"}`}>
                        {s.severity}
                      </span>
                    </td>
                    <td className="px-3.5 py-3">
                      <span className={`text-xs font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(s.status)}`}>{s.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Selected ticket details */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border pb-2 flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display">AI Triage Case File</span>
            <span className={`text-xs font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(selectedSnag.status)}`}>{selectedSnag.status}</span>
          </div>

          <div className="space-y-3.5 text-xs font-semibold">
            <div>
              <h4 className="font-display font-bold text-foreground text-sm">Ticket {selectedSnag.id} ({selectedSnag.category})</h4>
              <p className="text-xs text-slate-400 font-normal">Buyer: {selectedSnag.buyer} · {selectedSnag.phone}</p>
            </div>

            <div className="p-3 bg-secondary/35 rounded-xl border border-border font-mono text-xs space-y-1.5 text-slate-600">
              <div className="flex justify-between"><span>Date Opened:</span><span className="text-foreground">{selectedSnag.opened}</span></div>
              <div className="flex justify-between"><span>Date Resolved:</span><span className="text-foreground">{selectedSnag.resolved}</span></div>
              <div className="flex justify-between"><span>Severity Tier:</span><span className="text-foreground font-bold">{selectedSnag.severity}</span></div>
              <div className="flex justify-between"><span>Buyer Satisfaction:</span><span className="text-emerald-600 font-bold">{selectedSnag.satisfaction}</span></div>
            </div>

            <div className="p-3 bg-background border border-border/50 rounded-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Issue Description & Note:</span>
              <p className="text-foreground text-xs leading-relaxed font-sans">{selectedSnag.note}</p>
            </div>

            <div className="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/10 text-emerald-700 text-xs font-mono leading-relaxed">
              ⚡ <strong>AI Triage Rule:</strong> Within 12-month post-handover warranty coverage period. Work order dispatch pre-approved.
            </div>

            {selectedSnag.status !== "Resolved" && (
              <button
                onClick={() => resolveSnag(selectedSnag.id)}
                className="w-full h-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
              >
                Mark Ticket as Resolved
              </button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 6. Resale & Rental Assistance Agent (10.5) ---
  const [resales, setResales] = useState(resalesListings);
  const [selectedListing, setSelectedListing] = useState(resalesListings[0]);

  const addListing = () => {
    const newListing = {
      id: `RSL-0${resales.length + 1}`,
      type: "Resale",
      unit: "A-1002",
      owner: "Ritu Bhandari",
      asking: 5350000,
      avm: 5200000,
      status: "Listed",
      inquiries: 0,
      agent: "Meera Patel"
    };
    setResales(prev => [...prev, newListing]);
    setSelectedListing(newListing);
    alert("New resale listing successfully generated using pre-filled CRM unit parameters.");
  };

  const renderResale = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">In-House Brokerage Listings</h4>
        <button
          onClick={addListing}
          className="h-8 px-3 rounded-md bg-ink hover:bg-ink/90 text-cream text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-sm"
        >
          <Plus className="h-3.5 w-3.5" /> List Completed Unit
        </button>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Listings Table */}
        <Card className="col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Listing ID</th>
                  <th className="px-3.5 py-2.5">Type</th>
                  <th className="px-3.5 py-2.5 font-mono">Unit</th>
                  <th className="px-3.5 py-2.5">Owner</th>
                  <th className="px-3.5 py-2.5 font-mono">Asking Price</th>
                  <th className="px-3.5 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {resales.map(r => (
                  <tr
                    key={r.id}
                    onClick={() => setSelectedListing(r)}
                    className={`hover:bg-secondary/15 cursor-pointer transition-colors ${selectedListing.id === r.id ? "bg-secondary/20 font-bold" : ""}`}
                  >
                    <td className="px-3.5 py-3 font-mono font-bold text-slate-400">{r.id}</td>
                    <td className="px-3.5 py-3">
                      <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold uppercase ${r.type === "Rental" ? "bg-blue-50 text-blue-700" : "bg-purple-50 text-purple-700"}`}>{r.type}</span>
                    </td>
                    <td className="px-3.5 py-3 font-mono font-bold text-slate-700">{r.unit}</td>
                    <td className="px-3.5 py-3 text-slate-500">{r.owner}</td>
                    <td className="px-3.5 py-3 font-mono font-bold">{r.type === "Rental" ? `₹${(r.asking/1000).toFixed(0)}k/mo` : `₹${(r.asking/100000).toFixed(1)}L`}</td>
                    <td className="px-3.5 py-3">
                      <span className={`text-xs font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(r.status)}`}>{r.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Detailed Card */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Secondary Deal Card</h4></div>

          <div className="space-y-3.5 text-xs font-semibold">
            <div>
              <h4 className="font-display font-bold text-foreground text-sm">Unit {selectedListing.unit} ({selectedListing.type})</h4>
              <p className="text-xs text-slate-400 font-normal">Assigned In-House Broker: {selectedListing.agent}</p>
            </div>

            <div className="p-3 bg-secondary/35 rounded-xl border border-border font-mono text-xs space-y-1 text-slate-600">
              <div className="flex justify-between"><span>Owner Name:</span><span className="text-foreground">{selectedListing.owner}</span></div>
              <div className="flex justify-between"><span>Asking Quote:</span><span className="text-foreground font-bold">{selectedListing.type === "Rental" ? `₹${selectedListing.asking.toLocaleString()}/mo` : `₹${(selectedListing.asking/100000).toFixed(1)} Lakhs`}</span></div>
              <div className="flex justify-between"><span>AI valuation (AVM):</span><span className="text-emerald-600 font-bold">{selectedListing.type === "Rental" ? `₹${selectedListing.avm.toLocaleString()}/mo` : `₹${(selectedListing.avm/100000).toFixed(1)} Lakhs`}</span></div>
              <div className="flex justify-between"><span>Inquiries Received:</span><span className="text-foreground font-bold">{selectedListing.inquiries}</span></div>
            </div>

            <div className="p-2.5 rounded-xl border border-purple-200 bg-purple-50/10 text-purple-700 text-xs font-mono leading-relaxed">
              ⭐ <strong>Fortiv Brokerage Fee (1.5%):</strong> Estimated revenue: ₹{selectedListing.type === "Rental" ? "₹320" : `${(selectedListing.asking * 0.015 / 100000).toFixed(2)} Lakhs`} upon close.
            </div>

            <div className="pt-2">
              <button
                onClick={() => alert(`Syndicated listing ${selectedListing.id} updated on 99acres and MagicBricks.`)}
                className="w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
              >
                Sync with External Portals
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 7. Society Onboarding Agent (10.6) ---
  const [checklist, setChecklist] = useState(checklistSteps);

  const markStepComplete = (id: number) => {
    setChecklist(prev => prev.map(s => {
      if (s.id === id) {
        return { ...s, status: "Completed" };
      }
      return s;
    }));
  };

  const renderSociety = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      {/* Onboarding progress */}
      <div className="p-4 border border-border bg-card rounded-2xl space-y-2">
        <div className="flex justify-between text-xs font-semibold">
          <span className="text-foreground">Resident Welfare Association (RWA) Handover Progress</span>
          <span className="font-mono text-primary font-bold">43% formed</span>
        </div>
        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: "43%" }} />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Step checklist */}
        <Card className="col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden">
          <div className="p-3 bg-secondary/35 border-b border-border text-xs font-bold uppercase text-slate-500 font-display">Legal Transfer Steps</div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {checklist.map(s => (
                  <tr key={s.id} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-3 font-mono font-bold text-slate-400 w-8">{s.id}</td>
                    <td className="px-3.5 py-3 text-foreground">{s.step}</td>
                    <td className="px-3.5 py-3 text-slate-400 font-mono text-xs">{s.owner}</td>
                    <td className="px-3.5 py-3">
                      <span className={`text-xs font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(s.status)}`}>{s.status}</span>
                    </td>
                    <td className="px-3.5 py-3 text-right">
                      {s.status !== "Completed" && (
                        <button
                          onClick={() => markStepComplete(s.id)}
                          className="h-6 px-2 rounded bg-ink hover:bg-ink/90 text-cream text-xs font-mono uppercase"
                        >
                          Complete
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* AMC contracts handovers */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Operational Handover Contracts (AMC)</h4></div>

          <div className="space-y-3 font-semibold text-xs text-slate-600">
            {amcContracts.map((a, i) => (
              <div key={i} className="flex justify-between items-center border-b border-border pb-2 last:border-0 last:pb-0">
                <div>
                  <div className="text-foreground">{a.name}</div>
                  <div className="text-xs text-slate-400 font-normal">Vendor: {a.vendor} · Exp: {a.expiry}</div>
                </div>
                <span className="text-xs font-mono font-bold bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded shrink-0">{a.status}</span>
              </div>
            ))}
            <button
              onClick={() => alert("Batch AGM Notice issued to all 186 registered resident emails & WhatsApp numbers.")}
              className="w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all mt-3"
            >
              Draft & Dispatch AGM Notice
            </button>
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 8. Post-Possession NPS & Loyalty Bot (10.7) ---
  const [promoters, setPromoters] = useState(initialBuyersPool.filter(b => b.class === "Promoter"));
  const detractors = useMemo(() => {
    return initialBuyersPool.filter(b => b.class === "Detractor");
  }, []);

  const renderNps = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <StatBox label="NPS Survey responses" value="68%" desc="119 of 175 surveyed" color="text-slate-800" />
        <StatBox label="Attributed Bookings" value="4" desc="From referrals" color="text-emerald-600" />
        <StatBox label="Referral Revenue" value="₹2.24Cr" desc="Active pipeline value" color="text-blue-700" />
        <StatBox label="Detractor Cases Pending" value="3" desc="Awaiting RM callbacks" color="text-red-600" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Promoters leaderboard */}
        <Card className="col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden">
          <div className="p-3 bg-secondary/35 border-b border-border text-xs font-bold uppercase text-slate-500 font-display flex items-center justify-between">
            <span>Promoter Loyalty Leaderboard</span>
            <span className="text-xs text-emerald-600 font-mono">Disbursing ₹10,000 per booking</span>
          </div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Promoter</th>
                  <th className="px-3.5 py-2.5 font-mono">Unit</th>
                  <th className="px-3.5 py-2.5 font-mono">Score</th>
                  <th className="px-3.5 py-2.5 font-mono">Referrals Made</th>
                  <th className="px-3.5 py-2.5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {promoters.map((p, idx) => (
                  <tr key={idx} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-3 font-bold">{p.name}</td>
                    <td className="px-3.5 py-3 font-mono font-bold text-slate-400">{p.unit}</td>
                    <td className="px-3.5 py-3 font-mono font-extrabold text-emerald-600">★ {p.nps}</td>
                    <td className="px-3.5 py-3 font-mono text-slate-500">
                      {p.name === "Amit Desai" ? "2 referrals made" : p.name === "Vikram Joshi" ? "1 referral booked" : "0 referrals"}
                    </td>
                    <td className="px-3.5 py-3">
                      <button
                        onClick={() => alert(`Unique referral tracking link: fortiv.in/loyalty/ref-00${p.id} re-dispatched.`)}
                        className="h-6 px-2 rounded bg-ink hover:bg-ink/90 text-cream text-xs font-mono uppercase"
                      >
                        Referral Link
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Detractor alert cards */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Detractor Followup Intervention Queue</h4></div>
          <div className="space-y-3 font-semibold text-xs">
            {detractors.map((d, i) => (
              <div key={i} className="p-3 rounded-xl border border-red-200 bg-red-50/15 space-y-2 text-red-600">
                <div className="flex justify-between font-mono text-xs">
                  <span>Score: ★ {d.nps} ({d.class})</span>
                  <span>Unit {d.unit}</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">{d.name}</div>
                  <p className="text-xs font-normal text-slate-500 mt-0.5">Assigned Liaison Manager: {d.rm}</p>
                </div>
                <button
                  onClick={() => alert(`Urgent RM scheduling task dispatched to ${d.rm} for detractor call.`)}
                  className="w-full h-7 rounded bg-ink text-cream hover:bg-ink/90 text-xs font-bold uppercase tracking-wider font-mono transition-all"
                >
                  Schedule Priority Callback
                </button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  return (
    <AppShell title={dynamicTitle} subtitle={headerInfo.subtitle}>
      <div className="transition-all duration-300">
        {activeTab === "menu" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-in fade-in duration-300">
            {submodulesList.map((mod) => (
              <Card
                key={mod.id}
                onClick={() => setActiveTab(mod.id as TabType)}
                className="bg-card border shadow-sm rounded-xl p-5 cursor-pointer flex flex-col justify-between group h-44"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full border font-mono text-emerald-700 bg-emerald-50 border-emerald-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> {mod.status}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-ink transition-colors mt-1 font-display">{mod.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2 font-medium">{mod.desc}</p>
                </div>
                <div className="border-t border-border mt-4 pt-3 flex items-center justify-between text-xs font-bold text-muted-foreground group-hover:text-foreground">
                  <span className="font-mono font-bold text-foreground">{mod.stats}</span>
                  <span className="flex items-center gap-0.5 text-ink group-hover:underline font-mono">Access <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Card>
            ))}
          </div>
        )}
        {activeTab === "overview" && renderOverview()}
        {activeTab === "self-service" && renderSelfService()}
        {activeTab === "payments" && renderPayments()}
        {activeTab === "progress" && renderProgress()}
        {activeTab === "snag" && renderSnag()}
        {activeTab === "resale" && renderResale()}
        {activeTab === "society" && renderSociety()}
        {activeTab === "nps" && renderNps()}
      </div>
    </AppShell>
  );
}

function StatBox({ label, value, desc, color }: { label: string; value: string; desc: string; color: string }) {
  return (
    <Card className="p-5 flex flex-col justify-between relative min-h-24 border border-border bg-card">
      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 font-display">{label}</div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className={`font-display text-2xl font-bold tracking-tight font-mono ${color}`}>{value}</div>
        <span className="text-xs font-semibold text-muted-foreground">{desc}</span>
      </div>
    </Card>
  );
}
