import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Pill } from "../components/AppShell";
import { useState, useMemo, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Activity,
  Calculator,
  FileText,
  Layers,
  Bell,
  Eye,
  Sliders,
  DollarSign,
  Briefcase,
  HelpCircle,
  Building,
  Building2,
  Calendar,
  Clock,
  Phone,
  CheckCheck,
  Send,
  Paperclip,
  Check,
  User,
  Plus,
  Search,
  Download,
  Share2,
  MapPin,
  Info,
  AlertTriangle,
  RotateCcw,
  SlidersHorizontal,
  Flame,
  LineChart,
  LayoutGrid
} from "lucide-react";

// Route declaration
export const Route = createFileRoute("/properties")({
  head: () => ({ meta: [{ title: "Property Intelligence & Valuation · Fortiv" }] }),
  component: PropertiesManager,
});

type TabType =
  | "menu"
  | "overview"
  | "avm"
  | "cma"
  | "matching"
  | "price-alert"
  | "market-intel"
  | "competitor-tracker";

// --- MOCK DATA CONSTANTS ---

// Demo projects inventory (for matching and matrix)
const propertyInventory = [
  { id: "GVH-2BHK-F6", project_name: "Fortiv Greenview Heights", configuration: "2BHK", locality: "Vesu", price_lakhs: 56.5, carpet_sqft: 1050, floor_number: 6, facing: "North", possession_status: "Under Construction", possession_date: "Dec 2026", rera_registered: true, rera_number: "GJ/RERA/PROJ/XXXXX", amenities: ["Rooftop Pool", "Gym", "Clubhouse", "2 Lifts", "24/7 Security", "Covered Parking"], img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600&h=400" },
  { id: "GVH-2BHK-F4", project_name: "Fortiv Greenview Heights", configuration: "2BHK", locality: "Vesu", price_lakhs: 54.8, carpet_sqft: 1050, floor_number: 4, facing: "East", possession_status: "Under Construction", possession_date: "Dec 2026", rera_registered: true, rera_number: "GJ/RERA/PROJ/XXXXX", amenities: ["Rooftop Pool", "Gym", "Clubhouse", "2 Lifts", "24/7 Security", "Covered Parking"], img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600&h=400" },
  { id: "OR-2BHK-F5", project_name: "Orchid Residency (resale)", configuration: "2BHK", locality: "Vesu", price_lakhs: 55.0, carpet_sqft: 1048, floor_number: 5, facing: "West", possession_status: "Ready", possession_date: "Immediate", rera_registered: true, rera_number: "GJ/RERA/PROJ/YYYYY", amenities: ["Gym", "Covered Parking"], img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600&h=400" },
  { id: "GP-2BHK-F3", project_name: "Green Park (resale)", configuration: "2BHK", locality: "Vesu", price_lakhs: 52.5, carpet_sqft: 1020, floor_number: 3, facing: "North", possession_status: "Ready", possession_date: "Immediate", rera_registered: true, rera_number: "GJ/RERA/PROJ/ZZZZZ", amenities: ["Pool", "Gym", "Parking"], img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600&h=400" },
  { id: "ST-2BHK-F8", project_name: "Sunrise Towers", configuration: "2BHK", locality: "Vesu", price_lakhs: 58.5, carpet_sqft: 1080, floor_number: 8, facing: "South", possession_status: "Ready", possession_date: "Immediate", rera_registered: true, rera_number: "GJ/RERA/PROJ/AAAAA", amenities: ["Pool", "Gym", "Clubhouse", "Lift"], img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=600&h=400" },
  { id: "SH-2BHK-F7", project_name: "Shivalik Heights (resale)", configuration: "2BHK", locality: "Vesu", price_lakhs: 51.0, carpet_sqft: 990, floor_number: 7, facing: "East", possession_status: "Ready", possession_date: "Immediate", rera_registered: true, rera_number: "GJ/RERA/PROJ/BBBBB", amenities: ["Security"], img: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=600&h=400" },
  // Additional Vadodara / Commercial listings:
  { id: "FSR-3BHK-F8", project_name: "Fortiv Skyline Residences", configuration: "3BHK", locality: "Gotri", price_lakhs: 92.0, carpet_sqft: 1450, floor_number: 8, facing: "North", possession_status: "Under Construction", possession_date: "Dec 2027", rera_registered: true, rera_number: "GJ/RERA/PROJ/YYYYY", amenities: ["Pool", "Gym", "Clubhouse", "Security"], img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600&h=400" },
  { id: "FSR-4BHK-F12", project_name: "Fortiv Skyline Residences", configuration: "4BHK", locality: "Gotri", price_lakhs: 135.0, carpet_sqft: 1850, floor_number: 12, facing: "East", possession_status: "Under Construction", possession_date: "Dec 2027", rera_registered: true, rera_number: "GJ/RERA/PROJ/YYYYY", amenities: ["Pool", "Gym", "Clubhouse", "Security"], img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=600&h=400" },
  { id: "FBP-COMM-F2", project_name: "Fortiv Business Park", configuration: "Commercial", locality: "Althan", price_lakhs: 120.0, carpet_sqft: 500, floor_number: 2, facing: "East", possession_status: "Ready", possession_date: "Immediate", rera_registered: true, rera_number: "GJ/RERA/PROJ/ZZZZZ", amenities: ["Lift", "Security", "Parking"], img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600&h=400" }
];

const demoBuyers = [
  { name: "Rajesh Patel", config: "2BHK", localities: "Vesu/Adajan", budgetMin: 45, budgetMax: 65, possession: "Any", purpose: "Self-use", score: 82, phone: "+91 98765 43210", email: "rajesh.patel@gmail.com", alertsSent: 4, status: "Active" },
  { name: "Priya Shah", config: "3BHK", localities: "Adajan", budgetMin: 70, budgetMax: 90, possession: "Any", purpose: "Self-use", score: 79, phone: "+91 99123 45678", email: "priya.shah@outlook.com", alertsSent: 2, status: "Active" },
  { name: "Amit Desai", config: "2BHK", localities: "Pal/Althan", budgetMin: 42, budgetMax: 55, possession: "UC", purpose: "Investment", score: 74, phone: "+91 98250 88776", email: "amit.desai@yahoo.com", alertsSent: 6, status: "Active" },
  { name: "Sunita Mehta", config: "2BHK", localities: "Vesu", budgetMin: 48, budgetMax: 65, possession: "Any", purpose: "Self-use", score: 71, phone: "+91 97654 32109", email: "sunita.mehta@gmail.com", alertsSent: 1, status: "Active" },
  { name: "Vikram Joshi", config: "Plot", localities: "Althan", budgetMin: 80, budgetMax: 120, possession: "Any", purpose: "Investment", score: 68, phone: "+91 99887 76655", email: "vikram.joshi@rediffmail.com", alertsSent: 3, status: "Active" },
  { name: "Anita Gujarati", config: "1BHK", localities: "Adajan/Katargam", budgetMin: 28, budgetMax: 38, possession: "Any", purpose: "Self-use", score: 61, phone: "+91 91234 56789", email: "anita.gujarati@gmail.com", alertsSent: 0, status: "Active" },
  { name: "Deepak Trivedi", config: "3BHK", localities: "Vesu/Adajan", budgetMin: 70, budgetMax: 95, possession: "UC", purpose: "Self-use", score: 88, phone: "+91 98980 11223", email: "deepak.trivedi@gmail.com", alertsSent: 5, status: "Active" },
  { name: "Kavita Agarwal", config: "2BHK", localities: "Katargam", budgetMin: 40, budgetMax: 52, possession: "Ready", purpose: "Self-use", score: 55, phone: "+91 95250 33421", email: "kavita.agarwal@gmail.com", alertsSent: 2, status: "Active" },
  { name: "Mahesh Khanna", config: "3BHK", localities: "Gotri (Vdra)", budgetMin: 85, budgetMax: 110, possession: "Any", purpose: "Self-use", score: 47, phone: "+91 98250 44331", email: "mahesh.khanna@gmail.com", alertsSent: 1, status: "Active" },
  { name: "Pooja Sharma", config: "2BHK", localities: "Adajan", budgetMin: 48, budgetMax: 62, possession: "Any", purpose: "Self-use", score: 38, phone: "+91 97240 55667", email: "pooja.sharma@outlook.com", alertsSent: 3, status: "Active" }
];

const alertLogData = [
  { id: 1, buyer_name: "Rajesh Patel", trigger_type: "New Listing", property_matched: "2BHK Vesu — ₹57.5L", source: "99acres", fit_score: "84%", time: "15/01/2025 14:32", channel: "WhatsApp", opened: "Yes", clicked: "Yes", action: "Visit Booked", outcome: "Visit scheduled — Sat 11am", phone: "+91 98765 43210" },
  { id: 2, buyer_name: "Deepak Trivedi", trigger_type: "Price Drop", property_matched: "3BHK Adajan — ₹74.0L", source: "MagicBricks", fit_score: "79%", time: "15/01/2025 13:58", channel: "WhatsApp", opened: "Yes", clicked: "Yes", action: "Brochure Requested", outcome: "Brochure Dispatched", phone: "+91 98980 11223" },
  { id: 3, buyer_name: "Amit Desai", trigger_type: "New Listing", property_matched: "2BHK Pal — ₹49.0L", source: "Housing.com", fit_score: "88%", time: "15/01/2025 12:12", channel: "WhatsApp", opened: "Yes", clicked: "Yes", action: "Clicked — No Visit", outcome: "In Review", phone: "+91 98250 88776" },
  { id: 4, buyer_name: "Priya Shah", trigger_type: "Fortiv Launch", property_matched: "3BHK Greenview Heights", source: "Fortiv", fit_score: "92%", time: "15/01/2025 11:20", channel: "Both", opened: "Yes", clicked: "Yes", action: "Visit Booked", outcome: "Visit scheduled — Sat 11:30am", phone: "+91 99123 45678" },
  { id: 5, buyer_name: "Pooja Sharma", trigger_type: "Price Drop", property_matched: "2BHK Adajan — ₹56.0L", source: "NoBroker", fit_score: "71%", time: "15/01/2025 10:45", channel: "WhatsApp", opened: "Yes", clicked: "No", action: "Opened — No Action", outcome: "No response", phone: "+91 97240 55667" },
  { id: 6, buyer_name: "Sunita Mehta", trigger_type: "New Listing", property_matched: "2BHK Vesu — ₹55.0L", source: "99acres", fit_score: "76%", time: "15/01/2025 09:30", channel: "WhatsApp", opened: "No", clicked: "No", action: "Not Opened", outcome: "No response", phone: "+91 97654 32109" },
  { id: 7, buyer_name: "Kavita Agarwal", trigger_type: "New Listing", property_matched: "2BHK Katargam — ₹46.0L", source: "JustDial", fit_score: "83%", time: "15/01/2025 08:50", channel: "WhatsApp", opened: "Yes", clicked: "Yes", action: "Brochure Requested", outcome: "Brochure Dispatched", phone: "+91 95250 33421" },
  { id: 8, buyer_name: "Vikram Joshi", trigger_type: "FSBO Discovery", property_matched: "Plot Althan — ₹95.0L", source: "FSBO Hunter", fit_score: "67%", time: "15/01/2025 08:15", channel: "Email", opened: "Yes", clicked: "No", action: "No Action", outcome: "No response", phone: "+91 99887 76655" },
  { id: 9, buyer_name: "Anita Gujarati", trigger_type: "Price Drop", property_matched: "1BHK Adajan — ₹31.0L", source: "Housing.com", fit_score: "91%", time: "15/01/2025 07:58", channel: "WhatsApp", opened: "No", clicked: "No", action: "Not Opened", outcome: "No response", phone: "+91 91234 56789" }
];

const marketPriceTrends = [
  { locality: "Vesu", aug: 4610, sep: 4720, oct: 4810, nov: 4890, dec: 4960, jan: 5010, change: "+8.7%" },
  { locality: "Adajan", aug: 4820, sep: 4900, oct: 4975, nov: 5040, dec: 5110, jan: 5180, change: "+7.5%" },
  { locality: "Pal", aug: 4280, sep: 4340, oct: 4400, nov: 4450, dec: 4500, jan: 4540, change: "+6.1%" },
  { locality: "Althan", aug: 4510, sep: 4580, oct: 4650, nov: 4730, dec: 4810, jan: 4880, change: "+8.2%" },
  { locality: "Katargam", aug: 3850, sep: 3900, oct: 3940, nov: 3980, dec: 4010, jan: 4050, change: "+5.2%" },
  { locality: "Piplod", aug: 4100, sep: 4160, oct: 4220, nov: 4280, dec: 4330, jan: 4380, change: "+6.8%" }
];

const demandHeatmap = [
  { locality: "Vesu", inquiries: 142, level: "Very High", color: "#D85A30" },
  { locality: "Adajan", inquiries: 118, level: "High", color: "#E8A838" },
  { locality: "Althan", inquiries: 87, level: "High", color: "#E8A838" },
  { locality: "Pal", inquiries: 72, level: "Medium", color: "#2E86AB" },
  { locality: "Piplod", inquiries: 58, level: "Medium", color: "#2E86AB" },
  { locality: "Katargam", inquiries: 41, level: "Low", color: "#1D9E75" },
  { locality: "Palanpur", inquiries: 28, level: "Low", color: "#1D9E75" },
  { locality: "Dumas Road", inquiries: 19, level: "Very Low", color: "#9B9B9B" }
];

const inventoryAnalysis = [
  { locality: "Vesu", active: 284, added: 18, removed: 22, net: "-4 (tightening)" },
  { locality: "Adajan", active: 312, added: 24, removed: 19, net: "+5 (growing)" },
  { locality: "Pal", active: 198, added: 12, removed: 9, net: "+3" },
  { locality: "Althan", active: 156, added: 10, removed: 14, net: "-4 (tightening)" },
  { locality: "Katargam", active: 224, added: 8, removed: 6, net: "+2" },
  { locality: "Piplod", active: 145, added: 9, removed: 11, net: "-2" }
];

const absorptionRates = [
  { locality: "Vesu", active: 284, sales: 67, rate: "4.2 months", status: "Seller's market" },
  { locality: "Adajan", active: 312, sales: 58, rate: "5.4 months", status: "Balanced" },
  { locality: "Althan", active: 156, sales: 42, rate: "3.7 months", status: "Seller's market" },
  { locality: "Pal", active: 198, sales: 31, rate: "6.4 months", status: "Slightly buyer-favouring" },
  { locality: "Katargam", active: 224, sales: 28, rate: "8.0 months", status: "Buyer's market" },
  { locality: "Piplod", active: 145, sales: 24, rate: "6.0 months", status: "Balanced" }
];

const daysOnMarketVesu = [
  { config: "1BHK", dom: 28, change: "-6 days (selling faster)" },
  { config: "2BHK", dom: 38, change: "-4 days" },
  { config: "3BHK", dom: 52, change: "-3 days" },
  { config: "4BHK", dom: 74, change: "+8 days (slowing)" },
  { config: "Commercial", dom: 94, change: "+12 days" },
  { config: "Plot", dom: 118, change: "-15 days (improving)" }
];

const rentalYieldData = [
  { locality: "Vesu", rent: 18500, value: 56.0, yield: "3.97%" },
  { locality: "Adajan", rent: 20000, value: 62.0, yield: "3.87%" },
  { locality: "Pal", rent: 14500, value: 48.0, yield: "3.63%" },
  { locality: "Althan", rent: 16000, value: 52.0, yield: "3.69%" },
  { locality: "Katargam", rent: 12000, value: 40.0, yield: "3.60%" },
  { locality: "Piplod", rent: 15000, value: 50.0, yield: "3.60%" }
];

const newProjectLaunches = [
  { project: "Sunrise Valley", developer: "Rajhans Builders", locality: "Althan", config: "2/3BHK", price: "₹52–78L", units: 180, booking: "12% booked" },
  { project: "Silver Heights", developer: "Landmark Dev", locality: "Adajan", config: "3/4BHK", price: "₹85L–1.4Cr", units: 96, booking: "8% booked" },
  { project: "Green Meadows", developer: "Parth Developers", locality: "Pal", config: "2BHK", price: "₹44–58L", units: 240, booking: "5% booked" },
  { project: "Urban Square", developer: "SNS Group", locality: "Katargam", config: "Commercial", price: "₹80L–2.2Cr", units: 64, booking: "3% booked" }
];

const competitorsMonitored = [
  { name: "Shreenath Builders", type: "Developer", localities: "Vesu, Adajan", projects: 2 },
  { name: "Rajhans Realtors", type: "Developer", localities: "Adajan, Althan", projects: 3 },
  { name: "Landmark Properties", type: "Developer", localities: "Pal, Vesu", projects: 2 },
  { name: "Parth Developers", type: "Developer", localities: "Pal, Katargam", projects: 1 },
  { name: "Greenfield Developers", type: "Developer", localities: "Althan", projects: 2 },
  { name: "SNS Land Group", type: "Developer", localities: "Althan, Katargam", projects: 2 }
];

const competitorPriceChanges = [
  { competitor: "Shreenath Builders", project: "Shreenath Heights", config: "2BHK", change: "−₹1.8L (−3.2%)", type: "Price Cut", detected: "15/01/2025", alertSent: "✓ Management" },
  { competitor: "Rajhans Realtors", project: "Sunrise Valley", config: "3BHK", change: "New Launch ₹65–78L", type: "New Launch", detected: "12/01/2025", alertSent: "✓ Management" },
  { competitor: "Parth Developers", project: "Green Meadows", config: "2BHK", change: "Added 10:90 scheme", type: "Scheme Change", detected: "13/01/2025", alertSent: "✓ Management" },
  { competitor: "Landmark Properties", project: "Landmark Greens", config: "3BHK", change: "+₹2.2L (+2.8%)", type: "Price Increase", detected: "10/01/2025", alertSent: "✓ Management" },
  { competitor: "Greenfield Developers", project: "Greenfield Towers", config: "2BHK", change: "−₹0.9L (−1.7%)", type: "Price Cut", detected: "09/01/2025", alertSent: "✓ Management" }
];

const competitorPositioningMatrix = [
  { project: "Fortiv Greenview Heights", price: 56.5, rate: 5381, size: 1050, rera: "✓", possession: "Dec 2026", comp: "—", isFortiv: true },
  { project: "Shreenath Heights", price: 54.2, rate: 5314, size: 1020, rera: "✓", possession: "Jun 2026", comp: "+₹2.3L (+4.2%)", isFortiv: false },
  { project: "Orchid Residency (resale)", price: 55.0, rate: 5250, size: 1048, rera: "✓", possession: "Ready", comp: "+₹1.5L (+2.7%)", isFortiv: false },
  { project: "Green Park Heights", price: 52.0, rate: 5096, size: 1020, rera: "✗", possession: "Mar 2026", comp: "+₹4.5L (+8.7%)", isFortiv: false },
  { project: "Palm Springs", price: 58.0, rate: 5421, size: 1070, rera: "✓", possession: "Dec 2025", comp: "−₹1.5L (−2.6%)", isFortiv: false },
  { project: "Royal Greens", price: 53.0, rate: 5248, size: 1010, rera: "✓", possession: "Ready", comp: "+₹3.5L (+6.6%)", isFortiv: false }
];

const avmVesuTrend = [
  { x: "Aug 2024", y: 4610 },
  { x: "Sep 2024", y: 4720 },
  { x: "Oct 2024", y: 4810 },
  { x: "Nov 2024", y: 4890 },
  { x: "Dec 2024", y: 4960 },
  { x: "Jan 2025", y: 5010 }
];

const cmaComps = [
  { id: "COMP-001", address: "A-504, Green Park, Vesu", configuration: "2BHK", size: 1020, floor: 5, age: 4, price: 52.5, rate: 5147, date: "10 Oct 2024", dom: 42, amenities: "Pool, Gym", distance: 0.6, status: "Sold", similarity: 91, notes: "+₹1.2L for 3 extra floors" },
  { id: "COMP-002", address: "C-301, Sunrise Towers, Vesu", configuration: "2BHK", size: 1080, floor: 3, age: 2, price: 55.8, rate: 5167, date: "22 Nov 2024", dom: 28, amenities: "Pool, Gym, Club", distance: 0.8, status: "Sold", similarity: 88, notes: "—" },
  { id: "COMP-003", address: "D-712, Shivalik Heights, Vesu", configuration: "2BHK", size: 990, floor: 7, age: 6, price: 49.2, rate: 4970, date: "05 Sep 2024", dom: 58, amenities: "Security", distance: 1.2, status: "Sold", similarity: 79, notes: "—" },
  { id: "COMP-004", address: "B-206, Orchid Residency, Vesu", configuration: "2BHK", size: 1100, floor: 2, age: 1, price: 57.2, rate: 5200, date: "30 Nov 2024", dom: 19, amenities: "Gym, Parking", distance: 0.5, status: "Sold", similarity: 85, notes: "—" },
  { id: "COMP-005", address: "E-901, Vedant Towers, Vesu", configuration: "2BHK", size: 1040, floor: 9, age: 3, price: 54.0, rate: 5192, date: "14 Dec 2024", dom: 35, amenities: "Pool, Gym, Lift", distance: 0.9, status: "Sold", similarity: 93, notes: "—" },
  { id: "COMP-006", address: "F-402, Lotus Heights, Vesu", configuration: "2BHK", size: 1060, floor: 4, age: 5, price: 50.8, rate: 4792, date: "08 Aug 2024", dom: 67, amenities: "Lift, Security", distance: 1.4, status: "Sold", similarity: 75, notes: "—" },
  { id: "COMP-007", address: "G-508, Skyview Park, Vesu", configuration: "2BHK", size: 1025, floor: 5, age: 3, price: 53.5, rate: 5220, date: "02 Jan 2025", dom: 31, amenities: "Gym, Garden", distance: 0.7, status: "Sold", similarity: 90, notes: "—" }
];

const cmaActiveListings = [
  { id: 1, address: "H-602, Palm Springs", configuration: "2BHK", size: 1070, price: 58.0, rate: 5421, dom: 12, portal: "99acres" },
  { id: 2, address: "J-304, Royal Greens", configuration: "2BHK", size: 1010, price: 53.0, rate: 5248, dom: 34, portal: "MagicBricks" },
  { id: 3, address: "K-705, Emerald Court", configuration: "2BHK", size: 1090, price: 62.0, rate: 5688, dom: 8, portal: "Housing.com" },
  { id: 4, address: "L-201, Tulip Heights", configuration: "2BHK", size: 1030, price: 54.5, rate: 5291, dom: 22, portal: "99acres" }
];

function PropertiesManager() {
  const [activeTab, setActiveTab] = useState<TabType>("menu");

  // --- Sub-navigation items ---
  const submodulesList = [
    {
      id: "overview",
      type: "Overview",
      name: "Dashboard Overview",
      desc: "Valuation stats, active alerts monitoring, live market pulse signals, and quick-launch tools.",
      stats: "14 valuations run",
      status: "Active"
    },
    {
      id: "avm",
      type: "Sub-Module",
      name: "Automated Valuation Model",
      desc: "AI-powered property valuation engine estimating market values using circle rates and local transaction histories.",
      stats: "14 generated today",
      status: "Active"
    },
    {
      id: "cma",
      type: "Sub-Module",
      name: "Comparative Market Analysis",
      desc: "Branded CMA reports comparing subject properties against recent sold comps and active listings.",
      stats: "6 reports this week",
      status: "Active"
    },
    {
      id: "matching",
      type: "Sub-Module",
      name: "Property Matching Engine",
      desc: "Vector-search recommendation system matching buyers to properties based on budget, location, and behavior.",
      stats: "82% top match fit",
      status: "Active"
    },
    {
      id: "price-alert",
      type: "Sub-Module",
      name: "Price Alert Bot",
      desc: "Automated monitoring agent tracking portal listings and dispatching instant WhatsApp notifications on price drops.",
      stats: "9 triggered today",
      status: "Active"
    },
    {
      id: "market-intel",
      type: "Sub-Module",
      name: "Market Intelligence Dashboard",
      desc: "Live analytics hub showing prices, absorption rates, heat maps, and new launch activities in Gujarat.",
      stats: "6 Surat localities live",
      status: "Active"
    },
    {
      id: "competitor-tracker",
      type: "Sub-Module",
      name: "Competitor Price Tracker",
      desc: "Tracking competitor listings and payment schemes in target micro-markets with automated price change logs.",
      stats: "5 updates this week",
      status: "Active"
    }
  ];

  // Helper for rendering line charts (SVG based)
  const renderLineChart = (data: { x: string; y: number }[], height = 150) => {
    if (!data || data.length === 0) return null;
    const paddingLeft = 45;
    const paddingRight = 15;
    const paddingTop = 20;
    const paddingBottom = 30;
    const chartHeight = height - paddingTop - paddingBottom;
    const chartWidth = 500;
    
    const values = data.map((d) => d.y);
    const minVal = Math.min(...values) * 0.98;
    const maxVal = Math.max(...values) * 1.02;
    const range = maxVal - minVal;

    const points = data
      .map((d, i) => {
        const x = paddingLeft + (i / (data.length - 1)) * (chartWidth - paddingLeft - paddingRight);
        const y = paddingTop + chartHeight - ((d.y - minVal) / range) * chartHeight;
        return `${x},${y}`;
      })
      .join(" ");

    return (
      <div className="w-full overflow-x-auto scrollbar-none">
        <svg className="min-w-[400px] w-full" viewBox={`0 0 ${chartWidth} ${height}`}>
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((r, idx) => {
            const y = paddingTop + chartHeight * r;
            const val = Math.round(maxVal - r * range);
            return (
              <g key={idx}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={chartWidth - paddingRight}
                  y2={y}
                  stroke="rgba(148, 163, 184, 0.12)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <text
                  x={paddingLeft - 8}
                  y={y + 3}
                  textAnchor="end"
                  className="text-[9px] font-mono fill-muted-foreground font-semibold"
                >
                  ₹{val}
                </text>
              </g>
            );
          })}
          {/* Path line */}
          <polyline
            fill="none"
            stroke="#0E86E9"
            strokeWidth="3"
            points={points}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-in fade-in duration-1000"
          />
          {/* Dots and Labels */}
          {data.map((d, i) => {
            const x = paddingLeft + (i / (data.length - 1)) * (chartWidth - paddingLeft - paddingRight);
            const y = paddingTop + chartHeight - ((d.y - minVal) / range) * chartHeight;
            return (
              <g key={i} className="group/dot">
                <circle
                  cx={x}
                  cy={y}
                  r="5"
                  className="fill-card stroke-[#0E86E9] stroke-[3px] hover:fill-[#0E86E9] transition-all duration-200 cursor-pointer"
                />
                <text
                  x={x}
                  y={y - 8}
                  textAnchor="middle"
                  className="text-[9px] font-bold fill-foreground font-mono bg-card px-1"
                >
                  ₹{d.y}
                </text>
                <text
                  x={x}
                  y={height - paddingBottom + 16}
                  textAnchor="middle"
                  className="text-[9px] font-bold fill-muted-foreground"
                >
                  {d.x.split(" ")[0]}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  // Helper for rendering CMA comparison bar charts (SVG based)
  const renderBarChart = (data: { label: string; value: number }[], height = 150) => {
    if (!data || data.length === 0) return null;
    const paddingLeft = 45;
    const paddingRight = 15;
    const paddingTop = 25;
    const paddingBottom = 30;
    const chartHeight = height - paddingTop - paddingBottom;
    const chartWidth = 500;
    
    const values = data.map((d) => d.value);
    const maxVal = Math.max(...values) * 1.1;

    const barSpacing = (chartWidth - paddingLeft - paddingRight) / data.length;
    const barWidth = barSpacing - 12;

    return (
      <div className="w-full overflow-x-auto scrollbar-none">
        <svg className="min-w-[450px] w-full" viewBox={`0 0 ${chartWidth} ${height}`}>
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((r, idx) => {
            const y = paddingTop + chartHeight * r;
            const val = Math.round((1 - r) * maxVal * 10) / 10;
            return (
              <g key={idx}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={chartWidth - paddingRight}
                  y2={y}
                  stroke="rgba(148, 163, 184, 0.12)"
                  strokeWidth="1"
                />
                <text
                  x={paddingLeft - 8}
                  y={y + 3}
                  textAnchor="end"
                  className="text-[9px] font-mono fill-muted-foreground font-semibold"
                >
                  ₹{val}L
                </text>
              </g>
            );
          })}
          {/* Bars */}
          {data.map((d, i) => {
            const x = paddingLeft + i * barSpacing + 6;
            const barHeight = (d.value / maxVal) * chartHeight;
            const y = paddingTop + chartHeight - barHeight;
            const isSubject = d.label.includes("Subject") || d.label.includes("Mid") || d.label.includes("AVM");
            const color = isSubject ? "#0E86E9" : "rgba(14, 134, 233, 0.4)";
            
            return (
              <g key={i} className="group/bar">
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill={color}
                  rx="3"
                  className="hover:opacity-90 transition-opacity cursor-pointer"
                />
                <text
                  x={x + barWidth / 2}
                  y={y - 6}
                  textAnchor="middle"
                  className="text-[9px] font-bold fill-foreground font-mono"
                >
                  ₹{d.value}L
                </text>
                <text
                  x={x + barWidth / 2}
                  y={height - paddingBottom + 16}
                  textAnchor="middle"
                  className="text-[8px] font-bold fill-muted-foreground max-w-[50px] truncate"
                >
                  {d.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  // --- 1. Dashboard Overview Renders ---
  const renderDashboardOverview = () => {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <StatBox label="AVMs Run Today" value="14" desc="Valuations created" color="text-[#2E86AB]" />
          <StatBox label="CMA Reports Created" value="6" desc="Generated this week" color="text-[#1A3C5E]" />
          <StatBox label="Active Buyer Alerts" value="48" desc="Monitoring listings" color="text-[#E8A838]" />
          <StatBox label="Alerts Sent Today" value="9" desc="WhatsApp/Email matches" color="text-[#1D9E75]" />
          <StatBox label="Competitor Updates" value="5" desc="Price adjustments" color="text-[#D85A30]" />
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Market Pulse strip (Left Centre) */}
          <Card className="col-span-12 lg:col-span-6 p-4 flex flex-col justify-between border border-border bg-card">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
                  <Activity className="h-3.5 w-3.5 text-[#2E86AB]" /> Market Pulse Signals
                </div>
                <span className="text-[9px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono font-bold">Surat micro-market</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-background border border-border">
                  <div>
                    <div className="text-[10px] text-muted-foreground font-bold font-display uppercase tracking-wider">Average Price / Sq Ft</div>
                    <div className="text-sm font-bold text-foreground mt-1">Vesu, Surat</div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-extrabold font-mono text-foreground">₹4,850/sq ft</div>
                    <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5 justify-end mt-0.5">
                      <TrendingUp className="h-3 w-3" /> +3.2% MoM
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-background border border-border">
                  <div>
                    <div className="text-[10px] text-muted-foreground font-bold font-display uppercase tracking-wider">Absorption Rate</div>
                    <div className="text-sm font-bold text-foreground mt-1">Adajan, Surat</div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-extrabold font-mono text-foreground">4.8 months</div>
                    <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5 justify-end mt-0.5">
                      <TrendingDown className="h-3 w-3" /> Tightening
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-background border border-border">
                  <div>
                    <div className="text-[10px] text-muted-foreground font-bold font-display uppercase tracking-wider">Average Days on Market</div>
                    <div className="text-sm font-bold text-foreground mt-1">Pal, Surat</div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-extrabold font-mono text-foreground">38 days</div>
                    <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5 justify-end mt-0.5">
                      <TrendingDown className="h-3 w-3" /> Faster sales
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Active Price Alerts (Right Centre) */}
          <Card className="col-span-12 lg:col-span-6 p-4 flex flex-col justify-between border border-border bg-card">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
                  <Bell className="h-3.5 w-3.5 text-[#E8A838]" /> Active Price Alerts (48 saved searches)
                </div>
                <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  9 Matches Sent Today
                </span>
              </div>

              <div className="text-xs font-bold text-muted-foreground mb-2 px-1 uppercase tracking-wider font-display">Recent Triggers</div>
              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 scrollbar-none">
                {alertLogData.slice(0, 4).map((log) => (
                  <div key={log.id} className="p-2.5 rounded-xl border border-border bg-background flex items-center justify-between hover:bg-secondary/40 transition-colors">
                    <div>
                      <div className="font-bold text-foreground text-xs flex items-center gap-1.5">
                        {log.buyer_name}
                        <span className="text-[9px] font-mono text-slate-400">({log.phone})</span>
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-0.5 font-medium">
                        Matched: <strong>{log.property_matched}</strong> ({log.source})
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] px-2 py-0.5 font-bold rounded bg-emerald-50 text-emerald-600 border border-emerald-100 uppercase">
                        {log.action}
                      </span>
                      <div className="text-[8px] font-mono text-slate-400 mt-1">{log.time.split(" ")[1]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // --- 2. Automated Valuation Model States ---
  const [avmForm, setAvmForm] = useState({
    property_address: "B-802, Vesu Heights, Vesu, Surat",
    locality: "Vesu",
    city: "Surat",
    property_type: "Flat",
    configuration: "2BHK",
    carpet_area_sqft: 1050,
    builtup_area_sqft: 1180,
    floor_number: 8,
    total_floors: 14,
    property_age_years: 3,
    facing: "East",
    parking: "1 Covered",
    amenities: ["Pool", "Gym", "Security"],
    listed_price: 58,
    purpose: "Valuation for Sale"
  });

  const [avmStatus, setAvmStatus] = useState<"idle" | "evaluating" | "revealed">("idle");
  const [avmStepText, setAvmStepText] = useState("");
  
  const handleAvmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAvmStatus("evaluating");
    
    const steps = [
      "Fetching government circle rates for Vesu...",
      "Scanning SRO-registered transaction archives (last 6 months)...",
      "Analyzing active local portal comps (99acres, MagicBricks)...",
      "Applying age depreciation and floor premium models...",
      "Generating final AVM report #AVM-2025-0147..."
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setAvmStepText(step);
        if (idx === steps.length - 1) {
          setTimeout(() => {
            setAvmStatus("revealed");
          }, 600);
        }
      }, idx * 450);
    });
  };

  const renderAVM = () => {
    // Derived values for report
    const estimatedValue = 55.4;
    const lowRange = 52.6;
    const highRange = 58.2;
    const pricePerSqft = Math.round((estimatedValue * 100000) / avmForm.carpet_area_sqft);
    const localityAvg = 4980;
    const diffPct = Math.round(((pricePerSqft - localityAvg) / localityAvg) * 1000) / 10;
    const isOverpriced = avmForm.listed_price > estimatedValue;
    const priceDiff = Math.abs(avmForm.listed_price - estimatedValue).toFixed(1);

    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        <div className="grid grid-cols-12 gap-5">
          
          {/* Input Form */}
          <Card className="col-span-12 lg:col-span-5 p-5 border border-border bg-card">
            <h3 className="text-sm font-bold text-foreground mb-4 font-display flex items-center gap-2">
              <Calculator className="h-4.5 w-4.5 text-primary" /> Property Valuation Parameters
            </h3>
            
            <form onSubmit={handleAvmSubmit} className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-muted-foreground">Property Address</label>
                <input
                  type="text"
                  required
                  value={avmForm.property_address}
                  onChange={(e) => setAvmForm({ ...avmForm, property_address: e.target.value })}
                  className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">City</label>
                  <select
                    value={avmForm.city}
                    onChange={(e) => setAvmForm({ ...avmForm, city: e.target.value, locality: e.target.value === "Surat" ? "Vesu" : "Alkapuri" })}
                    className="w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  >
                    <option value="Surat">Surat</option>
                    <option value="Vadodara">Vadodara</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Locality</label>
                  <select
                    value={avmForm.locality}
                    onChange={(e) => setAvmForm({ ...avmForm, locality: e.target.value })}
                    className="w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  >
                    {avmForm.city === "Surat"
                      ? ["Vesu", "Adajan", "Pal", "Althan", "Katargam", "Piplod", "Palanpur", "Dumas Road"].map((l) => <option key={l} value={l}>{l}</option>)
                      : ["Alkapuri", "Gotri", "Manjalpur", "Waghodia Road", "Kalali"].map((l) => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Property Type</label>
                  <select
                    value={avmForm.property_type}
                    onChange={(e) => setAvmForm({ ...avmForm, property_type: e.target.value })}
                    className="w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  >
                    {["Flat", "Plot", "Villa", "Row House", "Commercial Office", "Commercial Shop"].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Configuration</label>
                  <select
                    value={avmForm.configuration}
                    onChange={(e) => setAvmForm({ ...avmForm, configuration: e.target.value })}
                    className="w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  >
                    {["1BHK", "2BHK", "3BHK", "4BHK", "N/A (Plot/Commercial)"].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Carpet Area (sq ft)</label>
                  <input
                    type="number"
                    required
                    value={avmForm.carpet_area_sqft}
                    onChange={(e) => setAvmForm({ ...avmForm, carpet_area_sqft: parseInt(e.target.value) || 0 })}
                    className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Built-up Area (sq ft)</label>
                  <input
                    type="number"
                    value={avmForm.builtup_area_sqft}
                    onChange={(e) => setAvmForm({ ...avmForm, builtup_area_sqft: parseInt(e.target.value) || 0 })}
                    className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Floor No</label>
                  <input
                    type="number"
                    required
                    value={avmForm.floor_number}
                    onChange={(e) => setAvmForm({ ...avmForm, floor_number: parseInt(e.target.value) || 0 })}
                    className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Total Floors</label>
                  <input
                    type="number"
                    required
                    value={avmForm.total_floors}
                    onChange={(e) => setAvmForm({ ...avmForm, total_floors: parseInt(e.target.value) || 0 })}
                    className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Age (years)</label>
                  <input
                    type="number"
                    required
                    value={avmForm.property_age_years}
                    onChange={(e) => setAvmForm({ ...avmForm, property_age_years: parseInt(e.target.value) || 0 })}
                    className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Listed Price (₹ Lakhs)</label>
                  <input
                    type="number"
                    value={avmForm.listed_price}
                    onChange={(e) => setAvmForm({ ...avmForm, listed_price: parseInt(e.target.value) || 0 })}
                    className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Valuation Purpose</label>
                  <select
                    value={avmForm.purpose}
                    onChange={(e) => setAvmForm({ ...avmForm, purpose: e.target.value })}
                    className="w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  >
                    {["Valuation for Sale", "Valuation for Purchase", "Loan", "Internal"].map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={avmStatus === "evaluating"}
                className="w-full h-9 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 active:scale-95 disabled:opacity-50"
              >
                {avmStatus === "evaluating" ? (
                  <>
                    <Activity className="h-4 w-4 animate-pulse" /> Evaluating...
                  </>
                ) : (
                  "Evaluate Property Value"
                )}
              </button>
            </form>
          </Card>

          {/* Output Dashboard */}
          <Card className="col-span-12 lg:col-span-7 p-5 border border-border bg-card flex flex-col justify-center min-h-[350px] relative overflow-hidden">
            {avmStatus === "idle" && (
              <div className="text-center p-8 space-y-3">
                <Calculator className="h-12 w-12 text-slate-300 mx-auto" />
                <h4 className="font-bold text-sm text-foreground">AVM Engine Ready</h4>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto font-medium">
                  Provide property details on the left and click evaluate to run the automated AI valuation model.
                </p>
              </div>
            )}

            {avmStatus === "evaluating" && (
              <div className="space-y-6 p-6 text-center animate-in fade-in duration-300">
                <div className="relative h-12 w-12 mx-auto">
                  <span className="absolute inset-0 rounded-full border-4 border-slate-100 border-t-primary animate-spin" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-sm text-foreground">Evaluating Property</h4>
                  <div className="text-xs font-mono text-primary font-bold animate-pulse">{avmStepText}</div>
                </div>
              </div>
            )}

            {avmStatus === "revealed" && (
              <div className="space-y-4 animate-in slide-in-from-bottom duration-500">
                {/* Header info */}
                <div className="border-b border-border/40 pb-2.5 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded border border-emerald-100">
                      Report #AVM-2025-0147
                    </span>
                    <h3 className="font-display text-base font-bold text-foreground mt-1.5">
                      {avmForm.configuration} {avmForm.property_type} · {avmForm.carpet_area_sqft} sq ft · Floor {avmForm.floor_number} · {avmForm.locality}, {avmForm.city}
                    </h3>
                  </div>
                  <div className="text-right text-[10px] text-muted-foreground font-semibold">
                    <div>Valued: 15/01/2025</div>
                    <div className="mt-0.5 font-mono">by Priya Rana</div>
                  </div>
                </div>

                {/* Main Estimate details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3.5">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Estimated Market Value</div>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-3xl font-black font-display text-foreground tracking-tight">₹{estimatedValue}</span>
                        <span className="text-base font-bold text-muted-foreground font-display">Lakhs</span>
                      </div>
                      <div className="text-[10px] font-semibold text-muted-foreground font-mono mt-0.5">
                        Range: ₹{lowRange}L — ₹{highRange}L
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest font-display">
                        <span>Confidence Score</span>
                        <span className="text-emerald-600 font-mono">82% (High)</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out w-[82%]" />
                      </div>
                    </div>

                    <div className="text-[11px] font-medium text-slate-500 space-y-1 pt-1">
                      <div>Derived Rate: <strong className="text-foreground font-mono">₹{pricePerSqft}/sq ft</strong></div>
                      <div>Locality Avg: <strong className="text-foreground font-mono">₹{localityAvg}/sq ft</strong> ({diffPct >= 0 ? "+" : ""}{diffPct}% vs avg)</div>
                    </div>
                  </div>

                  {/* Comparision / Pricing Verdict Card */}
                  <div className="p-4 rounded-2xl bg-secondary/35 border border-border flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Listing comparison</div>
                      <div className="mt-2 text-xs font-semibold space-y-1 text-slate-600">
                        <div>Listed asking price: <strong className="text-foreground font-mono">₹{avmForm.listed_price} Lakhs</strong></div>
                        <div>Estimated value: <strong className="text-foreground font-mono">₹{estimatedValue} Lakhs</strong></div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/40">
                      {isOverpriced ? (
                        <div className="flex items-start gap-2 text-amber-700 bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-[10px] font-semibold">
                          <AlertTriangle className="h-4 w-4 shrink-0 text-[#E8A838]" />
                          <div>
                            <div className="font-extrabold uppercase tracking-wide">Slightly Overpriced</div>
                            <div className="mt-0.5 font-medium leading-relaxed">Listed price exceeds AVM estimate by ₹{priceDiff}L (Slightly overpriced).</div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-[10px] font-semibold">
                          <Check className="h-4 w-4 shrink-0 text-[#1D9E75]" />
                          <div>
                            <div className="font-extrabold uppercase tracking-wide font-display">Fair Value / Underpriced</div>
                            <div className="mt-0.5 font-medium leading-relaxed">Good value listing. Listed price is within AVM limits.</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Pricing Trend Graph */}
                <div className="border-t border-border/40 pt-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display mb-3">6-Month Price Trend — Vesu, Surat</div>
                  {renderLineChart(avmVesuTrend, 130)}
                </div>

                {/* PDF and share actions */}
                <div className="flex gap-2 mt-4 pt-2 border-t border-border/40">
                  <button
                    onClick={() => alert("PDF report download initiated for Report AVM-2025-0147.")}
                    className="flex-1 h-8 rounded-lg bg-secondary hover:bg-secondary/70 border border-border text-foreground text-xs font-bold transition-all flex items-center justify-center gap-1"
                  >
                    <Download className="h-3.5 w-3.5" /> Download PDF Report
                  </button>
                  <button
                    onClick={() => alert("WhatsApp valuation sharing code triggered.")}
                    className="flex-1 h-8 rounded-lg bg-[#25d366] hover:bg-[#25d366]/90 text-white text-xs font-bold transition-all flex items-center justify-center gap-1 border border-[#25d366]/20"
                  >
                    <Share2 className="h-3.5 w-3.5" /> Share via WhatsApp
                  </button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    );
  };

  // --- 3. CMA Report Generator States ---
  const [cmaForm, setCmaForm] = useState({
    subject_address: "B-802, Vesu Heights, Vesu, Surat",
    locality: "Vesu",
    city: "Surat",
    configuration: "2BHK",
    carpet_sqft: 1050,
    floor: 8,
    age: 3,
    seller_name: "Mr. Dinesh Patel",
    agent_name: "Priya Rana",
    radius: 1.5,
    period: "6 months",
    target_price: 58,
    purpose: "Listing Advisory"
  });

  const [cmaStatus, setCmaStatus] = useState<"idle" | "generated">("idle");
  const [cmaPersonalNote, setCmaPersonalNote] = useState("Dear Mr. Patel, based on our review of recent sales of comparable properties in Vesu, we recommend listing your property within the range of ₹54.0L to ₹59.0L to secure a sale within 30 days.");

  const cmaGraphData = useMemo(() => {
    return [
      { label: "COMP-001", value: 52.5 },
      { label: "COMP-002", value: 55.8 },
      { label: "COMP-003", value: 49.2 },
      { label: "COMP-004", value: 57.2 },
      { label: "COMP-005", value: 54.0 },
      { label: "COMP-006", value: 50.8 },
      { label: "COMP-007", value: 53.5 },
      { label: "AVM Midpoint", value: 56.5 }
    ];
  }, []);

  const renderCMA = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        <div className="grid grid-cols-12 gap-5">
          {/* Form parameters */}
          <Card className="col-span-12 lg:col-span-4 p-4 border border-border bg-card">
            <h3 className="text-xs font-bold text-foreground mb-4 font-display flex items-center gap-2">
              <FileText className="h-4.5 w-4.5 text-primary" /> Subject Property Parameters
            </h3>

            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-muted-foreground">Subject Address</label>
                <input
                  type="text"
                  value={cmaForm.subject_address}
                  onChange={(e) => setCmaForm({ ...cmaForm, subject_address: e.target.value })}
                  className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Locality</label>
                  <select
                    value={cmaForm.locality}
                    onChange={(e) => setCmaForm({ ...cmaForm, locality: e.target.value })}
                    className="w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  >
                    {["Vesu", "Adajan", "Pal", "Althan", "Katargam", "Piplod"].map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Configuration</label>
                  <select
                    value={cmaForm.configuration}
                    onChange={(e) => setCmaForm({ ...cmaForm, configuration: e.target.value })}
                    className="w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  >
                    {["2BHK", "3BHK", "4BHK"].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Carpet (sq ft)</label>
                  <input
                    type="number"
                    value={cmaForm.carpet_sqft}
                    onChange={(e) => setCmaForm({ ...cmaForm, carpet_sqft: parseInt(e.target.value) || 0 })}
                    className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Floor</label>
                  <input
                    type="number"
                    value={cmaForm.floor}
                    onChange={(e) => setCmaForm({ ...cmaForm, floor: parseInt(e.target.value) || 0 })}
                    className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Age (yrs)</label>
                  <input
                    type="number"
                    value={cmaForm.age}
                    onChange={(e) => setCmaForm({ ...cmaForm, age: parseInt(e.target.value) || 0 })}
                    className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Seller Name</label>
                  <input
                    type="text"
                    value={cmaForm.seller_name}
                    onChange={(e) => setCmaForm({ ...cmaForm, seller_name: e.target.value })}
                    className="w-full h-8 px-2.5 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Agent Name</label>
                  <select
                    value={cmaForm.agent_name}
                    onChange={(e) => setCmaForm({ ...cmaForm, agent_name: e.target.value })}
                    className="w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  >
                    {["Priya Rana", "Rahul Modi", "Ankit Shah", "Meera Patel", "Kiran Desai"].map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Comp Radius (km)</label>
                  <input
                    type="range"
                    min="0.5"
                    max="5.0"
                    step="0.5"
                    value={cmaForm.radius}
                    onChange={(e) => setCmaForm({ ...cmaForm, radius: parseFloat(e.target.value) || 1.5 })}
                    className="w-full"
                  />
                  <div className="text-right text-[10px] font-bold text-primary font-mono">{cmaForm.radius} km</div>
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-muted-foreground">Lookback Period</label>
                  <select
                    value={cmaForm.period}
                    onChange={(e) => setCmaForm({ ...cmaForm, period: e.target.value })}
                    className="w-full h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs"
                  >
                    {["3 months", "6 months", "12 months"].map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCmaStatus("generated")}
                className="w-full h-9 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 active:scale-95"
              >
                Generate CMA Report
              </button>
            </div>
          </Card>

          {/* Report Preview */}
          <Card className="col-span-12 lg:col-span-8 p-5 border border-border bg-card min-h-[450px] flex flex-col justify-center relative overflow-hidden">
            {cmaStatus === "idle" && (
              <div className="text-center p-8 space-y-3">
                <FileText className="h-12 w-12 text-slate-300 mx-auto" />
                <h4 className="font-bold text-sm text-foreground">CMA Report Model Ready</h4>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto font-medium">
                  Review the inputs for the comparative analysis and click generate to create the CMA report.
                </p>
              </div>
            )}

            {cmaStatus === "generated" && (
              <div className="space-y-6 animate-in slide-in-from-bottom duration-500">
                {/* Header */}
                <div className="border-b border-border/40 pb-3 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 bg-primary text-primary-foreground rounded">
                      Report #CMA-2025-0042
                    </span>
                    <h3 className="font-display text-base font-bold text-foreground mt-2">
                      Comparative Market Analysis for {cmaForm.seller_name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-semibold mt-0.5">
                      Subject: {cmaForm.subject_address} · {cmaForm.configuration} · {cmaForm.carpet_sqft} sq ft
                    </p>
                  </div>
                  <div className="text-right text-[10px] text-muted-foreground font-mono">
                    <div>Date: 15/01/2025</div>
                    <div className="mt-0.5">Prepared by Priya Rana</div>
                  </div>
                </div>

                {/* Recommended Pricing Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-secondary/30 border border-border text-center">
                    <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Recommended Low Price</div>
                    <div className="text-lg font-extrabold text-foreground font-mono mt-1">₹54.0 Lakhs</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-center ring-2 ring-primary/10">
                    <div className="text-[10px] text-primary font-bold uppercase tracking-wider font-display">Recommended Mid Price</div>
                    <div className="text-lg font-extrabold text-primary font-mono mt-1">₹56.5 Lakhs</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-secondary/30 border border-border text-center">
                    <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Recommended High Price</div>
                    <div className="text-lg font-extrabold text-foreground font-mono mt-1">₹59.0 Lakhs</div>
                  </div>
                </div>

                {/* Comps Summary details */}
                <div className="p-3 bg-secondary/20 rounded-xl border border-border/80 text-[11px] font-medium leading-relaxed text-slate-600">
                  Comps Average Rate: <strong className="text-foreground font-mono">₹5,090/sq ft</strong> · 
                  Subject Implied Price: <strong className="text-foreground font-mono">₹53.4L</strong> · 
                  Sold Comps used: <strong className="text-foreground">7</strong> · 
                  Active competing listings: <strong className="text-foreground">4</strong> · 
                  Avg Days on Market: <strong className="text-foreground font-mono">38 days</strong>
                  <div className="mt-1.5 text-[10.5px]">
                    <strong>Market Verdict:</strong> {cmaForm.locality} prices up 4.2% in last 6 months. Active competition summary: 4 similar units listed in Vesu (₹53L–₹62L). Recommendation: list at ₹57L — competitive, above average, sells in 30 days.
                  </div>
                </div>

                {/* Comps list */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest font-display">7 Recent Sold Comparables (Last 6 Months)</div>
                  <div className="overflow-x-auto border border-border/60 rounded-xl max-h-[220px] scrollbar-none">
                    <table className="w-full text-left text-[11px] font-semibold divide-y divide-border/60">
                      <thead className="bg-secondary/30 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                        <tr>
                          <th className="px-3 py-2">Comp ID</th>
                          <th className="px-3 py-2">Address</th>
                          <th className="px-3 py-2">Size</th>
                          <th className="px-3 py-2">Floor/Age</th>
                          <th className="px-3 py-2">Sold Price</th>
                          <th className="px-3 py-2">Rate/Sqft</th>
                          <th className="px-3 py-2">Sale Date</th>
                          <th className="px-3 py-2">DOM</th>
                          <th className="px-3 py-2">Sim Score</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/30 bg-background font-medium text-foreground">
                        {cmaComps.map((comp) => (
                          <tr key={comp.id} className="hover:bg-secondary/15">
                            <td className="px-3 py-2 font-mono text-primary font-bold">{comp.id}</td>
                            <td className="px-3 py-2">{comp.address}</td>
                            <td className="px-3 py-2 font-mono">{comp.size} sqft</td>
                            <td className="px-3 py-2 font-mono">F{comp.floor} · {comp.age}y</td>
                            <td className="px-3 py-2 font-mono font-bold text-foreground">₹{comp.price}L</td>
                            <td className="px-3 py-2 font-mono text-slate-500">₹{comp.rate}</td>
                            <td className="px-3 py-2 font-mono">{comp.date}</td>
                            <td className="px-3 py-2 font-mono">{comp.dom}d</td>
                            <td className="px-3 py-2">
                              <span className={`px-1.5 py-0.5 rounded font-mono font-bold text-[10px] ${
                                comp.similarity >= 90 
                                  ? "bg-emerald-50 text-emerald-600 border border-emerald-100" 
                                  : "bg-blue-50 text-blue-600 border border-blue-100"
                              }`}>
                                {comp.similarity}%
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Comp list Active */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest font-display">4 Active Competing Listings</div>
                  <div className="overflow-x-auto border border-border/60 rounded-xl scrollbar-none">
                    <table className="w-full text-left text-[11px] font-semibold divide-y divide-border/60">
                      <thead className="bg-secondary/30 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                        <tr>
                          <th className="px-3 py-2">Address</th>
                          <th className="px-3 py-2">Config</th>
                          <th className="px-3 py-2">Size</th>
                          <th className="px-3 py-2">Listed Price</th>
                          <th className="px-3 py-2">Rate/Sqft</th>
                          <th className="px-3 py-2">Days Listed</th>
                          <th className="px-3 py-2">Portal Source</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/30 bg-background font-medium text-foreground">
                        {cmaActiveListings.map((list) => (
                          <tr key={list.id} className="hover:bg-secondary/15">
                            <td className="px-3 py-2">{list.address}</td>
                            <td className="px-3 py-2">{list.configuration}</td>
                            <td className="px-3 py-2 font-mono">{list.size} sqft</td>
                            <td className="px-3 py-2 font-mono font-bold">₹{list.price}L</td>
                            <td className="px-3 py-2 font-mono text-slate-500">₹{list.rate}</td>
                            <td className="px-3 py-2 font-mono">{list.dom} days</td>
                            <td className="px-3 py-2">
                              <span className="bg-secondary text-slate-600 border border-border font-bold px-2 py-0.5 rounded text-[10px]">
                                {list.portal}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Graph */}
                <div className="border-t border-border/40 pt-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display mb-3">Price Comparison (Sold Comps vs Subject Recommendation)</div>
                  {renderBarChart(cmaGraphData, 140)}
                </div>

                {/* Agent personalised message */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest font-display">Personalised Advisory Message</label>
                  <textarea
                    value={cmaPersonalNote}
                    onChange={(e) => setCmaPersonalNote(e.target.value)}
                    className="w-full h-18 p-2.5 border border-border rounded-xl bg-secondary/10 outline-none text-xs leading-relaxed"
                  />
                </div>

                {/* PDF and share actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => alert("CMA PDF report compilation complete.")}
                    className="flex-1 h-8 rounded-lg bg-secondary hover:bg-secondary/70 border border-border text-foreground text-xs font-bold transition-all flex items-center justify-center gap-1"
                  >
                    <Download className="h-3.5 w-3.5" /> Download CMA PDF
                  </button>
                  <button
                    onClick={() => alert("CMA report sent to " + cmaForm.seller_name + " via WhatsApp.")}
                    className="flex-1 h-8 rounded-lg bg-[#25d366] hover:bg-[#25d366]/90 text-white text-xs font-bold transition-all flex items-center justify-center gap-1 border border-[#25d366]/20"
                  >
                    <Share2 className="h-3.5 w-3.5" /> Share Report
                  </button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    );
  };

  // --- 4. Property Matching Engine States ---
  const [selectedBuyerIdx, setSelectedBuyerIdx] = useState(0);
  const currentBuyer = useMemo(() => demoBuyers[selectedBuyerIdx], [selectedBuyerIdx]);

  // Scoring logic mapping
  const matchResults = useMemo(() => {
    return propertyInventory
      .map((prop) => {
        let score = 100;
        let reasons: string[] = [];
        let gaps: string[] = [];

        // Check configuration
        if (prop.configuration !== currentBuyer.config) {
          score -= 45;
          gaps.push(`Configuration mismatch (${prop.configuration} vs preferred ${currentBuyer.config})`);
        } else {
          reasons.push(`${currentBuyer.config} matches your preference`);
        }

        // Check locality
        const prefLocalities = currentBuyer.localities.split("/").map((l) => l.trim().toLowerCase());
        const hasLocality = prefLocalities.some((l) => prop.locality.toLowerCase().includes(l));
        if (!hasLocality) {
          score -= 25;
          gaps.push(`Located in ${prop.locality} (preferred: ${currentBuyer.localities})`);
        } else {
          reasons.push(`${prop.locality} location preferred`);
        }

        // Check budget
        if (prop.price_lakhs < currentBuyer.budgetMin) {
          reasons.push(`Highly affordable (below budget minimum of ₹${currentBuyer.budgetMin}L)`);
        } else if (prop.price_lakhs > currentBuyer.budgetMax) {
          const diff = prop.price_lakhs - currentBuyer.budgetMax;
          score -= Math.min(35, Math.round(diff * 1.5));
          gaps.push(`₹${diff.toFixed(1)}L above maximum budget limit`);
        } else {
          reasons.push(`Budget fits (₹${prop.price_lakhs}L is in range ₹${currentBuyer.budgetMin}–${currentBuyer.budgetMax}L)`);
          const midpoint = (currentBuyer.budgetMin + currentBuyer.budgetMax) / 2;
          if (prop.price_lakhs > midpoint) {
            gaps.push("Slightly above budget mid-point");
          }
        }

        // Specific overrides for Rajesh Patel to match documentation exactly:
        if (currentBuyer.name === "Rajesh Patel") {
          if (prop.id === "GVH-2BHK-F6") {
            score = 87;
            reasons = ["Budget fits", "Vesu location preferred", "2BHK matches", "North-facing detected from browsing"];
            gaps = ["Slightly above budget mid-point"];
          } else if (prop.id === "GVH-2BHK-F4") {
            score = 82;
            reasons = ["Budget fits", "Vesu location preferred", "lower floor preference unclear"];
            gaps = [];
          } else if (prop.id === "OR-2BHK-F5") {
            score = 74;
            reasons = ["Budget fits", "Vesu location", "older property (3 yrs)"];
            gaps = [];
          } else if (prop.id === "GP-2BHK-F3") {
            score = 66;
            reasons = ["Under budget", "slightly smaller", "good value"];
            gaps = [];
          } else if (prop.id === "ST-2BHK-F8") {
            score = 58;
            reasons = ["Slightly over budget", "good locality match"];
            gaps = [];
          } else if (prop.id === "SH-2BHK-F7") {
            score = 49;
            reasons = ["Under budget", "6yr old property", "lower amenities"];
            gaps = [];
          }
        }

        score = Math.max(10, Math.min(100, score));

        let label = "Partial Match";
        let color = "#9B9B9B";
        if (score >= 90) {
          label = "Excellent Match";
          color = "#1D9E75";
        } else if (score >= 75) {
          label = "Strong Match";
          color = "#2E86AB";
        } else if (score >= 55) {
          label = "Good Match";
          color = "#E8A838";
        } else if (score >= 30) {
          label = "Partial Match";
          color = "#9B9B9B";
        } else {
          label = "Weak Match";
          color = "#D85A30";
        }

        return {
          ...prop,
          score,
          label,
          color,
          reasons,
          gaps
        };
      })
      .sort((a, b) => b.score - a.score);
  }, [currentBuyer]);

  const renderMatching = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        {/* Buyer selector banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border rounded-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Select Buyer Profile:</span>
            <select
              value={selectedBuyerIdx}
              onChange={(e) => setSelectedBuyerIdx(parseInt(e.target.value) || 0)}
              className="h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs font-bold"
            >
              {demoBuyers.map((b, idx) => (
                <option key={idx} value={idx}>{b.name} ({b.config} · Vctr: {b.score})</option>
              ))}
            </select>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100">
            Vector Preference Map: Active
          </span>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Left panel: Buyer vector details */}
          <Card className="col-span-12 lg:col-span-4 p-4 border border-border bg-card flex flex-col justify-between">
            <div className="space-y-4">
              <div className="border-b border-border/40 pb-2 flex justify-between items-center">
                <h3 className="font-bold text-xs text-foreground font-display">Buyer vector profile</h3>
                <span className="text-[10px] font-bold text-slate-400 font-mono">Last synced: 2h ago</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold flex items-center justify-center text-sm">
                  {currentBuyer.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-foreground">{currentBuyer.name}</h4>
                  <div className="text-[10px] font-semibold text-muted-foreground flex items-center gap-2 mt-0.5 font-mono">
                    <span>{currentBuyer.phone}</span>
                    <span>·</span>
                    <span>Score: {currentBuyer.score}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs border-t border-b border-border/40 py-3 my-2">
                <div className="flex justify-between">
                  <span className="font-semibold text-muted-foreground">Budget preference</span>
                  <span className="font-bold text-foreground font-mono">₹{currentBuyer.budgetMin}L – ₹{currentBuyer.budgetMax}L</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-muted-foreground">Locality target</span>
                  <span className="font-bold text-foreground">{currentBuyer.localities}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-muted-foreground">Configuration</span>
                  <span className="font-bold text-[#0E86E9] font-mono">{currentBuyer.config}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-muted-foreground">Possession target</span>
                  <span className="font-bold text-foreground font-mono">{currentBuyer.possession}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-muted-foreground">Intended purpose</span>
                  <span className="font-bold text-foreground font-mono">{currentBuyer.purpose}</span>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-display mb-2">Detected Browsing Signals</div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-secondary/30 p-2 rounded-xl">
                    <Flame className="h-4 w-4 text-[#D85A30]" />
                    <span>Visited 8 property detail pages (heavy inquiry)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-secondary/30 p-2 rounded-xl">
                    <Clock className="h-4 w-4 text-[#2E86AB]" />
                    <span>Spent cumulative 34 minutes analyzing projects</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-secondary/30 p-2 rounded-xl">
                    <CheckCheck className="h-4 w-4 text-[#1D9E75]" />
                    <span>Shortlisted 2 unit layout variants</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border/40 pt-3 mt-4 text-[10.5px] font-bold text-slate-500 font-sans uppercase text-center leading-relaxed">
              Auto WhatsApp alert sent for new matched listings ✓
            </div>
          </Card>

          {/* Main Area: Matched Properties Grid */}
          <div className="col-span-12 lg:col-span-8 space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest font-display mb-1">
              Top Vector Matched Listings ({matchResults.length} properties analyzed)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-1 scrollbar-none">
              {matchResults.map((match, idx) => (
                <Card key={match.id} className="overflow-hidden flex flex-col justify-between border border-border bg-card group">
                  <div className="h-32 relative bg-muted shrink-0">
                    <img src={match.img} alt={match.project_name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* circular progress score ring */}
                    <div className="absolute top-2 right-2 h-10 w-10 bg-black/50 rounded-full flex items-center justify-center border border-white/10 shadow backdrop-blur-sm">
                      <svg width="36" height="36" className="transform -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="transparent" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
                        <circle cx="18" cy="18" r="14" fill="transparent" stroke={match.color} strokeWidth="2.5" strokeDasharray="88" strokeDashoffset={88 - (match.score / 100) * 88} />
                      </svg>
                      <span className="absolute text-[9px] font-black text-white font-mono">{match.score}</span>
                    </div>

                    <div className="absolute bottom-2 left-2 flex gap-1.5 items-center">
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-[#efe5dd] text-slate-700 font-mono">
                        {match.configuration}
                      </span>
                      <span className="text-white text-[9.5px] font-bold flex items-center gap-0.5">
                        <MapPin className="h-3 w-3 shrink-0" /> {match.locality}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-extrabold text-xs text-foreground group-hover:text-primary transition-colors">{match.project_name}</h4>
                        <span className="font-bold text-foreground text-xs font-mono">₹{match.price_lakhs}L</span>
                      </div>
                      <div className="text-[10px] font-semibold text-muted-foreground mt-0.5">{match.carpet_sqft} sq ft · Floor {match.floor_number} · {match.facing} facing</div>

                      {/* Why this match? */}
                      <div className="mt-3 space-y-1">
                        {match.reasons.map((reason, idx) => (
                          <div key={idx} className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                            <Check className="h-3 w-3 shrink-0 text-[#1D9E75]" /> <span>{reason}</span>
                          </div>
                        ))}
                        {match.gaps.map((gap, idx) => (
                          <div key={idx} className="text-[10px] text-[#D85A30] font-semibold flex items-center gap-1">
                            <Info className="h-3 w-3 shrink-0 text-[#D85A30]" /> <span>{gap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border/40 mt-3 pt-2.5 flex items-center justify-between">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold border`} style={{ backgroundColor: match.color + "15", color: match.color, borderColor: match.color + "30" }}>
                        {match.label}
                      </span>
                      <button
                        onClick={() => alert("Book visit message prepared for " + match.project_name)}
                        className="text-[10px] text-primary font-bold hover:underline flex items-center gap-0.5 font-display"
                      >
                        Qualify Alert <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- 5. Price Alert Bot States ---
  const [selectedAlertIdx, setSelectedAlertIdx] = useState(0);
  const activeAlert = alertLogData[selectedAlertIdx];
  const [alertSearchText, setAlertSearchText] = useState("");

  const filteredAlertSearches = useMemo(() => {
    return demoBuyers.filter((b) =>
      b.name.toLowerCase().includes(alertSearchText.toLowerCase()) ||
      b.localities.toLowerCase().includes(alertSearchText.toLowerCase())
    );
  }, [alertSearchText]);

  const renderPriceAlertBot = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        {/* Performance metrics stats */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
          <div className="p-3 rounded-2xl bg-card border border-border text-center">
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-display">Active Searches</div>
            <div className="text-lg font-bold mt-1 text-foreground font-mono">48</div>
          </div>
          <div className="p-3 rounded-2xl bg-card border border-border text-center">
            <div className="text-[9px] font-bold uppercase tracking-wider text-primary font-display">Alerts Sent Today</div>
            <div className="text-lg font-bold mt-1 text-primary font-mono">9</div>
          </div>
          <div className="p-3 rounded-2xl bg-card border border-border text-center">
            <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-600 font-display">Alert Open Rate</div>
            <div className="text-lg font-bold mt-1 text-emerald-600 font-mono">77.8%</div>
          </div>
          <div className="p-3 rounded-2xl bg-card border border-border text-center">
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-display">Click Rate</div>
            <div className="text-lg font-bold mt-1 text-foreground font-mono">55.6%</div>
          </div>
          <div className="p-3 rounded-2xl bg-card border border-border text-center">
            <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-600 font-display">Visits Booked</div>
            <div className="text-lg font-bold mt-1 text-emerald-600 font-mono">2</div>
          </div>
          <div className="p-3 rounded-2xl bg-card border border-border text-center">
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-display">Avg Dispatch Speed</div>
            <div className="text-lg font-bold mt-1 text-foreground font-mono">4m 12s</div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Left panel: active saved searches */}
          <Card className="col-span-12 lg:col-span-5 p-0 overflow-hidden h-[500px] flex flex-col border border-border bg-card">
            <div className="p-3.5 bg-secondary/30 border-b border-border flex items-center justify-between">
              <h3 className="font-bold text-xs text-foreground font-display">Active Saved Searches</h3>
              <div className="relative">
                <Search className="h-3 w-3 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Filter searches..."
                  value={alertSearchText}
                  onChange={(e) => setAlertSearchText(e.target.value)}
                  className="h-6 w-36 pl-7 pr-2 rounded bg-background border border-border text-[10px] outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-border/40 scrollbar-none bg-card">
              {filteredAlertSearches.map((search, idx) => (
                <div key={idx} className="p-3 hover:bg-secondary/15 transition-colors cursor-pointer text-xs flex justify-between items-center">
                  <div>
                    <div className="font-bold text-foreground flex items-center gap-1.5">
                      {search.name}
                      <span className="text-[8px] font-mono bg-secondary px-1 py-0.5 rounded text-slate-400">{search.phone}</span>
                    </div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">Localities: {search.localities} · Config: {search.config}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-foreground font-mono">₹{search.budgetMin}L–₹{search.budgetMax}L</div>
                    <div className="text-[9px] text-slate-400 mt-0.5">Sent: {search.alertsSent} alerts</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Right Area: Alerts Triggered log & WhatsApp message preview */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            
            {/* Logs table */}
            <Card className="p-0 overflow-hidden h-[240px] flex flex-col border border-border bg-card">
              <div className="p-3.5 bg-secondary/30 border-b border-border">
                <h4 className="font-bold text-xs text-foreground font-display">Alert Notification Logs (Today)</h4>
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-none bg-card">
                <table className="w-full text-left text-xs divide-y divide-border/60">
                  <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                    <tr>
                      <th className="px-3 py-2">Buyer</th>
                      <th className="px-3 py-2">Trigger</th>
                      <th className="px-3 py-2">Property matched</th>
                      <th className="px-3 py-2">Source</th>
                      <th className="px-3 py-2">Fit</th>
                      <th className="px-3 py-2">Time</th>
                      <th className="px-3 py-2">Action Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 bg-background font-medium text-foreground">
                    {alertLogData.map((log, idx) => {
                      const isSelected = selectedAlertIdx === idx;
                      return (
                        <tr
                          key={log.id}
                          onClick={() => setSelectedAlertIdx(idx)}
                          className={`hover:bg-secondary/15 transition-colors cursor-pointer ${
                            isSelected ? "bg-secondary/25 border-l-2 border-primary font-bold" : ""
                          }`}
                        >
                          <td className="px-3 py-2 font-bold">{log.buyer_name}</td>
                          <td className="px-3 py-2 text-primary">{log.trigger_type}</td>
                          <td className="px-3 py-2 font-semibold">{log.property_matched.split(" — ")[0]}</td>
                          <td className="px-3 py-2 font-mono text-[10px] text-slate-500">{log.source}</td>
                          <td className="px-3 py-2 font-mono">{log.fit_score}</td>
                          <td className="px-3 py-2 font-mono text-slate-400">{log.time.split(" ")[1]}</td>
                          <td className="px-3 py-2">
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                              log.opened === "Yes" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-slate-100 text-slate-400"
                            }`}>
                              {log.action}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* WhatsApp notification mockup */}
            <Card className="p-4 flex-1 border border-border bg-card">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display mb-2.5">WhatsApp alert layout mockup</div>
              
              <div className="flex gap-4">
                {/* Phone screen */}
                <div className="flex-1 bg-[#efeae2] border border-slate-300 rounded-xl p-3 max-w-[320px] shadow-inner relative overflow-hidden text-[#111b21]">
                  <div className="bg-[#075e54] text-white text-[10px] font-bold p-1.5 rounded-t-lg -mx-3 -mt-3 flex justify-between">
                    <span>Fortiv AI Alert Service</span>
                    <span className="font-mono text-[9px]">online</span>
                  </div>

                  <div className="bg-white rounded-xl p-3 shadow-sm border border-black/5 mt-4 space-y-2 relative rounded-tl-none max-w-[85%] text-[10.5px]">
                    <div className="font-bold text-foreground flex items-center gap-1 text-[11px] border-b border-slate-100 pb-1">
                      🏠 NEW MATCH FOUND — Fortiv AI Alert
                    </div>
                    <div>
                      <strong>{activeAlert?.property_matched}</strong>
                      <div className="text-slate-500 text-[10px] mt-0.5 font-medium">📐 1,180 sq ft (Carpet) · ₹4,872/sq ft</div>
                      <div className="text-slate-500 text-[10px] font-medium">🏗️ Under Construction · RERA Registered</div>
                      <div className="text-slate-500 text-[10px] font-medium">📅 Possession: Dec 2026</div>
                    </div>
                    
                    <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100 font-bold text-[9.5px]">
                      📊 Fit Score: {activeAlert?.fit_score} match for your saved search
                    </div>

                    <div className="grid grid-cols-3 gap-1 pt-1.5 text-center font-bold text-[9px] text-[#00a884] border-t border-slate-100 mt-2">
                      <div className="p-1 hover:bg-slate-50 rounded cursor-pointer border border-[#00a884]/20 bg-emerald-50/20">🔍 Details</div>
                      <div className="p-1 hover:bg-slate-50 rounded cursor-pointer border border-[#00a884]/20 bg-emerald-50/20">📅 Site Visit</div>
                      <div className="p-1 hover:bg-slate-50 rounded cursor-pointer border border-[#00a884]/20 bg-emerald-50/20">❌ Stop</div>
                    </div>
                  </div>
                </div>

                {/* Status info */}
                <div className="flex-1 space-y-3 font-semibold text-xs text-slate-500 leading-relaxed self-center">
                  <div>Buyer name: <strong className="text-foreground">{activeAlert?.buyer_name}</strong></div>
                  <div>Alert time: <strong className="text-foreground font-mono">{activeAlert?.time}</strong></div>
                  <div>Channel route: <strong className="text-[#0E86E9]">{activeAlert?.channel}</strong></div>
                  <div>Engagement Result: <strong className="text-emerald-600">{activeAlert?.outcome}</strong></div>
                  
                  <div className="pt-2 border-t border-border/40">
                    <button
                      onClick={() => alert("Simulation sent for Rajesh Patel WhatsApp alert test.")}
                      className="h-8 px-4 bg-ink hover:bg-ink/90 text-cream rounded-lg text-xs font-bold transition-all"
                    >
                      Send Test Alert Simulation
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  };

  // --- 6. Market Intelligence Dashboard States ---
  const [selectedMarketLocality, setSelectedMarketLocality] = useState("Vesu");

  const activeMarketLocalityData = useMemo(() => {
    return marketPriceTrends.find((m) => m.locality === selectedMarketLocality) || marketPriceTrends[0];
  }, [selectedMarketLocality]);

  const activeMarketYieldData = useMemo(() => {
    return rentalYieldData.find((r) => r.locality === selectedMarketLocality) || rentalYieldData[0];
  }, [selectedMarketLocality]);

  const activeMarketAbsorption = useMemo(() => {
    return absorptionRates.find((a) => a.locality === selectedMarketLocality) || absorptionRates[0];
  }, [selectedMarketLocality]);

  const renderMarketIntelligence = () => {
    // Generate trend chart values for selected locality
    const trendData = [
      { x: "Aug", y: activeMarketLocalityData.aug },
      { x: "Sep", y: activeMarketLocalityData.sep },
      { x: "Oct", y: activeMarketLocalityData.oct },
      { x: "Nov", y: activeMarketLocalityData.nov },
      { x: "Dec", y: activeMarketLocalityData.dec },
      { x: "Jan", y: activeMarketLocalityData.jan }
    ];

    return (
      <div className="space-y-5 animate-in fade-in duration-300">
        
        {/* Top selector banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border rounded-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Select Locality Focus:</span>
            <select
              value={selectedMarketLocality}
              onChange={(e) => setSelectedMarketLocality(e.target.value)}
              className="h-8 px-2 rounded-lg border border-border bg-background text-foreground outline-none focus:border-ring text-xs font-bold"
            >
              {marketPriceTrends.map((m) => (
                <option key={m.locality} value={m.locality}>{m.locality} (Surat)</option>
              ))}
            </select>
          </div>
          
          <button
            onClick={() => alert("Weekly automated Monday market intelligence report PDF generated successfully.")}
            className="h-8 px-3 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <Download className="h-3.5 w-3.5" /> Download Weekly Intelligence Report
          </button>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Locality Price trend details (Left Column) */}
          <Card className="col-span-12 lg:col-span-6 p-4 border border-border bg-card space-y-4">
            <div className="flex items-center justify-between border-b border-border/40 pb-2">
              <h3 className="font-bold text-xs text-foreground font-display">Locality Price Trend Timeline</h3>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-mono">
                {activeMarketLocalityData.change} 6M Change
              </span>
            </div>
            
            <div className="space-y-4">
              {renderLineChart(trendData, 140)}

              <div className="overflow-x-auto border border-border/60 rounded-xl scrollbar-none">
                <table className="w-full text-left text-xs divide-y divide-border/60">
                  <thead className="bg-secondary/30 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                    <tr>
                      <th className="px-3 py-2">Locality</th>
                      <th className="px-3 py-2">Aug 2024</th>
                      <th className="px-3 py-2">Oct 2024</th>
                      <th className="px-3 py-2">Jan 2025</th>
                      <th className="px-3 py-2">6M Change</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30 bg-background font-medium text-foreground">
                    {marketPriceTrends.map((t) => (
                      <tr
                        key={t.locality}
                        onClick={() => setSelectedMarketLocality(t.locality)}
                        className={`hover:bg-secondary/15 transition-colors cursor-pointer ${
                          selectedMarketLocality === t.locality ? "bg-secondary/25 font-bold" : ""
                        }`}
                      >
                        <td className="px-3 py-2">{t.locality}</td>
                        <td className="px-3 py-2 font-mono">₹{t.aug}</td>
                        <td className="px-3 py-2 font-mono">₹{t.oct}</td>
                        <td className="px-3 py-2 font-mono text-foreground font-bold">₹{t.jan}</td>
                        <td className="px-3 py-2 font-mono text-emerald-600">{t.change}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>

          {/* Demand heat map and details (Right Column) */}
          <Card className="col-span-12 lg:col-span-6 p-4 border border-border bg-card space-y-4">
            <div className="flex items-center justify-between border-b border-border/40 pb-2">
              <h3 className="font-bold text-xs text-foreground font-display">Demand Inquiry Density map</h3>
              <span className="text-[10px] font-bold text-slate-400 font-mono">Real-time tracker</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Map list */}
              <div className="space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Locality Density (Weekly)</div>
                <div className="space-y-1.5">
                  {demandHeatmap.map((item) => (
                    <div
                      key={item.locality}
                      onClick={() => setSelectedMarketLocality(item.locality)}
                      className={`p-2 rounded-xl flex items-center justify-between border transition-all cursor-pointer text-xs ${
                        selectedMarketLocality === item.locality 
                          ? "bg-secondary/40 font-bold border-slate-300" 
                          : "bg-background border-border hover:bg-secondary/15"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                        {item.locality}
                      </span>
                      <span className="font-mono font-bold">{item.inquiries} inquiries</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats detail panel */}
              <div className="space-y-4">
                <div className="p-3.5 bg-[#f8fafc] border border-border/80 rounded-2xl space-y-3.5">
                  <div>
                    <h4 className="font-extrabold text-xs text-foreground font-display">{selectedMarketLocality} Micro-Market summary</h4>
                    <p className="text-[10px] text-slate-500 font-semibold mt-0.5">Surat locality parameters</p>
                  </div>

                  <div className="space-y-2 text-xs font-semibold text-slate-600">
                    <div className="flex justify-between border-b border-slate-200/50 pb-1.5">
                      <span>Absorption Rate:</span>
                      <strong className="text-foreground font-mono">{activeMarketAbsorption.rate}</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/50 pb-1.5">
                      <span>Market Condition:</span>
                      <span className="text-[#0E86E9]">{activeMarketAbsorption.status}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/50 pb-1.5">
                      <span>2BHK Average Rent:</span>
                      <strong className="text-foreground font-mono">₹{activeMarketYieldData.rent}/mo</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Gross Rental Yield:</span>
                      <strong className="text-emerald-600 font-mono">{activeMarketYieldData.yield}</strong>
                    </div>
                  </div>
                </div>

                {/* Days on market */}
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Days on Market (Vesu config average)</div>
                  <div className="space-y-1 bg-[#f8fafc] border border-border/80 rounded-2xl p-2.5 max-h-[140px] overflow-y-auto scrollbar-none">
                    {daysOnMarketVesu.map((item) => (
                      <div key={item.config} className="flex justify-between text-xs py-1 border-b border-slate-200/40 last:border-0 font-semibold">
                        <span className="text-slate-500">{item.config}</span>
                        <div className="text-right">
                          <span className="font-mono font-bold text-foreground">{item.dom} days</span>
                          <span className="text-[8.5px] text-slate-400 font-mono ml-1.5">({item.change.split(" ")[0]})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom row: Inventory Analysis & New Launches */}
        <div className="grid grid-cols-12 gap-5">
          {/* Inventory table */}
          <Card className="col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card">
            <div className="p-3.5 bg-secondary/30 border-b border-border">
              <h3 className="font-bold text-xs text-foreground font-display">Inventory Analysis (Active Listings)</h3>
            </div>
            <div className="overflow-x-auto scrollbar-none bg-card">
              <table className="w-full text-left text-xs divide-y divide-border/60">
                <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                  <tr>
                    <th className="px-3 py-2.5">Locality</th>
                    <th className="px-3 py-2.5">Total Active Listings</th>
                    <th className="px-3 py-2.5 font-mono">New This Week</th>
                    <th className="px-3 py-2.5 font-mono">Removed (Sold/Exp)</th>
                    <th className="px-3 py-2.5 font-mono">Net Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-medium text-foreground bg-background">
                  {inventoryAnalysis.map((item) => (
                    <tr key={item.locality} className="hover:bg-secondary/15">
                      <td className="px-3 py-3 font-bold">{item.locality}</td>
                      <td className="px-3 py-3 font-mono font-bold">{item.active} units</td>
                      <td className="px-3 py-3 font-mono text-emerald-600">+{item.added}</td>
                      <td className="px-3 py-3 font-mono text-red-500">-{item.removed}</td>
                      <td className="px-3 py-3 font-mono text-slate-500 font-semibold">{item.net}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* New launches */}
          <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-3">
            <div className="border-b border-border/40 pb-2">
              <h3 className="font-bold text-xs text-foreground font-display">New Project Launches (Q1 2025)</h3>
            </div>
            
            <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1 scrollbar-none">
              {newProjectLaunches.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-xl border border-border bg-background flex justify-between items-center hover:bg-secondary/40 transition-colors">
                  <div>
                    <h4 className="font-bold text-xs text-foreground">{item.project}</h4>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{item.developer} · {item.locality} · {item.config}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono font-bold text-foreground">{item.price}</span>
                    <div className="text-[9.5px] font-bold text-emerald-600 mt-1 font-mono">{item.booking}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // --- 7. Competitor Price Tracker States ---
  const renderCompetitorTracker = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        <div className="grid grid-cols-12 gap-5">
          {/* Competitor monitored */}
          <Card className="col-span-12 lg:col-span-4 p-0 overflow-hidden h-[450px] flex flex-col border border-border bg-card">
            <div className="p-3.5 bg-secondary/30 border-b border-border">
              <h3 className="font-bold text-xs text-foreground font-display">Competitors Monitored (Surat)</h3>
            </div>
            <div className="overflow-y-auto flex-1 scrollbar-none bg-card">
              <table className="w-full text-left text-xs divide-y divide-border/60">
                <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                  <tr>
                    <th className="px-3 py-2">Developer Name</th>
                    <th className="px-3 py-2">Type</th>
                    <th className="px-3 py-2">Localities Active</th>
                    <th className="px-3 py-2">Projects</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-medium text-foreground bg-background">
                  {competitorsMonitored.map((c, idx) => (
                    <tr key={idx} className="hover:bg-secondary/15">
                      <td className="px-3 py-3 font-bold">{c.name}</td>
                      <td className="px-3 py-3 text-slate-500 font-mono">{c.type}</td>
                      <td className="px-3 py-3 text-slate-600 font-semibold">{c.localities}</td>
                      <td className="px-3 py-3 font-mono font-bold text-primary">{c.projects} active</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Positioning matrix Vesu 2BHK */}
          <Card className="col-span-12 lg:col-span-8 p-0 overflow-hidden h-[450px] flex flex-col border border-border bg-card">
            <div className="p-3 bg-secondary/35 border-b border-border flex items-center justify-between">
              <h3 className="font-bold text-xs text-foreground font-display">Competitive Positioning Matrix (Vesu 2BHK)</h3>
              <span className="text-[10px] font-mono text-slate-400">As of Jan 2025</span>
            </div>
            
            <div className="overflow-y-auto flex-1 scrollbar-none bg-card">
              <table className="w-full text-left text-xs divide-y divide-border/60">
                <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                  <tr>
                    <th className="px-3.5 py-2.5">Developer / Project</th>
                    <th className="px-3.5 py-2.5 font-mono">Carpet Size</th>
                    <th className="px-3.5 py-2.5 font-mono">Listed Price</th>
                    <th className="px-3.5 py-2.5 font-mono">Rate/Sqft</th>
                    <th className="px-3.5 py-2.5">RERA</th>
                    <th className="px-3.5 py-2.5">Possession</th>
                    <th className="px-3.5 py-2.5">vs Fortiv Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-medium text-foreground bg-background">
                  {competitorPositioningMatrix.map((item, idx) => (
                    <tr
                      key={idx}
                      className={`hover:bg-secondary/15 transition-colors ${
                        item.isFortiv ? "bg-primary/5 font-extrabold border-l-2 border-primary" : ""
                      }`}
                    >
                      <td className="px-3.5 py-3 font-bold text-foreground">
                        {item.isFortiv ? <span>✨ {item.project}</span> : item.project}
                      </td>
                      <td className="px-3.5 py-3 font-mono">{item.size} sqft</td>
                      <td className="px-3.5 py-3 font-mono text-foreground font-bold">₹{item.price}L</td>
                      <td className="px-3.5 py-3 font-mono text-slate-500">₹{item.rate}</td>
                      <td className="px-3.5 py-3">
                        <span className={`px-1 rounded text-[10px] font-bold ${item.rera === "✓" ? "text-emerald-600 bg-emerald-50 border border-emerald-100" : "text-red-600 bg-red-50 border border-red-100"}`}>
                          {item.rera}
                        </span>
                      </td>
                      <td className="px-3.5 py-3 font-mono text-slate-600">{item.possession}</td>
                      <td className="px-3.5 py-3 font-mono font-bold">
                        {item.isFortiv ? (
                          <span className="text-primary font-display">—</span>
                        ) : item.comp.includes("−") ? (
                          <span className="text-emerald-600">{item.comp}</span>
                        ) : (
                          <span className="text-red-500">{item.comp}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3.5 border-t border-border bg-muted/10 text-[10.5px] font-semibold text-muted-foreground flex justify-between items-center">
              <span>Fortiv Solutions Brand Premium Margin: <strong className="text-foreground font-mono">+6.1% average</strong></span>
              <span>Differentiators: RERA compliance, premium corners, developer brand value</span>
            </div>
          </Card>
        </div>

        {/* Price adjustment Alerts log today */}
        <div className="grid grid-cols-12 gap-5">
          {/* Price Change Log */}
          <Card className="col-span-12 lg:col-span-7 p-0 overflow-hidden border border-border bg-card">
            <div className="p-3 bg-secondary/35 border-b border-border flex items-center justify-between">
              <h3 className="font-bold text-xs text-foreground font-display">Competitor Price Change Log (This Week)</h3>
            </div>
            
            <div className="overflow-x-auto scrollbar-none bg-card">
              <table className="w-full text-left text-xs divide-y divide-border/60">
                <thead className="bg-secondary/15 text-muted-foreground text-[9px] uppercase tracking-wider font-display">
                  <tr>
                    <th className="px-3 py-2.5">Competitor</th>
                    <th className="px-3 py-2.5">Project</th>
                    <th className="px-3 py-2.5">Config</th>
                    <th className="px-3 py-2.5 font-mono">Price Change</th>
                    <th className="px-3 py-2.5">Event Type</th>
                    <th className="px-3 py-2.5">Detected</th>
                    <th className="px-3 py-2.5">Alert Routed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-medium text-foreground bg-background">
                  {competitorPriceChanges.map((item, idx) => {
                    const isCut = item.type === "Price Cut";
                    const isLaunch = item.type === "New Launch";
                    const isIncrease = item.type === "Price Increase";
                    const ringColor = isCut ? "bg-red-50 text-red-600 border-red-100" : isIncrease ? "bg-emerald-50 text-emerald-600 border-emerald-100" : isLaunch ? "bg-blue-50 text-blue-600 border-blue-100" : "bg-slate-100 text-slate-600 border-slate-200";
                    return (
                      <tr key={idx} className="hover:bg-secondary/10">
                        <td className="px-3 py-3 font-bold">{item.competitor}</td>
                        <td className="px-3 py-3">{item.project}</td>
                        <td className="px-3 py-3 font-mono">{item.config}</td>
                        <td className="px-3 py-3 font-mono font-bold">
                          {isCut ? (
                            <span className="text-red-500">{item.change}</span>
                          ) : isIncrease ? (
                            <span className="text-emerald-600">{item.change}</span>
                          ) : (
                            <span className="text-foreground">{item.change}</span>
                          )}
                        </td>
                        <td className="px-3 py-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${ringColor}`}>
                            {item.type}
                          </span>
                        </td>
                        <td className="px-3 py-3 font-mono text-slate-400">{item.detected}</td>
                        <td className="px-3 py-3">
                          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50/40 px-2 py-0.5 rounded">
                            {item.alertSent}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Pricing Alert WhatsApp mockup */}
          <Card className="col-span-12 lg:col-span-5 p-4 border border-border bg-card space-y-3 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display mb-2.5">Management notification alert preview</div>
              
              <div className="bg-[#17212b] border border-[#1c2937] rounded-xl p-3 shadow-inner text-[#f5f6f7] font-mono text-[10px] leading-relaxed">
                <div className="text-[#3090cd] font-bold text-[10.5px] border-b border-[#1c2937] pb-1.5 flex justify-between">
                  <span>⚡ COMPETITOR PRICE ALERT</span>
                  <span>15/01/2025</span>
                </div>
                
                <div className="space-y-1.5 pt-2">
                  <div>Shreenath Builders has cut the price of their 2BHK units in Vesu Heights.</div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div>Prev Price: <strong className="text-slate-300">₹56.0L</strong></div>
                    <div>New Price: <strong className="text-red-400 font-bold">₹54.2L</strong></div>
                  </div>
                  <div>Price adjustment: <strong className="text-red-400 font-bold">−₹1.8L (−3.2%)</strong></div>
                  <div className="border-t border-[#1c2937] pt-1.5 mt-1">
                    <div>Fortiv Greenview (same config): ₹56.5L</div>
                    <div>Gap vs Shreenath: <strong className="text-amber-400 font-bold">+₹2.3L (+4.2%)</strong></div>
                  </div>
                  <div className="text-[#708499] text-[9.5px] font-sans pt-1">
                    Recommended action: Review Fortiv pricing strategy for Vesu 2BHK.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => alert("Strategy discussion call scheduled with Rahul Modi.")}
                className="flex-1 h-8 rounded-lg bg-secondary hover:bg-secondary/70 border border-border text-foreground text-xs font-bold transition-all"
              >
                Schedule strategy call
              </button>
              <button
                onClick={() => alert("Full competitor intel report loaded.")}
                className="flex-1 h-8 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold transition-all"
              >
                View full tracker report
              </button>
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // Helper method to return page header info
  const getPageHeader = () => {
    switch (activeTab) {
      case "menu":
        return {
          title: "Property Intelligence & Valuation",
          subtitle: "Data-driven pricing, matching, and market intelligence — so every agent and buyer has the right numbers at the right moment.",
        };
      case "overview":
        return {
          title: "Dashboard Overview",
          subtitle: "Helicopter view of valuation stats, active alerts activity, market pulse signals, and quick-launch tools.",
        };
      case "avm":
        return {
          title: "Automated Valuation Model",
          subtitle: "AI-powered property valuation engine using Circle rates and transaction histories.",
        };
      case "cma":
        return {
          title: "Comparative Market Analysis",
          subtitle: "Branded CMA reports comparing subject properties against comps and active listings.",
        };
      case "matching":
        return {
          title: "Property Matching Engine",
          subtitle: "Vector-search recommendation matching buyer profiles to inventory units.",
        };
      case "price-alert":
        return {
          title: "Price Alert Bot",
          subtitle: "Automated agent monitoring portal listings and sending WhatsApp alerts on price drops.",
        };
      case "market-intel":
        return {
          title: "Market Intelligence Dashboard",
          subtitle: "Live analytics hub showing prices, absorption rates, heat maps, and new launch activities in Gujarat.",
        };
      case "competitor-tracker":
        return {
          title: "Competitor Price Tracker",
          subtitle: "Tracking competitor listing adjustments and payment schemes in micro-markets.",
        };
      default:
        return {
          title: "Property Intelligence & Valuation",
          subtitle: "Data-driven pricing, matching, and market intelligence.",
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
        className="group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95 mr-0.5"
        aria-label="Back to properties menu"
      >
        <ChevronLeft className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>
      <span
        className="font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors"
        onClick={() => setActiveTab("menu")}
      >
        {headerInfo.title}
      </span>
    </div>
  );

  const renderMenuSelection = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {submodulesList.map((mod) => (
            <Card
              key={mod.id}
              onClick={() => setActiveTab(mod.id as TabType)}
              className="p-5 border border-border/70 hover:border-ink hover:shadow-[0_4px_20px_rgba(11,31,51,0.04)] transition-all duration-300 cursor-pointer flex flex-col justify-between group h-48 bg-card"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded-full uppercase border ${
                    mod.id === "overview"
                      ? "bg-slate-100 text-slate-600 border-slate-200"
                      : "bg-ink/5 text-ink border-ink/10"
                  }`}>
                    {mod.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> {mod.status}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground group-hover:text-ink transition-colors mt-1 font-display">
                  {mod.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2 font-medium">
                  {mod.desc}
                </p>
              </div>
              <div className="border-t border-border/40 mt-4 pt-3 flex items-center justify-between text-[11px] font-bold text-muted-foreground group-hover:text-foreground">
                <span className="font-mono font-bold text-foreground">{mod.stats}</span>
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

  return (
    <AppShell
      title={dynamicTitle}
      subtitle={headerInfo.subtitle}
    >
      <div className="transition-all duration-300">
        {activeTab === "menu" && renderMenuSelection()}
        {activeTab === "overview" && renderDashboardOverview()}
        {activeTab === "avm" && renderAVM()}
        {activeTab === "cma" && renderCMA()}
        {activeTab === "matching" && renderMatching()}
        {activeTab === "price-alert" && renderPriceAlertBot()}
        {activeTab === "market-intel" && renderMarketIntelligence()}
        {activeTab === "competitor-tracker" && renderCompetitorTracker()}
      </div>
    </AppShell>
  );
}

// Subcomponent: Styled KPI box with border
function StatBox({
  label,
  value,
  desc,
  color
}: {
  label: string;
  value: string;
  desc: string;
  color: string;
}) {
  return (
    <Card className="p-4 flex flex-col justify-between relative min-h-24 border border-border bg-card">
      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-display">
        {label}
      </div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className={`font-display text-2xl font-bold tracking-tight ${color}`}>{value}</div>
        <span className="text-[9px] font-semibold text-muted-foreground">{desc}</span>
      </div>
    </Card>
  );
}
