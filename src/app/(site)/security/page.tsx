import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { Glow } from "@/components/Glow";

export const metadata: Metadata = {
  title: "Security",
  description: "How Evolve AI approaches security for theevolveai.com and client data.",
};

const lastUpdated = "7 July 2026";

export default function SecurityPage() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <Glow className="h-[380px] w-[380px] bg-indigo/20 -top-32 left-1/3" />
      <Container className="relative pt-20 pb-24 sm:pt-28 max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
          Security
        </h1>
        <p className="mt-4 text-sm text-fg-faint">Last updated: {lastUpdated}</p>

        <div className="mt-12 flex flex-col gap-10 text-fg-muted leading-relaxed text-base">
          <p>
            This page explains, in plain terms, how theevolveai.com is hosted
            and how information submitted through the Site is handled. If
            you&apos;re evaluating Evolve AI for a project involving your own
            systems or data, we&apos;re happy to go deeper on any of this
            during a call.
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              1. Hosting and infrastructure
            </h2>
            <p>
              The Site is hosted on Vercel, with automatic SSL/TLS
              encryption, so all traffic between your browser and the Site is
              encrypted in transit (look for the padlock and https:// in your
              browser). The Site is served over Vercel&apos;s global edge
              network, which includes standard protections against common
              web attacks and traffic spikes.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              2. How form submissions are handled
            </h2>
            <p>
              Contact form and newsletter submissions are sent over an
              encrypted connection to FormSubmit, which relays them directly
              to our email inbox. We don&apos;t operate our own database of
              form submissions — there isn&apos;t a separate server or
              database on our side holding this data, which limits our own
              exposure if any single system were compromised.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              3. Third-party processors
            </h2>
            <p>
              We rely on established providers rather than building our own
              infrastructure for things like hosting, forms, scheduling, and
              video calls. Each maintains its own security program:
            </p>
            <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-teal">
              <li>
                <span className="text-fg font-medium">Vercel Inc.</span> —
                hosting, TLS, analytics
              </li>
              <li>
                <span className="text-fg font-medium">FormSubmit</span> —
                form-to-email relay
              </li>
              <li>
                <span className="text-fg font-medium">Calendly</span> —
                scheduling
              </li>
              <li>
                <span className="text-fg font-medium">Zoom</span> — video
                calls
              </li>
              <li>
                <span className="text-fg font-medium">Google</span> —
                calendar sync
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              4. Access control
            </h2>
            <p>
              Access to the accounts that operate the Site (hosting,
              domain, email) is restricted to Evolve AI directly. We don&apos;t
              share these credentials with third parties, and we review
              account access periodically.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              5. Reporting a security issue
            </h2>
            <p>
              If you believe you&apos;ve found a security vulnerability on
              theevolveai.com, please email{" "}
              <a href="mailto:infoevolveai31@gmail.com" className="text-teal hover:underline">
                infoevolveai31@gmail.com
              </a>{" "}
              with details. We&apos;ll acknowledge reports promptly and work
              to address genuine issues as quickly as we can. Please give us
              a reasonable opportunity to investigate and fix an issue before
              disclosing it publicly.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              6. Changes to this page
            </h2>
            <p>
              We may update this page as our practices or vendors change.
              Material changes will be reflected by updating the &quot;Last
              updated&quot; date above.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
