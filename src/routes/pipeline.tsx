import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell, Card, Pill } from "../components/AppShell";
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
  AlertCircle,
  Calendar,
  Search,
  CheckCircle2,
  GitBranch,
  RefreshCw,
  Sliders,
  DollarSign,
  Share2,
  Trash2,
  Edit2,
  Check,
  CheckCheck,
  Building2,
  Settings,
  Send,
  Download,
  Info,
  CalendarDays,
  Play,
  RotateCcw,
  BookOpen,
  Smartphone,
  Eye,
  Activity,
  Layers
} from "lucide-react";

// Route declaration
export const Route = createFileRoute("/pipeline")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tab: (search.tab as string) || undefined,
    };
  },
  head: () => ({ meta: [{ title: "Sales Pipeline & CRM Automation · Fortiv" }] }),
  component: SalesPipelineManager,
});

type TabType =
  | "menu"
  | "overview"
  | "crm-sync"
  | "scheduler"
  | "follow-up"
  | "drip"
  | "pipeline"
  | "listing-writer";

// --- MOCK DATA CONSTANTS ---

const demoDeals = [
  { id: "DEAL-001", buyer_name: "Rajesh Patel", project: "Fortiv Greenview Heights", configuration: "2BHK", value: 56, collected: 5.6, stage: "Negotiation", daysInStage: 5, urgency: "On track", agent: "Priya Rana" },
  { id: "DEAL-002", buyer_name: "Priya Shah", project: "Fortiv Greenview Heights", configuration: "3BHK", value: 78, collected: 7.8, stage: "Visited", daysInStage: 8, urgency: "On track", agent: "Priya Rana" },
  { id: "DEAL-003", buyer_name: "Deepak Trivedi", project: "Fortiv Greenview Heights", configuration: "2BHK", value: 52, collected: 0, stage: "Negotiation", daysInStage: 19, urgency: "Stuck", agent: "Priya Rana" },
  { id: "DEAL-004", buyer_name: "Vikram Joshi", project: "Fortiv Business Park", configuration: "Commercial", value: 210, collected: 31.5, stage: "Agreement Signed", daysInStage: 12, urgency: "On track", agent: "Rahul Modi" },
  { id: "DEAL-005", buyer_name: "Sunita Mehta", project: "Fortiv Skyline Residences", configuration: "3BHK", value: 94, collected: 94, stage: "Booking Amount Paid", daysInStage: 2, urgency: "On track", agent: "Meera Patel" },
  { id: "DEAL-006", buyer_name: "Amit Desai", project: "Fortiv Greenview Heights", configuration: "2BHK", value: 49, collected: 4.9, stage: "Visited", daysInStage: 16, urgency: "Stuck", agent: "Ankit Shah" },
  { id: "DEAL-007", buyer_name: "Suresh Nair", project: "Fortiv Business Park", configuration: "Commercial", value: 340, collected: 34, stage: "Loan Processing", daysInStage: 21, urgency: "Watch", agent: "Rahul Modi" },
  { id: "DEAL-008", buyer_name: "Pooja Sharma", project: "Fortiv Greenview Heights", configuration: "2BHK", value: 58, collected: 0, stage: "Site Visit Scheduled", daysInStage: 2, urgency: "On track", agent: "Ankit Shah" }
];

const crmSyncLog = [
  { id: 1, name: "Rajesh Patel", source: "99acres", time: "15/01/2025 14:23", status: "Clean", campaign: "Greenview Heights Jan", action: "Merged with CRM #1042" },
  { id: 2, name: "Priya Shah", source: "Facebook Lead Ads", time: "15/01/2025 13:44", status: "Clean", campaign: "Vesu 2BHK Video Campaign", action: "Merged with CRM #1063" },
  { id: 3, name: "Amit Desai", source: "JustDial", time: "15/01/2025 12:10", status: "Clean", campaign: "Organic Search", action: "Merged with CRM #1077" },
  { id: 4, name: "Sneha Patel", source: "Website Widget", time: "15/01/2025 11:32", status: "Flagged", campaign: "Gotri 3BHK Details", action: "Pushed to CRM queue" },
  { id: 5, name: "Kunal Jain", source: "Voice IVR", time: "15/01/2025 10:15", status: "Clean", campaign: "Inbound IVR Route", action: "Pushed to CRM queue" },
  { id: 6, name: "Deepak Trivedi", source: "MagicBricks", time: "15/01/2025 09:40", status: "Clean", campaign: "Greenview Heights Jan", action: "Merged with CRM #1089" }
];

const crmDeduplicationLog = [
  { id: 1, primary: "Rajesh Patel (#1042)", merged: "Rajesh Patel (#1089)", reason: "Same phone +91 98765 43210", outcome: "Merged — 99acres + MagicBricks" },
  { id: 2, primary: "Priya Shah (#1063)", merged: "Priya Shah (#1091)", reason: "Same email priya.shah@gmail.com", outcome: "Merged — Housing.com + Facebook" },
  { id: 3, primary: "Amit Desai (#1077)", merged: "Amit Desai (#1098)", reason: "Same phone + Same name", outcome: "Merged — JustDial + WhatsApp" }
];

const upcomingVisits = [
  { id: "visit_1", name: "Rajesh Patel", score: 74, agent: "Priya Rana", project: "Fortiv Greenview Heights", time: "18/01/2025 11:00 AM", status: "Confirmed" },
  { id: "visit_2", name: "Priya Shah", score: 61, agent: "Ankit Shah", project: "Fortiv Greenview Heights", time: "18/01/2025 03:00 PM", status: "Confirmed" },
  { id: "visit_3", name: "Deepak Trivedi", score: 82, agent: "Priya Rana", project: "Fortiv Greenview Heights", time: "19/01/2025 10:00 AM", status: "Confirmed" },
  { id: "visit_4", name: "Sunita Mehta", score: 55, agent: "Meera Patel", project: "Fortiv Skyline Residences", time: "19/01/2025 02:00 PM", status: "Confirmed" },
  { id: "visit_5", name: "Vikram Joshi", score: 78, agent: "Rahul Modi", project: "Fortiv Business Park", time: "20/01/2025 11:30 AM", status: "Confirmed" }
];

const noShowVisits = [
  { id: "visit_n1", name: "Kavita Agarwal", score: 55, agent: "Meera Patel", project: "Greenview Heights", time: "14/01/2025 04:00 PM", reason: "Out of station" },
  { id: "visit_n2", name: "Ritu Bhandari", score: 67, agent: "Ankit Shah", project: "Greenview Heights", time: "12/01/2025 11:30 AM", reason: "Urgent meeting" }
];

const followUpSequences = {
  rajesh: {
    name: "Rajesh Patel",
    visitDate: "18/01/2025",
    currentStep: 3,
    stepName: "Comparison Doc",
    lastMsg: "Looks good, considering the Tower B pricing",
    objection: "None",
    status: "Active",
    timeline: [
      { step: 1, title: "📧 Visit Thank-You + Price List Sent", status: "Completed", date: "18/01 12:15 PM" },
      { step: 2, title: "💬 Check-In Call Follow-Up", status: "Completed", date: "19/01 11:00 AM" },
      { step: 3, title: "📊 Competitor Comparison PDF Dispatched", status: "Pending", date: "Scheduled 21/01" }
    ],
    conversation: [
      { sender: "ai", text: "Hello Rajesh! Thank you for visiting Fortiv Greenview Heights today. It was a pleasure showing you the 2BHK sample apartment. Here is the payment plan brochure we discussed.", time: "18/01 12:15 PM" },
      { sender: "buyer", text: "Thanks, the layout looks good. What is the possession date for Tower B?", time: "18/01 02:40 PM" },
      { sender: "ai", text: "Tower B possession is scheduled for December 2026, fully backed by RERA approvals. Would you like to review the floor layout plans for Tower B?", time: "18/01 02:42 PM" },
      { sender: "buyer", text: "Yes, please send them. Saturday works if we need to check again.", time: "18/01 03:05 PM" }
    ]
  },
  priya: {
    name: "Priya Shah",
    visitDate: "16/01/2025",
    currentStep: 5,
    stepName: "Email Brochure",
    lastMsg: "Is the price negotiable?",
    objection: "Price is high",
    status: "Slow",
    timeline: [
      { step: 1, title: "📧 Visit Thank-You Sent", status: "Completed", date: "16/01 04:30 PM" },
      { step: 2, title: "💬 First Check-In Dispatched", status: "Completed", date: "17/01 02:00 PM" },
      { step: 3, title: "📊 Competitor Analysis Sent", status: "Completed", date: "18/01 09:30 AM" },
      { step: 4, title: "🔥 Urgency Alert (Limited units)", status: "Completed", date: "19/01 05:00 PM" },
      { step: 5, title: "📧 Full Project Documentation Email", status: "Pending", date: "Scheduled 22/01" }
    ],
    conversation: [
      { sender: "ai", text: "Hi Priya! Thank you for coming today. It was great to show you the 3BHK flat at Adajan. We have sent the brochure and amenities catalog.", time: "16/01 04:30 PM" },
      { sender: "buyer", text: "Thanks. The property is nice but the price seems slightly high for Adajan area.", time: "17/01 09:12 AM" },
      { sender: "ai", text: "I understand! I can share our comparative analysis that highlights the rooftop pool and RERA compliance that other projects lack. Also, here is an EMI calculator outlining SBI home loan options starting at 8.75%.", time: "17/01 09:15 AM" },
      { sender: "buyer", text: "Is the price negotiable?", time: "18/01 01:22 PM" }
    ]
  },
  deepak: {
    name: "Deepak Trivedi",
    visitDate: "14/01/2025",
    currentStep: 4,
    stepName: "Urgency trigger",
    lastMsg: "Interested, need 1 week to arrange token",
    objection: "None",
    status: "Active",
    timeline: [
      { step: 1, title: "📧 Visit Thank-You Sent", status: "Completed", date: "14/01 11:30 AM" },
      { step: 2, title: "💬 Follow-Up Check-In", status: "Completed", date: "15/01 11:30 AM" },
      { step: 3, title: "📊 Competitor Analysis Sent", status: "Completed", date: "17/01 10:00 AM" },
      { step: 4, title: "🔥 Urgency Alert Sent", status: "Pending", date: "Scheduled 20/01" }
    ],
    conversation: [
      { sender: "ai", text: "Hello Deepak! Thank you for visiting Greenview Heights. Here is the payment plan. Let me know if you have any questions.", time: "14/01 11:30 AM" },
      { sender: "buyer", text: "We like the unit 602. Can you hold it for a few days?", time: "14/01 01:45 PM" },
      { sender: "ai", text: "We can block the unit for 48 hours for you. Shall I send the booking forms to fill out?", time: "14/01 01:50 PM" },
      { sender: "buyer", text: "Interested, need 1 week to arrange token amount.", time: "15/01 10:30 AM" }
    ]
  },
  amit: {
    name: "Amit Desai",
    visitDate: "10/01/2025",
    currentStep: 7,
    stepName: "Agent Call Flag",
    lastMsg: "Will discuss with my wife tonight",
    objection: "Location",
    status: "Agent Action",
    timeline: [
      { step: 1, title: "📧 Visit Thank-You Sent", status: "Completed", date: "10/01 05:45 PM" },
      { step: 2, title: "💬 Follow-Up Sent", status: "Completed", date: "11/01 02:00 PM" },
      { step: 3, title: "📊 Comparison Document Sent", status: "Completed", date: "13/01 10:00 AM" },
      { step: 4, title: "🔥 Urgency Notification", status: "Completed", date: "15/01 04:30 PM" },
      { step: 5, title: "📧 Full Email Dossier Sent", status: "Completed", date: "17/01 09:00 AM" },
      { step: 6, title: "📈 Market Appreciation Report", status: "Completed", date: "19/01 11:30 AM" },
      { step: 7, title: "📞 Agent Priority Callback Flag", status: "Pending", date: "Immediate Agent Call" }
    ],
    conversation: [
      { sender: "ai", text: "Hello Amit! Thank you for the visit. Here is the brochure. Let us know what you think.", time: "10/01 05:45 PM" },
      { sender: "buyer", text: "The flat layout is perfect but it feels a bit far from my office in Adajan.", time: "11/01 09:30 AM" },
      { sender: "ai", text: "Understandable. Our micro-market connectivity analysis shows that with the new bridge coming up, Vesu will be less than 10 minutes from Adajan Main Road. Let me share the distance calculator maps.", time: "11/01 09:35 AM" },
      { sender: "buyer", text: "Will discuss with my wife tonight.", time: "12/01 08:20 PM" }
    ]
  }
};

