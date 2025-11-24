/*
  # Create Universities and Tourist Attractions Tables

  1. New Tables
    - `education_countries` - Countries focused on education
    - `tourism_countries` - Countries focused on tourism
    - `universities` - University details for education countries
    - `tourist_attractions` - Tourist places for tourism countries

  2. Security
    - Enable RLS on all tables
    - Public read access
*/

-- Education countries table
CREATE TABLE IF NOT EXISTS education_countries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  flag text,
  image_url text,
  description text,
  capital text,
  language text,
  currency text,
  student_population text,
  universities_count text,
  created_at timestamptz DEFAULT now()
);

-- Tourism countries table
CREATE TABLE IF NOT EXISTS tourism_countries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  flag text,
  image_url text,
  description text,
  capital text,
  language text,
  currency text,
  annual_visitors text,
  best_season text,
  created_at timestamptz DEFAULT now()
);

-- Universities table
CREATE TABLE IF NOT EXISTS universities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  country_name text NOT NULL,
  name text NOT NULL,
  ranking text,
  image_url text,
  description text,
  website text,
  tuition_range text,
  programs text[],
  acceptance_rate text,
  created_at timestamptz DEFAULT now()
);

-- Tourist attractions table
CREATE TABLE IF NOT EXISTS tourist_attractions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  country_name text NOT NULL,
  name text NOT NULL,
  type text,
  image_url text,
  description text,
  best_time_to_visit text,
  location text,
  rating numeric DEFAULT 4.5,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE education_countries ENABLE ROW LEVEL SECURITY;
ALTER TABLE tourism_countries ENABLE ROW LEVEL SECURITY;
ALTER TABLE universities ENABLE ROW LEVEL SECURITY;
ALTER TABLE tourist_attractions ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Public can view education countries"
  ON education_countries FOR SELECT TO public USING (true);

CREATE POLICY "Public can view tourism countries"
  ON tourism_countries FOR SELECT TO public USING (true);

CREATE POLICY "Public can view universities"
  ON universities FOR SELECT TO public USING (true);

CREATE POLICY "Public can view attractions"
  ON tourist_attractions FOR SELECT TO public USING (true);

