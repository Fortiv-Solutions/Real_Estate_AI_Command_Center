import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Stat, Pill } from "../components/AppShell";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects · Fortiv" }] }),
  component: Projects,
});

function Projects() {
  return (
    <AppShell title="Project & Construction Intelligence" subtitle="Live status across all active builds">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Active builds" value="6" />
        <Stat label="On schedule" value="4" delta="67%" tone="up" />
        <Stat label="Delayed" value="2" delta="−14d avg" tone="down" />
        <Stat label="Budget variance" value="+3.2%" />
      </div>

      <div className="mt-4 space-y-3">
        {[
          { n: "Skyline Heights — Tower B", phase: "Finishing", progress: 86, due: "Q3 2026", health: "On track", tone: "accent" },
          { n: "Riverfront Residences — Phase 2", phase: "Structure", progress: 54, due: "Q1 2027", health: "Delayed 12d", tone: "warm" },
          { n: "Marina Verde — Clubhouse", phase: "Interiors", progress: 72, due: "Q4 2026", health: "On track", tone: "accent" },
          { n: "Greenfield Park — Phase 1", phase: "Excavation", progress: 18, due: "Q2 2027", health: "Approval pending", tone: "hot" },
        ].map((p)=>(
          <Card key={p.n} className="p-5">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-12 md:col-span-4">
                <div className="font-display text-xl">{p.n}</div>
                <div className="text-[12px] text-muted-foreground mt-0.5">{p.phase} · due {p.due}</div>
              </div>
              <div className="col-span-8 md:col-span-6">
                <div className="flex justify-between text-[11px] mb-1.5">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{p.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-ink" style={{ width: `${p.progress}%` }} />
                </div>
              </div>
              <div className="col-span-4 md:col-span-2 text-right">
                <Pill tone={p.tone as any}>{p.health}</Pill>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
