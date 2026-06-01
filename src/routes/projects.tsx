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
  Truck,
  Camera,
  Layers,
  Sparkles,
  AlertCircle,
  BarChart3,
  Layers3,
  Upload
} from "lucide-react";

export const Route = createFileRoute("/projects")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tab: (search.tab as string) || undefined,
    };
  },
  head: () => ({ meta: [{ title: "Project Intelligence · Fortiv" }] }),
  component: ProjectManager,
});

type TabType =
  | "menu"
  | "overview"
  | "timeline"
  | "subcontractor"
  | "procurement"
  | "approvals"
  | "sitelog"
  | "cost"
  | "possession";

// --- MOCK DATA ---

const initialPhases = [
  { id: "P01", name: "Land Acquisition", plannedStart: "01/03/2022", plannedEnd: "31/05/2022", actualEnd: "31/05/2022", pct: 100, status: "Completed", critical: false, lead: "Suresh Mehta", cascade: 0, subPhases: ["Clear Title Deeds", "Sub-Registrar Filing", "Khata Transfer"] },
  { id: "P02", name: "Design & Drawings", plannedStart: "01/06/2022", plannedEnd: "30/09/2022", actualEnd: "30/09/2022", pct: 100, status: "Completed", critical: false, lead: "Vijay Thakkar", cascade: 0, subPhases: ["Architectural Layout", "Structural Design", "MEP Schematics"] },
  { id: "P03", name: "RERA Registration", plannedStart: "01/09/2022", plannedEnd: "31/12/2022", actualEnd: "31/12/2022", pct: 100, status: "Completed", critical: false, lead: "Suresh Mehta", cascade: 0, subPhases: ["Public Disclosures", "Certificate Generation"] },
  { id: "P04", name: "Building Plan Approval", plannedStart: "01/09/2022", plannedEnd: "28/02/2023", actualEnd: "28/02/2023", pct: 100, status: "Completed", critical: false, lead: "Suresh Mehta", cascade: 0, subPhases: ["SMC NOC", "SUDA Clearance"] },
  { id: "P05", name: "Foundation", plannedStart: "01/03/2023", plannedEnd: "31/07/2023", actualEnd: "31/07/2023", pct: 100, status: "Completed", critical: true, lead: "Ramesh Patel", cascade: 0, subPhases: ["Excavation", "Piling Works", "Raft Foundation"] },
  { id: "P06", name: "Basement / Podium", plannedStart: "01/08/2023", plannedEnd: "31/01/2024", actualEnd: "31/01/2024", pct: 100, status: "Completed", critical: true, lead: "Ramesh Patel", cascade: 0, subPhases: ["Columns & Retaining Walls", "Podium Slab Casting"] },
  { id: "P07", name: "Structural Floors 1–8", plannedStart: "01/02/2024", plannedEnd: "31/10/2024", actualEnd: "31/10/2024", pct: 100, status: "Completed", critical: true, lead: "Ramesh Patel", cascade: 0, subPhases: ["Tower A Slab 1-8", "Tower B Slab 1-8"] },
  { id: "P08", name: "Structural Floors 9–14", plannedStart: "01/11/2024", plannedEnd: "30/04/2025", actualEnd: "12/05/2025", pct: 31, status: "At Risk", critical: true, lead: "Ramesh Patel", cascade: 12, subPhases: ["Floor 9 Casting (85%)", "Floor 10 Formwork (72%)", "Floor 11 Steel Laying (44%)"] },
  { id: "P09", name: "External Finishing", plannedStart: "01/01/2025", plannedEnd: "30/06/2025", actualEnd: "12/07/2025", pct: 8, status: "In Progress", critical: false, lead: "Vijay Thakkar", cascade: 0, subPhases: ["Outer Plastering", "Compound Wall Development"] },
  { id: "P10", name: "Internal Finishing", plannedStart: "01/05/2025", plannedEnd: "31/10/2025", actualEnd: "12/11/2025", pct: 0, status: "Planned", critical: false, lead: "Vijay Thakkar", cascade: 0, subPhases: ["Floor Tiling", "Wall Putty & Paint"] },
  { id: "P11", name: "MEP / Services", plannedStart: "01/04/2025", plannedEnd: "30/09/2025", actualEnd: "12/10/2025", pct: 0, status: "Planned", critical: true, lead: "Ramesh Patel", cascade: 0, subPhases: ["Wiring & Switchboards", "Sanitary Lines Installation"] },
  { id: "P12", name: "Landscaping", plannedStart: "01/07/2025", plannedEnd: "30/11/2025", actualEnd: "30/11/2025", pct: 0, status: "Planned", critical: false, lead: "Vijay Thakkar", cascade: 0, subPhases: ["Lobby Layout", "Podium Garden Planting"] },
  { id: "P13", name: "OC Application", plannedStart: "01/11/2025", plannedEnd: "31/01/2026", actualEnd: "02/02/2026", pct: 0, status: "Planned", critical: true, lead: "Suresh Mehta", cascade: 0, subPhases: ["Documentation Assembly", "NOC Clearance File"] },
  { id: "P14", name: "OC Receipt", plannedStart: "01/02/2026", plannedEnd: "30/09/2026", actualEnd: "11/10/2026", pct: 0, status: "Planned", critical: true, lead: "Suresh Mehta", cascade: 0, subPhases: ["Liaison Inspections"] },
  { id: "P15", name: "Possession", plannedStart: "01/10/2026", plannedEnd: "31/12/2026", actualEnd: "31/12/2026", pct: 0, status: "Planned", critical: true, lead: "Vijay Thakkar", cascade: 0, subPhases: ["Key Handover Scheduled"] }
];

const contractors = [
  { id: "C-1", name: "Mehta Civil Works", trade: "Civil / Structural", lead: "Jayesh Mehta", phone: "+91 99245 12345", gst: "24AAAAA0000A1Z5", performance: 82, woCount: 2, status: "Active", expiry: "31/03/2026" },
  { id: "C-2", name: "Patel Plumbing Co.", trade: "MEP / Plumbing", lead: "Hiren Patel", phone: "+91 98254 98765", gst: "24BBBBB1111B2Z6", performance: 75, woCount: 1, status: "Active", expiry: "15/08/2025" },
  { id: "C-3", name: "Shree Electricals", trade: "MEP / Electrical", lead: "Ketan Shah", phone: "+91 93741 56789", gst: "24CCCCC2222C3Z7", performance: 88, woCount: 1, status: "Active", expiry: "10/12/2025" },
  { id: "C-4", name: "Ramdev Steel", trade: "Steel / Reinforcement", lead: "Ramdev Patel", phone: "+91 99044 11223", gst: "24DDDDD3333D4Z8", performance: 79, woCount: 1, status: "Active", expiry: "30/09/2025" },
  { id: "C-5", name: "Aakash Tiles", trade: "Finishing / Tiles", lead: "Vimal Shah", phone: "+91 97241 99887", gst: "24EEEEE4444E5Z9", performance: 71, woCount: 1, status: "Active", expiry: "01/01/2026" },
  { id: "C-6", name: "JP Waterproofing", trade: "Waterproofing", lead: "Jignesh Patel", phone: "+91 92254 33445", gst: "24FFFFF5555F6ZA", performance: 84, woCount: 1, status: "Active", expiry: "28/02/2026" }
];

const workOrders = [
  { id: "WO-041", contractor: "Mehta Civil Works", scope: "Tower A Fl 10 Slab Casting", value: 1890000, status: "Completed", paid: 1890000, start: "15/12/2024", end: "10/01/2025" },
  { id: "WO-044", contractor: "Ramdev Steel", scope: "Reinforcement Tower B Fl 9–10", value: 2430000, status: "In Progress", paid: 730000, start: "02/01/2025", end: "25/01/2025" },
  { id: "WO-047", contractor: "Mehta Civil Works", scope: "Tower A Fl 11 Slab Casting", value: 2016000, status: "In Progress", paid: 605000, start: "20/01/2025", end: "15/02/2025" },
  { id: "WO-042", contractor: "Patel Plumbing Co.", scope: "Internal Plumbing Fl 1–5", value: 1240000, status: "In Progress", paid: 490000, start: "10/01/2025", end: "28/02/2025" }
];

