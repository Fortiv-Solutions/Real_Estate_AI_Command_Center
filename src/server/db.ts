import fs from 'fs';
import path from 'path';

// Using a local JSON file to act as our database for the prototype phase
const DB_PATH = path.resolve(process.cwd(), '.data/db.json');

export interface Lead {
  id: string;
  n: string;
  e: string;
  p: string;
  src: string;
  area: string;
  budget: string;
  cfg: string;
  score: number;
  tone: 'hot' | 'warm' | 'cold';
  status: string;
  agent: string;
  createdAt: string;
}

export interface Database {
  leads: Lead[];
}

const defaultDb: Database = {
  leads: [
    {
      id: '1',
      n: "Priya Shah",
      e: "priya.shah@gmail.com",
      p: "+91 98250 22118",
      src: "Facebook Ads",
      area: "Vesu",
      budget: "₹60–75L",
      cfg: "3BHK",
      score: 92,
      tone: "hot",
      status: "New",
      agent: "Nilesh",
      createdAt: new Date().toISOString()
    },
    {
      id: '2',
      n: "Aman Trivedi",
      e: "amantri@outlook.com",
      p: "+91 99099 41122",
      src: "99acres",
      area: "Adajan",
      budget: "₹40–55L",
      cfg: "2BHK",
      score: 88,
      tone: "hot",
      status: "Contacted",
      agent: "Dipak",
      createdAt: new Date().toISOString()
    },
    {
      id: '3',
      n: "Hetal Mehta",
      e: "hetalm@yahoo.in",
      p: "+91 97250 80012",
      src: "WhatsApp",
      area: "Pal",
      budget: "₹35–45L",
      cfg: "2BHK",
      score: 74,
      tone: "hot",
      status: "Qualified",
      agent: "Nilesh",
      createdAt: new Date().toISOString()
    },
    {
      id: '4',
      n: "Kunal Jain",
      e: "kunal.j@adani.com",
      p: "+91 98980 71101",
      src: "Referral",
      area: "Katargam",
      budget: "₹1.2–1.5Cr",
      cfg: "4BHK",
      score: 96,
      tone: "hot",
      status: "Visit booked",
      agent: "Rajesh",
      createdAt: new Date().toISOString()
    },
    {
      id: '5',
      n: "Sneha Patel",
      e: "sneha.p@gmail.com",
      p: "+91 99250 33455",
      src: "Google Ads",
      area: "Athwa",
      budget: "₹50–60L",
      cfg: "3BHK",
      score: 61,
      tone: "warm",
      status: "Nurturing",
      agent: "AI",
      createdAt: new Date().toISOString()
    },
    {
      id: '6',
      n: "Rohan Desai",
      e: "rohan.d@gmail.com",
      p: "+91 98240 80091",
      src: "MagicBricks",
      area: "Vesu",
      budget: "₹45–55L",
      cfg: "2BHK",
      score: 54,
      tone: "warm",
      status: "Contacted",
      agent: "Dipak",
      createdAt: new Date().toISOString()
    },
    {
      id: '7',
      n: "Megha Kothari",
      e: "megha.k@gmail.com",
      p: "+91 97250 11220",
      src: "Instagram",
      area: "Pal",
      budget: "₹30–40L",
      cfg: "1BHK",
      score: 38,
      tone: "cold",
      status: "Nurturing",
      agent: "AI",
      createdAt: new Date().toISOString()
    },
    {
      id: '8',
      n: "Vivek Sharma",
      e: "vivek.s@tata.com",
      p: "+91 99099 80012",
      src: "FSBO Hunter",
      area: "Adajan",
      budget: "₹70–90L",
      cfg: "3BHK",
      score: 81,
      tone: "hot",
      status: "New",
      agent: "—",
      createdAt: new Date().toISOString()
    }
  ]
};

// Initialize DB file if it doesn't exist
const initDb = () => {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify(defaultDb, null, 2), 'utf-8');
  }
};

initDb();

export const getDb = (): Database => {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data) as Database;
  } catch (error) {
    console.error("Error reading database:", error);
    return defaultDb;
  }
};

export const saveDb = (db: Database) => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), 'utf-8');
  } catch (error) {
    console.error("Error writing database:", error);
  }
};

export const leadDb = {
  getAll: () => getDb().leads,
  add: (lead: Omit<Lead, 'id' | 'createdAt'>) => {
    const db = getDb();
    const newLead: Lead = {
      ...lead,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString()
    };
    db.leads = [newLead, ...db.leads];
    saveDb(db);
    return newLead;
  }
};
