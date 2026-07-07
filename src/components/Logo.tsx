import Link from "next/link";

export function LogoMark({ size = 36 }: { size?: number }) {
  const id = "logo-grad";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="20" y1="0" x2="80" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#17d9a3" />
          <stop offset="55%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <path
        d="M50 8
           C 30 8, 16 22, 16 36
           C 16 50, 30 58, 50 58
           C 70 58, 84 66, 84 80
           C 84 94, 70 96, 50 96
           C 30 96, 16 88, 16 74"
        stroke={`url(#${id})`}
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="50" cy="8" r="8" fill="#17d9a3" />
      <circle cx="20" cy="46" r="6" fill="#3b82f6" />
      <circle cx="80" cy="46" r="6" fill="#17d9a3" opacity="0.85" />
    </svg>
  );
}

export function Logo({ size = 30, withWordmark = true }: { size?: number; withWordmark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
      <LogoMark size={size} />
      {withWordmark && (
        <span className="font-display font-bold tracking-tight text-lg leading-none">
          <span className="text-fg">Evolve</span>{" "}
          <span className="text-teal">AI</span>
        </span>
      )}
    </Link>
  );
}
