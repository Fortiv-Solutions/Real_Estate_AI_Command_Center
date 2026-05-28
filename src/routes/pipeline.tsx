import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Pill } from "../components/AppShell";
import { Plus, Flame, IndianRupee } from "lucide-react";

export const Route = createFileRoute("/pipeline")({
  head: () => ({ meta: [{ title: "Pipeline · Fortiv" }] }),
  component: Pipeline,
});

const stages = [
  { name: "New", count: 84, value: "₹12.4Cr", color: "var(--muted-foreground)" },
  { name: "Contacted", count: 56, value: "₹9.8Cr", color: "var(--cold)" },
  { name: "Qualified", count: 38, value: "₹8.1Cr", color: "var(--accent)" },
  { name: "Visit booked", count: 23, value: "₹7.6Cr", color: "var(--warm)" },
  { name: "Negotiation", count: 14, value: "₹6.2Cr", color: "var(--hot)" },
  { name: "Closed", count: 8, value: "₹4.5Cr", color: "var(--ink)" },
];

const deals: Record<string, { n: string; p: string; v: string; hot?: boolean; days: number }[]> = {
  New: [
    { n: "Priya Shah", p: "Skyline 3BHK", v: "₹72L", hot: true, days: 0 },
    { n: "Vivek Sharma", p: "Riverfront 3BHK", v: "₹85L", days: 1 },
    { n: "Ankur Joshi", p: "Marina 2BHK", v: "₹54L", days: 1 },
  ],
  Contacted: [
    { n: "Aman Trivedi", p: "Riverfront 2BHK", v: "₹48L", hot: true, days: 2 },
    { n: "Rohan Desai", p: "Skyline 2BHK", v: "₹52L", days: 3 },
  ],
  Qualified: [
    { n: "Hetal Mehta", p: "Marina 2BHK", v: "₹42L", days: 4 },
    { n: "Ravi Iyer", p: "Skyline 3BHK", v: "₹68L", hot: true, days: 6 },
  ],
  "Visit booked": [
    { n: "Kunal Jain", p: "Marina Penthouse", v: "₹1.35Cr", hot: true, days: 7 },
    { n: "Tanvi Bhatt", p: "Riverfront 3BHK", v: "₹78L", days: 5 },
  ],
  Negotiation: [
    { n: "Suresh Patel", p: "Skyline 4BHK", v: "₹1.05Cr", hot: true, days: 12 },
  ],
  Closed: [
    { n: "Meena Shah", p: "Marina 2BHK", v: "₹45L", days: 18 },
  ],
};

function Pipeline() {
  return (
    <AppShell
      title="Pipeline"
      subtitle="223 active deals · ₹48.6 Cr forecast · 7.8% close rate"
      actions={
        <>
          <div className="flex rounded-lg border border-border bg-card p-0.5">
            <button className="h-9 px-3 rounded-md bg-ink text-cream text-[12px]">Kanban</button>
            <button className="h-9 px-3 text-[12px] text-muted-foreground">Table</button>
            <button className="h-9 px-3 text-[12px] text-muted-foreground">Forecast</button>
          </div>
          <button className="h-10 px-4 rounded-lg bg-ink text-cream text-[13px] flex items-center gap-2"><Plus className="h-4 w-4" />Deal</button>
        </>
      }
    >
      <div className="grid grid-cols-6 gap-3 min-w-[1100px]">
        {stages.map((s) => (
          <div key={s.name} className="flex flex-col">
            <div className="flex items-center justify-between px-1 mb-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                <span className="text-[12px] font-medium">{s.name}</span>
                <span className="text-[11px] text-muted-foreground">{s.count}</span>
              </div>
              <span className="text-[11px] font-medium">{s.value}</span>
            </div>
            <div className="space-y-2">
              {(deals[s.name] ?? []).map((d) => (
                <Card key={d.n} className="p-3 cursor-grab hover:shadow-sm transition-shadow">
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-[13px] font-medium leading-tight">{d.n}</div>
                    {d.hot && <Pill tone="hot"><Flame className="h-2.5 w-2.5"/></Pill>}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{d.p}</div>
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-border/50">
                    <div className="text-[12px] font-display">{d.v}</div>
                    <div className="text-[10px] text-muted-foreground">{d.days}d in stage</div>
                  </div>
                </Card>
              ))}
              <button className="w-full h-9 rounded-xl border border-dashed border-border text-[11px] text-muted-foreground hover:bg-muted/40 hover:text-foreground">+ Add deal</button>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
