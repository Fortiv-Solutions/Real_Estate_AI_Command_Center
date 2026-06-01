import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Brain, Database, Shield, Zap, Activity, AlertTriangle, TrendingUp, Users, Building2, CheckCircle2, FileText, IndianRupee, MessageCircle, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { AppShell } from "../components/AppShell";

export const Route = createFileRoute("/ai-brain")({
  head: () => ({ meta: [{ title: "AI Brain · Command Center" }] }),
  component: AIBrain,
});

const INSIGHTS = [
  { type: "Sales", text: "Facebook leads visiting pricing pages convert 3.1x higher. Prioritize in queue.", action: "Update Routing" },
  { type: "Pricing", text: "Units on floors 8–12 in Tower A taking 40% longer to sell. Consider revision.", action: "View Analysis" },
  { type: "Team", text: "Rahul Modi's conversion drops when handling >45 leads. Recommend capping.", action: "Adjust Limits" },
  { type: "Risk", text: "3 high-value deals in Negotiation stage idle for 8+ days.", action: "Draft Messages" },
  { type: "Compliance", text: "2 RERA documents pending signature for booked units in Skyline.", action: "Send Reminders" },
  { type: "Finance", text: "Outstanding receivables in 90+ days bucket exceeds 10% of total.", action: "View Report" },
  { type: "Marketing", text: "NRI campaign in Dubai showing 45% lower CPA than local ads.", action: "Scale Budget" },
  { type: "Operations", text: "Site visit no-show rate increased to 18% this week. Enable WhatsApp reminders.", action: "Enable Auto-Reminders" },
];

const RISK_DEALS = [
  { client: "Vikram Joshi", project: "Greenview Heights", value: "₹72L", score: 85, factor: "Strong engagement, pre-approved loan", trend: "up" },
  { client: "Pooja Sharma", project: "Skyline Residences", value: "₹1.3Cr", score: 62, factor: "Unresponsive to last 3 messages", trend: "down" },
  { client: "Suresh Nair", project: "Skyline Residences", value: "₹1.1Cr", score: 91, factor: "Site visit completed, requested docs", trend: "up" },
  { client: "Arjun Malhotra", project: "Business Park", value: "₹3.1Cr", score: 45, factor: "Competitor offer identified", trend: "down" },
  { client: "Deepak Trivedi", project: "Greenview Heights", value: "₹82L", score: 78, factor: "Spouse added to WhatsApp group", trend: "up" },
  { client: "Rakesh Singh", project: "Skyline Residences", value: "₹95L", score: 22, factor: "Budget mismatch detected by NLP", trend: "down" },
];

const MODULES = [
  { name: "Lead Gen & Scoring", status: "ok", uptime: "99.9%" },
  { name: "WhatsApp Chatbot", status: "ok", uptime: "100%" },
  { name: "Predictive Dialer", status: "warn", uptime: "98.2%" },
  { name: "Pipeline Kanban", status: "ok", uptime: "99.9%" },
  { name: "Digital KYC", status: "ok", uptime: "99.9%" },
  { name: "Smart Inventory", status: "ok", uptime: "100%" },
  { name: "Dynamic Pricing", status: "ok", uptime: "99.9%" },
  { name: "Agent App", status: "warn", uptime: "97.5%" },
  { name: "Construction", status: "ok", uptime: "99.5%" },
  { name: "Channel Partners", status: "ok", uptime: "100%" },
  { name: "Finance & Coll.", status: "ok", uptime: "99.9%" },
  { name: "AI Brain", status: "ok", uptime: "100%" },
];

