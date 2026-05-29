import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Stat, Pill } from "../components/AppShell";
import { ArrowUpRight, MessageCircle, Flame, Building2, Sparkles, MapPin } from "lucide-react";

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
          <button className="h-10 px-4 rounded-lg border border-border bg-card text-[13px] hover:bg-muted">
            Export
          </button>
          <button className="h-10 px-4 rounded-lg bg-ink text-cream text-[13px] flex items-center gap-2 hover:opacity-90">
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
        <Card className="col-span-12 lg:col-span-5 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Live feed
              </div>
              <h3 className="font-display text-2xl mt-0.5">Leads arriving now</h3>
            </div>
            <span className="flex items-center gap-1.5 text-[11px] text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Streaming
            </span>
          </div>
          <ul className="space-y-2">
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
            ].map((l) => (
              <li
                key={l.name}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/60 transition-colors"
              >
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-accent to-amber-200 grid place-items-center text-[12px] font-semibold text-ink">
                  {l.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-medium truncate">{l.name}</span>
                    <Pill tone={l.tone}>
                      {l.tone === "hot" ? (
                        <>
                          <Flame className="h-2.5 w-2.5" />
                          Hot
                        </>
                      ) : (
                        "Warm"
                      )}
                    </Pill>
                  </div>
                  <div className="text-[11px] text-muted-foreground flex items-center gap-1.5 mt-0.5">
                    <MapPin className="h-3 w-3" /> {l.area} · {l.source} · {l.mins}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-xl leading-none">{l.score}</div>
                  <div className="text-[10px] text-muted-foreground">score</div>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        {/* Pipeline value chart */}
        <Card className="col-span-12 lg:col-span-7 p-5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Pipeline velocity
              </div>
              <h3 className="font-display text-2xl mt-0.5">
                ₹48.6 Cr{" "}
                <span className="text-muted-foreground text-base font-sans">in 6 stages</span>
              </h3>
            </div>
            <div className="flex gap-1">
              {["7D", "30D", "90D", "YTD"].map((t, i) => (
                <button
                  key={t}
                  className={`text-[11px] px-2.5 py-1 rounded-md ${i === 1 ? "bg-ink text-cream" : "text-muted-foreground hover:bg-muted"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="h-44 flex items-end gap-1.5">
            {sparkBars.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-md"
                  style={{
                    height: `${h}%`,
                    background:
                      i === 9
                        ? "var(--accent)"
                        : "color-mix(in oklab, var(--ink) 18%, transparent)",
                  }}
                />
                <div className="text-[9px] text-muted-foreground">
                  {["M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F"][i]}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-border/60">
            {[
              { l: "Avg deal size", v: "₹62.4L" },
              { l: "Conv. rate", v: "7.8%" },
              { l: "Avg cycle", v: "23 days" },
            ].map((m) => (
              <div key={m.l}>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {m.l}
                </div>
                <div className="font-display text-xl mt-0.5">{m.v}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* WhatsApp activity */}
        <Card className="col-span-12 lg:col-span-4 p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/15 text-emerald-700 grid place-items-center">
              <MessageCircle className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[12px] font-medium">WhatsApp AI</div>
              <div className="text-[11px] text-muted-foreground">Last 24h</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="font-display text-3xl">412</div>
              <div className="text-[11px] text-muted-foreground">conversations</div>
            </div>
            <div>
              <div className="font-display text-3xl">8s</div>
              <div className="text-[11px] text-muted-foreground">avg response</div>
            </div>
            <div>
              <div className="font-display text-3xl">94%</div>
              <div className="text-[11px] text-muted-foreground">auto-resolved</div>
            </div>
            <div>
              <div className="font-display text-3xl">23</div>
              <div className="text-[11px] text-muted-foreground">visits booked</div>
            </div>
          </div>
        </Card>

        {/* Today's visits */}
        <Card className="col-span-12 lg:col-span-5 p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display text-2xl">Today's site visits</h3>
            <button className="text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-1">
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
              <li key={v.t} className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/40">
                <div className="w-14 text-center">
                  <div className="font-display text-xl">{v.t}</div>
                  <div className="text-[10px] text-muted-foreground -mt-0.5">IST</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-medium truncate">{v.n}</div>
                  <div className="text-[11px] text-muted-foreground truncate">{v.p}</div>
                </div>
                <Pill>{v.a}</Pill>
              </li>
            ))}
          </ul>
        </Card>

        {/* Inventory */}
        <Card className="col-span-12 lg:col-span-3 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            <div className="text-[12px] font-medium">Inventory health</div>
          </div>
          <div className="font-display text-4xl">1,284</div>
          <div className="text-[11px] text-muted-foreground">units across 14 projects</div>
          <div className="mt-4 space-y-2">
            {[
              { l: "Available", v: 62, c: "var(--ink)" },
              { l: "Booked", v: 24, c: "var(--accent)" },
              { l: "Sold", v: 14, c: "oklch(0.7 0.12 50)" },
            ].map((s) => (
              <div key={s.l}>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-muted-foreground">{s.l}</span>
                  <span className="font-medium">{s.v}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
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
        <Card className="col-span-12 bg-ink text-cream p-6 relative overflow-hidden">
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full"
            style={{
              background: "radial-gradient(circle, oklch(0.88 0.16 92 / 0.5), transparent 60%)",
            }}
          />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] opacity-70">
                <Sparkles className="h-3 w-3" /> AI Brain · daily brief
              </div>
              <h3 className="font-display text-3xl lg:text-4xl mt-2 max-w-2xl leading-[1.1]">
                Vesu 3BHK demand jumped 32% this week. Re-prioritise{" "}
                <span className="text-[color:var(--accent)]">Skyline Heights</span> ads.
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "7 hot leads matched",
                  "Inventory: 11 of 84 left",
                  "Suggested budget +₹40k/day",
                ].map((c) => (
                  <span
                    key={c}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-cream/10 border border-cream/15"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button className="h-10 px-4 rounded-lg bg-cream/10 text-cream text-[13px] border border-cream/15 hover:bg-cream/15">
                Dismiss
              </button>
              <button className="h-10 px-4 rounded-lg bg-accent text-ink text-[13px] font-medium hover:opacity-90">
                Apply suggestion
              </button>
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
