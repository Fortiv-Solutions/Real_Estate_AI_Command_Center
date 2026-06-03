import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useRouterState, u as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { _ as _e } from "../_libs/cmdk.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root, P as Portal$1, a as Content, C as Close, O as Overlay, T as Title, D as Description } from "../_libs/radix-ui__react-dialog.mjs";
import { a as Provider, R as Root3, T as Trigger, P as Portal, C as Content2 } from "../_libs/radix-ui__react-tooltip.mjs";
import { x as LayoutDashboard, a7 as UsersRound, G as GitBranch, f as Building2, z as MessagesSquare, H as Hammer, d as Briefcase, a4 as UserCheck, a8 as Wallet, a5 as UserCog, j as ChartColumn, Y as Sparkles, U as Settings, n as ChevronRight, m as ChevronLeft, S as Search, N as Plus, B as Bell, W as ShieldCheck, a9 as X } from "../_libs/lucide-react.mjs";
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: `hidden lg:flex shrink-0 flex-col border-r border-border/40 bg-sidebar text-sidebar-foreground h-screen sticky top-0 transition-all duration-300 no-scrollbar hover-scrollbar shadow-sm z-30 ${isCollapsed ? "w-[68px]" : "w-[240px]"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `transition-all duration-300 ${isCollapsed ? "p-4 flex flex-col gap-3 items-center" : "pt-5 px-5 pb-3 flex flex-col gap-3"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full flex items-center justify-center transition-all duration-300 ${isCollapsed ? "h-11 w-11 p-1.5 bg-primary/10 rounded-xl border border-primary/20 shadow-sm" : "bg-primary/5 rounded-2xl p-4 border border-primary/10 shadow-sm"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/logo.webp",
            alt: "Fortiv Solutions",
            className: `object-contain transition-all duration-300 ${isCollapsed ? "h-8 w-8" : "w-full h-auto max-h-10"}`
          }
        ) }),
        !isCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-primary/80 font-bold tracking-[0.2em] uppercase font-display text-center animate-fade-in mt-1", children: "Command Center" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "px-2 py-3 flex-1 overflow-y-auto space-y-5 no-scrollbar hover-scrollbar", children: navGroups.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
        isCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border/40 my-4 mx-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/70 px-4 mb-2.5 font-display", children: group.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5", children: group.items.map((item) => {
          const active = pathname === item.to || item.to !== "/" && pathname.startsWith(item.to);
          const Icon = item.icon;
          const linkElement = /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: item.to,
              className: `group relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-300 border border-transparent ${active ? "bg-primary text-primary-foreground shadow-sm hover-lift" : "text-muted-foreground interactive-element"} ${isCollapsed ? "justify-center px-0 w-11 h-11 mx-auto" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `transition-all duration-300 ${isCollapsed ? "h-[20px] w-[20px]" : "h-[18px] w-[18px]"} ${active ? "opacity-100" : "opacity-70 group-hover:scale-110 group-hover:opacity-100"}` }),
                !isCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: item.label }),
                !isCollapsed && "badge" in item && item.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-[10px] px-1.5 py-0.5 rounded-md font-bold transition-all duration-300 ${active ? "bg-primary-foreground/20 text-primary-foreground" : "bg-secondary text-secondary-foreground"}`,
                    children: item.badge
                  }
                ),
                isCollapsed && "badge" in item && item.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1 right-1 w-1.5 h-1.5 bg-primary rounded-full shadow-sm" })
              ]
            }
          );
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: isCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { delayDuration: 50, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: linkElement }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "right", className: "bg-popover border border-border text-popover-foreground px-3 py-2 rounded-xl text-[13px] font-medium shadow-xl backdrop-blur-md z-50", children: item.label })
          ] }) : linkElement }, item.to);
        }) })
      ] }, group.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-border mt-auto space-y-2 bg-sidebar", children: [
        isCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { delayDuration: 50, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/settings",
              "aria-label": "Settings",
              className: "group flex items-center justify-center w-11 h-11 mx-auto rounded-xl border border-transparent text-muted-foreground interactive-element",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-90 h-[20px] w-[20px]" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "right", className: "bg-popover border border-border text-popover-foreground px-3 py-2 rounded-xl text-[13px] font-medium shadow-xl backdrop-blur-md z-50", children: "Settings" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/settings",
            "aria-label": "Settings",
            className: `group flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-300 border border-transparent ${pathname.startsWith("/settings") ? "bg-primary text-primary-foreground shadow-sm hover-lift" : "text-muted-foreground interactive-element"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-[18px] w-[18px] opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-90" }),
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
              className: "group flex items-center justify-center w-11 h-11 mx-auto rounded-xl border border-transparent text-muted-foreground interactive-element",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "opacity-70 transition-all duration-300 group-hover:scale-110 h-[20px] w-[20px]" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "right", className: "bg-popover border border-border text-popover-foreground px-3 py-2 rounded-xl text-[13px] font-medium shadow-xl backdrop-blur-md z-50", children: "Expand sidebar" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: toggleCollapse,
            "aria-label": "Collapse sidebar",
            className: "w-full group flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-medium text-muted-foreground interactive-element border border-transparent",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-[18px] w-[18px] opacity-70 transition-all duration-300 group-hover:-translate-x-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-left", children: "Collapse" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-20 glass-panel", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 h-16 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[14px] text-muted-foreground font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground tracking-tight", children: "Fortiv Solutions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Surat Branch" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onClick: () => setIsSearchOpen(true),
              className: "relative hidden sm:block w-48 md:w-64 cursor-pointer group animate-fade-in",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-primary transition-colors" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    readOnly: true,
                    placeholder: "Search Anything... (⌘K)",
                    className: "w-full h-10 pl-10 pr-12 rounded-xl bg-background border border-border shadow-inner text-[13px] font-medium placeholder:text-muted-foreground transition-all cursor-pointer text-foreground hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground font-bold bg-secondary/80 border border-border rounded-md px-2 py-0.5 pointer-events-none uppercase tracking-wider", children: "⌘K" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { "aria-label": "Create new", className: "h-10 px-4 rounded-xl bg-primary text-primary-foreground text-[13px] font-bold flex items-center gap-2 shadow-sm hover-lift active:scale-95", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "New" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              "aria-label": "Notifications",
              className: "touch-target h-10 w-10 min-w-0 min-h-0 flex items-center justify-center rounded-xl bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 relative hover-lift active:scale-95",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-[10px] right-[10px] h-2 w-2 rounded-full bg-destructive border-[1.5px] border-background" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-label": "User profile",
              role: "button",
              tabIndex: 0,
              className: "h-10 w-10 ml-2 rounded-xl bg-gradient-to-br from-primary to-primary/80 border border-primary/20 shadow-sm grid place-items-center text-[13px] font-bold text-primary-foreground cursor-pointer hover:shadow-md transition-all hover-lift active:scale-95",
              children: "RP"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 flex flex-col relative overflow-hidden", children: [
        (title || subtitle || actions) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5 border-b border-border/40 bg-background/50 flex flex-col sm:flex-row sm:items-end justify-between gap-4 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold tracking-tight text-foreground", children: title }),
            subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium text-muted-foreground mt-1 max-w-2xl", children: subtitle })
          ] }),
          actions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-3", children: actions })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-6 max-w-[1920px] w-full mx-auto relative z-10", children })
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
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-slate-500 font-medium tracking-wide truncate", children: [
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
      className: `premium-card ${className}`,
      children
    }
  );
}
function Pill({ children, tone = "neutral" }) {
  const map = {
    hot: "bg-red-50 text-red-600 border-red-200 dark:bg-red-950/30 dark:border-red-900/50",
    warm: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:border-amber-900/50 dark:text-amber-500",
    cold: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:border-blue-900/50 dark:text-blue-400",
    neutral: "bg-secondary text-secondary-foreground border-border",
    accent: "bg-primary/10 text-primary border-primary/20"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-md border ${map[tone]}`,
      children
    }
  );
}
export {
  AppShell as A,
  Card as C,
  Pill as P
};