function AnimatedCounter({ value, duration = 2000 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
}

function AIBrain() {
  const [insightIdx, setInsightIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setInsightIdx((prev) => (prev + 1) % INSIGHTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const insight = INSIGHTS[insightIdx];

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-slate-300 font-sans selection:bg-[#2E86AB]/30">
      {/* Dark mode specific header overriding AppShell defaults visually for this page */}
      <header className="h-16 border-b border-white/10 bg-[#0D1B2A]/80 backdrop-blur-md sticky top-0 z-50 flex items-center px-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-[#2E86AB] to-blue-600 grid place-items-center text-white shadow-[0_0_15px_rgba(46,134,171,0.5)]">
            <Brain className="h-4 w-4" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white leading-none">AI Command Center</h1>
            <p className="text-[11px] text-[#2E86AB] font-mono tracking-widest uppercase mt-1">Fortiv Neural Core v2.4</p>
          </div>
        </div>
      </header>

      <main className="p-5 max-w-[1600px] mx-auto space-y-5">
        
        {/* Top Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Leads Tracked", val: 1247, icon: <Users className="h-4 w-4 text-[#2E86AB]" /> },
            { label: "Automations Run", val: 8234, icon: <Zap className="h-4 w-4 text-amber-400" /> },
            { label: "Data Points Processed", val: 450912, icon: <Database className="h-4 w-4 text-emerald-400" /> },
            { label: "AI Models Active", val: 14, icon: <Brain className="h-4 w-4 text-purple-400" /> }
          ].map(stat => (
            <div key={stat.label} className="bg-[#1B263B] border border-white/5 rounded-xl p-3 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#2E86AB]/10 rounded-full blur-2xl group-hover:bg-[#2E86AB]/20 transition-all" />
              <div className="flex justify-between items-start mb-2 relative">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-display">{stat.label}</span>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white relative font-mono">
                <AnimatedCounter value={stat.val} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* Main Visual: Semantic Knowledge Graph */}
          <div className="col-span-1 lg:col-span-2 bg-[#1B263B] border border-white/5 rounded-xl p-5 relative overflow-hidden flex flex-col min-h-[400px]">
            <div className="flex justify-between items-center z-10 mb-6">
              <h2 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                <Activity className="h-4 w-4 text-[#2E86AB]" />
                Customer Knowledge Graph
              </h2>
              <div className="px-2 py-1 bg-[#2E86AB]/20 text-[#2E86AB] text-[10px] uppercase font-mono rounded border border-[#2E86AB]/30 animate-pulse">
                Real-time Mapping
              </div>
            </div>
            
            <div className="flex-1 relative w-full h-full min-h-[300px] flex items-center justify-center">
              {/* Fake SVG Graph Network */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(46,134,171,0.3))' }}>
                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#2E86AB" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
                <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="#2E86AB" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="15%" y2="60%" stroke="#2E86AB" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="85%" y2="65%" stroke="#2E86AB" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#2E86AB" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>
              
              {/* Nodes */}
              <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-600 grid place-items-center mb-2 z-10">
                  <Database className="h-4 w-4 text-slate-300" />
                </div>
                <span className="text-[10px] font-mono text-slate-400">Ads Source</span>
              </div>
              
              <div className="absolute top-[25%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-emerald-500/50 grid place-items-center mb-2 z-10 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="text-[10px] font-mono text-slate-400">WhatsApp</span>
              </div>
              
              <div className="absolute top-[60%] left-[15%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-purple-500/50 grid place-items-center mb-2 z-10">
                  <Building2 className="h-4 w-4 text-purple-400" />
                </div>
                <span className="text-[10px] font-mono text-slate-400">Properties</span>
              </div>
              
              <div className="absolute top-[65%] left-[85%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-amber-500/50 grid place-items-center mb-2 z-10">
                  <IndianRupee className="h-4 w-4 text-amber-400" />
                </div>
                <span className="text-[10px] font-mono text-slate-400">Payments</span>
              </div>

              <div className="absolute top-[85%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-blue-500/50 grid place-items-center mb-2 z-10">
                  <FileText className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-[10px] font-mono text-slate-400">Documents</span>
              </div>

              {/* Center Buyer Node */}
              <div className="relative z-20 flex flex-col items-center group cursor-pointer">
                <div className="absolute inset-0 bg-[#2E86AB] rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity animate-pulse" />
                <div className="w-16 h-16 rounded-full bg-[#0D1B2A] border-2 border-[#2E86AB] flex items-center justify-center shadow-[0_0_20px_rgba(46,134,171,0.6)] relative overflow-hidden">
                  <Users className="h-6 w-6 text-[#2E86AB]" />
                </div>
                <div className="mt-3 bg-[#0D1B2A]/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 text-center">
                  <div className="text-xs font-bold text-white">Rajesh Patel</div>
                  <div className="text-[10px] text-[#2E86AB] font-mono mt-0.5">Unified Profile</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Feed & System Health */}
          <div className="col-span-1 flex flex-col gap-5">
            
            {/* Live AI Insights Feed */}
            <div className="bg-[#1B263B] border border-[#2E86AB]/30 rounded-xl p-4 shadow-[0_0_15px_rgba(46,134,171,0.1)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2E86AB] to-transparent opacity-50" />
              <h2 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                <Sparkles className="h-4 w-4 text-[#2E86AB]" />
                Live Action Feed
              </h2>
              
              <div className="relative h-[160px]">
                {/* We use key={insightIdx} to force a re-render animation when it changes */}
                <div key={insightIdx} className="absolute inset-0 animate-in slide-in-from-right-4 fade-in duration-500">
                  <div className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold bg-white/10 text-white mb-3">
                    {insight.type}
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed mb-4">
                    {insight.text}
                  </p>
                  <button className="text-xs font-semibold bg-[#2E86AB] text-white px-3 py-1.5 rounded shadow-[0_0_10px_rgba(46,134,171,0.4)] hover:bg-[#2E86AB]/80 transition-colors">
                    {insight.action}
                  </button>
                </div>
              </div>
              
              {/* Progress indicators */}
              <div className="flex gap-1.5 mt-2">
                {INSIGHTS.map((_, i) => (
                  <div key={i} className={`h-1 flex-1 rounded-full ${i === insightIdx ? 'bg-[#2E86AB]' : 'bg-white/10'}`} />
                ))}
              </div>
            </div>

            {/* System Health Grid */}
            <div className="bg-[#1B263B] border border-white/5 rounded-xl p-4 flex-1">
              <h2 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                <Shield className="h-4 w-4 text-emerald-400" />
                Module Health
              </h2>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                {MODULES.map(m => (
                  <div key={m.name} className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2">
                      <div className={`h-1.5 w-1.5 rounded-full ${m.status === 'warn' ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
                      <span className="text-slate-300 truncate w-[100px]">{m.name}</span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500">{m.uptime}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Predictive Deal Risk Table */}
        <div className="bg-[#1B263B] border border-white/5 rounded-xl p-5">
           <h2 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2 mb-5">
            <TrendingUp className="h-4 w-4 text-[#2E86AB]" />
            Predictive Deal Risk Analysis
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10 text-[10px] uppercase tracking-widest text-slate-500 font-bold font-display">
                  <th className="pb-3 px-2">Client / Deal</th>
                  <th className="pb-3 px-2">Value</th>
                  <th className="pb-3 px-2">AI Score (0-100)</th>
                  <th className="pb-3 px-2">Primary Risk Factor / Driver</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {RISK_DEALS.map((deal, i) => {
                  let scoreColor = "text-emerald-400";
                  let bgBar = "bg-emerald-400";
                  if (deal.score < 50) { scoreColor = "text-rose-400"; bgBar = "bg-rose-400"; }
                  else if (deal.score < 75) { scoreColor = "text-amber-400"; bgBar = "bg-amber-400"; }

                  return (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-2">
                        <div className="font-semibold text-white">{deal.client}</div>
                        <div className="text-[10px] font-medium text-slate-400 mt-0.5">{deal.project}</div>
                      </td>
                      <td className="py-3 px-2 font-mono text-slate-300 font-bold">{deal.value}</td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-3">
                          <span className={`font-bold w-6 ${scoreColor}`}>{deal.score}</span>
                          <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className={`h-full ${bgBar}`} style={{ width: `${deal.score}%` }} />
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2 text-slate-300">
                          {deal.score < 50 ? <AlertCircle className="h-3.5 w-3.5 text-rose-400" /> : <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />}
                          <span className="font-medium">{deal.factor}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
