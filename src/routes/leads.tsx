import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Pill } from "../components/AppShell";
import { Filter, Download, Flame, Phone, MessageCircle, ChevronDown, MoreHorizontal } from "lucide-react";
import { useState, useMemo } from "react";
import { MOCK_LEADS, type Lead } from "../lib/mock-data";

export const Route = createFileRoute("/leads")({
  head: () => ({ meta: [{ title: "Leads · Fortiv" }] }),
  component: Leads,
});

type FilterType = "All" | "Hot" | "Warm" | "Cold" | "Visit booked" | "Unassigned";

function Leads() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");


  
  const filteredLeads = useMemo(() => {
    return MOCK_LEADS.filter(lead => {
      if (activeFilter === "All") return true;
      if (activeFilter === "Visit booked") return lead.status === "Visit booked";
      if (activeFilter === "Unassigned") return lead.agent === "—" || lead.agent === "AI";
      return lead.tone.toLowerCase() === activeFilter.toLowerCase();
    });
  }, [activeFilter]);

  const filterCounts = useMemo(() => {
    return {
      "All": MOCK_LEADS.length,
      "Hot": MOCK_LEADS.filter(l => l.tone === "hot").length,
      "Warm": MOCK_LEADS.filter(l => l.tone === "warm").length,
      "Cold": MOCK_LEADS.filter(l => l.tone === "cold").length,
      "Visit booked": MOCK_LEADS.filter(l => l.status === "Visit booked").length,
      "Unassigned": MOCK_LEADS.filter(l => l.agent === "—" || l.agent === "AI").length,
    };
  }, []);

  const filterOptions: FilterType[] = ["All", "Hot", "Warm", "Cold", "Unassigned", "Visit booked"];

  return (
    <AppShell
      title="Leads"
      subtitle={`${filteredLeads.length} active leads · streaming from 11 sources`}
      actions={
        <>
          <button className="h-8 px-2.5 rounded-md border border-border bg-card text-xs font-semibold flex items-center gap-1.5 hover:bg-muted transition-colors shadow-sm">
            <Filter className="h-3.5 w-3.5" />
            Advanced Filters
          </button>
          <button className="h-8 px-2.5 rounded-md border border-border bg-card text-xs font-semibold flex items-center gap-1.5 hover:bg-muted transition-colors shadow-sm">
            <Download className="h-3.5 w-3.5" />
            Export CSV
          </button>
          <button className="h-8 px-3 rounded-md bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm">
            + New Lead
          </button>
        </>
      }
    >
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
        {filterOptions.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`shrink-0 h-7 px-3 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeFilter === f
                ? "bg-primary text-primary-foreground shadow-sm"
                : "border border-border bg-card hover:bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
            <span
              className={`text-[10px] px-1 py-0.5 rounded-md font-bold ${
                activeFilter === f
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {filterCounts[f]}
            </span>
          </button>
        ))}
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] text-sm text-left">
            <thead>
              <tr className="bg-secondary/40 border-b border-border">
                {["Lead Details", "Source", "Interest & Location", "Budget", "Score", "Status", "Agent", ""].map(
                  (h, i) => (
                    <th key={i} className="px-4 py-2 font-bold text-[10px] uppercase tracking-widest text-muted-foreground whitespace-nowrap font-display">
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-muted-foreground text-xs">
                    No leads found for this filter.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((l, i) => (
                  <tr key={i} className="bg-card hover:bg-secondary/40 transition-colors group">
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-full bg-secondary border border-border grid place-items-center text-[10px] font-bold text-secondary-foreground shrink-0 group-hover:border-primary/20 transition-colors">
                          {l.n.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-xs text-foreground">{l.n}</div>
                          <div className="text-[11px] text-muted-foreground font-medium">{l.p}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <Pill>{l.src}</Pill>
                    </td>
                    <td className="px-4 py-2">
                      <div className="text-xs font-semibold text-foreground">{l.cfg}</div>
                      <div className="text-[11px] text-muted-foreground">{l.area}</div>
                    </td>
                    <td className="px-4 py-2 font-bold text-xs tabular-nums tracking-tight">{l.budget}</td>
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-1.5">
                        <div className="font-display text-sm font-bold tracking-tight leading-none tabular-nums w-5">{l.score}</div>
                        <Pill tone={l.tone}>
                          {l.tone === "hot" ? (
                            <><Flame className="h-3 w-3" />Hot</>
                          ) : l.tone === "warm" ? (
                            "Warm"
                          ) : (
                            "Cold"
                          )}
                        </Pill>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-xs font-semibold text-muted-foreground">{l.status}</span>
                    </td>
                    <td className="px-4 py-2">
                      <div className="text-xs font-semibold">{l.agent}</div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center justify-end gap-1 opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="touch-target h-7 w-7 grid place-items-center rounded-md border border-border bg-background hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors shadow-sm active:scale-95" title="Call" aria-label="Call Lead">
                          <Phone className="h-3 w-3" />
                        </button>
                        <button className="touch-target h-7 w-7 grid place-items-center rounded-md border border-border bg-background hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors shadow-sm active:scale-95" title="Message" aria-label="Message Lead">
                          <MessageCircle className="h-3 w-3" />
                        </button>
                        <button className="touch-target h-7 w-7 grid place-items-center rounded-md border border-border bg-background hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors shadow-sm active:scale-95" title="More actions" aria-label="More Actions">
                          <MoreHorizontal className="h-3 w-3" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-secondary/20 text-[12px] font-medium text-muted-foreground">
          <div>Showing {filteredLeads.length} of {MOCK_LEADS.length} leads</div>
          <div className="flex gap-1">
            <button className="h-7 px-2 rounded-md border border-border bg-background hover:bg-secondary transition-colors" disabled>‹</button>
            <button className="h-7 px-2.5 rounded-md bg-primary text-primary-foreground shadow-sm">1</button>
            <button className="h-7 px-2.5 rounded-md border border-border bg-background hover:bg-secondary transition-colors">2</button>
            <button className="h-7 px-2.5 rounded-md border border-border bg-background hover:bg-secondary transition-colors">3</button>
            <button className="h-7 px-2 rounded-md border border-border bg-background hover:bg-secondary transition-colors">›</button>
          </div>
        </div>
      </Card>
    </AppShell>
  );
}
