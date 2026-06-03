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
        <Card className="col-span-12 lg:col-span-3 p-2">
          <nav className="space-y-0.5 text-xs font-medium">
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
                className={`w-full text-left px-3 py-1.5 rounded-md ${i === 0 ? "bg-ink text-cream" : "hover:bg-muted text-foreground/80"}`}
              >
                {s}
              </button>
            ))}
          </nav>
        </Card>

        <Card className="col-span-12 lg:col-span-9 p-5">
          <h3 className="font-display text-xl font-bold">Organisation</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Public profile and default brand for outbound communications.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-5">
            {[
              { l: "Company name", v: "Fortiv Solutions Pvt. Ltd." },
              { l: "RERA registration", v: "GJ/REA/AGT/2023/0118" },
              { l: "GSTIN", v: "24AAACF1234A1Z5" },
              { l: "Primary market", v: "Surat, Gujarat" },
              { l: "Default WhatsApp", v: "+91 99099 80008" },
              { l: "Support email", v: "ops@fortivsolutions.in" },
            ].map((f) => (
              <label key={f.l} className="block">
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground font-display mb-1.5">
                  {f.l}
                </div>
                <input
                  defaultValue={f.v}
                  className="w-full h-8 px-2.5 rounded-md bg-card border border-border text-xs font-medium focus:outline-none focus:border-ring shadow-sm"
                />
              </label>
            ))}
          </div>

          <div className="mt-6">
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground font-display mb-2">
              Brand
            </div>
            <div className="flex items-center gap-4">
              <div className="h-16 bg-slate-50 border border-border/80 rounded-md p-2 flex items-center shadow-sm">
                <img src="/logo.webp" alt="Fortiv Solutions" className="h-full object-contain" />
              </div>
              <div className="flex gap-2">
                <button className="h-8 px-2.5 rounded-md border border-border text-xs font-semibold shadow-sm hover:bg-muted/50 transition-colors">
                  Replace logo
                </button>
                <button className="h-8 px-2.5 rounded-md border border-border text-xs font-semibold text-muted-foreground hover:bg-muted/50 transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-border/60 flex justify-end gap-2">
            <button className="h-8 px-3 rounded-md border border-border text-xs font-semibold hover:bg-muted/50 transition-colors">
              Cancel
            </button>
            <button className="h-8 px-3 rounded-md bg-ink text-cream text-xs font-bold shadow-sm hover:bg-ink/90 transition-colors">
              Save changes
            </button>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
