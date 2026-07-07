import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./Container";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/automation_by_abhi/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/AIBYABHI",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.9 2H22l-7.6 8.7L23.3 22H16.9l-5-6.5L6.1 22H3l8.2-9.3L2.9 2h6.6l4.5 6 4.9-6Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Offerings",
    links: [
      { href: "/services", label: "Services" },
      { href: "/product", label: "Product" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/contact", label: "Privacy Policy" },
      { href: "/contact", label: "Terms of Service" },
      { href: "/contact", label: "Security" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated/40 mt-32">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4">
            <Logo />
            <p className="text-sm text-fg-muted max-w-xs leading-relaxed">
              Evolve AI designs, builds, and operates AI agents and automation
              for teams that need results, not experiments.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted hover:text-teal hover:border-teal/50 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-fg">{col.title}</h4>
              {col.links.map((l, i) => (
                <Link
                  key={i}
                  href={l.href}
                  className="text-sm text-fg-muted hover:text-fg transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-fg">Stay in the loop</h4>
            <p className="text-sm text-fg-muted">
              Get occasional notes on applied AI, sent when we have something worth saying.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="min-w-0 flex-1 rounded-full border border-border bg-bg px-4 py-2.5 text-sm text-fg placeholder:text-fg-faint focus:outline-none focus:border-teal/50"
              />
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-teal to-blue px-5 py-2.5 text-sm font-semibold text-[#06140f] hover:brightness-110 transition"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-fg-faint">
            &copy; {new Date().getFullYear()} Evolve AI, Inc. All rights reserved.
          </p>
          <p className="text-xs text-fg-faint">Designed and built by Evolve AI.</p>
        </div>
      </Container>
    </footer>
  );
}
