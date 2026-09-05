import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import { Glow } from "@/components/Glow";
import { services, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "What We Do",
  description: "Done-for-you funnels for online coaches: landing pages, booking, and follow-up automation that book more calls.",
};

const process = [
  { step: "01", title: "Free audit", description: "We map your current funnel and show you exactly where you're losing clients." },
  { step: "02", title: "Plan", description: "We design your client machine — the pages, booking, and follow-up you're missing." },
  { step: "03", title: "Build", description: "We build it end to end and wire it into the tools you already use. Live in 2–3 weeks." },
  { step: "04", title: "Optimize", description: "We track conversions and keep tuning so booked calls climb month after month." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <Glow className="h-[420px] w-[420px] bg-teal/20 -top-32 left-1/4" />
        <Container className="relative pt-20 pb-20 sm:pt-28">
          <div className="max-w-3xl">
            <Eyebrow>What we do</Eyebrow>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Everything that turns your followers into <span className="text-gradient">clients</span>.
            </h1>
            <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-2xl">
              We don&apos;t sell generic marketing. We build the funnel system that books
              calls for online coaches — attract, capture, convert, follow-up.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Get your free audit
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col gap-20">
            {services.map((s, i) => (
              <div
                key={s.slug}
                id={s.slug}
                className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="flex flex-col gap-5">
                  <span className="font-display text-sm font-semibold text-teal">{`0${i + 1}`}</span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">{s.name}</h2>
                  <p className="text-fg-muted leading-relaxed">{s.description}</p>
                  <ul className="flex flex-col gap-3 mt-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm text-fg">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal text-xs">
                          ✓
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative rounded-2xl border border-border bg-bg-elevated p-10 aspect-[4/3] flex items-center justify-center">
                  <div className="absolute inset-0 bg-grid opacity-40 rounded-2xl" />
                  <div className="relative h-24 w-24 rounded-2xl bg-gradient-to-br from-teal/20 to-blue/20 border border-border flex items-center justify-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal to-blue" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 border-y border-border bg-bg-elevated/30">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="From audit to booked calls in 4 steps"
            description="No drawn-out projects. We map the leaks, build the fix, and keep it converting."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="flex flex-col gap-3 rounded-2xl border border-border bg-bg-elevated p-6">
                <span className="font-display text-3xl font-bold text-fg-faint">{p.step}</span>
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-fg-muted leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="Questions" title="Common questions from coaches" />
          <div className="mt-14 flex flex-col divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-fg">
                  {f.question}
                  <span className="shrink-0 text-fg-faint transition-transform group-open:rotate-45 text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm text-fg-muted leading-relaxed">{f.answer}</p>
              </details>
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
                Not sure what you need? Start with a free funnel audit.
              </h2>
              <Button href="/contact" size="lg">
                Get your free audit
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
