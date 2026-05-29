import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Pill } from "../components/AppShell";
import { Search, Send, Paperclip, Phone, MoreHorizontal, Sparkles, Check, CheckCheck, RotateCcw } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Route = createFileRoute("/conversations")({
  head: () => ({ meta: [{ title: "Conversations · Fortiv" }] }),
  component: Conversations,
});

type Message = {
  id: number;
  from: "ai" | "user";
  t: string;
  text: string;
  status?: "sent" | "delivered" | "read";
};

const fullConversation: Message[] = [
  { id: 1, from: "ai", t: "10:24", text: "Hello Rajesh! Welcome to Fortiv 🏠 I'm the Fortiv AI Assistant. Are you currently looking for a new property?", status: "read" },
  { id: 2, from: "user", t: "10:25", text: "Yes, I am looking for a 3BHK.", status: "read" },
  { id: 3, from: "ai", t: "10:25", text: "Great! To help me find the best matches, what is your preferred location and budget?", status: "read" },
  { id: 4, from: "user", t: "10:27", text: "Looking in Vesu area. Budget is around 75L.", status: "read" },
  { id: 5, from: "ai", t: "10:28", text: "Perfect. We have Fortiv Greenview Heights in Vesu with premium 3BHKs starting at ₹72L. Would you like me to share the brochure and floor plans?", status: "read" },
  { id: 6, from: "user", t: "10:30", text: "Yes, please send them.", status: "read" },
  { id: 7, from: "ai", t: "10:30", text: "Here is the brochure for Fortiv Greenview Heights 📎\n\nWould you like to schedule a site visit to see the sample flat this week?", status: "read" },
  { id: 8, from: "user", t: "10:35", text: "Can we do Saturday morning?", status: "read" },
  { id: 9, from: "ai", t: "10:36", text: "I have slots available at 10:00 AM or 11:30 AM this Saturday. Which works better for you?", status: "read" },
  { id: 10, from: "user", t: "10:38", text: "11:30 AM is fine.", status: "read" },
  { id: 11, from: "ai", t: "10:38", text: "Site visit confirmed for Saturday at 11:30 AM at Greenview Heights! ✅ Our Senior Agent Priya Rana will meet you there. I'll send you a reminder on Friday.", status: "read" },
];

