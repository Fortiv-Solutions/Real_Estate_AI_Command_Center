import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, C as Card } from "./AppShell-K5gzIK3d.mjs";
import { b as Route$a } from "./router-DjkPPp1r.mjs";
import { n as ChevronLeft, b as ArrowRight, L as Layers, p as CircleAlert, D as DollarSign, X as ShieldCheck, t as Clock, a2 as TriangleAlert, Z as Sparkles, a3 as Upload, j as Camera } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const initialPhases = [{
  id: "P01",
  name: "Land Acquisition",
  plannedStart: "01/03/2022",
  plannedEnd: "31/05/2022",
  actualEnd: "31/05/2022",
  pct: 100,
  status: "Completed",
  critical: false,
  lead: "Suresh Mehta",
  cascade: 0,
  subPhases: ["Clear Title Deeds", "Sub-Registrar Filing", "Khata Transfer"]
}, {
  id: "P02",
  name: "Design & Drawings",
  plannedStart: "01/06/2022",
  plannedEnd: "30/09/2022",
  actualEnd: "30/09/2022",
  pct: 100,
  status: "Completed",
  critical: false,
  lead: "Vijay Thakkar",
  cascade: 0,
  subPhases: ["Architectural Layout", "Structural Design", "MEP Schematics"]
}, {
  id: "P03",
  name: "RERA Registration",
  plannedStart: "01/09/2022",
  plannedEnd: "31/12/2022",
  actualEnd: "31/12/2022",
  pct: 100,
  status: "Completed",
  critical: false,
  lead: "Suresh Mehta",
  cascade: 0,
  subPhases: ["Public Disclosures", "Certificate Generation"]
}, {
  id: "P04",
  name: "Building Plan Approval",
  plannedStart: "01/09/2022",
  plannedEnd: "28/02/2023",
  actualEnd: "28/02/2023",
  pct: 100,
  status: "Completed",
  critical: false,
  lead: "Suresh Mehta",
  cascade: 0,
  subPhases: ["SMC NOC", "SUDA Clearance"]
}, {
  id: "P05",
  name: "Foundation",
  plannedStart: "01/03/2023",
  plannedEnd: "31/07/2023",
  actualEnd: "31/07/2023",
  pct: 100,
  status: "Completed",
  critical: true,
  lead: "Ramesh Patel",
  cascade: 0,
  subPhases: ["Excavation", "Piling Works", "Raft Foundation"]
}, {
  id: "P06",
  name: "Basement / Podium",
  plannedStart: "01/08/2023",
  plannedEnd: "31/01/2024",
  actualEnd: "31/01/2024",
  pct: 100,
  status: "Completed",
  critical: true,
  lead: "Ramesh Patel",
  cascade: 0,
  subPhases: ["Columns & Retaining Walls", "Podium Slab Casting"]
}, {
  id: "P07",
  name: "Structural Floors 1–8",
  plannedStart: "01/02/2024",
  plannedEnd: "31/10/2024",
  actualEnd: "31/10/2024",
  pct: 100,
  status: "Completed",
  critical: true,
  lead: "Ramesh Patel",
  cascade: 0,
  subPhases: ["Tower A Slab 1-8", "Tower B Slab 1-8"]
}, {
  id: "P08",
  name: "Structural Floors 9–14",
  plannedStart: "01/11/2024",
  plannedEnd: "30/04/2025",
  actualEnd: "12/05/2025",
  pct: 31,
  status: "At Risk",
  critical: true,
  lead: "Ramesh Patel",
  cascade: 12,
  subPhases: ["Floor 9 Casting (85%)", "Floor 10 Formwork (72%)", "Floor 11 Steel Laying (44%)"]
}, {
  id: "P09",
  name: "External Finishing",
  plannedStart: "01/01/2025",
  plannedEnd: "30/06/2025",
  actualEnd: "12/07/2025",
  pct: 8,
  status: "In Progress",
  critical: false,
  lead: "Vijay Thakkar",
  cascade: 0,
  subPhases: ["Outer Plastering", "Compound Wall Development"]
}, {
  id: "P10",
  name: "Internal Finishing",
  plannedStart: "01/05/2025",
  plannedEnd: "31/10/2025",
  actualEnd: "12/11/2025",
  pct: 0,
  status: "Planned",
  critical: false,
  lead: "Vijay Thakkar",
  cascade: 0,
  subPhases: ["Floor Tiling", "Wall Putty & Paint"]
}, {
  id: "P11",
  name: "MEP / Services",
  plannedStart: "01/04/2025",
  plannedEnd: "30/09/2025",
  actualEnd: "12/10/2025",
  pct: 0,
  status: "Planned",
  critical: true,
  lead: "Ramesh Patel",
  cascade: 0,
  subPhases: ["Wiring & Switchboards", "Sanitary Lines Installation"]
}, {
  id: "P12",
  name: "Landscaping",
  plannedStart: "01/07/2025",
  plannedEnd: "30/11/2025",
  actualEnd: "30/11/2025",
  pct: 0,
  status: "Planned",
  critical: false,
  lead: "Vijay Thakkar",
  cascade: 0,
  subPhases: ["Lobby Layout", "Podium Garden Planting"]
}, {
  id: "P13",
  name: "OC Application",
  plannedStart: "01/11/2025",
  plannedEnd: "31/01/2026",
  actualEnd: "02/02/2026",
  pct: 0,
  status: "Planned",
  critical: true,
  lead: "Suresh Mehta",
  cascade: 0,
  subPhases: ["Documentation Assembly", "NOC Clearance File"]
}, {
  id: "P14",
  name: "OC Receipt",
  plannedStart: "01/02/2026",
  plannedEnd: "30/09/2026",
  actualEnd: "11/10/2026",
  pct: 0,
  status: "Planned",
  critical: true,
  lead: "Suresh Mehta",
  cascade: 0,
  subPhases: ["Liaison Inspections"]
}, {
  id: "P15",
  name: "Possession",
  plannedStart: "01/10/2026",
  plannedEnd: "31/12/2026",
  actualEnd: "31/12/2026",
  pct: 0,
  status: "Planned",
  critical: true,
  lead: "Vijay Thakkar",
  cascade: 0,
  subPhases: ["Key Handover Scheduled"]
}];
const contractors = [{
  id: "C-1",
  name: "Mehta Civil Works",
  trade: "Civil / Structural",
  lead: "Jayesh Mehta",
  phone: "+91 99245 12345",
  gst: "24AAAAA0000A1Z5",
  performance: 82,
  woCount: 2,
  status: "Active",
  expiry: "31/03/2026"
}, {
  id: "C-2",
  name: "Patel Plumbing Co.",
  trade: "MEP / Plumbing",
  lead: "Hiren Patel",
  phone: "+91 98254 98765",
  gst: "24BBBBB1111B2Z6",
  performance: 75,
  woCount: 1,
  status: "Active",
  expiry: "15/08/2025"
}, {
  id: "C-3",
  name: "Shree Electricals",
  trade: "MEP / Electrical",
  lead: "Ketan Shah",
  phone: "+91 93741 56789",
  gst: "24CCCCC2222C3Z7",
  performance: 88,
  woCount: 1,
  status: "Active",
  expiry: "10/12/2025"
}, {
  id: "C-4",
  name: "Ramdev Steel",
  trade: "Steel / Reinforcement",
  lead: "Ramdev Patel",
  phone: "+91 99044 11223",
  gst: "24DDDDD3333D4Z8",
  performance: 79,
  woCount: 1,
  status: "Active",
  expiry: "30/09/2025"
}, {
  id: "C-5",
  name: "Aakash Tiles",
  trade: "Finishing / Tiles",
  lead: "Vimal Shah",
  phone: "+91 97241 99887",
  gst: "24EEEEE4444E5Z9",
  performance: 71,
  woCount: 1,
  status: "Active",
  expiry: "01/01/2026"
}, {
  id: "C-6",
  name: "JP Waterproofing",
  trade: "Waterproofing",
  lead: "Jignesh Patel",
  phone: "+91 92254 33445",
  gst: "24FFFFF5555F6ZA",
  performance: 84,
  woCount: 1,
  status: "Active",
  expiry: "28/02/2026"
}];
const workOrders = [{
  id: "WO-041",
  contractor: "Mehta Civil Works",
  scope: "Tower A Fl 10 Slab Casting",
  value: 189e4,
  status: "Completed",
  paid: 189e4,
  start: "15/12/2024",
  end: "10/01/2025"
}, {
  id: "WO-044",
  contractor: "Ramdev Steel",
  scope: "Reinforcement Tower B Fl 9–10",
  value: 243e4,
  status: "In Progress",
  paid: 73e4,
  start: "02/01/2025",
  end: "25/01/2025"
}, {
  id: "WO-047",
  contractor: "Mehta Civil Works",
  scope: "Tower A Fl 11 Slab Casting",
  value: 2016e3,
  status: "In Progress",
  paid: 605e3,
  start: "20/01/2025",
  end: "15/02/2025"
}, {
  id: "WO-042",
  contractor: "Patel Plumbing Co.",
  scope: "Internal Plumbing Fl 1–5",
  value: 124e4,
  status: "In Progress",
  paid: 49e4,
  start: "10/01/2025",
  end: "28/02/2025"
}];
const procurementLog = [{
  id: "IND-112",
  material: "M30 Ready Mix Concrete",
  quantity: "190 cu.m",
  urgency: "High",
  vendor: "Ultratech RMC",
  val: 1178e3,
  status: "PO Sent",
  eta: "27/01/2025"
}, {
  id: "IND-108",
  material: "TMT Steel Fe500",
  quantity: "28 MT",
  urgency: "High",
  vendor: "Kamdhenu Steel",
  val: 196e4,
  status: "Delivered",
  eta: "18/01/2025"
}, {
  id: "IND-109",
  material: "OPC 53 Grade Cement",
  quantity: "400 Bags",
  urgency: "Medium",
  vendor: "Ultratech Cement",
  val: 22e4,
  status: "Delivered",
  eta: "20/01/2025"
}, {
  id: "IND-110",
  material: "CPVC Plumbing Pipes",
  quantity: "1,200 m",
  urgency: "Medium",
  vendor: "Astral Pipes",
  val: 18e4,
  status: "In Transit",
  eta: "22/01/2025"
}, {
  id: "IND-111",
  material: "Ceramic Floor Tiles",
  quantity: "2,400 sq ft",
  urgency: "Medium",
  vendor: "Somany Tiles",
  val: 41e4,
  status: "PO Sent",
  eta: "25/01/2025"
}];
const statutoryApprovals = [{
  name: "RERA Registration",
  authority: "Gujarat RERA",
  stage: "Registration",
  status: "Complete",
  due: "31/12/2022",
  blocksPossession: true,
  file: "RERA_Cert.pdf"
}, {
  name: "Building Plan Approval",
  authority: "Surat Municipal Corp",
  stage: "Planning",
  status: "Complete",
  due: "28/02/2023",
  blocksPossession: true,
  file: "SMC_Plan_App.pdf"
}, {
  name: "Commencement Certificate",
  authority: "SUDA",
  stage: "Commencement",
  status: "Complete",
  due: "01/04/2023",
  blocksPossession: true,
  file: "Commence_Cert.pdf"
}, {
  name: "Environment Clearance",
  authority: "SEIAA Gujarat",
  stage: "Environmental",
  status: "Complete",
  due: "30/06/2023",
  blocksPossession: false,
  file: "Env_NOC.pdf"
}, {
  name: "RERA Q1 2025 QPR",
  authority: "Gujarat RERA",
  stage: "Reporting",
  status: "Action Required",
  due: "31/01/2025",
  blocksPossession: false,
  file: "Pending"
}, {
  name: "Fire NOC (Provisional)",
  authority: "Surat Fire Department",
  stage: "Safety",
  status: "Not Initiated",
  due: "15/03/2025",
  blocksPossession: true,
  file: "Pending"
}, {
  name: "Occupation Certificate (OC)",
  authority: "SUDA",
  stage: "Occupancy",
  status: "Not Applied",
  due: "15/10/2026",
  blocksPossession: true,
  file: "Pending"
}];
const ocReadinessList = [{
  item: "Structural Slab Completion",
  category: "Civil",
  status: "In Progress (67%)"
}, {
  item: "Fire Fighting Sprinkler & Piping",
  category: "MEP",
  status: "Not Initiated"
}, {
  item: "Water connection sanction",
  category: "Utilities",
  status: "Pending Application"
}, {
  item: "Electricity substation NOC",
  category: "Utilities",
  status: "In Progress"
}, {
  item: "Drainage plan sanction",
  category: "Sanitation",
  status: "Approved"
}];
const initialSitePhotos = [{
  id: "PHT-1847",
  location: "Tower A Floor 11",
  phase: "Structural",
  activity: "Slab Casting",
  note: "Progress: 35% advance vs 14 days ago",
  date: "14/01/2025",
  tags: ["Tower A", "Floor 11", "Slab Casting", "Structural"],
  url: "concrete_pump.jpg",
  issue: null
}, {
  id: "PHT-1844",
  location: "Tower B Floor 9",
  phase: "Structural",
  activity: "Column Casting",
  note: "4 columns complete, 8 remaining visible",
  date: "13/01/2025",
  tags: ["Tower B", "Floor 9", "Column Casting", "Structural"],
  url: "steel_casing.jpg",
  issue: null
}, {
  id: "PHT-1840",
  location: "Podium Level",
  phase: "External",
  activity: "Waterproofing",
  note: "2nd coat application in progress",
  date: "12/01/2025",
  tags: ["Podium", "Waterproofing", "External"],
  url: "waterproofing.jpg",
  issue: null
}, {
  id: "PHT-1835",
  location: "Tower A Fl 1–5",
  phase: "MEP",
  activity: "Plumbing",
  note: "Vertical risers 80% complete",
  date: "11/01/2025",
  tags: ["Tower A", "Plumbing", "MEP"],
  url: "pipes.jpg",
  issue: null
}, {
  id: "PHT-1831",
  location: "Tower A Floor 8",
  phase: "Internal",
  activity: "Block Masonry",
  note: "Safety Alert: Workers without helmets detected",
  date: "09/01/2025",
  tags: ["Tower A", "Floor 8", "Masonry", "Safety Violation"],
  url: "wall.jpg",
  issue: "Labourers without helmets detected"
}];
const initialCostCategories = [{
  category: "Civil / Structural",
  budget: 125e6,
  spent: 842e5,
  projected: 1238e5,
  variance: -12e5,
  status: "Complete"
}, {
  category: "MEP Services",
  budget: 42e6,
  spent: 184e5,
  projected: 435e5,
  variance: 15e5,
  status: "Overrun"
}, {
  category: "External Finishing",
  budget: 38e6,
  spent: 92e5,
  projected: 378e5,
  variance: -2e5,
  status: "Complete"
}, {
  category: "Internal Finishing",
  budget: 35e6,
  spent: 62e5,
  projected: 352e5,
  variance: 2e5,
  status: "Complete"
}, {
  category: "Statutory / Approvals",
  budget: 8e6,
  spent: 7e6,
  projected: 88e5,
  variance: 8e5,
  status: "Overrun"
}, {
  category: "Project Overheads",
  budget: 24e6,
  spent: 342e5,
  projected: 42e6,
  variance: 18e6,
  status: "Critical Overrun"
}];
const initialPossessions = [{
  id: 1,
  unit: "A-401",
  config: "2BHK",
  value: 546e4,
  buyer: "Rajesh Patel",
  phone: "+91 98765 43210",
  payment: "Clear",
  snagsTotal: 3,
  snagsResolved: 3,
  letter: "Issued",
  staff: "Priya Rana",
  date: "20/12/2026 10:00 AM",
  status: "Ready"
}, {
  id: 2,
  unit: "A-402",
  config: "3BHK",
  value: 842e4,
  buyer: "Priya Shah",
  phone: "+91 99123 45678",
  payment: "Clear",
  snagsTotal: 4,
  snagsResolved: 4,
  letter: "Issued",
  staff: "Ankit Shah",
  date: "20/12/2026 11:30 AM",
  status: "Ready"
}, {
  id: 3,
  unit: "A-403",
  config: "2BHK",
  value: 485e4,
  buyer: "Amit Desai",
  phone: "+91 97654 32109",
  payment: "Clear",
  snagsTotal: 3,
  snagsResolved: 2,
  letter: "Pending Snags",
  staff: "Meera Patel",
  date: "20/12/2026 02:00 PM",
  status: "Snag Pending"
}, {
  id: 4,
  unit: "A-404",
  config: "2BHK",
  value: 52e5,
  buyer: "Sunita Mehta",
  phone: "+91 98654 32109",
  payment: "₹2.1L Pending",
  snagsTotal: 2,
  snagsResolved: 2,
  letter: "Blocked Payment",
  staff: "—",
  date: "20/12/2026 03:30 PM",
  status: "Payment Pending"
}, {
  id: 5,
  unit: "A-501",
  config: "3BHK",
  value: 789e4,
  buyer: "Vikram Joshi",
  phone: "+91 99245 12345",
  payment: "Clear",
  snagsTotal: 2,
  snagsResolved: 2,
  letter: "Issued",
  staff: "Priya Rana",
  date: "21/12/2026 10:00 AM",
  status: "Ready"
}, {
  id: 6,
  unit: "A-502",
  config: "3BHK",
  value: 825e4,
  buyer: "Deepak Trivedi",
  phone: "+91 98123 45678",
  payment: "Clear",
  snagsTotal: 0,
  snagsResolved: 0,
  letter: "Issued",
  staff: "Rahul Modi",
  date: "21/12/2026 11:30 AM",
  status: "Ready"
}];
const snagChecklist = [{
  item: "Floor tiles inspection",
  cat: "Civil",
  status: "Clear"
}, {
  item: "Wall paint finish",
  cat: "Civil",
  status: "Clear"
}, {
  item: "Main door lock operational",
  cat: "Civil",
  status: "Snag: Handle loose"
}, {
  item: "Plumbing leak checks",
  cat: "MEP",
  status: "Snag: Basin tap dripping"
}, {
  item: "Electrical points sanity",
  cat: "MEP",
  status: "Clear"
}];
const statusBadge = (status) => {
  if (["Complete", "Completed", "Delivered", "Ready", "Clear", "Active"].some((s) => status.includes(s))) return "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (["In Progress", "In Transit", "PO Sent", "Scheduled", "Applied", "Under Review", "Counter offer", "Negotiating", "Planned"].some((s) => status.includes(s))) return "bg-amber-50 text-amber-700 border border-amber-100";
  if (["Action Required", "Not Initiated", "Not Applied", "Pending Snags", "Blocked", "Payment Pending", "Snag Pending", "At Risk", "Delayed", "Overrun", "Critical Overrun"].some((s) => status.includes(s))) return "bg-red-50 text-[#D85A30] border border-red-100";
  return "bg-slate-50 text-slate-600 border border-slate-200";
};
function ProjectManager() {
  const {
    tab
  } = Route$a.useSearch();
  const navigate = useNavigate({
    from: Route$a.fullPath
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
    desc: "Overall project health KPIs, RERA milestones summary, cost budgets, active contractors, and critical alerts feed.",
    stats: "67% construction complete",
    status: "Active"
  }, {
    id: "timeline",
    name: "Project Milestone Tracker",
    desc: "Gantt timeline mapping baseline schedule vs actual progress, highlighting delay risks and critical path.",
    stats: "Floors 9–14 at risk",
    status: "Active"
  }, {
    id: "subcontractor",
    name: "Subcontractor Management Agent",
    desc: "Work order log, milestone payment status, and contractor performance scorecards.",
    stats: "14 contractors active",
    status: "Active"
  }, {
    id: "procurement",
    name: "Material Procurement Tracker",
    desc: "Indent requests, purchase order delivery status, material shortage alerts, and L1 vendor grids.",
    stats: "IND-112 concrete PO sent",
    status: "Active"
  }, {
    id: "approvals",
    name: "Statutory Approvals Monitor",
    desc: "Track NOCs, RERA QPR filing timeline, and OC readiness checklist logs.",
    stats: "3 pending approvals",
    status: "Active"
  }, {
    id: "sitelog",
    name: "Construction Photo Site Log",
    desc: "AI-tagged photo feed verifying site construction progress and highlighting safety violations.",
    stats: "5 photos this week",
    status: "Active"
  }, {
    id: "cost",
    name: "Cost-to-Complete Forecaster",
    desc: "Continuous cost forecasts vs budget, category variances, and profit margin scenario models.",
    stats: "Overrun alert: Overheads",
    status: "Active"
  }, {
    id: "possession",
    name: "Possession Readiness Dashboard",
    desc: "Pre-possession snag checklist tracker, payment clearances, and slots schedules.",
    stats: "Possession: Dec 2026",
    status: "Active"
  }];
  const getPageHeader = () => {
    const map = {
      menu: {
        title: "Project & Construction Intelligence",
        subtitle: "A complete construction lifecycle management system — from ground-breaking to possession — giving developers and project teams real-time visibility into milestones, costs, compliance, and timelines."
      },
      overview: {
        title: "Project Dashboard Overview",
        subtitle: "Helicopter view of project health, milestone progress, cost budget variances, and regulatory compliance."
      },
      timeline: {
        title: "Project Milestone Tracker",
        subtitle: "Gantt-style milestone tracker mapping planned schedule vs actual progress, critical path, and cascade delay risks."
      },
      subcontractor: {
        title: "Subcontractor Management Agent",
        subtitle: "Onboarding, work orders, payment approvals, and performance scoring of active subcontractor trades."
      },
      procurement: {
        title: "Material Procurement Tracker",
        subtitle: "Site indents, vendor quotation selections, PO delivery logistics, and material shortage alerts."
      },
      approvals: {
        title: "Statutory Approvals Monitor",
        subtitle: "Liaison monitoring, RERA QPR progress reports, and Occupation Certificate (OC) readiness audits."
      },
      sitelog: {
        title: "Construction Photo & Site Log AI",
        subtitle: "AI-classified visual logs uploaded from site, analyzing progress and identifying safety issues."
      },
      cost: {
        title: "Cost-to-Complete Forecaster",
        subtitle: "Projected total final cost against budget, category expenditure variances, and margin sensitivity models."
      },
      possession: {
        title: "Possession Readiness Dashboard",
        subtitle: "Coordinate buyer possessions, track unit snags, check accounts clearance, and log key handovers."
      }
    };
    return map[activeTab] || map.menu;
  };
  const headerInfo = getPageHeader();
  const dynamicTitle = activeTab === "menu" ? headerInfo.title : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("menu"), className: "group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95 mr-0.5", "aria-label": "Back to project menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors", onClick: () => setActiveTab("menu"), children: headerInfo.title })
  ] });
  const renderOverview = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Overall Progress", value: "67%", desc: "All phases complete", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Budget Utilised", value: "₹16.2Cr / ₹28.4Cr", desc: "57% budget spent", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Active Contractors", value: "14", desc: "Trades with active WOs", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Approvals Pending", value: "3", desc: "Statutory NOCs / Files", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Days to Possession", value: "571", desc: "Dec 2026 RERA date", color: "text-[#D85A30]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-7 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-3.5 w-3.5 text-primary" }),
              " Active Milestone Progress Summary"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("timeline"), className: "text-[9px] font-bold text-primary hover:underline font-mono", children: "Milestone Tracker →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [{
            name: "Structural Floors 1–8",
            pct: 100,
            days: "On time",
            status: "Completed"
          }, {
            name: "Structural Floors 9–14",
            pct: 31,
            days: "3 days behind",
            status: "At Risk"
          }, {
            name: "External Finishing",
            pct: 8,
            days: "On schedule",
            status: "In Progress"
          }, {
            name: "MEP / Services",
            pct: 0,
            days: "On schedule",
            status: "Planned"
          }].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 pr-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground truncate", children: m.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-secondary/50 rounded-full mt-1 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${m.status === "Completed" ? "bg-emerald-500" : m.status === "At Risk" ? "bg-red-500 animate-pulse" : "bg-primary"}`, style: {
                width: `${m.pct}%`
              } }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0 min-w-[100px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-foreground", children: [
                m.pct,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[9.5px] font-semibold mt-0.5 ${m.status === "At Risk" ? "text-red-500" : "text-slate-400"}`, children: m.days })
            ] })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3.5 w-3.5 text-[#D85A30]" }),
              " Critical Construction Alerts"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-red-500 animate-pulse" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-2.5 rounded-xl border border-red-200 bg-red-50/20 text-[#D85A30]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🔴 Fire NOC — Application not submitted. Possession blocker." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("approvals"), className: "text-[9px] font-bold underline font-mono shrink-0 ml-2", children: "Resolve →" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-2.5 rounded-xl border border-amber-200 bg-amber-50/20 text-amber-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🟡 RERA Q1 Progress Report — Due in 8 days. Action required." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("approvals"), className: "text-[9px] font-bold underline font-mono shrink-0 ml-2", children: "Review →" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-2.5 rounded-xl border border-amber-200 bg-amber-50/20 text-amber-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🟡 Floors 9–14 Structure — 3 days behind schedule. Cascade: +12 days on MEP." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("timeline"), className: "text-[9px] font-bold underline font-mono shrink-0 ml-2", children: "Impact Chart →" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-5 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-3.5 w-3.5 text-[#1D9E75]" }),
              " Cost Budget Utilization"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("cost"), className: "text-[9px] font-bold text-primary hover:underline font-mono", children: "Cost Forecaster →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 text-xs font-semibold", children: [{
            cat: "Civil / Structural",
            spent: "₹8.4Cr",
            budget: "₹12.5Cr",
            pct: 67,
            status: "Normal"
          }, {
            cat: "MEP Services",
            spent: "₹1.8Cr",
            budget: "₹4.2Cr",
            pct: 43,
            status: "Normal"
          }, {
            cat: "Project Overheads",
            spent: "₹3.4Cr",
            budget: "₹2.4Cr",
            pct: 142,
            status: "Overrun"
          }].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/30 pb-2 last:border-0 last:pb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: c.cat }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] text-slate-400 font-normal", children: [
                "Spent: ",
                c.spent,
                " / Budget: ",
                c.budget
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${c.status === "Overrun" ? "bg-red-50 text-red-600 border border-red-100 animate-pulse" : "bg-slate-100 text-slate-500"}`, children: [
              c.pct,
              "% Used"
            ] })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-emerald-600" }),
              " Occupation Certificate (OC) Readiness"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("approvals"), className: "text-[9px] font-bold text-primary hover:underline font-mono", children: "Approvals Board →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-14 w-14 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 36 36", className: "h-14 w-14 -rotate-90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9155", fill: "none", stroke: "#e5e7eb", strokeWidth: "3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9155", fill: "none", strokeWidth: "3", stroke: "#1D9E75", strokeDasharray: "43 57", strokeLinecap: "round" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 flex items-center justify-center font-mono font-extrabold text-[11px] text-emerald-600", children: "43%" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: "OC Readiness Score" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-normal mt-0.5", children: "38 of 240 units snagged · Water connections connecting · Substation pending NOC" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border border-red-200 bg-red-50/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-6 w-6 text-[#D85A30] animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground uppercase tracking-wider", children: "Fortiv Greenview Heights · RERA Possession Countdown" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-normal mt-0.5", children: "240 Total Units · 38 Snag Inspected · 24 Cleared Snag-Free · RERA Due: 31 Dec 2026" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-lg font-extrabold text-[#D85A30] px-4 py-1.5 rounded-xl bg-red-50 border border-red-200", children: "571 DAYS REMAINING" })
    ] })
  ] });
  const [selectedPhase, setSelectedPhase] = reactExports.useState(initialPhases[0]);
  const renderTimeline = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Construction Phases", value: "15", desc: "Land to Handover", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Phases Completed", value: "7", desc: "Foundation + Structural 1-8", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "At Risk / Delayed", value: "1", desc: "Structural Floors 9-14", color: "text-[#D85A30]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Delay Downstream Cascade", value: "+12 Days", desc: "MEP start impact", color: "text-[#E8A838]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-8 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Gantt Milestone Schedule" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono text-slate-400 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-amber-500" }),
            "Orange outline = Critical Path"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 max-h-[460px] overflow-y-auto pr-1 scrollbar-none", children: initialPhases.map((phase) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setSelectedPhase(phase), className: `p-3 rounded-xl border cursor-pointer hover:bg-secondary/15 transition-all ${selectedPhase.id === phase.id ? "bg-secondary/20 border-primary" : "border-border bg-background"} ${phase.critical ? "border-l-4 border-l-amber-500" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs font-semibold mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-slate-400 text-[10px]", children: phase.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: phase.name }),
              phase.critical && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-bold bg-amber-100 text-amber-700 px-1 rounded font-mono", children: "Critical" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono font-bold text-foreground", children: [
              phase.pct,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-3 bg-secondary/50 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${phase.status === "Completed" ? "bg-emerald-500" : phase.status === "At Risk" ? "bg-red-500 animate-pulse" : "bg-primary"}`, style: {
              width: `${phase.pct}%`
            } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-1.5 py-0.5 rounded font-mono ${statusBadge(phase.status)}`, children: phase.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[9px] font-mono text-slate-400 mt-1 font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Start: ",
              phase.plannedStart
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "End/Est: ",
              phase.actualEnd
            ] }),
            phase.cascade > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-500 animate-pulse", children: [
              "Cascade: +",
              phase.cascade,
              " days"
            ] })
          ] })
        ] }, phase.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4 border border-border bg-card space-y-4 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/40 pb-2 flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: [
              "Phase Detail — ",
              selectedPhase.id
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(selectedPhase.status)}`, children: selectedPhase.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-foreground text-sm", children: selectedPhase.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-normal mt-0.5", children: [
                "Liaison lead: ",
                selectedPhase.lead
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[9.5px] space-y-1 text-slate-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Baseline Start:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: selectedPhase.plannedStart })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Baseline Completion:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: selectedPhase.plannedEnd })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Revised/Actual End:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: selectedPhase.actualEnd || selectedPhase.plannedEnd })
              ] }),
              selectedPhase.cascade > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-red-500 font-bold border-t border-border/40 pt-1 mt-1", children: [
                "⚠️ Cascade impact: +",
                selectedPhase.cascade,
                " days to downstream tasks."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 pt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-bold uppercase tracking-wider text-slate-400", children: "Sub-Phases / Floor Breakdown" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: selectedPhase.subPhases.map((sb, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded bg-background border border-border/50 font-mono text-[10px] flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: sb }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-bold", children: "✓ Complete" })
              ] }, idx)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Milestone report compilation initiated for Phase ${selectedPhase.id}.`), className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all mt-4", children: "Export Milestone Report" })
      ] })
    ] })
  ] });
  const [selectedContractor, setSelectedContractor] = reactExports.useState(contractors[0]);
  const [subWo, setSubWo] = reactExports.useState(workOrders);
  const getContractorWos = (name) => {
    return subWo.filter((w) => w.contractor === name);
  };
  const certifyMilestonePayment = (woId, value) => {
    setSubWo((prev) => prev.map((w) => {
      if (w.id === woId) {
        return {
          ...w,
          status: "Completed",
          paid: value
        };
      }
      return w;
    }));
    alert(`Milestone payment certified and processed for work order ${woId}.`);
  };
  const activeWos = getContractorWos(selectedContractor.name);
  const renderSubcontractor = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Empaneled Subcontractors", value: "24", desc: "Across 8 trades", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Active Work Orders", value: "14", desc: "Live on site", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Milestone Payments Certified", value: "₹44.1L", desc: "This month", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Subcontractor Expiry Alerts", value: "1", desc: "Patel Plumbing Co.", color: "text-[#E8A838]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border text-[10px] font-bold uppercase text-slate-500 font-display", children: "Contractor Registry" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Contractor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Trade Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Active WOs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Performance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: contractors.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setSelectedContractor(c), className: `hover:bg-secondary/15 cursor-pointer transition-colors ${selectedContractor.id === c.id ? "bg-secondary/20 font-bold" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: c.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] text-slate-400 font-mono", children: [
                "Lead: ",
                c.lead
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500", children: c.trade }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono", children: c.woCount }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-12 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${c.performance >= 80 ? "bg-emerald-500" : "bg-amber-500"}`, style: {
                width: `${c.performance}%`
              } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono font-bold ${c.performance >= 80 ? "text-emerald-600" : "text-amber-600"}`, children: c.performance })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(c.status)}`, children: c.status }) })
          ] }, c.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Contractor Profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${selectedContractor.performance >= 80 ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`, children: [
            "★ ",
            selectedContractor.performance,
            " Score"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 text-xs font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-foreground text-sm", children: selectedContractor.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-normal", children: [
              "Trade Scope: ",
              selectedContractor.trade
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[9.5px] space-y-1 text-slate-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GSTIN:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: selectedContractor.gst })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Registry Phone:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: selectedContractor.phone })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Labour Licence Exp:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: selectedContractor.expiry })
            ] })
          ] }),
          selectedContractor.name === "Patel Plumbing Co." && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl border border-amber-200 bg-amber-50/20 text-amber-700 text-[10px]", children: [
            "⚠️ ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Liaison Alert:" }),
            " Contractor insurance expires in 22 days. Renew prior to certifying further WOs."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-bold uppercase tracking-wider text-slate-400 block border-b border-border/40 pb-1", children: "Work Orders & Payments" }),
            activeWos.map((wo, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded bg-background border border-border/50 space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-mono text-[10px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: wo.id }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-extrabold px-1.5 py-0.2 rounded ${statusBadge(wo.status)}`, children: wo.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500", children: wo.scope }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-mono text-[9.5px] text-slate-400 font-semibold border-t border-border/30 pt-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Val: ₹",
                  (wo.value / 1e5).toFixed(1),
                  "L"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Paid: ₹",
                  (wo.paid / 1e5).toFixed(1),
                  "L"
                ] })
              ] }),
              wo.status !== "Completed" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => certifyMilestonePayment(wo.id, wo.value), className: "w-full h-6 rounded bg-ink hover:bg-ink/90 text-cream text-[9px] font-mono uppercase tracking-wider mt-1", children: "Certify & Release Milestone Payment" })
            ] }, i))
          ] })
        ] })
      ] })
    ] })
  ] });
  const [procurement, setProcurement] = reactExports.useState(procurementLog);
  const [procFilter, setProcFilter] = reactExports.useState("All");
  const filteredProc = reactExports.useMemo(() => {
    if (procFilter === "All") return procurement;
    return procurement.filter((p) => p.status === procFilter);
  }, [procurement, procFilter]);
  const dispatchMaterialPO = (indentId) => {
    setProcurement((prev) => prev.map((p) => {
      if (p.id === indentId) {
        return {
          ...p,
          status: "PO Sent"
        };
      }
      return p;
    }));
    alert(`Purchase Order issued for Indent ${indentId}. Dispatched to Ultratech RMC.`);
  };
  const renderProcurement = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Indents Raised (Month)", value: "42", desc: "Slabs + blockwork indents", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "POs Dispatched", value: "38", desc: "₹48.2L procurement value", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Deliveries In Transit", value: "1", desc: "Plumbing CPVC pipes", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Stock Shortage Alert", value: "OPC 53", desc: "Cement running low (~2.3d)", color: "text-[#D85A30]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs flex items-center gap-3 font-semibold text-amber-700 animate-pulse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Cement Shortage Alert:" }),
        " OPC Cement (53 Grade) current stock is ~80 bags. Daily consumption is ~35 bags. Estimated days remaining: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2.3 days" }),
        ". Immediate replenishment required."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 items-center", children: ["All", "PO Sent", "In Transit", "Delivered"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setProcFilter(f), className: `h-7 px-3 rounded-lg text-[10px] font-bold uppercase tracking-widest border transition-all ${procFilter === f ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`, children: f }, f)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display uppercase tracking-wider", children: "Site Indents & Procurement Log" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Indent #" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Material" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Qty ordered" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Vendor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "PO Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: filteredProc.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold text-slate-400", children: row.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold", children: row.material }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-slate-500", children: row.quantity }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500", children: row.vendor }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-bold", children: [
              "₹",
              (row.val / 1e5).toFixed(1),
              "L"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(row.status)}`, children: row.status }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: row.status === "PO Sent" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => dispatchMaterialPO(row.id), className: "h-6 px-2 rounded bg-ink hover:bg-ink/90 text-cream text-[9px] font-mono uppercase", children: "Dispatch" }) })
          ] }, row.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "L1 Vendor Comparison — Concrete" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 text-xs font-semibold text-slate-600", children: [
          [{
            vendor: "Ultratech Cement RMC",
            rate: "₹6,200/cu.m",
            lead: "2 days",
            rating: "★ 4.6",
            status: "L1 — Best Quote"
          }, {
            vendor: "ACC RMC Surat",
            rate: "₹6,380/cu.m",
            lead: "3 days",
            rating: "★ 4.3",
            status: "L2"
          }, {
            vendor: "Shree RMC Surat",
            rate: "₹6,550/cu.m",
            lead: "1 day",
            rating: "★ 4.1",
            status: "L3"
          }].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-2.5 rounded-xl border flex justify-between items-center ${i === 0 ? "border-emerald-200 bg-emerald-50/10" : "border-border bg-background"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: v.vendor }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] text-slate-400 font-normal", children: [
                "Delivery: ",
                v.lead,
                " · rating: ",
                v.rating
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary font-bold text-sm", children: v.rate }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[8.5px] font-bold uppercase tracking-wider ${i === 0 ? "text-emerald-600" : "text-slate-400"}`, children: v.status })
            ] })
          ] }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9.5px] font-mono text-slate-400", children: "Comparing quotes automatically matches and highlights L1 according to Fortiv Solutions procurement policies." })
        ] })
      ] })
    ] })
  ] });
  const [approvals, setApprovals] = reactExports.useState(statutoryApprovals);
  const startReraQprCompilation = () => {
    alert("Auto-compilation initiated. Pulling structural stats from P08 timeline, cost metrics from category models, and sales records from M4 CRM...");
  };
  const renderApprovals = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Required Approvals", value: "14", desc: "RERA to Occupancy", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Approvals Complete", value: "9", desc: "NOCs / Permits complete", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Liaison Reviews Pending", value: "2", desc: "Action needed", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "OC Readiness Score", value: "43%", desc: "Aggregated pre-conditions", color: "text-[#2E86AB]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display uppercase tracking-wider", children: "Statutory Approvals & NOC Monitor" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Approval Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Authority" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Due Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Possession Dependency" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: approvals.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: row.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] text-slate-400 font-mono", children: [
                "Stage: ",
                row.stage
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 text-slate-500", children: row.authority }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono text-slate-400", children: row.due }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-semibold text-slate-500", children: row.blocksPossession ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#D85A30]", children: "Critical block" }) : "No" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(row.status)}`, children: row.status }) })
          ] }, i)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-5 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card space-y-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-border/40 pb-2", children: "OC Pre-Condition Checklists (43%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 text-xs font-semibold", children: ocReadinessList.map((oc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/30 pb-2 last:border-0 last:pb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: oc.item }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] text-slate-400 font-normal", children: [
                "Category: ",
                oc.category
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-[#2E86AB]", children: oc.status })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-[#E8A838] bg-amber-50/10 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display border-b border-amber-200 pb-2", children: "RERA QPR Submission (Q1 2025)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-600 leading-relaxed font-semibold", children: "Submission is due in 8 days. Click compile to auto-gather construction progress percentages and cost models." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: startReraQprCompilation, className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest font-sans transition-all flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            " Start RERA QPR Auto-Compilation"
          ] })
        ] })
      ] })
    ] })
  ] });
  const [sitePhotos, setSitePhotos] = reactExports.useState(initialSitePhotos);
  const [selectedPhoto, setSelectedPhoto] = reactExports.useState(initialSitePhotos[0]);
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
    setSitePhotos((prev) => [newPhoto, ...prev]);
    setSelectedPhoto(newPhoto);
    alert("Photo uploaded! AI has analyzed progress and tagged location automatically.");
  };
  const renderSitePhotos = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "AI-Tagged Site Photo Logs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: simulatePhotoUpload, className: "h-8 px-3 rounded-md bg-ink hover:bg-ink/90 text-cream text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-3.5 w-3.5" }),
        " Simulate Site Photo Upload"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "col-span-12 lg:col-span-7 p-4 border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: sitePhotos.map((photo) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setSelectedPhoto(photo), className: `p-3 rounded-2xl border cursor-pointer transition-all space-y-2 hover:shadow-md ${selectedPhoto.id === photo.id ? "border-primary bg-secondary/15" : "border-border bg-background"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-28 bg-secondary/40 rounded-xl flex items-center justify-center font-mono text-[10px] text-slate-400 border border-border/40 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-6 w-6 stroke-[1.5]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-2 left-2 bg-black/60 text-white px-2 py-0.5 rounded text-[8px]", children: photo.id }),
          photo.issue && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 right-2 bg-red-600 text-white px-2 py-0.5 rounded text-[8px] animate-pulse", children: "⚠️ Issue" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-foreground flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: photo.location }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 font-mono font-normal", children: photo.date })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-500 font-semibold", children: photo.activity }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 pt-1", children: photo.tags.map((t, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8.5px] font-bold bg-slate-100 border border-slate-200 px-1.5 py-0.2 rounded text-slate-600 font-mono", children: t }, idx)) })
        ] })
      ] }, photo.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "AI Visual Log Inspector" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 text-xs font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-36 bg-secondary/30 border border-border/40 rounded-2xl flex items-center justify-center font-mono text-slate-400 text-[10px]", children: [
            "Visual Media Render Box — ",
            selectedPhoto.id
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-foreground text-sm", children: selectedPhoto.location }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9.5px] text-slate-400 font-mono", children: [
                "Uploaded on ",
                selectedPhoto.date,
                " via WhatsApp"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[9.5px] leading-relaxed text-slate-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-slate-700 block uppercase tracking-wider text-[8.5px] mb-1", children: "AI Progress Assessment:" }),
              selectedPhoto.note
            ] }),
            selectedPhoto.issue && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-xl border border-red-200 bg-red-50/20 text-red-700 text-[10px] animate-pulse", children: [
              "⚠️ ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "AI Safety / Quality Violation:" }),
              " ",
              selectedPhoto.issue
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Milestone P07 updated with evidence photo ${selectedPhoto.id}.`), className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all", children: "Link as Progress Verification" }) })
          ] })
        ] })
      ] })
    ] })
  ] });
  const [costScenario, setCostScenario] = reactExports.useState("baseline");
  const [categories, setCategories] = reactExports.useState(initialCostCategories);
  const calculatedCosts = reactExports.useMemo(() => {
    let scalarCivil = 1;
    let scalarMep = 1;
    let overheadAdd = 0;
    let revenueDeduct = 0;
    if (costScenario === "civil") scalarCivil = 1.08;
    if (costScenario === "mep") scalarMep = 1.15;
    if (costScenario === "overhead") overheadAdd = -1e7;
    if (costScenario === "unsold") revenueDeduct = 218e5;
    const baselineRevenue = 524e6;
    const activeRevenue = baselineRevenue - revenueDeduct;
    const activeCats = categories.map((c) => {
      let projected = c.projected;
      if (c.category === "Civil / Structural") projected = Math.round(c.spent + (c.budget - c.spent) * scalarCivil);
      if (c.category === "MEP Services") projected = Math.round(c.spent + (c.budget - c.spent) * scalarMep);
      if (c.category === "Project Overheads") projected = Math.round(c.projected + overheadAdd);
      const variance = projected - c.budget;
      const status = variance > 1e6 ? "Critical Overrun" : variance > 1e5 ? "Overrun" : "Complete";
      return {
        ...c,
        projected,
        variance,
        status
      };
    });
    const totalBudget = activeCats.reduce((acc, c) => acc + c.budget, 0);
    const totalSpent = activeCats.reduce((acc, c) => acc + c.spent, 0);
    const totalProjected = activeCats.reduce((acc, c) => acc + c.projected, 0);
    const totalVariance = totalProjected - totalBudget;
    const profit = activeRevenue - totalProjected;
    const margin = (profit / activeRevenue * 100).toFixed(1);
    return {
      activeCats,
      totalBudget,
      totalSpent,
      totalProjected,
      totalVariance,
      profit,
      margin,
      activeRevenue
    };
  }, [categories, costScenario]);
  const renderCost = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Project Budget", value: `₹${(calculatedCosts.totalBudget / 1e7).toFixed(2)}Cr`, desc: "Approved baseline", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Spent to Date", value: `₹${(calculatedCosts.totalSpent / 1e7).toFixed(2)}Cr`, desc: "Accounts invoices paid", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Projected Final Cost", value: `₹${(calculatedCosts.totalProjected / 1e7).toFixed(2)}Cr`, desc: "Cost-to-complete forecast", color: "text-[#E8A838]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Projected Gross Margin", value: `${calculatedCosts.margin}%`, desc: "Original: 45.6%", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Budget Variance", value: `+₹${(calculatedCosts.totalVariance / 1e5).toFixed(1)}L`, desc: "Projected overrun", color: "text-[#D85A30]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 border border-border bg-card space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Scenario Sensitivity Analysis Modelling" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [{
        id: "baseline",
        name: "Baseline Forecast"
      }, {
        id: "civil",
        name: "Civil Overrun (+8%)"
      }, {
        id: "mep",
        name: "MEP Overrun (+15%)"
      }, {
        id: "overhead",
        name: "Overheads Normalized"
      }, {
        id: "unsold",
        name: "10 Unsold Flat Vacancies"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCostScenario(s.id), className: `h-8 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${costScenario === s.id ? "bg-ink text-cream border-ink" : "border-border text-slate-500 hover:bg-secondary"}`, children: s.name }, s.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display uppercase tracking-wider", children: "Cost-to-Complete Cost Category Forecaster" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Budget" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Spent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Projected" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Variance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: calculatedCosts.activeCats.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: `hover:bg-secondary/15 ${row.variance > 1e6 ? "bg-red-50/10 border-l-2 border-l-red-500 animate-pulse" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-bold", children: row.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono text-slate-500", children: [
              "₹",
              (row.budget / 1e7).toFixed(2),
              "Cr"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono text-slate-500", children: [
              "₹",
              (row.spent / 1e7).toFixed(2),
              "Cr"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono text-foreground font-bold", children: [
              "₹",
              (row.projected / 1e7).toFixed(2),
              "Cr"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: `px-3.5 py-3 font-mono font-extrabold ${row.variance > 0 ? "text-red-500" : "text-emerald-600"}`, children: row.variance > 0 ? `+₹${(row.variance / 1e5).toFixed(1)}L` : `-₹${(Math.abs(row.variance) / 1e5).toFixed(1)}L` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(row.status)}`, children: row.status }) })
          ] }, i)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border/40 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs uppercase text-slate-500 tracking-wider font-display", children: "Margin Sensitivity Summary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 text-xs font-semibold text-slate-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/30 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Expected Sales Revenue:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground font-bold", children: [
              "₹",
              (calculatedCosts.activeRevenue / 1e7).toFixed(2),
              "Cr"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/30 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Projected Total Construction Cost:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground font-bold", children: [
              "₹",
              (calculatedCosts.totalProjected / 1e7).toFixed(2),
              "Cr"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-border/30 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Projected Net Gross Profit:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-emerald-600 font-extrabold text-sm", children: [
              "₹",
              (calculatedCosts.profit / 1e7).toFixed(2),
              "Cr"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Gross Profit Margin %:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-mono font-extrabold text-sm ${parseFloat(calculatedCosts.margin) >= 42 ? "text-emerald-600" : "text-amber-600 animate-pulse"}`, children: [
              calculatedCosts.margin,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[9.5px] leading-relaxed text-slate-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-slate-800", children: "AI Financial Forecaster Note:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: 'Category "Project Overheads" is driving the primary variance (+₹1.80Cr). Bringing overheads back to baseline increases projected margin to 44.1%.' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert("Cost report sent to Project Director & Accounts Team."), className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all", children: "Raise Overrun Alert to Director" })
        ] })
      ] })
    ] })
  ] });
  const [possessions, setPossessions] = reactExports.useState(initialPossessions);
  const [selectedPossession, setSelectedPossession] = reactExports.useState(initialPossessions[0]);
  const clearBuyerPayment = (id) => {
    setPossessions((prev) => prev.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          payment: "Clear",
          status: p.status === "Payment Pending" && p.snagsTotal === p.snagsResolved ? "Ready" : p.status
        };
      }
      return p;
    }));
    setSelectedPossession((prev) => {
      if (prev.id === id) {
        return {
          ...prev,
          payment: "Clear",
          status: prev.status === "Payment Pending" && prev.snagsTotal === prev.snagsResolved ? "Ready" : prev.status
        };
      }
      return prev;
    });
    alert(`Accounts clearance issued for unit. Payment marked as Clear.`);
  };
  const clearSnagList = (id) => {
    setPossessions((prev) => prev.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          snagsResolved: p.snagsTotal,
          status: p.status === "Snag Pending" && p.payment === "Clear" ? "Ready" : p.status
        };
      }
      return p;
    }));
    setSelectedPossession((prev) => {
      if (prev.id === id) {
        return {
          ...prev,
          snagsResolved: prev.snagsTotal,
          status: prev.status === "Snag Pending" && prev.payment === "Clear" ? "Ready" : prev.status
        };
      }
      return prev;
    });
    alert(`Snags cleared. Flat marked as Snag-Free.`);
  };
  const renderPossession = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Units Handover", value: "240", desc: "Dec 2026 scheduling", color: "text-[#1A3C5E]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Snag Audited Units", value: "38", desc: "38 pre-possessions complete", color: "text-[#1D9E75]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Ready for Handover", value: "24", desc: "Snag-free + payment clear", color: "text-[#2E86AB]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Blocked handovers", value: "12", desc: "Payment/snag issues pending", color: "text-[#D85A30]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-50 border border-red-200 rounded-xl text-xs flex items-center gap-3 font-semibold text-[#D85A30]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 animate-pulse shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Possession Alert:" }),
        " Sunita Mehta (Unit A-404) has outstanding dues of ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "₹2.1 Lakhs" }),
        ". Automatic possession scheduling is blocked until payment clearance certificate is logged."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/35 border-b border-border flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display uppercase tracking-wider", children: "Buyer Handover Schedule" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs divide-y divide-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Unit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Buyer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Rent/Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Payment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5 font-mono", children: "Snags (R/T)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3.5 py-2.5", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 bg-background font-medium text-foreground", children: possessions.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setSelectedPossession(row), className: `hover:bg-secondary/15 cursor-pointer transition-colors ${selectedPossession.id === row.id ? "bg-secondary/20 font-bold" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3 font-mono font-bold text-slate-700", children: row.unit }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: row.buyer }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] text-slate-400 font-mono font-normal", children: [
                "Slot: ",
                row.date
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono", children: [
              "₹",
              (row.value / 1e5).toFixed(1),
              "L"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-1.5 py-0.2 rounded font-mono ${statusBadge(row.payment)}`, children: row.payment }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3.5 py-3 font-mono font-bold", children: [
              row.snagsResolved,
              " / ",
              row.snagsTotal
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3.5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(row.status)}`, children: row.status }) })
          ] }, row.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Unit Handover Card" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9.5px] font-extrabold px-2 py-0.5 rounded font-mono ${statusBadge(selectedPossession.status)}`, children: selectedPossession.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 text-xs font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-display font-bold text-foreground text-sm", children: [
              "Unit ",
              selectedPossession.unit,
              " (",
              selectedPossession.config,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-400 font-normal", children: [
              "Buyer: ",
              selectedPossession.buyer,
              " · ",
              selectedPossession.phone
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/35 rounded-xl border border-border/40 font-mono text-[9.5px] space-y-1.5 text-slate-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Agreement Value:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-bold", children: [
                "₹",
                (selectedPossession.value / 1e5).toFixed(1),
                "L"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Payment Clearance:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold ${selectedPossession.payment === "Clear" ? "text-emerald-600" : "text-red-500"}`, children: selectedPossession.payment })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Snag Inspection:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-bold ${selectedPossession.snagsTotal === selectedPossession.snagsResolved ? "text-emerald-600" : "text-amber-600"}`, children: [
                selectedPossession.snagsResolved,
                " of ",
                selectedPossession.snagsTotal,
                " resolved"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Possession Coordinator:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: selectedPossession.staff })
            ] })
          ] }),
          selectedPossession.unit === "A-403" && selectedPossession.snagsTotal > selectedPossession.snagsResolved && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-bold uppercase tracking-wider text-slate-400 block border-b border-border/40 pb-0.5", children: "Snag Checklist (1 Open item)" }),
            snagChecklist.map((sc, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 rounded bg-background border border-border/50 text-[10px] flex justify-between font-mono", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: sc.item }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: sc.status.includes("Snag") ? "text-red-500 animate-pulse font-bold" : "text-emerald-600", children: sc.status })
            ] }, idx))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 flex gap-2", children: [
            selectedPossession.payment !== "Clear" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => clearBuyerPayment(selectedPossession.id), className: "flex-1 h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-wider", children: "Clear Accounts Dues" }),
            selectedPossession.snagsTotal > selectedPossession.snagsResolved && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => clearSnagList(selectedPossession.id), className: "flex-1 h-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider", children: "Clear Snags" }),
            selectedPossession.payment === "Clear" && selectedPossession.snagsTotal === selectedPossession.snagsResolved && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => alert(`Possession handover pack generated for unit ${selectedPossession.unit}. Welcome letter dispatched.`), className: "w-full h-8 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold uppercase tracking-widest transition-all", children: "Generate Handover Pack" })
          ] })
        ] })
      ] })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: dynamicTitle, subtitle: headerInfo.subtitle, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "transition-all duration-300", children: [
    activeTab === "menu" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 animate-in fade-in duration-300", children: submodulesList.map((mod) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { onClick: () => setActiveTab(mod.id), className: "p-5 border border-border/70 hover:border-ink hover:shadow-[0_4px_20px_rgba(11,31,51,0.04)] transition-all duration-300 cursor-pointer flex flex-col justify-between group h-44 bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border font-mono text-emerald-700 bg-emerald-50 border-emerald-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
          " ",
          mod.status
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground group-hover:text-ink transition-colors mt-1 font-display", children: mod.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2 font-medium", children: mod.desc })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 mt-4 pt-3 flex items-center justify-between text-[11px] font-bold text-muted-foreground group-hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-foreground", children: mod.stats }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5 text-ink group-hover:underline font-mono", children: [
          "Access ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })
        ] })
      ] })
    ] }, mod.id)) }),
    activeTab === "overview" && renderOverview(),
    activeTab === "timeline" && renderTimeline(),
    activeTab === "subcontractor" && renderSubcontractor(),
    activeTab === "procurement" && renderProcurement(),
    activeTab === "approvals" && renderApprovals(),
    activeTab === "sitelog" && renderSitePhotos(),
    activeTab === "cost" && renderCost(),
    activeTab === "possession" && renderPossession()
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-2xl font-bold tracking-tight font-mono ${color}`, children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold text-muted-foreground", children: desc })
    ] })
  ] });
}
export {
  ProjectManager as component
};
