type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <rect width="32" height="32" rx="8" fill="#0c1118" />
      <rect x="5.5" y="7.5" width="21" height="17" rx="3" stroke="#8ecfff" strokeWidth="1.4" />
      <path d="M5.5 12.2h21" stroke="#8ecfff" strokeWidth="1.2" />
      <rect x="8" y="14.4" width="16" height="7.4" rx="1.3" fill="#1a3045" />
    </svg>
  );
}
