import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import {
  NEXT_PUBLIC_SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  isSupabaseConfigured,
} from "./config";

export function createServiceClient() {
  if (!isSupabaseConfigured() || !SUPABASE_SERVICE_ROLE_KEY) {
    return null;
  }

  return createSupabaseClient(
    NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );
}
