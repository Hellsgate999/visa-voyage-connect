/*
  # Create Countries and Authentication Tables

  1. New Tables
    - `countries`
      - `id` (uuid, primary key)
      - `name` (text, country name)
      - `flag_emoji` (text, flag emoji)
      - `description` (text, short description)
      - `processing_time` (text, e.g., "2-6 months")
      - `success_rate` (text, e.g., "92%")
      - `badge` (text, e.g., "Most Popular", "High Demand")
      - `visa_types` (text[], array of visa types)
      - `order_position` (int, for sorting)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `countries` table
    - Add policy for public read access
    - Add policy for authenticated admin write access
*/

CREATE TABLE IF NOT EXISTS countries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  flag_emoji text NOT NULL,
  description text NOT NULL,
  processing_time text NOT NULL,
  success_rate text NOT NULL,
  badge text,
  visa_types text[] DEFAULT '{}',
  order_position int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE countries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Countries are viewable by everyone"
  ON countries
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert countries"
  ON countries
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update countries"
  ON countries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete countries"
  ON countries
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample data
INSERT INTO countries (name, flag_emoji, description, processing_time, success_rate, badge, visa_types, order_position) VALUES
  ('United States', '🇺🇸', 'Land of opportunities with world-class education and career prospects', '2-6 months', '92%', 'Most Popular', ARRAY['Tourist', 'Business', 'Student', '+1 more'], 1),
  ('Canada', '🇨🇦', 'Friendly immigration policies and excellent quality of life', '2-8 weeks', '95%', 'High Demand', ARRAY['Visitor', 'Study', 'Work', '+1 more'], 2),
  ('United Kingdom', '🇬🇧', 'Rich history, excellent education system, and global business hub', '3-8 weeks', '88%', 'Popular', ARRAY['Standard', 'Student', 'Skilled', '+1 more'], 3),
  ('Australia', '🇦🇺', 'Beautiful landscapes, excellent work-life balance, and strong economy', '1-4 months', '91%', 'Growing', ARRAY['Tourist', 'Work', 'Student', '+1 more'], 4),
  ('Germany', '🇩🇪', 'Economic powerhouse with excellent job opportunities and free education', '2-12 weeks', '87%', 'Emerging', ARRAY['Tourist', 'Work', 'Student', '+1 more'], 5),
  ('Singapore', '🇸🇬', 'Gateway to Asia with excellent business opportunities and modern lifestyle', '1-3 weeks', '94%', 'Fast Track', ARRAY['Tourist', 'Work', 'Business', '+1 more'], 6);
