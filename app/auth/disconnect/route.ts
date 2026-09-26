import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createServiceClient } from "@/lib/supabase/service";
import type { PlatformName } from "@/types/account";

const VALID_PLATFORMS: PlatformName[] = ["kick", "twitch", "youtube"];

export async function POST(request: Request) {
  const accountUrl = new URL("/account", request.url);

  // 1. Verify user session
  const supabase = await createClient();
  if (!supabase) {
    accountUrl.searchParams.set("error", "supabase_not_configured");
    return NextResponse.redirect(accountUrl);
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    accountUrl.searchParams.set("error", "unauthorized");
    return NextResponse.redirect(accountUrl);
  }

  // 2. Parse and validate platform from request form or body
  let platform: PlatformName = "kick";
  try {
    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await request.json();
      if (body.platform) platform = body.platform;
    } else {
      const formData = await request.formData();
      const p = formData.get("platform");
      if (p) platform = p.toString() as PlatformName;
    }
  } catch {
    // defaults to kick
  }

  if (!VALID_PLATFORMS.includes(platform)) {
    accountUrl.searchParams.set("error", "invalid_platform");
    return NextResponse.redirect(accountUrl);
  }

  // 3. Fail closed on token DB writes: service role client is strictly required
  const serviceClient = createServiceClient();
  if (!serviceClient) {
    console.error("Disconnect route: service role client is not configured");
    accountUrl.searchParams.set("error", "service_role_required");
    return NextResponse.redirect(accountUrl);
  }

  // Clear link row server-side via service role client
  const { error } = await serviceClient
    .from("linked_platforms")
    .delete()
    .eq("user_id", user.id)
    .eq("platform", platform);

  if (error) {
    console.error("Disconnect error:", error);
    accountUrl.searchParams.set("error", "disconnect_failed");
    return NextResponse.redirect(accountUrl);
  }

  accountUrl.searchParams.set("disconnected", platform);
  return NextResponse.redirect(accountUrl);
}
