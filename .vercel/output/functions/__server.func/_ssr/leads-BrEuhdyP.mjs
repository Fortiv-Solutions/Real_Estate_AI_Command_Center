import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, C as Card, P as Pill } from "./AppShell-BpFYqF_r.mjs";
import { d as Route$8 } from "./router-CIivQbm3.mjs";
import { a as ArrowLeft, b as ArrowRight, M as MapPin, q as CircleCheck, x as Globe, R as RefreshCw, O as Play, a2 as TriangleAlert, ab as Zap } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const mockCampaigns = [{
  campaign: "Greenview Heights Jan 2025",
  platform: "Facebook",
  leads: 34,
  cpl: 312,
  budget: 10600,
  status: "Active"
}, {
  campaign: "Surat 2BHK Google Search",
  platform: "Google Ads",
  leads: 18,
  cpl: 485,
  budget: 8730,
  status: "Active"
}, {
  campaign: "Skyline Residences Vadodara",
  platform: "Instagram",
  leads: 12,
  cpl: 278,
  budget: 3336,
  status: "Active"
}, {
  campaign: "Business Park Commercial",
  platform: "Facebook",
  leads: 7,
  cpl: 620,
  budget: 4340,
  status: "Paused"
}, {
  campaign: "Vesu Locality Awareness",
  platform: "Instagram",
  leads: 22,
  cpl: 190,
  budget: 4180,
  status: "Active"
}];
const mockPortalPerformance = [{
  portal: "99acres",
  leads: 84,
  responded: 80,
  rate: 95.2,
  status: "On Track"
}, {
  portal: "MagicBricks",
  leads: 62,
  responded: 58,
  rate: 93.5,
  status: "On Track"
}, {
  portal: "Housing.com",
  leads: 47,
  responded: 41,
  rate: 87.2,
  status: "On Track"
}, {
  portal: "NoBroker",
  leads: 29,
  responded: 24,
  rate: 82.7,
  status: "On Track"
}, {
  portal: "JustDial",
  leads: 18,
  responded: 14,
  rate: 77.7,
  status: "Warning"
}];
function LeadsManager() {
  const {
    tab
  } = Route$8.useSearch();
  const navigate = useNavigate({
    from: Route$8.fullPath
  });
  const activeTab = tab || "menu";
  const setActiveTab = (newTab) => {
    const nextTab = typeof newTab === "function" ? newTab(activeTab) : newTab;
    navigate({
      search: (prev) => ({
        ...prev,
        tab: nextTab === "menu" ? void 0 : nextTab
      })
    });
  };
  const [fsboLeads, setFsboLeads] = reactExports.useState([{
    id: "fsbo-1",
    ownerName: "Dinesh Patel",
    phone: "+91 97250 81122",
    locality: "Vesu",
    propertyType: "2BHK Flat",
    areaSqft: 1050,
    askingPrice: 54,
    pricePerSqft: 5143,
    listingDate: "15/01/2025",
    discoveredAgo: "2 hours ago",
    sourcePlatform: "JustDial",
    crmStatus: "New",
    isOffMarket: true,
    agentAssigned: "Priya Rana"
  }, {
    id: "fsbo-2",
    ownerName: "Bhavna Shah",
    phone: "+91 98250 44331",
    locality: "Adajan",
    propertyType: "3BHK Flat",
    areaSqft: 1420,
    askingPrice: 72,
    pricePerSqft: 5070,
    listingDate: "15/01/2025",
    discoveredAgo: "5 hours ago",
    sourcePlatform: "Sulekha",
    crmStatus: "New",
    isOffMarket: true,
    agentAssigned: "Ankit Shah"
  }, {
    id: "fsbo-3",
    ownerName: "Ramesh Joshi",
    phone: "+91 99099 12345",
    locality: "Pal",
    propertyType: "2BHK Flat",
    areaSqft: 980,
    askingPrice: 48,
    pricePerSqft: 4897,
    listingDate: "15/01/2025",
    discoveredAgo: "1 hour ago",
    sourcePlatform: "Quikr",
    crmStatus: "New",
    isOffMarket: true,
    agentAssigned: "Meera Patel"
  }, {
    id: "fsbo-4",
    ownerName: "Sunita Trivedi",
    phone: "+91 97240 55667",
    locality: "Vesu",
    propertyType: "Plot",
    areaSqft: 7200,
    askingPrice: 110,
    pricePerSqft: 1527,
    listingDate: "14/01/2025",
    discoveredAgo: "3 hours ago",
    sourcePlatform: "OLX",
    crmStatus: "Contacted",
    isOffMarket: false,
    agentAssigned: "Priya Rana"
  }, {
    id: "fsbo-5",
    ownerName: "Kalpesh Mehta",
    phone: "+91 98980 99887",
    locality: "Adajan",
    propertyType: "1BHK Flat",
    areaSqft: 640,
    askingPrice: 32,
    pricePerSqft: 5e3,
    listingDate: "14/01/2025",
    discoveredAgo: "6 hours ago",
    sourcePlatform: "99acres (Owner)",
    crmStatus: "New",
    isOffMarket: true,
    agentAssigned: "Ankit Shah"
  }, {
    id: "fsbo-6",
    ownerName: "Harsha Desai",
    phone: "+91 99250 11223",
    locality: "Pal",
    propertyType: "Villa",
    areaSqft: 2200,
    askingPrice: 140,
    pricePerSqft: 6363,
    listingDate: "15/01/2025",
    discoveredAgo: "30 min ago",
    sourcePlatform: "NoBroker",
    crmStatus: "New",
    isOffMarket: true,
    agentAssigned: "Meera Patel"
  }]);
  const [mapsBusinesses, setMapsBusinesses] = reactExports.useState([{
    id: "map-1",
    name: "Shree Builders",
    address: "12, Ring Road, Vesu, Surat",
    phone: "+91 261 2788900",
    website: "shreebuildersurat.com",
    rating: 4.2,
    reviews: 38,
    hours: "Mon–Sat, 10AM–7PM",
    type: "Developer",
    locality: "Vesu",
    crmStatus: "Outreach Pending",
    enriched: {
      linkedin: true,
      website: true,
      phone: true
    },
    x: 30,
    y: 40
  }, {
    id: "map-2",
    name: "Rajhans Realtors",
    address: "G-4, Green Plaza, Adajan, Surat",
    phone: "+91 261 2544211",
    website: "rajhansrealtors.com",
    rating: 3.9,
    reviews: 24,
    hours: "Mon–Sat, 9:30AM–6:30PM",
    type: "Broker",
    locality: "Adajan",
    crmStatus: "Outreach Pending",
    enriched: {
      linkedin: false,
      website: true,
      phone: true
    },
    x: 60,
    y: 30
  }, {
    id: "map-3",
    name: "Landmark Properties",
    address: "201, Shanti Tower, Pal, Surat",
    phone: "+91 98250 88776",
    website: "landmarkproperties.in",
    rating: 4.5,
    reviews: 52,
    hours: "Mon–Sat, 10AM–8PM",
    type: "Developer",
    locality: "Pal",
    crmStatus: "Contacted",
    enriched: {
      linkedin: true,
      website: true,
      phone: true
    },
    x: 45,
    y: 70
  }, {
    id: "map-4",
    name: "Surat Land Deals",
    address: "Katargam Main Rd, Katargam, Surat",
    phone: "+91 99099 22110",
    website: "suratlanddeals.com",
    rating: 4,
    reviews: 15,
    hours: "Mon–Sat, 10AM–7PM",
    type: "Land Broker",
    locality: "Katargam",
    crmStatus: "Outreach Pending",
    enriched: {
      linkedin: false,
      website: false,
      phone: true
    },
    x: 80,
    y: 20
  }, {
    id: "map-5",
    name: "Greenfield Developers",
    address: "405, VIP Plaza, Althan, Surat",
    phone: "+91 261 2900911",
    website: "greenfielddev.com",
    rating: 4.7,
    reviews: 63,
    hours: "Mon–Sat, 10AM–6:30PM",
    type: "Developer",
    locality: "Althan",
    crmStatus: "Outreach Pending",
    enriched: {
      linkedin: true,
      website: true,
      phone: true
    },
    x: 25,
    y: 75
  }, {
    id: "map-6",
    name: "Prime Realty",
    address: "S-10, Vesu Point, Vesu, Surat",
    phone: "+91 98980 44332",
    website: "primerealtysurat.in",
    rating: 3.7,
    reviews: 8,
    hours: "Mon–Sat, 10AM–7PM",
    type: "Broker",
    locality: "Vesu",
    crmStatus: "Outreach Pending",
    enriched: {
      linkedin: false,
      website: true,
      phone: true
    },
    x: 20,
    y: 55
  }, {
    id: "map-7",
    name: "Tulsi Housing",
    address: "Adajan Char Rasta, Adajan, Surat",
    phone: "+91 261 2455667",
    website: "tulsihousing.org",
    rating: 4.1,
    reviews: 19,
    hours: "24 Hours",
    type: "Society",
    locality: "Adajan",
    crmStatus: "Not Relevant",
    enriched: {
      linkedin: false,
      website: false,
      phone: true
    },
    x: 65,
    y: 50
  }, {
    id: "map-8",
    name: "SNS Land Brokers",
    address: "SNS House, Piplod, Surat",
    phone: "+91 261 2711223",
    website: "snslandbrokers.com",
    rating: 4.3,
    reviews: 29,
    hours: "Mon–Sat, 10AM–7:30PM",
    type: "Land Broker",
    locality: "Piplod",
    crmStatus: "Outreach Pending",
    enriched: {
      linkedin: true,
      website: false,
      phone: true
    },
    x: 50,
    y: 85
  }, {
    id: "map-9",
    name: "Parth Developers",
    address: "102, Pal Mall, Pal, Surat",
    phone: "+91 97250 55443",
    website: "parthdev.in",
    rating: 4.4,
    reviews: 41,
    hours: "Mon–Sat, 10AM–7PM",
    type: "Developer",
    locality: "Pal",
    crmStatus: "Contacted",
    enriched: {
      linkedin: true,
      website: true,
      phone: true
    },
    x: 70,
    y: 65
  }, {
    id: "map-10",
    name: "City Property Hub",
    address: "G-12, Laxmi Complex, Katargam, Surat",
    phone: "+91 99250 88990",
    website: "citypropertyhub.com",
    rating: 3.8,
    reviews: 12,
    hours: "Mon–Sat, 9AM–7PM",
    type: "Broker",
    locality: "Katargam",
    crmStatus: "Outreach Pending",
    enriched: {
      linkedin: false,
      website: true,
      phone: true
    },
    x: 85,
    y: 40
  }, {
    id: "map-11",
    name: "Vrundavan Builders",
    address: "VIP Road, Althan, Surat",
    phone: "+91 261 2899011",
    website: "vrundavanbuilders.com",
    rating: 4.6,
    reviews: 31,
    hours: "Mon–Sat, 10AM–7PM",
    type: "Developer",
    locality: "Althan",
    crmStatus: "Outreach Pending",
    enriched: {
      linkedin: true,
      website: true,
      phone: true
    },
    x: 35,
    y: 80
  }, {
    id: "map-12",
    name: "Om Realtors",
    address: "Adajan Road, Adajan, Surat",
    phone: "+91 98250 11445",
    website: "omrealtors.in",
    rating: 4,
    reviews: 22,
    hours: "Mon–Sat, 10AM–6:30PM",
    type: "Broker",
    locality: "Vesu",
    crmStatus: "Outreach Pending",
    enriched: {
      linkedin: false,
      website: true,
      phone: true
    },
    x: 15,
    y: 35
  }]);
  const [adsLeads, setAdsLeads] = reactExports.useState([{
    id: "ads-1",
    name: "Rajesh Patel",
    phone: "+91 98765 43210",
    email: "rajesh.patel@gmail.com",
    interest: "2BHK Flat",
    budget: "₹45–65L",
    locality: "Vesu",
    campaign: "Greenview Heights Jan 2025",
    platform: "Facebook",
    syncDurationSec: 28,
    whatsappSent: true,
    agentNotified: true,
    timestamp: "01/06/2026 11:45:12"
  }, {
    id: "ads-2",
    name: "Priya Shah",
    phone: "+91 98250 22118",
    email: "priya.shah@gmail.com",
    interest: "3BHK Flat",
    budget: "₹70–85L",
    locality: "Adajan",
    campaign: "Skyline Residences Vadodara",
    platform: "Instagram",
    syncDurationSec: 32,
    whatsappSent: true,
    agentNotified: true,
    timestamp: "01/06/2026 11:42:05"
  }, {
    id: "ads-3",
    name: "Amit Desai",
    phone: "+91 97250 80012",
    email: "amit.desai@yahoo.in",
    interest: "2BHK Flat",
    budget: "₹45–55L",
    locality: "Pal",
    campaign: "Surat 2BHK Google Search",
    platform: "Google",
    syncDurationSec: 15,
    whatsappSent: true,
    agentNotified: true,
    timestamp: "01/06/2026 11:38:19"
  }, {
    id: "ads-4",
    name: "Sunita Mehta",
    phone: "+91 99250 33455",
    email: "sunita.mehta@gmail.com",
    interest: "2BHK Flat",
    budget: "₹50–65L",
    locality: "Vesu",
    campaign: "Greenview Heights Jan 2025",
    platform: "Facebook",
    syncDurationSec: 25,
    whatsappSent: true,
    agentNotified: true,
    timestamp: "01/06/2026 11:15:47"
  }, {
    id: "ads-5",
    name: "Vikram Joshi",
    phone: "+91 99099 80012",
    email: "vikram.joshi@tata.com",
    interest: "Plot",
    budget: "₹80L–1.2Cr",
    locality: "Althan",
    campaign: "Vesu Locality Awareness",
    platform: "Instagram",
    syncDurationSec: 30,
    whatsappSent: true,
    agentNotified: true,
    timestamp: "01/06/2026 10:55:02"
  }]);
  const [portalLeads] = reactExports.useState([{
    id: "p-1",
    name: "Rajesh Patel",
    phone: "+91 98765 XXXXX",
    email: "rajesh.patel@gmail.com",
    portal: "99acres",
    interest: "2BHK, Vesu",
    budget: "₹48–60L",
    locality: "Vesu",
    message: "Inquiry for Greenview Heights",
    timestamp: "10 min ago",
    isDuplicate: false,
    assignedAgent: "Priya Rana",
    status: "New"
  }, {
    id: "p-2",
    name: "Priya Shah",
    phone: "+91 98250 22118",
    email: "priya.shah@email.com",
    portal: "MagicBricks",
    interest: "3BHK, Adajan",
    budget: "₹70–85L",
    locality: "Adajan",
    message: "Interested in Skyline Residences",
    timestamp: "25 min ago",
    isDuplicate: false,
    assignedAgent: "Ankit Shah",
    status: "Responded"
  }, {
    id: "p-3",
    name: "Amit Desai",
    phone: "+91 97250 80012",
    email: "amit.d@gmail.com",
    portal: "Housing.com",
    interest: "2BHK, Pal",
    budget: "₹45–55L",
    locality: "Pal",
    message: "Need brochure and pricing",
    timestamp: "45 min ago",
    isDuplicate: false,
    assignedAgent: "Meera Patel",
    status: "New"
  }, {
    id: "p-4",
    name: "Harsha Patel",
    phone: "+91 99250 11223",
    email: "harsha.p@gmail.com",
    portal: "99acres",
    interest: "2BHK, Vesu",
    budget: "₹50–65L",
    locality: "Vesu",
    message: "Is RERA registered?",
    timestamp: "1 hr ago",
    isDuplicate: true,
    mergedWith: "99acres + MagicBricks",
    assignedAgent: "Priya Rana",
    status: "New"
  }, {
    id: "p-5",
    name: "Meena Agarwal",
    phone: "+91 99099 11220",
    email: "meena.a@gmail.com",
    portal: "MagicBricks",
    interest: "2BHK, Adajan",
    budget: "₹48–60L",
    locality: "Adajan",
    message: "Please call back",
    timestamp: "2 hrs ago",
    isDuplicate: true,
    mergedWith: "MagicBricks + Housing.com",
    assignedAgent: "Ankit Shah",
    status: "New"
  }, {
    id: "p-6",
    name: "Vikram Joshi",
    phone: "+91 99099 80012",
    email: "vikram.j@gmail.com",
    portal: "99acres",
    interest: "Plot, Althan",
    budget: "₹80L–1.2Cr",
    locality: "Althan",
    message: "Plot details required",
    timestamp: "2 hrs ago",
    isDuplicate: false,
    assignedAgent: "Rahul Modi",
    status: "New"
  }]);
  const [enrichmentLeads, setEnrichmentLeads] = reactExports.useState([{
    id: "enr-1",
    name: "Rajesh Patel",
    phone: "+91 98765 43210",
    email: "rajesh.patel@gmail.com",
    source: "99acres",
    completeness: 87,
    enriched: true,
    operator: "Jio — Gujarat",
    whatsappActive: true,
    linkedin: "linkedin.com/in/rajeshpatel",
    designation: "VP Sales",
    company: "Adani Group",
    seniority: "Senior",
    industry: "Conglomerate / Infrastructure",
    income: "₹18–25 Lakhs/year",
    facebook: "fb.com/rajeshpatel",
    instagram: "@rajesh.patel",
    recentSearches: "Searched 2BHK Vesu (2 weeks ago)",
    intentSignal: "High",
    durationSec: 91,
    timestamp: "15/01/2025 14:26:02"
  }, {
    id: "enr-2",
    name: "Priya Shah",
    phone: "+91 98250 22118",
    email: "priya.shah@gmail.com",
    source: "Facebook",
    completeness: 91,
    enriched: true,
    operator: "Airtel — Gujarat",
    whatsappActive: true,
    linkedin: "linkedin.com/in/priyashah-hr",
    designation: "HR Manager",
    company: "Infosys",
    seniority: "Mid",
    industry: "IT / Software Services",
    income: "₹12–15 Lakhs/year",
    facebook: "fb.com/priyashah",
    instagram: "@priya.shah",
    recentSearches: "Visited Skyline Residences page",
    intentSignal: "High",
    durationSec: 84,
    timestamp: "15/01/2025 14:28:11"
  }, {
    id: "enr-3",
    name: "Amit Desai",
    phone: "+91 97250 80012",
    email: "amit.desai@yahoo.in",
    source: "MagicBricks",
    completeness: 74,
    enriched: true,
    operator: "Vodafone Idea — Gujarat",
    whatsappActive: true,
    linkedin: "linkedin.com/in/amitdesai-biz",
    designation: "Business Owner",
    company: "Desai Textiles",
    seniority: "Senior",
    industry: "Textiles / Retail",
    income: "₹25–35 Lakhs/year",
    facebook: "fb.com/amitdesai",
    instagram: "@amit.d",
    recentSearches: "Viewed 2BHK Pal price list",
    intentSignal: "Medium",
    durationSec: 95,
    timestamp: "15/01/2025 14:30:19"
  }, {
    id: "enr-4",
    name: "Sunita Mehta",
    phone: "+91 99250 33455",
    email: "sunita.mehta@gmail.com",
    source: "WhatsApp",
    completeness: 22,
    enriched: false
  }, {
    id: "enr-5",
    name: "Vikram Joshi",
    phone: "+91 99099 80012",
    email: "vikram.joshi@tata.com",
    source: "Housing.com",
    completeness: 10,
    enriched: false
  }]);
  const [scoringLeads, setScoringLeads] = reactExports.useState([{
    id: "sc-1",
    name: "Rajesh Patel",
    source: "99acres",
    score: 82,
    intent: "hot",
    property: "2BHK, Vesu",
    budget: "₹48–60L",
    lastActivity: "Opened brochure 12 min ago",
    conversionProb: 74,
    agent: "Priya Rana",
    reasons: [{
      text: "Budget matches 2BHK Vesu inventory",
      value: 12,
      positive: true
    }, {
      text: "3 portal inquiries this week",
      value: 15,
      positive: true
    }, {
      text: "WhatsApp responded within 5 minutes",
      value: 12,
      positive: true
    }, {
      text: "Brochure opened (tracked link)",
      value: 8,
      positive: true
    }, {
      text: "99acres — medium-quality source",
      value: 6,
      positive: true
    }]
  }, {
    id: "sc-2",
    name: "Priya Shah",
    source: "Facebook",
    score: 79,
    intent: "hot",
    property: "3BHK, Adajan",
    budget: "₹70–85L",
    lastActivity: "Site visit confirmed Sat",
    conversionProb: 68,
    agent: "Priya Rana",
    reasons: [{
      text: "Site visit scheduled",
      value: 20,
      positive: true
    }, {
      text: "Budget matches 3BHK Adajan inventory",
      value: 12,
      positive: true
    }, {
      text: "LinkedIn matches mid-senior HR role",
      value: 10,
      positive: true
    }, {
      text: "WhatsApp response active",
      value: 8,
      positive: true
    }]
  }, {
    id: "sc-3",
    name: "Amit Desai",
    source: "MagicBricks",
    score: 74,
    intent: "warm",
    property: "2BHK, Pal",
    budget: "₹45–55L",
    lastActivity: "Score upgraded from 61",
    conversionProb: 43,
    agent: "Ankit Shah",
    reasons: [{
      text: "Budget matches 2BHK Pal inventory",
      value: 12,
      positive: true
    }, {
      text: "2 inquiries this week",
      value: 15,
      positive: true
    }, {
      text: "Brochure opened (tracked link)",
      value: 8,
      positive: true
    }, {
      text: "No email response",
      value: -5,
      positive: false
    }]
  }, {
    id: "sc-4",
    name: "Sunita Mehta",
    source: "WhatsApp",
    score: 71,
    intent: "warm",
    property: "2BHK, Vesu",
    budget: "₹50–65L",
    lastActivity: "WhatsApp replied 1 hr ago",
    conversionProb: 38,
    agent: "Ankit Shah",
    reasons: [{
      text: "WhatsApp conversation active",
      value: 15,
      positive: true
    }, {
      text: "Budget matches 2BHK Vesu",
      value: 12,
      positive: true
    }, {
      text: "Slow response time (over 4 hrs)",
      value: -8,
      positive: false
    }]
  }, {
    id: "sc-5",
    name: "Vikram Joshi",
    source: "99acres",
    score: 68,
    intent: "warm",
    property: "Plot, Althan",
    budget: "₹80L–1.2Cr",
    lastActivity: "Viewed price list",
    conversionProb: 34,
    agent: "Rahul Modi",
    reasons: [{
      text: "Price list downloaded",
      value: 10,
      positive: true
    }, {
      text: "Budget confirmed with income",
      value: 12,
      positive: true
    }, {
      text: "First interaction",
      value: 5,
      positive: true
    }]
  }, {
    id: "sc-6",
    name: "Anita Gujarati",
    source: "Housing.com",
    score: 61,
    intent: "warm",
    property: "1BHK, Adajan",
    budget: "₹28–35L",
    lastActivity: "Inquiry submitted 3 hrs ago",
    conversionProb: 29,
    agent: "Meera Patel",
    reasons: [{
      text: "Baseline inquiry registered",
      value: 10,
      positive: true
    }, {
      text: "1BHK inventory matches budget",
      value: 12,
      positive: true
    }]
  }, {
    id: "sc-7",
    name: "Deepak Trivedi",
    source: "Referral",
    score: 88,
    intent: "hot",
    property: "3BHK, Vesu",
    budget: "₹75–90L",
    lastActivity: "2 inquiries this week",
    conversionProb: 82,
    agent: "Priya Rana",
    reasons: [{
      text: "Referral lead (high trust)",
      value: 20,
      positive: true
    }, {
      text: "Budget matches Vesu 3BHK",
      value: 12,
      positive: true
    }, {
      text: "WhatsApp active",
      value: 8,
      positive: true
    }]
  }, {
    id: "sc-8",
    name: "Kavita Agarwal",
    source: "Google Ads",
    score: 55,
    intent: "warm",
    property: "2BHK, Katargam",
    budget: "₹42–52L",
    lastActivity: "Email opened",
    conversionProb: 24,
    agent: "Meera Patel",
    reasons: [{
      text: "Google search ad inquiry",
      value: 10,
      positive: true
    }, {
      text: "Email opened",
      value: 5,
      positive: true
    }]
  }, {
    id: "sc-9",
    name: "Suresh Nair",
    source: "99acres",
    score: 47,
    intent: "warm",
    property: "Commercial, Althan",
    budget: "₹1.5–2.5Cr",
    lastActivity: "Initial inquiry only",
    conversionProb: 18,
    agent: "Rahul Modi",
    reasons: [{
      text: "High ticket commercial inquiry",
      value: 15,
      positive: true
    }, {
      text: "No social/professional footprint found",
      value: -12,
      positive: false
    }]
  }, {
    id: "sc-10",
    name: "Pooja Sharma",
    source: "Facebook",
    score: 38,
    intent: "cold",
    property: "2BHK, Adajan",
    budget: "₹50–60L",
    lastActivity: "No response for 36 hrs",
    conversionProb: 12,
    agent: "Meera Patel",
    reasons: [{
      text: "No response to first WhatsApp",
      value: -10,
      positive: false
    }, {
      text: "FB lead source lower conversion rate",
      value: -5,
      positive: false
    }]
  }, {
    id: "sc-11",
    name: "Mahesh Khanna",
    source: "JustDial",
    score: 29,
    intent: "cold",
    property: "3BHK, Gotri",
    budget: "₹90L–1.1Cr",
    lastActivity: "No WhatsApp activity",
    conversionProb: 8,
    agent: "Kiran Desai",
    reasons: [{
      text: "Unreachable on WhatsApp",
      value: -15,
      positive: false
    }, {
      text: "JustDial lead source lower conversion rate",
      value: -8,
      positive: false
    }]
  }, {
    id: "sc-12",
    name: "Ritu Bhandari",
    source: "MagicBricks",
    score: 22,
    intent: "cold",
    property: "2BHK, Vesu",
    budget: "₹45–58L",
    lastActivity: "Budget mismatch flagged",
    conversionProb: 5,
    agent: "Meera Patel",
    reasons: [{
      text: "Budget below Vesu average",
      value: -15,
      positive: false
    }, {
      text: "Stated student profile (low income)",
      value: -20,
      positive: false
    }]
  }]);
  const [selectedScoringLeadId, setSelectedScoringLeadId] = reactExports.useState("sc-1");
  const [scoreUpdateLeadId, setScoreUpdateLeadId] = reactExports.useState(null);
  const [scoreUpdateDirection, setScoreUpdateDirection] = reactExports.useState(null);
  const [fsboLocality, setFsboLocality] = reactExports.useState("All");
  const [fsboType, setFsboType] = reactExports.useState("All");
  const [selectedFsboListingId, setSelectedFsboListingId] = reactExports.useState("fsbo-1");
  const [mapsLocality, setMapsLocality] = reactExports.useState("All");
  const [mapsType, setMapsType] = reactExports.useState("All");
  const [selectedBusinessId, setSelectedBusinessId] = reactExports.useState("map-1");
  const [syncLogs, setSyncLogs] = reactExports.useState([{
    id: "log-1",
    name: "Sunita Mehta",
    platform: "Facebook",
    time: "11:15 AM",
    status: "Success ✓"
  }, {
    id: "log-2",
    name: "Vikram Joshi",
    platform: "Instagram",
    time: "10:55 AM",
    status: "Success ✓"
  }]);
  const [isSyncing, setIsSyncing] = reactExports.useState(false);
  const [syncStep, setSyncStep] = reactExports.useState(0);
  const [selectedEnrichmentLeadId, setSelectedEnrichmentLeadId] = reactExports.useState("enr-4");
  const [isEnriching, setIsEnriching] = reactExports.useState(false);
  const [enrichmentLogs, setEnrichmentLogs] = reactExports.useState([]);
  const [dashboardFeed, setDashboardFeed] = reactExports.useState([{
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
  }]);
  reactExports.useEffect(() => {
    if (activeTab !== "overview") return;
    const names = ["Arjun Malhotra", "Nisha Verma", "Sanjay Kapoor", "Suresh Nair", "Kavita Agarwal", "Deepak Trivedi", "Ritu Bhandari", "Mahesh Khanna", "Vikram Joshi", "Anita Gujarati"];
    const localities = ["Vesu, Surat", "Adajan, Surat", "Pal, Surat", "Gotri, Vadodara", "Alkapuri, Vadodara", "Althan, Surat"];
    const sources = ["99acres", "MagicBricks", "Facebook Ads", "WhatsApp", "Google Ads", "NoBroker", "Referral"];
    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLoc = localities[Math.floor(Math.random() * localities.length)];
      const randomSrc = sources[Math.floor(Math.random() * sources.length)];
      const randomScore = Math.floor(Math.random() * 50) + 45;
      const toneVal = randomScore >= 75 ? "hot" : randomScore >= 40 ? "warm" : "cold";
      const newLead = {
        name: randomName,
        area: randomLoc,
        source: randomSrc,
        score: randomScore,
        tone: toneVal,
        mins: "just now",
        isNew: true
      };
      setDashboardFeed((prev) => {
        const cleared = prev.map((l) => ({
          ...l,
          isNew: false
        }));
        return [newLead, ...cleared.slice(0, 9)];
      });
    }, 6e3);
    return () => clearInterval(interval);
  }, [activeTab]);
  reactExports.useEffect(() => {
    if (activeTab !== "1.6") return;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * scoringLeads.length);
      const targetLead = scoringLeads[randomIndex];
      const changeVal = Math.random() > 0.4 ? 1 : -1;
      const amount = Math.floor(Math.random() * 3) + 1;
      let newScore = targetLead.score + changeVal * amount;
      newScore = Math.max(15, Math.min(99, newScore));
      setScoreUpdateLeadId(targetLead.id);
      setScoreUpdateDirection(changeVal > 0 ? "up" : "down");
      setScoringLeads((prev) => {
        const updated = prev.map((l, idx) => {
          if (idx === randomIndex) {
            const toneVal = newScore >= 75 ? "hot" : newScore >= 40 ? "warm" : "cold";
            return {
              ...l,
              score: newScore,
              intent: toneVal,
              lastActivity: `Score recalculated (changed by ${changeVal > 0 ? "+" : ""}${changeVal * amount} pts)`
            };
          }
          return l;
        });
        return [...updated].sort((a, b) => b.score - a.score);
      });
      setTimeout(() => {
        setScoreUpdateLeadId(null);
        setScoreUpdateDirection(null);
      }, 1500);
    }, 4500);
    return () => clearInterval(interval);
  }, [activeTab, scoringLeads]);
  const triggerAdsSync = () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setSyncStep(1);
    const steps = [{
      step: 1,
      duration: 800
    }, {
      step: 2,
      duration: 1200
    }, {
      step: 3,
      duration: 1e3
    }, {
      step: 4,
      duration: 800
    }, {
      step: 5,
      duration: 800
    }];
    let current = 0;
    const runNextStep = () => {
      if (current >= steps.length) {
        const namesPool = ["Sanjay Kapoor", "Mahesh Khanna", "Kavita Agarwal", "Vikram Joshi", "Ritu Bhandari"];
        const selectName = namesPool[Math.floor(Math.random() * namesPool.length)];
        const platformPool = ["Facebook", "Instagram", "Google"];
        const selectPlat = platformPool[Math.floor(Math.random() * platformPool.length)];
        const newLead = {
          id: `ads-new-${Date.now()}`,
          name: selectName,
          phone: "+91 99099 55442",
          email: `${selectName.toLowerCase().replace(" ", ".")}@gmail.com`,
          interest: "3BHK Flat",
          budget: "₹85L–1.1Cr",
          locality: "Gotri",
          campaign: "Skyline Residences Vadodara",
          platform: selectPlat,
          syncDurationSec: Math.floor(Math.random() * 15) + 15,
          whatsappSent: true,
          agentNotified: true,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString()
        };
        setAdsLeads((prev) => [newLead, ...prev]);
        setSyncLogs((prev) => [{
          id: `log-${Date.now()}`,
          name: selectName,
          platform: selectPlat,
          time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          }),
          status: "Success ✓"
        }, ...prev]);
        setIsSyncing(false);
        setSyncStep(0);
        return;
      }
      setSyncStep(steps[current].step);
      setTimeout(() => {
        current++;
        runNextStep();
      }, steps[current].duration);
    };
    runNextStep();
  };
  const runEnrichment = (leadId) => {
    if (isEnriching) return;
    setIsEnriching(true);
    setEnrichmentLogs(["[1/3] Fetching phone carrier details...", "[2/3] Querying LinkedIn company registry..."]);
    setTimeout(() => {
      setEnrichmentLogs((prev) => [...prev, "[3/3] Scanning WhatsApp Business API..."]);
      setTimeout(() => {
        setEnrichmentLeads((prev) => prev.map((l) => {
          if (l.id === leadId) {
            const operator = l.id === "enr-4" ? "Jio — Gujarat" : "Airtel — Gujarat";
            const designation = l.id === "enr-4" ? "Assistant Manager" : "Lead Architect";
            const company = l.id === "enr-4" ? "TCS" : "L&T Construction";
            const income = l.id === "enr-4" ? "₹8–10 Lakhs/year" : "₹15–20 Lakhs/year";
            return {
              ...l,
              completeness: 82,
              enriched: true,
              operator,
              whatsappActive: true,
              linkedin: `linkedin.com/in/${l.name.toLowerCase().replace(" ", "")}`,
              designation,
              company,
              seniority: "Mid",
              industry: "Technology / Engineering",
              income,
              facebook: `fb.com/${l.name.toLowerCase().replace(" ", "")}`,
              instagram: `@${l.name.toLowerCase().replace(" ", ".")}`,
              recentSearches: "Searched 2BHK Adajan (3 days ago)",
              intentSignal: "High",
              durationSec: 88,
              timestamp: (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB") + " " + (/* @__PURE__ */ new Date()).toLocaleTimeString()
            };
          }
          return l;
        }));
        setIsEnriching(false);
        setEnrichmentLogs([]);
      }, 1e3);
    }, 1e3);
  };
  const renderPlatformBadge = (platform) => {
    const maps = {
      "99acres": "bg-red-50 text-red-600 border-red-200",
      "MagicBricks": "bg-amber-50 text-amber-600 border-amber-200",
      "Housing.com": "bg-sky-50 text-sky-600 border-sky-200",
      "NoBroker": "bg-emerald-50 text-emerald-600 border-emerald-200",
      "JustDial": "bg-yellow-50 text-yellow-600 border-yellow-200",
      "Facebook": "bg-blue-50 text-blue-600 border-blue-200",
      "Facebook Ads": "bg-blue-50 text-blue-600 border-blue-200",
      "Instagram": "bg-pink-50 text-pink-600 border-pink-200",
      "Google": "bg-indigo-50 text-indigo-600 border-indigo-200",
      "Google Ads": "bg-indigo-50 text-indigo-600 border-indigo-200",
      "Referral": "bg-slate-100 text-slate-600 border-slate-200",
      "FSBO Hunter": "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200",
      "Maps Scraper": "bg-cyan-50 text-cyan-600 border-cyan-200",
      "WhatsApp": "bg-emerald-50 text-emerald-600 border-emerald-200"
    };
    const cls = maps[platform] || "bg-slate-100 text-slate-600 border-slate-200";
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${cls}`, children: platform });
  };
  const filteredFSBO = reactExports.useMemo(() => {
    return fsboLeads.filter((l) => {
      if (fsboLocality !== "All" && l.locality !== fsboLocality) return false;
      if (fsboType !== "All" && !l.propertyType.includes(fsboType)) return false;
      return true;
    });
  }, [fsboLeads, fsboLocality, fsboType]);
  const selectedFsboListing = reactExports.useMemo(() => {
    return fsboLeads.find((l) => l.id === selectedFsboListingId) || fsboLeads[0];
  }, [fsboLeads, selectedFsboListingId]);
  const filteredBusinesses = reactExports.useMemo(() => {
    return mapsBusinesses.filter((b) => {
      if (mapsLocality !== "All" && b.locality !== mapsLocality) return false;
      if (mapsType !== "All" && b.type !== mapsType) return false;
      return true;
    });
  }, [mapsBusinesses, mapsLocality, mapsType]);
  const selectedBusiness = reactExports.useMemo(() => {
    return mapsBusinesses.find((b) => b.id === selectedBusinessId) || mapsBusinesses[0];
  }, [mapsBusinesses, selectedBusinessId]);
  const selectedScoringLead = reactExports.useMemo(() => {
    return scoringLeads.find((l) => l.id === selectedScoringLeadId) || scoringLeads[0];
  }, [scoringLeads, selectedScoringLeadId]);
  const selectedEnrichmentLead = reactExports.useMemo(() => {
    return enrichmentLeads.find((l) => l.id === selectedEnrichmentLeadId) || enrichmentLeads[0];
  }, [enrichmentLeads, selectedEnrichmentLeadId]);
  const renderMenuSelection = () => {
    const agentsList = [{
      id: "overview",
      type: "Overview",
      name: "Lead Center Overview",
      desc: "Helicopter view of the lead engine: live activity streaming, source metrics, and CRM scoring status.",
      stats: "47 new leads today",
      status: "Active"
    }, {
      id: "1.1",
      type: "Agent",
      name: "FSBO & Owner Listing Hunter",
      desc: "Scans classifieds/portals for direct listings.",
      stats: "6 found today",
      status: "Active"
    }, {
      id: "1.2",
      type: "Agent",
      name: "Google Maps Builder & Scraper",
      desc: "Geo-scrapes builders, developers, and brokers.",
      stats: "12 stakeholders mapped",
      status: "Active"
    }, {
      id: "1.3",
      type: "Agent",
      name: "Facebook & Google Ads Lead Sync",
      desc: "Real-time webhook syncer for paid social & search forms.",
      stats: "47 synced today",
      status: "Active"
    }, {
      id: "1.4",
      type: "Agent",
      name: "Portal Lead Aggregator",
      desc: "Consolidates listings from 99acres, MagicBricks & NoBroker.",
      stats: "20 in mailbox",
      status: "Active"
    }, {
      id: "1.5",
      type: "Agent",
      name: "Lead Enrichment Agent",
      desc: "Appends carrier, LinkedIn, income bracket in 90 seconds.",
      stats: "128 auto-enriched",
      status: "Active"
    }, {
      id: "1.6",
      type: "Agent",
      name: "AI Lead Scoring Engine",
      desc: "Calculates lead temperature 0-100 based on behavior.",
      stats: "12 Hot leads identified",
      status: "Active"
    }];
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: agentsList.map((agent) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { onClick: () => setActiveTab(agent.id), className: "submodule-card p-5 cursor-pointer flex flex-col justify-between group h-48", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold font-mono px-2 py-0.5 rounded-full uppercase border ${agent.id === "overview" ? "bg-slate-100 text-slate-600 border-slate-200" : "bg-ink/5 text-ink border-ink/10"}`, children: agent.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
            " ",
            agent.status
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground group-hover:text-ink transition-colors mt-1 font-display", children: agent.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 leading-relaxed truncate-2-lines", children: agent.desc })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 mt-4 pt-3 flex items-center justify-between text-[11px] font-bold text-muted-foreground group-hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-foreground", children: agent.stats }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5 text-ink group-hover:underline", children: [
          "Access ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })
        ] })
      ] })
    ] }, agent.id)) }) });
  };
  const renderOverview = () => {
    const categories = [{
      source: "99acres",
      leads: 84,
      rate: 28,
      color: "bg-red-500"
    }, {
      source: "Facebook Ads",
      leads: 66,
      rate: 22,
      color: "bg-blue-600"
    }, {
      source: "MagicBricks",
      leads: 45,
      rate: 15,
      color: "bg-amber-500"
    }, {
      source: "WhatsApp",
      leads: 36,
      rate: 12,
      color: "bg-emerald-500"
    }, {
      source: "Housing.com",
      leads: 27,
      rate: 9,
      color: "bg-sky-500"
    }, {
      source: "Google Ads",
      leads: 24,
      rate: 8,
      color: "bg-indigo-600"
    }, {
      source: "Referral / Other",
      leads: 18,
      rate: 6,
      color: "bg-slate-500"
    }];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Total Leads Today", value: "47", desc: "+18% since yesterday", color: "text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Hot Leads", value: "12", desc: "Ready to call now", color: "text-red-500", customElement: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full animate-ping" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Average Score", value: "68", desc: "Healthy portfolio score", color: "text-indigo-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Leads This Month", value: "312", desc: "Target: 450 leads", color: "text-emerald-600" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 flex flex-col h-[400px] border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
                " Live Lead Feed"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Leads Arriving Now" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { tone: "cold", children: "Streaming 24/7" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-none", children: dashboardFeed.map((lead, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between p-2.5 rounded-xl border transition-all duration-500 ${lead.isNew ? "bg-emerald-50/50 border-emerald-200 text-emerald-800 shadow-[0_0_12px_rgba(16,185,129,0.06)] translate-y-[-4px]" : "bg-background border-border hover:bg-secondary/40"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-secondary border border-border flex items-center justify-center font-bold text-xs shrink-0 text-foreground", children: lead.name.split(" ").map((n) => n[0]).join("") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold text-xs text-foreground flex items-center gap-1.5", children: [
                  lead.name,
                  lead.isNew && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] bg-emerald-600 text-white px-1.5 rounded font-black tracking-wider uppercase animate-pulse", children: "NEW" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground flex items-center gap-1 mt-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-2.5 w-2.5 text-slate-400" }),
                  " ",
                  lead.area
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              renderPlatformBadge(lead.source),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold font-display flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground font-medium", children: "Score:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: lead.score >= 75 ? "text-red-500 font-black" : lead.score >= 40 ? "text-amber-500" : "text-primary", children: lead.score })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground font-mono mt-0.5", children: lead.mins })
              ] })
            ] })
          ] }, `${lead.name}-${idx}`)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 flex flex-col h-[400px] border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Source distribution" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Traffic Channel Breakdown" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center items-center h-44 relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "140", height: "140", viewBox: "0 0 160 160", className: "transform -rotate-90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "80", r: "60", fill: "transparent", stroke: "#ef4444", strokeWidth: "20", strokeDasharray: "105.5 271.5", strokeDashoffset: "0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "80", r: "60", fill: "transparent", stroke: "#2563eb", strokeWidth: "20", strokeDasharray: "82.9 294.1", strokeDashoffset: "-105.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "80", r: "60", fill: "transparent", stroke: "#f59e0b", strokeWidth: "20", strokeDasharray: "56.5 320.5", strokeDashoffset: "-188.4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "80", r: "60", fill: "transparent", stroke: "#10b981", strokeWidth: "20", strokeDasharray: "45.2 331.8", strokeDashoffset: "-244.9" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "80", r: "60", fill: "transparent", stroke: "#06b6d4", strokeWidth: "20", strokeDasharray: "33.9 343.1", strokeDashoffset: "-290.1" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "80", r: "60", fill: "transparent", stroke: "#6366f1", strokeWidth: "20", strokeDasharray: "30.1 346.9", strokeDashoffset: "-324" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "80", r: "60", fill: "transparent", stroke: "#64748b", strokeWidth: "20", strokeDasharray: "22.6 354.4", strokeDashoffset: "-354.1" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-center items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black font-display text-foreground", children: "312" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-semibold", children: "Leads MTD" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-4 gap-y-1.5 border-t border-border/40 pt-3", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-muted-foreground truncate", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2.5 w-2.5 rounded-sm shrink-0 ${c.color}` }),
                c.source
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground font-mono shrink-0", children: [
                c.rate,
                "%"
              ] })
            ] }, c.source)) })
          ] })
        ] })
      ] })
    ] });
  };
  const renderFSBOHunter = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border/80 rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-1", children: "Locality" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { "aria-label": "Locality Search", value: fsboLocality, onChange: (e) => setFsboLocality(e.target.value), className: "h-8 text-xs font-semibold px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "All Localities" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Vesu", children: "Vesu" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Adajan", children: "Adajan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Pal", children: "Pal" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-1", children: "Property Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { "aria-label": "Property Type Search", value: fsboType, onChange: (e) => setFsboType(e.target.value), className: "h-8 text-xs font-semibold px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "All Types" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Flat", children: "Flats" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Plot", children: "Plots" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Villa", children: "Villas" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold text-primary font-display", children: [
          filteredFSBO.length,
          " Owner Listings Discovered"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-8 space-y-3 max-h-[550px] overflow-y-auto pr-1 scrollbar-none", children: filteredFSBO.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center border border-dashed border-border rounded-2xl text-muted-foreground text-xs bg-card", children: "No listings match the selected filters." }) : filteredFSBO.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setSelectedFsboListingId(l.id), className: `p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${selectedFsboListingId === l.id ? "bg-secondary/30 border-primary" : "bg-card border-border hover:bg-secondary/15"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-bold text-foreground", children: [
                  l.propertyType,
                  " in ",
                  l.locality
                ] }),
                l.isOffMarket && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] bg-red-50 text-red-600 font-bold px-2 py-0.5 rounded-md border border-red-200", children: "Off-Market" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1 font-medium", children: [
                l.areaSqft,
                " sq ft · Listed on ",
                l.listingDate,
                " via ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: l.sourcePlatform })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right font-display", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-base font-black text-foreground", children: [
                "₹",
                l.askingPrice,
                "L"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] text-muted-foreground", children: [
                "₹",
                l.pricePerSqft,
                "/sq ft"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border mt-4 pt-3 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-full bg-secondary flex items-center justify-center font-bold text-[10px] text-foreground border border-border", children: l.ownerName[0] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground text-xs", children: l.ownerName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-[10px]", children: l.phone })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: l.crmStatus === "Added to Pipeline" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "h-7 px-3 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-bold flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
              " Added to CRM"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
              e.stopPropagation();
              setFsboLeads((prev) => prev.map((item) => item.id === l.id ? {
                ...item,
                crmStatus: "Added to Pipeline"
              } : item));
            }, className: "h-7 px-3 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold transition-all shadow-sm", children: "Add to CRM Pipeline" }) })
          ] })
        ] }, l.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4 flex flex-col h-[550px] border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5" }),
              " GPS Geolocation"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Interactive Micro-market Map" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-secondary/30 border border-border rounded-2xl relative overflow-hidden flex items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100%", height: "100%", viewBox: "0 0 200 200", className: "absolute inset-0 select-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "20", y1: "0", x2: "20", y2: "200", stroke: "#cbd5e1", strokeWidth: "0.75", strokeDasharray: "3 3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "100", y1: "0", x2: "100", y2: "200", stroke: "#cbd5e1", strokeWidth: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "170", y1: "0", x2: "170", y2: "200", stroke: "#cbd5e1", strokeWidth: "0.75", strokeDasharray: "3 3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "40", x2: "200", y2: "40", stroke: "#cbd5e1", strokeWidth: "0.75", strokeDasharray: "3 3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "110", x2: "200", y2: "110", stroke: "#cbd5e1", strokeWidth: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "160", x2: "200", y2: "160", stroke: "#cbd5e1", strokeWidth: "0.75", strokeDasharray: "3 3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "35", y: "25", fill: "#64748b", fontSize: "7", fontWeight: "bold", fontFamily: "sans-serif", children: "ADstatus" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "35", y: "32", fill: "#475569", fontSize: "8", fontWeight: "bold", fontFamily: "sans-serif", children: "ADAJAN" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "120", y: "85", fill: "#64748b", fontSize: "7", fontWeight: "bold", fontFamily: "sans-serif", children: "VESU MAIN" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "120", y: "92", fill: "#475569", fontSize: "8", fontWeight: "bold", fontFamily: "sans-serif", children: "VESU AREA" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "35", y: "145", fill: "#64748b", fontSize: "7", fontWeight: "bold", fontFamily: "sans-serif", children: "PAL MICRO" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "35", y: "152", fill: "#475569", fontSize: "8", fontWeight: "bold", fontFamily: "sans-serif", children: "PAL DISTRICT" }),
              [{
                id: "fsbo-1",
                x: 135,
                y: 75,
                name: "Dinesh Patel (Vesu)",
                label: "1"
              }, {
                id: "fsbo-2",
                x: 45,
                y: 55,
                name: "Bhavna Shah (Adajan)",
                label: "2"
              }, {
                id: "fsbo-3",
                x: 55,
                y: 135,
                name: "Ramesh Joshi (Pal)",
                label: "3"
              }, {
                id: "fsbo-4",
                x: 155,
                y: 105,
                name: "Sunita Trivedi (Vesu)",
                label: "4"
              }, {
                id: "fsbo-5",
                x: 80,
                y: 35,
                name: "Kalpesh Mehta (Adajan)",
                label: "5"
              }, {
                id: "fsbo-6",
                x: 75,
                y: 155,
                name: "Harsha Desai (Pal)",
                label: "6"
              }].map((pin) => {
                const active = selectedFsboListingId === pin.id;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "cursor-pointer", onClick: () => setSelectedFsboListingId(pin.id), children: [
                  active && /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: pin.x, cy: pin.y, r: "10", fill: "#f43f5e", fillOpacity: "0.25", className: "animate-ping" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: pin.x, cy: pin.y, r: "6", fill: active ? "#ef4444" : "#64748b", className: "transition-all hover:scale-125" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: pin.x, y: pin.y + 2.5, fill: "#fff", fontSize: "6", fontWeight: "black", textAnchor: "middle", children: pin.label })
                ] }, pin.id);
              })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 inset-x-3 bg-card border border-border p-3 rounded-xl flex flex-col gap-1 shadow-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold text-slate-500 uppercase tracking-wider font-mono", children: "Discovered Listing Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-xs text-foreground flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedFsboListing?.propertyType }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#ef4444] font-black font-mono", children: [
                  "₹",
                  selectedFsboListing?.askingPrice,
                  "L"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 text-slate-400" }),
                " ",
                selectedFsboListing?.locality,
                " · ",
                selectedFsboListing?.ownerName
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-emerald-600 flex items-center gap-1 font-bold mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
                " ",
                selectedFsboListing?.discoveredAgo
              ] })
            ] })
          ] })
        ] })
      ] })
    ] });
  };
  const renderMapsScraper = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border/80 rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-1", children: "Locality" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { "aria-label": "Locality Select", value: mapsLocality, onChange: (e) => setMapsLocality(e.target.value), className: "h-8 text-xs font-semibold px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "All Localities" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Vesu", children: "Vesu" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Adajan", children: "Adajan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Pal", children: "Pal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Althan", children: "Althan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Katargam", children: "Katargam" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Piplod", children: "Piplod" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-1", children: "Segment Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { "aria-label": "Segment Type Select", value: mapsType, onChange: (e) => setMapsType(e.target.value), className: "h-8 text-xs font-semibold px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "All Segments" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Developer", children: "Developers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Broker", children: "Brokers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Land Broker", children: "Land Brokers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Society", children: "Societies" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-bold", children: "Target Market: Surat, Gujarat" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "h-8 px-3 rounded-lg border border-border bg-card text-foreground hover:bg-muted text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3.5 w-3.5" }),
            " Scan Google Maps"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "col-span-12 lg:col-span-8 p-0 overflow-hidden h-[550px] flex flex-col border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto flex-1 scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-secondary/40 border-b border-border", children: ["Business Details", "Segment", "Locality", "Rating", "Enrichment", "CRM Status"].map((h, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest text-muted-foreground font-display", children: h }, idx)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/60", children: filteredBusinesses.map((b) => {
            const isSelected = selectedBusinessId === b.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setSelectedBusinessId(b.id), className: `hover:bg-secondary/35 transition-colors cursor-pointer ${isSelected ? "bg-secondary/20 font-semibold border-l-2 border-primary" : ""}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-xs", children: b.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground truncate max-w-xs mt-0.5", children: b.address })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded text-[10px] font-bold ${b.type === "Developer" ? "bg-blue-50 text-blue-600 border border-blue-100" : b.type === "Broker" ? "bg-purple-50 text-purple-600 border border-purple-100" : b.type === "Land Broker" ? "bg-amber-50 text-amber-600 border border-amber-100" : "bg-emerald-50 text-emerald-600 border border-emerald-100"}`, children: b.type }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-foreground font-semibold", children: b.locality }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 font-bold text-amber-500", children: [
                "★ ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground text-[11px] font-mono", children: b.rating }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-[9px] font-mono", children: [
                  "(",
                  b.reviews,
                  ")"
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                b.enriched.linkedin && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] bg-secondary text-slate-600 border border-border font-bold px-1.5 py-0.5 rounded", children: "LinkedIn" }),
                b.enriched.website && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] bg-secondary text-slate-600 border border-border font-bold px-1.5 py-0.5 rounded", children: "Web" }),
                b.enriched.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] bg-emerald-50 text-emerald-600 font-bold px-1.5 py-0.5 rounded border border-emerald-100", children: "Active" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: b.crmStatus === "Pushed to CRM" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-bold text-[11px] flex items-center gap-1", children: "✓ Pushed" }) : b.crmStatus === "Pushing..." ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500 font-bold text-[11px] flex items-center gap-1 animate-pulse", children: "Pushing..." }) : b.crmStatus === "Not Relevant" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 font-bold text-[11px]", children: "Skipped" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
                e.stopPropagation();
                setMapsBusinesses((prev) => prev.map((item) => item.id === b.id ? {
                  ...item,
                  crmStatus: "Pushing..."
                } : item));
                setTimeout(() => {
                  setMapsBusinesses((prev) => prev.map((item) => item.id === b.id ? {
                    ...item,
                    crmStatus: "Pushed to CRM"
                  } : item));
                }, 1e3);
              }, className: "h-6 px-2 rounded bg-ink hover:bg-ink/90 text-cream text-[10px] font-bold transition-all shadow-sm", children: "Push" }) })
            ] }, b.id);
          }) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4 flex flex-col h-[550px] border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
              " Micro-market Radar"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Surat Stakeholder Blueprint" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-secondary/30 border border-border rounded-2xl relative overflow-hidden flex items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100%", height: "100%", viewBox: "0 0 200 200", className: "absolute inset-0 select-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "30", fill: "transparent", stroke: "#cbd5e1", strokeWidth: "0.75" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "60", fill: "transparent", stroke: "#cbd5e1", strokeWidth: "0.75" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "90", fill: "transparent", stroke: "#cbd5e1", strokeWidth: "0.75" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "100", y1: "100", x2: "190", y2: "100", stroke: "#0B1F33", strokeWidth: "0.5", strokeOpacity: "0.3", className: "transform origin-[100px_100px] animate-[spin_5s_linear_infinite]" }),
              filteredBusinesses.map((b) => {
                const isSelected = selectedBusinessId === b.id;
                const colors = {
                  "Developer": "#0e86e9",
                  "Broker": "#a855f7",
                  "Land Broker": "#f59e0b",
                  "Society": "#10b981"
                };
                const color = colors[b.type] || "#64748b";
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "cursor-pointer", onClick: () => setSelectedBusinessId(b.id), children: [
                  isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: b.x * 2, cy: b.y * 2, r: "8", fill: color, fillOpacity: "0.25", className: "animate-ping" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: b.x * 2, cy: b.y * 2, r: "4", fill: color, stroke: isSelected ? "#fff" : "transparent", strokeWidth: "1" })
                ] }, b.id);
              })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 inset-x-3 bg-card border border-border p-3 rounded-xl flex flex-col gap-1 shadow-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold text-slate-500 uppercase tracking-wider font-mono", children: "Google Maps Node" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-xs text-foreground flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedBusiness?.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold px-1.5 py-0.5 rounded bg-secondary text-slate-600 border border-border", children: selectedBusiness?.type })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground flex items-center gap-1 truncate font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 text-slate-400" }),
                " ",
                selectedBusiness?.address
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2 pt-2 border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-amber-500 font-bold", children: [
                  "★ ",
                  selectedBusiness?.rating,
                  " (",
                  selectedBusiness?.reviews,
                  " Google Reviews)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: selectedBusiness?.website, target: "_blank", rel: "noopener noreferrer", className: "text-[10px] text-primary hover:underline flex items-center gap-0.5 font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-2.5 w-2.5" }),
                  " Website"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] });
  };
  const renderAdsSync = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 relative overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4 border-b border-border/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Real-time Webhook" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "API Campaign Lead Sync Tunnel" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: triggerAdsSync, disabled: isSyncing, className: `h-8 px-4 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-md ${isSyncing ? "bg-secondary text-slate-400 cursor-not-allowed border border-border" : "bg-ink hover:bg-ink/90 text-cream"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: `h-3 w-3 ${isSyncing ? "animate-spin" : ""}` }),
            isSyncing ? "Webhook Syncing..." : "Simulate Incoming Ad Lead Webhook"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative py-4 flex justify-between items-center max-w-4xl mx-auto z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-0.5 bg-secondary inset-x-4 top-1/2 -translate-y-1/2 z-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-0.5 bg-ink inset-x-4 top-1/2 -translate-y-1/2 z-0 transition-all duration-1000", style: {
            width: `${isSyncing ? (syncStep - 1) * 25 : 0}%`
          } }),
          [{
            label: "Facebook Form Submit",
            step: 1,
            text: "0s · Click"
          }, {
            label: "Captured by Webhook",
            step: 2,
            text: "8s · API Parse"
          }, {
            label: "CRM Entry Created",
            step: 3,
            text: "15s · DB Log"
          }, {
            label: "WhatsApp Acknowledge",
            step: 4,
            text: "22s · SMS/WA"
          }, {
            label: "Agent Alert Notification",
            step: 5,
            text: "28s · Dispatch"
          }].map((node) => {
            const active = isSyncing && syncStep >= node.step;
            const isCurrent = isSyncing && syncStep === node.step;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center z-10 relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold border transition-all duration-500 ${isCurrent ? "bg-card text-ink border-ink scale-125 shadow-[0_0_15px_rgba(11,31,51,0.2)]" : active ? "bg-ink text-cream border-ink" : "bg-secondary text-slate-400 border-border"}`, children: node.step }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold mt-2 text-foreground", children: node.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground mt-0.5 font-mono", children: node.text })
            ] }, node.step);
          })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 h-[400px] flex flex-col border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 border-b border-border/40 pb-2 flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Sync Output" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Webhook Synced Inbound Feed" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-slate-600 bg-secondary px-2.5 py-0.5 rounded-full border border-border", children: "Avg Capture: 28 seconds" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto space-y-2 scrollbar-none", children: adsLeads.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/15 border border-border/70 rounded-xl hover:bg-secondary/35 transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-xs text-foreground flex items-center gap-1.5", children: [
                  l.name,
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-semibold text-slate-400 font-mono", children: [
                    "(",
                    l.syncDurationSec,
                    "s sync duration)"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: [
                  l.interest,
                  " · ",
                  l.locality,
                  " · ",
                  l.campaign
                ] })
              ] }),
              renderPlatformBadge(l.platform)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3 border-t border-border pt-2 text-[10px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 font-mono", children: l.timestamp }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-bold flex items-center gap-0.5", children: "✓ WhatsApp Ack" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-bold flex items-center gap-0.5", children: "✓ Agent Notified" })
              ] })
            ] })
          ] }, l.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 h-[400px] flex flex-col border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display font-bold", children: "MTD Analytics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Campaign Performance & Spend ROI" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto space-y-3 scrollbar-none text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 font-bold text-[9px] uppercase tracking-widest text-muted-foreground border-b border-border/30 pb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-5", children: "Campaign" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 text-right", children: "Leads" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 text-right", children: "CPL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 text-right", children: "Budget" })
            ] }),
            mockCampaigns.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 items-center text-foreground font-medium py-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-5 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold truncate text-[11px]", children: c.campaign }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground font-mono", children: c.platform })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 text-right font-mono font-bold text-[11px]", children: c.leads }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 text-right font-mono text-[11px]", children: [
                "₹",
                c.cpl
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 text-right font-mono font-bold text-[11px] text-primary", children: [
                "₹",
                c.budget.toLocaleString("en-IN")
              ] })
            ] }, c.campaign))
          ] })
        ] })
      ] })
    ] });
  };
  const renderPortalAggregator = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between gap-3 text-amber-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 shrink-0 text-amber-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Deduplication Warning:" }),
            " 3 potential duplicate inquiries were detected and merged today."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest bg-amber-100 text-amber-700 border border-amber-200 px-2 py-0.5 rounded", children: "3 Merged" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-8 p-0 overflow-hidden h-[500px] flex flex-col border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-secondary/20 border-b border-border flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs text-foreground", children: "Unified Portal Lead Inbox" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-bold", children: "20 leads in feed" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto divide-y divide-border/60 scrollbar-none", children: portalLeads.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 hover:bg-secondary/15 transition-colors flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-full bg-secondary border border-border flex items-center justify-center font-bold text-[10px] text-slate-600 shrink-0", children: l.name[0] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-xs text-foreground flex items-center gap-1.5 flex-wrap", children: [
                  l.name,
                  l.isDuplicate && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded font-bold tracking-wider uppercase flex items-center gap-0.5", children: [
                    "Merged (",
                    l.mergedWith,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mt-0.5 font-medium", children: [
                  l.interest,
                  " · ",
                  l.locality,
                  " · Budget: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: l.budget })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-slate-500 bg-secondary/40 p-2 rounded-lg mt-2 border border-border max-w-md font-medium", children: [
                  '"',
                  l.message,
                  '"'
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0 flex flex-col items-end gap-1.5", children: [
              renderPlatformBadge(l.portal),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-400 font-mono", children: l.timestamp }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold text-slate-500 font-mono", children: [
                "Agent: ",
                l.assignedAgent
              ] })
            ] })
          ] }, l.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4 h-[500px] flex flex-col border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display font-bold", children: "Algorithms Metric" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Portal Response Rate Tracker" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-1", children: "If response rates drop below targets, listings get demoted in search results." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 space-y-4 pt-2", children: mockPortalPerformance.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground flex items-center gap-1", children: [
                p.portal,
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground font-mono", children: [
                  "(",
                  p.leads,
                  " leads)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[10px] font-bold px-2 py-0.5 rounded ${p.status === "On Track" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-50 text-red-600 border border-red-100"}`, children: [
                p.rate,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-secondary overflow-hidden flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full transition-all duration-500 ${p.status === "On Track" ? "bg-ink" : "bg-red-500"}`, style: {
              width: `${p.rate}%`
            } }) })
          ] }, p.portal)) })
        ] })
      ] })
    ] });
  };
  const renderEnrichmentAgent = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border/80 rounded-2xl text-xs font-bold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-500", children: [
            "Enriched Today: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "128" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-500", children: [
            "Avg Completeness: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "79%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-500", children: [
            "Avg Timing: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "88 sec" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => runEnrichment(selectedEnrichmentLeadId), disabled: isEnriching || selectedEnrichmentLead.enriched, className: `h-8 px-3.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${selectedEnrichmentLead.enriched ? "bg-secondary text-slate-400 border border-border cursor-not-allowed" : isEnriching ? "bg-secondary text-slate-400 cursor-not-allowed border border-border" : "bg-ink hover:bg-ink/90 text-cream shadow-sm"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `h-3.5 w-3.5 ${isEnriching ? "animate-spin" : ""}` }),
          selectedEnrichmentLead.enriched ? "Profile Fully Enriched" : isEnriching ? "Running Enrichment Agent..." : "Run AI Enrichment"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-0 overflow-hidden h-[500px] flex flex-col border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/20 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs text-foreground", children: "Enrichment Pipeline Queue" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto divide-y divide-border/60 scrollbar-none", children: enrichmentLeads.map((l) => {
            const active = selectedEnrichmentLeadId === l.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setSelectedEnrichmentLeadId(l.id), className: `p-3 transition-colors cursor-pointer flex items-center justify-between gap-3 ${active ? "bg-secondary/25" : "hover:bg-secondary/10"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xs text-foreground truncate", children: l.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500 font-mono mt-0.5", children: l.phone })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1.5 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full transition-all ${l.completeness >= 85 ? "bg-emerald-500" : l.completeness >= 60 ? "bg-ink" : l.completeness >= 40 ? "bg-amber-500" : "bg-red-500"}`, style: {
                  width: `${l.completeness}%`
                } }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold font-mono text-foreground w-8 text-right", children: [
                  l.completeness,
                  "%"
                ] })
              ] })
            ] }, l.id);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-8 p-4 h-[500px] flex flex-col border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Expansion View" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-foreground", children: [
              selectedEnrichmentLead.name,
              " Profile Profiling"
            ] })
          ] }),
          isEnriching ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-[#030712] border border-border rounded-2xl p-6 flex flex-col justify-center items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-8 w-8 text-ink animate-spin mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 text-center font-mono text-xs w-full max-w-sm", children: enrichmentLogs.map((log, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-300", children: log }, idx)) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/15 border border-border/80 p-4 rounded-xl flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-black tracking-widest uppercase text-slate-400 mb-2 font-mono", children: "Raw Lead (Before Enrichment)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[10px] font-semibold", children: "Name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: selectedEnrichmentLead.name })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[10px] font-semibold", children: "Phone" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground font-mono", children: selectedEnrichmentLead.phone })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[10px] font-semibold", children: "Source" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: selectedEnrichmentLead.source })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/40 p-2.5 border border-border rounded-lg text-[10px] text-slate-500 font-bold text-center", children: [
                "Completeness: ",
                selectedEnrichmentLead.id === "enr-4" ? "22%" : selectedEnrichmentLead.id === "enr-5" ? "10%" : "12%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-2 border-ink/20 p-4 rounded-xl flex flex-col justify-between shadow-sm", children: selectedEnrichmentLead.enriched ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] font-black tracking-widest uppercase text-slate-500 mb-2 font-mono flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI Enriched Record" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-600", children: [
                    "✓ Enriched in ",
                    selectedEnrichmentLead.durationSec,
                    "s"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[9px] font-semibold", children: "WhatsApp status" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-emerald-600 flex items-center gap-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
                      " Active WhatsApp"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[9px] font-semibold", children: "Carrier / Operator" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: selectedEnrichmentLead.operator })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[9px] font-semibold", children: "LinkedIn Profile" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-ink hover:underline font-mono truncate", children: selectedEnrichmentLead.linkedin })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[9px] font-semibold", children: "Designation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: selectedEnrichmentLead.designation })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[9px] font-semibold", children: "Company" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: selectedEnrichmentLead.company })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[9px] font-semibold", children: "Estimated Income" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground font-mono", children: selectedEnrichmentLead.income })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-[9px] font-semibold", children: "Property Intent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground truncate font-medium", children: selectedEnrichmentLead.recentSearches })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-emerald-50 text-emerald-700 p-2.5 border border-emerald-100 rounded-lg text-[10px] font-bold text-center", children: [
                "Total Completeness: ",
                selectedEnrichmentLead.completeness,
                "%"
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-center items-center text-center p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-8 w-8 text-primary opacity-65 mb-2 animate-bounce" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs text-foreground", children: "Outreach Profile Missing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-500 mt-1 max-w-[200px] font-semibold", children: "Click the button above to run the AI crawler and enrich fields." })
            ] }) })
          ] })
        ] })
      ] })
    ] });
  };
  const renderScoringEngine = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-card border border-border text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-slate-400 font-display", children: "Active Leads" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold mt-1 text-foreground font-mono", children: "47" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-card border border-border text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-red-500 font-display", children: "Hot (75–100)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold mt-1 text-red-500 font-mono", children: "12" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-card border border-border text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-amber-500 font-display", children: "Warm (40–74)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold mt-1 text-amber-500 font-mono", children: "23" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-card border border-border text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-primary font-display", children: "Cold (0–39)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold mt-1 text-primary font-mono", children: "12" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-card border border-border text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-indigo-600 font-display", children: "Avg Score" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold mt-1 text-indigo-500 font-mono", children: "68" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "col-span-12 lg:col-span-8 p-0 overflow-hidden h-[450px] flex flex-col border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto flex-1 scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-secondary/40 border-b border-border", children: ["Lead Name", "Source", "Score", "Intent", "Property & Budget", "Agent", "Last Signal"].map((h, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest text-muted-foreground font-display", children: h }, idx)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/60", children: scoringLeads.map((l) => {
            const isSelected = selectedScoringLeadId === l.id;
            const isUpdated = scoreUpdateLeadId === l.id;
            const upCls = scoreUpdateDirection === "up" ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setSelectedScoringLeadId(l.id), className: `hover:bg-secondary/15 transition-colors cursor-pointer ${isSelected ? "bg-secondary/20" : ""} ${isUpdated ? upCls + " transition-none" : ""}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-bold text-foreground", children: l.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: renderPlatformBadge(l.source) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold font-mono text-[11px] w-5 text-right text-foreground", children: l.score }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-1 bg-secondary rounded-full overflow-hidden border border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full transition-all ${l.score >= 75 ? "bg-red-500" : l.score >= 40 ? "bg-amber-500" : "bg-ink"}`, style: {
                  width: `${l.score}%`
                } }) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${l.intent === "hot" ? "bg-red-50 text-red-600 border border-red-100" : l.intent === "warm" ? "bg-amber-50 text-amber-600" : "bg-sky-50 text-sky-600"}`, children: l.intent }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: l.property }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-medium", children: l.budget })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-foreground font-bold", children: l.agent }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-muted-foreground text-[10px] max-w-[150px] truncate font-medium", children: l.lastActivity })
            ] }, l.id);
          }) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4 h-[450px] flex flex-col justify-between border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 border-b border-border/40 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Score Breakdown" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-foreground", children: [
                selectedScoringLead?.name,
                " Model"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 overflow-y-auto max-h-[280px] scrollbar-none pr-1", children: selectedScoringLead?.reasons.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-3 text-xs bg-secondary/30 p-2 border border-border rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-600 font-semibold", children: r.text }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-mono font-bold shrink-0 text-[10px] ${r.positive ? "text-emerald-600" : "text-red-500"}`, children: [
                r.positive ? "+" : "",
                r.value
              ] })
            ] }, idx)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3 mt-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Total Derived Score:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-lg font-black ${(selectedScoringLead?.score || 0) >= 75 ? "text-red-500" : (selectedScoringLead?.score || 0) >= 40 ? "text-amber-500" : "text-ink"}`, children: selectedScoringLead?.score })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 h-8 rounded-lg bg-secondary hover:bg-secondary/70 text-foreground text-xs font-bold border border-border transition-colors", children: "Contact" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 h-8 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold shadow-sm transition-all", children: "Schedule visit" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 flex flex-col h-[280px] border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 border-b border-border/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Model Calibration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Average Lead Quality Score by Channel" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-end gap-3.5 px-2 pt-4", children: [{
          source: "Referral",
          score: 76,
          color: "bg-indigo-500"
        }, {
          source: "WhatsApp Organic",
          score: 69,
          color: "bg-emerald-500"
        }, {
          source: "99acres",
          score: 58,
          color: "bg-red-500"
        }, {
          source: "MagicBricks",
          score: 55,
          color: "bg-amber-500"
        }, {
          source: "Google Ads",
          score: 52,
          color: "bg-indigo-600"
        }, {
          source: "Housing.com",
          score: 49,
          color: "bg-sky-500"
        }, {
          source: "Facebook Lead Ads",
          score: 45,
          color: "bg-blue-600"
        }, {
          source: "JustDial",
          score: 41,
          color: "bg-yellow-500"
        }, {
          source: "NoBroker",
          score: 38,
          color: "bg-emerald-600"
        }].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center gap-2 group h-full justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-foreground font-mono opacity-0 group-hover:opacity-100 transition-opacity", children: item.score }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full rounded-t transition-all duration-300 relative ${item.color} opacity-80 group-hover:opacity-100 hover:shadow-[0_0_15px_rgba(0,0,0,0.05)]`, style: {
            height: `${item.score}%`
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold text-muted-foreground truncate w-full text-center tracking-tight mt-1 select-none", children: item.source })
        ] }, idx)) })
      ] })
    ] });
  };
  const getPageHeader = () => {
    switch (activeTab) {
      case "menu":
        return {
          title: "Leads",
          subtitle: "Autonomous acquisition engine scanner scanning classifieds, maps, advertising forms, and portals."
        };
      case "overview":
        return {
          title: "Lead Center Overview",
          subtitle: "Live operations metrics dashboard for Indian real estate buyers."
        };
      case "1.1":
        return {
          title: "FSBO & Owner Listing Hunter",
          subtitle: "Scans classifieds/portals for direct listings."
        };
      case "1.2":
        return {
          title: "Google Maps Builder & Scraper",
          subtitle: "Geo-scrapes builders, developers, and brokers."
        };
      case "1.3":
        return {
          title: "Facebook & Google Ads Lead Sync",
          subtitle: "Real-time webhook syncer for paid social & search forms."
        };
      case "1.4":
        return {
          title: "Portal Lead Aggregator",
          subtitle: "Consolidates listings from 99acres, MagicBricks & NoBroker."
        };
      case "1.5":
        return {
          title: "Lead Enrichment Agent",
          subtitle: "Appends carrier, LinkedIn, income bracket in 90 seconds."
        };
      case "1.6":
        return {
          title: "AI Lead Scoring Engine",
          subtitle: "Calculates lead temperature 0-100 based on behavior."
        };
      default:
        return {
          title: "Leads",
          subtitle: "Autonomous acquisition engine."
        };
    }
  };
  const headerInfo = getPageHeader();
  const dynamicTitle = activeTab === "menu" ? headerInfo.title : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("menu"), className: "h-8 w-8 rounded-full border border-border bg-card hover:bg-muted text-foreground flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm mr-0.5", "aria-label": "Back to Leads menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 stroke-[2.5]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors", onClick: () => setActiveTab("menu"), children: headerInfo.title })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: dynamicTitle, subtitle: headerInfo.subtitle, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "transition-all duration-300", children: [
    activeTab === "menu" && renderMenuSelection(),
    activeTab === "overview" && renderOverview(),
    activeTab === "1.1" && renderFSBOHunter(),
    activeTab === "1.2" && renderMapsScraper(),
    activeTab === "1.3" && renderAdsSync(),
    activeTab === "1.4" && renderPortalAggregator(),
    activeTab === "1.5" && renderEnrichmentAgent(),
    activeTab === "1.6" && renderScoringEngine()
  ] }) });
}
function StatBox({
  label,
  value,
  desc,
  color,
  customElement
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 flex flex-col justify-between relative min-h-24 border border-border bg-card", children: [
    customElement,
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-400 font-display", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-baseline justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-2xl font-bold tracking-tight ${color}`, children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold text-muted-foreground", children: desc })
    ] })
  ] });
}
export {
  LeadsManager as component
};