const procurementLog = [
  { id: "IND-112", material: "M30 Ready Mix Concrete", quantity: "190 cu.m", urgency: "High", vendor: "Ultratech RMC", val: 1178000, status: "PO Sent", eta: "27/01/2025" },
  { id: "IND-108", material: "TMT Steel Fe500", quantity: "28 MT", urgency: "High", vendor: "Kamdhenu Steel", val: 1960000, status: "Delivered", eta: "18/01/2025" },
  { id: "IND-109", material: "OPC 53 Grade Cement", quantity: "400 Bags", urgency: "Medium", vendor: "Ultratech Cement", val: 220000, status: "Delivered", eta: "20/01/2025" },
  { id: "IND-110", material: "CPVC Plumbing Pipes", quantity: "1,200 m", urgency: "Medium", vendor: "Astral Pipes", val: 180000, status: "In Transit", eta: "22/01/2025" },
  { id: "IND-111", material: "Ceramic Floor Tiles", quantity: "2,400 sq ft", urgency: "Medium", vendor: "Somany Tiles", val: 410000, status: "PO Sent", eta: "25/01/2025" }
];

const statutoryApprovals = [
  { name: "RERA Registration", authority: "Gujarat RERA", stage: "Registration", status: "Complete", due: "31/12/2022", blocksPossession: true, file: "RERA_Cert.pdf" },
  { name: "Building Plan Approval", authority: "Surat Municipal Corp", stage: "Planning", status: "Complete", due: "28/02/2023", blocksPossession: true, file: "SMC_Plan_App.pdf" },
  { name: "Commencement Certificate", authority: "SUDA", stage: "Commencement", status: "Complete", due: "01/04/2023", blocksPossession: true, file: "Commence_Cert.pdf" },
  { name: "Environment Clearance", authority: "SEIAA Gujarat", stage: "Environmental", status: "Complete", due: "30/06/2023", blocksPossession: false, file: "Env_NOC.pdf" },
  { name: "RERA Q1 2025 QPR", authority: "Gujarat RERA", stage: "Reporting", status: "Action Required", due: "31/01/2025", blocksPossession: false, file: "Pending" },
  { name: "Fire NOC (Provisional)", authority: "Surat Fire Department", stage: "Safety", status: "Not Initiated", due: "15/03/2025", blocksPossession: true, file: "Pending" },
  { name: "Occupation Certificate (OC)", authority: "SUDA", stage: "Occupancy", status: "Not Applied", due: "15/10/2026", blocksPossession: true, file: "Pending" }
];

const ocReadinessList = [
  { item: "Structural Slab Completion", category: "Civil", status: "In Progress (67%)" },
  { item: "Fire Fighting Sprinkler & Piping", category: "MEP", status: "Not Initiated" },
  { item: "Water connection sanction", category: "Utilities", status: "Pending Application" },
  { item: "Electricity substation NOC", category: "Utilities", status: "In Progress" },
  { item: "Drainage plan sanction", category: "Sanitation", status: "Approved" }
];

const initialSitePhotos = [
  { id: "PHT-1847", location: "Tower A Floor 11", phase: "Structural", activity: "Slab Casting", note: "Progress: 35% advance vs 14 days ago", date: "14/01/2025", tags: ["Tower A", "Floor 11", "Slab Casting", "Structural"], url: "concrete_pump.jpg", issue: null },
  { id: "PHT-1844", location: "Tower B Floor 9", phase: "Structural", activity: "Column Casting", note: "4 columns complete, 8 remaining visible", date: "13/01/2025", tags: ["Tower B", "Floor 9", "Column Casting", "Structural"], url: "steel_casing.jpg", issue: null },
  { id: "PHT-1840", location: "Podium Level", phase: "External", activity: "Waterproofing", note: "2nd coat application in progress", date: "12/01/2025", tags: ["Podium", "Waterproofing", "External"], url: "waterproofing.jpg", issue: null },
  { id: "PHT-1835", location: "Tower A Fl 1–5", phase: "MEP", activity: "Plumbing", note: "Vertical risers 80% complete", date: "11/01/2025", tags: ["Tower A", "Plumbing", "MEP"], url: "pipes.jpg", issue: null },
  { id: "PHT-1831", location: "Tower A Floor 8", phase: "Internal", activity: "Block Masonry", note: "Safety Alert: Workers without helmets detected", date: "09/01/2025", tags: ["Tower A", "Floor 8", "Masonry", "Safety Violation"], url: "wall.jpg", issue: "Labourers without helmets detected" }
];

const initialCostCategories = [
  { category: "Civil / Structural", budget: 125000000, spent: 84200000, projected: 123800000, variance: -1200000, status: "Complete" },
  { category: "MEP Services", budget: 42000000, spent: 18400000, projected: 43500000, variance: 1500000, status: "Overrun" },
  { category: "External Finishing", budget: 38000000, spent: 9200000, projected: 37800000, variance: -200000, status: "Complete" },
  { category: "Internal Finishing", budget: 35000000, spent: 6200000, projected: 35200000, variance: 200000, status: "Complete" },
  { category: "Statutory / Approvals", budget: 8000000, spent: 7000000, projected: 8800000, variance: 800000, status: "Overrun" },
  { category: "Project Overheads", budget: 24000000, spent: 34200000, projected: 42000000, variance: 18000000, status: "Critical Overrun" }
];

const initialPossessions = [
  { id: 1, unit: "A-401", config: "2BHK", value: 5460000, buyer: "Rajesh Patel", phone: "+91 98765 43210", payment: "Clear", snagsTotal: 3, snagsResolved: 3, letter: "Issued", staff: "Priya Rana", date: "20/12/2026 10:00 AM", status: "Ready" },
  { id: 2, unit: "A-402", config: "3BHK", value: 8420000, buyer: "Priya Shah", phone: "+91 99123 45678", payment: "Clear", snagsTotal: 4, snagsResolved: 4, letter: "Issued", staff: "Ankit Shah", date: "20/12/2026 11:30 AM", status: "Ready" },
  { id: 3, unit: "A-403", config: "2BHK", value: 4850000, buyer: "Amit Desai", phone: "+91 97654 32109", payment: "Clear", snagsTotal: 3, snagsResolved: 2, letter: "Pending Snags", staff: "Meera Patel", date: "20/12/2026 02:00 PM", status: "Snag Pending" },
  { id: 4, unit: "A-404", config: "2BHK", value: 5200000, buyer: "Sunita Mehta", phone: "+91 98654 32109", payment: "₹2.1L Pending", snagsTotal: 2, snagsResolved: 2, letter: "Blocked Payment", staff: "—", date: "20/12/2026 03:30 PM", status: "Payment Pending" },
  { id: 5, unit: "A-501", config: "3BHK", value: 7890000, buyer: "Vikram Joshi", phone: "+91 99245 12345", payment: "Clear", snagsTotal: 2, snagsResolved: 2, letter: "Issued", staff: "Priya Rana", date: "21/12/2026 10:00 AM", status: "Ready" },
  { id: 6, unit: "A-502", config: "3BHK", value: 8250000, buyer: "Deepak Trivedi", phone: "+91 98123 45678", payment: "Clear", snagsTotal: 0, snagsResolved: 0, letter: "Issued", staff: "Rahul Modi", date: "21/12/2026 11:30 AM", status: "Ready" }
];

const snagChecklist = [
  { item: "Floor tiles inspection", cat: "Civil", status: "Clear" },
  { item: "Wall paint finish", cat: "Civil", status: "Clear" },
  { item: "Main door lock operational", cat: "Civil", status: "Snag: Handle loose" },
  { item: "Plumbing leak checks", cat: "MEP", status: "Snag: Basin tap dripping" },
  { item: "Electrical points sanity", cat: "MEP", status: "Clear" }
];

