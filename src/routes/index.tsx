import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Stat, Pill } from "../components/AppShell";
import { ArrowUpRight, MessageCircle, Flame, Building2, Sparkles, MapPin, Download } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Fortiv Command Center" },
      {
        name: "description",
        content: "Live real estate operations dashboard for Indian developers and brokerages.",
      },
    ],
  }),
  component: Dashboard,
});

const sparkBars = [32, 48, 28, 55, 41, 68, 52, 74, 60, 82, 71, 88];

function Dashboard() {
  return (
    <AppShell
      title="Good morning, Rajesh"
      subtitle="Tuesday, 28 May · 14 new leads since you logged off · 3 site visits today"
      actions={
        <>
          <button className="h-9 px-4 rounded-lg border border-border bg-card text-[13px] font-semibold hover:bg-muted transition-colors flex items-center gap-2 shadow-sm">
            <Download className="h-4 w-4" /> Export
          </button>
          <button className="h-9 px-4 rounded-lg bg-[#0E86E9] text-white text-[13px] font-semibold flex items-center gap-2 hover:bg-[#0E53A0] transition-colors shadow-[0_0_15px_rgba(14,134,233,0.3)] glow-pulse">
            <Sparkles className="h-4 w-4" /> Ask AI Brain
          </button>
        </>
      }
    >
      {/* KPI strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Leads · this week" value="284" delta="+18.2%" tone="up" />
        <Stat label="Hot leads" value="42" delta="+6" tone="up" />
        <Stat label="Site visits" value="37" delta="−2" tone="down" />
        <Stat label="Pipeline value" value="₹48.6Cr" delta="+₹3.2Cr" tone="up" />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4">
        {/* Live lead feed */}
        <Card className="col-span-12 lg:col-span-5 p-4 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-display">
                Live Feed
              </div>
              <h3 className="text-lg font-bold mt-0.5">Leads arriving now</h3>
            </div>
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Streaming
            </span>
          </div>
          <ul className="space-y-1.5 flex-1 overflow-y-auto pr-1">
            {[
              {
                name: "Priya Shah",
                area: "Vesu, Surat",
                source: "Facebook Ads",
                score: 88,
                tone: "hot" as const,
                mins: "just now",
              },
              {
                name: "Aman Trivedi",
                area: "Adajan, Surat",
                source: "99acres",
                score: 74,
                tone: "hot" as const,
                mins: "2 min ago",
              },
              {
                name: "Hetal Mehta",
                area: "Pal, Surat",
                source: "WhatsApp",
                score: 61,
                tone: "warm" as const,
                mins: "6 min ago",
              },
              {
                name: "Kunal Jain",
                area: "Katargam",
                source: "Referral",
                score: 92,
                tone: "hot" as const,
                mins: "11 min ago",
              },
              {
                name: "Sneha Patel",
                area: "Athwa",
                source: "Google Ads",
                score: 44,
                tone: "warm" as const,
                mins: "18 min ago",
              },
            ].map((l, idx) => (
              <li
                key={l.name}
                className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-secondary/60 transition-colors border border-transparent hover:border-border cursor-pointer group"
              >
                <div className="h-8 w-8 rounded-full bg-secondary border border-border grid place-items-center text-xs font-bold text-secondary-foreground">
                  {l.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-foreground truncate group-hover:text-primary transition-colors">{l.name}</span>
                    <div className="text-right">
                      <div className="text-sm font-bold leading-none">{l.score}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-0.5">
                    <div className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                      {l.area} · {l.source}
                    </div>
                    <Pill tone={l.tone}>
                      {l.tone === "hot" ? (
                        <>
                          <Flame className="h-3 w-3" />
                          Hot
                        </>
                      ) : (
                        "Warm"
                      )}
                    </Pill>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        {/* Pipeline value chart */}
        <Card className="col-span-12 lg:col-span-7 p-4 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-display">
                Pipeline Velocity
              </div>
              <h3 className="text-xl font-bold mt-0.5 font-display">
                ₹48.6 Cr <span className="text-muted-foreground text-base font-semibold">in 6 stages</span>
              </h3>
            </div>
            <div className="flex bg-secondary p-0.5 rounded-md border border-border">
              {["7D", "30D", "90D", "YTD"].map((t, i) => (
                <button
                  key={t}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded transition-all ${
                    i === 1 ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="h-40 flex gap-2 mt-auto pt-4">
            {sparkBars.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end items-center gap-1.5 group h-full">
                <div
                  className="w-full rounded-t transition-all duration-300"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i === 9 ? "var(--primary)" : "var(--border)",
                  }}
                />
                <div className="text-[10px] font-bold text-muted-foreground shrink-0">
                  {["M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F"][i]}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
            {[
              { l: "Avg deal size", v: "₹62.4L" },
              { l: "Conv. rate", v: "7.8%" },
              { l: "Avg cycle", v: "23 days" },
            ].map((m) => (
              <div key={m.l}>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-display">
                  {m.l}
                </div>
                <div className="text-lg font-bold mt-0.5">{m.v}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* WhatsApp activity */}
        <Card className="col-span-12 lg:col-span-4 p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded-md bg-emerald-100 text-emerald-700 border border-emerald-200 grid place-items-center">
              <MessageCircle className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[13px] font-semibold">WhatsApp AI</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">Last 24h</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-4 gap-x-4">
            <div>
              <div className="text-2xl font-bold font-display">412</div>
              <div className="text-[11px] font-semibold text-muted-foreground mt-0.5">conversations</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display">8s</div>
              <div className="text-[11px] font-semibold text-muted-foreground mt-0.5">avg response</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display">94%</div>
              <div className="text-[11px] font-semibold text-muted-foreground mt-0.5">auto-resolved</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-display">23</div>
              <div className="text-[11px] font-semibold text-muted-foreground mt-0.5">visits booked</div>
            </div>
          </div>
        </Card>

        {/* Today's visits */}
        <Card className="col-span-12 lg:col-span-5 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Today's Site Visits</h3>
            <button className="text-[11px] font-bold text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors uppercase tracking-widest font-display">
              View all <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
          <ul className="space-y-2">
            {[
              { t: "10:30", n: "Priya Shah", p: "Skyline Heights, Vesu — 3BHK", a: "Nilesh K." },
              {
                t: "13:00",
                n: "Aman Trivedi",
                p: "Riverfront Residences, Adajan — 2BHK",
                a: "Dipak M.",
              },
              {
                t: "16:45",
                n: "Kunal Jain",
                p: "Marina Verde, Pal — 4BHK Penthouse",
                a: "Rajesh P.",
              },
            ].map((v) => (
              <li key={v.t} className="flex items-center gap-3 p-2.5 rounded-lg bg-secondary/50 border border-transparent hover:border-border transition-colors">
                <div className="w-14 text-center shrink-0">
                  <div className="text-base font-bold font-display">{v.t}</div>
                  <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">IST</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold truncate">{v.n}</div>
                  <div className="text-[11px] text-muted-foreground truncate mt-0.5">{v.p}</div>
                </div>
                <div className="shrink-0">
                  <Pill>{v.a}</Pill>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        {/* Inventory */}
        <Card className="col-span-12 lg:col-span-3 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest font-display">Inventory Health</div>
          </div>
          <div className="text-3xl font-bold tracking-tight font-display">1,284</div>
          <div className="text-[11px] font-semibold text-muted-foreground mt-0.5">units across 14 projects</div>
          <div className="mt-5 space-y-3">
            {[
              { l: "Available", v: 62, c: "var(--primary)" },
              { l: "Booked", v: 24, c: "var(--ring)" },
              { l: "Sold", v: 14, c: "var(--border)" },
            ].map((s) => (
              <div key={s.l}>
                <div className="flex justify-between text-[11px] font-bold mb-1">
                  <span className="text-muted-foreground">{s.l}</span>
                  <span className="text-foreground">{s.v}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${s.v}%`, background: s.c }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* AI Brain insights */}
        <Card className="col-span-12 bg-[#0B1F33] text-white p-6 relative overflow-hidden border-transparent shadow-lg mt-0">
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#0E86E9]/20 blur-[80px] pointer-events-none"
          />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest opacity-80 mb-2 font-display">
                <Sparkles className="h-3.5 w-3.5 text-[#89C4F8] glow-pulse" /> AI Brain · Daily Brief
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mt-1 max-w-2xl leading-[1.15] font-display">
                Vesu 3BHK demand jumped 32% this week. Re-prioritise{" "}
                <span className="text-gradient-blue">Skyline Heights</span> ads.
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "7 hot leads matched",
                  "Inventory: 11 of 84 left",
                  "Suggested budget +₹40k/day",
                ].map((c) => (
                  <span
                    key={c}
                    className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2.5">
              <button className="h-8 px-4 rounded-md bg-white/5 text-white text-xs font-bold border border-white/10 hover:bg-white/10 transition-colors">
                Dismiss
              </button>
              <button className="h-8 px-4 rounded-md bg-[#0E86E9] text-white text-xs font-bold hover:bg-[#0E53A0] transition-colors shadow-[0_0_20px_rgba(14,134,233,0.4)] glow-pulse">
                Apply Suggestion
              </button>
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
