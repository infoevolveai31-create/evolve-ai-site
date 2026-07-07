import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import { Glow } from "@/components/Glow";
import { Badge } from "@/components/Badge";
import { productFeatures } from "@/lib/data";

export const metadata: Metadata = {
  title: "Product",
  description: "The Evolve AI platform: build, ship, and monitor AI agents from one workspace.",
};

const integrations = ["Salesforce", "HubSpot", "Slack", "Snowflake", "Zendesk", "Notion", "Postgres", "SAP"];

export default function ProductPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <Glow className="h-[460px] w-[460px] bg-blue/20 -top-40 right-0" />
        <Container className="relative pt-20 pb-16 sm:pt-28">
          <div className="max-w-3xl">
            <Eyebrow>The Evolve AI Platform</Eyebrow>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              The workspace behind every agent we ship.
            </h1>
            <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-2xl">
              Build, evaluate, and operate AI agents with the same infrastructure
              our engineers use for client work — orchestration, observability,
              and guardrails included.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Request a demo
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                View pricing
              </Button>
            </div>
          </div>

          <div className="relative mt-16 rounded-2xl border border-border bg-bg-elevated-2 p-2 shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/40" />
              <span className="ml-3 text-xs text-fg-faint">app.evolveai.com/workspace</span>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-4">
              <div className="sm:col-span-1 flex flex-col gap-2">
                {["Agents", "Workflows", "Evaluations", "Integrations", "Settings"].map((n, i) => (
                  <div
                    key={n}
                    className={`rounded-lg px-3 py-2 text-xs ${
                      i === 0 ? "bg-gradient-to-r from-teal/20 to-blue/20 text-fg" : "text-fg-muted"
                    }`}
                  >
                    {n}
                  </div>
                ))}
              </div>
              <div className="sm:col-span-3 flex flex-col gap-3">
                <div className="h-4 w-1/3 rounded bg-gradient-to-r from-teal/30 to-blue/30" />
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="h-20 rounded-lg border border-border bg-bg" />
                  ))}
                </div>
                <div className="h-40 rounded-lg border border-border bg-bg p-4">
                  <div className="h-full w-full rounded border border-dashed border-border flex items-center justify-center">
                    <span className="text-xs text-fg-faint">Live agent execution graph</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything you need to run AI in production"
            description="Not a prototyping toy — infrastructure built to survive real usage, real edge cases, and real audits."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productFeatures.map((f) => (
              <div key={f.title} className="flex flex-col gap-4 rounded-2xl border border-border bg-bg-elevated p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-indigo/20 text-teal">
                  <span className="h-2.5 w-2.5 rounded-full bg-current" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-fg-muted leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 border-y border-border bg-bg-elevated/30">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Badge>Works with your stack</Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Pre-built connectors for the tools you already run.
              </h2>
              <p className="text-fg-muted leading-relaxed">
                Connect in minutes, not sprints. And if you use something niche,
                our SDK makes custom connectors straightforward to build.
              </p>
              <div>
                <Button href="/contact" variant="secondary">
                  See all integrations
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {integrations.map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-center rounded-xl border border-border bg-bg-elevated py-6 text-sm font-medium text-fg-muted"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-elevated p-12 sm:p-16 text-center">
            <Glow className="h-[400px] w-[400px] bg-teal/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
                See the platform on your own data.
              </h2>
              <p className="text-fg-muted max-w-xl">
                We&apos;ll walk through a live workspace and show how a real workflow of yours could run on it.
              </p>
              <Button href="/contact" size="lg">
                Request a demo
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
