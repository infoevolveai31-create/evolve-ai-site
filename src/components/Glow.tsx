export function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-[110px] opacity-40 ${className}`}
    />
  );
}
