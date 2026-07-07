import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import { Glow } from "@/components/Glow";
import { pricingPlans, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Engagement tiers for Evolve AI's applied AI services and platform.",
};

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <Glow className="h-[420px] w-[420px] bg-blue/20 -top-32 right-1/4" />
        <Container className="relative pt-20 pb-16 sm:pt-28 text-center">
          <div className="mx-auto max-w-3xl flex flex-col items-center gap-6">
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Straightforward engagement tiers.
            </h1>
            <p className="text-lg text-fg-muted leading-relaxed max-w-2xl">
              Every engagement starts with a scoping call so pricing reflects your
              actual needs — these tiers are a starting point, not a rigid menu.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3 items-start">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col gap-6 rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-teal/50 bg-bg-elevated relative shadow-[0_0_0_1px_rgba(23,217,163,0.25),0_20px_60px_-20px_rgba(23,217,163,0.35)]"
                    : "border-border bg-bg-elevated"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-teal to-blue px-4 py-1 text-xs font-semibold text-[#06140f]">
                    Most popular
                  </span>
                )}
                <div>
                  <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                  <p className="mt-2 text-sm text-fg-muted">{plan.description}</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-fg-muted">{plan.cadence}</span>
                </div>
                <Button href="/contact" variant={plan.highlighted ? "primary" : "secondary"} className="w-full">
                  {plan.cta}
                </Button>
                <ul className="flex flex-col gap-3 pt-2 border-t border-border">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-fg">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal text-xs">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 border-y border-border bg-bg-elevated/30">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="Questions" title="Pricing FAQs" />
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

      <section className="py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated p-12 sm:p-16 text-center">
            <Glow className="h-[400px] w-[400px] bg-teal/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
                Not sure which tier fits? We&apos;ll help you figure it out.
              </h2>
              <Button href="/contact" size="lg">
                Talk to sales
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
