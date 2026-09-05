export type Service = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  bullets: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "funnel-build",
    name: "Funnel & Landing Pages",
    summary:
      "One clear page that turns a viewer into a lead — instead of a link-in-bio maze that loses most of them.",
    description:
      "We build the page your interested followers actually land on: one promise, one offer, one button. Designed to convert coaching traffic into booked calls, not just look pretty.",
    bullets: [
      "High-converting landing / opt-in page",
      "One clear offer and call-to-action",
      "Mobile-first, fast-loading design",
      "Wired to your booking calendar",
    ],
    icon: "compass",
  },
  {
    slug: "lead-capture",
    name: "Lead Capture & Booking",
    summary:
      "A booking flow that fills your calendar in two taps — no DM ping-pong, no lost leads.",
    description:
      "We connect your funnel to a real booking system so interested coaches can grab a time instantly. Automated reminders cut no-shows and keep your calendar full.",
    bullets: [
      "Instant calendar booking (Calendly / GHL)",
      "Automated SMS + email reminders",
      "Lead details captured to one place",
      "No-show recovery built in",
    ],
    icon: "cpu",
  },
  {
    slug: "follow-up",
    name: "Follow-up Automation",
    summary:
      "Automated follow-up that closes the 80% who don't say yes on day one — while you sleep.",
    description:
      "Most coaching income hides in the follow-up nobody sends. We build the automated sequences that keep working every lead until they book, without you touching your phone.",
    bullets: [
      "Instant reply the second a lead comes in",
      "Multi-step email + DM follow-up",
      "Keyword automations (\"CLIENTS\" → booking link)",
      "Re-engagement for cold leads",
    ],
    icon: "layers",
  },
  {
    slug: "optimization",
    name: "Ongoing Optimization",
    summary:
      "We watch the numbers and keep tuning your funnel so booked calls go up month after month.",
    description:
      "A funnel isn't set-and-forget. We track where leads drop off, test new hooks and pages, and keep improving your conversion so the same audience books more calls over time.",
    bullets: [
      "Conversion tracking & reporting",
      "A/B testing of pages and hooks",
      "Monthly optimization sprints",
      "Direct line to us when you need it",
    ],
    icon: "shield",
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free Funnel Audit",
    price: "Free",
    cadence: "",
    description: "See exactly where you're losing clients — no pitch, no pressure.",
    features: [
      "Full teardown of your current funnel",
      "The exact leaks costing you calls",
      "A prioritized fix list",
      "A clear plan to book more calls",
    ],
    cta: "Get your free audit",
  },
  {
    name: "Done-For-You Funnel",
    price: "From $1,500",
    cadence: "one-off build",
    description: "We build your full client-getting machine, end to end.",
    features: [
      "Landing / opt-in page that converts",
      "Booking flow + automated reminders",
      "Follow-up automation sequences",
      "Instagram DM keyword automation",
      "Live in 2–3 weeks",
    ],
    cta: "Book a call",
    highlighted: true,
  },
  {
    name: "Growth Partner",
    price: "From $900",
    cadence: "/month",
    description: "We run and optimize your funnel so booked calls keep climbing.",
    features: [
      "Everything in Done-For-You",
      "Monthly optimization & testing",
      "Conversion tracking & reporting",
      "New campaigns & offers as you grow",
      "Priority support",
    ],
    cta: "Talk to us",
  },
];

export const productFeatures = [
  {
    title: "Attract",
    description:
      "Content and ad support that gets the right coaches watching — not just anyone who scrolls by.",
    icon: "layout",
  },
  {
    title: "Capture",
    description:
      "One landing page that turns a viewer into a lead. One offer, one button, zero confusion.",
    icon: "plug",
  },
  {
    title: "Convert",
    description:
      "A booking flow that fills your calendar in two taps, with reminders that kill no-shows.",
    icon: "activity",
  },
  {
    title: "Follow-up",
    description:
      "Automated sequences that close the 80% who don't book on day one — while you sleep.",
    icon: "shield-check",
  },
  {
    title: "Track",
    description:
      "See where every lead comes from and where they drop off, so nothing leaks unnoticed.",
    icon: "git-branch",
  },
  {
    title: "Optimize",
    description:
      "We keep testing hooks, pages, and offers so the same audience books more calls over time.",
    icon: "gauge",
  },
];

