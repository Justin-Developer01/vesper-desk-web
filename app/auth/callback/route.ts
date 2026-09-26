import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

function getSafeRedirectPath(candidate: string | null): string {
  const defaultPath = "/account";
  if (!candidate) return defaultPath;

  // Must start with exactly one '/' and not '//' (reject protocol-relative)
  if (!candidate.startsWith("/") || candidate.startsWith("//")) {
    return defaultPath;
  }

  // Reject colon before the first slash or query/hash (prevents javascript:, data:, https: etc.)
  const firstSlashOrEnd = candidate.indexOf("/", 1);
  const segment = firstSlashOrEnd === -1 ? candidate : candidate.slice(0, firstSlashOrEnd);
  if (segment.includes(":")) {
    return defaultPath;
  }

  try {
    // Parse candidate as relative against dummy origin to ensure pathname remains safe relative
    const parsed = new URL(candidate, "http://localhost");
    if (!parsed.pathname.startsWith("/") || parsed.pathname.startsWith("//")) {
      return defaultPath;
    }
    return `${parsed.pathname}${parsed.search}${parsed.hash}`;
  } catch {
    return defaultPath;
  }
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const rawNext = requestUrl.searchParams.get("next");
  const safeNext = getSafeRedirectPath(rawNext);

  if (code) {
    const supabase = await createClient();
    if (supabase) {
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (error) {
        console.error("Auth callback error:", error);
        return NextResponse.redirect(
          new URL(`/account?error=${encodeURIComponent(error.message)}`, request.url)
        );
      }
    }
  }

  return NextResponse.redirect(new URL(safeNext, request.url));
}
