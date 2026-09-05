import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Eyebrow, SectionHeading } from "@/components/SectionHeading";
import { Glow } from "@/components/Glow";

export const metadata: Metadata = {
  title: "About",
  description: "Why EVOLVE AI exists: to help online coaches stop leaking clients and fill their calendars.",
};

const values = [
  { title: "Booked calls over vanity", description: "We measure success in calls on your calendar, not likes or follower counts." },
  { title: "Honest about the problem", description: "If your issue is the offer, not the funnel, we'll tell you — even if it costs us the deal." },
  { title: "Done-for-you, done right", description: "We build systems you own and understand, wired into the tools you already use." },
  { title: "Coaches only", description: "We work with online coaches. That focus is why our funnels convert." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <Glow className="h-[420px] w-[420px] bg-indigo/20 -top-32 right-1/4" />
        <Container className="relative pt-20 pb-20 sm:pt-28">
          <div className="max-w-3xl">
            <Eyebrow>About EVOLVE AI</Eyebrow>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              We started EVOLVE AI because coaches keep leaking clients.
            </h1>
            <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-2xl">
              Great coaches get plenty of attention — and lose most of it between
              the post and the booked call. We build the funnel systems that catch
              those leads and turn them into clients, so coaches can coach instead
              of chasing DMs.
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
                Help online coaches turn the audience they already have into a full,
                predictable calendar of booked calls — without posting more.
              </p>
              <p className="text-fg-muted leading-relaxed">
                Every funnel we build is judged on one thing: does it put more of the
                right calls on your calendar? If it doesn&apos;t, it isn&apos;t done.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">Our story</h2>
              <p className="text-fg-muted leading-relaxed">
                EVOLVE AI started from a simple pattern we kept seeing: talented
                coaches doing everything right on content, yet stuck with a
                half-empty calendar. The problem was never reach — it was the
                missing system between an interested follower and a booked call.
              </p>
              <p className="text-fg-muted leading-relaxed">
                So we built that system, and now we build it for coaches around the
                world — fitness, business, mindset, and life — documenting the whole
                process in public as we go.
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
                Ready to stop leaking clients?
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
