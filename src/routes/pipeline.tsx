import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Pill } from "../components/AppShell";
import { Plus, Flame, Clock, Sparkles, User, Building, AlertCircle, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import { MOCK_PIPELINE, type PipelineDeal } from "../lib/mock-data";

export const Route = createFileRoute("/pipeline")({
  head: () => ({ meta: [{ title: "Pipeline · Fortiv" }] }),
  component: Pipeline,
});

const stages = [
  { id: "inquiry", name: "Inquiry", count: 3, value: "₹3.2Cr", colorClass: "bg-slate-400" },
  { id: "scheduled", name: "Site Visit Scheduled", count: 2, value: "₹1.6Cr", colorClass: "bg-blue-500" },
  { id: "visited", name: "Visited", count: 3, value: "₹4.0Cr", colorClass: "bg-purple-500" },
  { id: "negotiation", name: "Negotiation", count: 3, value: "₹5.2Cr", colorClass: "bg-amber-500" },
  { id: "booking", name: "Booking", count: 2, value: "₹2.2Cr", colorClass: "bg-orange-500" },
  { id: "registered", name: "Registered", count: 2, value: "₹2.7Cr", colorClass: "bg-emerald-500" },
];

function UrgencyDot({ urgency }: { urgency: PipelineDeal["urgency"] }) {
  if (urgency === "high") return <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" title="High Urgency" />;
  if (urgency === "medium") return <div className="h-2 w-2 rounded-full bg-amber-400" title="Medium Urgency" />;
  return <div className="h-2 w-2 rounded-full bg-slate-300" title="Low Urgency" />;
}

function Pipeline() {
  const [selectedDeal, setSelectedDeal] = useState<PipelineDeal | null>(null);

  const getDealsByStage = (stageId: string) => MOCK_PIPELINE.filter((d) => d.stage === stageId);

  return (
    <AppShell
      title="Sales Pipeline"
      subtitle="₹18.9Cr total active pipeline · ₹2.7Cr closed this month"
      actions={
        <>
          <div className="flex rounded-lg border border-border bg-card p-0.5">
            <button className="h-9 px-3 rounded-md bg-ink text-cream text-[12px] font-medium shadow-sm">Kanban</button>
            <button className="h-9 px-3 text-[12px] text-muted-foreground font-medium hover:text-foreground transition-colors">List View</button>
          </div>
          <button className="h-10 px-4 rounded-lg bg-ink text-cream text-[13px] flex items-center gap-2 hover:bg-ink/90 transition-colors shadow-sm">
            <Plus className="h-4 w-4" />
            New Deal
          </button>
        </>
      }
    >
      <div className="flex flex-col h-[calc(100vh-140px)]">
        {/* AI Banner */}
        <div className="mx-6 mb-6 mt-2">
          <div className="flex items-center gap-3 bg-amber-500/10 text-amber-700 dark:text-amber-400 px-4 py-3 rounded-lg border border-amber-500/20">
            <Sparkles className="h-5 w-5" />
            <div className="flex-1 text-sm font-medium">
              AI Insight: 3 deals idle 8+ days in Negotiation stage.
            </div>
            <button className="text-xs font-semibold bg-amber-500 text-white px-3 py-1.5 rounded-md hover:bg-amber-600 transition-colors active:scale-95">
              Review Deals
            </button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="flex-1 overflow-x-auto overflow-y-hidden px-6 pb-6 scrollbar-hide">
          <div className="flex gap-4 h-full min-w-max">
            {stages.map((s) => {
              const stageDeals = getDealsByStage(s.id);
              return (
                <div key={s.id} className="flex flex-col w-[300px] h-full flex-shrink-0 bg-muted/20 rounded-xl border border-border/50">
                  {/* Column Header */}
                  <div className="p-3 border-b border-border/50 bg-card rounded-t-xl">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${s.colorClass}`} />
                        <span className="text-xs font-semibold text-foreground uppercase tracking-wider">{s.name}</span>
                      </div>
                      <span className="text-[11px] font-medium text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full">{s.count}</span>
                    </div>
                    <div className="text-[13px] font-semibold text-foreground">{s.value}</div>
                  </div>

                  {/* Column Body */}
                  <div className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-hide">
                    {stageDeals.map((d) => (
                      <Card 
                        key={d.id} 
                        className={`p-3 cursor-grab active:cursor-grabbing transition-all duration-200 border shadow-sm hover:shadow-md hover:-translate-y-0.5 ${selectedDeal?.id === d.id ? 'ring-2 ring-primary border-transparent' : 'border-border/60 hover:border-border'}`}
                        onClick={() => setSelectedDeal(d)}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="text-[14px] font-semibold text-foreground leading-tight">{d.client}</div>
                          <UrgencyDot urgency={d.urgency} />
                        </div>
                        
                        <div className="space-y-1.5 mb-3">
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Building className="h-3 w-3" />
                            <span className="truncate">{d.project}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <User className="h-3 w-3" />
                            <span>{d.agent}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2.5 border-t border-border/60">
                          <div className="text-[13px] font-bold text-foreground tabular-nums">{d.value}</div>
                          <div className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded-md">
                            <Clock className="h-3 w-3" />
                            {d.daysInStage}d
                          </div>
                        </div>
                      </Card>
                    ))}
                    
                    <button className="w-full h-10 flex items-center justify-center gap-2 rounded-lg border border-dashed border-border text-[13px] font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
                      <Plus className="h-3.5 w-3.5" />
                      Add deal
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Side Panel Overlay */}
      {selectedDeal && (
        <>
          <div 
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 transition-opacity animate-in fade-in duration-300"
            onClick={() => setSelectedDeal(null)}
          />
          <div className="fixed top-0 right-0 h-full w-[400px] bg-card border-l border-border shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-300 ease-out">
            <div className="p-6 border-b border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-foreground tracking-tight">{selectedDeal.client}</h2>
                  <p className="text-sm text-muted-foreground mt-1 font-medium">{selectedDeal.project}</p>
                </div>
                <button 
                  aria-label="Close panel"
                  onClick={() => setSelectedDeal(null)}
                  className="touch-target rounded-full hover:bg-secondary text-muted-foreground transition-colors"
                >
                  <Plus className="h-5 w-5 rotate-45" />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Deal Value</span>
                  <span className="text-lg font-bold">{selectedDeal.value}</span>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Assigned To</span>
                  <span className="text-sm font-medium">{selectedDeal.agent}</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div>
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-500" />
                  AI Next Action
                </h3>
                <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl shadow-sm">
                  <p className="text-sm text-foreground mb-4 leading-relaxed">
                    Deal has been idle in <span className="font-semibold">{selectedDeal.stage}</span> for {selectedDeal.daysInStage} days. Recommend sending a customized floor plan variant via WhatsApp to re-engage.
                  </p>
                  <button className="w-full bg-primary text-primary-foreground text-sm font-medium py-2.5 rounded-lg hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm">
                    <Sparkles className="h-4 w-4" />
                    Draft Message
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-3">Deal History</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="mt-0.5 h-2 w-2 rounded-full bg-ink flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Moved to {selectedDeal.stage}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{selectedDeal.daysInStage} days ago by {selectedDeal.agent}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-0.5 h-2 w-2 rounded-full bg-border flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Site Visit Completed</p>
                      <p className="text-xs text-muted-foreground mt-0.5">14 days ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-0.5 h-2 w-2 rounded-full bg-border flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Initial Inquiry (Facebook Ads)</p>
                      <p className="text-xs text-muted-foreground mt-0.5">21 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </AppShell>
  );
}
