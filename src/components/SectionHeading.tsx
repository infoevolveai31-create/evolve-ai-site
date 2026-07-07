export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-4 py-1.5 text-xs font-medium tracking-wide text-fg-muted uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-teal" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`flex flex-col gap-5 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-fg max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-fg-muted max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