-- Insert education countries
INSERT INTO education_countries (name, flag, image_url, description, capital, language, currency, student_population, universities_count) VALUES
('United States', '🇺🇸', 'https://images.pexels.com/photos/2346091/pexels-photo-2346091.jpeg?auto=compress&cs=tinysrgb&w=1200', 'Home to world''s top universities and diverse educational opportunities', 'Washington D.C.', 'English', 'USD', '50,000+', '200+'),
('United Kingdom', '🇬🇧', 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200', 'Historic universities and world-class education system', 'London', 'English', 'GBP', '30,000+', '150+'),
('Canada', '🇨🇦', 'https://images.pexels.com/photos/2849339/pexels-photo-2849339.jpeg?auto=compress&cs=tinysrgb&w=1200', 'Welcoming country with excellent universities', 'Ottawa', 'English/French', 'CAD', '40,000+', '100+'),
('Australia', '🇦🇺', 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=1200', 'High-quality education with beautiful lifestyle', 'Canberra', 'English', 'AUD', '25,000+', '80+'),
('Germany', '🇩🇪', 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1200', 'Top engineering universities with low tuition', 'Berlin', 'German', 'EUR', '35,000+', '120+'),
('Singapore', '🇸🇬', 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1200', 'World-class universities in modern hub', 'Singapore', 'English', 'SGD', '15,000+', '30+'),
('Netherlands', '🇳🇱', 'https://images.pexels.com/photos/1619312/pexels-photo-1619312.jpeg?auto=compress&cs=tinysrgb&w=1200', 'Progressive education with English programs', 'Amsterdam', 'Dutch', 'EUR', '20,000+', '50+'),
('Ireland', '🇮🇪', 'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=1200', 'Friendly environment with quality education', 'Dublin', 'English', 'EUR', '12,000+', '40+')
ON CONFLICT (name) DO NOTHING;

-- Insert tourism countries
INSERT INTO tourism_countries (name, flag, image_url, description, capital, language, currency, annual_visitors, best_season) VALUES
('France', '🇫🇷', 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1200', 'City of love, art, fashion and gastronomy', 'Paris', 'French', 'EUR', '89M/year', 'April-October'),
('Italy', '🇮🇹', 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1200', 'Rich history, art and delicious cuisine', 'Rome', 'Italian', 'EUR', '64M/year', 'April-June, Sept-Oct'),
('Japan', '🇯🇵', 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1200', 'Perfect blend of tradition and technology', 'Tokyo', 'Japanese', 'JPY', '31M/year', 'March-May, Sept-Nov'),
('Spain', '🇪🇸', 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1200', 'Beautiful beaches and vibrant culture', 'Madrid', 'Spanish', 'EUR', '83M/year', 'May-October'),
('Thailand', '🇹🇭', 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1200', 'Tropical paradise with temples', 'Bangkok', 'Thai', 'THB', '40M/year', 'November-February'),
('Switzerland', '🇨🇭', 'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=1200', 'Stunning Alpine scenery', 'Bern', 'German', 'CHF', '11M/year', 'June-September'),
('Greece', '🇬🇷', 'https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg?auto=compress&cs=tinysrgb&w=1200', 'Ancient history and beautiful islands', 'Athens', 'Greek', 'EUR', '33M/year', 'April-October'),
('Maldives', '🇲🇻', 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=1200', 'Luxury island paradise', 'Male', 'Dhivehi', 'MVR', '1.7M/year', 'November-April')
ON CONFLICT (name) DO NOTHING;

-- Insert universities for USA
INSERT INTO universities (country_name, name, ranking, image_url, description, website, tuition_range, programs, acceptance_rate) VALUES
('United States', 'Harvard University', '#1 Global', 
'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
'Prestigious Ivy League university known for excellence across all fields',
'harvard.edu', '$50,000-$60,000/year',
ARRAY['Business', 'Law', 'Medicine', 'Engineering', 'Computer Science'], '3.4%'),

('United States', 'MIT', '#2 Global', 
'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
'World leader in science, technology, and engineering education',
'mit.edu', '$55,000-$65,000/year',
ARRAY['Engineering', 'Computer Science', 'Physics', 'Mathematics'], '3.9%'),

('United States', 'Stanford University', '#3 Global', 
'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800',
'Silicon Valley premier university for innovation',
'stanford.edu', '$55,000-$62,000/year',
ARRAY['Computer Science', 'Business', 'Engineering', 'Medicine'], '3.7%'),

('United States', 'Yale University', '#8 Global', 
'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=800',
'Elite Ivy League institution with strong liberal arts',
'yale.edu', '$58,000-$65,000/year',
ARRAY['Law', 'Medicine', 'Arts', 'Social Sciences'], '5.9%');

-- Insert universities for UK
INSERT INTO universities (country_name, name, ranking, image_url, description, website, tuition_range, programs, acceptance_rate) VALUES
('United Kingdom', 'University of Oxford', '#4 Global', 
'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
'Oldest English-speaking university with unmatched prestige',
'ox.ac.uk', '£25,000-£40,000/year',
ARRAY['Law', 'Medicine', 'Philosophy', 'Literature', 'Sciences'], '17.5%'),

('United Kingdom', 'University of Cambridge', '#5 Global', 
'https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg?auto=compress&cs=tinysrgb&w=800',
'Historic university producing Nobel laureates',
'cam.ac.uk', '£24,000-£38,000/year',
ARRAY['Natural Sciences', 'Engineering', 'Mathematics', 'Medicine'], '21%'),

('United Kingdom', 'Imperial College London', '#6 Global', 
'https://images.pexels.com/photos/1143416/pexels-photo-1143416.jpeg?auto=compress&cs=tinysrgb&w=800',
'Leading STEM focused institution',
'imperial.ac.uk', '£32,000-£45,000/year',
ARRAY['Engineering', 'Medicine', 'Natural Sciences', 'Business'], '14%');

-- Insert universities for Canada
INSERT INTO universities (country_name, name, ranking, image_url, description, website, tuition_range, programs, acceptance_rate) VALUES
('Canada', 'University of Toronto', '#16 Global', 
'https://images.pexels.com/photos/1462631/pexels-photo-1462631.jpeg?auto=compress&cs=tinysrgb&w=800',
'Canada largest and most diverse university',
'utoronto.ca', 'CAD 45,000-55,000/year',
ARRAY['Medicine', 'Engineering', 'Computer Science', 'Business'], '43%'),

('Canada', 'McGill University', '#27 Global', 
'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800',
'Prestigious research university in Montreal',
'mcgill.ca', 'CAD 20,000-45,000/year',
ARRAY['Medicine', 'Law', 'Engineering', 'Sciences'], '46%'),

('Canada', 'University of British Columbia', '#34 Global', 
'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
'Beautiful campus with strong research programs',
'ubc.ca', 'CAD 35,000-50,000/year',
ARRAY['Engineering', 'Business', 'Sciences', 'Arts'], '52%');

-- Insert tourist attractions for France
INSERT INTO tourist_attractions (country_name, name, type, image_url, description, best_time_to_visit, location, rating) VALUES
('France', 'Eiffel Tower', 'monument',
'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=800',
'Iconic iron tower offering stunning Paris views',
'April-June, Sept-Oct', 'Paris', 4.9),

('France', 'Louvre Museum', 'museum',
'https://images.pexels.com/photos/2675269/pexels-photo-2675269.jpeg?auto=compress&cs=tinysrgb&w=800',
'World largest art museum, home to Mona Lisa',
'Year-round', 'Paris', 4.8),

('France', 'French Riviera', 'nature',
'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
'Glamorous Mediterranean coastline',
'May-September', 'Côte d''Azur', 4.7),

('France', 'Mont Saint-Michel', 'monument',
'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800',
'Medieval monastery on tidal island',
'May-September', 'Normandy', 4.8);

-- Insert tourist attractions for Italy
INSERT INTO tourist_attractions (country_name, name, type, image_url, description, best_time_to_visit, location, rating) VALUES
('Italy', 'Colosseum', 'monument',
'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=800',
'Ancient Roman amphitheater, one of New Seven Wonders',
'April-May, Sept-Oct', 'Rome', 4.9),

('Italy', 'Venice Canals', 'nature',
'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=800',
'Romantic waterways of the floating city',
'April-June, Sept-Nov', 'Venice', 4.8),

('Italy', 'Amalfi Coast', 'nature',
'https://images.pexels.com/photos/2422462/pexels-photo-2422462.jpeg?auto=compress&cs=tinysrgb&w=800',
'Stunning coastal cliffs with colorful villages',
'May-September', 'Southern Italy', 4.9),

('Italy', 'Trevi Fountain', 'monument',
'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=800',
'Beautiful Baroque fountain in Rome',
'Year-round', 'Rome', 4.7);

-- Insert tourist attractions for Japan
INSERT INTO tourist_attractions (country_name, name, type, image_url, description, best_time_to_visit, location, rating) VALUES
('Japan', 'Mount Fuji', 'nature',
'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800',
'Iconic snow-capped volcano and sacred mountain',
'July-September', 'Honshu', 4.9),

('Japan', 'Fushimi Inari Shrine', 'monument',
'https://images.pexels.com/photos/161212/fushimi-inari-taisha-shrine-kyoto-japan-temple-161212.jpeg?auto=compress&cs=tinysrgb&w=800',
'Famous shrine with thousands of red torii gates',
'March-May, Sept-Nov', 'Kyoto', 4.8),

('Japan', 'Tokyo Shibuya Crossing', 'city',
'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=800',
'World busiest pedestrian crossing',
'Year-round', 'Tokyo', 4.7),

('Japan', 'Cherry Blossom Gardens', 'nature',
'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
'Beautiful sakura blooms in spring',
'March-April', 'Various', 4.9);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_universities_country ON universities(country_name);
CREATE INDEX IF NOT EXISTS idx_attractions_country ON tourist_attractions(country_name);
