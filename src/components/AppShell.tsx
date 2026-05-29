import { Link, useRouterState } from "@tanstack/react-router";
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
} from "lucide-react";
import { type ReactNode } from "react";

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
      { to: "/finance", label: "Finance", icon: Wallet },
      { to: "/compliance", label: "Compliance", icon: ShieldCheck },
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

export function AppShell({
  children,
  title,
  subtitle,
  actions,
}: {
  children: ReactNode;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen flex bg-background font-sans text-foreground">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-[260px] shrink-0 flex-col border-r border-border bg-sidebar h-screen sticky top-0">
        <div className="px-5 py-5 flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-primary text-primary-foreground grid place-items-center text-sm font-bold shadow-sm">
            F
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">Fortiv</div>
            <div className="text-[11px] text-muted-foreground font-medium">Command Center</div>
          </div>
        </div>

        <div className="px-4 pb-2">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              aria-label="Quick search"
              placeholder="Search anything..."
              className="w-full h-9 pl-9 pr-12 rounded-md bg-secondary/50 border border-transparent text-[13px] placeholder:text-muted-foreground focus:border-ring focus:bg-background transition-colors outline-none"
            />
            <kbd className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground font-medium bg-background border border-border rounded px-1.5 py-0.5 shadow-sm">
              ⌘K
            </kbd>
          </div>
        </div>

        <nav className="px-3 py-4 flex-1 overflow-y-auto space-y-6">
          {navGroups.map((group) => (
            <div key={group.label}>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground px-3 mb-2">
                {group.label}
              </div>
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
                  const Icon = item.icon;
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className={`group relative flex items-center gap-3 px-3 py-2 rounded-md text-[13px] font-medium transition-all duration-300 ${
                          active
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        {active && (
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary-foreground rounded-r-md animate-in slide-in-from-left-1" />
                        )}
                        <Icon className={`h-4 w-4 transition-transform duration-300 ${active ? "opacity-100 scale-110" : "opacity-70 group-hover:opacity-100 group-hover:scale-110"}`} />
                        <span className="flex-1">{item.label}</span>
                        {"badge" in item && item.badge && (
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold transition-colors duration-300 ${
                              active ? "bg-primary-foreground/20 text-primary-foreground" : "bg-secondary-foreground/10 text-secondary-foreground"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
        
        <div className="p-4 border-t border-border mt-auto">
          <Link
            to="/settings"
            aria-label="Settings"
            className={`group flex items-center gap-3 px-3 py-2 rounded-md text-[13px] font-medium transition-all duration-300 ${
              pathname.startsWith("/settings")
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <Settings className="h-4 w-4 opacity-70 transition-transform duration-300 group-hover:opacity-100 group-hover:rotate-45" />
            <span className="flex-1">Settings</span>
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-20 border-b border-border/40 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-colors">
          <div className="px-6 h-14 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground tracking-tight">Fortiv Solutions</span>
              <span className="opacity-50">/</span>
              <span className="font-medium">Surat Branch</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button aria-label="Create new" className="h-9 px-3.5 rounded-md bg-primary text-primary-foreground text-[13px] font-medium flex items-center gap-1.5 shadow-sm transition-all hover:bg-primary/90 active:scale-95">
                <Plus className="h-4 w-4" /> <span className="hidden sm:inline">New</span>
              </button>
              <button
                aria-label="Notifications"
                className="touch-target rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors relative active:scale-95"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute top-[10px] right-[10px] h-1.5 w-1.5 rounded-full bg-destructive border border-background animate-pulse" />
              </button>
              <div 
                aria-label="User profile"
                role="button"
                tabIndex={0}
                className="h-8 w-8 ml-1 rounded-full bg-secondary border border-border grid place-items-center text-[12px] font-semibold text-secondary-foreground cursor-pointer hover:ring-2 hover:ring-ring hover:ring-offset-2 transition-all active:scale-95"
              >
                RP
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col">
          {(title || subtitle || actions) && (
            <div className="px-6 py-6 pb-2 border-b border-border/50 bg-background flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-2xl font-display font-semibold tracking-tight text-foreground">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-[13px] text-muted-foreground mt-1 max-w-2xl">{subtitle}</p>
                )}
              </div>
              {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
            </div>
          )}
          <div className="flex-1 p-6 max-w-[1600px] w-full mx-auto">{children}</div>
        </main>
      </div>

      {/* Mobile Nav Placeholder (Simplifying for now) */}
      <nav className="lg:hidden fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur pb-safe">
        {/* Mobile nav content omitted for brevity but standard implementation goes here */}
      </nav>
    </div>
  );
}

export function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`bg-card text-card-foreground rounded-xl border border-border shadow-sm ${className}`}>
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
      ? "text-emerald-700 bg-emerald-50 border-emerald-200"
      : tone === "down"
        ? "text-red-700 bg-red-50 border-red-200"
        : "text-slate-600 bg-slate-50 border-slate-200";
        
  return (
    <Card className="p-5 flex flex-col justify-between">
      <div className="text-[12px] font-medium text-muted-foreground">
        {label}
      </div>
      <div className="mt-3 flex items-baseline gap-3">
        <div className="font-display text-3xl font-semibold tracking-tight">{value}</div>
        {delta && (
          <span className={`text-[11px] font-medium px-1.5 py-0.5 rounded-md border ${toneCls}`}>
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
    hot: "bg-red-50 text-red-700 border-red-200",
    warm: "bg-amber-50 text-amber-700 border-amber-200",
    cold: "bg-blue-50 text-blue-700 border-blue-200",
    neutral: "bg-slate-100 text-slate-700 border-slate-200",
    accent: "bg-primary text-primary-foreground border-transparent",
  } as const;
  
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-md border ${map[tone]}`}
    >
      {children}
    </span>
  );
}

