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
    slug: "ai-strategy",
    name: "AI Strategy & Roadmapping",
    summary: "Find the highest-leverage places to apply AI in your business, backed by a plan your team can actually execute.",
    description:
      "We start every engagement with a deep audit of your workflows, data, and tooling. You get a prioritized roadmap that ranks opportunities by ROI and feasibility, not hype.",
    bullets: [
      "Process & data readiness audit",
      "Opportunity sizing and ROI modeling",
      "12-month implementation roadmap",
      "Build vs. buy recommendations",
    ],
    icon: "compass",
  },
  {
    slug: "custom-automation",
    name: "Custom Automation & Agents",
    summary: "Bespoke AI agents and workflow automation that plug into your existing stack and remove manual work at the root.",
    description:
      "Our engineers design and ship production-grade automations — from document processing to autonomous multi-step agents — tailored to your systems, not a generic template.",
    bullets: [
      "Workflow mapping and automation design",
      "Custom agent development",
      "Integration with your CRM, ERP, and internal tools",
      "Human-in-the-loop safety controls",
    ],
    icon: "cpu",
  },
  {
    slug: "model-integration",
    name: "Model Integration & Fine-Tuning",
    summary: "Get the most out of foundation models with retrieval, fine-tuning, and evaluation pipelines built for reliability.",
    description:
      "We help you choose the right models, ground them in your own data with retrieval and fine-tuning, and build evaluation harnesses so quality holds up in production.",
    bullets: [
      "Model selection and benchmarking",
      "RAG pipelines and vector infrastructure",
      "Fine-tuning on proprietary data",
      "Evaluation and guardrail frameworks",
    ],
    icon: "layers",
  },
  {
    slug: "managed-support",
    name: "Managed Support & Optimization",
    summary: "Ongoing monitoring, tuning, and iteration so your AI systems keep improving after launch.",
    description:
      "AI systems aren't a one-and-done deploy. Our managed support keeps models, prompts, and automations tuned as your data and business evolve.",
    bullets: [
      "Performance monitoring and alerting",
      "Monthly optimization sprints",
      "Cost and latency tuning",
      "Dedicated Slack channel with our engineers",
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
    name: "Starter",
    price: "$4,500",
    cadence: "/month",
    description: "For teams testing their first AI automation with expert guidance.",
    features: [
      "1 active automation workflow",
      "Bi-weekly strategy sessions",
      "Slack support",
      "Monthly performance reporting",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    price: "$12,000",
    cadence: "/month",
    description: "For companies scaling AI across multiple teams and workflows.",
    features: [
      "Up to 5 active workflows / agents",
      "Dedicated engineering pod",
      "Weekly strategy sessions",
      "Custom model fine-tuning",
      "Priority Slack + on-call support",
    ],
    cta: "Start with Growth",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For organizations that need dedicated AI infrastructure and governance.",
    features: [
      "Unlimited workflows and agents",
      "On-prem / VPC deployment options",
      "Custom security & compliance review",
      "Dedicated account team",
      "Quarterly executive business reviews",
    ],
    cta: "Talk to sales",
  },
];

export const productFeatures = [
  {
    title: "Unified agent workspace",
    description: "Build, test, and deploy AI agents from a single visual canvas — no fragmented tooling.",
    icon: "layout",
  },
  {
    title: "Native integrations",
    description: "Connect to your CRM, data warehouse, and internal APIs in minutes with pre-built connectors.",
    icon: "plug",
  },
  {
    title: "Real-time observability",
    description: "Trace every agent decision, token, and tool call with full replay for debugging and audits.",
    icon: "activity",
  },
  {
    title: "Guardrails by default",
    description: "Policy controls, PII redaction, and approval gates ship on by default, not bolted on later.",
    icon: "shield-check",
  },
  {
    title: "Version-controlled prompts",
    description: "Treat prompts and agent configs like code — diff, review, and roll back with confidence.",
    icon: "git-branch",
  },
  {
    title: "Usage-based cost controls",
    description: "Set budgets per workflow and get alerted before costs run away.",
    icon: "gauge",
  },
];

export const faqs = [
  {
    question: "How long does a typical engagement take?",
    answer:
      "Most engagements move from kickoff to a first production deployment in 6-10 weeks, depending on data readiness and integration complexity. We scope this precisely during our discovery phase.",
  },
  {
    question: "Do we need clean data before starting?",
    answer:
      "No. Part of our process includes a data readiness audit, and we frequently build the pipelines needed to get your data into a usable state as part of the engagement.",
  },
  {
    question: "Can you work with our existing tech stack?",
    answer:
      "Yes — we design around your existing systems rather than asking you to rip and replace. Our team has integrated with most major CRMs, data warehouses, and internal tooling.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every engagement includes a support and optimization phase. Many clients move to our Managed Support retainer to keep systems tuned as their business evolves.",
  },
  {
    question: "Is our data used to train external models?",
    answer:
      "Never. Your data stays within your environment or a dedicated, isolated instance, and is never used to train third-party foundation models.",
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
    title: "When to build vs. buy your AI stack",
    excerpt:
      "A practical framework for deciding when a custom agent is worth the investment versus an off-the-shelf tool.",
    date: "2026-06-02",
    readTime: "7 min read",
    category: "Strategy",
    content: [
      "The build-vs-buy question comes up in nearly every AI strategy conversation we have, and the honest answer is usually 'it depends' — but that's not very actionable.",
      "In practice, we've found three questions predict the right call better than anything else: how differentiated is this workflow to your business, how sensitive is the underlying data, and how fast does the tool landscape in this category move.",
      "If a workflow is core to your competitive advantage, involves sensitive proprietary data, or needs to evolve faster than vendor roadmaps typically move, custom development usually wins on a 12-18 month horizon — even though it costs more upfront.",
      "For everything else, a well-integrated off-the-shelf tool is almost always the faster, cheaper path, and trying to build custom here is one of the most common ways teams waste a year of engineering time.",
    ],
  },
  {
    slug: "grounding-llms-in-your-data",
    title: "Grounding LLMs in your data without losing your mind",
    excerpt:
      "RAG, fine-tuning, and hybrid approaches explained — with a decision tree for picking the right one.",
    date: "2026-05-14",
    readTime: "9 min read",
    category: "Engineering",
    content: [
      "Retrieval-augmented generation gets recommended as a default so often that teams forget it's a tool with real tradeoffs, not a universal fix.",
      "RAG shines when your underlying facts change frequently and you need traceability back to a source document. Fine-tuning shines when you need the model to reliably follow a specific style, format, or domain-specific reasoning pattern.",
      "Most production systems we build end up using both: RAG for facts, light fine-tuning or few-shot examples for behavior. The mistake we see most often is trying to solve a behavior problem with more retrieved context.",
      "Before reaching for either, build an evaluation set. Without one, you're optimizing based on vibes, and vibes don't scale past a demo.",
    ],
  },
  {
    slug: "governance-that-doesnt-slow-you-down",
    title: "AI governance that doesn't slow your team down",
    excerpt:
      "How to put guardrails around AI systems without turning every project into a six-month compliance review.",
    date: "2026-04-22",
    readTime: "6 min read",
    category: "Operations",
    content: [
      "Governance gets treated as the enemy of shipping speed, but the teams that move fastest with AI long-term are usually the ones with the clearest guardrails, not the least.",
      "The key is building governance into the system itself — approval gates, PII redaction, and audit trails as default infrastructure — rather than as a review process bolted on at the end.",
      "When guardrails are automatic, review committees can focus on genuinely novel risk instead of relitigating the same access questions for every new workflow.",
      "Start with a short list of non-negotiables (data handling, human review thresholds, escalation paths) and automate enforcement of those before you worry about anything else.",
    ],
  },
];
