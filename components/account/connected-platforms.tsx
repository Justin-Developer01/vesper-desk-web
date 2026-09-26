"use client";

import { useState } from "react";
import type { PlatformName, UserLinkedPlatform } from "@/types/account";

interface ConnectedPlatformsProps {
  linkedPlatforms: UserLinkedPlatform[];
  isKickConfigured: boolean;
}

interface PlatformDefinition {
  id: PlatformName;
  name: string;
  isAvailable: boolean;
  comingSoonNote?: string;
}

const PLATFORMS: PlatformDefinition[] = [
  {
    id: "kick",
    name: "Kick",
    isAvailable: true,
  },
  {
    id: "twitch",
    name: "Twitch",
    isAvailable: false,
    comingSoonNote: "Coming soon",
  },
  {
    id: "youtube",
    name: "YouTube",
    isAvailable: false,
    comingSoonNote: "Coming soon",
  },
];

export function ConnectedPlatforms({
  linkedPlatforms,
  isKickConfigured,
}: ConnectedPlatformsProps) {
  // Find linked row for Kick
  const kickLink = linkedPlatforms.find((lp) => lp.platform === "kick");

  // Track connecting state for Kick
  const [isConnecting, setIsConnecting] = useState(false);
  // Track disconnect confirmation state (inline confirm per brief)
  const [confirmingDisconnect, setConfirmingDisconnect] = useState<PlatformName | null>(null);
  const [isDisconnecting, setIsDisconnecting] = useState(false);

  const handleConnectKick = () => {
    setIsConnecting(true);
    window.location.href = "/auth/kick";
  };

  const handleDisconnect = async (platform: PlatformName) => {
    setIsDisconnecting(true);
    try {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "/auth/disconnect";

      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "platform";
      input.value = platform;
      form.appendChild(input);

      document.body.appendChild(form);
      form.submit();
    } catch {
      setIsDisconnecting(false);
      setConfirmingDisconnect(null);
    }
  };

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-base font-medium tracking-tight text-paper">
          Connected platforms
        </h2>
        <p className="mt-1 text-xs text-muted">
          Link streaming platforms for chat and live features. Platform credentials remain
          secure on the server and are never sent to the browser.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {/* Kick Chip */}
        <div
          className={`flex items-center gap-3 rounded-full px-4 py-2 text-sm ${
            kickLink?.status === "connected"
              ? "frost-chip frost-chip-connected"
              : kickLink?.status === "error" || kickLink?.status === "expired"
              ? "frost-chip frost-chip-error"
              : "frost-chip"
          }`}
        >
          {/* Status Indicator / Monochrome Mark */}
          <span className="flex items-center gap-2">
            {kickLink?.status === "connected" ? (
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-[#7ec8d8] shadow-[0_0_8px_rgba(126,200,216,0.8)]"
              />
            ) : kickLink?.status === "error" || kickLink?.status === "expired" ? (
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-[#e8a598]"
              />
            ) : (
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-faint/50"
              />
            )}
            <span className="font-medium text-paper">Kick</span>
          </span>

          {/* Separator */}
          <span className="text-line">·</span>

          {/* States & Actions */}
          {isConnecting ? (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <span
                aria-hidden="true"
                className="inline-block size-3 animate-spin rounded-full border border-muted border-t-transparent motion-reduce:animate-none"
              />
              Connecting…
            </span>
          ) : kickLink?.status === "connected" ? (
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#7ec8d8]">
                {kickLink.platform_username
                  ? `Connected (@${kickLink.platform_username})`
                  : "Connected"}
              </span>
              <span className="text-line">·</span>
              {confirmingDisconnect === "kick" ? (
                <div className="flex items-center gap-1.5">
                  <span className="text-muted">Disconnect?</span>
                  <button
                    type="button"
                    onClick={() => handleDisconnect("kick")}
                    disabled={isDisconnecting}
                    className="cursor-pointer text-[#e8a598] underline underline-offset-2 hover:text-paper disabled:opacity-50"
                  >
                    {isDisconnecting ? "…" : "Yes"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmingDisconnect(null)}
                    disabled={isDisconnecting}
                    className="cursor-pointer text-muted hover:text-paper"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmingDisconnect("kick")}
                  className="cursor-pointer text-muted transition-colors hover:text-paper"
                >
                  Disconnect
                </button>
              )}
            </div>
          ) : kickLink?.status === "error" || kickLink?.status === "expired" ? (
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#e8a598]">
                {kickLink.last_error || "Expired"}
              </span>
              <span className="text-line">·</span>
              <button
                type="button"
                onClick={handleConnectKick}
                disabled={!isKickConfigured}
                className="cursor-pointer font-medium text-paper underline underline-offset-2 hover:text-[#7ec8d8] disabled:cursor-not-allowed disabled:text-muted disabled:no-underline"
              >
                Reconnect
              </button>
            </div>
          ) : !isKickConfigured ? (
            <span className="text-xs text-muted" title="Kick OAuth credentials not set in environment">
              Setup required
            </span>
          ) : (
            <button
              type="button"
              onClick={handleConnectKick}
              className="cursor-pointer text-xs font-medium text-paper transition-colors hover:text-[#7ec8d8]"
            >
              Connect
            </button>
          )}
        </div>

        {/* Coming soon slots (Twitch & YouTube per brief) */}
        {PLATFORMS.filter((p) => !p.isAvailable).map((platform) => (
          <div
            key={platform.id}
            className="frost-chip flex items-center gap-2.5 rounded-full px-4 py-2 text-sm opacity-60"
          >
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-faint/30"
            />
            <span className="font-medium text-paper">{platform.name}</span>
            <span className="text-line">·</span>
            <span className="text-xs text-muted">
              {platform.comingSoonNote || "Coming soon"}
            </span>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted leading-relaxed">
        Twitch Drops aren’t available in Vesper right now. Linked accounts may still help with presence or points where Twitch allows.
      </p>
    </section>
  );
}