const objectionsWebhookRules = [
  { keyword: 'Price is high / expensive / cost', responseType: 'SBI/HDFC home loan EMI options and calculator PDF' },
  { keyword: 'RERA / registration / legal title', responseType: 'Project RERA certificate GJ/RERA/PROJ/XXXXX' },
  { keyword: 'Location / far from office', responseType: 'Vesu connectivity analysis and maps link' },
  { keyword: 'Builder reputation / construction quality', responseType: 'Builder credentials portfolio and past work brochure' },
  { keyword: 'Competition / other builder project', responseType: 'Comparative analysis and competitive feature chart' }
];

const dripNurtureLeads = [
  { name: "Anita Gujarati", track: "Track C — Long-Horizon", sent: 6, opened: 5, clicks: 1, lastActive: "18/01/2025", nextSend: "24/01/2025", status: "nurturing" },
  { name: "Kavita Agarwal", track: "Track B — Warm Lead", sent: 3, opened: 3, clicks: 2, lastActive: "20/01/2025", nextSend: "22/01/2025", status: "nurturing" },
  { name: "Pooja Sharma", track: "Track A — Active Drip", sent: 8, opened: 8, clicks: 5, lastActive: "19/01/2025", nextSend: "Exited to Pipeline", status: "reengaged" },
  { name: "Mahesh Khanna", track: "Track B — Warm Lead", sent: 5, opened: 4, clicks: 1, lastActive: "14/01/2025", nextSend: "21/01/2025", status: "nurturing" },
  { name: "Ritu Bhandari", track: "Track C — Long-Horizon", sent: 2, opened: 2, clicks: 0, lastActive: "11/01/2025", nextSend: "25/01/2025", status: "nurturing" }
];

const dripContentCalendar = [
  { date: "21 Jan", track: "Track B", type: "Visit Invitation", title: "Open House this Saturday — family events" },
  { date: "22 Jan", track: "Track A", type: "Construction Update", title: "Tower A 12th-floor slab casting progress photos" },
  { date: "24 Jan", track: "Track C", type: "Market News", title: "How RBI repo rate stable policies impact home loans" },
  { date: "25 Jan", track: "Track B", type: "Blog post", title: "Guide: 5 parameters to verify before buying a flat in Gujarat" }
];

const publishedListingsLog = [
  { project: "Fortiv Greenview Heights", platform: "99acres", published: "02/01/2025", views: 412, leads: 18, refreshed: "16/01/2025", tone: "Formal", status: "Fresh" },
  { project: "Fortiv Greenview Heights", platform: "MagicBricks", published: "02/01/2025", views: 287, leads: 11, refreshed: "16/01/2025", tone: "Conversational", status: "Fresh" },
  { project: "Fortiv Skyline Residences", platform: "99acres", published: "05/01/2025", views: 198, leads: 7, refreshed: "14/01/2025", tone: "Luxury", status: "Ageing" },
  { project: "Fortiv Business Park", platform: "MagicBricks", published: "10/01/2025", views: 143, leads: 4, refreshed: "18/01/2025", tone: "Formal", status: "Fresh" },
  { project: "Fortiv Greenview Heights", platform: "Fortiv Website", published: "02/01/2025", views: 631, leads: 23, refreshed: "18/01/2025", tone: "Urgency", status: "Fresh" }
];

// Pipeline board stages
const pipelineStages = [
  { id: "Inquiry", name: "Inquiry", probability: 5, color: "bg-slate-400" },
  { id: "Site Visit Scheduled", name: "Visit Scheduled", probability: 10, color: "bg-[#2E86AB]" },
  { id: "Visited", name: "Visited", probability: 20, color: "bg-[#0E86E9]" },
  { id: "Negotiation", name: "Negotiation", probability: 40, color: "bg-[#E8A838]" },
  { id: "Booking Amount Paid", name: "Booking Token Paid", probability: 75, color: "bg-[#1D9E75]" },
  { id: "Agreement Signed", name: "Agreement Signed", probability: 85, color: "bg-[#1A3C5E]" },
  { id: "Loan Processing", name: "Loan Processing", probability: 90, color: "bg-[#2E86AB]" },
  { id: "Full Payment", name: "Full Payment", probability: 95, color: "bg-[#1D9E75]" },
  { id: "Registration", name: "Registration", probability: 100, color: "bg-slate-500" }
];

const stageVelocityBenchmarks = [
  { stage: "Inquiry → Visit", industry: 3.0, fortiv: 1.8 },
  { stage: "Visit → Visited", industry: 5.0, fortiv: 4.2 },
  { stage: "Visited → Negotiation", industry: 7.0, fortiv: 9.1 },
  { stage: "Negotiation → Booking", industry: 10.0, fortiv: 12.4 },
  { stage: "Booking → Agreement", industry: 14.0, fortiv: 11.2 },
  { stage: "Agreement → Payment", industry: 45.0, fortiv: 38.7 }
];

