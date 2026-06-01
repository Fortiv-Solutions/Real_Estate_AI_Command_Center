import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card } from "../components/AppShell";
import { useState, useEffect, useMemo } from "react";
import {
  ChevronLeft,
  ArrowRight,
  Users,
  Calendar,
  UserCheck,
  CreditCard,
  TrendingUp,
  Search,
  MessageCircle,
  AlertTriangle,
  CheckCircle,
  Clock,
  Send,
  Download,
  RefreshCw,
  Star,
  Activity,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  BarChart2,
  Award,
  Flag,
  X,
} from "lucide-react";

export const Route = createFileRoute("/hr")({
  head: () => ({ meta: [{ title: "HR Pipeline · Fortiv" }] }),
  component: HrManager,
});

type TabType =
  | "menu"
  | "overview"
  | "resume-screening"
  | "interview-scheduler"
  | "onboarding"
  | "payroll"
  | "performance"
  | "talent-sourcing"
  | "hr-chatbot";

// ─── MOCK DATA ───────────────────────────────────────────────────────────────

const employees = [
  { id: "EMP-2024-003", name: "Priya Rana", role: "Senior Agent", dept: "Sales — Vesu", gross: 62000, deductions: 9340, net: 52660, score: 88, label: "Top Performer", leads: 22, sla: 91, visits: 14, bookings: 4, revenue: "₹1.8Cr" },
  { id: "EMP-2023-001", name: "Rahul Modi", role: "Sales Manager", dept: "Sales", gross: 95000, deductions: 14250, net: 80750, score: 92, label: "Top Performer", leads: 8, sla: 100, visits: 6, bookings: 3, revenue: "₹2.4Cr" },
  { id: "EMP-2024-007", name: "Ankit Shah", role: "Sales Agent", dept: "Sales — Vesu", gross: 45000, deductions: 6750, net: 38250, score: 42, label: "Needs Attention", leads: 18, sla: 78, visits: 12, bookings: 0, revenue: "₹0" },
  { id: "EMP-2024-009", name: "Meera Patel", role: "Sales Agent", dept: "Sales — Gotri", gross: 45000, deductions: 6750, net: 38250, score: 68, label: "On Track", leads: 15, sla: 87, visits: 9, bookings: 2, revenue: "₹74L" },
  { id: "EMP-2023-005", name: "Kiran Desai", role: "Team Lead", dept: "Sales — Althan", gross: 72000, deductions: 10800, net: 61200, score: 76, label: "On Track", leads: 12, sla: 92, visits: 8, bookings: 2, revenue: "₹1.1Cr" },
];

const candidates = [
  { rank: 1, name: "Nikhil Mehta", current: "Sales Exec, XYZ Realty", expYrs: 4.5, ctcExp: "₹6.5L", score: 84, status: "Shortlisted", source: "Naukri", notice: 30, location: "Surat", green: ["Real estate background", "Local Surat market"], red: [] as string[] },
  { rank: 2, name: "Kavya Iyer", current: "Sr Agent, PropTech India", expYrs: 6, ctcExp: "₹8.2L", score: 79, status: "Shortlisted", source: "LinkedIn", notice: 45, location: "Surat", green: ["6 yrs RE experience", "Stable tenure"], red: [] as string[] },
  { rank: 3, name: "Rohan Shukla", current: "Team Lead, NoBroker", expYrs: 5, ctcExp: "₹9L", score: 76, status: "Shortlisted", source: "Shine", notice: 60, location: "Vadodara", green: ["Leadership experience", "RE background"], red: ["Relocation needed"] },
  { rank: 4, name: "Deepika Nair", current: "Sales Exec, HDFC Realty", expYrs: 3, ctcExp: "₹5.8L", score: 71, status: "Shortlisted", source: "Naukri", notice: 30, location: "Surat", green: ["HDFC pedigree", "Local market"], red: [] as string[] },
  { rank: 5, name: "Suraj Patil", current: "Telecaller, MagicBricks", expYrs: 2, ctcExp: "₹4.2L", score: 58, status: "Borderline", source: "Indeed", notice: 15, location: "Surat", green: ["Immediate joiner"], red: ["2 yrs RE only", "Low CTC band"] },
  { rank: 6, name: "Ananya Kapoor", current: "HR Executive", expYrs: 0, ctcExp: "₹5.0L", score: 31, status: "Rejected", source: "Email", notice: 30, location: "Mumbai", green: [] as string[], red: ["No RE experience", "Location mismatch"] },
  { rank: 7, name: "Pratik Shah", current: "Fresher", expYrs: 0, ctcExp: "₹3.0L", score: 18, status: "Rejected", source: "Email", notice: 0, location: "Surat", green: [] as string[], red: ["No experience", "Below CTC band"] },
];

const interviews = [
  { date: "Mon 13 Jan", time: "10:00 AM", candidate: "Rohan Shukla", round: "R2 — Manager", interviewer: "Rahul Modi", status: "Completed" },
  { date: "Tue 14 Jan", time: "11:00 AM", candidate: "Kavya Iyer", round: "R1 — HR", interviewer: "HR Manager", status: "Confirmed" },
  { date: "Wed 15 Jan", time: "11:00 AM", candidate: "Nikhil Mehta", round: "R1 — HR", interviewer: "HR Manager", status: "Scheduled" },
  { date: "Wed 15 Jan", time: "3:00 PM", candidate: "Suraj Patil", round: "R1 — HR", interviewer: "HR Manager", status: "Scheduled" },
  { date: "Thu 16 Jan", time: "10:00 AM", candidate: "Deepika Nair", round: "R1 — HR", interviewer: "HR Manager", status: "Scheduled" },
  { date: "Fri 17 Jan", time: "2:00 PM", candidate: "Kavya Iyer", round: "R2 — Manager", interviewer: "Rahul Modi", status: "Pending R1" },
];

const onboardingEmployees = [
  { name: "Nikhil Mehta", role: "Sr Sales Agent", id: "EMP-2025-012", joining: "20/01/2025", manager: "Rahul Modi", docs: 60, it: "Pending", idCard: "Ready", laptop: "Assigned", crm: "Pending", induction: "✅ 21 Jan 10:00 AM", status: "Pre-joining", docsPending: ["Educational Certificates", "Address Proof", "Photographs", "Emergency Contact", "Declaration Form"], docsReceived: ["Salary Slips", "Aadhaar Card", "PAN Card", "Bank Account Details"] },
  { name: "Pooja Iyer", role: "Telecaller", id: "EMP-2025-011", joining: "15/01/2025", manager: "Kiran Desai", docs: 100, it: "Done", idCard: "Ready", laptop: "N/A", crm: "Done", induction: "✅ Done", status: "Week 1", docsPending: [] as string[], docsReceived: ["All 10 documents"] },
  { name: "Sagar Trivedi", role: "Site Manager", id: "EMP-2025-010", joining: "06/01/2025", manager: "Rahul Modi", docs: 100, it: "Done", idCard: "Ready", laptop: "Assigned", crm: "Done", induction: "✅ Done", status: "Month 1", docsPending: [] as string[], docsReceived: ["All 10 documents"] },
];

const sourcedCandidates = [
  { name: "Sneha Kapoor", current: "Sales Executive", employer: "PropTech India", exp: 3.5, ctcEst: "₹5.2L", loc: "Surat", platform: "Naukri", score: 73, outreach: "Message Sent", response: "Interested", role: "Senior Sales Agent — Vesu" },
  { name: "Jayesh Thakkar", current: "Relationship Manager", employer: "Square Yards", exp: 4, ctcEst: "₹6.0L", loc: "Vadodara", platform: "LinkedIn", score: 69, outreach: "Message Sent", response: "No Response", role: "Senior Sales Agent — Vesu" },
  { name: "Ritu Sharma", current: "Telecaller", employer: "BPO India", exp: 2, ctcEst: "₹3.5L", loc: "Vadodara", platform: "Naukri", score: 62, outreach: "Message Sent", response: "Interested", role: "Telecaller — Vadodara" },
  { name: "Mihir Raval", current: "Site Supervisor", employer: "L&T Constructions", exp: 6, ctcEst: "₹7.8L", loc: "Surat", platform: "Shine", score: 81, outreach: "Not Contacted", response: "—", role: "Site Supervisor" },
  { name: "Nisha Patel", current: "Digital Marketer", employer: "RE Agency Pvt Ltd", exp: 3, ctcEst: "₹5.0L", loc: "Surat", platform: "LinkedIn", score: 76, outreach: "Message Sent", response: "Interested", role: "Digital Marketing Exec" },
];

const openRoles = [
  { role: "Senior Sales Agent — Vesu", found: 34, shortlisted: 8, contacted: 6, interested: 3 },
  { role: "Telecaller — Vadodara", found: 28, shortlisted: 5, contacted: 5, interested: 2 },
  { role: "Site Supervisor", found: 19, shortlisted: 4, contacted: 3, interested: 1 },
  { role: "Digital Marketing Exec", found: 22, shortlisted: 6, contacted: 4, interested: 2 },
];

