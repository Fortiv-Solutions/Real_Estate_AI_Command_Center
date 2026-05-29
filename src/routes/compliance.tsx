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
        <button className="h-10 px-4 rounded-lg bg-ink text-cream text-[13px] flex items-center gap-2">
          <Upload className="h-4 w-4" />
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
          <Card key={s.l} className="p-5">
            <div className="flex items-center justify-between">
              <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {s.l}
              </div>
              <span
                className="h-7 w-7 grid place-items-center rounded-lg"
                style={{ background: `color-mix(in oklab, ${s.c} 14%, transparent)`, color: s.c }}
              >
                {s.i}
              </span>
            </div>
            <div className="font-display text-3xl mt-2">{s.v}</div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4 mt-4">
        <Card className="col-span-12 lg:col-span-8 overflow-hidden overflow-x-auto">
          <div className="p-5 border-b border-border/60 flex justify-between items-center">
            <h3 className="font-display text-2xl">Recent documents</h3>
            <div className="flex gap-1">
              {["All", "RERA", "Agreements", "KYC", "GST"].map((t, i) => (
                <button
                  key={t}
                  className={`text-[11px] px-2.5 py-1 rounded-md ${i === 0 ? "bg-ink text-cream" : "text-muted-foreground hover:bg-muted"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <table className="w-full min-w-[760px] text-sm">
            <thead>
              <tr className="text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border/60">
                <th className="text-left font-medium px-5 py-3">Document</th>
                <th className="text-left font-medium">Type</th>
                <th className="text-left font-medium">Project</th>
                <th className="text-left font-medium">Status</th>
                <th className="text-left font-medium">Updated</th>
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
                  <td className="px-5 py-3 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    {d.n}
                  </td>
                  <td>{d.t}</td>
                  <td className="text-muted-foreground">{d.p}</td>
                  <td>
                    <Pill tone={d.tone}>{d.s}</Pill>
                  </td>
                  <td className="text-muted-foreground">2h ago</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="col-span-12 lg:col-span-4 p-5">
          <h3 className="font-display text-2xl">RERA calendar</h3>
          <div className="text-[12px] text-muted-foreground mb-4">Upcoming renewals & filings</div>
          <ul className="space-y-3">
            {(
              [
                { d: "11 Jun", t: "Skyline Heights — RERA renewal", tone: "hot" },
                { d: "23 Jun", t: "Marina Verde — Quarterly report", tone: "warm" },
                { d: "30 Jun", t: "GST Q1 filing", tone: "neutral" },
                { d: "15 Jul", t: "Riverfront — Phase 2 approval", tone: "warm" },
              ] as const
            ).map((e) => (
              <li key={e.t} className="flex gap-3 items-start">
                <div className="w-14 text-center shrink-0">
                  <div className="font-display text-lg leading-none">{e.d.split(" ")[0]}</div>
                  <div className="text-[10px] text-muted-foreground uppercase">
                    {e.d.split(" ")[1]}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <div className="text-[13px]">{e.t}</div>
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
