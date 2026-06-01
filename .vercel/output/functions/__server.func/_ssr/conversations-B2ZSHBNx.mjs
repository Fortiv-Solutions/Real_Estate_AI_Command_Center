import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { A as AppShell, C as Card, P as Pill } from "./AppShell-Dji0FoTH.mjs";
import { g as Route$5 } from "./router-SPLEJOXz.mjs";
import { m as ChevronLeft, b as ArrowRight, Z as Sparkles, K as Phone, E as Ellipsis, l as CheckCheck, P as Paperclip, U as Send, S as RotateCcw, r as CircleQuestionMark, e as Building } from "../_libs/lucide-react.mjs";
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
const recoveryRateStats = {
  missedCallsToday: 18,
  recoveredWa: 14,
  recoveryRate: "77.7%",
  smsSent: 4,
  overallRecoveryRate: "83.3%",
  avgWaSendTime: "54 seconds"
};
const whatsappThreads = {
  rajesh: {
    name: "Rajesh Patel",
    lastMsg: "Saturday works",
    avatar: "RP",
    script: [{
      sender: "buyer",
      text: "Hi, interested in 2BHK in Surat"
    }, {
      sender: "ai",
      text: "Hello! Welcome to Fortiv Solutions 🏠 I'm happy to help you find your perfect home in Surat. May I ask your budget range?"
    }, {
      sender: "buyer",
      text: "Around 50–60 lakhs"
    }, {
      sender: "ai",
      text: "Great choice! We have some excellent options in that range. Which area do you prefer — Vesu, Adajan, or Pal?"
    }, {
      sender: "buyer",
      text: "Vesu preferred"
    }, {
      sender: "ai",
      text: "Perfect. Are you looking for ready possession or under-construction?"
    }, {
      sender: "buyer",
      text: "Under construction is fine"
    }, {
      sender: "ai",
      text: "Wonderful! I'd like to recommend Fortiv Greenview Heights in Vesu — RERA registered, G+14, possession Dec 2026, prices starting ₹48L. Shall I send the brochure?"
    }, {
      sender: "buyer",
      text: "Yes please"
    }, {
      sender: "ai",
      text: "📎 [Brochure PDF — Fortiv Greenview Heights.pdf] Sent! Would you like to schedule a site visit this weekend?"
    }, {
      sender: "buyer",
      text: "Saturday works"
    }, {
      sender: "ai",
      text: "Site visit confirmed for Saturday 11:00 AM ✓ Our agent Priya Rana will meet you. You'll receive a reminder Friday evening. See you Saturday! 🙏"
    }],
    getProfileVal: (step, field) => {
      switch (field) {
        case "budget":
          return step >= 2 ? "₹50–60 Lakhs" : "Determining...";
        case "locality":
          return step >= 4 ? "Vesu" : "Determining...";
        case "config":
          return step >= 0 ? "2BHK" : "Determining...";
        case "possession":
          return step >= 6 ? "Under Construction" : "Determining...";
        case "purpose":
          return "Self-use (unconfirmed)";
        case "project":
          return step >= 7 ? "Fortiv Greenview Heights" : "Matching...";
        case "brochure":
          return step >= 9 ? "Sent ✓" : "Pending";
        case "visit":
          return step >= 11 ? "Saturday 11:00 AM" : "Pending";
        case "agent":
          return step >= 11 ? "Priya Rana" : "Unassigned";
        case "impact":
          return step >= 11 ? "+20 pts" : "0 pts";
        default:
          return "—";
      }
    }
  },
  priya: {
    name: "Priya Shah",
    lastMsg: "Saturday 11:30 works",
    avatar: "PS",
    script: [{
      sender: "buyer",
      text: "Hello, looking for a 3BHK flat in Adajan area"
    }, {
      sender: "ai",
      text: "Welcome to Fortiv Solutions! 🏠 I'd be glad to help you. What budget are you considering for your 3BHK?"
    }, {
      sender: "buyer",
      text: "Around 70–80 lakhs max"
    }, {
      sender: "ai",
      text: "Perfect. Are you looking for specific amenities like a swimming pool, clubhouse, or gym?"
    }, {
      sender: "buyer",
      text: "Yes, swimming pool and children play area are must"
    }, {
      sender: "ai",
      text: "Understood! Fortiv Greenview Heights in Adajan has a beautiful rooftop pool, landscaped gardens, and a dedicated kids play area. Shall I share the amenities list?"
    }, {
      sender: "buyer",
      text: "Yes, that would be helpful"
    }, {
      sender: "ai",
      text: "📎 [Amenities Guide — Fortiv.pdf] Shared! We can book a site visit to the sample flat this Saturday if you'd like?"
    }, {
      sender: "buyer",
      text: "Saturday works. Do you have slots at 11:30 AM?"
    }, {
      sender: "ai",
      text: "Yes, 11:30 AM on Saturday is booked for you ✓ Our agent Priya Rana will meet you at the site lobby. Looking forward to meeting you! 😊"
    }],
    getProfileVal: (step, field) => {
      switch (field) {
        case "budget":
          return step >= 2 ? "₹70–80 Lakhs" : "Determining...";
        case "locality":
          return step >= 0 ? "Adajan" : "Determining...";
        case "config":
          return step >= 0 ? "3BHK" : "Determining...";
        case "possession":
          return step >= 5 ? "Under Construction" : "Determining...";
        case "purpose":
          return "Self-use (unconfirmed)";
        case "project":
          return step >= 5 ? "Fortiv Greenview Heights" : "Matching...";
        case "brochure":
          return step >= 7 ? "Sent ✓" : "Pending";
        case "visit":
          return step >= 9 ? "Saturday 11:30 AM" : "Pending";
        case "agent":
          return step >= 9 ? "Priya Rana" : "Unassigned";
        case "impact":
          return step >= 9 ? "+20 pts" : "0 pts";
        default:
          return "—";
      }
    }
  },
  amit: {
    name: "Amit Desai",
    lastMsg: "Yes, tomorrow is fine",
    avatar: "AD",
    script: [{
      sender: "buyer",
      text: "Do you have any 2BHK in Pal?"
    }, {
      sender: "ai",
      text: "Hello! Yes, we have some premium 2BHK configurations in Pal. May I know your budget bracket?"
    }, {
      sender: "buyer",
      text: "Around 45 to 55 lakhs"
    }, {
      sender: "ai",
      text: "Got it! Are you looking for ready possession or under-construction?"
    }, {
      sender: "buyer",
      text: "Ready possession is preferred"
    }, {
      sender: "ai",
      text: "Excellent. We have some developer inventory in Fortiv Greenview Heights ready to move. Would you like to check the price list?"
    }, {
      sender: "buyer",
      text: "Yes, send price list please"
    }, {
      sender: "ai",
      text: "📎 [Ready Inventory Price List.pdf] Sent! Let me know if you would like to visit the ready units tomorrow?"
    }, {
      sender: "buyer",
      text: "Sure, what time?"
    }, {
      sender: "ai",
      text: "Our agent Ankit Shah can meet you tomorrow at 4:30 PM. Does that work?"
    }, {
      sender: "buyer",
      text: "Yes, perfect"
    }, {
      sender: "ai",
      text: "Great! Confirmed for tomorrow at 4:30 PM ✓ See you there! 🙏"
    }],
    getProfileVal: (step, field) => {
      switch (field) {
        case "budget":
          return step >= 2 ? "₹45–55 Lakhs" : "Determining...";
        case "locality":
          return step >= 0 ? "Pal" : "Determining...";
        case "config":
          return step >= 0 ? "2BHK" : "Determining...";
        case "possession":
          return step >= 4 ? "Ready Possession" : "Determining...";
        case "purpose":
          return "Self-use (unconfirmed)";
        case "project":
          return step >= 5 ? "Fortiv Greenview Heights" : "Matching...";
        case "brochure":
          return step >= 7 ? "Price List Sent ✓" : "Pending";
        case "visit":
          return step >= 11 ? "Tomorrow 4:30 PM" : "Pending";
        case "agent":
          return step >= 11 ? "Ankit Shah" : "Unassigned";
        case "impact":
          return step >= 11 ? "+20 pts" : "0 pts";
        default:
          return "—";
      }
    }
  },
  sunita: {
    name: "Sunita Mehta",
    lastMsg: "Sunday morning works",
    avatar: "SM",
    script: [{
      sender: "buyer",
      text: "Missed call recovery - wanted to check your Vesu projects"
    }, {
      sender: "ai",
      text: "Hello Sunita! Sorry we missed your call. I'd love to share our Vesu developments. What configuration are you looking for?"
    }, {
      sender: "buyer",
      text: "Looking for a 2BHK flat"
    }, {
      sender: "ai",
      text: "Great! What budget range are you looking at?"
    }, {
      sender: "buyer",
      text: "Between 50 to 65 lakhs"
    }, {
      sender: "ai",
      text: "Wonderful! Fortiv Greenview Heights in Vesu matches your criteria perfectly. Can I send the floor plans to review?"
    }, {
      sender: "buyer",
      text: "Yes, please send them"
    }, {
      sender: "ai",
      text: "📎 [2BHK Floor Plans — Tower A.pdf] Sent! Would you like to schedule a site visit this Sunday?"
    }, {
      sender: "buyer",
      text: "Yes, Sunday morning around 10:30"
    }, {
      sender: "ai",
      text: "Sunday 10:30 AM confirmed ✓ Ankit Shah will guide you. Have a great day! 🙏"
    }],
    getProfileVal: (step, field) => {
      switch (field) {
        case "budget":
          return step >= 4 ? "₹50–65 Lakhs" : "Determining...";
        case "locality":
          return step >= 0 ? "Vesu" : "Determining...";
        case "config":
          return step >= 2 ? "2BHK" : "Determining...";
        case "possession":
          return "Determining...";
        case "purpose":
          return "Self-use (unconfirmed)";
        case "project":
          return step >= 5 ? "Fortiv Greenview Heights" : "Matching...";
        case "brochure":
          return step >= 7 ? "Floor Plans Sent ✓" : "Pending";
        case "visit":
          return step >= 9 ? "Sunday 10:30 AM" : "Pending";
        case "agent":
          return step >= 9 ? "Ankit Shah" : "Unassigned";
        case "impact":
          return step >= 9 ? "+20 pts" : "0 pts";
        default:
          return "—";
      }
    }
  }
};
function ConversationsManager() {
  const {
    tab
  } = Route$5.useSearch();
  const navigate = useNavigate({
    from: Route$5.fullPath
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
  const renderPlatformBadge = (channel) => {
    const maps = {
      "WhatsApp Chatbot": "bg-emerald-50 text-emerald-600 border-emerald-200",
      "Website Widget": "bg-sky-50 text-sky-600 border-sky-200",
      "Email AI Responder": "bg-amber-50 text-amber-600 border-amber-200",
      "Voice IVR": "bg-indigo-50 text-indigo-600 border-indigo-200",
      "Telegram (Internal)": "bg-blue-50 text-blue-600 border-blue-200",
      "Telegram Bot": "bg-blue-50 text-blue-600 border-blue-200"
    };
    const cls = maps[channel] || "bg-slate-100 text-slate-600 border-slate-200";
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${cls}`, children: channel });
  };
  const agentsList = [{
    id: "overview",
    type: "Overview",
    name: "Engagement Overview",
    desc: "Helicopter view of the conversational AI engine: live activity streaming, channel breakdown, and qualification metrics.",
    stats: "84 active today",
    status: "Active"
  }, {
    id: "whatsapp",
    type: "Agent",
    name: "WhatsApp AI Chatbot",
    desc: "Autonomous AI assistant that qualifies prospects and books site visits on WhatsApp.",
    stats: "42 handled today",
    status: "Active"
  }, {
    id: "missed-call",
    type: "Agent",
    name: "Missed Call Auto-Responder",
    desc: "Instantly follows up on missed calls via WhatsApp and SMS fallback.",
    stats: "18 recovered today",
    status: "Active"
  }, {
    id: "website-widget",
    type: "Agent",
    name: "Website AI Chat Widget",
    desc: "Website chat widget equipped with RAG for accurate project Q&A and lead capture.",
    stats: "18 engaged today",
    status: "Active"
  }, {
    id: "telegram",
    type: "Agent",
    name: "Telegram Agent for Field Staff",
    desc: "Internal bot for sales agents to query CRM leads, inventory, and calculators in real-time.",
    stats: "10 queries logged",
    status: "Active"
  }, {
    id: "voice-ivr",
    type: "Agent",
    name: "Voice IVR Bot",
    desc: "Voice AI that qualifies inbound callers using natural speech in multiple languages.",
    stats: "24 calls qualified",
    status: "Active"
  }, {
    id: "email",
    type: "Agent",
    name: "Email AI Responder",
    desc: "Auto-drafts and sends customized email responses to property inquiries within 3 minutes.",
    stats: "34 emails processed",
    status: "Active"
  }];
  const [liveConversations, setLiveConversations] = reactExports.useState([{
    id: 1,
    name: "Rajesh Patel",
    channel: "WhatsApp Chatbot",
    status: "Qualified",
    msg: "Saturday works for the visit",
    mins: "4m ago",
    outcome: "Site Visit Booked ✓"
  }, {
    id: 2,
    name: "Priya Shah",
    channel: "Website Widget",
    status: "AI Responding",
    msg: "How much is the maintenance?",
    mins: "1m ago",
    outcome: "In Progress"
  }, {
    id: 3,
    name: "Amit Desai",
    channel: "Email AI Responder",
    status: "Escalated",
    msg: "I want to verify the title deed",
    mins: "8m ago",
    outcome: "Handoff Requested"
  }, {
    id: 4,
    name: "Vikram Joshi",
    channel: "Voice IVR",
    status: "Qualified",
    msg: "Interested in buying a flat",
    mins: "12m ago",
    outcome: "Callback Booked ✓"
  }, {
    id: 5,
    name: "Suresh Nair",
    channel: "Telegram (Internal)",
    status: "Operational",
    msg: "/comps 2BHK Vesu 60L",
    mins: "15m ago",
    outcome: "Query Answered ✓"
  }]);
  reactExports.useEffect(() => {
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
      setLiveConversations((prev) => [newConvo, ...prev.slice(0, 4)]);
    }, 8e3);
    return () => clearInterval(interval);
  }, [activeTab]);
  const [selectedWaThread, setSelectedWaThread] = reactExports.useState("rajesh");
  const [waMessages, setWaMessages] = reactExports.useState([]);
  const [waIndex, setWaIndex] = reactExports.useState(-1);
  const [waTyping, setWaTyping] = reactExports.useState(false);
  const [waPlaying, setWaPlaying] = reactExports.useState(false);
  const whatsappScrollRef = reactExports.useRef(null);
  const activeWaThreadData = reactExports.useMemo(() => {
    return whatsappThreads[selectedWaThread];
  }, [selectedWaThread]);
  reactExports.useEffect(() => {
    setWaMessages([]);
    setWaIndex(-1);
    setWaTyping(false);
    setWaPlaying(true);
  }, [selectedWaThread]);
  reactExports.useEffect(() => {
    if (whatsappScrollRef.current) {
      whatsappScrollRef.current.scrollTop = whatsappScrollRef.current.scrollHeight;
    }
  }, [waMessages, waTyping]);
  reactExports.useEffect(() => {
    if (!waPlaying) return;
    const script = activeWaThreadData.script;
    if (waIndex >= script.length - 1) {
      setWaPlaying(false);
      return;
    }
    const nextIdx = waIndex + 1;
    const nextMsg = script[nextIdx];
    let timer;
    if (nextMsg.sender === "ai") {
      setWaTyping(true);
      timer = setTimeout(() => {
        setWaTyping(false);
        setWaMessages((prev) => [...prev, {
          sender: "ai",
          text: nextMsg.text,
          time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          })
        }]);
        setWaIndex(nextIdx);
      }, 2e3);
    } else {
      timer = setTimeout(() => {
        setWaMessages((prev) => [...prev, {
          sender: "buyer",
          text: nextMsg.text,
          time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          })
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
  const [selectedMissedCallIdx, setSelectedMissedCallIdx] = reactExports.useState(0);
  const missedCallsData = [{
    time: "14:47",
    caller: "+91 98250 88776",
    name: "Amit Desai",
    waSent: "14:47:52",
    delay: "52s",
    response: "Replied 14:51",
    outcome: "Visit Booked",
    status: "Recovered",
    text: "Amit Desai"
  }, {
    time: "13:22",
    caller: "+91 97250 11442",
    name: "Unknown",
    waSent: "13:22:48",
    delay: "48s",
    response: "Replied 13:25",
    outcome: "Qualified",
    status: "Recovered",
    text: "Unknown Caller"
  }, {
    time: "12:05",
    caller: "+91 95250 33421",
    name: "Kavita Agarwal",
    waSent: "12:06:01",
    delay: "61s",
    response: "No reply",
    outcome: "SMS Sent",
    status: "Pending",
    text: "Kavita Agarwal"
  }, {
    time: "11:48",
    caller: "+91 99250 88990",
    name: "Unknown",
    waSent: "11:48:55",
    delay: "55s",
    response: "No reply",
    outcome: "No response",
    status: "Callback Required",
    text: "Unknown Caller"
  }, {
    time: "10:30",
    caller: "+91 98980 99887",
    name: "Suresh Nair",
    waSent: "10:30:44",
    delay: "44s",
    response: "Replied 10:33",
    outcome: "Brochure Sent",
    status: "Recovered",
    text: "Suresh Nair"
  }, {
    time: "09:55",
    caller: "+91 97240 55667",
    name: "Pooja Sharma",
    waSent: "09:55:58",
    delay: "58s",
    response: "Replied 09:59",
    outcome: "Qualified",
    status: "Recovered",
    text: "Pooja Sharma"
  }, {
    time: "09:20",
    caller: "+91 99099 22110",
    name: "Unknown",
    waSent: "09:21:07",
    delay: "67s",
    response: "No reply",
    outcome: "No response",
    status: "Callback Required",
    text: "Unknown Caller"
  }, {
    time: "08:44",
    caller: "+91 98250 44331",
    name: "Mahesh Khanna",
    waSent: "08:44:51",
    delay: "51s",
    response: "Replied 08:48",
    outcome: "Visit Booked",
    status: "Recovered",
    text: "Mahesh Khanna"
  }, {
    time: "08:15",
    caller: "+91 97250 81122",
    name: "Unknown",
    waSent: "08:15:49",
    delay: "49s",
    response: "No reply",
    outcome: "SMS Sent",
    status: "Pending",
    text: "Unknown Caller"
  }, {
    time: "07:58",
    caller: "+91 99250 11223",
    name: "Ritu Bhandari",
    waSent: "07:58:53",
    delay: "53s",
    response: "Replied 08:02",
    outcome: "Qualified",
    status: "Recovered",
    text: "Ritu Bhandari"
  }];
  const callbackQueueData = [{
    source: "Missed Call",
    phone: "+91 99250 XX990",
    callTime: "11:48 AM",
    waSentTime: "11:48:55 AM",
    waResponse: "No Response",
    smsSent: "Yes",
    smsResponse: "No Response",
    crmStatus: "Callback Required",
    priority: "High",
    agent: "Ankit Shah",
    notes: "Missed call — no response to WA or SMS"
  }, {
    source: "Missed Call",
    phone: "+91 99099 XX110",
    callTime: "09:20 AM",
    waSentTime: "09:21:07 AM",
    waResponse: "No Response",
    smsSent: "Yes",
    smsResponse: "No Response",
    crmStatus: "Callback Required",
    priority: "High",
    agent: "Meera Patel",
    notes: "Missed call — no response to WA or SMS"
  }, {
    source: "Missed Call",
    phone: "+91 97250 XX122",
    callTime: "08:15 AM",
    waSentTime: "08:15:49 AM",
    waResponse: "No Response",
    smsSent: "Yes",
    smsResponse: "No Response",
    crmStatus: "Callback Required",
    priority: "High",
    agent: "Kiran Desai",
    notes: "Missed call — no response to WA or SMS"
  }];
  const [selectedFlow, setSelectedFlow] = reactExports.useState("A");
  const [widgetMessages, setWidgetMessages] = reactExports.useState([]);
  const [widgetIndex, setWidgetIndex] = reactExports.useState(-1);
  const [widgetTyping, setWidgetTyping] = reactExports.useState(false);
  const [widgetPlaying, setWidgetPlaying] = reactExports.useState(false);
  const widgetScrollRef = reactExports.useRef(null);
  const widgetFlows = {
    A: [{
      from: "user",
      text: "Hi, I am looking for properties in Vesu, Surat."
    }, {
      from: "ai",
      text: "Welcome! Fortiv Greenview Heights in Vesu is our premier project offering luxury 2BHK and 3BHK flats. What configuration are you looking for?"
    }, {
      from: "user",
      text: "A 3BHK flat with good amenities."
    }, {
      from: "ai",
      text: "Excellent! Our 3BHK units are designed with spacious layouts, modular kitchens, and premium fittings. Are there any specific amenities you are looking for?"
    }, {
      from: "user",
      text: "Does Greenview Heights have a swimming pool?"
    }, {
      from: "ai",
      text: "Yes! Fortiv Greenview Heights features a rooftop swimming pool, fully equipped gym, children's play area, clubhouse, and 24/7 security. Would you like to see the full amenities list or floor plans?"
    }],
    B: [{
      from: "user",
      text: "Hello, what projects do you have in Gujarat?"
    }, {
      from: "ai",
      text: "Hello! We have Fortiv Greenview Heights in Vesu, Surat and Fortiv Skyline Residences in Gotri, Vadodara. Are you interested in Surat or Vadodara?"
    }, {
      from: "user",
      text: "I am interested in both. What is the difference between them?"
    }, {
      from: "ai",
      text: "Here is a comparison:\n\n• Fortiv Greenview Heights: Vesu, Surat · 2BHK/3BHK · Prices starting ₹48L · Possession Dec 2026.\n• Fortiv Skyline Residences: Gotri, Vadodara · 3BHK/4BHK · Prices starting ₹90L · Under Construction.\n\nWhich location suits your needs better?"
    }],
    C: [{
      from: "user",
      text: "Hi, what is the price of a 2BHK in Vesu?"
    }, {
      from: "ai",
      text: "In Fortiv Greenview Heights, Vesu, our premium 2BHK apartments start at ₹48L, with mid-floor layouts averaging around ₹58L depending on unit specifications. Does that fit your budget?"
    }, {
      from: "user",
      text: "₹58 lakhs seems expensive"
    }, {
      from: "ai",
      text: "I understand! Let me show you what the EMI would look like at current SBI home loan rates of 8.75%:\n\n• Estimated Price: ₹58L\n• Down Payment (10%): ₹5.8L\n• Loan Amount (90%): ₹52.2L\n• Tenure: 20 Years\n• Monthly EMI: ₹45,847\n\nThis is comparable to renting a premium 2BHK flat in Vesu. Does this help?"
    }],
    D: [{
      from: "user",
      text: "Can I download the floor plan for Greenview Heights?"
    }, {
      from: "ai",
      text: "I can share the complete brochure and high-resolution floor plans directly with you. To send them, may I please know your name?"
    }, {
      from: "user",
      text: "Rajesh Patel"
    }, {
      from: "ai",
      text: "Thanks Rajesh! And your phone number?"
    }, {
      from: "user",
      text: "+91 98765 43210"
    }, {
      from: "ai",
      text: "Perfect! I'm sending it to your WhatsApp right now. You can also click the button below to continue our chat there.\n\n[Continue on WhatsApp]"
    }]
  };
  reactExports.useEffect(() => {
    setWidgetMessages([]);
    setWidgetIndex(-1);
    setWidgetTyping(false);
    setWidgetPlaying(true);
  }, [selectedFlow]);
  reactExports.useEffect(() => {
    if (widgetScrollRef.current) {
      widgetScrollRef.current.scrollTop = widgetScrollRef.current.scrollHeight;
    }
  }, [widgetMessages, widgetTyping]);
  reactExports.useEffect(() => {
    if (!widgetPlaying) return;
    const script = widgetFlows[selectedFlow];
    if (widgetIndex >= script.length - 1) {
      setWidgetPlaying(false);
      return;
    }
    const nextIdx = widgetIndex + 1;
    const nextMsg = script[nextIdx];
    let timer;
    if (nextMsg.from === "ai") {
      setWidgetTyping(true);
      timer = setTimeout(() => {
        setWidgetTyping(false);
        setWidgetMessages((prev) => [...prev, {
          from: "ai",
          text: nextMsg.text
        }]);
        setWidgetIndex(nextIdx);
      }, 1500);
    } else {
      timer = setTimeout(() => {
        setWidgetMessages((prev) => [...prev, {
          from: "user",
          text: nextMsg.text
        }]);
        setWidgetIndex(nextIdx);
      }, 1e3);
    }
    return () => clearTimeout(timer);
  }, [widgetPlaying, widgetIndex, selectedFlow]);
  const ragQueryLog = [{
    q: "Is Greenview Heights RERA registered?",
    src: "RERA Data",
    confidence: "98%"
  }, {
    q: "What is the price of 3BHK?",
    src: "Pricing Sheet",
    confidence: "96%"
  }, {
    q: "How far is it from Surat railway station?",
    src: "Location FAQ",
    confidence: "91%"
  }, {
    q: "Is car parking included?",
    src: "Amenities List",
    confidence: "99%"
  }, {
    q: "What is the maintenance charge?",
    src: "FAQ Database",
    confidence: "88%"
  }, {
    q: "Can I get a home loan?",
    src: "FAQ Database",
    confidence: "94%"
  }, {
    q: "When is possession for Skyline?",
    src: "Project Data",
    confidence: "97%"
  }, {
    q: "Is there a school nearby?",
    src: "Location FAQ",
    confidence: "85%"
  }, {
    q: "What is the booking amount?",
    src: "Payment Plan",
    confidence: "93%"
  }, {
    q: "Do you have any 1BHK?",
    src: "Inventory Data",
    confidence: "96%"
  }];
  const leadCaptureLog = [{
    name: "Rajesh Patel",
    phone: "98765 43210",
    interest: "2BHK, Vesu",
    source: "Website Widget",
    status: "New"
  }, {
    name: "Priya Shah",
    phone: "99xxxxxxxx",
    interest: "3BHK, Adajan",
    source: "Website Widget",
    status: "New"
  }, {
    name: "Amit Desai",
    phone: "98xxxxxxxx",
    interest: "Commercial, Althan",
    source: "Website Widget",
    status: "Qualified"
  }, {
    name: "Sunita Mehta",
    phone: "97xxxxxxxx",
    interest: "2BHK, Vesu",
    source: "Website Widget",
    status: "New"
  }, {
    name: "Vikram Joshi",
    phone: "96xxxxxxxx",
    interest: "Plot, Althan",
    source: "Website Widget",
    status: "New"
  }, {
    name: "Kavita Agarwal",
    phone: "95xxxxxxxx",
    interest: "2BHK, Katargam",
    source: "Website Widget",
    status: "New"
  }];
  const [tgMessages, setTgMessages] = reactExports.useState([]);
  const [tgIndex, setTgIndex] = reactExports.useState(-1);
  const [tgPlaying, setTgPlaying] = reactExports.useState(false);
  const [tgTyping, setTgTyping] = reactExports.useState(false);
  const telegramScrollRef = reactExports.useRef(null);
  const telegramHistory = reactExports.useMemo(() => [{
    from: "user",
    text: "/hot",
    time: "14:15"
  }, {
    from: "bot",
    text: `🔥 HOT LEADS LIST
━━━━━━━━━━━━━━━━━━━━━━
1. Deepak Trivedi [Score: 88] · 3BHK Vesu · Referral
2. Rajesh Patel   [Score: 82] · 2BHK Vesu · 99acres
3. Priya Shah     [Score: 79] · 3BHK Adajan · Facebook
4. Suresh Nair    [Score: 88] · Commercial Althan
━━━━━━━━━━━━━━━━━━━━━━
💡 Use /lead [name] to view full profiles.`,
    time: "14:15"
  }, {
    from: "user",
    text: "/inventory Greenview Heights 2BHK",
    time: "14:20"
  }, {
    from: "bot",
    text: `🏢 AVAILABLE 2BHK INVENTORY
━━━━━━━━━━━━━━━━━━━━━━
Project: Fortiv Greenview Heights
Configuration: 2BHK Flats
━━━━━━━━━━━━━━━━━━━━━━
• Tower A: 402, 605, 802, 1104
• Tower B: 201, 503, 902, 1204
━━━━━━━━━━━━━━━━━━━━━━
Total Available: 8 Units`,
    time: "14:21"
  }], []);
  const telegramAutoplayScript = reactExports.useMemo(() => [{
    from: "user",
    text: "/lead Rajesh Patel",
    delay: 1e3
  }, {
    from: "bot",
    text: `👤 LEAD PROFILE — Rajesh Patel
━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 +91 98765 43210 (WhatsApp ✓)
📧 rajesh.patel@gmail.com
🏢 VP Sales · Adani Group
💰 Income: ₹18–25L/yr
━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 AI Score: 82 🔴 HOT
📊 Conversion: 74% likely
🏠 Interest: 2BHK · Vesu · ₹48–65L
🏗️ Matched: Fortiv Greenview Heights
━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 LAST ACTIVITY:
  Opened brochure 12 min ago
  3 portal inquiries this week
━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ NEXT ACTION: Call within 15 min
📅 Best time: 11AM–1PM
[📞 Call] [📅 Book Visit] [📝 Note]`,
    delay: 1500
  }, {
    from: "user",
    text: "/book Amit Desai Sunday 10am me",
    delay: 2e3
  }, {
    from: "bot",
    text: `✅ SITE VISIT BOOKED
━━━━━━━━━━━━━━━━━━━━━━
Lead: Amit Desai
Date: Sunday (18 Jan 2025)
Time: 10:00 AM
Agent: Ankit Shah (You)
━━━━━━━━━━━━━━━━━━━━━━
Notification sent to buyer via WhatsApp.
Calendar entry created.`,
    delay: 1500
  }], []);
  reactExports.useEffect(() => {
    if (activeTab !== "telegram") {
      tgPlaying && setTgPlaying(false);
      return;
    }
    setTgMessages(telegramHistory);
    setTgIndex(-1);
    setTgPlaying(true);
    setTgTyping(false);
  }, [activeTab, telegramHistory]);
  reactExports.useEffect(() => {
    if (telegramScrollRef.current) {
      telegramScrollRef.current.scrollTop = telegramScrollRef.current.scrollHeight;
    }
  }, [tgMessages, tgTyping]);
  reactExports.useEffect(() => {
    if (!tgPlaying) return;
    const script = telegramAutoplayScript;
    if (tgIndex >= script.length - 1) {
      setTgPlaying(false);
      return;
    }
    const nextIdx = tgIndex + 1;
    const nextMsg = script[nextIdx];
    let timer;
    if (nextMsg.from === "bot") {
      setTgTyping(true);
      timer = setTimeout(() => {
        setTgTyping(false);
        setTgMessages((prev) => [...prev, {
          from: "bot",
          text: nextMsg.text,
          time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          })
        }]);
        setTgIndex(nextIdx);
      }, nextMsg.delay);
    } else {
      timer = setTimeout(() => {
        setTgMessages((prev) => [...prev, {
          from: "user",
          text: nextMsg.text,
          time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          })
        }]);
        setTgIndex(nextIdx);
      }, nextMsg.delay);
    }
    return () => clearTimeout(timer);
  }, [tgPlaying, tgIndex, activeTab, telegramAutoplayScript]);
  const runTelegramCommand = (cmd, response) => {
    if (tgTyping || tgPlaying) return;
    setTgMessages((prev) => [...prev, {
      from: "user",
      text: cmd,
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    }]);
    setTgTyping(true);
    setTimeout(() => {
      setTgTyping(false);
      setTgMessages((prev) => [...prev, {
        from: "bot",
        text: response,
        time: (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      }]);
    }, 1200);
  };
  const telegramCommands = {
    comps: {
      cmd: "/comps 2BHK Vesu 60L",
      reply: `📊 VESU 2BHK COMPARABLES (≤ 60L)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Fortiv Greenview Heights
   ₹48L - ₹54L · G+14 · Under Construction

2. Rajhans Green Plaza
   ₹52L - ₹58L · Resale · Vesu Crossing

3. Shree Heights
   ₹45L - ₹50L · Ready · Near VIP Rd
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 Best Recommendation: Fortiv Greenview Heights Tower B (highest capital appreciation potential)`
    },
    emi: {
      cmd: "/emi 58L 20",
      reply: `🏦 EMI CALCULATOR — ₹58 Lakhs
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Loan Amount: ₹52.2L (90% of ₹58L)
Down Payment: ₹5.8L (10%)
Tenure: 20 years
Rate: 8.75% p.a. (SBI current)
━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Monthly EMI: ₹45,847
Total Interest: ₹57.8L
Total Payment: ₹1,10.0L
━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 Also at 8.5%: ₹45,134/month`
    },
    pipeline: {
      cmd: "/pipeline",
      reply: `📊 TODAY'S PIPELINE — 15 Jan 2025
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴 Hot Leads: 12 · 🟡 Warm: 23 · 🔵 Cold: 12
📅 Site Visits Today: 4
✅ Bookings This Month: 3
💰 Pipeline Value: ₹4.2 Cr
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOP PRIORITY:
1. Deepak Trivedi [Score: 88] — Call now
2. Rajesh Patel [Score: 82] — Call now
3. Priya Shah [Score: 79] — Visit Sat`
    },
    hot: {
      cmd: "/hot",
      reply: `🔥 HOT LEADS LIST
━━━━━━━━━━━━━━━━━━━━━━
1. Deepak Trivedi [Score: 88] · 3BHK Vesu · Referral
2. Rajesh Patel   [Score: 82] · 2BHK Vesu · 99acres
3. Priya Shah     [Score: 79] · 3BHK Adajan · Facebook
4. Suresh Nair    [Score: 88] · Commercial Althan
━━━━━━━━━━━━━━━━━━━━━━
💡 Use /lead [name] to view full profiles.`
    },
    rera: {
      cmd: "/rera Greenview Heights",
      reply: `📋 RERA SPECIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━
Project: Fortiv Greenview Heights
Location: Vesu, Surat
RERA Status: Approved & Registered
RERA Number: GJ/RERA/PROJ/XXXXX
Developer: Fortiv Solutions
━━━━━━━━━━━━━━━━━━━━━━
Validity: Valid till Dec 2027`
    },
    inventory: {
      cmd: "/inventory Greenview Heights 2BHK",
      reply: `🏢 AVAILABLE 2BHK INVENTORY
━━━━━━━━━━━━━━━━━━━━━━
Project: Fortiv Greenview Heights
Configuration: 2BHK Flats
━━━━━━━━━━━━━━━━━━━━━━
• Tower A: 402, 605, 802, 1104
• Tower B: 201, 503, 902, 1204
━━━━━━━━━━━━━━━━━━━━━━
Total Available: 8 Units`
    },
    book: {
      cmd: "/book Amit Desai Sunday 10am me",
      reply: `✅ SITE VISIT BOOKED
━━━━━━━━━━━━━━━━━━━━━━
Lead: Amit Desai
Date: Sunday (18 Jan 2025)
Time: 10:00 AM
Agent: Ankit Shah (You)
━━━━━━━━━━━━━━━━━━━━━━
Notification sent to buyer via WhatsApp.
Calendar entry created.`
    }
  };
  const telegramActivityLog = [{
    agent: "Priya Rana",
    cmd: "/lead Rajesh Patel",
    time: "14:32",
    result: "Profile returned"
  }, {
    agent: "Ankit Shah",
    cmd: "/comps 2BHK Vesu 60L",
    time: "14:28",
    result: "5 comps returned"
  }, {
    agent: "Kiran Desai",
    cmd: "/pipeline",
    time: "14:15",
    result: "Summary sent"
  }, {
    agent: "Meera Patel",
    cmd: "/book Pooja Sharma Sunday 10am",
    time: "13:55",
    result: "✓ Booked"
  }, {
    agent: "Priya Rana",
    cmd: "/hot",
    time: "13:40",
    result: "12 hot leads listed"
  }, {
    agent: "Ankit Shah",
    cmd: "/floorplan Tower A 802",
    time: "13:22",
    result: "PDF sent"
  }, {
    agent: "Rahul Modi",
    cmd: "/agent Priya Rana",
    time: "13:10",
    result: "Schedule returned"
  }, {
    agent: "Meera Patel",
    cmd: "/note Amit Desai: ground floor only",
    time: "12:58",
    result: "✓ Logged to CRM"
  }, {
    agent: "Kiran Desai",
    cmd: "/inventory Greenview Heights 2BHK",
    time: "12:44",
    result: "8 units available"
  }, {
    agent: "Priya Rana",
    cmd: "/emi 58L 20",
    time: "12:31",
    result: "EMI ₹45,847"
  }];
  const [selectedIvrFlow, setSelectedIvrFlow] = reactExports.useState("inbound");
  const [ivrTranscriptMessages, setIvrTranscriptMessages] = reactExports.useState([]);
  const [ivrIndex, setIvrIndex] = reactExports.useState(-1);
  const [ivrPlaying, setIvrPlaying] = reactExports.useState(false);
  const ivrInboundScript = [{
    speaker: "ai",
    text: "🎙️ [AI IVR]: Welcome to Fortiv Solutions, India's premier real estate developer in Surat and Vadodara. I'm your AI assistant. How can I help you today?"
  }, {
    speaker: "caller",
    text: "🗣️ [Caller]: I'm looking for a 2BHK flat in Surat"
  }, {
    speaker: "ai",
    text: "🎙️ [AI IVR]: Great! We have some wonderful options in Surat. What's your approximate budget range?"
  }, {
    speaker: "caller",
    text: "🗣️ [Caller]: Around 50 to 60 lakhs"
  }, {
    speaker: "ai",
    text: "🎙️ [AI IVR]: Perfect. Which area in Surat interests you — Vesu, Adajan, or Pal?"
  }, {
    speaker: "caller",
    text: "🗣️ [Caller]: Vesu"
  }, {
    speaker: "ai",
    text: "🎙️ [AI IVR]: Excellent choice! I'd like to connect you with our agent Priya Rana who specialises in Vesu properties. Priya is available now. Shall I transfer you? I'll brief her on your requirements first."
  }, {
    speaker: "caller",
    text: "🗣️ [Caller]: Yes, please connect me"
  }, {
    speaker: "ai",
    text: "🎙️ [AI IVR]: Transferring now. Connecting you to Priya Rana... [Call Routed]"
  }];
  const ivrAfterHoursScript = [{
    speaker: "ai",
    text: "🎙️ [AI IVR]: Welcome to Fortiv Solutions. Our office is currently closed (we're open Mon–Sat, 10AM–7PM). I'm the after-hours AI assistant and I'd be happy to note your requirements and arrange a callback."
  }, {
    speaker: "caller",
    text: "🗣️ [Caller]: I'm interested in buying a flat"
  }, {
    speaker: "ai",
    text: "🎙️ [AI IVR]: I'd love to help! Could you share: your preferred configuration, locality, and budget? Our team will call you tomorrow with the best options."
  }, {
    speaker: "caller",
    text: "🗣️ [Caller]: Looking for a 3BHK in Adajan, budget 75 lakhs"
  }, {
    speaker: "ai",
    text: "🎙️ [AI IVR]: Perfect! I've noted everything. Our agent will call you tomorrow at 10:00 AM. Have a good night! 🙏"
  }];
  reactExports.useEffect(() => {
    setIvrTranscriptMessages([]);
    setIvrIndex(-1);
    setIvrPlaying(true);
  }, [selectedIvrFlow]);
  reactExports.useEffect(() => {
    if (!ivrPlaying) return;
    const script = selectedIvrFlow === "inbound" ? ivrInboundScript : ivrAfterHoursScript;
    if (ivrIndex >= script.length - 1) {
      setIvrPlaying(false);
      return;
    }
    const timer = setTimeout(() => {
      const nextIdx = ivrIndex + 1;
      const nextMsg = script[nextIdx];
      setIvrTranscriptMessages((prev) => [...prev, {
        speaker: nextMsg.speaker,
        text: nextMsg.text
      }]);
      setIvrIndex(nextIdx);
    }, 1800);
    return () => clearTimeout(timer);
  }, [ivrPlaying, ivrIndex, selectedIvrFlow]);
  const ivrCallsData = [{
    time: "14:32",
    caller: "+91 98765 XXXXX",
    name: "Rajesh Patel",
    language: "English",
    duration: "3m 42s",
    aiDuration: "2m 15s",
    qualified: "✓ Yes",
    outcome: "Transferred to Priya Rana"
  }, {
    time: "13:55",
    caller: "+91 98250 XXXXX",
    name: "Unknown",
    language: "Gujarati",
    duration: "2m 18s",
    aiDuration: "2m 18s",
    qualified: "✓ Yes",
    outcome: "Callback Booked — 16 Jan 10am"
  }, {
    time: "13:22",
    caller: "+91 97250 XXXXX",
    name: "Unknown",
    language: "English",
    duration: "1m 05s",
    aiDuration: "1m 05s",
    qualified: "✗ No",
    outcome: "Transferred (unclear intent)"
  }, {
    time: "12:48",
    caller: "+91 99250 XXXXX",
    name: "Unknown",
    language: "Hindi",
    duration: "4m 10s",
    aiDuration: "3m 05s",
    qualified: "✓ Yes",
    outcome: "Transferred to Ankit Shah"
  }, {
    time: "12:15",
    caller: "+91 98980 XXXXX",
    name: "Unknown",
    language: "Gujarati",
    duration: "3m 28s",
    aiDuration: "2m 45s",
    qualified: "✓ Yes",
    outcome: "Callback Booked — 16 Jan 11am"
  }, {
    time: "11:44",
    caller: "+91 97240 XXXXX",
    name: "Unknown",
    language: "English",
    duration: "2m 55s",
    aiDuration: "2m 10s",
    qualified: "✓ Yes",
    outcome: "Transferred to Kiran Desai"
  }, {
    time: "11:20",
    caller: "+91 99099 XXXXX",
    name: "Unknown",
    language: "Hindi",
    duration: "5m 02s",
    aiDuration: "2m 20s",
    qualified: "✓ Yes",
    outcome: "Transferred to Rahul Modi (complaint)"
  }, {
    time: "10:48",
    caller: "+91 98250 XXXXX",
    name: "Mahesh Khanna",
    language: "Gujarati",
    duration: "2m 40s",
    aiDuration: "2m 40s",
    qualified: "✓ Yes",
    outcome: "Callback Booked — 16 Jan 10am"
  }, {
    time: "10:15",
    caller: "+91 98250 XXXXX",
    name: "Unknown",
    language: "English",
    duration: "1m 28s",
    aiDuration: "1m 28s",
    qualified: "✗ No",
    outcome: "Voicemail fallback"
  }, {
    time: "09:50",
    caller: "+91 99250 XXXXX",
    name: "Unknown",
    language: "English",
    duration: "3m 15s",
    aiDuration: "2m 30s",
    qualified: "✓ Yes",
    outcome: "Transferred to Meera Patel"
  }];
  const [selectedEmailIdx, setSelectedEmailIdx] = reactExports.useState(0);
  const emailsData = [{
    from: "Rajesh Patel",
    email: "rajesh.patel@gmail.com",
    subject: "2BHK Vesu inquiry",
    received: "14:22",
    category: "New Inquiry",
    status: "Auto-responded",
    timeTaken: "2m 48s",
    original: "Hi, I saw your project Greenview Heights in Vesu. Can you please send the brochure and price details for a 2BHK flat? Thank you, Rajesh.",
    reply: `Subject: Re: Your Property Inquiry — Fortiv Solutions

Hi Rajesh,

Thank you for your interest in Fortiv Solutions! We're thrilled to help you find your perfect home in Surat.

Based on your inquiry, I'd like to recommend:

🏠 FORTIV GREENVIEW HEIGHTS — Vesu, Surat
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Configuration: 2BHK & 3BHK
Price Range:   ₹45L – ₹85L
Status:        RERA Registered · Under Construction
Possession:    December 2026

📎 Attached: Fortiv_Greenview_Heights_Brochure.pdf
📎 Attached: Fortiv_Greenview_Heights_PriceList.pdf

👉 Next Step: Schedule a Site Visit. You're welcome to visit our site any day.
Book your slot here: fortivsolutions.in/visit-vesu

Warm regards,
Fortiv Solutions Team`
  }, {
    from: "99acres Notification",
    email: "leads@99acres.com",
    subject: "New lead: Priya Shah",
    received: "14:10",
    category: "Portal Lead",
    status: "Parsed + CRM + Reply",
    timeTaken: "1m 52s",
    original: "Inquiry on Vesu 3BHK Listing from Priya Shah. Phone: +91 98250 22118. Budget: 80L.",
    reply: `Subject: Re: Your Inquiry on 99acres — Fortiv Solutions

Hi Priya,

We received your inquiry regarding our 3BHK listings in Vesu, Surat. Our AI engine has logged your interest.

We would love to share matching floor plans and pricing lists for Fortiv Greenview Heights. Please reply with a convenient time for a call or continue on WhatsApp: wa.me/919825022118.

Best,
Fortiv Sales Team`
  }, {
    from: "Sunita Mehta",
    email: "sunita.mehta@gmail.com",
    subject: "Request: Greenview brochure",
    received: "13:58",
    category: "Doc Request",
    status: "Brochure sent",
    timeTaken: "1m 44s",
    original: "Dear Fortiv, please send the Greenview Heights project brochure to my email.",
    reply: `Subject: Project Brochure: Fortiv Greenview Heights

Hi Sunita,

As requested, we have attached the detailed project brochure for Fortiv Greenview Heights in Vesu, Surat.

📎 Attached: Fortiv_Greenview_Heights_Brochure.pdf

If you have questions about current availability, configurations, or home loan approvals, simply reply here.

Regards,
Fortiv Solutions Team`
  }, {
    from: "Amit Desai",
    email: "amit.desai@yahoo.in",
    subject: "Re: Our conversation last week",
    received: "13:45",
    category: "Follow-up",
    status: "Context retrieved + replied",
    timeTaken: "4m 12s",
    original: "Hello, I spoke with Ankit last week regarding the payment schedule for Greenview. Is the launch offer still active?",
    reply: `Subject: Re: Payment Schedule & Launch Offers — Fortiv Greenview Heights

Hi Amit,

Good to hear from you again. Yes! The 5% launch discount is active until June 10, 2026.

I have attached the customized payment schedule plan we discussed. Ankit Shah has been notified of your reply and will check in tomorrow morning.

Warmly,
Fortiv Solutions Team`
  }, {
    from: "MagicBricks Notification",
    email: "leads@magicbricks.com",
    subject: "New property inquiry",
    received: "13:30",
    category: "Portal Lead",
    status: "Parsed + CRM + Reply",
    timeTaken: "2m 05s",
    original: "New property inquiry: 2BHK flat in Vesu, budget 52L. Caller: +91 97250 81122.",
    reply: `Subject: Re: MagicBricks Property Inquiry — Fortiv Solutions

Hi Partner,

We have successfully received your inquiry about our 2BHK options in Vesu from MagicBricks.

We have created a CRM record for you. Let's arrange a callback or share brochures directly. Please let us know when is a good time.

Warmly,
Fortiv Solutions Desk`
  }, {
    from: "Vikram Joshi",
    email: "vikram.joshi@tata.com",
    subject: "Commercial unit enquiry",
    received: "13:15",
    category: "New Inquiry",
    status: "Auto-responded",
    timeTaken: "3m 01s",
    original: "Hello, looking for a commercial office workspace in Althan Surat, around 1.5 Cr budget.",
    reply: `Subject: Re: Commercial Space Inquiry — Fortiv Business Park

Hi Vikram,

Thank you for reaching out. We have prime corporate options matching your budget at Fortiv Business Park, Althan, Surat.

📎 Attached: Fortiv_Business_Park_Layout.pdf
📎 Attached: Commercial_Inventory_Q1.pdf

Let's connect you with our Commercial Team Lead to discuss payment options.

Regards,
Fortiv Solutions Team`
  }, {
    from: "invest123@email.com",
    email: "invest123@email.com",
    subject: "Bulk investment — 5 units",
    received: "12:55",
    category: "Investor Inquiry",
    status: "Flagged · Route to Mgr",
    timeTaken: "4m 45s",
    original: "We are looking to acquire 5 commercial units in Althan. Do you offer bulk discounts or payment plans over 36 months?",
    reply: `Subject: Re: Bulk Commercial Investment Inquiry — Fortiv Business Park

Dear Investor,

Your inquiry has been categorized as a high-priority investment lead. Our Sales Manager, Rahul Modi, has been briefed and will contact you directly at +91 99250 XXXXX within 15 minutes with our corporate portfolio pricing.

Sincerely,
Fortiv Corporate Desk`
  }, {
    from: "Kavita Agarwal",
    email: "kavita.agarwal@gmail.com",
    subject: "Complaint — no callback received",
    received: "12:30",
    category: "Complaint",
    status: "Escalated to Priya Rana",
    timeTaken: "8m 30s",
    original: "I was promised a callback from your sales team yesterday at 4 PM, but no one called me. Highly unprofessional.",
    reply: `Subject: Re: Apology & Urgent Callback Request — Fortiv Solutions

Dear Kavita,

We sincerely apologize for the delay. This has been escalated directly to our Senior Agent, Priya Rana.

She is currently reviewing your file and will call you on your registered number (+91 95250 33421) within 10 minutes to resolve this personally.

Warm regards,
Customer Relations, Fortiv Solutions`
  }, {
    from: "Newsletter Bot",
    email: "newsletter@spam.com",
    subject: "Special offer…",
    received: "12:15",
    category: "Spam",
    status: "Auto-archived",
    timeTaken: "—",
    original: "Get 50% off on all business email marketing packages today. Buy now!",
    reply: `[System Action: Auto-archived as Spam]`
  }, {
    from: "Pooja Sharma",
    email: "pooja.sharma@outlook.com",
    subject: "Is 1BHK available?",
    received: "11:58",
    category: "New Inquiry",
    status: "Auto-responded",
    timeTaken: "2m 22s",
    original: "Hi, I am looking for a 1BHK in Adajan, budget 28L. Is it available?",
    reply: `Subject: Re: Property Availability — Fortiv Solutions

Hi Pooja,

Thank you for writing. We currently specialize in 2BHK, 3BHK and 4BHK premium inventory at Fortiv Greenview Heights and Fortiv Skyline Residences.

However, we have mapped a partner project in Adajan which has ready 1BHK options. Let us know if we can share their details with you.

Best regards,
Fortiv Solutions Team`
  }];
  const emailHourlyStats = [{
    hour: "09:00",
    count: 3,
    time: "2m 55s",
    height: 60
  }, {
    hour: "10:00",
    count: 5,
    time: "2m 30s",
    height: 50
  }, {
    hour: "11:00",
    count: 6,
    time: "2m 48s",
    height: 55
  }, {
    hour: "12:00",
    count: 7,
    time: "3m 10s",
    height: 70
  }, {
    hour: "13:00",
    count: 8,
    time: "2m 40s",
    height: 52
  }, {
    hour: "14:00",
    count: 5,
    time: "2m 52s",
    height: 58
  }];
  const renderMenuSelection = () => {
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 leading-relaxed truncate-2-lines font-medium", children: agent.desc })
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
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Conversations Today", value: "84", desc: "Across all channels", color: "text-[#0E86E9]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Avg Response Time", value: "12s", desc: "Mean first response", color: "text-emerald-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Site Visits Booked", value: "7", desc: "AI booked today", color: "text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Leads Qualified", value: "31", desc: "Passed AI profiling", color: "text-emerald-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatBox, { label: "Escalated to Agent", value: "9", desc: "Handed off to human", color: "text-amber-500" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-4 flex flex-col h-[400px] border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
                " Live Conversation Feed"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "AI Operations Tracker" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { tone: "cold", children: "Streaming 24/7" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-none", children: liveConversations.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-2.5 rounded-xl border border-border bg-background hover:bg-secondary/40 transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-secondary border border-border flex items-center justify-center font-bold text-xs shrink-0 text-foreground", children: c.name.split(" ").map((n) => n[0]).join("") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-xs text-foreground flex items-center gap-1.5", children: c.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground truncate max-w-xs mt-0.5 font-medium", children: [
                  '"',
                  c.msg,
                  '"'
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 shrink-0", children: [
              renderPlatformBadge(c.channel),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-emerald-600 font-display", children: c.outcome }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground font-mono mt-0.5", children: c.mins })
              ] })
            ] })
          ] }, c.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 flex flex-col h-[400px] border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Channel Split" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Channel Engagement Share" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center items-center h-44 relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "140", height: "140", viewBox: "0 0 160 160", className: "transform -rotate-90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "80", r: "60", fill: "transparent", stroke: "#25D366", strokeWidth: "20", strokeDasharray: "158.3 218.7", strokeDashoffset: "0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "80", r: "60", fill: "transparent", stroke: "#2E86AB", strokeWidth: "20", strokeDasharray: "79.1 297.9", strokeDashoffset: "-158.3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "80", r: "60", fill: "transparent", stroke: "#1A3C5E", strokeWidth: "20", strokeDasharray: "67.8 309.2", strokeDashoffset: "-237.4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "80", r: "60", fill: "transparent", stroke: "#E8A838", strokeWidth: "20", strokeDasharray: "45.2 331.8", strokeDashoffset: "-305.2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "80", r: "60", fill: "transparent", stroke: "#29B6F6", strokeWidth: "20", strokeDasharray: "26.3 350.7", strokeDashoffset: "-350.4" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-center items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black font-display text-foreground", children: "84" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-semibold", children: "Chats Today" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-4 gap-y-1.5 border-t border-border/40 pt-3", children: [{
              channel: "WhatsApp Chatbot",
              val: "42%",
              color: "bg-[#25D366]"
            }, {
              channel: "Website Widget",
              val: "21%",
              color: "bg-[#2E86AB]"
            }, {
              channel: "Voice IVR",
              val: "18%",
              color: "bg-[#1A3C5E]"
            }, {
              channel: "Email AI Responder",
              val: "12%",
              color: "bg-[#E8A838]"
            }, {
              channel: "Telegram Bot",
              val: "7%",
              color: "bg-[#29B6F6]"
            }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-muted-foreground truncate", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2.5 w-2.5 rounded-sm shrink-0 ${c.color}` }),
                c.channel
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground font-mono shrink-0", children: c.val })
            ] }, c.channel)) })
          ] })
        ] })
      ] })
    ] });
  };
  const renderWhatsAppAgent = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 md:col-span-4 lg:col-span-3 border border-border p-0 overflow-hidden flex flex-col h-[540px] bg-[#f0f2f5] dark:bg-[#111b21] shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white dark:bg-[#202c33] border-b border-border flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground", children: "Fortiv AI WhatsApp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] bg-emerald-500 text-white px-2 py-0.5 rounded font-bold uppercase", children: "Active" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto divide-y divide-border/20 bg-white", children: Object.keys(whatsappThreads).map((threadKey) => {
            const thread = whatsappThreads[threadKey];
            const active = selectedWaThread === threadKey;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => {
              setSelectedWaThread(threadKey);
            }, className: `p-3 cursor-pointer transition-colors flex gap-2.5 items-center ${active ? "bg-slate-100" : "hover:bg-slate-50"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full bg-[#25d366]/10 text-[#25d366] border border-[#25d366]/20 font-bold text-xs flex items-center justify-center shrink-0", children: thread.avatar }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground truncate", children: thread.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-slate-400 font-mono", children: "online" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-slate-500 truncate mt-0.5 font-medium", children: [
                  '"',
                  thread.lastMsg,
                  '"'
                ] })
              ] })
            ] }, threadKey);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-8 lg:col-span-5 flex flex-col bg-[#efeae2] dark:bg-[#0b141a] border border-border/60 rounded-2xl overflow-hidden h-[540px] shadow-sm relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 bg-[#25d366] text-white flex items-center justify-between shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full bg-white/15 grid place-items-center text-white shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold", children: "Fortiv AI Assistant" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/90 font-medium flex items-center gap-1.5", children: waTyping ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "typing..." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-white animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "online · Simulating ",
                    activeWaThreadData.name
                  ] })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 opacity-90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "WhatsApp Voice Call", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "WhatsApp Settings", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { className: "h-4 w-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: whatsappScrollRef, className: "flex-1 overflow-y-auto p-4 space-y-3 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#e1f3fb] text-[#54656f] text-[9px] px-2.5 py-0.5 rounded uppercase tracking-widest font-bold shadow-sm font-display", children: "Autoplay Session (Fortiv AI Assistant)" }) }),
            waMessages.map((m, idx) => {
              const isUser = m.sender === "buyer";
              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${isUser ? "justify-end" : "justify-start"} animate-in fade-in duration-300`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[85%] rounded-xl px-3 py-1.5 text-xs font-semibold shadow-sm relative ${isUser ? "bg-[#d9fdd3] text-[#111b21] rounded-tr-none" : "bg-white text-[#111b21] rounded-tl-none border border-black/5"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-4 whitespace-pre-wrap", children: m.text }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-2 bottom-0.5 flex items-center gap-0.5 text-[8px] text-slate-500 font-mono", children: [
                  m.time,
                  isUser && /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCheck, { className: "h-3 w-3 text-[#53bdeb]" })
                ] })
              ] }) }, idx);
            }),
            waTyping && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl rounded-tl-none px-3 py-2 border border-black/5 shadow-sm flex gap-1 items-center h-[28px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce", style: {
                animationDelay: "0ms"
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce", style: {
                animationDelay: "150ms"
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce", style: {
                animationDelay: "300ms"
              } })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-2.5 bg-[#f0f2f5] dark:bg-[#1f2c34] flex items-center gap-2.5 border-t border-border/40 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Attachment", className: "text-slate-500 hover:text-slate-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Paperclip, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-white dark:bg-[#2a3942] rounded-lg px-3 py-2 text-xs text-slate-400 font-medium select-none shadow-inner", children: waPlaying ? "AI Chatbot is handling inquiry autonomously..." : "Press Replay Demo to play conversation simulator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Send message", className: "h-9 w-9 bg-[#25d366] rounded-full grid place-items-center text-white hover:bg-[#128c7e] transition-colors shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 ml-0.5" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-4 flex flex-col justify-between h-[540px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 flex flex-col justify-between flex-1 border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-4 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 w-fit", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest font-display", children: "AI Inbound Qualification" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground mb-1", children: "Live Qualification Profile" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-5 font-semibold", children: [
              "Active thread: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: activeWaThreadData.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3.5", children: [{
              label: "Configuration Intent",
              value: activeWaThreadData.getProfileVal(waIndex, "config")
            }, {
              label: "Locality Preference",
              value: activeWaThreadData.getProfileVal(waIndex, "locality")
            }, {
              label: "Budget Range",
              value: activeWaThreadData.getProfileVal(waIndex, "budget")
            }, {
              label: "Possession Target",
              value: activeWaThreadData.getProfileVal(waIndex, "possession")
            }, {
              label: "Purchase Purpose",
              value: activeWaThreadData.getProfileVal(waIndex, "purpose")
            }, {
              label: "Recommended Project",
              value: activeWaThreadData.getProfileVal(waIndex, "project"),
              highlight: true
            }, {
              label: "Brochure Sharing",
              value: activeWaThreadData.getProfileVal(waIndex, "brochure")
            }, {
              label: "Site Visit Schedule",
              value: activeWaThreadData.getProfileVal(waIndex, "visit"),
              success: true
            }, {
              label: "Assigned Agent",
              value: activeWaThreadData.getProfileVal(waIndex, "agent")
            }].map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs pb-1.5 border-b border-border/40 last:border-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-muted-foreground", children: field.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold transition-all duration-300 ${field.success && field.value !== "Pending" ? "text-emerald-600 font-extrabold" : field.highlight && field.value !== "Matching..." ? "text-primary" : "text-foreground"}`, children: field.value })
            ] }, field.label)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4 mt-5 flex gap-3 items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-semibold", children: "Lead Score Impact:" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-red-500 font-bold font-mono", children: activeWaThreadData.getProfileVal(waIndex, "impact") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: restartWhatsAppDemo, className: "h-8 px-4 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-3.5 w-3.5" }),
              " Replay Demo"
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 grid grid-cols-2 md:grid-cols-4 gap-4 border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:border-r border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Conversations Today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-foreground font-mono mt-1", children: "42" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:border-r border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Visits Booked MTD" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-foreground font-mono mt-1", children: "14" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:border-r border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Escalation Handoffs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-foreground font-mono mt-1", children: "4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Languages Used" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-foreground font-mono mt-1", children: "EN: 28 · HI: 9 · GU: 5" })
        ] })
      ] })
    ] });
  };
  const renderMissedCallResponder = () => {
    const activeCall = missedCallsData[selectedMissedCallIdx];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-card border border-border text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-slate-400 font-display", children: "Missed Calls Today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold mt-1 text-foreground font-mono", children: recoveryRateStats.missedCallsToday })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-card border border-border text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-emerald-600 font-display", children: "WhatsApp Recovered" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold mt-1 text-emerald-600 font-mono", children: recoveryRateStats.recoveredWa })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-card border border-border text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-[#0E86E9] font-display", children: "Recovery Rate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold mt-1 text-[#0E86E9] font-mono", children: recoveryRateStats.recoveryRate })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-card border border-border text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-slate-400 font-display", children: "SMS Fallbacks" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold mt-1 text-foreground font-mono", children: recoveryRateStats.smsSent })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-2xl bg-card border border-border text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-emerald-600 font-display", children: "Overall Recovery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold mt-1 text-emerald-600 font-mono", children: recoveryRateStats.overallRecoveryRate })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-8 p-0 overflow-hidden h-[450px] flex flex-col border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 bg-secondary/30 border-b border-border flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Unified Missed Call Recovery Log" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground font-bold", children: "Telephony webhook status: 🟢 LISTENING" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto flex-1 scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/20 border-b border-border/80 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Caller" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Auto WA Sent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Delay" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "WA Response" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Outcome" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Status" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40", children: missedCallsData.map((call, idx) => {
              const isSelected = selectedMissedCallIdx === idx;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { onClick: () => setSelectedMissedCallIdx(idx), className: `hover:bg-secondary/15 transition-colors cursor-pointer ${isSelected ? "bg-secondary/20 font-semibold border-l-2 border-primary" : ""}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-muted-foreground", children: call.time }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 font-bold text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: call.caller }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground font-medium font-sans", children: call.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono", children: call.waSent }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-slate-500", children: call.delay }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: call.response.includes("Replied") ? "text-emerald-600 font-bold" : "text-muted-foreground font-medium", children: call.response }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-bold text-slate-700", children: call.outcome }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded text-[10px] font-bold ${call.status === "Recovered" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : call.status === "Pending" ? "bg-amber-50 text-amber-600 border border-amber-100" : "bg-red-50 text-red-600 border border-red-100"}`, children: call.status }) })
              ] }, idx);
            }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-4 p-4 flex flex-col justify-between h-[450px] border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 border-b border-border/40 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Timeline Tracker" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-foreground", children: [
                "Recovery Audit: ",
                activeCall?.text
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-6 space-y-4 py-2 mt-4 z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[7px] top-4 bottom-4 w-0.5 bg-secondary border-dashed" }),
              [{
                title: "📞 Incoming Call Unanswered",
                time: `${activeCall?.time}:00 PM`,
                desc: "Inbound call missed on sales desk line."
              }, {
                title: "💬 WhatsApp recovery dispatch",
                time: activeCall?.waSent,
                desc: `Auto-generated WA message sent with a delay of ${activeCall?.delay}.`
              }, {
                title: "💬 Buyer feedback registered",
                time: activeCall?.response.includes("Replied") ? "Received +3m" : "No response",
                desc: activeCall?.response.includes("Replied") ? "Buyer clicked WhatsApp reply quick-chips." : "Fallback path triggered."
              }, {
                title: "✅ Recovery Outcome logged",
                time: "Logged to CRM",
                desc: `Outcome: ${activeCall?.outcome}.`
              }].map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[24px] top-1 h-3.5 w-3.5 rounded-full border border-border bg-card flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-foreground", children: step.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-semibold mt-0.5", children: step.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-primary font-mono mt-0.5", children: step.time })
              ] }, idx))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 pt-3 flex justify-between items-center text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-semibold", children: "Average delivery time:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-foreground", children: recoveryRateStats.avgWaSendTime })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-0 overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 bg-secondary/30 border-b border-border flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Callback Required Queue (Manual Fallback)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-red-50 text-red-600 border border-red-100 font-bold px-2 py-0.5 rounded-full", children: "Priority Flags: Active" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/15 border-b border-border/80 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display", children: "Source" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display", children: "Call Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display", children: "WA Sent Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display", children: "WA Response" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display", children: "SMS Sent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display", children: "SMS Response" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display", children: "CRM Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display", children: "Priority" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display", children: "Assigned Agent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 font-bold text-[9px] uppercase tracking-widest font-display", children: "Notes" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40 font-medium", children: callbackQueueData.map((lead, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-bold", children: lead.source }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-mono text-foreground font-bold", children: lead.phone }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-mono text-slate-500", children: lead.callTime }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-mono text-slate-500", children: lead.waSentTime }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-red-500", children: lead.waResponse }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-slate-600", children: lead.smsSent }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-red-500", children: lead.smsResponse }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-red-50 text-red-600 border border-red-200 px-2 py-0.5 rounded font-black", children: lead.crmStatus }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded font-black tracking-wider uppercase", children: lead.priority }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-bold text-foreground", children: lead.agent }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 text-muted-foreground text-[10px] font-medium font-sans", children: [
              '"',
              lead.notes,
              '"'
            ] })
          ] }, idx)) })
        ] }) })
      ] })
    ] });
  };
  const renderWebsiteWidget = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider", children: "Demo Chat Scenarios:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: ["A", "B", "C", "D"].map((flow) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelectedFlow(flow), className: `h-7 px-3 rounded-lg text-xs font-bold transition-all border ${selectedFlow === flow ? "bg-ink border-ink text-cream" : "bg-background border-border text-muted-foreground hover:bg-muted"}`, children: [
            "Flow ",
            flow
          ] }, flow)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground font-mono", children: "Knowledge Base Size: 80 FAQs + RAG Matrix" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-6 flex flex-col bg-[#f5f6fa] border border-border rounded-2xl h-[500px] shadow-sm relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border-b border-border px-4 py-2 flex items-center justify-between shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-red-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-yellow-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-green-400" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-400 font-mono", children: "fortivsolutions.in/greenview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-12" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-6 relative flex flex-col justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 p-6 flex flex-col gap-3 select-none pointer-events-none opacity-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-32 bg-slate-500 rounded" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-full bg-slate-500 rounded" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-3/4 bg-slate-500 rounded" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-32 bg-slate-400 rounded-xl mt-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[320px] bg-card border border-border shadow-xl rounded-2xl overflow-hidden flex flex-col h-[380px] self-end z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary text-primary-foreground px-3.5 py-2.5 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-400 animate-ping" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: "Fortiv AI Assistant" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-4 w-4 opacity-90" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: widgetScrollRef, className: "flex-1 overflow-y-auto p-3 space-y-2 bg-[#F8FAFC]", children: [
                widgetMessages.map((m, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${m.from === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `max-w-[85%] rounded-xl px-2.5 py-1.5 text-[11px] font-semibold ${m.from === "user" ? "bg-primary text-primary-foreground rounded-br-none" : "bg-white text-foreground border border-border rounded-tl-none"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-line", children: m.text }) }) }, idx)),
                widgetTyping && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-border rounded-xl rounded-tl-none px-2.5 py-1.5 shadow-sm flex gap-1 items-center h-[24px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce", style: {
                    animationDelay: "0ms"
                  } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce", style: {
                    animationDelay: "150ms"
                  } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce", style: {
                    animationDelay: "300ms"
                  } })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 border-t border-border/80 flex items-center gap-1.5 bg-white", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { "aria-label": "Widget message input", disabled: true, placeholder: "Type a message...", className: "flex-1 text-[11px] font-medium h-7 px-2.5 bg-secondary/50 border border-transparent rounded-lg outline-none cursor-not-allowed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Send widget message", className: "h-7 w-7 rounded-lg bg-primary text-primary-foreground grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5" }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-6 flex flex-col gap-4 h-[500px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-0 overflow-hidden flex-1 flex flex-col border border-border bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs text-foreground font-display", children: "Real-time RAG Knowledge Vector Queries" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto flex-1 scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/10 border-b border-border/50 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-bold text-[9px] uppercase tracking-widest font-display", children: "Visitor Question" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-bold text-[9px] uppercase tracking-widest font-display", children: "Reference Source" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 font-bold text-[9px] uppercase tracking-widest font-display", children: "Confidence" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40", children: ragQueryLog.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/15 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 font-bold text-foreground", children: [
                  '"',
                  r.q,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-slate-500 font-mono text-[10px]", children: r.src }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 font-mono text-emerald-600 font-bold", children: r.confidence })
              ] }, idx)) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-0 overflow-hidden h-[180px] flex flex-col border border-border bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 bg-secondary/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs text-foreground font-display", children: "Captured Widget Leads" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-y-auto flex-1 scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/10 border-b border-border/50 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Interest" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-1.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Status" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40", children: leadCaptureLog.map((l, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-bold text-foreground", children: l.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono text-slate-500", children: l.phone }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-semibold", children: l.interest }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100", children: l.status }) })
              ] }, idx)) })
            ] }) })
          ] })
        ] })
      ] })
    ] });
  };
  const renderTelegramAgent = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 animate-in fade-in duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-6 flex flex-col bg-[#17212b] border border-border/60 rounded-2xl h-[520px] shadow-sm relative overflow-hidden text-[#f5f6f7]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 bg-[#24303f] flex items-center justify-between shrink-0 border-b border-[#1c2937]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full bg-[#3090cd] grid place-items-center text-white shrink-0 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "h-4.5 w-4.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-[#fff]", children: "Fortiv CRM Bot" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-[#708499] font-medium", children: tgTyping ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "bot is typing..." }) : "bot" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "More Telegram Options", className: "text-[#6c7e90]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { className: "h-5 w-5" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: telegramScrollRef, className: "flex-1 overflow-y-auto p-4 space-y-4", children: [
          tgMessages.map((m, idx) => {
            const isBot = m.from === "bot";
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${isBot ? "justify-start" : "justify-end"} animate-in fade-in duration-300`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[85%] rounded-xl px-3 py-2 text-xs relative ${isBot ? "bg-[#182533] text-[#fff] rounded-tl-none border border-[#203040]" : "bg-[#2b5278] text-[#fff] rounded-tr-none"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap font-mono tracking-tight leading-relaxed", children: m.text }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-[8px] text-[#708499] mt-1 font-mono", children: [
                m.time,
                " ",
                isBot ? "" : "✓✓"
              ] })
            ] }) }, idx);
          }),
          tgTyping && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#182533] rounded-xl rounded-tl-none px-3.5 py-2 border border-[#203040] shadow-sm flex gap-1 items-center h-[28px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#708499] animate-bounce", style: {
              animationDelay: "0ms"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#708499] animate-bounce", style: {
              animationDelay: "150ms"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#708499] animate-bounce", style: {
              animationDelay: "300ms"
            } })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-[#17212b] border-t border-[#1c2937] shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 justify-center mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => runTelegramCommand(telegramCommands.comps.cmd, telegramCommands.comps.reply), className: "px-3 py-1 bg-[#24303f] hover:bg-[#2e3e52] text-[#3090cd] text-[10px] font-bold rounded-full border border-[#1c2937] transition-all", children: "/comps 2BHK Vesu" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => runTelegramCommand(telegramCommands.emi.cmd, telegramCommands.emi.reply), className: "px-3 py-1 bg-[#24303f] hover:bg-[#2e3e52] text-[#3090cd] text-[10px] font-bold rounded-full border border-[#1c2937] transition-all", children: "/emi 58L 20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => runTelegramCommand(telegramCommands.pipeline.cmd, telegramCommands.pipeline.reply), className: "px-3 py-1 bg-[#24303f] hover:bg-[#2e3e52] text-[#3090cd] text-[10px] font-bold rounded-full border border-[#1c2937] transition-all", children: "/pipeline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => runTelegramCommand(telegramCommands.hot.cmd, telegramCommands.hot.reply), className: "px-3 py-1 bg-[#24303f] hover:bg-[#2e3e52] text-[#3090cd] text-[10px] font-bold rounded-full border border-[#1c2937] transition-all", children: "/hot" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => runTelegramCommand(telegramCommands.rera.cmd, telegramCommands.rera.reply), className: "px-3 py-1 bg-[#24303f] hover:bg-[#2e3e52] text-[#3090cd] text-[10px] font-bold rounded-full border border-[#1c2937] transition-all", children: "/rera Greenview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => runTelegramCommand(telegramCommands.inventory.cmd, telegramCommands.inventory.reply), className: "px-3 py-1 bg-[#24303f] hover:bg-[#2e3e52] text-[#3090cd] text-[10px] font-bold rounded-full border border-[#1c2937] transition-all", children: "/inventory 2BHK" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => runTelegramCommand(telegramCommands.book.cmd, telegramCommands.book.reply), className: "px-3 py-1 bg-[#24303f] hover:bg-[#2e3e52] text-[#3090cd] text-[10px] font-bold rounded-full border border-[#1c2937] transition-all font-sans font-bold", children: "/book visit" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-[#24303f] border border-[#1c2937] rounded-lg px-3 py-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#6c7e90] text-xs font-mono", children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { "aria-label": "Telegram command input", disabled: true, placeholder: "Select one of the quick command chips above...", className: "flex-1 bg-transparent text-xs text-[#fff] outline-none placeholder:text-[#526375] font-mono cursor-not-allowed" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-6 p-0 overflow-hidden h-[520px] flex flex-col border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3.5 bg-secondary/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Field Agents Telegram Activity Log" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto flex-1 scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/15 border-b border-border/80 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Agent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Command Requested" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Query Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Outcome Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40", children: telegramActivityLog.map((log, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-bold text-foreground", children: log.agent }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-primary font-bold", children: log.cmd }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-slate-500", children: log.time }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100", children: log.result }) })
          ] }, idx)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-border bg-muted/10 text-xs text-muted-foreground font-semibold flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Average Telegram response speed: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground font-mono", children: "1.2s" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Total internal users today: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "5 sales agents" })
          ] })
        ] })
      ] })
    ] }) });
  };
  const renderVoiceIVR = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 border border-border bg-card p-4 rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:border-r border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Voice Calls Today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-foreground font-mono mt-1", children: "24" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:border-r border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display", children: "AI Fully Qualified" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-foreground font-mono mt-1", children: "18" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:border-r border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Transferred to Human" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-foreground font-mono mt-1", children: "6" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Avg AI Handle Duration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-foreground font-mono mt-1", children: "2m 10s" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 overflow-hidden h-[450px] flex flex-col border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3.5 bg-secondary/30 border-b border-border flex justify-between items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-xs text-foreground font-display", children: "Voice Call Qualification Logs" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto flex-1 scrollbar-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/15 border-b border-border/80 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Caller" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Language" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Call Duration" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "AI Duration" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Qualified" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-bold text-[9px] uppercase tracking-widest font-display", children: "Outcome" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/40", children: ivrCallsData.map((call, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-muted-foreground", children: call.time }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 font-bold text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: call.caller }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground font-medium font-sans", children: call.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-600 bg-secondary px-2 py-0.5 rounded border border-border text-[10px]", children: call.language }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono", children: call.duration }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-slate-500", children: call.aiDuration }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-bold text-emerald-600", children: call.qualified }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-bold text-slate-700", children: call.outcome })
            ] }, idx)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-4 flex flex-col gap-4 h-[450px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 flex-1 flex flex-col justify-between border border-border bg-card overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-h-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2.5 border-b border-border/40 pb-2 flex justify-between items-center shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Live Audio Transcript" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold text-foreground", children: "AI Voice IVR Call Simulator" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedIvrFlow("inbound"), className: `px-2 py-0.5 rounded text-[9px] font-bold border transition-all ${selectedIvrFlow === "inbound" ? "bg-ink border-ink text-cream" : "bg-card border-border text-muted-foreground"}`, children: "Inbound" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedIvrFlow("after-hours"), className: `px-2 py-0.5 rounded text-[9px] font-bold border transition-all ${selectedIvrFlow === "after-hours" ? "bg-ink border-ink text-cream" : "bg-card border-border text-muted-foreground"}`, children: "After-Hours" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto space-y-2.5 pr-1 p-2 bg-[#f8fafc] border border-border/40 rounded-xl", children: [
                ivrTranscriptMessages.map((m, idx) => {
                  const isAi = m.speaker === "ai";
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${isAi ? "justify-start" : "justify-end"} animate-in fade-in duration-300`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `max-w-[85%] rounded-xl px-2.5 py-1.5 text-[10px] font-semibold leading-relaxed shadow-sm ${isAi ? "bg-slate-100 text-slate-800 border border-border/60 rounded-tl-none" : "bg-primary text-primary-foreground rounded-br-none"}`, children: m.text }) }, idx);
                }),
                ivrPlaying && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-100 border border-border/40 rounded-xl rounded-tl-none px-3 py-1.5 shadow-sm flex gap-1 items-center h-[24px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce", style: {
                    animationDelay: "0ms"
                  } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce", style: {
                    animationDelay: "150ms"
                  } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce", style: {
                    animationDelay: "300ms"
                  } })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/40 pt-3 mt-3 flex justify-between items-center shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-emerald-600 font-bold flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
                " Qualified"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
                setIvrTranscriptMessages([]);
                setIvrIndex(-1);
                setIvrPlaying(true);
              }, className: "h-7 px-3 bg-secondary hover:bg-secondary/70 border border-border rounded-lg text-[10px] font-bold transition-all flex items-center gap-1 active:scale-95", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-3 w-3" }),
                " Replay Call"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-4 h-[180px] flex flex-col justify-between border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 border-b border-border/40 pb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-bold text-foreground", children: "Language Distribution MTD" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 pt-1.5", children: [{
              label: "English",
              count: "14 calls",
              pct: "58.3%",
              w: "w-[58.3%]",
              color: "bg-[#0E86E9]"
            }, {
              label: "Gujarati",
              count: "6 calls",
              pct: "25.0%",
              w: "w-[25.0%]",
              color: "bg-emerald-500"
            }, {
              label: "Hindi",
              count: "4 calls",
              pct: "16.7%",
              w: "w-[16.7%]",
              color: "bg-amber-500"
            }].map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] font-semibold text-slate-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  lang.label,
                  " (",
                  lang.count,
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground font-mono", children: lang.pct })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full rounded-full ${lang.color} ${lang.w}` }) })
            ] }, lang.label)) })
          ] }) })
        ] })
      ] })
    ] });
  };
  const renderEmailResponder = () => {
    const activeEmail = emailsData[selectedEmailIdx];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 animate-in fade-in duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 border border-border bg-card p-4 rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:border-r border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Inbound Emails Today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-foreground font-mono mt-1", children: "34" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:border-r border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display", children: "AI Automated Responses" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-foreground font-mono mt-1", children: "28" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:border-r border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display", children: "Mean Delivery Speed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-foreground font-mono mt-1", children: "2m 48s" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground font-bold uppercase tracking-wider font-display", children: "SLA Breaches (Target 3m)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold text-foreground font-mono mt-1", children: "0" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-7 p-0 overflow-hidden h-[450px] flex flex-col border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-secondary/20 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs text-foreground font-display", children: "Unified Inbound Email Inbox" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto divide-y divide-border/60 scrollbar-none", children: emailsData.map((email, idx) => {
            const isSelected = selectedEmailIdx === idx;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => setSelectedEmailIdx(idx), className: `p-3.5 hover:bg-secondary/15 transition-colors cursor-pointer flex items-start justify-between gap-4 ${isSelected ? "bg-secondary/25 border-l-2 border-primary" : ""}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-secondary border border-border flex items-center justify-center font-bold text-[10px] text-slate-600 shrink-0", children: email.from[0] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-xs text-foreground flex items-center gap-2 flex-wrap", children: [
                    email.from,
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-mono text-slate-400", children: [
                      "(",
                      email.email,
                      ")"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold text-foreground mt-0.5", children: email.subject }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mt-1 truncate max-w-sm font-medium", children: [
                    '"',
                    email.original,
                    '"'
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0 flex flex-col items-end gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-400 font-mono", children: email.received }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded text-[10px] font-bold bg-[#efe5dd] text-slate-700", children: email.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-emerald-600 font-bold font-mono", children: [
                  "✓ ",
                  email.timeTaken
                ] })
              ] })
            ] }, idx);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "col-span-12 lg:col-span-5 p-4 h-[450px] flex flex-col justify-between border border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-h-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 border-b border-border/40 pb-2 flex justify-between items-center shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Auto-Responder Output" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold text-foreground", children: "AI Draft Response Preview" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100", children: "Approved & Dispatched" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-secondary/30 rounded-xl p-3 border border-border/60 overflow-y-auto font-mono text-[10px] text-foreground leading-relaxed whitespace-pre-wrap", children: activeEmail?.reply })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3 mt-4 flex gap-3 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 h-8 rounded-lg bg-secondary hover:bg-secondary/70 text-foreground text-xs font-bold border border-border transition-colors", children: "Edit Draft" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 h-8 rounded-lg bg-ink hover:bg-ink/90 text-cream text-xs font-bold shadow-sm transition-all", children: "Send Reply" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 flex flex-col h-[260px] border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 border-b border-border/40 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-500 font-display", children: "Hourly Analytics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground", children: "Average Inbound Response Time by Hour" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-end gap-5 px-3 pt-6", children: emailHourlyStats.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center gap-2 group h-full justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] font-bold text-foreground font-mono opacity-0 group-hover:opacity-100 transition-opacity", children: [
            item.time,
            " (",
            item.count,
            " emails)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-t bg-[#E8A838] transition-all duration-300 opacity-80 group-hover:opacity-100 shadow-sm", style: {
            height: `${item.height}%`
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold text-muted-foreground font-mono mt-1", children: item.hour })
        ] }, idx)) })
      ] })
    ] });
  };
  const getPageHeader = () => {
    switch (activeTab) {
      case "menu":
        return {
          title: "Conversations",
          subtitle: "Autonomous front-office engaging buyers and routing requests 24/7 across every communication channel."
        };
      case "overview":
        return {
          title: "Engagement Overview",
          subtitle: "Live operations metrics dashboard for Indian real estate buyers."
        };
      case "whatsapp":
        return {
          title: "WhatsApp AI Chatbot",
          subtitle: "Autonomous AI assistant that qualifies prospects and books site visits on WhatsApp."
        };
      case "missed-call":
        return {
          title: "Missed Call Auto-Responder",
          subtitle: "Instantly follows up on missed calls via WhatsApp and SMS fallback."
        };
      case "website-widget":
        return {
          title: "Website AI Chat Widget",
          subtitle: "Website chat widget equipped with RAG for accurate project Q&A and lead capture."
        };
      case "telegram":
        return {
          title: "Telegram Agent for Field Staff",
          subtitle: "Internal bot for sales agents to query CRM leads, inventory, and calculators in real-time."
        };
      case "voice-ivr":
        return {
          title: "Voice IVR Bot",
          subtitle: "Voice AI that qualifies inbound callers using natural speech in multiple languages."
        };
      case "email":
        return {
          title: "Email AI Responder",
          subtitle: "Auto-drafts and sends customized email responses to property inquiries within 3 minutes."
        };
      default:
        return {
          title: "Conversations",
          subtitle: "Autonomous front-office AI."
        };
    }
  };
  const headerInfo = getPageHeader();
  const dynamicTitle = activeTab === "menu" ? headerInfo.title : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("menu"), className: "group h-8 w-8 rounded-full border border-border/80 bg-card hover:bg-ink hover:border-ink text-foreground hover:text-cream flex items-center justify-center transition-all duration-300 hover:shadow-[0_2px_8px_rgba(11,31,51,0.12)] hover:-translate-x-0.5 active:scale-95 mr-0.5", "aria-label": "Back to Conversations menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold tracking-tight text-foreground select-none cursor-pointer hover:text-ink/85 transition-colors", onClick: () => setActiveTab("menu"), children: headerInfo.title })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { title: dynamicTitle, subtitle: headerInfo.subtitle, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "transition-all duration-300", children: [
    activeTab === "menu" && renderMenuSelection(),
    activeTab === "overview" && renderOverview(),
    activeTab === "whatsapp" && renderWhatsAppAgent(),
    activeTab === "missed-call" && renderMissedCallResponder(),
    activeTab === "website-widget" && renderWebsiteWidget(),
    activeTab === "telegram" && renderTelegramAgent(),
    activeTab === "voice-ivr" && renderVoiceIVR(),
    activeTab === "email" && renderEmailResponder()
  ] }) });
}
function StatBox({
  label,
  value,
  desc,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4 flex flex-col justify-between relative min-h-24 border border-border bg-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-slate-400 font-display", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-baseline justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-2xl font-bold tracking-tight ${color}`, children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold text-muted-foreground", children: desc })
    ] })
  ] });
}
export {
  ConversationsManager as component
};
