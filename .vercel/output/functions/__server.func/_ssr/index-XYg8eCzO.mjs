import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppShell, S as Stat, C as Card, P as Pill } from "./AppShell-BpFYqF_r.mjs";
import { w as Flame, J as MessageCircle, c as ArrowUpRight, g as Building2, Z as Sparkles, u as Download } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-tooltip.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
const sparkBars = [32, 48, 28, 55, 41, 68, 52, 74, 60, 82, 71, 88];
function Dashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { title: "Good morning, Rajesh", subtitle: "Tuesday, 28 May · 14 new leads since you logged off · 3 site visits today", actions: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "h-9 px-4 rounded-lg border border-border bg-card text-[13px] font-semibold hover:bg-muted transition-colors flex items-center gap-2 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
      " Export"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "h-9 px-4 rounded-lg bg-[#0E86E9] text-white text-[13px] font-semibold flex items-center gap-2 hover:bg-[#0E53A0] transition-colors shadow-[0_0_15px_rgba(14,134,233,0.3)] glow-pulse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
      " Ask AI Brain"
    ] })
  ] }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Leads · this week", value: "284", delta: "+18.2%", tone: "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Hot leads", value: "42", delta: "+6", tone: "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Site visits", value: "37", delta: "−2", tone: "down" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Pipeline value", value: "₹48.6Cr", delta: "+₹3.2Cr", tone: "up" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-12 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-display", children: "Live Feed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mt-0.5", children: "Leads arriving now" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
            " Streaming"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 flex-1 overflow-y-auto pr-1", children: [{
          name: "Priya Shah",
          area: "Vesu, Surat",
          source: "Facebook Ads",
          score: 88,
          tone: "hot",
          mins: "just now"
        }, {
          name: "Aman Trivedi",
          area: "Adajan, Surat",
          source: "99acres",
          score: 74,
          tone: "hot",
          mins: "2 min ago"
        }, {
          name: "Hetal Mehta",
          area: "Pal, Surat",
          source: "WhatsApp",
          score: 61,
          tone: "warm",
          mins: "6 min ago"
        }, {
          name: "Kunal Jain",
          area: "Katargam",
          source: "Referral",
          score: 92,
          tone: "hot",
          mins: "11 min ago"
        }, {
          name: "Sneha Patel",
          area: "Athwa",
          source: "Google Ads",
          score: 44,
          tone: "warm",
          mins: "18 min ago"
        }].map((l, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2.5 p-2 rounded-lg hover:bg-secondary/60 transition-colors border border-transparent hover:border-border cursor-pointer group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-secondary border border-border grid place-items-center text-xs font-bold text-secondary-foreground", children: l.name.split(" ").map((n) => n[0]).join("") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-foreground truncate group-hover:text-primary transition-colors", children: l.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold leading-none", children: l.score }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground flex items-center gap-1.5", children: [
                l.area,
                " · ",
                l.source
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { tone: l.tone, children: l.tone === "hot" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3 w-3" }),
                "Hot"
              ] }) : "Warm" })
            ] })
          ] })
        ] }, l.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-display", children: "Pipeline Velocity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-bold mt-0.5 font-display", children: [
              "₹48.6 Cr ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-base font-semibold", children: "in 6 stages" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex bg-secondary p-0.5 rounded-md border border-border", children: ["7D", "30D", "90D", "YTD"].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `text-[11px] font-semibold px-2.5 py-1 rounded transition-all ${i === 1 ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`, children: t }, t)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-40 flex gap-2 mt-auto pt-4", children: sparkBars.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-end items-center gap-1.5 group h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-t transition-all duration-300", style: {
            height: `${h}%`,
            backgroundColor: i === 9 ? "var(--primary)" : "var(--border)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-muted-foreground shrink-0", children: ["M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F"][i] })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border", children: [{
          l: "Avg deal size",
          v: "₹62.4L"
        }, {
          l: "Conv. rate",
          v: "7.8%"
        }, {
          l: "Avg cycle",
          v: "23 days"
        }].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-display", children: m.l }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold mt-0.5", children: m.v })
        ] }, m.l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-md bg-emerald-100 text-emerald-700 border border-emerald-200 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold", children: "WhatsApp AI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-0.5", children: "Last 24h" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-y-4 gap-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display", children: "412" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold text-muted-foreground mt-0.5", children: "conversations" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display", children: "8s" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold text-muted-foreground mt-0.5", children: "avg response" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display", children: "94%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold text-muted-foreground mt-0.5", children: "auto-resolved" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold font-display", children: "23" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold text-muted-foreground mt-0.5", children: "visits booked" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Today's Site Visits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "text-[11px] font-bold text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors uppercase tracking-widest font-display", children: [
            "View all ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [{
          t: "10:30",
          n: "Priya Shah",
          p: "Skyline Heights, Vesu — 3BHK",
          a: "Nilesh K."
        }, {
          t: "13:00",
          n: "Aman Trivedi",
          p: "Riverfront Residences, Adajan — 2BHK",
          a: "Dipak M."
        }, {
          t: "16:45",
          n: "Kunal Jain",
          p: "Marina Verde, Pal — 4BHK Penthouse",
          a: "Rajesh P."
        }].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 p-2.5 rounded-lg bg-secondary/50 border border-transparent hover:border-border transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-14 text-center shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold font-display", children: v.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5", children: "IST" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold truncate", children: v.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground truncate mt-0.5", children: v.p })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { children: v.a }) })
        ] }, v.t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-3 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-muted-foreground uppercase tracking-widest font-display", children: "Inventory Health" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold tracking-tight font-display", children: "1,284" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold text-muted-foreground mt-0.5", children: "units across 14 projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-3", children: [{
          l: "Available",
          v: 62,
          c: "var(--primary)"
        }, {
          l: "Booked",
          v: 24,
          c: "var(--ring)"
        }, {
          l: "Sold",
          v: 14,
          c: "var(--border)"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[11px] font-bold mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: s.l }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
              s.v,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full", style: {
            width: `${s.v}%`,
            background: s.c
          } }) })
        ] }, s.l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 bg-[#0B1F33] text-white p-6 relative overflow-hidden border-transparent shadow-lg mt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#0E86E9]/20 blur-[80px] pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-[1fr_auto] gap-6 items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest opacity-80 mb-2 font-display", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-[#89C4F8] glow-pulse" }),
              " AI Brain · Daily Brief"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl lg:text-3xl font-bold mt-1 max-w-2xl leading-[1.15] font-display", children: [
              "Vesu 3BHK demand jumped 32% this week. Re-prioritise",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-blue", children: "Skyline Heights" }),
              " ads."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-4", children: ["7 hot leads matched", "Inventory: 11 of 84 left", "Suggested budget +₹40k/day"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm", children: c }, c)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "h-8 px-4 rounded-md bg-white/5 text-white text-xs font-bold border border-white/10 hover:bg-white/10 transition-colors", children: "Dismiss" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "h-8 px-4 rounded-md bg-[#0E86E9] text-white text-xs font-bold hover:bg-[#0E53A0] transition-colors shadow-[0_0_20px_rgba(14,134,233,0.4)] glow-pulse", children: "Apply Suggestion" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  Dashboard as component
};
