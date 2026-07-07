import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import { Glow } from "@/components/Glow";
import { services, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "AI strategy, custom automation, model integration, and managed support from Evolve AI.",
};

const process = [
  { step: "01", title: "Discover", description: "We audit your workflows, data, and systems to find the highest-ROI opportunities." },
  { step: "02", title: "Design", description: "We scope a solution architecture and get alignment before writing production code." },
  { step: "03", title: "Build", description: "Our engineers ship in weekly increments with working demos, not slide decks." },
  { step: "04", title: "Operate", description: "We monitor, tune, and iterate post-launch so performance holds up at scale." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <Glow className="h-[420px] w-[420px] bg-teal/20 -top-32 left-1/4" />
        <Container className="relative pt-20 pb-20 sm:pt-28">
          <div className="max-w-3xl">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              AI expertise, applied to your <span className="text-gradient">actual</span> business.
            </h1>
            <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-2xl">
              We don&apos;t sell generic AI transformation. Every engagement is scoped
              around specific workflows, specific data, and a specific ROI target.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Book a strategy call
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
            title="A process built to ship, not stall"
            description="No 6-month discovery phases. We move in tight cycles with visible progress every step."
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
          <SectionHeading eyebrow="Questions" title="Common questions about our engagements" />
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
                Not sure which service fits? Let&apos;s figure it out together.
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
