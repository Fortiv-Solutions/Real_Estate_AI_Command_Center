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
  FileText,
  Briefcase,
  Sparkles,
  AlertCircle,
  MessageCircle,
  Lock,
  ShieldAlert,
  Key,
  RefreshCw,
  Trash2,
  Sliders,
  CheckSquare,
  Building2,
  FileSpreadsheet,
} from "lucide-react";

export const Route = createFileRoute("/ai-brain")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tab: (search.tab as string) || undefined,
    };
  },
  head: () => ({ meta: [{ title: "AI Brain & Security Neural Core" }] }),
  component: AIBrainModule,
});

type TabType =
  | "menu"
  | "overview"
  | "graph"
  | "insights"
  | "risk"
  | "cp-portal"
  | "rbac"
  | "dpdp"
  | "health";

// --- MOCK DATA ---

const initialRiskDeals = [
  { rank: 1, name: "Rajesh Patel", unit: "A-804", project: "Greenview Heights", value: 5750000, stage: "Negotiation", score: 62, level: "High", reason: "No contact 7 days + sentiment drop", days: 14, rm: "Priya Rana" },
  { rank: 2, name: "Vikram Joshi", unit: "B-1201", project: "Skyline Residences", value: 14200000, stage: "Negotiation", score: 78, level: "High", reason: "Payment overdue + 3 missed calls", days: 22, rm: "Rahul Modi" },
  { rank: 3, name: "Mahesh Khanna", unit: "S-1104", project: "Skyline Residences", value: 9800000, stage: "Negotiation", score: 84, level: "Critical", reason: "Mentioned Shreenath project + 12 days idle", days: 28, rm: "Kiran Desai" },
  { rank: 4, name: "Pooja Sharma", unit: "A-607", project: "Greenview Heights", value: 5420000, stage: "Visited", score: 58, level: "Medium", reason: "No follow-up engagement for 8 days", days: 8, rm: "Ankit Shah" },
  { rank: 5, name: "Suresh Nair", unit: "BP-102", project: "Business Park", value: 28000000, stage: "Negotiation", score: 71, level: "High", reason: "Stage stagnation 18 days + low response", days: 18, rm: "Rahul Modi" },
  { rank: 6, name: "Deepak Trivedi", unit: "A-906", project: "Greenview Heights", value: 5750000, stage: "Booking Due", score: 29, level: "Low", reason: "All signals positive", days: 3, rm: "Priya Rana" },
  { rank: 7, name: "Sunita Mehta", unit: "C-502", project: "Greenview Heights", value: 6200000, stage: "Visited", score: 44, level: "Medium", reason: "No portal login in 9 days", days: 9, rm: "Priya Rana" },
  { rank: 8, name: "Kavita Agarwal", unit: "B-904", project: "Skyline Residences", value: 8800000, stage: "Negotiation", score: 66, level: "High", reason: "Budget concern raised, no resolution", days: 11, rm: "Kiran Desai" },
  { rank: 9, name: "Anita Gujarati", unit: "A-302", project: "Greenview Heights", value: 3800000, stage: "Site Visit Scheduled", score: 18, level: "Low", reason: "Visit confirmed, WhatsApp responsive", days: 2, rm: "Meera Patel" },
  { rank: 10, name: "Sanjay Kapoor", unit: "BP-401", project: "Business Park", value: 32000000, stage: "Negotiation", score: 89, level: "Critical", reason: "88-day overdue + no response + legal flag", days: 34, rm: "Rahul Modi" },
  { rank: 11, name: "Ritu Bhandari", unit: "A-1104", project: "Greenview Heights", value: 5200000, stage: "Visited", score: 37, level: "Medium", reason: "Brochure not opened after 6 days", days: 6, rm: "Ankit Shah" },
  { rank: 12, name: "Arjun Malhotra", unit: "S-208", project: "Skyline Residences", value: 12000000, stage: "Negotiation", score: 52, level: "Medium", reason: "Sentiment neutral — needs nudge", days: 7, rm: "Kiran Desai" },
  { rank: 13, name: "Nisha Verma", unit: "A-409", project: "Greenview Heights", value: 5500000, stage: "Inquiry", score: 12, level: "Low", reason: "Fresh lead, high engagement", days: 1, rm: "Meera Patel" },
  { rank: 14, name: "Priya Shah", unit: "A-1102", project: "Greenview Heights", value: 5750000, stage: "Booking Amount Paid", score: 8, level: "Low", reason: "Payment received, booking confirmed", days: 2, rm: "Priya Rana" },
  { rank: 15, name: "Amit Desai", unit: "B-602", project: "Skyline Residences", value: 4950000, stage: "Visited", score: 41, level: "Medium", reason: "Follow-up D4 pending — no response yet", days: 4, rm: "Ankit Shah" }
];

const initialCpDeals = [
  { id: "CPD-1", cpName: "Rajhans Realtors", buyer: "Priya Shah", unit: "A-1102", project: "Greenview Heights", value: 5750000, stage: "Booked", commission: 115000, paid: 115000, status: "Paid" },
  { id: "CPD-2", cpName: "Prime Realty", buyer: "Kavita Agarwal", unit: "B-904", project: "Skyline Residences", value: 8800000, stage: "Under Negotiation", commission: 176000, paid: 0, status: "Pending" },
  { id: "CPD-3", cpName: "Landmark Properties", buyer: "Deepak Trivedi", unit: "A-906", project: "Greenview Heights", value: 5750000, stage: "Booked", commission: 115000, paid: 115000, status: "Paid" },
  { id: "CPD-4", cpName: "City Property Hub", buyer: "Vikram Joshi", unit: "B-1201", project: "Skyline Residences", value: 14200000, stage: "Under Negotiation", commission: 284000, paid: 0, status: "Pending" },
  { id: "CPD-5", cpName: "SNS Land Brokers", buyer: "Anita Gujarati", unit: "A-302", project: "Greenview Heights", value: 3800000, stage: "Booked", commission: 76000, paid: 76000, status: "Paid" },
  { id: "CPD-6", cpName: "Om Realtors", buyer: "Mahesh Khanna", unit: "S-1104", project: "Skyline Residences", value: 9800000, stage: "Under Negotiation", commission: 196000, paid: 0, status: "Approval pending" }
];

const cpLeaderboard = [
  { rank: 1, name: "Rajhans Realtors", rera: "GJ/A/SURAT/00234", deals: 8, booked: 3, earned: 620000, trophy: "🏆 Top CP Jan 2025" },
  { rank: 2, name: "Prime Realty", rera: "GJ/A/VADODARA/00511", deals: 6, booked: 2, earned: 480000, trophy: "" },
  { rank: 3, name: "Landmark Properties", rera: "GJ/A/SURAT/00188", deals: 5, booked: 2, earned: 410000, trophy: "" },
  { rank: 4, name: "City Property Hub", rera: "GJ/A/SURAT/00344", deals: 4, booked: 1, earned: 320000, trophy: "" },
  { rank: 5, name: "SNS Land Brokers", rera: "GJ/A/SURAT/00222", deals: 3, booked: 1, earned: 280000, trophy: "" },
  { rank: 6, name: "Om Realtors", rera: "GJ/A/VADODARA/00812", deals: 3, booked: 1, earned: 240000, trophy: "" }
];

const rbacUsers = [
  { id: "USR-001", name: "Priya Rana", email: "priya.rana@fortivsolutions.in", role: "Sales Agent", dept: "Sales — Surat", status: "Active", mfa: true, lastLogin: "16/01/2025 09:14" },
  { id: "USR-002", name: "Rahul Modi", email: "rahul.modi@fortivsolutions.in", role: "Sales Manager", dept: "Sales — Vadodara", status: "Active", mfa: true, lastLogin: "16/01/2025 14:23" },
  { id: "USR-003", name: "Ankit Shah", email: "ankit.shah@fortivsolutions.in", role: "Sales Agent", dept: "Sales — Surat", status: "Active", mfa: false, lastLogin: "16/01/2025 11:45" },
  { id: "USR-004", name: "Meera Patel", email: "meera.patel@fortivsolutions.in", role: "Senior Agent", dept: "Sales — Surat", status: "Active", mfa: true, lastLogin: "16/01/2025 10:30" },
  { id: "USR-005", name: "Kiran Desai", email: "kiran.desai@fortivsolutions.in", role: "Sales Agent", dept: "Sales — Vadodara", status: "Active", mfa: false, lastLogin: "16/01/2025 09:00" },
  { id: "USR-006", name: "CFO Shah", email: "cfo.shah@fortivsolutions.in", role: "CFO", dept: "Finance — Surat", status: "Active", mfa: true, lastLogin: "16/01/2025 08:30" },
  { id: "USR-007", name: "System Admin", email: "admin@fortivsolutions.in", role: "System Admin", dept: "IT — Surat", status: "Active", mfa: true, lastLogin: "16/01/2025 15:45" }
];

