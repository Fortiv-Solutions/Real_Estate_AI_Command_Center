import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell, Card, Pill } from "../components/AppShell";
import { 
  Filter, 
  Download, 
  Flame, 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  MoreHorizontal, 
  Layers, 
  MapPin, 
  Globe, 
  Sparkles, 
  Play, 
  RefreshCw, 
  AlertTriangle, 
  CheckCircle2, 
  User, 
  Clock, 
  Search, 
  Check, 
  ArrowRight,
  TrendingUp,
  Activity,
  Zap,
  Building,
  ArrowLeft,
  ChevronLeft
} from "lucide-react";
import { useState, useMemo, useEffect } from "react";

// Route declaration
export const Route = createFileRoute("/leads")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tab: (search.tab as string) || undefined,
    };
  },
  head: () => ({ meta: [{ title: "Leads · Fortiv Command Center" }] }),
  component: LeadsManager,
});

// Types definitions
interface FSBOListing {
  id: string;
  ownerName: string;
  phone: string;
  locality: string;
  propertyType: string;
  areaSqft: number;
  askingPrice: number; // in lakhs
  pricePerSqft: number;
  listingDate: string;
  discoveredAgo: string;
  sourcePlatform: string;
  crmStatus: "New" | "Added to Pipeline" | "Contacted";
  isOffMarket: boolean;
  agentAssigned: string;
}

interface MapsBusiness {
  id: string;
  name: string;
  address: string;
  phone: string;
  website: string;
  rating: number;
  reviews: number;
  hours: string;
  type: "Developer" | "Broker" | "Land Broker" | "Society";
  locality: string;
  crmStatus: "Outreach Pending" | "Pushing..." | "Pushed to CRM" | "Not Relevant" | "Contacted";
  enriched: {
    linkedin: boolean;
    website: boolean;
    phone: boolean;
  };
  x: number; // relative SVG coord
  y: number; // relative SVG coord
}

interface AdsLead {
  id: string;
  name: string;
  phone: string;
  email: string;
  interest: string;
  budget: string;
  locality: string;
  campaign: string;
  platform: "Facebook" | "Instagram" | "Google";
  syncDurationSec: number;
  whatsappSent: boolean;
  agentNotified: boolean;
  timestamp: string;
}

interface PortalLead {
  id: string;
  name: string;
  phone: string;
  email: string;
  portal: "99acres" | "MagicBricks" | "Housing.com" | "NoBroker" | "JustDial" | "Google Ads" | "Facebook";
  interest: string;
  budget: string;
  locality: string;
  message: string;
  timestamp: string;
  isDuplicate: boolean;
  mergedWith?: string;
  assignedAgent: string;
  status: "New" | "Responded" | "Qualified";
}

interface EnrichmentLead {
  id: string;
  name: string;
  phone: string;
  email: string;
  source: string;
  completeness: number;
  enriched: boolean;
  operator?: string;
  whatsappActive?: boolean;
  linkedin?: string;
  designation?: string;
  company?: string;
  seniority?: "Junior" | "Mid" | "Senior" | "C-Suite";
  industry?: string;
  income?: string;
  facebook?: string;
  instagram?: string;
  recentSearches?: string;
  intentSignal?: "High" | "Medium" | "Low";
  durationSec?: number;
  timestamp?: string;
}

interface ScoringLead {
  id: string;
  name: string;
  source: string;
  score: number;
  intent: "hot" | "warm" | "cold";
  property: string;
  budget: string;
  lastActivity: string;
  conversionProb: number;
  agent: string;
  reasons: { text: string; value: number; positive: boolean }[];
}

type TabType = "menu" | "overview" | "1.1" | "1.2" | "1.3" | "1.4" | "1.5" | "1.6";

// Static mock data constants used inside submodules
const mockCampaigns = [
  { campaign: "Greenview Heights Jan 2025", platform: "Facebook", leads: 34, cpl: 312, budget: 10600, status: "Active" },
  { campaign: "Surat 2BHK Google Search", platform: "Google Ads", leads: 18, cpl: 485, budget: 8730, status: "Active" },
  { campaign: "Skyline Residences Vadodara", platform: "Instagram", leads: 12, cpl: 278, budget: 3336, status: "Active" },
  { campaign: "Business Park Commercial", platform: "Facebook", leads: 7, cpl: 620, budget: 4340, status: "Paused" },
  { campaign: "Vesu Locality Awareness", platform: "Instagram", leads: 22, cpl: 190, budget: 4180, status: "Active" },
];

const mockPortalPerformance = [
  { portal: "99acres", leads: 84, responded: 80, rate: 95.2, status: "On Track" },
  { portal: "MagicBricks", leads: 62, responded: 58, rate: 93.5, status: "On Track" },
  { portal: "Housing.com", leads: 47, responded: 41, rate: 87.2, status: "On Track" },
  { portal: "NoBroker", leads: 29, responded: 24, rate: 82.7, status: "On Track" },
  { portal: "JustDial", leads: 18, responded: 14, rate: 77.7, status: "Warning" },
];

