import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Stat } from "../components/AppShell";

export const Route = createFileRoute("/analytics")({
  head: () => ({ meta: [{ title: "Analytics · Fortiv" }] }),
  component: Analytics,
});

const months = ["Dec", "Jan", "Feb", "Mar", "Apr", "May"];
const revenue = [18, 24, 22, 31, 28, 36];
const sources = [
  { l: "Facebook Ads", v: 32, c: "var(--ink)" },
  { l: "99acres", v: 22, c: "var(--accent)" },
  { l: "Referral", v: 18, c: "var(--warm)" },
  { l: "MagicBricks", v: 12, c: "var(--cold)" },
  { l: "WhatsApp", v: 9, c: "oklch(0.7 0.12 50)" },
  { l: "Other", v: 7, c: "var(--muted-foreground)" },
];

function Analytics() {
  return (
    <AppShell
      title="Analytics & Forecasting"
      subtitle="Revenue, attribution, agent performance and ML forecast — last 6 months"
      actions={
        <div className="flex rounded-lg border border-border bg-card p-0.5">
          {["7D", "30D", "90D", "6M", "YTD"].map((t, i) => (
            <button
              key={t}
              className={`h-8 px-2.5 rounded-md text-[10px] font-bold uppercase tracking-widest font-display ${i === 3 ? "bg-ink text-cream" : "text-muted-foreground"}`}
            >
              {t}
            </button>
          ))}
        </div>
      }
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Revenue · 6M" value="₹178Cr" delta="+22%" tone="up" />
        <Stat label="Units sold" value="284" delta="+34" tone="up" />
        <Stat label="CAC" value="₹4,820" delta="−12%" tone="up" />
        <Stat label="Forecast accuracy" value="91%" delta="+3 pts" tone="up" />
      </div>

      <div className="grid grid-cols-12 gap-4 mt-4">
        <Card className="col-span-12 lg:col-span-8 p-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground font-display">
                Revenue trend
              </div>
              <h3 className="font-display text-lg font-bold mt-0.5">Bookings vs forecast</h3>
            </div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-muted-foreground font-display">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                Actual
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Forecast
              </span>
            </div>
          </div>
          <div className="h-56 flex items-end gap-4 px-2">
            {revenue.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <div className="w-full flex items-end gap-1 h-full">
                  <div className="flex-1 rounded-t bg-ink" style={{ height: `${v * 2.4}%` }} />
                  <div
                    className="flex-1 rounded-t bg-accent"
                    style={{ height: `${(v + 4) * 2.4}%`, opacity: 0.85 }}
                  />
                </div>
                <div className="text-[9px] font-bold uppercase text-muted-foreground">{months[i]}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="col-span-12 lg:col-span-4 p-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground font-display">
            Source attribution
          </div>
          <h3 className="font-display text-lg font-bold mt-0.5">Where leads come from</h3>
          <div className="mt-4 h-2 rounded-full overflow-hidden flex">
            {sources.map((s) => (
              <div key={s.l} style={{ width: `${s.v}%`, background: s.c }} />
            ))}
          </div>
          <ul className="mt-4 space-y-2.5">
            {sources.map((s) => (
              <li key={s.l} className="flex items-center justify-between text-[11px]">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-sm" style={{ background: s.c }} />
                  {s.l}
                </span>
                <span className="font-bold tabular-nums">{s.v}%</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="col-span-12 lg:col-span-7 p-4 overflow-x-auto">
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground font-display">
            Agent leaderboard
          </div>
          <h3 className="font-display text-lg font-bold mt-0.5 mb-3">Top performers · May</h3>
          <table className="w-full min-w-[640px] text-xs">
            <thead>
              <tr className="text-[10px] text-muted-foreground uppercase tracking-widest border-b border-border/60 font-display font-bold">
                <th className="text-left py-2">Agent</th>
                <th className="text-right">Leads</th>
                <th className="text-right">Visits</th>
                <th className="text-right">Closed</th>
                <th className="text-right">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {[
                { n: "Nilesh Kothari", l: 86, v: 24, c: 7, r: "₹4.8Cr" },
                { n: "Dipak Mehta", l: 72, v: 19, c: 6, r: "₹4.1Cr" },
                { n: "Rajesh Patel", l: 64, v: 21, c: 5, r: "₹3.6Cr" },
                { n: "Anita Joshi", l: 58, v: 14, c: 4, r: "₹2.8Cr" },
                { n: "AI Assistant", l: 412, v: 23, c: 3, r: "₹1.9Cr" },
              ].map((a) => (
                <tr key={a.n} className="border-b border-border/40 last:border-0 hover:bg-muted/40">
                  <td className="py-2.5 font-bold">{a.n}</td>
                  <td className="text-right tabular-nums">{a.l}</td>
                  <td className="text-right tabular-nums">{a.v}</td>
                  <td className="text-right tabular-nums">{a.c}</td>
                  <td className="text-right font-bold tabular-nums">{a.r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="col-span-12 lg:col-span-5 p-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground font-display">
            Conversion funnel
          </div>
          <h3 className="font-display text-lg font-bold mt-0.5 mb-3">Lead → Booking</h3>
          <div className="space-y-2">
            {[
              { l: "Leads captured", v: 1240, w: 100 },
              { l: "Engaged", v: 884, w: 71 },
              { l: "Qualified", v: 412, w: 33 },
              { l: "Visited", v: 188, w: 15 },
              { l: "Negotiation", v: 64, w: 5.2 },
              { l: "Booked", v: 28, w: 2.3 },
            ].map((s, i) => (
              <div key={s.l}>
                <div className="flex justify-between text-[11px] mb-1 font-medium">
                  <span className="text-foreground">{s.l}</span>
                  <span className="text-muted-foreground tabular-nums">
                    {s.v} · <span className="font-bold">{s.w}%</span>
                  </span>
                </div>
                <div className="h-6 rounded bg-muted">
                  <div
                    className="h-full rounded"
                    style={{
                      width: `${s.w}%`,
                      background: i === 5 ? "var(--accent)" : "var(--ink)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