// Helper
const statusDot = (status: string) => {
  if (["Complete", "Completed", "Delivered", "Ready", "Clear", "Active"].some(s => status.includes(s)))
    return <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block shrink-0" />;
  if (["In Progress", "In Transit", "PO Sent", "Scheduled", "Applied", "Under Review", "Counter offer", "Negotiating"].some(s => status.includes(s)))
    return <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse inline-block shrink-0" />;
  if (["Action Required", "Not Initiated", "Not Applied", "Pending Snags", "Blocked", "Payment Pending", "Snag Pending", "At Risk", "Delayed", "Overrun", "Critical Overrun"].some(s => status.includes(s)))
    return <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse inline-block shrink-0" />;
  return <span className="h-1.5 w-1.5 rounded-full bg-slate-300 inline-block shrink-0" />;
};

const statusBadge = (status: string) => {
  if (["Complete", "Completed", "Delivered", "Ready", "Clear", "Active"].some(s => status.includes(s)))
    return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (["In Progress", "In Transit", "PO Sent", "Scheduled", "Applied", "Under Review", "Counter offer", "Negotiating", "Planned"].some(s => status.includes(s)))
    return "bg-amber-50 text-amber-700 border border-amber-100";
  if (["Action Required", "Not Initiated", "Not Applied", "Pending Snags", "Blocked", "Payment Pending", "Snag Pending", "At Risk", "Delayed", "Overrun", "Critical Overrun"].some(s => status.includes(s)))
    return "bg-red-50 text-[#D85A30] border border-red-100";
  return "bg-slate-50 text-slate-600 border border-slate-200";
};

