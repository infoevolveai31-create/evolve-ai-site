import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap";

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-teal to-blue text-[#06140f] font-semibold hover:brightness-110 hover:scale-[1.02] shadow-[0_0_0_1px_rgba(23,217,163,0.3),0_8px_30px_-8px_rgba(23,217,163,0.5)]",
  secondary:
    "bg-bg-elevated text-fg border border-border hover:border-teal/50 hover:bg-bg-elevated-2",
  ghost: "text-fg-muted hover:text-fg",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
