import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AppShell, Card } from "../components/AppShell";
import { useState, useEffect, useMemo } from "react";
import {
  X,
  Bell,
  Sparkles,
  Download,
  ArrowUpRight,
  MessageCircle,
  Flame,
  Building2,
  MapPin,
  ChevronRight,
  Users,
  BarChart3,
  Clock,
  AlertTriangle,
  ShieldCheck,
  CheckSquare,
  FileText,
  HardDrive,
  TrendingUp,
  AlertOctagon,
  ArrowRight,
  UserCheck,
  Zap,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  ReferenceLine,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Real Estate AI Command Center" },
      {
        name: "description",
        content: "Live real estate operations command center dashboard for Indian developers.",
      },
    ],
  }),
  component: Dashboard,
});

// ─── MOCK DATA GLOBALS ──────────────────────────────────────────────────────
const initialPipelineLogs = [
  { time: "14:28", text: "Rajesh Patel → Negotiation stage ↑ (Priya Rana)" },
  { time: "13:45", text: "Priya Shah site visit confirmed Saturday" },
  { time: "12:30", text: "Deepak Trivedi — deal stuck 19 days ⚠️ Alert fired" },
  { time: "11:15", text: "Amit Desai — Booking Amount received ₹2.5L" },
  { time: "10:02", text: "New listing published: Greenview Heights 3BHK T-4" },
  { time: "09:17", text: "3 follow-up messages auto-sent via AI" },
];

const simulatedEventsPool = [
  { text: "Lead enriched: kunal.jain@gmail.com mapped to VP Sales" },
  { text: "WhatsApp qualification completed for Sneha Patel (Warm Lead)" },
  { text: "AVM run: Vesu 2BHK flat evaluated at ₹54.2 Lakhs" },
  { text: "RERA alert: QPR data compilation started for Greenview Heights" },
  { text: "Lead score updated: Ritu Bhandari score 55 → 71 (Active Browsing)" },
  { text: "Site visit auto-reminder sent to Vikram Joshi for Sunday" },
  { text: "Payment alert: Milestone reminder sent to Suresh Nair" },
  { text: "New inbound lead from 99acres: Manoj Shah (+91 99123 XXXXX)" }
];

