import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Pill } from "../components/AppShell";
import { FileText, ShieldCheck, AlertTriangle, CheckCircle2, Upload } from "lucide-react";

export const Route = createFileRoute("/compliance")({
  head: () => ({ meta: [{ title: "Compliance · Fortiv" }] }),
  component: Compliance,
});

function Compliance() {
  return (
    <AppShell
      title="Document AI & Compliance"
      subtitle="RERA, KYC, agreements, GST — auto-parsed, auto-checked, auto-flagged"
      actions={
        <button className="h-8 px-3 rounded-md bg-ink text-cream text-[10px] font-bold uppercase tracking-widest font-display flex items-center gap-1.5 shadow-sm">
          <Upload className="h-3 w-3" />
          Upload document
        </button>
      }
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            l: "Documents processed",
            v: "2,148",
            i: <FileText className="h-4 w-4" />,
            c: "var(--ink)",
          },
          {
            l: "RERA approvals active",
            v: "12 / 14",
            i: <ShieldCheck className="h-4 w-4" />,
            c: "var(--accent)",
          },
          {
            l: "Compliance issues",
            v: "6",
            i: <AlertTriangle className="h-4 w-4" />,
            c: "var(--hot)",
          },
          {
            l: "Auto-validated",
            v: "98.4%",
            i: <CheckCircle2 className="h-4 w-4" />,
            c: "var(--ink)",
          },
        ].map((s) => (
          <Card key={s.l} className="p-4">
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground font-display">
                {s.l}
              </div>
              <span
                className="h-6 w-6 grid place-items-center rounded-md"
                style={{ background: `color-mix(in oklab, ${s.c} 14%, transparent)`, color: s.c }}
              >
                {s.i}
              </span>
            </div>
            <div className="font-display text-2xl font-bold mt-1.5">{s.v}</div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4 mt-4">
        <Card className="col-span-12 lg:col-span-8 overflow-hidden overflow-x-auto">
          <div className="p-4 border-b border-border/60 flex justify-between items-center">
            <h3 className="font-display text-lg font-bold">Recent documents</h3>
            <div className="flex gap-1">
              {["All", "RERA", "Agreements", "KYC", "GST"].map((t, i) => (
                <button
                  key={t}
                  className={`text-[10px] font-bold uppercase tracking-widest font-display px-2 py-0.5 rounded ${i === 0 ? "bg-ink text-cream" : "text-muted-foreground hover:bg-muted"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <table className="w-full min-w-[760px] text-xs">
            <thead>
              <tr className="text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border/60 font-display font-bold">
                <th className="text-left px-4 py-2">Document</th>
                <th className="text-left px-4 py-2">Type</th>
                <th className="text-left px-4 py-2">Project</th>
                <th className="text-left px-4 py-2">Status</th>
                <th className="text-left px-4 py-2">Updated</th>
              </tr>
            </thead>
            <tbody>
              {(
                [
                  {
                    n: "Skyline_RERA_Renewal.pdf",
                    t: "RERA",
                    p: "Skyline Heights",
                    s: "Action required",
                    tone: "hot",
                  },
                  {
                    n: "Agreement_PriyaShah_3BHK.pdf",
                    t: "Sale Agreement",
                    p: "Skyline Heights",
                    s: "Validated",
                    tone: "accent",
                  },
                  {
                    n: "KYC_AmanTrivedi.zip",
                    t: "KYC",
                    p: "Riverfront",
                    s: "Validated",
                    tone: "accent",
                  },
                  { n: "GST_Q4_FY24.xlsx", t: "GST", p: "Org-wide", s: "Filed", tone: "neutral" },
                  {
                    n: "Marina_RERA_Q1.pdf",
                    t: "RERA",
                    p: "Marina Verde",
                    s: "Expires in 14d",
                    tone: "warm",
                  },
                  {
                    n: "Booking_KunalJain.pdf",
                    t: "Booking",
                    p: "Marina Verde",
                    s: "Validated",
                    tone: "accent",
                  },
                ] as const
              ).map((d) => (
                <tr key={d.n} className="border-b border-border/40 last:border-0 hover:bg-muted/40">
                  <td className="px-4 py-2 flex items-center gap-1.5 font-bold">
                    <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                    {d.n}
                  </td>
                  <td className="px-4 py-2">{d.t}</td>
                  <td className="px-4 py-2 text-muted-foreground">{d.p}</td>
                  <td className="px-4 py-2">
                    <Pill tone={d.tone}>{d.s}</Pill>
                  </td>
                  <td className="px-4 py-2 text-muted-foreground">2h ago</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="col-span-12 lg:col-span-4 p-4">
          <h3 className="font-display text-lg font-bold">RERA calendar</h3>
          <div className="text-[11px] font-medium text-muted-foreground mb-3">Upcoming renewals & filings</div>
          <ul className="space-y-2.5">
            {(
              [
                { d: "11 Jun", t: "Skyline Heights — RERA renewal", tone: "hot" },
                { d: "23 Jun", t: "Marina Verde — Quarterly report", tone: "warm" },
                { d: "30 Jun", t: "GST Q1 filing", tone: "neutral" },
                { d: "15 Jul", t: "Riverfront — Phase 2 approval", tone: "warm" },
              ] as const
            ).map((e) => (
              <li key={e.t} className="flex gap-2 items-start">
                <div className="w-12 text-center shrink-0">
                  <div className="font-display text-base font-bold leading-none">{e.d.split(" ")[0]}</div>
                  <div className="text-[9px] font-bold tracking-widest text-muted-foreground uppercase font-display mt-0.5">
                    {e.d.split(" ")[1]}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-bold">{e.t}</div>
                  <div className="mt-1">
                    <Pill tone={e.tone}>
                      {e.tone === "hot" ? "Urgent" : e.tone === "warm" ? "Soon" : "Scheduled"}
                    </Pill>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </AppShell>
  );
}
