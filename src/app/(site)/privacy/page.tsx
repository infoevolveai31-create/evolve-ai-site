import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { Glow } from "@/components/Glow";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Evolve AI collects, uses, and protects your information.",
};

const lastUpdated = "7 July 2026";

export default function PrivacyPage() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <Glow className="h-[380px] w-[380px] bg-teal/20 -top-32 left-1/3" />
      <Container className="relative pt-20 pb-24 sm:pt-28 max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-fg-faint">Last updated: {lastUpdated}</p>

        <div className="mt-12 flex flex-col gap-10 text-fg-muted leading-relaxed text-base">
          <p>
            Evolve AI (&quot;Evolve AI,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) operates theevolveai.com (the &quot;Site&quot;). This
            policy explains what information we collect when you use the Site,
            why we collect it, and the choices you have. Evolve AI is
            UK-based and operated as an individual trading business, and this
            policy is written with UK data protection law (UK GDPR and the
            Data Protection Act 2018) in mind.
          </p>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              1. Information we collect
            </h2>
            <p>We collect information directly from you in three ways:</p>
            <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-teal">
              <li>
                <span className="text-fg font-medium">Contact form.</span> When
                you submit the contact form on the Site, we collect your
                name, work email address, company name (optional), and
                whatever message you write.
              </li>
              <li>
                <span className="text-fg font-medium">Newsletter signup.</span>{" "}
                When you subscribe via the footer form, we collect your email
                address.
              </li>
              <li>
                <span className="text-fg font-medium">Booking a call.</span> If
                you click through to book a strategy call, you leave
                theevolveai.com and interact directly with Calendly, Zoom, and
                Google Calendar, each of which collects information under
                their own privacy policies. We only receive the booking
                details (your name, email, and selected time) after you
                complete a booking.
              </li>
            </ul>
            <p>
              We also collect limited, aggregated analytics about how the
              Site is used, described in Section 3 below.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              2. How we use your information
            </h2>
            <p>We use the information collected to:</p>
            <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-teal">
              <li>Respond to enquiries submitted through the contact form</li>
              <li>Send occasional updates to newsletter subscribers, which you can unsubscribe from at any time</li>
              <li>Schedule and conduct booked calls</li>
              <li>Understand aggregate Site usage so we can improve it</li>
              <li>Meet legal and accounting obligations</li>
            </ul>
            <p>
              We do not sell your personal information, and we do not use it
              for advertising or profiling.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              3. Analytics
            </h2>
            <p>
              The Site uses Vercel Web Analytics to understand aggregate page
              views and traffic trends. This analytics tool does not use
              cookies and does not track you individually across sites — it
              reports anonymised, aggregated counts (for example, how many
              people visited the Pricing page this week). We do not combine
              this data with any personal information you submit through
              forms.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              4. Who we share information with
            </h2>
            <p>
              We use a small number of third-party services to operate the
              Site. Each processes data only as needed to provide their
              service to us:
            </p>
            <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-teal">
              <li>
                <span className="text-fg font-medium">FormSubmit</span> —
                relays contact form and newsletter submissions to our email
                inbox.
              </li>
              <li>
                <span className="text-fg font-medium">Vercel Inc.</span> —
                hosts the Site and provides the analytics described above.
              </li>
              <li>
                <span className="text-fg font-medium">
                  Calendly, Zoom, and Google
                </span>{" "}
                — power the optional call-booking flow, if you choose to use
                it.
              </li>
            </ul>
            <p>
              We do not share your information with any other third party for
              their own marketing purposes.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              5. Data retention
            </h2>
            <p>
              We keep contact form submissions and newsletter subscriptions
              for as long as reasonably necessary to respond to your enquiry
              or maintain the subscription, and delete or anonymise them when
              no longer needed. You can ask us to delete your data at any
              time (see Section 7).
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              6. Cookies
            </h2>
            <p>
              theevolveai.com itself does not set tracking or advertising
              cookies. If you follow a link to a third-party service (Calendly,
              Zoom, Google), that service may set its own cookies under its
              own policy.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              7. Your rights
            </h2>
            <p>Under UK data protection law, you have the right to:</p>
            <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-teal">
              <li>Ask what personal information we hold about you</li>
              <li>Ask us to correct inaccurate information</li>
              <li>Ask us to delete your information</li>
              <li>Object to or restrict how we use your information</li>
              <li>Withdraw consent (e.g. unsubscribe from the newsletter) at any time</li>
            </ul>
            <p>
              To exercise any of these rights, email{" "}
              <a href="mailto:infoevolveai31@gmail.com" className="text-teal hover:underline">
                infoevolveai31@gmail.com
              </a>
              . If you&apos;re not satisfied with our response, you have the
              right to complain to the UK Information Commissioner&apos;s
              Office (ICO) at ico.org.uk.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              8. Children&apos;s privacy
            </h2>
            <p>
              The Site is intended for business use and is not directed at
              children. We do not knowingly collect information from anyone
              under 16.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              9. Changes to this policy
            </h2>
            <p>
              We may update this policy from time to time. Material changes
              will be reflected by updating the &quot;Last updated&quot; date
              above.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-fg">
              10. Contact us
            </h2>
            <p>
              Questions about this policy or your data can be sent to{" "}
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
