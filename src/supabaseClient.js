import { createClient } from '@supabase/supabase-js';

// Using environment variables for Supabase URL and anon key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://vrrwvwdyvljlgdbwcsjt.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycnd2d2R5dmxqbGdkYndjc2p0Iiwicm9zZSI6ImFub24iLCJpYXQiOjE3MjY4MTEyODcsImV4cCI6MjA0MjM4NzI4N30.fGOGuAUk8re6FuyeTnObW3dr8UUkdGDMLyq35hkBWDY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
