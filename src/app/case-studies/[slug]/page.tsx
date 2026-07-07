import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Glow } from "@/components/Glow";
import { caseStudies } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <Glow className="h-[420px] w-[420px] bg-teal/20 -top-32 left-1/3" />
        <Container className="relative pt-20 pb-16 sm:pt-28">
          <Link href="/case-studies" className="text-sm text-fg-muted hover:text-fg">
            ← All case studies
          </Link>
          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-wide text-teal">{cs.industry}</span>
              <span className="text-xs text-fg-faint">{cs.client}</span>
            </div>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
              {cs.title}
            </h1>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3 max-w-2xl">
            {cs.metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-border bg-bg-elevated p-5">
                <span className="font-display text-2xl font-bold text-gradient">{m.value}</span>
                <p className="mt-1 text-xs text-fg-faint">{m.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="font-display text-xl font-semibold text-fg mb-3">The challenge</h2>
              <p className="text-fg-muted leading-relaxed">{cs.challenge}</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-fg mb-3">The solution</h2>
              <p className="text-fg-muted leading-relaxed">{cs.solution}</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-fg mb-3">The result</h2>
              <p className="text-fg-muted leading-relaxed">{cs.result}</p>
            </div>
          </div>

          <div className="mt-16 relative overflow-hidden rounded-3xl border border-border bg-bg-elevated p-10 sm:p-14 text-center">
            <Glow className="h-[320px] w-[320px] bg-blue/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative flex flex-col items-center gap-5">
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight max-w-xl">
                Curious what this could look like for your team?
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
