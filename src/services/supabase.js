import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vvbjzayordzfzmfrmyde.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2Ymp6YXlvcmR6ZnptZnJteWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2NDkxMDUsImV4cCI6MjAyMjIyNTEwNX0.9AroPa51nBn7tQ18xmhAJqV6VFRtDzDvswtxPuO85Fk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