// ─── ANIMATED COUNTER HELPER ───────────────────────────────────────────────
function AnimatedCounter({ value, duration = 1000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
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
  return <>{count.toLocaleString("en-IN")}</>;
}

// ─── RECHARTS CUSTOM TOOLTIP ──────────────────────────────────────────────
function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="glass p-3 border border-border/55 rounded-xl text-xs font-semibold shadow-lg text-foreground backdrop-blur-md">
        <p className="text-[9px] uppercase text-slate-400 font-bold mb-1">{label} Collection</p>
        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0E86E9]" />
            <span className="text-slate-500">Collected:</span>
            <span className="font-mono-jb text-[#0E86E9] font-bold text-xs">₹{payload[0].value} Cr</span>
          </div>
          {payload[0].payload && payload[0].payload.Target !== undefined && (
            <div className="flex items-center gap-1.5 border-t border-border/20 pt-1 mt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D85A30]" />
              <span className="text-slate-500">Target:</span>
              <span className="font-mono-jb text-[#D85A30] font-bold text-xs">₹{payload[0].payload.Target} Cr</span>
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
}

function Dashboard() {
  const navigate = useNavigate();

  const getInsightCategoryStyle = (cat: string) => {
    if (cat.includes("CRITICAL") || cat.includes("ALERT")) {
      return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20";
    }
    if (cat.includes("INTELLIGENCE") || cat.includes("SCORE")) {
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
    }
    if (cat.includes("FINANCIAL") || cat.includes("HEALTH")) {
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    }
    return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
  };

  // States
  const [timeStr, setTimeStr] = useState("");
  const [isAlertsOpen, setIsAlertsOpen] = useState(false);
  const [insightIndex, setInsightIndex] = useState(0);
  const [marketIndex, setMarketIndex] = useState(0);
  const [actionFilter, setActionFilter] = useState("All");

  // Custom interactive simulators states
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [whatsappMessages, setWhatsappMessages] = useState<Array<{ sender: "system" | "user" | "ai" | "ai-typing"; text: string; time: string }>>([
    { sender: "system", text: "Demo Chat Session. Click options below to simulate user messages.", time: "" },
    { sender: "ai", text: "Hello! Welcome to Fortiv Solutions 🏠 I'm happy to help you find your perfect home in Surat. May I ask your budget range?", time: "10:30 AM" }
  ]);
  const [chatStep, setChatStep] = useState(0);
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [livePipelineLogs, setLivePipelineLogs] = useState(initialPipelineLogs);

  // Live Activity Feed Ticking Effect (every 6 seconds for demo)
  useEffect(() => {
    const timer = setInterval(() => {
      const randomEvent = simulatedEventsPool[Math.floor(Math.random() * simulatedEventsPool.length)];
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      const timeStr = `${hh}:${mm}:${ss}`;
      
      setLivePipelineLogs(prev => [
        { time: timeStr, text: randomEvent.text },
        ...prev.slice(0, 5) // Keep last 6 items
      ]);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // WhatsApp chat handlers
  const handleSendMessage = (text: string, nextStep: number) => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    const timeStr = `${hh}:${min}`;

    setWhatsappMessages((prev) => [
      ...prev,
      { sender: "user", text, time: timeStr }
    ]);
    setChatStep(nextStep);
    setIsAiTyping(true);

    let aiText = "";
    if (nextStep === 1) {
      aiText = "Great budget range! We have some excellent options there. Which area do you prefer — Vesu, Adajan, or Pal?";
    } else if (nextStep === 2) {
      aiText = "Wonderful! Vesu is one of our fastest growing sectors. Are you looking for ready possession or under-construction properties?";
    } else if (nextStep === 3) {
      aiText = "Perfect! I'd like to recommend Fortiv Greenview Heights in Vesu — GJ RERA registered, G+14 towers, possession Dec 2026, starting at ₹48L. Would you like to schedule a site visit this weekend?";
    } else if (nextStep === 4) {
      aiText = "Site visit confirmed for Saturday 11:00 AM ✓ Our agent Priya Rana will meet you at the site showroom. Direct Location map sent. See you Saturday! 🙏";
    }

    setTimeout(() => {
      setIsAiTyping(false);
      setWhatsappMessages((prev) => [
        ...prev,
        { sender: "ai", text: aiText, time: timeStr }
      ]);
    }, 1200);
  };

  const handleResetChat = () => {
    setChatStep(0);
    setIsAiTyping(false);
    setWhatsappMessages([
      { sender: "system", text: "Demo Chat Session. Click options below to simulate user messages.", time: "" },
      { sender: "ai", text: "Hello! Welcome to Fortiv Solutions 🏠 I'm happy to help you find your perfect home in Surat. May I ask your budget range?", time: "10:30 AM" }
    ]);
  };

  // Dynamic ticking time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dd = String(now.getDate()).padStart(2, "0");
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const yyyy = now.getFullYear();
      const hh = String(now.getHours()).padStart(2, "0");
      const min = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setTimeStr(`${dd}/${mm}/${yyyy} ${hh}:${min}:${ss}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // 4s cycling loops
  useEffect(() => {
    const timer = setInterval(() => {
      setInsightIndex((prev) => (prev + 1) % aiInsights.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setMarketIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // MOCK DATA
  const consolidatedKPIs = [
    { label: "Leads & Qualification", value: 1247, sub: "12 Hot · ↑ 47 today", color: "#2E86AB", isNum: true },
    { label: "Active Deals Pipeline", value: "₹4.2 Cr", sub: "68 Active Deals · ↑ ₹0.3 Cr this week", color: "#1A3C5E", isNum: false },
    { label: "Revenue & Collections", value: "₹18.2 Cr", sub: "₹3.6 Cr this month · 74% rate", color: "#1D9E75", isNum: false },
    { label: "AI Conversations & Engagement", value: 3812, sub: "84 chats today · 8,234 runs", color: "#25D366", isNum: true },
  ];

  const moduleHealth = [
    { id: "M1", name: "Lead Generation", status: "Active", uptime: "99.8%", kpi: "47 leads today · 12 hot", path: "/leads" },
    { id: "M2", name: "Conversational AI", status: "Active", uptime: "99.9%", kpi: "84 convs · 12s avg", path: "/conversations" },
    { id: "M3", name: "Property Intelligence", status: "Active", uptime: "99.6%", kpi: "14 AVMs · 48 alerts", path: "/properties" },
    { id: "M4", name: "Sales Pipeline & CRM", status: "Active", uptime: "100%", kpi: "23 active · 6 in negotiation", path: "/pipeline" },
    { id: "M5", name: "Analytics & Forecasting", status: "Active", uptime: "99.4%", kpi: "84% accuracy · ₹1.84 Cr", path: "/analytics" },
    { id: "M7", name: "HR Pipeline", status: "Active", uptime: "99.2%", kpi: "38 candidates · 3 joining", path: "/hr" },
    { id: "M8", name: "Tenant Management", status: "Active", uptime: "99.7%", kpi: "42 units · ₹7.8L rent", path: "/tenants" },
    { id: "M9", name: "Construction Intel", status: "Active", uptime: "99.5%", kpi: "67% progress · 571 days left", path: "/projects" },
    { id: "M10", name: "Buyer Portal", status: "Active", uptime: "99.9%", kpi: "186 buyers · 18 payment overdue", path: "/buyers" },
    { id: "M11", name: "Finance & Revenue", status: "Active", uptime: "99.6%", kpi: "₹6.4 Cr outstanding · 74%", path: "/finance" },
    { id: "M12", name: "AI Brain & Security", status: "Active", uptime: "100%", kpi: "68 deals monitored · 0 breaches", path: "/ai-brain" },
  ];

  const primaryKPIs = [
    { label: "Hot Leads Right Now", value: "12", sub: "↑ 3 since yesterday", color: "text-[#D85A30]", pulse: true },
    { label: "Pipeline Value", value: "₹4.2 Cr", sub: "↑ ₹0.3 Cr this week", color: "text-[#1A3C5E] dark:text-[#89C4F8]", pulse: false },
    { label: "Revenue This Month", value: "₹3.6 Cr", sub: "✅ Above ₹3.0 Cr target", color: "text-[#1D9E75]", pulse: false },
    { label: "Collection Rate", value: "74%", sub: "₹6.4 Cr outstanding", color: "text-[#2E86AB]", pulse: false },
  ];

  const leadSources = [
    { name: "99acres", value: 28, color: "#1A3C5E" },
    { name: "Facebook Ads", value: 22, color: "#2E86AB" },
    { name: "MagicBricks", value: 15, color: "#1D9E75" },
    { name: "WhatsApp Organic", value: 12, color: "#25D366" },
    { name: "Housing.com", value: 9, color: "#E8A838" },
    { name: "Google Ads", value: 8, color: "#D85A30" },
    { name: "Referral / Other", value: 6, color: "#89C4F8" },
  ];

  const pipelineStages = [
    { stage: "Inquiry", deals: 8, value: "—", color: "bg-slate-400" },
    { stage: "Site Visit Scheduled", deals: 5, value: "—", color: "bg-blue-400" },
    { stage: "Visited", deals: 4, value: "₹0.9 Cr", color: "bg-indigo-400" },
    { stage: "Negotiation", deals: 6, value: "₹1.6 Cr", color: "bg-amber-500 animate-pulse" },
    { stage: "Booking Amount Paid", deals: 3, value: "₹0.8 Cr", color: "bg-emerald-500" },
    { stage: "Agreement Signed", deals: 2, value: "₹0.6 Cr", color: "bg-teal-500" },
    { stage: "Loan Processing", deals: 1, value: "₹0.3 Cr", color: "bg-cyan-600" },
  ];

  const pipelineLogs = [
    { time: "14:28", text: "Rajesh Patel → Negotiation stage ↑ (Priya Rana)" },
    { time: "13:45", text: "Priya Shah site visit confirmed Saturday" },
    { time: "12:30", text: "Deepak Trivedi — deal stuck 19 days ⚠️ Alert fired" },
    { time: "11:15", text: "Amit Desai — Booking Amount received ₹2.5L" },
    { time: "10:02", text: "New listing published: Greenview Heights 3BHK T-4" },
    { time: "09:17", text: "3 follow-up messages auto-sent via AI" },
  ];

  const projectPL = [
    { name: "Greenview Heights", margin: "28.6%", status: "On track", color: "bg-emerald-500" },
    { name: "Skyline Residences", margin: "30.6%", status: "On track", color: "bg-emerald-500" },
    { name: "Business Park", margin: "22.2%", status: "Margin pressure", color: "bg-amber-500" },
  ];

  const channelBreakdown = [
    { name: "WhatsApp AI Chatbot", conv: 36, pct: 42, color: "bg-[#25D366]" },
    { name: "Website Widget", conv: 18, pct: 21, color: "bg-[#2E86AB]" },
    { name: "Voice IVR", conv: 15, pct: 18, color: "bg-[#1A3C5E]" },
    { name: "Email AI", conv: 10, pct: 12, color: "bg-[#E8A838]" },
    { name: "Telegram", conv: 5, pct: 7, color: "bg-[#89C4F8]" },
  ];

  const marketPulse = [
    { loc: "Vesu, Surat", label: "Avg Price/Sq Ft", val: "₹4,850/sq ft", trend: "↑ +3.2% MoM", color: "text-emerald-500" },
    { loc: "Adajan, Surat", label: "Absorption Rate", val: "4.8 Months", trend: "↓ Tightening", color: "text-blue-500" },
    { loc: "Pal, Surat", label: "Avg Days on Market", val: "38 Days", trend: "↓ Faster sales", color: "text-emerald-500" },
  ];

  const constructionMilestones = [
    { phase: "Land Acquisition", progress: 100, status: "Complete" },
    { phase: "Design & Drawings", progress: 100, status: "Complete" },
    { phase: "RERA Registration", progress: 100, status: "Complete" },
    { phase: "Foundation", progress: 100, status: "Complete" },
    { phase: "Basement / Podium", progress: 100, status: "Complete" },
    { phase: "Structure Floors 1–8", progress: 100, status: "Complete" },
    { phase: "Structure Floors 9–14", progress: 74, status: "In Progress" },
    { phase: "Finishing — Block A", progress: 22, status: "At Risk" },
  ];

  const hrAgents = [
    { name: "Priya Rana", role: "Senior Agent", score: 91, leads: 18, conv: 6, isTop: true },
    { name: "Rahul Modi", role: "Sales Manager", score: 88, leads: 12, conv: 4, isTop: false },
    { name: "Kiran Desai", role: "Team Lead", score: 84, leads: 15, conv: 5, isTop: false },
    { name: "Ankit Shah", role: "Agent", score: 76, leads: 22, conv: 5, isTop: false },
    { name: "Meera Patel", role: "Agent", score: 71, leads: 20, conv: 3, isTop: false },
  ];

  const chartData = [
    { name: "Oct", Collected: 2.4, Target: 3.0 },
    { name: "Nov", Collected: 3.1, Target: 3.0 },
    { name: "Dec", Collected: 2.8, Target: 3.0 },
    { name: "Jan", Collected: 3.6, Target: 3.0 },
    { name: "Feb", Collected: 3.2, Target: 3.0 },
    { name: "Mar", Collected: 3.1, Target: 3.0 },
  ];

  const marketingChannels = [
    { name: "Referral", leads: 22, cpl: "₹0", spend: "₹0", conv: "27%" },
    { name: "WhatsApp Organic", leads: 18, cpl: "₹120", spend: "₹2,160", conv: "22%" },
    { name: "99acres", leads: 84, cpl: "₹380", spend: "₹31,920", conv: "8%" },
    { name: "Facebook Lead Ads", leads: 34, cpl: "₹312", spend: "₹10,608", conv: "9%" },
    { name: "Google Ads", leads: 18, cpl: "₹485", spend: "₹8,730", conv: "11%" },
  ];

  const aiInsights = [
    { cat: "LEAD INTELLIGENCE", text: "Deepak Trivedi deal stuck 19 days in Negotiation. Probability dropping. Recommend director-level intervention.", action: "Take Action" },
    { cat: "REVENUE ALERT", text: "₹1.5 Cr outstanding 90+ days — 5 buyers unresponsive. Escalate to legal notice workflow.", action: "Take Action" },
    { cat: "MARKET SIGNAL", text: "3BHK units in Tower B showing 40% slower absorption vs Tower A. Consider pricing scheme changes.", action: "Take Action" },
    { cat: "LEAD SCORE UPDATE", text: "Amit Desai score upgraded 61→74 (Warm→Hot). Brochure opened + 3 portal inquiries this week.", action: "Call Now" },
    { cat: "HR SIGNAL", text: "Senior Sales Agent position at 19-day open vacancy. Pipeline conversion declining in Adajan.", action: "Review Candidates" },
    { cat: "FINANCIAL INSIGHT", text: "Jan 2025 collections ₹3.6 Cr — highest in 6 months. Referral channel contributing 22% of new pipeline.", action: "View Analytics" },
  ];

  const highRiskDeals = [
    { name: "Deepak Trivedi", value: "₹82L", risk: 87, stage: "Negotiation", days: 19, status: "🔴 font-bold text-red-500 animate-pulse" },
    { name: "Ritu Bhandari", value: "₹52L", risk: 74, stage: "Negotiation", days: 11, status: "🟡 text-amber-500" },
    { name: "Mahesh Khanna", value: "₹98L", risk: 71, stage: "No WhatsApp Activity", days: 8, status: "🟡 text-amber-500" },
    { name: "Nilesh Trivedi", value: "₹3.2Cr", risk: 68, stage: "Commercial Cycle", days: 14, status: "🟡 text-amber-500" },
    { name: "Pooja Sharma", value: "₹57L", risk: 65, stage: "Cold", days: 6, status: "🟡 text-amber-500" },
  ];

  const actionsQueue = [
    { id: 2, priority: "Critical", text: "₹1.5 Cr 90+ day overdue — 5 buyers — escalate", module: "Finance & Revenue", owner: "Finance", deadline: "Immediate", pColor: "text-[#D85A30] bg-red-50 dark:bg-red-950/20 border-red-100 dark:border-red-900/50" },
    { id: 3, priority: "Critical", text: "Deepak Trivedi deal stuck 19 days — director call", module: "Sales & CRM", owner: "Rahul Modi", deadline: "Today", pColor: "text-[#D85A30] bg-red-50 dark:bg-red-950/20 border-red-100 dark:border-red-900/50" },
    { id: 5, priority: "High", text: "18 buyers with overdue payments — reminder sequence", module: "Buyer Portal", owner: "Finance", deadline: "Today", pColor: "text-orange-700 bg-orange-50 dark:bg-orange-950/20 border-orange-100 dark:border-orange-900/50" },
    { id: 6, priority: "Medium", text: "6 leases expiring in 60 days — renewal outreach", module: "Tenant Management", owner: "Ops", deadline: "This week", pColor: "text-amber-700 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/50" },
    { id: 9, priority: "Medium", text: "Senior Agent vacancy 19 days open — shortlist review", module: "HR Pipeline", owner: "HR", deadline: "This week", pColor: "text-amber-700 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/50" },
    { id: 10, priority: "Medium", text: "3 demand notes pending milestone confirmation", module: "Finance & Revenue", owner: "Finance", deadline: "This week", pColor: "text-amber-700 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/50" },
    { id: 11, priority: "Low", text: "3BHK Tower B slow absorption — pricing review", module: "Property Intel", owner: "Sales Mgr", deadline: "This week", pColor: "text-emerald-700 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/50" },
    { id: 12, priority: "Low", text: "Inventory Report — month-end data reconciliation", module: "Analytics & Forecast", owner: "Ops", deadline: "31/01/2025", pColor: "text-emerald-700 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/50" },
  ];

  // Filtering pending actions queue
  const filteredActions = useMemo(() => {
    if (actionFilter === "All") return actionsQueue;
    return actionsQueue.filter((act) => act.priority === actionFilter);
  }, [actionFilter]);

  return (
    <AppShell
      title={
        <div className="flex items-center gap-2">
          <span className="font-serif-display font-semibold tracking-tight text-foreground select-none">
            Real Estate AI Command Center
          </span>
        </div>
      }
      subtitle="Fortiv Solutions · fortivsolutions.in · Executive Build Status Panel"
      actions={
        <div className="flex flex-wrap items-center gap-3">
          {/* LIVE ticker status bar */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 px-3 py-1.5 rounded-full shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>LIVE · {timeStr || "Loading..."}</span>
          </div>

          {/* Alarm Bell Button */}
          <button
            onClick={() => setIsAlertsOpen(true)}
            className="h-9 px-3 rounded-lg border border-border bg-card hover:bg-muted text-[12px] font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer relative"
          >
            <Bell className="h-4 w-4 text-[#D85A30]" />
            <span className="bg-[#D85A30] text-white px-1.5 py-0.5 rounded text-[9px] font-mono font-bold">
              1 alert
            </span>
          </button>

          {/* User Profile display */}
          <div className="flex items-center gap-2 text-[12px] font-bold border border-border bg-card rounded-lg px-3 py-1.5 shadow-sm">
            <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 grid place-items-center text-[10px] font-bold font-mono">
              RM
            </div>
            <span className="text-slate-600 dark:text-slate-300 truncate max-w-[150px]">
              Rahul Modi (Sales Manager)
            </span>
          </div>
        </div>
      }
    >
      <div className="space-y-6 font-sans-dm relative z-10 animate-fade-in">
        {/* CONSOLIDATED KEY OPERATIONAL KPIs */}
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-display mb-2.5">
            Key Operational KPIs
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {consolidatedKPIs.map((kpi, i) => (
              <div
                key={i}
                className="submodule-card p-4 rounded-xl flex flex-col justify-between min-h-[108px] transition-all duration-300 relative overflow-hidden"
                style={{ borderTop: `3px solid ${kpi.color}` }}
              >
                <div>
                  <div className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 leading-snug">
                    {kpi.label}
                  </div>
                  <div className="mt-2 text-2xl font-bold font-mono-jb text-foreground">
                    {kpi.isNum ? <AnimatedCounter value={kpi.value as number} /> : kpi.value}
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-border/20 text-[9.5px] font-extrabold text-slate-500 flex justify-between items-center font-sans-dm">
                  <span>{kpi.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN BODY: 3-COLUMN ASYMMETRIC GRID */}
        <div className="grid grid-cols-12 gap-5">
          {/* COLUMN 1: lg:col-span-5 */}
          <div className="col-span-12 lg:col-span-5 space-y-5">
            {/* 5.1 Lead Acquisition Funnel */}
            <Card className="p-4 flex flex-col min-h-[300px]">
              <div className="flex items-start justify-between border-b border-border/40 pb-2 mb-3">
                <div>
                  <h3 className="text-sm font-bold text-foreground font-display">
                    Lead Acquisition Funnel
                  </h3>
                </div>
                <button
                  onClick={() => navigate({ to: "/leads" })}
                  className="text-[9.5px] font-bold text-[#0E86E9] hover:underline"
                >
                  View Details →
                </button>
              </div>

              <div className="grid grid-cols-12 gap-4 flex-1 items-center">
                {/* Funnel chart (left 7 cols) */}
                <div className="col-span-7 space-y-2">
                  {[
                    { label: "Captured", val: 47, pct: 100, color: "bg-[#1A3C5E]" },
                    { label: "Enriched", val: 38, pct: 81, color: "bg-[#2E86AB]" },
                    { label: "AI Scored", val: 38, pct: 100, color: "bg-[#1D9E75]" },
                    { label: "Hot (75+)", val: 12, pct: 32, color: "bg-[#D85A30]" },
                    { label: "Warm (40+)", val: 23, pct: 61, color: "bg-[#E8A838]" },
                    { label: "Cold (0-39)", val: 3, pct: 8, color: "bg-slate-400" },
                  ].map((row, idx) => (
                    <div key={idx} className="space-y-0.5 text-[10.5px]">
                      <div className="flex justify-between font-semibold">
                        <span className="text-slate-500">{row.label}</span>
                        <span className="font-mono-jb">
                          {row.val} <span className="text-[9px] font-normal text-slate-400">({row.pct}%)</span>
                        </span>
                      </div>
                      <div className="h-2 bg-secondary/40 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${row.color}`}
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Donut chart (right 5 cols) */}
                <div className="col-span-5 flex flex-col items-center">
                  <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={leadSources}
                          cx="50%"
                          cy="50%"
                          innerRadius={28}
                          outerRadius={45}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {leadSources.map((entry, idx) => (
                            <Cell key={`cell-${idx}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1 text-center">
                    Lead Sources
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/40 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-slate-500 font-medium">
                <div>
                  Enrichment Time <strong className="block text-foreground font-mono-jb">91s</strong>
                </div>
                <div>
                  Avg AI Score <strong className="block text-foreground font-mono-jb">68</strong>
                </div>
                <div>
                  Response Time <strong className="block text-foreground font-mono-jb">&lt; 60s</strong>
                </div>
                <div>
                  Duplicates Merged <strong className="block text-foreground font-mono-jb">3</strong>
                </div>
              </div>
            </Card>

            {/* 5.4 AI Conversations & Engagement */}
            <Card className="p-4 flex flex-col min-h-[280px]">
              <div className="flex items-start justify-between border-b border-border/40 pb-2 mb-3">
                <div>
                  <h3 className="text-sm font-bold text-foreground font-display">
                    AI Conversations & Engagement
                  </h3>
                </div>
                <button
                  onClick={() => navigate({ to: "/conversations" })}
                  className="text-[9.5px] font-bold text-[#0E86E9] hover:underline"
                >
                  Configure AI →
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-500">
                <div className="p-3 bg-secondary/20 rounded-xl border border-border/30">
                  <div className="text-[9px] uppercase tracking-wider text-slate-400">
                    Active Convs Now
                  </div>
                  <div className="text-xl font-bold font-mono-jb text-[#0E86E9] mt-1 animate-pulse">
                    6
                  </div>
                </div>
                <div className="p-3 bg-secondary/20 rounded-xl border border-border/30">
                  <div className="text-[9px] uppercase tracking-wider text-slate-400">
                    Today's Conversations
                  </div>
                  <div className="text-xl font-bold font-mono-jb text-foreground mt-1">
                    84
                  </div>
                </div>
              </div>

              {/* Stacked bar breakdown */}
              <div className="mt-4 space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  <span>Channel breakdown</span>
                  <span>WhatsApp: 42%</span>
                </div>
                <div className="h-2.5 rounded-full overflow-hidden flex bg-secondary/40">
                  {channelBreakdown.map((ch, idx) => (
                    <div
                      key={idx}
                      className={`h-full ${ch.color}`}
                      style={{ width: `${ch.pct}%` }}
                      title={`${ch.name}: ${ch.conv} convs (${ch.pct}%)`}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[9.5px] text-slate-400 font-bold mt-1">
                  {channelBreakdown.slice(0, 3).map((ch, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <span className={`h-1.5 w-1.5 rounded-full ${ch.color}`} />
                      {ch.name.split(" ")[0]}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/40 text-[10px] text-slate-500 flex justify-between font-medium">
                <span>
                  Missed Call Recovery: <strong>18 → 14 recovered</strong>
                </span>
                <span className="font-mono-jb text-emerald-600 font-bold">
                  77.7% rate
                </span>
              </div>
              <button
                onClick={() => setIsWhatsAppOpen(true)}
                className="mt-3 w-full h-8 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer shrink-0"
              >
                <MessageCircle className="h-4 w-4" /> Simulate WhatsApp Chat Bot
              </button>
            </Card>
          </div>

          {/* COLUMN 2: lg:col-span-4 */}
          <div className="col-span-12 lg:col-span-4 space-y-5">
            {/* 5.2 Sales Pipeline Kanban */}
            <Card className="p-4 flex flex-col min-h-[300px]">
              <div className="flex items-start justify-between border-b border-border/40 pb-2 mb-3">
                <div>
                  <h3 className="text-sm font-bold text-foreground font-display">
                    Sales Pipeline Summary
                  </h3>
                </div>
                <button
                  onClick={() => navigate({ to: "/pipeline" })}
                  className="text-[9.5px] font-bold text-[#0E86E9] hover:underline"
                >
                  CRM Board →
                </button>
              </div>

              <div className="space-y-2 flex-1">
                {pipelineStages.slice(2, 6).map((stage, idx) => (
                  <div key={idx} className="flex items-center justify-between text-[11px] font-medium p-1.5 hover:bg-secondary/20 rounded-lg transition-colors">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${stage.color}`} />
                      <span className="text-slate-600 dark:text-slate-400 font-semibold">{stage.stage}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono-jb text-foreground font-bold">{stage.deals} deals</span>
                      <span className="font-mono-jb text-slate-400 font-bold w-14 text-right">{stage.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-secondary/10 dark:bg-slate-950/20 border border-border/30 rounded-xl p-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center justify-between">
                  <span>Today's Pipeline Activity Feed</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="space-y-1.5 max-h-28 overflow-y-auto scrollbar-none pr-1">
                  {livePipelineLogs.slice(0, 4).map((log) => (
                    <div key={log.text + log.time} className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed flex items-start gap-1 animate-fade-in py-0.5 border-b border-border/5 last:border-0">
                      <span className="font-mono-jb text-[#0E86E9] shrink-0 font-bold">{log.time}</span>
                      <span className="truncate">{log.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* 5.5 Property Intelligence & Market Pulse */}
            <Card className="p-4 flex flex-col min-h-[280px]">
              <div className="flex items-start justify-between border-b border-border/40 pb-2 mb-3">
                <div>
                  <h3 className="text-sm font-bold text-foreground font-display">
                    Property Intel & Market Pulse
                  </h3>
                </div>
                <button
                  onClick={() => navigate({ to: "/properties" })}
                  className="text-[9.5px] font-bold text-[#0E86E9] hover:underline"
                >
                  Market Data →
                </button>
              </div>

              {/* Dynamic Market Pulse Ticker (cycles every 4 seconds) */}
              <div className="p-3 bg-[#0E86E9]/5 dark:bg-[#0E86E9]/10 border border-[#0E86E9]/20 rounded-xl min-h-[76px] flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10.5px]">
                  <span className="font-bold text-[#0E86E9]">{marketPulse[marketIndex].loc}</span>
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[9px]">
                    {marketPulse[marketIndex].label}
                  </span>
                </div>
                <div className="flex justify-between items-baseline mt-2">
                  <div className="text-base font-bold font-mono-jb text-foreground">
                    {marketPulse[marketIndex].val}
                  </div>
                  <span className={`text-[10px] font-bold ${marketPulse[marketIndex].color}`}>
                    {marketPulse[marketIndex].trend}
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-2.5 text-xs font-semibold text-slate-500 flex-1 justify-center flex flex-col">
                <div className="flex justify-between border-b border-border/30 pb-1.5">
                  <span>AVMs Run Today</span>
                  <span className="font-mono-jb text-foreground font-bold">14 runs</span>
                </div>
                <div className="flex justify-between border-b border-border/30 pb-1.5">
                  <span>Active Buyer Alerts</span>
                  <span className="font-mono-jb text-foreground font-bold">48 alert rules</span>
                </div>
                <div className="flex justify-between pb-0.5">
                  <span>Matches Triggered Today</span>
                  <span className="font-mono-jb text-[#0E86E9] font-bold">9 matches</span>
                </div>
              </div>
            </Card>
          </div>

          {/* COLUMN 3: lg:col-span-3 */}
          <div className="col-span-12 lg:col-span-3 space-y-5">
            {/* 5.3 Finance P&L stack */}
            <Card className="p-4 flex flex-col min-h-[600px]">
              <div className="flex items-start justify-between border-b border-border/40 pb-2 mb-3">
                <div>
                  <h3 className="text-sm font-bold text-foreground font-display">
                    Project P&L Snapshot
                  </h3>
                </div>
                <button
                  onClick={() => navigate({ to: "/finance" })}
                  className="text-[9.5px] font-bold text-[#0E86E9] hover:underline"
                >
                  Accounts →
                </button>
              </div>

              <div className="space-y-3 flex-1 justify-center flex flex-col">
                {projectPL.map((proj, idx) => (
                  <div key={idx} className="p-2.5 bg-secondary/15 dark:bg-slate-900/10 rounded-xl border border-border/30 text-xs">
                    <div className="flex justify-between items-center font-bold">
                      <span className="text-foreground truncate">{proj.name}</span>
                      <span className="font-mono-jb text-[#0E86E9]">{proj.margin}</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1.5 text-[10px] text-slate-500 font-semibold">
                      <span className={`h-1.5 w-1.5 rounded-full ${proj.color}`} />
                      {proj.status}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-border/40 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Collection & Cash Inflows
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 font-semibold">Inflow Target (Q1)</span>
                      <span className="font-mono-jb text-foreground font-bold">₹9.0 Cr</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 font-semibold">Collected to Date</span>
                      <span className="font-mono-jb text-[#1D9E75] font-bold">₹6.4 Cr</span>
                    </div>
                    <div className="w-full bg-secondary/40 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-[#1D9E75] h-1.5 rounded-full" style={{ width: "71%" }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Outstanding Recovery
                  </h4>
                  <div className="space-y-2.5">
                    <div className="p-2.5 bg-red-500/5 dark:bg-red-950/10 border border-red-500/20 rounded-xl">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-500">Overdue (90+ Days)</span>
                        <span className="font-mono-jb text-red-600 dark:text-red-400 font-bold">₹1.5 Cr</span>
                      </div>
                      <p className="text-[9.5px] text-slate-400 mt-1 font-medium">5 buyers unresponsive. Escalate notice workflow.</p>
                    </div>
                    <div className="p-2.5 bg-amber-500/5 dark:bg-amber-950/10 border border-amber-500/20 rounded-xl">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-500">Milestone Due (30 Days)</span>
                        <span className="font-mono-jb text-amber-600 dark:text-amber-400 font-bold">₹4.9 Cr</span>
                      </div>
                      <p className="text-[9.5px] text-slate-400 mt-1 font-medium">18 buyers with pending construction triggers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* MAIN BODY PART 2: MORE MODULES SUMMARY DETAILS */}
        <div className="grid grid-cols-12 gap-5">
          {/* Construction Progress Panel */}
          <Card className="col-span-12 lg:col-span-5 p-4">
            <div className="flex items-start justify-between border-b border-border/40 pb-2 mb-3">
              <div>
                <h3 className="text-sm font-bold text-foreground font-display">
                  Construction Milestones
                </h3>
              </div>
              <button
                onClick={() => navigate({ to: "/projects" })}
                className="text-[9.5px] font-bold text-[#0E86E9] hover:underline"
              >
                Uptime Dashboard →
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-500 mb-4">
              <div>
                Statutory Approvals <strong className="block text-foreground font-mono-jb">3 Pending</strong>
              </div>
              <div>
                Days to Possession <strong className="block text-foreground font-mono-jb">571 Days</strong>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-border/20 pb-1.5">
                Phase Milestone Progress (Tower Heights)
              </div>
              <div className="space-y-2 max-h-36 overflow-y-auto scrollbar-none pr-1">
                {constructionMilestones.slice(5).map((mile, i) => (
                  <div key={i} className="text-[10.5px]">
                    <div className="flex justify-between font-semibold mb-1">
                      <span className="text-slate-500">{mile.phase}</span>
                      <span className="font-mono-jb">{mile.progress}% ({mile.status})</span>
                    </div>
                    <div className="h-1.5 bg-secondary/40 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          mile.status === "Complete"
                            ? "bg-emerald-500"
                            : mile.status === "At Risk"
                              ? "bg-red-500"
                              : "bg-blue-500"
                        }`}
                        style={{ width: `${mile.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Tenant, Buyer & Post-Sale Health */}
          <Card className="col-span-12 lg:col-span-4 p-4">
            <div className="flex items-start justify-between border-b border-border/40 pb-2 mb-3">
              <div>
                <h3 className="text-sm font-bold text-foreground font-display">
                  Tenant & Buyer Overview
                </h3>
              </div>
              <button
                onClick={() => navigate({ to: "/buyers" })}
                className="text-[9.5px] font-bold text-[#0E86E9] hover:underline"
              >
                Portal Data →
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-500 mb-4">
              <div className="p-3 bg-secondary/25 dark:bg-slate-950/20 border border-border/30 rounded-xl">
                <div className="text-[9px] uppercase tracking-wider text-slate-400">
                  Portfolio NPS
                </div>
                <div className="text-xl font-bold font-mono-jb text-[#1D9E75] mt-1">
                  74
                </div>
              </div>
              <div className="p-3 bg-secondary/25 dark:bg-slate-950/20 border border-border/30 rounded-xl">
                <div className="text-[9px] uppercase tracking-wider text-slate-400">
                  Buyer Portal Active
                </div>
                <div className="text-xl font-bold font-mono-jb text-[#2E86AB] mt-1">
                  40%
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs font-semibold text-slate-500">
              <div className="flex justify-between border-b border-border/30 pb-1.5">
                <span>Leases Expiring (60 days)</span>
                <span className="font-mono-jb text-[#D85A30] font-bold">6 leases</span>
              </div>
              <div className="flex justify-between border-b border-border/30 pb-1.5">
                <span>Payments Overdue</span>
                <span className="font-mono-jb text-[#D85A30] font-bold">18 buyers</span>
              </div>
              <div className="flex justify-between pb-0.5">
                <span>Total Outstanding</span>
                <span className="font-mono-jb text-foreground font-bold">₹1.61 Cr</span>
              </div>
            </div>
          </Card>

          {/* HR Pipeline & Leaderboard */}
          <Card className="col-span-12 lg:col-span-3 p-4">
            <div className="flex items-start justify-between border-b border-border/40 pb-2 mb-3">
              <div>
                <h3 className="text-sm font-bold text-foreground font-display">
                  HR Leaderboard
                </h3>
              </div>
              <button
                onClick={() => navigate({ to: "/hr" })}
                className="text-[9.5px] font-bold text-[#0E86E9] hover:underline"
              >
                Hiring Funnel →
              </button>
            </div>

            <div className="space-y-2.5 max-h-[190px] overflow-y-auto scrollbar-none pr-1">
              {hrAgents.map((agent, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-xs p-1.5 hover:bg-secondary/20 rounded-lg transition-colors border border-transparent hover:border-border/30"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-slate-100 text-slate-700 grid place-items-center text-[9px] font-bold font-mono">
                      {agent.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-bold text-foreground flex items-center gap-1">
                        {agent.name}
                        {agent.isTop && (
                          <span className="text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-100 px-1 rounded animate-pulse">
                            ⭐ Top
                          </span>
                        )}
                      </div>
                      <div className="text-[9px] text-slate-400">{agent.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono-jb font-bold text-[#0E86E9]">{agent.score}</span>
                    <div className="text-[8.5px] text-slate-400 font-semibold">
                      {agent.conv}/{agent.leads} convs
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* SECTION 6: ANALYTICS & FORECASTING */}
        <Card className="p-5">
          <div className="flex items-start justify-between border-b border-border/40 pb-3 mb-4">
            <div>
              <h3 className="text-base font-bold text-foreground font-display">
                Analytics & ML Forecasting Dashboard
              </h3>
            </div>
            <button
              onClick={() => navigate({ to: "/analytics" })}
              className="text-[10px] font-bold text-[#0E86E9] hover:underline"
            >
              Intelligence View →
            </button>
          </div>

          <div className="grid grid-cols-12 gap-5">
            {/* 6.1 Revenue Forecast Chart (Left 7 cols) */}
            <div className="col-span-12 lg:col-span-7 space-y-4">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
                <div>
                  Predicted Revenue (Next 30D):{" "}
                  <strong className="text-[#1D9E75] font-mono-jb text-base block sm:inline font-bold">
                    ₹1.84 Cr
                  </strong>
                </div>
                <div>
                  Model Accuracy:{" "}
                  <strong className="text-foreground font-mono-jb block sm:inline font-bold">84%</strong>
                </div>
              </div>

              <div className="h-44 w-full text-xs">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 5, right: 5, left: -25, bottom: 5 }}>
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0E86E9" stopOpacity={1} />
                        <stop offset="100%" stopColor="#89C4F8" stopOpacity={0.3} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(107, 122, 141, 0.15)" />
                    <XAxis dataKey="name" stroke="#6B7A8D" fontSize={10} tickLine={false} />
                    <YAxis stroke="#6B7A8D" fontSize={10} tickLine={false} />
                    <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: "rgba(142, 181, 240, 0.05)" }} wrapperStyle={{ outline: "none" }} />
                    <ReferenceLine y={3.0} stroke="#D85A30" strokeDasharray="3 3" label={{ value: "Target", fill: "#D85A30", fontSize: 10, position: "top" }} />
                    <Bar dataKey="Collected" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* 6.2 Marketing ROI Table (Right 5 cols) */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Channel ROI Performance
              </div>
              <div className="overflow-x-auto scrollbar-none flex-1 justify-center flex flex-col">
                <table className="w-full text-left text-xs divide-y divide-border/60">
                  <thead className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold font-display">
                    <tr>
                      <th className="py-1.5">Channel</th>
                      <th className="py-1.5 text-right">Leads</th>
                      <th className="py-1.5 text-right">Cost/Lead</th>
                      <th className="py-1.5 text-right">Spend</th>
                      <th className="py-1.5 text-right">Conv%</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/20 text-foreground font-medium">
                    {marketingChannels.map((ch, i) => (
                      <tr key={i} className="hover:bg-secondary/10">
                        <td className="py-1.5 font-bold truncate max-w-[90px]">{ch.name}</td>
                        <td className="py-1.5 text-right font-mono-jb">{ch.leads}</td>
                        <td className="py-1.5 text-right font-mono-jb text-slate-400">{ch.cpl}</td>
                        <td className="py-1.5 text-right font-mono-jb font-bold">{ch.spend}</td>
                        <td className="py-1.5 text-right font-mono-jb text-emerald-600 font-bold">
                          {ch.conv}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>

        {/* SECTION 7: AI BRAIN & INTELLIGENCE LAYER */}
        <div className="grid grid-cols-12 gap-5">
          {/* 7.1 AI Insights Feed Carousel (Left 35%) */}
          <Card className="col-span-12 lg:col-span-4 p-5 flex flex-col justify-between min-h-[270px] relative overflow-hidden bg-card/45 border border-border/60 shadow-lg backdrop-blur-md transition-all duration-300">
            {/* Ambient Background Gradient for modern look */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-[30px] pointer-events-none" />

            <div className="flex justify-between items-center border-b border-border/20 pb-3 mb-3 relative z-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" /> 
                <span className="font-display">AI Insights Feed</span>
              </div>
              <div className="flex items-center gap-2">
                {/* Pulse light */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[10px] font-mono font-bold text-muted-foreground">
                  {insightIndex + 1} / {aiInsights.length}
                </span>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center text-left py-2.5 relative z-10 animate-fade-in" key={insightIndex}>
              <div className="flex items-center">
                <span className={`text-[9.5px] font-bold px-2.5 py-0.5 rounded-full border tracking-wide uppercase font-mono-jb ${getInsightCategoryStyle(aiInsights[insightIndex].cat)}`}>
                  {aiInsights[insightIndex].cat}
                </span>
              </div>
              <p className="text-sm font-semibold leading-relaxed font-sans-dm text-foreground mt-3">
                {aiInsights[insightIndex].text}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/20 relative z-10">
              {/* Pagination Dots */}
              <div className="flex gap-1.5 items-center">
                {aiInsights.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === insightIndex 
                        ? "w-4 bg-primary shadow-[0_0_6px_var(--primary)]" 
                        : "w-1.5 bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => alert(`Insight Action triggered: ${aiInsights[insightIndex].cat}`)}
                className="h-8 px-3.5 rounded-xl bg-primary hover:bg-primary/95 text-primary-foreground text-[10.5px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shrink-0 shadow-sm shadow-primary/10 cursor-pointer"
              >
                <span>{aiInsights[insightIndex].action}</span> 
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </Card>

          {/* 7.2 Risk Intelligence Summary (Centre 35%) */}
          <Card className="col-span-12 lg:col-span-5 p-4 flex flex-col justify-between min-h-[260px]">
            <div className="flex justify-between items-center border-b border-border/40 pb-2 mb-3">
              <div className="text-[9px] font-extrabold uppercase tracking-widest text-red-500 flex items-center gap-1">
                <AlertOctagon className="h-3 w-3 animate-pulse" /> Risk Intelligence Summary
              </div>
              <span className="text-[9.5px] font-mono-jb font-bold text-red-600 bg-red-50 dark:bg-red-950/20 px-2 py-0.5 rounded border border-red-100 dark:border-red-900/30 animate-pulse">
                1 Critical Deal At Risk
              </span>
            </div>

            <div className="overflow-x-auto scrollbar-none flex-1 justify-center flex flex-col">
              <table className="w-full text-left text-xs divide-y divide-border/60">
                <thead className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold font-display">
                  <tr>
                    <th>Buyer</th>
                    <th className="text-right">Value</th>
                    <th className="text-right">Risk Score</th>
                    <th className="text-right">Days stuck</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/20 text-foreground font-medium">
                  {highRiskDeals.slice(0, 3).map((deal, idx) => (
                    <tr key={idx} className="hover:bg-secondary/15">
                      <td className="py-2 font-bold">{deal.name}</td>
                      <td className="py-2 text-right font-mono-jb text-slate-400">{deal.value}</td>
                      <td className={`py-2 text-right font-mono-jb ${deal.status}`}>{deal.risk}</td>
                      <td className="py-2 text-right font-mono-jb">{deal.days} days</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* 7.3 System Health & Security (Right 30%) */}
          <Card className="col-span-12 lg:col-span-3 p-4 flex flex-col justify-between min-h-[260px]">
            <div className="flex justify-between items-center border-b border-border/40 pb-2 mb-3">
              <div className="text-[9px] font-extrabold uppercase tracking-widest text-[#2E86AB] flex items-center gap-1">
                <ShieldCheck className="h-3 w-3" /> Uptime & Security
              </div>
              <span className="text-[9.5px] font-mono-jb font-bold text-emerald-600">
                Scan Clean ✓
              </span>
            </div>

            <div className="space-y-2 flex-1 justify-center flex flex-col text-xs font-semibold text-slate-500">
              <div className="flex justify-between border-b border-border/20 pb-1 font-mono-jb">
                <span>Gemini API Uptime</span>
                <span className="text-emerald-500 font-bold">99.71%</span>
              </div>
              <div className="flex justify-between border-b border-border/20 pb-1 font-mono-jb">
                <span>Supabase Database</span>
                <span className="text-emerald-500 font-bold">99.99%</span>
              </div>
              <div className="flex justify-between border-b border-border/20 pb-1 font-mono-jb">
                <span>WhatsApp API</span>
                <span className="text-emerald-500 font-bold">99.83%</span>
              </div>
              <div className="flex justify-between pb-0.5">
                <span>Active User Sessions</span>
                <span className="text-foreground font-mono-jb font-bold">12 Active</span>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-border/40 text-[9.5px] text-slate-400 font-bold flex justify-between uppercase font-display">
              <span>DPDP Compliance</span>
              <span className="text-emerald-500 font-bold font-mono">Active ✅</span>
            </div>
          </Card>
        </div>

        {/* SECTION 8: PENDING ACTIONS QUEUE */}
        <Card className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/40 pb-3 mb-3 gap-2">
            <div>
              <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-slate-400">
                Unified Workflow Action Queue
              </span>
              <h3 className="text-sm font-bold text-foreground font-display">
                Pending Actions Queue ({filteredActions.length} Open)
              </h3>
            </div>
            {/* Filter buttons */}
            <div className="flex gap-1.5 flex-wrap">
              {["All", "Critical", "High", "Medium", "Low"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActionFilter(filter)}
                  className={`h-7 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                    actionFilter === filter
                      ? "bg-slate-800 dark:bg-slate-200 text-cream dark:text-ink border-transparent"
                      : "border-border text-slate-500 hover:bg-secondary"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-slate-400 text-[9px] uppercase tracking-wider font-display font-semibold">
                <tr>
                  <th className="px-3 py-2">Priority</th>
                  <th className="px-3 py-2">Action Required</th>
                  <th className="px-3 py-2">Module</th>
                  <th className="px-3 py-2">Owner</th>
                  <th className="px-3 py-2">Deadline</th>
                  <th className="px-3 py-2 text-right">Operation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/20 text-foreground font-medium bg-background/50">
                {filteredActions.map((act) => (
                  <tr key={act.id} className="hover:bg-secondary/10">
                    <td className="px-3 py-2.5">
                      <span className={`text-[9px] px-2 py-0.5 rounded-full font-mono font-bold uppercase border ${act.pColor}`}>
                        {act.priority}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 font-bold text-foreground truncate max-w-sm">
                      {act.text}
                    </td>
                    <td className="px-3 py-2.5 font-mono-jb text-slate-400">{act.module}</td>
                    <td className="px-3 py-2.5 text-slate-500 font-semibold">{act.owner}</td>
                    <td className="px-3 py-2.5 font-mono-jb text-foreground font-bold">{act.deadline}</td>
                    <td className="px-3 py-2.5 text-right">
                      <button
                        onClick={() => alert(`Navigating to handle action: ${act.text}`)}
                        className="h-6 px-2.5 rounded bg-[#0E86E9]/10 hover:bg-[#0E86E9] text-[#0E86E9] hover:text-white border border-[#0E86E9]/20 text-[9.5px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Resolve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* ALERTS SHEET DRAWER OVERLAY */}
      {isAlertsOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-80 h-full bg-card border-l border-border p-5 shadow-2xl relative animate-in slide-in-from-right duration-300 flex flex-col justify-between">
            <div>
              <button
                onClick={() => setIsAlertsOpen(false)}
                className="absolute top-4 right-4 h-7 w-7 rounded-full border border-border flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                aria-label="Close alerts panel"
              >
                <X className="h-4 w-4" />
              </button>
              <h3 className="text-base font-bold font-serif-display text-foreground mt-4 mb-4 flex items-center gap-2">
                <Bell className="h-4 w-4 text-[#D85A30]" /> System Notifications
              </h3>
              <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-140px)] pr-1 text-xs">
                <div className="p-3 rounded-lg border border-red-200 bg-red-50/50 dark:bg-red-950/20">
                  <div className="font-bold text-red-800 dark:text-red-300 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-red-500 rounded-full animate-pulse" />
                    🔴 Stuck Pipeline Deal
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mt-1 font-medium leading-relaxed">
                    Deepak Trivedi (₹82L value) is stuck in the Negotiation stage for 19 days. Risk score elevated to 87.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsAlertsOpen(false)}
              className="w-full h-9 mt-4 bg-slate-800 hover:bg-slate-900 text-cream dark:bg-slate-200 dark:hover:bg-white dark:text-ink rounded-lg text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
            >
              Acknowledge All
            </button>
          </div>
        </div>
      )}
      {/* WHATSAPP CHAT SIMULATOR DRAWER OVERLAY */}
      {isWhatsAppOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-96 h-full bg-card border-l border-border shadow-2xl relative animate-in slide-in-from-right duration-300 flex flex-col justify-between overflow-hidden">
            {/* WhatsApp Green Top Header */}
            <div className="bg-[#075E54] text-white p-4 flex items-center justify-between shadow-md shrink-0">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-100/20 text-white flex items-center justify-center font-bold text-base relative">
                  💬
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 border border-[#075E54] animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-sans">Fortiv AI Agent</h4>
                  <p className="text-[10px] text-emerald-200/80 font-medium">Online · Live Demo Simulator</p>
                </div>
              </div>
              <button
                onClick={() => setIsWhatsAppOpen(false)}
                className="h-8 w-8 rounded-full hover:bg-[#128C7E] flex items-center justify-center text-white cursor-pointer transition-colors"
                aria-label="Close simulator"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#E5DDD5] dark:bg-slate-950/40 pattern-grid-lg scrollbar-none hover-scrollbar">
              {whatsappMessages.map((msg, i) => {
                if (msg.sender === "system") {
                  return (
                    <div key={i} className="flex justify-center my-2">
                      <div className="bg-slate-500/10 dark:bg-slate-800/60 border border-slate-500/20 text-[10px] text-slate-500 dark:text-slate-400 font-bold py-1 px-3 rounded-full text-center max-w-[85%] uppercase tracking-wider font-mono">
                        {msg.text}
                      </div>
                    </div>
                  );
                }

                const isUser = msg.sender === "user";
                return (
                  <div
                    key={i}
                    className={`flex ${isUser ? "justify-end" : "justify-start"} animate-fade-in`}
                  >
                    <div
                      className={`max-w-[75%] rounded-2xl px-3 py-2 text-xs shadow-sm border ${
                        isUser
                          ? "bg-[#DCF8C6] dark:bg-emerald-950/60 text-slate-800 dark:text-slate-200 border-[#C7EDB1] dark:border-emerald-900/40 rounded-tr-none"
                          : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-white/20 dark:border-slate-800 rounded-tl-none"
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{msg.text}</div>
                      <div className={`text-[8px] text-right mt-1 font-semibold ${isUser ? "text-emerald-700/60 dark:text-emerald-400/50" : "text-slate-400/80"}`}>
                        {msg.time}
                      </div>
                    </div>
                  </div>
                );
              })}

              {isAiTyping && (
                <div className="flex justify-start animate-pulse">
                  <div className="max-w-[75%] bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-white/20 dark:border-slate-800 rounded-2xl rounded-tl-none px-3 py-2 text-xs shadow-sm flex items-center gap-1.5">
                    <span className="font-semibold text-slate-400">AI is typing</span>
                    <span className="flex gap-1">
                      <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Simulated Interactions Options Bar */}
            <div className="bg-card border-t border-border p-4 shrink-0 space-y-3 shadow-lg">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-between">
                <span>Simulation Controller</span>
                <span className="font-mono bg-secondary px-1.5 py-0.5 rounded text-[8.5px] text-slate-500 font-bold">Step {chatStep}/4</span>
              </div>

              {/* Options selection based on step */}
              <div className="space-y-2">
                {chatStep === 0 && !isAiTyping && (
                  <>
                    <button
                      onClick={() => handleSendMessage("My budget is ₹40L to ₹60L", 1)}
                      className="w-full text-left p-2.5 rounded-xl border border-[#0E86E9]/20 hover:border-[#0E86E9] hover:bg-[#0E86E9]/5 text-xs text-foreground font-semibold flex items-center justify-between transition-all"
                    >
                      <span>Simulate: "My budget is ₹40L to ₹60L"</span>
                      <ArrowRight className="h-3 w-3 text-[#0E86E9]" />
                    </button>
                    <button
                      onClick={() => handleSendMessage("My budget is ₹60L to ₹90L", 1)}
                      className="w-full text-left p-2.5 rounded-xl border border-[#0E86E9]/20 hover:border-[#0E86E9] hover:bg-[#0E86E9]/5 text-xs text-foreground font-semibold flex items-center justify-between transition-all"
                    >
                      <span>Simulate: "My budget is ₹60L to ₹90L"</span>
                      <ArrowRight className="h-3 w-3 text-[#0E86E9]" />
                    </button>
                  </>
                )}

                {chatStep === 1 && !isAiTyping && (
                  <>
                    <button
                      onClick={() => handleSendMessage("I prefer the Vesu area", 2)}
                      className="w-full text-left p-2.5 rounded-xl border border-[#0E86E9]/20 hover:border-[#0E86E9] hover:bg-[#0E86E9]/5 text-xs text-foreground font-semibold flex items-center justify-between transition-all"
                    >
                      <span>Simulate: "I prefer the Vesu area"</span>
                      <ArrowRight className="h-3 w-3 text-[#0E86E9]" />
                    </button>
                    <button
                      onClick={() => handleSendMessage("I prefer Adajan area", 2)}
                      className="w-full text-left p-2.5 rounded-xl border border-[#0E86E9]/20 hover:border-[#0E86E9] hover:bg-[#0E86E9]/5 text-xs text-foreground font-semibold flex items-center justify-between transition-all"
                    >
                      <span>Simulate: "I prefer Adajan area"</span>
                      <ArrowRight className="h-3 w-3 text-[#0E86E9]" />
                    </button>
                  </>
                )}

                {chatStep === 2 && !isAiTyping && (
                  <>
                    <button
                      onClick={() => handleSendMessage("Looking for Under-construction", 3)}
                      className="w-full text-left p-2.5 rounded-xl border border-[#0E86E9]/20 hover:border-[#0E86E9] hover:bg-[#0E86E9]/5 text-xs text-foreground font-semibold flex items-center justify-between transition-all"
                    >
                      <span>Simulate: "Under-construction preferred"</span>
                      <ArrowRight className="h-3 w-3 text-[#0E86E9]" />
                    </button>
                    <button
                      onClick={() => handleSendMessage("Ready possession preferred", 3)}
                      className="w-full text-left p-2.5 rounded-xl border border-[#0E86E9]/20 hover:border-[#0E86E9] hover:bg-[#0E86E9]/5 text-xs text-foreground font-semibold flex items-center justify-between transition-all"
                    >
                      <span>Simulate: "Ready possession preferred"</span>
                      <ArrowRight className="h-3 w-3 text-[#0E86E9]" />
                    </button>
                  </>
                )}

                {chatStep === 3 && !isAiTyping && (
                  <>
                    <button
                      onClick={() => handleSendMessage("Yes, please confirm site visit Saturday 11 AM", 4)}
                      className="w-full text-left p-2.5 rounded-xl border border-[#0E86E9]/20 hover:border-[#0E86E9] hover:bg-[#0E86E9]/5 text-xs text-foreground font-semibold flex items-center justify-between transition-all"
                    >
                      <span>Simulate: "Yes, confirm site visit Saturday 11 AM"</span>
                      <ArrowRight className="h-3 w-3 text-[#0E86E9]" />
                    </button>
                    <button
                      onClick={() => handleSendMessage("No, let me think about it", 4)}
                      className="w-full text-left p-2.5 rounded-xl border border-[#0E86E9]/20 hover:border-[#0E86E9] hover:bg-[#0E86E9]/5 text-xs text-foreground font-semibold flex items-center justify-between transition-all"
                    >
                      <span>Simulate: "No, let me think about it"</span>
                      <ArrowRight className="h-3 w-3 text-[#0E86E9]" />
                    </button>
                  </>
                )}

                {chatStep === 4 && !isAiTyping && (
                  <div className="p-3 bg-emerald-500/10 dark:bg-emerald-950/20 border border-emerald-500/20 text-emerald-800 dark:text-emerald-400 rounded-xl text-center text-xs font-semibold">
                    🎉 Customer qualified and site visit booked in CRM pipeline!
                  </div>
                )}

                {isAiTyping && (
                  <div className="p-3 bg-secondary/35 text-slate-400 rounded-xl text-center text-xs font-semibold">
                    Awaiting AI agent response...
                  </div>
                )}
              </div>

              {/* Reset simulator button */}
              <button
                onClick={handleResetChat}
                className="w-full h-9 bg-slate-800 hover:bg-slate-900 text-cream dark:bg-slate-200 dark:hover:bg-white dark:text-ink rounded-lg text-xs font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                Reset Simulation
              </button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