function SalesPipelineManager() {
  const { tab } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const activeTab = (tab as TabType) || "menu";
  const setActiveTab = (newTab: TabType | ((prev: TabType) => TabType)) => {
    const nextTab = typeof newTab === "function" ? newTab(activeTab) : newTab;
    navigate({
      search: (prev: any) => ({ ...prev, tab: nextTab === "menu" ? undefined : nextTab }),
    });
  };

  // Deduplication sandbox states
  const [duplicates, setDuplicates] = useState([
    {
      id: "DUP-101",
      fieldMatch: "Phone Number (+91 98765 43210)",
      cardA: {
        id: "CRM-1042",
        name: "Rajesh Patel",
        phone: "+91 98765 43210",
        email: "rajesh.patel@gmail.com",
        source: "99acres",
        campaign: "Greenview Heights Jan",
        budget: "₹50 - 60 Lakhs",
        locality: "Vesu",
        created: "12/01/2025 10:15 AM",
        score: 61,
        notes: "Looking for 2BHK on higher floor, preferred ready possession."
      },
      cardB: {
        id: "NEW-SYNC",
        name: "Rajesh K. Patel",
        phone: "+91 98765 43210",
        email: "rajesh.p@adani.com",
        source: "Facebook Lead Ads",
        campaign: "Adani B2B Lead Forms",
        budget: "₹55 - 65 Lakhs",
        locality: "Vesu, Pal",
        created: "15/01/2025 02:23 PM",
        score: 74,
        notes: "Wants a 2BHK/3BHK in Vesu, worked at Adani Group. High intent."
      }
    },
    {
      id: "DUP-102",
      fieldMatch: "Email (priya.shah@gmail.com)",
      cardA: {
        id: "CRM-1063",
        name: "Priya Shah",
        phone: "+91 91234 56789",
        email: "priya.shah@gmail.com",
        source: "Housing.com",
        campaign: "Organic Search",
        budget: "₹70 - 80 Lakhs",
        locality: "Adajan",
        created: "10/01/2025 04:30 PM",
        score: 55,
        notes: "Inquired about 3BHK flat. Looking for loan options."
      },
      cardB: {
        id: "NEW-SYNC",
        name: "Priyanka Shah",
        phone: "+91 90123 45678",
        email: "priya.shah@gmail.com",
        source: "Website Widget",
        campaign: "Gotri 3BHK Details",
        budget: "₹75 - 85 Lakhs",
        locality: "Adajan, Vesu",
        created: "15/01/2025 11:32 AM",
        score: 68,
        notes: "Very interested in rooftop pool amenities. Pre-approved loan from SBI."
      }
    }
  ]);

  const [mergedSelections, setMergedSelections] = useState({
    name: "cardB",
    email: "cardA",
    budget: "cardB",
    locality: "cardB",
    notes: "both"
  });

  const [dedupSuccessMsg, setDedupSuccessMsg] = useState("");
  const [syncLogs, setSyncLogs] = useState(crmSyncLog);
  const [dedupLogs, setDedupLogs] = useState(crmDeduplicationLog);

  const submodulesList = [
    {
      id: "overview",
      name: "Dashboard Overview",
      desc: "Helicopter view of active pipelines, stage summaries, and operational actions.",
      stats: "23 deals active",
      status: "Active"
    },
    {
      id: "crm-sync",
      name: "CRM Sync & Deduplication",
      desc: "Bidirectional sync logs, deduplication registries, and field normalisation tracking.",
      stats: "118 synced today",
      status: "Active"
    },
    {
      id: "scheduler",
      name: "Site Visit Scheduler",
      desc: "Show-flat calendar slot bookings, confirmations, no-show queues, and reschedules.",
      stats: "5 scheduled today",
      status: "Active"
    },
    {
      id: "follow-up",
      name: "Post-Visit Follow-Up",
      desc: "Multi-step post-visit sequences, dynamic chats, and pre-approved objection webhook handling.",
      stats: "4 sequences active",
      status: "Active"
    },
    {
      id: "drip",
      name: "Nurture Drip Engine",
      desc: "30/60/90-day drip campaigns calendar, re-engagement exited logs, and cold lead recovery.",
      stats: "142 leads active",
      status: "Active"
    },
    {
      id: "pipeline",
      name: "Deal Pipeline Tracker",
      desc: "Draggable Kanban board with deal cards, velocity chart benchmark, and stuck deal alerts.",
      stats: "8 deals tracked",
      status: "Active"
    },
    {
      id: "listing-writer",
      name: "AI Listing Writer",
      desc: "LLM content generator for SEO portals, WhatsApp, Instagram, email, and Gujarati copies.",
      stats: "5 listings live",
      status: "Active"
    }
  ];

  // Renders standard header action button or null matching conversations
  const renderPlatformBadge = (source: string) => {
    const maps = {
      "99acres": "bg-[#efe5dd] text-slate-700 border-slate-300",
      "MagicBricks": "bg-red-50 text-red-700 border-red-200",
      "Facebook Lead Ads": "bg-blue-50 text-blue-700 border-blue-200",
      "Website Widget": "bg-sky-50 text-sky-700 border-sky-200",
      "Voice IVR": "bg-indigo-50 text-indigo-700 border-indigo-200",
      "JustDial": "bg-amber-50 text-amber-700 border-amber-200"
    } as const;

    const cls = maps[source as keyof typeof maps] || "bg-slate-100 text-slate-700 border-slate-200";
    return <span className={`text-[9px] font-bold px-2 py-0.5 rounded border font-mono ${cls}`}>{source}</span>;
  };

  // SVG Bar Chart for Velocity
  const renderVelocityChart = (height = 160) => {
    const data = stageVelocityBenchmarks;
    const paddingLeft = 110;
    const paddingRight = 15;
    const paddingTop = 15;
    const paddingBottom = 20;
    const chartWidth = 500;
    const chartHeight = height - paddingTop - paddingBottom;
    const maxVal = 50; // benchmark limit

    const barSpacing = chartHeight / data.length;
    const barHeight = 8;

    return (
      <div className="w-full overflow-x-auto scrollbar-none">
        <svg className="min-w-[400px] w-full" viewBox={`0 0 ${chartWidth} ${height}`}>
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((r, idx) => {
            const x = paddingLeft + (chartWidth - paddingLeft - paddingRight) * r;
            const val = Math.round(r * maxVal);
            return (
              <g key={idx}>
                <line
                  x1={x}
                  y1={paddingTop}
                  x2={x}
                  y2={chartHeight + paddingTop}
                  stroke="rgba(148, 163, 184, 0.12)"
                  strokeWidth="1"
                />
                <text
                  x={x}
                  y={chartHeight + paddingTop + 12}
                  textAnchor="middle"
                  className="text-[8px] font-mono fill-muted-foreground font-semibold"
                >
                  {val}d
                </text>
              </g>
            );
          })}
          {/* Horizontal rows */}
          {data.map((d, i) => {
            const y = paddingTop + i * barSpacing + 4;
            const fortivWidth = (d.fortiv / maxVal) * (chartWidth - paddingLeft - paddingRight);
            const indWidth = (d.industry / maxVal) * (chartWidth - paddingLeft - paddingRight);
            
            return (
              <g key={i} className="group/row">
                <text
                  x={paddingLeft - 8}
                  y={y + 8}
                  textAnchor="end"
                  className="text-[8.5px] font-bold fill-foreground"
                >
                  {d.stage}
                </text>

                {/* Industry Standard bar */}
                <rect
                  x={paddingLeft}
                  y={y}
                  width={indWidth}
                  height={barHeight}
                  fill="rgba(148, 163, 184, 0.3)"
                  rx="1.5"
                />
                
                {/* Fortiv Actual bar */}
                <rect
                  x={paddingLeft}
                  y={y + 3}
                  width={fortivWidth}
                  height={barHeight - 2}
                  fill="#0E86E9"
                  rx="1"
                />

                {/* Tooltip values on hover */}
                <text
                  x={paddingLeft + Math.max(fortivWidth, indWidth) + 6}
                  y={y + 7}
                  className="text-[7.5px] font-bold fill-foreground opacity-0 group-hover/row:opacity-100 transition-opacity font-mono"
                >
                  Fortiv: {d.fortiv}d (Ind: {d.industry}d)
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  // --- 1. Dashboard Overview Renders ---
  const renderDashboardOverview = () => {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        {/* Top KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatBox label="Active Deals" value="23" desc="Total pipeline" color="text-[#1A3C5E]" />
          <StatBox label="In Negotiation" value="6" desc="2 stuck past target" color="text-[#E8A838] animate-pulse" />
          <StatBox label="Bookings This Month" value="4" desc="Closed token amount" color="text-[#1D9E75]" />
          <StatBox label="Pipeline Value" value="₹4.2 Cr" desc="Weighted value ₹1.84Cr" color="text-[#2E86AB]" />
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Condensed Kanban Stage Summary */}
          <Card className="col-span-12 lg:col-span-6 p-4 border border-border bg-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
                  <GitBranch className="h-3.5 w-3.5 text-primary" /> Condensed Stage Distribution
                </div>
                <button 
                  onClick={() => setActiveTab("pipeline")}
                  className="text-[9px] font-bold text-primary hover:underline font-mono"
                >
                  View Kanban →
                </button>
              </div>

              <div className="space-y-2.5">
                {[
                  { stage: "Inquiry", count: 8, color: "bg-slate-400", pct: "34.7%" },
                  { stage: "Site Visit Scheduled", count: 5, color: "bg-[#2E86AB]", pct: "21.7%" },
                  { stage: "Visited", count: 4, color: "bg-[#0E86E9]", pct: "17.4%" },
                  { stage: "Negotiation", count: 6, color: "bg-[#E8A838] animate-pulse", pct: "26.1%" },
                  { stage: "Booking Amount Paid", count: 3, color: "bg-[#1D9E75]", pct: "13.0%" },
                  { stage: "Agreement Signed", count: 2, color: "bg-[#1A3C5E]", pct: "8.7%" },
                  { stage: "Loan Processing", count: 1, color: "bg-[#2E86AB]", pct: "4.3%" }
                ].map((s) => (
                  <div key={s.stage} className="space-y-1">
                    <div className="flex justify-between text-[10.5px] font-semibold text-slate-500">
                      <span className="flex items-center gap-1.5 font-sans font-semibold">
                        <span className={`h-2 w-2 rounded-full ${s.color}`} />
                        {s.stage}
                      </span>
                      <div className="font-mono">
                        <span className="text-foreground font-bold">{s.count} deals</span> ({s.pct})
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${s.color}`} style={{ width: s.pct }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Today's Activity Feed */}
          <Card className="col-span-12 lg:col-span-6 p-4 border border-border bg-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
                  <Activity className="h-3.5 w-3.5 text-emerald-600 animate-pulse" /> Today's Operations Feed
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="space-y-3.5 max-h-[300px] overflow-y-auto pr-1 scrollbar-none">
                {[
                  { time: "14:32", event: "WhatsApp reminder sent to Rajesh Patel for site visit", type: "scheduler" },
                  { time: "13:58", event: "CRM Sync merged duplicate inquiry for Deepak Trivedi (MagicBricks)", type: "sync" },
                  { time: "12:15", event: "Post-visit Sequence Step 1 thank you WhatsApp dispatched to Rajesh Patel", type: "follow-up" },
                  { time: "10:45", event: "🚨 Red Alert: Deepak Trivedi deal stuck in Negotiation stage for 19 days", type: "alert" },
                  { time: "09:30", event: "Nurture Drip: Pooja Sharma re-engaged on WhatsApp; routed back to agent Priya Rana", type: "drip" },
                  { time: "08:12", event: "AI Listing Writer published Greenview Heights listing copy to 99acres", type: "writer" }
                ].map((act, idx) => {
                  const badgeColor = act.type === "alert" ? "text-red-500 font-bold animate-pulse" : act.type === "follow-up" ? "text-primary" : "text-muted-foreground";
                  return (
                    <div key={idx} className="flex gap-3 text-xs leading-relaxed font-semibold border-b border-border/40 pb-2.5 last:border-0 last:pb-0">
                      <span className="font-mono text-slate-400 shrink-0 mt-0.5">{act.time}</span>
                      <span className={`${badgeColor}`}>{act.event}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // Deduplication action handler
  const handleResolveDuplicate = (action: "merge" | "separate" | "skip") => {
    if (duplicates.length === 0) return;
    const currentDup = duplicates[0];

    if (action === "merge") {
      // Create new merge log entry
      const newMergeLog = {
        id: dedupLogs.length + 1,
        primary: `${currentDup.cardA.name} (${currentDup.cardA.id})`,
        merged: `${mergedSelections.name === "cardA" ? currentDup.cardA.name : currentDup.cardB.name} (${currentDup.cardB.id})`,
        reason: currentDup.fieldMatch,
        outcome: `Merged — ${currentDup.cardA.source} + ${currentDup.cardB.source}`
      };
      setDedupLogs(prev => [newMergeLog, ...prev]);

      // Create new sync log entry
      const newSyncLog = {
        id: syncLogs.length + 1,
        name: mergedSelections.name === "cardA" ? currentDup.cardA.name : currentDup.cardB.name,
        source: currentDup.cardB.source,
        time: new Date().toLocaleTimeString("en-IN", { hour: '2-digit', minute: '2-digit' }),
        status: "Clean",
        campaign: currentDup.cardB.campaign,
        action: `Merged with ${currentDup.cardA.id}`
      };
      setSyncLogs(prev => [newSyncLog, ...prev]);

      setDedupSuccessMsg(`Successfully merged ${currentDup.cardA.name}'s profiles!`);
    } else if (action === "separate") {
      // Create separate sync log entry
      const newSyncLog = {
        id: syncLogs.length + 1,
        name: currentDup.cardB.name,
        source: currentDup.cardB.source,
        time: new Date().toLocaleTimeString("en-IN", { hour: '2-digit', minute: '2-digit' }),
        status: "Clean",
        campaign: currentDup.cardB.campaign,
        action: `Pushed separate CRM Record`
      };
      setSyncLogs(prev => [newSyncLog, ...prev]);

      setDedupSuccessMsg(`Created separate lead record for ${currentDup.cardB.name}.`);
    } else if (action === "skip") {
      // Skip: push it to the end of the queue
      setDuplicates(prev => {
        const next = [...prev];
        const skipped = next.shift();
        if (skipped) next.push(skipped);
        return next;
      });
      return; // don't reset selections or show success message for skip
    }

    // Remove first duplicate from state
    setDuplicates(prev => prev.slice(1));

    // Clear message after 4s
    setTimeout(() => {
      setDedupSuccessMsg("");
    }, 4000);

    // Reset default selections
    setMergedSelections({
      name: "cardB",
      email: "cardA",
      budget: "cardB",
      locality: "cardB",
      notes: "both"
    });
  };

  // --- 2. CRM Sync & Deduplication Renders ---
  const renderCRMSync = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        {/* Sync Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-border bg-card p-4 rounded-2xl">
          <div className="text-center md:border-r border-border/40">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Synced Today</div>
            <div className="text-base font-bold text-foreground font-mono mt-1">118 leads</div>
          </div>
          <div className="text-center md:border-r border-border/40">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Duplicates Merged</div>
            <div className="text-base font-bold text-emerald-600 font-mono mt-1">14 merged</div>
          </div>
          <div className="text-center md:border-r border-border/40">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Sync Health</div>
            <div className="text-xs font-extrabold text-emerald-600 mt-1.5 flex items-center gap-1 justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> All API Systems Live
            </div>
          </div>
          <div className="text-center">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Dedup Rate</div>
            <div className="text-base font-bold text-foreground font-mono mt-1">32% merged MTD</div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Sync logs log */}
          <Card className="col-span-12 lg:col-span-7 p-0 overflow-hidden h-[450px] flex flex-col border border-border bg-card">
            <div className="p-3.5 bg-secondary/30 border-b border-border flex justify-between items-center">
              <h3 className="font-bold text-xs text-foreground font-display">Unified Inbound CRM Sync webhook Log</h3>
              <span className="text-[9px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-mono font-bold">listening...</span>
            </div>
            
            <div className="overflow-y-auto flex-1 scrollbar-none bg-card">
              <table className="w-full text-left text-xs divide-y divide-border/60">
                <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                  <tr>
                    <th className="px-3.5 py-2">Lead</th>
                    <th className="px-3.5 py-2 font-mono">Source</th>
                    <th className="px-3.5 py-2">Campaign</th>
                    <th className="px-3.5 py-2">Normalisation</th>
                    <th className="px-3.5 py-2">Outcome</th>
                    <th className="px-3.5 py-2">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30 bg-background font-medium text-foreground">
                  {syncLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-secondary/15">
                      <td className="px-3.5 py-2.5 font-bold">{log.name}</td>
                      <td className="px-3.5 py-2.5">{renderPlatformBadge(log.source)}</td>
                      <td className="px-3.5 py-2.5 text-slate-500 font-semibold">{log.campaign}</td>
                      <td className="px-3.5 py-2.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          log.status === "Clean" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-amber-50 text-amber-600 border border-amber-100"
                        }`}>
                          {log.status}
                        </span>
                      </td>
                      <td className="px-3.5 py-2.5 font-mono text-[10.5px] font-bold text-slate-600">{log.action}</td>
                      <td className="px-3.5 py-2.5 font-mono text-slate-400">{log.time.split(" ").slice(-1)[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Deduplication merged records details */}
          <Card className="col-span-12 lg:col-span-5 p-0 overflow-hidden h-[450px] flex flex-col border border-border bg-card">
            <div className="p-3.5 bg-secondary/30 border-b border-border">
              <h3 className="font-bold text-xs text-foreground font-display">Auto-Deduplication Merge Registry</h3>
            </div>
            
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3.5">
                <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                  Fortiv dedup layer scans incoming phone and email records to merge duplicates from third-party portals, maintaining a clean 1-record pipeline.
                </p>

                <div className="space-y-2">
                  {dedupLogs.map((log) => (
                    <div key={log.id} className="p-3 rounded-xl border border-border bg-background space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-foreground">{log.primary}</span>
                        <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Merged</span>
                      </div>
                      <div className="text-[10px] font-medium text-slate-500">
                        <div>Merged Duplicate: <strong>{log.merged}</strong></div>
                        <div className="mt-1 font-mono text-slate-400">Match rule: {log.reason}</div>
                      </div>
                      <div className="text-[10.5px] font-bold text-emerald-600 flex items-center gap-1">
                        <Check className="h-3.5 w-3.5" /> {log.outcome}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center border-t border-border/40 pt-3">
                All data transfers compliant with DPDP Act 2023
              </div>
            </div>
          </Card>
        </div>

        {/* Visual Deduplication Sandbox */}
        <Card className="col-span-12 p-5 border border-border bg-card mt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/40 pb-3 mb-4 gap-2">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#E8A838] flex items-center gap-1.5 font-display">
                <Sparkles className="h-3.5 w-3.5 animate-pulse text-[#E8A838]" /> Sandbox Conflict Resolver
              </div>
              <h3 className="font-bold text-sm text-foreground font-display mt-0.5">
                Visual Deduplication Sandbox ({duplicates.length} unresolved)
              </h3>
            </div>
            {duplicates.length > 0 && (
              <span className="text-[10px] font-bold text-slate-500 font-mono bg-secondary px-2.5 py-1 rounded border border-border/40">
                Rule triggered: {duplicates[0].fieldMatch}
              </span>
            )}
          </div>

          {dedupSuccessMsg && (
            <div className="mb-4 p-2.5 text-xs font-semibold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/50 rounded-xl animate-fade-in flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>{dedupSuccessMsg}</span>
            </div>
          )}

          {duplicates.length > 0 ? (
            <div className="space-y-5 animate-in fade-in duration-300">
              {/* Profile cards side by side */}
              <div className="grid grid-cols-12 gap-5">
                {/* Left Card: Existing CRM */}
                <div className="col-span-12 lg:col-span-5 p-4 rounded-xl border border-border bg-slate-50 dark:bg-slate-900/10 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center border-b border-border/40 pb-2 mb-3">
                      <span className="text-[10.5px] font-bold text-foreground">Existing CRM Record</span>
                      <span className="text-[9.5px] bg-[#1A3C5E]/10 text-[#1A3C5E] px-2 py-0.5 rounded font-mono font-bold">
                        {duplicates[0].cardA.id}
                      </span>
                    </div>
                    <div className="space-y-2.5 text-xs">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Source</span>
                        {renderPlatformBadge(duplicates[0].cardA.source)}
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Created</span>
                        <span className="font-mono-jb text-[11px] text-slate-600 dark:text-slate-400 font-semibold">{duplicates[0].cardA.created}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Campaign</span>
                        <span className="font-semibold text-slate-600 dark:text-slate-400">{duplicates[0].cardA.campaign}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Original Notes</span>
                        <p className="text-slate-500 italic text-[11px] leading-relaxed">"{duplicates[0].cardA.notes}"</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Card: Incoming Sync */}
                <div className="col-span-12 lg:col-span-5 p-4 rounded-xl border border-border bg-slate-50 dark:bg-slate-900/10 flex flex-col justify-between lg:order-3">
                  <div>
                    <div className="flex justify-between items-center border-b border-border/40 pb-2 mb-3">
                      <span className="text-[10.5px] font-bold text-foreground">Incoming Sync Record</span>
                      <span className="text-[9.5px] bg-[#E8A838]/10 text-amber-700 px-2 py-0.5 rounded font-mono font-bold">
                        {duplicates[0].cardB.id}
                      </span>
                    </div>
                    <div className="space-y-2.5 text-xs">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Source</span>
                        {renderPlatformBadge(duplicates[0].cardB.source)}
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Received</span>
                        <span className="font-mono-jb text-[11px] text-slate-600 dark:text-slate-400 font-semibold">{duplicates[0].cardB.created}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Campaign</span>
                        <span className="font-semibold text-slate-600 dark:text-slate-400">{duplicates[0].cardB.campaign}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Incoming Notes</span>
                        <p className="text-slate-500 italic text-[11px] leading-relaxed">"{duplicates[0].cardB.notes}"</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle info column */}
                <div className="col-span-12 lg:col-span-2 flex flex-col justify-center gap-1.5 p-3 rounded-xl border border-dashed border-border/60 bg-secondary/5 lg:order-2">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 text-center mb-1">
                    Conflict Resolver
                  </div>
                  <div className="text-[10px] text-slate-500 text-center leading-relaxed font-semibold">
                    Select values on either card row to resolve conflicting data fields.
                  </div>
                </div>
              </div>

              {/* Grid showing compared fields */}
              <div className="space-y-2">
                {[
                  { key: "name", label: "Full Name" },
                  { key: "phone", label: "Phone Number" },
                  { key: "email", label: "Email Address" },
                  { key: "budget", label: "Budget Range" },
                  { key: "locality", label: "Locality" },
                  { key: "notes", label: "Profile Notes" }
                ].map((field) => {
                  const cardA = duplicates[0].cardA;
                  const cardB = duplicates[0].cardB;
                  const valA = (cardA as any)[field.key] as string;
                  const valB = (cardB as any)[field.key] as string;
                  const isDiff = valA !== valB;
                  const isSelectedA = (mergedSelections as any)[field.key] === "cardA";
                  const isSelectedB = (mergedSelections as any)[field.key] === "cardB";
                  const isBoth = (mergedSelections as any)[field.key] === "both";

                  return (
                    <div 
                      key={field.key} 
                      className={`grid grid-cols-12 gap-3 p-2.5 rounded-xl border transition-all ${
                        isDiff 
                          ? "bg-amber-500/5 dark:bg-amber-500/3 border-amber-500/25" 
                          : "bg-transparent border-transparent"
                      }`}
                    >
                      {/* Label */}
                      <div className="col-span-12 sm:col-span-3 flex flex-col justify-center">
                        <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 font-display">
                          {field.label}
                        </span>
                        {isDiff && (
                          <span className="text-[8px] font-extrabold text-[#E8A838] uppercase tracking-widest mt-0.5 animate-pulse">
                            ⚠️ Conflict
                          </span>
                        )}
                      </div>

                      {/* Card A value */}
                      <div 
                        onClick={() => isDiff && setMergedSelections(prev => ({ ...prev, [field.key]: "cardA" }))}
                        className={`col-span-12 sm:col-span-4 p-2 rounded-lg border text-xs font-semibold cursor-pointer transition-all flex items-center justify-between ${
                          isSelectedA 
                            ? "bg-[#0E86E9]/10 border-[#0E86E9] text-[#0E86E9] shadow-sm" 
                            : "bg-background border-border/50 hover:border-slate-400 text-slate-600 dark:text-slate-400"
                        }`}
                      >
                        <span className="truncate">{valA}</span>
                        <div className={`h-3.5 w-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelectedA ? "border-[#0E86E9] bg-[#0E86E9]" : "border-slate-300 bg-transparent"
                        }`}>
                          {isSelectedA && <Check className="h-2 w-2 text-white stroke-[3px]" />}
                        </div>
                      </div>

                      {/* Direction arrow / Merge */}
                      <div className="hidden sm:flex col-span-1 items-center justify-center">
                        {field.key === "notes" && isDiff ? (
                          <button 
                            onClick={() => setMergedSelections(prev => ({ ...prev, [field.key]: isBoth ? "cardB" : "both" }))}
                            className={`h-5 px-2 rounded-md font-bold text-[8.5px] uppercase tracking-wider transition-all border ${
                              isBoth 
                                ? "bg-emerald-500/20 border-emerald-500 text-emerald-600" 
                                : "bg-background border-border text-slate-400 hover:border-slate-500 hover:text-slate-600"
                            }`}
                            title="Combine notes from both profiles"
                          >
                            {isBoth ? "Combined" : "Merge"}
                          </button>
                        ) : (
                          <ArrowRight className={`h-3.5 w-3.5 ${isDiff ? "text-amber-500 animate-pulse" : "text-slate-300"}`} />
                        )}
                      </div>

                      {/* Card B value */}
                      <div 
                        onClick={() => isDiff && setMergedSelections(prev => ({ ...prev, [field.key]: "cardB" }))}
                        className={`col-span-12 sm:col-span-4 p-2 rounded-lg border text-xs font-semibold cursor-pointer transition-all flex items-center justify-between ${
                          isSelectedB 
                            ? "bg-[#0E86E9]/10 border-[#0E86E9] text-[#0E86E9] shadow-sm" 
                            : isBoth && field.key === "notes"
                              ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-600"
                              : "bg-background border-border/50 hover:border-slate-400 text-slate-600 dark:text-slate-400"
                        }`}
                      >
                        <span className="truncate">{valB}</span>
                        <div className={`h-3.5 w-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelectedB ? "border-[#0E86E9] bg-[#0E86E9]" : isBoth && field.key === "notes" ? "border-emerald-500 bg-emerald-500" : "border-slate-300 bg-transparent"
                        }`}>
                          {(isSelectedB || isBoth) && <Check className="h-2 w-2 text-white stroke-[3px]" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Final Merged Record Preview */}
              <div className="bg-secondary/15 dark:bg-slate-900/10 border border-border/40 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-display">Merged Record Preview</span>
                  <span className="text-[9px] font-bold bg-[#0E86E9]/10 text-[#0E86E9] px-2 py-0.5 rounded font-mono">Ready to commit</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
                  <div>
                    <span className="text-slate-400 text-[9px] block uppercase tracking-wide">Name</span>
                    <span className="text-foreground mt-0.5 block">{mergedSelections.name === "cardA" ? duplicates[0].cardA.name : duplicates[0].cardB.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[9px] block uppercase tracking-wide">Email</span>
                    <span className="text-foreground mt-0.5 block">{mergedSelections.email === "cardA" ? duplicates[0].cardA.email : duplicates[0].cardB.email}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[9px] block uppercase tracking-wide">Phone</span>
                    <span className="text-foreground mt-0.5 block font-mono">{duplicates[0].cardA.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[9px] block uppercase tracking-wide">Budget</span>
                    <span className="text-foreground mt-0.5 block">{mergedSelections.budget === "cardA" ? duplicates[0].cardA.budget : duplicates[0].cardB.budget}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[9px] block uppercase tracking-wide">Locality</span>
                    <span className="text-foreground mt-0.5 block">{mergedSelections.locality === "cardA" ? duplicates[0].cardA.locality : duplicates[0].cardB.locality}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[9px] block uppercase tracking-wide">Source Channels</span>
                    <span className="text-foreground mt-0.5 block text-[#0E86E9]">
                      {duplicates[0].cardA.source} + {duplicates[0].cardB.source}
                    </span>
                  </div>
                </div>
                <div className="text-xs border-t border-border/30 pt-2 text-slate-500 font-medium">
                  <span className="text-slate-400 text-[9px] block uppercase tracking-wide mb-1 font-bold">Combined Profile Notes</span>
                  <p className="leading-relaxed text-foreground bg-background p-2.5 rounded-lg border border-border/40 font-semibold italic text-[11px]">
                    {mergedSelections.notes === "both" 
                      ? `${duplicates[0].cardA.notes} \n[Merged from ${duplicates[0].cardB.source}]: ${duplicates[0].cardB.notes}`
                      : mergedSelections.notes === "cardA" 
                        ? duplicates[0].cardA.notes 
                        : duplicates[0].cardB.notes}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 border-t border-border/40 pt-4">
                <button
                  onClick={() => handleResolveDuplicate("skip")}
                  className="h-9 px-4 rounded-xl border border-border bg-card hover:bg-muted text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-foreground transition-all cursor-pointer"
                >
                  Skip Conflict
                </button>
                <button
                  onClick={() => handleResolveDuplicate("separate")}
                  className="h-9 px-4 rounded-xl border border-border bg-card hover:bg-muted text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-foreground transition-all cursor-pointer"
                >
                  Keep Separate (2 Leads)
                </button>
                <button
                  onClick={() => handleResolveDuplicate("merge")}
                  className="h-9 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
                >
                  <CheckCheck className="h-4 w-4" /> Confirm & Merge Profiles
                </button>
              </div>
            </div>
          ) : (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 animate-in fade-in duration-300">
              <div className="h-12 w-12 rounded-full bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-foreground uppercase tracking-widest font-display">All Conflicts Resolved</h4>
                <p className="text-xs text-muted-foreground mt-1 max-w-[280px]">
                  There are no pending duplicate records in the sync sandbox right now. Nice job!
                </p>
              </div>
            </div>
          )}
        </Card>
      </div>
    );
  };

  // --- 3. Site Visit Scheduler States ---
  const [selectedVisitFilter, setSelectedVisitFilter] = useState("all");
  const [visitList, setVisitList] = useState(upcomingVisits);
  const [reschedulePrompt, setReschedulePrompt] = useState("");

  const filteredVisits = useMemo(() => {
    if (selectedVisitFilter === "all") return visitList;
    return visitList.filter(v => v.status.toLowerCase() === selectedVisitFilter.toLowerCase());
  }, [selectedVisitFilter, visitList]);

  const handleReschedule = (visitId: string) => {
    const text = prompt("Enter new date and time for rescheduling (DD/MM/YYYY hh:mm AM/PM):");
    if (!text) return;
    setVisitList(prev => prev.map(v => v.id === visitId ? { ...v, time: text, status: "Rescheduled" } : v));
    alert("Reschedule WhatsApp confirmation request dispatched to buyer.");
  };

  const renderScheduler = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        
        {/* Calendar visual week selector */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border rounded-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Filter:</span>
            <div className="flex gap-1">
              {["all", "confirmed", "rescheduled"].map((f) => (
                <button
                  key={f}
                  onClick={() => setSelectedVisitFilter(f)}
                  className={`h-7 px-3 rounded-lg text-xs font-bold transition-all border uppercase tracking-wider ${
                    selectedVisitFilter === f ? "bg-ink border-ink text-cream" : "bg-background border-border text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <span className="text-xs font-semibold text-muted-foreground font-mono">No-show rate this month: 18% (Target &lt; 25%)</span>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Calendar Block (Left Area) */}
          <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card flex flex-col justify-between min-h-[450px]">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-2">
                <h3 className="font-bold text-xs text-foreground font-display flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-primary" /> Visual Scheduler Board (Week view Jan 15-22)
                </h3>
              </div>

              {/* Weekly calendar slots */}
              <div className="grid grid-cols-7 gap-2 text-center text-xs h-[300px]">
                {["Wed 15", "Thu 16", "Fri 17", "Sat 18", "Sun 19", "Mon 20", "Tue 21"].map((day, idx) => {
                  const isWeekend = day.includes("Sat") || day.includes("Sun");
                  return (
                    <div key={idx} className={`rounded-xl border border-border/60 p-2 flex flex-col justify-between ${isWeekend ? "bg-slate-500/5" : "bg-background"}`}>
                      <span className="font-bold text-muted-foreground block text-[10px]">{day}</span>
                      
                      {/* Blocks inside calendar */}
                      <div className="flex-1 py-3 flex flex-col gap-1 justify-center">
                        {day.includes("Sat") && (
                          <>
                            <div className="p-1 rounded bg-[#E8A838]/15 border border-[#E8A838]/20 text-[8px] font-bold text-amber-700 truncate">11:00 AM Patel</div>
                            <div className="p-1 rounded bg-[#0E86E9]/15 border border-[#0E86E9]/20 text-[8px] font-bold text-primary truncate">03:00 PM Shah</div>
                          </>
                        )}
                        {day.includes("Sun") && (
                          <>
                            <div className="p-1 rounded bg-[#1D9E75]/15 border border-[#1D9E75]/20 text-[8px] font-bold text-[#1D9E75] truncate">10:00 AM Deepak</div>
                            <div className="p-1 rounded bg-slate-100 border border-slate-200 text-[8px] font-bold text-slate-500 truncate">02:00 PM Mehta</div>
                          </>
                        )}
                        {!day.includes("Sat") && !day.includes("Sun") && idx === 5 && (
                          <div className="p-1 rounded bg-[#2E86AB]/15 border border-[#2E86AB]/20 text-[8px] font-bold text-cyan-700 truncate">11:30 AM Joshi</div>
                        )}
                      </div>

                      <span className="text-[8px] font-semibold text-slate-400 font-mono">
                        {day.includes("Sat") ? "2 booked" : day.includes("Sun") ? "2 booked" : idx === 5 ? "1 booked" : "0 slots"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-border/40 pt-3 flex justify-between items-center text-xs">
              <span className="text-muted-foreground font-semibold">Layers:</span>
              <div className="flex gap-3 text-[10px] font-bold">
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-amber-500" /> Hot lead (Score &gt; 70)</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-primary" /> Warm lead</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-slate-400" /> General / Rescheduled</span>
              </div>
            </div>
          </Card>

          {/* Upcoming visits (Right Area) */}
          <div className="col-span-12 lg:col-span-5 space-y-4">
            <Card className="p-4 border border-border bg-card flex flex-col h-[260px] justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display mb-2.5">Confirmed visit schedule</div>
                
                <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1 scrollbar-none">
                  {filteredVisits.map((v) => (
                    <div key={v.id} className="p-2.5 rounded-xl border border-border bg-background flex items-center justify-between text-xs hover:bg-secondary/40 transition-colors">
                      <div>
                        <div className="font-bold text-foreground flex items-center gap-1.5">
                          {v.name}
                          <span className="text-[9px] font-mono bg-secondary px-1 py-0.5 rounded text-slate-500">Score: {v.score}</span>
                        </div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">{v.project} · Agent: {v.agent}</div>
                      </div>
                      <div className="text-right shrink-0 flex flex-col items-end gap-1">
                        <span className="font-mono text-[9px] font-semibold text-slate-400">{v.time.split(" ")[0]} {v.time.split(" ")[1]}</span>
                        <div className="flex gap-1.5 items-center">
                          <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                            v.status === "Rescheduled" ? "bg-amber-50 text-amber-600 border border-amber-100" : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                          }`}>
                            {v.status}
                          </span>
                          <button
                            onClick={() => handleReschedule(v.id)}
                            className="h-5 w-5 bg-card hover:bg-secondary border border-border rounded flex items-center justify-center text-slate-500 hover:text-foreground"
                            title="Reschedule Visit"
                          >
                            <CalendarDays className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center border-t border-border/40 pt-2.5">
                Layered reminders sent automatically via WhatsApp (T-24h, Day-of, T-1h)
              </div>
            </Card>

            {/* No show log list */}
            <Card className="p-4 border border-border bg-card flex flex-col justify-between h-[175px]">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-red-500 font-display mb-2 flex items-center gap-1.5">
                  <AlertCircle className="h-3.5 w-3.5 text-red-500 animate-pulse" /> No-Show registry queue
                </div>
                
                <div className="space-y-2">
                  {noShowVisits.map((v) => (
                    <div key={v.id} className="text-xs flex items-center justify-between border-b border-border/40 pb-2 last:border-0 last:pb-0">
                      <div>
                        <div className="font-bold text-foreground">{v.name}</div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">Reason: "{v.reason}" · {v.time.split(" ")[0]}</div>
                      </div>
                      <button
                        onClick={() => alert("Reschedule prompt triggered to " + v.name + " WhatsApp.")}
                        className="h-7 px-3 bg-red-50 border border-red-200 hover:bg-red-100 text-red-600 font-bold rounded-lg text-[10px] transition-colors"
                      >
                        Reschedule WhatsApp
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  };

  // --- 4. Post-Visit Follow-Up Agent States ---
  const [selectedSequenceKey, setSelectedSequenceKey] = useState<"rajesh" | "priya" | "deepak" | "amit">("rajesh");
  const activeSequence = useMemo(() => followUpSequences[selectedSequenceKey], [selectedSequenceKey]);

  const renderFollowUp = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        
        {/* Objection handling rule webhooks banner */}
        <div className="p-3 bg-card border border-border rounded-2xl flex justify-between items-center flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-500 uppercase tracking-wider">Objection Handling Webhooks:</span>
            <span className="font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-bold">🟢 Trigger active</span>
          </div>
          <span className="font-mono text-slate-400">Post-visit conversion rate: 28% (vs 18% baseline)</span>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Active sequences table (Left Area) */}
          <Card className="col-span-12 lg:col-span-7 p-0 overflow-hidden h-[480px] flex flex-col border border-border bg-card">
            <div className="p-3.5 bg-secondary/30 border-b border-border">
              <h3 className="font-bold text-xs text-foreground font-display">Active Post-Visit Follow-Up Sequences</h3>
            </div>
            
            <div className="overflow-y-auto flex-1 scrollbar-none bg-card">
              <table className="w-full text-left text-xs divide-y divide-border/60">
                <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                  <tr>
                    <th className="px-3.5 py-2.5">Buyer</th>
                    <th className="px-3.5 py-2.5">Visit Date</th>
                    <th className="px-3.5 py-2.5 font-mono">Current Step</th>
                    <th className="px-3.5 py-2.5 font-mono">Objection flag</th>
                    <th className="px-3.5 py-2.5 font-mono">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-medium text-foreground bg-background">
                  {(Object.keys(followUpSequences) as Array<keyof typeof followUpSequences>).map((key) => {
                    const seq = followUpSequences[key];
                    const isSelected = selectedSequenceKey === key;
                    const isStuck = seq.status === "Agent Action";
                    return (
                      <tr
                        key={key}
                        onClick={() => setSelectedSequenceKey(key)}
                        className={`hover:bg-secondary/15 transition-colors cursor-pointer ${
                          isSelected ? "bg-secondary/25 border-l-2 border-primary font-bold" : ""
                        }`}
                      >
                        <td className="px-3.5 py-3">
                          <div className="font-bold">{seq.name}</div>
                          <div className="text-[10px] text-slate-500 font-medium truncate max-w-xs mt-0.5">"{seq.lastMsg}"</div>
                        </td>
                        <td className="px-3.5 py-3 font-mono text-slate-500">{seq.visitDate}</td>
                        <td className="px-3.5 py-3 font-mono font-bold text-primary">Step {seq.currentStep} · {seq.stepName}</td>
                        <td className="px-3.5 py-3">
                          {seq.objection !== "None" ? (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-600 border border-amber-200">
                              ⚠️ {seq.objection}
                            </span>
                          ) : (
                            <span className="text-slate-400 font-mono">—</span>
                          )}
                        </td>
                        <td className="px-3.5 py-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            isStuck ? "bg-red-50 text-red-600 border border-red-100" : seq.status === "Slow" ? "bg-amber-50 text-amber-600 border border-amber-100" : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                          }`}>
                            {seq.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Timeline and WhatsApp dynamic conversation preview (Right Area) */}
          <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card flex flex-col justify-between h-[480px]">
            <div className="flex-1 flex flex-col min-h-0">
              <div className="mb-2.5 border-b border-border/40 pb-2.5 flex justify-between items-center shrink-0">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Active Follow-Up Timeline</div>
                  <h4 className="text-xs font-bold text-foreground">Buyer: {activeSequence.name}</h4>
                </div>
                <span className="text-[9.5px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  Step {activeSequence.currentStep} of 7 Completed
                </span>
              </div>

              {/* Chat timeline visual */}
              <div className="flex-1 overflow-y-auto space-y-3 p-3 bg-secondary/15 rounded-xl border border-border/60 overflow-y-auto">
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center mb-1">
                  WhatsApp Conversation Thread
                </div>
                
                {activeSequence.conversation.map((msg, idx) => {
                  const isAi = msg.sender === "ai";
                  return (
                    <div key={idx} className={`flex ${isAi ? "justify-start" : "justify-end"} animate-in fade-in duration-300`}>
                      <div className={`max-w-[85%] rounded-xl px-2.5 py-1.5 text-[10.5px] leading-relaxed shadow-sm font-semibold ${
                        isAi 
                          ? "bg-white text-foreground border border-border rounded-tl-none" 
                          : "bg-primary text-primary-foreground rounded-br-none"
                      }`}>
                        {msg.text}
                        <div className={`text-right text-[7.5px] font-mono mt-1 ${isAi ? "text-slate-400" : "text-primary-foreground/75"}`}>
                          {msg.time.split(" ")[1]}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-border pt-3 mt-4 shrink-0 flex gap-2">
              <button
                onClick={() => alert("Follow-up paused for manual override by Agent.")}
                className="flex-1 h-8 rounded-lg bg-secondary hover:bg-secondary/70 border border-border text-foreground text-xs font-bold transition-all"
              >
                Pause Sequence
              </button>
              <button
                onClick={() => alert("Drafting manual response for " + activeSequence.name)}
                className="flex-1 h-8 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold transition-all shadow-sm"
              >
                Send Manual Message
              </button>
            </div>
          </Card>
        </div>

        {/* Objections rules webhook index */}
        <Card className="p-0 overflow-hidden border border-border bg-card">
          <div className="p-3 bg-secondary/30 border-b border-border">
            <h3 className="font-bold text-xs text-foreground font-display">Objection Handling Trigger Map (Automation webhook rules)</h3>
          </div>
          <div className="overflow-x-auto scrollbar-none bg-card">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                <tr>
                  <th className="px-4 py-2 font-bold">Objection Keyword Group</th>
                  <th className="px-4 py-2 font-bold">Automated Response Document Dispatched</th>
                  <th className="px-4 py-2 font-bold">Downstream Trigger Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 font-medium text-foreground bg-background">
                {objectionsWebhookRules.map((rule, idx) => (
                  <tr key={idx} className="hover:bg-secondary/10">
                    <td className="px-4 py-2.5 font-bold">{rule.keyword}</td>
                    <td className="px-4 py-2.5 font-mono text-slate-500 font-bold">{rule.responseType}</td>
                    <td className="px-4 py-2.5">
                      <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100 font-extrabold uppercase font-mono">
                        Active Webhook
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

  // --- 5. Nurture Drip Engine States ---
  const renderDripEngine = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        
        {/* Nurture drip tracks stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatBox label="Total Leads in Drip" value="142" desc="Long-term nurture" color="text-[#1A3C5E]" />
          <StatBox label="Track A — Active (30d)" value="24" desc="Every 3-4 days" color="text-red-500 font-bold" />
          <StatBox label="Track B — Warm (60d)" value="48" desc="Every 7 days" color="text-[#E8A838]" />
          <StatBox label="Track C — Long-Horizon (90d)" value="70" desc="Every 14 days" color="text-[#2E86AB]" />
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Active drip leads table */}
          <Card className="col-span-12 lg:col-span-7 p-0 overflow-hidden h-[450px] flex flex-col border border-border bg-card">
            <div className="p-3.5 bg-secondary/30 border-b border-border">
              <h3 className="font-bold text-xs text-foreground font-display">Active Nurture Leads Registry</h3>
            </div>
            
            <div className="overflow-y-auto flex-1 scrollbar-none bg-card">
              <table className="w-full text-left text-xs divide-y divide-border/60">
                <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                  <tr>
                    <th className="px-3.5 py-2.5">Buyer</th>
                    <th className="px-3.5 py-2.5">Drip Track</th>
                    <th className="px-3.5 py-2.5 font-mono">Sent / Opened</th>
                    <th className="px-3.5 py-2.5 font-mono">Clicks</th>
                    <th className="px-3.5 py-2.5 font-mono">Last Active</th>
                    <th className="px-3.5 py-2.5 font-mono">Next Message due</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-medium text-foreground bg-background">
                  {dripNurtureLeads.map((lead, idx) => {
                    const isReengaged = lead.status === "reengaged";
                    return (
                      <tr
                        key={idx}
                        className={`hover:bg-secondary/15 transition-colors ${
                          isReengaged ? "bg-emerald-50/50 font-bold" : ""
                        }`}
                      >
                        <td className="px-3.5 py-3 font-bold flex items-center gap-1.5">
                          {lead.name}
                          {isReengaged && (
                            <span className="text-[8px] bg-emerald-500 text-white font-extrabold px-1.5 py-0.5 rounded font-mono uppercase animate-pulse">
                              Re-engaged
                            </span>
                          )}
                        </td>
                        <td className="px-3.5 py-3 font-bold text-slate-500">{lead.track}</td>
                        <td className="px-3.5 py-3 font-mono font-bold text-slate-600">{lead.sent} sent · {lead.opened} read</td>
                        <td className="px-3.5 py-3 font-mono font-extrabold text-[#0E86E9]">{lead.clicks} clicks</td>
                        <td className="px-3.5 py-3 font-mono text-slate-400">{lead.lastActive}</td>
                        <td className="px-3.5 py-3 font-mono font-bold text-primary">{lead.nextSend}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Drip Content Calendar details (Right Area) */}
          <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card flex flex-col justify-between h-[450px]">
            <div>
              <div className="border-b border-border/40 pb-2 mb-3">
                <h3 className="font-bold text-xs text-foreground font-display">Drip Content Calendar (14 Days)</h3>
              </div>

              <div className="space-y-3">
                {dripContentCalendar.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl border border-border bg-background flex gap-3 hover:bg-secondary/30 transition-colors">
                    <div className="h-10 w-10 bg-secondary border border-border rounded-lg shrink-0 flex flex-col justify-center items-center text-center font-bold">
                      <span className="text-[10px] font-mono leading-none text-slate-500 font-extrabold uppercase">{item.date.split(" ")[1]}</span>
                      <span className="text-[14px] font-mono leading-none text-foreground font-black mt-0.5">{item.date.split(" ")[0]}</span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-bold text-[#0E86E9] uppercase tracking-wider font-mono">{item.type}</span>
                        <span className="text-[9px] font-bold bg-secondary px-1.5 py-0.5 rounded font-mono">{item.track}</span>
                      </div>
                      <h4 className="font-bold text-xs text-foreground mt-1 truncate">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-3 mt-4 text-xs font-semibold text-slate-500 leading-relaxed text-center">
              Re-engagement signals: link click, keyword reply, or callback trigger automatically exit drip to Active Pipeline.
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // --- 6. Deal Pipeline Tracker States ---
  const [boardDeals, setBoardDeals] = useState(demoDeals);
  const [draggedId, setDraggedId] = useState<string | null>(null);

  const getDealsByStage = (stageId: string) => {
    return boardDeals.filter((d) => d.stage === stageId);
  };

  const getStageSum = (stageId: string) => {
    const sum = boardDeals.filter((d) => d.stage === stageId).reduce((acc, curr) => acc + curr.value, 0);
    return `₹${sum}L`;
  };

  const handleDragStart = (dealId: string) => {
    setDraggedId(dealId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (stageId: string) => {
    if (!draggedId) return;
    setBoardDeals((prev) =>
      prev.map((d) => (d.id === draggedId ? { ...d, stage: stageId, daysInStage: 0 } : d))
    );
    setDraggedId(null);
  };

  const renderPipelineTracker = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        
        {/* Stuck deals alerts banner */}
        <div className="p-3 bg-card border border-border rounded-2xl flex justify-between items-center flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-red-500 font-bold">
            <AlertCircle className="h-4 w-4 animate-pulse text-[#D85A30]" />
            <span>Stuck Deal Alerts: 2 deals stuck past target duration. Escalations logged.</span>
          </div>
          <span className="font-mono text-slate-400 font-semibold">Active Pipeline: 23 deals · ₹4.2Cr value</span>
        </div>

        {/* Drag and drop Kanban board */}
        <div className="overflow-x-auto border border-border bg-card rounded-2xl p-4 min-h-[480px]">
          <div className="flex gap-4 min-w-max h-[420px]">
            {pipelineStages.map((stg) => {
              const stageDeals = getDealsByStage(stg.id);
              const sum = getStageSum(stg.id);
              return (
                <div
                  key={stg.id}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(stg.id)}
                  className="w-[220px] bg-secondary/15 rounded-xl border border-border/80 flex flex-col h-full shrink-0"
                >
                  {/* Column Header */}
                  <div className="p-3 bg-secondary/35 rounded-t-xl border-b border-border">
                    <div className="flex justify-between items-center">
                      <span className="font-display font-bold text-[9.5px] uppercase tracking-wider text-slate-500">
                        {stg.name}
                      </span>
                      <span className="text-[10px] font-bold bg-secondary px-1.5 py-0.5 rounded-full">
                        {stageDeals.length}
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-1">
                      <span className="text-xs font-bold font-mono text-foreground">{sum}</span>
                      <span className="text-[8.5px] text-slate-400 font-mono">Prob: {stg.probability}%</span>
                    </div>
                  </div>

                  {/* Cards container */}
                  <div className="flex-1 overflow-y-auto p-2.5 space-y-2 scrollbar-none">
                    {stageDeals.map((deal) => {
                      const isStuck = deal.urgency === "Stuck";
                      const isWatch = deal.urgency === "Watch";
                      return (
                        <div
                          key={deal.id}
                          draggable
                          onDragStart={() => handleDragStart(deal.id)}
                          className="cursor-grab active:cursor-grabbing"
                        >
                          <Card
                            className={`p-3 border border-border hover:border-slate-300 bg-card transition-all ${
                              isStuck ? "border-[#D85A30] ring-1 ring-[#D85A30]/20 animate-pulse" : isWatch ? "border-amber-400" : ""
                            }`}
                          >
                            <div className="flex justify-between items-start gap-1">
                              <span className="font-extrabold text-xs text-foreground truncate">{deal.buyer_name}</span>
                              <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${
                                isStuck ? "bg-red-500" : isWatch ? "bg-amber-400" : "bg-emerald-500"
                              }`} />
                            </div>
                            
                            <p className="text-[10px] text-muted-foreground mt-0.5 font-semibold leading-relaxed truncate">{deal.project}</p>
                            
                            <div className="flex justify-between items-center mt-3 pt-2.5 border-t border-border/40 text-[10px]">
                              <span className="font-bold text-foreground font-mono">₹{deal.value}L</span>
                              <span className="text-[9px] font-mono text-slate-500 flex items-center gap-0.5">
                                <Clock className="h-3 w-3" /> {deal.daysInStage}d
                              </span>
                            </div>
                          </Card>
                        </div>
                      );
                    })}

                    {stageDeals.length === 0 && (
                      <div className="h-full flex items-center justify-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Drop deal here</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Velocity actual vs benchmark chart */}
        <Card className="p-4 border border-border bg-card">
          <div className="border-b border-border/40 pb-2 mb-3">
            <h3 className="font-bold text-xs text-foreground font-display">Stage Velocity Benchmarks (Fortiv Actual vs Industry average)</h3>
          </div>
          {renderVelocityChart(160)}
        </Card>
      </div>
    );
  };

  // --- 7. AI Listing Writer States ---
  const [listingForm, setListingForm] = useState({
    project_name: "Fortiv Greenview Heights",
    locality: "Vesu, Surat",
    configuration: ["2BHK", "3BHK"],
    price_starting: 48,
    price_range: "₹48L – ₹85L",
    area_range: "1,020 – 1,640",
    rera_number: "P01200023XXX",
    possession_date: "December 2026",
    structure: "G+14 floors, 2 towers",
    key_amenities: ["Swimming Pool", "Clubhouse", "Children's Play Area", "EV Charging"],
    usps: "Corner units, Vesu micro-market, CCTV, Society maintenance ₹2/sq ft",
    tone: "Formal"
  });

  const [activeOutputTab, setActiveOutputTab] = useState<"portal" | "whatsapp" | "instagram" | "email" | "gujarati">("portal");
  const [writerStatus, setWriterStatus] = useState<"idle" | "generating" | "generated">("idle");
  const [countdown, setCountdown] = useState(30);

  const handleGenerateListing = (e: React.FormEvent) => {
    e.preventDefault();
    setWriterStatus("generating");
    setCountdown(3); // Fast simulation
    
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setWriterStatus("generated");
          return 0;
        }
        return prev - 1;
      });
    }, 450);
  };

  const renderListingWriter = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        <div className="grid grid-cols-12 gap-5">
          {/* Input Panel (Left) */}
          <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card">
            <h3 className="text-xs font-bold text-foreground mb-4 font-display flex items-center gap-2">
              <Sparkles className="h-4.5 w-4.5 text-primary" /> Listing Parameters Form
            </h3>

            <form onSubmit={handleGenerateListing} className="space-y-3.5 text-xs font-semibold">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Project Name</label>
                  <input
                    type="text"
                    required
                    value={listingForm.project_name}
                    onChange={(e) => setListingForm({ ...listingForm, project_name: e.target.value })}
                    className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Locality</label>
                  <input
                    type="text"
                    required
                    value={listingForm.locality}
                    onChange={(e) => setListingForm({ ...listingForm, locality: e.target.value })}
                    className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Starting Price (₹ Lakhs)</label>
                  <input
                    type="number"
                    required
                    value={listingForm.price_starting}
                    onChange={(e) => setListingForm({ ...listingForm, price_starting: parseInt(e.target.value) || 0 })}
                    className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Price Range</label>
                  <input
                    type="text"
                    value={listingForm.price_range}
                    onChange={(e) => setListingForm({ ...listingForm, price_range: e.target.value })}
                    className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">RERA Number</label>
                  <input
                    type="text"
                    required
                    value={listingForm.rera_number}
                    onChange={(e) => setListingForm({ ...listingForm, rera_number: e.target.value })}
                    className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Possession Target</label>
                  <input
                    type="text"
                    value={listingForm.possession_date}
                    onChange={(e) => setListingForm({ ...listingForm, possession_date: e.target.value })}
                    className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-muted-foreground">USPs (Unique Selling Points)</label>
                <textarea
                  value={listingForm.usps}
                  onChange={(e) => setListingForm({ ...listingForm, usps: e.target.value })}
                  className="w-full h-14 p-2 border border-border rounded-lg bg-background outline-none focus:border-ring text-xs leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Listing Tone</label>
                  <select
                    value={listingForm.tone}
                    onChange={(e) => setListingForm({ ...listingForm, tone: e.target.value })}
                    className="w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs font-bold"
                  >
                    {["Formal", "Conversational", "Urgency", "Luxury"].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                
                <button
                  type="submit"
                  disabled={writerStatus === "generating"}
                  className="w-full h-8 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1 mt-5 active:scale-95 disabled:opacity-50"
                >
                  Regenerate Copy
                </button>
              </div>
            </form>
          </Card>

          {/* Output Panel (Right) */}
          <Card className="col-span-12 lg:col-span-7 p-4 border border-border bg-card flex flex-col justify-center min-h-[400px]">
            {writerStatus === "idle" && (
              <div className="text-center p-8 space-y-3">
                <Sparkles className="h-12 w-12 text-slate-300 mx-auto animate-pulse" />
                <h4 className="font-bold text-sm text-foreground">AI Listing Writer Ready</h4>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto font-medium">
                  Select your target project specifications on the left and click write to compile portals, socials, and email scripts.
                </p>
              </div>
            )}

            {writerStatus === "generating" && (
              <div className="text-center p-8 space-y-4 animate-in fade-in duration-300">
                <div className="relative h-12 w-12 mx-auto">
                  <span className="absolute inset-0 rounded-full border-4 border-slate-100 border-t-primary animate-spin" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-foreground uppercase tracking-widest font-display">Generating Copy</h4>
                  <div className="text-lg font-bold font-mono text-primary font-bold mt-1">{countdown}s remaining</div>
                </div>
              </div>
            )}

            {writerStatus === "generated" && (
              <div className="space-y-4 animate-in slide-in-from-bottom duration-500">
                {/* Formats Tab Selectors */}
                <div className="flex flex-wrap gap-1 border-b border-border/40 pb-2">
                  {[
                    { id: "portal", label: "Portal description" },
                    { id: "whatsapp", label: "WhatsApp Broadcast" },
                    { id: "instagram", label: "Instagram Copy" },
                    { id: "email", label: "Email Script" },
                    { id: "gujarati", label: "Gujarati Copy" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveOutputTab(tab.id as any)}
                      className={`h-7 px-2.5 rounded-lg text-[10.5px] font-bold border transition-all ${
                        activeOutputTab === tab.id
                          ? "bg-ink border-ink text-cream"
                          : "bg-background border-border text-slate-500 hover:bg-muted"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Simulated Content Box */}
                <div className="p-3 bg-secondary/35 rounded-xl border border-border/60 font-mono text-[10.5px] text-foreground leading-relaxed whitespace-pre-wrap max-h-[220px] overflow-y-auto scrollbar-none">
                  {activeOutputTab === "portal" && (
                    `Fortiv Greenview Heights — Premium 2 & 3 BHK Residences in Vesu, Surat\n\nDiscover elevated living at Fortiv Greenview Heights, a RERA-registered residential development [RERA: P01200023XXX] nestled in the heart of Vesu, Surat's most sought-after micro-market. Rising across G+14 floors in two elegantly designed towers, Greenview Heights offers 2BHK and 3BHK configurations ranging from 1,020 to 1,640 sq ft — meticulously crafted for families who value space, light, and community.\n\nKey Highlights:\n• Premium 2BHK starting from ₹48 Lakhs\n• Possession: December 2026\n• Swimming pool, clubhouse, children's play area, and EV charging\n• 24/7 CCTV surveillance · Maintenance ₹2/sq ft\n• 5 mins to Vesu Main Road · 10 mins to airport\n\nContact: +91 XXXXX XXXXX | www.fortivsolutions.in`
                  )}
                  {activeOutputTab === "whatsapp" && (
                    `🏡 *Fortiv Greenview Heights | Vesu, Surat*\n2BHK from ₹48L | 3BHK from ₹68L\n⭐ RERA Registered | Possession Dec 2026\nPool · Clubhouse · EV Charging\n\nOnly 6 units available in floors 8–12.\n📞 Call/WhatsApp: +91 XXXXX XXXXX`
                  )}
                  {activeOutputTab === "instagram" && (
                    `Your dream home just got closer. 🏠✨\nFortiv Greenview Heights is now accepting bookings — and yes, it's everything you've been picturing.\n\n📍 Prime Vesu Location, Surat\n🛏 2BHK from ₹48L | 3BHK from ₹68L\n🏊 Pool · Clubhouse · Green Spaces\n📋 RERA Registered · Possession Dec 2026\n\nBook a site visit this weekend → Link in bio\n\n#SuratRealEstate #VesuSurat #NewHome #FortivSolutions #2BHKSurat`
                  )}
                  {activeOutputTab === "email" && (
                    `Subject: Re: New Premium Residences Launching — Fortiv Greenview Heights\n\nDear Investor,\n\nWe are pleased to introduce Fortiv Greenview Heights in Vesu, Surat. Offering luxury 2 & 3 BHK residences starting from ₹48 Lakhs, with G+14 construction heights and possession scheduled for December 2026.\n\nKey amenities include a swimming pool, clubhouse, security, and dedicated EV charging stations.\n\nBest regards,\nFortiv Solutions Sales Team`
                  )}
                  {activeOutputTab === "gujarati" && (
                    `ફોર્ટિવ ગ્રીનવ્યુ હાઇટ્સ — વેસુ, સુરતમાં પ્રીમિયમ ૨ અને ૩ BHK ફ્લેટ્સ\n\nવેસુમાં લક્ઝરી લિવિંગ શોધો [RERA: P01200023XXX].\nકિંમત: ₹૪૮ લાખથી શરૂ.\nસુવિધાઓ: સ્વિમિંગ પુલ, ક્લબહાઉસ, EV ચાર્જિંગ સ્ટેશનો.\nકબ્જો: ડિસેમ્બર ૨૦૨૬.\n\nસંપર્ક: +91 XXXXX XXXXX`
                  )}
                </div>

                {/* Publish Portal Trigger */}
                <div className="flex gap-2 pt-2 border-t border-border/40">
                  <button
                    onClick={() => alert("Listing published to 99acres and MagicBricks portals successfully.")}
                    className="flex-1 h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold transition-all shadow-sm"
                  >
                    Publish to Portals
                  </button>
                  <button
                    onClick={() => alert("WhatsApp broadcast copy copied to clipboard.")}
                    className="h-8 w-10 border border-border hover:bg-secondary rounded-lg flex items-center justify-center text-slate-500"
                    title="Copy to Clipboard"
                  >
                    <Share2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Published listings log table */}
        <Card className="p-0 overflow-hidden border border-border bg-card">
          <div className="p-3 bg-secondary/35 border-b border-border">
            <h3 className="font-bold text-xs text-foreground font-display">Published Listings Index & Performance</h3>
          </div>
          
          <div className="overflow-x-auto scrollbar-none bg-card">
            <table className="w-full text-left text-xs divide-y divide-border/60">
              <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                <tr>
                  <th className="px-3.5 py-2.5">Project</th>
                  <th className="px-3.5 py-2.5">Portal Platform</th>
                  <th className="px-3.5 py-2.5 font-mono">Publish Date</th>
                  <th className="px-3.5 py-2.5 font-mono">Views (7d)</th>
                  <th className="px-3.5 py-2.5 font-mono">Leads Generated</th>
                  <th className="px-3.5 py-2.5 font-mono">Last Refreshed</th>
                  <th className="px-3.5 py-2.5">Tone</th>
                  <th className="px-3.5 py-2.5">SEO Freshness</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 font-medium text-foreground bg-background">
                {publishedListingsLog.map((list, idx) => (
                  <tr key={idx} className="hover:bg-secondary/15">
                    <td className="px-3.5 py-3 font-bold">{list.project}</td>
                    <td className="px-3.5 py-3">{renderPlatformBadge(list.platform)}</td>
                    <td className="px-3.5 py-3 font-mono">{list.published}</td>
                    <td className="px-3.5 py-3 font-mono font-bold">{list.views} views</td>
                    <td className="px-3.5 py-3 font-mono font-extrabold text-[#0E86E9]">+{list.leads} leads</td>
                    <td className="px-3.5 py-3 font-mono text-slate-400">{list.refreshed}</td>
                    <td className="px-3.5 py-3 text-slate-600">{list.tone}</td>
                    <td className="px-3.5 py-3">
                      <span className={`px-2 py-0.5 rounded text-[9.5px] font-bold ${
                        list.status === "Fresh" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-amber-50 text-amber-600 border border-amber-100 animate-pulse"
                      }`}>
                        {list.status}
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

  // Helper method to return page header info
  const getPageHeader = () => {
    switch (activeTab) {
      case "menu":
        return {
          title: "Sales Pipeline & CRM Automation",
          subtitle: "Automates every step of the sales journey from first contact to registration — so no deal falls through, no follow-up is missed, and every agent has a clear view of what to do next.",
        };
      case "overview":
        return {
          title: "Dashboard Overview",
          subtitle: "Helicopter view of active pipelines, stage summaries, and operational actions.",
        };
      case "crm-sync":
        return {
          title: "CRM Sync & Deduplication",
          subtitle: "Bidirectional sync logs, deduplication registries, and field normalisation tracking.",
        };
      case "scheduler":
        return {
          title: "Site Visit Scheduler",
          subtitle: "Show-flat calendar slot bookings, confirmations, no-show queues, and reschedules.",
        };
      case "follow-up":
        return {
          title: "Post-Visit Follow-Up Agent",
          subtitle: "Multi-step post-visit sequences, dynamic chats, and pre-approved objection webhook handling.",
        };
      case "drip":
        return {
          title: "Nurture Drip Engine",
          subtitle: "30/60/90-day drip campaigns calendar, re-engagement exited logs, and cold lead recovery.",
        };
      case "pipeline":
        return {
          title: "Deal Pipeline Tracker",
          subtitle: "Draggable Kanban board with deal cards, velocity chart benchmark, and stuck deal alerts.",
        };
      case "listing-writer":
        return {
          title: "AI Listing Writer",
          subtitle: "LLM content generator for SEO portals, WhatsApp, Instagram, email, and Gujarati copies.",
        };
      default:
        return {
          title: "Sales Pipeline & CRM Automation",
          subtitle: "Autonomous deal management and communication.",
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
        aria-label="Back to pipeline menu"
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

  const renderMenuSelection = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {submodulesList.map((mod) => (
            <Card
              key={mod.id}
              onClick={() => setActiveTab(mod.id as TabType)}
              className="submodule-card p-5 cursor-pointer flex flex-col justify-between group h-48"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
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
                <span className="flex items-center gap-0.5 text-ink group-hover:underline">
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
        {activeTab === "crm-sync" && renderCRMSync()}
        {activeTab === "scheduler" && renderScheduler()}
        {activeTab === "follow-up" && renderFollowUp()}
        {activeTab === "drip" && renderDripEngine()}
        {activeTab === "pipeline" && renderPipelineTracker()}
        {activeTab === "listing-writer" && renderListingWriter()}
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
        <div className={`font-display text-2xl font-bold tracking-tight ${color}`}>{value}</div>
        <span className="text-[9px] font-semibold text-muted-foreground">{desc}</span>
      </div>
    </Card>
  );
}