function Conversations() {
  const [messages, setMessages] = useState<Message[]>([fullConversation[0]]);
  const [isTyping, setIsTyping] = useState(false);
  const [demoState, setDemoState] = useState<"idle" | "playing" | "finished">("idle");
  const scrollRef = useRef<HTMLDivElement>(null);

  const startDemo = () => {
    setMessages([fullConversation[0]]);
    setDemoState("playing");
    let currentIndex = 1;

    const playNext = () => {
      if (currentIndex >= fullConversation.length) {
        setDemoState("finished");
        return;
      }

      const nextMsg = fullConversation[currentIndex];
      
      if (nextMsg.from === "ai") {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, nextMsg]);
          currentIndex++;
          setTimeout(playNext, 2000); // Wait before user replies
        }, 1500); // AI typing duration
      } else {
        // User message
        setMessages(prev => [...prev, { ...nextMsg, status: "sent" }]);
        
        // Simulate read receipts
        setTimeout(() => {
          setMessages(prev => prev.map(m => m.id === nextMsg.id ? { ...m, status: "delivered" } : m));
          setTimeout(() => {
            setMessages(prev => prev.map(m => m.id === nextMsg.id ? { ...m, status: "read" } : m));
            currentIndex++;
            setTimeout(playNext, 500);
          }, 800);
        }, 500);
      }
    };

    setTimeout(playNext, 1500);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const currentSummary = {
    budget: messages.some(m => m.id >= 4) ? "₹75L" : "Determining...",
    location: messages.some(m => m.id >= 4) ? "Vesu" : "Determining...",
    config: messages.some(m => m.id >= 2) ? "3BHK" : "Determining...",
    status: messages.some(m => m.id >= 11) ? "Site Visit Scheduled" : "Qualifying",
    sentiment: messages.some(m => m.id >= 8) ? "Positive (Hot)" : "Neutral"
  };

  return (
    <AppShell
      title="WhatsApp AI Agent"
      subtitle="Autonomous 24/7 engagement and qualification"
      actions={
        <button 
          onClick={startDemo}
          disabled={demoState === "playing"}
          className="h-10 px-4 rounded-lg bg-emerald-600 text-white text-[13px] font-medium flex items-center gap-2 hover:bg-emerald-700 transition-all active:scale-[0.98] shadow-sm disabled:opacity-50"
        >
          {demoState === "playing" ? (
            <span className="flex items-center gap-2"><span className="animate-pulse h-2 w-2 bg-white rounded-full" /> Demo Running...</span>
          ) : (
            <><RotateCcw className="h-4 w-4" /> {demoState === "finished" ? "Replay Demo" : "Start Simulator"}</>
          )}
        </button>
      }
    >
      <Card className="overflow-hidden grid grid-cols-12 h-[calc(100vh-140px)] min-h-[560px] border border-border/60">
        
        {/* Thread list */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3 border-r border-border/60 flex flex-col bg-muted/10">
          <div className="p-4 border-b border-border/60 bg-card">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                className="w-full h-10 pl-9 pr-3 rounded-lg border border-border/60 bg-muted/30 text-[13px] focus:outline-none focus:ring-1 focus:ring-ink"
                placeholder="Search conversations"
              />
            </div>
          </div>
          <ul className="flex-1 overflow-y-auto">
            <li className="px-4 py-3 border-b border-border/40 cursor-pointer flex gap-3 bg-card border-l-2 border-l-[var(--success)]">
              <div className="h-11 w-11 rounded-full bg-[#25D366]/10 grid place-items-center text-[14px] font-semibold text-[#25D366] shrink-0">
                RP
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-[14px] font-semibold truncate text-foreground">Rajesh Patel</div>
                  <div className="text-[11px] text-[#25D366] font-medium shrink-0">10:38 AM</div>
                </div>
                <div className="text-[12px] text-muted-foreground truncate mt-0.5 flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-accent" />
                  AI qualifying lead...
                </div>
              </div>
            </li>
            {[
              { n: "Aman Trivedi", last: "Can you share the floor plan?", t: "4m" },
              { n: "Hetal Mehta", last: "What's the EMI for 42L?", t: "12m" },
              { n: "Kunal Jain", last: "Booking the visit", t: "1h" },
            ].map((th) => (
              <li key={th.n} className="px-4 py-3 border-b border-border/40 cursor-pointer flex gap-3 hover:bg-muted/40">
                <div className="h-11 w-11 rounded-full bg-muted grid place-items-center text-[14px] font-medium text-muted-foreground shrink-0">
                  {th.n.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-[14px] font-medium truncate">{th.n}</div>
                    <div className="text-[11px] text-muted-foreground shrink-0">{th.t}</div>
                  </div>
                  <div className="text-[12px] text-muted-foreground truncate mt-0.5">{th.last}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* WhatsApp Chat Simulator */}
        <div className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col bg-[#efeae2] relative dark:bg-[#0b141a]">
          {/* WhatsApp Header */}
          <div className="px-4 py-3 bg-[#f0f2f5] dark:bg-[#202c33] border-b border-border/40 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#128C7E] grid place-items-center text-white shrink-0 shadow-sm">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[15px] font-medium text-[#111b21] dark:text-[#e9edef]">Rajesh Patel</div>
                <div className="text-[12px] text-[#667781] dark:text-[#8696a0]">
                  {isTyping ? <span className="text-[#25D366] font-medium">Rajesh is typing...</span> : "online"}
                </div>
              </div>
            </div>
            <div className="flex gap-4 text-[#54656f] dark:text-[#aebac1]">
              <Search className="h-5 w-5 cursor-pointer" />
              <MoreHorizontal className="h-5 w-5 cursor-pointer" />
            </div>
          </div>
          
          {/* Chat Area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-5 space-y-3 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"
            style={{ opacity: 0.9 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-[#e1f3fb] dark:bg-[#182229] text-[#54656f] dark:text-[#8696a0] text-[11.5px] px-3 py-1 rounded-lg uppercase tracking-wide font-medium shadow-sm">
                Today
              </div>
            </div>

            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-1 duration-300`}>
                <div className={`max-w-[85%] sm:max-w-[75%] px-3 py-2 text-[14.5px] shadow-sm relative ${
                  m.from === "user"
                    ? "bg-[#d9fdd3] dark:bg-[#005c4b] text-[#111b21] dark:text-[#e9edef] rounded-2xl rounded-tr-sm"
                    : "bg-white dark:bg-[#202c33] text-[#111b21] dark:text-[#e9edef] rounded-2xl rounded-tl-sm"
                }`}>
                  <div className="pr-14 pb-1 whitespace-pre-wrap">{m.text}</div>
                  <div className="absolute right-2 bottom-1 flex items-center gap-1 text-[10px] text-[#667781] dark:text-[#8696a0]">
                    {m.t}
                    {m.from === "user" && (
                      <span className="ml-0.5">
                        {m.status === "sent" && <Check className="h-3 w-3" />}
                        {m.status === "delivered" && <CheckCheck className="h-3 w-3" />}
                        {m.status === "read" && <CheckCheck className="h-3 w-3 text-[#53bdeb]" />}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start animate-in fade-in duration-200">
                <div className="bg-white dark:bg-[#202c33] rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex gap-1.5 items-center h-[38px]">
                  <div className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: "0ms", animationDuration: "1s" }} />
                  <div className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: "150ms", animationDuration: "1s" }} />
                  <div className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: "300ms", animationDuration: "1s" }} />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="px-4 py-3 bg-[#f0f2f5] dark:bg-[#202c33] flex items-center gap-3">
            <button className="text-[#54656f] dark:text-[#8696a0] p-1">
              <Sparkles className="h-6 w-6 text-[#128C7E]" />
            </button>
            <div className="flex-1 bg-white dark:bg-[#2a3942] rounded-lg px-4 py-2.5 shadow-sm text-[#54656f] dark:text-[#8696a0] text-[15px]">
              {demoState === "playing" ? "AI is handling this conversation..." : "Start the simulator to watch AI reply"}
            </div>
            <button className="h-10 w-10 bg-[#128C7E] rounded-full grid place-items-center text-white shadow-sm">
              <Send className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Real-time AI Summary Panel */}
        <div className="hidden lg:flex col-span-3 border-l border-border/60 bg-card flex-col p-6 overflow-y-auto">
          <div className="flex items-center gap-2 mb-6 text-emerald-600 bg-emerald-600/10 px-3 py-1.5 rounded-full w-fit">
            <Sparkles className="h-4 w-4" />
            <span className="text-[12px] font-bold uppercase tracking-wider">AI Live Analysis</span>
          </div>
          
          <h3 className="text-xl font-bold text-foreground mb-1">Rajesh Patel</h3>
          <p className="text-sm text-muted-foreground mb-6">WhatsApp Lead · via AI Assistant</p>

          <div className="space-y-4">
            <div className="p-4 border border-border rounded-xl bg-muted/20">
              <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">Qualification Profile</div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Budget</span>
                  <span className={`text-sm font-semibold transition-all duration-500 ${currentSummary.budget === 'Determining...' ? 'text-muted-foreground italic' : 'text-foreground'}`}>
                    {currentSummary.budget}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Location</span>
                  <span className={`text-sm font-semibold transition-all duration-500 ${currentSummary.location === 'Determining...' ? 'text-muted-foreground italic' : 'text-foreground'}`}>
                    {currentSummary.location}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Configuration</span>
                  <span className={`text-sm font-semibold transition-all duration-500 ${currentSummary.config === 'Determining...' ? 'text-muted-foreground italic' : 'text-foreground'}`}>
                    {currentSummary.config}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">Sentiment</span>
                  <Pill tone={currentSummary.sentiment.includes('Hot') ? 'hot' : 'accent'}>
                    {currentSummary.sentiment}
                  </Pill>
                </div>
              </div>
            </div>

            <div className="p-4 border border-emerald-500/30 rounded-xl bg-emerald-500/5 transition-all duration-500">
              <div className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider mb-2">Deal Status</div>
              <div className="text-base font-bold text-foreground">{currentSummary.status}</div>
              
              {currentSummary.status === "Site Visit Scheduled" && (
                <div className="mt-3 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <p>AI has booked the site visit for Saturday at 11:30 AM and assigned to <strong>Priya Rana</strong>.</p>
                  <button className="mt-3 w-full bg-ink text-cream text-xs font-semibold py-2 rounded-lg hover:bg-ink/90 transition-colors">
                    View CRM Deal
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </AppShell>
  );
}