function ProjectManager() {
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
    { id: "overview", name: "Dashboard Overview", desc: "Overall project health KPIs, RERA milestones summary, cost budgets, active contractors, and critical alerts feed.", stats: "67% construction complete", status: "Active" },
    { id: "timeline", name: "Project Milestone Tracker", desc: "Gantt timeline mapping baseline schedule vs actual progress, highlighting delay risks and critical path.", stats: "Floors 9–14 at risk", status: "Active" },
    { id: "subcontractor", name: "Subcontractor Management Agent", desc: "Work order log, milestone payment status, and contractor performance scorecards.", stats: "14 contractors active", status: "Active" },
    { id: "procurement", name: "Material Procurement Tracker", desc: "Indent requests, purchase order delivery status, material shortage alerts, and L1 vendor grids.", stats: "IND-112 concrete PO sent", status: "Active" },
    { id: "approvals", name: "Statutory Approvals Monitor", desc: "Track NOCs, RERA QPR filing timeline, and OC readiness checklist logs.", stats: "3 pending approvals", status: "Active" },
    { id: "sitelog", name: "Construction Photo Site Log", desc: "AI-tagged photo feed verifying site construction progress and highlighting safety violations.", stats: "5 photos this week", status: "Active" },
    { id: "cost", name: "Cost-to-Complete Forecaster", desc: "Continuous cost forecasts vs budget, category variances, and profit margin scenario models.", stats: "Overrun alert: Overheads", status: "Active" },
    { id: "possession", name: "Possession Readiness Dashboard", desc: "Pre-possession snag checklist tracker, payment clearances, and slots schedules.", stats: "Possession: Dec 2026", status: "Active" }
  ];

  const getPageHeader = () => {
    const map: Record<TabType, { title: string; subtitle: string }> = {
      menu: { title: "Project & Construction Intelligence", subtitle: "A complete construction lifecycle management system — from ground-breaking to possession — giving developers and project teams real-time visibility into milestones, costs, compliance, and timelines." },
      overview: { title: "Project Dashboard Overview", subtitle: "Helicopter view of project health, milestone progress, cost budget variances, and regulatory compliance." },
      timeline: { title: "Project Milestone Tracker", subtitle: "Gantt-style milestone tracker mapping planned schedule vs actual progress, critical path, and cascade delay risks." },
      subcontractor: { title: "Subcontractor Management Agent", subtitle: "Onboarding, work orders, payment approvals, and performance scoring of active subcontractor trades." },
      procurement: { title: "Material Procurement Tracker", subtitle: "Site indents, vendor quotation selections, PO delivery logistics, and material shortage alerts." },
      approvals: { title: "Statutory Approvals Monitor", subtitle: "Liaison monitoring, RERA QPR progress reports, and Occupation Certificate (OC) readiness audits." },
      sitelog: { title: "Construction Photo & Site Log AI", subtitle: "AI-classified visual logs uploaded from site, analyzing progress and identifying safety issues." },
      cost: { title: "Cost-to-Complete Forecaster", subtitle: "Projected total final cost against budget, category expenditure variances, and margin sensitivity models." },
      possession: { title: "Possession Readiness Dashboard", subtitle: "Coordinate buyer possessions, track unit snags, check accounts clearance, and log key handovers." }
    };
    return map[activeTab] || map.menu;
  };

  const headerInfo = getPageHeader();

  const dynamicTitle = activeTab === "menu" ? headerInfo.title : (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setActiveTab("menu")}
        className="group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95 mr-0.5"
        aria-label="Back to project menu"
      >
        <ChevronLeft className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>
      <span className="font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors" onClick={() => setActiveTab("menu")}>
        {headerInfo.title}
      </span>
    </div>
  );

  // --- 1. Dashboard Overview ---
  const renderOverview = () => (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <StatBox label="Overall Progress" value="67%" desc="All phases complete" color="text-[#2E86AB]" />
        <StatBox label="Budget Utilised" value="₹16.2Cr / ₹28.4Cr" desc="57% budget spent" color="text-[#1A3C5E]" />
        <StatBox label="Active Contractors" value="14" desc="Trades with active WOs" color="text-[#1D9E75]" />
        <StatBox label="Approvals Pending" value="3" desc="Statutory NOCs / Files" color="text-[#E8A838]" />
        <StatBox label="Days to Possession" value="571" desc="Dec 2026 RERA date" color="text-[#D85A30]" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Milestone Summary & Alerts */}
        <div className="col-span-12 lg:col-span-7 space-y-5">
          <Card className="p-4 border border-border bg-card">
            <div className="flex items-center justify-between mb-3 border-b border-border/40 pb-2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
                <Layers3 className="h-3.5 w-3.5 text-primary" /> Active Milestone Progress Summary
              </div>
              <button onClick={() => setActiveTab("timeline")} className="text-[9px] font-bold text-primary hover:underline font-mono">Milestone Tracker →</button>
            </div>
            <div className="space-y-2">
              {[
                { name: "Structural Floors 1–8", pct: 100, days: "On time", status: "Completed" },
                { name: "Structural Floors 9–14", pct: 31, days: "3 days behind", status: "At Risk" },
                { name: "External Finishing", pct: 8, days: "On schedule", status: "In Progress" },
                { name: "MEP / Services", pct: 0, days: "On schedule", status: "Planned" }
              ].map((m, i) => (
                <div key={i} className="flex justify-between items-center text-xs">
                  <div className="min-w-0 flex-1 pr-3">
                    <div className="font-bold text-foreground truncate">{m.name}</div>
                    <div className="h-1.5 w-full bg-secondary/50 rounded-full mt-1 overflow-hidden">
                      <div className={`h-full rounded-full ${m.status === "Completed" ? "bg-emerald-500" : m.status === "At Risk" ? "bg-red-500 animate-pulse" : "bg-primary"}`} style={{ width: `${m.pct}%` }} />
                    </div>
                  </div>
                  <div className="text-right shrink-0 min-w-[100px]">
                    <span className="font-mono font-bold text-foreground">{m.pct}%</span>
                    <div className={`text-[9.5px] font-semibold mt-0.5 ${m.status === "At Risk" ? "text-red-500" : "text-slate-400"}`}>{m.days}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4 border border-border bg-card">
            <div className="flex items-center justify-between mb-3 border-b border-border/40 pb-2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
                <AlertCircle className="h-3.5 w-3.5 text-[#D85A30]" /> Critical Construction Alerts
              </div>
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            </div>
            <div className="space-y-2.5 text-xs font-semibold">
              <div className="flex items-center justify-between p-2.5 rounded-xl border border-red-200 bg-red-50/20 text-[#D85A30]">
                <span>🔴 Fire NOC — Application not submitted. Possession blocker.</span>
                <button onClick={() => setActiveTab("approvals")} className="text-[9px] font-bold underline font-mono shrink-0 ml-2">Resolve →</button>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl border border-amber-200 bg-amber-50/20 text-amber-700">
                <span>🟡 RERA Q1 Progress Report — Due in 8 days. Action required.</span>
                <button onClick={() => setActiveTab("approvals")} className="text-[9px] font-bold underline font-mono shrink-0 ml-2">Review →</button>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl border border-amber-200 bg-amber-50/20 text-amber-700">
                <span>🟡 Floors 9–14 Structure — 3 days behind schedule. Cascade: +12 days on MEP.</span>
                <button onClick={() => setActiveTab("timeline")} className="text-[9px] font-bold underline font-mono shrink-0 ml-2">Impact Chart →</button>
              </div>
            </div>
          </Card>
        </div>

        {/* Cost & Approvals */}
        <div className="col-span-12 lg:col-span-5 space-y-5">
          <Card className="p-4 border border-border bg-card">
            <div className="flex items-center justify-between mb-3 border-b border-border/40 pb-2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
                <DollarSign className="h-3.5 w-3.5 text-[#1D9E75]" /> Cost Budget Utilization
              </div>
              <button onClick={() => setActiveTab("cost")} className="text-[9px] font-bold text-primary hover:underline font-mono">Cost Forecaster →</button>
            </div>
            <div className="space-y-2.5 text-xs font-semibold">
              {[
                { cat: "Civil / Structural", spent: "₹8.4Cr", budget: "₹12.5Cr", pct: 67, status: "Normal" },
                { cat: "MEP Services", spent: "₹1.8Cr", budget: "₹4.2Cr", pct: 43, status: "Normal" },
                { cat: "Project Overheads", spent: "₹3.4Cr", budget: "₹2.4Cr", pct: 142, status: "Overrun" }
              ].map((c, i) => (
                <div key={i} className="flex justify-between items-center border-b border-border/30 pb-2 last:border-0 last:pb-0">
                  <div>
                    <div className="text-foreground">{c.cat}</div>
                    <div className="text-[9.5px] text-slate-400 font-normal">Spent: {c.spent} / Budget: {c.budget}</div>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${c.status === "Overrun" ? "bg-red-50 text-red-600 border border-red-100 animate-pulse" : "bg-slate-100 text-slate-500"}`}>
                    {c.pct}% Used
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4 border border-border bg-card">
            <div className="flex items-center justify-between mb-3 border-b border-border/40 pb-2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> Occupation Certificate (OC) Readiness
              </div>
              <button onClick={() => setActiveTab("approvals")} className="text-[9px] font-bold text-primary hover:underline font-mono">Approvals Board →</button>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="relative h-14 w-14 shrink-0">
                <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
                  <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.9155" fill="none" strokeWidth="3" stroke="#1D9E75" strokeDasharray="43 57" strokeLinecap="round" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-mono font-extrabold text-[11px] text-emerald-600">43%</span>
              </div>
              <div>
                <div className="text-foreground">OC Readiness Score</div>
                <p className="text-[10px] text-slate-400 font-normal mt-0.5">38 of 240 units snagged · Water connections connecting · Substation pending NOC</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Countdown banner */}
      <div className="p-4 border border-red-200 bg-red-50/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-semibold">
        <div className="flex items-center gap-3">
          <Clock className="h-6 w-6 text-[#D85A30] animate-pulse" />
          <div>
            <div className="font-bold text-foreground uppercase tracking-wider">Fortiv Greenview Heights · RERA Possession Countdown</div>
            <p className="text-slate-400 font-normal mt-0.5">240 Total Units · 38 Snag Inspected · 24 Cleared Snag-Free · RERA Due: 31 Dec 2026</p>
          </div>
        </div>
        <div className="font-mono text-lg font-extrabold text-[#D85A30] px-4 py-1.5 rounded-xl bg-red-50 border border-red-200">
          571 DAYS REMAINING
        </div>
      </div>
    </div>
  );

  // --- 2. Project Milestone Tracker ---
  const [selectedPhase, setSelectedPhase] = useState<typeof initialPhases[0]>(initialPhases[0]);

  const renderTimeline = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Total Construction Phases" value="15" desc="Land to Handover" color="text-[#1A3C5E]" />
        <StatBox label="Phases Completed" value="7" desc="Foundation + Structural 1-8" color="text-[#1D9E75]" />
        <StatBox label="At Risk / Delayed" value="1" desc="Structural Floors 9-14" color="text-[#D85A30]" />
        <StatBox label="Delay Downstream Cascade" value="+12 Days" desc="MEP start impact" color="text-[#E8A838]" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Gantt Timeline */}
        <Card className="col-span-12 lg:col-span-8 p-4 border border-border bg-card space-y-4">
          <div className="flex justify-between items-center border-b border-border/40 pb-2">
            <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Gantt Milestone Schedule</h4>
            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-500" />Orange outline = Critical Path</span>
          </div>

          <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1 scrollbar-none">
            {initialPhases.map((phase) => (
              <div
                key={phase.id}
                onClick={() => setSelectedPhase(phase)}
                className={`p-3 rounded-xl border cursor-pointer hover:bg-secondary/15 transition-all ${selectedPhase.id === phase.id ? "bg-secondary/20 border-primary" : "border-border bg-background"} ${phase.critical ? "border-l-4 border-l-amber-500" : ""}`}
              >
                <div className="flex justify-between items-center text-xs font-semibold mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-slate-400 text-[10px]">{phase.id}</span>
                    <span className="text-foreground">{phase.name}</span>
                    {phase.critical && <span className="text-[8px] font-bold bg-amber-100 text-amber-700 px-1 rounded font-mono">Critical</span>}
                  </div>
                  <span className="font-mono font-bold text-foreground">{phase.pct}%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-3 bg-secondary/50 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${phase.status === "Completed" ? "bg-emerald-500" : phase.status === "At Risk" ? "bg-red-500 animate-pulse" : "bg-primary"}`} style={{ width: `${phase.pct}%` }} />
                  </div>
                  <span className={`text-[9.5px] font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadge(phase.status)}`}>{phase.status}</span>
                </div>
                <div className="flex justify-between text-[9px] font-mono text-slate-400 mt-1 font-semibold">
                  <span>Start: {phase.plannedStart}</span>
                  <span>End/Est: {phase.actualEnd}</span>
                  {phase.cascade > 0 && <span className="text-red-500 animate-pulse">Cascade: +{phase.cascade} days</span>}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Phase Details Card */}
        <Card className="col-span-12 lg:col-span-4 p-4 border border-border bg-card space-y-4 flex flex-col justify-between">
          <div className="space-y-3.5">
            <div className="border-b border-border/40 pb-2 flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Phase Detail — {selectedPhase.id}</span>
              <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(selectedPhase.status)}`}>{selectedPhase.status}</span>
            </div>

            <div className="text-xs font-semibold space-y-2">
              <div>
                <h4 className="font-display font-bold text-foreground text-sm">{selectedPhase.name}</h4>
                <p className="text-[10px] text-slate-400 font-normal mt-0.5">Liaison lead: {selectedPhase.lead}</p>
              </div>

              <div className="p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[9.5px] space-y-1 text-slate-600">
                <div className="flex justify-between"><span>Baseline Start:</span><span className="text-foreground">{selectedPhase.plannedStart}</span></div>
                <div className="flex justify-between"><span>Baseline Completion:</span><span className="text-foreground">{selectedPhase.plannedEnd}</span></div>
                <div className="flex justify-between"><span>Revised/Actual End:</span><span className="text-foreground">{selectedPhase.actualEnd || selectedPhase.plannedEnd}</span></div>
                {selectedPhase.cascade > 0 && (
                  <div className="text-red-500 font-bold border-t border-border/40 pt-1 mt-1">⚠️ Cascade impact: +{selectedPhase.cascade} days to downstream tasks.</div>
                )}
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400">Sub-Phases / Floor Breakdown</span>
                <div className="space-y-1">
                  {selectedPhase.subPhases.map((sb, idx) => (
                    <div key={idx} className="p-2 rounded bg-background border border-border/50 font-mono text-[10px] flex justify-between">
                      <span>{sb}</span>
                      <span className="text-emerald-600 font-bold">✓ Complete</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => alert(`Milestone report compilation initiated for Phase ${selectedPhase.id}.`)}
            className="w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all mt-4"
          >
            Export Milestone Report
          </button>
        </Card>
      </div>
    </div>
  );

  // --- 3. Subcontractor Management Agent ---
  const [selectedContractor, setSelectedContractor] = useState<typeof contractors[0]>(contractors[0]);
  const [subWo, setSubWo] = useState(workOrders);

  const getContractorWos = (name: string) => {
    return subWo.filter(w => w.contractor === name);
  };

  const certifyMilestonePayment = (woId: string, value: number) => {
    setSubWo(prev => prev.map(w => {
      if (w.id === woId) {
        return { ...w, status: "Completed", paid: value };
      }
      return w;
    }));
    alert(`Milestone payment certified and processed for work order ${woId}.`);
  };

  const activeWos = getContractorWos(selectedContractor.name);

  const renderSubcontractor = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Empaneled Subcontractors" value="24" desc="Across 8 trades" color="text-[#1A3C5E]" />
        <StatBox label="Active Work Orders" value="14" desc="Live on site" color="text-[#1D9E75]" />
        <StatBox label="Milestone Payments Certified" value="₹44.1L" desc="This month" color="text-[#2E86AB]" />
        <StatBox label="Subcontractor Expiry Alerts" value="1" desc="Patel Plumbing Co." color="text-[#E8A838]" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Contractor List */}
        <Card className="col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card">
          <div className="p-3 bg-secondary/35 border-b border-border text-[10px] font-bold uppercase text-slate-500 font-display">Contractor Registry</div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Contractor</th>
                  <th className="px-3.5 py-2.5">Trade Category</th>
                  <th className="px-3.5 py-2.5 font-mono">Active WOs</th>
                  <th className="px-3.5 py-2.5 font-mono">Performance</th>
                  <th className="px-3.5 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {contractors.map(c => (
                  <tr
                    key={c.id}
                    onClick={() => setSelectedContractor(c)}
                    className={`hover:bg-secondary/15 cursor-pointer transition-colors ${selectedContractor.id === c.id ? "bg-secondary/20 font-bold" : ""}`}
                  >
                    <td className="px-3.5 py-3">
                      <div className="font-bold text-foreground">{c.name}</div>
                      <div className="text-[9.5px] text-slate-400 font-mono">Lead: {c.lead}</div>
                    </td>
                    <td className="px-3.5 py-3 text-slate-500">{c.trade}</td>
                    <td className="px-3.5 py-3 font-mono">{c.woCount}</td>
                    <td className="px-3.5 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-12 bg-secondary rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${c.performance >= 80 ? "bg-emerald-500" : "bg-amber-500"}`} style={{ width: `${c.performance}%` }} />
                        </div>
                        <span className={`font-mono font-bold ${c.performance >= 80 ? "text-emerald-600" : "text-amber-600"}`}>{c.performance}</span>
                      </div>
                    </td>
                    <td className="px-3.5 py-3">
                      <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(c.status)}`}>{c.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Contractor Detail Panel */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="flex items-center justify-between border-b border-border/40 pb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Contractor Profile</span>
            <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${selectedContractor.performance >= 80 ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>★ {selectedContractor.performance} Score</span>
          </div>

          <div className="space-y-3.5 text-xs font-semibold">
            <div>
              <h4 className="font-display font-bold text-foreground text-sm">{selectedContractor.name}</h4>
              <p className="text-[10px] text-slate-400 font-normal">Trade Scope: {selectedContractor.trade}</p>
            </div>

            <div className="p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[9.5px] space-y-1 text-slate-600">
              <div className="flex justify-between"><span>GSTIN:</span><span className="text-foreground">{selectedContractor.gst}</span></div>
              <div className="flex justify-between"><span>Registry Phone:</span><span className="text-foreground">{selectedContractor.phone}</span></div>
              <div className="flex justify-between"><span>Labour Licence Exp:</span><span className="text-foreground">{selectedContractor.expiry}</span></div>
            </div>

            {selectedContractor.name === "Patel Plumbing Co." && (
              <div className="p-2.5 rounded-xl border border-amber-200 bg-amber-50/20 text-amber-700 text-[10px]">
                ⚠️ <strong>Liaison Alert:</strong> Contractor insurance expires in 22 days. Renew prior to certifying further WOs.
              </div>
            )}

            <div className="space-y-2">
              <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 block border-b border-border/40 pb-1">Work Orders & Payments</span>
              {activeWos.map((wo, i) => (
                <div key={i} className="p-2.5 rounded bg-background border border-border/50 space-y-1.5">
                  <div className="flex justify-between font-mono text-[10px]">
                    <span className="font-bold text-foreground">{wo.id}</span>
                    <span className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded ${statusBadge(wo.status)}`}>{wo.status}</span>
                  </div>
                  <div className="text-[10px] text-slate-500">{wo.scope}</div>
                  <div className="flex justify-between font-mono text-[9.5px] text-slate-400 font-semibold border-t border-border/30 pt-1.5">
                    <span>Val: ₹{(wo.value/100000).toFixed(1)}L</span>
                    <span>Paid: ₹{(wo.paid/100000).toFixed(1)}L</span>
                  </div>
                  {wo.status !== "Completed" && (
                    <button
                      onClick={() => certifyMilestonePayment(wo.id, wo.value)}
                      className="w-full h-6 rounded bg-ink hover:bg-ink/90 text-cream text-[9px] font-mono uppercase tracking-wider mt-1"
                    >
                      Certify & Release Milestone Payment
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 4. Material Procurement Tracker ---
  const [procurement, setProcurement] = useState(procurementLog);
  const [procFilter, setProcFilter] = useState("All");

  const filteredProc = useMemo(() => {
    if (procFilter === "All") return procurement;
    return procurement.filter(p => p.status === procFilter);
  }, [procurement, procFilter]);

  const dispatchMaterialPO = (indentId: string) => {
    setProcurement(prev => prev.map(p => {
      if (p.id === indentId) {
        return { ...p, status: "PO Sent" };
      }
      return p;
    }));
    alert(`Purchase Order issued for Indent ${indentId}. Dispatched to Ultratech RMC.`);
  };

  const renderProcurement = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Indents Raised (Month)" value="42" desc="Slabs + blockwork indents" color="text-[#1A3C5E]" />
        <StatBox label="POs Dispatched" value="38" desc="₹48.2L procurement value" color="text-[#1D9E75]" />
        <StatBox label="Deliveries In Transit" value="1" desc="Plumbing CPVC pipes" color="text-[#2E86AB]" />
        <StatBox label="Stock Shortage Alert" value="OPC 53" desc="Cement running low (~2.3d)" color="text-[#D85A30]" />
      </div>

      {/* Shortage warning */}
      <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs flex items-center gap-3 font-semibold text-amber-700 animate-pulse">
        <AlertTriangle className="h-5 w-5 text-[#E8A838]" />
        <div>
          <span className="font-bold">Cement Shortage Alert:</span> OPC Cement (53 Grade) current stock is ~80 bags. Daily consumption is ~35 bags. Estimated days remaining: <strong>2.3 days</strong>. Immediate replenishment required.
        </div>
      </div>

      <div className="flex gap-1.5 items-center">
        {["All", "PO Sent", "In Transit", "Delivered"].map((f) => (
          <button
            key={f}
            onClick={() => setProcFilter(f)}
            className={`h-7 px-3 rounded-lg text-[10px] font-bold uppercase tracking-widest border transition-all ${procFilter === f ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Indent Table */}
        <Card className="col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card">
          <div className="p-3 bg-secondary/35 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-xs text-foreground font-display uppercase tracking-wider">Site Indents & Procurement Log</h3>
          </div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Indent #</th>
                  <th className="px-3.5 py-2.5">Material</th>
                  <th className="px-3.5 py-2.5 font-mono">Qty ordered</th>
                  <th className="px-3.5 py-2.5">Vendor</th>
                  <th className="px-3.5 py-2.5 font-mono">PO Value</th>
                  <th className="px-3.5 py-2.5">Status</th>
                  <th className="px-3.5 py-2.5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {filteredProc.map(row => (
                  <tr key={row.id} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-3 font-mono font-bold text-slate-400">{row.id}</td>
                    <td className="px-3.5 py-3 font-bold">{row.material}</td>
                    <td className="px-3.5 py-3 font-mono text-slate-500">{row.quantity}</td>
                    <td className="px-3.5 py-3 text-slate-500">{row.vendor}</td>
                    <td className="px-3.5 py-3 font-mono font-bold">₹{(row.val/100000).toFixed(1)}L</td>
                    <td className="px-3.5 py-3">
                      <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(row.status)}`}>{row.status}</span>
                    </td>
                    <td className="px-3.5 py-3">
                      {row.status === "PO Sent" && (
                        <button
                          onClick={() => dispatchMaterialPO(row.id)}
                          className="h-6 px-2 rounded bg-ink hover:bg-ink/90 text-cream text-[9px] font-mono uppercase"
                        >
                          Dispatch
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Vendor Comparison */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border/40 pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">L1 Vendor Comparison — Concrete</h4></div>
          <div className="space-y-3.5 text-xs font-semibold text-slate-600">
            {[
              { vendor: "Ultratech Cement RMC", rate: "₹6,200/cu.m", lead: "2 days", rating: "★ 4.6", status: "L1 — Best Quote" },
              { vendor: "ACC RMC Surat", rate: "₹6,380/cu.m", lead: "3 days", rating: "★ 4.3", status: "L2" },
              { vendor: "Shree RMC Surat", rate: "₹6,550/cu.m", lead: "1 day", rating: "★ 4.1", status: "L3" }
            ].map((v, i) => (
              <div key={i} className={`p-2.5 rounded-xl border flex justify-between items-center ${i === 0 ? "border-emerald-200 bg-emerald-50/10" : "border-border bg-background"}`}>
                <div>
                  <div className="font-bold text-foreground">{v.vendor}</div>
                  <div className="text-[9.5px] text-slate-400 font-normal">Delivery: {v.lead} · rating: {v.rating}</div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono text-primary font-bold text-sm">{v.rate}</span>
                  <div className={`text-[8.5px] font-bold uppercase tracking-wider ${i === 0 ? "text-emerald-600" : "text-slate-400"}`}>{v.status}</div>
                </div>
              </div>
            ))}
            <p className="text-[9.5px] font-mono text-slate-400">Comparing quotes automatically matches and highlights L1 according to Fortiv Solutions procurement policies.</p>
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 5. Statutory Approvals Monitor ---
  const [approvals, setApprovals] = useState(statutoryApprovals);

  const startReraQprCompilation = () => {
    alert("Auto-compilation initiated. Pulling structural stats from P08 timeline, cost metrics from category models, and sales records from M4 CRM...");
  };

  const renderApprovals = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Total Required Approvals" value="14" desc="RERA to Occupancy" color="text-[#1A3C5E]" />
        <StatBox label="Approvals Complete" value="9" desc="NOCs / Permits complete" color="text-[#1D9E75]" />
        <StatBox label="Liaison Reviews Pending" value="2" desc="Action needed" color="text-[#E8A838]" />
        <StatBox label="OC Readiness Score" value="43%" desc="Aggregated pre-conditions" color="text-[#2E86AB]" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Table List */}
        <Card className="col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card">
          <div className="p-3 bg-secondary/35 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-xs text-foreground font-display uppercase tracking-wider">Statutory Approvals & NOC Monitor</h3>
          </div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Approval Description</th>
                  <th className="px-3.5 py-2.5">Authority</th>
                  <th className="px-3.5 py-2.5 font-mono">Due Date</th>
                  <th className="px-3.5 py-2.5">Possession Dependency</th>
                  <th className="px-3.5 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {approvals.map((row, i) => (
                  <tr key={i} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-3">
                      <div className="font-bold text-foreground">{row.name}</div>
                      <div className="text-[9.5px] text-slate-400 font-mono">Stage: {row.stage}</div>
                    </td>
                    <td className="px-3.5 py-3 text-slate-500">{row.authority}</td>
                    <td className="px-3.5 py-3 font-mono text-slate-400">{row.due}</td>
                    <td className="px-3.5 py-3 font-semibold text-slate-500">
                      {row.blocksPossession ? <span className="text-[#D85A30]">Critical block</span> : "No"}
                    </td>
                    <td className="px-3.5 py-3">
                      <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(row.status)}`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* OC Readiness and QPR panel */}
        <div className="col-span-12 lg:col-span-5 space-y-4">
          <Card className="p-4 border border-border bg-card space-y-3.5">
            <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2">OC Pre-Condition Checklists (43%)</h4>
            <div className="space-y-2 text-xs font-semibold">
              {ocReadinessList.map((oc, i) => (
                <div key={i} className="flex justify-between items-center border-b border-border/30 pb-2 last:border-0 last:pb-0">
                  <div>
                    <div className="text-foreground">{oc.item}</div>
                    <div className="text-[9.5px] text-slate-400 font-normal">Category: {oc.category}</div>
                  </div>
                  <span className="text-[10px] font-mono text-[#2E86AB]">{oc.status}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4 border border-[#E8A838] bg-amber-50/10 space-y-3">
            <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-amber-200 pb-2">RERA QPR Submission (Q1 2025)</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-semibold">Submission is due in 8 days. Click compile to auto-gather construction progress percentages and cost models.</p>
            <button
              onClick={startReraQprCompilation}
              className="w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest font-sans transition-all flex items-center justify-center gap-1"
            >
              <Sparkles className="h-3.5 w-3.5" /> Start RERA QPR Auto-Compilation
            </button>
          </Card>
        </div>
      </div>
    </div>
  );

  // --- 6. Construction Photo & Site Log AI ---
  const [sitePhotos, setSitePhotos] = useState(initialSitePhotos);
  const [selectedPhoto, setSelectedPhoto] = useState<typeof initialSitePhotos[0]>(initialSitePhotos[0]);

  const simulatePhotoUpload = () => {
    const newPhoto = {
      id: `PHT-18${sitePhotos.length + 50}`,
      location: "Tower A Floor 11",
      phase: "Structural",
      activity: "Slab Casting",
      note: "Progress: 100% floor casting done. Quality checked.",
      date: "15/01/2025",
      tags: ["Tower A", "Floor 11", "Concrete", "Slab Complete"],
      url: "congrats.jpg",
      issue: null
    };
    setSitePhotos(prev => [newPhoto, ...prev]);
    setSelectedPhoto(newPhoto);
    alert("Photo uploaded! AI has analyzed progress and tagged location automatically.");
  };

  const renderSitePhotos = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">AI-Tagged Site Photo Logs</h4>
        <button
          onClick={simulatePhotoUpload}
          className="h-8 px-3 rounded-md bg-ink hover:bg-ink/90 text-cream text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-sm"
        >
          <Upload className="h-3.5 w-3.5" /> Simulate Site Photo Upload
        </button>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Gallery */}
        <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sitePhotos.map(photo => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className={`p-3 rounded-2xl border cursor-pointer transition-all space-y-2 hover:shadow-md ${selectedPhoto.id === photo.id ? "border-primary bg-secondary/15" : "border-border bg-background"}`}
              >
                <div className="h-28 bg-secondary/40 rounded-xl flex items-center justify-center font-mono text-[10px] text-slate-400 border border-border/40 relative overflow-hidden">
                  <Camera className="h-6 w-6 stroke-[1.5]" />
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-0.5 rounded text-[8px]">{photo.id}</span>
                  {photo.issue && <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-0.5 rounded text-[8px] animate-pulse">⚠️ Issue</span>}
                </div>
                <div className="space-y-1 text-xs">
                  <div className="font-bold text-foreground flex justify-between">
                    <span>{photo.location}</span>
                    <span className="text-slate-400 font-mono font-normal">{photo.date}</span>
                  </div>
                  <div className="text-slate-500 font-semibold">{photo.activity}</div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {photo.tags.map((t, idx) => (
                      <span key={idx} className="text-[8.5px] font-bold bg-slate-100 border border-slate-200 px-1.5 py-0.2 rounded text-slate-600 font-mono">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Selected Photo details */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border/40 pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">AI Visual Log Inspector</h4></div>

          <div className="space-y-3.5 text-xs font-semibold">
            <div className="h-36 bg-secondary/30 border border-border/40 rounded-2xl flex items-center justify-center font-mono text-slate-400 text-[10px]">
              Visual Media Render Box — {selectedPhoto.id}
            </div>

            <div className="space-y-2">
              <div>
                <h4 className="font-display font-bold text-foreground text-sm">{selectedPhoto.location}</h4>
                <p className="text-[9.5px] text-slate-400 font-mono">Uploaded on {selectedPhoto.date} via WhatsApp</p>
              </div>

              <div className="p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[9.5px] leading-relaxed text-slate-600">
                <strong className="text-slate-700 block uppercase tracking-wider text-[8.5px] mb-1">AI Progress Assessment:</strong>
                {selectedPhoto.note}
              </div>

              {selectedPhoto.issue && (
                <div className="p-2.5 rounded-xl border border-red-200 bg-red-50/20 text-red-700 text-[10px] animate-pulse">
                  ⚠️ <strong>AI Safety / Quality Violation:</strong> {selectedPhoto.issue}
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={() => alert(`Milestone P07 updated with evidence photo ${selectedPhoto.id}.`)}
                  className="w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
                >
                  Link as Progress Verification
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 7. Cost-to-Complete Forecaster ---
  const [costScenario, setCostScenario] = useState("baseline");
  const [categories, setCategories] = useState(initialCostCategories);

  const calculatedCosts = useMemo(() => {
    let scalarCivil = 1.0;
    let scalarMep = 1.0;
    let overheadAdd = 0;
    let revenueDeduct = 0;

    if (costScenario === "civil") scalarCivil = 1.08;
    if (costScenario === "mep") scalarMep = 1.15;
    if (costScenario === "overhead") overheadAdd = -10000000;
    if (costScenario === "unsold") revenueDeduct = 21800000;

    const baselineRevenue = 524000000;
    const activeRevenue = baselineRevenue - revenueDeduct;

    const activeCats = categories.map(c => {
      let projected = c.projected;
      if (c.category === "Civil / Structural") projected = Math.round(c.spent + (c.budget - c.spent) * scalarCivil);
      if (c.category === "MEP Services") projected = Math.round(c.spent + (c.budget - c.spent) * scalarMep);
      if (c.category === "Project Overheads") projected = Math.round(c.projected + overheadAdd);

      const variance = projected - c.budget;
      const status = variance > 1000000 ? "Critical Overrun" : variance > 100000 ? "Overrun" : "Complete";
      return { ...c, projected, variance, status };
    });

    const totalBudget = activeCats.reduce((acc, c) => acc + c.budget, 0);
    const totalSpent = activeCats.reduce((acc, c) => acc + c.spent, 0);
    const totalProjected = activeCats.reduce((acc, c) => acc + c.projected, 0);
    const totalVariance = totalProjected - totalBudget;

    const profit = activeRevenue - totalProjected;
    const margin = ((profit / activeRevenue) * 100).toFixed(1);

    return { activeCats, totalBudget, totalSpent, totalProjected, totalVariance, profit, margin, activeRevenue };
  }, [categories, costScenario]);

  const renderCost = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <StatBox label="Total Project Budget" value={`₹${(calculatedCosts.totalBudget/10000000).toFixed(2)}Cr`} desc="Approved baseline" color="text-[#1A3C5E]" />
        <StatBox label="Spent to Date" value={`₹${(calculatedCosts.totalSpent/10000000).toFixed(2)}Cr`} desc="Accounts invoices paid" color="text-[#2E86AB]" />
        <StatBox label="Projected Final Cost" value={`₹${(calculatedCosts.totalProjected/10000000).toFixed(2)}Cr`} desc="Cost-to-complete forecast" color="text-[#E8A838]" />
        <StatBox label="Projected Gross Margin" value={`${calculatedCosts.margin}%`} desc="Original: 45.6%" color="text-[#1D9E75]" />
        <StatBox label="Budget Variance" value={`+₹${(calculatedCosts.totalVariance/100000).toFixed(1)}L`} desc="Projected overrun" color="text-[#D85A30]" />
      </div>

      {/* Scenario buttons */}
      <Card className="p-4 border border-border bg-card space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Scenario Sensitivity Analysis Modelling</span>
        <div className="flex flex-wrap gap-2">
          {[
            { id: "baseline", name: "Baseline Forecast" },
            { id: "civil", name: "Civil Overrun (+8%)" },
            { id: "mep", name: "MEP Overrun (+15%)" },
            { id: "overhead", name: "Overheads Normalized" },
            { id: "unsold", name: "10 Unsold Flat Vacancies" }
          ].map(s => (
            <button
              key={s.id}
              onClick={() => setCostScenario(s.id)}
              className={`h-8 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${costScenario === s.id ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-12 gap-5">
        {/* Ledger Table */}
        <Card className="col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card">
          <div className="p-3 bg-secondary/35 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-xs text-foreground font-display uppercase tracking-wider">Cost-to-Complete Cost Category Forecaster</h3>
          </div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Category</th>
                  <th className="px-3.5 py-2.5 font-mono">Budget</th>
                  <th className="px-3.5 py-2.5 font-mono">Spent</th>
                  <th className="px-3.5 py-2.5 font-mono">Projected</th>
                  <th className="px-3.5 py-2.5 font-mono">Variance</th>
                  <th className="px-3.5 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {calculatedCosts.activeCats.map((row, i) => (
                  <tr key={i} className={`hover:bg-secondary/15 ${row.variance > 1000000 ? "bg-red-50/10 border-l-2 border-l-red-500 animate-pulse" : ""}`}>
                    <td className="px-3.5 py-3 font-bold">{row.category}</td>
                    <td className="px-3.5 py-3 font-mono text-slate-500">₹{(row.budget/10000000).toFixed(2)}Cr</td>
                    <td className="px-3.5 py-3 font-mono text-slate-500">₹{(row.spent/10000000).toFixed(2)}Cr</td>
                    <td className="px-3.5 py-3 font-mono text-foreground font-bold">₹{(row.projected/10000000).toFixed(2)}Cr</td>
                    <td className={`px-3.5 py-3 font-mono font-extrabold ${row.variance > 0 ? "text-red-500" : "text-emerald-600"}`}>
                      {row.variance > 0 ? `+₹${(row.variance/100000).toFixed(1)}L` : `-₹${(Math.abs(row.variance)/100000).toFixed(1)}L`}
                    </td>
                    <td className="px-3.5 py-3">
                      <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(row.status)}`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Cost Analysis / Scenario Output */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border/40 pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Margin Sensitivity Summary</h4></div>

          <div className="space-y-3.5 text-xs font-semibold text-slate-600">
            <div className="flex justify-between border-b border-border/30 pb-2">
              <span>Expected Sales Revenue:</span>
              <span className="font-mono text-foreground font-bold">₹{(calculatedCosts.activeRevenue/10000000).toFixed(2)}Cr</span>
            </div>
            <div className="flex justify-between border-b border-border/30 pb-2">
              <span>Projected Total Construction Cost:</span>
              <span className="font-mono text-foreground font-bold">₹{(calculatedCosts.totalProjected/10000000).toFixed(2)}Cr</span>
            </div>
            <div className="flex justify-between border-b border-border/30 pb-2">
              <span>Projected Net Gross Profit:</span>
              <span className="font-mono text-emerald-600 font-extrabold text-sm">₹{(calculatedCosts.profit/10000000).toFixed(2)}Cr</span>
            </div>
            <div className="flex justify-between">
              <span>Gross Profit Margin %:</span>
              <span className={`font-mono font-extrabold text-sm ${parseFloat(calculatedCosts.margin) >= 42 ? "text-emerald-600" : "text-amber-600 animate-pulse"}`}>{calculatedCosts.margin}%</span>
            </div>

            <div className="p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[9.5px] leading-relaxed text-slate-600">
              <strong className="text-slate-800">AI Financial Forecaster Note:</strong>
              <p className="mt-1">Category "Project Overheads" is driving the primary variance (+₹1.80Cr). Bringing overheads back to baseline increases projected margin to 44.1%.</p>
            </div>

            <button
              onClick={() => alert("Cost report sent to Project Director & Accounts Team.")}
              className="w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
            >
              Raise Overrun Alert to Director
            </button>
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 8. Possession Readiness Dashboard ---
  const [possessions, setPossessions] = useState(initialPossessions);
  const [selectedPossession, setSelectedPossession] = useState<typeof initialPossessions[0]>(initialPossessions[0]);

  const clearBuyerPayment = (id: number) => {
    setPossessions(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, payment: "Clear", status: p.status === "Payment Pending" && p.snagsTotal === p.snagsResolved ? "Ready" : p.status };
      }
      return p;
    }));
    setSelectedPossession(prev => {
      if (prev.id === id) {
        return { ...prev, payment: "Clear", status: prev.status === "Payment Pending" && prev.snagsTotal === prev.snagsResolved ? "Ready" : prev.status };
      }
      return prev;
    });
    alert(`Accounts clearance issued for unit. Payment marked as Clear.`);
  };

  const clearSnagList = (id: number) => {
    setPossessions(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, snagsResolved: p.snagsTotal, status: p.status === "Snag Pending" && p.payment === "Clear" ? "Ready" : p.status };
      }
      return p;
    }));
    setSelectedPossession(prev => {
      if (prev.id === id) {
        return { ...prev, snagsResolved: prev.snagsTotal, status: prev.status === "Snag Pending" && prev.payment === "Clear" ? "Ready" : prev.status };
      }
      return prev;
    });
    alert(`Snags cleared. Flat marked as Snag-Free.`);
  };

  const renderPossession = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Total Units Handover" value="240" desc="Dec 2026 scheduling" color="text-[#1A3C5E]" />
        <StatBox label="Snag Audited Units" value="38" desc="38 pre-possessions complete" color="text-[#1D9E75]" />
        <StatBox label="Ready for Handover" value="24" desc="Snag-free + payment clear" color="text-[#2E86AB]" />
        <StatBox label="Blocked handovers" value="12" desc="Payment/snag issues pending" color="text-[#D85A30]" />
      </div>

      {/* Warning banner */}
      <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs flex items-center gap-3 font-semibold text-[#D85A30]">
        <AlertTriangle className="h-5 w-5 animate-pulse shrink-0" />
        <div>
          <span>Possession Alert:</span> Sunita Mehta (Unit A-404) has outstanding dues of <strong>₹2.1 Lakhs</strong>. Automatic possession scheduling is blocked until payment clearance certificate is logged.
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Table List */}
        <Card className="col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card">
          <div className="p-3 bg-secondary/35 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-xs text-foreground font-display uppercase tracking-wider">Buyer Handover Schedule</h3>
          </div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Unit</th>
                  <th className="px-3.5 py-2.5">Buyer</th>
                  <th className="px-3.5 py-2.5 font-mono">Rent/Value</th>
                  <th className="px-3.5 py-2.5">Payment</th>
                  <th className="px-3.5 py-2.5 font-mono">Snags (R/T)</th>
                  <th className="px-3.5 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {possessions.map(row => (
                  <tr
                    key={row.id}
                    onClick={() => setSelectedPossession(row)}
                    className={`hover:bg-secondary/15 cursor-pointer transition-colors ${selectedPossession.id === row.id ? "bg-secondary/20 font-bold" : ""}`}
                  >
                    <td className="px-3.5 py-3 font-mono font-bold text-slate-700">{row.unit}</td>
                    <td className="px-3.5 py-3">
                      <div className="font-bold text-foreground">{row.buyer}</div>
                      <div className="text-[9px] text-slate-400 font-mono font-normal">Slot: {row.date}</div>
                    </td>
                    <td className="px-3.5 py-3 font-mono">₹{(row.value/100000).toFixed(1)}L</td>
                    <td className="px-3.5 py-3">
                      <span className={`text-[9.5px] font-extrabold px-1.5 py-0.2 rounded font-mono ${statusBadge(row.payment)}`}>{row.payment}</span>
                    </td>
                    <td className="px-3.5 py-3 font-mono font-bold">
                      {row.snagsResolved} / {row.snagsTotal}
                    </td>
                    <td className="px-3.5 py-3">
                      <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(row.status)}`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Action Panel */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="flex items-center justify-between border-b border-border/40 pb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Unit Handover Card</span>
            <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(selectedPossession.status)}`}>{selectedPossession.status}</span>
          </div>

          <div className="space-y-3.5 text-xs font-semibold">
            <div>
              <h4 className="font-display font-bold text-foreground text-sm">Unit {selectedPossession.unit} ({selectedPossession.config})</h4>
              <p className="text-[10px] text-slate-400 font-normal">Buyer: {selectedPossession.buyer} · {selectedPossession.phone}</p>
            </div>

            <div className="p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[9.5px] space-y-1.5 text-slate-600">
              <div className="flex justify-between"><span>Agreement Value:</span><span className="text-foreground font-bold">₹{(selectedPossession.value/100000).toFixed(1)}L</span></div>
              <div className="flex justify-between"><span>Payment Clearance:</span><span className={`font-bold ${selectedPossession.payment === "Clear" ? "text-emerald-600" : "text-red-500"}`}>{selectedPossession.payment}</span></div>
              <div className="flex justify-between"><span>Snag Inspection:</span><span className={`font-bold ${selectedPossession.snagsTotal === selectedPossession.snagsResolved ? "text-emerald-600" : "text-amber-600"}`}>{selectedPossession.snagsResolved} of {selectedPossession.snagsTotal} resolved</span></div>
              <div className="flex justify-between"><span>Possession Coordinator:</span><span className="text-foreground">{selectedPossession.staff}</span></div>
            </div>

            {selectedPossession.unit === "A-403" && selectedPossession.snagsTotal > selectedPossession.snagsResolved && (
              <div className="space-y-2">
                <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 block border-b border-border/40 pb-0.5">Snag Checklist (1 Open item)</span>
                {snagChecklist.map((sc, idx) => (
                  <div key={idx} className="p-2 rounded bg-background border border-border/50 text-[10px] flex justify-between font-mono">
                    <span>{sc.item}</span>
                    <span className={sc.status.includes("Snag") ? "text-red-500 animate-pulse font-bold" : "text-emerald-600"}>{sc.status}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-2 flex gap-2">
              {selectedPossession.payment !== "Clear" && (
                <button
                  onClick={() => clearBuyerPayment(selectedPossession.id)}
                  className="flex-1 h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-wider"
                >
                  Clear Accounts Dues
                </button>
              )}
              {selectedPossession.snagsTotal > selectedPossession.snagsResolved && (
                <button
                  onClick={() => clearSnagList(selectedPossession.id)}
                  className="flex-1 h-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider"
                >
                  Clear Snags
                </button>
              )}
              {selectedPossession.payment === "Clear" && selectedPossession.snagsTotal === selectedPossession.snagsResolved && (
                <button
                  onClick={() => alert(`Possession handover pack generated for unit ${selectedPossession.unit}. Welcome letter dispatched.`)}
                  className="w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
                >
                  Generate Handover Pack
                </button>
              )}
            </div>
          </div>
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
                className="submodule-card p-5 cursor-pointer flex flex-col justify-between group h-44"
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
        {activeTab === "timeline" && renderTimeline()}
        {activeTab === "subcontractor" && renderSubcontractor()}
        {activeTab === "procurement" && renderProcurement()}
        {activeTab === "approvals" && renderApprovals()}
        {activeTab === "sitelog" && renderSitePhotos()}
        {activeTab === "cost" && renderCost()}
        {activeTab === "possession" && renderPossession()}
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
