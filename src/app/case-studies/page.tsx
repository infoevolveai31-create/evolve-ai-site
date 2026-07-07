import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionHeading";
import { Glow } from "@/components/Glow";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real AI deployments and the measurable results they produced for Evolve AI clients.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <Glow className="h-[420px] w-[420px] bg-teal/20 -top-32 left-1/3" />
        <Container className="relative pt-20 pb-16 sm:pt-28">
          <div className="max-w-3xl">
            <Eyebrow>Case Studies</Eyebrow>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Deployments, not demos.
            </h1>
            <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-2xl">
              Every project below is live in production today, running against
              real operational data.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="flex flex-col gap-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group grid gap-8 rounded-2xl border border-border bg-bg-elevated p-8 lg:grid-cols-3 hover:border-teal/40 transition-colors"
              >
                <div className="lg:col-span-2 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-wide text-teal">{cs.industry}</span>
                    <span className="text-xs text-fg-faint">{cs.client}</span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold leading-snug">{cs.title}</h2>
                  <p className="text-sm text-fg-muted leading-relaxed">{cs.summary}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-teal opacity-0 group-hover:opacity-100 transition-opacity">
                    Read case study →
                  </span>
                </div>
                <div className="flex flex-row lg:flex-col justify-between gap-4 border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col">
                      <span className="font-display text-2xl font-bold text-gradient">{m.value}</span>
                      <span className="text-xs text-fg-faint">{m.label}</span>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated p-12 sm:p-16 text-center">
            <Glow className="h-[400px] w-[400px] bg-indigo/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
                Want results like these for your team?
              </h2>
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
