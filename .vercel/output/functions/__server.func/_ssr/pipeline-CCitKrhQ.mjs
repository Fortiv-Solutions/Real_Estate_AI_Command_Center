import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, C as Card } from "./AppShell-Dji0FoTH.mjs";
import { c as Route$9 } from "./router-SPLEJOXz.mjs";
import { m as ChevronLeft, b as ArrowRight, G as GitBranch, A as Activity, k as Check, g as Calendar, h as CalendarDays, o as CircleAlert, s as Clock, Z as Sparkles, W as Share2 } from "../_libs/lucide-react.mjs";
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
const demoDeals = [{
  id: "DEAL-001",
  buyer_name: "Rajesh Patel",
  project: "Fortiv Greenview Heights",
  configuration: "2BHK",
  value: 56,
  collected: 5.6,
  stage: "Negotiation",
  daysInStage: 5,
  urgency: "On track",
  agent: "Priya Rana"
}, {
  id: "DEAL-002",
  buyer_name: "Priya Shah",
  project: "Fortiv Greenview Heights",
  configuration: "3BHK",
  value: 78,
  collected: 7.8,
  stage: "Visited",
  daysInStage: 8,
  urgency: "On track",
  agent: "Priya Rana"
}, {
  id: "DEAL-003",
  buyer_name: "Deepak Trivedi",
  project: "Fortiv Greenview Heights",
  configuration: "2BHK",
  value: 52,
  collected: 0,
  stage: "Negotiation",
  daysInStage: 19,
  urgency: "Stuck",
  agent: "Priya Rana"
}, {
  id: "DEAL-004",
  buyer_name: "Vikram Joshi",
  project: "Fortiv Business Park",
  configuration: "Commercial",
  value: 210,
  collected: 31.5,
  stage: "Agreement Signed",
  daysInStage: 12,
  urgency: "On track",
  agent: "Rahul Modi"
}, {
  id: "DEAL-005",
  buyer_name: "Sunita Mehta",
  project: "Fortiv Skyline Residences",
  configuration: "3BHK",
  value: 94,
  collected: 94,
  stage: "Booking Amount Paid",
  daysInStage: 2,
  urgency: "On track",
  agent: "Meera Patel"
}, {
  id: "DEAL-006",
  buyer_name: "Amit Desai",
  project: "Fortiv Greenview Heights",
  configuration: "2BHK",
  value: 49,
  collected: 4.9,
  stage: "Visited",
  daysInStage: 16,
  urgency: "Stuck",
  agent: "Ankit Shah"
}, {
  id: "DEAL-007",
  buyer_name: "Suresh Nair",
  project: "Fortiv Business Park",
  configuration: "Commercial",
  value: 340,
  collected: 34,
  stage: "Loan Processing",
  daysInStage: 21,
  urgency: "Watch",
  agent: "Rahul Modi"
}, {
  id: "DEAL-008",
  buyer_name: "Pooja Sharma",
  project: "Fortiv Greenview Heights",
  configuration: "2BHK",
  value: 58,
  collected: 0,
  stage: "Site Visit Scheduled",
  daysInStage: 2,
  urgency: "On track",
  agent: "Ankit Shah"
}];
const crmSyncLog = [{
  id: 1,
  name: "Rajesh Patel",
  source: "99acres",
  time: "15/01/2025 14:23",
  status: "Clean",
  campaign: "Greenview Heights Jan",
  action: "Merged with CRM #1042"
}, {
  id: 2,
  name: "Priya Shah",
  source: "Facebook Lead Ads",
  time: "15/01/2025 13:44",
  status: "Clean",
  campaign: "Vesu 2BHK Video Campaign",
  action: "Merged with CRM #1063"
}, {
  id: 3,
  name: "Amit Desai",
  source: "JustDial",
  time: "15/01/2025 12:10",
  status: "Clean",
  campaign: "Organic Search",
  action: "Merged with CRM #1077"
}, {
  id: 4,
  name: "Sneha Patel",
  source: "Website Widget",
  time: "15/01/2025 11:32",
  status: "Flagged",
  campaign: "Gotri 3BHK Details",
  action: "Pushed to CRM queue"
}, {
  id: 5,
  name: "Kunal Jain",
  source: "Voice IVR",
  time: "15/01/2025 10:15",
  status: "Clean",
  campaign: "Inbound IVR Route",
  action: "Pushed to CRM queue"
}, {
  id: 6,
  name: "Deepak Trivedi",
  source: "MagicBricks",
  time: "15/01/2025 09:40",
  status: "Clean",
  campaign: "Greenview Heights Jan",
  action: "Merged with CRM #1089"
}];
const crmDeduplicationLog = [{
  id: 1,
  primary: "Rajesh Patel (#1042)",
  merged: "Rajesh Patel (#1089)",
  reason: "Same phone +91 98765 43210",
  outcome: "Merged — 99acres + MagicBricks"
}, {
  id: 2,
  primary: "Priya Shah (#1063)",
  merged: "Priya Shah (#1091)",
  reason: "Same email priya.shah@gmail.com",
  outcome: "Merged — Housing.com + Facebook"
}, {
  id: 3,
  primary: "Amit Desai (#1077)",
  merged: "Amit Desai (#1098)",
  reason: "Same phone + Same name",
  outcome: "Merged — JustDial + WhatsApp"
}];
const upcomingVisits = [{
  id: "visit_1",
  name: "Rajesh Patel",
  score: 74,
  agent: "Priya Rana",
  project: "Fortiv Greenview Heights",
  time: "18/01/2025 11:00 AM",
  status: "Confirmed"
}, {
  id: "visit_2",
  name: "Priya Shah",
  score: 61,
  agent: "Ankit Shah",
  project: "Fortiv Greenview Heights",
  time: "18/01/2025 03:00 PM",
  status: "Confirmed"
}, {
  id: "visit_3",
  name: "Deepak Trivedi",
  score: 82,
  agent: "Priya Rana",
  project: "Fortiv Greenview Heights",
  time: "19/01/2025 10:00 AM",
  status: "Confirmed"
}, {
  id: "visit_4",
  name: "Sunita Mehta",
  score: 55,
  agent: "Meera Patel",
  project: "Fortiv Skyline Residences",
  time: "19/01/2025 02:00 PM",
  status: "Confirmed"
}, {
  id: "visit_5",
  name: "Vikram Joshi",
  score: 78,
  agent: "Rahul Modi",
  project: "Fortiv Business Park",
  time: "20/01/2025 11:30 AM",
  status: "Confirmed"
}];
const noShowVisits = [{
  id: "visit_n1",
  name: "Kavita Agarwal",
  score: 55,
  agent: "Meera Patel",
  project: "Greenview Heights",
  time: "14/01/2025 04:00 PM",
  reason: "Out of station"
}, {
  id: "visit_n2",
  name: "Ritu Bhandari",
  score: 67,
  agent: "Ankit Shah",
  project: "Greenview Heights",
  time: "12/01/2025 11:30 AM",
  reason: "Urgent meeting"
}];
const followUpSequences = {
  rajesh: {
    name: "Rajesh Patel",
    visitDate: "18/01/2025",
    currentStep: 3,
    stepName: "Comparison Doc",
    lastMsg: "Looks good, considering the Tower B pricing",
    objection: "None",
    status: "Active",
    timeline: [{
      step: 1,
      title: "📧 Visit Thank-You + Price List Sent",
      status: "Completed",
      date: "18/01 12:15 PM"
    }, {
      step: 2,
      title: "💬 Check-In Call Follow-Up",
      status: "Completed",
      date: "19/01 11:00 AM"
    }, {
      step: 3,
      title: "📊 Competitor Comparison PDF Dispatched",
      status: "Pending",
      date: "Scheduled 21/01"
    }],
    conversation: [{
      sender: "ai",
      text: "Hello Rajesh! Thank you for visiting Fortiv Greenview Heights today. It was a pleasure showing you the 2BHK sample apartment. Here is the payment plan brochure we discussed.",
      time: "18/01 12:15 PM"
    }, {
      sender: "buyer",
      text: "Thanks, the layout looks good. What is the possession date for Tower B?",
      time: "18/01 02:40 PM"
    }, {
      sender: "ai",
      text: "Tower B possession is scheduled for December 2026, fully backed by RERA approvals. Would you like to review the floor layout plans for Tower B?",
      time: "18/01 02:42 PM"
    }, {
      sender: "buyer",
      text: "Yes, please send them. Saturday works if we need to check again.",
      time: "18/01 03:05 PM"
    }]
  },
  priya: {
    name: "Priya Shah",
    visitDate: "16/01/2025",
    currentStep: 5,
    stepName: "Email Brochure",
    lastMsg: "Is the price negotiable?",
    objection: "Price is high",
    status: "Slow",
    timeline: [{
      step: 1,
      title: "📧 Visit Thank-You Sent",
      status: "Completed",
      date: "16/01 04:30 PM"
    }, {
      step: 2,
      title: "💬 First Check-In Dispatched",
      status: "Completed",
      date: "17/01 02:00 PM"
    }, {
      step: 3,
      title: "📊 Competitor Analysis Sent",
      status: "Completed",
      date: "18/01 09:30 AM"
    }, {
      step: 4,
      title: "🔥 Urgency Alert (Limited units)",
      status: "Completed",
      date: "19/01 05:00 PM"
    }, {
      step: 5,
      title: "📧 Full Project Documentation Email",
      status: "Pending",
      date: "Scheduled 22/01"
    }],
    conversation: [{
      sender: "ai",
      text: "Hi Priya! Thank you for coming today. It was great to show you the 3BHK flat at Adajan. We have sent the brochure and amenities catalog.",
      time: "16/01 04:30 PM"
    }, {
      sender: "buyer",
      text: "Thanks. The property is nice but the price seems slightly high for Adajan area.",
      time: "17/01 09:12 AM"
    }, {
      sender: "ai",
      text: "I understand! I can share our comparative analysis that highlights the rooftop pool and RERA compliance that other projects lack. Also, here is an EMI calculator outlining SBI home loan options starting at 8.75%.",
      time: "17/01 09:15 AM"
    }, {
      sender: "buyer",
      text: "Is the price negotiable?",
      time: "18/01 01:22 PM"
    }]
  },
  deepak: {
    name: "Deepak Trivedi",
    visitDate: "14/01/2025",
    currentStep: 4,
    stepName: "Urgency trigger",
    lastMsg: "Interested, need 1 week to arrange token",
    objection: "None",
    status: "Active",
    timeline: [{
      step: 1,
      title: "📧 Visit Thank-You Sent",
      status: "Completed",
      date: "14/01 11:30 AM"
    }, {
      step: 2,
      title: "💬 Follow-Up Check-In",
      status: "Completed",
      date: "15/01 11:30 AM"
    }, {
      step: 3,
      title: "📊 Competitor Analysis Sent",
      status: "Completed",
      date: "17/01 10:00 AM"
    }, {
      step: 4,
      title: "🔥 Urgency Alert Sent",
      status: "Pending",
      date: "Scheduled 20/01"
    }],
    conversation: [{
      sender: "ai",
      text: "Hello Deepak! Thank you for visiting Greenview Heights. Here is the payment plan. Let me know if you have any questions.",
      time: "14/01 11:30 AM"
    }, {
      sender: "buyer",
      text: "We like the unit 602. Can you hold it for a few days?",
      time: "14/01 01:45 PM"
    }, {
      sender: "ai",
      text: "We can block the unit for 48 hours for you. Shall I send the booking forms to fill out?",
      time: "14/01 01:50 PM"
    }, {
      sender: "buyer",
      text: "Interested, need 1 week to arrange token amount.",
      time: "15/01 10:30 AM"
    }]
  },
  amit: {
    name: "Amit Desai",
    visitDate: "10/01/2025",
    currentStep: 7,
    stepName: "Agent Call Flag",
    lastMsg: "Will discuss with my wife tonight",
    objection: "Location",
    status: "Agent Action",
    timeline: [{
      step: 1,
      title: "📧 Visit Thank-You Sent",
      status: "Completed",
      date: "10/01 05:45 PM"
    }, {
      step: 2,
      title: "💬 Follow-Up Sent",
      status: "Completed",
      date: "11/01 02:00 PM"
    }, {
      step: 3,
      title: "📊 Comparison Document Sent",
      status: "Completed",
      date: "13/01 10:00 AM"
    }, {
      step: 4,
      title: "🔥 Urgency Notification",
      status: "Completed",
      date: "15/01 04:30 PM"
    }, {
      step: 5,
      title: "📧 Full Email Dossier Sent",
      status: "Completed",
      date: "17/01 09:00 AM"
    }, {
      step: 6,
      title: "📈 Market Appreciation Report",
      status: "Completed",
      date: "19/01 11:30 AM"
    }, {
      step: 7,
      title: "📞 Agent Priority Callback Flag",
      status: "Pending",
      date: "Immediate Agent Call"
    }],
    conversation: [{
      sender: "ai",
      text: "Hello Amit! Thank you for the visit. Here is the brochure. Let us know what you think.",
      time: "10/01 05:45 PM"
    }, {
      sender: "buyer",
      text: "The flat layout is perfect but it feels a bit far from my office in Adajan.",
      time: "11/01 09:30 AM"
    }, {
      sender: "ai",
      text: "Understandable. Our micro-market connectivity analysis shows that with the new bridge coming up, Vesu will be less than 10 minutes from Adajan Main Road. Let me share the distance calculator maps.",
      time: "11/01 09:35 AM"
    }, {
      sender: "buyer",
      text: "Will discuss with my wife tonight.",
      time: "12/01 08:20 PM"
    }]
  }
};
const objectionsWebhookRules = [{
  keyword: "Price is high / expensive / cost",
  responseType: "SBI/HDFC home loan EMI options and calculator PDF"
}, {
  keyword: "RERA / registration / legal title",
  responseType: "Project RERA certificate GJ/RERA/PROJ/XXXXX"
}, {
  keyword: "Location / far from office",
  responseType: "Vesu connectivity analysis and maps link"
}, {
  keyword: "Builder reputation / construction quality",
  responseType: "Builder credentials portfolio and past work brochure"
}, {
  keyword: "Competition / other builder project",
  responseType: "Comparative analysis and competitive feature chart"
}];
const dripNurtureLeads = [{
  name: "Anita Gujarati",
  track: "Track C — Long-Horizon",
  sent: 6,
  opened: 5,
  clicks: 1,
  lastActive: "18/01/2025",
  nextSend: "24/01/2025",
  status: "nurturing"
}, {
  name: "Kavita Agarwal",
  track: "Track B — Warm Lead",
  sent: 3,
  opened: 3,
  clicks: 2,
  lastActive: "20/01/2025",
  nextSend: "22/01/2025",
  status: "nurturing"
}, {
  name: "Pooja Sharma",
  track: "Track A — Active Drip",
  sent: 8,
  opened: 8,
  clicks: 5,
  lastActive: "19/01/2025",
  nextSend: "Exited to Pipeline",
  status: "reengaged"
}, {
  name: "Mahesh Khanna",
  track: "Track B — Warm Lead",
  sent: 5,
  opened: 4,
  clicks: 1,
  lastActive: "14/01/2025",
  nextSend: "21/01/2025",
  status: "nurturing"
}, {
  name: "Ritu Bhandari",
  track: "Track C — Long-Horizon",
  sent: 2,
  opened: 2,
  clicks: 0,
  lastActive: "11/01/2025",
  nextSend: "25/01/2025",
  status: "nurturing"
}];
const dripContentCalendar = [{
  date: "21 Jan",
  track: "Track B",
  type: "Visit Invitation",
  title: "Open House this Saturday — family events"
}, {
  date: "22 Jan",
  track: "Track A",
  type: "Construction Update",
  title: "Tower A 12th-floor slab casting progress photos"
}, {
  date: "24 Jan",
  track: "Track C",
  type: "Market News",
  title: "How RBI repo rate stable policies impact home loans"
}, {
  date: "25 Jan",
  track: "Track B",
  type: "Blog post",
  title: "Guide: 5 parameters to verify before buying a flat in Gujarat"
}];
const publishedListingsLog = [{
  project: "Fortiv Greenview Heights",
  platform: "99acres",
  published: "02/01/2025",
  views: 412,
  leads: 18,
  refreshed: "16/01/2025",
  tone: "Formal",
  status: "Fresh"
}, {
  project: "Fortiv Greenview Heights",
  platform: "MagicBricks",
  published: "02/01/2025",
  views: 287,
  leads: 11,
  refreshed: "16/01/2025",
  tone: "Conversational",
  status: "Fresh"
}, {
  project: "Fortiv Skyline Residences",
  platform: "99acres",
  published: "05/01/2025",
  views: 198,
  leads: 7,
  refreshed: "14/01/2025",
  tone: "Luxury",
  status: "Ageing"
}, {
  project: "Fortiv Business Park",
  platform: "MagicBricks",
  published: "10/01/2025",
  views: 143,
  leads: 4,
  refreshed: "18/01/2025",
  tone: "Formal",
  status: "Fresh"
}, {
  project: "Fortiv Greenview Heights",
  platform: "Fortiv Website",
  published: "02/01/2025",
  views: 631,
  leads: 23,
  refreshed: "18/01/2025",
  tone: "Urgency",
  status: "Fresh"
}];
const pipelineStages = [{
  id: "Inquiry",
  name: "Inquiry",
  probability: 5,
  color: "bg-slate-400"
}, {
  id: "Site Visit Scheduled",
  name: "Visit Scheduled",
  probability: 10,
  color: "bg-[#2E86AB]"
}, {
  id: "Visited",
  name: "Visited",
  probability: 20,
  color: "bg-[#0E86E9]"
}, {
  id: "Negotiation",
  name: "Negotiation",
  probability: 40,
  color: "bg-[#E8A838]"
}, {
  id: "Booking Amount Paid",
  name: "Booking Token Paid",
  probability: 75,
  color: "bg-[#1D9E75]"
}, {
  id: "Agreement Signed",
  name: "Agreement Signed",
  probability: 85,
  color: "bg-[#1A3C5E]"
}, {
  id: "Loan Processing",
  name: "Loan Processing",
  probability: 90,
  color: "bg-[#2E86AB]"
}, {
  id: "Full Payment",
  name: "Full Payment",
  probability: 95,
  color: "bg-[#1D9E75]"
}, {
  id: "Registration",
  name: "Registration",
  probability: 100,
  color: "bg-slate-500"
}];
const stageVelocityBenchmarks = [{
  stage: "Inquiry → Visit",
  industry: 3,
  fortiv: 1.8
}, {
  stage: "Visit → Visited",
  industry: 5,
  fortiv: 4.2
}, {
  stage: "Visited → Negotiation",
  industry: 7,
  fortiv: 9.1
}, {
  stage: "Negotiation → Booking",
  industry: 10,
  fortiv: 12.4
}, {
  stage: "Booking → Agreement",
  industry: 14,
  fortiv: 11.2
}, {
  stage: "Agreement → Payment",
  industry: 45,
  fortiv: 38.7
}];
function SalesPipelineManager() {
  const {
    tab
  } = Route$9.useSearch();
  const navigate = useNavigate({
    from: Route$9.fullPath
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
  const submodulesList = [{
    id: "overview",
    name: "Dashboard Overview",
    desc: "Helicopter view of active pipelines, stage summaries, and operational actions.",
    stats: "23 deals active",
    status: "Active"
  }, {
    id: "crm-sync",
    name: "CRM Sync & Deduplication",
    desc: "Bidirectional sync logs, deduplication registries, and field normalisation tracking.",
    stats: "118 synced today",
    status: "Active"
  }, {
    id: "scheduler",
    name: "Site Visit Scheduler",
    desc: "Show-flat calendar slot bookings, confirmations, no-show queues, and reschedules.",
    stats: "5 scheduled today",
    status: "Active"
  }, {
    id: "follow-up",
    name: "Post-Visit Follow-Up",
    desc: "Multi-step post-visit sequences, dynamic chats, and pre-approved objection webhook handling.",
    stats: "4 sequences active",
    status: "Active"
  }, {
    id: "drip",
    name: "Nurture Drip Engine",
    desc: "30/60/90-day drip campaigns calendar, re-engagement exited logs, and cold lead recovery.",
    stats: "142 leads active",
    status: "Active"
  }, {
    id: "pipeline",
    name: "Deal Pipeline Tracker",
    desc: "Draggable Kanban board with deal cards, velocity chart benchmark, and stuck deal alerts.",
    stats: "8 deals tracked",
    status: "Active"
  }, {
    id: "listing-writer",
    name: "AI Listing Writer",
    desc: "LLM content generator for SEO portals, WhatsApp, Instagram, email, and Gujarati copies.",
    stats: "5 listings live",
    status: "Active"
  }];
  const renderPlatformBadge = (source) => {
    const maps = {
      "99acres": "bg-[#efe5dd] text-slate-700 border-slate-300",
      "MagicBricks": "bg-red-50 text-red-700 border-red-200",
      "Facebook Lead Ads": "bg-blue-50 text-blue-700 border-blue-200",
      "Website Widget": "bg-sky-50 text-sky-700 border-sky-200",
      "Voice IVR": "bg-indigo-50 text-indigo-700 border-indigo-200",
      "JustDial": "bg-amber-50 text-amber-700 border-amber-200"
    };
    const cls = maps[source] || "bg-slate-100 text-slate-700 border-slate-200";
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-bold px-2 py-0.5 rounded border font-mono ${cls}`, children: source });
  };
  const renderVelocityChart = (height = 160) => {
    const data = stageVelocityBenchmarks;
    const paddingLeft = 110;
    const paddingRight = 15;
    const paddingTop = 15;
    const paddingBottom = 20;
    const chartWidth = 500;
    const chartHeight = height - paddingTop - paddingBottom;
    const maxVal = 50;
    const barSpacing = chartHeight / data.length;
    const barHeight = 8;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "min-w-[400px] w-full", viewBox: `0 0 ${chartWidth} ${height}`, children: [
      [0, 0.25, 0.5, 0.75, 1].map((r, idx) => {
        const x = paddingLeft + (chartWidth - paddingLeft - paddingRight) * r;
        const val = Math.round(r * maxVal);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: x, y1: paddingTop, x2: x, y2: chartHeight + paddingTop, stroke: "rgba(148, 163, 184, 0.12)", strokeWidth: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x, y: chartHeight + paddingTop + 12, textAnchor: "middle", className: "text-[8px] font-mono fill-muted-foreground font-semibold", children: [
            val,
            "d"
          ] })
        ] }, idx);
      }),
      data.map((d, i) => {
        const y = paddingTop + i * barSpacing + 4;
        const fortivWidth = d.fortiv / maxVal * (chartWidth - paddingLeft - paddingRight);
        const indWidth = d.industry / maxVal * (chartWidth - paddingLeft - paddingRight);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "group/row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: paddingLeft - 8, y: y + 8, textAnchor: "end", className: "text-[8.5px] font-bold fill-foreground", children: d.stage }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: paddingLeft, y, width: indWidth, height: barHeight, fill: "rgba(148, 163, 184, 0.3)", rx: "1.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: paddingLeft, y: y + 3, width: fortivWidth, height: barHeight - 2, fill: "#0E86E9", rx: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: paddingLeft + Math.max(fortivWidth, indWidth) + 6, y: y + 7, className: "text-[7.5px] font-bold fill-foreground opacity-0 group-hover/row:opacity-100 transition-opacity font-mono", children: [
            "Fortiv: ",
            d.fortiv,
            "d (Ind: ",
            d.industry,
            "d)"
          ] })
        ] }, i);
      })
    ] }) });
  };
  const renderDashboardOverview = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Active Deals", value: "23", desc: "Total pipeline", color: "text-[#1A3C5E]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "In Negotiation", value: "6", desc: "2 stuck past target", color: "text-[#E8A838] animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Bookings This Month", value: "4", desc: "Closed token amount", color: "text-[#1D9E75]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Pipeline Value", value: "₹4.2 Cr", desc: "Weighted value ₹1.84Cr", color: "text-[#2E86AB]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "col-span-12 lg:col-span-6 p-4 border border-border bg-card flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { className: "h-3.5 w-3.5 text-primary" }),
              " Condensed Stage Distribution"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("pipeline"), className: "text-[9px] font-bold text-primary hover:underline font-mono", children: "View Kanban →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: [{
            stage: "Inquiry",
            count: 8,
            color: "bg-slate-400",
            pct: "34.7%"
          }, {
            stage: "Site Visit Scheduled",
            count: 5,
            color: "bg-[#2E86AB]",
            pct: "21.7%"
          }, {
            stage: "Visited",
            count: 4,
            color: "bg-[#0E86E9]",
            pct: "17.4%"
          }, {
            stage: "Negotiation",
            count: 6,
            color: "bg-[#E8A838] animate-pulse",
            pct: "26.1%"
          }, {
            stage: "Booking Amount Paid",
            count: 3,
            color: "bg-[#1D9E75]",
            pct: "13.0%"
          }, {
            stage: "Agreement Signed",
            count: 2,
            color: "bg-[#1A3C5E]",
            pct: "8.7%"
          }, {
            stage: "Loan Processing",
            count: 1,
            color: "bg-[#2E86AB]",
            pct: "4.3%"
          }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10.5px] font-semibold text-slate-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 font-sans font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2 w-2 rounded-full ${s.color}` }),
                s.stage
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-bold", children: [
                  s.count,
                  " deals"
                ] }),
                " (",
                s.pct,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${s.color}`, style: {
              width: s.pct
            } }) })
          ] }, s.stage)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "col-span-12 lg:col-span-6 p-4 border border-border bg-card flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-3.5 w-3.5 text-emerald-600 animate-pulse" }),
              " Today's Operations Feed"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3.5 max-h-[300px] overflow-y-auto pr-1 scrollbar-none", children: [{
            time: "14:32",
            event: "WhatsApp reminder sent to Rajesh Patel for site visit",
            type: "scheduler"
          }, {
            time: "13:58",
            event: "CRM Sync merged duplicate inquiry for Deepak Trivedi (MagicBricks)",
            type: "sync"
          }, {
            time: "12:15",
            event: "Post-visit Sequence Step 1 thank you WhatsApp dispatched to Rajesh Patel",
            type: "follow-up"
          }, {
            time: "10:45",
            event: "🚨 Red Alert: Deepak Trivedi deal stuck in Negotiation stage for 19 days",
            type: "alert"
          }, {
            time: "09:30",
            event: "Nurture Drip: Pooja Sharma re-engaged on WhatsApp; routed back to agent Priya Rana",
            type: "drip"
          }, {
            time: "08:12",
            event: "AI Listing Writer published Greenview Heights listing copy to 99acres",
            type: "writer"
          }].map((act, idx) => {
            const badgeColor = act.type === "alert" ? "text-red-500 font-bold animate-pulse" : act.type === "follow-up" ? "text-primary" : "text-muted-foreground";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-xs leading-relaxed font-semibold border-b border-border/40 pb-2.5 last:border-0 last:pb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-slate-400 shrink-0 mt-0.5", children: act.time }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${badgeColor}`, children: act.event })
            ] }, idx);
          }) })
        ] }) })
      ] })
    ] });
  };
  const renderCRMSync = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 border border-border bg-card p-4 rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:border-r border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Synced Today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-foreground font-mono mt-1", children: "118 leads" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:border-r border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Duplicates Merged" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-emerald-600 font-mono mt-1", children: "14 merged" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:border-r border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Sync Health" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-extrabold text-emerald-600 mt-1.5 flex items-center gap-1 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
            " All API Systems Live"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Dedup Rate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-foreground font-mono mt-1", children: "32% merged MTD" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 overflow-hidden h-[450px] flex flex-col border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 bg-secondary/30 border-b border-border flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Unified Inbound CRM Sync webhook Log" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-mono font-bold", children: "listening..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto flex-1 scrollbar-none bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2", children: "Lead" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2 font-mono", children: "Source" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2", children: "Campaign" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2", children: "Normalisation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2", children: "Outcome" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2", children: "Time" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/30 bg-background font-medium text-foreground", children: crmSyncLog.map((log) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-bold", children: log.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5", children: renderPlatformBadge(log.source) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 text-slate-500 font-semibold", children: log.campaign }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded text-[10px] font-bold ${log.status === "Clean" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-amber-50 text-amber-600 border border-amber-100"}`, children: log.status }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-mono text-[10.5px] font-bold text-slate-600", children: log.action }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-2.5 font-mono text-slate-400", children: log.time.split(" ")[1] })
            ] }, log.id)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-0 overflow-hidden h-[450px] flex flex-col border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3.5 bg-secondary/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Auto-Deduplication Merge Registry" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex-1 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-semibold leading-relaxed", children: "Fortiv dedup layer scans incoming phone and email records to merge duplicates from third-party portals, maintaining a clean 1-record pipeline." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: crmDeduplicationLog.map((log) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl border border-border bg-background space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: log.primary }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded", children: "Merged" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-medium text-slate-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    "Merged Duplicate: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: log.merged })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 font-mono text-slate-400", children: [
                    "Match rule: ",
                    log.reason
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10.5px] font-bold text-emerald-600 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }),
                  " ",
                  log.outcome
                ] })
              ] }, log.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center border-t border-border/40 pt-3", children: "All data transfers compliant with DPDP Act 2023" })
          ] })
        ] })
      ] })
    ] });
  };
  const [selectedVisitFilter, setSelectedVisitFilter] = reactExports.useState("all");
  const [visitList, setVisitList] = reactExports.useState(upcomingVisits);
  const [reschedulePrompt, setReschedulePrompt] = reactExports.useState("");
  const filteredVisits = reactExports.useMemo(() => {
    if (selectedVisitFilter === "all") return visitList;
    return visitList.filter((v) => v.status.toLowerCase() === selectedVisitFilter.toLowerCase());
  }, [selectedVisitFilter, visitList]);
  const handleReschedule = (visitId) => {
    const text = prompt("Enter new date and time for rescheduling (DD/MM/YYYY hh:mm AM/PM):");
    if (!text) return;
    setVisitList((prev) => prev.map((v) => v.id === visitId ? {
      ...v,
      time: text,
      status: "Rescheduled"
    } : v));
    alert("Reschedule WhatsApp confirmation request dispatched to buyer.");
  };
  const renderScheduler = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Status Filter:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: ["all", "confirmed", "rescheduled"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedVisitFilter(f), className: `h-7 px-3 rounded-lg text-xs font-bold transition-all border uppercase tracking-wider ${selectedVisitFilter === f ? "bg-ink border-ink text-cream" : "bg-background border-border text-muted-foreground hover:bg-muted"}`, children: f }, f)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground font-mono", children: "No-show rate this month: 18% (Target < 25%)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card flex flex-col justify-between min-h-[450px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4 border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-xs text-foreground font-display flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-primary" }),
              " Visual Scheduler Board (Week view Jan 15-22)"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-2 text-center text-xs h-[300px]", children: ["Wed 15", "Thu 16", "Fri 17", "Sat 18", "Sun 19", "Mon 20", "Tue 21"].map((day, idx) => {
              const isWeekend = day.includes("Sat") || day.includes("Sun");
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border border-border/60 p-2 flex flex-col justify-between ${isWeekend ? "bg-slate-500/5" : "bg-background"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-muted-foreground block text-[10px]", children: day }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 py-3 flex flex-col gap-1 justify-center", children: [
                  day.includes("Sat") && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1 rounded bg-[#E8A838]/15 border border-[#E8A838]/20 text-[8px] font-bold text-amber-700 truncate", children: "11:00 AM Patel" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1 rounded bg-[#0E86E9]/15 border border-[#0E86E9]/20 text-[8px] font-bold text-primary truncate", children: "03:00 PM Shah" })
                  ] }),
                  day.includes("Sun") && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1 rounded bg-[#1D9E75]/15 border border-[#1D9E75]/20 text-[8px] font-bold text-[#1D9E75] truncate", children: "10:00 AM Deepak" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1 rounded bg-slate-100 border border-slate-200 text-[8px] font-bold text-slate-500 truncate", children: "02:00 PM Mehta" })
                  ] }),
                  !day.includes("Sat") && !day.includes("Sun") && idx === 5 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1 rounded bg-[#2E86AB]/15 border border-[#2E86AB]/20 text-[8px] font-bold text-cyan-700 truncate", children: "11:30 AM Joshi" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-semibold text-slate-400 font-mono", children: day.includes("Sat") ? "2 booked" : day.includes("Sun") ? "2 booked" : idx === 5 ? "1 booked" : "0 slots" })
              ] }, idx);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 pt-3 flex justify-between items-center text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-semibold", children: "Layers:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-[10px] font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded bg-amber-500" }),
                " Hot lead (Score > 70)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded bg-primary" }),
                " Warm lead"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded bg-slate-400" }),
                " General / Rescheduled"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card flex flex-col h-[260px] justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display mb-2.5", children: "Confirmed visit schedule" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-[160px] overflow-y-auto pr-1 scrollbar-none", children: filteredVisits.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl border border-border bg-background flex items-center justify-between text-xs hover:bg-secondary/40 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-foreground flex items-center gap-1.5", children: [
                    v.name,
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-mono bg-secondary px-1 py-0.5 rounded text-slate-500", children: [
                      "Score: ",
                      v.score
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: [
                    v.project,
                    " · Agent: ",
                    v.agent
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0 flex flex-col items-end gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] font-semibold text-slate-400", children: [
                    v.time.split(" ")[0],
                    " ",
                    v.time.split(" ")[1]
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-1.5 py-0.5 rounded text-[9px] font-bold ${v.status === "Rescheduled" ? "bg-amber-50 text-amber-600 border border-amber-100" : "bg-emerald-50 text-emerald-600 border border-emerald-100"}`, children: v.status }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleReschedule(v.id), className: "h-5 w-5 bg-card hover:bg-secondary border border-border rounded flex items-center justify-center text-slate-500 hover:text-foreground", title: "Reschedule Visit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3 w-3" }) })
                  ] })
                ] })
              ] }, v.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center border-t border-border/40 pt-2.5", children: "Layered reminders sent automatically via WhatsApp (T-24h, Day-of, T-1h)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-4 border border-border bg-card flex flex-col justify-between h-[175px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-red-500 font-display mb-2 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3.5 w-3.5 text-red-500 animate-pulse" }),
              " No-Show registry queue"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: noShowVisits.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs flex items-center justify-between border-b border-border/40 pb-2 last:border-0 last:pb-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: v.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: [
                  'Reason: "',
                  v.reason,
                  '" · ',
                  v.time.split(" ")[0]
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert("Reschedule prompt triggered to " + v.name + " WhatsApp."), className: "h-7 px-3 bg-red-50 border border-red-200 hover:bg-red-100 text-red-600 font-bold rounded-lg text-[10px] transition-colors", children: "Reschedule WhatsApp" })
            ] }, v.id)) })
          ] }) })
        ] })
      ] })
    ] });
  };
  const [selectedSequenceKey, setSelectedSequenceKey] = reactExports.useState("rajesh");
  const activeSequence = reactExports.useMemo(() => followUpSequences[selectedSequenceKey], [selectedSequenceKey]);
  const renderFollowUp = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-card border border-border rounded-2xl flex justify-between items-center flex-wrap gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-500 uppercase tracking-wider", children: "Objection Handling Webhooks:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-bold", children: "🟢 Trigger active" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-slate-400", children: "Post-visit conversion rate: 28% (vs 18% baseline)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 overflow-hidden h-[480px] flex flex-col border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3.5 bg-secondary/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Active Post-Visit Follow-Up Sequences" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto flex-1 scrollbar-none bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Buyer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Visit Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Current Step" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Objection flag" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Status" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 font-medium text-foreground bg-background", children: Object.keys(followUpSequences).map((key) => {
              const seq = followUpSequences[key];
              const isSelected = selectedSequenceKey === key;
              const isStuck = seq.status === "Agent Action";
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setSelectedSequenceKey(key), className: `hover:bg-secondary/15 transition-colors cursor-pointer ${isSelected ? "bg-secondary/25 border-l-2 border-primary font-bold" : ""}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: seq.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-slate-500 font-medium truncate max-w-xs mt-0.5", children: [
                    '"',
                    seq.lastMsg,
                    '"'
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-slate-500", children: seq.visitDate }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-bold text-primary", children: [
                  "Step ",
                  seq.currentStep,
                  " · ",
                  seq.stepName
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: seq.objection !== "None" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-600 border border-amber-200", children: [
                  "⚠️ ",
                  seq.objection
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 font-mono", children: "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded text-[10px] font-bold ${isStuck ? "bg-red-50 text-red-600 border border-red-100" : seq.status === "Slow" ? "bg-amber-50 text-amber-600 border border-amber-100" : "bg-emerald-50 text-emerald-600 border border-emerald-100"}`, children: seq.status }) })
              ] }, key);
            }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card flex flex-col justify-between h-[480px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-h-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2.5 border-b border-border/40 pb-2.5 flex justify-between items-center shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Active Follow-Up Timeline" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-bold text-foreground", children: [
                  "Buyer: ",
                  activeSequence.name
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9.5px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100", children: [
                "Step ",
                activeSequence.currentStep,
                " of 7 Completed"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto space-y-3 p-3 bg-secondary/15 rounded-xl border border-border/60 overflow-y-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center mb-1", children: "WhatsApp Conversation Thread" }),
              activeSequence.conversation.map((msg, idx) => {
                const isAi = msg.sender === "ai";
                return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${isAi ? "justify-start" : "justify-end"} animate-in fade-in duration-300`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[85%] rounded-xl px-2.5 py-1.5 text-[10.5px] leading-relaxed shadow-sm font-semibold ${isAi ? "bg-white text-foreground border border-border rounded-tl-none" : "bg-primary text-primary-foreground rounded-br-none"}`, children: [
                  msg.text,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-right text-[7.5px] font-mono mt-1 ${isAi ? "text-slate-400" : "text-primary-foreground/75"}`, children: msg.time.split(" ")[1] })
                ] }) }, idx);
              })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3 mt-4 shrink-0 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert("Follow-up paused for manual override by Agent."), className: "flex-1 h-8 rounded-lg bg-secondary hover:bg-secondary/70 border border-border text-foreground text-xs font-bold transition-all", children: "Pause Sequence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert("Drafting manual response for " + activeSequence.name), className: "flex-1 h-8 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold transition-all shadow-sm", children: "Send Manual Message" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-0 overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Objection Handling Trigger Map (Automation webhook rules)" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-bold", children: "Objection Keyword Group" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-bold", children: "Automated Response Document Dispatched" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-bold", children: "Downstream Trigger Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 font-medium text-foreground bg-background", children: objectionsWebhookRules.map((rule, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-bold", children: rule.keyword }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-mono text-slate-500 font-bold", children: rule.responseType }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100 font-extrabold uppercase font-mono", children: "Active Webhook" }) })
          ] }, idx)) })
        ] }) })
      ] })
    ] });
  };
  const renderDripEngine = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Leads in Drip", value: "142", desc: "Long-term nurture", color: "text-[#1A3C5E]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Track A — Active (30d)", value: "24", desc: "Every 3-4 days", color: "text-red-500 font-bold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Track B — Warm (60d)", value: "48", desc: "Every 7 days", color: "text-[#E8A838]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Track C — Long-Horizon (90d)", value: "70", desc: "Every 14 days", color: "text-[#2E86AB]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 overflow-hidden h-[450px] flex flex-col border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3.5 bg-secondary/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Active Nurture Leads Registry" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto flex-1 scrollbar-none bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Buyer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Drip Track" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Sent / Opened" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Clicks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Last Active" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Next Message due" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 font-medium text-foreground bg-background", children: dripNurtureLeads.map((lead, idx) => {
              const isReengaged = lead.status === "reengaged";
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `hover:bg-secondary/15 transition-colors ${isReengaged ? "bg-emerald-50/50 font-bold" : ""}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-bold flex items-center gap-1.5", children: [
                  lead.name,
                  isReengaged && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] bg-emerald-500 text-white font-extrabold px-1.5 py-0.5 rounded font-mono uppercase animate-pulse", children: "Re-engaged" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold text-slate-500", children: lead.track }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-bold text-slate-600", children: [
                  lead.sent,
                  " sent · ",
                  lead.opened,
                  " read"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-extrabold text-[#0E86E9]", children: [
                  lead.clicks,
                  " clicks"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-slate-400", children: lead.lastActive }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold text-primary", children: lead.nextSend })
              ] }, idx);
            }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card flex flex-col justify-between h-[450px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Drip Content Calendar (14 Days)" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: dripContentCalendar.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-xl border border-border bg-background flex gap-3 hover:bg-secondary/30 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-10 w-10 bg-secondary border border-border rounded-lg shrink-0 flex flex-col justify-center items-center text-center font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono leading-none text-slate-500 font-extrabold uppercase", children: item.date.split(" ")[1] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-mono leading-none text-foreground font-black mt-0.5", children: item.date.split(" ")[0] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-[#0E86E9] uppercase tracking-wider font-mono", children: item.type }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold bg-secondary px-1.5 py-0.5 rounded font-mono", children: item.track })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs text-foreground mt-1 truncate", children: item.title })
              ] })
            ] }, idx)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border pt-3 mt-4 text-xs font-semibold text-slate-500 leading-relaxed text-center", children: "Re-engagement signals: link click, keyword reply, or callback trigger automatically exit drip to Active Pipeline." })
        ] })
      ] })
    ] });
  };
  const [boardDeals, setBoardDeals] = reactExports.useState(demoDeals);
  const [draggedId, setDraggedId] = reactExports.useState(null);
  const getDealsByStage = (stageId) => {
    return boardDeals.filter((d) => d.stage === stageId);
  };
  const getStageSum = (stageId) => {
    const sum = boardDeals.filter((d) => d.stage === stageId).reduce((acc, curr) => acc + curr.value, 0);
    return `₹${sum}L`;
  };
  const handleDragStart = (dealId) => {
    setDraggedId(dealId);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (stageId) => {
    if (!draggedId) return;
    setBoardDeals((prev) => prev.map((d) => d.id === draggedId ? {
      ...d,
      stage: stageId,
      daysInStage: 0
    } : d));
    setDraggedId(null);
  };
  const renderPipelineTracker = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-card border border-border rounded-2xl flex justify-between items-center flex-wrap gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-red-500 font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-4 w-4 animate-pulse text-[#D85A30]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Stuck Deal Alerts: 2 deals stuck past target duration. Escalations logged." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-slate-400 font-semibold", children: "Active Pipeline: 23 deals · ₹4.2Cr value" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto border border-border bg-card rounded-2xl p-4 min-h-[480px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 min-w-max h-[420px]", children: pipelineStages.map((stg) => {
        const stageDeals = getDealsByStage(stg.id);
        const sum = getStageSum(stg.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onDragOver: handleDragOver, onDrop: () => handleDrop(stg.id), className: "w-[220px] bg-secondary/15 rounded-xl border border-border/80 flex flex-col h-full shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-t-xl border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-[9.5px] uppercase tracking-wider text-slate-500", children: stg.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold bg-secondary px-1.5 py-0.5 rounded-full", children: stageDeals.length })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold font-mono text-foreground", children: sum }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8.5px] text-slate-400 font-mono", children: [
                "Prob: ",
                stg.probability,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-2.5 space-y-2 scrollbar-none", children: [
            stageDeals.map((deal) => {
              const isStuck = deal.urgency === "Stuck";
              const isWatch = deal.urgency === "Watch";
              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { draggable: true, onDragStart: () => handleDragStart(deal.id), className: "cursor-grab active:cursor-grabbing", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `p-3 border border-border hover:border-slate-300 bg-card transition-all ${isStuck ? "border-[#D85A30] ring-1 ring-[#D85A30]/20 animate-pulse" : isWatch ? "border-amber-400" : ""}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-xs text-foreground truncate", children: deal.buyer_name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full shrink-0 ${isStuck ? "bg-red-500" : isWatch ? "bg-amber-400" : "bg-emerald-500"}` })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5 font-semibold leading-relaxed truncate", children: deal.project }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mt-3 pt-2.5 border-t border-border/40 text-[10px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground font-mono", children: [
                    "₹",
                    deal.value,
                    "L"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-mono text-slate-500 flex items-center gap-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                    " ",
                    deal.daysInStage,
                    "d"
                  ] })
                ] })
              ] }) }, deal.id);
            }),
            stageDeals.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono", children: "Drop deal here" }) })
          ] })
        ] }, stg.id);
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Stage Velocity Benchmarks (Fortiv Actual vs Industry average)" }) }),
        renderVelocityChart(160)
      ] })
    ] });
  };
  const [listingForm, setListingForm] = reactExports.useState({
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
  const [activeOutputTab, setActiveOutputTab] = reactExports.useState("portal");
  const [writerStatus, setWriterStatus] = reactExports.useState("idle");
  const [countdown, setCountdown] = reactExports.useState(30);
  const handleGenerateListing = (e) => {
    e.preventDefault();
    setWriterStatus("generating");
    setCountdown(3);
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
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-bold text-foreground mb-4 font-display flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4.5 w-4.5 text-primary" }),
            " Listing Parameters Form"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleGenerateListing, className: "space-y-3.5 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-semibold text-muted-foreground", children: "Project Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: listingForm.project_name, onChange: (e) => setListingForm({
                  ...listingForm,
                  project_name: e.target.value
                }), className: "w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-semibold text-muted-foreground", children: "Locality" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: listingForm.locality, onChange: (e) => setListingForm({
                  ...listingForm,
                  locality: e.target.value
                }), className: "w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-semibold text-muted-foreground", children: "Starting Price (₹ Lakhs)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", required: true, value: listingForm.price_starting, onChange: (e) => setListingForm({
                  ...listingForm,
                  price_starting: parseInt(e.target.value) || 0
                }), className: "w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-semibold text-muted-foreground", children: "Price Range" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: listingForm.price_range, onChange: (e) => setListingForm({
                  ...listingForm,
                  price_range: e.target.value
                }), className: "w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-semibold text-muted-foreground", children: "RERA Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: listingForm.rera_number, onChange: (e) => setListingForm({
                  ...listingForm,
                  rera_number: e.target.value
                }), className: "w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-semibold text-muted-foreground", children: "Possession Target" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: listingForm.possession_date, onChange: (e) => setListingForm({
                  ...listingForm,
                  possession_date: e.target.value
                }), className: "w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-semibold text-muted-foreground", children: "USPs (Unique Selling Points)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: listingForm.usps, onChange: (e) => setListingForm({
                ...listingForm,
                usps: e.target.value
              }), className: "w-full h-14 p-2 border border-border rounded-lg bg-background outline-none focus:border-ring text-xs leading-relaxed" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-semibold text-muted-foreground", children: "Listing Tone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: listingForm.tone, onChange: (e) => setListingForm({
                  ...listingForm,
                  tone: e.target.value
                }), className: "w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs font-bold", children: ["Formal", "Conversational", "Urgency", "Luxury"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: writerStatus === "generating", className: "w-full h-8 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1 mt-5 active:scale-95 disabled:opacity-50", children: "Regenerate Copy" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card flex flex-col justify-center min-h-[400px]", children: [
          writerStatus === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-12 w-12 text-slate-300 mx-auto animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm text-foreground", children: "AI Listing Writer Ready" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-sm mx-auto font-medium", children: "Select your target project specifications on the left and click write to compile portals, socials, and email scripts." })
          ] }),
          writerStatus === "generating" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-8 space-y-4 animate-in fade-in duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-12 w-12 mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full border-4 border-slate-100 border-t-primary animate-spin" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs text-foreground uppercase tracking-widest font-display", children: "Generating Copy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-bold font-mono text-primary font-bold mt-1", children: [
                countdown,
                "s remaining"
              ] })
            ] })
          ] }),
          writerStatus === "generated" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in slide-in-from-bottom duration-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 border-b border-border/40 pb-2", children: [{
              id: "portal",
              label: "Portal description"
            }, {
              id: "whatsapp",
              label: "WhatsApp Broadcast"
            }, {
              id: "instagram",
              label: "Instagram Copy"
            }, {
              id: "email",
              label: "Email Script"
            }, {
              id: "gujarati",
              label: "Gujarati Copy"
            }].map((tab2) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveOutputTab(tab2.id), className: `h-7 px-2.5 rounded-lg text-[10.5px] font-bold border transition-all ${activeOutputTab === tab2.id ? "bg-ink border-ink text-cream" : "bg-background border-border text-slate-500 hover:bg-muted"}`, children: tab2.label }, tab2.id)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/60 font-mono text-[10.5px] text-foreground leading-relaxed whitespace-pre-wrap max-h-[220px] overflow-y-auto scrollbar-none", children: [
              activeOutputTab === "portal" && `Fortiv Greenview Heights — Premium 2 & 3 BHK Residences in Vesu, Surat

Discover elevated living at Fortiv Greenview Heights, a RERA-registered residential development [RERA: P01200023XXX] nestled in the heart of Vesu, Surat's most sought-after micro-market. Rising across G+14 floors in two elegantly designed towers, Greenview Heights offers 2BHK and 3BHK configurations ranging from 1,020 to 1,640 sq ft — meticulously crafted for families who value space, light, and community.

Key Highlights:
• Premium 2BHK starting from ₹48 Lakhs
• Possession: December 2026
• Swimming pool, clubhouse, children's play area, and EV charging
• 24/7 CCTV surveillance · Maintenance ₹2/sq ft
• 5 mins to Vesu Main Road · 10 mins to airport

Contact: +91 XXXXX XXXXX | www.fortivsolutions.in`,
              activeOutputTab === "whatsapp" && `🏡 *Fortiv Greenview Heights | Vesu, Surat*
2BHK from ₹48L | 3BHK from ₹68L
⭐ RERA Registered | Possession Dec 2026
Pool · Clubhouse · EV Charging

Only 6 units available in floors 8–12.
📞 Call/WhatsApp: +91 XXXXX XXXXX`,
              activeOutputTab === "instagram" && `Your dream home just got closer. 🏠✨
Fortiv Greenview Heights is now accepting bookings — and yes, it's everything you've been picturing.

📍 Prime Vesu Location, Surat
🛏 2BHK from ₹48L | 3BHK from ₹68L
🏊 Pool · Clubhouse · Green Spaces
📋 RERA Registered · Possession Dec 2026

Book a site visit this weekend → Link in bio

#SuratRealEstate #VesuSurat #NewHome #FortivSolutions #2BHKSurat`,
              activeOutputTab === "email" && `Subject: Re: New Premium Residences Launching — Fortiv Greenview Heights

Dear Investor,

We are pleased to introduce Fortiv Greenview Heights in Vesu, Surat. Offering luxury 2 & 3 BHK residences starting from ₹48 Lakhs, with G+14 construction heights and possession scheduled for December 2026.

Key amenities include a swimming pool, clubhouse, security, and dedicated EV charging stations.

Best regards,
Fortiv Solutions Sales Team`,
              activeOutputTab === "gujarati" && `ફોર્ટિવ ગ્રીનવ્યુ હાઇટ્સ — વેસુ, સુરતમાં પ્રીમિયમ ૨ અને ૩ BHK ફ્લેટ્સ

વેસુમાં લક્ઝરી લિવિંગ શોધો [RERA: P01200023XXX].
કિંમત: ₹૪૮ લાખથી શરૂ.
સુવિધાઓ: સ્વિમિંગ પુલ, ક્લબહાઉસ, EV ચાર્જિંગ સ્ટેશનો.
કબ્જો: ડિસેમ્બર ૨૦૨૬.

સંપર્ક: +91 XXXXX XXXXX`
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2 border-t border-border/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert("Listing published to 99acres and MagicBricks portals successfully."), className: "flex-1 h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold transition-all shadow-sm", children: "Publish to Portals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert("WhatsApp broadcast copy copied to clipboard."), className: "h-8 w-10 border border-border hover:bg-secondary rounded-lg flex items-center justify-center text-slate-500", title: "Copy to Clipboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-3.5 w-3.5" }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-0 overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Published Listings Index & Performance" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Project" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Portal Platform" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Publish Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Views (7d)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Leads Generated" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Last Refreshed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Tone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "SEO Freshness" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 font-medium text-foreground bg-background", children: publishedListingsLog.map((list, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold", children: list.project }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: renderPlatformBadge(list.platform) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono", children: list.published }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-bold", children: [
              list.views,
              " views"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-extrabold text-[#0E86E9]", children: [
              "+",
              list.leads,
              " leads"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-slate-400", children: list.refreshed }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-600", children: list.tone }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded text-[9.5px] font-bold ${list.status === "Fresh" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-amber-50 text-amber-600 border border-amber-100 animate-pulse"}`, children: list.status }) })
          ] }, idx)) })
        ] }) })
      ] })
    ] });
  };
  const getPageHeader = () => {
    switch (activeTab) {
      case "menu":
        return {
          title: "Sales Pipeline & CRM Automation",
          subtitle: "Automates every step of the sales journey from first contact to registration — so no deal falls through, no follow-up is missed, and every agent has a clear view of what to do next."
        };
      case "overview":
        return {
          title: "Dashboard Overview",
          subtitle: "Helicopter view of active pipelines, stage summaries, and operational actions."
        };
      case "crm-sync":
        return {
          title: "CRM Sync & Deduplication",
          subtitle: "Bidirectional sync logs, deduplication registries, and field normalisation tracking."
        };
      case "scheduler":
        return {
          title: "Site Visit Scheduler",
          subtitle: "Show-flat calendar slot bookings, confirmations, no-show queues, and reschedules."
        };
      case "follow-up":
        return {
          title: "Post-Visit Follow-Up Agent",
          subtitle: "Multi-step post-visit sequences, dynamic chats, and pre-approved objection webhook handling."
        };
      case "drip":
        return {
          title: "Nurture Drip Engine",
          subtitle: "30/60/90-day drip campaigns calendar, re-engagement exited logs, and cold lead recovery."
        };
      case "pipeline":
        return {
          title: "Deal Pipeline Tracker",
          subtitle: "Draggable Kanban board with deal cards, velocity chart benchmark, and stuck deal alerts."
        };
      case "listing-writer":
        return {
          title: "AI Listing Writer",
          subtitle: "LLM content generator for SEO portals, WhatsApp, Instagram, email, and Gujarati copies."
        };
      default:
        return {
          title: "Sales Pipeline & CRM Automation",
          subtitle: "Autonomous deal management and communication."
        };
    }
  };
  const headerInfo = getPageHeader();
  const dynamicTitle = activeTab === "menu" ? headerInfo.title : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("menu"), className: "group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95 mr-0.5", "aria-label": "Back to pipeline menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors", onClick: () => setActiveTab("menu"), children: headerInfo.title })
  ] });
  const renderMenuSelection = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: submodulesList.map((mod) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { onClick: () => setActiveTab(mod.id), className: "submodule-card p-5 cursor-pointer flex flex-col justify-between group h-48", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
          " ",
          mod.status
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground group-hover:text-ink transition-colors mt-1 font-display", children: mod.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2 font-medium", children: mod.desc })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 mt-4 pt-3 flex items-center justify-between text-[11px] font-bold text-muted-foreground group-hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-foreground", children: mod.stats }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5 text-ink group-hover:underline", children: [
          "Access ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })
        ] })
      ] })
    ] }, mod.id)) }) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: dynamicTitle, subtitle: headerInfo.subtitle, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "transition-all duration-300", children: [
    activeTab === "menu" && renderMenuSelection(),
    activeTab === "overview" && renderDashboardOverview(),
    activeTab === "crm-sync" && renderCRMSync(),
    activeTab === "scheduler" && renderScheduler(),
    activeTab === "follow-up" && renderFollowUp(),
    activeTab === "drip" && renderDripEngine(),
    activeTab === "pipeline" && renderPipelineTracker(),
    activeTab === "listing-writer" && renderListingWriter()
  ] }) });
}
function StatBox({
  label,
  value,
  desc,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 flex flex-col justify-between relative min-h-24 border border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-400 font-display", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-baseline justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-2xl font-bold tracking-tight ${color}`, children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold text-muted-foreground", children: desc })
    ] })
  ] });
}
export {
  SalesPipelineManager as component
};
