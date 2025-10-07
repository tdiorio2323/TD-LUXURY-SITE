-- Create the client_intake table
CREATE TABLE client_intake (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  goals TEXT NOT NULL,
  budget TEXT NOT NULL,
  email TEXT,
  source TEXT DEFAULT 'agent',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create an index for faster queries
CREATE INDEX idx_client_intake_created_at ON client_intake(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE client_intake ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow service role to insert/select
CREATE POLICY "Enable insert for service role" ON client_intake
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable select for service role" ON client_intake
  FOR SELECT USING (true);

-- Optional: Create a view for analytics
CREATE VIEW client_intake_summary AS
SELECT 
  DATE_TRUNC('day', created_at) as date,
  COUNT(*) as total_inquiries,
  COUNT(DISTINCT budget) as unique_budget_ranges,
  source
FROM client_intake
GROUP BY DATE_TRUNC('day', created_at), source
ORDER BY date DESC;