import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import { Glow } from "@/components/Glow";
import { Badge } from "@/components/Badge";
import { services, faqs } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-grid">
        <Glow className="h-[500px] w-[500px] bg-teal/20 -top-40 -left-40" />
        <Glow className="h-[500px] w-[500px] bg-indigo/20 top-20 right-0" />
        <Container className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <Eyebrow>Applied AI Studio</Eyebrow>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Intelligent automation,{" "}
              <span className="text-gradient">built for your business.</span>
            </h1>
            <p className="text-lg sm:text-xl text-fg-muted max-w-2xl leading-relaxed">
              Evolve AI designs, builds, and operates custom AI agents and
              automation for companies who need real results — not another pilot
              project that stalls in committee.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button href="/contact" size="lg">
                Book a strategy call
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                See what we do
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-28">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="From first strategy call to production AI, end to end."
            description="We work as an embedded partner across strategy, engineering, and operations — so AI initiatives ship and keep working."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href="/services"
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-bg-elevated p-6 hover:border-teal/40 transition-colors"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-blue/20 text-teal">
                  <IconDot />
                </div>
                <h3 className="font-display text-lg font-semibold text-fg">{s.name}</h3>
                <p className="text-sm text-fg-muted leading-relaxed">{s.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-teal opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* PRODUCT TEASER */}
      <section className="py-28 border-y border-border bg-bg-elevated/30 overflow-hidden">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Badge>The Evolve AI Platform</Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                One workspace to build, ship, and monitor every AI agent you run.
              </h2>
              <p className="text-fg-muted leading-relaxed">
                Our platform gives your team the same infrastructure our engineers
                use to ship client work — agent orchestration, observability, and
                guardrails, without stitching together a dozen tools.
              </p>
              <ul className="flex flex-col gap-3">
                {["Visual agent builder", "Real-time cost & performance monitoring", "Built-in approval workflows"].map(
                  (f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-fg">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal text-xs">
                        ✓
                      </span>
                      {f}
                    </li>
                  )
                )}
              </ul>
              <div>
                <Button href="/product" variant="secondary">
                  Explore the platform
                </Button>
              </div>
            </div>
            <div className="relative">
              <Glow className="h-[380px] w-[380px] bg-blue/25 top-0 right-0" />
              <div className="relative rounded-2xl border border-border bg-bg-elevated-2 p-2 shadow-2xl animate-float">
                <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/40" />
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div className="h-4 w-2/3 rounded bg-gradient-to-r from-teal/30 to-blue/30" />
                  <div className="grid grid-cols-3 gap-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="h-16 rounded-lg border border-border bg-bg" />
                    ))}
                  </div>
                  <div className="h-24 rounded-lg border border-border bg-bg flex items-center justify-center">
                    <span className="text-xs text-fg-faint">Agent execution trace</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-8 flex-1 rounded-full bg-bg border border-border" />
                    <div className="h-8 w-20 rounded-full bg-gradient-to-r from-teal to-blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-28">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
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

      {/* CTA */}
      <section className="pb-28">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated p-12 sm:p-16 text-center">
            <Glow className="h-[400px] w-[400px] bg-teal/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
                Ready to see where AI actually moves the needle for you?
              </h2>
              <p className="text-fg-muted max-w-xl">
                Book a 30-minute strategy call. We&apos;ll come with a point of view, not a sales script.
              </p>
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

function IconDot() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="3" fill="currentColor" />
    </svg>
  );
}
