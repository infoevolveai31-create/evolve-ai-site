import Link from "next/link";

export function LogoMark({ size = 36 }: { size?: number }) {
  // Funnel mark: leads pour in, a converted client drops out the bottom.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-teal"
      aria-hidden="true"
    >
      <path
        d="M22 26 H78 L58 60 V74 H42 V60 Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <line x1="31" y1="38" x2="69" y2="38" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <line x1="40" y1="49" x2="60" y2="49" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <circle cx="50" cy="90" r="5.5" fill="currentColor" />
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
