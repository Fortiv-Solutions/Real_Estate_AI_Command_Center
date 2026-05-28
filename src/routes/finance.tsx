import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Stat, Pill } from "../components/AppShell";

export const Route = createFileRoute("/finance")({
  head: () => ({ meta: [{ title: "Finance · Fortiv" }] }),
  component: Finance,
});

function Finance() {
  return (
    <AppShell title="Finance, Accounts & Revenue Intelligence" subtitle="Bookings, receivables, broker payouts and GST">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Booked revenue · May" value="₹36.4Cr" delta="+18%" tone="up" />
        <Stat label="Receivables" value="₹12.8Cr" />
        <Stat label="Broker payouts due" value="₹84L" />
        <Stat label="GST liability · Q1" value="₹4.2Cr" />
      </div>

      <div className="grid grid-cols-12 gap-4 mt-4">
        <Card className="col-span-12 lg:col-span-8 p-5">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-display text-2xl">Cash flow · 12 months</h3>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-ink"/>Inflow</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[color:var(--hot)]"/>Outflow</span>
            </div>
          </div>
          <div className="h-56 flex items-end gap-2">
            {[42,38,52,46,58,64,49,72,68,84,78,92].map((v,i)=>(
              <div key={i} className="flex-1 flex flex-col gap-1 items-center">
                <div className="w-full flex items-end gap-0.5 h-full">
                  <div className="flex-1 bg-ink rounded-t" style={{ height: `${v}%` }} />
                  <div className="flex-1 bg-[color:var(--hot)]/70 rounded-t" style={{ height: `${v*0.55}%` }} />
                </div>
                <div className="text-[10px] text-muted-foreground">{["J","F","M","A","M","J","J","A","S","O","N","D"][i]}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="col-span-12 lg:col-span-4 p-5">
          <h3 className="font-display text-2xl">Receivables aging</h3>
          <div className="mt-4 space-y-3">
            {[
              { l: "0–30 days", v: "₹6.2Cr", w: 48, c: "var(--ink)" },
              { l: "31–60 days", v: "₹3.4Cr", w: 26, c: "var(--accent)" },
              { l: "61–90 days", v: "₹1.8Cr", w: 14, c: "var(--warm)" },
              { l: "90+ days", v: "₹1.4Cr", w: 11, c: "var(--hot)" },
            ].map((a)=>(
              <div key={a.l}>
                <div className="flex justify-between text-[12px]">
                  <span className="text-muted-foreground">{a.l}</span>
                  <span className="font-medium">{a.v}</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden mt-1">
                  <div className="h-full rounded-full" style={{ width: `${a.w*2}%`, background: a.c }}/>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="col-span-12 overflow-hidden">
          <div className="p-5 border-b border-border/60"><h3 className="font-display text-2xl">Recent transactions</h3></div>
          <table className="w-full text-[13px]">
            <thead><tr className="text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border/60">
              {["Date","Description","Project","Type","Amount","Status"].map(h=><th key={h} className="text-left font-medium px-5 py-3">{h}</th>)}
            </tr></thead>
            <tbody>
              {[
                { d: "28 May", n: "Booking advance — Priya Shah", p: "Skyline", t: "Inflow", a: "+₹7,20,000", s: "Cleared", tone: "accent" },
                { d: "28 May", n: "Broker payout — Nilesh K.", p: "Riverfront", t: "Outflow", a: "−₹2,40,000", s: "Pending", tone: "warm" },
                { d: "27 May", n: "EMI installment — Mehta", p: "Marina", t: "Inflow", a: "+₹6,25,000", s: "Cleared", tone: "accent" },
                { d: "27 May", n: "Contractor — Riverfront B", p: "Riverfront", t: "Outflow", a: "−₹18,40,000", s: "Cleared", tone: "neutral" },
                { d: "26 May", n: "GST advance payment", p: "Org-wide", t: "Outflow", a: "−₹42,00,000", s: "Cleared", tone: "neutral" },
              ].map((r,i)=>(
                <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-muted/40">
                  <td className="px-5 py-3 text-muted-foreground">{r.d}</td>
                  <td>{r.n}</td>
                  <td className="text-muted-foreground">{r.p}</td>
                  <td>{r.t}</td>
                  <td className={`font-medium tabular-nums ${r.a.startsWith("+")?"text-emerald-700":"text-foreground"}`}>{r.a}</td>
                  <td><Pill tone={r.tone as any}>{r.s}</Pill></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </AppShell>
  );
}
