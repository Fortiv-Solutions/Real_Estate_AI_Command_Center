import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Users2,
  GitBranch,
  Building2,
  MessagesSquare,
  BarChart3,
  ShieldCheck,
  Briefcase,
  Hammer,
  Wallet,
  Sparkles,
  Settings,
  Search,
  Bell,
  Plus,
  UserCog,
  UserCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { type ReactNode, useState, useEffect } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "./ui/command";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./ui/tooltip";

const navGroups = [
  {
    label: "Core",
    items: [
      { to: "/", label: "Dashboard", icon: LayoutDashboard },
      { to: "/leads", label: "Leads", icon: Users2, badge: "24" },
      { to: "/pipeline", label: "Pipeline", icon: GitBranch },
      { to: "/properties", label: "Properties", icon: Building2 },
      { to: "/conversations", label: "Conversations", icon: MessagesSquare, badge: "8" },
    ]
  },
  {
    label: "Management",
    items: [
      { to: "/projects", label: "Projects", icon: Hammer },
      { to: "/tenants", label: "Tenants", icon: Briefcase },
      { to: "/buyers", label: "Buyer Portal", icon: UserCheck },
      { to: "/finance", label: "Finance", icon: Wallet },
      { to: "/hr", label: "HR Pipeline", icon: UserCog },
    ]
  },
  {
    label: "Intelligence",
    items: [
      { to: "/analytics", label: "Analytics", icon: BarChart3 },
      { to: "/ai-brain", label: "AI Brain", icon: Sparkles },
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
  { parent: "Leads", parentTo: "/leads", label: "AI Lead Scoring Engine", tab: "1.6" },
];


const getParentIcon = (parentTo: string) => {
  const map: Record<string, any> = {
    "/": LayoutDashboard,
    "/leads": Users2,
    "/pipeline": GitBranch,
    "/properties": Building2,
    "/conversations": MessagesSquare,
    "/projects": Hammer,
    "/tenants": Briefcase,
    "/buyers": UserCheck,
    "/finance": Wallet,
    "/compliance": ShieldCheck,
    "/hr": UserCog,
    "/analytics": BarChart3,
    "/ai-brain": Sparkles,
  };
  return map[parentTo] || Search;
};

export function AppShell({
  children,
  title,
  subtitle,
  actions,
}: {
  children: ReactNode;
  title: ReactNode;
  subtitle?: string;
  actions?: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(() => {
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (action: () => void) => {
    setIsSearchOpen(false);
    action();
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen flex bg-background font-sans text-foreground">
      {/* Sidebar */}
      <aside className={`hidden lg:flex shrink-0 flex-col border-r border-border/40 bg-sidebar text-sidebar-foreground h-screen sticky top-0 transition-all duration-300 no-scrollbar hover-scrollbar shadow-sm z-30 ${isCollapsed ? "w-[68px]" : "w-[240px]"}`}>
        <div className={`transition-all duration-300 ${
          isCollapsed 
            ? "p-4 flex flex-col gap-3 items-center" 
            : "pt-5 px-5 pb-3 flex flex-col gap-3"
        }`}>
          <div className={`w-full flex items-center justify-center transition-all duration-300 ${
            isCollapsed 
              ? "h-11 w-11 p-1.5 bg-primary/10 rounded-xl border border-primary/20 shadow-sm" 
              : "bg-primary/5 rounded-2xl p-4 border border-primary/10 shadow-sm"
          }`}>
            <img 
              src="/logo.webp" 
              alt="Fortiv Solutions" 
              className={`object-contain transition-all duration-300 ${isCollapsed ? "h-8 w-8" : "w-full h-auto max-h-10"}`} 
            />
          </div>
          {!isCollapsed && (
            <div className="text-[10px] text-primary/80 font-bold tracking-[0.2em] uppercase font-display text-center animate-fade-in mt-1">
              Command Center
            </div>
          )}
        </div>

        <nav className="px-2 py-3 flex-1 overflow-y-auto space-y-5 no-scrollbar hover-scrollbar">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-2">
              {isCollapsed ? (
                <div className="h-px bg-border/40 my-4 mx-3" />
              ) : (
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/70 px-4 mb-2.5 font-display">
                  {group.label}
                </div>
              )}
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
                  const Icon = item.icon;
                  const linkElement = (
                    <Link
                      to={item.to}
                      className={`group relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-300 border border-transparent ${
                        active
                          ? "bg-primary text-primary-foreground shadow-sm hover-lift"
                          : "text-muted-foreground interactive-element"
                      } ${isCollapsed ? "justify-center px-0 w-11 h-11 mx-auto" : ""}`}
                    >
                      <Icon className={`transition-all duration-300 ${isCollapsed ? "h-[20px] w-[20px]" : "h-[18px] w-[18px]"} ${active ? "opacity-100" : "opacity-70 group-hover:scale-110 group-hover:opacity-100"}`} />
                      {!isCollapsed && <span className="flex-1">{item.label}</span>}
                      {!isCollapsed && "badge" in item && item.badge && (
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold transition-all duration-300 ${
                            active ? "bg-primary-foreground/20 text-primary-foreground" : "bg-secondary text-secondary-foreground"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                      {isCollapsed && "badge" in item && item.badge && (
                        <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-primary rounded-full shadow-sm" />
                      )}
                    </Link>
                  );
                  return (
                    <li key={item.to}>
                      {isCollapsed ? (
                        <Tooltip delayDuration={50}>
                          <TooltipTrigger asChild>
                            {linkElement}
                          </TooltipTrigger>
                          <TooltipContent side="right" className="bg-popover border border-border text-popover-foreground px-3 py-2 rounded-xl text-[13px] font-medium shadow-xl backdrop-blur-md z-50">
                            {item.label}
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        linkElement
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
        
        <div className="p-4 border-t border-border mt-auto space-y-2 bg-sidebar">
          {isCollapsed ? (
            <Tooltip delayDuration={50}>
              <TooltipTrigger asChild>
                <Link
                  to="/settings"
                  aria-label="Settings"
                  className="group flex items-center justify-center w-11 h-11 mx-auto rounded-xl border border-transparent text-muted-foreground interactive-element"
                >
                  <Settings className="opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-90 h-[20px] w-[20px]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-popover border border-border text-popover-foreground px-3 py-2 rounded-xl text-[13px] font-medium shadow-xl backdrop-blur-md z-50">
                Settings
              </TooltipContent>
            </Tooltip>
          ) : (
              <Link
              to="/settings"
              aria-label="Settings"
              className={`group flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-300 border border-transparent ${
                pathname.startsWith("/settings")
                  ? "bg-primary text-primary-foreground shadow-sm hover-lift"
                  : "text-muted-foreground interactive-element"
              }`}
            >
              <Settings className="h-[18px] w-[18px] opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:rotate-90" />
              <span className="flex-1">Settings</span>
            </Link>
          )}

          {isCollapsed ? (
            <Tooltip delayDuration={50}>
              <TooltipTrigger asChild>
                <button
                  onClick={toggleCollapse}
                  aria-label="Expand sidebar"
                  className="group flex items-center justify-center w-11 h-11 mx-auto rounded-xl border border-transparent text-muted-foreground interactive-element"
                >
                  <ChevronRight className="opacity-70 transition-all duration-300 group-hover:scale-110 h-[20px] w-[20px]" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-popover border border-border text-popover-foreground px-3 py-2 rounded-xl text-[13px] font-medium shadow-xl backdrop-blur-md z-50">
                Expand sidebar
              </TooltipContent>
            </Tooltip>
          ) : (
            <button
              onClick={toggleCollapse}
              aria-label="Collapse sidebar"
              className="w-full group flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-medium text-muted-foreground interactive-element border border-transparent"
            >
              <ChevronLeft className="h-[18px] w-[18px] opacity-70 transition-all duration-300 group-hover:-translate-x-1" />
              <span className="flex-1 text-left">Collapse</span>
            </button>
          )}
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-20 glass-panel">
          <div className="px-6 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[14px] text-muted-foreground font-medium">
              <span className="font-semibold text-foreground tracking-tight">Fortiv Solutions</span>
              <span className="opacity-50">/</span>
              <span className="font-medium">Surat Branch</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Header Search Bar */}
              <div 
                onClick={() => setIsSearchOpen(true)}
                className="relative hidden sm:block w-48 md:w-64 cursor-pointer group animate-fade-in"
              >
                <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-primary transition-colors" />
                <input
                  readOnly
                  placeholder="Search Anything... (⌘K)"
                  className="w-full h-10 pl-10 pr-12 rounded-xl bg-background border border-border shadow-inner text-[13px] font-medium placeholder:text-muted-foreground transition-all cursor-pointer text-foreground hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground font-bold bg-secondary/80 border border-border rounded-md px-2 py-0.5 pointer-events-none uppercase tracking-wider">
                  ⌘K
                </kbd>
              </div>

              <button aria-label="Create new" className="h-10 px-4 rounded-xl bg-primary text-primary-foreground text-[13px] font-bold flex items-center gap-2 shadow-sm hover-lift active:scale-95">
                <Plus className="h-4 w-4" /> <span className="hidden sm:inline">New</span>
              </button>
              <button
                aria-label="Notifications"
                className="touch-target h-10 w-10 min-w-0 min-h-0 flex items-center justify-center rounded-xl bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 relative hover-lift active:scale-95"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute top-[10px] right-[10px] h-2 w-2 rounded-full bg-destructive border-[1.5px] border-background" />
              </button>
              <div 
                aria-label="User profile"
                role="button"
                tabIndex={0}
                className="h-10 w-10 ml-2 rounded-xl bg-gradient-to-br from-primary to-primary/80 border border-primary/20 shadow-sm grid place-items-center text-[13px] font-bold text-primary-foreground cursor-pointer hover:shadow-md transition-all hover-lift active:scale-95"
              >
                RP
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col relative overflow-hidden">
          {(title || subtitle || actions) && (
            <div className="px-6 py-5 border-b border-border/40 bg-background/50 flex flex-col sm:flex-row sm:items-end justify-between gap-4 relative z-10">
              <div>
                <h1 className="text-2xl font-display font-bold tracking-tight text-foreground">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-[13px] font-medium text-muted-foreground mt-1 max-w-2xl">{subtitle}</p>
                )}
              </div>
              {actions && <div className="flex flex-wrap items-center gap-3">{actions}</div>}
            </div>
          )}
          
          <div className="flex-1 p-6 max-w-[1920px] w-full mx-auto relative z-10">{children}</div>
        </main>
      </div>

      {/* Mobile Nav Placeholder (Simplifying for now) */}
      <nav className="lg:hidden fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur pb-safe">
        {/* Mobile nav content omitted for brevity but standard implementation goes here */}
      </nav>

      {/* Command Palette Search Dialog */}
      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput placeholder="Type a command or search pages..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => runCommand(() => navigate({ to: "/" }))}>
              <LayoutDashboard className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Dashboard</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate({ to: "/leads" }))}>
              <Users2 className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Leads</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate({ to: "/pipeline" }))}>
              <GitBranch className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Pipeline</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate({ to: "/properties" }))}>
              <Building2 className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Properties</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate({ to: "/conversations" }))}>
              <MessagesSquare className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Conversations</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate({ to: "/projects" }))}>
              <Hammer className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Projects</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate({ to: "/tenants" }))}>
              <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Tenants</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate({ to: "/buyers" }))}>
              <UserCheck className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Buyer Portal</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate({ to: "/finance" }))}>
              <Wallet className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Finance</span>
            </CommandItem>

            <CommandItem onSelect={() => runCommand(() => navigate({ to: "/hr" }))}>
              <UserCog className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>HR Pipeline</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate({ to: "/analytics" }))}>
              <BarChart3 className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Analytics</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate({ to: "/ai-brain" }))}>
              <Sparkles className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>AI Brain</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate({ to: "/settings" }))}>
              <Settings className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Sub-modules">
            {searchableSubModules.map((sub) => {
              const Icon = getParentIcon(sub.parentTo);
              return (
                <CommandItem
                  key={`${sub.parentTo}-${sub.tab}`}
                  onSelect={() =>
                    runCommand(() =>
                      navigate({
                        to: sub.parentTo,
                        search: { tab: sub.tab },
                      })
                    )
                  }
                  className="flex flex-col items-start py-2.5 px-3 cursor-pointer"
                >
                  <div className="flex items-center w-full">
                    <Icon className="mr-2.5 h-4 w-4 text-muted-foreground shrink-0" />
                    <div className="flex flex-col min-w-0">
                      <span className="font-semibold text-xs text-foreground truncate">{sub.label}</span>
                      <span className="text-xs text-slate-500 font-medium tracking-wide truncate">
                        {sub.parent} &bull; {sub.label}
                      </span>
                    </div>
                  </div>
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  </TooltipProvider>
  );
}

export function Card({ className = "", children, onClick }: { className?: string; children: ReactNode; onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`premium-card ${className}`}
    >
      {children}
    </div>
  );
}

export function Stat({
  label,
  value,
  delta,
  tone = "neutral",
}: {
  label: string;
  value: string;
  delta?: string;
  tone?: "up" | "down" | "neutral";
}) {
  const toneCls =
    tone === "up"
      ? "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/20"
      : tone === "down"
        ? "text-destructive bg-destructive/10 border-destructive/20"
        : "text-muted-foreground bg-secondary border-border/50";
        
  return (
    <Card className="p-5 flex flex-col justify-between hover-lift">
      <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest font-display">
        {label}
      </div>
      <div className="mt-3 flex items-baseline gap-3">
        <div className="font-display text-3xl font-bold tracking-tight text-foreground">{value}</div>
        {delta && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border uppercase tracking-wider ${toneCls}`}>
            {delta}
          </span>
        )}
      </div>
    </Card>
  );
}

export type PillTone = "hot" | "warm" | "cold" | "neutral" | "accent";

export function Pill({ children, tone = "neutral" }: { children: ReactNode; tone?: PillTone }) {
  const map = {
    hot: "bg-red-50 text-red-600 border-red-200 dark:bg-red-950/30 dark:border-red-900/50",
    warm: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:border-amber-900/50 dark:text-amber-500",
    cold: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:border-blue-900/50 dark:text-blue-400",
    neutral: "bg-secondary text-secondary-foreground border-border",
    accent: "bg-primary/10 text-primary border-primary/20",
  } as const;
  
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-md border ${map[tone]}`}
    >
      {children}
    </span>
  );
}

