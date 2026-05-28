import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Stat, Pill } from "../components/AppShell";

export const Route = createFileRoute("/tenants")({
  head: () => ({ meta: [{ title: "Tenants · Fortiv" }] }),
  component: Tenants,
});

function Tenants() {
  return (
    <AppShell title="Tenant & Property Management" subtitle="Active leases, rent cycles and maintenance tickets">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Active tenants" value="312" />
        <Stat label="Rent collected · May" value="₹84.2L" delta="98% on-time" tone="up" />
        <Stat label="Open tickets" value="14" delta="−6 wk" tone="up" />
        <Stat label="Vacant units" value="22" />
      </div>

      <div className="grid grid-cols-12 gap-4 mt-4">
        <Card className="col-span-12 lg:col-span-7 overflow-hidden">
          <div className="p-5 border-b border-border/60 flex justify-between"><h3 className="font-display text-2xl">Active leases</h3></div>
          <table className="w-full text-[13px]">
            <thead><tr className="text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border/60">
              {["Tenant","Property","Rent","Renewal","Status"].map(h=><th key={h} className="text-left font-medium px-5 py-3">{h}</th>)}
            </tr></thead>
            <tbody>
              {[
                { n: "Arjun Mehta", p: "Skyline 304", r: "₹38,000", d: "Aug 2026", s: "Paid", tone: "accent" },
                { n: "Family Patel", p: "Marina A-1102", r: "₹62,500", d: "Mar 2026", s: "Paid", tone: "accent" },
                { n: "Sara Khan", p: "Riverfront 805", r: "₹28,000", d: "Jun 2026", s: "Overdue 3d", tone: "hot" },
                { n: "Vikas Rao", p: "Athwa 202", r: "₹48,000", d: "Oct 2026", s: "Paid", tone: "accent" },
                { n: "Neha Joshi", p: "Citrus 506", r: "₹22,000", d: "Jul 2026", s: "Notice given", tone: "warm" },
              ].map(t=>(
                <tr key={t.n} className="border-b border-border/40 last:border-0 hover:bg-muted/40">
                  <td className="px-5 py-3 font-medium">{t.n}</td>
                  <td>{t.p}</td>
                  <td className="tabular-nums">{t.r}</td>
                  <td className="text-muted-foreground">{t.d}</td>
                  <td><Pill tone={t.tone as any}>{t.s}</Pill></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="col-span-12 lg:col-span-5 p-5">
          <h3 className="font-display text-2xl">Maintenance queue</h3>
          <ul className="mt-4 space-y-3">
            {[
              { t: "Leak in master bath", p: "Skyline 304", s: "In progress", tone: "warm", a: "Plumber assigned" },
              { t: "AC service request", p: "Marina A-1102", s: "Scheduled", tone: "neutral", a: "Visit Sat 11am" },
              { t: "Lift card not working", p: "Riverfront", s: "Urgent", tone: "hot", a: "Tech dispatched" },
              { t: "Repaint walls", p: "Citrus 506", s: "Queued", tone: "neutral", a: "—" },
            ].map((m)=>(
              <li key={m.t} className="p-3 rounded-xl bg-muted/40">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <div className="text-[13px] font-medium">{m.t}</div>
                    <div className="text-[11px] text-muted-foreground">{m.p} · {m.a}</div>
                  </div>
                  <Pill tone={m.tone as any}>{m.s}</Pill>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </AppShell>
  );
}
