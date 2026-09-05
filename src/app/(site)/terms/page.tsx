import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { Glow } from "@/components/Glow";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Evolve AI website.",
};

const lastUpdated = "7 July 2026";

export default function TermsPage() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <Glow className="h-[380px] w-[380px] bg-blue/20 -top-32 left-1/3" />
      <Container className="relative pt-20 pb-24 sm:pt-28 max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-fg-faint">Last updated: {lastUpdated}</p>

        <div className="mt-12 flex flex-col gap-10 text-fg-muted leading-relaxed text-base">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of
            theevolveai.com (the &quot;Site&quot;), operated by Evolve AI, a
            UK-based trading business (&quot;Evolve AI,&quot; &quot;we,&quot;
            &quot;us&quot;). By visiting or using the Site, you agree to these
            Terms. If you don&apos;t agree, please don&apos;t use the Site.
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              1. What the Site is for
            </h2>
            <p>
              The Site describes Evolve AI&apos;s AI consulting, automation,
              and product services, and lets visitors get in touch, subscribe
              to updates, and book calls. Content on the Site — including
              descriptions of services, pricing, and case studies — is
              provided for general information and may be updated at any
              time without notice.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              2. Using the Site
            </h2>
            <p>You agree not to:</p>
            <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-teal">
              <li>Use the Site for any unlawful purpose</li>
              <li>Attempt to gain unauthorised access to the Site or its underlying systems</li>
              <li>Submit false or misleading information through any form on the Site</li>
              <li>Use automated tools to scrape or copy content from the Site at scale</li>
              <li>Interfere with the Site&apos;s normal operation</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              3. Intellectual property
            </h2>
            <p>
              The Site&apos;s design, text, graphics, logo, and other content
              are owned by Evolve AI or used under licence, and are protected
              by copyright and other intellectual property laws. You may view
              and share pages of the Site for personal, non-commercial
              purposes, but you may not reproduce, modify, or redistribute
              our content without prior written permission.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              4. Services and engagements
            </h2>
            <p>
              Nothing on the Site constitutes a binding offer to provide
              services. Any actual engagement — consulting work, automation
              builds, or product access — is governed by a separate written
              agreement (such as a proposal, statement of work, or contract)
              signed by both parties, which will take precedence over these
              Terms for that engagement.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              5. Third-party links and services
            </h2>
            <p>
              The Site links to third-party services, including Calendly,
              Zoom, Google Calendar, and social media platforms. We don&apos;t
              control these services and aren&apos;t responsible for their
              content, availability, or how they handle your data. Your use
              of them is subject to their own terms.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              6. No warranties
            </h2>
            <p>
              The Site and its content are provided &quot;as is&quot; without
              warranties of any kind, express or implied. We don&apos;t
              guarantee the Site will be error-free, uninterrupted, or that
              any information on it is complete, accurate, or up to date.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              7. Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by law, Evolve AI will not be
              liable for any indirect, incidental, or consequential damages
              arising from your use of the Site. Nothing in these Terms
              excludes or limits liability for death or personal injury
              caused by negligence, fraud, or any other liability that
              cannot lawfully be excluded.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              8. Changes to these Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of
              the Site after changes are posted means you accept the updated
              Terms. Material changes will be reflected by updating the
              &quot;Last updated&quot; date above.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              9. Governing law
            </h2>
            <p>
              These Terms are governed by the laws of England and Wales, and
              any disputes will be subject to the exclusive jurisdiction of
              the courts of England and Wales.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              10. Contact us
            </h2>
            <p>
              Questions about these Terms can be sent to{" "}
              <a href="mailto:infoevolveai31@gmail.com" className="text-teal hover:underline">
                infoevolveai31@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
