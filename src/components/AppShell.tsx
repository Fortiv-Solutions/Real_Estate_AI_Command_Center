import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, Users2, GitBranch, Building2, MessagesSquare,
  BarChart3, ShieldCheck, Briefcase, Hammer, Wallet, Sparkles, Settings,
  Search, Bell, Plus,
} from "lucide-react";
import { type ReactNode } from "react";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/leads", label: "Leads", icon: Users2, badge: "24" },
  { to: "/pipeline", label: "Pipeline", icon: GitBranch },
  { to: "/properties", label: "Properties", icon: Building2 },
  { to: "/conversations", label: "Conversations", icon: MessagesSquare, badge: "8" },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/compliance", label: "Compliance", icon: ShieldCheck },
  { to: "/projects", label: "Projects", icon: Hammer },
  { to: "/tenants", label: "Tenants", icon: Briefcase },
  { to: "/finance", label: "Finance", icon: Wallet },
  { to: "/ai-brain", label: "AI Brain", icon: Sparkles },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

export function AppShell({ children, title, subtitle, actions }: {
  children: ReactNode; title: string; subtitle?: string; actions?: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border/60 bg-sidebar/60 backdrop-blur-xl sticky top-0 h-screen">
        <div className="px-5 py-5 flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-ink text-cream grid place-items-center font-display text-lg">F</div>
          <div className="leading-tight">
            <div className="text-[15px] font-semibold tracking-tight">Fortiv</div>
            <div className="text-[11px] text-muted-foreground -mt-0.5">Command Center</div>
          </div>
        </div>

        <div className="px-3">
          <div className="relative">
            <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Quick search…"
              className="w-full h-9 pl-8 pr-12 rounded-lg bg-muted/60 border border-transparent text-[13px] placeholder:text-muted-foreground focus:outline-none focus:border-border"
            />
            <kbd className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground bg-background border border-border rounded px-1.5 py-0.5">⌘K</kbd>
          </div>
        </div>

        <nav className="px-3 py-4 flex-1 overflow-y-auto">
          <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground px-2 mb-2">Workspace</div>
          <ul className="space-y-0.5">
            {nav.map((item) => {
              const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
              const Icon = item.icon;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`group flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] transition-colors ${
                      active
                        ? "bg-ink text-cream"
                        : "text-foreground/75 hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="flex-1">{item.label}</span>
                    {"badge" in item && item.badge && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-medium ${
                        active ? "bg-cream/15 text-cream" : "bg-accent text-accent-foreground"
                      }`}>{item.badge}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="m-3 p-3 rounded-2xl bg-ink text-cream relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 80% 20%, oklch(0.88 0.16 92), transparent 60%)" }} />
          <div className="relative">
            <div className="text-[11px] uppercase tracking-wider opacity-70">AI Credits</div>
            <div className="font-display text-3xl mt-1">12,480</div>
            <div className="text-[11px] opacity-70 mt-0.5">renews May 31</div>
            <button className="mt-3 w-full text-[12px] bg-cream text-ink rounded-lg py-1.5 font-medium">Upgrade plan</button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-20 border-b border-border/60 bg-background/70 backdrop-blur-xl">
          <div className="px-6 lg:px-8 h-16 flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <div className="text-[11px] text-muted-foreground uppercase tracking-[0.14em]">Fortiv Solutions · Surat</div>
              <h1 className="text-[15px] font-semibold tracking-tight truncate">{title}</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="h-9 px-3 rounded-lg border border-border bg-card text-[13px] flex items-center gap-2 hover:bg-muted">
                <Plus className="h-3.5 w-3.5" /> New
              </button>
              <button className="h-9 w-9 grid place-items-center rounded-lg border border-border bg-card hover:bg-muted relative">
                <Bell className="h-4 w-4" />
                <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--hot)]" />
              </button>
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-accent to-[color:var(--warm)] grid place-items-center text-ink text-[12px] font-semibold">RP</div>
            </div>
          </div>
          {(subtitle || actions) && (
            <div className="px-6 lg:px-8 pb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-4xl lg:text-5xl tracking-tight">{title}</h2>
                {subtitle && <p className="text-[13px] text-muted-foreground mt-1">{subtitle}</p>}
              </div>
              {actions && <div className="flex items-center gap-2">{actions}</div>}
            </div>
          )}
        </header>
        <main className="flex-1 px-6 lg:px-8 py-6">{children}</main>
      </div>
    </div>
  );
}

export function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`glass rounded-2xl ${className}`}>{children}</div>;
}

export function Stat({ label, value, delta, tone = "neutral" }: {
  label: string; value: string; delta?: string; tone?: "up" | "down" | "neutral";
}) {
  const toneCls = tone === "up" ? "text-emerald-700 bg-emerald-50" : tone === "down" ? "text-[color:var(--hot)] bg-red-50" : "text-muted-foreground bg-muted";
  return (
    <Card className="p-5">
      <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <div className="font-display text-4xl tracking-tight">{value}</div>
        {delta && <span className={`text-[11px] px-1.5 py-0.5 rounded ${toneCls}`}>{delta}</span>}
      </div>
    </Card>
  );
}

export function Pill({ children, tone = "neutral" }: { children: ReactNode; tone?: "hot" | "warm" | "cold" | "neutral" | "accent" }) {
  const map = {
    hot: "bg-[color:var(--hot)]/10 text-[color:var(--hot)] border-[color:var(--hot)]/20",
    warm: "bg-amber-50 text-amber-700 border-amber-200",
    cold: "bg-sky-50 text-sky-700 border-sky-200",
    neutral: "bg-muted text-foreground/70 border-border",
    accent: "bg-accent text-accent-foreground border-transparent",
  } as const;
  return <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full border ${map[tone]}`}>{children}</span>;
}