const securityAuditLogs = [
  { id: "LOG-01", time: "16/01/2025 14:23", user: "Priya Rana", action: "View Record", module: "M4 Sales", record: "Deal — Rajesh Patel (DEAL-0412)", ip: "192.168.1.42", type: "info" },
  { id: "LOG-02", time: "16/01/2025 14:25", user: "Priya Rana", action: "Modify Record", module: "M4 Sales", record: "Deal stage updated: Visited → Negotiation", ip: "192.168.1.42", type: "info" },
  { id: "LOG-03", time: "16/01/2025 13:00", user: "Rahul Modi", action: "Export Data", module: "M5 Analytics", record: "Weekly Collections Report — Jan W3", ip: "192.168.1.18", type: "warning" },
  { id: "LOG-04", time: "16/01/2025 11:45", user: "Ankit Shah", action: "View Record", module: "M1 Leads", record: "Lead — Pooja Sharma (LEAD-0847)", ip: "192.168.1.55", type: "info" },
  { id: "LOG-05", time: "16/01/2025 10:30", user: "System Admin", action: "Role Change", module: "M12.5 RBAC", record: "Meera Patel — Agent → Senior Agent", ip: "192.168.1.01", type: "critical" },
  { id: "LOG-06", time: "15/01/2025 23:14", user: "Unknown", action: "Failed Login", module: "Auth Core", record: "MFA challenge failed: priya.rana@fortivsolutions.in", ip: "45.33.10.84", type: "alert" }
];

const dpdpConsents = [
  { id: "CONS-01", name: "Rajesh Patel", contact: "+91 98765 XXXXX", purpose: "Property inquiries outreach", text: "I consent to Fortiv Solutions contacting me for project sales...", source: "99acres Form", time: "03/01/2025 09:14", status: "Active", expiry: "03/01/2027" },
  { id: "CONS-02", name: "Vikram Joshi", contact: "+91 98251 XXXXX", purpose: "Home Loan Copilot calculations", text: "I authorize sharing basic financials with partner banks...", source: "Portal Register", time: "05/01/2025 10:00", status: "Active", expiry: "05/01/2027" },
  { id: "CONS-03", name: "Sunita Mehta", contact: "+91 94281 XXXXX", purpose: "Direct WhatsApp updates", text: "I consent to receive automatic slab castings alerts...", source: "WhatsApp Bot Opt-in", time: "22/01/2025 10:00", status: "Active", expiry: "22/01/2027" },
  { id: "CONS-04", name: "Sanjay Kapoor", contact: "+91 98980 XXXXX", purpose: "KYC verification & RERA upload", text: "I authorize processing PAN/Aadhaar details for sale deed...", source: "KYC Document Portal", time: "08/01/2025 08:00", status: "Active", expiry: "08/01/2032" },
  { id: "CONS-05", name: "Suresh Nair", contact: "+91 97240 XXXXX", purpose: "Marketing Newsletter", text: "I consent to receive upcoming projects info...", source: "Website Widget", time: "19/12/2024 11:30", status: "Withdrawn", expiry: "Withdrawn 15/01/2025" }
];

const dpdpRequests = [
  { id: "DSR-001", name: "Suresh Nair", type: "Withdrawal & Deletion", date: "15/01/2025", slaDays: 2, status: "In Progress", details: "Withdraw marketing consent and purge campaign leads logs." },
  { id: "DSR-002", name: "Priya Shah", type: "Correction", date: "22/01/2025", slaDays: 5, status: "Under Review", details: "Update PAN details to correct spelling mistake in agreement draft." },
  { id: "DSR-003", name: "Rajesh Patel", type: "Access Request", date: "24/01/2025", slaDays: 6, status: "New", details: "Export all WhatsApp conversations and payment ledger files in PDF." }
];

const moduleHealthData = [
  { name: "M1 — Lead Generation & Scoring", status: "Active", uptime: "99.8%", speed: "1.2s", incident: "05/01/2025" },
  { name: "M2 — Conversational WhatsApp AI", status: "Active", uptime: "99.9%", speed: "0.8s", incident: "—" },
  { name: "M3 — Property Intel & AVM Core", status: "Active", uptime: "99.6%", speed: "2.1s", incident: "12/01/2025" },
  { name: "M4 — Sales Pipeline & CRM Broker", status: "Active", uptime: "99.9%", speed: "0.9s", incident: "—" },
  { name: "M5 — Analytics & Campaign ROI", status: "Active", uptime: "99.7%", speed: "1.8s", incident: "08/01/2025" },
  { name: "M6 — Document AI & Digital KYC", status: "Active", uptime: "99.5%", speed: "3.2s", incident: "10/01/2025" },
  { name: "M7 — HR Pipeline & Agent Comm.", status: "Active", uptime: "99.8%", speed: "1.4s", incident: "—" },
  { name: "M8 — Tenant Portal & Loan Copilot", status: "Degraded", uptime: "97.2%", speed: "4.8s", incident: "15/01/2025" },
  { name: "M9 — Construction Progress & Gantt", status: "Active", uptime: "99.6%", speed: "1.6s", incident: "03/01/2025" },
  { name: "M10 — Homeowner & Post-Sale Feed", status: "Active", uptime: "99.9%", speed: "0.7s", incident: "—" },
  { name: "M11 — Revenue Ledger & Finance Sync", status: "Active", uptime: "99.8%", speed: "1.3s", incident: "07/01/2025" },
  { name: "M12 — Neural Core & Neural Security", status: "Active", uptime: "99.9%", speed: "0.6s", incident: "—" }
];

const externalApisHealth = [
  { name: "WhatsApp Business API (Meta)", type: "Communication", status: "Active", delay: "180ms", errors: "0.02%", uptime: "99.9%" },
  { name: "99acres Leads Webhook", type: "Integration", status: "Active", delay: "450ms", errors: "0.10%", uptime: "99.6%" },
  { name: "MagicBricks API", type: "Integration", status: "Active", delay: "420ms", errors: "0.08%", uptime: "99.7%" },
  { name: "Tally Prime ERP Connector", type: "Accounting Sync", status: "Degraded", delay: "3200ms", errors: "3.20%", uptime: "97.4%" },
  { name: "Google Firebase Auth", type: "Security", status: "Active", delay: "95ms", errors: "0.00%", uptime: "99.9%" }
];

const liveSystemWorkflows = [
  { name: "Facebook Lead Capture Sync", type: "Real-time", lastRun: "16/01/2025 14:31:02", success: "99.9%", queue: 0 },
  { name: "Milestone Billing tranches batcher", type: "Triggered", lastRun: "16/01/2025 14:00:00", success: "100.0%", queue: 0 },
  { name: "CP Portal Commission pipeline pusher", type: "Triggered", lastRun: "16/01/2025 13:55:12", success: "99.8%", queue: 2 },
  { name: "Tally prime ledger sync batch", type: "EOD (Batch)", lastRun: "15/01/2025 22:00:00", success: "96.8%", queue: 3 }
];

const INSIGHTS = [
  { id: "AI-1", type: "Sales", text: "Facebook leads who visit the website pricing page within 24 hours of inquiry convert 3.1× higher than those who don't.", confidence: 91, action: "Prioritize leads in CRM routing", rm: "Sales Manager (Rahul Modi) + Marketing" },
  { id: "AI-2", type: "Pricing", text: "Units on Floors 8–12, Tower A, Greenview Heights are taking 40% longer to sell than other floors. Indicating high pricing sensitivity.", confidence: 84, action: "Review pricing or design scheme", rm: "MD + Sales Director" },
  { id: "AI-3", type: "Team", text: "Agent Rahul Modi's conversion rate drops by 34% when he handles more than 45 active leads simultaneously. Below 40, his rate is highest.", confidence: 88, action: "Cap agent active lead assignments", rm: "Sales Manager (Rahul Modi)" },
  { id: "AI-4", type: "Sales", text: "Site visits conducted on Saturdays have 2.4× the booking conversion rate compared to weekday visits.", confidence: 79, action: "Increase Saturday visit slots capacity", rm: "Sales Team" },
  { id: "AI-5", type: "Finance", text: "Business Park collections are 12% below monthly target for 2 consecutive months. Margin variance tracks 3.8% below pro-forma.", confidence: 86, action: "Audit costs & accelerate demands", rm: "Finance Director" },
  { id: "AI-6", type: "Market", text: "Shreenath Builders cut 2BHK prices in Vesu by ₹1.8L this week (now ₹54.2L vs Fortiv ₹57.5L). Local inquiries dropped 14%.", confidence: 77, action: "Launch closing incentive scheme", rm: "Marketing Director + MD" },
  { id: "AI-7", type: "Risk", text: "4 deals in Negotiation stage have been idle for 10+ days with no agent contact logged. Approaching critical abandonment risk.", confidence: 93, action: "Trigger manager-level outreach", rm: "Sales Manager (Rahul Modi)" }
];

const statusDotStyle = (status: string) => {
  if (["Active", "Success", "Paid", "Completed", "ok"].some(s => s.toLowerCase() === status.toLowerCase()))
    return <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block shrink-0" />;
  if (["Degraded", "In Progress", "Under Review", "warn", "Approval pending", "Pending"].some(s => s.toLowerCase() === status.toLowerCase()))
    return <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse inline-block shrink-0" />;
  if (["Action Required", "Critical", "Withdrawn", "Failed", "alert", "error"].some(s => s.toLowerCase() === status.toLowerCase()))
    return <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse inline-block shrink-0" />;
  return <span className="h-1.5 w-1.5 rounded-full bg-slate-400 inline-block shrink-0" />;
};

