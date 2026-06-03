import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, C as Card } from "./AppShell-BaoefHhz.mjs";
import { e as Route$6 } from "./router-DmP4UeSu.mjs";
import { m as ChevronLeft, b as ArrowRight, A as Activity, a0 as TrendingUp, T as Send, q as CircleCheckBig, s as Clock, R as RefreshCw, t as Download, a1 as TriangleAlert, c as Award } from "../_libs/lucide-react.mjs";
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
const employees = [{
  id: "EMP-2024-003",
  name: "Priya Rana",
  role: "Senior Agent",
  dept: "Sales — Vesu",
  gross: 62e3,
  deductions: 9340,
  net: 52660,
  score: 88,
  label: "Top Performer",
  leads: 22,
  sla: 91,
  visits: 14,
  bookings: 4,
  revenue: "₹1.8Cr"
}, {
  id: "EMP-2023-001",
  name: "Rahul Modi",
  role: "Sales Manager",
  dept: "Sales",
  gross: 95e3,
  deductions: 14250,
  net: 80750,
  score: 92,
  label: "Top Performer",
  leads: 8,
  sla: 100,
  visits: 6,
  bookings: 3,
  revenue: "₹2.4Cr"
}, {
  id: "EMP-2024-007",
  name: "Ankit Shah",
  role: "Sales Agent",
  dept: "Sales — Vesu",
  gross: 45e3,
  deductions: 6750,
  net: 38250,
  score: 42,
  label: "Needs Attention",
  leads: 18,
  sla: 78,
  visits: 12,
  bookings: 0,
  revenue: "₹0"
}, {
  id: "EMP-2024-009",
  name: "Meera Patel",
  role: "Sales Agent",
  dept: "Sales — Gotri",
  gross: 45e3,
  deductions: 6750,
  net: 38250,
  score: 68,
  label: "On Track",
  leads: 15,
  sla: 87,
  visits: 9,
  bookings: 2,
  revenue: "₹74L"
}, {
  id: "EMP-2023-005",
  name: "Kiran Desai",
  role: "Team Lead",
  dept: "Sales — Althan",
  gross: 72e3,
  deductions: 10800,
  net: 61200,
  score: 76,
  label: "On Track",
  leads: 12,
  sla: 92,
  visits: 8,
  bookings: 2,
  revenue: "₹1.1Cr"
}];
const candidates = [{
  rank: 1,
  name: "Nikhil Mehta",
  current: "Sales Exec, XYZ Realty",
  expYrs: 4.5,
  ctcExp: "₹6.5L",
  score: 84,
  status: "Shortlisted",
  source: "Naukri",
  notice: 30,
  location: "Surat",
  green: ["Real estate background", "Local Surat market"],
  red: []
}, {
  rank: 2,
  name: "Kavya Iyer",
  current: "Sr Agent, PropTech India",
  expYrs: 6,
  ctcExp: "₹8.2L",
  score: 79,
  status: "Shortlisted",
  source: "LinkedIn",
  notice: 45,
  location: "Surat",
  green: ["6 yrs RE experience", "Stable tenure"],
  red: []
}, {
  rank: 3,
  name: "Rohan Shukla",
  current: "Team Lead, NoBroker",
  expYrs: 5,
  ctcExp: "₹9L",
  score: 76,
  status: "Shortlisted",
  source: "Shine",
  notice: 60,
  location: "Vadodara",
  green: ["Leadership experience", "RE background"],
  red: ["Relocation needed"]
}, {
  rank: 4,
  name: "Deepika Nair",
  current: "Sales Exec, HDFC Realty",
  expYrs: 3,
  ctcExp: "₹5.8L",
  score: 71,
  status: "Shortlisted",
  source: "Naukri",
  notice: 30,
  location: "Surat",
  green: ["HDFC pedigree", "Local market"],
  red: []
}, {
  rank: 5,
  name: "Suraj Patil",
  current: "Telecaller, MagicBricks",
  expYrs: 2,
  ctcExp: "₹4.2L",
  score: 58,
  status: "Borderline",
  source: "Indeed",
  notice: 15,
  location: "Surat",
  green: ["Immediate joiner"],
  red: ["2 yrs RE only", "Low CTC band"]
}, {
  rank: 6,
  name: "Ananya Kapoor",
  current: "HR Executive",
  expYrs: 0,
  ctcExp: "₹5.0L",
  score: 31,
  status: "Rejected",
  source: "Email",
  notice: 30,
  location: "Mumbai",
  green: [],
  red: ["No RE experience", "Location mismatch"]
}, {
  rank: 7,
  name: "Pratik Shah",
  current: "Fresher",
  expYrs: 0,
  ctcExp: "₹3.0L",
  score: 18,
  status: "Rejected",
  source: "Email",
  notice: 0,
  location: "Surat",
  green: [],
  red: ["No experience", "Below CTC band"]
}];
const interviews = [{
  date: "Mon 13 Jan",
  time: "10:00 AM",
  candidate: "Rohan Shukla",
  round: "R2 — Manager",
  interviewer: "Rahul Modi",
  status: "Completed"
}, {
  date: "Tue 14 Jan",
  time: "11:00 AM",
  candidate: "Kavya Iyer",
  round: "R1 — HR",
  interviewer: "HR Manager",
  status: "Confirmed"
}, {
  date: "Wed 15 Jan",
  time: "11:00 AM",
  candidate: "Nikhil Mehta",
  round: "R1 — HR",
  interviewer: "HR Manager",
  status: "Scheduled"
}, {
  date: "Wed 15 Jan",
  time: "3:00 PM",
  candidate: "Suraj Patil",
  round: "R1 — HR",
  interviewer: "HR Manager",
  status: "Scheduled"
}, {
  date: "Thu 16 Jan",
  time: "10:00 AM",
  candidate: "Deepika Nair",
  round: "R1 — HR",
  interviewer: "HR Manager",
  status: "Scheduled"
}, {
  date: "Fri 17 Jan",
  time: "2:00 PM",
  candidate: "Kavya Iyer",
  round: "R2 — Manager",
  interviewer: "Rahul Modi",
  status: "Pending R1"
}];
const onboardingEmployees = [{
  name: "Nikhil Mehta",
  role: "Sr Sales Agent",
  id: "EMP-2025-012",
  joining: "20/01/2025",
  manager: "Rahul Modi",
  docs: 60,
  it: "Pending",
  idCard: "Ready",
  laptop: "Assigned",
  crm: "Pending",
  induction: "✅ 21 Jan 10:00 AM",
  status: "Pre-joining",
  docsPending: ["Educational Certificates", "Address Proof", "Photographs", "Emergency Contact", "Declaration Form"],
  docsReceived: ["Salary Slips", "Aadhaar Card", "PAN Card", "Bank Account Details"]
}, {
  name: "Pooja Iyer",
  role: "Telecaller",
  id: "EMP-2025-011",
  joining: "15/01/2025",
  manager: "Kiran Desai",
  docs: 100,
  it: "Done",
  idCard: "Ready",
  laptop: "N/A",
  crm: "Done",
  induction: "✅ Done",
  status: "Week 1",
  docsPending: [],
  docsReceived: ["All 10 documents"]
}, {
  name: "Sagar Trivedi",
  role: "Site Manager",
  id: "EMP-2025-010",
  joining: "06/01/2025",
  manager: "Rahul Modi",
  docs: 100,
  it: "Done",
  idCard: "Ready",
  laptop: "Assigned",
  crm: "Done",
  induction: "✅ Done",
  status: "Month 1",
  docsPending: [],
  docsReceived: ["All 10 documents"]
}];
const sourcedCandidates = [{
  name: "Sneha Kapoor",
  current: "Sales Executive",
  employer: "PropTech India",
  exp: 3.5,
  ctcEst: "₹5.2L",
  loc: "Surat",
  platform: "Naukri",
  score: 73,
  outreach: "Message Sent",
  response: "Interested",
  role: "Senior Sales Agent — Vesu"
}, {
  name: "Jayesh Thakkar",
  current: "Relationship Manager",
  employer: "Square Yards",
  exp: 4,
  ctcEst: "₹6.0L",
  loc: "Vadodara",
  platform: "LinkedIn",
  score: 69,
  outreach: "Message Sent",
  response: "No Response",
  role: "Senior Sales Agent — Vesu"
}, {
  name: "Ritu Sharma",
  current: "Telecaller",
  employer: "BPO India",
  exp: 2,
  ctcEst: "₹3.5L",
  loc: "Vadodara",
  platform: "Naukri",
  score: 62,
  outreach: "Message Sent",
  response: "Interested",
  role: "Telecaller — Vadodara"
}, {
  name: "Mihir Raval",
  current: "Site Supervisor",
  employer: "L&T Constructions",
  exp: 6,
  ctcEst: "₹7.8L",
  loc: "Surat",
  platform: "Shine",
  score: 81,
  outreach: "Not Contacted",
  response: "—",
  role: "Site Supervisor"
}, {
  name: "Nisha Patel",
  current: "Digital Marketer",
  employer: "RE Agency Pvt Ltd",
  exp: 3,
  ctcEst: "₹5.0L",
  loc: "Surat",
  platform: "LinkedIn",
  score: 76,
  outreach: "Message Sent",
  response: "Interested",
  role: "Digital Marketing Exec"
}];
const openRoles = [{
  role: "Senior Sales Agent — Vesu",
  found: 34,
  shortlisted: 8,
  contacted: 6,
  interested: 3
}, {
  role: "Telecaller — Vadodara",
  found: 28,
  shortlisted: 5,
  contacted: 5,
  interested: 2
}, {
  role: "Site Supervisor",
  found: 19,
  shortlisted: 4,
  contacted: 3,
  interested: 1
}, {
  role: "Digital Marketing Exec",
  found: 22,
  shortlisted: 6,
  contacted: 4,
  interested: 2
}];
const chatMessages = [{
  from: "employee",
  name: "Ankit Shah",
  text: "How many casual leaves do I have left?",
  time: "09:14 AM"
}, {
  from: "bot",
  text: 'Hi Ankit! Let me check your leave balance.\n\n📋 Your Leave Balance — January 2025:\n├── Casual Leave:    4 remaining (of 12)\n├── Sick Leave:      8 remaining (of 12)\n├── Earned Leave:    6 remaining (of 18)\n└── Comp Off:        1 pending approval\n\nWould you like to apply for leave? Say "Apply leave [dates]".',
  time: "09:14 AM"
}, {
  from: "employee",
  name: "Ankit Shah",
  text: "Apply leave 14 and 15 February",
  time: "09:16 AM"
}, {
  from: "bot",
  text: "✅ Leave request raised!\n\n📋 Leave Request #LR-2025-088\n├── Type:   Casual Leave (2 days)\n├── Dates:  14–15 Feb 2025 (Fri–Sat)\n└── Status: Sent to Rahul Modi for approval\n\nYou'll receive a WhatsApp confirmation once approved.\nRemaining CL after approval: 2 days.",
  time: "09:16 AM"
}];
const queryLog = [{
  time: "09:14 AM",
  employee: "Ankit Shah",
  query: "Leave balance enquiry",
  category: "Leave",
  resolved: "Bot"
}, {
  time: "09:31 AM",
  employee: "Meera Patel",
  query: "Applied leave 14–15 Feb",
  category: "Leave Action",
  resolved: "Bot"
}, {
  time: "10:02 AM",
  employee: "Priya Rana",
  query: "Petrol reimbursement limit",
  category: "Reimbursement",
  resolved: "Bot"
}, {
  time: "10:45 AM",
  employee: "Kiran Desai",
  query: "Appraisal cycle dates",
  category: "Appraisal",
  resolved: "Bot"
}, {
  time: "11:20 AM",
  employee: "Ankit Shah",
  query: "Salary advance process",
  category: "Finance",
  resolved: "HR"
}, {
  time: "02:15 PM",
  employee: "New Joiner",
  query: "Notice period for probation",
  category: "Policy",
  resolved: "Bot"
}];
function StatBox({
  label,
  value,
  desc,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 flex flex-col justify-between min-h-24 border border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-slate-400 font-display", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-baseline justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-2xl font-bold tracking-tight font-mono ${color}`, children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground", children: desc })
    ] })
  ] });
}
const scoreColor = (score) => score >= 80 ? "text-emerald-600" : score >= 60 ? "text-blue-700" : score >= 40 ? "text-amber-500" : "text-red-600";
const scoreBg = (score) => score >= 80 ? "bg-emerald-50 border-emerald-200" : score >= 60 ? "bg-blue-50 border-blue-200" : score >= 40 ? "bg-amber-50 border-amber-200" : "bg-red-50 border-red-200";
const candidateStatusBadge = (status) => {
  if (status === "Shortlisted") return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (status === "Borderline") return "bg-amber-50 text-amber-700 border border-amber-100";
  if (status === "Rejected") return "bg-red-50 text-red-600 border border-red-100";
  if (status === "Completed") return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (status === "Confirmed") return "bg-blue-50 text-blue-700 border border-blue-100";
  return "bg-slate-50 text-slate-500 border border-slate-200";
};
const performanceLabel = (label) => {
  if (label === "Top Performer") return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (label === "On Track") return "bg-blue-50 text-blue-700 border border-blue-100";
  if (label === "Needs Attention") return "bg-amber-50 text-amber-700 border border-amber-100";
  return "bg-red-50 text-red-600 border border-red-100";
};
function HrManager() {
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
  const submodulesList2 = [{
    id: "overview",
    name: "HR Dashboard Overview",
    desc: "Hiring funnel, team performance snapshot, payroll status, and all open HR actions in one view.",
    stats: "7 actions pending",
    status: "Active"
  }, {
    id: "resume-screening",
    name: "Resume Screening",
    desc: "AI-ranked candidate shortlists with score breakdowns, green/red flags, and bulk shortlisting actions.",
    stats: "142 screened today",
    status: "Active"
  }, {
    id: "interview-scheduler",
    name: "Interview Scheduler",
    desc: "Automated calendar sync, WhatsApp invites, and candidate pipeline board from invite to outcome.",
    stats: "6 scheduled this week",
    status: "Active"
  }, {
    id: "onboarding",
    name: "Onboarding Agent",
    desc: "Offer-to-Day-1 automated workflow with document collection, IT setup, and induction scheduling.",
    stats: "3 joiners active",
    status: "Active"
  }, {
    id: "payroll",
    name: "Attendance & Payroll",
    desc: "Full payroll processing with statutory deductions, payslip generation, and Tally journal push.",
    stats: "₹14.2L processed",
    status: "Active"
  }, {
    id: "performance",
    name: "Performance Tracking",
    desc: "Objective agent scorecards auto-pulled from CRM, with coaching flags and leaderboard.",
    stats: "Team avg: 73/100",
    status: "Active"
  }, {
    id: "talent-sourcing",
    name: "Talent Sourcing",
    desc: "Proactive candidate sourcing across Naukri, LinkedIn, Shine with automated outreach tracking.",
    stats: "4 open roles",
    status: "Active"
  }, {
    id: "hr-chatbot",
    name: "HR Policy Chatbot",
    desc: "RAG-powered chatbot resolving leave, payslip, policy, and reimbursement queries via WhatsApp.",
    stats: "80% deflection rate",
    status: "Active"
  }];
  const getHeader = () => {
    const map = {
      menu: {
        title: "HR Pipeline Automation",
        subtitle: "A complete end-to-end HR automation system — from sourcing talent to processing payroll — designed specifically for the hiring demands of a growing real estate company."
      },
      overview: {
        title: "HR Dashboard Overview",
        subtitle: "Live view of hiring funnel, team performance, onboarding status, and open HR actions."
      },
      "resume-screening": {
        title: "Resume Screening",
        subtitle: "AI-ranked shortlists with score breakdowns, green/red flags, and bulk invite actions."
      },
      "interview-scheduler": {
        title: "Interview Scheduler",
        subtitle: "Automated coordination — calendar sync, WhatsApp invites, reminders, and outcome tracking."
      },
      onboarding: {
        title: "Onboarding Agent",
        subtitle: "Automated offer-to-Day-1 workflow with document collection, IT provisioning, and induction scheduling."
      },
      payroll: {
        title: "Attendance & Payroll",
        subtitle: "Full payroll cycle — attendance inputs, statutory deductions, payslip generation, Tally sync."
      },
      performance: {
        title: "Performance Tracking",
        subtitle: "Objective agent scorecards auto-pulled from M4 CRM, with leaderboard and AI coaching flags."
      },
      "talent-sourcing": {
        title: "Talent Sourcing",
        subtitle: "Proactive candidate discovery across Naukri, LinkedIn, and Shine with automated outreach."
      },
      "hr-chatbot": {
        title: "HR Policy Chatbot",
        subtitle: "RAG-powered internal chatbot resolving leave, payslip, policy, and reimbursement queries instantly."
      }
    };
    return map[activeTab];
  };
  const {
    title,
    subtitle
  } = getHeader();
  const dynamicTitle = activeTab === "menu" ? title : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("menu"), className: "group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95", "aria-label": "Back to HR menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors", onClick: () => setActiveTab("menu"), children: title })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: dynamicTitle, subtitle, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "transition-all duration-300", children: [
    activeTab === "menu" && /* @__PURE__ */ jsxRuntimeExports.jsx(RenderMenu, { list: submodulesList2, onSelect: (id) => setActiveTab(id) }),
    activeTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsx(RenderOverview, { onNavigate: (id) => setActiveTab(id) }),
    activeTab === "resume-screening" && /* @__PURE__ */ jsxRuntimeExports.jsx(RenderResumeScreening, {}),
    activeTab === "interview-scheduler" && /* @__PURE__ */ jsxRuntimeExports.jsx(RenderInterviewScheduler, {}),
    activeTab === "onboarding" && /* @__PURE__ */ jsxRuntimeExports.jsx(RenderOnboarding, {}),
    activeTab === "payroll" && /* @__PURE__ */ jsxRuntimeExports.jsx(RenderPayroll, {}),
    activeTab === "performance" && /* @__PURE__ */ jsxRuntimeExports.jsx(RenderPerformance, {}),
    activeTab === "talent-sourcing" && /* @__PURE__ */ jsxRuntimeExports.jsx(RenderTalentSourcing, {}),
    activeTab === "hr-chatbot" && /* @__PURE__ */ jsxRuntimeExports.jsx(RenderHrChatbot, {})
  ] }) });
}
function RenderMenu({
  list,
  onSelect
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-in fade-in duration-300", children: list.map((mod) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { onClick: () => onSelect(mod.id), className: "bg-card border shadow-sm rounded-xl p-5 cursor-pointer flex flex-col justify-between group h-44", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full border font-mono text-emerald-700 bg-emerald-50 border-emerald-100", children: [
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
  ] }, mod.id)) });
}
function RenderOverview({
  onNavigate
}) {
  const funnelData = [{
    stage: "Sourced / Applied",
    count: 142,
    pct: 100
  }, {
    stage: "Screened (AI)",
    count: 38,
    pct: 27
  }, {
    stage: "Shortlisted",
    count: 12,
    pct: 8
  }, {
    stage: "Interview Scheduled",
    count: 8,
    pct: 6
  }, {
    stage: "Interview Done",
    count: 6,
    pct: 4
  }, {
    stage: "Offer Made",
    count: 4,
    pct: 3
  }, {
    stage: "Joined",
    count: 3,
    pct: 2
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Open Positions", value: "4", desc: "Roles being hired", color: "text-blue-700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Candidates in Pipeline", value: "38", desc: "Active across stages", color: "text-slate-800" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Joining This Month", value: "3", desc: "Offer accepted", color: "text-emerald-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Payroll Processed", value: "₹14.2L", desc: "Jan 2025 — Done ✓", color: "text-emerald-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Pending HR Actions", value: "7", desc: "Awaiting attention", color: "text-amber-500" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 border-b border-border pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5 text-blue-700" }),
            " Hiring Funnel"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onNavigate("resume-screening"), className: "text-xs font-bold text-primary hover:underline font-mono", children: "View Candidates →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: funnelData.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-36 text-slate-500 font-semibold shrink-0 text-xs", children: row.stage }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-5 bg-secondary/40 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full transition-all duration-700", style: {
            width: `${row.pct}%`,
            background: i === 0 ? "#1A3C5E" : i <= 2 ? "#2E86AB" : i <= 4 ? "#1D9E75" : "#E8A838"
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 font-mono font-bold text-foreground text-right text-xs", children: row.count })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 pt-2 border-t border-border text-xs font-mono text-slate-400", children: "142 resumes screened · 12 shortlisted · 130 rejected — processed in 13 minutes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 border-b border-border pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5 text-emerald-600" }),
            " Team Performance Snapshot"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onNavigate("performance"), className: "text-xs font-bold text-primary hover:underline font-mono", children: "Full View →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 max-h-[260px] overflow-y-auto scrollbar-none pr-1", children: employees.map((emp) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-2.5 rounded-xl border flex items-center gap-3 ${scoreBg(emp.score)}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-10 w-10 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 36 36", className: "h-10 w-10 -rotate-90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9155", fill: "none", stroke: "#e5e7eb", strokeWidth: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9155", fill: "none", strokeWidth: "3", stroke: emp.score >= 80 ? "#1D9E75" : emp.score >= 60 ? "#2E86AB" : emp.score >= 40 ? "#E8A838" : "#D85A30", strokeDasharray: `${emp.score} ${100 - emp.score}`, strokeLinecap: "round" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute inset-0 flex items-center justify-center text-xs font-extrabold font-mono ${scoreColor(emp.score)}`, children: emp.score })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-foreground text-xs flex items-center gap-1.5", children: [
              emp.name,
              emp.score >= 80 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full border border-emerald-200 animate-pulse", children: "⭐ Top" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500 font-medium", children: emp.role })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-extrabold px-2 py-0.5 rounded font-mono border ${performanceLabel(emp.label)}`, children: emp.label })
        ] }, emp.id)) })
      ] })
    ] })
  ] });
}
function RenderResumeScreening() {
  const [selectedCandidate, setSelectedCandidate] = reactExports.useState(candidates[0]);
  const [bulkSelected, setBulkSelected] = reactExports.useState([]);
  const [role, setRole] = reactExports.useState("Senior Sales Agent — Vesu");
  const toggleBulk = (rank) => setBulkSelected((p) => p.includes(rank) ? p.filter((r) => r !== rank) : [...p, rank]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Applications", value: "142", desc: "All sources", color: "text-slate-800" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Shortlisted (AI)", value: "12", desc: "Score ≥ 65", color: "text-emerald-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Rejected", value: "130", desc: "Below threshold", color: "text-red-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Processing Time", value: "13 min", desc: "For 142 resumes", color: "text-blue-700" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: role, onChange: (e) => setRole(e.target.value), className: "h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none text-xs font-bold focus:border-ring", children: ["Senior Sales Agent — Vesu", "Telecaller — Vadodara", "Site Supervisor", "Digital Marketing Exec"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: r }, r)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: ["All", "Shortlisted", "Borderline", "Rejected"].map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `h-7 px-3 rounded-lg text-xs font-bold uppercase tracking-widest border transition-all ${i === 0 ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`, children: f }, f)) }),
      bulkSelected.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        alert(`Interview invites sent to ${bulkSelected.length} candidate(s).`);
        setBulkSelected([]);
      }, className: "h-7 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest ml-auto flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3 w-3" }),
        " Send ",
        bulkSelected.length,
        " Invite",
        bulkSelected.length > 1 ? "s" : ""
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 border-b border-border text-xs font-bold uppercase text-slate-500 font-display", children: [
          "Ranked Shortlist — ",
          role
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 w-8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5", children: "Candidate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5", children: "Current Role" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 font-mono", children: "Exp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 font-mono", children: "CTC Exp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 font-mono", children: "Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium text-foreground", children: candidates.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setSelectedCandidate(c), className: `hover:bg-secondary/15 cursor-pointer transition-colors ${selectedCandidate.rank === c.rank ? "bg-secondary/20" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: c.status === "Shortlisted" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
              e.stopPropagation();
              toggleBulk(c.rank);
            }, className: `h-4 w-4 rounded border flex items-center justify-center transition-all ${bulkSelected.includes(c.rank) ? "bg-ink border-ink text-cream" : "border-border hover:border-ink"}`, children: bulkSelected.includes(c.rank) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold", children: "✓" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono font-bold text-slate-400", children: c.rank }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: c.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-400 font-mono", children: [
                c.source,
                " · ",
                c.location
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-slate-500", children: c.current }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 font-mono", children: [
              c.expYrs,
              " yrs"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono font-bold", children: c.ctcExp }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-12 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full", style: {
                width: `${c.score}%`,
                background: c.score >= 70 ? "#1D9E75" : c.score >= 50 ? "#E8A838" : "#D85A30"
              } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono font-extrabold text-xs ${scoreColor(c.score)}`, children: c.score })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs font-extrabold px-2 py-0.5 rounded font-mono ${candidateStatusBadge(c.status)}`, children: [
              c.status === "Shortlisted" ? "✅ " : c.status === "Rejected" ? "❌ " : "⏳ ",
              c.status
            ] }) })
          ] }, c.rank)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 border-b border-border pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-slate-500 font-display", children: "Score Breakdown" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-extrabold px-2 py-0.5 rounded font-mono ${candidateStatusBadge(selectedCandidate.status)}`, children: selectedCandidate.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-base text-foreground", children: selectedCandidate.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400 font-semibold", children: selectedCandidate.current })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-14 w-14 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 36 36", className: "h-14 w-14 -rotate-90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9155", fill: "none", stroke: "#e5e7eb", strokeWidth: "3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9155", fill: "none", strokeWidth: "3", stroke: selectedCandidate.score >= 70 ? "#1D9E75" : selectedCandidate.score >= 50 ? "#E8A838" : "#D85A30", strokeDasharray: `${selectedCandidate.score} ${100 - selectedCandidate.score}`, strokeLinecap: "round" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute inset-0 flex items-center justify-center text-base font-extrabold font-mono ${scoreColor(selectedCandidate.score)}`, children: selectedCandidate.score })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs space-y-0.5 font-semibold text-slate-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
                  selectedCandidate.expYrs,
                  " yrs"
                ] }),
                " experience"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "Notice: ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-foreground", children: [
                  selectedCandidate.notice,
                  " days"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "Location: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: selectedCandidate.location })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "Source: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: selectedCandidate.source })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/30 rounded-xl p-3 font-mono text-xs leading-relaxed text-foreground space-y-1 border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold uppercase tracking-wider text-slate-400 text-xs mb-2", children: "WHY THIS SCORE:" }),
            selectedCandidate.expYrs >= 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-emerald-600", children: [
              "✓ ",
              selectedCandidate.expYrs,
              " years real estate experience        +",
              Math.round(selectedCandidate.expYrs * 4)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-emerald-600", children: "✓ CRM / sales skills matched                         +10" }),
            selectedCandidate.location === "Surat" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-emerald-600", children: "✓ Location: Surat (no relocation required)             +10" }),
            selectedCandidate.notice <= 30 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-emerald-600", children: [
              "✓ Notice period: ",
              selectedCandidate.notice,
              " days (acceptable)            +8"
            ] }),
            selectedCandidate.red.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-red-600", children: [
              "✗ ",
              r
            ] }, i))
          ] }),
          selectedCandidate.green.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-400", children: "Green Flags" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: selectedCandidate.green.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full", children: g }, i)) })
          ] }),
          selectedCandidate.red.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-400", children: "Red Flags" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: selectedCandidate.red.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold bg-red-50 text-red-600 border border-red-200 px-2 py-0.5 rounded-full", children: r }, i)) })
          ] }),
          selectedCandidate.status === "Shortlisted" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Interview invite sent to ${selectedCandidate.name} via WhatsApp.`), className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all", children: "Send Interview Invite" })
        ] })
      ] })
    ] })
  ] });
}
function RenderInterviewScheduler() {
  const [selectedStage, setSelectedStage] = reactExports.useState("All");
  const [showWaMsg, setShowWaMsg] = reactExports.useState(null);
  const kanbanStages = ["Invite Sent", "Confirmed", "Completed", "Outcome"];
  const kanbanData = {
    "Invite Sent": [{
      name: "Nikhil Mehta",
      round: "R1 HR",
      date: "15 Jan"
    }, {
      name: "Deepika Nair",
      round: "R1 HR",
      date: "16 Jan"
    }],
    "Confirmed": [{
      name: "Kavya Iyer",
      round: "R1 HR",
      date: "14 Jan"
    }, {
      name: "Suraj Patil",
      round: "R1 HR",
      date: "16 Jan"
    }],
    "Completed": [{
      name: "Rohan Shukla",
      round: "R1 HR",
      date: "11 Jan"
    }, {
      name: "Kavya Iyer",
      round: "R2 Mgr",
      date: "13 Jan"
    }],
    "Outcome": [{
      name: "Rohan Shukla",
      round: "R2",
      date: "",
      outcome: "✅ Cleared"
    }, {
      name: "Ananya K",
      round: "R1",
      date: "",
      outcome: "❌ Rejected"
    }]
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Invites Sent This Week", value: "6", desc: "All rounds", color: "text-blue-700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Confirmed", value: "2", desc: "Candidates confirmed", color: "text-emerald-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "No Shows", value: "0", desc: "This week", color: "text-slate-800" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Avg Response Time", value: "3.2 hrs", desc: "Invite to confirmation", color: "text-amber-500" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
      ["All", "Invite Sent", "Confirmed", "Completed", "No Show"].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedStage(s), className: `h-7 px-3 rounded-lg text-xs font-bold uppercase tracking-widest border transition-all ${selectedStage === s ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`, children: s }, s)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-xs font-mono font-bold text-emerald-600 flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500" }),
        "Google Calendar connected"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-7 grid grid-cols-4 gap-3", children: kanbanStages.map((stage) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-extrabold uppercase tracking-widest text-slate-400 font-display border-b border-border pb-1.5", children: [
          stage,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-300", children: [
            "(",
            kanbanData[stage].length,
            ")"
          ] })
        ] }),
        kanbanData[stage].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-2.5 border border-border/70 bg-card text-xs space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-400 font-mono", children: [
            c.round,
            c.date && ` · ${c.date}`
          ] }),
          c.outcome && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs font-bold ${c.outcome.includes("✅") ? "text-emerald-600" : "text-red-600"}`, children: c.outcome })
        ] }, i))
      ] }, stage)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-slate-500 font-display border-b border-border pb-2", children: "Week Schedule — 13–17 Jan 2025" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 overflow-y-auto max-h-[260px] scrollbar-none pr-1", children: interviews.map((iv, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-2.5 rounded-xl border text-xs flex items-start gap-2.5 ${iv.status === "Completed" ? "border-emerald-200 bg-emerald-50/30" : iv.status === "Confirmed" ? "border-blue-200 bg-blue-50/20" : iv.status.includes("Pending") ? "border-slate-200 bg-slate-50/20" : "border-border bg-background"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 text-center min-w-[54px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono font-bold text-foreground text-xs", children: iv.date }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-slate-400", children: iv.time })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: iv.candidate }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500 font-semibold", children: [
              iv.round,
              " · ",
              iv.interviewer
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-extrabold px-2 py-0.5 rounded font-mono shrink-0 ${candidateStatusBadge(iv.status)}`, children: iv.status })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-400 mb-2", children: "WhatsApp Slot Offer Preview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#ECF3EE] rounded-xl p-3 text-xs leading-relaxed text-slate-700 font-medium border border-emerald-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-slate-800 mb-1", children: "Fortiv Solutions HR ·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Hi Nikhil, thank you for applying for the Senior Sales Agent role at Fortiv Solutions. We'd like to invite you for a 30-minute HR interview. Please select one of the following time slots:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Option 1:" }),
              " Wednesday 15 Jan · 11:00 AM",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Option 2:" }),
              " Wednesday 15 Jan · 3:00 PM",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Option 3:" }),
              " Thursday 16 Jan · 10:00 AM"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-slate-600", children: "Reply with 1, 2, or 3 to confirm." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right text-xs text-slate-400 mt-1", children: "14:31 ✓✓" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function RenderOnboarding() {
  const [expanded, setExpanded] = reactExports.useState("Nikhil Mehta");
  const timeline = ["Offer Sent", "Offer Signed", "Docs Collecting", "Day 1", "Week 1", "Month 1", "Confirmed"];
  const stageMap = {
    "Pre-joining": 2,
    "Week 1": 4,
    "Month 1": 5
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Active Onboardings", value: "3", desc: "Joining in Jan 2025", color: "text-blue-700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Avg Doc Completion", value: "87%", desc: "Across active joiners", color: "text-emerald-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "IT Setup Pending", value: "1", desc: "Nikhil Mehta", color: "text-amber-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Pending Reminders Sent", value: "3", desc: "For docs collection", color: "text-slate-800" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: onboardingEmployees.map((emp) => {
      const isOpen = expanded === emp.name;
      const stageIdx = stageMap[emp.status] || 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setExpanded(isOpen ? null : emp.name), className: "p-4 cursor-pointer hover:bg-secondary/10 flex items-center gap-4 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-12 w-12 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 36 36", className: "h-12 w-12 -rotate-90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9155", fill: "none", stroke: "#e5e7eb", strokeWidth: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9155", fill: "none", strokeWidth: "3", stroke: emp.docs === 100 ? "#1D9E75" : emp.docs >= 60 ? "#E8A838" : "#D85A30", strokeDasharray: `${emp.docs} ${100 - emp.docs}`, strokeLinecap: "round" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute inset-0 flex items-center justify-center text-xs font-extrabold font-mono text-foreground", children: [
              emp.docs,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-sm", children: emp.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-extrabold px-2 py-0.5 rounded font-mono border ${emp.status === "Month 1" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : emp.status === "Week 1" ? "bg-blue-50 text-blue-700 border-blue-100" : "bg-amber-50 text-amber-700 border-amber-100"}`, children: emp.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500 font-semibold", children: [
              emp.role,
              " · ",
              emp.id,
              " · Joining: ",
              emp.joining
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 mt-2", children: timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-1.5 rounded-full transition-all ${i <= stageIdx ? "bg-ink" : "bg-slate-200"}`, style: {
                width: i <= stageIdx ? "28px" : "20px"
              } }),
              i === stageIdx && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-ink border-2 border-white shadow-md" })
            ] }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-mono text-slate-400 mt-0.5", children: [
              "Current: ",
              timeline[stageIdx]
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-400 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: `h-4 w-4 transition-transform duration-300 ${isOpen ? "-rotate-90" : "-rotate-180"}` }) })
        ] }),
        isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 pt-0 border-t border-border animate-in fade-in duration-200 grid grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-400 mb-2", children: "Document Collection" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              emp.docsReceived.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-emerald-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-3.5 w-3.5 shrink-0" }),
                " ",
                d
              ] }, i)),
              emp.docsPending.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-amber-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 shrink-0 animate-pulse" }),
                " ",
                d,
                " — Pending"
              ] }, i))
            ] }),
            emp.docsPending.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`WhatsApp reminder sent to ${emp.name} for ${emp.docsPending.length} pending documents.`), className: "mt-2 h-7 px-3 rounded-lg border border-amber-300 text-amber-700 bg-amber-50 hover:bg-amber-100 text-xs font-bold uppercase tracking-widest", children: "Send Reminder" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-400 mb-2", children: "Setup Checklist" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 text-xs font-semibold", children: [{
              label: "Reporting Manager",
              val: emp.manager,
              ok: true
            }, {
              label: "ID Card",
              val: emp.idCard,
              ok: emp.idCard === "Ready"
            }, {
              label: "Laptop Assigned",
              val: emp.laptop,
              ok: emp.laptop === "Assigned" || emp.laptop === "N/A"
            }, {
              label: "IT / Email Setup",
              val: emp.it,
              ok: emp.it === "Done"
            }, {
              label: "CRM Access",
              val: emp.crm,
              ok: emp.crm === "Done"
            }, {
              label: "Induction",
              val: emp.induction,
              ok: true
            }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between ${item.ok ? "text-foreground" : "text-amber-600"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold font-mono text-xs ${item.ok ? "text-emerald-600" : "text-amber-600 animate-pulse"}`, children: item.val })
            ] }, i)) }),
            emp.status === "Pre-joining" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Day 1 automations triggered for ${emp.name}!`), className: "mt-3 w-full h-7 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold uppercase tracking-widest transition-all", children: "Mark Day 1 Complete" })
          ] })
        ] })
      ] }, emp.id);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-400 mb-2", children: 'Automated "Your First Day" WhatsApp — Nikhil Mehta' }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#ECF3EE] rounded-xl p-4 text-xs leading-relaxed text-slate-700 font-medium border border-emerald-100 max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-slate-800 mb-1", children: "Fortiv Solutions HR ·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "🎉 Welcome to Fortiv Solutions, Nikhil! We're excited to have you join us tomorrow." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2", children: [
          "📍 Office: 204, Tower B, Greenview Complex, Vesu, Surat — 395007",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "⏰ Reporting time: 9:30 AM",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "🚗 Parking: Available in basement (mention Fortiv Solutions)",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "👔 Dress code: Business casual",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "🙋 Ask for: Rahul Modi (Sales Manager)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-slate-600", children: "See you tomorrow! Any questions? Reply here." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right text-xs text-slate-400 mt-1", children: "Sent automatically on 19/01/2025 ✓✓" })
      ] })
    ] })
  ] });
}
function RenderPayroll() {
  const [runProgress, setRunProgress] = reactExports.useState(-1);
  const [runDone, setRunDone] = reactExports.useState(false);
  const [runStep, setRunStep] = reactExports.useState("");
  const triggerPayroll = () => {
    setRunProgress(0);
    setRunDone(false);
    setRunStep("READING BIOMETRIC ATTENDANCE DATA FOR JAN 2025...");
  };
  reactExports.useEffect(() => {
    if (runProgress === -1 || runProgress >= 100) {
      if (runProgress >= 100) setRunDone(true);
      return;
    }
    const t = setTimeout(() => {
      setRunProgress((p) => {
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
  const payrollData = employees.map((e) => ({
    ...e,
    status: e.name === "Nikhil Mehta" ? "⏳ Joining 20 Jan" : "✅ Processed"
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Employees", value: "28", desc: "January 2025", color: "text-slate-800" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Gross Payroll", value: "₹14.2L", desc: "All employees", color: "text-blue-700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Net Disbursement", value: "₹12.07L", desc: "After deductions", color: "text-emerald-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Payroll Cost", value: "₹15.47L", desc: "Incl. employer contrib.", color: "text-amber-500" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-8 p-0 overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "January 2025 — Employee Payroll" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            !runDone && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: triggerPayroll, disabled: runProgress >= 0 && runProgress < 100, className: "h-7 px-3 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold uppercase tracking-widest disabled:opacity-50 flex items-center gap-1.5 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `h-3 w-3 ${runProgress >= 0 && runProgress < 100 ? "animate-spin" : ""}` }),
              runProgress >= 0 && runProgress < 100 ? `Running ${runProgress}%` : "Run Payroll"
            ] }),
            runDone && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-emerald-600 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-3.5 w-3.5" }),
              "Tally Journal Pushed"
            ] })
          ] })
        ] }),
        runProgress >= 0 && runProgress < 100 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 bg-amber-50 border-b border-amber-200 text-xs font-mono text-amber-700 font-semibold animate-pulse", children: runStep }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Employee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Designation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Gross" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Deductions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Net Pay" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Payslip" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium text-foreground", children: payrollData.map((emp) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold", children: emp.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500", children: emp.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-bold", children: [
              "₹",
              emp.gross.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono text-red-600", children: [
              "-₹",
              emp.deductions.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-extrabold text-emerald-600", children: [
              "₹",
              emp.net.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-extrabold px-2 py-0.5 rounded font-mono ${emp.status.includes("✅") ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-amber-50 text-amber-700 border border-amber-100 animate-pulse"}`, children: emp.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: emp.status.includes("✅") && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => alert(`Payslip for ${emp.name} — Jan 2025 downloaded.`), className: "h-6 px-2 rounded border border-border hover:bg-secondary text-xs font-bold text-slate-500 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3 w-3" }),
              " PDF"
            ] }) })
          ] }, emp.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 border border-border bg-card font-mono text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center font-display font-bold text-sm uppercase tracking-widest text-foreground mb-3 border-b border-border pb-2", children: "January 2025 Payroll Summary" }),
          [{
            l: "Total Employees",
            v: "28"
          }, {
            l: "Total Gross Payroll",
            v: "₹14,20,000"
          }, {
            l: "Total Deductions",
            v: "₹2,13,000"
          }, {
            l: "Total Net Disbursement",
            v: "₹12,07,000"
          }].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex justify-between py-1 ${i === 3 ? "border-t border-foreground/20 font-bold text-foreground" : "text-slate-500"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans font-semibold", children: r.l }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: r.v })
          ] }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-slate-400 font-sans font-bold mt-2 pt-2 border-t border-border mb-1", children: "Employer Liabilities" }),
          [{
            l: "Employer PF (12%)",
            v: "₹1,02,600"
          }, {
            l: "Employer ESI (3.25%)",
            v: "₹18,400"
          }, {
            l: "Professional Tax",
            v: "₹5,600"
          }].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-0.5 text-slate-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans font-semibold", children: r.l }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: r.v })
          ] }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-1.5 border-t-2 border-foreground/20 mt-2 font-bold text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm", children: "TOTAL PAYROLL COST" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm text-primary", children: "₹15,46,600" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 pt-2 border-t border-border space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-emerald-600 font-bold text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Run Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✅ Processed" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-emerald-600 font-bold text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Payslips Sent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "28 / 28" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-emerald-600 font-bold text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tally Entries" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✅ Pushed" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [{
          l: "PF Challan",
          c: "emerald"
        }, {
          l: "ESI Challan",
          c: "blue"
        }, {
          l: "PT Challan",
          c: "amber"
        }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => alert(`${b.l} downloaded.`), className: "h-8 rounded-lg border border-border hover:bg-secondary text-xs font-bold text-slate-600 uppercase tracking-widest flex items-center justify-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3 w-3" }),
          " ",
          b.l
        ] }, b.l)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-400 mb-3", children: "Sample Payslip — Priya Rana (Jan 2025)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-foreground bg-secondary/30 rounded-xl p-4 border border-border/60 whitespace-pre max-w-xl", children: `╔══════════════════════════════════════════════════╗
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
╚══════════════════════════════════════════════════╝` })
    ] })
  ] });
}
function RenderPerformance() {
  const [selectedEmp, setSelectedEmp] = reactExports.useState(employees[1]);
  const [period, setPeriod] = reactExports.useState("This Month");
  const teamAvg = Math.round(employees.reduce((s, e) => s + e.score, 0) / employees.length);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
      ["This Week", "This Month", "Q1 2025"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPeriod(p), className: `h-7 px-3 rounded-lg text-xs font-bold uppercase tracking-widest border transition-all ${period === p ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`, children: p }, p)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-xs font-bold text-slate-500 font-mono", children: [
        "Team Average: ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground text-sm", children: [
          teamAvg,
          "/100"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4", children: employees.map((emp) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { onClick: () => setSelectedEmp(emp), className: `p-4 border cursor-pointer transition-all duration-200 hover:shadow-md flex flex-col items-center gap-2 ${selectedEmp.id === emp.id ? "border-ink shadow-[0_2px_12px_rgba(11,31,51,0.08)]" : "border-border"} bg-card`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-16 w-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 36 36", className: "h-16 w-16 -rotate-90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9155", fill: "none", stroke: "#e5e7eb", strokeWidth: "3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9155", fill: "none", strokeWidth: "3.5", stroke: emp.score >= 80 ? "#1D9E75" : emp.score >= 60 ? "#2E86AB" : emp.score >= 40 ? "#E8A838" : "#D85A30", strokeDasharray: `${emp.score} ${100 - emp.score}`, strokeLinecap: "round", className: "transition-all duration-700" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute inset-0 flex items-center justify-center text-lg font-extrabold font-mono ${scoreColor(emp.score)}`, children: emp.score })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-xs", children: emp.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500 font-medium", children: emp.role })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-extrabold px-2 py-0.5 rounded-full border font-mono ${performanceLabel(emp.label)} ${emp.score >= 80 ? "animate-pulse" : ""}`, children: emp.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full text-xs font-mono text-slate-400 text-center", children: emp.revenue })
    ] }, emp.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-8 p-4 border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 border-b border-border pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-sm text-foreground font-display", children: [
            selectedEmp.name,
            " — Performance Breakdown"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-extrabold px-2 py-0.5 rounded font-mono border ${performanceLabel(selectedEmp.label)}`, children: selectedEmp.label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Metric" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-mono", children: "Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-mono", children: "Benchmark" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Trend" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium text-foreground", children: [{
            m: "Leads Assigned",
            v: selectedEmp.leads,
            b: "15–20",
            t: "▲"
          }, {
            m: "SLA Contact Rate",
            v: `${selectedEmp.sla}%`,
            b: "≥ 85%",
            t: selectedEmp.sla >= 85 ? "▲" : "▼"
          }, {
            m: "Site Visits Conducted",
            v: selectedEmp.visits,
            b: "10–15",
            t: "▲"
          }, {
            m: "Bookings Closed",
            v: selectedEmp.bookings,
            b: "2–4",
            t: selectedEmp.bookings >= 2 ? "▲" : "▼"
          }, {
            m: "Revenue Generated",
            v: selectedEmp.revenue,
            b: "₹1Cr+",
            t: "—"
          }, {
            m: "Follow-Up Compliance",
            v: "87%",
            b: "≥ 80%",
            t: "▲"
          }, {
            m: "WhatsApp Response",
            v: "12 min avg",
            b: "< 15 min",
            t: "▲"
          }, {
            m: "Composite Score",
            v: selectedEmp.score,
            b: teamAvg,
            t: selectedEmp.score > teamAvg ? "▲" : "▼"
          }].map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-bold", children: row.m }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: `px-3 py-2.5 font-mono font-extrabold ${typeof row.v === "number" && row.v === 0 ? "text-red-600" : "text-foreground"}`, children: row.v }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono text-slate-400", children: row.b }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: `px-3 py-2.5 font-mono font-bold text-sm ${row.t === "▲" ? "text-emerald-500" : row.t === "▼" ? "text-red-600" : "text-slate-400"}`, children: row.t })
          ] }, i)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "col-span-12 lg:col-span-4 p-4 border border-border bg-card", children: selectedEmp.score < 60 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber-700 font-bold text-xs border-b border-amber-200 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 animate-pulse" }),
          " AI Coaching Flag"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-xl border border-amber-200 bg-amber-50/40 font-mono text-xs text-foreground leading-relaxed whitespace-pre-wrap", children: `⚠️ COACHING FLAG — ${selectedEmp.name}

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
➜ Role-play objection handling session` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`1:1 meeting scheduled between ${selectedEmp.name} and Rahul Modi.`), className: "w-full h-8 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold uppercase tracking-widest transition-all", children: "Schedule Coaching 1:1" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-emerald-700 font-bold text-xs border-b border-emerald-200 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4" }),
          " Performance Status"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-3 rounded-xl border font-mono text-xs text-foreground leading-relaxed whitespace-pre-wrap ${selectedEmp.score >= 80 ? "border-emerald-200 bg-emerald-50/40" : "border-blue-200 bg-blue-50/20"}`, children: `✅ ${selectedEmp.score >= 80 ? "TOP PERFORMER" : "ON TRACK"}

${selectedEmp.name} is performing 
${selectedEmp.score >= 80 ? "above" : "within"} team benchmarks.

Key highlights:
• SLA Contact Rate: ${selectedEmp.sla}%
• Bookings: ${selectedEmp.bookings} this month
• Revenue: ${selectedEmp.revenue}

${selectedEmp.score >= 80 ? "Recognition recommended:\n➜ Top Performer bonus eligibility\n➜ Referral bonus this month\n➜ Mention in team stand-up" : "Continue standard 1:1 cadence.\nNo coaching flags active."}` })
      ] }) })
    ] })
  ] });
}
function RenderTalentSourcing() {
  const [selectedRole, setSelectedRole] = reactExports.useState("Senior Sales Agent — Vesu");
  const filtered = sourcedCandidates.filter((c) => c.role === selectedRole);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Profiles Sourced (All)", value: "103", desc: "Across 4 open roles", color: "text-slate-800" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Shortlisted (AI)", value: "23", desc: "Score ≥ 65", color: "text-blue-700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Outreach Sent", value: "18", desc: "LinkedIn + WhatsApp", color: "text-amber-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Interested / Responded", value: "8", desc: "Ready to interview", color: "text-emerald-600" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: selectedRole, onChange: (e) => setSelectedRole(e.target.value), className: "h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none text-xs font-bold focus:border-ring", children: openRoles.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: r.role }, r.role)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-emerald-600 flex items-center gap-1.5 font-mono", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
        " Active search running — last scan 47 min ago"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-8 p-0 overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 border-b border-border text-xs font-bold uppercase text-slate-500 font-display", children: [
          "Sourced Profiles — ",
          selectedRole
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Candidate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Current" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Exp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "CTC Est" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Platform" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Outreach" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Response" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium text-foreground", children: (filtered.length ? filtered : sourcedCandidates).map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: c.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono text-slate-400", children: c.loc })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 text-slate-500", children: [
              c.current,
              " · ",
              c.employer
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono", children: [
              c.exp,
              " yrs"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold", children: c.ctcEst }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold bg-secondary text-slate-600 border border-border px-2 py-0.5 rounded font-mono", children: c.platform }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono font-extrabold text-xs ${scoreColor(c.score)}`, children: c.score }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-bold px-2 py-0.5 rounded font-mono border ${c.outreach === "Message Sent" ? "bg-blue-50 text-blue-700 border-blue-100" : "bg-slate-50 text-slate-500 border-slate-200"}`, children: c.outreach }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-bold px-2 py-0.5 rounded font-mono border ${c.response === "Interested" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : c.response === "No Response" ? "bg-amber-50 text-amber-700 border-amber-100" : "bg-slate-50 text-slate-400 border-slate-200"}`, children: c.response }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: c.response === "Interested" ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`${c.name} added to hiring pipeline.`), className: "h-6 px-2 rounded bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold", children: "Add to Pipeline" }) : c.outreach === "Not Contacted" ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`LinkedIn outreach sent to ${c.name}.`), className: "h-6 px-2 rounded border border-border hover:bg-secondary text-xs font-bold text-slate-500", children: "Reach Out" }) : null })
          ] }, i)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-400 mb-3", children: "Open Roles Sourcing Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3.5", children: openRoles.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-2.5 rounded-xl border text-xs transition-all cursor-pointer ${selectedRole === r.role ? "border-ink bg-secondary/10" : "border-border bg-background hover:border-slate-300"}`, onClick: () => setSelectedRole(r.role), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground mb-1.5", children: r.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1 text-center", children: [{
              l: "Found",
              v: r.found
            }, {
              l: "Listed",
              v: r.shortlisted
            }, {
              l: "Contacted",
              v: r.contacted
            }, {
              l: "Interested",
              v: r.interested
            }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono font-extrabold text-foreground text-sm", children: s.v }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-400 font-semibold", children: s.l })
            ] }, s.l)) })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-3 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-400 mb-2", children: "LinkedIn Outreach Template" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#EEF3F8] rounded-xl p-3 text-xs leading-relaxed text-slate-700 font-medium border border-blue-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-800 mb-1", children: "Fortiv Solutions Recruiting" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Hi Sneha, I came across your profile and was impressed by your real estate sales experience in Surat. We're building a high-performance sales team at Fortiv Solutions and have an exciting opening for a Senior Sales Agent." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5", children: "We offer competitive CTC, strong incentives, and a structured growth path." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-slate-600", children: "Would you be open to a quick 15-minute call this week?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right text-xs text-slate-400 mt-1", children: "Auto-sent · 10/01/2025" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function RenderHrChatbot() {
  const [messages, setMessages] = reactExports.useState(chatMessages);
  const [input, setInput] = reactExports.useState("");
  const [employee, setEmployee] = reactExports.useState("Ankit Shah");
  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = {
      from: "employee",
      name: employee,
      text: input,
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit"
      })
    };
    let botReply = "I've noted your query. Let me check the relevant policy and get back to you shortly.";
    const lower = input.toLowerCase();
    if (lower.includes("leave balance") || lower.includes("cl") || lower.includes("casual")) {
      botReply = '📋 Your Leave Balance:\n├── Casual Leave:  4 remaining (of 12)\n├── Sick Leave:    8 remaining (of 12)\n└── Earned Leave:  6 remaining (of 18)\n\nTo apply, say: "Apply leave [dates]"';
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
    const botMsg = {
      from: "bot",
      text: botReply,
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit"
      })
    };
    setMessages((p) => [...p, userMsg, botMsg]);
    setInput("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Queries This Month", value: "100", desc: "All channels", color: "text-slate-800" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Bot Resolved", value: "80%", desc: "Without HR intervention", color: "text-emerald-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Escalated to HR", value: "20", desc: "Complex / sensitive", color: "text-amber-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Avg Response Time", value: "< 3 sec", desc: "Chatbot reply", color: "text-blue-700" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-6 border border-border bg-card overflow-hidden flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-emerald-800 p-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs", children: "HR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-xs", children: "Fortiv Solutions HR Bot" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-xs font-medium", children: "Online · 24/7" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: employee, onChange: (e) => setEmployee(e.target.value), className: "ml-auto bg-white/10 text-white text-xs rounded px-1.5 py-0.5 border border-white/20 outline-none font-bold", children: employees.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: e.name, children: e.name }, e.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-3 space-y-3 bg-[#ECE5DD]", children: messages.map((msg, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[80%] rounded-xl px-3 py-2 text-xs leading-relaxed shadow-sm whitespace-pre-wrap font-medium ${msg.from === "bot" ? "bg-white text-slate-800 rounded-tl-none" : "bg-emerald-100 text-slate-800 rounded-tr-none"}`, children: [
          msg.from === "employee" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-emerald-800 mb-0.5", children: msg.name }),
          msg.text,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-xs text-slate-400 mt-1", children: [
            msg.time,
            " ",
            msg.from === "employee" ? "✓✓" : ""
          ] })
        ] }) }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 bg-[#F0F0F0] flex gap-2 items-center border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: input, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && sendMessage(), placeholder: "Type a message...", className: "flex-1 h-9 px-3 rounded-full bg-white border border-border/60 text-xs font-medium outline-none focus:border-emerald-800" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: sendMessage, className: "h-9 w-9 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white flex items-center justify-center transition-all active:scale-95", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-6 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-0 overflow-hidden border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 border-b border-border text-xs font-bold uppercase text-slate-500 font-display flex items-center justify-between", children: [
            "Today's Query Log",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-mono font-extrabold", children: "80% deflected by bot" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-xs uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 font-mono", children: "Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5", children: "Employee" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5", children: "Query" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5", children: "Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5", children: "Resolved By" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium text-foreground", children: queryLog.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono text-slate-400", children: q.time }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-bold", children: q.employee }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-slate-500", children: q.query }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-secondary border border-border px-2 py-0.5 rounded font-mono font-bold text-slate-600", children: q.category }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs font-extrabold px-2 py-0.5 rounded font-mono border ${q.resolved === "Bot" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-amber-50 text-amber-700 border-amber-100 animate-pulse"}`, children: q.resolved === "Bot" ? "✅ Bot" : "⏳ HR" }) })
            ] }, i)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-400 mb-3", children: "Policy Knowledge Base" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: [{
            doc: "Fortiv Solutions HR Manual v3.0",
            updated: "Dec 2024"
          }, {
            doc: "Leave Policy 2025",
            updated: "Jan 2025"
          }, {
            doc: "Travel & Expense Reimbursement Policy",
            updated: "Oct 2024"
          }, {
            doc: "Code of Conduct",
            updated: "Jan 2024"
          }, {
            doc: "Performance Appraisal Process 2025",
            updated: "Dec 2024"
          }, {
            doc: "Salary Advance Policy",
            updated: "Jun 2024"
          }, {
            doc: "Grievance Redressal Policy",
            updated: "Jan 2024"
          }].map((kb, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs font-semibold py-1 border-b border-border last:border-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: kb.doc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-slate-400 text-xs shrink-0 ml-3", children: kb.updated })
          ] }, i)) })
        ] })
      ] })
    ] })
  ] });
}
export {
  HrManager as component
};
