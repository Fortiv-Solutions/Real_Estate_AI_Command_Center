import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Pill } from "../components/AppShell";
import { Filter, Download, Flame, Phone, MessageCircle, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/leads")({
  head: () => ({ meta: [{ title: "Leads · Fortiv" }] }),
  component: Leads,
});

const leads = [
  {
    n: "Priya Shah",
    e: "priya.shah@gmail.com",
    p: "+91 98250 22118",
    src: "Facebook Ads",
    area: "Vesu",
    budget: "₹60–75L",
    cfg: "3BHK",
    score: 92,
    tone: "hot",
    status: "New",
    agent: "Nilesh",
  },
  {
    n: "Aman Trivedi",
    e: "amantri@outlook.com",
    p: "+91 99099 41122",
    src: "99acres",
    area: "Adajan",
    budget: "₹40–55L",
    cfg: "2BHK",
    score: 88,
    tone: "hot",
    status: "Contacted",
    agent: "Dipak",
  },
  {
    n: "Hetal Mehta",
    e: "hetalm@yahoo.in",
    p: "+91 97250 80012",
    src: "WhatsApp",
    area: "Pal",
    budget: "₹35–45L",
    cfg: "2BHK",
    score: 74,
    tone: "hot",
    status: "Qualified",
    agent: "Nilesh",
  },
  {
    n: "Kunal Jain",
    e: "kunal.j@adani.com",
    p: "+91 98980 71101",
    src: "Referral",
    area: "Katargam",
    budget: "₹1.2–1.5Cr",
    cfg: "4BHK",
    score: 96,
    tone: "hot",
    status: "Visit booked",
    agent: "Rajesh",
  },
  {
    n: "Sneha Patel",
    e: "sneha.p@gmail.com",
    p: "+91 99250 33455",
    src: "Google Ads",
    area: "Athwa",
    budget: "₹50–60L",
    cfg: "3BHK",
    score: 61,
    tone: "warm",
    status: "Nurturing",
    agent: "AI",
  },
  {
    n: "Rohan Desai",
    e: "rohan.d@gmail.com",
    p: "+91 98240 80091",
    src: "MagicBricks",
    area: "Vesu",
    budget: "₹45–55L",
    cfg: "2BHK",
    score: 54,
    tone: "warm",
    status: "Contacted",
    agent: "Dipak",
  },
  {
    n: "Megha Kothari",
    e: "megha.k@gmail.com",
    p: "+91 97250 11220",
    src: "Instagram",
    area: "Pal",
    budget: "₹30–40L",
    cfg: "1BHK",
    score: 38,
    tone: "cold",
    status: "Nurturing",
    agent: "AI",
  },
  {
    n: "Vivek Sharma",
    e: "vivek.s@tata.com",
    p: "+91 99099 80012",
    src: "FSBO Hunter",
    area: "Adajan",
    budget: "₹70–90L",
    cfg: "3BHK",
    score: 81,
    tone: "hot",
    status: "New",
    agent: "—",
  },
] as const;

function Leads() {
  return (
    <AppShell
      title="Leads"
      subtitle="284 active · 42 hot · streaming from 11 sources"
      actions={
        <>
          <button className="h-10 px-3 rounded-lg border border-border bg-card text-[13px] flex items-center gap-2">
            <Filter className="h-3.5 w-3.5" />
            Filters
          </button>
          <button className="h-10 px-3 rounded-lg border border-border bg-card text-[13px] flex items-center gap-2">
            <Download className="h-3.5 w-3.5" />
            Export
          </button>
          <button className="h-10 px-4 rounded-lg bg-ink text-cream text-[13px]">+ New lead</button>
        </>
      }
    >
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {[
          { l: "All", c: 284, active: true },
          { l: "Hot", c: 42 },
          { l: "Warm", c: 118 },
          { l: "Cold", c: 124 },
          { l: "Unassigned", c: 17 },
          { l: "Visit booked", c: 23 },
        ].map((t) => (
          <button
            key={t.l}
            className={`shrink-0 h-9 px-3.5 rounded-full text-[12px] flex items-center gap-2 border ${t.active ? "bg-ink text-cream border-ink" : "border-border bg-card hover:bg-muted"}`}
          >
            {t.l}
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded ${t.active ? "bg-cream/15" : "bg-muted"}`}
            >
              {t.c}
            </span>
          </button>
        ))}
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-[0.12em] text-muted-foreground border-b border-border/60">
                {["Lead", "Source", "Interest", "Budget", "Score", "Status", "Agent", ""].map(
                  (h) => (
                    <th key={h} className="px-4 py-3 font-medium whitespace-nowrap">
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {leads.map((l, i) => (
                <tr key={i} className="border-b border-border/40 last:border-0 hover:bg-muted/40">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-accent to-amber-200 grid place-items-center text-[11px] font-semibold text-ink">
                        {l.n
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium">{l.n}</div>
                        <div className="text-[11px] text-muted-foreground">{l.p}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <Pill>{l.src}</Pill>
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      {l.cfg} · {l.area}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium">{l.budget}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="font-display text-lg leading-none">{l.score}</div>
                      <Pill tone={l.tone}>
                        {l.tone === "hot" ? (
                          <>
                            <Flame className="h-2.5 w-2.5" />
                            Hot
                          </>
                        ) : l.tone === "warm" ? (
                          "Warm"
                        ) : (
                          "Cold"
                        )}
                      </Pill>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{l.status}</td>
                  <td className="px-4 py-3">{l.agent}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-1">
                      <button className="h-8 w-8 grid place-items-center rounded-md hover:bg-muted">
                        <Phone className="h-3.5 w-3.5" />
                      </button>
                      <button className="h-8 w-8 grid place-items-center rounded-md hover:bg-muted">
                        <MessageCircle className="h-3.5 w-3.5" />
                      </button>
                      <button className="h-8 px-2 rounded-md hover:bg-muted text-[11px] flex items-center gap-1">
                        Open <ChevronDown className="h-3 w-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-4 py-3 text-[11px] text-muted-foreground">
          <div>Showing 1–8 of 284</div>
          <div className="flex gap-1">
            <button className="h-7 px-2 rounded-md border border-border">‹</button>
            <button className="h-7 px-2 rounded-md bg-ink text-cream">1</button>
            <button className="h-7 px-2 rounded-md border border-border">2</button>
            <button className="h-7 px-2 rounded-md border border-border">3</button>
            <button className="h-7 px-2 rounded-md border border-border">›</button>
          </div>
        </div>
      </Card>
    </AppShell>
  );
}
