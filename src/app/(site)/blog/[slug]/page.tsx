import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Glow } from "@/components/Glow";
import { blogPosts } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <Glow className="h-[380px] w-[380px] bg-teal/20 -top-32 left-1/3" />
        <Container className="relative pt-20 pb-16 sm:pt-28 max-w-3xl">
          <Link href="/blog" className="text-sm text-fg-muted hover:text-fg">
            ← All posts
          </Link>
          <div className="mt-6 flex items-center gap-3 text-xs text-fg-faint">
            <span className="text-teal font-medium uppercase tracking-wide">{post.category}</span>
            <span>&middot;</span>
            <span>{formatDate(post.date)}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            {post.title}
          </h1>
        </Container>
      </section>

      <section className="pb-24">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-6">
            {post.content.map((p, i) => (
              <p key={i} className="text-fg-muted leading-relaxed text-base">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-16 relative overflow-hidden rounded-3xl border border-border bg-bg-elevated p-10 sm:p-14 text-center">
            <Glow className="h-[320px] w-[320px] bg-blue/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative flex flex-col items-center gap-5">
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight max-w-xl">
                Want to talk through how this applies to your team?
              </h3>
              <Button href="/contact" size="lg">
                Book a strategy call
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
