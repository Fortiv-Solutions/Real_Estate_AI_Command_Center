import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Pill } from "../components/AppShell";
import { Search, Send, Paperclip, Phone, MoreHorizontal, Sparkles } from "lucide-react";

export const Route = createFileRoute("/conversations")({
  head: () => ({ meta: [{ title: "Conversations · Fortiv" }] }),
  component: Conversations,
});

const threads = [
  { n: "Priya Shah", last: "Yes, Saturday 11am works.", t: "now", unread: 2, ai: true, hot: true },
  { n: "Aman Trivedi", last: "Can you share the floor plan?", t: "4m", unread: 1, ai: true },
  { n: "Hetal Mehta", last: "What's the EMI for 42L?", t: "12m", unread: 0, ai: true },
  { n: "Kunal Jain", last: "Booking the visit", t: "1h", unread: 0 },
  { n: "Sneha Patel", last: "Brochure received, will review", t: "3h", unread: 0 },
  { n: "Rohan Desai", last: "Is parking included?", t: "5h", unread: 0, ai: true },
];

const messages = [
  { from: "ai", t: "10:24", text: "Hello Priya! Welcome to Fortiv 🏠 I'd love to help you find your perfect home. May I ask your budget?" },
  { from: "user", t: "10:25", text: "Around 60-75 lakhs, 3BHK in Vesu" },
  { from: "ai", t: "10:25", text: "Excellent choice. We have 11 available 3BHK units at Skyline Heights, Vesu, starting ₹68L. Possession is ready. Would you like to see the floor plan and price breakdown?" },
  { from: "user", t: "10:31", text: "Yes please, and can I visit this Saturday?" },
  { from: "ai", t: "10:31", text: "Sharing brochure 📎 Skyline_3BHK_Brochure.pdf. For Saturday I can book a visit at 11:00 am with Nilesh — does that work?" },
  { from: "user", t: "10:33", text: "Yes, Saturday 11am works." },
];

function Conversations() {
  return (
    <AppShell title="Conversations" subtitle="WhatsApp · Calls · Email · Web chat — handled by AI, escalated to humans">
      <Card className="overflow-hidden grid grid-cols-12 h-[calc(100vh-220px)] min-h-[560px]">
        {/* Thread list */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3 border-r border-border/60 flex flex-col">
          <div className="p-3 border-b border-border/60">
            <div className="relative">
              <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input className="w-full h-9 pl-8 pr-3 rounded-lg bg-muted text-[13px] focus:outline-none" placeholder="Search conversations" />
            </div>
            <div className="flex gap-1 mt-2">
              {["All","Unread","AI handled","Escalated"].map((t,i)=>(
                <button key={t} className={`text-[11px] px-2 py-1 rounded-md ${i===0?"bg-ink text-cream":"text-muted-foreground hover:bg-muted"}`}>{t}</button>
              ))}
            </div>
          </div>
          <ul className="flex-1 overflow-y-auto">
            {threads.map((th,i)=>(
              <li key={th.n} className={`px-3 py-3 border-b border-border/40 cursor-pointer flex gap-3 ${i===0?"bg-muted/60":"hover:bg-muted/40"}`}>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-amber-200 grid place-items-center text-[12px] font-semibold text-ink shrink-0">
                  {th.n.split(" ").map(n=>n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-[13px] font-medium truncate flex items-center gap-1.5">
                      {th.n}
                      {th.hot && <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--hot)]" />}
                    </div>
                    <div className="text-[10px] text-muted-foreground shrink-0">{th.t}</div>
                  </div>
                  <div className="text-[11px] text-muted-foreground truncate mt-0.5">{th.last}</div>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    {th.ai && <Pill tone="accent"><Sparkles className="h-2.5 w-2.5"/>AI</Pill>}
                    {th.unread > 0 && <span className="text-[10px] bg-ink text-cream rounded-full px-1.5 min-w-[18px] h-[18px] grid place-items-center">{th.unread}</span>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Conversation */}
        <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-col">
          <div className="p-4 border-b border-border/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-amber-200 grid place-items-center text-[12px] font-semibold text-ink">PS</div>
              <div>
                <div className="text-[13px] font-medium flex items-center gap-2">Priya Shah <Pill tone="hot">Hot · 92</Pill></div>
                <div className="text-[11px] text-muted-foreground">WhatsApp · +91 98250 22118 · last seen 2m ago</div>
              </div>
            </div>
            <div className="flex gap-1">
              <button className="h-9 w-9 grid place-items-center rounded-lg hover:bg-muted"><Phone className="h-4 w-4"/></button>
              <button className="h-9 w-9 grid place-items-center rounded-lg hover:bg-muted"><MoreHorizontal className="h-4 w-4"/></button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {messages.map((m,i)=>(
              <div key={i} className={`flex ${m.from==="user"?"justify-end":"justify-start"}`}>
                <div className={`max-w-[70%] rounded-2xl px-4 py-2.5 text-[13px] ${
                  m.from==="user"
                    ? "bg-ink text-cream rounded-br-sm"
                    : "bg-muted text-foreground rounded-bl-sm"
                }`}>
                  {m.from==="ai" && <div className="text-[10px] uppercase tracking-wider opacity-60 mb-1 flex items-center gap-1"><Sparkles className="h-2.5 w-2.5"/>AI Assistant</div>}
                  <div>{m.text}</div>
                  <div className={`text-[10px] mt-1 ${m.from==="user"?"text-cream/60":"text-muted-foreground"}`}>{m.t}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border/60">
            <div className="flex items-center gap-2 bg-muted rounded-2xl px-3 py-2">
              <button className="text-muted-foreground hover:text-foreground"><Paperclip className="h-4 w-4"/></button>
              <input className="flex-1 bg-transparent text-[13px] focus:outline-none" placeholder="Type or let AI respond…" />
              <button className="text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-1"><Sparkles className="h-3 w-3"/>Suggest</button>
              <button className="h-8 w-8 grid place-items-center rounded-full bg-ink text-cream"><Send className="h-3.5 w-3.5"/></button>
            </div>
          </div>
        </div>

        {/* Lead context */}
        <div className="hidden lg:flex col-span-3 border-l border-border/60 flex-col p-5 overflow-y-auto">
          <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Lead profile</div>
          <h3 className="font-display text-2xl mt-1">Priya Shah</h3>
          <div className="text-[12px] text-muted-foreground">VP Marketing · Adani Group</div>

          <div className="mt-5 space-y-3 text-[12px]">
            {[
              { l: "Budget", v: "₹60–75L" },
              { l: "Configuration", v: "3BHK" },
              { l: "Preferred area", v: "Vesu, Surat" },
              { l: "Timeline", v: "0–3 months" },
              { l: "Source", v: "Facebook Ads" },
              { l: "Est. income", v: "₹25–35L/yr" },
            ].map((r)=>(
              <div key={r.l} className="flex justify-between border-b border-border/40 pb-2">
                <span className="text-muted-foreground">{r.l}</span>
                <span className="font-medium">{r.v}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 p-3 rounded-xl bg-accent/30 border border-accent/40">
            <div className="text-[11px] font-medium flex items-center gap-1"><Sparkles className="h-3 w-3"/>AI suggestion</div>
            <p className="text-[12px] mt-1.5">Recommend Skyline Heights 3BHK. Buyer matches 4/4 qualification criteria. Visit on Sat 11am — assign Nilesh.</p>
          </div>
        </div>
      </Card>
    </AppShell>
  );
}
