import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, C as Card } from "./AppShell-K5gzIK3d.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/cmdk.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/lucide-react.mjs";
function Settings() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: "Settings", subtitle: "Organisation, team, integrations and AI behaviour", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "col-span-12 lg:col-span-3 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-0.5 text-xs font-medium", children: ["Organisation", "Team & roles", "Integrations", "WhatsApp Business", "AI behaviour", "Billing", "Security", "Audit log"].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `w-full text-left px-3 py-1.5 rounded-md ${i === 0 ? "bg-ink text-cream" : "hover:bg-muted text-foreground/80"}`, children: s }, s)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-9 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: "Organisation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Public profile and default brand for outbound communications." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4 mt-5", children: [{
        l: "Company name",
        v: "Fortiv Solutions Pvt. Ltd."
      }, {
        l: "RERA registration",
        v: "GJ/REA/AGT/2023/0118"
      }, {
        l: "GSTIN",
        v: "24AAACF1234A1Z5"
      }, {
        l: "Primary market",
        v: "Surat, Gujarat"
      }, {
        l: "Default WhatsApp",
        v: "+91 99099 80008"
      }, {
        l: "Support email",
        v: "ops@fortivsolutions.in"
      }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-display mb-1.5", children: f.l }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { defaultValue: f.v, className: "w-full h-8 px-2.5 rounded-md bg-card border border-border text-xs font-medium focus:outline-none focus:border-ring shadow-sm" })
      ] }, f.l)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-display mb-2", children: "Brand" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 bg-slate-50 border border-border/80 rounded-md p-2 flex items-center shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.webp", alt: "Fortiv Solutions", className: "h-full object-contain" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "h-8 px-2.5 rounded-md border border-border text-xs font-semibold shadow-sm hover:bg-muted/50 transition-colors", children: "Replace logo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "h-8 px-2.5 rounded-md border border-border text-xs font-semibold text-muted-foreground hover:bg-muted/50 transition-colors", children: "Remove" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-5 border-t border-border/60 flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "h-8 px-3 rounded-md border border-border text-xs font-semibold hover:bg-muted/50 transition-colors", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "h-8 px-3 rounded-md bg-ink text-cream text-xs font-bold shadow-sm hover:bg-ink/90 transition-colors", children: "Save changes" })
      ] })
    ] })
  ] }) });
}
export {
  Settings as component
};
