"use client";

import { useState } from "react";

interface IdentityRowProps {
  email: string | null;
  displayName: string | null;
}

export function IdentityRow({ email, displayName }: IdentityRowProps) {
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = () => {
    setIsSigningOut(true);
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "/auth/signout";
    document.body.appendChild(form);
    form.submit();
  };

  const initial = (displayName || email || "V")[0].toUpperCase();

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-line pb-6">
      <div className="flex items-center gap-3.5">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink-raised border border-line text-sm font-medium text-[#7ec8d8]">
          {initial}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-paper">
              {displayName || email?.split("@")[0] || "Vesper User"}
            </span>
            <span className="rounded-full border border-[#7ec8d8]/40 bg-[#7ec8d8]/10 px-2 py-0.5 text-[0.65rem] font-medium text-[#7ec8d8]">
              Account
            </span>
          </div>
          {email && <p className="text-xs text-muted">{email}</p>}
        </div>
      </div>

      <div>
        <button
          type="button"
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="cursor-pointer text-xs text-muted transition-colors hover:text-paper disabled:opacity-50"
        >
          {isSigningOut ? "Signing out…" : "Sign out"}
        </button>
      </div>
    </div>
  );
}
