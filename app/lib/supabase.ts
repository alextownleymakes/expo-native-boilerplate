import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@env"; // Using react-native-dotenv

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
