export type Lead = {
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
};

export const MOCK_LEADS: Lead[] = [
  { n: "Priya Shah", e: "priya.shah@gmail.com", p: "+91 98250 22118", src: "Facebook Ads", area: "Vesu", budget: "₹60–75L", cfg: "3BHK", score: 92, tone: "hot", status: "New", agent: "Nilesh" },
  { n: "Aman Trivedi", e: "amantri@outlook.com", p: "+91 99099 41122", src: "99acres", area: "Adajan", budget: "₹40–55L", cfg: "2BHK", score: 88, tone: "hot", status: "Contacted", agent: "Dipak" },
  { n: "Hetal Mehta", e: "hetalm@yahoo.in", p: "+91 97250 80012", src: "WhatsApp", area: "Pal", budget: "₹35–45L", cfg: "2BHK", score: 74, tone: "hot", status: "Qualified", agent: "Nilesh" },
  { n: "Kunal Jain", e: "kunal.j@adani.com", p: "+91 98980 71101", src: "Referral", area: "Katargam", budget: "₹1.2–1.5Cr", cfg: "4BHK", score: 96, tone: "hot", status: "Visit booked", agent: "Rajesh" },
  { n: "Sneha Patel", e: "sneha.p@gmail.com", p: "+91 99250 33455", src: "Google Ads", area: "Athwa", budget: "₹50–60L", cfg: "3BHK", score: 61, tone: "warm", status: "Nurturing", agent: "AI" },
  { n: "Rohan Desai", e: "rohan.d@gmail.com", p: "+91 98240 80091", src: "MagicBricks", area: "Vesu", budget: "₹45–55L", cfg: "2BHK", score: 54, tone: "warm", status: "Contacted", agent: "Dipak" },
  { n: "Megha Kothari", e: "megha.k@gmail.com", p: "+91 97250 11220", src: "Instagram", area: "Pal", budget: "₹30–40L", cfg: "1BHK", score: 38, tone: "cold", status: "Nurturing", agent: "AI" },
  { n: "Vivek Sharma", e: "vivek.s@tata.com", p: "+91 99099 80012", src: "FSBO Hunter", area: "Adajan", budget: "₹70–90L", cfg: "3BHK", score: 81, tone: "hot", status: "New", agent: "—" },
];

export type PipelineDeal = {
  id: string;
  client: string;
  project: string;
  value: string;
  agent: string;
  daysInStage: number;
  urgency: 'low' | 'medium' | 'high';
  stage: 'inquiry' | 'scheduled' | 'visited' | 'negotiation' | 'booking' | 'registered';
};

export const MOCK_PIPELINE: PipelineDeal[] = [
  { id: "d1", client: "Vikram Joshi", project: "Fortiv Greenview Heights", value: "₹72L", agent: "Priya Rana", daysInStage: 2, urgency: "low", stage: "inquiry" },
  { id: "d2", client: "Suresh Nair", project: "Skyline Residences", value: "₹1.1Cr", agent: "Rahul Modi", daysInStage: 5, urgency: "medium", stage: "inquiry" },
  { id: "d3", client: "Anita Patel", project: "Fortiv Business Park", value: "₹1.4Cr", agent: "Ankit Shah", daysInStage: 7, urgency: "high", stage: "inquiry" },
  
  { id: "d4", client: "Meera Desai", project: "Fortiv Greenview Heights", value: "₹65L", agent: "Kiran Desai", daysInStage: 1, urgency: "low", stage: "scheduled" },
  { id: "d5", client: "Rakesh Singh", project: "Skyline Residences", value: "₹95L", agent: "Priya Rana", daysInStage: 3, urgency: "medium", stage: "scheduled" },
  
  { id: "d6", client: "Kavita Agarwal", project: "Fortiv Business Park", value: "₹2.4Cr", agent: "Ankit Shah", daysInStage: 1, urgency: "low", stage: "visited" },
  { id: "d7", client: "Mahesh Khanna", project: "Fortiv Greenview Heights", value: "₹68L", agent: "Meera Patel", daysInStage: 4, urgency: "medium", stage: "visited" },
  { id: "d8", client: "Anita Gujarati", project: "Skyline Residences", value: "₹95L", agent: "Kiran Desai", daysInStage: 9, urgency: "high", stage: "visited" },
  
  { id: "d9", client: "Deepak Trivedi", project: "Fortiv Greenview Heights", value: "₹82L", agent: "Rahul Modi", daysInStage: 9, urgency: "high", stage: "negotiation" },
  { id: "d10", client: "Pooja Sharma", project: "Skyline Residences", value: "₹1.3Cr", agent: "Priya Rana", daysInStage: 11, urgency: "high", stage: "negotiation" },
  { id: "d11", client: "Arjun Malhotra", project: "Fortiv Business Park", value: "₹3.1Cr", agent: "Ankit Shah", daysInStage: 10, urgency: "high", stage: "negotiation" },
  
  { id: "d12", client: "Ritu Bhandari", project: "Fortiv Greenview Heights", value: "₹75L", agent: "Meera Patel", daysInStage: 3, urgency: "low", stage: "booking" },
  { id: "d13", client: "Sanjay Kapoor", project: "Skyline Residences", value: "₹1.5Cr", agent: "Kiran Desai", daysInStage: 6, urgency: "medium", stage: "booking" },
  
  { id: "d14", client: "Nisha Verma", project: "Fortiv Greenview Heights", value: "₹65L", agent: "Priya Rana", daysInStage: 1, urgency: "low", stage: "registered" },
  { id: "d15", client: "Manoj Tiwari", project: "Fortiv Business Park", value: "₹2.1Cr", agent: "Rahul Modi", daysInStage: 2, urgency: "low", stage: "registered" },
];

export const MOCK_INSIGHTS = [
  { id: 1, type: 'Sales', text: 'Leads from Facebook who visit pricing within 24 hours convert 3.1x higher. Prioritize in lead queue.' },
  { id: 2, type: 'Pricing', text: 'Units on floors 8–12 in Tower A are taking 40% longer to sell. Consider pricing revision.' },
  { id: 3, type: 'Team', text: 'Agent Rahul Modi conversion drops when handling >45 leads. Recommend capping assignment at 40.' },
  { id: 4, type: 'Risk', text: '3 high-value deals in Negotiation stage have been idle for over 8 days.' },
  { id: 5, type: 'Finance', text: 'Outstanding receivables in 90+ days bucket exceeds 10% of total billed. Collections intervention required.' },
];
