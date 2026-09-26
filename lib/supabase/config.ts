export const NEXT_PUBLIC_SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ||
  "https://mhowgvkyfnzpciwcbivr.supabase.co";
export const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() || "";
export const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || "";
export const TOKEN_ENCRYPTION_KEY =
  process.env.TOKEN_ENCRYPTION_KEY?.trim() || "";

export const KICK_CLIENT_ID = process.env.KICK_CLIENT_ID?.trim() || "";
export const KICK_CLIENT_SECRET = process.env.KICK_CLIENT_SECRET?.trim() || "";
export const KICK_REDIRECT_URI = process.env.KICK_REDIRECT_URI?.trim() || "";

export function isSupabaseConfigured(): boolean {
  return Boolean(
    NEXT_PUBLIC_SUPABASE_URL &&
      NEXT_PUBLIC_SUPABASE_ANON_KEY &&
      !NEXT_PUBLIC_SUPABASE_URL.includes("placeholder") &&
      !NEXT_PUBLIC_SUPABASE_ANON_KEY.includes("placeholder")
  );
}

export function isKickOAuthConfigured(): boolean {
  return Boolean(
    KICK_CLIENT_ID &&
      KICK_CLIENT_SECRET &&
      !KICK_CLIENT_ID.includes("placeholder")
  );
}

export function isTokenEncryptionConfigured(): boolean {
  return Boolean(TOKEN_ENCRYPTION_KEY && TOKEN_ENCRYPTION_KEY.length >= 32);
}
