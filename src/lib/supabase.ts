import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface VisaRoute {
  id: string;
  from_country: string;
  to_country: string;
  visa_required: boolean;
  visa_type: string;
  processing_time: string;
  success_rate: string;
  created_at: string;
  updated_at: string;
}
