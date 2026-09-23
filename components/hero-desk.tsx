import Image from "next/image";
import {
  Focus,
  Gauge,
  LayoutGrid,
  MessageSquareText,
  PictureInPicture2,
  Settings,
  X,
} from "lucide-react";
import { heroScreenshotSrc } from "@/lib/site";

const tools = [
  { icon: LayoutGrid, active: false },
  { icon: Focus, active: true },
  { icon: MessageSquareText, active: true },
  { icon: Gauge, active: false },
  { icon: PictureInPicture2, active: false },
  { icon: Settings, active: false },
];

const sideTiles = [
  { name: "harbor lights", scene: "scene-grid" },
  { name: "slow tide", scene: "scene-field" },
  { name: "kiln works", scene: "scene-studio" },
];

const chat = [
  { user: "mira_k", color: "#8ecfff", text: "this set is so calm" },
  { user: "otto", color: "#f5b37a", text: "hello from Lisbon" },
  { user: "fennel", color: "#b69cff", text: "the lights on that shot" },
  { user: "juno_r", color: "#7fe0b0", text: "is this the new track?" },
  { user: "sable", color: "#ff9fb2", text: "perfect for working to" },
  { user: "mira_k", color: "#8ecfff", text: "saving this layout" },
];

const caption =
  "Vesper Desk with four streams open: one large stream in focus, three smaller streams beside it, and chat open on the right.";

export function HeroDesk() {
  return (
    <figure className="m-0">
      {heroScreenshotSrc ? (
        <div className="desk">
          <Image
            src={heroScreenshotSrc}
            alt={caption}
            width={1600}
            height={900}
            sizes="(max-width: 1160px) 100vw, 1120px"
            loading="eager"
            fetchPriority="high"
            className="desk-photo"
          />
        </div>
      ) : (
        <div className="desk" role="img" aria-label={caption}>
          <div className="desk-bar">
            <strong>north room</strong>
            <span className="desk-title">Late-night synth set</span>
            <div className="desk-tools">
              {tools.map(({ icon: Icon, active }, index) => (
                <span key={index} className="desk-tool" data-active={active || undefined}>
                  <Icon className="size-[0.95rem]" strokeWidth={1.75} />
                </span>
              ))}
            </div>
          </div>
          <div className="desk-body">
            <div className="desk-stage">
              <div className="tile tile-main scene-dusk">
                <span className="tile-meta">
                  <span className="live">LIVE</span>
                  north room
                </span>
              </div>
              {sideTiles.map((tile) => (
                <div key={tile.name} className={`tile ${tile.scene}`}>
                  <span className="tile-meta">{tile.name}</span>
                </div>
              ))}
            </div>
            <div className="desk-chat">
              <div className="chat-head">
                Chat
                <X className="size-3.5 text-faint" strokeWidth={1.75} />
              </div>
              <ul className="chat-lines">
                {chat.map((line, index) => (
                  <li key={index}>
                    <b style={{ color: line.color }}>{line.user}</b> {line.text}
                  </li>
                ))}
              </ul>
              <div className="chat-input">Send a message</div>
            </div>
          </div>
        </div>
      )}
      <figcaption className="mt-5 text-center text-sm text-faint">
        Focus on one stream, keep the others in view, and open chat without covering the video.
      </figcaption>
    </figure>
  );
}
