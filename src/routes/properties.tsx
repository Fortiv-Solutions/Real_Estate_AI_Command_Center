import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Card, Pill } from "../components/AppShell";
import { MapPin, BedDouble, Square, Plus, LayoutGrid, List } from "lucide-react";

export const Route = createFileRoute("/properties")({
  head: () => ({ meta: [{ title: "Properties · Fortiv" }] }),
  component: Properties,
});

const props = [
  {
    n: "Skyline Heights",
    area: "Vesu, Surat",
    price: "₹68L – ₹1.2Cr",
    units: 84,
    available: 11,
    bhk: "2/3/4 BHK",
    area_sqft: "1,250–2,400",
    rera: "GJ/RAJ/SRT/2024/0042",
    tag: "Ready possession",
    tone: "accent",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    n: "Riverfront Residences",
    area: "Adajan, Surat",
    price: "₹42L – ₹85L",
    units: 156,
    available: 38,
    bhk: "2/3 BHK",
    area_sqft: "980–1,650",
    rera: "GJ/RAJ/SRT/2024/0118",
    tag: "Under construction",
    tone: "warm",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    n: "Marina Verde",
    area: "Pal, Surat",
    price: "₹55L – ₹1.5Cr",
    units: 96,
    available: 23,
    bhk: "3/4 BHK + Penthouse",
    area_sqft: "1,400–3,200",
    rera: "GJ/RAJ/SRT/2023/0089",
    tag: "Limited inventory",
    tone: "hot",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    n: "Greenfield Park",
    area: "Katargam",
    price: "₹32L – ₹48L",
    units: 220,
    available: 142,
    bhk: "1/2 BHK",
    area_sqft: "620–1,050",
    rera: "GJ/RAJ/SRT/2024/0201",
    tag: "New launch",
    tone: "accent",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    n: "Athwa Square",
    area: "Athwa",
    price: "₹78L – ₹1.8Cr",
    units: 64,
    available: 8,
    bhk: "3/4 BHK",
    area_sqft: "1,800–3,400",
    rera: "GJ/RAJ/SRT/2023/0055",
    tag: "Premium",
    tone: "neutral",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    n: "Citrus Walk",
    area: "Piplod",
    price: "₹38L – ₹62L",
    units: 140,
    available: 71,
    bhk: "2/3 BHK",
    area_sqft: "850–1,420",
    rera: "GJ/RAJ/SRT/2024/0177",
    tag: "Family",
    tone: "neutral",
    img: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=600&h=400",
  },
] as const;

function Properties() {
  return (
    <AppShell
      title="Properties"
      subtitle="14 projects · 1,284 units · 293 available · 6 RERA approvals expiring"
      actions={
        <>
          <div className="flex rounded-lg border border-border bg-card p-0.5">
            <button className="h-9 w-9 grid place-items-center rounded-md bg-primary text-primary-foreground shadow-sm">
              <LayoutGrid className="h-3.5 w-3.5" />
            </button>
            <button className="h-9 w-9 grid place-items-center rounded-md text-muted-foreground hover:bg-secondary transition-colors">
              <List className="h-3.5 w-3.5" />
            </button>
          </div>
          <button className="h-10 px-4 rounded-lg bg-primary text-primary-foreground text-[13px] font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors active:scale-95 shadow-sm">
            <Plus className="h-4 w-4" />
            Add project
          </button>
        </>
      }
    >
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {props.map((p) => {
          const sold = Math.round(((p.units - p.available) / p.units) * 100);
          return (
            <Card key={p.n} className="overflow-hidden group">
              <div className="h-44 relative overflow-hidden bg-muted">
                <img src={p.img} alt={p.n} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Pill tone={p.tone}>{p.tag}</Pill>
                </div>
                <div className="absolute bottom-3 left-3 flex gap-2 items-center text-white text-[10px] bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md font-mono border border-white/10">
                  {p.rera}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl">{p.n}</h3>
                    <div className="text-[12px] text-muted-foreground flex items-center gap-1 mt-0.5">
                      <MapPin className="h-3 w-3" /> {p.area}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-muted-foreground">starting</div>
                    <div className="font-display text-lg">{p.price.split(" – ")[0]}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4 text-[12px]">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <BedDouble className="h-3.5 w-3.5" /> {p.bhk}
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Square className="h-3.5 w-3.5" /> {p.area_sqft} sq.ft
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between text-[11px] mb-1.5">
                    <span className="text-muted-foreground">
                      {p.units - p.available} of {p.units} units sold
                    </span>
                    <span className="font-medium">{sold}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: `${sold}%` }} />
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </AppShell>
  );
}
