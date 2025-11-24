/*
  # Add Country Visa Relationships

  1. New Tables
    - `country_visa_routes`
      - `id` (uuid, primary key)
      - `from_country` (text) - Source country name
      - `to_country` (text) - Destination country name
      - `visa_required` (boolean) - Whether visa is required
      - `visa_type` (text) - Type of visa (tourist, student, work, etc.)
      - `processing_time` (text) - Average processing time
      - `success_rate` (text) - Success rate percentage
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `country_visa_routes` table
    - Add policy for public read access (anyone can view visa routes)
    - Add policy for authenticated users to suggest updates
*/

CREATE TABLE IF NOT EXISTS country_visa_routes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  from_country text NOT NULL,
  to_country text NOT NULL,
  visa_required boolean DEFAULT true,
  visa_type text DEFAULT 'tourist',
  processing_time text DEFAULT '2-4 weeks',
  success_rate text DEFAULT '95%',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(from_country, to_country, visa_type)
);

ALTER TABLE country_visa_routes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view visa routes"
  ON country_visa_routes
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can suggest visa routes"
  ON country_visa_routes
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Insert sample data for India
INSERT INTO country_visa_routes (from_country, to_country, visa_required, visa_type, processing_time, success_rate) VALUES
('India', 'United States', true, 'student', '4-8 weeks', '98%'),
('India', 'United States', true, 'tourist', '2-4 weeks', '95%'),
('India', 'Canada', true, 'student', '4-6 weeks', '97%'),
('India', 'Canada', true, 'tourist', '3-4 weeks', '96%'),
('India', 'United Kingdom', true, 'student', '3-4 weeks', '98%'),
('India', 'United Kingdom', true, 'tourist', '2-3 weeks', '97%'),
('India', 'Australia', true, 'student', '4-6 weeks', '97%'),
('India', 'Australia', true, 'tourist', '2-3 weeks', '95%'),
('India', 'Germany', true, 'student', '6-8 weeks', '96%'),
('India', 'Germany', true, 'tourist', '2-4 weeks', '94%'),
('India', 'France', true, 'student', '4-6 weeks', '95%'),
('India', 'France', true, 'tourist', '2-3 weeks', '93%'),
('India', 'Italy', true, 'student', '4-6 weeks', '94%'),
('India', 'Italy', true, 'tourist', '2-3 weeks', '92%'),
('India', 'Spain', true, 'student', '4-6 weeks', '94%'),
('India', 'Spain', true, 'tourist', '2-3 weeks', '93%'),
('India', 'Japan', true, 'student', '4-6 weeks', '96%'),
('India', 'Japan', true, 'tourist', '1-2 weeks', '98%'),
('India', 'Singapore', true, 'tourist', '1-2 weeks', '99%'),
('India', 'Singapore', true, 'student', '2-4 weeks', '98%'),
('India', 'New Zealand', true, 'student', '4-6 weeks', '96%'),
('India', 'New Zealand', true, 'tourist', '2-3 weeks', '97%'),
('India', 'Ireland', true, 'student', '4-6 weeks', '97%'),
('India', 'Ireland', true, 'tourist', '2-3 weeks', '95%'),
('India', 'Netherlands', true, 'student', '4-6 weeks', '96%'),
('India', 'Netherlands', true, 'tourist', '2-3 weeks', '94%'),
('India', 'Switzerland', true, 'student', '6-8 weeks', '95%'),
('India', 'Switzerland', true, 'tourist', '2-4 weeks', '93%')
ON CONFLICT (from_country, to_country, visa_type) DO NOTHING;

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_from_country ON country_visa_routes(from_country);
CREATE INDEX IF NOT EXISTS idx_to_country ON country_visa_routes(to_country);
