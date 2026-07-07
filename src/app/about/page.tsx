import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import { Glow } from "@/components/Glow";

export const metadata: Metadata = {
  title: "About",
  description: "Evolve AI's mission, values, and the team building applied AI systems for modern companies.",
};

const values = [
  { title: "Outcomes over demos", description: "We measure success in production impact, not proof-of-concept applause." },
  { title: "Honest about limits", description: "If AI isn't the right tool for a problem, we'll tell you — even if it costs us the deal." },
  { title: "Built to last", description: "We design systems your team can maintain, not black boxes only we understand." },
  { title: "Security first", description: "Guardrails and data protection are part of the architecture, not an afterthought." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <Glow className="h-[420px] w-[420px] bg-indigo/20 -top-32 right-1/4" />
        <Container className="relative pt-20 pb-20 sm:pt-28">
          <div className="max-w-3xl">
            <Eyebrow>About Evolve AI</Eyebrow>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              We started Evolve AI because most AI projects never leave the pilot stage.
            </h1>
            <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-2xl">
              Too many teams spend six figures on AI initiatives that produce a
              nice demo and no lasting change. We built Evolve AI to close that
              gap — pairing applied ML expertise with the operational discipline
              to actually ship and maintain what we build.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">Our mission</h2>
              <p className="text-fg-muted leading-relaxed">
                Make advanced AI dependable enough that businesses can build their
                operations around it, not just experiment with it on the side.
              </p>
              <p className="text-fg-muted leading-relaxed">
                We&apos;re engineers first. Every recommendation we make is grounded in
                what we&apos;d be comfortable shipping into our own production systems.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">Our story</h2>
              <p className="text-fg-muted leading-relaxed">
                Evolve AI was founded in 2023 by a team of ML engineers who spent
                years building internal AI infrastructure at large tech and
                logistics companies. After watching too many outside vendors ship
                fragile prototypes, we set out to build the studio we wished we
                could have hired.
              </p>
              <p className="text-fg-muted leading-relaxed">
                Today we work with teams across logistics, financial services,
                and healthcare — industries where &ldquo;good enough&rdquo; AI simply
                isn&apos;t good enough.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 border-y border-border bg-bg-elevated/30">
        <Container>
          <SectionHeading eyebrow="What we believe" title="The principles behind every engagement" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-bg-elevated p-6">
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="text-sm text-fg-muted leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated p-12 sm:p-16 text-center">
            <Glow className="h-[400px] w-[400px] bg-blue/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
                Want to work with a team that ships?
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
