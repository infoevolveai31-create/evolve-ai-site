"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Button } from "./Button";

const links = [
  { href: "/services", label: "Services" },
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-fg ${
                pathname === l.href ? "text-fg" : "text-fg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Button href="/contact" variant="secondary" size="sm">
            Sign in
          </Button>
          <Button href="/contact" variant="primary" size="sm">
            Book a Call
          </Button>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {open ? (
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M1 4H17M1 9H17M1 14H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass border-t border-border px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-base font-medium text-fg-muted hover:text-fg">
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <Button href="/contact" variant="secondary">
              Sign in
            </Button>
            <Button href="/contact" variant="primary">
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
