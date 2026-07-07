import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { Glow } from "@/components/Glow";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on applied AI strategy, engineering, and operations from the Evolve AI team.",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <Glow className="h-[420px] w-[420px] bg-indigo/20 -top-32 left-1/4" />
        <Container className="relative pt-20 pb-16 sm:pt-28">
          <div className="max-w-3xl">
            <Eyebrow>Resources</Eyebrow>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Notes on applied AI.
            </h1>
            <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-2xl">
              Practical thinking from our team, written for operators — not for
              search engines.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-5 rounded-2xl border border-border bg-bg-elevated p-7 hover:border-teal/40 transition-colors"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-teal">{post.category}</span>
                <h2 className="font-display text-xl font-semibold leading-snug">{post.title}</h2>
                <p className="text-sm text-fg-muted leading-relaxed">{post.excerpt}</p>
                <div className="mt-auto flex items-center gap-3 pt-4 border-t border-border text-xs text-fg-faint">
                  <span>{formatDate(post.date)}</span>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
