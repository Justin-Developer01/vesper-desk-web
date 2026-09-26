export type PlatformName = "kick" | "twitch" | "youtube";
export type LinkedPlatformStatus = "connected" | "expired" | "error";

export interface Profile {
  id: string;
  email: string | null;
  display_name: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserLinkedPlatform {
  id: string;
  user_id: string;
  platform: PlatformName;
  platform_user_id: string;
  platform_username: string | null;
  status: LinkedPlatformStatus;
  scopes: string[];
  token_expires_at: string | null;
  last_error: string | null;
  created_at: string;
  updated_at: string;
}
