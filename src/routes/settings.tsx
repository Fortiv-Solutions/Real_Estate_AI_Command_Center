import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card } from "../components/AppShell";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings · Fortiv" }] }),
  component: Settings,
});

function Settings() {
  return (
    <AppShell title="Settings" subtitle="Organisation, team, integrations and AI behaviour">
      <div className="grid grid-cols-12 gap-4">
        <Card className="col-span-12 lg:col-span-3 p-3">
          <nav className="space-y-0.5 text-[13px]">
            {[
              "Organisation",
              "Team & roles",
              "Integrations",
              "WhatsApp Business",
              "AI behaviour",
              "Billing",
              "Security",
              "Audit log",
            ].map((s, i) => (
              <button
                key={s}
                className={`w-full text-left px-3 py-2 rounded-lg ${i === 0 ? "bg-ink text-cream" : "hover:bg-muted text-foreground/80"}`}
              >
                {s}
              </button>
            ))}
          </nav>
        </Card>

        <Card className="col-span-12 lg:col-span-9 p-6">
          <h3 className="font-display text-2xl">Organisation</h3>
          <p className="text-[13px] text-muted-foreground">
            Public profile and default brand for outbound communications.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {[
              { l: "Company name", v: "Fortiv Solutions Pvt. Ltd." },
              { l: "RERA registration", v: "GJ/REA/AGT/2023/0118" },
              { l: "GSTIN", v: "24AAACF1234A1Z5" },
              { l: "Primary market", v: "Surat, Gujarat" },
              { l: "Default WhatsApp", v: "+91 99099 80008" },
              { l: "Support email", v: "ops@fortivsolutions.in" },
            ].map((f) => (
              <label key={f.l} className="block">
                <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-1.5">
                  {f.l}
                </div>
                <input
                  defaultValue={f.v}
                  className="w-full h-10 px-3 rounded-lg bg-card border border-border text-[13px] focus:outline-none focus:border-ring"
                />
              </label>
            ))}
          </div>

          <div className="mt-8">
            <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-2">
              Brand
            </div>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-lg bg-ink text-cream grid place-items-center text-2xl font-semibold">
                F
              </div>
              <div className="flex gap-2">
                <button className="h-9 px-3 rounded-lg border border-border text-[13px]">
                  Replace logo
                </button>
                <button className="h-9 px-3 rounded-lg border border-border text-[13px] text-muted-foreground">
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/60 flex justify-end gap-2">
            <button className="h-10 px-4 rounded-lg border border-border text-[13px]">
              Cancel
            </button>
            <button className="h-10 px-4 rounded-lg bg-ink text-cream text-[13px]">
              Save changes
            </button>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
