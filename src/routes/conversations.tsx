import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell, Card, Pill } from "../components/AppShell";
import { 
  Search, 
  Send, 
  Paperclip, 
  Phone, 
  MoreHorizontal, 
  Sparkles, 
  Check, 
  CheckCheck, 
  RotateCcw,
  RefreshCw,
  Download,
  ChevronLeft,
  Building,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  MapPin,
  Globe,
  Sliders,
  Mail,
  Play,
  Filter,
  Zap,
  Settings,
  HelpCircle,
  Activity,
  PhoneCall,
  Calendar
} from "lucide-react";
import { useState, useMemo, useEffect, useRef } from "react";

// Route declaration
export const Route = createFileRoute("/conversations")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tab: (search.tab as string) || undefined,
    };
  },
  head: () => ({ meta: [{ title: "Conversational AI & Engagement · Fortiv" }] }),
  component: ConversationsManager,
});

type TabType = "menu" | "overview" | "whatsapp" | "missed-call" | "website-widget" | "telegram" | "voice-ivr" | "email";
type WaThreadId = "rajesh" | "priya" | "amit" | "sunita";

// Mock Data Constants (Demo-Ready)
const demoProjects = {
  greenview: {
    name: "Fortiv Greenview Heights",
    locality: "Vesu, Surat",
    details: "2BHK/3BHK · ₹45L–₹85L · RERA Registered · Dec 2026 possession",
    rera: "RERA No: GJ/RERA/PROJ/XXXXX · G+14 · 240 units"
  },
  skyline: {
    name: "Fortiv Skyline Residences",
    locality: "Gotri, Vadodara",
    details: "3BHK/4BHK · ₹90L–₹1.8Cr · Under Construction",
    rera: "RERA No: GJ/RERA/PROJ/YYYYY · G+16 · 180 units"
  },
  business: {
    name: "Fortiv Business Park",
    locality: "Althan, Surat",
    details: "Commercial · ₹1.2Cr–₹4.5Cr · Ready possession",
    rera: "RERA No: GJ/RERA/PROJ/ZZZZZ · Multi-use Corporate Office Complex"
  }
};

const recoveryRateStats = {
  missedCallsToday: 18,
  recoveredWa: 14,
  recoveryRate: "77.7%",
  smsSent: 4,
  smsRecoveryRate: "25%",
  addedToCallback: 3,
  overallRecoveryRate: "83.3%",
  avgWaSendTime: "54 seconds"
};

// WhatsApp thread scripts mapping
const whatsappThreads = {
  rajesh: {
    name: "Rajesh Patel",
    lastMsg: "Saturday works",
    avatar: "RP",
    script: [
      { sender: "buyer", text: "Hi, interested in 2BHK in Surat" },
      { sender: "ai", text: "Hello! Welcome to Fortiv Solutions 🏠 I'm happy to help you find your perfect home in Surat. May I ask your budget range?" },
      { sender: "buyer", text: "Around 50–60 lakhs" },
      { sender: "ai", text: "Great choice! We have some excellent options in that range. Which area do you prefer — Vesu, Adajan, or Pal?" },
      { sender: "buyer", text: "Vesu preferred" },
      { sender: "ai", text: "Perfect. Are you looking for ready possession or under-construction?" },
      { sender: "buyer", text: "Under construction is fine" },
      { sender: "ai", text: "Wonderful! I'd like to recommend Fortiv Greenview Heights in Vesu — RERA registered, G+14, possession Dec 2026, prices starting ₹48L. Shall I send the brochure?" },
      { sender: "buyer", text: "Yes please" },
      { sender: "ai", text: "📎 [Brochure PDF — Fortiv Greenview Heights.pdf] Sent! Would you like to schedule a site visit this weekend?" },
      { sender: "buyer", text: "Saturday works" },
      { sender: "ai", text: "Site visit confirmed for Saturday 11:00 AM ✓ Our agent Priya Rana will meet you. You'll receive a reminder Friday evening. See you Saturday! 🙏" }
    ],
    getProfileVal: (step: number, field: string) => {
      switch (field) {
        case "budget": return step >= 2 ? "₹50–60 Lakhs" : "Determining...";
        case "locality": return step >= 4 ? "Vesu" : "Determining...";
        case "config": return step >= 0 ? "2BHK" : "Determining...";
        case "possession": return step >= 6 ? "Under Construction" : "Determining...";
        case "purpose": return "Self-use (unconfirmed)";
        case "project": return step >= 7 ? "Fortiv Greenview Heights" : "Matching...";
        case "brochure": return step >= 9 ? "Sent ✓" : "Pending";
        case "visit": return step >= 11 ? "Saturday 11:00 AM" : "Pending";
        case "agent": return step >= 11 ? "Priya Rana" : "Unassigned";
        case "impact": return step >= 11 ? "+20 pts" : "0 pts";
        default: return "—";
      }
    }
  },
  priya: {
    name: "Priya Shah",
    lastMsg: "Saturday 11:30 works",
    avatar: "PS",
    script: [
      { sender: "buyer", text: "Hello, looking for a 3BHK flat in Adajan area" },
      { sender: "ai", text: "Welcome to Fortiv Solutions! 🏠 I'd be glad to help you. What budget are you considering for your 3BHK?" },
      { sender: "buyer", text: "Around 70–80 lakhs max" },
      { sender: "ai", text: "Perfect. Are you looking for specific amenities like a swimming pool, clubhouse, or gym?" },
      { sender: "buyer", text: "Yes, swimming pool and children play area are must" },
      { sender: "ai", text: "Understood! Fortiv Greenview Heights in Adajan has a beautiful rooftop pool, landscaped gardens, and a dedicated kids play area. Shall I share the amenities list?" },
      { sender: "buyer", text: "Yes, that would be helpful" },
      { sender: "ai", text: "📎 [Amenities Guide — Fortiv.pdf] Shared! We can book a site visit to the sample flat this Saturday if you'd like?" },
      { sender: "buyer", text: "Saturday works. Do you have slots at 11:30 AM?" },
      { sender: "ai", text: "Yes, 11:30 AM on Saturday is booked for you ✓ Our agent Priya Rana will meet you at the site lobby. Looking forward to meeting you! 😊" }
    ],
    getProfileVal: (step: number, field: string) => {
      switch (field) {
        case "budget": return step >= 2 ? "₹70–80 Lakhs" : "Determining...";
        case "locality": return step >= 0 ? "Adajan" : "Determining...";
        case "config": return step >= 0 ? "3BHK" : "Determining...";
        case "possession": return step >= 5 ? "Under Construction" : "Determining...";
        case "purpose": return "Self-use (unconfirmed)";
        case "project": return step >= 5 ? "Fortiv Greenview Heights" : "Matching...";
        case "brochure": return step >= 7 ? "Sent ✓" : "Pending";
        case "visit": return step >= 9 ? "Saturday 11:30 AM" : "Pending";
        case "agent": return step >= 9 ? "Priya Rana" : "Unassigned";
        case "impact": return step >= 9 ? "+20 pts" : "0 pts";
        default: return "—";
      }
    }
  },
  amit: {
    name: "Amit Desai",
    lastMsg: "Yes, tomorrow is fine",
    avatar: "AD",
    script: [
      { sender: "buyer", text: "Do you have any 2BHK in Pal?" },
      { sender: "ai", text: "Hello! Yes, we have some premium 2BHK configurations in Pal. May I know your budget bracket?" },
      { sender: "buyer", text: "Around 45 to 55 lakhs" },
      { sender: "ai", text: "Got it! Are you looking for ready possession or under-construction?" },
      { sender: "buyer", text: "Ready possession is preferred" },
      { sender: "ai", text: "Excellent. We have some developer inventory in Fortiv Greenview Heights ready to move. Would you like to check the price list?" },
      { sender: "buyer", text: "Yes, send price list please" },
      { sender: "ai", text: "📎 [Ready Inventory Price List.pdf] Sent! Let me know if you would like to visit the ready units tomorrow?" },
      { sender: "buyer", text: "Sure, what time?" },
      { sender: "ai", text: "Our agent Ankit Shah can meet you tomorrow at 4:30 PM. Does that work?" },
      { sender: "buyer", text: "Yes, perfect" },
      { sender: "ai", text: "Great! Confirmed for tomorrow at 4:30 PM ✓ See you there! 🙏" }
    ],
    getProfileVal: (step: number, field: string) => {
      switch (field) {
        case "budget": return step >= 2 ? "₹45–55 Lakhs" : "Determining...";
        case "locality": return step >= 0 ? "Pal" : "Determining...";
        case "config": return step >= 0 ? "2BHK" : "Determining...";
        case "possession": return step >= 4 ? "Ready Possession" : "Determining...";
        case "purpose": return "Self-use (unconfirmed)";
        case "project": return step >= 5 ? "Fortiv Greenview Heights" : "Matching...";
        case "brochure": return step >= 7 ? "Price List Sent ✓" : "Pending";
        case "visit": return step >= 11 ? "Tomorrow 4:30 PM" : "Pending";
        case "agent": return step >= 11 ? "Ankit Shah" : "Unassigned";
        case "impact": return step >= 11 ? "+20 pts" : "0 pts";
        default: return "—";
      }
    }
  },
  sunita: {
    name: "Sunita Mehta",
    lastMsg: "Sunday morning works",
    avatar: "SM",
    script: [
      { sender: "buyer", text: "Missed call recovery - wanted to check your Vesu projects" },
      { sender: "ai", text: "Hello Sunita! Sorry we missed your call. I'd love to share our Vesu developments. What configuration are you looking for?" },
      { sender: "buyer", text: "Looking for a 2BHK flat" },
      { sender: "ai", text: "Great! What budget range are you looking at?" },
      { sender: "buyer", text: "Between 50 to 65 lakhs" },
      { sender: "ai", text: "Wonderful! Fortiv Greenview Heights in Vesu matches your criteria perfectly. Can I send the floor plans to review?" },
      { sender: "buyer", text: "Yes, please send them" },
      { sender: "ai", text: "📎 [2BHK Floor Plans — Tower A.pdf] Sent! Would you like to schedule a site visit this Sunday?" },
      { sender: "buyer", text: "Yes, Sunday morning around 10:30" },
      { sender: "ai", text: "Sunday 10:30 AM confirmed ✓ Ankit Shah will guide you. Have a great day! 🙏" }
    ],
    getProfileVal: (step: number, field: string) => {
      switch (field) {
        case "budget": return step >= 4 ? "₹50–65 Lakhs" : "Determining...";
        case "locality": return step >= 0 ? "Vesu" : "Determining...";
        case "config": return step >= 2 ? "2BHK" : "Determining...";
        case "possession": return "Determining...";
        case "purpose": return "Self-use (unconfirmed)";
        case "project": return step >= 5 ? "Fortiv Greenview Heights" : "Matching...";
        case "brochure": return step >= 7 ? "Floor Plans Sent ✓" : "Pending";
        case "visit": return step >= 9 ? "Sunday 10:30 AM" : "Pending";
        case "agent": return step >= 9 ? "Ankit Shah" : "Unassigned";
        case "impact": return step >= 9 ? "+20 pts" : "0 pts";
        default: return "—";
      }
    }
  }
};

