import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Pill } from "../components/AppShell";
import { Sparkles, Send, Brain, Database, Shield, Zap } from "lucide-react";

export const Route = createFileRoute("/ai-brain")({
  head: () => ({ meta: [{ title: "AI Brain · Fortiv" }] }),
  component: AIBrain,
});

function AIBrain() {
  return (
    <AppShell title="AI Brain · Data Layer & Security" subtitle="Ask anything about your business · M12 unified intelligence layer">
      <Card className="p-6 bg-ink text-cream relative overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.88 0.16 92 / 0.45), transparent 60%)" }}/>
        <div className="relative">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] opacity-70"><Sparkles className="h-3 w-3"/>Conversational intelligence</div>
          <h2 className="font-display text-4xl mt-2 max-w-3xl leading-[1.05]">
            Ask me about leads, projects, revenue, agents — in English, Hindi or Gujarati.
          </h2>
          <div className="mt-6 flex gap-2 items-center bg-cream/10 rounded-2xl px-4 py-3 border border-cream/15 max-w-3xl">
            <Sparkles className="h-4 w-4 opacity-70"/>
            <input className="flex-1 bg-transparent text-[14px] placeholder:text-cream/50 focus:outline-none" placeholder="e.g. Which 3BHK projects had highest engagement this week?" />
            <button className="h-9 w-9 grid place-items-center rounded-xl bg-accent text-ink"><Send className="h-4 w-4"/></button>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {[
              "Forecast June bookings",
              "Show me Vesu pipeline",
              "Why are Riverfront leads cold?",
              "Top 3 underperforming agents",
            ].map(s=>(
              <button key={s} className="text-[12px] px-3 py-1.5 rounded-full bg-cream/10 border border-cream/15 hover:bg-cream/15">{s}</button>
            ))}
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        {[
          { i: <Brain className="h-5 w-5"/>, t: "Models active", v: "14", d: "Lead scoring · NLP · Forecast · CV" },
          { i: <Database className="h-5 w-5"/>, t: "Data sources", v: "32", d: "Portals · Ads · WhatsApp · ERP · Maps" },
          { i: <Shield className="h-5 w-5"/>, t: "Security", v: "SOC 2", d: "RBAC · Audit logs · Encryption at rest" },
        ].map((s)=>(
          <Card key={s.t} className="p-5">
            <div className="h-9 w-9 grid place-items-center rounded-lg bg-accent/40">{s.i}</div>
            <div className="font-display text-3xl mt-3">{s.v}</div>
            <div className="text-[13px] font-medium mt-0.5">{s.t}</div>
            <div className="text-[12px] text-muted-foreground mt-1">{s.d}</div>
          </Card>
        ))}
      </div>

      <Card className="mt-4 p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-display text-2xl">Latest AI insights</h3>
          <Pill tone="accent"><Zap className="h-2.5 w-2.5"/>Auto-generated</Pill>
        </div>
        <ul className="space-y-2">
          {[
            { t: "Vesu 3BHK demand jumped 32% this week — reallocate ad budget", c: "Marketing" },
            { t: "Lead response time slipped to 14m for Riverfront — assign +1 agent", c: "Operations" },
            { t: "Skyline Heights ROI: every ₹1 ad spend yields ₹84 in pipeline", c: "Finance" },
            { t: "12 broker contacts in Pal not contacted in 30+ days", c: "Sales" },
            { t: "Forecast: June close 7–9 deals · ₹5.2–6.8Cr revenue", c: "Forecast" },
          ].map((i)=>(
            <li key={i.t} className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-muted/40">
              <div className="flex gap-3 items-start">
                <Sparkles className="h-4 w-4 text-accent-foreground/70 mt-0.5"/>
                <div className="text-[13px]">{i.t}</div>
              </div>
              <Pill>{i.c}</Pill>
            </li>
          ))}
        </ul>
      </Card>
    </AppShell>
  );
}
