import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const accountUrl = new URL("/account", request.url);
  const supabase = await createClient();

  if (supabase) {
    await supabase.auth.signOut();
  }

  return NextResponse.redirect(accountUrl);
}
