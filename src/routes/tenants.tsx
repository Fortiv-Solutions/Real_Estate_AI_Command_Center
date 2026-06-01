import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Stat, Pill } from "../components/AppShell";

export const Route = createFileRoute("/tenants")({
  head: () => ({ meta: [{ title: "Tenants · Fortiv" }] }),
  component: Tenants,
});

function Tenants() {
  return (
    <AppShell
      title="Tenant & Property Management"
      subtitle="Active leases, rent cycles and maintenance tickets"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Active tenants" value="312" />
        <Stat label="Rent collected · May" value="₹84.2L" delta="98% on-time" tone="up" />
        <Stat label="Open tickets" value="14" delta="−6 wk" tone="up" />
        <Stat label="Vacant units" value="22" />
      </div>

      <div className="grid grid-cols-12 gap-4 mt-4">
        <Card className="col-span-12 lg:col-span-7 overflow-hidden overflow-x-auto">
          <div className="p-4 border-b border-border/60 flex justify-between">
            <h3 className="font-display text-lg font-bold">Active leases</h3>
          </div>
          <table className="w-full min-w-[680px] text-xs">
            <thead>
              <tr className="text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border/60 font-display font-bold">
                {["Tenant", "Property", "Rent", "Renewal", "Status"].map((h) => (
                  <th key={h} className="text-left px-4 py-2">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(
                [
                  {
                    n: "Arjun Mehta",
                    p: "Skyline 304",
                    r: "₹38,000",
                    d: "Aug 2026",
                    s: "Paid",
                    tone: "accent",
                  },
                  {
                    n: "Family Patel",
                    p: "Marina A-1102",
                    r: "₹62,500",
                    d: "Mar 2026",
                    s: "Paid",
                    tone: "accent",
                  },
                  {
                    n: "Sara Khan",
                    p: "Riverfront 805",
                    r: "₹28,000",
                    d: "Jun 2026",
                    s: "Overdue 3d",
                    tone: "hot",
                  },
                  {
                    n: "Vikas Rao",
                    p: "Athwa 202",
                    r: "₹48,000",
                    d: "Oct 2026",
                    s: "Paid",
                    tone: "accent",
                  },
                  {
                    n: "Neha Joshi",
                    p: "Citrus 506",
                    r: "₹22,000",
                    d: "Jul 2026",
                    s: "Notice given",
                    tone: "warm",
                  },
                ] as const
              ).map((t) => (
                <tr key={t.n} className="border-b border-border/40 last:border-0 hover:bg-muted/40">
                  <td className="px-4 py-2 font-bold">{t.n}</td>
                  <td className="font-medium text-muted-foreground">{t.p}</td>
                  <td className="tabular-nums font-bold">{t.r}</td>
                  <td className="text-muted-foreground font-medium">{t.d}</td>
                  <td>
                    <Pill tone={t.tone}>{t.s}</Pill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="col-span-12 lg:col-span-5 p-4">
          <h3 className="font-display text-lg font-bold">Maintenance queue</h3>
          <ul className="mt-3 space-y-2">
            {(
              [
                {
                  t: "Leak in master bath",
                  p: "Skyline 304",
                  s: "In progress",
                  tone: "warm",
                  a: "Plumber assigned",
                },
                {
                  t: "AC service request",
                  p: "Marina A-1102",
                  s: "Scheduled",
                  tone: "neutral",
                  a: "Visit Sat 11am",
                },
                {
                  t: "Lift card not working",
                  p: "Riverfront",
                  s: "Urgent",
                  tone: "hot",
                  a: "Tech dispatched",
                },
                { t: "Repaint walls", p: "Citrus 506", s: "Queued", tone: "neutral", a: "—" },
              ] as const
            ).map((m) => (
              <li key={m.t} className="p-2.5 rounded-lg bg-muted/40">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <div className="text-xs font-bold">{m.t}</div>
                    <div className="text-[10px] font-semibold text-muted-foreground mt-0.5">
                      {m.p} · {m.a}
                    </div>
                  </div>
                  <Pill tone={m.tone}>{m.s}</Pill>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </AppShell>
  );
}
