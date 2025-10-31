import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://notskadnchxmihtvlnpl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vdHNrYWRuY2h4bWlodHZsbnBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3ODY5NDgsImV4cCI6MjA3MjM2Mjk0OH0.G21K6WATV66QN5I8Cjby1tU82am0VnoHCMLO3A7NWwc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