export const faqs = [
  {
    question: "Do I need more followers first?",
    answer:
      "No. This is built to convert the audience you already have. If you're getting engagement but not enough booked calls, you have enough traffic — you have a leak.",
  },
  {
    question: "What exactly do you build?",
    answer:
      "A landing page that captures leads, a booking flow that fills your calendar, and automated follow-up that closes the people who don't book on day one — done for you and wired into the tools you already use.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most coach funnels go live in 2–3 weeks, depending on how much content and offer detail we start with. The free audit happens within days of reaching out.",
  },
  {
    question: "What kind of coaches is this for?",
    answer:
      "Online coaches — fitness, business, mindset, life — who are getting attention but leaking clients between the post and the booked call.",
  },
  {
    question: "What does it cost?",
    answer:
      "The funnel audit is free. Build and retainer pricing depends on scope — we cover it on the call once we've seen your setup. No obligation.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "when-to-build-vs-buy-ai",
    title: "Why more followers won't get you more coaching clients",
    excerpt:
      "The uncomfortable truth: most coaches don't have a traffic problem. They have a leak problem. Here's where the clients actually go.",
    date: "2026-09-02",
    readTime: "6 min read",
    category: "Growth",
    content: [
      "Almost every coach who comes to us opens with the same line: 'I need more followers, more reach, more content.' Then we look at their numbers and the problem is never at the top of the funnel.",
      "You already get people interested. The failure happens after — in the gap between 'interested' and 'booked.' Slow replies. A link-in-bio maze. No booking page. No follow-up. That's where your next clients are quietly disappearing.",
      "Run the math: 100 people see your post, 40 click, and 2 book. Fix the path between the click and the calendar and those same 40 turn into 8 booked calls. Same audience, four times the clients.",
      "More reach is the expensive fix. Plugging the leak is the fast one — because the hard part, earning attention, you've already done.",
    ],
  },
  {
    slug: "grounding-llms-in-your-data",
    title: "The Coach Client Machine: the 4 parts of a full calendar",
    excerpt:
      "Attract, Capture, Convert, Follow-up. Miss one and clients leak out. Here's how the whole system fits together.",
    date: "2026-08-20",
    readTime: "7 min read",
    category: "Systems",
    content: [
      "Every coach with a full calendar runs four parts together. Most coaches run only one — they make content — and wonder why the clients don't come.",
      "Attract gets the right people watching. Capture turns a viewer into a lead on one clear page. Convert fills your calendar with a real booking flow. Follow-up closes the majority who don't say yes on day one.",
      "The parts only work connected. Attract without Capture is wasted reach. Convert without Follow-up is lost clients. A leak in any one and the whole machine underperforms.",
      "The good news: you probably already have Attract handled. Build the other three once and the content you're already posting starts filling your calendar.",
    ],
  },
  {
    slug: "governance-that-doesnt-slow-you-down",
    title: "Speed to lead: why the first 5 minutes decide the sale",
    excerpt:
      "A lead is 21x more likely to book if you reply in 5 minutes instead of 5 hours. Here's how to win that window automatically.",
    date: "2026-08-06",
    readTime: "5 min read",
    category: "Automation",
    content: [
      "When someone raises their hand for your coaching, they are never more ready to buy than in that first moment. Wait three hours to reply and they've cooled off — or booked with a coach who answered first.",
      "The data is brutal: reach a lead within five minutes and they're up to 21 times more likely to convert than if you wait an hour. Most coaches reply in hours, if at all.",
      "You don't have to live on your phone to win this. One automation sends an instant, personal-feeling reply the second a lead comes in — and hands them a link to book while they're still hot.",
      "Set it up once and it runs forever. Same leads, far more booked calls, zero extra effort from you.",
    ],
  },
];
