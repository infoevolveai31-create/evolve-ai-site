import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { Glow } from "@/components/Glow";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Evolve AI to discuss AI strategy, automation, or platform access.",
};

const info = [
  { label: "Email", value: "infoevolveai31@gmail.com" },
  { label: "Phone", value: "+44 7443 807373" },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <Glow className="h-[420px] w-[420px] bg-teal/20 -top-32 left-1/4" />
      <Container className="relative pt-20 pb-24 sm:pt-28">
        <div className="max-w-2xl">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
            Let&apos;s talk about what AI could actually do for you.
          </h1>
          <p className="mt-6 text-lg text-fg-muted leading-relaxed">
            Book a 30-minute strategy call, or send a note below and we&apos;ll
            follow up within one business day.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-2xl border border-border bg-bg-elevated p-8">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-bg-elevated p-8">
              <h3 className="font-display text-lg font-semibold mb-4">Book directly</h3>
              <p className="text-sm text-fg-muted leading-relaxed mb-5">
                Prefer to skip the form? Grab a slot on our calendar for a
                30-minute strategy call with our team.
              </p>
              <a
                href="https://calendly.com/infoevolveai31/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-border bg-bg px-6 py-3 text-sm font-medium text-fg hover:border-teal/50 transition-colors"
              >
                View available times
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-bg-elevated p-8 flex flex-col gap-4">
              <h3 className="font-display text-lg font-semibold">Other ways to reach us</h3>
              {info.map((i) => (
                <div key={i.label} className="flex flex-col gap-0.5">
                  <span className="text-xs uppercase tracking-wide text-fg-faint">{i.label}</span>
                  <span className="text-sm text-fg">{i.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