const chatMessages = [
  { from: "employee", name: "Ankit Shah", text: "How many casual leaves do I have left?", time: "09:14 AM" },
  { from: "bot", text: "Hi Ankit! Let me check your leave balance.\n\n📋 Your Leave Balance — January 2025:\n├── Casual Leave:    4 remaining (of 12)\n├── Sick Leave:      8 remaining (of 12)\n├── Earned Leave:    6 remaining (of 18)\n└── Comp Off:        1 pending approval\n\nWould you like to apply for leave? Say \"Apply leave [dates]\".", time: "09:14 AM" },
  { from: "employee", name: "Ankit Shah", text: "Apply leave 14 and 15 February", time: "09:16 AM" },
  { from: "bot", text: "✅ Leave request raised!\n\n📋 Leave Request #LR-2025-088\n├── Type:   Casual Leave (2 days)\n├── Dates:  14–15 Feb 2025 (Fri–Sat)\n└── Status: Sent to Rahul Modi for approval\n\nYou'll receive a WhatsApp confirmation once approved.\nRemaining CL after approval: 2 days.", time: "09:16 AM" },
];

const queryLog = [
  { time: "09:14 AM", employee: "Ankit Shah", query: "Leave balance enquiry", category: "Leave", resolved: "Bot" },
  { time: "09:31 AM", employee: "Meera Patel", query: "Applied leave 14–15 Feb", category: "Leave Action", resolved: "Bot" },
  { time: "10:02 AM", employee: "Priya Rana", query: "Petrol reimbursement limit", category: "Reimbursement", resolved: "Bot" },
  { time: "10:45 AM", employee: "Kiran Desai", query: "Appraisal cycle dates", category: "Appraisal", resolved: "Bot" },
  { time: "11:20 AM", employee: "Ankit Shah", query: "Salary advance process", category: "Finance", resolved: "HR" },
  { time: "02:15 PM", employee: "New Joiner", query: "Notice period for probation", category: "Policy", resolved: "Bot" },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function StatBox({ label, value, desc, color }: { label: string; value: string; desc: string; color: string }) {
  return (
    <Card className="p-4 flex flex-col justify-between min-h-24 border border-border bg-card">
      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-display">{label}</div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className={`font-display text-2xl font-bold tracking-tight font-mono ${color}`}>{value}</div>
        <span className="text-[9px] font-semibold text-muted-foreground">{desc}</span>
      </div>
    </Card>
  );
}

const scoreColor = (score: number) =>
  score >= 80 ? "text-emerald-600" : score >= 60 ? "text-[#2E86AB]" : score >= 40 ? "text-[#E8A838]" : "text-[#D85A30]";

const scoreBg = (score: number) =>
  score >= 80 ? "bg-emerald-50 border-emerald-200" : score >= 60 ? "bg-blue-50 border-blue-200" : score >= 40 ? "bg-amber-50 border-amber-200" : "bg-red-50 border-red-200";

const candidateStatusBadge = (status: string) => {
  if (status === "Shortlisted") return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (status === "Borderline") return "bg-amber-50 text-amber-700 border border-amber-100";
  if (status === "Rejected") return "bg-red-50 text-[#D85A30] border border-red-100";
  if (status === "Completed") return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (status === "Confirmed") return "bg-blue-50 text-blue-700 border border-blue-100";
  return "bg-slate-50 text-slate-500 border border-slate-200";
};

const performanceLabel = (label: string) => {
  if (label === "Top Performer") return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (label === "On Track") return "bg-blue-50 text-blue-700 border border-blue-100";
  if (label === "Needs Attention") return "bg-amber-50 text-amber-700 border border-amber-100";
  return "bg-red-50 text-[#D85A30] border border-red-100";
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

function HrManager() {
  const [activeTab, setActiveTab] = useState<TabType>("menu");

  const submodulesList = [
    { id: "overview", name: "HR Dashboard Overview", desc: "Hiring funnel, team performance snapshot, payroll status, and all open HR actions in one view.", stats: "7 actions pending", status: "Active" },
    { id: "resume-screening", name: "Resume Screening", desc: "AI-ranked candidate shortlists with score breakdowns, green/red flags, and bulk shortlisting actions.", stats: "142 screened today", status: "Active" },
    { id: "interview-scheduler", name: "Interview Scheduler", desc: "Automated calendar sync, WhatsApp invites, and candidate pipeline board from invite to outcome.", stats: "6 scheduled this week", status: "Active" },
    { id: "onboarding", name: "Onboarding Agent", desc: "Offer-to-Day-1 automated workflow with document collection, IT setup, and induction scheduling.", stats: "3 joiners active", status: "Active" },
    { id: "payroll", name: "Attendance & Payroll", desc: "Full payroll processing with statutory deductions, payslip generation, and Tally journal push.", stats: "₹14.2L processed", status: "Active" },
    { id: "performance", name: "Performance Tracking", desc: "Objective agent scorecards auto-pulled from CRM, with coaching flags and leaderboard.", stats: "Team avg: 73/100", status: "Active" },
    { id: "talent-sourcing", name: "Talent Sourcing", desc: "Proactive candidate sourcing across Naukri, LinkedIn, Shine with automated outreach tracking.", stats: "4 open roles", status: "Active" },
    { id: "hr-chatbot", name: "HR Policy Chatbot", desc: "RAG-powered chatbot resolving leave, payslip, policy, and reimbursement queries via WhatsApp.", stats: "80% deflection rate", status: "Active" },
  ];

  const getHeader = (): { title: string; subtitle: string } => {
    const map: Record<TabType, { title: string; subtitle: string }> = {
      menu: { title: "HR Pipeline Automation", subtitle: "A complete end-to-end HR automation system — from sourcing talent to processing payroll — designed specifically for the hiring demands of a growing real estate company." },
      overview: { title: "HR Dashboard Overview", subtitle: "Live view of hiring funnel, team performance, onboarding status, and open HR actions." },
      "resume-screening": { title: "Resume Screening", subtitle: "AI-ranked shortlists with score breakdowns, green/red flags, and bulk invite actions." },
      "interview-scheduler": { title: "Interview Scheduler", subtitle: "Automated coordination — calendar sync, WhatsApp invites, reminders, and outcome tracking." },
      onboarding: { title: "Onboarding Agent", subtitle: "Automated offer-to-Day-1 workflow with document collection, IT provisioning, and induction scheduling." },
      payroll: { title: "Attendance & Payroll", subtitle: "Full payroll cycle — attendance inputs, statutory deductions, payslip generation, Tally sync." },
      performance: { title: "Performance Tracking", subtitle: "Objective agent scorecards auto-pulled from M4 CRM, with leaderboard and AI coaching flags." },
      "talent-sourcing": { title: "Talent Sourcing", subtitle: "Proactive candidate discovery across Naukri, LinkedIn, and Shine with automated outreach." },
      "hr-chatbot": { title: "HR Policy Chatbot", subtitle: "RAG-powered internal chatbot resolving leave, payslip, policy, and reimbursement queries instantly." },
    };
    return map[activeTab];
  };

  const { title, subtitle } = getHeader();

  const dynamicTitle = activeTab === "menu" ? title : (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setActiveTab("menu")}
        className="group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95"
        aria-label="Back to HR menu"
      >
        <ChevronLeft className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>
      <span className="font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors" onClick={() => setActiveTab("menu")}>
        {title}
      </span>
    </div>
  );

  return (
    <AppShell title={dynamicTitle} subtitle={subtitle}>
      <div className="transition-all duration-300">
        {activeTab === "menu" && <RenderMenu list={submodulesList} onSelect={(id) => setActiveTab(id as TabType)} />}
        {activeTab === "overview" && <RenderOverview onNavigate={(id) => setActiveTab(id as TabType)} />}
        {activeTab === "resume-screening" && <RenderResumeScreening />}
        {activeTab === "interview-scheduler" && <RenderInterviewScheduler />}
        {activeTab === "onboarding" && <RenderOnboarding />}
        {activeTab === "payroll" && <RenderPayroll />}
        {activeTab === "performance" && <RenderPerformance />}
        {activeTab === "talent-sourcing" && <RenderTalentSourcing />}
        {activeTab === "hr-chatbot" && <RenderHrChatbot />}
      </div>
    </AppShell>
  );
}

// ─── PAGE 0: MENU ─────────────────────────────────────────────────────────────

function RenderMenu({ list, onSelect }: { list: typeof submodulesList extends never ? never : any[]; onSelect: (id: string) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 animate-in fade-in duration-300">
      {list.map((mod: any) => (
        <Card
          key={mod.id}
          onClick={() => onSelect(mod.id)}
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
  );
}

// ─── PAGE 1: OVERVIEW ─────────────────────────────────────────────────────────

function RenderOverview({ onNavigate }: { onNavigate: (id: string) => void }) {
  const funnelData = [
    { stage: "Sourced / Applied", count: 142, pct: 100 },
    { stage: "Screened (AI)", count: 38, pct: 27 },
    { stage: "Shortlisted", count: 12, pct: 8 },
    { stage: "Interview Scheduled", count: 8, pct: 6 },
    { stage: "Interview Done", count: 6, pct: 4 },
    { stage: "Offer Made", count: 4, pct: 3 },
    { stage: "Joined", count: 3, pct: 2 },
  ];

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <StatBox label="Open Positions" value="4" desc="Roles being hired" color="text-[#2E86AB]" />
        <StatBox label="Candidates in Pipeline" value="38" desc="Active across stages" color="text-[#1A3C5E]" />
        <StatBox label="Joining This Month" value="3" desc="Offer accepted" color="text-[#1D9E75]" />
        <StatBox label="Payroll Processed" value="₹14.2L" desc="Jan 2025 — Done ✓" color="text-[#1D9E75]" />
        <StatBox label="Pending HR Actions" value="7" desc="Awaiting attention" color="text-[#E8A838]" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Hiring Funnel */}
        <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card">
          <div className="flex items-center justify-between mb-3 border-b border-border/40 pb-2">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5 text-[#2E86AB]" /> Hiring Funnel
            </div>
            <button onClick={() => onNavigate("resume-screening")} className="text-[9px] font-bold text-primary hover:underline font-mono">View Candidates →</button>
          </div>
          <div className="space-y-2.5">
            {funnelData.map((row, i) => (
              <div key={i} className="flex items-center gap-3 text-xs">
                <div className="w-36 text-slate-500 font-semibold shrink-0 text-[10.5px]">{row.stage}</div>
                <div className="flex-1 h-5 bg-secondary/40 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${row.pct}%`, background: i === 0 ? "#1A3C5E" : i <= 2 ? "#2E86AB" : i <= 4 ? "#1D9E75" : "#E8A838" }}
                  />
                </div>
                <div className="w-8 font-mono font-bold text-foreground text-right text-[11px]">{row.count}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-2 border-t border-border/30 text-[9.5px] font-mono text-slate-400">
            142 resumes screened · 12 shortlisted · 130 rejected — processed in 13 minutes
          </div>
        </Card>

        {/* Team Performance Snapshot */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card">
          <div className="flex items-center justify-between mb-3 border-b border-border/40 pb-2">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-[#1D9E75]" /> Team Performance Snapshot
            </div>
            <button onClick={() => onNavigate("performance")} className="text-[9px] font-bold text-primary hover:underline font-mono">Full View →</button>
          </div>
          <div className="space-y-2.5 max-h-[260px] overflow-y-auto scrollbar-none pr-1">
            {employees.map((emp) => (
              <div key={emp.id} className={`p-2.5 rounded-xl border flex items-center gap-3 ${scoreBg(emp.score)}`}>
                <div className="relative h-10 w-10 shrink-0">
                  <svg viewBox="0 0 36 36" className="h-10 w-10 -rotate-90">
                    <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15.9155" fill="none" strokeWidth="3"
                      stroke={emp.score >= 80 ? "#1D9E75" : emp.score >= 60 ? "#2E86AB" : emp.score >= 40 ? "#E8A838" : "#D85A30"}
                      strokeDasharray={`${emp.score} ${100 - emp.score}`} strokeLinecap="round" />
                  </svg>
                  <span className={`absolute inset-0 flex items-center justify-center text-[10px] font-extrabold font-mono ${scoreColor(emp.score)}`}>{emp.score}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-foreground text-xs flex items-center gap-1.5">
                    {emp.name}
                    {emp.score >= 80 && <span className="text-[8px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full border border-emerald-200 animate-pulse">⭐ Top</span>}
                  </div>
                  <div className="text-[9.5px] text-slate-500 font-medium">{emp.role}</div>
                </div>
                <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono border ${performanceLabel(emp.label)}`}>{emp.label}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ─── PAGE 2: RESUME SCREENING ─────────────────────────────────────────────────

function RenderResumeScreening() {
  const [selectedCandidate, setSelectedCandidate] = useState(candidates[0]);
  const [bulkSelected, setBulkSelected] = useState<number[]>([]);
  const [role, setRole] = useState("Senior Sales Agent — Vesu");

  const toggleBulk = (rank: number) =>
    setBulkSelected(p => p.includes(rank) ? p.filter(r => r !== rank) : [...p, rank]);

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Total Applications" value="142" desc="All sources" color="text-[#1A3C5E]" />
        <StatBox label="Shortlisted (AI)" value="12" desc="Score ≥ 65" color="text-[#1D9E75]" />
        <StatBox label="Rejected" value="130" desc="Below threshold" color="text-[#D85A30]" />
        <StatBox label="Processing Time" value="13 min" desc="For 142 resumes" color="text-[#2E86AB]" />
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 items-center">
        <select value={role} onChange={e => setRole(e.target.value)} className="h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none text-xs font-bold focus:border-ring">
          {["Senior Sales Agent — Vesu", "Telecaller — Vadodara", "Site Supervisor", "Digital Marketing Exec"].map(r => <option key={r}>{r}</option>)}
        </select>
        <div className="flex gap-1.5">
          {["All", "Shortlisted", "Borderline", "Rejected"].map((f, i) => (
            <button key={f} className={`h-7 px-3 rounded-lg text-[10px] font-bold uppercase tracking-widest border transition-all ${i === 0 ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`}>{f}</button>
          ))}
        </div>
        {bulkSelected.length > 0 && (
          <button onClick={() => { alert(`Interview invites sent to ${bulkSelected.length} candidate(s).`); setBulkSelected([]); }}
            className="h-7 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-widest ml-auto flex items-center gap-1.5">
            <Send className="h-3 w-3" /> Send {bulkSelected.length} Invite{bulkSelected.length > 1 ? "s" : ""}
          </button>
        )}
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Candidate Table */}
        <Card className="col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card">
          <div className="p-3 bg-secondary/35 border-b border-border text-[10px] font-bold uppercase text-slate-500 font-display">Ranked Shortlist — {role}</div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3 py-2.5 w-8" />
                  <th className="px-3 py-2.5">#</th>
                  <th className="px-3 py-2.5">Candidate</th>
                  <th className="px-3 py-2.5">Current Role</th>
                  <th className="px-3 py-2.5 font-mono">Exp</th>
                  <th className="px-3 py-2.5 font-mono">CTC Exp</th>
                  <th className="px-3 py-2.5 font-mono">Score</th>
                  <th className="px-3 py-2.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30 bg-background font-medium text-foreground">
                {candidates.map(c => (
                  <tr key={c.rank} onClick={() => setSelectedCandidate(c)}
                    className={`hover:bg-secondary/15 cursor-pointer transition-colors ${selectedCandidate.rank === c.rank ? "bg-secondary/20" : ""}`}>
                    <td className="px-3 py-2.5">
                      {c.status === "Shortlisted" && (
                        <button onClick={e => { e.stopPropagation(); toggleBulk(c.rank); }}
                          className={`h-4 w-4 rounded border flex items-center justify-center transition-all ${bulkSelected.includes(c.rank) ? "bg-ink border-ink text-cream" : "border-border hover:border-ink"}`}>
                          {bulkSelected.includes(c.rank) && <span className="text-[8px] font-bold">✓</span>}
                        </button>
                      )}
                    </td>
                    <td className="px-3 py-2.5 font-mono font-bold text-slate-400">{c.rank}</td>
                    <td className="px-3 py-2.5">
                      <div className="font-bold text-foreground">{c.name}</div>
                      <div className="text-[9.5px] text-slate-400 font-mono">{c.source} · {c.location}</div>
                    </td>
                    <td className="px-3 py-2.5 text-slate-500">{c.current}</td>
                    <td className="px-3 py-2.5 font-mono">{c.expYrs} yrs</td>
                    <td className="px-3 py-2.5 font-mono font-bold">{c.ctcExp}</td>
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-12 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${c.score}%`, background: c.score >= 70 ? "#1D9E75" : c.score >= 50 ? "#E8A838" : "#D85A30" }} />
                        </div>
                        <span className={`font-mono font-extrabold text-[11px] ${scoreColor(c.score)}`}>{c.score}</span>
                      </div>
                    </td>
                    <td className="px-3 py-2.5">
                      <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${candidateStatusBadge(c.status)}`}>
                        {c.status === "Shortlisted" ? "✅ " : c.status === "Rejected" ? "❌ " : "⏳ "}{c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Score Breakdown */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card">
          <div className="flex items-center justify-between mb-3 border-b border-border/40 pb-2">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Score Breakdown</div>
            <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded font-mono ${candidateStatusBadge(selectedCandidate.status)}`}>{selectedCandidate.status}</span>
          </div>
          <div className="space-y-3">
            <div>
              <div className="font-display font-bold text-base text-foreground">{selectedCandidate.name}</div>
              <div className="text-[10px] text-slate-400 font-semibold">{selectedCandidate.current}</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 shrink-0">
                <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
                  <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.9155" fill="none" strokeWidth="3"
                    stroke={selectedCandidate.score >= 70 ? "#1D9E75" : selectedCandidate.score >= 50 ? "#E8A838" : "#D85A30"}
                    strokeDasharray={`${selectedCandidate.score} ${100 - selectedCandidate.score}`} strokeLinecap="round" />
                </svg>
                <span className={`absolute inset-0 flex items-center justify-center text-base font-extrabold font-mono ${scoreColor(selectedCandidate.score)}`}>{selectedCandidate.score}</span>
              </div>
              <div className="text-xs space-y-0.5 font-semibold text-slate-500">
                <div><span className="font-mono">{selectedCandidate.expYrs} yrs</span> experience</div>
                <div>Notice: <span className="font-mono font-bold text-foreground">{selectedCandidate.notice} days</span></div>
                <div>Location: <span className="font-bold text-foreground">{selectedCandidate.location}</span></div>
                <div>Source: <span className="font-bold text-foreground">{selectedCandidate.source}</span></div>
              </div>
            </div>
            <div className="bg-secondary/30 rounded-xl p-3 font-mono text-[10px] leading-relaxed text-foreground space-y-1 border border-border/40">
              <div className="font-bold uppercase tracking-wider text-slate-400 text-[9px] mb-2">WHY THIS SCORE:</div>
              {selectedCandidate.expYrs >= 3 && <div className="text-emerald-600">✓ {selectedCandidate.expYrs} years real estate experience        +{Math.round(selectedCandidate.expYrs * 4)}</div>}
              <div className="text-emerald-600">✓ CRM / sales skills matched                         +10</div>
              {selectedCandidate.location === "Surat" && <div className="text-emerald-600">✓ Location: Surat (no relocation required)             +10</div>}
              {selectedCandidate.notice <= 30 && <div className="text-emerald-600">✓ Notice period: {selectedCandidate.notice} days (acceptable)            +8</div>}
              {selectedCandidate.red.map((r, i) => <div key={i} className="text-[#D85A30]">✗ {r}</div>)}
            </div>
            {selectedCandidate.green.length > 0 && (
              <div className="space-y-1">
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Green Flags</div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCandidate.green.map((g, i) => <span key={i} className="text-[9.5px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">{g}</span>)}
                </div>
              </div>
            )}
            {selectedCandidate.red.length > 0 && (
              <div className="space-y-1">
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Red Flags</div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCandidate.red.map((r, i) => <span key={i} className="text-[9.5px] font-bold bg-red-50 text-[#D85A30] border border-red-200 px-2 py-0.5 rounded-full">{r}</span>)}
                </div>
              </div>
            )}
            {selectedCandidate.status === "Shortlisted" && (
              <button onClick={() => alert(`Interview invite sent to ${selectedCandidate.name} via WhatsApp.`)}
                className="w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all">
                Send Interview Invite
              </button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

// ─── PAGE 3: INTERVIEW SCHEDULER ─────────────────────────────────────────────

function RenderInterviewScheduler() {
  const [selectedStage, setSelectedStage] = useState("All");
  const [showWaMsg, setShowWaMsg] = useState<string | null>(null);
  const kanbanStages = ["Invite Sent", "Confirmed", "Completed", "Outcome"];
  const kanbanData: Record<string, { name: string; round: string; date: string; outcome?: string }[]> = {
    "Invite Sent": [
      { name: "Nikhil Mehta", round: "R1 HR", date: "15 Jan" },
      { name: "Deepika Nair", round: "R1 HR", date: "16 Jan" },
    ],
    "Confirmed": [
      { name: "Kavya Iyer", round: "R1 HR", date: "14 Jan" },
      { name: "Suraj Patil", round: "R1 HR", date: "16 Jan" },
    ],
    "Completed": [
      { name: "Rohan Shukla", round: "R1 HR", date: "11 Jan" },
      { name: "Kavya Iyer", round: "R2 Mgr", date: "13 Jan" },
    ],
    "Outcome": [
      { name: "Rohan Shukla", round: "R2", date: "", outcome: "✅ Cleared" },
      { name: "Ananya K", round: "R1", date: "", outcome: "❌ Rejected" },
    ],
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Invites Sent This Week" value="6" desc="All rounds" color="text-[#2E86AB]" />
        <StatBox label="Confirmed" value="2" desc="Candidates confirmed" color="text-[#1D9E75]" />
        <StatBox label="No Shows" value="0" desc="This week" color="text-[#1A3C5E]" />
        <StatBox label="Avg Response Time" value="3.2 hrs" desc="Invite to confirmation" color="text-[#E8A838]" />
      </div>

      <div className="flex items-center gap-1.5">
        {["All", "Invite Sent", "Confirmed", "Completed", "No Show"].map((s, i) => (
          <button key={s} onClick={() => setSelectedStage(s)} className={`h-7 px-3 rounded-lg text-[10px] font-bold uppercase tracking-widest border transition-all ${selectedStage === s ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`}>{s}</button>
        ))}
        <span className="ml-auto text-[9.5px] font-mono font-bold text-emerald-600 flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Google Calendar connected</span>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Kanban Pipeline Board */}
        <div className="col-span-12 lg:col-span-7 grid grid-cols-4 gap-3">
          {kanbanStages.map(stage => (
            <div key={stage} className="space-y-2">
              <div className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 font-display border-b border-border/40 pb-1.5">
                {stage} <span className="text-slate-300">({kanbanData[stage].length})</span>
              </div>
              {kanbanData[stage].map((c, i) => (
                <Card key={i} className="p-2.5 border border-border/70 bg-card text-xs space-y-1">
                  <div className="font-bold text-foreground">{c.name}</div>
                  <div className="text-[9.5px] text-slate-400 font-mono">{c.round}{c.date && ` · ${c.date}`}</div>
                  {c.outcome && <div className={`text-[9.5px] font-bold ${c.outcome.includes("✅") ? "text-emerald-600" : "text-[#D85A30]"}`}>{c.outcome}</div>}
                </Card>
              ))}
            </div>
          ))}
        </div>

        {/* Schedule + WhatsApp preview */}
        <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card flex flex-col gap-3">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display border-b border-border/40 pb-2">Week Schedule — 13–17 Jan 2025</div>
          <div className="space-y-2 overflow-y-auto max-h-[260px] scrollbar-none pr-1">
            {interviews.map((iv, i) => (
              <div key={i} className={`p-2.5 rounded-xl border text-xs flex items-start gap-2.5 ${iv.status === "Completed" ? "border-emerald-200 bg-emerald-50/30" : iv.status === "Confirmed" ? "border-blue-200 bg-blue-50/20" : iv.status.includes("Pending") ? "border-slate-200 bg-slate-50/20" : "border-border bg-background"}`}>
                <div className="shrink-0 text-center min-w-[54px]">
                  <div className="font-mono font-bold text-foreground text-[10px]">{iv.date}</div>
                  <div className="font-mono text-[9px] text-slate-400">{iv.time}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-foreground">{iv.candidate}</div>
                  <div className="text-[9.5px] text-slate-500 font-semibold">{iv.round} · {iv.interviewer}</div>
                </div>
                <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono shrink-0 ${candidateStatusBadge(iv.status)}`}>{iv.status}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border/40 pt-3">
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-2">WhatsApp Slot Offer Preview</div>
            <div className="bg-[#ECF3EE] rounded-xl p-3 text-[10.5px] leading-relaxed text-slate-700 font-medium border border-emerald-100">
              <div className="font-bold text-slate-800 mb-1">Fortiv Solutions HR ·</div>
              <p>Hi Nikhil, thank you for applying for the Senior Sales Agent role at Fortiv Solutions. We'd like to invite you for a 30-minute HR interview. Please select one of the following time slots:</p>
              <p className="mt-1.5"><strong>Option 1:</strong> Wednesday 15 Jan · 11:00 AM<br /><strong>Option 2:</strong> Wednesday 15 Jan · 3:00 PM<br /><strong>Option 3:</strong> Thursday 16 Jan · 10:00 AM</p>
              <p className="mt-1.5 text-slate-600">Reply with 1, 2, or 3 to confirm.</p>
              <div className="text-right text-[9px] text-slate-400 mt-1">14:31 ✓✓</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

// ─── PAGE 4: ONBOARDING ───────────────────────────────────────────────────────

function RenderOnboarding() {
  const [expanded, setExpanded] = useState<string | null>("Nikhil Mehta");

  const timeline = ["Offer Sent", "Offer Signed", "Docs Collecting", "Day 1", "Week 1", "Month 1", "Confirmed"];
  const stageMap: Record<string, number> = { "Pre-joining": 2, "Week 1": 4, "Month 1": 5 };

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Active Onboardings" value="3" desc="Joining in Jan 2025" color="text-[#2E86AB]" />
        <StatBox label="Avg Doc Completion" value="87%" desc="Across active joiners" color="text-[#1D9E75]" />
        <StatBox label="IT Setup Pending" value="1" desc="Nikhil Mehta" color="text-[#E8A838]" />
        <StatBox label="Pending Reminders Sent" value="3" desc="For docs collection" color="text-[#1A3C5E]" />
      </div>

      <div className="space-y-4">
        {onboardingEmployees.map(emp => {
          const isOpen = expanded === emp.name;
          const stageIdx = stageMap[emp.status] || 0;
          return (
            <Card key={emp.id} className="border border-border bg-card overflow-hidden">
              <div
                onClick={() => setExpanded(isOpen ? null : emp.name)}
                className="p-4 cursor-pointer hover:bg-secondary/10 flex items-center gap-4 transition-colors"
              >
                {/* Doc completion ring */}
                <div className="relative h-12 w-12 shrink-0">
                  <svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90">
                    <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15.9155" fill="none" strokeWidth="3"
                      stroke={emp.docs === 100 ? "#1D9E75" : emp.docs >= 60 ? "#E8A838" : "#D85A30"}
                      strokeDasharray={`${emp.docs} ${100 - emp.docs}`} strokeLinecap="round" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-extrabold font-mono text-foreground">{emp.docs}%</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="font-bold text-foreground text-sm">{emp.name}</div>
                    <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono border ${emp.status === "Month 1" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : emp.status === "Week 1" ? "bg-blue-50 text-blue-700 border-blue-100" : "bg-amber-50 text-amber-700 border-amber-100"}`}>{emp.status}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-semibold">{emp.role} · {emp.id} · Joining: {emp.joining}</div>
                  {/* Timeline rail */}
                  <div className="flex items-center gap-0.5 mt-2">
                    {timeline.map((t, i) => (
                      <div key={i} className="flex items-center gap-0.5">
                        <div className={`h-1.5 rounded-full transition-all ${i <= stageIdx ? "bg-ink" : "bg-slate-200"}`} style={{ width: i <= stageIdx ? "28px" : "20px" }} />
                        {i === stageIdx && <div className="h-2.5 w-2.5 rounded-full bg-ink border-2 border-white shadow-md" />}
                      </div>
                    ))}
                  </div>
                  <div className="text-[9px] font-mono text-slate-400 mt-0.5">Current: {timeline[stageIdx]}</div>
                </div>
                <div className="text-slate-400 shrink-0">
                  <ChevronLeft className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "-rotate-90" : "-rotate-180"}`} />
                </div>
              </div>
              {isOpen && (
                <div className="p-4 pt-0 border-t border-border/40 animate-in fade-in duration-200 grid grid-cols-2 gap-5">
                  {/* Documents */}
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-2">Document Collection</div>
                    <div className="space-y-1.5">
                      {emp.docsReceived.map((d, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                          <CheckCircle className="h-3.5 w-3.5 shrink-0" /> {d}
                        </div>
                      ))}
                      {emp.docsPending.map((d, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-amber-600">
                          <Clock className="h-3.5 w-3.5 shrink-0 animate-pulse" /> {d} — Pending
                        </div>
                      ))}
                    </div>
                    {emp.docsPending.length > 0 && (
                      <button onClick={() => alert(`WhatsApp reminder sent to ${emp.name} for ${emp.docsPending.length} pending documents.`)}
                        className="mt-2 h-7 px-3 rounded-lg border border-amber-300 text-amber-700 bg-amber-50 hover:bg-amber-100 text-[9.5px] font-bold uppercase tracking-widest">
                        Send Reminder
                      </button>
                    )}
                  </div>
                  {/* Setup Checklist */}
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-2">Setup Checklist</div>
                    <div className="space-y-1.5 text-xs font-semibold">
                      {[
                        { label: "Reporting Manager", val: emp.manager, ok: true },
                        { label: "ID Card", val: emp.idCard, ok: emp.idCard === "Ready" },
                        { label: "Laptop Assigned", val: emp.laptop, ok: emp.laptop === "Assigned" || emp.laptop === "N/A" },
                        { label: "IT / Email Setup", val: emp.it, ok: emp.it === "Done" },
                        { label: "CRM Access", val: emp.crm, ok: emp.crm === "Done" },
                        { label: "Induction", val: emp.induction, ok: true },
                      ].map((item, i) => (
                        <div key={i} className={`flex items-center justify-between ${item.ok ? "text-foreground" : "text-amber-600"}`}>
                          <span className="text-slate-500">{item.label}</span>
                          <span className={`font-bold font-mono text-[10px] ${item.ok ? "text-emerald-600" : "text-amber-600 animate-pulse"}`}>{item.val}</span>
                        </div>
                      ))}
                    </div>
                    {emp.status === "Pre-joining" && (
                      <button onClick={() => alert(`Day 1 automations triggered for ${emp.name}!`)}
                        className="mt-3 w-full h-7 rounded-lg bg-ink hover:bg-ink/90 text-cream text-[9.5px] font-bold uppercase tracking-widest transition-all">
                        Mark Day 1 Complete
                      </button>
                    )}
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {/* "Your First Day" WhatsApp */}
      <Card className="p-4 border border-border bg-card">
        <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-2">Automated "Your First Day" WhatsApp — Nikhil Mehta</div>
        <div className="bg-[#ECF3EE] rounded-xl p-4 text-[10.5px] leading-relaxed text-slate-700 font-medium border border-emerald-100 max-w-sm">
          <div className="font-bold text-slate-800 mb-1">Fortiv Solutions HR ·</div>
          <p>🎉 Welcome to Fortiv Solutions, Nikhil! We're excited to have you join us tomorrow.</p>
          <p className="mt-2">📍 Office: 204, Tower B, Greenview Complex, Vesu, Surat — 395007<br />
            ⏰ Reporting time: 9:30 AM<br />
            🚗 Parking: Available in basement (mention Fortiv Solutions)<br />
            👔 Dress code: Business casual<br />
            🙋 Ask for: Rahul Modi (Sales Manager)</p>
          <p className="mt-2 text-slate-600">See you tomorrow! Any questions? Reply here.</p>
          <div className="text-right text-[9px] text-slate-400 mt-1">Sent automatically on 19/01/2025 ✓✓</div>
        </div>
      </Card>
    </div>
  );
}

// ─── PAGE 5: PAYROLL ──────────────────────────────────────────────────────────

function RenderPayroll() {
  const [runProgress, setRunProgress] = useState(-1);
  const [runDone, setRunDone] = useState(false);
  const [runStep, setRunStep] = useState("");

  const triggerPayroll = () => {
    setRunProgress(0);
    setRunDone(false);
    setRunStep("READING BIOMETRIC ATTENDANCE DATA FOR JAN 2025...");
  };

  useEffect(() => {
    if (runProgress === -1 || runProgress >= 100) {
      if (runProgress >= 100) setRunDone(true);
      return;
    }
    const t = setTimeout(() => {
      setRunProgress(p => {
        const next = p + 10;
        if (next === 20) setRunStep("CALCULATING GROSS SALARIES (BASIC + HRA + ALLOWANCES + INCENTIVES)...");
        if (next === 40) setRunStep("APPLYING STATUTORY DEDUCTIONS: PF 12%, ESI 0.75%, PT ₹200...");
        if (next === 60) setRunStep("COMPUTING TDS FOR HIGH-EARNERS PER FORM 12B...");
        if (next === 80) setRunStep("GENERATING 28 PAYSLIP PDFs AND DISPATCHING VIA WHATSAPP...");
        if (next === 90) setRunStep("PUSHING SALARY JOURNAL ENTRIES TO TALLY PRIME...");
        return next;
      });
    }, 300);
    return () => clearTimeout(t);
  }, [runProgress]);

  const payrollData = employees.map(e => ({ ...e, status: e.name === "Nikhil Mehta" ? "⏳ Joining 20 Jan" : "✅ Processed" }));

  const totals = { gross: 319000, deductions: 47890, net: 271110, pfEmployer: 102600, esiEmployer: 18400, pt: 5600 };

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Total Employees" value="28" desc="January 2025" color="text-[#1A3C5E]" />
        <StatBox label="Total Gross Payroll" value="₹14.2L" desc="All employees" color="text-[#2E86AB]" />
        <StatBox label="Net Disbursement" value="₹12.07L" desc="After deductions" color="text-[#1D9E75]" />
        <StatBox label="Total Payroll Cost" value="₹15.47L" desc="Incl. employer contrib." color="text-[#E8A838]" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Payroll Table */}
        <Card className="col-span-12 lg:col-span-8 p-0 overflow-hidden border border-border bg-card">
          <div className="p-3 bg-secondary/35 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-xs text-foreground font-display">January 2025 — Employee Payroll</h3>
            <div className="flex items-center gap-2">
              {!runDone && <button onClick={triggerPayroll} disabled={runProgress >= 0 && runProgress < 100}
                className="h-7 px-3 rounded-lg bg-ink hover:bg-ink/90 text-cream text-[10px] font-bold uppercase tracking-widest disabled:opacity-50 flex items-center gap-1.5 transition-all">
                <RefreshCw className={`h-3 w-3 ${runProgress >= 0 && runProgress < 100 ? "animate-spin" : ""}`} />
                {runProgress >= 0 && runProgress < 100 ? `Running ${runProgress}%` : "Run Payroll"}
              </button>}
              {runDone && <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5" />Tally Journal Pushed</span>}
            </div>
          </div>
          {runProgress >= 0 && runProgress < 100 && (
            <div className="p-2.5 bg-amber-50 border-b border-amber-200 text-[9.5px] font-mono text-amber-700 font-semibold animate-pulse">{runStep}</div>
          )}
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Employee</th>
                  <th className="px-3.5 py-2.5">Designation</th>
                  <th className="px-3.5 py-2.5 font-mono">Gross</th>
                  <th className="px-3.5 py-2.5 font-mono">Deductions</th>
                  <th className="px-3.5 py-2.5 font-mono">Net Pay</th>
                  <th className="px-3.5 py-2.5">Status</th>
                  <th className="px-3.5 py-2.5">Payslip</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30 bg-background font-medium text-foreground">
                {payrollData.map(emp => (
                  <tr key={emp.id} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-3 font-bold">{emp.name}</td>
                    <td className="px-3.5 py-3 text-slate-500">{emp.role}</td>
                    <td className="px-3.5 py-3 font-mono font-bold">₹{emp.gross.toLocaleString("en-IN")}</td>
                    <td className="px-3.5 py-3 font-mono text-[#D85A30]">-₹{emp.deductions.toLocaleString("en-IN")}</td>
                    <td className="px-3.5 py-3 font-mono font-extrabold text-emerald-600">₹{emp.net.toLocaleString("en-IN")}</td>
                    <td className="px-3.5 py-3">
                      <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${emp.status.includes("✅") ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-amber-50 text-amber-700 border border-amber-100 animate-pulse"}`}>{emp.status}</span>
                    </td>
                    <td className="px-3.5 py-3">
                      {emp.status.includes("✅") && (
                        <button onClick={() => alert(`Payslip for ${emp.name} — Jan 2025 downloaded.`)} className="h-6 px-2 rounded border border-border hover:bg-secondary text-[9px] font-bold text-slate-500 flex items-center gap-1">
                          <Download className="h-3 w-3" /> PDF
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Payroll Summary + Challan */}
        <div className="col-span-12 lg:col-span-4 space-y-3">
          <Card className="p-4 border border-border bg-card font-mono text-xs">
            <div className="text-center font-display font-bold text-sm uppercase tracking-widest text-foreground mb-3 border-b border-border/40 pb-2">January 2025 Payroll Summary</div>
            {[
              { l: "Total Employees", v: "28" },
              { l: "Total Gross Payroll", v: "₹14,20,000" },
              { l: "Total Deductions", v: "₹2,13,000" },
              { l: "Total Net Disbursement", v: "₹12,07,000" },
            ].map((r, i) => (
              <div key={i} className={`flex justify-between py-1 ${i === 3 ? "border-t border-foreground/20 font-bold text-foreground" : "text-slate-500"}`}>
                <span className="font-sans font-semibold">{r.l}</span>
                <span className="font-bold text-foreground">{r.v}</span>
              </div>
            ))}
            <div className="text-[9px] uppercase tracking-wider text-slate-400 font-sans font-bold mt-2 pt-2 border-t border-border/40 mb-1">Employer Liabilities</div>
            {[
              { l: "Employer PF (12%)", v: "₹1,02,600" },
              { l: "Employer ESI (3.25%)", v: "₹18,400" },
              { l: "Professional Tax", v: "₹5,600" },
            ].map((r, i) => (
              <div key={i} className="flex justify-between py-0.5 text-slate-500">
                <span className="font-sans font-semibold">{r.l}</span>
                <span className="font-bold text-foreground">{r.v}</span>
              </div>
            ))}
            <div className="flex justify-between py-1.5 border-t-2 border-foreground/20 mt-2 font-bold text-foreground">
              <span className="font-display text-sm">TOTAL PAYROLL COST</span>
              <span className="font-display text-sm text-primary">₹15,46,600</span>
            </div>
            <div className="mt-2 pt-2 border-t border-border/40 space-y-1">
              <div className="flex justify-between text-emerald-600 font-bold text-[10px]"><span>Run Status</span><span>✅ Processed</span></div>
              <div className="flex justify-between text-emerald-600 font-bold text-[10px]"><span>Payslips Sent</span><span>28 / 28</span></div>
              <div className="flex justify-between text-emerald-600 font-bold text-[10px]"><span>Tally Entries</span><span>✅ Pushed</span></div>
            </div>
          </Card>
          <div className="grid grid-cols-3 gap-2">
            {[{ l: "PF Challan", c: "emerald" }, { l: "ESI Challan", c: "blue" }, { l: "PT Challan", c: "amber" }].map(b => (
              <button key={b.l} onClick={() => alert(`${b.l} downloaded.`)} className="h-8 rounded-lg border border-border hover:bg-secondary text-[9.5px] font-bold text-slate-600 uppercase tracking-widest flex items-center justify-center gap-1">
                <Download className="h-3 w-3" /> {b.l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sample Payslip */}
      <Card className="p-4 border border-border bg-card">
        <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-3">Sample Payslip — Priya Rana (Jan 2025)</div>
        <div className="font-mono text-[10.5px] text-foreground bg-secondary/30 rounded-xl p-4 border border-border/60 whitespace-pre max-w-xl">
{`╔══════════════════════════════════════════════════╗
║       FORTIV SOLUTIONS — SALARY SLIP             ║
║       fortivsolutions.in                         ║
╠══════════════════════════════════════════════════╣
║  Employee: Priya Rana       Month: January 2025  ║
║  ID: EMP-2024-003           Designation: Sr Agent ║
║  Department: Sales — Vesu   PAN: ABCDE1234F      ║
╠════════════════════════╦═════════════════════════╣
║  EARNINGS              ║  DEDUCTIONS             ║
╠════════════════════════╬═════════════════════════╣
║  Basic:     ₹31,000    ║  PF (Employee): ₹3,720  ║
║  HRA:       ₹12,400    ║  Prof. Tax:     ₹200    ║
║  Special:   ₹9,600     ║  TDS:           ₹5,420  ║
║  Incentive: ₹9,000     ║                         ║
╠════════════════════════╬═════════════════════════╣
║  GROSS:     ₹62,000    ║  TOTAL DED:   ₹9,340    ║
╠════════════════════════╩═════════════════════════╣
║             NET PAY: ₹52,660                     ║
╚══════════════════════════════════════════════════╝`}
        </div>
      </Card>
    </div>
  );
}

// ─── PAGE 6: PERFORMANCE ──────────────────────────────────────────────────────

function RenderPerformance() {
  const [selectedEmp, setSelectedEmp] = useState(employees[1]);
  const [period, setPeriod] = useState("This Month");
  const teamAvg = Math.round(employees.reduce((s, e) => s + e.score, 0) / employees.length);

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="flex items-center gap-3 flex-wrap">
        {["This Week", "This Month", "Q1 2025"].map(p => (
          <button key={p} onClick={() => setPeriod(p)} className={`h-7 px-3 rounded-lg text-[10px] font-bold uppercase tracking-widest border transition-all ${period === p ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`}>{p}</button>
        ))}
        <span className="ml-auto text-xs font-bold text-slate-500 font-mono">Team Average: <span className="text-foreground text-sm">{teamAvg}/100</span></span>
      </div>

      {/* Scorecard Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {employees.map(emp => (
          <Card key={emp.id} onClick={() => setSelectedEmp(emp)}
            className={`p-4 border cursor-pointer transition-all duration-200 hover:shadow-md flex flex-col items-center gap-2 ${selectedEmp.id === emp.id ? "border-ink shadow-[0_2px_12px_rgba(11,31,51,0.08)]" : "border-border"} bg-card`}>
            <div className="relative h-16 w-16">
              <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
                <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#e5e7eb" strokeWidth="3.5" />
                <circle cx="18" cy="18" r="15.9155" fill="none" strokeWidth="3.5"
                  stroke={emp.score >= 80 ? "#1D9E75" : emp.score >= 60 ? "#2E86AB" : emp.score >= 40 ? "#E8A838" : "#D85A30"}
                  strokeDasharray={`${emp.score} ${100 - emp.score}`} strokeLinecap="round" className="transition-all duration-700" />
              </svg>
              <span className={`absolute inset-0 flex items-center justify-center text-lg font-extrabold font-mono ${scoreColor(emp.score)}`}>{emp.score}</span>
            </div>
            <div className="text-center">
              <div className="font-bold text-foreground text-xs">{emp.name}</div>
              <div className="text-[9.5px] text-slate-500 font-medium">{emp.role}</div>
            </div>
            <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border font-mono ${performanceLabel(emp.label)} ${emp.score >= 80 ? "animate-pulse" : ""}`}>{emp.label}</span>
            <div className="w-full text-[9.5px] font-mono text-slate-400 text-center">{emp.revenue}</div>
          </Card>
        ))}
      </div>

      {/* Detail Drill-Down */}
      <div className="grid grid-cols-12 gap-5">
        <Card className="col-span-12 lg:col-span-8 p-4 border border-border bg-card">
          <div className="flex items-center justify-between mb-3 border-b border-border/40 pb-2">
            <div className="font-bold text-sm text-foreground font-display">{selectedEmp.name} — Performance Breakdown</div>
            <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono border ${performanceLabel(selectedEmp.label)}`}>{selectedEmp.label}</span>
          </div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3 py-2">Metric</th>
                  <th className="px-3 py-2 font-mono">Value</th>
                  <th className="px-3 py-2 font-mono">Benchmark</th>
                  <th className="px-3 py-2">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30 bg-background font-medium text-foreground">
                {[
                  { m: "Leads Assigned", v: selectedEmp.leads, b: "15–20", t: "▲" },
                  { m: "SLA Contact Rate", v: `${selectedEmp.sla}%`, b: "≥ 85%", t: selectedEmp.sla >= 85 ? "▲" : "▼" },
                  { m: "Site Visits Conducted", v: selectedEmp.visits, b: "10–15", t: "▲" },
                  { m: "Bookings Closed", v: selectedEmp.bookings, b: "2–4", t: selectedEmp.bookings >= 2 ? "▲" : "▼" },
                  { m: "Revenue Generated", v: selectedEmp.revenue, b: "₹1Cr+", t: "—" },
                  { m: "Follow-Up Compliance", v: "87%", b: "≥ 80%", t: "▲" },
                  { m: "WhatsApp Response", v: "12 min avg", b: "< 15 min", t: "▲" },
                  { m: "Composite Score", v: selectedEmp.score, b: teamAvg, t: selectedEmp.score > teamAvg ? "▲" : "▼" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-secondary/15">
                    <td className="px-3 py-2.5 font-bold">{row.m}</td>
                    <td className={`px-3 py-2.5 font-mono font-extrabold ${typeof row.v === "number" && row.v === 0 ? "text-[#D85A30]" : "text-foreground"}`}>{row.v}</td>
                    <td className="px-3 py-2.5 font-mono text-slate-400">{row.b}</td>
                    <td className={`px-3 py-2.5 font-mono font-bold text-sm ${row.t === "▲" ? "text-emerald-500" : row.t === "▼" ? "text-[#D85A30]" : "text-slate-400"}`}>{row.t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Coaching Flag */}
        <Card className="col-span-12 lg:col-span-4 p-4 border border-border bg-card">
          {selectedEmp.score < 60 ? (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs border-b border-amber-200 pb-2">
                <AlertTriangle className="h-4 w-4 animate-pulse" /> AI Coaching Flag
              </div>
              <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/40 font-mono text-[10px] text-foreground leading-relaxed whitespace-pre-wrap">
{`⚠️ COACHING FLAG — ${selectedEmp.name}

${selectedEmp.name} has conducted ${selectedEmp.visits} site visits 
this month but has not converted a single 
booking (0/${selectedEmp.visits}).

Industry benchmark: 1 in 4 visits converts.

Possible root cause:
• Closing skills gap — unable to handle 
  objections at site
• Price negotiation — not empowered to 
  offer flexibility
• Follow-up post-visit — only 2 of 
  ${selectedEmp.visits} visitors followed up within 24 hrs

Recommended action:
➜ Schedule 1:1 with Rahul Modi this week
➜ Shadow Priya Rana on next 3 site visits
➜ Role-play objection handling session`}
              </div>
              <button onClick={() => alert(`1:1 meeting scheduled between ${selectedEmp.name} and Rahul Modi.`)}
                className="w-full h-8 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold uppercase tracking-widest transition-all">
                Schedule Coaching 1:1
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs border-b border-emerald-200 pb-2">
                <Award className="h-4 w-4" /> Performance Status
              </div>
              <div className={`p-3 rounded-xl border font-mono text-[10px] text-foreground leading-relaxed whitespace-pre-wrap ${selectedEmp.score >= 80 ? "border-emerald-200 bg-emerald-50/40" : "border-blue-200 bg-blue-50/20"}`}>
{`✅ ${selectedEmp.score >= 80 ? "TOP PERFORMER" : "ON TRACK"}

${selectedEmp.name} is performing 
${selectedEmp.score >= 80 ? "above" : "within"} team benchmarks.

Key highlights:
• SLA Contact Rate: ${selectedEmp.sla}%
• Bookings: ${selectedEmp.bookings} this month
• Revenue: ${selectedEmp.revenue}

${selectedEmp.score >= 80 ? "Recognition recommended:\n➜ Top Performer bonus eligibility\n➜ Referral bonus this month\n➜ Mention in team stand-up" : "Continue standard 1:1 cadence.\nNo coaching flags active."}`}
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

// ─── PAGE 7: TALENT SOURCING ──────────────────────────────────────────────────

function RenderTalentSourcing() {
  const [selectedRole, setSelectedRole] = useState("Senior Sales Agent — Vesu");
  const filtered = sourcedCandidates.filter(c => c.role === selectedRole);

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Profiles Sourced (All)" value="103" desc="Across 4 open roles" color="text-[#1A3C5E]" />
        <StatBox label="Shortlisted (AI)" value="23" desc="Score ≥ 65" color="text-[#2E86AB]" />
        <StatBox label="Outreach Sent" value="18" desc="LinkedIn + WhatsApp" color="text-[#E8A838]" />
        <StatBox label="Interested / Responded" value="8" desc="Ready to interview" color="text-[#1D9E75]" />
      </div>

      {/* Role selector + search status */}
      <div className="flex flex-wrap items-center gap-3">
        <select value={selectedRole} onChange={e => setSelectedRole(e.target.value)} className="h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none text-xs font-bold focus:border-ring">
          {openRoles.map(r => <option key={r.role}>{r.role}</option>)}
        </select>
        <span className="text-[9.5px] font-bold text-emerald-600 flex items-center gap-1.5 font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active search running — last scan 47 min ago
        </span>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Sourced Candidates Table */}
        <Card className="col-span-12 lg:col-span-8 p-0 overflow-hidden border border-border bg-card">
          <div className="p-3 bg-secondary/35 border-b border-border text-[10px] font-bold uppercase text-slate-500 font-display">Sourced Profiles — {selectedRole}</div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Candidate</th>
                  <th className="px-3.5 py-2.5">Current</th>
                  <th className="px-3.5 py-2.5 font-mono">Exp</th>
                  <th className="px-3.5 py-2.5 font-mono">CTC Est</th>
                  <th className="px-3.5 py-2.5">Platform</th>
                  <th className="px-3.5 py-2.5 font-mono">Score</th>
                  <th className="px-3.5 py-2.5">Outreach</th>
                  <th className="px-3.5 py-2.5">Response</th>
                  <th className="px-3.5 py-2.5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30 bg-background font-medium text-foreground">
                {(filtered.length ? filtered : sourcedCandidates).map((c, i) => (
                  <tr key={i} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-3">
                      <div className="font-bold text-foreground">{c.name}</div>
                      <div className="text-[9.5px] font-mono text-slate-400">{c.loc}</div>
                    </td>
                    <td className="px-3.5 py-3 text-slate-500">{c.current} · {c.employer}</td>
                    <td className="px-3.5 py-3 font-mono">{c.exp} yrs</td>
                    <td className="px-3.5 py-3 font-mono font-bold">{c.ctcEst}</td>
                    <td className="px-3.5 py-3">
                      <span className="text-[9.5px] font-bold bg-secondary text-slate-600 border border-border px-2 py-0.5 rounded font-mono">{c.platform}</span>
                    </td>
                    <td className="px-3.5 py-3">
                      <span className={`font-mono font-extrabold text-[11px] ${scoreColor(c.score)}`}>{c.score}</span>
                    </td>
                    <td className="px-3.5 py-3">
                      <span className={`text-[9.5px] font-bold px-2 py-0.5 rounded font-mono border ${c.outreach === "Message Sent" ? "bg-blue-50 text-blue-700 border-blue-100" : "bg-slate-50 text-slate-500 border-slate-200"}`}>{c.outreach}</span>
                    </td>
                    <td className="px-3.5 py-3">
                      <span className={`text-[9.5px] font-bold px-2 py-0.5 rounded font-mono border ${c.response === "Interested" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : c.response === "No Response" ? "bg-amber-50 text-amber-700 border-amber-100" : "bg-slate-50 text-slate-400 border-slate-200"}`}>{c.response}</span>
                    </td>
                    <td className="px-3.5 py-3">
                      {c.response === "Interested" ? (
                        <button onClick={() => alert(`${c.name} added to hiring pipeline.`)} className="h-6 px-2 rounded bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-[9px] font-bold">Add to Pipeline</button>
                      ) : c.outreach === "Not Contacted" ? (
                        <button onClick={() => alert(`LinkedIn outreach sent to ${c.name}.`)} className="h-6 px-2 rounded border border-border hover:bg-secondary text-[9px] font-bold text-slate-500">Reach Out</button>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Role Sourcing Status */}
        <div className="col-span-12 lg:col-span-4 space-y-3">
          <Card className="p-4 border border-border bg-card">
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-3">Open Roles Sourcing Status</div>
            <div className="space-y-3.5">
              {openRoles.map((r, i) => (
                <div key={i} className={`p-2.5 rounded-xl border text-xs transition-all cursor-pointer ${selectedRole === r.role ? "border-ink bg-secondary/10" : "border-border bg-background hover:border-slate-300"}`}
                  onClick={() => setSelectedRole(r.role)}>
                  <div className="font-bold text-foreground mb-1.5">{r.role}</div>
                  <div className="grid grid-cols-4 gap-1 text-center">
                    {[{ l: "Found", v: r.found }, { l: "Listed", v: r.shortlisted }, { l: "Contacted", v: r.contacted }, { l: "Interested", v: r.interested }].map(s => (
                      <div key={s.l}>
                        <div className="font-mono font-extrabold text-foreground text-sm">{s.v}</div>
                        <div className="text-[8.5px] text-slate-400 font-semibold">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
          {/* LinkedIn outreach template */}
          <Card className="p-3 border border-border bg-card">
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-2">LinkedIn Outreach Template</div>
            <div className="bg-[#EEF3F8] rounded-xl p-3 text-[10px] leading-relaxed text-slate-700 font-medium border border-blue-100">
              <p className="font-bold text-slate-800 mb-1">Fortiv Solutions Recruiting</p>
              <p>Hi Sneha, I came across your profile and was impressed by your real estate sales experience in Surat. We're building a high-performance sales team at Fortiv Solutions and have an exciting opening for a Senior Sales Agent.</p>
              <p className="mt-1.5">We offer competitive CTC, strong incentives, and a structured growth path.</p>
              <p className="mt-1.5 text-slate-600">Would you be open to a quick 15-minute call this week?</p>
              <div className="text-right text-[9px] text-slate-400 mt-1">Auto-sent · 10/01/2025</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE 8: HR CHATBOT ───────────────────────────────────────────────────────

function RenderHrChatbot() {
  const [messages, setMessages] = useState(chatMessages);
  const [input, setInput] = useState("");
  const [employee, setEmployee] = useState("Ankit Shah");

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { from: "employee", name: employee, text: input, time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) };
    let botReply = "I've noted your query. Let me check the relevant policy and get back to you shortly.";
    const lower = input.toLowerCase();
    if (lower.includes("leave balance") || lower.includes("cl") || lower.includes("casual")) {
      botReply = "📋 Your Leave Balance:\n├── Casual Leave:  4 remaining (of 12)\n├── Sick Leave:    8 remaining (of 12)\n└── Earned Leave:  6 remaining (of 18)\n\nTo apply, say: \"Apply leave [dates]\"";
    } else if (lower.includes("apply leave")) {
      botReply = "✅ Leave request raised!\n\n📋 Leave Request #LR-2025-089\n├── Type: Casual Leave (1 day)\n├── Status: Sent to Rahul Modi for approval\n\nYou'll be notified once approved.";
    } else if (lower.includes("payslip") || lower.includes("salary slip")) {
      botReply = "📄 Your January 2025 payslip has been sent to your registered WhatsApp and email.\n\nNet Pay: ₹38,250\nPayroll date: 31st January 2025";
    } else if (lower.includes("reimbursement") || lower.includes("petrol") || lower.includes("travel")) {
      botReply = "🚗 Travel Reimbursement Policy (Oct 2024):\n• Petrol: ₹8/km (own vehicle)\n• Auto/Taxi: Actual, max ₹500/trip\n• Outstation: ₹2,500/day\n\nSubmit claim form via HRMS within 7 days.";
    } else if (lower.includes("appraisal")) {
      botReply = "📊 Appraisal Cycle 2025:\n• Mid-year review: July 2025\n• Annual appraisal: March 2025\n• Increment effective: April 2025\n\nYour scores are pulled automatically from CRM (M4).";
    } else if (lower.includes("notice period")) {
      botReply = "📋 Notice Period Policy:\n• During probation (90 days): 15 days\n• After confirmation: 30 days\n• Senior roles (TL and above): 60 days";
    }
    const botMsg = { from: "bot", text: botReply, time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) };
    setMessages(p => [...p, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-300">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox label="Queries This Month" value="100" desc="All channels" color="text-[#1A3C5E]" />
        <StatBox label="Bot Resolved" value="80%" desc="Without HR intervention" color="text-[#1D9E75]" />
        <StatBox label="Escalated to HR" value="20" desc="Complex / sensitive" color="text-[#E8A838]" />
        <StatBox label="Avg Response Time" value="< 3 sec" desc="Chatbot reply" color="text-[#2E86AB]" />
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Chat Interface */}
        <Card className="col-span-12 lg:col-span-6 border border-border bg-card overflow-hidden flex flex-col">
          {/* WhatsApp-style header */}
          <div className="bg-[#075E54] p-3 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">HR</div>
            <div>
              <div className="text-white font-bold text-xs">Fortiv Solutions HR Bot</div>
              <div className="text-white/70 text-[9px] font-medium">Online · 24/7</div>
            </div>
            <select value={employee} onChange={e => setEmployee(e.target.value)} className="ml-auto bg-white/10 text-white text-[9px] rounded px-1.5 py-0.5 border border-white/20 outline-none font-bold">
              {employees.map(e => <option key={e.id} value={e.name}>{e.name}</option>)}
            </select>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-[#ECE5DD]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-[80%] rounded-xl px-3 py-2 text-[10.5px] leading-relaxed shadow-sm whitespace-pre-wrap font-medium ${msg.from === "bot" ? "bg-white text-slate-800 rounded-tl-none" : "bg-[#DCF8C6] text-slate-800 rounded-tr-none"}`}>
                  {msg.from === "employee" && <div className="text-[9px] font-bold text-[#075E54] mb-0.5">{(msg as any).name}</div>}
                  {msg.text}
                  <div className="text-right text-[9px] text-slate-400 mt-1">{msg.time} {msg.from === "employee" ? "✓✓" : ""}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Input */}
          <div className="p-2 bg-[#F0F0F0] flex gap-2 items-center border-t border-border">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 h-9 px-3 rounded-full bg-white border border-border/60 text-xs font-medium outline-none focus:border-[#075E54]"
            />
            <button onClick={sendMessage} className="h-9 w-9 rounded-full bg-[#075E54] hover:bg-[#128C7E] text-white flex items-center justify-center transition-all active:scale-95">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </Card>

        {/* Query Log + Policy KB */}
        <div className="col-span-12 lg:col-span-6 space-y-3">
          <Card className="p-0 overflow-hidden border border-border bg-card">
            <div className="p-3 bg-secondary/35 border-b border-border text-[10px] font-bold uppercase text-slate-500 font-display flex items-center justify-between">
              Today's Query Log
              <span className="text-emerald-600 font-mono font-extrabold">80% deflected by bot</span>
            </div>
            <div className="overflow-x-auto scrollbar-none">
              <table className="w-full text-left text-xs divide-y divide-border/60">
                <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                  <tr>
                    <th className="px-3 py-2.5 font-mono">Time</th>
                    <th className="px-3 py-2.5">Employee</th>
                    <th className="px-3 py-2.5">Query</th>
                    <th className="px-3 py-2.5">Category</th>
                    <th className="px-3 py-2.5">Resolved By</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30 bg-background font-medium text-foreground">
                  {queryLog.map((q, i) => (
                    <tr key={i} className="hover:bg-secondary/15">
                      <td className="px-3 py-2.5 font-mono text-slate-400">{q.time}</td>
                      <td className="px-3 py-2.5 font-bold">{q.employee}</td>
                      <td className="px-3 py-2.5 text-slate-500">{q.query}</td>
                      <td className="px-3 py-2.5 text-[9.5px]"><span className="bg-secondary border border-border px-2 py-0.5 rounded font-mono font-bold text-slate-600">{q.category}</span></td>
                      <td className="px-3 py-2.5">
                        <span className={`text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono border ${q.resolved === "Bot" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-amber-50 text-amber-700 border-amber-100 animate-pulse"}`}>
                          {q.resolved === "Bot" ? "✅ Bot" : "⏳ HR"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-4 border border-border bg-card">
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-3">Policy Knowledge Base</div>
            <div className="space-y-1.5">
              {[
                { doc: "Fortiv Solutions HR Manual v3.0", updated: "Dec 2024" },
                { doc: "Leave Policy 2025", updated: "Jan 2025" },
                { doc: "Travel & Expense Reimbursement Policy", updated: "Oct 2024" },
                { doc: "Code of Conduct", updated: "Jan 2024" },
                { doc: "Performance Appraisal Process 2025", updated: "Dec 2024" },
                { doc: "Salary Advance Policy", updated: "Jun 2024" },
                { doc: "Grievance Redressal Policy", updated: "Jan 2024" },
              ].map((kb, i) => (
                <div key={i} className="flex items-center justify-between text-xs font-semibold py-1 border-b border-border/30 last:border-0">
                  <span className="text-foreground">{kb.doc}</span>
                  <span className="font-mono text-slate-400 text-[9.5px] shrink-0 ml-3">{kb.updated}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Needed to avoid linting issues with the submodulesList type
const submodulesList: any[] = [];
