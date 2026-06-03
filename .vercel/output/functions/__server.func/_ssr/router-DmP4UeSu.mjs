import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, d as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-Cf9govDz.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$d = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fortiv Solutions | AI Automation" },
      { name: "description", content: "AI Native Automation & Workflow Transformation" },
      { name: "author", content: "Fortiv Solutions" },
      { property: "og:title", content: "Fortiv Solutions" },
      { property: "og:description", content: "AI Native Automation & Workflow Transformation" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@FortivSolutions" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400..800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$d.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$c = () => import("./tenants-Bb4s2sTr.mjs");
const Route$c = createFileRoute("/tenants")({
  validateSearch: (search) => {
    return {
      tab: search.tab || void 0
    };
  },
  head: () => ({
    meta: [{
      title: "Tenant & Property Management · Fortiv"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./settings-DE5WiQOM.mjs");
const Route$b = createFileRoute("/settings")({
  head: () => ({
    meta: [{
      title: "Settings · Fortiv"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./properties-DMTN2zN0.mjs");
const Route$a = createFileRoute("/properties")({
  validateSearch: (search) => {
    return {
      tab: search.tab || void 0
    };
  },
  head: () => ({
    meta: [{
      title: "Property Intelligence & Valuation · Fortiv"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./projects-C6fSO0WW.mjs");
const Route$9 = createFileRoute("/projects")({
  validateSearch: (search) => {
    return {
      tab: search.tab || void 0
    };
  },
  head: () => ({
    meta: [{
      title: "Project Intelligence · Fortiv"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./pipeline-kt9NmLfJ.mjs");
const Route$8 = createFileRoute("/pipeline")({
  validateSearch: (search) => {
    return {
      tab: search.tab || void 0
    };
  },
  head: () => ({
    meta: [{
      title: "Sales Pipeline & CRM Automation · Fortiv"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./leads-CVOYSUG6.mjs");
const Route$7 = createFileRoute("/leads")({
  validateSearch: (search) => {
    return {
      tab: search.tab || void 0
    };
  },
  head: () => ({
    meta: [{
      title: "Leads · Fortiv Command Center"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./hr-IxNQ9kcH.mjs");
const Route$6 = createFileRoute("/hr")({
  validateSearch: (search) => {
    return {
      tab: search.tab || void 0
    };
  },
  head: () => ({
    meta: [{
      title: "HR Pipeline · Fortiv"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./finance-B1oSeE7D.mjs");
const Route$5 = createFileRoute("/finance")({
  validateSearch: (search) => {
    return {
      tab: search.tab || void 0
    };
  },
  head: () => ({
    meta: [{
      title: "Finance & Accounts · Fortiv"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./conversations-C1iF3FlI.mjs");
const Route$4 = createFileRoute("/conversations")({
  validateSearch: (search) => {
    return {
      tab: search.tab || void 0
    };
  },
  head: () => ({
    meta: [{
      title: "Conversational AI & Engagement · Fortiv"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./buyers-BSb0NBDx.mjs");
const Route$3 = createFileRoute("/buyers")({
  validateSearch: (search) => {
    return {
      tab: search.tab || void 0
    };
  },
  head: () => ({
    meta: [{
      title: "Buyer Portal & Post-Sale · Fortiv"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./analytics-B6RUMA5x.mjs");
const Route$2 = createFileRoute("/analytics")({
  validateSearch: (search) => {
    return {
      tab: search.tab || void 0
    };
  },
  head: () => ({
    meta: [{
      title: "Analytics & Forecasting · Fortiv"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./ai-brain-BUfbneI-.mjs");
const Route$1 = createFileRoute("/ai-brain")({
  validateSearch: (search) => {
    return {
      tab: search.tab || void 0
    };
  },
  head: () => ({
    meta: [{
      title: "AI Brain & Security Neural Core"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-C90hSmnx.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Dashboard — Real Estate AI Command Center"
    }, {
      name: "description",
      content: "Live real estate operations command center dashboard for Indian developers."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TenantsRoute = Route$c.update({
  id: "/tenants",
  path: "/tenants",
  getParentRoute: () => Route$d
});
const SettingsRoute = Route$b.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => Route$d
});
const PropertiesRoute = Route$a.update({
  id: "/properties",
  path: "/properties",
  getParentRoute: () => Route$d
});
const ProjectsRoute = Route$9.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$d
});
const PipelineRoute = Route$8.update({
  id: "/pipeline",
  path: "/pipeline",
  getParentRoute: () => Route$d
});
const LeadsRoute = Route$7.update({
  id: "/leads",
  path: "/leads",
  getParentRoute: () => Route$d
});
const HrRoute = Route$6.update({
  id: "/hr",
  path: "/hr",
  getParentRoute: () => Route$d
});
const FinanceRoute = Route$5.update({
  id: "/finance",
  path: "/finance",
  getParentRoute: () => Route$d
});
const ConversationsRoute = Route$4.update({
  id: "/conversations",
  path: "/conversations",
  getParentRoute: () => Route$d
});
const BuyersRoute = Route$3.update({
  id: "/buyers",
  path: "/buyers",
  getParentRoute: () => Route$d
});
const AnalyticsRoute = Route$2.update({
  id: "/analytics",
  path: "/analytics",
  getParentRoute: () => Route$d
});
const AiBrainRoute = Route$1.update({
  id: "/ai-brain",
  path: "/ai-brain",
  getParentRoute: () => Route$d
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$d
});
const rootRouteChildren = {
  IndexRoute,
  AiBrainRoute,
  AnalyticsRoute,
  BuyersRoute,
  ConversationsRoute,
  FinanceRoute,
  HrRoute,
  LeadsRoute,
  PipelineRoute,
  ProjectsRoute,
  PropertiesRoute,
  SettingsRoute,
  TenantsRoute
};
const routeTree = Route$d._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$c as R,
  Route$a as a,
  Route$9 as b,
  Route$8 as c,
  Route$7 as d,
  Route$6 as e,
  Route$5 as f,
  Route$4 as g,
  Route$3 as h,
  Route$2 as i,
  Route$1 as j,
  router as r
};
