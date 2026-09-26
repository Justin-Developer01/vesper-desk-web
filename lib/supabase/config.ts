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
  if (!TOKEN_ENCRYPTION_KEY) return false;
  if (/placeholder/i.test(TOKEN_ENCRYPTION_KEY)) return false;
  // Valid if 64 hex characters (32 bytes) or any key string of length >= 32
  return (
    /^[0-9a-fA-F]{64}$/.test(TOKEN_ENCRYPTION_KEY) ||
    TOKEN_ENCRYPTION_KEY.length >= 32
  );
}
