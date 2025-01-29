import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cyuucsgruyivyzlwcrah.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5dXVjc2dydXlpdnl6bHdjcmFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3OTQ2NTEsImV4cCI6MjA1MzM3MDY1MX0.Uq2yeLIQhBetr5JDSwBvmB7_g1gtXDEPOQVNbJ7pAvE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
