"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

interface FrostAuthCardProps {
  isConfigured: boolean;
}

export function FrostAuthCard({ isConfigured }: FrostAuthCardProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"magic_link" | "password">("magic_link");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  if (!isConfigured) {
    return (
      <div className="frost-card rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 text-paper">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-[#7ec8d8]"
          />
          <h2 className="text-lg font-medium tracking-tight">Vesper Account</h2>
        </div>
        <p className="mt-3 text-sm text-muted leading-relaxed">
          Supabase environment variables are not configured on this instance.
          Set <code className="rounded bg-ink-raised px-1.5 py-0.5 text-xs text-paper">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
          <code className="rounded bg-ink-raised px-1.5 py-0.5 text-xs text-paper">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> in{" "}
          <code className="rounded bg-ink-raised px-1.5 py-0.5 text-xs text-paper">.env.local</code> to activate account sign-in.
        </p>
      </div>
    );
  }

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setMessage(null);

    const supabase = createClient();
    if (!supabase) {
      setMessage({
        type: "error",
        text: "Supabase client is not available.",
      });
      setIsLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setIsLoading(false);

    if (error) {
      setMessage({ type: "error", text: error.message });
    } else {
      setMessage({
        type: "success",
        text: "Check your email for the magic sign-in link.",
      });
    }
  };

  const handlePasswordAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsLoading(true);
    setMessage(null);

    const supabase = createClient();
    if (!supabase) {
      setMessage({
        type: "error",
        text: "Supabase client is not available.",
      });
      setIsLoading(false);
      return;
    }

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      setIsLoading(false);
      if (error) {
        setMessage({ type: "error", text: error.message });
      } else {
        setMessage({
          type: "success",
          text: "Account created. Please check your email to confirm.",
        });
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setIsLoading(false);
      if (error) {
        setMessage({ type: "error", text: error.message });
      } else {
        window.location.href = "/account";
      }
    }
  };

  return (
    <div className="frost-card rounded-2xl p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-paper">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-[#7ec8d8] shadow-[0_0_8px_rgba(126,200,216,0.8)]"
          />
          <h2 className="text-lg font-medium tracking-tight">
            {mode === "magic_link"
              ? "Sign in to Vesper"
              : isSignUp
              ? "Create Vesper account"
              : "Sign in to Vesper"}
          </h2>
        </div>
        <button
          type="button"
          onClick={() => {
            setMode(mode === "magic_link" ? "password" : "magic_link");
            setMessage(null);
          }}
          className="cursor-pointer text-xs text-muted transition-colors hover:text-paper"
        >
          {mode === "magic_link" ? "Use password" : "Use magic link"}
        </button>
      </div>

      <p className="mt-2 text-xs text-muted">
        {mode === "magic_link"
          ? "We will email you a secure, passwordless sign-in link."
          : isSignUp
          ? "Create a Vesper account using your email and password."
          : "Sign in using your email and password."}
      </p>

      {message && (
        <div
          className={`mt-4 rounded-lg px-3.5 py-2.5 text-xs ${
            message.type === "success"
              ? "border border-[#7ec8d8]/40 bg-[#7ec8d8]/10 text-paper"
              : "border border-[#e8a598]/40 bg-[#e8a598]/10 text-[#e8a598]"
          }`}
        >
          {message.text}
        </div>
      )}

      {mode === "magic_link" ? (
        <form onSubmit={handleMagicLink} className="mt-5 space-y-3.5">
          <div>
            <label
              htmlFor="magic-email"
              className="block text-xs font-medium text-muted"
            >
              Email address
            </label>
            <input
              id="magic-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              className="mt-1.5 w-full rounded-lg border border-line bg-ink px-3.5 py-2 text-sm text-paper placeholder-faint/60 transition-colors focus:border-[#7ec8d8] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary w-full cursor-pointer text-sm font-medium disabled:opacity-50"
          >
            {isLoading ? "Sending link…" : "Send magic link"}
          </button>
        </form>
      ) : (
        <form onSubmit={handlePasswordAuth} className="mt-5 space-y-3.5">
          <div>
            <label
              htmlFor="pwd-email"
              className="block text-xs font-medium text-muted"
            >
              Email address
            </label>
            <input
              id="pwd-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              className="mt-1.5 w-full rounded-lg border border-line bg-ink px-3.5 py-2 text-sm text-paper placeholder-faint/60 transition-colors focus:border-[#7ec8d8] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="pwd-pass"
              className="block text-xs font-medium text-muted"
            >
              Password
            </label>
            <input
              id="pwd-pass"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1.5 w-full rounded-lg border border-line bg-ink px-3.5 py-2 text-sm text-paper placeholder-faint/60 transition-colors focus:border-[#7ec8d8] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary w-full cursor-pointer text-sm font-medium disabled:opacity-50"
          >
            {isLoading
              ? "Please wait…"
              : isSignUp
              ? "Create account"
              : "Sign in"}
          </button>

          <div className="pt-2 text-center">
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setMessage(null);
              }}
              className="cursor-pointer text-xs text-muted hover:text-paper"
            >
              {isSignUp
                ? "Already have an account? Sign in"
                : "Need an account? Sign up"}
            </button>
          </div>
        </form>
      )}

      <div className="mt-6 border-t border-line/60 pt-4 text-center text-xs text-faint">
        By continuing, you agree to Vesper Desk&apos;s{" "}
        <Link href="/legal/terms" className="text-muted underline underline-offset-2 hover:text-paper">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/legal/privacy" className="text-muted underline underline-offset-2 hover:text-paper">
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  );
}
