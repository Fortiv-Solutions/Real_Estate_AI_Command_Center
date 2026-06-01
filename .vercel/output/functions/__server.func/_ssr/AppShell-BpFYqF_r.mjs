import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useRouterState, u as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { _ as _e } from "../_libs/cmdk.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root, P as Portal$1, a as Content, C as Close, O as Overlay, T as Title, D as Description } from "../_libs/radix-ui__react-dialog.mjs";
import { a as Provider, R as Root3, T as Trigger, P as Portal, C as Content2 } from "../_libs/radix-ui__react-tooltip.mjs";
import { z as LayoutDashboard, a8 as UsersRound, G as GitBranch, g as Building2, K as MessagesSquare, H as Hammer, e as Briefcase, a5 as UserCheck, a9 as Wallet, X as ShieldCheck, a6 as UserCog, k as ChartColumn, Z as Sparkles, V as Settings, o as ChevronRight, n as ChevronLeft, T as Search, Q as Plus, B as Bell, aa as X } from "../_libs/lucide-react.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = Root;
const DialogPortal = Portal$1;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const Command = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = _e.displayName;
const CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "overflow-hidden p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children }) }) });
};
const CommandInput = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    _e.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = _e.Input.displayName;
const CommandList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = _e.List.displayName;
const CommandEmpty = reactExports.forwardRef((props, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(_e.Empty, { ref, className: "py-6 text-center text-sm", ...props }));
CommandEmpty.displayName = _e.Empty.displayName;
const CommandGroup = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = _e.Group.displayName;
const CommandSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = _e.Separator.displayName;
const CommandItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  _e.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    ),
    ...props
  }
));
CommandItem.displayName = _e.Item.displayName;
const TooltipProvider = Provider;
const Tooltip = Root3;
const TooltipTrigger = Trigger;
const TooltipContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = Content2.displayName;
const navGroups = [
  {
    label: "Core",
    items: [
      { to: "/", label: "Dashboard", icon: LayoutDashboard },
      { to: "/leads", label: "Leads", icon: UsersRound, badge: "24" },
      { to: "/pipeline", label: "Pipeline", icon: GitBranch },
      { to: "/properties", label: "Properties", icon: Building2 },
      { to: "/conversations", label: "Conversations", icon: MessagesSquare, badge: "8" }
    ]
  },
  {
    label: "Management",
    items: [
      { to: "/projects", label: "Projects", icon: Hammer },
      { to: "/tenants", label: "Tenants", icon: Briefcase },
      { to: "/buyers", label: "Buyer Portal", icon: UserCheck },
      { to: "/finance", label: "Finance", icon: Wallet },
      { to: "/compliance", label: "Compliance", icon: ShieldCheck },
      { to: "/hr", label: "HR Pipeline", icon: UserCog }
    ]
  },
  {
    label: "Intelligence",
    items: [
      { to: "/analytics", label: "Analytics", icon: ChartColumn },
      { to: "/ai-brain", label: "AI Brain", icon: Sparkles }
    ]
  }
];
const searchableSubModules = [
  { parent: "AI Brain", parentTo: "/ai-brain", label: "AI Command Dashboard", tab: "overview" },
  { parent: "AI Brain", parentTo: "/ai-brain", label: "Unified Customer Intelligence Graph", tab: "graph" },
  { parent: "AI Brain", parentTo: "/ai-brain", label: "Cross-Module AI Insights Engine", tab: "insights" },
  { parent: "AI Brain", parentTo: "/ai-brain", label: "Predictive Deal Risk Scorer", tab: "risk" },
  { parent: "AI Brain", parentTo: "/ai-brain", label: "Channel Partner Portal & Tracker", tab: "cp-portal" },
  { parent: "AI Brain", parentTo: "/ai-brain", label: "Role-Based Access Control", tab: "rbac" },
  { parent: "AI Brain", parentTo: "/ai-brain", label: "DPDP Act Compliance Layer", tab: "dpdp" },
  { parent: "AI Brain", parentTo: "/ai-brain", label: "System Health & Uptime Dashboard", tab: "health" },
  { parent: "Analytics", parentTo: "/analytics", label: "Dashboard Overview", tab: "overview" },
  { parent: "Analytics", parentTo: "/analytics", label: "Daily Performance Report", tab: "daily-report" },
  { parent: "Analytics", parentTo: "/analytics", label: "Sales Forecast Dashboard", tab: "forecast" },
  { parent: "Analytics", parentTo: "/analytics", label: "Inventory Velocity Tracker", tab: "inventory" },
  { parent: "Analytics", parentTo: "/analytics", label: "Investor & LP Report Generator", tab: "investor-report" },
  { parent: "Analytics", parentTo: "/analytics", label: "Marketing ROI Dashboard", tab: "marketing-roi" },
  { parent: "Analytics", parentTo: "/analytics", label: "Executive Weekly Briefing", tab: "executive-brief" },
  { parent: "Buyer Portal", parentTo: "/buyers", label: "Dashboard Overview", tab: "overview" },
  { parent: "Buyer Portal", parentTo: "/buyers", label: "Buyer Self-Service Portal", tab: "self-service" },
  { parent: "Buyer Portal", parentTo: "/buyers", label: "Payment Schedule & Receipt Manager", tab: "payments" },
  { parent: "Buyer Portal", parentTo: "/buyers", label: "Construction Progress Feed", tab: "progress" },
  { parent: "Buyer Portal", parentTo: "/buyers", label: "Snag / Punch List Agent", tab: "snag" },
  { parent: "Buyer Portal", parentTo: "/buyers", label: "Resale & Rental Assistance Agent", tab: "resale" },
  { parent: "Buyer Portal", parentTo: "/buyers", label: "Society Onboarding Agent", tab: "society" },
  { parent: "Buyer Portal", parentTo: "/buyers", label: "Post-Possession NPS & Loyalty Bot", tab: "nps" },
  { parent: "Compliance", parentTo: "/compliance", label: "Dashboard Overview", tab: "overview" },
  { parent: "Compliance", parentTo: "/compliance", label: "Agreement Draft Generator", tab: "agreement-gen" },
  { parent: "Compliance", parentTo: "/compliance", label: "OCR Document Extractor", tab: "ocr-extractor" },
  { parent: "Compliance", parentTo: "/compliance", label: "RERA Compliance Monitor", tab: "rera-monitor" },
  { parent: "Compliance", parentTo: "/compliance", label: "Stamp Duty & Cost Calculator", tab: "stamp-duty" },
  { parent: "Compliance", parentTo: "/compliance", label: "E-Signature Workflow", tab: "esign" },
  { parent: "Compliance", parentTo: "/compliance", label: "KYC Verification Dashboard", tab: "kyc-verify" },
  { parent: "Finance", parentTo: "/finance", label: "Dashboard Overview", tab: "overview" },
  { parent: "Finance", parentTo: "/finance", label: "Collections & Receivables Dashboard", tab: "collections" },
  { parent: "Finance", parentTo: "/finance", label: "Demand Note Automation", tab: "demand-notes" },
  { parent: "Finance", parentTo: "/finance", label: "Broker Commission Tracker", tab: "commission" },
  { parent: "Finance", parentTo: "/finance", label: "Project P&L Monitor", tab: "pl-monitor" },
  { parent: "Finance", parentTo: "/finance", label: "Cash Flow Forecaster", tab: "forecaster" },
  { parent: "Finance", parentTo: "/finance", label: "Tally / Accounting Sync Agent", tab: "tally-sync" },
  { parent: "Finance", parentTo: "/finance", label: "Financial Report Generator", tab: "reports" },
  { parent: "HR Pipeline", parentTo: "/hr", label: "HR Dashboard Overview", tab: "overview" },
  { parent: "HR Pipeline", parentTo: "/hr", label: "Resume Screening", tab: "resume-screening" },
  { parent: "HR Pipeline", parentTo: "/hr", label: "Interview Scheduler", tab: "interview-scheduler" },
  { parent: "HR Pipeline", parentTo: "/hr", label: "Onboarding Agent", tab: "onboarding" },
  { parent: "HR Pipeline", parentTo: "/hr", label: "Attendance & Payroll", tab: "payroll" },
  { parent: "HR Pipeline", parentTo: "/hr", label: "Performance Tracking", tab: "performance" },
  { parent: "HR Pipeline", parentTo: "/hr", label: "Talent Sourcing", tab: "talent-sourcing" },
  { parent: "HR Pipeline", parentTo: "/hr", label: "HR Policy Chatbot", tab: "hr-chatbot" },
  { parent: "Pipeline", parentTo: "/pipeline", label: "Dashboard Overview", tab: "overview" },
  { parent: "Pipeline", parentTo: "/pipeline", label: "CRM Sync & Deduplication", tab: "crm-sync" },
  { parent: "Pipeline", parentTo: "/pipeline", label: "Site Visit Scheduler", tab: "scheduler" },
  { parent: "Pipeline", parentTo: "/pipeline", label: "Post-Visit Follow-Up", tab: "follow-up" },
  { parent: "Pipeline", parentTo: "/pipeline", label: "Nurture Drip Engine", tab: "drip" },
  { parent: "Pipeline", parentTo: "/pipeline", label: "Deal Pipeline Tracker", tab: "pipeline" },
  { parent: "Pipeline", parentTo: "/pipeline", label: "AI Listing Writer", tab: "listing-writer" },
  { parent: "Projects", parentTo: "/projects", label: "Dashboard Overview", tab: "overview" },
  { parent: "Projects", parentTo: "/projects", label: "Project Milestone Tracker", tab: "timeline" },
  { parent: "Projects", parentTo: "/projects", label: "Subcontractor Management Agent", tab: "subcontractor" },
  { parent: "Projects", parentTo: "/projects", label: "Material Procurement Tracker", tab: "procurement" },
  { parent: "Projects", parentTo: "/projects", label: "Statutory Approvals Monitor", tab: "approvals" },
  { parent: "Projects", parentTo: "/projects", label: "Construction Photo Site Log", tab: "sitelog" },
  { parent: "Projects", parentTo: "/projects", label: "Cost-to-Complete Forecaster", tab: "cost" },
  { parent: "Projects", parentTo: "/projects", label: "Possession Readiness Dashboard", tab: "possession" },
  { parent: "Properties", parentTo: "/properties", label: "Dashboard Overview", tab: "overview" },
  { parent: "Properties", parentTo: "/properties", label: "Automated Valuation Model", tab: "avm" },
  { parent: "Properties", parentTo: "/properties", label: "Comparative Market Analysis", tab: "cma" },
  { parent: "Properties", parentTo: "/properties", label: "Property Matching Engine", tab: "matching" },
  { parent: "Properties", parentTo: "/properties", label: "Price Alert Bot", tab: "price-alert" },
  { parent: "Properties", parentTo: "/properties", label: "Market Intelligence Dashboard", tab: "market-intel" },
  { parent: "Properties", parentTo: "/properties", label: "Competitor Price Tracker", tab: "competitor-tracker" },
  { parent: "Tenants", parentTo: "/tenants", label: "Dashboard Overview", tab: "overview" },
  { parent: "Tenants", parentTo: "/tenants", label: "Tenant Screening Pipeline", tab: "screening" },
  { parent: "Tenants", parentTo: "/tenants", label: "Maintenance Request Router", tab: "maintenance" },
  { parent: "Tenants", parentTo: "/tenants", label: "Rent Collection Agent", tab: "rent" },
  { parent: "Tenants", parentTo: "/tenants", label: "Home Loan Copilot", tab: "loan" },
  { parent: "Tenants", parentTo: "/tenants", label: "Tenant NPS & Feedback Bot", tab: "nps" },
  { parent: "Tenants", parentTo: "/tenants", label: "Lease Renewal Agent", tab: "renewal" },
  { parent: "Conversations", parentTo: "/conversations", label: "Engagement Overview", tab: "overview" },
  { parent: "Conversations", parentTo: "/conversations", label: "WhatsApp AI Chatbot", tab: "whatsapp" },
  { parent: "Conversations", parentTo: "/conversations", label: "Missed Call Auto-Responder", tab: "missed-call" },
  { parent: "Conversations", parentTo: "/conversations", label: "Website AI Chat Widget", tab: "website-widget" },
  { parent: "Conversations", parentTo: "/conversations", label: "Telegram Agent for Field Staff", tab: "telegram" },
  { parent: "Conversations", parentTo: "/conversations", label: "Voice IVR Bot", tab: "voice-ivr" },
  { parent: "Conversations", parentTo: "/conversations", label: "Email AI Responder", tab: "email" },
  { parent: "Leads", parentTo: "/leads", label: "Lead Center Overview", tab: "overview" },
  { parent: "Leads", parentTo: "/leads", label: "FSBO & Owner Listing Hunter", tab: "1.1" },
  { parent: "Leads", parentTo: "/leads", label: "Google Maps Builder & Scraper", tab: "1.2" },
  { parent: "Leads", parentTo: "/leads", label: "Facebook & Google Ads Lead Sync", tab: "1.3" },
  { parent: "Leads", parentTo: "/leads", label: "Portal Lead Aggregator", tab: "1.4" },
  { parent: "Leads", parentTo: "/leads", label: "Lead Enrichment Agent", tab: "1.5" },
  { parent: "Leads", parentTo: "/leads", label: "AI Lead Scoring Engine", tab: "1.6" }
];
const getParentIcon = (parentTo) => {
  const map = {
    "/": LayoutDashboard,
    "/leads": UsersRound,
    "/pipeline": GitBranch,
    "/properties": Building2,
    "/conversations": MessagesSquare,
    "/projects": Hammer,
    "/tenants": Briefcase,
    "/buyers": UserCheck,
    "/finance": Wallet,
    "/compliance": ShieldCheck,
    "/hr": UserCog,
    "/analytics": ChartColumn,
    "/ai-brain": Sparkles
  };
  return map[parentTo] || Search;
};
function AppShell({
  children,
  title,
  subtitle,
  actions
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = reactExports.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("sidebar-collapsed") === "true";
    }
    return false;
  });
  const toggleCollapse = () => {
    setIsCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem("sidebar-collapsed", String(next));
      return next;
    });
  };
  const [isSearchOpen, setIsSearchOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  const runCommand = (action) => {
    setIsSearchOpen(false);
    action();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex bg-background font-sans text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: `hidden lg:flex shrink-0 flex-col border-r border-[#1e293b] bg-[#030712] text-white h-screen sticky top-0 transition-all duration-300 no-scrollbar hover-scrollbar ${isCollapsed ? "w-[68px]" : "w-[220px]"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `transition-all duration-300 ${isCollapsed ? "p-4 flex flex-col gap-3 items-center" : "pt-4 px-4 pb-1 flex flex-col gap-2"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full flex items-center justify-center transition-all duration-300 ${isCollapsed ? "h-11 w-11 p-1 bg-slate-900/40 rounded-lg border border-white/5 shadow-inner" : "bg-slate-900/30 rounded-xl p-3 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/logo.webp",
            alt: "Fortiv Solutions",
            className: `object-contain transition-all duration-300 ${isCollapsed ? "h-8 w-8" : "w-full h-auto max-h-10"}`
          }
        ) }),
        !isCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-[#89C4F8] font-bold tracking-widest uppercase font-display text-center opacity-80 animate-fade-in", children: "Real Estate AI Command Center" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "px-2 py-3 flex-1 overflow-y-auto space-y-5 no-scrollbar hover-scrollbar", children: navGroups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        isCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-slate-800/60 my-4 mx-2" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500/80 px-3 mb-2 font-display", children: group.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: group.items.map((item) => {
          const active = pathname === item.to || item.to !== "/" && pathname.startsWith(item.to);
          const Icon = item.icon;
          const linkElement = /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: item.to,
              className: `group relative flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-300 border ${active ? "bg-[#0E86E9]/10 text-[#0E86E9] border-[#0E86E9]/20 shadow-[inset_0_1px_0_rgba(14,134,233,0.05),0_2px_8px_-2px_rgba(14,134,233,0.15)]" : "text-slate-400 border-transparent hover:bg-slate-800/40 hover:text-white"} ${isCollapsed ? "justify-center px-0 w-10 h-10 mx-auto" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `transition-all duration-300 ${isCollapsed ? "h-[22px] w-[22px] group-hover:scale-110" : "h-3.5 w-3.5 group-hover:translate-x-0.5"} ${active ? "opacity-100 scale-110 glow-pulse rounded-full" : "opacity-70 group-hover:opacity-100"}` }),
                !isCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: item.label }),
                !isCollapsed && "badge" in item && item.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-[9px] px-1.5 py-0.5 rounded-md font-bold transition-all duration-300 ${active ? "bg-[#0E86E9] text-white" : "bg-slate-800 text-slate-300"} ${!active ? "animate-pulse" : ""}`,
                    children: item.badge
                  }
                ),
                isCollapsed && "badge" in item && item.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1 right-1 w-1.5 h-1.5 bg-[#0E86E9] rounded-full animate-pulse shadow-[0_0_6px_#0E86E9]" })
              ]
            }
          );
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: isCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { delayDuration: 50, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: linkElement }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "right", className: "bg-[#030712] border border-[#1e293b] text-white px-2.5 py-1.5 rounded-lg text-xs font-semibold shadow-xl backdrop-blur-md z-50", children: item.label })
          ] }) : linkElement }, item.to);
        }) })
      ] }, group.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-t border-[#1e293b] mt-auto space-y-1", children: [
        isCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { delayDuration: 50, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/settings",
              "aria-label": "Settings",
              className: "group flex items-center justify-center w-10 h-10 mx-auto rounded-lg border border-transparent text-slate-400 hover:bg-slate-800/40 hover:text-white transition-all duration-300",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-45 h-[22px] w-[22px] group-hover:scale-110" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "right", className: "bg-[#030712] border border-[#1e293b] text-white px-2.5 py-1.5 rounded-lg text-xs font-semibold shadow-xl backdrop-blur-md z-50", children: "Settings" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/settings",
            "aria-label": "Settings",
            className: `group flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-300 border border-transparent ${pathname.startsWith("/settings") ? "bg-[#0E86E9]/10 text-[#0E86E9] border-[#0E86E9]/20" : "text-slate-400 hover:bg-slate-800/40 hover:text-white"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover:opacity-100 group-hover:rotate-45" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: "Settings" })
            ]
          }
        ),
        isCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { delayDuration: 50, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: toggleCollapse,
              "aria-label": "Expand sidebar",
              className: "group flex items-center justify-center w-10 h-10 mx-auto rounded-lg border border-transparent text-slate-400 hover:bg-slate-800/40 hover:text-white transition-all duration-300",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "opacity-70 transition-all duration-300 group-hover:scale-110 h-[22px] w-[22px]" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "right", className: "bg-[#030712] border border-[#1e293b] text-white px-2.5 py-1.5 rounded-lg text-xs font-semibold shadow-xl backdrop-blur-md z-50", children: "Expand sidebar" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: toggleCollapse,
            "aria-label": "Collapse sidebar",
            className: "w-full group flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:bg-slate-800/40 hover:text-white transition-all duration-300 border border-transparent",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover:scale-110" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-left", children: "Collapse" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-20 border-b border-border/40 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 h-12 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[13px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground tracking-tight", children: "Fortiv Solutions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Surat Branch" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onClick: () => setIsSearchOpen(true),
              className: "relative hidden sm:block w-40 md:w-56 cursor-pointer group animate-fade-in",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    readOnly: true,
                    placeholder: "Search Anything... (⌘K)",
                    className: "w-full h-8 pl-8 pr-12 rounded-lg bg-slate-200/40 dark:bg-slate-950/40 border border-slate-200/80 dark:border-slate-800 text-xs placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all cursor-pointer text-foreground hover:bg-slate-200/60 dark:hover:bg-slate-900/40 hover:border-slate-300/80 dark:hover:border-slate-700/80 shadow-sm"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "absolute right-2 top-1/2 -translate-y-1/2 text-[9px] text-slate-400 dark:text-slate-500 font-medium bg-card border border-border rounded px-1.5 py-0.5 shadow-sm pointer-events-none", children: "⌘K" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { "aria-label": "Create new", className: "h-8 px-3 rounded-md bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all hover:bg-primary/90 active:scale-95", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "New" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              "aria-label": "Notifications",
              className: "touch-target h-8 w-8 min-w-0 min-h-0 flex items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors relative active:scale-95",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-[6px] right-[6px] h-1.5 w-1.5 rounded-full bg-destructive border border-background animate-pulse" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-label": "User profile",
              role: "button",
              tabIndex: 0,
              className: "h-7 w-7 ml-1 rounded-full bg-secondary border border-border grid place-items-center text-[11px] font-semibold text-secondary-foreground cursor-pointer hover:ring-2 hover:ring-ring hover:ring-offset-2 transition-all active:scale-95",
              children: "RP"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 flex flex-col relative overflow-hidden", children: [
        (title || subtitle || actions) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-border/50 bg-background flex flex-col sm:flex-row sm:items-end justify-between gap-3 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-semibold tracking-tight text-foreground", children: title }),
            subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 max-w-2xl", children: subtitle })
          ] }),
          actions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2", children: actions })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[20%] left-[20%] w-[380px] h-[380px] rounded-full bg-[#0E86E9]/6 dark:bg-[#0E86E9]/9 blur-[100px] pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[20%] right-[20%] w-[420px] h-[420px] rounded-full bg-[#89C4F8]/5 dark:bg-[#89C4F8]/8 blur-[110px] pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-5 max-w-[1920px] w-full mx-auto relative z-10", children })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "lg:hidden fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur pb-safe" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandDialog, { open: isSearchOpen, onOpenChange: setIsSearchOpen, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CommandInput, { placeholder: "Type a command or search pages..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CommandEmpty, { children: "No results found." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandGroup, { heading: "Navigation", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => runCommand(() => navigate({ to: "/" })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Dashboard" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => runCommand(() => navigate({ to: "/leads" })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UsersRound, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Leads" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => runCommand(() => navigate({ to: "/pipeline" })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pipeline" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => runCommand(() => navigate({ to: "/properties" })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Properties" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => runCommand(() => navigate({ to: "/conversations" })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessagesSquare, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Conversations" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => runCommand(() => navigate({ to: "/projects" })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Hammer, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Projects" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => runCommand(() => navigate({ to: "/tenants" })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tenants" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => runCommand(() => navigate({ to: "/buyers" })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Buyer Portal" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => runCommand(() => navigate({ to: "/finance" })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Finance" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => runCommand(() => navigate({ to: "/compliance" })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Compliance" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => runCommand(() => navigate({ to: "/hr" })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UserCog, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "HR Pipeline" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => runCommand(() => navigate({ to: "/analytics" })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Analytics" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => runCommand(() => navigate({ to: "/ai-brain" })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI Brain" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CommandItem, { onSelect: () => runCommand(() => navigate({ to: "/settings" })), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "mr-2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Settings" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CommandGroup, { heading: "Sub-modules", children: searchableSubModules.map((sub) => {
          const Icon = getParentIcon(sub.parentTo);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            CommandItem,
            {
              onSelect: () => runCommand(
                () => navigate({
                  to: sub.parentTo,
                  search: { tab: sub.tab }
                })
              ),
              className: "flex flex-col items-start py-2.5 px-3 cursor-pointer",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "mr-2.5 h-4 w-4 text-muted-foreground shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-xs text-foreground truncate", children: sub.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-slate-500 font-medium tracking-wide truncate", children: [
                    sub.parent,
                    " • ",
                    sub.label
                  ] })
                ] })
              ] })
            },
            `${sub.parentTo}-${sub.tab}`
          );
        }) })
      ] })
    ] })
  ] }) });
}
function Card({ className = "", children, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      onClick,
      className: `glass text-card-foreground rounded-[14px] ${className}`,
      children
    }
  );
}
function Stat({
  label,
  value,
  delta,
  tone = "neutral"
}) {
  const toneCls = tone === "up" ? "text-emerald-700 bg-emerald-50 border-emerald-200" : tone === "down" ? "text-red-700 bg-red-50 border-red-200" : "text-slate-600 bg-slate-50 border-slate-200";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold text-muted-foreground uppercase tracking-widest font-display", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 flex items-baseline gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold tracking-tight", children: value }),
      delta && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold px-1.5 py-0.5 rounded border ${toneCls}`, children: delta })
    ] })
  ] });
}
function Pill({ children, tone = "neutral" }) {
  const map = {
    hot: "bg-red-50 text-red-700 border-red-200",
    warm: "bg-amber-50 text-amber-700 border-amber-200",
    cold: "bg-blue-50 text-blue-700 border-blue-200",
    neutral: "bg-slate-100 text-slate-700 border-slate-200",
    accent: "bg-primary text-primary-foreground border-transparent"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-md border ${map[tone]}`,
      children
    }
  );
}
export {
  AppShell as A,
  Card as C,
  Pill as P,
  Stat as S
};