const statusBadgeStyle = (status: string) => {
  if (["Active", "Success", "Paid", "Completed", "ok"].some(s => s.toLowerCase() === status.toLowerCase()))
    return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (["Degraded", "In Progress", "Under Review", "warn", "Approval pending", "Pending"].some(s => s.toLowerCase() === status.toLowerCase()))
    return "bg-amber-50 text-amber-700 border border-amber-100";
  if (["Action Required", "Critical", "Withdrawn", "Failed", "alert", "error"].some(s => s.toLowerCase() === status.toLowerCase()))
    return "bg-red-50 text-red-600 border border-red-100";
  return "bg-slate-50 text-slate-600 border border-slate-200";
};

function AIBrainModule() {
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
    { id: "overview", name: "AI Command Dashboard", desc: "Stitches all 11 modules into one thinking core. Displays network data graph, live rotating insights feed, system health summaries, and high-risk deals.", stats: "Data Processed: 2.4M", status: "Active" },
    { id: "graph", name: "Unified Customer Intelligence Graph", desc: "Assembles 360° buyer profile records, chronological interaction histories, real-time message sentiment tracking, and recommended next best actions.", stats: "1,247 Profiles Tracked", status: "Active" },
    { id: "insights", name: "Cross-Module AI Insights Engine", desc: "Surfaces pricing sensitivities, team workload caps, Saturday visit multipliers, and competitor movements with confidence indicators.", stats: "8 Insights Active", status: "Active" },
    { id: "risk", name: "Predictive Deal Risk Scorer", desc: "Monitors 8 deal threat vectors (recency stagnation, sentiment decay, loan friction) to alert sales managers with intervention playbooks.", stats: "3 Critical Risk Deals", status: "Active" },
    { id: "cp-portal", name: "Channel Partner Portal & Tracker", desc: "Simulates broker self-registration, client deduplication checks, commission pipelines tracking, and resources kits downloads.", stats: "6 CPs Registered", status: "Active" },
    { id: "rbac", name: "Role-Based Access Control", desc: "Manages permissions matrices across roles, user status suspension toggles, and security logs with failed-attempt alerts.", stats: "MFA: 100% Enabled (Mgr+)", status: "Active" },
    { id: "dpdp", name: "DPDP Act Compliance Layer", desc: "Validates consent registers by source, manages access/deletion subject requests queues, and runs breach response procedures.", stats: "Compliant (DPDP 2023)", status: "Active" },
    { id: "health", name: "System Health & Uptime Dashboard", desc: "Tracks live uptime grids across 12 modules, latency checkers for WhatsApp & Tally APIs, and active workflow queue depths.", stats: "System Uptime: 99.8%", status: "Active" }
  ];

  const getPageHeader = () => {
    const map: Record<TabType, { title: string; subtitle: string }> = {
      menu: { title: "AI Brain, Data Layer & Security Neural Core", subtitle: "The intelligence layer that connects all 11 business modules into a unified data environment, predicting deal risks, managing broker portals, and securing operations." },
      overview: { title: "AI Command Overview Dashboard", subtitle: "Helicopter view of intelligence metrics, live cycling cross-module findings, active risks, and module health logs." },
      graph: { title: "Unified Customer Intelligence Graph", subtitle: "A 360° timeline profile linking CRM, WhatsApp, documents, and payments records into one semantic map." },
      insights: { title: "Cross-Module AI Insights Engine", subtitle: "Discovers price sensitivities, team bottlenecks, and competitor actions to route warnings to directors." },
      risk: { title: "Predictive Deal Risk Scorer", subtitle: "Computes deal abandonment risks using contact recency, sentiment drops, and competitor mention signals." },
      "cp-portal": { title: "Channel Partner Portal Admin Panel", subtitle: "Manage broker deal submissions, track stage-based commission payouts, and view resource downloads." },
      rbac: { title: "Role-Based Access Control Console", subtitle: "Define granular viewing matrices, toggle MFA checks, and review active audit log records." },
      dpdp: { title: "DPDP Act Compliance Registry", subtitle: "Track explicit consent records, process subject requests, monitor retention policies, and test breach playbooks." },
      health: { title: "System Health & Uptime Mission Control", subtitle: "Real-time latency logs, external API connector indicators, and EOD batch queue monitors." }
    };
    return map[activeTab] || map.menu;
  };

  const headerInfo = getPageHeader();

  const dynamicTitle = activeTab === "menu" ? headerInfo.title : (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setActiveTab("menu")}
        className="group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95 mr-0.5"
        aria-label="Back to AI Core Menu"
      >
        <ChevronLeft className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>
      <span className="font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors" onClick={() => setActiveTab("menu")}>
        {headerInfo.title}
      </span>
    </div>
  );

  // --- 1. AI Command Dashboard Overview ---
  const [insightIdx, setInsightIdx] = useState(0);
  const [selectedGraphNode, setSelectedGraphNode] = useState("center");

  useEffect(() => {
    if (activeTab === "overview") {
      const timer = setInterval(() => {
        setInsightIdx((prev) => (prev + 1) % INSIGHTS.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [activeTab]);

  const activeInsight = INSIGHTS[insightIdx];

  const graphNodeDetails = useMemo(() => {
    const detailsMap: Record<string, { label: string; text: string; stat: string }> = {
      center: { label: "Data Principal", text: "Rajesh Patel · VP Sales at Adani Group. In negotiation stage for Unit A-804 at Greenview Heights (₹57.5L).", stat: "Profile Completion: 87%" },
      lead: { label: "Lead Source (M1)", text: "Captured on 03/01/2025 via 99acres Lead Ads (Vesu campaign). Income bracket verified: ₹18-25L/year.", stat: "Initial AI Score: 46 (Warm)" },
      agent: { label: "Relationship Manager (M4)", text: "Managed by Priya Rana (Sales Team Surat). 14 direct phone/chat interactions logged.", stat: "Agent Score: 4.8/5 (Highly Responsive)" },
      property: { label: "Property Matching (M3)", text: "Matched configuration: 2BHK (1,180 sq ft) on Floor 8. 2 site visits completed on 11/01 and 18/01.", stat: "AVM Target: ₹57.5L" },
      whatsapp: { label: "WhatsApp Chat (M2)", text: "Last response: 22/01/2025. Sentiment dropped from 0.81 (enthusiastic) to 0.51 (short replies, idle).", stat: "WhatsApp Active: ✓" },
      payments: { label: "Finance (M11)", text: "Total billed to date: ₹24.6L. Total collected: ₹18.2L. Outstanding: ₹6.4L.", stat: "Collection Rate: 74%" },
      documents: { label: "Document AI (M6)", text: "KYC documents collected (PAN, Aadhaar). Agreement signed and e-verified successfully.", stat: "Status: Verified" },
      nps: { label: "NPS Survey (M10)", text: "Loyalty bot post-sale survey scheduled for Q4 2025 pre-possession.", stat: "Status: Pending Handover" }
    };
    return detailsMap[selectedGraphNode] || detailsMap.center;
  }, [selectedGraphNode]);

  const renderOverview = () => (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 5 Animated Stats Counters */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <StatBox label="Leads Tracked" value="1,247" desc="Registered in CRM" color="text-slate-800" />
        <StatBox label="Automations Run Today" value="8,234" desc="Cross-module rules" color="text-emerald-600" />
        <StatBox label="WhatsApp Sent" value="3,812" desc="Chatbot + RM triggers" color="text-blue-700" />
        <StatBox label="Active Deals" value="68" desc="Pipeline value: ₹42.8Cr" color="text-amber-500" />
        <StatBox label="Data Points Processed" value="2.4M" desc="Neural core engine" color="text-red-600" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Center Left: Pulsing Customer Graph SVG */}
        <Card className="col-span-12 lg:col-span-8 p-4 border border-border bg-card flex flex-col justify-between">
          <div className="flex justify-between items-center mb-3 border-b border-border/40 pb-2">
            <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5 text-primary" /> Interactive Customer Knowledge Graph
            </h4>
            <span className="text-xs font-mono text-slate-400">Click outer nodes to inspect touchpoints</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7 flex items-center justify-center relative bg-slate-950/20 rounded-2xl border border-border/20 p-2 min-h-[260px]">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 6px rgba(46,134,171,0.25))' }}>
                {/* Connecting Spokes */}
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#2E86AB" strokeWidth="1.5" strokeDasharray="3 3" className="animate-[pulse_2s_infinite]" />
                <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#2E86AB" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="#2E86AB" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="#2E86AB" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#2E86AB" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#2E86AB" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#2E86AB" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>

              {/* Central Node */}
              <button
                onClick={() => setSelectedGraphNode("center")}
                className={`absolute w-14 h-14 rounded-full bg-[#0D1B2A] border-2 flex items-center justify-center transition-all z-20 ${selectedGraphNode === "center" ? "border-primary shadow-[0_0_15px_rgba(46,134,171,0.5)] scale-110" : "border-slate-500 hover:border-primary"}`}
              >
                <Users className="h-5 w-5 text-primary animate-pulse" />
              </button>

              {/* Outer nodes */}
              <button
                onClick={() => setSelectedGraphNode("lead")}
                className={`absolute top-[15%] left-[20%] w-9 h-9 rounded-full bg-[#1B263B] border grid place-items-center text-slate-300 z-10 transition-all ${selectedGraphNode === "lead" ? "border-blue-700 scale-110" : "border-border"}`}
                title="Lead Source"
              >
                <Search className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setSelectedGraphNode("agent")}
                className={`absolute top-[15%] left-[70%] w-9 h-9 rounded-full bg-[#1B263B] border grid place-items-center text-slate-300 z-10 transition-all ${selectedGraphNode === "agent" ? "border-blue-700 scale-110" : "border-border"}`}
                title="Agent"
              >
                <User className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setSelectedGraphNode("property")}
                className={`absolute top-[43%] left-[10%] w-9 h-9 rounded-full bg-[#1B263B] border grid place-items-center text-slate-300 z-10 transition-all ${selectedGraphNode === "property" ? "border-blue-700 scale-110" : "border-border"}`}
                title="Property MATCH"
              >
                <Building className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setSelectedGraphNode("whatsapp")}
                className={`absolute top-[43%] left-[80%] w-9 h-9 rounded-full bg-[#1B263B] border grid place-items-center text-slate-300 z-10 transition-all ${selectedGraphNode === "whatsapp" ? "border-blue-700 scale-110" : "border-border"}`}
                title="WhatsApp Feed"
              >
                <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
              </button>
              <button
                onClick={() => setSelectedGraphNode("payments")}
                className={`absolute top-[70%] left-[20%] w-9 h-9 rounded-full bg-[#1B263B] border grid place-items-center text-slate-300 z-10 transition-all ${selectedGraphNode === "payments" ? "border-blue-700 scale-110" : "border-border"}`}
                title="Payments Ledger"
              >
                <Activity className="h-3.5 w-3.5 text-amber-500" />
              </button>
              <button
                onClick={() => setSelectedGraphNode("documents")}
                className={`absolute top-[70%] left-[70%] w-9 h-9 rounded-full bg-[#1B263B] border grid place-items-center text-slate-300 z-10 transition-all ${selectedGraphNode === "documents" ? "border-blue-700 scale-110" : "border-border"}`}
                title="Documents AI"
              >
                <FileText className="h-3.5 w-3.5 text-blue-400" />
              </button>
              <button
                onClick={() => setSelectedGraphNode("nps")}
                className={`absolute top-[5%] left-[45%] w-9 h-9 rounded-full bg-[#1B263B] border grid place-items-center text-slate-300 z-10 transition-all ${selectedGraphNode === "nps" ? "border-blue-700 scale-110" : "border-border"}`}
                title="NPS Survey"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-purple-400" />
              </button>
            </div>

            {/* Selected Node Details */}
            <div className="md:col-span-5 flex flex-col justify-between bg-secondary/20 p-3 rounded-2xl border border-border/40 font-mono text-xs leading-relaxed text-slate-400">
              <div className="space-y-2">
                <div className="flex justify-between items-center border-b border-border/30 pb-2">
                  <span className="font-bold text-foreground uppercase tracking-wider">{graphNodeDetails.label}</span>
                  <span className="text-xs bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded font-mono">{graphNodeDetails.stat}</span>
                </div>
                <p className="text-xs font-sans font-medium text-slate-300 leading-normal">{graphNodeDetails.text}</p>
              </div>
              <button
                onClick={() => setActiveTab("graph")}
                className="mt-4 h-7 w-full rounded bg-ink hover:bg-ink/90 text-cream text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1"
              >
                Inspect 360° Profile <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </Card>

        {/* Center Right: Live AI Insights Feed */}
        <Card className="col-span-12 lg:col-span-4 p-4 border border-border bg-card flex flex-col justify-between">
          <div className="border-b border-border/40 pb-2 flex justify-between items-center mb-3">
            <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse" /> Live Neural Core Findings
            </h4>
            <span className="text-xs font-mono text-slate-400">Cycles 4 seconds</span>
          </div>

          <div className="flex-1 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle("Active")}`}>
                  {activeInsight.type} Insight
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold">Confidence: {activeInsight.confidence}%</span>
              </div>
              <p className="text-xs text-foreground font-semibold leading-relaxed font-sans">{activeInsight.text}</p>
              <div className="text-xs text-slate-400 font-normal">Route Action: <strong className="text-slate-600 font-mono">{activeInsight.action}</strong></div>
            </div>

            <div className="space-y-2.5">
              <button
                onClick={() => {
                  alert(`Insight [${activeInsight.id}] routed successfully to ${activeInsight.rm}.`);
                }}
                className="h-8 w-full rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold uppercase tracking-wider transition-all"
              >
                Action Recommendation
              </button>

              <div className="flex gap-1">
                {INSIGHTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInsightIdx(idx)}
                    className={`h-1.5 flex-1 rounded-full transition-all ${idx === insightIdx ? "bg-primary" : "bg-slate-200 hover:bg-slate-300"}`}
                    aria-label={`Go to insight ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Bottom Left: System Health Grid (12 Modules) */}
        <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card">
          <div className="border-b border-border/40 pb-2 flex justify-between items-center mb-3">
            <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> Platform Modules Health Core
            </h4>
            <button onClick={() => setActiveTab("health")} className="text-xs font-bold text-primary underline font-mono">Mission Control</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs font-semibold">
            {moduleHealthData.map((m, idx) => (
              <div key={idx} className="flex justify-between items-center border-b border-border/20 pb-1.5 last:border-0">
                <div className="flex items-center gap-2">
                  {statusDotStyle(m.status)}
                  <span className="text-foreground text-xs truncate max-w-[200px]">{m.name}</span>
                </div>
                <span className="font-mono text-xs text-slate-400 font-bold">{m.uptime}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Bottom Right: Predictive Risk Summary */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card flex flex-col justify-between">
          <div>
            <div className="border-b border-border/40 pb-2 flex justify-between items-center mb-3">
              <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-red-600" /> High-Risk Active Deals
              </h4>
              <button onClick={() => setActiveTab("risk")} className="text-xs font-bold text-primary underline font-mono">Risk Matrix</button>
            </div>
            <div className="space-y-2">
              {initialRiskDeals.slice(0, 3).map((deal, idx) => (
                <div key={idx} className="flex justify-between items-center bg-secondary/35 p-2 rounded-xl border border-border/40">
                  <div>
                    <div className="text-foreground text-xs font-bold">{deal.name} · Unit {deal.unit}</div>
                    <div className="text-xs text-slate-400 font-normal">{deal.reason}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono font-bold text-red-500 bg-red-50 border border-red-100 px-1.5 py-0.5 rounded text-xs">
                      {deal.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 2. Unified Customer Intelligence Graph (12.1) ---
  const [selectedProfile, setSelectedProfile] = useState("Rajesh Patel");

  const activeProfileData = useMemo(() => {
    return initialRiskDeals.find(b => b.name === selectedProfile) || initialRiskDeals[0];
  }, [selectedProfile]);

  const customerTimeline = useMemo(() => {
    if (selectedProfile === "Rajesh Patel") {
      return [
        { time: "03/01/2025 09:14", type: "Lead Captured", text: "Inquiry from 99acres — 2BHK Vesu ₹48–60L", module: "M1.4" },
        { time: "03/01/2025 09:14", type: "AI Score Set", text: "Initial score: 46 (Warm)", module: "M1.6" },
        { time: "03/01/2025 09:15", type: "WhatsApp Sent", text: "Auto-acknowledgement sent introducing RM Priya Rana", module: "M2.1" },
        { time: "03/01/2025 09:22", type: "WhatsApp Reply", text: "Buyer replied: 'Yes interested, when can I visit?'", module: "M2.1" },
        { time: "03/01/2025 09:22", type: "Score Update", text: "Score: 46 → 58 (+12, WhatsApp reply in <5min)", module: "M1.6" },
        { time: "03/01/2025 09:45", type: "Profile Enriched", text: "VP Sales, Adani Group, ₹18–25L income tier verified", module: "M1.5" },
        { time: "05/01/2025 10:00", type: "Agent Call Log", text: "Priya Rana called — 8 min discussion — noted: prefers Floor 6+", module: "M4.1" },
        { time: "06/01/2025 14:00", type: "Brochure Opened", text: "Tracked PDF opened — 4 min 32 sec reading time logged", module: "M2.6" },
        { time: "11/01/2025 11:00", type: "Site Visit 1", text: "Attended — 45 min — Interested in Tower A Floor 8 layouts", module: "M4.2" },
        { time: "18/01/2025 11:00", type: "Site Visit 2", text: "Attended with spouse — requested pricing for Unit 804", module: "M4.2" },
        { time: "20/01/2025 09:00", type: "Risk Alert", text: "Deal risk score elevated to 62: 7 days since last contact", module: "M12.3" }
      ];
    } else {
      return [
        { time: "05/01/2025 10:00", type: "Lead Captured", text: "Referral from CP Rajhans Realtors", module: "M12.4" },
        { time: "08/01/2025 11:00", type: "Site Visit Complete", text: "Attended with CP broker. Positive intent.", module: "M4.2" },
        { time: "12/01/2025 12:00", type: "Offer Submitted", text: "Negotiation stage. Requested commercial term sheet.", module: "M4.5" },
        { time: "15/01/2025 16:30", type: "Risk Elevated", text: "Risk score 78. Missed calls + payment schedule dispute.", module: "M12.3" }
      ];
    }
  }, [selectedProfile]);

  const renderGraph = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="flex items-center gap-1.5 border-b border-border/30 pb-3">
        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider font-mono mr-2">Select Buyer Profile:</span>
        {["Rajesh Patel", "Vikram Joshi", "Mahesh Khanna", "Suresh Nair", "Sanjay Kapoor"].map(name => (
          <button
            key={name}
            onClick={() => setSelectedProfile(name)}
            className={`h-8 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${selectedProfile === name ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Left column: 360 Profile details */}
        <Card className="col-span-12 lg:col-span-4 p-4 border border-border bg-card space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-border/40">
              <div className="h-11 w-11 rounded-full bg-primary/25 text-primary border border-primary/20 grid place-items-center text-sm font-bold">
                {selectedProfile.split(" ").map(w => w[0]).join("")}
              </div>
              <div>
                <div className="text-foreground text-sm font-bold">{selectedProfile}</div>
                <div className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wide">
                  Score: {activeProfileData.score} · {activeProfileData.level} Risk
                </div>
              </div>
            </div>

            <div className="space-y-3.5 text-xs font-semibold text-slate-600 font-mono">
              <div className="flex justify-between border-b border-border/20 pb-2">
                <span>Unit allocation:</span>
                <span className="text-foreground font-bold">{activeProfileData.unit} ({activeProfileData.project})</span>
              </div>
              <div className="flex justify-between border-b border-border/20 pb-2">
                <span>Deal Value:</span>
                <span className="text-foreground font-bold">₹{(activeProfileData.value/100000).toFixed(1)}L</span>
              </div>
              <div className="flex justify-between border-b border-border/20 pb-2">
                <span>Relationship RM:</span>
                <span className="text-foreground font-bold">{activeProfileData.rm}</span>
              </div>
              <div className="flex justify-between border-b border-border/20 pb-2">
                <span>Designation Tier:</span>
                <span className="text-foreground font-bold">VP / Director level</span>
              </div>
              <div className="flex justify-between border-b border-border/20 pb-2">
                <span>Data Source:</span>
                <span className="text-foreground font-bold">Organic Campaigns</span>
              </div>
              <div className="flex justify-between pb-2">
                <span>Privacy Consent:</span>
                <span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded font-bold">Active</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-secondary/35 rounded-xl border border-border/40 space-y-1.5 font-mono text-xs">
            <div className="flex justify-between font-bold text-foreground">
              <span>Sentiment Analysis (M2)</span>
              <span className="text-amber-600">Neutral (0.51)</span>
            </div>
            <p className="text-slate-400 font-normal leading-normal">
              WhatsApp messaging speed dropped by 45% over the past 7 days. Empathy-first recovery sequence required.
            </p>
          </div>
        </Card>

        {/* Center column: chronological timelines */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border/40 pb-2"><h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Neural Timeline Touchpoints</h3></div>
          <div className="h-96 overflow-y-auto scrollbar-none space-y-3 pr-1 text-xs">
            {customerTimeline.map((evt, idx) => (
              <div key={idx} className="relative pl-5 border-l border-border/60 pb-3 last:pb-0">
                <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-slate-900 border-2 border-primary" />
                <div className="flex justify-between font-mono text-xs text-slate-400 mb-0.5">
                  <span>{evt.time}</span>
                  <span className="font-bold text-blue-700">{evt.module}</span>
                </div>
                <div className="text-foreground font-bold">{evt.type}</div>
                <p className="text-xs text-slate-400 font-normal mt-0.5 leading-normal">{evt.text}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Right column: next best actions */}
        <Card className="col-span-12 lg:col-span-3 p-4 border border-border bg-card flex flex-col justify-between h-full min-h-[400px]">
          <div className="space-y-4">
            <div className="border-b border-border/40 pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">AI Recommended Action</h4></div>
            <div className="p-3 bg-red-50/20 border border-red-200 rounded-xl space-y-2">
              <div className="text-xs font-mono font-bold text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5 animate-bounce" /> HIGH IMPACT ACTION TRIGGERED
              </div>
              <div className="text-foreground text-xs font-bold leading-normal">
                Direct Manager Call from Sales lead (Rahul Modi) — not agent.
              </div>
              <p className="text-xs text-slate-400 font-normal leading-normal mt-1">
                Unresolved discount objection (₹2L) has stalled the deal. Acknowledging the competitor creates a +18% conversion probability boost.
              </p>
            </div>
          </div>

          <div className="space-y-3.5 mt-4">
            <div className="p-2.5 bg-secondary/35 rounded-xl border border-border/40 font-mono text-xs text-slate-500 leading-normal">
              <strong>Context Script:</strong><br />
              &quot;Rajesh, I wanted to personally check in. We have approved the modular kitchen incentive scheme for Floor 8 Unit 804...&quot;
            </div>
            <button
              onClick={() => alert(`Next best action workflow executed for ${selectedProfile}. WhatsApp dispatch triggered.`)}
              className="w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
            >
              Execute Playbook Call
            </button>
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 3. Cross-Module AI Insights Engine (12.2) ---
  const [insightsFilter, setInsightsFilter] = useState("All");
  const [expandedInsight, setExpandedInsight] = useState<string | null>("AI-1");
  const [actionedInsights, setActionedInsights] = useState<Record<string, boolean>>({});

  const filteredInsights = useMemo(() => {
    if (insightsFilter === "All") return INSIGHTS;
    return INSIGHTS.filter(i => i.type.toLowerCase() === insightsFilter.toLowerCase());
  }, [insightsFilter]);

  const renderInsights = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="flex flex-wrap gap-1.5 border-b border-border/30 pb-3">
        {["All", "Sales", "Pricing", "Team", "Finance", "Market", "Risk"].map(cat => (
          <button
            key={cat}
            onClick={() => setInsightsFilter(cat)}
            className={`h-8 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${insightsFilter === cat ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Expanded Findings list */}
        <div className="col-span-12 lg:col-span-7 space-y-3">
          {filteredInsights.map((insight) => (
            <Card
              key={insight.id}
              onClick={() => setExpandedInsight(expandedInsight === insight.id ? null : insight.id)}
              className={`p-4 border transition-all cursor-pointer bg-card ${expandedInsight === insight.id ? "border-primary shadow-sm" : "border-border/60 hover:border-slate-400"}`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle("Active")}`}>
                  {insight.type}
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold">Confidence: {insight.confidence}%</span>
              </div>
              <h4 className="text-foreground text-xs font-bold font-sans pr-4 leading-normal">{insight.text}</h4>
              {expandedInsight === insight.id && (
                <div className="mt-4 pt-3 border-t border-border/40 text-xs leading-relaxed text-slate-400 space-y-3 font-mono animate-in fade-in duration-200">
                  <div>
                    <strong className="text-slate-500 uppercase text-xs tracking-wider block">Recommended Action:</strong>
                    <span className="text-foreground">{insight.action}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span>Recipient Group: <strong>{insight.rm}</strong></span>
                    <span>Status: <strong className={actionedInsights[insight.id] ? "text-emerald-600" : "text-slate-600"}>{actionedInsights[insight.id] ? "Actioned ✓" : "Pending Action"}</strong></span>
                  </div>
                  {!actionedInsights[insight.id] && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActionedInsights(prev => ({ ...prev, [insight.id]: true }));
                        alert(`Action playbook initialized for insight [${insight.id}].`);
                      }}
                      className="h-7 w-full rounded bg-ink hover:bg-ink/90 text-cream text-xs font-mono uppercase tracking-wider mt-1.5"
                    >
                      Route Action Playbook
                    </button>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Outcome track summaries */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border/40 pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Historical Recommendation ROI</h4></div>
          <div className="space-y-3.5 text-xs font-semibold">
            {[
              { insight: "Saturday visits capacity shift", actioned: "02/12/2024", outcome: "Saturdays site visits +40%, booking conversion improved 2.4x", verified: true },
              { insight: "Agent workload lead allocation cap", actioned: "15/11/2024", outcome: "Rahul Modi active conversion rose from 4.2% to 6.8%", verified: true },
              { insight: "Vesu price closing incentive campaign", actioned: "14/01/2025", outcome: "Inquiry volumes recovered 11% back to baseline thresholds", verified: true }
            ].map((row, i) => (
              <div key={i} className="p-3 bg-secondary/35 rounded-xl border border-border/40 space-y-1.5">
                <div className="flex justify-between font-mono text-xs text-slate-400">
                  <span>Actioned: {row.actioned}</span>
                  <span className="text-emerald-600 font-bold">✓ Verified ROI</span>
                </div>
                <div className="text-foreground text-xs font-bold leading-normal">{row.insight}</div>
                <p className="text-xs text-slate-400 font-normal leading-normal">{row.outcome}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 4. Predictive Deal Risk Scorer (12.3) ---
  const [selectedRiskDeal, setSelectedRiskDeal] = useState("Rajesh Patel");

  const riskData = useMemo(() => {
    return initialRiskDeals.find(b => b.name === selectedRiskDeal) || initialRiskDeals[0];
  }, [selectedRiskDeal]);

  const renderRisk = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Total Active Deals" value="68" desc="Pipeline monitor active" color="text-slate-800" />
        <StatBox label="High-Risk Deals" value="6" desc="Requires urgent callback" color="text-amber-500" />
        <StatBox label="Critical Risk Deals" value="3" desc="Abandonment imminent" color="text-red-600 animate-pulse" />
        <StatBox label="Deals Saved This Month" value="12" desc="Playbook success rate: 78%" color="text-emerald-600" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Deal ledger table */}
        <Card className="col-span-12 lg:col-span-8 p-0 border border-border bg-card overflow-hidden">
          <div className="p-3 bg-secondary/35 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-xs text-foreground font-display uppercase tracking-wider">Predictive Deal Risk Table</h3>
          </div>
          <div className="overflow-x-auto scrollbar-none h-[420px]">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display sticky top-0 z-10">
                <tr>
                  <th className="px-3.5 py-2.5">Buyer</th>
                  <th className="px-3.5 py-2.5 font-mono">Unit / Project</th>
                  <th className="px-3.5 py-2.5 font-mono">Value</th>
                  <th className="px-3.5 py-2.5 font-mono">Score</th>
                  <th className="px-3.5 py-2.5 font-mono">Status</th>
                  <th className="px-3.5 py-2.5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {initialRiskDeals.map((b, i) => (
                  <tr
                    key={i}
                    onClick={() => setSelectedRiskDeal(b.name)}
                    className={`hover:bg-secondary/15 cursor-pointer ${selectedRiskDeal === b.name ? "bg-secondary/20 border-l-2 border-l-primary" : ""}`}
                  >
                    <td className="px-3.5 py-3 font-bold">{b.name}</td>
                    <td className="px-3.5 py-3">
                      <div className="font-bold text-foreground font-mono">{b.unit}</div>
                      <div className="text-xs text-slate-400 font-normal">{b.project}</div>
                    </td>
                    <td className="px-3.5 py-3 font-mono">₹{(b.value/100000).toFixed(1)}L</td>
                    <td className="px-3.5 py-3 font-mono font-bold">
                      <span className={b.score >= 80 ? "text-red-500 animate-pulse" : b.score >= 60 ? "text-amber-500" : "text-emerald-600"}>
                        {b.score}
                      </span>
                    </td>
                    <td className="px-3.5 py-3">
                      <span className={`text-xs font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle(b.level)}`}>{b.level}</span>
                    </td>
                    <td className="px-3.5 py-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Intervention sequence triggered for ${b.name}. RM notified.`);
                        }}
                        className="h-6 px-2 rounded bg-ink text-cream hover:bg-ink/90 text-xs font-mono uppercase"
                      >
                        Intervene
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Score Breakdown details */}
        <Card className="col-span-12 lg:col-span-4 p-4 border border-border bg-card flex flex-col justify-between h-[470px]">
          <div className="space-y-4">
            <div className="border-b border-border/40 pb-2 flex justify-between items-center">
              <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Risk Breakdown Profile</h4>
              <span className={`text-xs font-extrabold px-1.5 py-0.2 rounded font-mono ${statusBadgeStyle(riskData.level)}`}>{riskData.level}</span>
            </div>

            <div className="space-y-3 font-mono text-xs text-slate-600">
              <div className="text-foreground text-sm font-bold font-sans">{riskData.name} (Unit {riskData.unit})</div>
              <div className="p-3 bg-secondary/35 rounded-xl border border-border/40 space-y-1.5 text-xs">
                <div className="flex justify-between"><span>Contact Recency (&gt;10d):</span><span className="text-foreground font-bold">{riskData.days} days idle</span></div>
                <div className="flex justify-between border-t border-border/30 pt-1.5 mt-1.5">
                  <span>Risk Score:</span>
                  <span className={`font-bold text-sm ${riskData.score >= 80 ? "text-red-500 animate-pulse" : "text-amber-500"}`}>{riskData.score} / 100</span>
                </div>
              </div>

              <div className="p-2.5 bg-red-50/20 border border-red-200 text-red-600 rounded-xl text-xs leading-normal font-sans">
                <strong>Primary Trigger Reason:</strong><br />
                {riskData.reason}
              </div>
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <div className="text-[10px] font-mono text-slate-400 bg-secondary/25 p-2 rounded-lg leading-normal">
              <strong>Approved Close Incentive:</strong> Modular kitchen upgrade & 2 Free Car Parks on immediate slot confirmation.
            </div>
            <button
              onClick={() => alert(`Direct WhatsApp message with incentive sent to ${riskData.name}.`)}
              className="w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all"
            >
              Trigger Playbook Outreach
            </button>
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 5. Channel Partner (CP) Portal & Tracker (12.4) ---
  const [cpDeals, setCpDeals] = useState(initialCpDeals);
  const [newDealForm, setNewDealForm] = useState({ buyer: "", phone: "", email: "", project: "Greenview Heights" });

  const handleRegisterDeal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDealForm.buyer || !newDealForm.phone) {
      alert("Please complete required Buyer Name and Phone details.");
      return;
    }

    // Duplicate check
    const isDuplicate = cpDeals.some(d => d.buyer.toLowerCase() === newDealForm.buyer.toLowerCase());
    if (isDuplicate) {
      alert(`Conflict Detected: Buyer "${newDealForm.buyer}" is already registered in the Command Center CRM database. Claim rejected.`);
      return;
    }

    const newDeal = {
      id: `CPD-${cpDeals.length + 1}`,
      cpName: "Rajhans Realtors",
      buyer: newDealForm.buyer,
      unit: "TBD",
      project: newDealForm.project,
      value: 6000000,
      stage: "Registered",
      commission: 120000,
      paid: 0,
      status: "Pending"
    };

    setCpDeals([newDeal, ...cpDeals]);
    alert(`Success: Deal [${newDeal.id}] registered successfully under Rajhans Realtors. Added to M4 Sales Pipeline.`);
    setNewDealForm({ buyer: "", phone: "", email: "", project: "Greenview Heights" });
  };

  const renderCpPortal = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-12 gap-5">
        {/* Deal Registration Form */}
        <Card className="col-span-12 lg:col-span-4 p-4 border border-border bg-card flex flex-col justify-between">
          <div className="space-y-4">
            <div className="border-b border-border/40 pb-2"><h3 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Broker Deal Submission</h3></div>
            <form onSubmit={handleRegisterDeal} className="space-y-3 text-xs font-semibold">
              <div className="space-y-1">
                <label className="text-slate-400">Buyer Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Rajesh Patel"
                  value={newDealForm.buyer}
                  onChange={(e) => setNewDealForm({ ...newDealForm, buyer: e.target.value })}
                  className="w-full h-8 border border-border rounded-lg text-xs px-2.5 bg-card text-foreground"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-400">Buyer Phone Number *</label>
                <input
                  type="text"
                  placeholder="e.g. +91 98765 XXXXX"
                  value={newDealForm.phone}
                  onChange={(e) => setNewDealForm({ ...newDealForm, phone: e.target.value })}
                  className="w-full h-8 border border-border rounded-lg text-xs px-2.5 bg-card text-foreground"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-400">Buyer Email ID</label>
                <input
                  type="email"
                  placeholder="e.g. email@gmail.com"
                  value={newDealForm.email}
                  onChange={(e) => setNewDealForm({ ...newDealForm, email: e.target.value })}
                  className="w-full h-8 border border-border rounded-lg text-xs px-2.5 bg-card text-foreground"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-400">Project Interest</label>
                <select
                  value={newDealForm.project}
                  onChange={(e) => setNewDealForm({ ...newDealForm, project: e.target.value })}
                  className="w-full h-8 border border-border rounded-lg text-xs px-2 bg-card text-foreground"
                >
                  <option>Greenview Heights</option>
                  <option>Skyline Residences</option>
                  <option>Business Park</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all mt-4"
              >
                Submit Client Lead Claim
              </button>
            </form>
          </div>
        </Card>

        {/* CP Registered Deals Pipeline */}
        <Card className="col-span-12 lg:col-span-8 p-0 border border-border bg-card overflow-hidden">
          <div className="p-3 bg-secondary/35 border-b border-border text-xs font-bold uppercase text-slate-500 font-display">Registered Deals Registry (Admin view)</div>
          <div className="overflow-x-auto scrollbar-none h-[340px]">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">CP Broker</th>
                  <th className="px-3.5 py-2.5">Buyer</th>
                  <th className="px-3.5 py-2.5 font-mono">Project</th>
                  <th className="px-3.5 py-2.5 font-mono">Commission</th>
                  <th className="px-3.5 py-2.5 font-mono">Stage</th>
                  <th className="px-3.5 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {cpDeals.map((deal, i) => (
                  <tr key={i} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-3 font-bold">{deal.cpName}</td>
                    <td className="px-3.5 py-3">{deal.buyer}</td>
                    <td className="px-3.5 py-3 font-mono">{deal.project}</td>
                    <td className="px-3.5 py-3 font-mono">₹{(deal.commission/100000).toFixed(1)}L</td>
                    <td className="px-3.5 py-3 text-slate-500 font-bold">{deal.stage}</td>
                    <td className="px-3.5 py-3">
                      <span className={`text-xs font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle(deal.status)}`}>{deal.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* CP Leaderboards */}
        <Card className="col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden">
          <div className="p-3 bg-secondary/35 border-b border-border text-xs font-bold uppercase text-slate-500 font-display">Broker network leaderboard</div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {cpLeaderboard.map((cp) => (
                  <tr key={cp.rank} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-2.5 font-bold font-mono">{cp.rank}</td>
                    <td className="px-3.5 py-2.5 font-bold">
                      {cp.name} <span className="text-xs text-slate-400 block font-normal font-mono">RERA: {cp.rera}</span>
                    </td>
                    <td className="px-3.5 py-2.5 font-mono text-slate-400">{cp.deals} deals registered</td>
                    <td className="px-3.5 py-2.5 font-mono text-slate-400">{cp.booked} bookings</td>
                    <td className="px-3.5 py-2.5 font-mono font-bold text-foreground">₹{(cp.earned/100000).toFixed(1)}L</td>
                    <td className="px-3.5 py-2.5 text-right font-mono font-bold text-primary">{cp.trophy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Resources library download */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border/40 pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">CP Portal Resource Library Kits</h4></div>
          <div className="space-y-3 text-xs font-semibold text-slate-600">
            {[
              { doc: "Greenview Heights Price List Jan 2025.pdf", size: "1.4 MB", clicks: 142 },
              { doc: "Vesu Floor Plans & layouts Tower A-C.pdf", size: "8.6 MB", clicks: 231 },
              { doc: "WhatsApp Social Marketing Zip Kit.zip", size: "24.5 MB", clicks: 98 }
            ].map((res, i) => (
              <div key={i} className="flex justify-between items-center border-b border-border/30 pb-2 last:border-0 last:pb-0">
                <div>
                  <div className="text-foreground">{res.doc}</div>
                  <div className="text-xs text-slate-400 font-normal">File size: {res.size} · downloads logged: {res.clicks}</div>
                </div>
                <button
                  onClick={() => alert(`Initiating download for resource: ${res.doc}`)}
                  className="h-6 w-6 rounded bg-secondary hover:bg-slate-300 text-slate-600 grid place-items-center"
                >
                  <Download className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 6. Role-Based Access Control (12.5) ---
  const [users, setUsers] = useState(rbacUsers);

  const toggleUserStatus = (id: string, name: string, currentStatus: string) => {
    const nextStatus = currentStatus === "Active" ? "Suspended" : "Active";
    setUsers(prev => prev.map(u => {
      if (u.id === id) {
        return { ...u, status: nextStatus };
      }
      return u;
    }));
    alert(`Security Action: User Account for ${name} has been set to [${nextStatus}].`);
  };

  const renderRbac = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-12 gap-5">
        {/* User list table */}
        <Card className="col-span-12 lg:col-span-8 p-0 border border-border bg-card overflow-hidden">
          <div className="p-3 bg-secondary/35 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-xs text-foreground font-display uppercase tracking-wider">User Registry Manager</h3>
          </div>
          <div className="overflow-x-auto scrollbar-none h-[320px]">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">User</th>
                  <th className="px-3.5 py-2.5 font-mono">Role / Dept</th>
                  <th className="px-3.5 py-2.5 font-mono">MFA</th>
                  <th className="px-3.5 py-2.5 font-mono">Last Session</th>
                  <th className="px-3.5 py-2.5">Status</th>
                  <th className="px-3.5 py-2.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {users.map((u) => (
                  <tr key={u.id} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-3 font-bold">
                      {u.name} <span className="text-xs text-slate-400 block font-normal font-mono">{u.email}</span>
                    </td>
                    <td className="px-3.5 py-3 font-mono">
                      <div className="font-bold text-foreground">{u.role}</div>
                      <div className="text-xs text-slate-400 font-normal">{u.dept}</div>
                    </td>
                    <td className="px-3.5 py-3">
                      <span className={`text-xs px-1.5 py-0.2 rounded font-mono ${u.mfa ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
                        {u.mfa ? "Enabled" : "Disabled"}
                      </span>
                    </td>
                    <td className="px-3.5 py-3 font-mono text-slate-400 text-xs">{u.lastLogin}</td>
                    <td className="px-3.5 py-3">
                      <span className={`text-xs font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle(u.status)}`}>{u.status}</span>
                    </td>
                    <td className="px-3.5 py-3 text-right">
                      <button
                        onClick={() => toggleUserStatus(u.id, u.name, u.status)}
                        className={`h-6 px-2.5 rounded text-xs font-mono uppercase ${u.status === "Active" ? "bg-red-600 hover:bg-red-700 text-white" : "bg-ink text-cream hover:bg-ink/90"}`}
                      >
                        {u.status === "Active" ? "Suspend" : "Activate"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Permission matrix preview */}
        <Card className="col-span-12 lg:col-span-4 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border/40 pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">RBAC Module Permission Matrix</h4></div>
          <div className="space-y-3 font-mono text-xs text-slate-500">
            <div className="grid grid-cols-5 text-center font-bold text-foreground border-b border-border/40 pb-1.5">
              <span className="text-left col-span-2">Role Scope</span>
              <span>View</span>
              <span>Edit</span>
              <span>Exprt</span>
            </div>
            {[
              { role: "Sales Agent", v: "✓", e: "Own", ex: "✗" },
              { role: "Sales Manager", v: "Full", e: "Full", ex: "Team" },
              { role: "CFO / Finance", v: "M11", e: "M11", ex: "Full" },
              { role: "System Admin", v: "All", e: "All", ex: "All" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-5 text-center border-b border-border/20 py-2 last:border-0 last:pb-0">
                <span className="text-left font-bold text-foreground col-span-2">{row.role}</span>
                <span className="text-emerald-600 font-bold">{row.v}</span>
                <span className="text-amber-600">{row.e}</span>
                <span className={row.ex === "✗" ? "text-red-500" : "text-emerald-600"}>{row.ex}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Security logs */}
      <Card className="p-0 border border-border bg-card overflow-hidden">
        <div className="p-3 bg-secondary/35 border-b border-border flex justify-between items-center">
          <span className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Platform Security Logs (Audit Feed)</span>
          <span className="text-xs font-mono text-red-500 animate-pulse font-bold">1 Alert Flagged Today</span>
        </div>
        <div className="overflow-x-auto scrollbar-none max-h-44">
          <table className="w-full text-left text-xs divide-y divide-border/60">
            <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
              {securityAuditLogs.map((log) => (
                <tr key={log.id} className={`hover:bg-secondary/15 font-mono text-xs ${log.type === "alert" ? "bg-red-50/15 text-red-600" : ""}`}>
                  <td className="px-3.5 py-2.5 text-slate-400">{log.time}</td>
                  <td className="px-3.5 py-2.5 font-bold">{log.user}</td>
                  <td className="px-3.5 py-2.5 text-slate-400">{log.action}</td>
                  <td className="px-3.5 py-2.5 font-bold">{log.module}</td>
                  <td className="px-3.5 py-2.5 text-slate-400">{log.record}</td>
                  <td className="px-3.5 py-2.5 text-slate-500 font-bold">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  // --- 7. DPDP Act Compliance Layer (12.6) ---
  const [consents, setConsents] = useState(dpdpConsents);
  const [dsrRequests, setDsrRequests] = useState(dpdpRequests);
  const [breachStep, setBreachStep] = useState(0);

  const withdrawConsent = (id: string, name: string) => {
    setConsents(prev => prev.map(c => {
      if (c.id === id) {
        return { ...c, status: "Withdrawn", expiry: `Withdrawn ${new Date().toLocaleDateString()}` };
      }
      return c;
    }));
    alert(`DPDP Core: Consent withdrawn for principal ${name}. All automated marketing schedules paused.`);
  };

  const processDsr = (id: string, name: string) => {
    setDsrRequests(prev => prev.filter(r => r.id !== id));
    alert(`Success: Data Subject Request resolved for ${name}. Confirmation notice compiled and emailed.`);
  };

  const renderDpdp = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-12 gap-5">
        {/* Consent register */}
        <Card className="col-span-12 lg:col-span-8 p-0 border border-border bg-card overflow-hidden">
          <div className="p-3 bg-secondary/35 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-xs text-foreground font-display uppercase tracking-wider">DPDP Act Explicit Consent Registry</h3>
          </div>
          <div className="overflow-x-auto scrollbar-none h-[300px]">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Data Principal</th>
                  <th className="px-3.5 py-2.5 font-mono">Consent Purpose</th>
                  <th className="px-3.5 py-2.5 font-mono">Source</th>
                  <th className="px-3.5 py-2.5 font-mono">Expiry</th>
                  <th className="px-3.5 py-2.5">Status</th>
                  <th className="px-3.5 py-2.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {consents.map((c) => (
                  <tr key={c.id} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-3 font-bold">
                      {c.name} <span className="text-xs text-slate-400 block font-normal font-mono">{c.contact}</span>
                    </td>
                    <td className="px-3.5 py-3 font-mono">
                      <div className="font-bold text-foreground truncate max-w-[200px]">{c.purpose}</div>
                      <div className="text-xs text-slate-400 font-normal truncate max-w-[200px]">{c.text}</div>
                    </td>
                    <td className="px-3.5 py-3 font-mono text-slate-400 text-xs">{c.source}</td>
                    <td className="px-3.5 py-3 font-mono text-xs">{c.expiry}</td>
                    <td className="px-3.5 py-3">
                      <span className={`text-xs font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle(c.status)}`}>{c.status}</span>
                    </td>
                    <td className="px-3.5 py-3 text-right">
                      {c.status === "Active" ? (
                        <button
                          onClick={() => withdrawConsent(c.id, c.name)}
                          className="h-6 px-2 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-mono uppercase"
                        >
                          Withdraw
                        </button>
                      ) : (
                        <span className="text-slate-500 font-mono text-xs">Withdrawn</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Data subject requests queue */}
        <Card className="col-span-12 lg:col-span-4 p-4 border border-border bg-card space-y-4">
          <div className="border-b border-border/40 pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Data Subject Requests Queue</h4></div>
          <div className="space-y-3 font-semibold text-xs text-slate-600">
            {dsrRequests.length === 0 ? (
              <div className="text-center py-6 text-slate-400">All subject requests resolved successfully.</div>
            ) : (
              dsrRequests.map((r) => (
                <div key={r.id} className="p-3 bg-secondary/35 rounded-xl border border-border/50 space-y-1.5">
                  <div className="flex justify-between font-mono text-xs text-slate-400">
                    <span>{r.id} · SLA: {r.slaDays} days</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${statusBadgeStyle(r.status)}`}>{r.status}</span>
                  </div>
                  <div>
                    <div className="text-foreground text-sm font-bold">{r.name}</div>
                    <p className="text-xs text-slate-400 font-normal mt-0.5">{r.type} Request: {r.details}</p>
                  </div>
                  <button
                    onClick={() => processDsr(r.id, r.name)}
                    className="h-7 w-full rounded bg-ink hover:bg-ink/90 text-cream text-xs font-mono uppercase tracking-wider"
                  >
                    Approve & Process Request
                  </button>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Retention Policy dashboard */}
        <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card">
          <div className="border-b border-border/40 pb-2 flex justify-between items-center mb-3">
            <h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Data Retention Policy Schedule</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs font-semibold text-slate-600">
            {[
              { type: "Leads not converted", retention: "2 years from contact", basis: "Consent", status: "Active" },
              { type: "Buyer KYC Documents", retention: "7 years post-possession", basis: "PMLA / RERA", status: "Active" },
              { type: "Financial Accounts entries", retention: "8 years", basis: "Income Tax", status: "Active" }
            ].map((pol, i) => (
              <div key={i} className="p-3 bg-secondary/35 rounded-xl border border-border/40 space-y-1">
                <div className="text-xs font-bold text-foreground">{pol.type}</div>
                <div className="font-mono text-xs text-slate-400">{pol.retention}</div>
                <div className="flex justify-between items-center text-[10px] font-mono mt-2 pt-1 border-t border-border/30">
                  <span>Basis: {pol.basis}</span>
                  <span className="text-emerald-600 font-bold">{pol.status}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Breach response simulation */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-red-600/5 text-red-600 space-y-4">
          <div className="border-b border-red-600/20 pb-2"><h4 className="font-bold text-xs uppercase tracking-wider font-display">Interactive Breach Response Playbook</h4></div>
          <div className="space-y-3 font-semibold text-xs text-red-600">
            <p className="text-xs leading-relaxed font-sans font-medium text-slate-600">
              In case of a detected security data breach, DPDP 2023 mandates containment actions and DPA notification within 72 hours.
            </p>
            <div className="p-3 bg-red-600/10 rounded-xl border border-red-600/20 font-mono text-xs space-y-1.5">
              <div className="flex justify-between"><span>Current Step:</span><span>Step {breachStep + 1} of 4</span></div>
              <div className="text-foreground font-bold mt-1.5">
                {breachStep === 0 && "Step 1: Containerize & Revoke Access keys"}
                {breachStep === 1 && "Step 2: Impact assessment and Data Categories involved"}
                {breachStep === 2 && "Step 3: Compile DPA Gujarat Notification draft (mandatory 72h)"}
                {breachStep === 3 && "Step 4: WhatsApp Alert notifications to affected Data Principals"}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  if (breachStep < 3) setBreachStep(breachStep + 1);
                  else {
                    setBreachStep(0);
                    alert("Breach mitigation response simulation completed successfully.");
                  }
                }}
                className="flex-1 h-8 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
              >
                {breachStep === 3 ? "Reset Simulator" : "Approve Next Step"}
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  // --- 8. System Health & Uptime Dashboard (12.7) ---
  const renderHealth = () => (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-12 gap-5">
        {/* Module Health Status table */}
        <Card className="col-span-12 lg:col-span-7 p-0 border border-border bg-card overflow-hidden">
          <div className="p-3 bg-secondary/35 border-b border-border flex justify-between items-center">
            <span className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Command Center Neural Modules</span>
            <span className="text-xs font-mono text-slate-400">Target: 99.5% Uptime</span>
          </div>
          <div className="overflow-x-auto scrollbar-none max-h-96">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display sticky top-0 z-10">
                <tr>
                  <th className="px-3.5 py-2.5">Module Name</th>
                  <th className="px-3.5 py-2.5 font-mono">Uptime (30d)</th>
                  <th className="px-3.5 py-2.5 font-mono">Response Speed</th>
                  <th className="px-3.5 py-2.5 font-mono">Last Incident</th>
                  <th className="px-3.5 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                {moduleHealthData.map((m, i) => (
                  <tr key={i} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-2.5 font-bold">{m.name}</td>
                    <td className="px-3.5 py-2.5 font-mono text-slate-400">{m.uptime}</td>
                    <td className="px-3.5 py-2.5 font-mono text-slate-400">{m.speed}</td>
                    <td className="px-3.5 py-2.5 font-mono text-slate-400">{m.incident}</td>
                    <td className="px-3.5 py-2.5">
                      <span className={`text-xs font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadgeStyle(m.status)}`}>{m.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Integration APIs health checks */}
        <div className="col-span-12 lg:col-span-5 space-y-4">
          <Card className="p-4 border border-border bg-card space-y-4">
            <div className="border-b border-border/40 pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Integration API Connector Logs</h4></div>
            <div className="space-y-3 font-semibold text-xs text-slate-600">
              {externalApisHealth.map((api, i) => (
                <div key={i} className="flex justify-between items-center border-b border-border/30 pb-2 last:border-0 last:pb-0">
                  <div>
                    <div className="text-foreground text-xs font-bold">{api.name}</div>
                    <div className="text-xs text-slate-400 font-normal">Type: {api.type} · Delay: {api.delay} · Uptime: {api.uptime}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded font-mono ${statusBadgeStyle(api.status)}`}>{api.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4 border border-border bg-card space-y-4">
            <div className="border-b border-border/40 pb-2"><h4 className="font-bold text-xs uppercase text-slate-500 tracking-wider font-display">Live System Workflow Queues</h4></div>
            <div className="space-y-3 font-mono text-xs text-slate-500">
              {liveSystemWorkflows.map((flow, i) => (
                <div key={i} className="flex justify-between items-center border-b border-border/20 pb-2 last:border-0 last:pb-0">
                  <div>
                    <div className="text-foreground font-sans font-bold text-xs">{flow.name}</div>
                    <div className="text-xs text-slate-400 font-normal mt-0.5">Frequency: {flow.type} · Success: {flow.success}</div>
                  </div>
                  <span className={`px-1.5 py-0.2 rounded font-bold ${flow.queue > 0 ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-400"}`}>
                    Queue: {flow.queue}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
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
                <div className="border-t border-border/40 mt-4 pt-3 flex items-center justify-between text-xs font-bold text-muted-foreground group-hover:text-foreground">
                  <span className="font-mono font-bold text-foreground">{mod.stats}</span>
                  <span className="flex items-center gap-0.5 text-ink group-hover:underline font-mono">Access <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Card>
            ))}
          </div>
        )}
        {activeTab === "overview" && renderOverview()}
        {activeTab === "graph" && renderGraph()}
        {activeTab === "insights" && renderInsights()}
        {activeTab === "risk" && renderRisk()}
        {activeTab === "cp-portal" && renderCpPortal()}
        {activeTab === "rbac" && renderRbac()}
        {activeTab === "dpdp" && renderDpdp()}
        {activeTab === "health" && renderHealth()}
      </div>
    </AppShell>
  );
}

function StatBox({ label, value, desc, color }: { label: string; value: string; desc: string; color: string }) {
  return (
    <Card className="p-4 flex flex-col justify-between relative min-h-24 border border-border bg-card">
      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 font-display">{label}</div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className={`font-display text-2xl font-bold tracking-tight font-mono ${color}`}>{value}</div>
        <span className="text-xs font-semibold text-muted-foreground">{desc}</span>
      </div>
    </Card>
  );
}
