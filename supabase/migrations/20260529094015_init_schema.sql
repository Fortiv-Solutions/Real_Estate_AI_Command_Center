-- Create an enum for lead tones
CREATE TYPE lead_tone AS ENUM ('hot', 'warm', 'cold');

-- Create the leads table
CREATE TABLE public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    source TEXT,
    area TEXT,
    budget TEXT,
    configuration TEXT,
    score INTEGER DEFAULT 0,
    tone lead_tone DEFAULT 'cold',
    status TEXT DEFAULT 'New',
    assigned_agent TEXT
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- For local development and demonstration purposes, we will allow 
-- anon (unauthenticated) access to read and insert leads. 
-- In a production environment, this should be restricted to authenticated users based on their role.
CREATE POLICY "Allow public read access"
    ON public.leads
    FOR SELECT
    USING (true);

CREATE POLICY "Allow public insert access"
    ON public.leads
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow public update access"
    ON public.leads
    FOR UPDATE
    USING (true)
    WITH CHECK (true);