// Main Component
function ConversationsManager() {
  const { tab } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const activeTab = (tab as TabType) || "menu";
  const setActiveTab = (newTab: TabType | ((prev: TabType) => TabType)) => {
    const nextTab = typeof newTab === "function" ? newTab(activeTab) : newTab;
    navigate({
      search: (prev: any) => ({ ...prev, tab: nextTab === "menu" ? undefined : nextTab }),
    });
  };

  // Helper for rendering platform badges in the live stream
  const renderPlatformBadge = (channel: string) => {
    const maps = {
      "WhatsApp Chatbot": "bg-emerald-50 text-emerald-600 border-emerald-200",
      "Website Widget": "bg-sky-50 text-sky-600 border-sky-200",
      "Email AI Responder": "bg-amber-50 text-amber-600 border-amber-200",
      "Voice IVR": "bg-indigo-50 text-indigo-600 border-indigo-200",
      "Telegram (Internal)": "bg-blue-50 text-blue-600 border-blue-200",
      "Telegram Bot": "bg-blue-50 text-blue-600 border-blue-200",
    } as const;

    const cls = maps[channel as keyof typeof maps] || "bg-slate-100 text-slate-600 border-slate-200";
    return <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${cls}`}>{channel}</span>;
  };

  // --- Sub-navigation Items ---
  const agentsList = [
    { id: "overview", type: "Overview", name: "Engagement Overview", desc: "Helicopter view of the conversational AI engine: live activity streaming, channel breakdown, and qualification metrics.", stats: "84 active today", status: "Active" },
    { id: "whatsapp", type: "Agent", name: "WhatsApp AI Chatbot", desc: "Autonomous AI assistant that qualifies prospects and books site visits on WhatsApp.", stats: "42 handled today", status: "Active" },
    { id: "missed-call", type: "Agent", name: "Missed Call Auto-Responder", desc: "Instantly follows up on missed calls via WhatsApp and SMS fallback.", stats: "18 recovered today", status: "Active" },
    { id: "website-widget", type: "Agent", name: "Website AI Chat Widget", desc: "Website chat widget equipped with RAG for accurate project Q&A and lead capture.", stats: "18 engaged today", status: "Active" },
    { id: "telegram", type: "Agent", name: "Telegram Agent for Field Staff", desc: "Internal bot for sales agents to query CRM leads, inventory, and calculators in real-time.", stats: "10 queries logged", status: "Active" },
    { id: "voice-ivr", type: "Agent", name: "Voice IVR Bot", desc: "Voice AI that qualifies inbound callers using natural speech in multiple languages.", stats: "24 calls qualified", status: "Active" },
    { id: "email", type: "Agent", name: "Email AI Responder", desc: "Auto-drafts and sends customized email responses to property inquiries within 3 minutes.", stats: "34 emails processed", status: "Active" },
  ];

  // --- 1. Overview Dashboard States ---
  const [liveConversations, setLiveConversations] = useState([
    { id: 1, name: "Rajesh Patel", channel: "WhatsApp Chatbot", status: "Qualified", msg: "Saturday works for the visit", mins: "4m ago", outcome: "Site Visit Booked ✓" },
    { id: 2, name: "Priya Shah", channel: "Website Widget", status: "AI Responding", msg: "How much is the maintenance?", mins: "1m ago", outcome: "In Progress" },
    { id: 3, name: "Amit Desai", channel: "Email AI Responder", status: "Escalated", msg: "I want to verify the title deed", mins: "8m ago", outcome: "Handoff Requested" },
    { id: 4, name: "Vikram Joshi", channel: "Voice IVR", status: "Qualified", msg: "Interested in buying a flat", mins: "12m ago", outcome: "Callback Booked ✓" },
    { id: 5, name: "Suresh Nair", channel: "Telegram (Internal)", status: "Operational", msg: "/comps 2BHK Vesu 60L", mins: "15m ago", outcome: "Query Answered ✓" },
  ]);

  useEffect(() => {
    if (activeTab !== "overview") return;
    const names = ["Ankit Mehta", "Sneha Patel", "Deepak Trivedi", "Hetal Mehta", "Ritu Bhandari", "Kunal Jain", "Pooja Sharma"];
    const channels = ["WhatsApp Chatbot", "Website Widget", "Voice IVR", "Email AI Responder"];
    const messages = ["What is the possession date?", "Is there a gym?", "I want a callback at 11am tomorrow", "RERA registration details please"];
    const outcomes = ["Brochure Sent ✓", "In Progress", "Callback Booked ✓", "Site Visit Booked ✓"];

    const interval = setInterval(() => {
      const newConvo = {
        id: Date.now(),
        name: names[Math.floor(Math.random() * names.length)],
        channel: channels[Math.floor(Math.random() * channels.length)],
        status: "AI Responding",
        msg: messages[Math.floor(Math.random() * messages.length)],
        mins: "just now",
        outcome: outcomes[Math.floor(Math.random() * outcomes.length)]
      };
      setLiveConversations(prev => [newConvo, ...prev.slice(0, 4)]);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeTab]);

  // --- 2. WhatsApp Simulator States ---
  const [selectedWaThread, setSelectedWaThread] = useState<WaThreadId>("rajesh");
  const [waMessages, setWaMessages] = useState<Array<{ sender: string; text: string; time: string }>>([]);
  const [waIndex, setWaIndex] = useState(-1);
  const [waTyping, setWaTyping] = useState(false);
  const [waPlaying, setWaPlaying] = useState(false);
  const whatsappScrollRef = useRef<HTMLDivElement>(null);

  const activeWaThreadData = useMemo(() => {
    return whatsappThreads[selectedWaThread];
  }, [selectedWaThread]);

  useEffect(() => {
    // Reset conversation and autoplay when thread changes
    setWaMessages([]);
    setWaIndex(-1);
    setWaTyping(false);
    setWaPlaying(true);
  }, [selectedWaThread]);

  useEffect(() => {
    if (whatsappScrollRef.current) {
      whatsappScrollRef.current.scrollTop = whatsappScrollRef.current.scrollHeight;
    }
  }, [waMessages, waTyping]);

  useEffect(() => {
    if (!waPlaying) return;
    const script = activeWaThreadData.script;
    if (waIndex >= script.length - 1) {
      setWaPlaying(false);
      return;
    }

    const nextIdx = waIndex + 1;
    const nextMsg = script[nextIdx];
    
    let timer: NodeJS.Timeout;
    if (nextMsg.sender === "ai") {
      setWaTyping(true);
      timer = setTimeout(() => {
        setWaTyping(false);
        setWaMessages(prev => [...prev, {
          sender: "ai",
          text: nextMsg.text,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setWaIndex(nextIdx);
      }, 2000);
    } else {
      timer = setTimeout(() => {
        setWaMessages(prev => [...prev, {
          sender: "buyer",
          text: nextMsg.text,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setWaIndex(nextIdx);
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [waPlaying, waIndex, activeWaThreadData]);

  const restartWhatsAppDemo = () => {
    setWaMessages([]);
    setWaIndex(-1);
    setWaTyping(false);
    setWaPlaying(true);
  };

  // --- 3. Missed Call Auto-Responder States ---
  const [selectedMissedCallIdx, setSelectedMissedCallIdx] = useState(0);
  
  // ALL 10 Mock entries from M2 missed call documentation
  const missedCallsData = [
    { time: "14:47", caller: "+91 98250 88776", name: "Amit Desai", waSent: "14:47:52", delay: "52s", response: "Replied 14:51", outcome: "Visit Booked", status: "Recovered", text: "Amit Desai" },
    { time: "13:22", caller: "+91 97250 11442", name: "Unknown", waSent: "13:22:48", delay: "48s", response: "Replied 13:25", outcome: "Qualified", status: "Recovered", text: "Unknown Caller" },
    { time: "12:05", caller: "+91 95250 33421", name: "Kavita Agarwal", waSent: "12:06:01", delay: "61s", response: "No reply", outcome: "SMS Sent", status: "Pending", text: "Kavita Agarwal" },
    { time: "11:48", caller: "+91 99250 88990", name: "Unknown", waSent: "11:48:55", delay: "55s", response: "No reply", outcome: "No response", status: "Callback Required", text: "Unknown Caller" },
    { time: "10:30", caller: "+91 98980 99887", name: "Suresh Nair", waSent: "10:30:44", delay: "44s", response: "Replied 10:33", outcome: "Brochure Sent", status: "Recovered", text: "Suresh Nair" },
    { time: "09:55", caller: "+91 97240 55667", name: "Pooja Sharma", waSent: "09:55:58", delay: "58s", response: "Replied 09:59", outcome: "Qualified", status: "Recovered", text: "Pooja Sharma" },
    { time: "09:20", caller: "+91 99099 22110", name: "Unknown", waSent: "09:21:07", delay: "67s", response: "No reply", outcome: "No response", status: "Callback Required", text: "Unknown Caller" },
    { time: "08:44", caller: "+91 98250 44331", name: "Mahesh Khanna", waSent: "08:44:51", delay: "51s", response: "Replied 08:48", outcome: "Visit Booked", status: "Recovered", text: "Mahesh Khanna" },
    { time: "08:15", caller: "+91 97250 81122", name: "Unknown", waSent: "08:15:49", delay: "49s", response: "No reply", outcome: "SMS Sent", status: "Pending", text: "Unknown Caller" },
    { time: "07:58", caller: "+91 99250 11223", name: "Ritu Bhandari", waSent: "07:58:53", delay: "53s", response: "Replied 08:02", outcome: "Qualified", status: "Recovered", text: "Ritu Bhandari" }
  ];

  // Callback required queue data
  const callbackQueueData = [
    { source: "Missed Call", phone: "+91 99250 XX990", callTime: "11:48 AM", waSentTime: "11:48:55 AM", waResponse: "No Response", smsSent: "Yes", smsResponse: "No Response", crmStatus: "Callback Required", priority: "High", agent: "Ankit Shah", notes: "Missed call — no response to WA or SMS" },
    { source: "Missed Call", phone: "+91 99099 XX110", callTime: "09:20 AM", waSentTime: "09:21:07 AM", waResponse: "No Response", smsSent: "Yes", smsResponse: "No Response", crmStatus: "Callback Required", priority: "High", agent: "Meera Patel", notes: "Missed call — no response to WA or SMS" },
    { source: "Missed Call", phone: "+91 97250 XX122", callTime: "08:15 AM", waSentTime: "08:15:49 AM", waResponse: "No Response", smsSent: "Yes", smsResponse: "No Response", crmStatus: "Callback Required", priority: "High", agent: "Kiran Desai", notes: "Missed call — no response to WA or SMS" }
  ];

  // --- 4. Website AI Chat Widget States ---
  const [selectedFlow, setSelectedFlow] = useState<"A" | "B" | "C" | "D">("A");
  const [widgetMessages, setWidgetMessages] = useState<Array<{ from: "user" | "ai"; text: string }>>([]);
  const [widgetIndex, setWidgetIndex] = useState(-1);
  const [widgetTyping, setWidgetTyping] = useState(false);
  const [widgetPlaying, setWidgetPlaying] = useState(false);
  const widgetScrollRef = useRef<HTMLDivElement>(null);

  const widgetFlows = {
    A: [
      { from: "user" as const, text: "Hi, I am looking for properties in Vesu, Surat." },
      { from: "ai" as const, text: "Welcome! Fortiv Greenview Heights in Vesu is our premier project offering luxury 2BHK and 3BHK flats. What configuration are you looking for?" },
      { from: "user" as const, text: "A 3BHK flat with good amenities." },
      { from: "ai" as const, text: "Excellent! Our 3BHK units are designed with spacious layouts, modular kitchens, and premium fittings. Are there any specific amenities you are looking for?" },
      { from: "user" as const, text: "Does Greenview Heights have a swimming pool?" },
      { from: "ai" as const, text: "Yes! Fortiv Greenview Heights features a rooftop swimming pool, fully equipped gym, children's play area, clubhouse, and 24/7 security. Would you like to see the full amenities list or floor plans?" }
    ],
    B: [
      { from: "user" as const, text: "Hello, what projects do you have in Gujarat?" },
      { from: "ai" as const, text: "Hello! We have Fortiv Greenview Heights in Vesu, Surat and Fortiv Skyline Residences in Gotri, Vadodara. Are you interested in Surat or Vadodara?" },
      { from: "user" as const, text: "I am interested in both. What is the difference between them?" },
      { from: "ai" as const, text: "Here is a comparison:\n\n• Fortiv Greenview Heights: Vesu, Surat · 2BHK/3BHK · Prices starting ₹48L · Possession Dec 2026.\n• Fortiv Skyline Residences: Gotri, Vadodara · 3BHK/4BHK · Prices starting ₹90L · Under Construction.\n\nWhich location suits your needs better?" }
    ],
    C: [
      { from: "user" as const, text: "Hi, what is the price of a 2BHK in Vesu?" },
      { from: "ai" as const, text: "In Fortiv Greenview Heights, Vesu, our premium 2BHK apartments start at ₹48L, with mid-floor layouts averaging around ₹58L depending on unit specifications. Does that fit your budget?" },
      { from: "user" as const, text: "₹58 lakhs seems expensive" },
      { from: "ai" as const, text: "I understand! Let me show you what the EMI would look like at current SBI home loan rates of 8.75%:\n\n• Estimated Price: ₹58L\n• Down Payment (10%): ₹5.8L\n• Loan Amount (90%): ₹52.2L\n• Tenure: 20 Years\n• Monthly EMI: ₹45,847\n\nThis is comparable to renting a premium 2BHK flat in Vesu. Does this help?" }
    ],
    D: [
      { from: "user" as const, text: "Can I download the floor plan for Greenview Heights?" },
      { from: "ai" as const, text: "I can share the complete brochure and high-resolution floor plans directly with you. To send them, may I please know your name?" },
      { from: "user" as const, text: "Rajesh Patel" },
      { from: "ai" as const, text: "Thanks Rajesh! And your phone number?" },
      { from: "user" as const, text: "+91 98765 43210" },
      { from: "ai" as const, text: "Perfect! I'm sending it to your WhatsApp right now. You can also click the button below to continue our chat there.\n\n[Continue on WhatsApp]" }
    ]
  };

  useEffect(() => {
    setWidgetMessages([]);
    setWidgetIndex(-1);
    setWidgetTyping(false);
    setWidgetPlaying(true);
  }, [selectedFlow]);

  useEffect(() => {
    if (widgetScrollRef.current) {
      widgetScrollRef.current.scrollTop = widgetScrollRef.current.scrollHeight;
    }
  }, [widgetMessages, widgetTyping]);

  useEffect(() => {
    if (!widgetPlaying) return;
    const script = widgetFlows[selectedFlow];
    if (widgetIndex >= script.length - 1) {
      setWidgetPlaying(false);
      return;
    }

    const nextIdx = widgetIndex + 1;
    const nextMsg = script[nextIdx];

    let timer: NodeJS.Timeout;
    if (nextMsg.from === "ai") {
      setWidgetTyping(true);
      timer = setTimeout(() => {
        setWidgetTyping(false);
        setWidgetMessages(prev => [...prev, {
          from: "ai" as const,
          text: nextMsg.text
        }]);
        setWidgetIndex(nextIdx);
      }, 1500);
    } else {
      timer = setTimeout(() => {
        setWidgetMessages(prev => [...prev, {
          from: "user" as const,
          text: nextMsg.text
        }]);
        setWidgetIndex(nextIdx);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [widgetPlaying, widgetIndex, selectedFlow]);

  // ALL 10 RAG vector queries from M2 documentation
  const ragQueryLog = [
    { q: "Is Greenview Heights RERA registered?", src: "RERA Data", confidence: "98%" },
    { q: "What is the price of 3BHK?", src: "Pricing Sheet", confidence: "96%" },
    { q: "How far is it from Surat railway station?", src: "Location FAQ", confidence: "91%" },
    { q: "Is car parking included?", src: "Amenities List", confidence: "99%" },
    { q: "What is the maintenance charge?", src: "FAQ Database", confidence: "88%" },
    { q: "Can I get a home loan?", src: "FAQ Database", confidence: "94%" },
    { q: "When is possession for Skyline?", src: "Project Data", confidence: "97%" },
    { q: "Is there a school nearby?", src: "Location FAQ", confidence: "85%" },
    { q: "What is the booking amount?", src: "Payment Plan", confidence: "93%" },
    { q: "Do you have any 1BHK?", src: "Inventory Data", confidence: "96%" }
  ];

  // ALL 6 Website Widget captured leads from M2 documentation
  const leadCaptureLog = [
    { name: "Rajesh Patel", phone: "98765 43210", interest: "2BHK, Vesu", source: "Website Widget", status: "New" },
    { name: "Priya Shah", phone: "99xxxxxxxx", interest: "3BHK, Adajan", source: "Website Widget", status: "New" },
    { name: "Amit Desai", phone: "98xxxxxxxx", interest: "Commercial, Althan", source: "Website Widget", status: "Qualified" },
    { name: "Sunita Mehta", phone: "97xxxxxxxx", interest: "2BHK, Vesu", source: "Website Widget", status: "New" },
    { name: "Vikram Joshi", phone: "96xxxxxxxx", interest: "Plot, Althan", source: "Website Widget", status: "New" },
    { name: "Kavita Agarwal", phone: "95xxxxxxxx", interest: "2BHK, Katargam", source: "Website Widget", status: "New" }
  ];

  // --- 5. Telegram Agent Bot Simulator States ---
  const [tgMessages, setTgMessages] = useState<Array<{ from: "user" | "bot"; text: string; time: string }>>([]);
  const [tgIndex, setTgIndex] = useState(-1);
  const [tgPlaying, setTgPlaying] = useState(false);
  const [tgTyping, setTgTyping] = useState(false);
  const telegramScrollRef = useRef<HTMLDivElement>(null);

  const telegramHistory = useMemo(() => [
    { from: "user" as const, text: "/hot", time: "14:15" },
    { from: "bot" as const, text: `🔥 HOT LEADS LIST\n━━━━━━━━━━━━━━━━━━━━━━\n1. Deepak Trivedi [Score: 88] · 3BHK Vesu · Referral\n2. Rajesh Patel   [Score: 82] · 2BHK Vesu · 99acres\n3. Priya Shah     [Score: 79] · 3BHK Adajan · Facebook\n4. Suresh Nair    [Score: 88] · Commercial Althan\n━━━━━━━━━━━━━━━━━━━━━━\n💡 Use /lead [name] to view full profiles.`, time: "14:15" },
    { from: "user" as const, text: "/inventory Greenview Heights 2BHK", time: "14:20" },
    { from: "bot" as const, text: `🏢 AVAILABLE 2BHK INVENTORY\n━━━━━━━━━━━━━━━━━━━━━━\nProject: Fortiv Greenview Heights\nConfiguration: 2BHK Flats\n━━━━━━━━━━━━━━━━━━━━━━\n• Tower A: 402, 605, 802, 1104\n• Tower B: 201, 503, 902, 1204\n━━━━━━━━━━━━━━━━━━━━━━\nTotal Available: 8 Units`, time: "14:21" }
  ], []);

  const telegramAutoplayScript = useMemo(() => [
    { from: "user" as const, text: "/lead Rajesh Patel", delay: 1000 },
    { from: "bot" as const, text: `👤 LEAD PROFILE — Rajesh Patel\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📞 +91 98765 43210 (WhatsApp ✓)\n📧 rajesh.patel@gmail.com\n🏢 VP Sales · Adani Group\n💰 Income: ₹18–25L/yr\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🎯 AI Score: 82 🔴 HOT\n📊 Conversion: 74% likely\n🏠 Interest: 2BHK · Vesu · ₹48–65L\n🏗️ Matched: Fortiv Greenview Heights\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📋 LAST ACTIVITY:\n  Opened brochure 12 min ago\n  3 portal inquiries this week\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚡ NEXT ACTION: Call within 15 min\n📅 Best time: 11AM–1PM\n[📞 Call] [📅 Book Visit] [📝 Note]`, delay: 1500 },
    { from: "user" as const, text: "/book Amit Desai Sunday 10am me", delay: 2000 },
    { from: "bot" as const, text: `✅ SITE VISIT BOOKED\n━━━━━━━━━━━━━━━━━━━━━━\nLead: Amit Desai\nDate: Sunday (18 Jan 2025)\nTime: 10:00 AM\nAgent: Ankit Shah (You)\n━━━━━━━━━━━━━━━━━━━━━━\nNotification sent to buyer via WhatsApp.\nCalendar entry created.`, delay: 1500 }
  ], []);

  useEffect(() => {
    if (activeTab !== "telegram") {
      tgPlaying && setTgPlaying(false);
      return;
    }
    setTgMessages(telegramHistory);
    setTgIndex(-1);
    setTgPlaying(true);
    setTgTyping(false);
  }, [activeTab, telegramHistory]);

  useEffect(() => {
    if (telegramScrollRef.current) {
      telegramScrollRef.current.scrollTop = telegramScrollRef.current.scrollHeight;
    }
  }, [tgMessages, tgTyping]);

  useEffect(() => {
    if (!tgPlaying) return;
    const script = telegramAutoplayScript;
    if (tgIndex >= script.length - 1) {
      setTgPlaying(false);
      return;
    }

    const nextIdx = tgIndex + 1;
    const nextMsg = script[nextIdx];

    let timer: NodeJS.Timeout;
    if (nextMsg.from === "bot") {
      setTgTyping(true);
      timer = setTimeout(() => {
        setTgTyping(false);
        setTgMessages(prev => [...prev, {
          from: "bot" as const,
          text: nextMsg.text,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setTgIndex(nextIdx);
      }, nextMsg.delay);
    } else {
      timer = setTimeout(() => {
        setTgMessages(prev => [...prev, {
          from: "user" as const,
          text: nextMsg.text,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setTgIndex(nextIdx);
      }, nextMsg.delay);
    }

    return () => clearTimeout(timer);
  }, [tgPlaying, tgIndex, activeTab, telegramAutoplayScript]);

  const runTelegramCommand = (cmd: string, response: string) => {
    if (tgTyping || tgPlaying) return;
    setTgMessages(prev => [...prev, { from: "user" as const, text: cmd, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setTgTyping(true);
    setTimeout(() => {
      setTgTyping(false);
      setTgMessages(prev => [...prev, { from: "bot" as const, text: response, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 1200);
  };

  const telegramCommands = {
    comps: {
      cmd: "/comps 2BHK Vesu 60L",
      reply: `📊 VESU 2BHK COMPARABLES (≤ 60L)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n1. Fortiv Greenview Heights\n   ₹48L - ₹54L · G+14 · Under Construction\n\n2. Rajhans Green Plaza\n   ₹52L - ₹58L · Resale · Vesu Crossing\n\n3. Shree Heights\n   ₹45L - ₹50L · Ready · Near VIP Rd\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 Best Recommendation: Fortiv Greenview Heights Tower B (highest capital appreciation potential)`
    },
    emi: {
      cmd: "/emi 58L 20",
      reply: `🏦 EMI CALCULATOR — ₹58 Lakhs\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\nLoan Amount: ₹52.2L (90% of ₹58L)\nDown Payment: ₹5.8L (10%)\nTenure: 20 years\nRate: 8.75% p.a. (SBI current)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 Monthly EMI: ₹45,847\nTotal Interest: ₹57.8L\nTotal Payment: ₹1,10.0L\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 Also at 8.5%: ₹45,134/month`
    },
    pipeline: {
      cmd: "/pipeline",
      reply: `📊 TODAY'S PIPELINE — 15 Jan 2025\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🔴 Hot Leads: 12 · 🟡 Warm: 23 · 🔵 Cold: 12\n📅 Site Visits Today: 4\n✅ Bookings This Month: 3\n💰 Pipeline Value: ₹4.2 Cr\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nTOP PRIORITY:\n1. Deepak Trivedi [Score: 88] — Call now\n2. Rajesh Patel [Score: 82] — Call now\n3. Priya Shah [Score: 79] — Visit Sat`
    },
    hot: {
      cmd: "/hot",
      reply: `🔥 HOT LEADS LIST\n━━━━━━━━━━━━━━━━━━━━━━\n1. Deepak Trivedi [Score: 88] · 3BHK Vesu · Referral\n2. Rajesh Patel   [Score: 82] · 2BHK Vesu · 99acres\n3. Priya Shah     [Score: 79] · 3BHK Adajan · Facebook\n4. Suresh Nair    [Score: 88] · Commercial Althan\n━━━━━━━━━━━━━━━━━━━━━━\n💡 Use /lead [name] to view full profiles.`
    },
    rera: {
      cmd: "/rera Greenview Heights",
      reply: `📋 RERA SPECIFICATIONS\n━━━━━━━━━━━━━━━━━━━━━━\nProject: Fortiv Greenview Heights\nLocation: Vesu, Surat\nRERA Status: Approved & Registered\nRERA Number: GJ/RERA/PROJ/XXXXX\nDeveloper: Fortiv Solutions\n━━━━━━━━━━━━━━━━━━━━━━\nValidity: Valid till Dec 2027`
    },
    inventory: {
      cmd: "/inventory Greenview Heights 2BHK",
      reply: `🏢 AVAILABLE 2BHK INVENTORY\n━━━━━━━━━━━━━━━━━━━━━━\nProject: Fortiv Greenview Heights\nConfiguration: 2BHK Flats\n━━━━━━━━━━━━━━━━━━━━━━\n• Tower A: 402, 605, 802, 1104\n• Tower B: 201, 503, 902, 1204\n━━━━━━━━━━━━━━━━━━━━━━\nTotal Available: 8 Units`
    },
    book: {
      cmd: "/book Amit Desai Sunday 10am me",
      reply: `✅ SITE VISIT BOOKED\n━━━━━━━━━━━━━━━━━━━━━━\nLead: Amit Desai\nDate: Sunday (18 Jan 2025)\nTime: 10:00 AM\nAgent: Ankit Shah (You)\n━━━━━━━━━━━━━━━━━━━━━━\nNotification sent to buyer via WhatsApp.\nCalendar entry created.`
    }
  };

  // ALL 10 Telegram bot activity logs from M2 documentation
  const telegramActivityLog = [
    { agent: "Priya Rana", cmd: "/lead Rajesh Patel", time: "14:32", result: "Profile returned" },
    { agent: "Ankit Shah", cmd: "/comps 2BHK Vesu 60L", time: "14:28", result: "5 comps returned" },
    { agent: "Kiran Desai", cmd: "/pipeline", time: "14:15", result: "Summary sent" },
    { agent: "Meera Patel", cmd: "/book Pooja Sharma Sunday 10am", time: "13:55", result: "✓ Booked" },
    { agent: "Priya Rana", cmd: "/hot", time: "13:40", result: "12 hot leads listed" },
    { agent: "Ankit Shah", cmd: "/floorplan Tower A 802", time: "13:22", result: "PDF sent" },
    { agent: "Rahul Modi", cmd: "/agent Priya Rana", time: "13:10", result: "Schedule returned" },
    { agent: "Meera Patel", cmd: "/note Amit Desai: ground floor only", time: "12:58", result: "✓ Logged to CRM" },
    { agent: "Kiran Desai", cmd: "/inventory Greenview Heights 2BHK", time: "12:44", result: "8 units available" },
    { agent: "Priya Rana", cmd: "/emi 58L 20", time: "12:31", result: "EMI ₹45,847" }
  ];

  // --- 6. Voice IVR Bot States ---
  // Voice IVR Spoken Transcripts Mock Data
  const [selectedIvrFlow, setSelectedIvrFlow] = useState<"inbound" | "after-hours">("inbound");
  const [ivrTranscriptMessages, setIvrTranscriptMessages] = useState<Array<{ speaker: "ai" | "caller"; text: string }>>([]);
  const [ivrIndex, setIvrIndex] = useState(-1);
  const [ivrPlaying, setIvrPlaying] = useState(false);

  const ivrInboundScript = [
    { speaker: "ai", text: "🎙️ [AI IVR]: Welcome to Fortiv Solutions, India's premier real estate developer in Surat and Vadodara. I'm your AI assistant. How can I help you today?" },
    { speaker: "caller", text: "🗣️ [Caller]: I'm looking for a 2BHK flat in Surat" },
    { speaker: "ai", text: "🎙️ [AI IVR]: Great! We have some wonderful options in Surat. What's your approximate budget range?" },
    { speaker: "caller", text: "🗣️ [Caller]: Around 50 to 60 lakhs" },
    { speaker: "ai", text: "🎙️ [AI IVR]: Perfect. Which area in Surat interests you — Vesu, Adajan, or Pal?" },
    { speaker: "caller", text: "🗣️ [Caller]: Vesu" },
    { speaker: "ai", text: "🎙️ [AI IVR]: Excellent choice! I'd like to connect you with our agent Priya Rana who specialises in Vesu properties. Priya is available now. Shall I transfer you? I'll brief her on your requirements first." },
    { speaker: "caller", text: "🗣️ [Caller]: Yes, please connect me" },
    { speaker: "ai", text: "🎙️ [AI IVR]: Transferring now. Connecting you to Priya Rana... [Call Routed]" }
  ];

  const ivrAfterHoursScript = [
    { speaker: "ai", text: "🎙️ [AI IVR]: Welcome to Fortiv Solutions. Our office is currently closed (we're open Mon–Sat, 10AM–7PM). I'm the after-hours AI assistant and I'd be happy to note your requirements and arrange a callback." },
    { speaker: "caller", text: "🗣️ [Caller]: I'm interested in buying a flat" },
    { speaker: "ai", text: "🎙️ [AI IVR]: I'd love to help! Could you share: your preferred configuration, locality, and budget? Our team will call you tomorrow with the best options." },
    { speaker: "caller", text: "🗣️ [Caller]: Looking for a 3BHK in Adajan, budget 75 lakhs" },
    { speaker: "ai", text: "🎙️ [AI IVR]: Perfect! I've noted everything. Our agent will call you tomorrow at 10:00 AM. Have a good night! 🙏" }
  ];

  useEffect(() => {
    setIvrTranscriptMessages([]);
    setIvrIndex(-1);
    setIvrPlaying(true);
  }, [selectedIvrFlow]);

  useEffect(() => {
    if (!ivrPlaying) return;
    const script = selectedIvrFlow === "inbound" ? ivrInboundScript : ivrAfterHoursScript;
    if (ivrIndex >= script.length - 1) {
      setIvrPlaying(false);
      return;
    }

    const timer = setTimeout(() => {
      const nextIdx = ivrIndex + 1;
      const nextMsg = script[nextIdx];
      setIvrTranscriptMessages(prev => [...prev, {
        speaker: nextMsg.speaker as "ai" | "caller",
        text: nextMsg.text
      }]);
      setIvrIndex(nextIdx);
    }, 1800);

    return () => clearTimeout(timer);
  }, [ivrPlaying, ivrIndex, selectedIvrFlow]);

  // ALL 10 Call log entries from M2 documentation
  const ivrCallsData = [
    { time: "14:32", caller: "+91 98765 XXXXX", name: "Rajesh Patel", language: "English", duration: "3m 42s", aiDuration: "2m 15s", qualified: "✓ Yes", outcome: "Transferred to Priya Rana" },
    { time: "13:55", caller: "+91 98250 XXXXX", name: "Unknown", language: "Gujarati", duration: "2m 18s", aiDuration: "2m 18s", qualified: "✓ Yes", outcome: "Callback Booked — 16 Jan 10am" },
    { time: "13:22", caller: "+91 97250 XXXXX", name: "Unknown", language: "English", duration: "1m 05s", aiDuration: "1m 05s", qualified: "✗ No", outcome: "Transferred (unclear intent)" },
    { time: "12:48", caller: "+91 99250 XXXXX", name: "Unknown", language: "Hindi", duration: "4m 10s", aiDuration: "3m 05s", qualified: "✓ Yes", outcome: "Transferred to Ankit Shah" },
    { time: "12:15", caller: "+91 98980 XXXXX", name: "Unknown", language: "Gujarati", duration: "3m 28s", aiDuration: "2m 45s", qualified: "✓ Yes", outcome: "Callback Booked — 16 Jan 11am" },
    { time: "11:44", caller: "+91 97240 XXXXX", name: "Unknown", language: "English", duration: "2m 55s", aiDuration: "2m 10s", qualified: "✓ Yes", outcome: "Transferred to Kiran Desai" },
    { time: "11:20", caller: "+91 99099 XXXXX", name: "Unknown", language: "Hindi", duration: "5m 02s", aiDuration: "2m 20s", qualified: "✓ Yes", outcome: "Transferred to Rahul Modi (complaint)" },
    { time: "10:48", caller: "+91 98250 XXXXX", name: "Mahesh Khanna", language: "Gujarati", duration: "2m 40s", aiDuration: "2m 40s", qualified: "✓ Yes", outcome: "Callback Booked — 16 Jan 10am" },
    { time: "10:15", caller: "+91 98250 XXXXX", name: "Unknown", language: "English", duration: "1m 28s", aiDuration: "1m 28s", qualified: "✗ No", outcome: "Voicemail fallback" },
    { time: "09:50", caller: "+91 99250 XXXXX", name: "Unknown", language: "English", duration: "3m 15s", aiDuration: "2m 30s", qualified: "✓ Yes", outcome: "Transferred to Meera Patel" }
  ];

  // --- 7. Email AI Responder States ---
  const [selectedEmailIdx, setSelectedEmailIdx] = useState(0);

  // ALL 10 Inbox email records from M2 email responder documentation
  const emailsData = [
    { 
      from: "Rajesh Patel", 
      email: "rajesh.patel@gmail.com", 
      subject: "2BHK Vesu inquiry", 
      received: "14:22", 
      category: "New Inquiry", 
      status: "Auto-responded", 
      timeTaken: "2m 48s",
      original: "Hi, I saw your project Greenview Heights in Vesu. Can you please send the brochure and price details for a 2BHK flat? Thank you, Rajesh.",
      reply: `Subject: Re: Your Property Inquiry — Fortiv Solutions\n\nHi Rajesh,\n\nThank you for your interest in Fortiv Solutions! We're thrilled to help you find your perfect home in Surat.\n\nBased on your inquiry, I'd like to recommend:\n\n🏠 FORTIV GREENVIEW HEIGHTS — Vesu, Surat\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nConfiguration: 2BHK & 3BHK\nPrice Range:   ₹45L – ₹85L\nStatus:        RERA Registered · Under Construction\nPossession:    December 2026\n\n📎 Attached: Fortiv_Greenview_Heights_Brochure.pdf\n📎 Attached: Fortiv_Greenview_Heights_PriceList.pdf\n\n👉 Next Step: Schedule a Site Visit. You're welcome to visit our site any day.\nBook your slot here: fortivsolutions.in/visit-vesu\n\nWarm regards,\nFortiv Solutions Team`
    },
    { 
      from: "99acres Notification", 
      email: "leads@99acres.com", 
      subject: "New lead: Priya Shah", 
      received: "14:10", 
      category: "Portal Lead", 
      status: "Parsed + CRM + Reply", 
      timeTaken: "1m 52s",
      original: "Inquiry on Vesu 3BHK Listing from Priya Shah. Phone: +91 98250 22118. Budget: 80L.",
      reply: `Subject: Re: Your Inquiry on 99acres — Fortiv Solutions\n\nHi Priya,\n\nWe received your inquiry regarding our 3BHK listings in Vesu, Surat. Our AI engine has logged your interest.\n\nWe would love to share matching floor plans and pricing lists for Fortiv Greenview Heights. Please reply with a convenient time for a call or continue on WhatsApp: wa.me/919825022118.\n\nBest,\nFortiv Sales Team`
    },
    { 
      from: "Sunita Mehta", 
      email: "sunita.mehta@gmail.com", 
      subject: "Request: Greenview brochure", 
      received: "13:58", 
      category: "Doc Request", 
      status: "Brochure sent", 
      timeTaken: "1m 44s",
      original: "Dear Fortiv, please send the Greenview Heights project brochure to my email.",
      reply: `Subject: Project Brochure: Fortiv Greenview Heights\n\nHi Sunita,\n\nAs requested, we have attached the detailed project brochure for Fortiv Greenview Heights in Vesu, Surat.\n\n📎 Attached: Fortiv_Greenview_Heights_Brochure.pdf\n\nIf you have questions about current availability, configurations, or home loan approvals, simply reply here.\n\nRegards,\nFortiv Solutions Team`
    },
    { 
      from: "Amit Desai", 
      email: "amit.desai@yahoo.in", 
      subject: "Re: Our conversation last week", 
      received: "13:45", 
      category: "Follow-up", 
      status: "Context retrieved + replied", 
      timeTaken: "4m 12s",
      original: "Hello, I spoke with Ankit last week regarding the payment schedule for Greenview. Is the launch offer still active?",
      reply: `Subject: Re: Payment Schedule & Launch Offers — Fortiv Greenview Heights\n\nHi Amit,\n\nGood to hear from you again. Yes! The 5% launch discount is active until June 10, 2026.\n\nI have attached the customized payment schedule plan we discussed. Ankit Shah has been notified of your reply and will check in tomorrow morning.\n\nWarmly,\nFortiv Solutions Team`
    },
    { 
      from: "MagicBricks Notification", 
      email: "leads@magicbricks.com", 
      subject: "New property inquiry", 
      received: "13:30", 
      category: "Portal Lead", 
      status: "Parsed + CRM + Reply", 
      timeTaken: "2m 05s",
      original: "New property inquiry: 2BHK flat in Vesu, budget 52L. Caller: +91 97250 81122.",
      reply: `Subject: Re: MagicBricks Property Inquiry — Fortiv Solutions\n\nHi Partner,\n\nWe have successfully received your inquiry about our 2BHK options in Vesu from MagicBricks.\n\nWe have created a CRM record for you. Let's arrange a callback or share brochures directly. Please let us know when is a good time.\n\nWarmly,\nFortiv Solutions Desk`
    },
    { 
      from: "Vikram Joshi", 
      email: "vikram.joshi@tata.com", 
      subject: "Commercial unit enquiry", 
      received: "13:15", 
      category: "New Inquiry", 
      status: "Auto-responded", 
      timeTaken: "3m 01s",
      original: "Hello, looking for a commercial office workspace in Althan Surat, around 1.5 Cr budget.",
      reply: `Subject: Re: Commercial Space Inquiry — Fortiv Business Park\n\nHi Vikram,\n\nThank you for reaching out. We have prime corporate options matching your budget at Fortiv Business Park, Althan, Surat.\n\n📎 Attached: Fortiv_Business_Park_Layout.pdf\n📎 Attached: Commercial_Inventory_Q1.pdf\n\nLet's connect you with our Commercial Team Lead to discuss payment options.\n\nRegards,\nFortiv Solutions Team`
    },
    { 
      from: "invest123@email.com", 
      email: "invest123@email.com", 
      subject: "Bulk investment — 5 units", 
      received: "12:55", 
      category: "Investor Inquiry", 
      status: "Flagged · Route to Mgr", 
      timeTaken: "4m 45s",
      original: "We are looking to acquire 5 commercial units in Althan. Do you offer bulk discounts or payment plans over 36 months?",
      reply: `Subject: Re: Bulk Commercial Investment Inquiry — Fortiv Business Park\n\nDear Investor,\n\nYour inquiry has been categorized as a high-priority investment lead. Our Sales Manager, Rahul Modi, has been briefed and will contact you directly at +91 99250 XXXXX within 15 minutes with our corporate portfolio pricing.\n\nSincerely,\nFortiv Corporate Desk`
    },
    { 
      from: "Kavita Agarwal", 
      email: "kavita.agarwal@gmail.com", 
      subject: "Complaint — no callback received", 
      received: "12:30", 
      category: "Complaint", 
      status: "Escalated to Priya Rana", 
      timeTaken: "8m 30s",
      original: "I was promised a callback from your sales team yesterday at 4 PM, but no one called me. Highly unprofessional.",
      reply: `Subject: Re: Apology & Urgent Callback Request — Fortiv Solutions\n\nDear Kavita,\n\nWe sincerely apologize for the delay. This has been escalated directly to our Senior Agent, Priya Rana.\n\nShe is currently reviewing your file and will call you on your registered number (+91 95250 33421) within 10 minutes to resolve this personally.\n\nWarm regards,\nCustomer Relations, Fortiv Solutions`
    },
    { 
      from: "Newsletter Bot", 
      email: "newsletter@spam.com", 
      subject: "Special offer…", 
      received: "12:15", 
      category: "Spam", 
      status: "Auto-archived", 
      timeTaken: "—",
      original: "Get 50% off on all business email marketing packages today. Buy now!",
      reply: `[System Action: Auto-archived as Spam]`
    },
    { 
      from: "Pooja Sharma", 
      email: "pooja.sharma@outlook.com", 
      subject: "Is 1BHK available?", 
      received: "11:58", 
      category: "New Inquiry", 
      status: "Auto-responded", 
      timeTaken: "2m 22s",
      original: "Hi, I am looking for a 1BHK in Adajan, budget 28L. Is it available?",
      reply: `Subject: Re: Property Availability — Fortiv Solutions\n\nHi Pooja,\n\nThank you for writing. We currently specialize in 2BHK, 3BHK and 4BHK premium inventory at Fortiv Greenview Heights and Fortiv Skyline Residences.\n\nHowever, we have mapped a partner project in Adajan which has ready 1BHK options. Let us know if we can share their details with you.\n\nBest regards,\nFortiv Solutions Team`
    }
  ];

  const emailHourlyStats = [
    { hour: "09:00", count: 3, time: "2m 55s", height: 60 },
    { hour: "10:00", count: 5, time: "2m 30s", height: 50 },
    { hour: "11:00", count: 6, time: "2m 48s", height: 55 },
    { hour: "12:00", count: 7, time: "3m 10s", height: 70 },
    { hour: "13:00", count: 8, time: "2m 40s", height: 52 },
    { hour: "14:00", count: 5, time: "2m 52s", height: 58 }
  ];

  // --- RENDERS ---

  // Landing Grid Menu View
  const renderMenuSelection = () => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {agentsList.map((agent) => (
            <Card 
              key={agent.id}
              onClick={() => setActiveTab(agent.id as TabType)}
              className="p-5 border border-border/70 hover:border-ink hover:shadow-[0_4px_20px_rgba(11,31,51,0.04)] transition-all duration-300 cursor-pointer flex flex-col justify-between group h-48 bg-card"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded-full uppercase border ${
                    agent.id === "overview" 
                      ? "bg-slate-100 text-slate-600 border-slate-200" 
                      : "bg-ink/5 text-ink border-ink/10"
                  }`}>
                    {agent.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> {agent.status}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground group-hover:text-ink transition-colors mt-1 font-display">
                  {agent.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed truncate-2-lines font-medium">
                  {agent.desc}
                </p>
              </div>
              <div className="border-t border-border/40 mt-4 pt-3 flex items-center justify-between text-[11px] font-bold text-muted-foreground group-hover:text-foreground">
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

  // M2 Page 1: Engagement Overview Dashboard
  const renderOverview = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <StatBox label="Conversations Today" value="84" desc="Across all channels" color="text-[#0E86E9]" />
          <StatBox label="Avg Response Time" value="12s" desc="Mean first response" color="text-emerald-600" />
          <StatBox label="Site Visits Booked" value="7" desc="AI booked today" color="text-primary" />
          <StatBox label="Leads Qualified" value="31" desc="Passed AI profiling" color="text-emerald-600" />
          <StatBox label="Escalated to Agent" value="9" desc="Handed off to human" color="text-amber-500" />
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Live conversation stream */}
          <Card className="col-span-12 lg:col-span-7 p-4 flex flex-col h-[400px] border border-border bg-card">
            <div className="flex items-center justify-between mb-3 border-b border-border/40 pb-2">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Conversation Feed
                </div>
                <h3 className="text-sm font-bold text-foreground">AI Operations Tracker</h3>
              </div>
              <Pill tone="cold">Streaming 24/7</Pill>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-none">
              {liveConversations.map((c) => (
                <div key={c.id} className="flex items-center justify-between p-2.5 rounded-xl border border-border bg-background hover:bg-secondary/40 transition-all duration-300">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-8 w-8 rounded-full bg-secondary border border-border flex items-center justify-center font-bold text-xs shrink-0 text-foreground">
                      {c.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-xs text-foreground flex items-center gap-1.5">
                        {c.name}
                      </div>
                      <div className="text-[10px] text-muted-foreground truncate max-w-xs mt-0.5 font-medium">
                        "{c.msg}"
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    {renderPlatformBadge(c.channel)}
                    <div className="text-right">
                      <div className="text-xs font-bold text-emerald-600 font-display">{c.outcome}</div>
                      <div className="text-[9px] text-muted-foreground font-mono mt-0.5">{c.mins}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* SVG Donut Chart */}
          <Card className="col-span-12 lg:col-span-5 p-4 flex flex-col h-[400px] border border-border bg-card">
            <div className="mb-3 border-b border-border/40 pb-2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Channel Split</div>
              <h3 className="text-sm font-bold text-foreground">Channel Engagement Share</h3>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex justify-center items-center h-44 relative">
                <svg width="140" height="140" viewBox="0 0 160 160" className="transform -rotate-90">
                  {/* WhatsApp Chatbot: 42% (Green) */}
                  <circle cx="80" cy="80" r="60" fill="transparent" stroke="#25D366" strokeWidth="20" strokeDasharray="158.3 218.7" strokeDashoffset="0" />
                  {/* Website Widget: 21% (Blue) */}
                  <circle cx="80" cy="80" r="60" fill="transparent" stroke="#2E86AB" strokeWidth="20" strokeDasharray="79.1 297.9" strokeDashoffset="-158.3" />
                  {/* Voice IVR: 18% (Navy) */}
                  <circle cx="80" cy="80" r="60" fill="transparent" stroke="#1A3C5E" strokeWidth="20" strokeDasharray="67.8 309.2" strokeDashoffset="-237.4" />
                  {/* Email AI Responder: 12% (Amber) */}
                  <circle cx="80" cy="80" r="60" fill="transparent" stroke="#E8A838" strokeWidth="20" strokeDasharray="45.2 331.8" strokeDashoffset="-305.2" />
                  {/* Telegram: 7% (Telegram Blue) */}
                  <circle cx="80" cy="80" r="60" fill="transparent" stroke="#29B6F6" strokeWidth="20" strokeDasharray="26.3 350.7" strokeDashoffset="-350.4" />
                </svg>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <div className="text-2xl font-black font-display text-foreground">84</div>
                  <div className="text-[10px] text-muted-foreground font-semibold">Chats Today</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 border-t border-border/40 pt-3">
                {[
                  { channel: "WhatsApp Chatbot", val: "42%", color: "bg-[#25D366]" },
                  { channel: "Website Widget", val: "21%", color: "bg-[#2E86AB]" },
                  { channel: "Voice IVR", val: "18%", color: "bg-[#1A3C5E]" },
                  { channel: "Email AI Responder", val: "12%", color: "bg-[#E8A838]" },
                  { channel: "Telegram Bot", val: "7%", color: "bg-[#29B6F6]" }
                ].map((c) => (
                  <div key={c.channel} className="flex items-center justify-between text-[11px] font-medium">
                    <span className="flex items-center gap-1.5 text-muted-foreground truncate">
                      <span className={`h-2.5 w-2.5 rounded-sm shrink-0 ${c.color}`} />
                      {c.channel}
                    </span>
                    <span className="font-bold text-foreground font-mono shrink-0">{c.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // M2 Page 2: WhatsApp Chatbot Simulator (3-Column Layout)
  const renderWhatsAppAgent = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        <div className="grid grid-cols-12 gap-4">
          
          {/* Left Column: WhatsApp threads */}
          <Card className="col-span-12 md:col-span-4 lg:col-span-3 border border-border p-0 overflow-hidden flex flex-col h-[540px] bg-[#f0f2f5] dark:bg-[#111b21] shrink-0">
            <div className="p-3 bg-white dark:bg-[#202c33] border-b border-border flex items-center justify-between">
              <span className="text-xs font-bold text-foreground">Fortiv AI WhatsApp</span>
              <span className="text-[9px] bg-emerald-500 text-white px-2 py-0.5 rounded font-bold uppercase">Active</span>
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-border/20 bg-white">
              {(Object.keys(whatsappThreads) as WaThreadId[]).map((threadKey) => {
                const thread = whatsappThreads[threadKey];
                const active = selectedWaThread === threadKey;
                return (
                  <div 
                    key={threadKey}
                    onClick={() => {
                      setSelectedWaThread(threadKey);
                    }}
                    className={`p-3 cursor-pointer transition-colors flex gap-2.5 items-center ${
                      active ? "bg-slate-100" : "hover:bg-slate-50"
                    }`}
                  >
                    <div className="h-9 w-9 rounded-full bg-[#25d366]/10 text-[#25d366] border border-[#25d366]/20 font-bold text-xs flex items-center justify-center shrink-0">
                      {thread.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-foreground truncate">{thread.name}</span>
                        <span className="text-[8px] text-slate-400 font-mono">online</span>
                      </div>
                      <div className="text-[10px] text-slate-500 truncate mt-0.5 font-medium">"{thread.lastMsg}"</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
          
          {/* Middle Column: WhatsApp Chat panel */}
          <div className="col-span-12 md:col-span-8 lg:col-span-5 flex flex-col bg-[#efeae2] dark:bg-[#0b141a] border border-border/60 rounded-2xl overflow-hidden h-[540px] shadow-sm relative">
            
            {/* Header */}
            <div className="px-4 py-3 bg-[#25d366] text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white/15 grid place-items-center text-white shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">Fortiv AI Assistant</div>
                  <div className="text-[10px] text-white/90 font-medium flex items-center gap-1.5">
                    {waTyping ? (
                      <span>typing...</span>
                    ) : (
                      <>
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        <span>online · Simulating {activeWaThreadData.name}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-4 opacity-90">
                <button aria-label="WhatsApp Voice Call"><Phone className="h-4 w-4" /></button>
                <button aria-label="WhatsApp Settings"><MoreHorizontal className="h-4 w-4" /></button>
              </div>
            </div>

            {/* Message Wall */}
            <div 
              ref={whatsappScrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-3 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#e1f3fb] text-[#54656f] text-[9px] px-2.5 py-0.5 rounded uppercase tracking-widest font-bold shadow-sm font-display">
                  Autoplay Session (Fortiv AI Assistant)
                </div>
              </div>

              {waMessages.map((m, idx) => {
                const isUser = m.sender === "buyer";
                return (
                  <div key={idx} className={`flex ${isUser ? "justify-end" : "justify-start"} animate-in fade-in duration-300`}>
                    <div className={`max-w-[85%] rounded-xl px-3 py-1.5 text-xs font-semibold shadow-sm relative ${
                      isUser 
                        ? "bg-[#d9fdd3] text-[#111b21] rounded-tr-none" 
                        : "bg-white text-[#111b21] rounded-tl-none border border-black/5"
                    }`}>
                      <div className="pb-4 whitespace-pre-wrap">{m.text}</div>
                      <div className="absolute right-2 bottom-0.5 flex items-center gap-0.5 text-[8px] text-slate-500 font-mono">
                        {m.time}
                        {isUser && <CheckCheck className="h-3 w-3 text-[#53bdeb]" />}
                      </div>
                    </div>
                  </div>
                );
              })}

              {waTyping && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-xl rounded-tl-none px-3 py-2 border border-black/5 shadow-sm flex gap-1 items-center h-[28px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input Footer */}
            <div className="px-3 py-2.5 bg-[#f0f2f5] dark:bg-[#1f2c34] flex items-center gap-2.5 border-t border-border/40 shrink-0">
              <button aria-label="Attachment" className="text-slate-500 hover:text-slate-700"><Paperclip className="h-5 w-5" /></button>
              <div className="flex-1 bg-white dark:bg-[#2a3942] rounded-lg px-3 py-2 text-xs text-slate-400 font-medium select-none shadow-inner">
                {waPlaying ? "AI Chatbot is handling inquiry autonomously..." : "Press Replay Demo to play conversation simulator"}
              </div>
              <button aria-label="Send message" className="h-9 w-9 bg-[#25d366] rounded-full grid place-items-center text-white hover:bg-[#128c7e] transition-colors shadow-sm">
                <Send className="h-4 w-4 ml-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: AI Live Profile Qualification Panel */}
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-between h-[540px]">
            <Card className="p-5 flex flex-col justify-between flex-1 border border-border bg-card">
              <div>
                <div className="flex items-center gap-1.5 mb-4 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 w-fit">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-display">AI Inbound Qualification</span>
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1">Live Qualification Profile</h3>
                <p className="text-xs text-muted-foreground mb-5 font-semibold">Active thread: <strong>{activeWaThreadData.name}</strong></p>

                <div className="space-y-3.5">
                  {[
                    { label: "Configuration Intent", value: activeWaThreadData.getProfileVal(waIndex, "config") },
                    { label: "Locality Preference", value: activeWaThreadData.getProfileVal(waIndex, "locality") },
                    { label: "Budget Range", value: activeWaThreadData.getProfileVal(waIndex, "budget") },
                    { label: "Possession Target", value: activeWaThreadData.getProfileVal(waIndex, "possession") },
                    { label: "Purchase Purpose", value: activeWaThreadData.getProfileVal(waIndex, "purpose") },
                    { label: "Recommended Project", value: activeWaThreadData.getProfileVal(waIndex, "project"), highlight: true },
                    { label: "Brochure Sharing", value: activeWaThreadData.getProfileVal(waIndex, "brochure") },
                    { label: "Site Visit Schedule", value: activeWaThreadData.getProfileVal(waIndex, "visit"), success: true },
                    { label: "Assigned Agent", value: activeWaThreadData.getProfileVal(waIndex, "agent") }
                  ].map((field) => (
                    <div key={field.label} className="flex justify-between items-center text-xs pb-1.5 border-b border-border/40 last:border-0">
                      <span className="font-semibold text-muted-foreground">{field.label}</span>
                      <span className={`font-bold transition-all duration-300 ${
                        field.success && field.value !== "Pending" 
                          ? "text-emerald-600 font-extrabold" 
                          : field.highlight && field.value !== "Matching..." 
                            ? "text-primary" 
                            : "text-foreground"
                      }`}>
                        {field.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4 mt-5 flex gap-3 items-center justify-between">
                <div className="text-xs">
                  <span className="text-muted-foreground font-semibold">Lead Score Impact:</span>{" "}
                  <strong className="text-red-500 font-bold font-mono">{activeWaThreadData.getProfileVal(waIndex, "impact")}</strong>
                </div>
                <button 
                  onClick={restartWhatsAppDemo}
                  className="h-8 px-4 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Replay Demo
                </button>
              </div>
            </Card>
          </div>
        </div>

        {/* WhatsApp Metrics */}
        <Card className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 border border-border bg-card">
          <div className="text-center md:border-r border-border/40">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Conversations Today</div>
            <div className="text-base font-bold text-foreground font-mono mt-1">42</div>
          </div>
          <div className="text-center md:border-r border-border/40">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Visits Booked MTD</div>
            <div className="text-base font-bold text-foreground font-mono mt-1">14</div>
          </div>
          <div className="text-center md:border-r border-border/40">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Escalation Handoffs</div>
            <div className="text-base font-bold text-foreground font-mono mt-1">4</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Languages Used</div>
            <div className="text-xs font-bold text-foreground font-mono mt-1">EN: 28 · HI: 9 · GU: 5</div>
          </div>
        </Card>
      </div>
    );
  };

  // M2 Page 3: Missed Call Responder
  const renderMissedCallResponder = () => {
    const activeCall = missedCallsData[selectedMissedCallIdx];
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        
        {/* Recovery stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="p-3 rounded-2xl bg-card border border-border text-center">
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-display">Missed Calls Today</div>
            <div className="text-lg font-bold mt-1 text-foreground font-mono">{recoveryRateStats.missedCallsToday}</div>
          </div>
          <div className="p-3 rounded-2xl bg-card border border-border text-center">
            <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-600 font-display">WhatsApp Recovered</div>
            <div className="text-lg font-bold mt-1 text-emerald-600 font-mono">{recoveryRateStats.recoveredWa}</div>
          </div>
          <div className="p-3 rounded-2xl bg-card border border-border text-center">
            <div className="text-[9px] font-bold uppercase tracking-wider text-[#0E86E9] font-display">Recovery Rate</div>
            <div className="text-lg font-bold mt-1 text-[#0E86E9] font-mono">{recoveryRateStats.recoveryRate}</div>
          </div>
          <div className="p-3 rounded-2xl bg-card border border-border text-center">
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-display">SMS Fallbacks</div>
            <div className="text-lg font-bold mt-1 text-foreground font-mono">{recoveryRateStats.smsSent}</div>
          </div>
          <div className="p-3 rounded-2xl bg-card border border-border text-center">
            <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-600 font-display">Overall Recovery</div>
            <div className="text-lg font-bold mt-1 text-emerald-600 font-mono">{recoveryRateStats.overallRecoveryRate}</div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          
          {/* Missed Call Log */}
          <Card className="col-span-12 lg:col-span-8 p-0 overflow-hidden h-[450px] flex flex-col border border-border bg-card">
            <div className="p-3.5 bg-secondary/30 border-b border-border flex justify-between items-center">
              <h3 className="font-bold text-xs text-foreground font-display">Unified Missed Call Recovery Log</h3>
              <span className="text-[10px] text-muted-foreground font-bold">Telephony webhook status: 🟢 LISTENING</span>
            </div>
            <div className="overflow-x-auto flex-1 scrollbar-none">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-secondary/20 border-b border-border/80 text-muted-foreground">
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">Time</th>
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">Caller</th>
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">Auto WA Sent</th>
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">Delay</th>
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">WA Response</th>
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">Outcome</th>
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {missedCallsData.map((call, idx) => {
                    const isSelected = selectedMissedCallIdx === idx;
                    return (
                      <tr 
                        key={idx} 
                        onClick={() => setSelectedMissedCallIdx(idx)}
                        className={`hover:bg-secondary/15 transition-colors cursor-pointer ${
                          isSelected ? "bg-secondary/20 font-semibold border-l-2 border-primary" : ""
                        }`}
                      >
                        <td className="px-4 py-3 font-mono text-muted-foreground">{call.time}</td>
                        <td className="px-4 py-3 font-bold text-foreground">
                          <div>{call.caller}</div>
                          <div className="text-[9px] text-muted-foreground font-medium font-sans">{call.name}</div>
                        </td>
                        <td className="px-4 py-3 font-mono">{call.waSent}</td>
                        <td className="px-4 py-3 font-mono text-slate-500">{call.delay}</td>
                        <td className="px-4 py-3">
                          <span className={call.response.includes("Replied") ? "text-emerald-600 font-bold" : "text-muted-foreground font-medium"}>
                            {call.response}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-bold text-slate-700">{call.outcome}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            call.status === "Recovered" 
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-100" 
                              : call.status === "Pending"
                                ? "bg-amber-50 text-amber-600 border border-amber-100"
                                : "bg-red-50 text-red-600 border border-red-100"
                          }`}>
                            {call.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Recovery Timeline */}
          <Card className="col-span-12 lg:col-span-4 p-4 flex flex-col justify-between h-[450px] border border-border bg-card">
            <div>
              <div className="mb-3 border-b border-border/40 pb-2">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Timeline Tracker</div>
                <h3 className="text-sm font-bold text-foreground">Recovery Audit: {activeCall?.text}</h3>
              </div>

              <div className="relative pl-6 space-y-4 py-2 mt-4 z-10">
                <div className="absolute left-[7px] top-4 bottom-4 w-0.5 bg-secondary border-dashed" />
                
                {[
                  { title: "📞 Incoming Call Unanswered", time: `${activeCall?.time}:00 PM`, desc: "Inbound call missed on sales desk line." },
                  { title: "💬 WhatsApp recovery dispatch", time: activeCall?.waSent, desc: `Auto-generated WA message sent with a delay of ${activeCall?.delay}.` },
                  { title: "💬 Buyer feedback registered", time: activeCall?.response.includes("Replied") ? "Received +3m" : "No response", desc: activeCall?.response.includes("Replied") ? "Buyer clicked WhatsApp reply quick-chips." : "Fallback path triggered." },
                  { title: "✅ Recovery Outcome logged", time: "Logged to CRM", desc: `Outcome: ${activeCall?.outcome}.` }
                ].map((step, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[24px] top-1 h-3.5 w-3.5 rounded-full border border-border bg-card flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    <div className="text-xs font-bold text-foreground">{step.title}</div>
                    <div className="text-[10px] text-muted-foreground font-semibold mt-0.5">{step.desc}</div>
                    <div className="text-[9px] text-primary font-mono mt-0.5">{step.time}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border/40 pt-3 flex justify-between items-center text-xs">
              <span className="text-muted-foreground font-semibold">Average delivery time:</span>
              <span className="font-mono font-bold text-foreground">{recoveryRateStats.avgWaSendTime}</span>
            </div>
          </Card>
        </div>

        {/* Callback Queue required at bottom */}
        <Card className="p-0 overflow-hidden border border-border bg-card">
          <div className="p-3.5 bg-secondary/30 border-b border-border flex justify-between items-center">
            <h3 className="font-bold text-xs text-foreground font-display">Callback Required Queue (Manual Fallback)</h3>
            <span className="text-[10px] bg-red-50 text-red-600 border border-red-100 font-bold px-2 py-0.5 rounded-full">
              Priority Flags: Active
            </span>
          </div>
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-secondary/15 border-b border-border/80 text-muted-foreground">
                  <th className="px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display">Source</th>
                  <th className="px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display">Phone</th>
                  <th className="px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display">Call Time</th>
                  <th className="px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display">WA Sent Time</th>
                  <th className="px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display">WA Response</th>
                  <th className="px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display">SMS Sent</th>
                  <th className="px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display">SMS Response</th>
                  <th className="px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display">CRM Status</th>
                  <th className="px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display">Priority</th>
                  <th className="px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display">Assigned Agent</th>
                  <th className="px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 font-medium">
                {callbackQueueData.map((lead, idx) => (
                  <tr key={idx} className="hover:bg-secondary/10">
                    <td className="px-4 py-2.5 font-bold">{lead.source}</td>
                    <td className="px-4 py-2.5 font-mono text-foreground font-bold">{lead.phone}</td>
                    <td className="px-4 py-2.5 font-mono text-slate-500">{lead.callTime}</td>
                    <td className="px-4 py-2.5 font-mono text-slate-500">{lead.waSentTime}</td>
                    <td className="px-4 py-2.5 text-red-500">{lead.waResponse}</td>
                    <td className="px-4 py-2.5 text-slate-600">{lead.smsSent}</td>
                    <td className="px-4 py-2.5 text-red-500">{lead.smsResponse}</td>
                    <td className="px-4 py-2.5">
                      <span className="text-[10px] bg-red-50 text-red-600 border border-red-200 px-2 py-0.5 rounded font-black">
                        {lead.crmStatus}
                      </span>
                    </td>
                    <td className="px-4 py-2.5">
                      <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded font-black tracking-wider uppercase">
                        {lead.priority}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 font-bold text-foreground">{lead.agent}</td>
                    <td className="px-4 py-2.5 text-muted-foreground text-[10px] font-medium font-sans">"{lead.notes}"</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    );
  };

  // M2 Page 4: Website Chat Widget
  const renderWebsiteWidget = () => {
    const messages = widgetFlows[selectedFlow];
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        
        {/* Selector Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border rounded-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Demo Chat Scenarios:</span>
            <div className="flex gap-1.5">
              {(["A", "B", "C", "D"] as const).map((flow) => (
                <button
                  key={flow}
                  onClick={() => setSelectedFlow(flow)}
                  className={`h-7 px-3 rounded-lg text-xs font-bold transition-all border ${
                    selectedFlow === flow 
                      ? "bg-ink border-ink text-cream" 
                      : "bg-background border-border text-muted-foreground hover:bg-muted"
                  }`}
                >
                  Flow {flow}
                </button>
              ))}
            </div>
          </div>
          <span className="text-xs font-semibold text-muted-foreground font-mono">Knowledge Base Size: 80 FAQs + RAG Matrix</span>
        </div>

        <div className="grid grid-cols-12 gap-4">
          
          {/* Left panel: Widget preview */}
          <div className="col-span-12 lg:col-span-6 flex flex-col bg-[#f5f6fa] border border-border rounded-2xl h-[500px] shadow-sm relative overflow-hidden">
            <div className="bg-white border-b border-border px-4 py-2 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <span className="text-[10px] text-slate-400 font-mono">fortivsolutions.in/greenview</span>
              <span className="w-12" />
            </div>

            <div className="flex-1 p-6 relative flex flex-col justify-end">
              {/* Fake Website content backdrop */}
              <div className="absolute inset-0 p-6 flex flex-col gap-3 select-none pointer-events-none opacity-10">
                <div className="h-6 w-32 bg-slate-500 rounded" />
                <div className="h-4 w-full bg-slate-500 rounded" />
                <div className="h-4 w-3/4 bg-slate-500 rounded" />
                <div className="h-32 bg-slate-400 rounded-xl mt-4" />
              </div>

              {/* Chat Widget Window */}
              <div className="w-[320px] bg-card border border-border shadow-xl rounded-2xl overflow-hidden flex flex-col h-[380px] self-end z-10">
                <div className="bg-primary text-primary-foreground px-3.5 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold">Fortiv AI Assistant</span>
                  </div>
                  <HelpCircle className="h-4 w-4 opacity-90" />
                </div>
                
                {/* Messages panel */}
                <div 
                  ref={widgetScrollRef}
                  className="flex-1 overflow-y-auto p-3 space-y-2 bg-[#F8FAFC]"
                >
                  {widgetMessages.map((m, idx) => (
                    <div key={idx} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[85%] rounded-xl px-2.5 py-1.5 text-[11px] font-semibold ${
                        m.from === "user" 
                          ? "bg-primary text-primary-foreground rounded-br-none" 
                          : "bg-white text-foreground border border-border rounded-tl-none"
                      }`}>
                        <div className="whitespace-pre-line">{m.text}</div>
                      </div>
                    </div>
                  ))}
                  {widgetTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-border rounded-xl rounded-tl-none px-2.5 py-1.5 shadow-sm flex gap-1 items-center h-[24px]">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer input */}
                <div className="p-2 border-t border-border/80 flex items-center gap-1.5 bg-white">
                  <input aria-label="Widget message input" disabled placeholder="Type a message..." className="flex-1 text-[11px] font-medium h-7 px-2.5 bg-secondary/50 border border-transparent rounded-lg outline-none cursor-not-allowed" />
                  <button aria-label="Send widget message" className="h-7 w-7 rounded-lg bg-primary text-primary-foreground grid place-items-center"><Send className="h-3.5 w-3.5" /></button>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: RAG query log */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4 h-[500px]">
            {/* RAG Log */}
            <Card className="p-0 overflow-hidden flex-1 flex flex-col border border-border bg-card">
              <div className="p-3 bg-secondary/30 border-b border-border">
                <h4 className="font-bold text-xs text-foreground font-display">Real-time RAG Knowledge Vector Queries</h4>
              </div>
              <div className="overflow-y-auto flex-1 scrollbar-none">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="bg-secondary/10 border-b border-border/50 text-muted-foreground">
                      <th className="px-3 py-2 font-bold text-[9px] uppercase tracking-widest font-display">Visitor Question</th>
                      <th className="px-3 py-2 font-bold text-[9px] uppercase tracking-widest font-display">Reference Source</th>
                      <th className="px-3 py-2 font-bold text-[9px] uppercase tracking-widest font-display">Confidence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {ragQueryLog.map((r, idx) => (
                      <tr key={idx} className="hover:bg-secondary/15 transition-colors">
                        <td className="px-3 py-2.5 font-bold text-foreground">"{r.q}"</td>
                        <td className="px-3 py-2.5 text-slate-500 font-mono text-[10px]">{r.src}</td>
                        <td className="px-3 py-2.5 font-mono text-emerald-600 font-bold">{r.confidence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Lead capture queue */}
            <Card className="p-0 overflow-hidden h-[180px] flex flex-col border border-border bg-card">
              <div className="p-2.5 bg-secondary/30 border-b border-border">
                <h4 className="font-bold text-xs text-foreground font-display">Captured Widget Leads</h4>
              </div>
              <div className="overflow-y-auto flex-1 scrollbar-none">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="bg-secondary/10 border-b border-border/50 text-muted-foreground">
                      <th className="px-3 py-1.5 font-bold text-[9px] uppercase tracking-widest font-display">Name</th>
                      <th className="px-3 py-1.5 font-bold text-[9px] uppercase tracking-widest font-display">Phone</th>
                      <th className="px-3 py-1.5 font-bold text-[9px] uppercase tracking-widest font-display">Interest</th>
                      <th className="px-3 py-1.5 font-bold text-[9px] uppercase tracking-widest font-display">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {leadCaptureLog.map((l, idx) => (
                      <tr key={idx} className="hover:bg-secondary/10">
                        <td className="px-3 py-2 font-bold text-foreground">{l.name}</td>
                        <td className="px-3 py-2 font-mono text-slate-500">{l.phone}</td>
                        <td className="px-3 py-2 font-semibold">{l.interest}</td>
                        <td className="px-3 py-2">
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{l.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  };

  // M2 Page 5: Telegram Agent Bot Simulator
  const renderTelegramAgent = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        <div className="grid grid-cols-12 gap-4">
          
          {/* Telegram mockup */}
          <div className="col-span-12 lg:col-span-6 flex flex-col bg-[#17212b] border border-border/60 rounded-2xl h-[520px] shadow-sm relative overflow-hidden text-[#f5f6f7]">
            
            {/* Telegram Header */}
            <div className="px-4 py-3 bg-[#24303f] flex items-center justify-between shrink-0 border-b border-[#1c2937]">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#3090cd] grid place-items-center text-white shrink-0 shadow-sm">
                  <Building className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#fff]">Fortiv CRM Bot</div>
                  <div className="text-[10px] text-[#708499] font-medium">
                    {tgTyping ? <span>bot is typing...</span> : "bot"}
                  </div>
                </div>
              </div>
              <button aria-label="More Telegram Options" className="text-[#6c7e90]"><MoreHorizontal className="h-5 w-5" /></button>
            </div>

            {/* Chat Thread */}
            <div 
              ref={telegramScrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              {tgMessages.map((m, idx) => {
                const isBot = m.from === "bot";
                return (
                  <div key={idx} className={`flex ${isBot ? "justify-start" : "justify-end"} animate-in fade-in duration-300`}>
                    <div className={`max-w-[85%] rounded-xl px-3 py-2 text-xs relative ${
                      isBot 
                        ? "bg-[#182533] text-[#fff] rounded-tl-none border border-[#203040]" 
                        : "bg-[#2b5278] text-[#fff] rounded-tr-none"
                    }`}>
                      <div className="whitespace-pre-wrap font-mono tracking-tight leading-relaxed">{m.text}</div>
                      <div className="text-right text-[8px] text-[#708499] mt-1 font-mono">
                        {m.time} {isBot ? "" : "✓✓"}
                      </div>
                    </div>
                  </div>
                );
              })}

              {tgTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#182533] rounded-xl rounded-tl-none px-3.5 py-2 border border-[#203040] shadow-sm flex gap-1 items-center h-[28px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#708499] animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#708499] animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#708499] animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Footer chips & Input */}
            <div className="p-3 bg-[#17212b] border-t border-[#1c2937] shrink-0">
              <div className="flex flex-wrap gap-2 justify-center mb-3">
                <button 
                  onClick={() => runTelegramCommand(telegramCommands.comps.cmd, telegramCommands.comps.reply)}
                  className="px-3 py-1 bg-[#24303f] hover:bg-[#2e3e52] text-[#3090cd] text-[10px] font-bold rounded-full border border-[#1c2937] transition-all"
                >
                  /comps 2BHK Vesu
                </button>
                <button 
                  onClick={() => runTelegramCommand(telegramCommands.emi.cmd, telegramCommands.emi.reply)}
                  className="px-3 py-1 bg-[#24303f] hover:bg-[#2e3e52] text-[#3090cd] text-[10px] font-bold rounded-full border border-[#1c2937] transition-all"
                >
                  /emi 58L 20
                </button>
                <button 
                  onClick={() => runTelegramCommand(telegramCommands.pipeline.cmd, telegramCommands.pipeline.reply)}
                  className="px-3 py-1 bg-[#24303f] hover:bg-[#2e3e52] text-[#3090cd] text-[10px] font-bold rounded-full border border-[#1c2937] transition-all"
                >
                  /pipeline
                </button>
                <button 
                  onClick={() => runTelegramCommand(telegramCommands.hot.cmd, telegramCommands.hot.reply)}
                  className="px-3 py-1 bg-[#24303f] hover:bg-[#2e3e52] text-[#3090cd] text-[10px] font-bold rounded-full border border-[#1c2937] transition-all"
                >
                  /hot
                </button>
                <button 
                  onClick={() => runTelegramCommand(telegramCommands.rera.cmd, telegramCommands.rera.reply)}
                  className="px-3 py-1 bg-[#24303f] hover:bg-[#2e3e52] text-[#3090cd] text-[10px] font-bold rounded-full border border-[#1c2937] transition-all"
                >
                  /rera Greenview
                </button>
                <button 
                  onClick={() => runTelegramCommand(telegramCommands.inventory.cmd, telegramCommands.inventory.reply)}
                  className="px-3 py-1 bg-[#24303f] hover:bg-[#2e3e52] text-[#3090cd] text-[10px] font-bold rounded-full border border-[#1c2937] transition-all"
                >
                  /inventory 2BHK
                </button>
                <button 
                  onClick={() => runTelegramCommand(telegramCommands.book.cmd, telegramCommands.book.reply)}
                  className="px-3 py-1 bg-[#24303f] hover:bg-[#2e3e52] text-[#3090cd] text-[10px] font-bold rounded-full border border-[#1c2937] transition-all font-sans font-bold"
                >
                  /book visit
                </button>
              </div>
              <div className="flex items-center gap-2 bg-[#24303f] border border-[#1c2937] rounded-lg px-3 py-1.5">
                <span className="text-[#6c7e90] text-xs font-mono">/</span>
                <input aria-label="Telegram command input" disabled placeholder="Select one of the quick command chips above..." className="flex-1 bg-transparent text-xs text-[#fff] outline-none placeholder:text-[#526375] font-mono cursor-not-allowed" />
              </div>
            </div>
          </div>

          {/* Activity Log */}
          <Card className="col-span-12 lg:col-span-6 p-0 overflow-hidden h-[520px] flex flex-col border border-border bg-card">
            <div className="p-3.5 bg-secondary/30 border-b border-border">
              <h3 className="font-bold text-xs text-foreground font-display">Field Agents Telegram Activity Log</h3>
            </div>
            <div className="overflow-x-auto flex-1 scrollbar-none">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-secondary/15 border-b border-border/80 text-muted-foreground">
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">Agent</th>
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">Command Requested</th>
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">Query Time</th>
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">Outcome Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {telegramActivityLog.map((log, idx) => (
                    <tr key={idx} className="hover:bg-secondary/10">
                      <td className="px-4 py-3 font-bold text-foreground">{log.agent}</td>
                      <td className="px-4 py-3 font-mono text-primary font-bold">{log.cmd}</td>
                      <td className="px-4 py-3 font-mono text-slate-500">{log.time}</td>
                      <td className="px-4 py-3">
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{log.result}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-border bg-muted/10 text-xs text-muted-foreground font-semibold flex items-center justify-between">
              <span>Average Telegram response speed: <strong className="text-foreground font-mono">1.2s</strong></span>
              <span>Total internal users today: <strong className="text-foreground">5 sales agents</strong></span>
            </div>
          </Card>
        </div>
      </div>
    );
  };

  // M2 Page 6: Voice IVR Bot
  const renderVoiceIVR = () => {
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        
        {/* Calls stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-border bg-card p-4 rounded-2xl">
          <div className="text-center md:border-r border-border/40">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Voice Calls Today</div>
            <div className="text-base font-bold text-foreground font-mono mt-1">24</div>
          </div>
          <div className="text-center md:border-r border-border/40">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">AI Fully Qualified</div>
            <div className="text-base font-bold text-foreground font-mono mt-1">18</div>
          </div>
          <div className="text-center md:border-r border-border/40">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Transferred to Human</div>
            <div className="text-base font-bold text-foreground font-mono mt-1">6</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Avg AI Handle Duration</div>
            <div className="text-base font-bold text-foreground font-mono mt-1">2m 10s</div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          
          {/* Inbound calls table */}
          <Card className="col-span-12 lg:col-span-7 p-0 overflow-hidden h-[450px] flex flex-col border border-border bg-card">
            <div className="p-3.5 bg-secondary/30 border-b border-border flex justify-between items-center">
              <h3 className="font-bold text-xs text-foreground font-display">Voice Call Qualification Logs</h3>
            </div>
            <div className="overflow-x-auto flex-1 scrollbar-none">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="bg-secondary/15 border-b border-border/80 text-muted-foreground">
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">Time</th>
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">Caller</th>
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">Language</th>
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">Call Duration</th>
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">AI Duration</th>
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">Qualified</th>
                    <th className="px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display">Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {ivrCallsData.map((call, idx) => (
                    <tr key={idx} className="hover:bg-secondary/10">
                      <td className="px-4 py-3 font-mono text-muted-foreground">{call.time}</td>
                      <td className="px-4 py-3 font-bold text-foreground">
                        <div>{call.caller}</div>
                        <div className="text-[9px] text-muted-foreground font-medium font-sans">{call.name}</div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="font-bold text-slate-600 bg-secondary px-2 py-0.5 rounded border border-border text-[10px]">
                          {call.language}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono">{call.duration}</td>
                      <td className="px-4 py-3 font-mono text-slate-500">{call.aiDuration}</td>
                      <td className="px-4 py-3 font-bold text-emerald-600">{call.qualified}</td>
                      <td className="px-4 py-3 font-bold text-slate-700">{call.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Right panel: Voice IVR Transcript Chat simulator */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 h-[450px]">
            
            {/* Live IVR Chat Player */}
            <Card className="p-4 flex-1 flex flex-col justify-between border border-border bg-card overflow-hidden">
              <div className="flex-1 flex flex-col min-h-0">
                <div className="mb-2.5 border-b border-border/40 pb-2 flex justify-between items-center shrink-0">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Live Audio Transcript</div>
                    <h4 className="text-xs font-bold text-foreground">AI Voice IVR Call Simulator</h4>
                  </div>
                  <div className="flex gap-1">
                    <button 
                      onClick={() => setSelectedIvrFlow("inbound")}
                      className={`px-2 py-0.5 rounded text-[9px] font-bold border transition-all ${
                        selectedIvrFlow === "inbound" ? "bg-ink border-ink text-cream" : "bg-card border-border text-muted-foreground"
                      }`}
                    >
                      Inbound
                    </button>
                    <button 
                      onClick={() => setSelectedIvrFlow("after-hours")}
                      className={`px-2 py-0.5 rounded text-[9px] font-bold border transition-all ${
                        selectedIvrFlow === "after-hours" ? "bg-ink border-ink text-cream" : "bg-card border-border text-muted-foreground"
                      }`}
                    >
                      After-Hours
                    </button>
                  </div>
                </div>

                {/* Speech transcript bubbles */}
                <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 p-2 bg-[#f8fafc] border border-border/40 rounded-xl">
                  {ivrTranscriptMessages.map((m, idx) => {
                    const isAi = m.speaker === "ai";
                    return (
                      <div key={idx} className={`flex ${isAi ? "justify-start" : "justify-end"} animate-in fade-in duration-300`}>
                        <div className={`max-w-[85%] rounded-xl px-2.5 py-1.5 text-[10px] font-semibold leading-relaxed shadow-sm ${
                          isAi 
                            ? "bg-slate-100 text-slate-800 border border-border/60 rounded-tl-none" 
                            : "bg-primary text-primary-foreground rounded-br-none"
                        }`}>
                          {m.text}
                        </div>
                      </div>
                    );
                  })}
                  {ivrPlaying && (
                    <div className="flex justify-start">
                      <div className="bg-slate-100 border border-border/40 rounded-xl rounded-tl-none px-3 py-1.5 shadow-sm flex gap-1 items-center h-[24px]">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-border/40 pt-3 mt-3 flex justify-between items-center shrink-0">
                <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Qualified
                </span>
                <button 
                  onClick={() => {
                    setIvrTranscriptMessages([]);
                    setIvrIndex(-1);
                    setIvrPlaying(true);
                  }}
                  className="h-7 px-3 bg-secondary hover:bg-secondary/70 border border-border rounded-lg text-[10px] font-bold transition-all flex items-center gap-1 active:scale-95"
                >
                  <RotateCcw className="h-3 w-3" /> Replay Call
                </button>
              </div>
            </Card>

            {/* Language Breakdown Card */}
            <Card className="p-4 h-[180px] flex flex-col justify-between border border-border bg-card">
              <div>
                <div className="mb-2 border-b border-border/40 pb-1">
                  <h4 className="text-xs font-bold text-foreground">Language Distribution MTD</h4>
                </div>
                <div className="space-y-2 pt-1.5">
                  {[
                    { label: "English", count: "14 calls", pct: "58.3%", w: "w-[58.3%]", color: "bg-[#0E86E9]" },
                    { label: "Gujarati", count: "6 calls", pct: "25.0%", w: "w-[25.0%]", color: "bg-emerald-500" },
                    { label: "Hindi", count: "4 calls", pct: "16.7%", w: "w-[16.7%]", color: "bg-amber-500" }
                  ].map((lang) => (
                    <div key={lang.label} className="space-y-1">
                      <div className="flex justify-between text-[10px] font-semibold text-slate-500">
                        <span>{lang.label} ({lang.count})</span>
                        <span className="font-bold text-foreground font-mono">{lang.pct}</span>
                      </div>
                      <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${lang.color} ${lang.w}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  };

  // M2 Page 7: Email AI Responder
  const renderEmailResponder = () => {
    const activeEmail = emailsData[selectedEmailIdx];
    return (
      <div className="space-y-4 animate-in fade-in duration-300">
        
        {/* Email top stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-border bg-card p-4 rounded-2xl">
          <div className="text-center md:border-r border-border/40">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Inbound Emails Today</div>
            <div className="text-base font-bold text-foreground font-mono mt-1">34</div>
          </div>
          <div className="text-center md:border-r border-border/40">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">AI Automated Responses</div>
            <div className="text-base font-bold text-foreground font-mono mt-1">28</div>
          </div>
          <div className="text-center md:border-r border-border/40">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">Mean Delivery Speed</div>
            <div className="text-base font-bold text-foreground font-mono mt-1">2m 48s</div>
          </div>
          <div className="text-center">
            <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display">SLA Breaches (Target 3m)</div>
            <div className="text-base font-bold text-foreground font-mono mt-1">0</div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          
          {/* Email inbox list */}
          <Card className="col-span-12 lg:col-span-7 p-0 overflow-hidden h-[450px] flex flex-col border border-border bg-card">
            <div className="p-3 bg-secondary/20 border-b border-border">
              <h4 className="font-bold text-xs text-foreground font-display">Unified Inbound Email Inbox</h4>
            </div>
            
            <div className="flex-1 overflow-y-auto divide-y divide-border/60 scrollbar-none">
              {emailsData.map((email, idx) => {
                const isSelected = selectedEmailIdx === idx;
                return (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedEmailIdx(idx)}
                    className={`p-3.5 hover:bg-secondary/15 transition-colors cursor-pointer flex items-start justify-between gap-4 ${
                      isSelected ? "bg-secondary/25 border-l-2 border-primary" : ""
                    }`}
                  >
                    <div className="flex gap-3 min-w-0">
                      <div className="h-8 w-8 rounded-full bg-secondary border border-border flex items-center justify-center font-bold text-[10px] text-slate-600 shrink-0">
                        {email.from[0]}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-xs text-foreground flex items-center gap-2 flex-wrap">
                          {email.from}
                          <span className="text-[9px] font-mono text-slate-400">({email.email})</span>
                        </div>
                        <div className="text-[11px] font-bold text-foreground mt-0.5">{email.subject}</div>
                        <div className="text-[10px] text-muted-foreground mt-1 truncate max-w-sm font-medium">"{email.original}"</div>
                      </div>
                    </div>

                    <div className="text-right shrink-0 flex flex-col items-end gap-1.5">
                      <span className="text-[9px] text-slate-400 font-mono">{email.received}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#efe5dd] text-slate-700">{email.category}</span>
                      <span className="text-[10px] text-emerald-600 font-bold font-mono">✓ {email.timeTaken}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Auto-response draft preview */}
          <Card className="col-span-12 lg:col-span-5 p-4 h-[450px] flex flex-col justify-between border border-border bg-card">
            <div className="flex-1 flex flex-col min-h-0">
              <div className="mb-3 border-b border-border/40 pb-2 flex justify-between items-center shrink-0">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Auto-Responder Output</div>
                  <h3 className="text-xs font-bold text-foreground">AI Draft Response Preview</h3>
                </div>
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  Approved & Dispatched
                </span>
              </div>

              <div className="flex-1 bg-secondary/30 rounded-xl p-3 border border-border/60 overflow-y-auto font-mono text-[10px] text-foreground leading-relaxed whitespace-pre-wrap">
                {activeEmail?.reply}
              </div>
            </div>

            <div className="border-t border-border pt-3 mt-4 flex gap-3 shrink-0">
              <button className="flex-1 h-8 rounded-lg bg-secondary hover:bg-secondary/70 text-foreground text-xs font-bold border border-border transition-colors">
                Edit Draft
              </button>
              <button className="flex-1 h-8 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold shadow-sm transition-all">
                Send Reply
              </button>
            </div>
          </Card>
        </div>

        {/* Hourly stats bar chart */}
        <Card className="p-4 flex flex-col h-[260px] border border-border bg-card">
          <div className="mb-3 border-b border-border/40 pb-2">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display">Hourly Analytics</div>
            <h3 className="text-sm font-bold text-foreground">Average Inbound Response Time by Hour</h3>
          </div>
          <div className="flex-1 flex items-end gap-5 px-3 pt-6">
            {emailHourlyStats.map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                <div className="text-[9px] font-bold text-foreground font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.time} ({item.count} emails)
                </div>
                <div 
                  className="w-full rounded-t bg-[#E8A838] transition-all duration-300 opacity-80 group-hover:opacity-100 shadow-sm"
                  style={{ height: `${item.height}%` }}
                />
                <div className="text-[10px] font-bold text-muted-foreground font-mono mt-1">
                  {item.hour}
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
          title: "Conversations",
          subtitle: "Autonomous front-office engaging buyers and routing requests 24/7 across every communication channel.",
        };
      case "overview":
        return {
          title: "Engagement Overview",
          subtitle: "Live operations metrics dashboard for Indian real estate buyers.",
        };
      case "whatsapp":
        return {
          title: "WhatsApp AI Chatbot",
          subtitle: "Autonomous AI assistant that qualifies prospects and books site visits on WhatsApp.",
        };
      case "missed-call":
        return {
          title: "Missed Call Auto-Responder",
          subtitle: "Instantly follows up on missed calls via WhatsApp and SMS fallback.",
        };
      case "website-widget":
        return {
          title: "Website AI Chat Widget",
          subtitle: "Website chat widget equipped with RAG for accurate project Q&A and lead capture.",
        };
      case "telegram":
        return {
          title: "Telegram Agent for Field Staff",
          subtitle: "Internal bot for sales agents to query CRM leads, inventory, and calculators in real-time.",
        };
      case "voice-ivr":
        return {
          title: "Voice IVR Bot",
          subtitle: "Voice AI that qualifies inbound callers using natural speech in multiple languages.",
        };
      case "email":
        return {
          title: "Email AI Responder",
          subtitle: "Auto-drafts and sends customized email responses to property inquiries within 3 minutes.",
        };
      default:
        return {
          title: "Conversations",
          subtitle: "Autonomous front-office AI.",
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
        aria-label="Back to Conversations menu"
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

  return (
    <AppShell
      title={dynamicTitle}
      subtitle={headerInfo.subtitle}
    >
      <div className="transition-all duration-300">
        {activeTab === "menu" && renderMenuSelection()}
        {activeTab === "overview" && renderOverview()}
        {activeTab === "whatsapp" && renderWhatsAppAgent()}
        {activeTab === "missed-call" && renderMissedCallResponder()}
        {activeTab === "website-widget" && renderWebsiteWidget()}
        {activeTab === "telegram" && renderTelegramAgent()}
        {activeTab === "voice-ivr" && renderVoiceIVR()}
        {activeTab === "email" && renderEmailResponder()}
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