function LeadsManager() {
  const { tab } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const activeTab = (tab as TabType) || "menu";
  const setActiveTab = (newTab: TabType | ((prev: TabType) => TabType)) => {
    const nextTab = typeof newTab === "function" ? newTab(activeTab) : newTab;
    navigate({
      search: (prev: any) => ({ ...prev, tab: nextTab === "menu" ? undefined : nextTab }),
    });
  };

  // Sub-modules state
  const [fsboLeads, setFsboLeads] = useState<FSBOListing[]>([
    { id: "fsbo-1", ownerName: "Dinesh Patel", phone: "+91 97250 81122", locality: "Vesu", propertyType: "2BHK Flat", areaSqft: 1050, askingPrice: 54, pricePerSqft: 5143, listingDate: "15/01/2025", discoveredAgo: "2 hours ago", sourcePlatform: "JustDial", crmStatus: "New", isOffMarket: true, agentAssigned: "Priya Rana" },
    { id: "fsbo-2", ownerName: "Bhavna Shah", phone: "+91 98250 44331", locality: "Adajan", propertyType: "3BHK Flat", areaSqft: 1420, askingPrice: 72, pricePerSqft: 5070, listingDate: "15/01/2025", discoveredAgo: "5 hours ago", sourcePlatform: "Sulekha", crmStatus: "New", isOffMarket: true, agentAssigned: "Ankit Shah" },
    { id: "fsbo-3", ownerName: "Ramesh Joshi", phone: "+91 99099 12345", locality: "Pal", propertyType: "2BHK Flat", areaSqft: 980, askingPrice: 48, pricePerSqft: 4897, listingDate: "15/01/2025", discoveredAgo: "1 hour ago", sourcePlatform: "Quikr", crmStatus: "New", isOffMarket: true, agentAssigned: "Meera Patel" },
    { id: "fsbo-4", ownerName: "Sunita Trivedi", phone: "+91 97240 55667", locality: "Vesu", propertyType: "Plot", areaSqft: 7200, askingPrice: 110, pricePerSqft: 1527, listingDate: "14/01/2025", discoveredAgo: "3 hours ago", sourcePlatform: "OLX", crmStatus: "Contacted", isOffMarket: false, agentAssigned: "Priya Rana" },
    { id: "fsbo-5", ownerName: "Kalpesh Mehta", phone: "+91 98980 99887", locality: "Adajan", propertyType: "1BHK Flat", areaSqft: 640, askingPrice: 32, pricePerSqft: 5000, listingDate: "14/01/2025", discoveredAgo: "6 hours ago", sourcePlatform: "99acres (Owner)", crmStatus: "New", isOffMarket: true, agentAssigned: "Ankit Shah" },
    { id: "fsbo-6", ownerName: "Harsha Desai", phone: "+91 99250 11223", locality: "Pal", propertyType: "Villa", areaSqft: 2200, askingPrice: 140, pricePerSqft: 6363, listingDate: "15/01/2025", discoveredAgo: "30 min ago", sourcePlatform: "NoBroker", crmStatus: "New", isOffMarket: true, agentAssigned: "Meera Patel" },
  ]);

  const [mapsBusinesses, setMapsBusinesses] = useState<MapsBusiness[]>([
    { id: "map-1", name: "Shree Builders", address: "12, Ring Road, Vesu, Surat", phone: "+91 261 2788900", website: "shreebuildersurat.com", rating: 4.2, reviews: 38, hours: "Mon–Sat, 10AM–7PM", type: "Developer", locality: "Vesu", crmStatus: "Outreach Pending", enriched: { linkedin: true, website: true, phone: true }, x: 30, y: 40 },
    { id: "map-2", name: "Rajhans Realtors", address: "G-4, Green Plaza, Adajan, Surat", phone: "+91 261 2544211", website: "rajhansrealtors.com", rating: 3.9, reviews: 24, hours: "Mon–Sat, 9:30AM–6:30PM", type: "Broker", locality: "Adajan", crmStatus: "Outreach Pending", enriched: { linkedin: false, website: true, phone: true }, x: 60, y: 30 },
    { id: "map-3", name: "Landmark Properties", address: "201, Shanti Tower, Pal, Surat", phone: "+91 98250 88776", website: "landmarkproperties.in", rating: 4.5, reviews: 52, hours: "Mon–Sat, 10AM–8PM", type: "Developer", locality: "Pal", crmStatus: "Contacted", enriched: { linkedin: true, website: true, phone: true }, x: 45, y: 70 },
    { id: "map-4", name: "Surat Land Deals", address: "Katargam Main Rd, Katargam, Surat", phone: "+91 99099 22110", website: "suratlanddeals.com", rating: 4.0, reviews: 15, hours: "Mon–Sat, 10AM–7PM", type: "Land Broker", locality: "Katargam", crmStatus: "Outreach Pending", enriched: { linkedin: false, website: false, phone: true }, x: 80, y: 20 },
    { id: "map-5", name: "Greenfield Developers", address: "405, VIP Plaza, Althan, Surat", phone: "+91 261 2900911", website: "greenfielddev.com", rating: 4.7, reviews: 63, hours: "Mon–Sat, 10AM–6:30PM", type: "Developer", locality: "Althan", crmStatus: "Outreach Pending", enriched: { linkedin: true, website: true, phone: true }, x: 25, y: 75 },
    { id: "map-6", name: "Prime Realty", address: "S-10, Vesu Point, Vesu, Surat", phone: "+91 98980 44332", website: "primerealtysurat.in", rating: 3.7, reviews: 8, hours: "Mon–Sat, 10AM–7PM", type: "Broker", locality: "Vesu", crmStatus: "Outreach Pending", enriched: { linkedin: false, website: true, phone: true }, x: 20, y: 55 },
    { id: "map-7", name: "Tulsi Housing", address: "Adajan Char Rasta, Adajan, Surat", phone: "+91 261 2455667", website: "tulsihousing.org", rating: 4.1, reviews: 19, hours: "24 Hours", type: "Society", locality: "Adajan", crmStatus: "Not Relevant", enriched: { linkedin: false, website: false, phone: true }, x: 65, y: 50 },
    { id: "map-8", name: "SNS Land Brokers", address: "SNS House, Piplod, Surat", phone: "+91 261 2711223", website: "snslandbrokers.com", rating: 4.3, reviews: 29, hours: "Mon–Sat, 10AM–7:30PM", type: "Land Broker", locality: "Piplod", crmStatus: "Outreach Pending", enriched: { linkedin: true, website: false, phone: true }, x: 50, y: 85 },
    { id: "map-9", name: "Parth Developers", address: "102, Pal Mall, Pal, Surat", phone: "+91 97250 55443", website: "parthdev.in", rating: 4.4, reviews: 41, hours: "Mon–Sat, 10AM–7PM", type: "Developer", locality: "Pal", crmStatus: "Contacted", enriched: { linkedin: true, website: true, phone: true }, x: 70, y: 65 },
    { id: "map-10", name: "City Property Hub", address: "G-12, Laxmi Complex, Katargam, Surat", phone: "+91 99250 88990", website: "citypropertyhub.com", rating: 3.8, reviews: 12, hours: "Mon–Sat, 9AM–7PM", type: "Broker", locality: "Katargam", crmStatus: "Outreach Pending", enriched: { linkedin: false, website: true, phone: true }, x: 85, y: 40 },
    { id: "map-11", name: "Vrundavan Builders", address: "VIP Road, Althan, Surat", phone: "+91 261 2899011", website: "vrundavanbuilders.com", rating: 4.6, reviews: 31, hours: "Mon–Sat, 10AM–7PM", type: "Developer", locality: "Althan", crmStatus: "Outreach Pending", enriched: { linkedin: true, website: true, phone: true }, x: 35, y: 80 },
    { id: "map-12", name: "Om Realtors", address: "Adajan Road, Adajan, Surat", phone: "+91 98250 11445", website: "omrealtors.in", rating: 4.0, reviews: 22, hours: "Mon–Sat, 10AM–6:30PM", type: "Broker", locality: "Vesu", crmStatus: "Outreach Pending", enriched: { linkedin: false, website: true, phone: true }, x: 15, y: 35 },
  ]);

  const [adsLeads, setAdsLeads] = useState<AdsLead[]>([
    { id: "ads-1", name: "Rajesh Patel", phone: "+91 98765 43210", email: "rajesh.patel@gmail.com", interest: "2BHK Flat", budget: "₹45–65L", locality: "Vesu", campaign: "Greenview Heights Jan 2025", platform: "Facebook", syncDurationSec: 28, whatsappSent: true, agentNotified: true, timestamp: "01/06/2026 11:45:12" },
    { id: "ads-2", name: "Priya Shah", phone: "+91 98250 22118", email: "priya.shah@gmail.com", interest: "3BHK Flat", budget: "₹70–85L", locality: "Adajan", campaign: "Skyline Residences Vadodara", platform: "Instagram", syncDurationSec: 32, whatsappSent: true, agentNotified: true, timestamp: "01/06/2026 11:42:05" },
    { id: "ads-3", name: "Amit Desai", phone: "+91 97250 80012", email: "amit.desai@yahoo.in", interest: "2BHK Flat", budget: "₹45–55L", locality: "Pal", campaign: "Surat 2BHK Google Search", platform: "Google", syncDurationSec: 15, whatsappSent: true, agentNotified: true, timestamp: "01/06/2026 11:38:19" },
    { id: "ads-4", name: "Sunita Mehta", phone: "+91 99250 33455", email: "sunita.mehta@gmail.com", interest: "2BHK Flat", budget: "₹50–65L", locality: "Vesu", campaign: "Greenview Heights Jan 2025", platform: "Facebook", syncDurationSec: 25, whatsappSent: true, agentNotified: true, timestamp: "01/06/2026 11:15:47" },
    { id: "ads-5", name: "Vikram Joshi", phone: "+91 99099 80012", email: "vikram.joshi@tata.com", interest: "Plot", budget: "₹80L–1.2Cr", locality: "Althan", campaign: "Vesu Locality Awareness", platform: "Instagram", syncDurationSec: 30, whatsappSent: true, agentNotified: true, timestamp: "01/06/2026 10:55:02" },
  ]);

  const [portalLeads] = useState<PortalLead[]>([
    { id: "p-1", name: "Rajesh Patel", phone: "+91 98765 XXXXX", email: "rajesh.patel@gmail.com", portal: "99acres", interest: "2BHK, Vesu", budget: "₹48–60L", locality: "Vesu", message: "Inquiry for Greenview Heights", timestamp: "10 min ago", isDuplicate: false, assignedAgent: "Priya Rana", status: "New" },
    { id: "p-2", name: "Priya Shah", phone: "+91 98250 22118", email: "priya.shah@email.com", portal: "MagicBricks", interest: "3BHK, Adajan", budget: "₹70–85L", locality: "Adajan", message: "Interested in Skyline Residences", timestamp: "25 min ago", isDuplicate: false, assignedAgent: "Ankit Shah", status: "Responded" },
    { id: "p-3", name: "Amit Desai", phone: "+91 97250 80012", email: "amit.d@gmail.com", portal: "Housing.com", interest: "2BHK, Pal", budget: "₹45–55L", locality: "Pal", message: "Need brochure and pricing", timestamp: "45 min ago", isDuplicate: false, assignedAgent: "Meera Patel", status: "New" },
    { id: "p-4", name: "Harsha Patel", phone: "+91 99250 11223", email: "harsha.p@gmail.com", portal: "99acres", interest: "2BHK, Vesu", budget: "₹50–65L", locality: "Vesu", message: "Is RERA registered?", timestamp: "1 hr ago", isDuplicate: true, mergedWith: "99acres + MagicBricks", assignedAgent: "Priya Rana", status: "New" },
    { id: "p-5", name: "Meena Agarwal", phone: "+91 99099 11220", email: "meena.a@gmail.com", portal: "MagicBricks", interest: "2BHK, Adajan", budget: "₹48–60L", locality: "Adajan", message: "Please call back", timestamp: "2 hrs ago", isDuplicate: true, mergedWith: "MagicBricks + Housing.com", assignedAgent: "Ankit Shah", status: "New" },
    { id: "p-6", name: "Vikram Joshi", phone: "+91 99099 80012", email: "vikram.j@gmail.com", portal: "99acres", interest: "Plot, Althan", budget: "₹80L–1.2Cr", locality: "Althan", message: "Plot details required", timestamp: "2 hrs ago", isDuplicate: false, assignedAgent: "Rahul Modi", status: "New" },
  ]);

  const [enrichmentLeads, setEnrichmentLeads] = useState<EnrichmentLead[]>([
    {
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
    },
    {
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
    },
    {
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
    },
    {
      id: "enr-4",
      name: "Sunita Mehta",
      phone: "+91 99250 33455",
      email: "sunita.mehta@gmail.com",
      source: "WhatsApp",
      completeness: 22,
      enriched: false
    },
    {
      id: "enr-5",
      name: "Vikram Joshi",
      phone: "+91 99099 80012",
      email: "vikram.joshi@tata.com",
      source: "Housing.com",
      completeness: 10,
      enriched: false
    }
  ]);

  const [scoringLeads, setScoringLeads] = useState<ScoringLead[]>([
    {
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
      reasons: [
        { text: "Budget matches 2BHK Vesu inventory", value: 12, positive: true },
        { text: "3 portal inquiries this week", value: 15, positive: true },
        { text: "WhatsApp responded within 5 minutes", value: 12, positive: true },
        { text: "Brochure opened (tracked link)", value: 8, positive: true },
        { text: "99acres — medium-quality source", value: 6, positive: true }
      ]
    },
    {
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
      reasons: [
        { text: "Site visit scheduled", value: 20, positive: true },
        { text: "Budget matches 3BHK Adajan inventory", value: 12, positive: true },
        { text: "LinkedIn matches mid-senior HR role", value: 10, positive: true },
        { text: "WhatsApp response active", value: 8, positive: true }
      ]
    },
    {
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
      reasons: [
        { text: "Budget matches 2BHK Pal inventory", value: 12, positive: true },
        { text: "2 inquiries this week", value: 15, positive: true },
        { text: "Brochure opened (tracked link)", value: 8, positive: true },
        { text: "No email response", value: -5, positive: false }
      ]
    },
    {
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
      reasons: [
        { text: "WhatsApp conversation active", value: 15, positive: true },
        { text: "Budget matches 2BHK Vesu", value: 12, positive: true },
        { text: "Slow response time (over 4 hrs)", value: -8, positive: false }
      ]
    },
    {
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
      reasons: [
        { text: "Price list downloaded", value: 10, positive: true },
        { text: "Budget confirmed with income", value: 12, positive: true },
        { text: "First interaction", value: 5, positive: true }
      ]
    },
    {
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
      reasons: [
        { text: "Baseline inquiry registered", value: 10, positive: true },
        { text: "1BHK inventory matches budget", value: 12, positive: true }
      ]
    },
    {
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
      reasons: [
        { text: "Referral lead (high trust)", value: 20, positive: true },
        { text: "Budget matches Vesu 3BHK", value: 12, positive: true },
        { text: "WhatsApp active", value: 8, positive: true }
      ]
    },
    {
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
      reasons: [
        { text: "Google search ad inquiry", value: 10, positive: true },
        { text: "Email opened", value: 5, positive: true }
      ]
    },
    {
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
      reasons: [
        { text: "High ticket commercial inquiry", value: 15, positive: true },
        { text: "No social/professional footprint found", value: -12, positive: false }
      ]
    },
    {
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
      reasons: [
        { text: "No response to first WhatsApp", value: -10, positive: false },
        { text: "FB lead source lower conversion rate", value: -5, positive: false }
      ]
    },
    {
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
      reasons: [
        { text: "Unreachable on WhatsApp", value: -15, positive: false },
        { text: "JustDial lead source lower conversion rate", value: -8, positive: false }
      ]
    },
    {
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
      reasons: [
        { text: "Budget below Vesu average", value: -15, positive: false },
        { text: "Stated student profile (low income)", value: -20, positive: false }
      ]
    }
  ]);

  // Scoring engine row highlight & details panel
  const [selectedScoringLeadId, setSelectedScoringLeadId] = useState<string>("sc-1");
  const [scoreUpdateLeadId, setScoreUpdateLeadId] = useState<string | null>(null);
  const [scoreUpdateDirection, setScoreUpdateDirection] = useState<"up" | "down" | null>(null);

  // FSBO & Maps filter parameters
  const [fsboLocality, setFsboLocality] = useState<string>("All");
  const [fsboType, setFsboType] = useState<string>("All");
  const [selectedFsboListingId, setSelectedFsboListingId] = useState<string>("fsbo-1");

  const [mapsLocality, setMapsLocality] = useState<string>("All");
  const [mapsType, setMapsType] = useState<string>("All");
  const [selectedBusinessId, setSelectedBusinessId] = useState<string>("map-1");

  // Webhook sync states
  const [syncLogs, setSyncLogs] = useState<{ id: string; name: string; platform: string; time: string; status: string }[]>([
    { id: "log-1", name: "Sunita Mehta", platform: "Facebook", time: "11:15 AM", status: "Success ✓" },
    { id: "log-2", name: "Vikram Joshi", platform: "Instagram", time: "10:55 AM", status: "Success ✓" },
  ]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStep, setSyncStep] = useState(0); // 0 to 5

  // Enrichment states
  const [selectedEnrichmentLeadId, setSelectedEnrichmentLeadId] = useState<string>("enr-4");
  const [isEnriching, setIsEnriching] = useState(false);
  const [enrichmentLogs, setEnrichmentLogs] = useState<string[]>([]);

  // Dashboard Overview state: streaming lead feed
  const [dashboardFeed, setDashboardFeed] = useState<Array<{ name: string; area: string; source: string; score: number; tone: "hot" | "warm" | "cold"; mins: string; isNew?: boolean }>>([
    { name: "Priya Shah", area: "Vesu, Surat", source: "Facebook Ads", score: 88, tone: "hot", mins: "just now" },
    { name: "Aman Trivedi", area: "Adajan, Surat", source: "99acres", score: 74, tone: "hot", mins: "2 min ago" },
    { name: "Hetal Mehta", area: "Pal, Surat", source: "WhatsApp", score: 61, tone: "warm", mins: "6 min ago" },
    { name: "Kunal Jain", area: "Katargam", source: "Referral", score: 92, tone: "hot", mins: "11 min ago" },
    { name: "Sneha Patel", area: "Athwa", source: "Google Ads", score: 44, tone: "warm", mins: "18 min ago" },
  ]);

  // 1. Live Feed streaming simulator (runs only on Overview dashboard)
  useEffect(() => {
    if (activeTab !== "overview") return;

    const names = [
      "Arjun Malhotra", "Nisha Verma", "Sanjay Kapoor", "Suresh Nair", "Kavita Agarwal", 
      "Deepak Trivedi", "Ritu Bhandari", "Mahesh Khanna", "Vikram Joshi", "Anita Gujarati"
    ];
    const localities = ["Vesu, Surat", "Adajan, Surat", "Pal, Surat", "Gotri, Vadodara", "Alkapuri, Vadodara", "Althan, Surat"];
    const sources = ["99acres", "MagicBricks", "Facebook Ads", "WhatsApp", "Google Ads", "NoBroker", "Referral"];

    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLoc = localities[Math.floor(Math.random() * localities.length)];
      const randomSrc = sources[Math.floor(Math.random() * sources.length)];
      const randomScore = Math.floor(Math.random() * 50) + 45; // 45 to 95
      const toneVal = randomScore >= 75 ? "hot" : randomScore >= 40 ? "warm" : "cold";

      const newLead = {
        name: randomName,
        area: randomLoc,
        source: randomSrc,
        score: randomScore,
        tone: toneVal as "hot" | "warm" | "cold",
        mins: "just now",
        isNew: true
      };

      setDashboardFeed(prev => {
        // Clear isNew flag on older leads, then insert new lead at top
        const cleared = prev.map(l => ({ ...l, isNew: false }));
        return [newLead, ...cleared.slice(0, 9)];
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [activeTab]);

  // 2. Real-time AI Lead Scoring simulator (runs only on Scoring tab "1.6")
  useEffect(() => {
    if (activeTab !== "1.6") return;

    const interval = setInterval(() => {
      // Pick a random lead
      const randomIndex = Math.floor(Math.random() * scoringLeads.length);
      const targetLead = scoringLeads[randomIndex];
      
      // Decide direction (+ or -)
      const changeVal = Math.random() > 0.4 ? 1 : -1;
      const amount = Math.floor(Math.random() * 3) + 1; // 1 to 3 pts
      let newScore = targetLead.score + (changeVal * amount);
      newScore = Math.max(15, Math.min(99, newScore)); // clamp

      setScoreUpdateLeadId(targetLead.id);
      setScoreUpdateDirection(changeVal > 0 ? "up" : "down");

      // Update lead score in list
      setScoringLeads(prev => {
        const updated = prev.map((l, idx) => {
          if (idx === randomIndex) {
            const toneVal = newScore >= 75 ? "hot" : newScore >= 40 ? "warm" : "cold";
            return {
              ...l,
              score: newScore,
              intent: toneVal as "hot" | "warm" | "cold",
              lastActivity: `Score recalculated (changed by ${changeVal > 0 ? "+" : ""}${changeVal * amount} pts)`
            };
          }
          return l;
        });

        // Re-sort based on score descending
        return [...updated].sort((a, b) => b.score - a.score);
      });

      // Clear highlights after 1.5 seconds
      setTimeout(() => {
        setScoreUpdateLeadId(null);
        setScoreUpdateDirection(null);
      }, 1500);

    }, 4500);

    return () => clearInterval(interval);
  }, [activeTab, scoringLeads]);

  // Webhook trigger simulation
  const triggerAdsSync = () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setSyncStep(1);

    const steps = [
      { step: 1, duration: 800 },
      { step: 2, duration: 1200 },
      { step: 3, duration: 1000 },
      { step: 4, duration: 800 },
      { step: 5, duration: 800 },
    ];

    let current = 0;
    const runNextStep = () => {
      if (current >= steps.length) {
        // Complete sync
        const namesPool = ["Sanjay Kapoor", "Mahesh Khanna", "Kavita Agarwal", "Vikram Joshi", "Ritu Bhandari"];
        const selectName = namesPool[Math.floor(Math.random() * namesPool.length)];
        const platformPool: ("Facebook" | "Instagram" | "Google")[] = ["Facebook", "Instagram", "Google"];
        const selectPlat = platformPool[Math.floor(Math.random() * platformPool.length)];
        
        const newLead: AdsLead = {
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
          timestamp: new Date().toLocaleTimeString()
        };

        setAdsLeads(prev => [newLead, ...prev]);
        setSyncLogs(prev => [
          { id: `log-${Date.now()}`, name: selectName, platform: selectPlat, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), status: "Success ✓" },
          ...prev
        ]);
        
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

  // Enrichment trigger simulation
  const runEnrichment = (leadId: string) => {
    if (isEnriching) return;
    setIsEnriching(true);
    setEnrichmentLogs(["[1/3] Fetching phone carrier details...", "[2/3] Querying LinkedIn company registry..."]);

    setTimeout(() => {
      setEnrichmentLogs(prev => [...prev, "[3/3] Scanning WhatsApp Business API..."]);
      setTimeout(() => {
        setEnrichmentLeads(prev => prev.map(l => {
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
              timestamp: new Date().toLocaleDateString("en-GB") + " " + new Date().toLocaleTimeString()
            };
          }
          return l;
        }));
        setIsEnriching(false);
        setEnrichmentLogs([]);
      }, 1000);
    }, 1000);
  };

  // Helper for rendering badges
  const renderPlatformBadge = (platform: string) => {
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
      "WhatsApp": "bg-emerald-50 text-emerald-600 border-emerald-200",
    } as const;

    const cls = maps[platform as keyof typeof maps] || "bg-slate-100 text-slate-600 border-slate-200";
    return <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${cls}`}>{platform}</span>;
  };

  // Filter computations for FSBO & Maps
  const filteredFSBO = useMemo(() => {
    return fsboLeads.filter(l => {
      if (fsboLocality !== "All" && l.locality !== fsboLocality) return false;
      if (fsboType !== "All" && !l.propertyType.includes(fsboType)) return false;
      return true;
    });
  }, [fsboLeads, fsboLocality, fsboType]);

  const selectedFsboListing = useMemo(() => {
    return fsboLeads.find(l => l.id === selectedFsboListingId) || fsboLeads[0];
  }, [fsboLeads, selectedFsboListingId]);

  const filteredBusinesses = useMemo(() => {
    return mapsBusinesses.filter(b => {
      if (mapsLocality !== "All" && b.locality !== mapsLocality) return false;
      if (mapsType !== "All" && b.type !== mapsType) return false;
      return true;
    });
  }, [mapsBusinesses, mapsLocality, mapsType]);

  const selectedBusiness = useMemo(() => {
    return mapsBusinesses.find(b => b.id === selectedBusinessId) || mapsBusinesses[0];
  }, [mapsBusinesses, selectedBusinessId]);

  const selectedScoringLead = useMemo(() => {
    return scoringLeads.find(l => l.id === selectedScoringLeadId) || scoringLeads[0];
  }, [scoringLeads, selectedScoringLeadId]);

  const selectedEnrichmentLead = useMemo(() => {
    return enrichmentLeads.find(l => l.id === selectedEnrichmentLeadId) || enrichmentLeads[0];
  }, [enrichmentLeads, selectedEnrichmentLeadId]);

  const renderMenuSelection = () => {
    const agentsList = [
      { id: "overview", type: "Overview", name: "Lead Center Overview", desc: "Helicopter view of the lead engine: live activity streaming, source metrics, and CRM scoring status.", stats: "47 new leads today", status: "Active" },
      { id: "1.1", type: "Agent", name: "FSBO & Owner Listing Hunter", desc: "Scans classifieds/portals for direct listings.", stats: "6 found today", status: "Active" },
      { id: "1.2", type: "Agent", name: "Google Maps Builder & Scraper", desc: "Geo-scrapes builders, developers, and brokers.", stats: "12 stakeholders mapped", status: "Active" },
      { id: "1.3", type: "Agent", name: "Facebook & Google Ads Lead Sync", desc: "Real-time webhook syncer for paid social & search forms.", stats: "47 synced today", status: "Active" },
      { id: "1.4", type: "Agent", name: "Portal Lead Aggregator", desc: "Consolidates listings from 99acres, MagicBricks & NoBroker.", stats: "20 in mailbox", status: "Active" },
      { id: "1.5", type: "Agent", name: "Lead Enrichment Agent", desc: "Appends carrier, LinkedIn, income bracket in 90 seconds.", stats: "128 auto-enriched", status: "Active" },
      { id: "1.6", type: "Agent", name: "AI Lead Scoring Engine", desc: "Calculates lead temperature 0-100 based on behavior.", stats: "12 Hot leads identified", status: "Active" },
    ];

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {agentsList.map((agent) => (
            <Card 
              key={agent.id}
              onClick={() => setActiveTab(agent.id as TabType)}
              className="bg-card border shadow-sm rounded-xl p-5 cursor-pointer flex flex-col justify-between group h-48"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-full uppercase border ${
                    agent.id === "overview" 
                      ? "bg-slate-100 text-slate-600 border-slate-200" 
                      : "bg-ink/5 text-ink border-ink/10"
                  }`}>
                    {agent.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> {agent.status}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground group-hover:text-ink transition-colors mt-1 font-display">
                  {agent.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed truncate-2-lines">
                  {agent.desc}
                </p>
              </div>
              <div className="border-t border-border mt-4 pt-3 flex items-center justify-between text-xs font-bold text-muted-foreground group-hover:text-foreground">
                <span className="font-mono font-bold text-foreground">{agent.stats}</span>
                <span className="flex items-center gap-0.5 text-ink group-hover:underline">
                  Access <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  // Page 1 Render — Overview Dashboard
  const renderOverview = () => {
    const categories = [
      { source: "99acres", leads: 84, rate: 28, color: "bg-red-500" },
      { source: "Facebook Ads", leads: 66, rate: 22, color: "bg-blue-600" },
      { source: "MagicBricks", leads: 45, rate: 15, color: "bg-amber-500" },
      { source: "WhatsApp", leads: 36, rate: 12, color: "bg-emerald-500" },
      { source: "Housing.com", leads: 27, rate: 9, color: "bg-sky-500" },
      { source: "Google Ads", leads: 24, rate: 8, color: "bg-indigo-600" },
      { source: "Referral / Other", leads: 18, rate: 6, color: "bg-slate-500" },
    ];

    return (
      <div className="space-y-4">
        {/* Module Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <StatBox label="Total Leads Today" value="47" desc="+18% since yesterday" color="text-primary" />
          <StatBox 
            label="Hot Leads" 
            value="12" 
            desc="Ready to call now" 
            color="text-red-500" 
            customElement={<span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full animate-ping" />} 
          />
          <StatBox label="Average Score" value="68" desc="Healthy portfolio score" color="text-indigo-600" />
          <StatBox label="Leads This Month" value="312" desc="Target: 450 leads" color="text-emerald-600" />
        </div>

        {/* Live Feed + Source Chart */}
        <div className="grid grid-cols-12 gap-4">
          {/* Live Streaming Feed */}
          <Card className="col-span-12 lg:col-span-7 p-4 flex flex-col h-[400px] border border-border bg-card">
            <div className="flex items-center justify-between mb-3 border-b border-border pb-2">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Lead Feed
                </div>
                <h3 className="text-sm font-bold text-foreground">Leads Arriving Now</h3>
              </div>
              <Pill tone="cold">Streaming 24/7</Pill>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-none">
              {dashboardFeed.map((lead, idx) => (
                <div 
                  key={`${lead.name}-${idx}`} 
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-all duration-500 ${
                    lead.isNew 
                      ? "bg-emerald-50/50 border-emerald-200 text-emerald-800 shadow-[0_0_12px_rgba(16,185,129,0.06)] translate-y-[-4px]" 
                      : "bg-background border-border hover:bg-secondary/40"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-8 w-8 rounded-full bg-secondary border border-border flex items-center justify-center font-bold text-xs shrink-0 text-foreground">
                      {lead.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-xs text-foreground flex items-center gap-1.5">
                        {lead.name}
                        {lead.isNew && <span className="text-xs bg-emerald-600 text-white px-1.5 rounded font-black tracking-wider uppercase animate-pulse">NEW</span>}
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <MapPin className="h-2.5 w-2.5 text-slate-400" /> {lead.area}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {renderPlatformBadge(lead.source)}
                    <div className="text-right">
                      <div className="text-xs font-bold font-display flex items-center gap-1">
                        <span className="text-xs text-muted-foreground font-medium">Score:</span> 
                        <span className={lead.score >= 75 ? "text-red-500 font-black" : lead.score >= 40 ? "text-amber-500" : "text-primary"}>{lead.score}</span>
                      </div>
                      <div className="text-xs text-muted-foreground font-mono mt-0.5">{lead.mins}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Sources Donut Chart */}
          <Card className="col-span-12 lg:col-span-5 p-4 flex flex-col h-[400px] border border-border bg-card">
            <div className="mb-3 border-b border-border pb-2">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display">Source distribution</div>
              <h3 className="text-sm font-bold text-foreground">Traffic Channel Breakdown</h3>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              {/* Custom SVG Donut Chart */}
              <div className="flex justify-center items-center h-44 relative">
                <svg width="140" height="140" viewBox="0 0 160 160" className="transform -rotate-90">
                  <circle cx="80" cy="80" r="60" fill="transparent" stroke="#ef4444" strokeWidth="20" strokeDasharray="105.5 271.5" strokeDashoffset="0" />
                  <circle cx="80" cy="80" r="60" fill="transparent" stroke="#2563eb" strokeWidth="20" strokeDasharray="82.9 294.1" strokeDashoffset="-105.5" />
                  <circle cx="80" cy="80" r="60" fill="transparent" stroke="#f59e0b" strokeWidth="20" strokeDasharray="56.5 320.5" strokeDashoffset="-188.4" />
                  <circle cx="80" cy="80" r="60" fill="transparent" stroke="#10b981" strokeWidth="20" strokeDasharray="45.2 331.8" strokeDashoffset="-244.9" />
                  <circle cx="80" cy="80" r="60" fill="transparent" stroke="#06b6d4" strokeWidth="20" strokeDasharray="33.9 343.1" strokeDashoffset="-290.1" />
                  <circle cx="80" cy="80" r="60" fill="transparent" stroke="#6366f1" strokeWidth="20" strokeDasharray="30.1 346.9" strokeDashoffset="-324" />
                  <circle cx="80" cy="80" r="60" fill="transparent" stroke="#64748b" strokeWidth="20" strokeDasharray="22.6 354.4" strokeDashoffset="-354.1" />
                </svg>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <div className="text-2xl font-black font-display text-foreground">312</div>
                  <div className="text-xs text-muted-foreground font-semibold">Leads MTD</div>
                </div>
              </div>

              {/* Horizontal Color bar list */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 border-t border-border pt-3">
                {categories.map((c) => (
                  <div key={c.source} className="flex items-center justify-between text-xs font-medium">
                    <span className="flex items-center gap-1.5 text-muted-foreground truncate">
                      <span className={`h-2.5 w-2.5 rounded-sm shrink-0 ${c.color}`} />
                      {c.source}
                    </span>
                    <span className="font-bold text-foreground font-mono shrink-0">{c.rate}%</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // Page 2 Render — FSBO & Owner Listing Hunter
  const renderFSBOHunter = () => {
    return (
      <div className="space-y-4">
        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border/80 rounded-2xl">
          <div className="flex flex-wrap gap-2">
            <div>
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Locality</label>
              <select 
                aria-label="Locality Search"
                value={fsboLocality} 
                onChange={(e) => setFsboLocality(e.target.value)}
                className="h-8 text-xs font-semibold px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-primary"
              >
                <option value="All">All Localities</option>
                <option value="Vesu">Vesu</option>
                <option value="Adajan">Adajan</option>
                <option value="Pal">Pal</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Property Type</label>
              <select 
                aria-label="Property Type Search"
                value={fsboType} 
                onChange={(e) => setFsboType(e.target.value)}
                className="h-8 text-xs font-semibold px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-primary"
              >
                <option value="All">All Types</option>
                <option value="Flat">Flats</option>
                <option value="Plot">Plots</option>
                <option value="Villa">Villas</option>
              </select>
            </div>
          </div>
          <div className="text-xs font-bold text-primary font-display">
            {filteredFSBO.length} Owner Listings Discovered
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Listing Cards */}
          <div className="col-span-12 lg:col-span-8 space-y-3 max-h-[550px] overflow-y-auto pr-1 scrollbar-none">
            {filteredFSBO.length === 0 ? (
              <div className="p-8 text-center border border-dashed border-border rounded-2xl text-muted-foreground text-xs bg-card">
                No listings match the selected filters.
              </div>
            ) : (
              filteredFSBO.map((l) => (
                <div 
                  key={l.id} 
                  onClick={() => setSelectedFsboListingId(l.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    selectedFsboListingId === l.id 
                      ? "bg-secondary/30 border-primary" 
                      : "bg-card border-border hover:bg-secondary/15"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-foreground">{l.propertyType} in {l.locality}</h4>
                        {l.isOffMarket && <span className="text-xs bg-red-50 text-red-600 font-bold px-2 py-0.5 rounded-md border border-red-200">Off-Market</span>}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 font-medium">
                        {l.areaSqft} sq ft · Listed on {l.listingDate} via <span className="font-bold text-foreground">{l.sourcePlatform}</span>
                      </p>
                    </div>
                    <div className="text-right font-display">
                      <div className="text-base font-black text-foreground">₹{l.askingPrice}L</div>
                      <div className="text-xs text-muted-foreground">₹{l.pricePerSqft}/sq ft</div>
                    </div>
                  </div>
                  
                  <div className="border-t border-border mt-4 pt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center font-bold text-xs text-foreground border border-border">
                        {l.ownerName[0]}
                      </div>
                      <span className="font-bold text-foreground text-xs">{l.ownerName}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground text-xs">{l.phone}</span>
                    </div>

                    <div className="flex gap-2">
                      {l.crmStatus === "Added to Pipeline" ? (
                        <span className="h-7 px-3 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-bold flex items-center gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Added to CRM
                        </span>
                      ) : (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setFsboLeads(prev => prev.map(item => item.id === l.id ? { ...item, crmStatus: "Added to Pipeline" } : item));
                          }}
                          className="h-7 px-3 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold transition-all shadow-sm"
                        >
                          Add to CRM Pipeline
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Interactive Map Panel */}
          <Card className="col-span-12 lg:col-span-4 p-4 flex flex-col h-[550px] border border-border bg-card">
            <div className="mb-3 border-b border-border pb-2">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1">
                <Globe className="h-3.5 w-3.5" /> GPS Geolocation
              </div>
              <h3 className="text-sm font-bold text-foreground">Interactive Micro-market Map</h3>
            </div>
            
            {/* SVG Visual Map */}
            <div className="flex-1 bg-secondary/30 border border-border rounded-2xl relative overflow-hidden flex items-center justify-center">
              <svg width="100%" height="100%" viewBox="0 0 200 200" className="absolute inset-0 select-none">
                {/* Simulated streets / grids */}
                <line x1="20" y1="0" x2="20" y2="200" stroke="#cbd5e1" strokeWidth="0.75" strokeDasharray="3 3" />
                <line x1="100" y1="0" x2="100" y2="200" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="170" y1="0" x2="170" y2="200" stroke="#cbd5e1" strokeWidth="0.75" strokeDasharray="3 3" />
                
                <line x1="0" y1="40" x2="200" y2="40" stroke="#cbd5e1" strokeWidth="0.75" strokeDasharray="3 3" />
                <line x1="0" y1="110" x2="200" y2="110" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="0" y1="160" x2="200" y2="160" stroke="#cbd5e1" strokeWidth="0.75" strokeDasharray="3 3" />

                {/* Localities labels */}
                <text x="35" y="25" fill="#64748b" fontSize="7" fontWeight="bold" fontFamily="sans-serif">ADstatus</text>
                <text x="35" y="32" fill="#475569" fontSize="8" fontWeight="bold" fontFamily="sans-serif">ADAJAN</text>
                
                <text x="120" y="85" fill="#64748b" fontSize="7" fontWeight="bold" fontFamily="sans-serif">VESU MAIN</text>
                <text x="120" y="92" fill="#475569" fontSize="8" fontWeight="bold" fontFamily="sans-serif">VESU AREA</text>
                
                <text x="35" y="145" fill="#64748b" fontSize="7" fontWeight="bold" fontFamily="sans-serif">PAL MICRO</text>
                <text x="35" y="152" fill="#475569" fontSize="8" fontWeight="bold" fontFamily="sans-serif">PAL DISTRICT</text>

                {/* SVG PINS */}
                {[
                  { id: "fsbo-1", x: 135, y: 75, name: "Dinesh Patel (Vesu)", label: "1" },
                  { id: "fsbo-2", x: 45, y: 55, name: "Bhavna Shah (Adajan)", label: "2" },
                  { id: "fsbo-3", x: 55, y: 135, name: "Ramesh Joshi (Pal)", label: "3" },
                  { id: "fsbo-4", x: 155, y: 105, name: "Sunita Trivedi (Vesu)", label: "4" },
                  { id: "fsbo-5", x: 80, y: 35, name: "Kalpesh Mehta (Adajan)", label: "5" },
                  { id: "fsbo-6", x: 75, y: 155, name: "Harsha Desai (Pal)", label: "6" },
                ].map((pin) => {
                  const active = selectedFsboListingId === pin.id;
                  return (
                    <g 
                      key={pin.id} 
                      className="cursor-pointer"
                      onClick={() => setSelectedFsboListingId(pin.id)}
                    >
                      {active && <circle cx={pin.x} cy={pin.y} r="10" fill="#f43f5e" fillOpacity="0.25" className="animate-ping" />}
                      <circle cx={pin.x} cy={pin.y} r="6" fill={active ? "#ef4444" : "#64748b"} className="transition-all hover:scale-125" />
                      <text x={pin.x} y={pin.y + 2.5} fill="#fff" fontSize="6" fontWeight="black" textAnchor="middle">{pin.label}</text>
                    </g>
                  );
                })}
              </svg>

              {/* Map Info Box */}
              <div className="absolute bottom-3 inset-x-3 bg-card border border-border p-3 rounded-xl flex flex-col gap-1 shadow-lg">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Discovered Listing Details</div>
                <div className="font-bold text-xs text-foreground flex items-center justify-between">
                  <span>{selectedFsboListing?.propertyType}</span>
                  <span className="text-[#ef4444] font-black font-mono">₹{selectedFsboListing?.askingPrice}L</span>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-slate-400" /> {selectedFsboListing?.locality} · {selectedFsboListing?.ownerName}
                </div>
                <div className="text-xs text-emerald-600 flex items-center gap-1 font-bold mt-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> {selectedFsboListing?.discoveredAgo}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // Page 3 Render — Google Maps Builder & Scraper
  const renderMapsScraper = () => {
    return (
      <div className="space-y-4">
        {/* Scraper controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border/80 rounded-2xl">
          <div className="flex flex-wrap gap-2">
            <div>
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Locality</label>
              <select 
                aria-label="Locality Select"
                value={mapsLocality} 
                onChange={(e) => setMapsLocality(e.target.value)}
                className="h-8 text-xs font-semibold px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-primary"
              >
                <option value="All">All Localities</option>
                <option value="Vesu">Vesu</option>
                <option value="Adajan">Adajan</option>
                <option value="Pal">Pal</option>
                <option value="Althan">Althan</option>
                <option value="Katargam">Katargam</option>
                <option value="Piplod">Piplod</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Segment Type</label>
              <select 
                aria-label="Segment Type Select"
                value={mapsType} 
                onChange={(e) => setMapsType(e.target.value)}
                className="h-8 text-xs font-semibold px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-primary"
              >
                <option value="All">All Segments</option>
                <option value="Developer">Developers</option>
                <option value="Broker">Brokers</option>
                <option value="Land Broker">Land Brokers</option>
                <option value="Society">Societies</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-bold">Target Market: Surat, Gujarat</span>
            <button className="h-8 px-3 rounded-lg border border-border bg-card text-foreground hover:bg-muted text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm">
              <RefreshCw className="h-3.5 w-3.5" /> Scan Google Maps
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Stakeholder table */}
          <Card className="col-span-12 lg:col-span-8 p-0 overflow-hidden h-[550px] flex flex-col border border-border bg-card">
            <div className="overflow-x-auto flex-1 scrollbar-none">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-secondary/40 border-b border-border">
                    {["Business Details", "Segment", "Locality", "Rating", "Enrichment", "CRM Status"].map((h, idx) => (
                      <th key={idx} className="px-4 py-2.5 font-bold text-xs uppercase tracking-widest text-muted-foreground font-display">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {filteredBusinesses.map((b) => {
                    const isSelected = selectedBusinessId === b.id;
                    return (
                      <tr 
                        key={b.id} 
                        onClick={() => setSelectedBusinessId(b.id)}
                        className={`hover:bg-secondary/35 transition-colors cursor-pointer ${isSelected ? "bg-secondary/20 font-semibold border-l-2 border-primary" : ""}`}
                      >
                        <td className="px-4 py-3">
                          <div className="font-bold text-foreground text-xs">{b.name}</div>
                          <div className="text-xs text-muted-foreground truncate max-w-xs mt-0.5">{b.address}</div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                            b.type === "Developer" 
                              ? "bg-blue-50 text-blue-600 border border-blue-100" 
                              : b.type === "Broker" 
                                ? "bg-purple-50 text-purple-600 border border-purple-100"
                                : b.type === "Land Broker" 
                                  ? "bg-amber-50 text-amber-600 border border-amber-100"
                                  : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                          }`}>
                            {b.type}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-foreground font-semibold">{b.locality}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1 font-bold text-amber-500">
                            ★ <span className="text-foreground text-xs font-mono">{b.rating}</span>
                            <span className="text-muted-foreground text-xs font-mono">({b.reviews})</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            {b.enriched.linkedin && <span className="text-xs bg-secondary text-slate-600 border border-border font-bold px-1.5 py-0.5 rounded">LinkedIn</span>}
                            {b.enriched.website && <span className="text-xs bg-secondary text-slate-600 border border-border font-bold px-1.5 py-0.5 rounded">Web</span>}
                            {b.enriched.phone && <span className="text-xs bg-emerald-50 text-emerald-600 font-bold px-1.5 py-0.5 rounded border border-emerald-100">Active</span>}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          {b.crmStatus === "Pushed to CRM" ? (
                            <span className="text-emerald-600 font-bold text-xs flex items-center gap-1">
                              ✓ Pushed
                            </span>
                          ) : b.crmStatus === "Pushing..." ? (
                            <span className="text-slate-500 font-bold text-xs flex items-center gap-1 animate-pulse">
                              Pushing...
                            </span>
                          ) : b.crmStatus === "Not Relevant" ? (
                            <span className="text-slate-400 font-bold text-xs">
                              Skipped
                            </span>
                          ) : (
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setMapsBusinesses(prev => prev.map(item => item.id === b.id ? { ...item, crmStatus: "Pushing..." } : item));
                                setTimeout(() => {
                                  setMapsBusinesses(prev => prev.map(item => item.id === b.id ? { ...item, crmStatus: "Pushed to CRM" } : item));
                                }, 1000);
                              }}
                              className="h-6 px-2 rounded bg-ink hover:bg-ink/90 text-cream text-xs font-bold transition-all shadow-sm"
                            >
                              Push
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Interactive geo map side panel */}
          <Card className="col-span-12 lg:col-span-4 p-4 flex flex-col h-[550px] border border-border bg-card">
            <div className="mb-3 border-b border-border pb-2">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" /> Micro-market Radar
              </div>
              <h3 className="text-sm font-bold text-foreground">Surat Stakeholder Blueprint</h3>
            </div>

            {/* Radar Scraper grid */}
            <div className="flex-1 bg-secondary/30 border border-border rounded-2xl relative overflow-hidden flex items-center justify-center">
              <svg width="100%" height="100%" viewBox="0 0 200 200" className="absolute inset-0 select-none">
                {/* Micro-market circle radars */}
                <circle cx="100" cy="100" r="30" fill="transparent" stroke="#cbd5e1" strokeWidth="0.75" />
                <circle cx="100" cy="100" r="60" fill="transparent" stroke="#cbd5e1" strokeWidth="0.75" />
                <circle cx="100" cy="100" r="90" fill="transparent" stroke="#cbd5e1" strokeWidth="0.75" />
                
                {/* RADAR SWEEP ANIMATION LINE */}
                <line x1="100" y1="100" x2="190" y2="100" stroke="#0B1F33" strokeWidth="0.5" strokeOpacity="0.3" className="transform origin-[100px_100px] animate-[spin_5s_linear_infinite]" />

                {/* Plot Pins */}
                {filteredBusinesses.map((b) => {
                  const isSelected = selectedBusinessId === b.id;
                  const colors = {
                    "Developer": "#0e86e9",
                    "Broker": "#a855f7",
                    "Land Broker": "#f59e0b",
                    "Society": "#10b981",
                  };
                  const color = colors[b.type] || "#64748b";

                  return (
                    <g 
                      key={b.id} 
                      className="cursor-pointer"
                      onClick={() => setSelectedBusinessId(b.id)}
                    >
                      {isSelected && <circle cx={b.x * 2} cy={b.y * 2} r="8" fill={color} fillOpacity="0.25" className="animate-ping" />}
                      <circle cx={b.x * 2} cy={b.y * 2} r="4" fill={color} stroke={isSelected ? "#fff" : "transparent"} strokeWidth="1" />
                    </g>
                  );
                })}
              </svg>

              {/* Stakeholder Details popover */}
              <div className="absolute bottom-3 inset-x-3 bg-card border border-border p-3 rounded-xl flex flex-col gap-1 shadow-lg">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Google Maps Node</div>
                <div className="font-bold text-xs text-foreground flex items-center justify-between">
                  <span>{selectedBusiness?.name}</span>
                  <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-secondary text-slate-600 border border-border">{selectedBusiness?.type}</span>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1 truncate font-medium">
                  <MapPin className="h-3 w-3 text-slate-400" /> {selectedBusiness?.address}
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-border">
                  <span className="text-xs text-amber-500 font-bold">★ {selectedBusiness?.rating} ({selectedBusiness?.reviews} Google Reviews)</span>
                  <a href={selectedBusiness?.website} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline flex items-center gap-0.5 font-bold">
                    <Globe className="h-2.5 w-2.5" /> Website
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // Page 4 Render — Ads Sync
  const renderAdsSync = () => {
    return (
      <div className="space-y-4">
        {/* Sync timeline webhook visualization */}
        <Card className="p-5 relative overflow-hidden border border-border bg-card">
          <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display">Real-time Webhook</div>
              <h3 className="text-sm font-bold text-foreground">API Campaign Lead Sync Tunnel</h3>
            </div>
            <button 
              onClick={triggerAdsSync}
              disabled={isSyncing}
              className={`h-8 px-4 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-md ${
                isSyncing 
                  ? "bg-secondary text-slate-400 cursor-not-allowed border border-border" 
                  : "bg-ink hover:bg-ink/90 text-cream"
              }`}
            >
              <Play className={`h-3 w-3 ${isSyncing ? "animate-spin" : ""}`} /> 
              {isSyncing ? "Webhook Syncing..." : "Simulate Incoming Ad Lead Webhook"}
            </button>
          </div>

          {/* Sync Nodes Line */}
          <div className="relative py-4 flex justify-between items-center max-w-4xl mx-auto z-10">
            {/* Background Line */}
            <div className="absolute h-0.5 bg-secondary inset-x-4 top-1/2 -translate-y-1/2 z-0" />
            
            {/* Animated Active Line */}
            <div 
              className="absolute h-0.5 bg-ink inset-x-4 top-1/2 -translate-y-1/2 z-0 transition-all duration-1000" 
              style={{ width: `${isSyncing ? (syncStep - 1) * 25 : 0}%` }}
            />

            {[
              { label: "Facebook Form Submit", step: 1, text: "0s · Click" },
              { label: "Captured by Webhook", step: 2, text: "8s · API Parse" },
              { label: "CRM Entry Created", step: 3, text: "15s · DB Log" },
              { label: "WhatsApp Acknowledge", step: 4, text: "22s · SMS/WA" },
              { label: "Agent Alert Notification", step: 5, text: "28s · Dispatch" },
            ].map((node) => {
              const active = isSyncing && syncStep >= node.step;
              const isCurrent = isSyncing && syncStep === node.step;
              return (
                <div key={node.step} className="flex flex-col items-center z-10 relative">
                  <div 
                    className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold border transition-all duration-500 ${
                      isCurrent 
                        ? "bg-card text-ink border-ink scale-125 shadow-[0_0_15px_rgba(11,31,51,0.2)]" 
                        : active 
                          ? "bg-ink text-cream border-ink" 
                          : "bg-secondary text-slate-400 border-border"
                    }`}
                  >
                    {node.step}
                  </div>
                  <div className="text-xs font-bold mt-2 text-foreground">{node.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 font-mono">{node.text}</div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Sync lead list + campaigns */}
        <div className="grid grid-cols-12 gap-4">
          {/* Sync Lead Logs */}
          <Card className="col-span-12 lg:col-span-7 p-4 h-[400px] flex flex-col border border-border bg-card">
            <div className="mb-3 border-b border-border pb-2 flex justify-between items-center">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display">Sync Output</div>
                <h3 className="text-sm font-bold text-foreground">Webhook Synced Inbound Feed</h3>
              </div>
              <span className="text-xs font-bold text-slate-600 bg-secondary px-2.5 py-0.5 rounded-full border border-border">
                Avg Capture: 28 seconds
              </span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 scrollbar-none">
              {adsLeads.map((l) => (
                <div key={l.id} className="p-3 bg-secondary/15 border border-border/70 rounded-xl hover:bg-secondary/35 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-xs text-foreground flex items-center gap-1.5">
                        {l.name}
                        <span className="text-xs font-semibold text-slate-400 font-mono">({l.syncDurationSec}s sync duration)</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {l.interest} · {l.locality} · {l.campaign}
                      </div>
                    </div>
                    {renderPlatformBadge(l.platform)}
                  </div>
                  <div className="flex items-center justify-between mt-3 border-t border-border pt-2 text-xs">
                    <span className="text-slate-400 font-mono">{l.timestamp}</span>
                    <div className="flex gap-2">
                      <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                        ✓ WhatsApp Ack
                      </span>
                      <span className="text-emerald-600 font-bold flex items-center gap-0.5">
                        ✓ Agent Notified
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Campaign stats */}
          <Card className="col-span-12 lg:col-span-5 p-4 h-[400px] flex flex-col border border-border bg-card">
            <div className="mb-3 border-b border-border pb-2">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display font-bold">MTD Analytics</div>
              <h3 className="text-sm font-bold text-foreground">Campaign Performance & Spend ROI</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-3 scrollbar-none text-xs">
              <div className="grid grid-cols-12 font-bold text-xs uppercase tracking-widest text-muted-foreground border-b border-border pb-1">
                <div className="col-span-5">Campaign</div>
                <div className="col-span-2 text-right">Leads</div>
                <div className="col-span-2 text-right">CPL</div>
                <div className="col-span-3 text-right">Budget</div>
              </div>
              {mockCampaigns.map((c) => (
                <div key={c.campaign} className="grid grid-cols-12 items-center text-foreground font-medium py-0.5">
                  <div className="col-span-5 min-w-0">
                    <div className="font-bold truncate text-xs">{c.campaign}</div>
                    <div className="text-xs text-muted-foreground font-mono">{c.platform}</div>
                  </div>
                  <div className="col-span-2 text-right font-mono font-bold text-xs">{c.leads}</div>
                  <div className="col-span-2 text-right font-mono text-xs">₹{c.cpl}</div>
                  <div className="col-span-3 text-right font-mono font-bold text-xs text-primary">₹{c.budget.toLocaleString("en-IN")}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // Page 5 Render — Portal Lead Aggregator
  const renderPortalAggregator = () => {
    return (
      <div className="space-y-4">
        {/* Banner */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between gap-3 text-amber-800">
          <div className="flex items-center gap-2 text-xs">
            <AlertTriangle className="h-4 w-4 shrink-0 text-amber-500" />
            <span>
              <strong>Deduplication Warning:</strong> 3 potential duplicate inquiries were detected and merged today.
            </span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest bg-amber-100 text-amber-700 border border-amber-200 px-2 py-0.5 rounded">
            3 Merged
          </span>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Inbox Feed */}
          <Card className="col-span-12 lg:col-span-8 p-0 overflow-hidden h-[500px] flex flex-col border border-border bg-card">
            <div className="p-3 bg-secondary/20 border-b border-border flex items-center justify-between">
              <h4 className="font-bold text-xs text-foreground">Unified Portal Lead Inbox</h4>
              <span className="text-xs text-slate-400 font-bold">20 leads in feed</span>
            </div>
            
            <div className="flex-1 overflow-y-auto divide-y divide-border/60 scrollbar-none">
              {portalLeads.map((l) => (
                <div key={l.id} className="p-3 hover:bg-secondary/15 transition-colors flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="h-7 w-7 rounded-full bg-secondary border border-border flex items-center justify-center font-bold text-xs text-slate-600 shrink-0">
                      {l.name[0]}
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-foreground flex items-center gap-1.5 flex-wrap">
                        {l.name}
                        {l.isDuplicate && (
                          <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded font-bold tracking-wider uppercase flex items-center gap-0.5">
                            Merged ({l.mergedWith})
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5 font-medium">
                        {l.interest} · {l.locality} · Budget: <strong className="text-foreground">{l.budget}</strong>
                      </div>
                      <div className="text-xs text-slate-500 bg-secondary/40 p-2 rounded-lg mt-2 border border-border max-w-md font-medium">
                        "{l.message}"
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0 flex flex-col items-end gap-1.5">
                    {renderPlatformBadge(l.portal)}
                    <span className="text-xs text-slate-400 font-mono">{l.timestamp}</span>
                    <span className="text-xs font-bold text-slate-500 font-mono">Agent: {l.assignedAgent}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Response rate tracker */}
          <Card className="col-span-12 lg:col-span-4 p-4 h-[500px] flex flex-col border border-border bg-card">
            <div className="mb-3 border-b border-border pb-2">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display font-bold">Algorithms Metric</div>
              <h3 className="text-sm font-bold text-foreground">Portal Response Rate Tracker</h3>
              <p className="text-xs text-muted-foreground mt-1">If response rates drop below targets, listings get demoted in search results.</p>
            </div>

            <div className="flex-1 space-y-4 pt-2">
              {mockPortalPerformance.map((p) => (
                <div key={p.portal} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-foreground flex items-center gap-1">
                      {p.portal}
                      <span className="text-xs text-muted-foreground font-mono">({p.leads} leads)</span>
                    </span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                      p.status === "On Track" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-50 text-red-600 border border-red-100"
                    }`}>
                      {p.rate}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden flex">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        p.status === "On Track" ? "bg-ink" : "bg-red-500"
                      }`} 
                      style={{ width: `${p.rate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // Page 6 Render — Lead Enrichment Agent
  const renderEnrichmentAgent = () => {
    return (
      <div className="space-y-4">
        {/* Enrichment stats summary */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border/80 rounded-2xl text-xs font-bold">
          <div className="flex gap-4">
            <span className="text-slate-500">Enriched Today: <strong className="text-foreground">128</strong></span>
            <span className="text-slate-500">Avg Completeness: <strong className="text-foreground">79%</strong></span>
            <span className="text-slate-500">Avg Timing: <strong className="text-foreground">88 sec</strong></span>
          </div>
          <button 
            onClick={() => runEnrichment(selectedEnrichmentLeadId)}
            disabled={isEnriching || selectedEnrichmentLead.enriched}
            className={`h-8 px-3.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              selectedEnrichmentLead.enriched
                ? "bg-secondary text-slate-400 border border-border cursor-not-allowed"
                : isEnriching
                  ? "bg-secondary text-slate-400 cursor-not-allowed border border-border"
                  : "bg-ink hover:bg-ink/90 text-cream shadow-sm"
            }`}
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isEnriching ? "animate-spin" : ""}`} />
            {selectedEnrichmentLead.enriched ? "Profile Fully Enriched" : isEnriching ? "Running Enrichment Agent..." : "Run AI Enrichment"}
          </button>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Enrichment Queue */}
          <Card className="col-span-12 lg:col-span-4 p-0 overflow-hidden h-[500px] flex flex-col border border-border bg-card">
            <div className="p-3 bg-secondary/20 border-b border-border">
              <h4 className="font-bold text-xs text-foreground">Enrichment Pipeline Queue</h4>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-border/60 scrollbar-none">
              {enrichmentLeads.map((l) => {
                const active = selectedEnrichmentLeadId === l.id;
                return (
                  <div 
                    key={l.id} 
                    onClick={() => setSelectedEnrichmentLeadId(l.id)}
                    className={`p-3 transition-colors cursor-pointer flex items-center justify-between gap-3 ${
                      active ? "bg-secondary/25" : "hover:bg-secondary/10"
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-foreground truncate">{l.name}</div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5">{l.phone}</div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all ${
                            l.completeness >= 85 ? "bg-emerald-500" : l.completeness >= 60 ? "bg-ink" : l.completeness >= 40 ? "bg-amber-500" : "bg-red-500"
                          }`}
                          style={{ width: `${l.completeness}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold font-mono text-foreground w-8 text-right">{l.completeness}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Before/After panel */}
          <Card className="col-span-12 lg:col-span-8 p-4 h-[500px] flex flex-col border border-border bg-card">
            <div className="mb-3 border-b border-border pb-2">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display">Expansion View</div>
              <h3 className="text-sm font-bold text-foreground">{selectedEnrichmentLead.name} Profile Profiling</h3>
            </div>

            {/* Logs if enriching */}
            {isEnriching ? (
              <div className="flex-1 bg-[#030712] border border-border rounded-2xl p-6 flex flex-col justify-center items-center">
                <RefreshCw className="h-8 w-8 text-ink animate-spin mb-4" />
                <div className="space-y-1.5 text-center font-mono text-xs w-full max-w-sm">
                  {enrichmentLogs.map((log, idx) => (
                    <div key={idx} className="text-slate-300">{log}</div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex-1 grid md:grid-cols-2 gap-4">
                {/* BEFORE */}
                <div className="bg-secondary/15 border border-border/80 p-4 rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-black tracking-widest uppercase text-slate-400 mb-2 font-mono">Raw Lead (Before Enrichment)</div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <div className="text-muted-foreground text-xs font-semibold">Name</div>
                        <div className="font-bold text-foreground">{selectedEnrichmentLead.name}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground text-xs font-semibold">Phone</div>
                        <div className="font-bold text-foreground font-mono">{selectedEnrichmentLead.phone}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground text-xs font-semibold">Source</div>
                        <div className="font-bold text-foreground">{selectedEnrichmentLead.source}</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-secondary/40 p-2.5 border border-border rounded-lg text-xs text-slate-500 font-bold text-center">
                    Completeness: {selectedEnrichmentLead.id === "enr-4" ? "22%" : selectedEnrichmentLead.id === "enr-5" ? "10%" : "12%"}
                  </div>
                </div>

                {/* AFTER */}
                <div className="bg-card border-2 border-ink/20 p-4 rounded-xl flex flex-col justify-between shadow-sm">
                  {selectedEnrichmentLead.enriched ? (
                    <>
                      <div>
                        <div className="text-xs font-black tracking-widest uppercase text-slate-500 mb-2 font-mono flex items-center justify-between">
                          <span>AI Enriched Record</span>
                          <span className="text-emerald-600">✓ Enriched in {selectedEnrichmentLead.durationSec}s</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
                          <div>
                            <div className="text-muted-foreground text-xs font-semibold">WhatsApp status</div>
                            <div className="font-bold text-emerald-600 flex items-center gap-0.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active WhatsApp
                            </div>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-xs font-semibold">Carrier / Operator</div>
                            <div className="font-bold text-foreground">{selectedEnrichmentLead.operator}</div>
                          </div>
                          <div className="col-span-2">
                            <div className="text-muted-foreground text-xs font-semibold">LinkedIn Profile</div>
                            <div className="font-bold text-ink hover:underline font-mono truncate">{selectedEnrichmentLead.linkedin}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-xs font-semibold">Designation</div>
                            <div className="font-bold text-foreground">{selectedEnrichmentLead.designation}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-xs font-semibold">Company</div>
                            <div className="font-bold text-foreground">{selectedEnrichmentLead.company}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-xs font-semibold">Estimated Income</div>
                            <div className="font-bold text-foreground font-mono">{selectedEnrichmentLead.income}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-xs font-semibold">Property Intent</div>
                            <div className="font-bold text-foreground truncate font-medium">{selectedEnrichmentLead.recentSearches}</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-emerald-50 text-emerald-700 p-2.5 border border-emerald-100 rounded-lg text-xs font-bold text-center">
                        Total Completeness: {selectedEnrichmentLead.completeness}%
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 flex flex-col justify-center items-center text-center p-4">
                      <Zap className="h-8 w-8 text-primary opacity-65 mb-2 animate-bounce" />
                      <h4 className="font-bold text-xs text-foreground">Outreach Profile Missing</h4>
                      <p className="text-xs text-slate-500 mt-1 max-w-[200px] font-semibold">Click the button above to run the AI crawler and enrich fields.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    );
  };

  // Page 7 Render — AI Lead Scoring Engine
  const renderScoringEngine = () => {
    return (
      <div className="space-y-4">
        {/* KPI Score summary bar */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="p-3 rounded-2xl bg-card border border-border text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">Active Leads</div>
            <div className="text-lg font-bold mt-1 text-foreground font-mono">47</div>
          </div>
          <div className="p-3 rounded-2xl bg-card border border-border text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-red-500 font-display">Hot (75–100)</div>
            <div className="text-lg font-bold mt-1 text-red-500 font-mono">12</div>
          </div>
          <div className="p-3 rounded-2xl bg-card border border-border text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-500 font-display">Warm (40–74)</div>
            <div className="text-lg font-bold mt-1 text-amber-500 font-mono">23</div>
          </div>
          <div className="p-3 rounded-2xl bg-card border border-border text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-primary font-display">Cold (0–39)</div>
            <div className="text-lg font-bold mt-1 text-primary font-mono">12</div>
          </div>
          <div className="p-3 rounded-2xl bg-card border border-border text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-display">Avg Score</div>
            <div className="text-lg font-bold mt-1 text-indigo-500 font-mono">68</div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Scoring Table */}
          <Card className="col-span-12 lg:col-span-8 p-0 overflow-hidden h-[450px] flex flex-col border border-border bg-card">
            <div className="overflow-x-auto flex-1 scrollbar-none">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-secondary/40 border-b border-border">
                    {["Lead Name", "Source", "Score", "Intent", "Property & Budget", "Agent", "Last Signal"].map((h, idx) => (
                      <th key={idx} className="px-4 py-2.5 font-bold text-xs uppercase tracking-widest text-muted-foreground font-display">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {scoringLeads.map((l) => {
                    const isSelected = selectedScoringLeadId === l.id;
                    const isUpdated = scoreUpdateLeadId === l.id;
                    const upCls = scoreUpdateDirection === "up" ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800";
                    return (
                      <tr 
                        key={l.id}
                        onClick={() => setSelectedScoringLeadId(l.id)}
                        className={`hover:bg-secondary/15 transition-colors cursor-pointer ${isSelected ? "bg-secondary/20" : ""} ${isUpdated ? upCls + " transition-none" : ""}`}
                      >
                        <td className="px-4 py-2.5 font-bold text-foreground">{l.name}</td>
                        <td className="px-4 py-2.5">{renderPlatformBadge(l.source)}</td>
                        <td className="px-4 py-2.5">
                          <div className="flex items-center gap-2">
                            <span className="font-bold font-mono text-xs w-5 text-right text-foreground">{l.score}</span>
                            <div className="w-12 h-1 bg-secondary rounded-full overflow-hidden border border-border">
                              <div 
                                className={`h-full rounded-full transition-all ${
                                  l.score >= 75 ? "bg-red-500" : l.score >= 40 ? "bg-amber-500" : "bg-ink"
                                }`}
                                style={{ width: `${l.score}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-2.5">
                          <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${
                            l.intent === "hot" ? "bg-red-50 text-red-600 border border-red-100" : l.intent === "warm" ? "bg-amber-50 text-amber-600" : "bg-sky-50 text-sky-600"
                          }`}>
                            {l.intent}
                          </span>
                        </td>
                        <td className="px-4 py-2.5 font-semibold">
                          <div>{l.property}</div>
                          <div className="text-xs text-muted-foreground font-medium">{l.budget}</div>
                        </td>
                        <td className="px-4 py-2.5 text-foreground font-bold">{l.agent}</td>
                        <td className="px-4 py-2.5 text-muted-foreground text-xs max-w-[150px] truncate font-medium">{l.lastActivity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Score breakdown side panel */}
          <Card className="col-span-12 lg:col-span-4 p-4 h-[450px] flex flex-col justify-between border border-border bg-card">
            <div>
              <div className="mb-3 border-b border-border pb-2">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display">Score Breakdown</div>
                <h3 className="text-sm font-bold text-foreground">{selectedScoringLead?.name} Model</h3>
              </div>

              <div className="space-y-2 overflow-y-auto max-h-[280px] scrollbar-none pr-1">
                {selectedScoringLead?.reasons.map((r, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-3 text-xs bg-secondary/30 p-2 border border-border rounded-xl">
                    <span className="text-slate-600 font-semibold">{r.text}</span>
                    <span className={`font-mono font-bold shrink-0 text-xs ${r.positive ? "text-emerald-600" : "text-red-500"}`}>
                      {r.positive ? "+" : ""}{r.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-3 mt-auto">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-slate-500">Total Derived Score:</span>
                <span className={`font-mono text-lg font-black ${
                  (selectedScoringLead?.score || 0) >= 75 ? "text-red-500" : (selectedScoringLead?.score || 0) >= 40 ? "text-amber-500" : "text-ink"
                }`}>
                  {selectedScoringLead?.score}
                </span>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="flex-1 h-8 rounded-lg bg-secondary hover:bg-secondary/70 text-foreground text-xs font-bold border border-border transition-colors">
                  Contact
                </button>
                <button className="flex-1 h-8 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold shadow-sm transition-all">
                  Schedule visit
                </button>
              </div>
            </div>
          </Card>
        </div>

        {/* Source quality bar chart */}
        <Card className="p-5 flex flex-col h-[280px] border border-border bg-card">
          <div className="mb-3 border-b border-border pb-2">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 font-display">Model Calibration</div>
            <h3 className="text-sm font-bold text-foreground">Average Lead Quality Score by Channel</h3>
          </div>

          <div className="flex-1 flex items-end gap-3.5 px-2 pt-4">
            {[
              { source: "Referral", score: 76, color: "bg-indigo-500" },
              { source: "WhatsApp Organic", score: 69, color: "bg-emerald-500" },
              { source: "99acres", score: 58, color: "bg-red-500" },
              { source: "MagicBricks", score: 55, color: "bg-amber-500" },
              { source: "Google Ads", score: 52, color: "bg-indigo-600" },
              { source: "Housing.com", score: 49, color: "bg-sky-500" },
              { source: "Facebook Lead Ads", score: 45, color: "bg-blue-600" },
              { source: "JustDial", score: 41, color: "bg-yellow-500" },
              { source: "NoBroker", score: 38, color: "bg-emerald-600" },
            ].map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                <div className="text-xs font-bold text-foreground font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.score}
                </div>
                <div 
                  className={`w-full rounded-t transition-all duration-300 relative ${item.color} opacity-80 group-hover:opacity-100 hover:shadow-[0_0_15px_rgba(0,0,0,0.05)]`}
                  style={{ height: `${item.score}%` }}
                />
                <div className="text-xs font-bold text-muted-foreground truncate w-full text-center tracking-tight mt-1 select-none">
                  {item.source}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  };

  const getPageHeader = () => {
    switch (activeTab) {
      case "menu":
        return {
          title: "Leads",
          subtitle: "Autonomous acquisition engine scanner scanning classifieds, maps, advertising forms, and portals.",
        };
      case "overview":
        return {
          title: "Lead Center Overview",
          subtitle: "Live operations metrics dashboard for Indian real estate buyers.",
        };
      case "1.1":
        return {
          title: "FSBO & Owner Listing Hunter",
          subtitle: "Scans classifieds/portals for direct listings.",
        };
      case "1.2":
        return {
          title: "Google Maps Builder & Scraper",
          subtitle: "Geo-scrapes builders, developers, and brokers.",
        };
      case "1.3":
        return {
          title: "Facebook & Google Ads Lead Sync",
          subtitle: "Real-time webhook syncer for paid social & search forms.",
        };
      case "1.4":
        return {
          title: "Portal Lead Aggregator",
          subtitle: "Consolidates listings from 99acres, MagicBricks & NoBroker.",
        };
      case "1.5":
        return {
          title: "Lead Enrichment Agent",
          subtitle: "Appends carrier, LinkedIn, income bracket in 90 seconds.",
        };
      case "1.6":
        return {
          title: "AI Lead Scoring Engine",
          subtitle: "Calculates lead temperature 0-100 based on behavior.",
        };
      default:
        return {
          title: "Leads",
          subtitle: "Autonomous acquisition engine.",
        };
    }
  };

  const headerInfo = getPageHeader();

  const dynamicTitle = activeTab === "menu" ? (
    headerInfo.title
  ) : (
    <div className="flex items-center gap-3">
      <button 
        onClick={() => setActiveTab("menu")}
        className="h-8 w-8 rounded-full border border-border bg-card hover:bg-muted text-foreground flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm mr-0.5"
        aria-label="Back to Leads menu"
      >
        <ArrowLeft className="h-4 w-4 stroke-[2.5]" />
      </button>
      <span className="font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors" onClick={() => setActiveTab("menu")}>
        {headerInfo.title}
      </span>
    </div>
  );

  return (
    <AppShell
      title={dynamicTitle}
      subtitle={headerInfo.subtitle}
    >
      {/* Main Tab Views Switcher */}
      <div className="transition-all duration-300">
        {activeTab === "menu" && renderMenuSelection()}
        {activeTab === "overview" && renderOverview()}
        {activeTab === "1.1" && renderFSBOHunter()}
        {activeTab === "1.2" && renderMapsScraper()}
        {activeTab === "1.3" && renderAdsSync()}
        {activeTab === "1.4" && renderPortalAggregator()}
        {activeTab === "1.5" && renderEnrichmentAgent()}
        {activeTab === "1.6" && renderScoringEngine()}
      </div>
    </AppShell>
  );
}

// Subcomponent: Styled KPI box with border
function StatBox({ 
  label, 
  value, 
  desc, 
  color, 
  customElement 
}: { 
  label: string; 
  value: string; 
  desc: string; 
  color: string; 
  customElement?: React.ReactNode 
}) {
  return (
    <Card className="p-5 flex flex-col justify-between relative min-h-24 border border-border bg-card">
      {customElement}
      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 font-display">
        {label}
      </div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className={`font-display text-2xl font-bold tracking-tight ${color}`}>{value}</div>
        <span className="text-xs font-semibold text-muted-foreground">{desc}</span>
      </div>
    </Card>
  );
}
